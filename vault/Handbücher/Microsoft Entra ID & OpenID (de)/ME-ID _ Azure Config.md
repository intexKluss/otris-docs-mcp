---
title: "ME-ID / AzureConfig"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/azure/config-azure-config.html"
---

# ME-ID / AzureConfig

Über die AzureConfig wird die Verbindung zum Microsoft Entra ID und der Benutzerimport gesteuert. Die folgende
Beispielkonfiguration enthält alle von uns gesetzten Standardwerte. Eine genaue Aufschlüsselung wie welcher Wert
funktioniert und welche Pflichtparameter gesetzt werden müssen, wird nachfolgend erläutert.


```json
{
    "tenants": [
        {
            "tenantId": "",
            "clientId": "",
            "clientSecret": "",
            "wellKnownOpenIdConfigURL": "https://login.microsoftonline.com/{tenantId}/v2.0/.well-known/openid-configuration",
            "alias": "Azure",
            "userImportConfig": {
                "importGroupIds": [],
                "callbacksFile": "",
                "importSubGroups": false,
                "defaultLogin": "userPrincipalName",
                "azureUserProperties": [],
                "azureUserRelationship": "",
                "updateLogin": false,
                "defaultAccessProfileMappingKey": "",
                "skipAccessProfilesMapping": false,
                "setAccessProfilesType": "add",
                "useTransitiveMemberOf": false,
                "defaultDocumentsAccess": false,
                "defaultSubGroupDocumentsAccess": false,
                "documentsAccess": [],
                "defaultArchiveAccess": false,
                "defaultSubGroupArchiveAccess": false,
                "archiveAccess": [],
                "defaultLicence": "concurrent_open",
                "defaultSubGroupLicence": "concurrent_open",
                "licence": {
                    "Named": [],
                    "Concurrent_open": [],
                    "Shared": [],
                    "Concurrent_standard": []
                },
                "defaultStatus": "released",
                "defaultSubGroupStatus": "released",
                "status": {
                    "inherited": [],
                    "released": [],
                    "registered": [],
                    "blocked": [],
                    "removable": []
                }
            },
            "userLoginConfig": {
                "importUserOnLogin": false,
                "updateUserOnLogin": false
            },
            "accessProfileImportConfig": {
                "importGroupIds": [],
                "importSubGroups": false,
                "includeHidden": false,
                "defaultName": "displayName",
                "addUsersDuringUserImport": true,
                "updateProfileName": false,
                "updateDisplayName": false
            }
        }
    ]
}
```

{
    "tenants": [
        {
            "tenantId": "",
            "clientId": "",
            "clientSecret": "",
            "wellKnownOpenIdConfigURL": "https://login.microsoftonline.com/{tenantId}/v2.0/.well-known/openid-configuration",
            "alias": "Azure",
            "userImportConfig": {
                "importGroupIds": [],
                "callbacksFile": "",
                "importSubGroups": false,
                "defaultLogin": "userPrincipalName",
                "azureUserProperties": [],
                "azureUserRelationship": "",
                "updateLogin": false,
                "defaultAccessProfileMappingKey": "",
                "skipAccessProfilesMapping": false,
                "setAccessProfilesType": "add",
                "useTransitiveMemberOf": false,
                "defaultDocumentsAccess": false,
                "defaultSubGroupDocumentsAccess": false,
                "documentsAccess": [],
                "defaultArchiveAccess": false,
                "defaultSubGroupArchiveAccess": false,
                "archiveAccess": [],
                "defaultLicence": "concurrent_open",
                "defaultSubGroupLicence": "concurrent_open",
                "licence": {
                    "Named": [],
                    "Concurrent_open": [],
                    "Shared": [],
                    "Concurrent_standard": []
                },
                "defaultStatus": "released",
                "defaultSubGroupStatus": "released",
                "status": {
                    "inherited": [],
                    "released": [],
                    "registered": [],
                    "blocked": [],
                    "removable": []
                }
            },
            "userLoginConfig": {
                "importUserOnLogin": false,
                "updateUserOnLogin": false
            },
            "accessProfileImportConfig": {
                "importGroupIds": [],
                "importSubGroups": false,
                "includeHidden": false,
                "defaultName": "displayName",
                "addUsersDuringUserImport": true,
                "updateProfileName": false,
                "updateDisplayName": false
            }
        }
    ]
}Unter `tenants` können mehrere Konfigurationen abgelegt werden. Jede Konfiguration muss dabei als eigenes Objekt
innerhalb des Arrays angelegt werden. Alle möglichen Einstellungen sind in der Tabelle `Tenant` beschrieben.

