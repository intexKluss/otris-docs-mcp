---
title: "Introduction"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-en/"
---

# Introduction

With the **otrDriveConnect** extension, files can be uploaded from a document register to a cloud drive and downloaded again. The following cloud providers are currently supported:

- Microsoft OneDrive via Microsoft Graph API, see Configuration in Microsoft Entra ID
- Google Drive via Google Drive API and Google Docs API (from documentsOS 6.2.0), see auch Configuration in Google Cloud Console

The most important use case is collaborative editing of **Office documents** with multiple people:

- Files from Documents are shared with other users and made available in the respective drive (Microsoft One Drive or Google Drive) of the creator/owner.
- Other users are automatically notified by email, and the shared file can now be edited collaboratively.
- Once editing is complete, the file can be downloaded again from the creator/owner's respective drive and made available as a new document version.

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

[PDF Version](index.pdf?b=2026-01-13)