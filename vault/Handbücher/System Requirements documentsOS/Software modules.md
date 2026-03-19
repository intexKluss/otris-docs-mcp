---
title: "System Requirements documentsOS"
source: "https://otris.software/documents/manuals/books/system-requirements-en/server-modules.en.html"
---

## Additional information for individual modules


### DOCUMENTS-Manager

The **DOCUMENTS Manager** application is an administrative tool for configuring a DOCUMENTS client.
The main functions include, for example: setting up user accounts and profiles, creating and editing file types, configuring folders or setting up archives. The application can be run exclusively on Microsoft Windows operating systems, supported are the above mentioned Microsoft Windows Server operating systems as well as Microrosft Windows 10 and Microsoft Windows 11. The application is part of an installation under Windows (installation directory\manager) and can also be run against remote installations (Linux, Windows) as ManagerLoader (own setup for Microsoft Windows operating systems available).

**Note:** A screen resolution of 1280x1024 or higher is recommended for running DOCUMENTS Manager.


### LDAP connection / Directory Services

The following directory services are supported:

- Microsoft Active Directory
- Microsoft Azure AD
- Lotus Domino
- Novell Netware
- OpenDJ

**Important note:** For the connection of a directory service as well as the following special requirements, a conceptual check is generally required in advance:

- Cloud based directory services
- Single SignOn
- LDAP connection with parallel access to multiple domains

In these cases, the general feasibility as well as the required effort have to be individually evaluated.
To use *HTTPS* a certificate in **PKS#12** format is required (`.pfx` or `.p12` file). This must be provided in the installation environment.


### OCR (Text recognition)

This module integrates components of other manufacturer. These components are available for Windows operating systems as well for Linux distributions.


### CREATOR

The optional module CREATOR (for otris legal SUITE) requires a current version of the JavaScript runtime environment *node.js* to be installed on the application server. The installation must be configured so that it can be called from the command line.


### Using LibreOffice for PDF conversion of Microrosft Office files

The LibreOffice application can be used to convert Microsoft Office files of type ".docx", „.xslx“ and „.pptx“ into a PDF file at runtime on the application server. This allows the file to be printed with the file as a "total" PDF file. Furthermore, the PDF file generated at runtime is used to simulate a preview of the Office file in the browser. Both functions require the LibreOffice application to be installed on the application server.

**Important note:** The simulated preview of these Office documents is subject to limitations: Some layout options and format attributes in Microsoft Office  documents are displayed differently after conversion or are not supported at all. This concerns e.g. various fonts, AutoShapes, Indexes, Pivot tables, various other
Microsoft Office form functions and formatting or hyperlinks. A complete fidelity of the converted document to the original document cannot be guaranteed.