Innerhalb eines Tenants gibt es noch die beiden Objekte `userImportConfig` und `userLoginConfig`. Über diese kann der
Import aus Microsoft Entra ID und der Login von Benutzern gesteuert werden. Mögliche Einstellungen sind in den Tabellen
`User Import` und `User Login` beschrieben.


## Tenant

| Key | Typ | Default | Pflichtparameter | Version | Beschreibung |
| --- | --- | --- | --- | --- | --- |
| tenantId | String |  | ja | 5.0h | Die Tenant ID (Mandanten-ID) des Microsoft Entra ID. Kann von der Übersichtsseite bezogen werden. |
| clientID | String |  | ja | 5.0h | Die Client ID (Anwendungs-ID (Client)) der Applikation, über die Documents den Zugang zum Microsoft Entra ID erhält. |
| clientSecret | String |  | ja | 5.0h | Ein Client Secret für die Applikation, über die Documents den Zugang zum Microsoft Entra ID erhält. |
| wellKnownOpenIdConfigURL | String | https://login.microsoftonline.com/ {tenantId}/v2.0/.well-known/openid-configuration | nein | 5.0h | URL, über die sich Documents die OpenId Konfiguration abholen kann. Im Normalfall kann die URL aus dem Beispiel genutzt werden. Der Platzhalter {tenantId} muss nicht ersetzt werden. |
| authorizeTokenIssuerURL | String | https://login.microsoftonline.com/ {tenantId}/oauth2/v2.0/authorize | nein | 5.0h | URL, über die sich Documents authentifizieren kann. Im Normalfall kann die URL aus dem Beispiel genutzt werden. Der Platzhalter {tenantId} muss nicht ersetzt werden. |
| alias | String |  | nein | 5.0h | Parameter, über den mehrere verschiedene Microsoft Entra ID Anbindungen unterschieden werden können. Um mögliche Probleme zu vermeiden sollten keine Leer- oder Sonderzeichen verwendet werden. |
| userImportConfig | Objekt |  | ja | 5.0h | Die Konfiguration für den User Import. |
| userLoginConfig | Objekt |  | (nein) | 5.0h | Die Konfiguration für den User Login. |
| accessProfileImportConfig | Objekt |  | nein | 5.0h HF1 | Die Konfiguration für den Import von Zugriffsprofilen. |


## User Import (userImportConfig)

In der `userImportConfig` wird der allgemeine Import von Benutzern verwaltet.

