---
title: "Office 365/Microsoft Entra ID Glossary"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/glossar.html"
---

# Office 365/Microsoft Entra ID Glossary


## Microsoft 365/ Office 365

Microsoft 365 is a subscription in which various Microsoft products such as Word, Excel, PowerPoint as well as services such as OneDrive for data backup and Microsoft Entra ID for user management are offered.
The product scope depends on the version and the price per user/month.


## Microsoft Entra ID

The Microsoft Entra ID (ME-ID) enterprise identity service provides single sign-on (SSO) and multi-factor authentication. With Microsoft Entra ID (IDP - Identity provider), the deposited Microsoft users can log on to various applications such as Documents (SP - Service provider).


## OAuth 2 and OpenID Connect

The connection between the applications (SP) and Microsoft Entra ID (IDP) is realized via the OAuth2 and OpenID Connect protocols. The communication protocols are intended for the data transfer of, for example, user information (OAuth 2) and the external login via login mask of the IDP (OpenID Connect).


## Supported connections between Microsoft Entra ID and Documents

Connections, permissions, and general settings are managed mainly in Microsoft Entra ID Administration.

- User import from a user group provisioned in Microsoft Entra ID (configurable job)
- Login via Microsoft's login mask
Support for SSO (login only required once if user is logged into Word, for example)
Support of 2FA (2 factor authentication)
General authorization control
- (Optional - at cost) query general data via Graph API

[PDF Version](glossar.pdf?b=2026-02-12)