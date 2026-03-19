---
title: "Provisioning and optional additional configurations in documentsOS"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-en/installation-documentsOS.html"
---

# Provisioning and optional additional configurations in documentsOS

The following describes the provisioning and additional configuration options when using **documentsOS**.


## General

Editors with the Documents Administrator role have access to the AdminCenter by default after logging in to the web client and can configure settings via the Cloud Drive connection extension. Once the extension has been activated, access profiles and/or users who can configure additional settings can be specified via role management.


## Activation/deactivation, settings, permissions

Activation is performed in the AdminCenter via the Extensions folder. The Activate action must be performed on the extension.


![admincenter-1](assets/admincenter-1.png)

Fig. 34 - Inactive Extension

Once the extension has been activated, it is displayed in the AdminCenter under activated extensions and allows further general settings to be made via the Settings action. In addition, an overview folder *Locked Cloud Documents* is activated in the AdminCenter.


![admincenter-2](assets/admincenter-2.png)

Fig. 35 - Active Extension


![admincenter-3](assets/admincenter-3.png)

Fig. 36 - Settings dialog for apps and services

For information on configuring *External services*, see the chapter [Registering applications for users](config-documents.html).


![admincenter-4](assets/admincenter-4.png)

Fig. 37 - Overview folder Locked cloud documents (1)

If documents are later shared by users in their cloud drive, they can be *unlocked* via administrative access.


![admincenter-5](assets/admincenter-5.png)

Fig. 38 - Overview folder Locked cloud documents (2)

To unlock a document, select it and perform the corresponding action *Unlock*.


![admincenter-6](assets/admincenter-6.png)

Fig. 39 - Overview folder Locked cloud documents (3)

Clicking **OK** unlocks the document in the file, allowing it to be edited again. The document and existing shares for other people remain in the owner's cloud drive.

This overview folder and the associated settings are also visible to users who have been optionally specified for this extension via role management in the AdminCenter.


![admincenter-7](assets/admincenter-7.png)

Fig. 40 - Role management with optional additional access settings

By clicking on the corresponding role (by default, an *admin* role with full access to the cloud drive connection is available), you can specify optional access profiles and/or users in the corresponding form who should be granted configuration permissions.

- Add: Click in the corresponding field and select from the AutoComplete list
- Remove: Click on the corresponding icon in the respective row

If the extension is deactivated, you can optionally specify whether shared files should be unlocked. After deactivation, the overview folder in the AdminCenter is also removed, meaning that document locks can no longer be removed.


![admincenter-8](assets/admincenter-8.png)

Fig. 41 - Deactivation dialog


## Optional additional configurations


### Change to register actions for uploading and downloading

During installation, the global property (Documents settings / Properties) **GlobalRegisterAction=otrDriveConnect** is set. This automatically provides the actions for cloud drive upload and download for all document registers of all existing file types. If new file types with document registers are created later, the actions are also automatically available on these registers. If you want the actions to be available for certain file types and/or only certain document registers, the following changes are possible:

- Disable actions on all document registers of a specific file type: File type property GlobalRegisterAction=-otrDriveConnect ("-" before the action name)
- Disable actions on specific document registers of a file type: Register property GlobalRegisterAction=-otrDriveConnect ("-" before the action name)


### Provision of a user overview for shared files

The Documents Manager or the User management in the AdminCenter can be used to set the additional user property **hasDriveConnectFolder** to the value 1 (default = 0 or not set). If this is set, users receive an additional folder called **Cloud Checkin/Checkout**, which contains all files that have been shared by this user with other people and are therefore locked. The shares can be terminated directly there using the appropriate actions.

[PDF Version](installation-documentsOS.pdf?b=2026-01-13)