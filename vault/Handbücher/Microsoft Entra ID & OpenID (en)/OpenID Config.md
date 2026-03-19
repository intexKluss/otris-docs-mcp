---
title: "OpenIDConfig"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/openid/config-openid-config.html"
---

# OpenIDConfig

The OpenIDConfig is used to control the connection to an OpenID provider. The following example configuration contains
all the default values we set. A detailed breakdown of how which value works and which mandatory parameters have to be
set is explained below.


```json
{
	"tenants": [
		{
			"clientId": "",
			"clientSecret": "",
			"wellKnownOpenIdConfigURL": "",
			"alias": "",
			"optionals": {
				"grant_type": "authorization_code",
				"scope": "openid",
				"response_type": "code",
				"login_claim": "sub",
				"authorization_method": "client_secret_basic"
			}
		}
	]
}
```

{
	"tenants": [
		{
			"clientId": "",
			"clientSecret": "",
			"wellKnownOpenIdConfigURL": "",
			"alias": "",
			"optionals": {
				"grant_type": "authorization_code",
				"scope": "openid",
				"response_type": "code",
				"login_claim": "sub",
				"authorization_method": "client_secret_basic"
			}
		}
	]
}Several configurations can be stored under `tenants`. Each configuration must be created as a separate object
within the array. All possible settings are described in the `Tenant` table.


## Tenant

| Key | Type | Default | Mandatory | Version | Description |
| --- | --- | --- | --- | --- | --- |
| clientID | String |  | yes | 5.0h HF1 | The Client ID (Application ID (Client)) of the application through which Documents gains access to the OpenID application. |
| clientSecret | String |  | yes | 5.0h HF1 | A client secret for the application that Documents uses to gain access to the OpenID application. |
| wellKnownOpenIdConfigURL | String |  | yes | 5.0h HF1 | URL from which Documents can retrieve the OpenID configuration. The URL often contains the path /.well-known/openid-configuration. |
| alias | String |  | yes | 5.0h HF1 | Parameter that can be used to distinguish between several different OpenID bindings. To avoid possible problems no spaces or special characters should be used. In OpenID connections the alias is also used for login and should therefore not be changed afterwards. |


## Optionals

The optionals contain specialized settings that normally do not need to be changed.

| Key | Type | Possible values | Default | Mandatory | Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| grant_type | String | authorization_code | authorization_code | no | 5.0h HF1 | Method to verify the login against the OpenID provider. Currently only "authorization_code" is supported. The provider redirects the user back to the Documents interface after a successful login with an authorization code. With this code Documents can log in the user. |
| scope | String | Different for each identity provider, all supported scopes are listed in .well-known/openid-configuration under scopes_supported. | openid | no | 5.0h HF1 | The scope parameter lists the resources that the OpenID Connect user passes to / shares with Documents. For example, the openid scope parameter allows the OpenID Connect token to be shared (id_token). |
| response_type | String | code | code | no | 5.0h HF1 | The way the server should respond during authentication. Currently only "code" is supported. |
| login_claim | String | Different for each identity provider, all supported scopes are listed in .well-known/openid-configuration under claims_supported. | sub | no | 5.0h HF1 | Specifies which claim should be used for the login. These claims are read from the id_token (see scope). |
| authorization_method | String | client_secret_basic client_secret_post | client_secret_basic | no | 5.0h HF2 | Specifies which authentication method should be used by the server towards the OpenID provider. See also https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication. |


## Additional information

The Documents property loginAlias is used for user login. For OpenID connections, this is composed of the parameter `alias` and the value for the claim from `login_claim` according to the following pattern: `alias:login_claim`.

For example, for an OpenID connection to Okta with the alias `Okta` and the login_claim `sub`, the value for loginAlias for **one** of the users would be as follows: `Okta:00umgpy3u19sl70Zo5d8`

Subsequent changes to these parameters are not recommended, as all existing logins would then have to be updated.

[PDF Version](../openid/config-openid-config.pdf?b=2026-02-12)