---
title: "Namespace: tools"
source: "https://otris.software/documents/api/scriptextensions/otris.tools.html"
---

### Classes


**ClientHeaderCode**


### Type Definitions


**otris.tools.ClientInformationobject**

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| originTypes | Array.<string> | list of origin types |
| contextPath | string | application context path (since 6.0.1) |
| webAppTag | string | application web app tag (since 6.0.1) |
| subSession | boolean | true if the call comes from a sub session. For details see clone session feature. (since 6.1.1) |
| requestHeader | Object.<string, Array.<string>> | http request header |