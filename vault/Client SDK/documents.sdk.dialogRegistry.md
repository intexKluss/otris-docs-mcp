---
title: "Namespace: dialogRegistry"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.dialogRegistry.html"
---

The dialogRegistry provides the context of the different dialogs.

- Since:
5.0e


### Members


**documents.sdk.dialogRegistry.dialogNameKeystring static**
Supported dialog names


##### Properties:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ExtendedSearch | string | ExtendedSearchDialog |  |
| ScriptParameter | string | ScriptParameterDialog |  |
| AbsenceSettings | string | AbsenceSettingsDialog |  |
| FileEmail | string | FileEmailDialog |  |
| ChangeFileType | string | ChangeFileTypeDialog |  |
| FileCreation | string | FileCreationDialog |  |


### Methods


**staticdocuments.sdk.dialogRegistry.getDialogContext(dialogName){documents.sdk.ExtendedSearchContext}**
Checks whether a dialog is registered and returns the corresponding DialogContext.

| Name | Type | Description |
| --- | --- | --- |
| dialogName | documents.sdk.dialogRegistry.dialogNameKey |  |

- See:
documents.sdk.ExtendedSearchContext documents.sdk.DefaultDialogContext


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.ExtendedSearchContext | returns the DialogContext corresponding to the Dialog. For the extended-search-dialog the response is the ExtendedSearchDialog. |


**staticdocuments.sdk.dialogRegistry.hasDialogContext(dialogName){boolean}**
Checks whether a dialog is registered. Only the dialogs listed within [[Client SDK/documents.sdk.dialogRegistry#.dialogNameKey|documents.sdk.dialogRegistry.dialogNameKey]] are supported.

| Name | Type | Description |
| --- | --- | --- |
| dialogName | documents.sdk.dialogRegistry.dialogNameKey |  |


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the registry is registered, false otherwise |