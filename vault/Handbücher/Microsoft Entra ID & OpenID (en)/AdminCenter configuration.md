---
title: "AdminCenter configuration"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/openid/config-admincenter.html"
---

# AdminCenter configuration


## General

Editors with the *Documents Administrator* function have access to the AdminCenter by default after logging in to the
web client and can make settings via the *OpenID Connection* extension. If the extension has been activated, access
profiles and/or users can be specified via the role administration, which can additionally make settings.


## Activation/deactivation, settings, permissions

The activation is performed in the AdminCenter via the *Extensions* folder. The action **Activate** must be performed on
the extension.


![admincenter-1](../assets/openid/admincenter-1.png)

Fig. 17 - Inactive extension

**Note:** Activation can only be performed if the extension **Microsoft Entra ID Connection** has not already been
activated, simultaneous use of *OpenID Connection* and *Microsoft Entra ID Connection* is not possible.

If it is determined during activation that the web server (Tomcat) has not been configured for SSL/TLS, an advisory
message is issued.


![admincenter-2](../assets/openid/admincenter-2.png)

Fig. 18 - Note message SSL/TLS

**Note:** Depending on the provider, SSL/TLS must be enabled, otherwise communication via the web server (Tomcat)
could be rejected. Check whether the provider to be used requires SSL/TLS.

If the extension has been activated, it is displayed in the AdminCenter under *Activated extensions* and enables further
general settings via the *Settings* action. In addition, a configuration folder *OpenID connection* is activated in the
AdminCenter.


![admincenter-3](../assets/openid/admincenter-3.png)

Fig. 19 - Active extension


![admincenter-4](../assets/openid/admincenter-4.png)

Fig. 20 - Settings dialog

**Note:** Tooltips are available in the dialog for all settings to help you decide.


![admincenter-5](../assets/openid/admincenter-5.png)

Fig. 21 - Configuration folder in the AdminCenter

This configuration folder and the associated settings are also visible to users who have been *optionally* specified for
this extension via role management in the AdminCenter.


![admincenter-6](../assets/openid/admincenter-6.png)

Fig. 22 - Role management with optional additional access settings

By clicking on the appropriate role (by default, a role *admin* with full access to the OpenID connection is available),
optionally existing access profiles and/or users can be specified in the corresponding form, which should receive
permissions for configuration.

- Add: Click in the corresponding field and select from AutoComplete list.
- Remove: Click on the corresponding icon in the respective line.

If the extension is deactivated, it can optionally be specified whether existing configurations should be deleted and a
login via alias should be removed. After a deactivation, the configuration folder in the AdminCenter is also removed, so
no more settings can be made.


![admincenter-7](../assets/openid/admincenter-7.png)

Fig. 23 - Deactivation dialog


## OpenID configuration

The configuration folder *OpenID connection* is used to define the settings for one or more OpenID connections. Clicking
on the folder displays a list of existing OpenID configurations, and the necessary actions *Add*, *Delete* and *Set as
primary* are also available in the list. Primary configurations are highlighted.


![admincenter-8](../assets/openid/admincenter-8.png)

Fig. 24 - OpenID Configurations List


### OpenID connection


#### General

By clicking on a list entry or when creating a new configuration (+ Add), a corresponding form is displayed in which all
further settings can be specified. On the form, all settings are grouped on different tabs according to *Global
settings* and *Expert settings*. If settings are made or changed, there is a mark ( * ) indicating that unsaved changes
exist and the actions *Save* or *Reset* are activated.

**Note:** Tooltips are provided for all form fields to help you decide.


![admincenter-9](../assets/openid/admincenter-9.png)

Fig. 25 - Configuration form, tabs


#### Global settings

On the tab **Global Settings** the most important configurations for this connection are specified, at least the fields
*Client ID*, *Client Secret* and the *Configuration URL* must be specified.


![admincenter-10](../assets/openid/admincenter-10.png)

Fig. 26 - Configuration form, Global settings


#### Expert settings

Additional settings can be specified on the **Expert settings** tab. The common settings are preset.

**Important note:** Changing these settings should only be done with appropriate knowledge. The documentation and the
tooltips on the corresponding form fields provide important information on the possible effects of such changes.


![admincenter-11](../assets/openid/admincenter-11.png)

Fig. 27 - Configuration form, Expert settings


# Additional information

The Documents property loginAlias is used for user login. For OpenID connections, this is composed of the parameter `alias` and the value for the claim from `login_claim` according to the following pattern: `alias:login_claim`.

For example, for an OpenID connection to Okta with the alias `Okta` and the login_claim `sub`, the value for loginAlias for **one** of the users would be as follows: `Okta:00umgpy3u19sl70Zo5d8`

Subsequent changes to these parameters are not recommended, as all existing logins would then have to be updated.

[PDF Version](../openid/config-admincenter.pdf?b=2026-02-12)