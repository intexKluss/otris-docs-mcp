---
title: "Microsoft Entra ID Connection (documentsOS)"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/azure/config-callbacks.html"
---

### Callbacks


#### Possible callbacks user import

| Callback | Options | Return | Version | Description |
| --- | --- | --- | --- | --- |
| mapUserAttributes | systemUser azureUser azureGroups tenantConfig | See example | 5.0h | Callback to assign Microsoft Entra ID user attributes to the corresponding Documents users. The mapping can only be used for Properties of type ‘String’, all other types must be set manually. This callback is executed for all Microsoft Entra ID users unless they have the noOIDCheck property set. |
| setUserProperties | systemUser azureUser azureGroups tenantConfig | See example | 5.0h | Callback to assign properties to the Documents user. This callback is executed for all Microsoft Entra ID users unless they have the noOIDCheck property set. |
| mapAccessProfiles | systemUser azureUser azureGroups tenantConfig | See example | 5.0h | Callback to assign Microsoft Entra ID groups access profiles in Documents. This callback is executed for all Microsoft Entra ID users unless they have the noOIDCheck property set. If this callback is not implemented, the import script tries to map the access profiles using the defaultAccessProfileMappingKey from the UserImportConfig. In the callback's return object, the Microsoft Entra ID GroupID is the key, and the values are an array of access profiles. |
| setAdditionalAccessProfiles | systemUser azureUser azureGroups tenantConfig | {Array} Access profiles | 5.0h | Callback to give the Documents user additional access profiles. This callback is executed for all Microsoft Entra ID users unless they have the noOIDCheck property set. The access profiles are set in addition to those in mapAccessProfiles (callback) or defaultAccessProfileMappingKey (UserImportConfig). |
| userMapping | azureUser tenantConfig | {String} Login | 5.0h | Callback to set the login for an Microsoft Entra ID user. If this callback is not implemented defaultLogin from userImportConfig is used. Caution: The login is case sensitive. |
| onCreateSystemUser | azureUser tenantConfig | systemUser | 5.0h | Callback to create Microsoft Entra ID users not found in Documents. Caution: This callback replaces the rest of the import/update process, the user will not be processed further after the callback. The returned systemUser will only be used for report generation. |
| onModifyExistingSystemUser | systemUser azureUser tenantConfig noOIDFlag | systemUser | 5.0h | Callback to edit Documents users found in Microsoft Entra ID. Caution: This callback replaces the rest of the import/update process, the user will not be processed further after the callback. |
| onModifyNotMatchedSystemUser | systemUser tenantConfig noOIDFlag |  | 5.0h | Callback to edit Documents users that were not found in Microsoft Entra ID. Caution: This callback replaces the rest of the import/update process, the user will not be processed further after the callback. |
| modifyNewAzureUser | systemUser azureUser azureGroups (since 6.0.2) tenantConfig |  | 5.0h | Callback to modify Documents user after import. This callback is executed for each user found in Microsoft Entra ID that did not previously exist in Documents. |
| modifyUpdatedAzureUser | systemUser azureUser azureGroups (since 6.0.2) tenantConfig noOIDFlag |  | 5.0h | Callback to modify Documents user after import. This callback is executed for each user found in Microsoft Entra ID that already existed in Documents. |
| modifySkippedAzureUser | systemUser azureUser tenantConfig noOIDFlag |  | 5.0h | Callback to modify Documents user after import. This callback is executed for each user found in Microsoft Entra ID but with the noOIDCheck flag set to true. |
| modifySkippedSystemUser | systemUser tenantConfig noOIDFlag |  | 5.0h | Callback to modify Documents user after import. This callback is executed for each user who was not found in Microsoft Entra ID but has the noOIDCheck flag set to true. |
| modifyNewBlockedSystemUser | systemUser tenantConfig noOIDFlag |  | 5.0h | Callback to modify Documents user after import. This callback is executed for every user who was not found in Microsoft Entra ID and was not blocked yet. |
| modifyAlreadyBlockedSystemUser | systemUser tenantConfig noOIDFlag |  | 5.0h | Callback to modify Documents user after import. DThis callback is executed for each user that is not found in Microsoft Entra ID and is already blocked in Documents. |
| afterImportJob | tenantConfig |  | 5.0h | Callback to modify Documents user after import. This callback is executed after the import is finished. |
| afterLoginSync | systemUser tenantConfig |  | 5.0h | Callback to modify a Documents user after import. This callback is executed when a user login has performed a synchronization/import with Microsoft Entra ID, but before the user is logged into the system. |


