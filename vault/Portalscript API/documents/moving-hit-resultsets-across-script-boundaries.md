---
title: "Moving HitResultsets across script boundaries | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/moving-hit-resultsets-across-script-boundaries.html"
---

# Moving HitResultsets across script boundaries


## Motivation

Like any other object a HitResultset usually dies when
the script, which created it, terminates execution.
The object is bound to a single scripting environment and cannot
simply be passed around.

In a few cases it appears desirable to transfer such an object
into a different scripting environment.
Typical cases are the following.

- A job script may be designed to stop processing after some time to avoid blocking other important jobs. If the script uses a HitResultset with a long creation time period, it makes sense to keep this object alive for further runs of the same job until all hits are processed. This strategy reduces the frequency of slow search queries.
- A Gadget script might use a HitResultset to collect some
data for a page by page presentation. This works more efficient, if the script can reuse a HitResultset from a former run for browsing.
- A Script may want to pass an existing HitResultset into an asynchronous ScriptCall for further processing.

The internal data of a HitResultset is quite extensive.
A complete serialization into a JSON string would be inefficient. A different transfer
mechanism is required.


## About the side buffer

DOCUMENTS 6.0 (and newer) provides a side buffer for HitResultsets.
Inserting a HitResultset into this buffer atomically detaches
it from the actual scripting environment. Any later attempt
to access the same JavaScript object would throw an exception.
Also descendant DocHit objects become invalid.

 Within the buffer, however, the object can outlive the
end of the script run. The same or another script can later
reintegrate the object into the new environment.
Reintegration atomically removes the
object from the buffer. Parallel script runs can never
access the same object at the same time.

Beside the data of the HitResultset each side buffer element
has got a unique id and an expiration timestamp.
On object insertion both values are assigned. They are immutable afterwards.

The id is simply an access key of the object.

DOCUMENTS requires the expiration timestamp to
provide a minimal protection against memory leakage.
A background job regularly scans the buffer and deletes
expired elements. Spuriously the insertion function
also performs a cleanup.
**Nevertheless script developers must take care about
memory usage by the buffer content.**
It is quite easy to flood the server's memory with side buffer objects
until nothing works anymore.


## Using the side buffer

The member function (or prototype function), which moves an object into the side buffer is:

`String HitResultset.putAside(number lifetime, String id)`.

 It can generate an id for the buffer element, but the caller
may also pass an own id. If the passed id is not empty and if it is unique within the scope
of the actual DOCUMENTS principal, it will be used and returned.

 The function distinguishes between mandatory ids and
proposed ids. A mandatory id begins with an exclamation mark.
Id-collisions are handled in the following way.

- If a mandatory id is already assigned, the function fails and returns an empty string. The HitResultset remains accessible in this case.
- If a proposed id is already assigned, the function modifies or replaces it and returns a valid new id.

The lifetime parameter must be an integer number between 1
(1 second) and 7200 (two hours).  Values outside this range
make the function throw an error.


 Any script, which knows the correct id and which operates for the
same principal and user, can reintegrate the buffer
object into its own environment.  The responsible function is:

`HitResultset HitResultset.reintegrate(String id)`.

It is a classoperation (in other words: a property of
the constructor, none of the prototype). The function returns `null`,
if the buffer contains no object with the passed id, or if the
object belongs to a different user.

However, a script running in "super mode" can steal foreign
user's objects from the buffer.


## Examples


### 1. Passing a HitResultSet into a ScriptCall


```
//
// The calling script (SideBufferDemoSender)
//
const loggingPrefix = "SideBufferExample (sender): ";
if(context.currentUser == "")
 throw new Error(loggingPrefix + "Not running under a user account");

// Create a HitResultset
var hrs = new HitResultset("Typentest", "", "", "System");

// Do some short processing on hrs
// (simulated by a simple log output)
for(let dh of hrs)
{
 util.out(loggingPrefix + "processing id " + dh.getFileId());
}

// Move hrs into  the side buffer, making it unaccessible from here.
var idOfHRS = hrs.putAside(60);

// Prepare a script call for an asynchronous second processing cycle.
// Instead of hrs we can pass its id in the side buffer.
var scriptCall = new ScriptCall(context.currentUser, "SideBufferDemoReceiver", false);
scriptCall.addParameter("resultsetId", idOfHRS);
if (!scriptCall.launch())
  util.out(scriptCall.getLastError());
```


```
//
// The called script (SideBufferDemoReceiver)
//
const loggingPrefix = "SideBufferExample (receiver): ";

// Take the indirectly passed HitResultset out of the side buffer
var hrs = HitResultset.reintegrate(resultsetId);
if(hrs)
{
 // Do some background processing on hrs
 // (simulated by a simple log output)
 for(let dh of hrs)
 {
  util.out(loggingPrefix + "processing id " + dh.getFileId());
 }
}
else
{
 util.out(loggingPrefix + "The HitResultset is lost in space?");
}
```


### 2. A "fair" job script


