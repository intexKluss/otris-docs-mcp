---
title: "User Guide"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-en/userguide.html"
---

# User Guide

The **otrDriveConnect** extension allows files from Documents to be shared with other people so that they can be edited together in a suitable program, for example, and then updated again in Documents after editing. This manual explains the settings users need to configure to connect to the cloud drive provider and the actions available for sharing and updating documents.

The following cloud providers are currently supported:

- Microsoft OneDrive
- Google Drive (from documentsOS 6.2.0)

**Notes:** In principle, all file types can be shared. However, editing shared files is only possible for supported **Office documents**. Depending on the cloud provider, these documents are then opened directly in the browser with the respective application for editing, e.g., Word Online, Excel Online, or PowerPoint Online for documents shared via Microsoft OneDrive, or Google Docs for documents shared via Google Drive (if they can be automatically converted by Google Docs). When using Google Drive, other people can only edit the document if they sign in with a *Google account*. If this is not done, these persons will only have *read permissions*. Changes made to documents in the respective browser applications of the providers are usually saved within a few seconds. To ensure that all changes are included when downloading the edited document, open documents should be closed. The following overview shows the editing options for Office documents (as of October 2025):

| File format | Microsoft OneDrive | Google Drive |
| --- | --- | --- |
| .docx (Microsoft Word Format) | ✓ 1 | ✓ 2 |
| .xlsx (Microsoft Excel Format) | ✓ 1 | ✓ 2 |
| .pptx (Microsoft PowerPoint Format) | ✓ 1 | ✓ 2 |
| .vsdx (Microsoft Visio Format) | ✓ 1 | ✗ |
| .odt (OpenDocument-Text) | ✓ 3 | ✗ |
| .ods (OpenDocument-Table) | ✓ 3 | ✗ |
| .odp (OpenDocument-Presentation) | ✓ 3 | ✗ |
| .odg (OpenDocument-Graphic) | ✗ | ✗ |
| .doc (old Microsoft Word Format) | ✗ 4 | ✓ 2 |
| .xls (old Microsoft Excel Format) | ✗ 4 | ✓ 2 |
| .ppt (old Microsoft PowerPoint Format) | ✗ 4 | ✓ 2 |
| .vsd (old Microsoft Visio Format) | ✗ 4 | ✗ |
| .txt (Plain text file) | ✓ 5 | ✗ |

Standard programs for editing:

- 1 Word Online, Excel Online, PowerPoint Online or Visio for the web
- 2 Automatic conversion with Google Docs
- 3 With formatting differences (compatibility issues)
- 4 Cannot edit with Word Online, Excel Online, PowerPoint Online, or Visio for the web; file opens in read-only mode
- 5 When opened in the online text editor

The following descriptions and illustrations provide information on using *Microsoft OneDrive*. When using *Google Drive*, the settings are similar, with additional notes provided in some places.


## Connecting a cloud drive service

In order to share files with other people in a cloud drive, each user must connect their personal account with a service to Documents.

1. Select the Apps and Services entry from the user menu in documentsOS. If Documents5 is used, the entry in the user menu is called External Providers.


![user-external-services-usermenu](assets/user-external-services-usermenu.png)

Fig. 58 - Menu - Apps and Services

1. A dialog box opens showing all services that can be connected (the services were previously provided by the system administrator). For the otrDriveConnect extension, at least one service, either Microsoft OneDrive or Google Drive, must be available.


![user-external-services-msinactive](assets/user-external-services-inactive.png)

Fig. 59 - Example: Inactive service Microsoft

1. To connect a service, click on the corresponding tile. A dialog box will open in which you will be asked to enter your login details for the service account.


![user-external-services-mslogin](assets/user-external-services-mslogin.png)

Fig. 60 - Example: Microsoft login

Please note that your browser may block pop-up windows. These must then be enabled. After successful authentication, the service tile will turn green (service is now active).


![user-external-services-msactive](assets/user-external-services-active.png)

Fig. 61 - Example: Active service Microsoft

Additional settings can be displayed or edited using the action buttons on the tile:

- logs out of the service
- displays information about the service


## Make files available in the cloud drive

To share files with other people, select a file in the list view of a document register and choose the **Upload to Cloud Drive** action (button on the document register or context menu / right mouse button):


![user-upload-button](assets/user-upload-1.png)

Fig. 62 - Action Upload to cloud drive


![user-upload-contextmenu](assets/user-upload-2.png)

Fig. 63 - Context menu Upload to cloud drive

