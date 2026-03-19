---
title: "Settings in Documents Manager"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/openid/config-manager.html"
---

# Settings in Documents Manager


## Documents settings

Under Documents → Settings → Global settings → Automatic login the checkbox 'Active' must be set.

![Documents -> Settings -> Global settings -> Automatic login](../assets/autologin-manager.png)


## Documents properties (Documents → Settings → Properties)

| Property | Value | Note |
| --- | --- | --- |
| hasAutologinLink | true | Desired text can be customized, the property creates a link on the login page, which can be used to log in automatically. |


## Tenant properties (Sidebar Administration → Tenants → Properties)

| Property | Mandatory | Value | Note |
| --- | --- | --- | --- |
| loginWithAlias | Yes | 1 |  |


# Documents Manager: OpenID Config

The OpenID Config can be used to define settings for login with an OpenID provider. This configuration is also used to
connect to the respective provider, so it is mandatory.

For a detailed description of all configurations possible there, see
chapter [OpenID Config](/azure/config-openid-config.md).

![Monitoring - Global Properties](../assets/openid/config-manager.png)


The configuration is stored in the Manager under Monitoring - Global Properties.

Name: `openIdConfig`

Typ: `otrOAuth`

[PDF Version](../openid/config-manager.pdf?b=2026-02-12)