```
//
// DOCUMENTS 6.0 scripting example "FairJob.js"
//
// This job script shall interrupt its work after a fixed
// period of time to allow other jobs start at their
// scheduled time (in other words: be fair to other jobs).
//
const jobHRSguId = "!FairJob-FA475C7F-5742-4B78-B0CF-64F7666A8924";
const jobTimeSlice = 5000; // unit: milliseconds
const jobNamePrefix = "FairJob: ";
context.changeScriptUser("schreiber"); // job user
var errorFromHRS = "";


var stopAt = Date.now() + jobTimeSlice;
var isContinuation = false;

// Check, if there is already a HitResultset
// stored in the side buffer by the previous job run.
// If not, start with a new HitResultset.
var myHRS = HitResultset.reintegrate(jobHRSguId);
if (myHRS)
{
 isContinuation = true;
 util.out(jobNamePrefix + "continuing with HitResultset from previous execution");
}
else
{
 util.out(jobNamePrefix + "starting with new HitResultset");
 myHRS = new HitResultset("Typentest", "", "");
 errorFromHRS = myHRS.getLastError();
 if (errorFromHRS != "")
  myHRS = null;
}

if (myHRS)
{
 // Process DocFiles until all done
 // or until the actual jobTimeSlice has elapsed.
 // (After creating a new HitResultset the time
 //  may already be exceeded. Then the the whole
 //  processing will be deferred until the next job run.)
 let numberProcessed = 0;
 let myDocHit = isContinuation ? myHRS.next() : myHRS.first();
 while (myDocHit)
 {
  doBigProcessing(myDocHit);
  ++ numberProcessed;
  if (Date.now() >= stopAt)
   break;
  myDocHit = myHRS.next();
 }
 util.out(jobNamePrefix + numberProcessed + " DocFiles processed this time");

 if (myDocHit)
 {
  // Processing has not finished, but the
  // actual processing time is over.
  // Now move myHRS into the side buffer for later reuse.
  //
  // This example uses a "mandatory id".
  let checkId = myHRS.putAside(20*60, jobHRSguId);
  if (checkId == jobHRSguId)
  {
   // Caution: The objects actually contained in the variables
   // myHRS and myDocHit are now unusable!
   util.out(jobNamePrefix + " stored HirResultset in side buffer for next run");
  } else {
   util.out(jobNamePrefix + " ERROR on storing HitResultset in side buffer!\r\n" +
    "Is the job script accidentally running twice at the same time ???");
  }
 }
 else
 {
  util.out(jobNamePrefix + "reached end of HitResultset");
 }
}
else
{
 util.out(jobNamePrefix + "error on creating new HitResultset! " + errorFromHRS);
}

function doBigProcessing(aDocHit)
{
 // Just a simulation here
 util.out(jobNamePrefix + "processing DocHit " + aDocHit.getFileId());
 util.sleep(900);
}
```


## Side buffer diagnostics

During development and testing it is useful to know
how many objects are actually in the buffer, how
much memory they occupy, and where they came from.

 DOCUMENTS provides a maintenance operation, which can
answer such questions. It can be started from the
Documents Manager's menu bar ("Administration / Perform maintenance operation").

The core name of the diagnotic operation is "inspectHRSSideBuffer".
Several options can be specified by appending the
appropriate keywords.

 Without any option the operation only reports the actual
number of side buffer elements.
The possible options are listed in the following table.
All options can be combined. The sequence of options in the
maintenance command line does not matter.

| Option (keyword) | Meaning |
| --- | --- |
| dump | List all objects in the buffer. |
| scripts | Create an "objects per script" statistic. |
| users | Create an "objects per user" statistic. |
| memory | Calculate memory usage of the buffer elements |


 The tables which the options "dump", "scripts" and "users" create
may look broken in the Documents Manager.
To get a prettier view you can copy them into a text
editor with a fixed-width font or into a markdown (.md) file.

To interpret the reports correctly the following notes
should be kept in mind.

- The diagnosric operation can access only the side buffer contents of a single DOCUMENTS principal. If multiple principals exists and a complete inspection is intended, it is necessary to login and create a report for each principal separately.
- For technical reasons the objects inserted by a module script may sometimes be listed with the module's name and other times with the name of an importing script. It depends on the used import mechanism. (There exist four different mechanisms, whereof two are deprecated.) Another key criterion is whether the insertion occured in the module's main code or due to an external function call. Insertions within an external function call are more likely listed under the name of the importing script.
- The memory usage is shown in bytes. It is native application memory, not JaveScript memory. Server parameters like JSMaxMemory have got no influence on this.


## Terminatory notes

At the first glance the limitation of the insertion function's
lifetime parameter to two hours may appear insufficient for
some applications.
However an hourly running job has got enough time to get
its objects back. Re-inserting an object submits a new lifetime.
So there is not really a hard limit.

Keeping a HitResultset for extremely long times can
anyway become problematic.
Because users, other scripts and workflow actions can modify
the found DocFiles at any time, an old HitResultset may contain
an increasing number of hits, which do no longer fulfill
the original filter conditions.

After a pure archive request with enabled paging a HitResultset
may store only a part of the results, but it then also stores the id and the read-position
of an external (archive hosted) result set.

 The big advantage of this method is that the HitResultset constructor
can operate faster. The constructor returns already when the first page of
hits is available. While the script processes them, the archive
search continues in the background.

 With respect to the side buffer, there is also a little disadvantage.
The external result set may expire earlier than the buffered
HitResultset. DOCUMENTS cannot control this under all circumstances.
Thus fetching a new page can fail a bit more frequently
in the case of HitResultsets taken out of the side buffer.