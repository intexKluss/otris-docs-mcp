---
title: "Debugging"
source: "https://otris.software/documents/manuals/books/ews-js-api/debugging.html"
---

# Debugging

Sometimes, the application can not connect to the exchange server.
To investigate, how the application connects to the EWS service, a
debug callback can be provided to the EWS service object. The
callback is a function that gets one argument with the message
from the EWS layer:


```javascript
var service = new ews.Server({
    // [...]
    debug_callback: (message) => {
        // handle log message
    }
})
```

var service = new ews.Server({
    // [...]
    debug_callback: (message) => {
        // handle log message
    }
})
## Example


```javascript
var logOutput = "";
var service = new ews.Service({
    server_uri: "https://outlook.office365.com/EWS/Exchange.asmx",
    auth_type: "oauth2",
    grant_type: "client_credentials",
    tenant: "otrisdev.onmicrosoft.com",
    grant_type: "client_credentials",
    client_id: "00d6fefc-9ab2-48b7-8914-e87a743c7ea9",
    scope: "https://outlook.office365.com/.default",
    resource: "https://outlook.office365.com/EWS/Exchange.asmx",
    debug_callback: (message) => { // This is the callback
        logOutput += message;
    }
});

// variable logOutput contains now all the log messages from the EWS
// layer connecting to the EWS service
```

var logOutput = "";
var service = new ews.Service({
    server_uri: "https://outlook.office365.com/EWS/Exchange.asmx",
    auth_type: "oauth2",
    grant_type: "client_credentials",
    tenant: "otrisdev.onmicrosoft.com",
    grant_type: "client_credentials",
    client_id: "00d6fefc-9ab2-48b7-8914-e87a743c7ea9",
    scope: "https://outlook.office365.com/.default",
    resource: "https://outlook.office365.com/EWS/Exchange.asmx",
    debug_callback: (message) => { // This is the callback
        logOutput += message;
    }
});

// variable logOutput contains now all the log messages from the EWS
// layer connecting to the EWS serviceThe output will look like this


```javascript
== Info: ALPN, offering h2
== Info: ALPN, offering http/1.1
== Info: successfully set certificate verify locations:
== Info:   CAfile: /etc/ssl/certs/ca-certificates.crt
  CApath: /etc/ssl/certs
=> Send SSL data
== Info: TLSv1.3 (OUT), TLS handshake, Client hello (1):
=> Send SSL data
<= Recv SSL data
...
```

== Info: ALPN, offering h2
== Info: ALPN, offering http/1.1
== Info: successfully set certificate verify locations:
== Info:   CAfile: /etc/ssl/certs/ca-certificates.crt
  CApath: /etc/ssl/certs
=> Send SSL data
== Info: TLSv1.3 (OUT), TLS handshake, Client hello (1):
=> Send SSL data
<= Recv SSL data
...