---
title: "ME-ID / AzureConfig"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/azure/config-azure-config.html"
---

# ME-ID / AzureConfig

AzureConfig is used to control the connection to Microsoft Entra ID and the user import. The following sample configuration contains all the default values we set. A detailed breakdown of how which value works and which mandatory parameters need to be set is explained below.


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
}Several configurations can be stored under `tenants`. Each configuration must be created as a separate object within the array. All possible settings are described in the `Tenant` table.

Within a tenant there are the two objects `userImportConfig` and `userLoginConfig`. These can be used to control the import from Microsoft Entra ID and the login of users. Possible settings are in the tables `User Import` and `User Login`.


## Tenant

| Key | Type | Default | Mandatory | Version | Description |
| --- | --- | --- | --- | --- | --- |
| tenantId | String |  | yes | 5.0h | The tenant ID of the Microsoft Entra ID. Can be obtained from the overview page. |
| clientID | String |  | yes | 5.0h | The client ID (application ID (client)) of the application that Documents uses to access Microsoft Entra ID. |
| clientSecret | String |  | yes | 5.0h | A client secret for the application through which Documents gains access to Microsoft Entra ID. |
| wellKnownOpenIdConfigURL | String | https://login.microsoftonline.com/ {tenantId}/v2.0/.well-known/openid-configuration | no | 5.0h | URL that Documents can use to fetch the OpenId configuration. Normally the URL from the example can be used. The placeholder {tenantId} does not have to be replaced. |
| authorizeTokenIssuerURL | String | https://login.microsoftonline.com/ {tenantId}/oauth2/v2.0/authorize | no | 5.0h | URL that Documents can use to authenticate itself. Normally the URL from the example can be used. The placeholder {tenantId} does not have to be replaced. |
| alias | String |  | no | 5.0h | Parameter that can be used to distinguish between several different Microsoft Entra ID connections. To avoid possible problems, no spaces or special characters should be used. |
| userImportConfig | Object |  | yes | 5.0h | The configuration for the user import. |
| userLoginConfig | Object |  | (no) | 5.0h | The configuration for the user login. |
| accessProfileImportConfig | Object |  | no | 5.0h HF1 | The configuration for importing access profiles. |


## User Import (userImportConfig)

In the `userImportConfig` the general import of users is managed.

