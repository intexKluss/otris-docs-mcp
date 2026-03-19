---
title: "Microsoft Entra ID Anbindung (documentsOS)"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/azure/config-callbacks.html"
---

### Callbacks


#### Mögliche Callbacks Benutzerimport

| Callback | Options | Return | Version | Beschreibung |
| --- | --- | --- | --- | --- |
| mapUserAttributes | systemUser azureUser azureGroups tenantConfig | Siehe Beispiel | 5.0h | Callback um Microsoft Entra ID Benutzerattribute den entsprechenden Documents Benutzern zuzuordnen. Das Mapping kann nur für Properties vom Typ "String" genutzt werden, alle anderen Typen müssen manuell gesetzt werden. Dieser Callback wird für alle Microsoft Entra ID Benutzer ausgeführt, außer sie haben die Eigenschaft noOIDCheck gesetzt. |
| setUserProperties | systemUser azureUser azureGroups tenantConfig | Siehe Beispiel | 5.0h | Callback um dem Documents Benutzer Eigenschaften zuzuweisen. Dieser Callback wird für alle Microsoft Entra ID Benutzer ausgeführt, außer sie haben die Eigenschaft noOIDCheck gesetzt. |
| mapAccessProfiles | systemUser azureUser azureGroups tenantConfig | Siehe Beispiel | 5.0h | Callback um Microsoft Entra ID Gruppen Zugriffsprofile im Documents zuzuordnen. Dieser Callback wird für alle Microsoft Entra ID Benutzer ausgeführt, außer sie haben die Eigenschaft noOIDCheck gesetzt. Wenn dieser Callback nicht implementiert ist versucht das Importskript die Zugriffsprofile anhand des defaultAccessProfileMappingKey aus der UserImportConfig zuzuordnen. Im Rückgabeobjekt des Callbacks ist die Microsoft Entra ID GruppenID der Key, die Werte sind ein Array aus Zugriffsprofilen. |
| setAdditionalAccessProfiles | systemUser azureUser azureGroups tenantConfig | {Array} Zugriffsprofile | 5.0h | Callback um dem Documents Benutzer weitere Zugriffsprofile zu geben. Dieser Callback wird für alle Microsoft Entra ID Benutzer ausgeführt, außer sie haben die Eigenschaft noOIDCheck gesetzt. Die Zugriffsprofile werden zusätzlich zu den in mapAccessProfiles (Callback) oder defaultAccessProfileMappingKey (UserImportConfig) gesetzt. |
| userMapping | azureUser tenantConfig | {String} Login | 5.0h | Callback um den Login für einen Microsoft Entra ID Benutzer zu setzen. Wenn dieser Callback nicht implementiert ist wird defaultLogin aus der userImportConfig genutzt. Achtung: Der Login ist Case-Sensitiv. |
| onCreateSystemUser | azureUser tenantConfig | systemUser | 5.0h | Callback um Microsoft Entra ID Benutzer, welche nicht im Documents gefunden wurden, anzulegen. Achtung: Dieser Callback ersetzt den restlichen Import/Update Prozess, der Benutzer wird nach dem Callback nicht weiter bearbeitet. Der zurückgegebene systemUser wird nur noch zur Reporterstellung genutzt. |
| onModifyExistingSystemUser | systemUser azureUser tenantConfig noOIDFlag | systemUser | 5.0h | Callback um Documents Benutzer, welche im Microsoft Entra ID gefunden wurden zu bearbeiten. Achtung: Dieser Callback ersetzt den restlichen Import/Update Prozess, der Benutzer wird nach dem Callback nicht weiter bearbeitet. |
| onModifyNotMatchedSystemUser | systemUser tenantConfig noOIDFlag |  | 5.0h | Callback um Documents User, welche im Microsoft Entra ID nicht gefunden wurden zu bearbeiten. Achtung: Dieser Callback ersetzt den restlichen Import/Update Prozess, der Benutzer wird nach dem Callback nicht weiter bearbeitet. |
| modifyNewAzureUser | systemUser azureUser azureGroups (ab 6.0.2) tenantConfig |  | 5.0h | Callback um Documents Benutzer nach dem Import zu modifizieren. Dieser Callback wird für jeden Benutzer ausgeführt, welcher im Microsoft Entra ID gefunden wurde, welchen es bisher nicht in Documents gab. |
| modifyUpdatedAzureUser | systemUser azureUser azureGroups (ab 6.0.2) tenantConfig noOIDFlag |  | 5.0h | Callback um Documents Benutzer nach dem Import zu modifizieren. Dieser Callback wird für jeden Benutzer ausgeführt, welcher im Microsoft Entra ID gefunden wurde, welchen es schon in Documents gab. |
| modifySkippedAzureUser | systemUser azureUser tenantConfig noOIDFlag |  | 5.0h | Callback um Documents Benutzer nach dem Import zu modifizieren. Dieser Callback wird für jeden Benutzer ausgeführt, welcher im Microsoft Entra ID gefunden wurde, allerdings das noOIDCheck flag auf true gesetzt hat. |
| modifySkippedSystemUser | systemUser tenantConfig noOIDFlag |  | 5.0h | Callback um Documents Benutzer nach dem Import zu modifizieren. Dieser Callback wird für jeden Benutzer ausgeführt, welcher nicht im Microsoft Entra ID gefunden wurde, allerdings das noOIDCheck flag auf true gesetzt hat. |
| modifyNewBlockedSystemUser | systemUser tenantConfig noOIDFlag |  | 5.0h | Callback um Documents Benutzer nach dem Import zu modifizieren. Dieser Callback wird für jeden Benutzer ausgeführt, welcher nicht im Microsoft Entra ID gefunden wurde und bisher noch nicht gesperrt war. |
| modifyAlreadyBlockedSystemUser | systemUser tenantConfig noOIDFlag |  | 5.0h | Callback um Documents Benutzer nach dem Import zu modifizieren. Dieser Callback wird für jeden Benutzer ausgeführt, welcher nicht im Microsoft Entra ID gefunden wurde und im Documents bereits gesperrt ist. |
| afterImportJob | tenantConfig |  | 5.0h | Callback um Documents Benutzer nach dem Import zu modifizieren. Dieser Callback wird ausgeführt, nachdem der Import beendet wurde. |
| afterLoginSync | systemUser tenantConfig |  | 5.0h | Callback um einen Documents Benutzer nach dem Import zu modifizieren. Dieser Callback wird ausgeführt, wenn durch einen Login des Benutzers eine synchronisation/ein Import mit dem Microsoft Entra ID durchgeführt wurde, aber bevor der Benutzer im System angemeldet wird. |


