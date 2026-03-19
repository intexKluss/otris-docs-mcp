---
title: "Setup using Okta as an example"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/openid/example-okta.html"
---

# Setup using Okta as an example

![Creating the application](../assets/openid/okta-demo-1.png)


| Setting | Value |
| --- | --- |
| Sign-in method | OIDC - OpenID Connect |
| Application type | Web Application |

![Creating the application](../assets/openid/okta-demo-2.png)


| Setting | Value | Note |
| --- | --- | --- |
| App integration name | otris Software: <Product name> | Example: otris Software: Documents, can be chosen freely. |
| Grant type | Authorization Code |  |
| Sign-in redirect URIs | https://<HOST>/documents<5>/srv/GenericRedirectReceiver | Customize host, documents (Windows and Linux when using documentsOS) or documents5 (Linux when using Documents5) depending on Installation |
| Assignments |  | Can be chosen freely. |

*Note: The mask contains further fields, which are not necessary for the connection to Documents and have therefore been
hidden for the instructions.

![ClientID and Secret](../assets/openid/okta-demo-3.png)


After creation, the `Client ID` and the `Client Secret` must be entered in
the [OpenID Config](../openid/config-openid-config.html). In the case of Okta, the `wellKnownOpenIdConfigURL` usually
follows the following pattern:
`https://<oktaID>.okta.com/.well-known/openid-configuration`.

For testing, this URL can also be opened in the browser, a JSON structure is expected.

Since there is currently no import of users, they have to be created manually. For this for each user the property
`loginAlias` must be set. As value the `alias` and the `login_claim` from the
[OpenID Config](../openid/config-openid-config.html) according to the following scheme: `alias:login_claim` is used.
The default (`sub`) is the user ID from the Okta. This can be taken for the user from the URL of the respective user
profile.

If you want to use a different `login_claim` like e.g. `email` you may have to adjust the `scope` parameter in the
[OpenID Config](../openid/config-openid-config.html). Multiple scopes can be specified, these are separated by *spaces*. The
scope `openid` must always be specified. More detailed information about the possible scopes/claims can also be obtained
by calling the `wellKnownOpenIdConfigURL`.

[PDF Version](../openid/example-okta.pdf?b=2026-02-12)