---
title: "XMLHTTPRequest | Portalscript API"
source: "https://otris.software/documents/api/portalscript/classes/XMLHTTPRequest.html"
---

# Class XMLHTTPRequest

The XMLHTTPRequest class represents a HTTP request.

Though the name of this class traditionally refers to XML, it can be used to transfer arbitrary strings or binary data.
The interface is based on the definition of the class `IXMLHTTPRequest` from MSXML. As http-library the libcurl is used.
To send a HTTP request the following steps are needed:

- Creating an instance of this class.
- Initializing the request via open(). Possibly also adding header data by means of addRequestHeader().
- Sending the request via send().
- In case of asynchronous request checking for completion of the request operation via XMLHTTPRequest.readyState.
- Evaluating the result via e.g. XMLHTTPRequest.status, XMLHTTPRequest.response and getAllResponseHeaders().

See [[Portalscript API/documents/soap-client-using-dom|SOAP Client using DOM]] for a detailed example using XMLHTTPRequest.

**Note:** The XMLHTTPRequest is able to use a proxy configuration. The server searches the proxy settings in the following order (priority)

- Specification in the constructor function s. XMLHTTPRequest(proxy, proxyPort, proxyUser, proxyPasswd)
- Global specification in the documents.ini
- On Windows systems: Internet Explorer proxy configuration for the current user
- On Windows systems: Default WinHTTP proxy configuration from the registry.