| Key | Typ | Default | Pflichtparameter | Version | Beschreibung |
| --- | --- | --- | --- | --- | --- |
| archiveAccess | Array |  | nein | 5.0h | Die IDs der Microsoft Entra ID Gruppen, welche dem Benutzer Archivzugang geben. |
| azureUserProperties | Array |  | nein | 5.0h HF2 | Über das Array können Attribute des Microsoft Entra ID Benutzers gezielt abgefragt werden. Für eine Auflistung der möglichen Attribute siehe https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#properties. Achtung: Wenn dieser Key genutzt wird, werden die Default Attribute nicht mehr automatisch angefragt, es werden nur die hier angegebenen und id, userPrincipalName und das unter defaultLogin angegebene Attribut angefragt. |
| azureUserRelationship | String |  | nein | 5.0h HF2 | Über das Feld kann eine Beziehung des Microsoft Entra ID Benutzers zusätzlich abgefragt werden. Für eine Auflistung der möglichen Beziehungen siehe https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#relationships. Es können nur Beziehungen abgefragt werden, die mit Supports $expand. gekennzeichnet sind (Stand 10.08.2022 appRoleAssignments, directReports, extensions, manager, memberOf, ownedDevices, ownedObjects und registeredDevices) Achtung: Das benutzen dieser Eigenschaft wird die Performance des Imports negativ beeinflussen, da zusätzliche Anfragen an Microsoft Entra ID gemacht werden. Wenn die Beziehung nur für einzelne Benutzer benötigt wird bieten sich bereitgestellte API Methoden in einem Callback an. |
| callbacksFile | String |  | nein | 5.0h | Der Name des Portalskripts, in dem die Callbacks implementiert sind. |
| defaultAccessProfileMappingKey | String |  | nein | 5.0h | Das Feld der Microsoft Entra ID Gruppe, welches für die Zuordnung zu Zugriffsprofilen in Documents genutzt werden soll. Kann über den Callback mapAccessProfiles genauer festgelegt werden. |
| defaultArchiveAccess | Boolean | false | nein | 5.0h HF2 | Legt fest, ob alle Benutzer der in importGroupIds angegebenen Gruppen Archivzugang bekommen sollen. |
| defaultDocumentsAccess | Boolean | false | nein | 5.0h HF2 | Legt fest, ob alle Benutzer der in importGroupIds Gruppen Documentszugang bekommen sollen. |
| defaultLicence | String | concurrent_open | nein | 5.0h | Legt fest, welche Lizenz Benutzern der in importGroupIds angegebenen Gruppen zugewiesen wird. Mögliche Werte sind "concurrent_standard", "concurrent_open", "named" und "shared". |
| defaultLogin | String | userPrincipalName | nein | 5.0h | Das Attribut des Microsoft Entra ID Nutzers, welches für den Login in Documents genutzt werden soll. Kann über Callbacks genauer festgelegt werden. |
| defaultStatus | String | released | nein | 5.0h | Legt fest, welcher Status Benutzern der in importGroupIds angegebenen Gruppen zugewiesen wird. Mögliche Werte sind "inherited", "released", "registered", "blocked" und "removable". |
| defaultSubGroupArchiveAccess | Boolean | false | nein | 5.0h HF2 | Legt fest, ob alle Benutzer von Untergruppen der in importGroupIds angegebenen Gruppen Archivzugang bekommen sollen. |
| defaultSubGroupDocumentsAccess | Boolean | false | nein | 5.0h HF2 | Legt fest, ob alle Benutzer von Untergruppen der in importGroupIds angegebenen Gruppen Documentszugang bekommen sollen. |
| defaultSubGroupLicence | String | concurrent_open | nein | 5.0h | Legt fest, welche Lizenz Benutzern von Untergruppen der in importGroupIds angegebenen Gruppen zugewiesen wird. Mögliche Werte sind "concurrent_standard", "concurrent_open", "named" und "shared". |
| defaultSubGroupStatus | String | released | nein | 5.0h | Legt fest, welches Status Benutzern von Untergruppen der in importGroupIds angegebenen Gruppen zugewiesen wird. Mögliche Werte sind "inherited", "released", "registered", "blocked" und "removable". |
| documentsAccess | Array |  | nein | 5.0h | Die IDs der Microsoft Entra ID Gruppen, welche dem Benutzer Documentszugang geben. |
| importGroupIds | Array |  | ja | 5.0h | Die IDs der Microsoft Entra ID Gruppen, welche importiert werden sollen. |
| importSubGroups | Boolean | false | nein | 5.0h | Schalter, ob Untergruppen der in importGroupIds importierten Gruppen ebenfalls importiert werden sollen. |
| licence | Objekt |  | nein | 5.0h | Ein Objekt, welches alle möglichen Lizenztypen enthält. Den Lizenztypen werden über ein Array die Microsoft Entra ID Gruppen zugeordnet, welche diesen Lizenztyp erhalten sollen. Mögliche Lizenztypen sind Named, Concurrent_open, Shared und Concurrent_standard. Wenn ein Benutzer mehreren Gruppen zugeordnet ist werden die Lizenzen nach der folgenden Priorität gesetzt: Named > Concurrent_open > Shared > Concurrent_standard. Überschreibt defaultLicence und defaultSubGroupLicence. |
| setAccessProfilesType | String | add | nein | 5.0h | Legt fest, wie Zugriffsprofile synchronisiert werden sollen. Mit der Option add werden Zugriffsprofile aus dem Microsoft Entra ID zu den aktuell bestehenden ergänzt, mit der Option replace werden bestehende Zugriffsprofile mit denen aus dem Microsoft Entra ID ersetzt. |
| skipAccessProfilesMapping | Boolean | false | nein | 5.0h | Legt fest, ob Zugriffsprofile aus dem Microsoft Entra ID synchronisiert werden sollen. Wenn nicht werden auch die Callbacks mapAccessProfiles und setAdditionalAccessProfiles nicht ausgeführt. |
| status | Objekt |  | nein | 5.0h | Ein Objekt, welches alle möglichen Status enthält. Dem Status werden über ein Array die Microsoft Entra ID Gruppen zugeordnet, welche diesen Status erhalten sollen. Mögliche Status sind inherited (geerbt), released (freigegeben), registered (registriert), blocked (gesperrt) und removable (entfernbar). Wenn ein Benutzer mehreren Gruppen zugeordnet ist, wird der Status nach der folgenden Priorität gesetzt: inherited (geerbt) > released (freigegeben) > registered (registriert) > blocked (gesperrt) > removable (entfernbar). Überschreibt defaultStatus und defaultSubGroupStatus. |
| updateLogin | Boolean | false | nein | 5.0h | Wenn sich bei einem Update das Feld des Microsoft Entra ID Nutzers, welches für den Login in Documents genutzt werden soll, geändert hat, wird der Login in Documents ebenfalls angepasst. Achtung: Es wird nicht empfohlen den Login eines Benutzers nachträglich zu ändern, daher wird der Login standardmäßig nicht aktualisiert. Stattdessen wird ein loginAlias gesetzt, damit der Benutzer sich mit dem neuen Login einloggen kann. |
| useTransitiveMemberOf | Boolean | false | nein | 5.0i HF7 / 6.0.2 | Schalter, ob für Benutzer auch indirekte Gruppenmitgliedschaften abgefragt werden sollen. Diese Gruppenmitgliedschaften werden dann für alle Documents Zugang/Zugriffsprofile/..., welche Gruppenabhängig sind, genutzt. |


