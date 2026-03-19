---
title: "Registering applications for users"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-en/config-documents.html"
---

# Registering applications for users

In order to use the installed and configured extension, the corresponding service provider must be connected to the Documents installation.

**Note:** When using **documentsOS**, applications can be registered for users directly in the settings dialog of the *Cloud Drive Connection* extension (*Apps and Services*). When using **Documents5**, an editor must log in to the web client and select **External Providers** from their user menu. However, the configurations are identical in both versions and are shown below using the example of *documentsOS* via the extension's settings dialog.


![external-services-settings-1](assets/external-services-settings-1.png)

Fig. 44 - Settings for extension

Clicking the *Settings* button opens the dialogue box for managing external services. To set up the extension, a service must be created and configured using **+ New Service**.


![external-services-add](assets/external-services-add.png)

Fig. 45 - Add an external service

The necessary configurations can now be made using the setup wizard.


## Settings when using Microsoft OneDrive

If *Microsoft OneDrive* is used for the extension, this service must be selected under **Service Selection**:


![external-services-config-microsoft-1](assets/external-services-microsoft-1.png)

Fig. 46 - Service selection Microsoft OneDrive

An alias can be assigned for the service. This is mandatory if several integrations from one provider are used in a Documents installation. Such a case occurs, for example, if a company uses several tenants for one of the providers. In this case, the alias identifies the tenant.

**Attention:** The alias cannot be changed after creation.

Click **Next** to proceed to the next step of the setup wizard, where you must specify the service settings:


![external-services-config-microsoft-2](assets/external-services-microsoft-2.png)

Fig. 47 - Service settings for Microsoft OneDrive

- The Application (client) ID created during app registration must be specified as the Client ID. See also Configuration in Microsoft Entra ID.
- The Secret key created during app registration must be specified as the Client secret. See also Configuration in Microsoft Entra ID.
- As the Tenant, enter the Directory (tenant) ID created during app registration. See also Configuration in Microsoft Entra ID.

By clicking **Next**, you can specify permissions for user groups in the next step of the settings wizard:


![external-services-config-microsoft-3](assets/external-services-microsoft-3.png)

Fig. 48 - Permissions for Microsoft OneDrive

If no user groups are selected, all groups are authorised to use the service.

Clicking **Finish** saves the settings, but the service is not yet active:


![external-services-config-microsoft-4](assets/external-services-microsoft-4.png)

Fig. 49 - Inactive Service for Microsoft OneDrive

To check whether the settings specified above were correct, click on the tile to open a connection where you must enter or select your login details via a Microsoft login page:


![external-services-config-microsoft-5](assets/external-services-microsoft-5.png)

Fig. 50 - Microsoft-Login

Please note that your browser may block pop-up windows. These must then be enabled. After successful authentication, the provider's tile will turn green (service is now active):


![external-services-config-microsoft-6](assets/external-services-microsoft-6.png)

Fig. 51 - Active Service

If the settings entered previously were incorrect, error messages will be issued by the service. The necessary corrections must then be made in the configurations (Microsoft Entra ID and/or Documents service configurations).

Further settings can be displayed or edited using the action buttons on the tile:

- logs out of the service
- displays information about the service
- starts the settings wizard
- deletes the service


## Settings when using Google Drive

If *Google Drive* is used for the extension, this service must be selected under **Service Selection**:


![external-services-config-google-1](assets/external-services-google-1.png)

Fig. 52 - Service selection Google Drive

An alias can be assigned to the service. This is mandatory if several integrations from one provider are used in a Documents installation. Such a case occurs, for example, when a company uses several clients for one of the providers. In this case, the alias identifies the client.

**Attention:** The alias cannot be changed after creation.

Click **Next** to proceed to the next step of the setup wizard, where you must specify the service settings:


![external-services-config-google-2](assets/external-services-google-2.png)

Fig. 53 - Service settings for Google Drive

- The Client ID must be the client ID generated during OAuth client credentials configuration, see also Configuration in Google Cloud Console.
- The client key generated in the OAuth client credentials configuration must be specified as the Client secret. See also Configuration in Google Cloud Console.

By clicking **Next**, you can specify permissions for user groups in the next step of the settings wizard:


![external-services-config-google-3](assets/external-services-google-3.png)

Fig. 54 - Permissions for Google Drive

If no user groups are selected, all groups are authorised to use the service.

Clicking **Finish** saves the settings, but the service is not yet active:


![external-services-config-google-4](assets/external-services-google-4.png)

Fig. 55 - Inactive Service for Google Drive

To check whether the settings specified above were correct, click on the tile to open a connection where you must enter or select your login details via a Google login page:


![external-services-config-google-5](assets/external-services-google-5.png)

Fig. 56 - Google-Login

Please note that your browser may block pop-up windows. These must then be enabled. After successful authentication, the provider's tile will turn green (service is now active):


![external-services-config-google-6](assets/external-services-google-6.png)

Fig. 57 - Active Service

If the settings entered previously were incorrect, error messages will be issued by the service. The necessary corrections must then be made in the configurations (Google Cloud Console and/or Documents service configurations).

Further settings can be displayed or edited using the action buttons on the tile:

- logs out of the service
- displays information about the service
- starts the settings wizard
- deletes the service

[PDF Version](config-documents.pdf?b=2026-01-13)