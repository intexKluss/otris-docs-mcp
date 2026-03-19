---
title: "Configuration in Microsoft Entra ID"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-en/config-microsoft.html"
---

# Configuration in Microsoft Entra ID

The following describes which settings are required in Microsoft Entra ID to configure the extension for connecting to **Microsoft OneDrive**.
The necessary settings are made via the Microsoft Entra ID Admin Center: [Link to Admin Center](https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview)

**Note:** For users who want to share files from Documents with other people, Microsoft OneDrive must be set up and enabled.


## Register for the app

A new registration must be made via Manage / App Registrations:


![microsoft-app-registration-new](assets/microsoft-app-registration-1.png)

Fig. 1 - New App Registration

To register the app, you must enter a name (freely selectable) and select a supported account type. In addition, you must enter a redirect URI, which must have the following structure:

- Type: Web
- URI: https://<HOST>:<PORT>/documents<5>/srv/GenericRedirectReceiver/service/Microsoft

**Note:** The values for `<HOST>` and `<PORT>` must be adjusted to match the Documents installation (Tomcat), including any SSL ports that differ from the default. For installations under Windows and Linux with **documentsOS**, “documents” must then be specified; for Linux installations under **Documents5**, “documents5” must be specified. The remaining information is fixed.


![microsoft-app-registration-name](assets/microsoft-app-registration-2.png)

Fig. 2 - New App Registration / Name, Redirect-URI

Once the new app has been registered, the Application (client) ID and Directory (tenant) ID must be saved for later configuration:


![microsoft-app-registration-ids](assets/microsoft-app-registration-3.png)

Fig. 3 - New App Registration / Client-Id, Tenant

**Note:** The Application (client) ID will later be used as the Client ID. The Directory (tenant) ID will later be used as Tenant.


## Create client login information

In addition, client login information must be created, including a description and a validity period. After creation, the value must be saved for later configuration:


![microsoft-app-registration-secret-key](assets/microsoft-app-registration-clientsecret.png)

Fig. 4 - New App Registration / Client secret

**Note:** The value will later be used as the Client secret. The value is only visible/copyable immediately after creation (the **value** must be used as the *Client secret*, **not** the *Secret ID*).


## App API-Permissions

API permissions must be added for the app. The following API permissions are required:

- User.Read (Microsoft Graph API), this permission is necessary to log in users
- Files.ReadWrite.All (Microsoft Graph API), this permission is necessary to share the selected files with other people and grant write access

**Note:** Administrator approval should be granted directly for both API permissions. If this is not done, users will have to give their additional consent later.

For the registered app, select **API permissions** in Microsoft Entra ID under Manage:


![api-permissions-1](assets/microsoft-app-registration-permissions1.png)

Fig. 5 - API-Permissions

Select **Add a permission** and choose **Microsoft Graph**:


![api-permissions-2](assets/microsoft-app-registration-permissions2.png)

Fig. 6 - Add a permission / Microsoft Graph API

**Delegated permissions** must be used:


![api-permissions-3](assets/microsoft-app-registration-permissions3.png)

Fig. 7 - Add a permission / Microsoft Graph API / Delegated permissions

The permission can be searched for, selected, and added:


![api-permissions-4](assets/microsoft-app-registration-permissions4.png)

Fig. 8 - Add a permission / Microsoft Graph API / Delegated permissions / User.Read

The process must be repeated for the **Files.ReadWrite.All** permission.

Administrator consent must be granted:


![api-permissions-5](assets/microsoft-app-registration-permissions5.png)

Fig. 9 - Grant administrator consent


![api-permissions-6](assets/microsoft-app-registration-permissions6.png)

Fig. 10 - Correct API permissions

[PDF Version](config-microsoft.pdf?b=2026-01-13)