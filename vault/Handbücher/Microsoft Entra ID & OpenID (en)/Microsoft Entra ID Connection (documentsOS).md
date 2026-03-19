---
title: "Microsoft Entra ID Sync"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/azure/azure-intro-d6.html"
---

# Microsoft Entra ID Sync

DocumentsOS allows a user and group import as well as a synchronization of Documents users and
Documents access profiles with a Microsoft Entra ID (formerly known as Microsoft Azure AD).

Via a *Job Script* the import can be performed once or in regular intervals. When using *documentsOS*, an import can
also be performed manually by action.
Via an *AutoLogin Script* the import or synchronization is also enabled during the login process.
In addition to the basic import, various *Callbacks* are available with which, among other things, the assignment to
existing users as well as the setting of rights, access profiles and properties can be controlled on a project-specific
basis.

Before use, the following **necessary configurations** must be made in [Microsoft Entra ID](../azure/config-azure.html) and
in the [AdminCenter](../azure/config-admincenter.html). In addition, **optional configurations** can be set for
the [Callbacks](../azure/config-callbacks.html).

When *upgrading from Documents 5 to documentsOS* with existing Microsoft Entra ID Sync, existing configurations are
automatically applied and can subsequently be edited in [AdminCenter](../azure/config-admincenter.html).

[PDF Version](../azure/azure-intro-d6.pdf?b=2026-02-12)