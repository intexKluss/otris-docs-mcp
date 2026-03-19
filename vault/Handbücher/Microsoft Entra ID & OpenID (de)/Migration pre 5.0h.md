---
title: "Microsoft Entra ID Anbindung (documentsOS)"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/azure/migration.html"
---

## Migration

Bei einer bestehenden Microsoft Entra ID Anbindung müssen verschiedene Einstellungen geändert werden.


### Microsoft Entra ID Einstellungen

Microsoft Entra ID -> App registrations -> App -> Authentication

Redirect URI auf https://`<HOST>`/documents`<5>`/srv/GenericRedirectReceiver ändern oder hinzufügen (Host anpassen, `documents` (Windows bzw. Linux mit documentsOS) oder `documents5` (Linux mit Documents5) je nach Installation).

ID Tokens müssen erlaubt werden, Access Tokens sind nicht mehr zwingend erforderlich.

Alle anderen Microsoft Entra ID Einstellungen können beibehalten werden.


### Manager Eigenschaften

Folgende Einstellungen müssen im Documents Manager geändert werden.

| Eigenschaft | Ort | Alter Wert | Neu |
| --- | --- | --- | --- |
| ScriptExtensionsCallbackScripts | Mandanten Eigenschaften | otrOAuth_Callback | Ist jetzt in der AzureConfig, siehe callbacksFile |
| loginScript | Mandanten Eigenschaften | otrOAuth_OpenID_LoginManager | Es gibt kein Äquivalent, der bestehende otrOAuth_OpenID_LoginManager kann aber weiter genutzt werden. |


### otrOAuth_Service_CONFIG -> AzureConfig

| Alter Eintrag | Eintrag in AzureConfig | Hinweis |
| --- | --- | --- |
| clientId | clientId |  |
| clientSecret | clientSecret |  |
| _serviceName | entfällt |  |
| _serviceAlias | alias |  |
| _fullServiceName | entfällt |  |
| MSIMPORTreportMail | entfällt |  |
| MSIMPORTheader | entfällt |  |
| otrOAuth_ServiceEditor_ServiceSettings | entfällt |  |
| MSIMPORTgroupID | importGroupIds | Array mit Gruppen IDs, keine 1:1 Übernahme möglich |
| MSIMPORTreportLang | entfällt |  |
| MSIMPORTsendMail | entfällt |  |
| MSIMPORTdefaultLicense | defaultLicence & defaultSubGroupLicence |  |
| wellKnownOpenIdConfigURL | wellKnownOpenIdConfigURL | Kann aus dem Beispiel übernommen werden, kein Pflichtfeld mehr. |
| accessCodeParams | entfällt |  |
| linkOpenIdOnLogin | importUserOnLogin |  |
| openIdOptions | entfällt |  |

Die fehlenden Pflichtfelder (`tenantId`, `userImportConfig`, `documentsAccess`, `archiveAccess`) in der AzureConfig müssen zusätzlich gesetzt werden. Die `tenantId` kann aus der `wellKnownOpenIdConfigURL` entnommen werden oder wird vom Kunden bereitgestellt.


### web.xml

In der web.xml muss der `OauthLoginFilter` durch den `AzureLoginFilter` ersetzt werden.

[PDF Version](../azure/migration.pdf?b=2026-02-12)