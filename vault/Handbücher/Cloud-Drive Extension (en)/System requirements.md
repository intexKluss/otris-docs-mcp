---
title: "System requirements"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-en/requirements.html"
---

# System requirements

The following requirements must be met in order to use the extension:

- Licensing:
The extension must be licensed (the DriveConnect module must be included in the licence).
The extension can only be used by users with a named user licence.
- Documents version:
Documents5: At least Documents version 5.0i or higher must be used.
documentsOS: At least documentsOS version 6.0.0 or higher must be used. When using Google Drive, at least version 6.2.0 or higher must be used.
- Firewall: The Documents server must be able to communicate with the selected provider:
Microsoft: *microsoftonline.com, *.graph.microsoft.com, *.sharepoint.com
Google: drive.googleapis.com, docs.googleapis.com, oauth2.googleapis.com, accounts.google.com, *.googleusercontent.com
- SSL/TLS: Documents must be configured via SSL. The SSL certificate should be certified by a trusted root certificate authority (CA).
- People who share files from Documents need access to the respective Drive:
Microsoft: Microsoft OneDrive in the Microsoft Entra ID where the app registration is configured
Google: Google Cloud project, in wich the relevant APIs have been activated

[PDF Version](requirements.pdf?b=2026-01-13)