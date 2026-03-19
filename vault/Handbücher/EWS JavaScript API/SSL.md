---
title: "SSL"
source: "https://otris.software/documents/manuals/books/ews-js-api/ssl.html"
---

# SSL

If the application connects to the EWS service via SSL/https,
additional configuration is needed. The configuration can be
set on a global level or for each connection.


### Configuring Certificates on the Global Level

To set the configuration on the global level, add the `CAPath`
setting to the INI file of the application, e.g., the
`documents.ini`.


#### Windows

On Windows this property can be set to


```javascript
CAPath wincertstore
```

CAPath wincertstoreThen all the required certificates are retrieved from the
Windows CA Store. If a specific CA certificate has to be used,
this property has set to the folder having the required
CA certificate.


#### Linux

On Linux this configuration is usually not required. The
CA store of the Linux system is used automatically. If specific
certificates have to be used, `CAPath` in the server configuration,
e.g., the `documents.ini` can be used, to point to the folder
containing the required CA certificatios:


```javascript
CAPath /path/to/ca-folder
```

CAPath /path/to/ca-folder
### Configuring Certificates on the Connection Level

In addition to the configuration on the global level, the
CA certificate can be configured for each connection. This
allows to specify the connection in more detail:


```javascript
var service = new ews.Service({
    // [...]
    cainfo: "/path/to/cert.pem",
    capath: "/path/to/certs",
    caproxyinfo: "/path/to/cert.pem",
    caproxypath: "/path/to/certs",
    ssl_options: {
        allow_beast: false,
        no_revoke: false,
        no_partialchain: false,
        revoke_best_effort: false,
        native_ca: false
    },
    http_proxy_tunnel: false
});
```

var service = new ews.Service({
    // [...]
    cainfo: "/path/to/cert.pem",
    capath: "/path/to/certs",
    caproxyinfo: "/path/to/cert.pem",
    caproxypath: "/path/to/certs",
    ssl_options: {
        allow_beast: false,
        no_revoke: false,
        no_partialchain: false,
        revoke_best_effort: false,
        native_ca: false
    },
    http_proxy_tunnel: false
});- cainfo: Path to a certificate file used for verifying SSL certificates; Only needed, if the OS own certificat container cannot be used
- capath: Path to a directory with certificate files used for verifying SSL certificates of proxies; Only needed, if the OS own certificat container cannot be used
- caproxyinfo: Path to a certificate file used for verifying SSL certificates of proxies; Only needed, if the OS own certificat container cannot be used
- caproxypath: Path to a directory with certificate files used for verifying SSL certificates of proxies; Only needed, if the OS own certificate container cannot be used
- ssl_options: Sets the SSL behaviour; See Reference on SSL options
- http_proxy_tunnel: Indicator, if SSL tunneling is enabled in the proxy; false is default


## Example


```javascript
var service = new ews.Service({
    server_uri: "https://host/ews/Exchange.asmx,
    domain: "otris",
    username: "test4",
    password: "xaqueereiz2Riughohye",
    ssloptions: {
        no_partialchain: true,
    }
});
```

var service = new ews.Service({
    server_uri: "https://host/ews/Exchange.asmx,
    domain: "otris",
    username: "test4",
    password: "xaqueereiz2Riughohye",
    ssloptions: {
        no_partialchain: true,
    }
});