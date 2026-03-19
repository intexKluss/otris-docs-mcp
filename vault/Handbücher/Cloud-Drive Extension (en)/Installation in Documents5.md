---
title: "Installation and optional additional configurations in Documents5"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-en/installation-documents5.html"
---

# Installation and optional additional configurations in Documents5

The following describes the installation and additional configuration options when using **Documents5**.


## Installation

To install (deploy) the extension, a script must be created using Documents Manager and executed once:

- Script name: The script name can be chosen freely.
- Source code from server/scriptlibs: the value must be otrDriveConnect_INIT
- Source code: no source code may be specified

**Note:** In order for the script to run, either a valid job user must be specified under Documents Settings / Documents (Basic), or a valid user login must be stored in the script on the Test tab.


![install-script-settings](assets/install-script-settings.png)

Fig. 42 - Script settings

If the installation was successful, the script will output the response **SUCCESS**:


![install-script-message](assets/install-script-message.png)

Fig. 43 - Successful installation

If the installation was not successful, corresponding messages will be displayed, which must then be taken into account. Possible messages include, for example:

- a missing license for the extension
- a version of the underlying Documents installation that is too old


## Optional additional configurations


### Change to register actions for uploading and downloading

During installation, the global property (Documents settings / Properties) **GlobalRegisterAction=otrDriveConnect** is set. This automatically provides the actions for cloud drive upload and download for all document registers of all existing file types. If new file types with document registers are created later, the actions are also automatically available on these registers. If you want the actions to be available for certain file types and/or only certain document registers, the following changes are possible:

- Disable actions on all document registers of a specific file type: File type property GlobalRegisterAction=-otrDriveConnect ("-" before the action name)
- Disable actions on specific document registers of a file type: Register property GlobalRegisterAction=-otrDriveConnect ("-" before the action name)


### Provision of a user overview for shared files

The Documents Manager can be used to set the additional user property **hasDriveConnectFolder** to the value 1 (default = 0 or not set). If this is set, users receive an additional folder called **Cloud Checkin/Checkout**, which contains all files that have been shared by this user with other people and are therefore locked. The shares can be terminated directly there using the appropriate actions.

[PDF Version](installation-documents5.pdf?b=2026-01-13)