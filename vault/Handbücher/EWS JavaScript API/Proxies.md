---
title: "Proxies"
source: "https://otris.software/documents/manuals/books/ews-js-api/proxies.html"
---

# Proxies

If the application connects via a proxy to the EWS service, the URL to
the proxy needs to be provided:


```javascript
var service = new ews.Service({
    // [...]
    proxy_uri: "http://127.0.0.1:8888",
    http_proxy_tunnel: false
});
```

var service = new ews.Service({
    // [...]
    proxy_uri: "http://127.0.0.1:8888",
    http_proxy_tunnel: false
});- proxy_uri: URL to the proxy server including port
- http_proxy_tunnel: Indicator, if SSL tunneling is enabled in the proxy; false is default

See Howto on [SSL](ssl.html) for details on how to configure SSL
connections with proxies.


## Example


```javascript
var service = new ews.Service({
    server_uri: "https://host/ews/Exchange.asmx,
    domain: "otris",
    username: "test4",
    password: "xaqueereiz2Riughohye",
    proxy_uri: "http://127.0.0.1:8888",
    http_proxy_tunnel: false
});
```

var service = new ews.Service({
    server_uri: "https://host/ews/Exchange.asmx,
    domain: "otris",
    username: "test4",
    password: "xaqueereiz2Riughohye",
    proxy_uri: "http://127.0.0.1:8888",
    http_proxy_tunnel: false
});