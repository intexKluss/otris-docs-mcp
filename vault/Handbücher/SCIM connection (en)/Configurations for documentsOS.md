---
title: "Configurations for documentsOS"
source: "https://otris.software/documents/manuals/books/otrscim-doc-en/documents-settings.html"
---

# Configurations for documentsOS


## Prerequisites

The identity provider (IDP) communicates with *documentsOS* via the web server (Tomcat). Since IDPs communicate exclusively via SSL, SSL must be enabled in Tomcat, and the resulting settings (SSL enabled and SSL host name) must be configured correctly on the principal.


## Enable / disable extension

The SCIM extension must be activated in the AdminCenter under Inactive Extensions.

**Note:** By default, editors with the Documents Administrator role have access to the AdminCenter after logging in to the web client and can configure SCIM settings via the extension. There are no other roles for the extension that give other users access to the SCIM settings. If other users are to make settings, users and/or profiles must be set up for the *admin* role of the *AdminCenter*. Please note that these users will then have full access to the AdminCenter.


![documents-1](assets/documents-1.png)

Fig. 1 - Inactive extension


![documents-2](assets/documents-2.png)

Fig. 2 - Active extension

If the extension is disabled using the corresponding switch, the SCIM endpoint is no longer available.


## Settings for the extension


### Connection data

Once the extension has been activated, the connection data for the IDP can be displayed or created via the **Settings** for simplified configuration. Optional settings are also available.

**Note:** Tooltips are available in the dialog box to assist you in making decisions for all settings.


![documents-3](assets/documents-3.png)

Fig. 3 - Settings dialog

The *Base URL for the SCIM connection* can be copied to the clipboard using the corresponding switch and pasted into the IDP in the settings provided for this purpose (see also *Tenant URL* in the example for Microsoft Entra ID or *SCIM connector base URL* in the example for Okta). The URL is automatically generated according to the following pattern:

- https://<Hostname / SSL-Hostname>/documents/api/documentsOS-Principal/scim/v2
- Example: https://dockerhost.otris.cloud/documents/api/relations/scim/v2

An API key for a defined user must be used for the connection (see also *Secret Token* in the example for Microsoft Entra ID or *Authorization* in the example for Okta). In principle, an existing and known API key for a user can be used, but it is recommended to select an editor from the *User Selection List* and use the corresponding button to generate a new API key for this user.

**Note:** After a notification message, a new API key with the name *SCIM API Key* is created for the user. This API key is then displayed once and can also be copied to the clipboard or saved for future use.


![documents-4](assets/documents-4.png)

Fig. 4 - Settings dialog, notification message


![documents-5](assets/documents-5.png)

Fig. 5 - Settings dialog, display API key

**Note:** If the settings dialog is reopened, a created API key will not be displayed again.


### Optional settings

The following optional settings can be configured for the SCIM extension:

- Link existing users
- Excluse selected users

The *Link existing users* setting can be used to specify whether existing Documents users should be linked during SCIM import. If the `userName` transferred from the SCIM application matches the `Documents login` of an existing user, a SCIM_ID is generated for that user and used for subsequent updates.

With the setting *Exclude selected users*, users with the property `noSCIMCheck=true` are excluded from synchronization.


### Default values for user creation

Starting with documentsOS 6.2.0, default values for user creation can be specified directly in the extension settings. These default values are used if they are not explicitly specified in the SCIM schema:

- Default Documents access
- Default Archivec access
- Default License type
- Default Status

[PDF Version](documents-settings.pdf?b=2026-02-10)