### Verhalten von einzelnen Eigenschaften

![Struktur im Microsoft Entra ID](../assets/azure/diagram-import.png)


#### Benutzerimport

| Eigenschaft | Wert | Importgruppe | Verhalten |
| --- | --- | --- | --- |
| importSubGroups | true | Gruppe A | Benutzer A - H werden importiert |
| importSubGroups | false | Gruppe A | Benutzer A - C werden importiert |
| importSubGroups | false | Gruppe A & D | Benutzer A - C und F - H werden importiert |


#### Documents/Archivzugang

| Gruppe | Verhalten |
| --- | --- |
| Gruppe A | Benutzer A - C erhalten Documents/Archivzugang |
| Gruppe B | Kein Benutzer erhält Documents/Archivzugang |
| Gruppe C | Benutzer D & E erhalten Documents/Archivzugang |
| Gruppe D | Benutzer F - H erhalten Documents/Archivzugang |
| Gruppe A & D | Benutzer A - C & F - H erhalten Documents/Archivzugang |


#### Zugriffsprofilimport

| Importgruppe | Verhalten |
| --- | --- |
| Gruppe A | Gruppen B und C werden importiert |
| Gruppe B | Gruppe D wird importiert |
| Gruppe C | Keine Gruppe wird importiert |

Ab 5.0i HF7 und 6.0.2

| Eigenschaft | Wert | Importgruppe | Verhalten |
| --- | --- | --- | --- |
| importSubGroups | true | Gruppe A | Gruppen B, C und D werden importiert |
| importSubGroups | false | Gruppe A | Gruppen B und C werden importiert |


### Funktionsweise von sich ergänzenden Eigenschaften


#### defaultLicence, defaultSubGroupLicence und licence

Über `defaultLicence` und `defaultSubGroupLicence` gesetzte Lizenzen werden nach dem initialen Import nicht mehr
verändert. Die `defaultLicence` hat immer vorrang vor der `defaultSubGroupLicence`. Über `licence` gesetzte Lizenzen
werden aktualisiert, wenn der Benutzer die Gruppe wechselt. So gesetzte Lizenzen überschreiben auch immer die default
Lizenzen.


#### defaultStatus, defaultSubGroupStatus und status

Der über `defaultStatus` und `defaultSubGroupStatus` gesetzte Status wird mit jedem Import aktualisiert. Der
`defaultStatus` hat immer vorrang vor dem `defaultSubGroupStatus`. Ein über `status` gesetzter Status überschreibt
immer den default Status.


#### defaultDocumentsAccess, defaultSubGroupDocumentsAccess und documentsAccess

Über `defaultDocumentsAccess` und `defaultSubGroupDocumentsAccess` kann der Documentszugang für alle Benutzer aktiviert
werden. Der über `documentsAccess` definierte Zugang wird damit überschrieben.


#### defaultArchiveAccess, defaultSubGroupArchiveAccess und archiveAccess

Über `defaultArchiveAccess` und `defaultSubGroupArchiveAccess` kann der Archivzugang für alle Benutzer aktiviert
werden. Der über `archiveAccess` definierte Zugang wird damit überschrieben.


## User Login (userLoginConfig)

In der `userLoginConfg` kann festgelegt werden, wie sich der Login auf den Benutzer auswirken soll. Unter anderem kann
festgelegt werden, ob Benutzer ohne Account bei einem Login angelegt werden sollen, und ob Benutzer aktualisiert werden
sollen, wenn sie sich einloggen.

