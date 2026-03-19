---
title: "Microsoft Entra ID Connection (documentsOS)"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/azure/migration.html"
---

## Migration

For an existing Microsoft Entra ID connection, several settings need to be changed.


### Microsoft Entra ID settings

Microsoft Entra ID -> App registrations -> App -> Authentication

Change or add redirect URI to https://`<HOST>`/documents`<5>`/srv/GenericRedirectReceiver (Customize host, `documents` (Windows and Linux when using documentsOS) or `documents5` (Linux when using Documents5) depending on Installation).

ID tokens must be allowed, access tokens are no longer mandatory.

All other Microsoft Entra ID settings can be retained.


### Manager properties

The following settings must be changed in the Documents Manager.

| Property | Location | Old value | Neu |
| --- | --- | --- | --- |
| ScriptExtensionsCallbackScripts | Tenant properties | otrOAuth_Callback | Is now in the AzureConfig, see callbacksFile. |
| loginScript | Tenant properties | otrOAuth_OpenID_LoginManager | There is no equivalent, but the existing otrOAuth_OpenID_LoginManager can still be used. |


### otrOAuth_Service_CONFIG -> AzureConfig

| Old entry | Entry in AzureConfig | Hinweis |
| --- | --- | --- |
| clientId | clientId |  |
| clientSecret | clientSecret |  |
| _serviceName | not applicable |  |
| _serviceAlias | alias |  |
| _fullServiceName | not applicable |  |
| MSIMPORTreportMail | not applicable |  |
| MSIMPORTheader | not applicable |  |
| otrOAuth_ServiceEditor_ServiceSettings | not applicable |  |
| MSIMPORTgroupID | importGroupIds | Array with group IDs, no 1:1 transfer possible |
| MSIMPORTreportLang | not applicable |  |
| MSIMPORTsendMail | not applicable |  |
| MSIMPORTdefaultLicense | defaultLicence & defaultSubGroupLicence |  |
| wellKnownOpenIdConfigURL | wellKnownOpenIdConfigURL | Can be taken from the example, no longer a mandatory field. |
| accessCodeParams | not applicable |  |
| linkOpenIdOnLogin | importUserOnLogin |  |
| openIdOptions | not applicable |  |

The missing mandatory fields (`tenantId`, `userImportConfig`, `documentsAccess`, `archiveAccess`) in the AzureConfig must be set additionally. The `tenantId` can be taken from the `wellKnownOpenIdConfigURL` or is provided by the customer.


### web.xml

In the web.xml, the `OauthLoginFilter` must be replaced with the `AzureLoginFilter`.

[PDF Version](../azure/migration.pdf?b=2026-02-12)