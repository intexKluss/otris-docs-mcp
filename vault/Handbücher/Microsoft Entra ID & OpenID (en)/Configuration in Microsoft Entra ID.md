---
title: "Settings in Microsoft Entra ID"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/azure/config-azure.html"
---

# Settings in Microsoft Entra ID


## Navigate to Microsoft Entra ID

[https://portal.azure.com/#home](https://portal.azure.com/#home)

![Azure services -> Microsoft Entra ID](../assets/azure/azure-1.png)


## Register a new app

Microsoft Entra ID → App registrations → New registration

![Microsoft Entra ID -> App registrations](../assets/azure/azure-2.png)


![Microsoft Entra ID -> App registrations -> App -> Authentication](../assets/azure/azure-3.png)


| Setting | Value | Note |
| --- | --- | --- |
| Name | otris Software: <Product name> | Example: otris software: Documents |
| Supported account types | ( 1 ) Accounts in this organizational directory only (Single tenant) | Allows only users from this organization to login |
| Redirect URI | Web - https://<HOST>/documents<5>/srv/GenericRedirectReceiver | Customize host, documents (Windows and Linux when using documentsOS) or documents5 (Linux when using Documents5) depending on Installation |


## Create Client Secret

Microsoft Entra ID → App registrations → App → Certificates & secrets → New client secret

| Setting | Value | Note |
| --- | --- | --- |
| Description | otris intitial secret | Suggestion - name not important |
| Valid until | 6 month | Suggestion - Secrets can also be limited in time shorter/longer |

Important: The value marked in red must be noted immediately, as it is only visible during creation.

![Microsoft Entra ID -> App registrations -> App -> Certificates & secrets](../assets/azure/azure-4.png)


**Important note:** As *Client Secret* the **Value** must be used and **not** the *Secret ID*.


## Set up API access

Microsoft Entra ID -> App registrations -> App -> API permissions

| API | Type | Permission name |
| --- | --- | --- |
| Microsoft Graph | Application permissions | User.Read.All |
| Microsoft Graph | Application permissions | Group.Read.All |

Caution: Administrator consent is required for both APIs. If the creating user is not an administrator, the rights are only requested, an administrator must then still agree.

![Microsoft Entra ID -> App registrations -> App -> API permissions](../assets/azure/azure-5.png)


## Create group

To be able to use the import, at least one group with users must be set up, which can then be imported. In addition, further import groups or groups for the assignment of access profiles can be created. For the exact functionality of the groups see
[ME-ID / Azure Config](../azure/config-azure-config.html#behavior-of-individual-properties).


## Provide collected information

Microsoft Entra ID -> App registrations -> App -> Overview

The following information must be provided in addition to the client-secret and at least one import-group must be provided:

| Name | Name in subsequent configuration |
| --- | --- |
| Application (client) ID | clientId |
| Directory (tenant) ID | tenantId |

[PDF Version](../azure/config-azure.pdf?b=2026-02-12)