| Key | Typ | Default | Pflichtparameter | Version | Beschreibung |
| --- | --- | --- | --- | --- | --- |
| importUserOnLogin | Boolean | false | nein | 5.0h | Legt fest, ob ein Benutzer, welcher noch nicht im Documents angelegt ist, beim initialen Login mit seinem Microsoft Entra ID Account neu angelegt werden soll. Es wird dabei derselbe Prozess wie beim User Import durchlaufen, inklusive aller Callbacks. Wenn der Benutzer zwar im Microsoft Entra ID vorhanden ist, allerdings kein Mitglied der in importGroupIds festgelegten Gruppen ist wird er nicht angelegt. Mitglieder von Untergruppen werden nicht angelegt, der Benutzer muss in diesem Fall zwingend Mitglied einer Importgruppe sein. Bei der Vergabe von Zugängen, Zugriffsprofilen etc. werden die Untergruppen wieder berücksichtigt. |
| updateUserOnLogin | Boolean | false | nein | 5.0h | Legt fest, ob beim Login des Benutzers ein Abgleich mit Microsoft Entra ID passieren soll. Die Zugänge, Zugriffsprofile etc. werden dann mit dem aktuellen Microsoft Entra ID Stand synchronisiert, ohne dass der Import Job erst laufen muss. |


## Zugriffsprofile (accessProfileImportConfig)

In der `accessProfileImportConfig` kann festgelegt werden, ob Microsoft Entra ID Gruppen aus dem Microsoft Entra ID importiert und in
Zugriffsprofile im Documents umgewandelt werden sollen. Es wird empfohlen die Eigenschaft `skipAccessProfilesMapping`
auf `true` zu setzen, da z.B. mithilfe des `defaultAccessProfileMappingKey` gesetzte Zugriffsprofile nicht überprüfen,
ob es sich um ein aus Microsoft Entra ID importiertes Profil handelt und ob dieses möglicherweise aus dem Import entfernt wurde.

| Key | Typ | Default | Pflichtparameter | Version | Beschreibung |
| --- | --- | --- | --- | --- | --- |
| addUsersDuringUserImport | Boolean | true | nein | 5.0h HF1 | Legt fest, ob Benutzern während des Benutzerimports mit Microsoft Entra ID synchronisierte Zugriffsprofile zugewiesen werden sollen. |
| defaultName | String | displayName | nein | 5.0h HF1 | Das Feld der Microsoft Entra ID Gruppe, welches als Name für das Zugriffsprofil genutzt werden soll. Für vorhandene Eigenschaften der Gruppe siehe Microsoft Doku. |
| importGroupIds | Array |  | ja | 5.0h HF1 | Die ID der Importgruppe. Alle Gruppen, welche sich in dieser Gruppe befinden werden als Zugriffsprofile importiert. Die Gruppe selber sowie Untergruppen von Untergruppen werden nicht importiert. |
| importSubGroups | Boolean | false | nein | 5.0i HF7 / 6.0.2 | Schalter, ob Untergruppen der in importGroupIds importierten Gruppen ebenfalls importiert werden sollen. |
| includeHidden | Boolean | false | nein | 5.0i HF7 /6.0.2 | Schalter, ob auch Zugriffsprofile, welche nicht in Listen angezeigt werden, synchronisiert werden sollen. Es werden weiterhin nur Zugriffsprofile synchronisiert, welche initial durch den Import angelegt oder manuell verknüpft wurden. |
| updateProfileName | Boolean | false | nein | 5.0i HF3 / 6.0.1 | Wenn sich bei einem Update das Feld der Microsoft Entra ID Gruppe, welches für den Profilnamen in Documents genutzt werden soll, geändert hat, wird der Profilname in Documents ebenfalls angepasst. Achtung: Es wird nicht empfohlen den Profilnamen eines Zugriffsprofils nachträglich zu ändern, da es möglicherweise Abhängigkeiten gibt, welche nicht mit angepasst werden. |
| updateDisplayName | Boolean | false | nein | 5.0i HF5 / 6.0.1 | Wenn sich bei einem Update das Feld der Microsoft Entra ID Gruppe, welches für den Profilnamen in Documents genutzt werden soll, geändert hat, wird der Anzeigename in der 1. Sprache angepasst. |

[PDF Version](../azure/config-azure-config.pdf?b=2026-02-12)