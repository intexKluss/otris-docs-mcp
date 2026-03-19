---
title: "EmailIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/EmailIterator.html"
---

# Interface EmailIterator

**The EmailIterator class has been added to the DOCUMENTS PortalScripting API to gain full access to the DOCUMENTS emails by scripting means.**

The objects of this class represent lists of Email objects and allow to loop through such a list of emails.
The following method returns an EmailIterator: [[Portalscript API/interfaces/Context#getmails|context.getMails]].


#### Since

DOCUMENTS 5.0i


#### Example


```ts
var itMail = context.getMails();
if (itMail && itMail.size() > 0)
{
   for (var mail = itMail.first(); mail; mail = itMail.next())
   {
      // do something
   }
}
```


`interface EmailIterator { first(): Email; next(): Email; size(): number; }`


## Index


### Methods

- first
- next
- size


## Methods


### first

`first(): Email`

Retrieve the first Email object in the EmailIterator.

**Returns:** Email

**Since:** DOCUMENTS 5.0i


### next

`next(): Email`

Retrieve the next Email object in the EmailIterator.

**Returns:** Email

**Since:** DOCUMENTS 5.0i


### size

`size(): number`

Get the amount of Email objects in the EmailIterator.

**Returns:** number

**Since:** DOCUMENTS 5.0i