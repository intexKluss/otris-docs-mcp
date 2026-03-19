---
title: "AutoLogin script"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/azure/config-autologin.html"
---

# AutoLogin script

In Documents 5, an AutoLogin script is provided for Microsoft Entra ID connectivity. If this should be used, the property 'autoLoginScript' must be set on the client with the value 'azureAutologinScript'. Additionally the the property 'adminUser' must be set on the client. There the login for a user must be specified, who has the rights to create and modify users via the portal scripting.

The AutoLogin script is controlled by the 'userLoginConfig' in the [ME-ID / AzureConfig](../azure/config-azure-config.html).

The script first checks whether the user exists in the system. If this is not the case, it checks, if 'importUserOnLogin' is set to 'true'. If this is the case, each tenant config is imported in the order, they are in the 'AzureConfig' is queried to see if the user exists in the respective tenant. If this is met, the user is imported from there with the settings in the 'userImportConfig' for the tenant. All other tenant configs are ignored, even if the user exists in one of the tenants.

If the user already exists in the system, it is checked whether 'updateUserOnLogin' is set to 'true'.
If this is the case, the tenant config used for the user is determined and an update is performed for the user based on this.
The same process is pass through when running the import script including all callbacks.

[PDF Version](../azure/config-autologin.pdf?b=2026-02-12)