#### Mögliche Callbacks Zugriffsprofilimport

| Callback | Options | Return | Version | Beschreibung |
| --- | --- | --- | --- | --- |
| beforeCreateAccessProfile | azureGroups tenantConfig |  | 5.0h HF1 | Callback um Zugriffsprofile nach der Abfrage aus dem Microsoft Entra ID selbst anzulegen. Achtung: Dieser Callback ersetzt den kompletten Import, es werden keine Zugriffsprofile automatisch angelegt. |
| afterCreateAccessProfile | accessProfile tenantConfig azureGroup (5.0i HF6 or 6.0.1) |  | 5.0h HF1 | Callback um ein einzelnes Zugriffsprofil nach dem import zu bearbeiten. |
| afterUpdateProfileName | accessProfile tenantConfig azureGroup |  | 5.0i HF6 / 6.0.1 | Callback um ein einzelnes Zugriffsprofil nach dem Umbenennen zu bearbeiten. |
| afterUpdateDisplayName | accessProfile tenantConfig azureGroup |  | 5.0i HF6 / 6.0.1 | Callback um ein einzelnes Zugriffsprofil nach dem Ändern des Anzeigenamens zu bearbeiten. |
| afterRemoveAccessProfile | accessProfile tenantConfig |  | 5.0h HF1 | Callback um ein einzelnes Zugriffsprofile, welche im Microsoft Entra ID gelöscht wurden, zu bearbeiten. |
| afterReaddAccessProfile | accessProfile tenantConfig |  | 5.0h HF1 | Callback um ein einzelnes Zugriffsprofile, welche im Microsoft Entra ID wieder hinzugefügt wurden, zu bearbeiten. |
| afterImportAccessProfiles | azureGroups tenantConfig |  | 5.0h HF1 | Callback um alle importierten Zugriffsprofile aus Microsoft Entra ID zu bearbeiten. Dieser Callback wird am Ende des vollständigen Imports ausgeführt, daher sind keine einzelnen Profile verfügbar. |
| afterAzureAddingAccessProfile | systemUser azureUser azureGroups tenantConfig accessProfile |  | 5.0h HF1 | Callback um den Documents Benutzer nach dem hinzufügen eines mit Microsoft Entra ID synchronisierten Callbacks zu bearbeiten. |
| afterAzureRemovingAccessProfile | systemUser azureUser azureGroups tenantConfig accessProfile |  | 5.0h HF1 | Callback um den Documents Benutzer nach dem entfernen eines mit Microsoft Entra ID synchronisierten Callbacks zu bearbeiten. |