#### Possible callbacks Access profile import

| Callback | Options | Return | Version | Description |
| --- | --- | --- | --- | --- |
| beforeCreateAccessProfile | azureGroups tenantConfig |  | 5.0h HF1 | Callback to create access profiles after querying from Microsoft Entra ID itself. Caution: This callback replaces the complete import, no access profiles are created automatically. |
| afterCreateAccessProfile | accessProfile tenantConfig azureGroup (5.0i HF6 or 6.0.1) |  | 5.0h HF1 | Callback to edit a single access profile after import. |
| afterUpdateProfileName | accessProfile tenantConfig azureGroup |  | 5.0i HF6 / 6.0.1 | Callback to edit a single access profile after renaming. |
| afterUpdateDisplayName | accessProfile tenantConfig azureGroup |  | 5.0i HF6 / 6.0.1 | Callback to edit a single access profile after changing the display name. |
| afterRemoveAccessProfile | accessProfile tenantConfig |  | 5.0h HF1 | Callback to edit a single access profile that has been deleted in Microsoft Entra ID. |
| afterReaddAccessProfile | accessProfile tenantConfig |  | 5.0h HF1 | Callback to edit a single access profile that has been added back in Microsoft Entra ID. |
| afterImportAccessProfiles | azureGroups tenantConfig |  | 5.0h HF1 | Callback to process all imported access profiles from Microsoft Entra ID. This callback is executed at the end of the full import, so no individual profiles are available. |
| afterAzureAddingAccessProfile | systemUser azureUser azureGroups tenantConfig accessProfile |  | 5.0h HF1 | Callback to edit the Documents user after adding a callback synchronized with Microsoft Entra ID. |
| afterAzureRemovingAccessProfile | systemUser azureUser azureGroups tenantConfig accessProfile |  | 5.0h HF1 | Callback to edit the Documents user after removing a callback synchronized with Microsoft Entra ID. |


#### Properties/objects contained in the options input parameter

| Option | Description |
| --- | --- |
| systemUser | The current Documents user. |
| azureUser | An object with the current Microsoft Entra ID user. For existing properties of the user, see Microsoft Docs, all properties marked Returned by Default are present. |
| azureGroups | An object with all Microsoft Entra ID groups in which the current user is. The ID is the ID of the group. For existing properties of the group see Microsoft Docs, all properties marked with Returned by Default are present. |
| tenantConfig | The tenant configuration stored in AzureConfig without the clientSecret. If there are multiple tenant configurations, the configuration used for the user is provided. |
| noOIDFlag | The user property noOIDCheck |
| azureGroups | An array with all imported Microsoft Entra ID groups. For existing properties of the group see Microsoft Docs, all properties marked with Returned by Default are present. |
| accessProfile | The current access profile. |


#### API functions

AzureUtils can be included in the callback scripts via


```javascript
var azureUtils = require("azureUtils");
```

var azureUtils = require("azureUtils");These contain auxiliary functions e.g. for additional requests against Microsoft Entra ID / the Graph API.


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
#### Example callback script

In the example script all callbacks are documented as examples. At the end of the script there is a 'return' statement.
The comments must be removed for all callbacks that are to be used.

Download: [exampleCallbackScript.js](../assets/azure/exampleCallbackScript.js)

[PDF Version](../azure/config-callbacks.pdf?b=2026-02-12)