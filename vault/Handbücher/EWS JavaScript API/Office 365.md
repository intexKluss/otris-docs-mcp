---
title: "Access to Office 365 via OAuth2"
source: "https://otris.software/documents/manuals/books/ews-js-api/azure.html"
---

# Access to Office 365 via OAuth2


## Supported OAuth2 grant types

Two OAuth2 grant types are supported to connect via OAuth2:

- resource owner password credentials: Allows to sign in as a specific user
- client credentials: Allows to sign in as an app with access to the tenant.

It is recommended, to use the grant type `resource owner password credentials`, as it is covers most of the use cases. If access
to more than one mailboxes is needed,
[delegate and folder permissions](https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/delegate-access-and-ews-in-exchange)
can be used.

The grant type `client credentials` is designed for
service-to-service communication. E.g., backup services should
use this grant type to backup the data from a Exchange server.


## Configuration of a OAuth2 access for a client

1. Login at https://portal.azure.com with an admin account
2. Select azure service "Active Directory"
3. Select item "App registration" of the list "Administration"
4. Add a new client, e.g., "EWS-Test"
A new Id for the client will be created
5. Open the created client registration
6. Select "API Permissions"
7. Add permission
8. Select service "Exchange"
9. Grant one of the following permissions:
EWS.AccessAsUser.All: Required for the grant type Grant Type resource owner password credentials.
full_access_as_app: Required for Grant Type client credentials. Attention: By this permission, the access to all accounts/mailboxes wihtin the O365 tenant is granted.
10. Confirm the permission as an Administrator of the corresponding tenant


# Examples


## Grant type resource owner password credentials

- Tenant: The URL of the used tenant
- Client-Id: Can be retrieved from the Azure portal (see above)
- Client Secret: The given secret assigned in the Azure Portal
- Username: Login of the user
- Password: Password of the user
- Scope: https://outlook.office365.com/.default


### Test


```javascript
curl -X POST -H "Content-Type: application/x-www-form-urlencoded"
  -d 'client_id=e304d99a-08f4-4ac6-932d-edd44e8b648d&scope=https%3A%2F%2Foutlook.office365.com%2F.default&client_secret=<the client secret>&grant_type=password&username=<login of a user>&password=<user password>' \
  'https://login.microsoftonline.com/otrisdev.onmicrosoft.com/oauth2/v2.0/token'
```

curl -X POST -H "Content-Type: application/x-www-form-urlencoded"
  -d 'client_id=e304d99a-08f4-4ac6-932d-edd44e8b648d&scope=https%3A%2F%2Foutlook.office365.com%2F.default&client_secret=<the client secret>&grant_type=password&username=<login of a user>&password=<user password>' \
  'https://login.microsoftonline.com/otrisdev.onmicrosoft.com/oauth2/v2.0/token'
### Script


```javascript
var clientId = "e304d99a-08f4-4ac6-932d-edd44e8b648d";
var clientSecret = "client secret";
var tenant = "example.onmicrosoft.com";
var password = "password";
var username = "AdeleV@example.onmicrosoft.com";

var ewsOptions = {
    server_uri: "https://outlook.office365.com/EWS/Exchange.asmx",
    auth_type: "oauth2",
    grant_type: "resource_owner_password_credentials",
    tenant: tenant,
    client_id: clientId,
    client_secret: clientSecret,
    scope: "https://outlook.office365.com/.default",
    resource: "https://outlook.office365.com/EWS/Exchange.asmx",
    username: username
    password: password
};

try {
  var service = new ews.Service(ewsOptions);
  // [...]
} catch (e) {
  require("otrLogger").logError("EWS", e);
}
```

var clientId = "e304d99a-08f4-4ac6-932d-edd44e8b648d";
var clientSecret = "client secret";
var tenant = "example.onmicrosoft.com";
var password = "password";
var username = "AdeleV@example.onmicrosoft.com";

var ewsOptions = {
    server_uri: "https://outlook.office365.com/EWS/Exchange.asmx",
    auth_type: "oauth2",
    grant_type: "resource_owner_password_credentials",
    tenant: tenant,
    client_id: clientId,
    client_secret: clientSecret,
    scope: "https://outlook.office365.com/.default",
    resource: "https://outlook.office365.com/EWS/Exchange.asmx",
    username: username
    password: password
};

try {
  var service = new ews.Service(ewsOptions);
  // [...]
} catch (e) {
  require("otrLogger").logError("EWS", e);
}
## Grant type client credentials

- Tenant: The URL of the used tenant
- Client-Id: Can be retrieved from the Azure portal (see above)
- Client Secret: The given secret assigned in the Azure Portal
- Scope: https://outlook.office365.com/.default


### Test


```javascript
curl -X POST -H "Content-Type: application/x-www-form-urlencoded"
  -d 'client_id=e304d99a-08f4-4ac6-932d-edd44e8b648d&scope=https%3A%2F%2Foutlook.office365.com%2F.default&client_secret=<the client secret>&grant_type=client_credentials' \
  'https://login.microsoftonline.com/<tenant name>.onmicrosoft.com/oauth2/v2.0/token'
```

curl -X POST -H "Content-Type: application/x-www-form-urlencoded"
  -d 'client_id=e304d99a-08f4-4ac6-932d-edd44e8b648d&scope=https%3A%2F%2Foutlook.office365.com%2F.default&client_secret=<the client secret>&grant_type=client_credentials' \
  'https://login.microsoftonline.com/<tenant name>.onmicrosoft.com/oauth2/v2.0/token'
## PortalScript


```javascript
var clientId = "e304d99a-08f4-4ac6-932d-edd44e8b648d";
var clientSecret = "client secret";
var tenant = "example.onmicrosoft.com";

var ewsOptions = {
    server_uri: "https://outlook.office365.com/EWS/Exchange.asmx",
    auth_type: "oauth2",
    grant_type: "client_credentials",
    tenant: tenant,
    client_id: clientId,
    client_secret: clientSecret,
    scope: "https://outlook.office365.com/.default",
    resource: "https://outlook.office365.com/EWS/Exchange.asmx"
};

try {
  var service = new ews.Service(ewsOptions);
  // [...]
} catch (e) {
  // Error handling
}
```

var clientId = "e304d99a-08f4-4ac6-932d-edd44e8b648d";
var clientSecret = "client secret";
var tenant = "example.onmicrosoft.com";

var ewsOptions = {
    server_uri: "https://outlook.office365.com/EWS/Exchange.asmx",
    auth_type: "oauth2",
    grant_type: "client_credentials",
    tenant: tenant,
    client_id: clientId,
    client_secret: clientSecret,
    scope: "https://outlook.office365.com/.default",
    resource: "https://outlook.office365.com/EWS/Exchange.asmx"
};

try {
  var service = new ews.Service(ewsOptions);
  // [...]
} catch (e) {
  // Error handling
}