#### Im Eingabeparameter options enthaltene Eigenschaften/Objekte

| Option | Beschreibung |
| --- | --- |
| systemUser | Der aktuelle Documents Benutzer. |
| azureUser | Ein Objekt mit dem aktuellen Microsoft Entra ID Benutzer. Für vorhandene Eigenschaften des Benutzers siehe Microsoft Doku, alle mit Returned by Default gekennzeichneten Eigenschaften sind vorhanden. |
| azureGroups | Ein Objekt mit allen Microsoft Entra ID Gruppen, in denen der aktuelle Benutzer ist. Die ID ist dabei die ID der Gruppe. Für vorhandene Eigenschaften der Gruppe siehe Microsoft Doku, alle mit Returned by Default gekennzeichneten Eigenschaften sind vorhanden. |
| tenantConfig | Die in der AzureConfig abgelegte Tenant Konfiguration ohne das clientSecret. Wenn mehrere Tenant Konfigurationen vorhanden sind wird die für den User genutzte Konfiguration mitgegeben. |
| noOIDFlag | Die Benutzereigenschaft noOIDCheck |
| azureGroups | Ein Array mit allen importierten Microsoft Entra ID Gruppen. Für vorhandene Eigenschaften der Gruppe siehe Microsoft Doku, alle mit Returned by Default gekennzeichneten Eigenschaften sind vorhanden. |
| accessProfile | Das aktuelle Zugriffsprofil. |


#### API Funktionen

In den Callback Skripten können über


```javascript
var azureUtils = require("azureUtils");
```

var azureUtils = require("azureUtils");die AzureUtils eingebunden werden. Diese beinhalten Hilfsfunktionen z.B. für zusätzliche Anfragen gegen Microsoft Entra ID / die Graph API.


##### queryUserRelationship


```javascript
/**
 * Function to query relationships of a user via the Graph API.
 * @param azureUser The Microsoft Entra ID user, available in every callback via options.azureUser.
 * @param tenantConfig The tenant config, available in every callback via options.tenantConfig.
 * @param relationship The relationship that should be queried. See
 * https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#relationships for more info, all relationships marked with 'Supports $expand' are available.
 * @return {Object} The Graph API answer
 */

var queryUserRelationshipResult = azureUtils.queryUserRelationship(options.azureUser, options.tenantConfig, "manager");
```

/**
 * Function to query relationships of a user via the Graph API.
 * @param azureUser The Microsoft Entra ID user, available in every callback via options.azureUser.
 * @param tenantConfig The tenant config, available in every callback via options.tenantConfig.
 * @param relationship The relationship that should be queried. See
 * https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#relationships for more info, all relationships marked with 'Supports $expand' are available.
 * @return {Object} The Graph API answer
 */

var queryUserRelationshipResult = azureUtils.queryUserRelationship(options.azureUser, options.tenantConfig, "manager");
##### queryGraphAPI


```javascript
/**
 * Function to send a custom query to the Graph API. Access is based on the Application that is configured in the AzureConfig.
 * @param url The URL to query the Graph API
 * @param tenantConfig The tenant config, available in every callback via options.tenantConfig.
 * @return {Object} The Graph API answer.
 */

var queryGraphAPIResult = azureUtils.queryGraphAPI("https://graph.microsoft.com/v1.0/users/" + options.azureUser.id + "/manager", options.tenantConfig);
```

/**
 * Function to send a custom query to the Graph API. Access is based on the Application that is configured in the AzureConfig.
 * @param url The URL to query the Graph API
 * @param tenantConfig The tenant config, available in every callback via options.tenantConfig.
 * @return {Object} The Graph API answer.
 */

var queryGraphAPIResult = azureUtils.queryGraphAPI("https://graph.microsoft.com/v1.0/users/" + options.azureUser.id + "/manager", options.tenantConfig);
#### Beispiel Callback Skript

Im Beispielskript sind alle Callbacks exemplarisch dokumentiert. Am Ende des Skripts befindet sich ein 'return'
Statement, bei allen Callbacks, welche genutzt werden sollen, müssen die Kommentare entfernt werden.

Download: [exampleCallbackScript.js](../assets/azure/exampleCallbackScript.js)

[PDF Version](../azure/config-callbacks.pdf?b=2026-02-12)