In the following dialog box, specify the people with whom you want to share the file.
The **Cloud Drive owner** is displayed in the dialog box; this field cannot be edited.
The **Selected provider** field can only be changed if multiple providers have been configured and connected.
A person is added by entering their email address and clicking the **Add person** button. Before adding a person, you can optionally enter a message that will be displayed to the person in the subsequent email notification *(as of documentsOS 6.1.0)*. If the file is only to be shared with one other person, it is sufficient to enter the corresponding email address; the **Add person** button does not need to be clicked.
Persons who have already been added are displayed in the list. Added persons can be deleted from the list again using the **Remove person** button. Persons for whom an additional message has been specified are indicated by a corresponding icon.
The **Can edit** or **Can view** options specify whether the selected person is granted read-only access to the file or is also allowed to edit it.

**Note:** When using *Google Drive*, other people can only edit the document if they log in with a *Google account*. If they do not do so, they will only have *read permissions*, regardless of the setting selected here.

File sharing is completed when the **Share document** button is clicked. The **Cancel** button ends the action without granting access.


![user-share-start](assets/user-share-1.png)

Fig. 64 - Document release

Once a file has been shared, it is marked with a corresponding symbol (cloud) in the list view. Shared files cannot be changed in Documents; changes are only possible once sharing has been terminated. By clicking on the symbol, the cloud drive owner can open the file directly in their cloud drive.


![user-share-end](assets/user-share-2.png)

Fig. 65 - Released document

People with whom the file has been shared receive an email with a link and can open the file via this link and, depending on their permissions, either read or edit it.


![user-share-email](assets/user-email-1.png)

Fig. 66 - Email notification

For security reasons, persons may be asked to re-enter their email address to request a security code when they want to open the document via the link. In this case, another email is usually sent containing a verification code, which must then be entered in order to access the document.

**Note:** If files are shared in Microsoft Office format when using *Microsoft OneDrive*, e.g., Word files (docx), Excel files (xlsx), or PowerPoint files (pptx), they can be easily opened with the corresponding Microsoft Office product. For other formats, e.g. PDF files, a corresponding program must be available. When using *Google Drive*, the same applies: documents are generally opened using *Google Docs*.


## Update files from Cloud Drive

If a file needs to be updated in Documents, e.g., after being edited jointly with other people, select this file in the list view of the document register and choose the **Download from cloud drive** action (button in the document register or context menu / right mouse button):


![user-download-button](assets/user-download-1.png)

Fig. 67 - Action Download from cloud drive


![user-download-contextmenu](assets/user-download-2.png)

Fig. 68 - Context menu Download from cloud drive

In the following dialog box, specify which option should be used for the update. The following options are available:

- Delete document from cloud drive: When sharing is ended, the file is deleted from the owner's cloud drive.
- Revoke sharing permissions in the cloud drive: When sharing is ended, permissions for the file in the owner's cloud drive are removed for other people. This option can only be selected individually if the file is not also deleted.
- Additionally save as PDF file: When sharing is ended, the file is also saved as a PDF file in Documents. This option is only available for certain document types, e.g., Word files (docx), Excel files (xlsx), or PowerPoint files (pptx).

**Note:** The option *Additionally save as PDF file* is only available when using *Microsoft OneDrive* and not when using *Google Drive*.

The update is performed when the **End sharing** button is clicked. The **Cancel** button terminates the action without performing an update.


![user-end-sharing](assets/user-end-sharing-1.png)

Fig. 69 - End sharing

**Attention:** A sharing can also be canceled by clicking the **Abort sharing** button. In this case, an additional confirmation dialog box will open for security reasons, where you can use additional options to delete the file from the cloud drive or remove permissions.


![user-cancel-sharing](assets/user-end-sharing-2.png)

Fig. 70 - Abort sharing

If a file has been updated, the previous icon (cloud) is removed. The file is made available as a new version. An additional PDF file is provided if this was selected previously (only with *Microsoft OneDrive*).


![user-sharing-finish](assets/user-end-sharing-3.png)

Fig. 71 - Updated file


### Error messages when downloading from the cloud drive

Errors may occur when ending the share and downloading.
The following message is displayed if a person still has the file open. The file is then downloaded but not deleted from the cloud drive:


![user-end-sharing-error1](assets/user-end-sharing-error1.png)

Fig. 72 - Error message when files are still open

The following message is displayed if the file is no longer available in the user's cloud drive. The file is then released again in Documents, but not updated:


![user-end-sharing-error2](assets/user-end-sharing-error2.png)

Fig. 73 - Error message for files no longer available in Cloud Drive


## Overview folder for shared files

If the appropriate settings have been defined administratively, users have access to an overview folder called **Cloud Checkin/Checkout**, which displays all currently shared (and therefore locked) files belonging to the respective user.


![user-folder-checkincheckout](assets/user-folder-checkincheckout.png)

Fig. 74 - Overview folder shared files

The files can be opened via the folder, and the same options for ending sharing are available as in the document register.

[PDF Version](userguide.pdf?b=2026-01-13)