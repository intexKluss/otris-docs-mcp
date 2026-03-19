---
title: "Login Script"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/azure/config-loginscript.html"
---

# Login Script

As of Documents 5.0i HF3, a login script is provided for the Microsoft Entra ID connection. If this is to be used
the property `loginScript` must be set with the value `otrOpenId_azureLoginScript` at the client.

The script can be used to prevent users who have been imported via Microsoft Entra ID from logging in with user name / password.
password.

The script checks whether the property `noOIDCheck` = 0 in combination with `azureUserId` is set on the user.
These properties are set by Microsoft Entra ID Import for all imported users. If `noOIDCheck` is not set or is set to 1
the login will be performed normally regardless of `azureUserId`.

[PDF Version](../azure/config-loginscript.pdf?b=2026-02-12)