| Key | Type | Default | Mandatory | Version | Description |
| --- | --- | --- | --- | --- | --- |
| archiveAccess | Array |  | no | 5.0h | The IDs of the Microsoft Entra ID groups that give the user archive access. |
| azureUserProperties | Array |  | no | 5.0h HF2 | The array can be used to specifically query attributes of the Microsoft Entra ID user. For a list of possible attributes, see https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#properties. Caution: If this key is used, the default attributes are no longer automatically requested, only the attributes specified here and id, userPrincipalName and the attribute specified under defaultLogin are requested. |
| azureUserRelationship | String |  | no | 5.0h HF2 | The field can be used to additionally query a relationship of the Microsoft Entra ID user. For a list of possible relationships see https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#relationships. Only relationships marked with Supports $expand. can be queried (as of 10/08/2022 appRoleAssignments, directReports, extensions, manager, memberOf, ownedDevices, ownedObjects and registeredDevices). Caution: Using this property will negatively impact the performance of the import as additional requests will be made to Microsoft Entra ID. If the relationship is only needed for individual users, provided API methods in a callback can be used. |
| callbacksFile | String |  | no | 5.0h | The name of the portal script in which the callbacks are implemented. |
| defaultAccessProfileMappingKey | String |  | no | 5.0h | The Microsoft Entra ID group field to be used for mapping to access profiles in Documents. Can be specified in more detail via the mapAccessProfiles callback. |
| defaultArchiveAccess | Boolean | false | no | 5.0h HF2 | Specifies whether all users of the groups specified in importGroupIds should get archive access. |
| defaultDocumentsAccess | Boolean | false | no | 5.0h HF2 | Specifies whether all users of the groups specified in importGroupIds should get Documents access. |
| defaultLicence | String | concurrent_open | no | 5.0h | Specifies which license is assigned to users of the groups specified in importGroupIds. Possible values are "concurrent_standard", "concurrent_open", "named" and "shared". |
| defaultLogin | String | userPrincipalName | no | 5.0h | The attribute of the Microsoft Entra ID user to be used for login to Documents. Can be specified more precisely via callbacks. |
| defaultStatus | String | released | no | 5.0h | Determines which status is assigned to users of the groups specified in importGroupIds. Possible values are "inherited", "released", "registered", "blocked", and "removable". |
| defaultSubGroupArchiveAccess | Boolean | false | no | 5.0h HF2 | Specifies whether all users of subgroups of the groups specified in importGroupIds should get archive access. |
| defaultSubGroupDocumentsAccess | Boolean | false | no | 5.0h HF2 | Specifies whether all users of subgroups of the groups specified in importGroupIds should get Documents access. |
| defaultSubGroupLicence | String | concurrent_open | no | 5.0h | Specifies which license is assigned to users of subgroups of the groups specified in importGroupIds. Possible values are "concurrent_standard", "concurrent_open", "named" and "shared". |
| defaultSubGroupStatus | String | released | no | 5.0h | Specifies which status is assigned to users of subgroups of the groups specified in importGroupIds. Possible values are "inherited", "released", "registered", "blocked", and "removable". |
| documentsAccess | Array |  | no | 5.0h | The IDs of the Microsoft Entra ID groups that give the user Documents access. |
| importGroupIds | Array |  | yes | 5.0h | The IDs of the Microsoft Entra ID groups to be imported. |
| importSubGroups | Boolean | false | no | 5.0h | Switch whether subgroups of the groups imported in importGroupIds should also be imported. |
| licence | Object |  | no | 5.0h | An object that contains all possible license types. The license types are assigned via an array to the Microsoft Entra ID groups that are to receive this license type. Possible license types are Named, Concurrent_open, Shared and Concurrent_standard. If a user is assigned to multiple groups, the licenses are set according to the following priority: Named > Concurrent_open > Shared > Concurrent_standard. Overwrites defaultLicence and defaultSubGroupLicence. |
| setAccessProfilesType | String | add | no | 5.0h | Specifies how access profiles are synchronized. The add option adds access profiles from Microsoft Entra ID to the currently existing ones, the replace option replaces existing access profiles with those from Microsoft Entra ID. |
| skipAccessProfilesMapping | Boolean | false | no | 5.0h | Specifies whether access profiles from Microsoft Entra ID should be synchronized. If not, the mapAccessProfiles and setAdditionalAccessProfiles callbacks are also not executed. |
| status | Object |  | no | 5.0h | An object that contains all possible statuses. The statuses are assigned via an array to the Microsoft Entra ID groups that are to receive this status. Possible statuses are inherited, released, registered, blocked and removable. If a user is assigned to multiple groups, the status is set according to the following priority: inherited > released > registered > blocked > removable. Overwrites defaultStatus and defaultSubGroupStatus. |
| updateLogin | Boolean | false | no | 5.0h | If the Microsoft Entra ID user field to be used for the login in Documents has changed during an update, the login in Documents will also be adjusted. Caution: It is not recommended to change a user's login after the fact, so the login will not be updated by default. Instead, a loginAlias is set so that the user can log in with the new login. |
| useTransitiveMemberOf | Boolean | false | no | 5.0i HF7 / 6.0.2 | Schalter, ob für Benutzer auch indirekte Gruppenmitgliedschaften abgefragt werden sollen. Diese Gruppenmitgliedschaften werden dann für alle Documents Zugang/Zugriffsprofile/..., welche Gruppenabhängig sind, genutzt. |


### Behavior of individual properties

![Structure in Microsoft Entra ID](../assets/azure/diagram-import.png)


#### User import

| Property | Value | Import group | Behavior |
| --- | --- | --- | --- |
| Import subgroups | true | Group A | Users A - H are imported |
| Import subgroups | false | Group A | Users A - C are imported |
| Import subgroups | false | Group A & D | Users A - C and F - H are imported |


#### Documents access/Archive access

| Group | Behavior |
| --- | --- |
| Group A | Users A - C get Documents/Archive access |
| Group B | No user gets Documents/Archive access |
| Group C | Users D & E get Documents/Archive access |
| Group D | Users F - H get Documents/Archive access |
| Group A & D | Users A - C & F - H get Documents/Archive access |


#### Access profile import

| Import group | Behavior |
| --- | --- |
| Group A | Groups B and C are imported |
| Group B | Group D is imported |
| Group C | No group is imported |

Since 5.0i HF7 and 6.0.2

