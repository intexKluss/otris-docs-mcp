---
title: "Job script"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/azure/config-jobscript.html"
---

# Job script

In the scriptlibs-directory the script `azureUserImportJob` is present. This can be used via a wrapper script as a job for the regular import of users.

![Microsoft Entra ID User Import Job Wrapper script](../assets/azure/autologin-script-manager.png)


Users who cannot be assigned an Microsoft Entra ID user during import are automatically blocked. If this should be prevented, the property `noOIDCheck` can be set on the user. It is recommended that this property is set for technical users and editors. These users will then be completely ignored. Alternatively, the [callbacks](../azure/config-callbacks.html)`modifyNewBlockedSystemUser` and
`onModifyNotMatchedSystemUser` can be used.

During the import, the `loginAlias` and `azureIdentifier` properties are set on the user. These are relevant for the process of the import and the login and should therefore not be changed. If necessary the property `loginAlias` supports multiple comma separated values.


## Supplement from 5.0h HF1

As of version 5.0h HF1, the import of access profiles is additionally executed via the import job. However, this is only if the [ME-ID / Azure Config](../azure/config-azure-config.html) contains the `accessProfileImportConfig`.

[PDF Version](../azure/config-jobscript.pdf?b=2026-02-12)