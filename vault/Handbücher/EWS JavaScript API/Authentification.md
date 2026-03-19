---
title: "Authentification"
source: "https://otris.software/documents/manuals/books/ews-js-api/authentification.html"
---

# Authentification

The following authentification options are available:

- OAuth2 (Office 365 only)
- NTLM (Exchange on-premises only)
- Basic (no longer recommended)

For more details see [Authentification and EWS in Exchange by Microsoft](https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/authentication-and-ews-in-exchange).


## OAuth2

OAuth2 offers several grant types/flows. Supported are

- Client credentials
- Resource Owner Password Credentials

Advantages:

- Allows integration of a third-party provider
- Industry-standard authentication protocol
- Application does not need to store user credentials

Disadvantages

- More difficult to implement as the other authentification types


### Client credentials

The grant type *client credentials* is designed for accessing a ressource
like EWS by an application. Useful, if the application should act as an
agent for all users to access or manipulate data. In this case, the
application has to be granted the appropriate permission in Office 365.

See Howto [OAuth2](azure.html) for how to register an application in
Office 365.

For more details, see also
[Microsoft identity platform and the OAuth 2.0 client credentials flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow).

For authenticate using OAUth2 client credentials grant, the following
data has to be provided:

- client_id: The id of the registered application; usually a UUID
- client_secret: The password of the application; similar to an API key
- tenant: Name of the tenant in Office 365
- scope: The OAuth2 scope
- resource: URI of the resource access via OAuth2


#### Example:


```javascript
var options = /** @type {ews.Credentials} */ ({
    auth_type: "oauth2",
    server_uri: "https://outlook.office365.com/EWS/Exchange.asmx",
    grant_type: "client_credentials",
    client_id: "00d6fefc-9ab2-48b7-8914-e87a743c7ea9",
    client_secret: "jhi7PkpoJ5qEhjTS",
    tenant: "example.onmicrosoft.com",
    scope: "https://outlook.office365.com/.default",
    resource: "https://outlook.office365.com/EWS/Exchange.asmx",
});
var service = new ews.Service(options);
```

var options = /** @type {ews.Credentials} */ ({
    auth_type: "oauth2",
    server_uri: "https://outlook.office365.com/EWS/Exchange.asmx",
    grant_type: "client_credentials",
    client_id: "00d6fefc-9ab2-48b7-8914-e87a743c7ea9",
    client_secret: "jhi7PkpoJ5qEhjTS",
    tenant: "example.onmicrosoft.com",
    scope: "https://outlook.office365.com/.default",
    resource: "https://outlook.office365.com/EWS/Exchange.asmx",
});
var service = new ews.Service(options);
### Resource Owner Password Credentials

The grant type *resource owner password credentials* supports the
authentification of an application by allowing the application to sign
in as a user directly. Useful, if the application a shared mailbox
that does not belong to one user only. In this case, the access can
be restricted to this mailbox only.

See Howto [OAuth2](azure.html) for how to register an application in
Office 365.

For more details, see [Microsoft identity platform and OAuth 2.0 Resource Owner Password Credentials](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth-ropc).

For authenticate using this OAuth2 grant type, the following
data has to be provided:

- client_id: The id of the registered application; usually a UUID
- client_secret: The password of the application; similar to an API key
- tenant: Name of the tenant in Office 365
- scope: The OAuth2 scope
- resource: URI of the resource access via OAuth2
- username: Login the application should login for
- password: Password of the user


#### Example:


```javascript
var options = /** @type {ews.Credentials} */ ({
    auth_type: "oauth2",
    server_uri: "https://outlook.office365.com/EWS/Exchange.asmx",
    grant_type: "resource_owner_password_credentials",
    client_id: "00d6fefc-9ab2-48b7-8914-e87a743c7ea9",
    client_secret: "jhi7PkpoJ5qEhjTS",
    username: "test1",
    password: "vhg46PRYwwa2p9pt",
    tenant: "example.onmicrosoft.com",
    scope: "https://outlook.office365.com/.default",
    resource: "https://outlook.office365.com/EWS/Exchange.asmx",
});
var service = new ews.Service(options);
```

var options = /** @type {ews.Credentials} */ ({
    auth_type: "oauth2",
    server_uri: "https://outlook.office365.com/EWS/Exchange.asmx",
    grant_type: "resource_owner_password_credentials",
    client_id: "00d6fefc-9ab2-48b7-8914-e87a743c7ea9",
    client_secret: "jhi7PkpoJ5qEhjTS",
    username: "test1",
    password: "vhg46PRYwwa2p9pt",
    tenant: "example.onmicrosoft.com",
    scope: "https://outlook.office365.com/.default",
    resource: "https://outlook.office365.com/EWS/Exchange.asmx",
});
var service = new ews.Service(options);
## NTLM

The authentification type *NTLM* uses Windows own NTLM protocol for
authentificating at the Exchange server. Can be used in on-premise
scenarios where the application authentificates with the credentials
of a user.

Advantages:

- Easy to configure in Exchange; works almost "out of the box"

Disadvantages

- Users must be logged on to a domain
- Access e-mail accounts that are not associated with the user's domain account might be difficult
- Exchange service applications must have a domain account

For authenticate using NTLM, the following data has to be provided:

- domain: Name of the Windows domain the Exchange server belongs to
- user: Login the application should login for
- password: Password of the user


### Example


```javascript
var options = /** @type {ews.Credentials} */ ({
    auth_type: "ntlm",
    server_uri: "https://host/ews/Exchange.asmx",
    domain: "otris",
    username: "user",
    password: "password"
});
var service = new ews.Service(options);
```

var options = /** @type {ews.Credentials} */ ({
    auth_type: "ntlm",
    server_uri: "https://host/ews/Exchange.asmx",
    domain: "otris",
    username: "user",
    password: "password"
});
var service = new ews.Service(options);
## Basic

The authentification type *Basic* uses the HTTP Basic Authentification
protocol for authentification. This protocol is not recommended anymore
and even not supported anymore by Office 365.

For authenticate using Basic, the following data has to be provided:

- user: Login the application should login for
- password: Password of the user


### Example


```javascript
var options = /** @type {ews.Credentials} */ ({
    auth_type: "basic",
    server_uri: "https://host/ews/Exchange.asmx",
    username: "user",
    password: "password"
});
var service = new ews.Service(options);
```

var options = /** @type {ews.Credentials} */ ({
    auth_type: "basic",
    server_uri: "https://host/ews/Exchange.asmx",
    username: "user",
    password: "password"
});
var service = new ews.Service(options);