| Eigenschaft | Wert | Importgruppe | Verhalten |
| --- | --- | --- | --- |
| importSubGroups | true | Group A | Groups B, C and D are imported |
| importSubGroups | false | Group A | Groups B and C are imported |


### Functionality of complementary properties


#### Standard license, standard license for subgroups and additional settings for user licenses

Licenses set via `Standard license` and `Standard license for subgroups` will not be changed after the initial import.
The `Standard license` always has priority over the `Standard license for subgroups`. Licenses set via *Expert settings / Optional additional settings for user licenses* will be updated when the user changes the group. Licenses set in this way always overwrite the default licenses.


#### Standard status, standard status for subgroups and additional settings for the status of users User licenses

The status set via `Default status` and `Default status for subgroups` is updated with each import. The
`Default status` always has priority over the `Default status for subgroups`. A status set via *Expert settings / Optional additional settings for the status of user licenses* always overwrites the `Standard status`.


#### Standard Documents access, Documents access for subgroups and groups with Documents access

Via `Standard Documents access` and `Documents access for subgroups`, Documents access can be activated for all users.
The access defined via `Groups with Documents access` is thus overwritten.


#### Standard archive access, archive access for subgroups and groups with archive access

Via `Standard archive access` and `Archive access for subgroups`, archive access can be activated for all users.
The access defined via `Groups with archive access` is thus overwritten.


## User Login (userLoginConfig)

In the `userLoginConfg` can be defined how the login should affect the user. Among other things whether users without an account should be created when they log in, and whether users should be updated when they log in.

| Key | Type | Default | Mandatory | Version | Description |
| --- | --- | --- | --- | --- | --- |
| importUserOnLogin | Boolean | false | no | 5.0h | Defines whether a user who has not yet been created in Documents should be created with his Microsoft Entra ID account at the initial login. The same process as for the user import is run through, including all callbacks. If the user exists in Microsoft Entra ID, but is not a member of the groups defined in importGroupIds, the user will not be created. Members of subgroups are not created, the user must be a member of an import group in this case. When assigning accesses, access profiles etc., the subgroups are taken into account again. |
| updateUserOnLogin | Boolean | false | no | 5.0h | Defines whether a synchronization with Microsoft Entra ID should happen when the user logs in. The accesses, access profiles, etc. are then synchronized with the current Microsoft Entra ID state without the import job having to run first. |


## Access profiles (accessProfileImportConfig)

In the `accessProfileImportConfig` you can define if Microsoft Entra ID groups should be imported from Microsoft Entra ID and converted into access profiles in Documents. It is recommended to set the property `skipAccessProfilesMapping` to `true`, because e.g. access profiles set using `defaultAccessProfileMappingKey` do not check, whether it is a profile imported from Microsoft Entra ID and whether it may have been removed from the import.

| Key | Type | Default | Mandatory | Version | Description |
| --- | --- | --- | --- | --- | --- |
| addUsersDuringUserImport | Boolean | true | no | 5.0h HF1 | Specifies whether to assign synchronized access profiles to users during user import with Microsoft Entra ID. |
| defaultName | String | displayName | no | 5.0h HF1 | The Microsoft Entra ID group field to be used as the name for the access profile. For existing properties of the group, see Microsoft Docs. |
| importGroupIds | Array |  | yes | 5.0h HF1 | The ID of the import group. All groups that are in this group are imported as access profiles. The group itself and subgroups of subgroups are not imported. |
| importSubGroups | Boolean | false | no | 5.0i HF7 / 6.0.2 | Switch whether subgroups of the groups imported in importGroupIds should also be imported. |
| includeHidden | Boolean | false | no | 5.0i HF7 / 6.0.2 | Switch whether access profiles that are not displayed in lists should also be synchronised. Only access profiles that were initially created by the import or manually linked are synchronised. |
| updateProfileName | Boolean | false | no | 5.0i Hf3 / 6.0.1 | If the field of the Microsoft Entra ID group that is to be used for the profile name in Documents has changed during an update, the profile name in Documents will also be adjusted. Note: It is not recommended to change the profile name of an access profile afterwards, as there might be dependencies that are not adapted. |
| updateDisplayName | Boolean | false | no | 5.0i HF5 / 6.0.1 | If the field of the Microsoft Entra ID group that is to be used for the profile name in Documents has changed during an update, the display name in the first language will be changed. |

[PDF Version](../azure/config-azure-config.pdf?b=2026-02-12)