**Note:** If you want to be sure, that no proxy must be used, then use the constructor function [[Portalscript API/classes/XMLHTTPRequest#constructor.new_XMLHTTPRequest-1|XMLHTTPRequest(useProxySetting)]] with `useProxySetting = false`.

**Note:** Changes to the certificate check as of version 6.0.1: The behavior has changed with regard to checking certificates when using HTTPS.
Previously, the certificate check had to be switched on explicitly using the setCAInfo(cert, options) method and the VERIFYHOST or VERIFYPEER values.
As of version 6.0.1, the certificate check is always activated unless it is explicitly switched off with setCAInfo(cert, 0).


## Index


### Properties

- canAsync
- canProxy
- COMPLETED
- connectTimeout
- FileSizeHint
- INTERACTIVE
- NOTSENT
- readyState
- response
- responseFile
- responseType
- SENT
- status
- statusText
- timeout
- UNINITIALIZED
- VERIFYHOST
- VERIFYPEER


### Methods

- abort
- addEventListener
- addRequestHeader
- getAllResponseHeaders
- getResponseHeader
- open
- removeEventListener
- send
- setAcceptEncoding
- setCAInfo
- setClientCertificate
- setRedirect
- yield


### Constructors

- constructor


## Properties


### ReadonlycanAsync

`canAsync: boolean`

Flag indicating whether asynchronous requests are possible on the used plattform.

**Since:** DOCUMENTS 4.0


### ReadonlycanProxy

`canProxy: boolean`

Flag indicating whether the implementation on the used plattform allows the direct specifying of a proxy server.

**Since:** DOCUMENTS 4.0


### ReadonlyCOMPLETED

`COMPLETED: number`

The constant 4 for XMLHTTPRequest.readyState.

In this state the request is completed. All the data are available now.

**Since:** DOCUMENTS 4.0


### connectTimeout

`connectTimeout: number`

Number of milliseconds until a connection must be established.

**Since:** DOCUMENTS 6.1.0


```ts
300000
```


```ts
const r = new XMLHttpRequest();
r.open("GET", "/server", false); // Sync request
r.connectTimeout = 2000; // 2 seconds
if (!r.send()) {
  // Handle timeout or other errros
}
```


```ts
const r = new XMLHttpRequest();
r.open("GET", "/server", true); // Async request
r.connectTimeout = 2000; // 2 seconds
r.send();
// ...
if (r.readyState === r.COMPLETED && r.status === -1) {
  // Handle timeout or other errors
}
```


```ts
const r = new XMLHttpRequest();
r.connectTimeout = -1;               // 4294967295
r.connectTimeout = 1.1;              // 1
r.connectTimeout = Number.MAX_VALUE; // 0
```


### FileSizeHint

`FileSizeHint: number`

Optional File size indicator for sending pure sequential files.

When uploading files, the send() function usually detects the file size and forwards it to lower APIs. This is helpful in most cases, because old simple HTTP servers do not support the transfer mode "chunked". Web services may reject uploads without an announced content-length, too. However, the auto-detection will fail, if a given file is not rewindable (a named pipe, for instance). To avoid errors this property should be set before sending such a special file. After the transmission the property should be either set to "-1" or deleted. The value is interpreted in the following way.

Values > 0 specify a precise file size in bytes.
The value -1 has the same effect as leaving the property undefined (enable auto-detection).
The value -2 disables file size detection and enforces a chunked transfer.

Note: This property serves as a hidden optional parameter to the send() function. On new objects it is undefined. Assigning an incorrect value >= 0 may trigger deadlocks or timeouts.

**Since:** DOCUMENTS 5.0c

**See:** XMLHTTPRequest.send


### ReadonlyINTERACTIVE

`INTERACTIVE: number`

The constant 3 for XMLHTTPRequest.readyState.

In this state the request is partially completed. This means that some data has been received.

**Since:** DOCUMENTS 4.0


### ReadonlyNOTSENT

`NOTSENT: number`

The constant 1 for XMLHTTPRequest.readyState.

In this state the object has been initialized, but not sent yet.

**Since:** DOCUMENTS 4.0


### ReadonlyreadyState

`readyState: number`

The current state of the asynchronous request.

The following states are available:

XMLHTTPRequest.UNINITIALIZED = 0 : the method open() has not been called.
XMLHTTPRequest.NOTSENT = 1: the object has been initialized, but not sent yet.
XMLHTTPRequest.SENT = 2 : the object has been sent. No data is available yet.
XMLHTTPRequest.INTERACTIVE = 3: the request is partially completed. This means that some data has been received.
XMLHTTPRequest.COMPLETED = 4: the request is completed. All the data are available now.

**Since:** DOCUMENTS 4.0


### Readonlyresponse

`response: any`

The response received from the HTTP server or null if no response is received.

Note: Starting with DOCUMENTS 5.0c its data type is influenced by the optional property responseType. The default type is String. For requests with an attached responseFile this value can be truncated after a few kBytes.

**Since:** DOCUMENTS 4.0

**See:** XMLHTTPRequest.responseType XMLHTTPRequest.responseFile


```ts
var xmlHttp = new XMLHTTPRequest();
var async = false;
var url = "http://localhost:11001/";
xmlHttp.open("POST", url, async);
if (xmlHttp.send(content))
  util.out(xmlHttp.response);
```


### responseFile

`responseFile: File`

An optional writable file for streaming a large response.

To achieve an efficient download scripts can create a writable File an attach it to the request. The complete response will then be written into this file. The value of the response property, however, will be truncated after the first few kBytes.

Note: On new objects this property is undefined. When send() is called, the request takes exclusive ownership of the attached file. The property will then be reset to null. Even in asynchronous mode send() seems to close the file immediately. In fact, send() detaches the native file handle from the JavaScript object to ensure exclusive access. Received content will be written to the file, disregarding the HTTP status.

**Since:** DOCUMENTS 5.0c

**See:** XMLHTTPRequest.response XMLHTTPRequest.responseType File


```ts
var url = "http://localhost:8080/documents/img/documents/skin/black/module/dashboard/48/view.png";
var req = new XMLHTTPRequest;
req.open("GET", url);
var file = new File("E:\\test\\downloaded.png", "wb");
if(!file.ok())
    return "Cannot open response file for writing";
req.responseFile = file;
req.send();
return req.status;
```


### responseType

`responseType: string`

Preferred output format of the response property (optional).

By default, the object expects text responses and stores them in a String. If the application expects binary data, it may request an ArrayBuffer by setting this property to "arraybuffer".

Note: On new objects this property is undefined. ArrayBuffer responses are created only once after each request. If a script changes the received buffer, the response property will reflect these changes until a new request starts.

**Since:** DOCUMENTS 5.0c

**See:** XMLHTTPRequest.response XMLHTTPRequest.responseFile


### ReadonlySENT

`SENT: number`

The constant 2 for XMLHTTPRequest.readyState.

In this state the object has been sent. No data is available yet.

**Since:** DOCUMENTS 4.0


### Readonlystatus

`status: number`

The HTTP status code of the request.

**Since:** DOCUMENTS 4.0

**See:** XMLHTTPRequest.statusText


### ReadonlystatusText

`statusText: string`

The HTTP status text of the request.

**Since:** DOCUMENTS 4.0

**See:** XMLHTTPRequest.status


### timeout

`timeout: number`

Number of milliseconds until a request must be completed. Otherwise the request will be automatically terminated.

**Since:** DOCUMENTS 6.1.0


```ts
0
```


```ts
const r = new XMLHttpRequest();
r.open("GET", "/server", false); // Sync request
r.timeout = 2000; // 2 seconds
if (!r.send()) {
  // Handle timeout or other errros
}
```


```ts
const r = new XMLHttpRequest();
r.open("GET", "/server", true); // Async request
r.timeout = 2000; // 2 seconds
r.send();
// ...
if (r.readyState === r.COMPLETED && r.status === -1) {
  // Handle timeout or other errros
}
```


```ts
const r = new XMLHttpRequest();
r.timeout = -1;               // 4294967295
r.timeout = 1.1;              // 1
r.timeout = Number.MAX_VALUE; // 0
```


### ReadonlyUNINITIALIZED

`UNINITIALIZED: number`

The constant 0 for XMLHTTPRequest.readyState.

In this state the method open() has not been called.

**Since:** DOCUMENTS 4.0


### ReadonlyVERIFYHOST

`VERIFYHOST: number`

Constant for CA Certificate verification if using HTTPS.

This option activate the verification of the host.

**Since:** DOCUMENTS 5.0c

**See:** XMLHTTPRequest.setCAInfo


### ReadonlyVERIFYPEER

`VERIFYPEER: number`

Constant for CA Certificate verification if using HTTPS.

This option activate the verification of the certificate chain.

**Since:** DOCUMENTS 5.0c

**See:** XMLHTTPRequest.setCAInfo


## Methods


### abort

`abort(): boolean`

Abort an asynchronous request if it already has been sent.

**Returns:** boolean

**Since:** DOCUMENTS 4.0


```ts
var xmlHttp = new XMLHTTPRequest();
var async = true;
var url = "http://localhost:11001/";
xmlHttp.open("POST", url, async);
xmlHttp.send(content);
var timeout = 3000;   // milliseconds
var idle = 200; // 200 ms
var timeoutTS = (new Date()).getTime() + timeout;
while (httpCon.readyState != httpCon.COMPLETED) {
   if ((new Date()).getTime() > timeoutTS) {
      xmlHttp.abort();
      xmlHttp = null;
   }
   util.sleep(idle);
}
if (xmlHttp)
   util.out(xmlHttp.status);
```


### addEventListener

`addEventListener<K extends "receive">( type: K, handler: EventHandlerMap[K], ): void`

Adds an event handler for events triggered by XMLHTTPRequest.

**Parameters:**

- `type`: `K` — Event type a listerener should be added for
- `handler`: `EventHandlerMap` — Event handler to be added

**Returns:** void

**Since:** DOCUMENTS 6.0.1

**See:** XMLHTTPRequest.Event XMLHTTPRequest.removeEventListener XMLHTTPRequest.yield


```ts
var url = "https://documents.testdomain.de/";
var async = true;
var xmlHttp = new XMLHTTPRequest();
xmlHttp.open("GET", url, async);

// Write receiving data direct to the server log
xmlHttp.addEventListener("receive", (event) => util.out(event.data));

if (!xmlHttp.send(content)) {
  throw new Error("Send failed!");
}
var i = 0;
while (xmlHttp.status != xmlHttp.COMPLETED && i < 10) {
  xmlHttp.yield();
  util.sleep(500);
  i++;
}
```


### addRequestHeader

`addRequestHeader(name: string, value: string): boolean`

Add a HTTP header to the request to be sent.

Note: The request must be initialized via open() before.

**Parameters:**

- `name`: `string` — String specifying the header name.
- `value`: `string` — String specifying the header value.

**Returns:** boolean

**Since:** DOCUMENTS 4.0


```ts
var xmlHttp = new XMLHTTPRequest();
var async = true;
var url = "http://localhost:11001/";
xmlHttp.open("POST", url, async);
xmlHttp.addRequestHeader("Content-Type", "text/xml");
xmlHttp.send(c);
```


### getAllResponseHeaders

`getAllResponseHeaders(): string`

Get all response headers as a string.

Each entry is in a separate line and has the form 'name:value'.

**Returns:** string

**Since:** DOCUMENTS 4.0


```ts
var xmlHttp = new XMLHTTPRequest();
var async = false;
var url = "http://localhost:11001/";
xmlHttp.open("POST", url, async);
if (xmlHttp.send(content))
  util.out(xmlHttp.getAllResponseHeaders());
```


### getResponseHeader

`getResponseHeader(name: string): string`

Get the value of the specified response header.

**Parameters:**

- `name`: `string` — String specifying the response header name.

**Returns:** string

**Since:** DOCUMENTS 4.0


```ts
var xmlHttp = new XMLHTTPRequest();
var async = false;
var url = "http://localhost:11001/";
xmlHttp.open("POST", url, async);
if (xmlHttp.send(content))
   util.out(xmlHttp.getResponseHeader("Content-Type"));
```


### open

`open( method: string, url: string, async?: boolean, user?: string, passwd?: string, ): boolean`

Initialize a HTTP request.

Since: DOCUMENTS 5.0e (support PATCH request)

**Parameters:**

- `method`: `string` — String specifying the used HTTP method. The following methods are available:

GET: Sending a GET request, for example, for querying a HTML file.
PUT: Sending data to the HTTP server. The data must be passed in the send() call. The URI represents the name under which the data should be stored. Under this name, the data are then normally retrievable.
POST: Sending data to the HTTP server. The data must be passed in the send() call. The URI represents the name of the consumer of the data.
DELETE: Sending a DELETE request.
PATCH: Sending a PATCH request, see RFC 5789.
- `url`: `string` — String containing the URL for this request.
- `async`: `boolean` — Default: false. Optional flag indicating whether to handle the request asynchronously. In this case the operation send() returns immediately, in other word, it will not be waiting until a response is received. Asynchronous sending is only possible, when XMLHTTPRequest.canAsync returns true. If asynchronous sending is not possible, this flag will be ignored. For an asynchronous request you can use XMLHTTPRequest.readyState to get the current state of the request.
- `user`: `string` — Optional user name must be specified only if the HTTP server requires authentication.
- `passwd`: `string` — Optional password must also be specified only if the HTTP server requires authentication.

**Returns:** boolean

**Since:** DOCUMENTS 4.0

**See:** XMLHTTPRequest.send XMLHTTPRequest.canAsync


```ts
var xmlHttp = new XMLHTTPRequest();
var async = false;
var url = "http://localhost:11001/";
xmlHttp.open("GET", url + "?wsdl", async);
xmlHttp.send();
```


### removeEventListener

`removeEventListener<K extends "receive">( event: K, handler: EventHandlerMap[K], ): void`

Removes an event handler for an event.

**Parameters:**

- `event`: `K`
- `handler`: `EventHandlerMap`

**Returns:** void

**See:** XMLHTTPRequest.Event XMLHTTPRequest.addEventListener

**Since:** DOCUMENTS 6.0.1


```ts
// ...
function log(event) {
  util.out(event.data);
}
xmlHttp.addEventListener("receive", log);
// ...
xmlHttp.removeEventListener("receive", log);
```


### send

`send(content?: string): boolean`

Send the request to the HTTP server.

The request must be prepared via open() before.

Note: The request must be initialized via open() before. You can use XMLHTTPRequest.readyState to get the current state of an asynchronous request. The properties XMLHTTPRequest.status and XMLHTTPRequest.statusText return the status of the completed request while using getResponseHeader() and XMLHTTPRequest.response the actual result of the request can be retrieved. An asynchronous request can be canceled using abort().

Note: The type of the content parameter can be one of the following: String, ArrayBuffer, File. Caution: all other types will be converted to a string! Given a conventional array, the function will only send a string like "[object Array]".

About files Passed files must be opened in binary read mode. If the file is not rewindable (a named pipe, for instance), the property XMLHTTPRequest.FileSizeHint should be set before sending. The property is useful to supress an automatic length scan. The function implicitly closes the File object, though the file may remain open for asynchronous operation. When an asynchronous request is completed, its associated files become closed outside the JavaScript environment.

About Arraybuffers Passing a TypedArray (UInt8Array, Int16Array etc.) instead of an ArrayBuffer is possible, but not recommended. The actual implementation always sends the complete associated buffer. The result can be unexpected, if the TypedArray covers only a section of a bigger buffer. This behaviour might change in future releases.

Since: DOCUMENTS 5.0c (Support for sending File and ArrayBuffer) Since: DOCUMENTS 6.2.0 (Support for GET requests with body)

**Parameters:**

- `content`: `string` — Optional content to be sent; usually a String. See the remarks section about using other types.

**Returns:** boolean

**Since:** DOCUMENTS 4.0

**See:** XMLHTTPRequest.open FileSizeHint


```ts
var xmlHttp = new XMLHTTPRequest();
var async = false;
if (xmlHttp.canAsync)
   async = true;
var url = "http://localhost:11001/";
xmlHttp.open("GET", url + "?wsdl", async);
xmlHttp.send(null);
if (async) {
   while(xmlHttp.status != xmlHttp.COMPLETED) {
      util.sleep(500);  // sleep 500 ms
   }
}
util.out(xmlHttp.status);  // should be 200
```


```ts
var file = new File("E:\\test\\Lighthouse.jpg", "rb");
if(!file || !file.ok())
    throw "File not found";
var req = new XMLHTTPRequest();
var url = "http://localhost:8080/myUploadServlet";
req.open("PUT", url, false);
// Uncomment the following instruction to suppress the
// "100-continue" communication cycle, if the target server
// does not support it. This might also speed up very little
// uploads. Otherwise better keep the default behaviour.
// req.addRequestHeader("Expect", " ");
req.addRequestHeader("Filename", "Lighthouse.jpg");
req.send(file);
util.out(req.status);
util.out(req.response);
// No need to close file here; send() already did.
util.out(req.status);  // should be 200
```


```ts
//
// GET-Request mit Body
//
var xmlHttp = new XMLHTTPRequest();
var url = "...";
xmlHttp.open("GET", url, false);
xmlHttp.send("key1=value1&key2=value2");
util.out(xmlHttp.status); // should be 200
```


### setAcceptEncoding

`setAcceptEncoding(encoding: string): void`

Sets the preferred content encodings acceptable in a response.

**Parameters:**

- `encoding`: `string` — Preferred content encodings

**Returns:** void

**Since:** DOCUMENTS 6.2.0


```ts
// Example for accepting gzip'ed content
const r = new XMLHTTPRequest();
r.open("GET", "http:/host/endpoint-sending-gzip-data");
r.setAcceptEncoding("gzip");
if (r.send()) {
  util.out(r.response); // output of decompressed content
} else {
  util.out("send failed");
}
```


```ts
// Example for receving the compressed content
const r = new XMLHTTPRequest();
r.open("GET", "http:/host/endpoint-sending-gzip-data");
r.setAcceptEncoding("");
if (r.send()) {
  util.out(r.response); // output of compressed (binary) content
} else {
  util.out("send failed");
}
```


### setCAInfo

`setCAInfo(pemFile: string, options: number): void`

Set one or more certificates to verify the peer if using HTTPS.

**Parameters:**

- `pemFile`: `string` — String with the path to pem-file with the servers certificates (bundle of X.509 certificates in PEM format).
- `options`: `number` — Integer with a bitmask of verification-options (XMLHTTPRequest.VERIFYPEER, XMLHTTPRequest.VERIFYHOST)

**Returns:** void

**Since:** DOCUMENTS 5.0c


```ts
var url = "https://someserver:443/";
var async = false;
var xmlHttp = new XMLHTTPRequest();
// Important: method-order:
// 1. open()
// 2. setCAInfo()
xmlHttp.open("POST", url, async);
xmlHttp.setCAInfo("c:\\certs\\cabundle.pem", XMLHTTPRequest.VERIFYPEER + XMLHTTPRequest.VERIFYHOST);
if (xmlHttp.send(content))
  util.out(xmlHttp.getAllResponseHeaders());
```


### setClientCertificate

`setClientCertificate( certPath: string, keyPath: string, keyPassword?: string, ): void`

Sets the client certificate necessary for mTLS.

**Parameters:**

- `certPath`: `string` — Path to the client certificate file
- `keyPath`: `string` — Path the key file for the client certificate
- `keyPassword`: `string` — Password for the key file

**Returns:** void

**Since:** DOCUMENTS 6.2.0


```ts
const r = new XMLHTTPRequest();
r.open("GET", "http://localhost:443");
try {
  r.setClientCertificate("/tmp/cert.pem", "/path/to/key.pem", "secret");
  if (r.send("")) {
    util.out(r.getAllResponseHeaders());
  }
} catch (e) {
  util.out(e.message);
}
```


### setRedirect

`setRedirect(count: number): void`

Configure how many redirections are allowed, if the server returns a 3xx response.

Note: Since 5.0g is redirection the default behaviour of the XMLHTTPRequest;

**Parameters:**

- `count`: `number` — Integer with the amount of allowed redirects. -1 = unlimited, 0 = no redirects

**Returns:** void

**Since:** DOCUMENTS 5.0g


```ts
var url = "https://documents.testdomain.de/";
var async = false;
var xmlHttp = new XMLHTTPRequest();
// Important: method-order:
// 1. open()
// 2. setRedirect()
xmlHttp.open("GET", url, async);
xmlHttp.setRedirect(0);
if (xmlHttp.send(content))
  util.out(xmlHttp.getAllResponseHeaders());
```


### yield

`yield(): string[]`

Triggers the execution of event listeners for the received data chunks so far.

**Returns:** string[]

**Since:** DOCUMENTS 6.0.1

**See:** XMLHTTPRequest.Event XMLHTTPRequest.addEventListener


## Constructors


### constructor

`new XMLHTTPRequest( proxy?: string, proxyPort?: number, proxyUser?: string, proxyPasswd?: string, ): XMLHTTPRequest`

Create a new XMLHTTPRequest object.

Note: On windows OS: If no proxy is specified as first parameter, the proxy settings of the Internet Explorer and and the WinHTTP configuration will be checked, and a defined proxy setting will be used.

Since: DOCUMENTS 4.0 Since: DOCUMENTS 5.0c (on windows OS support of system proxy configuration)

**Parameters:**

- `proxy`: `string` — Optional string value specifying the hostname of the proxy server being resolvable by the nameserver. On windows OS: If this parameter is not specified, the windows proxy configuration will be used. E.g. the proxy server specified in Internet Explorer is used in the registry.
- `proxyPort`: `number` — Default: 3128. Optional number of the port on which the proxy accepts requests.
- `proxyUser`: `string` — Optional string value specifying the desired login name for the proxy
- `proxyPasswd`: `string` — Optional string value specifying the password for logging in to the proxy

**Returns:** XMLHTTPRequest

**Since:** DOCUMENTS 4.0

**See:** XMLHTTPRequest.canProxy

**Since:** DOCUMENTS 4.0


```ts
// synchron
var xmlHttp = new XMLHTTPRequest();
var async = false;
var url = "http://localhost:11001/";
xmlHttp.open("GET", url + "?wsdl", async);
xmlHttp.send();
util.out(xmlHttp.response);
```


```ts
// asynchron
var xmlHttp = new XMLHTTPRequest();
var async = true;
var url = "http://localhost:11001/";
xmlHttp.open("GET", url + "?wsdl", async);
xmlHttp.send();
while(xmlHttp.status != xmlHttp.COMPLETED) {
   util.sleep(500);  // sleep 500 ms
}
util.out(xmlHttp.response);
```


```ts
// synchron
var xmlHttp = new XMLHTTPRequest();
var async = false;
var url = "http://localhost:11001/";
xmlHttp.open("GET", url + "?wsdl", async);
xmlHttp.send();
util.out(xmlHttp.response);
```


```ts
// asynchron
var xmlHttp = new XMLHTTPRequest();
var async = true;
var url = "http://localhost:11001/";
xmlHttp.open("GET", url + "?wsdl", async);
xmlHttp.send();
while(xmlHttp.status != xmlHttp.COMPLETED) {
   util.sleep(500);  // sleep 500 ms
}
util.out(xmlHttp.response);
```