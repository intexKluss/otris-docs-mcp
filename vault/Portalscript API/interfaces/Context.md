---
title: "Context | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/Context.html"
---

# Interface Context


`interface Context { actionName: string; addCustomProperty( name: string, type: string, value: string, ): CustomProperty; addTimeInterval( ts: Date, amount: number, unit?: string, useWorkCalendar?: boolean, ): Date; changeScriptUser(login: string): boolean; clearEnumvalCache(scriptName: string): boolean; clientId: string; convertDateToString(dateOrTimeStamp: Date, locale?: string): string; convertNumericToString( value: number, decimalSep: string, thousandSep: string, precision?: number, ): string; convertNumericToString( value: number, locale?: string, precision?: number, ): string; convertStringToDate(dateOrTimeStamp: string, locale?: string): Date; convertStringToNumeric( numericValue: string, decimalSep: string, thousandSep: string, ): number; convertStringToNumeric(numericValue: string, locale?: string): number; copyFileType( sourceFileTypeName: string, targetFileTypeName: string, released: boolean, ): boolean; countPoolFiles(fileType: string): number; createAccessProfile(profileName: string): AccessProfile; createAlias(name: string, userLogin: string): Alias; createArchiveServer(name: string, type: string): ArchiveServer; createFile<K extends string>( fileTypeName: K, jsonDefaultData?: string, ): DefaultDocFileType<K>; createFolder(name: string, type: string): Folder; createGlobalEnumeration(name: string): GlobalEnumeration; createPoolFile(fileType: string): boolean; currentUser: string; deleteAccessProfile(profileName: string): boolean; deleteFolder(folderObj: Folder): boolean; deleteGlobalEnumeration(name: string): boolean; deleteSystemUser(loginName: string): boolean; document: Document; doMaintenance(operationName: string): string; enableModules(root?: Object, flags?: number): void; errorMessage: string; event: EventType; exportList(inJSON: string): string; extCall(workDir: string, cmd: string, synced: boolean): number; extProcess(cmd: string, timeout?: number): string[]; fieldName: string; file: DocFile; fileType: string; FILETYPE_FIELD: number; filterFiletypeByFields(fieldNames: string[]): string[]; findAccessProfile(profileName: string): AccessProfile; findCustomProperties(filter: string): CustomPropertyIterator; findLogBookEntries(filter?: string, sortOrder?: string): string; findSystemUser(login: string): SystemUser; findSystemUserByAlias(alias: string): SystemUser; findSystemUserByLoginAlias(loginAlias: string): SystemUser; folder: Folder; folderFiles: FileResultset; folderName: string; getAccessProfiles( includeInvisibleProfiles?: boolean, ): AccessProfileIterator; getActionByName(actionName: string): UserAction; getAliasByName(name: string): Alias; getAllAliases(): AliasIterator; getAllLockedDocumentsInfo(): string; getAllWorkflows(typeFlags?: number): WorkflowIterator; getArchiveConnection(archiveServerName: string): ArchiveConnection; getArchiveFile(key: string): DocFile; getArchiveServer(name: string): ArchiveServer; getArchiveServers(): ArchiveServerIterator; getAutoText(autoText: string, startTag?: string, endTag?: string): string; getClientLang(): string; getClientSystemLang(): number; getClientType(): string; getCurrentUserAttribute(attributeName: string): string; getCustomProperties( nameFilter?: string, typeFilter?: string, ): CustomPropertyIterator; getDatesDiff( earlierDate: Date, laterDate: Date, unit?: string, useWorkCalendar?: boolean, ): number; getDocumentById(idFile: string, idDocument: string): Document; getDocumentTemplateFromFileType( fileTypeName: string, templateName: string, content?: boolean, ): string; getEnumAutoText(autoText: string): string[]; getEnumErgValue( fileType: string, field: string, techEnumValue: string, locale?: string, ): string; getEnumLocaleValues( fileTypeOrScript: string, fieldOrParamName: string, enumKeys: string[], enumLocales: string[], locale?: string, enumSource?: number, ): string; getEnumValues(fileType: string, field: string): false | string[]; getFieldErgName(fileType: string, field: string, locale?: string): string; getFileById(idFile: string): DocFile; getFilesWithScratchCopy(): FileResultset; getFileTypeErgName(fileType: string, locale?: string): string | boolean; getFileTypeOID(nameFiletype: string, oidLow?: boolean): string; getFolderPosition(folder: Folder): number; getFoldersByName( folderPattern: string, type?: string, checkAccessRight?: boolean, ): FolderIterator; getFromSystemTable(identifier: string, locale?: string): string; getGlobalAttribute(attributeName: string): string; getGlobalEnumerations(): GlobalEnumerationIterator; getJSObject(oid: string): object; getLastError(shortMessage?: boolean): string; getLicenseInfo(): string; getLocaleValue(value: string, locale?: string): string; getMails(): EmailIterator; getPrincipalAttribute(attributeName: string): string; getPrincipalStatus(): string; getProgressBar(): number; getQueryParams(): DocQueryParams; getRegisterErgName( fileTypeName: string, registerName: string, locale?: string, ): string; getScriptOrigin(scriptName: string): number; getServerInstallPath(): string; getSuperMode(): boolean; getSystemUser(): SystemUser; getSystemUsers( includeLockedUsers?: boolean, includeInvisibleUsers?: boolean, ): SystemUserIterator; getTempPathByToken(accessToken: string, dropToken?: boolean): string; getTimestampsDiff( earlierDate: Date, laterDate: Date, unit?: string, useWorkCalendar?: boolean, ): number; getTmpFilePath(): string; getWorkflowByName(name: string): Workflow; getWorkflowsFromFileType( fileTypeName: string, onlyReleased?: boolean, ): String[]; getXMLServer(archiveServerName?: string): ArchiveConnection; hasPEMModule(moduleConst: number): Boolean; PEM_MODULE_BUSINESS_UNITS: number; PEM_MODULE_CGC: number; PEM_MODULE_CGC_ENT: number; PEM_MODULE_CGC_ENT_PLUS: number; PEM_MODULE_CONTRACT: number; PEM_MODULE_CONTRACT_SAP: number; PEM_MODULE_CONTROLLING: number; PEM_MODULE_CREATOR: number; PEM_MODULE_DOC_TREE: number; PEM_MODULE_DRIVECONNECT: number; PEM_MODULE_DROP: number; PEM_MODULE_EASYHR: number; PEM_MODULE_FP_HENR: number; PEM_MODULE_GADGETS: number; PEM_MODULE_IFRS16: number; PEM_MODULE_IMS: number; PEM_MODULE_INBOX: number; PEM_MODULE_INVOICE: number; PEM_MODULE_IP_MANAGEMENT: number; PEM_MODULE_LDAP: number; PEM_MODULE_MATTER: number; PEM_MODULE_MOBILE: number; PEM_MODULE_OUTLOOK_SYNC: number; PEM_MODULE_OUTLOOK_WEB: number; PEM_MODULE_REPORTING: number; PEM_MODULE_RISK_MANAGEMENT: number; PEM_MODULE_SIGN: number; PEM_MODULE_WORDML: number; qsession: string; register: Register; reloadCurrentPrincipal(pemReload?: boolean): boolean; reloadPrincipal(principalName: string, pemReload?: boolean): boolean; repositoryCount: number; repositoryPath: string; repositorySize: number; resetScriptUser(): boolean; returnType: string; returnValue: string | number | boolean | null; SCRIPT_FROM_DB: number; SCRIPT_FROM_LIBS: number; SCRIPT_PARAM: number; SCRIPT_UNKNOWN: number; scriptName: string; selectedArchiveFiles: ArchiveFileResultset; selectedArchiveKeys: string[]; selectedDocuments: DocumentIterator; selectedFiles: FileResultset; sendTCPStringRequest( server: string, port: number, request: string, responseTimeout?: number, ): string; setClientLang(locale: string): string; setClientSystemLang(langIndex: number): boolean; setFolderPosition(folder: Folder, position: number): boolean; setGlobalAttribute(attributeName: string, value: string): boolean; setOrAddCustomProperty( name: string, type: string, value: string, ): CustomProperty; setPrincipalAttribute(attributeName: string, value: string): boolean; setPrincipalStatus(status: string): boolean; setProgressBar(value: number): void; setProgressBarText(text: string): void; setSuperMode(value: boolean): void; SOURCE_UNKNOWN: number; sourceCode: string; submitFileChanges(fileTypeName: string, withStatusEntry?: boolean): boolean; updateSearchFieldCache(fileTypeName?: string): boolean; workflowActionId: string; workflowActionName: string; workflowControlFlowId: string; workflowControlFlowName: string; workflowStep: WorkflowStep; writeLogBook( actionCode: number, detail1: string, detail2: string, detail3: string, logObject: any, ): boolean; }`


## Index


### Properties

- actionName
- clientId
- currentUser
- document
- errorMessage
- event
- fieldName
- file
- fileType
- folder
- folderFiles
- folderName
- qsession
- register
- repositoryCount
- repositoryPath
- repositorySize
- returnType
- returnValue
- scriptName
- selectedArchiveFiles
- selectedArchiveKeys
- selectedDocuments
- selectedFiles
- sourceCode
- workflowActionId
- workflowActionName
- workflowControlFlowId
- workflowControlFlowName
- workflowStep


### Methods

- addCustomProperty
- addTimeInterval
- changeScriptUser
- clearEnumvalCache
- convertDateToString
- convertNumericToString
- convertStringToDate
- convertStringToNumeric
- copyFileType
- countPoolFiles
- createAccessProfile
- createAlias
- createArchiveServer
- createFile
- createFolder
- createGlobalEnumeration
- createPoolFile
- deleteAccessProfile
- deleteFolder
- deleteGlobalEnumeration
- deleteSystemUser
- doMaintenance
- enableModules
- exportList
- extCall
- extProcess
- filterFiletypeByFields
- findAccessProfile
- findCustomProperties
- findLogBookEntries
- findSystemUser
- findSystemUserByAlias
- findSystemUserByLoginAlias
- getAccessProfiles
- getActionByName
- getAliasByName
- getAllAliases
- getAllLockedDocumentsInfo
- getAllWorkflows
- getArchiveConnection
- getArchiveFile
- getArchiveServer
- getArchiveServers
- getAutoText
- getClientLang
- getClientSystemLang
- getClientType
- getCurrentUserAttribute
- getCustomProperties
- getDatesDiff
- getDocumentById
- getDocumentTemplateFromFileType
- getEnumAutoText
- getEnumErgValue
- getEnumLocaleValues
- getEnumValues
- getFieldErgName
- getFileById
- getFilesWithScratchCopy
- getFileTypeErgName
- getFileTypeOID
- getFolderPosition
- getFoldersByName
- getFromSystemTable
- getGlobalAttribute
- getGlobalEnumerations
- getJSObject
- getLastError
- getLicenseInfo
- getLocaleValue
- getMails
- getPrincipalAttribute
- getPrincipalStatus
- getProgressBar
- getQueryParams
- getRegisterErgName
- getScriptOrigin
- getServerInstallPath
- getSuperMode
- getSystemUser
- getSystemUsers
- getTempPathByToken
- getTimestampsDiff
- getTmpFilePath
- getWorkflowByName
- getWorkflowsFromFileType
- getXMLServer
- hasPEMModule
- reloadCurrentPrincipal
- reloadPrincipal
- resetScriptUser
- sendTCPStringRequest
- setClientLang
- setClientSystemLang
- setFolderPosition
- setGlobalAttribute
- setOrAddCustomProperty
- setPrincipalAttribute
- setPrincipalStatus
- setProgressBar
- setProgressBarText
- setSuperMode
- submitFileChanges
- updateSearchFieldCache
- writeLogBook


### Script Origin Constants

- SCRIPT_FROM_DB
- SCRIPT_FROM_LIBS
- SCRIPT_UNKNOWN


### PEM Module Constants

- PEM_MODULE_BUSINESS_UNITS
- PEM_MODULE_CGC
- PEM_MODULE_CGC_ENT
- PEM_MODULE_CGC_ENT_PLUS
- PEM_MODULE_CONTRACT
- PEM_MODULE_CONTRACT_SAP
- PEM_MODULE_CONTROLLING
- PEM_MODULE_CREATOR
- PEM_MODULE_DOC_TREE
- PEM_MODULE_DRIVECONNECT
- PEM_MODULE_DROP
- PEM_MODULE_EASYHR
- PEM_MODULE_FP_HENR
- PEM_MODULE_GADGETS
- PEM_MODULE_IFRS16
- PEM_MODULE_IMS
- PEM_MODULE_INBOX
- PEM_MODULE_INVOICE
- PEM_MODULE_IP_MANAGEMENT
- PEM_MODULE_LDAP
- PEM_MODULE_MATTER
- PEM_MODULE_MOBILE
- PEM_MODULE_OUTLOOK_SYNC
- PEM_MODULE_OUTLOOK_WEB
- PEM_MODULE_REPORTING
- PEM_MODULE_RISK_MANAGEMENT
- PEM_MODULE_SIGN
- PEM_MODULE_WORDML


### Enumeration Source Constants

- FILETYPE_FIELD
- SCRIPT_PARAM
- SOURCE_UNKNOWN


## Properties


### actionName

`actionName: string`

Technical name of the user defined action the script is executed for.

**Since:** DOCUMENTS 5.0f


```ts
util.out(context.actionName);
```


### clientId

`clientId: string`

Id of the client / thread which is the execution context of the script.

This property is helpful to identify the clients at scripts running concurrently (for debugging purposes).

**Since:** ELC 3.51e / otrisPORTAL 5.1e


```ts
util.out(context.clientId);
```


### currentUser

`currentUser: string`

Login of the user who has triggered the script execution.

If the script is running e.g. as action in the workflow the user is the logged in user, who has initiated the action.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
util.out(context.currentUser);
```


### document

`document: Document`

Document object representing the current document that the script is executed at.

Note: If the script is not executed in a document context then the return value is null.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
var doc = context.document;
```


### errorMessage

`errorMessage: string`

Error message text to be returned by the script.

The error message will be displayed as Javascript alert box in the web client if the script is called in context of a web client.

Note: You can get and set this property.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
context.errorMessage = "You are not authorized to run this script";
return -1; // neccessary to indicate an error
```


### event

`event: EventType`

Event which triggered the script execution.

According to the context where the portal script has been called this property contains a key name for this event.

**Since:** ELC 3.50n / otrisPORTAL 5.0n


```ts
if (context.event == "fileAction")
{
    util.out("Action at the file");
}
```


### fieldName

`fieldName: string`

Returns in an enumeration script the name of the field where the script is executed for.

If the script is an enumeration script, this member contains the field name of the current field where the script is executed. This is particularly helpful when the script is set at more than one enumeration field and the behaviour of the script should depend on the field.

**Since:** DOCUMENTS 5.0c HF2


### file

`file: DocFile`

DocFile object representing the current file that the script is executed at.

Note: If the script is not executed in a file context then the return value is null.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
var file = context.file;
```


### fileType

`fileType: string`

Technical name of the filetype of the file which is the execution context of the script.

This property contains the technical name of the filetype of the file which is the execution context of the script.

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** context.file


```ts
util.out(context.fileType);
```


### folder

`folder: Folder`

Current folder in which context the script is running.

**Since:** DOCUMENTS 5.0d


```ts
var folder = context.folder;
```


### folderFiles

`folderFiles: FileResultset`

FileResultset with all files of a folder.

This property allows to retrieve a list of all files of a folder if this script is run as user defined action at the folder. You can then iterate through this list for further use of the distinct files.

Note: If there is no file inside the folder you will receive a valid empty FileResultset.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
var it = context.folderFiles;
```


### folderName

`folderName: string`

Technical name of the folder the script is called from.

This property contains the technical name of the folder which is the execution context of the script.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
util.out(context.folderName);
```


### qsession

`qsession: string`

Session id of the current query-session.

**Since:** DOCUMENTS 5.0d HF1


### register

`register: Register`

Register object representing the current register that the script is executed at.

Note: If the script is not executed in a register context then the return value is null.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
var reg = context.register;
```


### repositoryCount

`repositoryCount: number`

Amount of documents (binaries) in documents repository for the current principal.

The amount includes all versions of the documents.

**Since:** DOCUMENTS 5.0h HF1


### repositoryPath

`repositoryPath: string`

Path to the documents repository for the current principal.

**Since:** DOCUMENTS 5.0h HF1


### repositorySize

`repositorySize: number`

Size of documents repository for the current principal in bytes.

The size includes all versions of the documents.

**Since:** DOCUMENTS 5.0h HF1


### returnType

`returnType: string`

Type of the return value that the script returns.

The following list shows all available types. Return value of type object is not allowed (use JSON.stringify() if necessary).

returnType	return Value	Description
"stay"		Default behaviour. Show current file.
"updateFile"		Show and update current file.
"html"	HTML	Show the HTML
"htmlpopup"	HTML	Show the HTML in a dialog
"showFile"	fileId[&dlcRegisterId=registerId]	Show the file
"showEditFile"	fileId	Open the file in edit mode
"showNewFile"	fileId	Open the file in edit mode and delete it on cancellation
"showFolder"	folderId	Show the folder
"showOverview"		Show the overview page
"updateTree"	folderId	Show and update the folder
"file:filename"	string with the content of the file	Ask the user, if they want to download the content of the return value (usually a String variable). The filename filename will be proposed as a default.
"download:filename"	string with path to th blob	Ask the user, if they want to download the blob, that is specified in the return value (server-sided path to the blob). The filename filename will be proposed as a default.
"checkoutDocuments"	JSON.stringify({"fileId": "","registerId": "","documentId": "","openLocal": false})	Checkout document and open it in edit mode
"clientScript"	JavaScript code	Execute the code
"destroyHitTree"		Remove current HitTree from server cache. So after logout the HitTree won't be available anymore.
"gadget"	Example: JSON.stringify({gadgetScript:"Gadget_SimpleSample", gadgetAction: "initGadget"})	Show Gadget in dialog
"hitTree"		Show HitTree outbar
"openOutbar"	Technical name of an outbar	Show the outbar
"openAndReloadOutbar"	Technical name of an outbar	Show and reload the outbar
"refreshFolder"	JSON.stringify({folderId: "", selectedHit: ""})	Refresh folder with id folderId or current folder if not set. The file in selectedHit will be selected.
"refreshScriptList"		Refresh scriptlist by executing the referenced script.
"scriptList"	Created scriptlist as JSON string	Show the scriptlist
"treeChart"	Treechart as JSON string	Show the treechart
"multipleAction"	Example: JSON.stringify([{returnType: 'showFile', returnValue : fileId}, {returnType: 'html', returnValue : 'HTML-Code'}])	Execute all actions specified in array.

Note: You may read from and write to this property. For further information and examples see "HowTo-Sammlung" on otris.software.

Since: DOCUMENTS 4.0c showFile with return value of file-id and register-id Since: ELC 3.50c / otrisPORTAL 5.0c showNewFile, updateTree, file

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
// Example 1: showFile
context.returnType = "showFile";
var idFile = docFile.getAutoText("id");
return idFile;
```


```ts
// Example 2: showFile with specific register
context.returnType = "showFile";
var idFile = docFile.getAutoText("id");
var idRegister = docFile.getRegisterByName("internal_documents").getAttribute("id");
return idFile + "&dlcRegisterId=" + idRegister;
```


```ts
// Example 3:
var itFolders = context.getFoldersByName("Invoice");
var folder = itFolders.first();
if (folder == null)
{
   context.returnType = "html";
   return "<h1>Unable to find folder Invoice</h1>";
}
context.returnType = "showFolder";
return folder.id;
```


```ts
// Example 4:
var csv = "row11;row12;row13\n";
csv += "row21;row22;row23";
context.returnType = "file:example.csv";
return csv;
```


### returnValue

`returnValue: string | number | boolean | null`

Set the return value of a PortalScript.

Until now the PortalScripts returns their return value by the return statement at the end of the script. return retvalue; In DOCUMENTS 6 with the V8 JS-Engine, in script mode Module the return statement is only allowed in the context of a function. Therefore, in this case it is no longer possible to use the return statement in the "old" way. The return value has to be set as a property at the context object. However, in script mode Classic the return statement can still be used at the end of the script, but it is not recommended.

context.returnValue = retvalue;

Copy

In DOCUMENTS 5 context.returnValue is now supported since 5.0h HF1 and it is recommended to use this. This makes your scripts compatible to run in DOCUMENTS 6.

**Since:** DOCUMENTS 5.0h HF1


```ts
context.returnValue = retvalue;
```


```ts
// Example 1: "old" Documents 5 return value
...
var idFile = docFile.getid();
context.returnType = "showFile";
return idFile;
```


```ts
// Example 2: "new" Documents 5/6 return value
...
var idFile = docFile.getid();
context.returnType = "showFile";
context.returnValue = idFile;
```


### scriptName

`scriptName: string`

Name of the executed script.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
util.out(context.scriptName);
```


### selectedArchiveFiles

`selectedArchiveFiles: ArchiveFileResultset`

Iterator with the selected archive files of a folder.

This property allows to retrieve a list of the selected archive files of a folder if this script is run as user defined action at the folder. You can then iterate through this list for further use of the distinct files.

Note: If there is no file selected you will receive a valid empty ArchiveFileResultset.

**Since:** ELC 3.60j / otrisPORTAL 6.0j


```ts
var it = context.selectedArchiveFiles;
var archiveFile = it.first()
while (archiveFile)
{
   util.out(archiveFile.getAutoText("title"));
   archiveFile = it.next();
}
```


### selectedArchiveKeys

`selectedArchiveKeys: string[]`

Array with the keys of the selected archive files of a folder.

This property allows to retrieve an array with the keys of the selected archive files of a folder if this script is run as user defined action at the folder.

Note: If there is no archive file selected you will receive a valid empty array.

**Since:** ELC 3.60j / otrisPORTAL 6.0j


```ts
var keys = context.selectedArchiveKeys;
util.out(keys.length)
```


### selectedDocuments

`selectedDocuments: DocumentIterator`

DocumentIterator with the selected Documents (attachments) of the current document register.

This property allows to retrieve a list of all selected Documents of a register if this script is run as user defined action at the register.

Note: If there is no document inside the Register you will receive a valid empty DocumentIterator.

**Since:** DOCUMENTS 4.0b HF1


```ts
var it = context.selectedDocuments;
```


### selectedFiles

`selectedFiles: FileResultset`

Iterator with the selected files of a folder.

This property allows to retrieve a list of the selected files of a folder if this script is run as user defined action at the folder. You can then iterate through this list for further use of the distinct files.

Note: If there is no file selected you will receive a valid empty FileResultset.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
var it = context.selectedFiles;
```


### sourceCode

`sourceCode: string`

Script source code of the script after including other scripts by the #import rule.

This property is useful for debugging purposes, if you need to have a look for a certain line of code to find an error, but the script contains other imported sub scripts which mangle the line numbering.

**Since:** ELC 3.50b / otrisPORTAL 5.0b


```ts
util.out(context.sourceCode);
```


### workflowActionId

`workflowActionId: string`

Id of the locking WorkflowStep for the user for the current file.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
util.out(context.workflowActionId);
```


### workflowActionName

`workflowActionName: string`

Name of the locking WorkflowStep for the user for the current file.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
util.out(context.workflowActionName);
```


### workflowControlFlowId

`workflowControlFlowId: string`

Id of the ControlFlow the current file currently passes.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
util.out(context.workflowControlFlowId);
```


### workflowControlFlowName

`workflowControlFlowName: string`

Name of the ControlFlow the current file currently passes.

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
util.out(context.workflowControlFlowName);
```


### workflowStep

`workflowStep: WorkflowStep`

Returns the current workflowstep if the script is run in context of a workflow.

E.g. as guard or decision script.

**Since:** DOCUMENTS 5.0


## Methods


### addCustomProperty

`addCustomProperty(name: string, type: string, value: string): CustomProperty`

Creates a new global custom property.

**Parameters:**

- `name`: `string` — String value defining the name
- `type`: `string` — String value defining the type
- `value`: `string` — String value defining the value

**Returns:** CustomProperty

**Since:** DOCUMENTS 5.0

**See:** context.setOrAddCustomProperty context.getCustomProperties


```ts
var custProp = context.addCustomProperty("favorites", "string", "peachit");
if (!custProp)
  util.out(context.getLastError());
```


### addTimeInterval

`addTimeInterval( ts: Date, amount: number, unit?: string, useWorkCalendar?: boolean, ): Date`

Adds a time interval to a Date object.

Since date manipulation in Javascript is odd sometimes, this useful function allows to conveniently add a given period of time to a given date, e.g. to calculate a due date based upon the current date plus xx days

**Parameters:**

- `ts`: `Date` — Date object to which the period of time should be added
- `amount`: `number` — integer value of the period of time to be added
- `unit`: `string` — String value representing the time unit of the period of time. You may use one of the following unit values:

"minutes"
"hours"
"days"
"weeks" Default: 'minutes'
- `useWorkCalendar`: `boolean` — true if work calendar should be taken into account, false if not. The work calendar has to be defined at Documents->Settings Default: true

**Returns:** Date

**Since:** ELC 3.50e / otrisPORTAL 5.0e

**See:** context.getDatesDiff util.convertDateToString util.convertStringToDate


```ts
var actDate = new Date();  // actDate contains now the current date
var newDate = context.addTimeInterval(actDate, 14, "days", false);
util.out(newDate); // should  two weeks in the future
```


### changeScriptUser

`changeScriptUser(login: string): boolean`

Change the user context of the PortalScript.

In some cases, especially if you make heavy use of access privileges both with files and file fields, it might be neccessary to run a script in a different user context than the user who triggered the script execution. For example, if the current user is not allowed to change any field values, a PortalScript running in this user's context will fail, if it tries to change a field value. In this case it is best practice to switch the user context to some superuser who is allowed to perform the restricted action before that restricted action is executed. You may change the script's user context as often as you need, a change only applies to the instructions following the changeScriptUser() call.

**Parameters:**

- `login`: `string` — String value containing the login name of the user to switch to.

**Returns:** boolean

**Since:** ELC 3.51b / otrisPORTAL 5.1b


```ts
var currentUserLogin = context.currentUser;
var success = context.changeScriptUser("schreiber");
// code runs now in the context of user "schreiber"
...
// switch back to the original user
success = context.changeScriptUser(currentUserLogin);
```


### clearEnumvalCache

`clearEnumvalCache(scriptName: string): boolean`

Clears the cached enumval at the specified PortalScript.

**Parameters:**

- `scriptName`: `string` — String with the name of the PortalScript

**Returns:** boolean

**Since:** DOCUMENTS 5.0c HF1


```ts
var ret = context.clearEnumvalCache("lcmGetAllUser");
if (!ret)
   util.out(context.getLastError());
```


### convertDateToString

`convertDateToString(dateOrTimeStamp: Date, locale?: string): string`

Convert a Date object representing a date into a String.

The output String is in the date format of the specified locale. If you leave the locale parameter away the current locale of the script context will be used.

**Parameters:**

- `dateOrTimeStamp`: `Date` — Date/Timestamp object representing the desired date
- `locale`: `string` — Default: user locale

**Returns:** string

**Since:** DOCUMENTS 4.0c HF1

**See:** util.convertDateToString


```ts
var date1 = new Date(2014, 1, 14);
util.out(context.convertDateToString(date1, "de"));
// Output: 14.02.2014
util.out(context.convertDateToString(date1));
// Output: depends on the locale of the script context
var date2 = new Date(2014, 1, 14, 12, 59);
util.out(context.convertDateToString(date2, "en"));
// Output: 02/14/2014  12:59
```


### convertNumericToString

`convertNumericToString( value: number, decimalSep: string, thousandSep: string, precision?: number, ): string`

Converts a Number into a formatted String.

The output String may have any format you like. The parameters can be used to configure the format of the numeric String.

**Parameters:**

- `value`: `number` — Numeric object representing the number
- `decimalSep`: `string` — Decimal-Separator as String
- `thousandSep`: `string` — Thousand-Separator as String
- `precision`: `number` — Precision as number Default: 2

**Returns:** string

**Since:** ELC 3.60c / otrisPORTAL 6.0c

**See:** context.convertNumericToString

**Since:** ELC 3.60c / otrisPORTAL 6.0c

**See:** context.convertNumericToString


```ts
var numVal = 1000 * Math.PI;
util.out(context.convertNumericToString(numVal, ",", ".", 2));
Output: 3.141,59
```


```ts
var numVal = 1000 * Math.PI;
util.out(context.convertNumericToString(numVal, "en", 2));
Output: 3,141.59
```


### convertStringToDate

`convertStringToDate(dateOrTimeStamp: string, locale?: string): Date`

Convert a String representing a date into a Date object.

The output Date is in the date format of the specified locale. If you omit the locale parameter the current locale of the script context will be used.

**Parameters:**

- `dateOrTimeStamp`: `string` — String representing a date has to be formatted as the definition in the specified locale, e.g. "TT.MM.JJJJ" for the locale "de".
- `locale`: `string` — Optional String value with the locale abbreviation (according to the principal's configuration).

**Returns:** Date

**Since:** DOCUMENTS 5.0a HF2

**See:** util.convertStringToDate


```ts
var dateString = "19.09.1974";
var birthDay = context.convertStringToDate(dateString, "de");
```


### convertStringToNumeric

`convertStringToNumeric( numericValue: string, decimalSep: string, thousandSep: string, ): number`

Converts a formated String into a number.

The input String may have any format you like. The following parameters defines the format to configure the format of the numeric String.

**Parameters:**

- `numericValue`: `string` — Formatted numeric String
- `decimalSep`: `string` — Decimal-Separator as String
- `thousandSep`: `string` — Thousand-Separator as String

**Returns:** number

**Since:** ELC 3.60c / otrisPORTAL 6.0c

**See:** context.convertStringToNumeric

**Since:** ELC 3.60c / otrisPORTAL 6.0c

**See:** context.convertStringToNumeric


```ts
var numString = "1.000,99";
var floatVal = context.convertStringToNumeric(numString, ",", ".");
```


```ts
var numString = "1,000.99";
var floatVal = context.convertStringToNumeric(numString, "en");
```


### copyFileType

`copyFileType( sourceFileTypeName: string, targetFileTypeName: string, released: boolean, ): boolean`

Copy a file type.

**Parameters:**

- `sourceFileTypeName`: `string` — String containing the technical name of the file type to be copied.
- `targetFileTypeName`: `string` — Optional String containing the technical name of the file type copy. The default value is the sourceFileTypeName with the suffix "_copy".
- `released`: `boolean` — Optional boolean indicating whether the copied file type should be released. The default value is true.

**Returns:** boolean

**Since:** DOCUMENTS 5.0f


```ts
if (!context.copyFileType("myFileType", "fileTypeCopy"))
   util.out(contxt.getLastError());
```


### countPoolFiles

`countPoolFiles(fileType: string): number`

Retrieve the amount of pool files of the specified filetype in the system.

Note: This function is only for experts.

**Parameters:**

- `fileType`: `string` — the technical name of the desired filetype

**Returns:** number

**Since:** ELC 3.50j / otrisPORTAL 5.0j

**See:** context.createPoolFile


```ts
var fileType = "Standard"; // filetype
var poolSize = context.countPoolFiles(fileType); // amount of pool files
for (var i = poolSize; i < 3000; i++)
{
   context.createPoolFile(fileType);
}
```


### createAccessProfile

`createAccessProfile(profileName: string): AccessProfile`

Create a new access profile in the DOCUMENTS environment.

If the access profile already exist, the method returns an error.

**Parameters:**

- `profileName`: `string` — technical name of the access profile

**Returns:** AccessProfile

**Since:** ELC 3.60i / otrisPORTAL 6.0i


```ts
var office = context.createAccessProfile("office");
if (!office)
   util.out(context.getLastError());
```


### createAlias

`createAlias(name: string, userLogin: string): Alias`

Create a new Alias in the DOCUMENTS environment.

**Parameters:**

- `name`: `string` — The name of the alias
- `userLogin`: `string` — Login name of the SystemUser to be assigned to the alias.

**Returns:** Alias

**Since:** DOCUMENTS 5.0i HF6


### createArchiveServer

`createArchiveServer(name: string, type: string): ArchiveServer`

Create a new ArchiveServer.

This function creates a new ArchiveServer for the specified archive software on the top level. These types are available:

EEI
EEX_native
EBIS_store
NOAH
None

**Parameters:**

- `name`: `string` — The technical name of the ArchiveServer to be created.
- `type`: `string` — The desired archive software of the ArchiveServer.

**Returns:** ArchiveServer

**Since:** DOCUMENTS 5.0a


```ts
var as = context.createArchiveServer("Invoice2016", "NOAH")   // EDA
if (as)
  util.out(as.name);
else
  util.out(context.getLastError());
```


### createFile

`createFile<K extends string>( fileTypeName: K, jsonDefaultData?: string, ): DefaultDocFileType<K>`

Creates a new file of the specified FileType.

This function creates a new file object of the FileType with the given fileTypeName and returns it. So the type of the returned object is the FileType that is specified in the parameter fileTypeName and which is an extension of DocFile. In particular, all field names of the FileType are available as properties on the returned object.

If an error occurs during creation of the file the return value will be null and you can access an error message describing the error with getLastError().

Since the script is executed in the context of a particular user, it is mandatory that user possesses sufficient access privileges to create new instances of the desired FileType, otherwise the method will fail.

Note: DOCUMENTS 5.0c HF1 and newer: The function directly creates a file for an EAS or EBIS store, if "@server" has been appended to the filetype's name and if appropriate permissions are granted. In this case the returned DocFile must be saved with DocFile.commit instead of DocFile.sync.

Since: DOCUMENTS 5.0c HF1 (support for EDA/EAS and EBIS stores)

**Parameters:**

- `fileTypeName`: `K` — Technincal name of the desired FileType
- `jsonDefaultData`: `string` — Optional json-String with an object with default-values for the fields of the created file

**Returns:** DefaultDocFileType<K>

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
fileType: Person
field 1:
  Name: Lastname
  Defaultvalue: %data.foo1%
  Name: Firstname
  Defaultvalue: %data.foo2%
var defaultData = { foo1 : "Doe", foo2 : "John" };
var newFile = context.createFile("Standard", JSON.stringify(defaultData));
if (newFile)
   util.out(newFile.getAutoText("title"));
else
   util.out(context.getLastError());
```


### createFolder

`createFolder(name: string, type: string): Folder`

Create a new folder of the specified type on the top level.

This function creates a new folder of the specified type on the top level. There are three types available:

public
dynamicpublic
onlysubfolder

**Parameters:**

- `name`: `string` — The technical name of the folder to be created.
- `type`: `string` — The desired type of the folder.

**Returns:** Folder

**Since:** DOCUMENTS 4.0c


```ts
var folder = context.createFolder("myFolder", "public")
if (folder)
  util.out(folder.type);
else
  util.out(context.getLastError());
```


### createGlobalEnumeration

`createGlobalEnumeration(name: string): GlobalEnumeration`

Create a new GlobalEnumeration in the DOCUMENTS environment.

**Parameters:**

- `name`: `string` — The name of the GlobalEnumeration.

**Returns:** GlobalEnumeration

**Since:** DOCUMENTS 6.0.2

**See:** context.deleteGlobalEnumeration


### createPoolFile

`createPoolFile(fileType: string): boolean`

Create a new pool file of the specified filetype.

The script must run in the context of a user who has sufficient access privileges to create new files of the specified filetype, otherwise this method will fail.

**Parameters:**

- `fileType`: `string` — the technical name of the desired filetype

**Returns:** boolean

**Since:** ELC 3.50j / otrisPORTAL 5.0j

**See:** context.countPoolFiles


### deleteAccessProfile

`deleteAccessProfile(profileName: string): boolean`

Delete a certain access profile in the DOCUMENTS environment.

**Parameters:**

- `profileName`: `string` — technical name of the access profile

**Returns:** boolean

**Since:** ELC 3.51b / otrisPORTAL 5.1b


```ts
var profileName = "office"
var success = context.deleteAccessProfile(profileName);
if (success)
{
   util.out("Deletion of access profile " + profileName + " successful");
}
```


### deleteFolder

`deleteFolder(folderObj: Folder): boolean`

Delete a folder in DOCUMENTS.

**Parameters:**

- `folderObj`: `Folder` — an object of the Class Folder which represents the according folder in DOCUMENTS

**Returns:** boolean

**Since:** ELC 3.50l01 / otrisPORTAL 5.0l01


```ts
var itFD = context.getFoldersByName("Invoice");
var fd = itFD.first();
if (fd)
{
   var success = context.deleteFolder(fd);
}
```


### deleteGlobalEnumeration

`deleteGlobalEnumeration(name: string): boolean`

Delete a GlobalEnumeration in the DOCUMENTS environment.

**Parameters:**

- `name`: `string` — The name of the GlobalEnumeration.

**Returns:** boolean

**Since:** DOCUMENTS 6.0.2

**See:** context.createGlobalEnumeration


```ts
var name = "testEnum";
var success = context.deleteGlobalEnumeration(name);
if (success)
{
   util.out("Successfully deleted GlobalEnumeration " + name);
}
```


### deleteSystemUser

`deleteSystemUser(loginName: string): boolean`

Delete a user in the DOCUMENTS environment.

**Parameters:**

- `loginName`: `string` — login of the user

**Returns:** boolean

**Since:** ELC 3.50e / otrisPORTAL 5.0e

**See:** context.createSystemUser | context.createSystemUser


```ts
var login = "schreiber";
var success = context.deleteSystemUser(login);
if (success)
{
   util.out("Successfully deleted user " + login);
}
```


### doMaintenance

`doMaintenance(operationName: string): string`

Calls the specified maintenance operation.

**Parameters:**

- `operationName`: `string` — String with the name of the maintenance operation

**Returns:** string

**Since:** DOCUMENTS 5.0c HF1


```ts
var msg = context.doMaintenance("BuildAclCache lcmContract");
util.out(msg);
```


### enableModules

`enableModules(root?: Object, flags?: number): void`

Allow dynamic imports of other scripts as modules.

This function defines a function named require(), either in a passed object or in the global scope of the calling script. In sequence require('') can be used to import other portal scripts, which are implemented in the style of CommonJS (Node.js) modules.

Note: Usually only top-level scripts call enableModules(). They should call it only once. Scripts loaded by require() always see the function as a global parameter. DOCUMENTS exposes a generic 'module' and an initially empty 'exports' object to each imported script. Virtually no other features of the module concept of Node.js are available. Since DOCUMENTS 5.0i the module objects have got a readonly property "filename". In DOCUMENTS 5 this is a plain script name. DOCUMENTS 6 will preferably return a virtual path like "/db/testPrincipal/myScriptCategory/myScriptName.js". If the "documents.ini" contains the setting "$JSGlobalModule 1", enableModules() will create a main module object, if no global variable 'module' is already defined. Presumably DOCUMENTS 6 will define a global module always.

To customize the behaviour of the require() function the following flags may be set. (Use one of the operators '|' or '+' to combine multiple flags.)

1 = ignore ".js" or ".JS" extensions appended to the passed script name
2 = ignore file paths prepended to the script name

The require() implementation saves the flags passed to enableModules() before a new module is loaded. It restores them afterwards. This allows local overrides of the import flags, as shown in the second example. However, if require() is called directly or indirectly from an exported function, local flag overrides generally do not work. When the importing script calls the exported function, the embedded call of require() occurs with the flags set by the importing script, not with the modules's local flags.

Since: DOCUMENTS 5.0f (flags parameter) Since: DOCUMENTS 5.0i (main module creation, property "module.filename")

**Parameters:**

- `root`: `Object` — An optional Object to define the require() function as a property. Use this parameter, if the name "require" is already reserved in the script's global namespace.
- `flags`: `number` — An optional integer number containing a bit mask with special options. Defaults to 0. Default: 0

**Returns:** void

**Since:** DOCUMENTS 5.0d


```ts
// The main script
context.enableModules();
var mymath = require('MyMath');
var test = mymath.square(42);
util.out("square(42) is " + test);
// End of main script
// The 'MyMath' module script
// "module.exports" is initially an empty object.
// require() will return whatever the script places here.
//
// "exports" is a shortcut reference to "module.exports".
// This works as long as only properties need to be added.
// Directly assigning a new value to "exports" or
// "module.exports" would break the reference.
exports.square = function(x) { return x*x; };
// End of module script
```


```ts
// Excerpt from main script
context.enableModules(undefined, 1);
var firstModule = require('Module1.js'); // extension ".js" will be ignored
var someOtherModule = require('Module2.js'); // ".js" will be ignored again
// Excerpt from 'Module1' module script
// override import flags for local imports of this module
// DOCUMENTS will reset them after initialization of the module.
context.enableModules(undefined, 2);
var submodule1 = require("C:/anywhere/Module3"); // Path will be ignored
exports.square = function(x) { return x*x; };
// But don't rely on overridden flags within an exported function!
// This is a negative example.
exports.error_prone = function {
  // This raises an error when called from the main script: path is not ignored.
  var otherMod = require("C:/anywhere/Module4");
  // any more code ...
}
// End of module script
```


### exportList

`exportList(inJSON: string): string`

Creates an xlsx from the given JSON-Data and returns the path to the xlsx.

The JSON-String represents a table and has the following structure:

{
   "exporttype" : export-format,
   "labels" : [column1-label, column2-label, ...],
   "datatypes" : [column1-datatype, column2-datatype, ...],
   "data" : [
     	       [data11, data12, ...],
     	       [data21, data22, ...],
                ...
            ]
}

Copy
exporttype: type of the exported format, currently only the type xlsx is available
labels: array of labels for columns
datatypes: array of data types for columns. The following types are avaiable: string, date, timestamp and numeric.
data: array of arrays - each array specify one line in the table

**Parameters:**

- `inJSON`: `string` — JSON-String containing the data to be exported.

**Returns:** string

**Since:** DOCUMENTS 5.0i HF5


```json
{
   "exporttype" : export-format,
   "labels" : [column1-label, column2-label, ...],
   "datatypes" : [column1-datatype, column2-datatype, ...],
   "data" : [
     	       [data11, data12, ...],
     	       [data21, data22, ...],
                ...
            ]
}
```


```ts
var inJSON = {};
inJSON.exporttype = "xlsx";
inJSON.labels    = ["Title", "Date", "Time", "Amount", "Comment"];
inJSON.datatypes = ["string", "date", "timestamp", "numeric", "string"];
inJSON.data = [
     	       ["Title1", "12/01/2023", "12/01/2023  15:01", "1.000,99", "Comment 1"],
     	       ["Title2", "12/02/2023", "12/02/2023  15:02", "2.000", "Comment 2"],
     	       ["Title3", "12/03/2023", "12/03/2023  15:03", "3000", "Comment 3"]
              ];

var filepath = context.exportList(JSON.stringify(inJSON));
if (filepath == "")
   throw context.getLastError();

context.returnValue = filepath;
```


### extCall

`extCall(workDir: string, cmd: string, synced: boolean): number`

Perform an external command shell call on the Portalserver.

Executes an external command shell call (usually a batch file or shell script) in the context of the given work directory. With the synced parameter, you can specify if the scripting engine should wait for the external call to complete or if the script execution should continue asynchonously. If the script waits for the external call to complete, this method returns the errorcode of the external call as an integer value (see note for Linux).

Note: On Linux, the return value contains some more information. You can see in the example, how you can get the exit status on Linux.

**Parameters:**

- `workDir`: `string` — String containing a complete directory path which should be used as the working directory
- `cmd`: `string` — String containing the full path and filename to the file to execute
- `synced`: `boolean` — boolean value that defines, if the script should wait for the external call to finish (true) or not (false)

**Returns:** number

**Since:** ELC 3.51 / otrisPORTAL 5.1


```ts
// execute testrun.bat in "c:\tmp" and wait for the call to complete
var errorLevel = context.extCall("c:\\tmp", "c:\\tmp\\testrun.bat", true);
util.out(errorLevel);
// get exit status on linux
var ret = context.extCall("/tmp", "/tmp/testrun", true);
var exitStatus = (ret & 0xff00) >> 8;
```


### extProcess

`extProcess(cmd: string, timeout?: number): string[]`

Perform an external process call on the Portalserver and returns the exitcode of the external process and the standard output.

An external process call is executed, e.g. a batch file. The methods returns a string array of the size 2. The first array value is the exit code (converted to its equivalent string representation) of the external process. The second array value contains the content that the external process has written to the standard output.

Since: DOCUMENTS 5.0i new optional parameter timeout

**Parameters:**

- `cmd`: `string` — String containing the full path and filename to the program which shall be executed
- `timeout`: `number` — Number in milliseconds Default: 0

**Returns:** string[]

**Since:** ELC 3.60g / otrisPORTAL 6.0g


```ts
// execute testrun.bat and wait for the call to complete
var res = context.extProcess("c:\\tmp\\testrun.bat");
var exitcode = res[0];
var stdout = res[1];
if (exitcode !== "0")
  util.out(exitcode + ": " + stdout);
```


### filterFiletypeByFields

`filterFiletypeByFields(fieldNames: string[]): string[]`

Returns an array containing all file types that have the specified fields.

Only file types to which the user has access rights are returned.

**Parameters:**

- `fieldNames`: `string` — Array of field names

**Returns:** string[]

**Since:** DOCUMENTS 6.3.0


```ts
var filetypes = context.filterFiletypeByFields(["testField1", "testField2"]);
util.out(filetypes);
```


### findAccessProfile

`findAccessProfile(profileName: string): AccessProfile`

Find a certain access profile in the DOCUMENTS environment.

**Parameters:**

- `profileName`: `string` — technical name of the access profile

**Returns:** AccessProfile

**Since:** ELC 3.50b / otrisPORTAL 5.0b


```ts
var office = context.findAccessProfile("office");
```


### findCustomProperties

`findCustomProperties(filter: string): CustomPropertyIterator`

Searches for CustomProperties.

**Parameters:**

- `filter`: `string` — Optional String value defining the search filter (specification see example)

**Returns:** CustomPropertyIterator

**Since:** DOCUMENTS 5.0

**See:** context.getCustomProperties AccessProfile.getCustomProperties SystemUser.getCustomProperties


```ts
// Specification of the filter:
// ----------------------------
// Possible filter-columns:
// name: String - name of the custom property
// type: String - type of the custom property
// to_Systemuser:    Integer (oid-low) - connected SystemUser
// to_AccessProfile: Integer (oid-low) - connected AccessProfile
// to_DlcFile      : Integer (oid-low) - connected Filetype
//
// Operators:
// &&: AND
// ||: OR
var oidUser = context.findSystemUser("schreiber").getOID(true);
var oidAP1 = context.findAccessProfile("Service").getOID(true);
var oidAP2 = context.findAccessProfile("Customer").getOID(true);
var oidFileType = context.getFileTypeOID("ftRecord", true);
var filter = "name='Prop1'";
filter += "&& to_Systemuser=" + oidUser;
filter += "&& (to_AccessProfile=" + oidAP1 + " || to_AccessProfile=" + oidAP2 + ")";
filter += "&& to_DlcFile =" + oidFileType;
var it = context.findCustomProperties(filter);
for (var cp=it.first(); cp; cp=it.next())
{
   util.out(cp.value);
}
```


### findLogBookEntries

`findLogBookEntries(filter?: string, sortOrder?: string): string`

Searches for log book entries.

Since: DOCUMENTS 5.0i HF10 (optional parameter sortOrder)

**Parameters:**

- `filter`: `string` — Optional String value defining the search filter (specification see example)
- `sortOrder`: `string` — String containing an optional sort order; use empty String ('') if you don't want to sort at all

**Returns:** string

**Since:** DOCUMENTS 5.0h HF1

**See:** context.writeLogBook


```ts
// Specification of the filter:
// ----------------------------
// Possible filter-columns:
// Ts: Timestamp - Timestamp of the creation of the entry (using special format 'fyyyymmddHHMMSS' for the filter value)
// UserLogin: String - Login of the responsible user
// TitleFile: String - Title of the file
// IdFile: String - Id of the file
// FieldValues: String - A log book entry defined on the file type
// TitleFileType: String - Title of the file type
// IdFileType: String - Id of the file type
// IdWorkflow: String - Id of the workflow within the file being circulated
// MainContextName: String - Name of the workflow template
// IdMainContext: String - Id of the workflow template
// IdStep: String - Id of the workflow step
// ContextName: String - Display name of the workflow action
// IdContext: String - Id of the workflow action
// ActionCode : Integer - Integer code of the executed action (see Context.writeLogBook() for more information)
// ActionDescription: String - Description of the executed action (see Context.writeLogBook() for more information)
// ActionDetail1: String - Additional information
// ActionDetail2: String - Additional information
// ActionDetail3: String - Additional information
//
// Operators:
// &&: AND
// ||: OR
var filter = "Ts <= 'f20220121092256'";
filter += "&& Ts >= 'f20220111092256'";
filter += "&& IdFile = 'peachitreg_fi20220000000193'";
filter += "&& (ActionCode = 7 || ActionCode = 6)";
var jsonStr = context.findLogBookEntries(filter, "Ts-");
var jsonArr = JSON.parse(jsonStr);
for (var entry of jsonArr)
{
    util.out("-------------------");
    for (var prop in entry)
    {
        util.out(prop + ": " + entry[prop]);
    }
    util.out("-------------------");
}
```


### findSystemUser

`findSystemUser(login: string): SystemUser`

Retrieve a user by his/her login.

If the user does not exist, then the return value will be null.

**Parameters:**

- `login`: `string` — name of the user

**Returns:** SystemUser

**Since:** ELC 3.50b / otrisPORTAL 5.0b

**See:** context.findSystemUserByAlias context.getSystemUser context.getSystemUsers AccessProfile.getSystemUsers


```ts
var myUser = context.findSystemUser("schreiber");
```


### findSystemUserByAlias

`findSystemUserByAlias(alias: string): SystemUser`

Retrieve a user by an alias name.

If the alias does not exist or is not connected to a user then the return value will be null.

**Parameters:**

- `alias`: `string` — technical name of the desired alias

**Returns:** SystemUser

**Since:** ELC 3.51c / otrisPORTAL 5.1c

**See:** context.findSystemUser context.getSystemUser context.getSystemUsers


```ts
var myUser = context.findSystemUserByAlias("CEO");
```


### findSystemUserByLoginAlias

`findSystemUserByLoginAlias(loginAlias: string): SystemUser`

Retrieve a user by a login alias. A login alias for a user can be set via the Systemuser property loginAlias. If the login alias does not exist then the return value will be null.

**Parameters:**

- `loginAlias`: `string` — The desired login alias for a user.

**Returns:** SystemUser

**Since:** DOCUMENTS 5.0i HF5

**See:** context.findSystemUserByAlias(alias)


```ts
var myUser = context.findSystemUserByLoginAlias("myLoginAlias");
```


### getAccessProfiles

`getAccessProfiles(includeInvisibleProfiles?: boolean): AccessProfileIterator`

Get an iterator with all access profiles of in the DOCUMENTS environment.

Note: This method can only return access profiles which are checkmarked as being visible in DOCUMENTS lists.

Since: ELC 3.60e / otrisPORTAL 6.0e (new parameter includeInvisibleProfiles)

**Parameters:**

- `includeInvisibleProfiles`: `boolean` — optional boolean value to define, if access profiles that are not checkmarked as being visible in DOCUMENTS lists should be included Default: false

**Returns:** AccessProfileIterator

**Since:** ELC 3.51g / otrisPORTAL 5.1g


```ts
var itAP = context.getAccessProfiles(false);
for (var ap = itAP.first(); ap; ap = itAP.next())
{
   util.out(ap.name);
}
```


### getActionByName

`getActionByName(actionName: string): UserAction`

Retrieve a global user-defined action.

**Parameters:**

- `actionName`: `string` — String value containing the desired action name.

**Returns:** UserAction

**Since:** DOCUMENTS 5.0i


```ts
var action = context.getActionByName("testAction");
if (action)
{
   action.type = "PortalScript";
   action.setPortalScript("testScript");
}
else
   util.out(context.getLastError());
```


### getAliasByName

`getAliasByName(name: string): Alias`

Get an Alias object by its name.

**Parameters:**

- `name`: `string` — The name of the desired Alias.

**Returns:** Alias

**Since:** DOCUMENTS 5.0i HF7


### getAllAliases

`getAllAliases(): AliasIterator`

Get an AliasIterator with all aliases in DOCUMENTS.

**Returns:** AliasIterator

**Since:** DOCUMENTS 5.0i HF7


```ts
var it = context.getAllAliases();
for (var alias of it)
{
   // do something
}
```


### getAllLockedDocumentsInfo

`getAllLockedDocumentsInfo(): string`

Retrieve the information of all locked documents as JSON string.

**Returns:** string

**Since:** DOCUMENTS 6.0


### getAllWorkflows

`getAllWorkflows(typeFlags?: number): WorkflowIterator`

List all available Workflows.

Create a WorkflowIterator, which contains references to all available Workflows and distribution lists.

Note: typeFlags Parameter supports any combination of the following values.

Bit #	Value	Meaning
0	1	Enumerate simple distribution lists
1	2	Enumerate complete workflows

The bits not listed above should remain zero for upward compatibility. Hint for beginners: flag values are always powers of 2. They can be combined with "|" or with "+". The expression (1|2|8) evaluates to 11 for example.

Note: See the WorkflowIterator class description for an example.

**Parameters:**

- `typeFlags`: `number` — An optional integer number, which specifies the requested types of Workflow objects (see remarks). The default value is 2.

**Returns:** WorkflowIterator

**Since:** DOCUMENTS 6.0


### getArchiveConnection

`getArchiveConnection(archiveServerName: string): ArchiveConnection`

Get an ArchiveConnection object.

With this method you can get an ArchiveConnection object. This object offers several methods to use the EAS Interface, EBIS or the EASY ENTERPRISE XML-Server.

**Parameters:**

- `archiveServerName`: `string` — Optional string containing the archive server name; If the archive server is not defined, then the main archive server will be used

**Returns:** ArchiveConnection

**Since:** DOCUMENTS 5.0a

**See:** ArchiveServer.getArchiveConnection


```ts
var xmlserver = context.getArchiveConnection("myeex")
if (!xmlserver) // failed
   util.out(context.getLastError());
else
{
   ...
}
```


### getArchiveFile

`getArchiveFile(key: string): DocFile`

Get a file from the archive.

With this method you can get a file from the archive using the archive key. You need the necessary access rights on the archive side.

**Parameters:**

- `key`: `string`

**Returns:** DocFile

**Since:** ELC 3.60e / otrisPORTAL 6.0e


```ts
var key = "Unit=Default/Instance=Default/Pool=DEMO/Pool=PRESSE/Document=Waz.4E1D1F7E28C611DD9EE2000C29FACDC2@eex1";
var file = context.getArchiveFile(key)
if (!file) // failed
   util.out(context.getLastError());
else
{
   ...
}
```


### getArchiveServer

`getArchiveServer(name: string): ArchiveServer`

Get an ArchiveServer identified by its name.

**Parameters:**

- `name`: `string` — The technical name of the ArchiveServer.

**Returns:** ArchiveServer

**Since:** DOCUMENTS 5.0a


```ts
var as = context.getArchiveServer("ebis1");
if (as)
   util.out(as.name);
```


### getArchiveServers

`getArchiveServers(): ArchiveServerIterator`

Get an iterator with all ArchiveServers in the DOCUMENTS environment.

**Returns:** ArchiveServerIterator

**Since:** DOCUMENTS 5.0a


```ts
var itAS = context.getArchiveServers();
for (var as = itAS.first(); as; as = itAS.next())
{
   util.out(as.name);
}
```


### getAutoText

`getAutoText(autoText: string, startTag?: string, endTag?: string): string`

Get the String value of a DOCUMENTS autotext.

Since: DOCUMENTS 5.0i new optional parameters startTag and endTag

**Parameters:**

- `autoText`: `string` — the rule to be parsed
- `startTag`: `string` — optional start tag. Default: "%"
- `endTag`: `string` — otional end tag. Default: "%"

**Returns:** string

**Since:** ELC 3.50e / otrisPORTAL 5.0e


```ts
util.out(context.getAutoText("currentDate"));
```


### getClientLang

`getClientLang(): string`

Get the abbreviation of the current user's portal language.

If you want to return output messages through scripting, taking into account that your users might use different portal languages, this function is useful to gain knowledge about the portal language used by the current user, who is part of the script's runtime context. This function returns the current language as the two letter abbreviation as defined in the principal's settings in the Windows Portal Client (e.g. "de" for German).

**Returns:** string

**Since:** ELC 3.51 / otrisPORTAL 5.1

**See:** context.setClientLang context.getEnumErgValue context.getFieldErgName context.getFileTypeErgName context.getEnumValues context.getFromSystemTable


```ts
util.out(context.getClientLang());
```


### getClientSystemLang

`getClientSystemLang(): number`

Get the script's execution context portal language index.

**Returns:** number

**Since:** ELC 3.51g / otrisPORTAL 5.1g

**See:** context.getEnumErgValue context.getFieldErgName context.getFileTypeErgName context.getEnumValues context.getFromSystemTable


```ts
util.out(context.getClientSystemLang());
var erg = context.setClientSystemLang(0); // first portal language
```


### getClientType

`getClientType(): string`

Get the connection info of the client connection.

You can analyze the connection info to identify e.g. a client thread of the HTML5 Web-Client HTML5-Client: CL[Windows 7/Java 1.7.0_76], POOL[SingleConnector], INF[SID[ua:docsclient, dca:2.0, docs_cv:5.0]] Classic-Client: CL[Windows 7/Java 1.7.0_76], POOL[SingleConnector] SOAP-Client: Documents-SOAP-Proxy (In-Server-Client-Library) on Win32

**Returns:** string

**Since:** DOCUMENTS 5.0


```ts
function isHTML5Client()
{
    return context.getClientType().indexOf("docs_cv:5.0") > -1;
}
if (isHTML5Client())
   util.out("HTML5-Client");
else
   util.out("NO HTML5-Client");
```


### getCurrentUserAttribute

`getCurrentUserAttribute(attributeName: string): string`

Get the String value of an attribute of the current user.

**Parameters:**

- `attributeName`: `string` — the technical name of the desired attribute

**Returns:** string

**Since:** ELC 3.50f / otrisPORTAL 5.0f

**See:** context.getPrincipalAttribute context.setPrincipalAttribute


```ts
util.out(context.getCurrentUserAttribute("particulars.lastName"));
```


### getCustomProperties

`getCustomProperties( nameFilter?: string, typeFilter?: string, ): CustomPropertyIterator`

Get a CustomPropertyIterator with global custom properties.

**Parameters:**

- `nameFilter`: `string` — String value defining an optional filter depending on the name
- `typeFilter`: `string` — String value defining an optional filter depending on the type

**Returns:** CustomPropertyIterator

**Since:** DOCUMENTS 5.0

**See:** context.findCustomProperties context.setOrAddCustomProperty context.addCustomProperty


```ts
var itProp = context.getCustomProperties();
for (var prop = itProp.first(); prop; prop = itProp.next())
{
   util.out(prop.name + ": " + prop.value);
}
```


### getDatesDiff

`getDatesDiff( earlierDate: Date, laterDate: Date, unit?: string, useWorkCalendar?: boolean, ): number`

Subtract two Date objects to get their difference.

This function calculates the time difference between two Date objects, for example if you need to know how many days a business trip takes. By default this function takes the work calendar into account if it is configured and enabled for the principal.

**Parameters:**

- `earlierDate`: `Date` — Date object representing the earlier date
- `laterDate`: `Date` — Date object representing the later date
- `unit`: `string` — optional String value defining the unit, allowed values are "minutes", "hours" and "days" (default) Default: 'days'
- `useWorkCalendar`: `boolean` — optional boolean to take office hours into account or not (requires enabled and configured work calendar) Default: true

**Returns:** number

**Since:** ELC 3.51b / otrisPORTAL 5.1b


```ts
var start = util.convertStringToDate("01.04.2006", "dd.mm.yyyy");
var end = util.convertStringToDate("05.04.2006", "dd.mm.yyyy");
var duration = context.getDatesDiff(start, end) ;
util.out("Difference: " + duration); // should be 4
```


### getDocumentById

`getDocumentById(idFile: string, idDocument: string): Document`

Get the Document by its unique file-id.

If the Document does not exist or the user in whose context the script is executed is not allowed to access the file, then the return value will be null.

**Parameters:**

- `idFile`: `string` — Unique id of the file
- `idDocument`: `string` — Unique id of the document

**Returns:** Document

**Since:** DOCUMENTS 5.0e


```ts
var doc = context.getDocumentById("dopaag_fi20160000000423", "dopaagdc0000000000000256");
if (!doc)
   util.out(context.getLastError());
else
  util.out(doc.fullname)
```


### getDocumentTemplateFromFileType

`getDocumentTemplateFromFileType( fileTypeName: string, templateName: string, content?: boolean, ): string`

Retrieve the content or the path of a document template from a file type.

**Parameters:**

- `fileTypeName`: `string` — String containing the technical name of the file type.
- `templateName`: `string` — String containing the technical name of the document template.
- `content`: `boolean` — Default: false. Optional boolean indicating whether the path of the template file is wanted or the content of the file as String.

**Returns:** string

**Since:** DOCUMENTS 5.0f


```ts
try {
   var templatePath    = context.getDocumentTemplateFromFileType("crmUser", "TemplateOrder");
   var templateContent = context.getDocumentTemplateFromFileType("crmUser", "TemplateOrder", true);
} catch (err) {
   util.out(err)
}
```


### getEnumAutoText

`getEnumAutoText(autoText: string): string[]`

Get an array with the values of an enumeration autotext.

**Parameters:**

- `autoText`: `string` — to be parsed

**Returns:** string[]

**Since:** ELC 3.60e / otrisPORTAL 6.0e


```ts
var values = context.getEnumAutoText("%accessProfile%")
if (values)
{
  for (var i = 0; i < values.length; i++)
  {
      util.out(values[i]);
  }
}
```


### getEnumErgValue

`getEnumErgValue( fileType: string, field: string, techEnumValue: string, locale?: string, ): string`

Get the ergonomic label of a multilanguage enumeration list value.

Enumeration lists in multilanguage DOCUMENTS installations usually are translated into the different portal languages as well. This results in the effect that only a technical value for an enumeration is stored in the database. So, if you need to display the label which is usually visible instead in the enumeration field through scripting, this function is used to access that ergonomic label.

**Parameters:**

- `fileType`: `string` — String value containing the technical name of the desired filetype
- `field`: `string` — String value containing the technical name of the desired enumeration field
- `techEnumValue`: `string` — String value containing the desired technical value of the enumeration entry
- `locale`: `string` — optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically

**Returns:** string

**Since:** ELC 3.51 / otrisPORTAL 5.1

**See:** context.getEnumErgValue context.getFieldErgName context.getFileTypeErgName context.getEnumValues context.getFromSystemTable


```ts
util.out(context.getEnumErgValue("Standard", "Priority", "1", "de"));
```


### getEnumLocaleValues

`getEnumLocaleValues( fileTypeOrScript: string, fieldOrParamName: string, enumKeys: string[], enumLocales: string[], locale?: string, enumSource?: number, ): string`

Retrieve the technical and ergonomic values of an enumeration list.

Since: DOCUMENTS 6.1.0 (new parameter enumSource)

**Parameters:**

- `fileTypeOrScript`: `string` — The technical name of the desired file type or script.
- `fieldOrParamName`: `string` — The technical name of the desired enumeration field or script parameter.
- `enumKeys`: `string` — Empty array for the technical values.
- `enumLocales`: `string` — Empty array for the ergonomic values.
- `locale`: `string` — The locale abbreviation (according to the principal's configuration). Default: the current user's portal language
- `enumSource`: `number` — Constant indicating the source of the enumeration. Currently only the following values are available:

context.FILETYPE_FIELD: The source is a field in a file type;
context.SCRIPT_PARAM: The source is a script parameter;
context.SOURCE_UNKNOWN: The source is not specified.

Default: context.SOURCE_UNKNOWN

Note: If this parameter is not specified or context.SOURCE_UNKNOWN, the method first checks whether the specification (fileTypeOrScript) is a file type name. If no file type is found, it searches for a script.

**Returns:** string

**Since:** DOCUMENTS 6.0.1

**See:** context.getEnumErgValue context.getEnumValues


```ts
var enumKeys = new Array();
var enumLocales = new Array();
var msg = context.getEnumLocaleValues("Standard", "Priority", enumKeys, enumLocales, "en", context.FILETYPE_FIELD);
if (msg.length == 0)
{
   for (var i = 0; i < enumKeys.length; i++)
   {
      util.out(enumKeys[i]);
      util.out(enumLocales[i]);
      util.out("---------");
   }
}
else
   util.out(msg);
```


### getEnumValues

`getEnumValues(fileType: string, field: string): false | string[]`

Get an array with enumeration list entries.

In some cases it might be useful not only to access the selected value of an enumeration file field, but the list of all possible field values as well. This function creates an Array of String values (zero-based), and each index is one available value of the enumeration field. If the enumeration field is configured to sort the values alphabetically, this option is respected.

**Parameters:**

- `fileType`: `string` — The technical name of the desired filetype
- `field`: `string` — The technical name of the desired enumeration field

**Returns:** false | string[]

**Since:** ELC 3.51 / otrisPORTAL 5.1

**See:** context.getEnumErgValue context.getFieldErgName context.getFileTypeErgName context.getEnumValues context.getFromSystemTable


```ts
var valueList = context.getEnumValues("Standard", "Priority");
if (valueList && valueList.length > 0)
{
   for (var i = 0; i < valueList.length; i++)
   {
      util.out(valueList[i]);
   }
}
```


### getFieldErgName

`getFieldErgName(fileType: string, field: string, locale?: string): string`

Get the ergonomic label of a file field.

In multilanguage DOCUMENTS environments, usually the file fields are translated to the different locales by using the well known ergonomic label hack. The function is useful to output scripting generated information in the appropriate portal language of the web user who triggered the script execution.

**Parameters:**

- `fileType`: `string` — The technical name of the desired filetype
- `field`: `string` — The technical name of the desired field
- `locale`: `string` — The locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically

**Returns:** string

**Since:** ELC 3.51 / otrisPORTAL 5.1

**See:** context.getEnumErgValue context.getFieldErgName context.getFileTypeErgName context.getEnumValues context.getFromSystemTable


```ts
util.out(context.getFieldErgName("Standard", "Prioritaet", "de"));
```


### getFileById

`getFileById(idFile: string): DocFile`

Get the file by its unique file-id.

If the file does not exist or the user in whose context the script is executed is not allowed to access the file, then the return value will be null.

**Parameters:**

- `idFile`: `string` — Unique id of the file

**Returns:** DocFile

**Since:** ELC 3.51b / otrisPORTAL 5.1b

**See:** context.file


```ts
var file = context.getFileById("toastupfi_20070000002081");
if (file)
   util.out(file.getAutoText("title"));
else
   util.out(context.getLastError());
```


### getFilesWithScratchCopy

`getFilesWithScratchCopy(): FileResultset`

Retrieve a FileResultset of all the active files related with a scratch copy.

**Returns:** FileResultset

**Since:** DOCUMENTS 5.0i HF5

**See:** DocFile.deleteScratchCopy


### getFileTypeErgName

`getFileTypeErgName(fileType: string, locale?: string): string | boolean`

Get the ergonomic label of a filetype.

In multilanguage DOCUMENTS environments, usually the filetypes are translated to the different locales by using the well known ergonomic label hack. The function is useful to output scripting generated information in the appropriate portal language of the web user who triggered the script execution.

**Parameters:**

- `fileType`: `string` — String value containing the technical name of the desired filetype
- `locale`: `string` — optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically

**Returns:** string | boolean

**Since:** ELC 3.51 / otrisPORTAL 5.1

**See:** context.getEnumErgValue context.getFieldErgName context.getFileTypeErgName context.getEnumValues context.getFromSystemTable


```ts
util.out(context.getFileTypeErgName("Standard", "de"));
```


### getFileTypeOID

`getFileTypeOID(nameFiletype: string, oidLow?: boolean): string`

Returns the object-id of a filetype.

**Parameters:**

- `nameFiletype`: `string` — String value containing the technical name of the filetype.
- `oidLow`: `boolean` — Default: false. Optional flag: If true only the id of the filetype object (m_oid) will be returned. If false the id of the filetype object will be returned together with the id of the corresponding class in the form class-id:m_oid.

**Returns:** string

**Since:** DOCUMENTS 5.0


### getFolderPosition

`getFolderPosition(folder: Folder): number`

Retrieve the position of a top level folder in the global context.

This method can be used to get the position of a top level folder (public, public dynamic or only subfolders folder with no parent) in the global context.

**Parameters:**

- `folder`: `Folder` — Folder object whose position to be retrieved.

**Returns:** number

**Since:** DOCUMENTS 5.0a

**See:** context.setFolderPosition Folder.getPosition Folder.setPosition


```ts
var folder = context.getFoldersByName("MyPublicFolder").first();
var pos = context.getFolderPosition(folder);
if (pos < 0)
   throw context.getLastError();
```


### getFoldersByName

`getFoldersByName( folderPattern: string, type?: string, checkAccessRight?: boolean, ): FolderIterator`

Retrieve a list of folders with identical name.

Different folders might match an identical pattern, e.g. "DE_20*" for each folder like "DE_2004", "DE_2005" and so on. If you need to perform some action with the different folders or their contents, it might be useful to retrieve an iterator (a list) of all these folders to loop through that list.

Note: Until version 5.0h this method ignored the access rights of the user to the folders. With the optional parameter checkAccessRight this can now be done. For backward compatibility the default value is set to false.

Since: DOCUMENTS 5.0h (new optional parameter checkAccessRight)

**Parameters:**

- `folderPattern`: `string` — the name pattern of the desired folder(s)
- `type`: `string` — optional parameter, a String value defining the type of folders to look for; allowed values are "public", "dynamicpublic" and "onlysubfolder"
- `checkAccessRight`: `boolean` — Default: false. optional boolean value, that indicates if the access rights should be considered

**Returns:** FolderIterator

**Since:** ELC 3.50l01 / otrisPORTAL 5.0l01


```ts
var folderIter = context.getFoldersByName("Inv*");
```


### getFromSystemTable

`getFromSystemTable(identifier: string, locale?: string): string`

Retrieve the desired entry of the system messages table.

It might be inconvenient to maintain the different output Strings of localized PortalScripts, if this requires to edit the scripts themselves. This function adds a convenient way to directly access the system messages table which you may maintain in the Windows Portal Client. This enables you to add your own system message table entries in your different portal languages and to directly access them in your scripts. Since: DOCUMENTS 5.0i HF5 (new parameter locale)

**Parameters:**

- `identifier`: `string` — String value containing the technical identifer of a certain system message table entry
- `locale`: `string` — String value containing the locale (de, en,...) optional String value, that indicates the wanted language

**Returns:** string

**Since:** ELC 3.50o / otrisPORTAL 5.0o

**See:** context.getEnumErgValue context.getFieldErgName context.getFileTypeErgName context.getEnumValues context.getFromSystemTable


```ts
// requires an entry with that name in your system message table
util.out(context.getFromSystemTable("myOwnTableEntry"));
```


### getGlobalAttribute

`getGlobalAttribute(attributeName: string): string`

Get the string value of an attribute of the DOCUMENTS global settings.

**Parameters:**

- `attributeName`: `string` — The name of the desired attribute

**Returns:** string

**Since:** DOCUMENTS 5.0g

**See:** context.setGlobalAttribute


```ts
// Retrieve a global attribute
try {
   var value = context.getGlobalAttribute("StandardUser");
   util.out(value);
} catch (err) {
   util.out(err);
}
// Retrieve a global property whose name starts with '$'
var propValue = context.getGlobalAttribute("$decreaseSearchArchivesScript");
if (propValue == "")
  util.out("$decreaseSearchArchivesScript not set");
else
  util.out(propValue);
```


### getGlobalEnumerations

`getGlobalEnumerations(): GlobalEnumerationIterator`

Get a GlobalEnumerationIterator with all GlobalEnumerations in DOCUMENTS.

**Returns:** GlobalEnumerationIterator

**Since:** DOCUMENTS 6.0.2


```ts
var it = context.getGlobalEnumerations();
for (var gEnum of it)
{
   // do something
}
```


### getJSObject

`getJSObject(oid: string): object`

Get a JS_Object by object id.

With this method you can get a JS-Object by the object id. Depending of the class of the object you get a JS-Object of the classes AccessProfile, DocFile, Document, Folder, Register, SystemUser or WorkflowStep

**Parameters:**

- `oid`: `string` — String containing the id of the object

**Returns:** object

**Since:** ELC 3.60c / otrisPORTAL 6.0c


```ts
var docFile1 = context.file;
var objectId = docFile1.getOID();
var docFile2 = context.getJSObject(objectId);
// docFile1 and docFile2 are both of the class DocFile
// and reference the same ELC-file object
```


### getLastError

`getLastError(shortMessage?: boolean): string`

Function to get the description of the last error that occurred.

Note: All classes have their own error functions. Only global errors are available through the context getLastError() method.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files Since: DOCUMENTS 5.0g (new parameter shortMessage)

**Parameters:**

- `shortMessage`: `boolean` — Default: false. optional Boolean; removes "Error in function: class.method(): " from the message.

**Returns:** string

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DocFile.getLastError


```ts
util.out(context.getLastError());
```


### getLicenseInfo

`getLicenseInfo(): string`

Retrievs license infos for the actual principal as json-String.

**Returns:** string

**Since:** DOCUMENTS 5.0h HF1


```ts
try {
   var json = context.getLicenseInfo();
   var obj = JSON.parse(json);
    .....
} catch (err) {
   util.out(err)
}
```


### getLocaleValue

`getLocaleValue(value: string, locale?: string): string`

Get the value/label of a String with the format "de:rot;en:red;fr:rouge" in the current or defined portal language.

**Parameters:**

- `value`: `string` — String with the complete value string
- `locale`: `string` — Optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically.

**Returns:** string

**Since:** DOCUMENTS 5.0c HF1


```ts
var title = "de:Rechnung 001; en:Invoice 001"
var deVal = context.getLocaleValue(title, "de");
util.out(deVal);    // deVal = Rechnung 001
var valInCurrentLanguage = context.getLocaleValue(title);
```


### getMails

`getMails(): EmailIterator`

Get an EmailIterator with all emails in DOCUMENTS.

**Returns:** EmailIterator

**Since:** DOCUMENTS 5.0i


```ts
var it = context.getMails();
for (var mail of it)
{
   // do something
}
```


### getPrincipalAttribute

`getPrincipalAttribute(attributeName: string): string`

Get the String value of an attribute of the DOCUMENTS principal.

**Parameters:**

- `attributeName`: `string` — the technical name of the desired attribute

**Returns:** string

**Since:** ELC 3.50f / otrisPORTAL 5.0f

**See:** context.getCurrentUserAttribute context.setPrincipalAttribute


```ts
util.out(context.getPrincipalAttribute("executive.eMail"));
```


### getPrincipalStatus

`getPrincipalStatus(): string`

Get the status of the principal.

**Returns:** string

**Since:** DOCUMENTS 5.0g

**See:** context.setPrincipalStatus


### getProgressBar

`getProgressBar(): number`

Gets the current progress value in % of the progress bar in the Documents-Manager during the PortalScript execution.

**Returns:** number

**Since:** DOCUMENTS 5.0c

**See:** context.setProgressBarText context.setProgressBar


### getQueryParams

`getQueryParams(): DocQueryParams`

Get the actual search parameters within an "OnSearch" or "FillSearchScript" exit.

Note: The return value is null, if the calling script is not running as an "OnSearch" or "FillSearchMask" handler. It can also be null, if the script has called changeScriptUser(). In order to access the search parameters, the script needs to restore the original user context.

**Returns:** DocQueryParams

**Since:** DOCUMENTS 4.0c


```ts
var queryParams = context.getQueryParams();
```


### getRegisterErgName

`getRegisterErgName( fileTypeName: string, registerName: string, locale?: string, ): string`

Get the ergonomic label of a register.

**Parameters:**

- `fileTypeName`: `string` — String value containing the technical name of the desired filetype
- `registerName`: `string` — String value containing the technical name of the desired register
- `locale`: `string` — optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically

**Returns:** string

**Since:** DOCUMENTS 4.0d HF1

**See:** context.getFieldErgName context.getFileTypeErgName


```ts
util.out(context.getRegisterErgName("Standard", "Reg1", "de"));
```


### getScriptOrigin

`getScriptOrigin(scriptName: string): number`

Function to declare where a script comes from.

**Parameters:**

- `scriptName`: `string` — The name of the desired script.

**Returns:** number

**Since:** DOCUMENTS 5.0i HF5


### getServerInstallPath

`getServerInstallPath(): string`

Create a String containing the installation path of the portal server.

**Returns:** string

**Since:** ELC 3.60a / otrisPORTAL 6.0a


```ts
var installDir = context.getServerInstallPath();
util.out(installDir);
```


### getSuperMode

`getSuperMode(): boolean`

Get the "setSuperMode"-flag of the current PortalScript-Session.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e HF2

**See:** context.setSuperMode


### getSystemUser

`getSystemUser(): SystemUser`

Get the current user as a SystemUser object.

**Returns:** SystemUser

**Since:** ELC 3.51b / otrisPORTAL 5.1b

**See:** context.findSystemUser context.findSystemUserByAlias context.getSystemUsers


```ts
var su = context.getSystemUser();
if (su)
   util.out(su.login); // output login name of current user
```


### getSystemUsers

`getSystemUsers( includeLockedUsers?: boolean, includeInvisibleUsers?: boolean, ): SystemUserIterator`

Get a list of users created in the system.

Since: DOCUMENTS 4.0c new optional parameter includeLockedUsers Since: DOCUMENTS 5.0f HF2 new optional parameter includeInvisibleUsers

**Parameters:**

- `includeLockedUsers`: `boolean` — Default: false. optional definition, if locked users also should be returned.
- `includeInvisibleUsers`: `boolean` — Default: false. Optional flag indicating whether the method also should return users for which the option "Display user in DOCUMENTS lists" in the Documents Manager is not checkmarked.

**Returns:** SystemUserIterator

**Since:** ELC 3.50b / otrisPORTAL 5.0b

**See:** context.findSystemUser context.getSystemUser context.findSystemUserByAlias


```ts
var itSU = context.getSystemUsers();
for (var su = itSU.first(); su; su = itSU.next())
{
   util.out(su.login);
}
```


### getTempPathByToken

`getTempPathByToken(accessToken: string, dropToken?: boolean): string`

Returns the temporary server path, that was ordered by the gadget API for the token.

**Parameters:**

- `accessToken`: `string` — String value with the token
- `dropToken`: `boolean` — Default: true. Optional Boolean value that indicates the server to forget the token

**Returns:** string

**Since:** DOCUMENTS 5.0d


### getTimestampsDiff

`getTimestampsDiff( earlierDate: Date, laterDate: Date, unit?: string, useWorkCalendar?: boolean, ): number`

Subtract two Date objects to get their difference.

This function calculates the time difference between two Date objects, for example if you need to know how many days a business trip takes. By default this function takes the work calendar into account if it is configured and enabled for the principal.

**Parameters:**

- `earlierDate`: `Date` — Date object representing the earlier date
- `laterDate`: `Date` — Date object representing the later date
- `unit`: `string` — Default: 'days'. optional String value defining the unit, allowed values are "minutes", "hours" and "days" (default)
- `useWorkCalendar`: `boolean` — Default: true. optional boolean to take office hours into account or not (requires enabled and configured work calendar)

**Returns:** number

**Since:** DOCUMENTS 5.0i HF3


```ts
var start = util.convertStringToDate("01.04.2006 12:30", "dd.mm.yyyy HH:MM");
var end = util.convertStringToDate("05.04.2006 12:30", "dd.mm.yyyy HH:MM");
var duration = context.getTimestampsDiff(start, end) ;
util.out("Difference: " + duration); // should be 4
```


### getTmpFilePath

`getTmpFilePath(): string`

Create a String containing a complete path and filename to a temporary file.

The created file path may be used without any danger of corrupting any important data by accident, because DOCUMENTS assures that there is no such file with the created filename yet.

**Returns:** string

**Since:** ELC 3.50n / otrisPORTAL 5.0n


```ts
var tmpFilePath = context.getTmpFilePath();
util.out(tmpFilePath);
```


### getWorkflowByName

`getWorkflowByName(name: string): Workflow`

Get a Workflow object by its technical name.

The name parameter may be composed of name + "-" + version. Otherwise the function seeks the newest available version of the workflow.

Note: This function requires a full workflow engine license. It does not seek pure distribution lists.

**Parameters:**

- `name`: `string` — A string which contains the technical name of a workflow and optionally a version appendix

**Returns:** Workflow

**Since:** DOCUMENTS 6.0


### getWorkflowsFromFileType

`getWorkflowsFromFileType(fileTypeName: string, onlyReleased?: boolean): String[]`

Retrieve the allowed workflows for a file type.

**Parameters:**

- `fileTypeName`: `string` — String value containing the desired file type name.
- `onlyReleased`: `boolean` — Default: true. Optional flag indicating whether only released workflows should be returned.

**Returns:** String[]

**Since:** DOCUMENTS 5.0i


```ts
var workflows = context.getWorkflowsFromFileType("testFileType");
if (workflows)
{
  for (var wf of workflows)
  {
      util.out(wf);
  }
}
```


### getXMLServer

`getXMLServer(archiveServerName?: string): ArchiveConnection`

Get an ArchiveConnection object.

With this method you can get an ArchiveConnection object. This object offers several methods to use the EAS Interface, EBIS or the EASY ENTERPRISE XML-Server.

Since: archiveServerName: Documents 4.0

**Parameters:**

- `archiveServerName`: `string` — Optional string containing the archive server name; If the archive server is not defined, then the main archive server will be used

**Returns:** ArchiveConnection

**Since:** ELC 3.60d / otrisPORTAL 6.0d

**Deprecated:** since DOCUMENTS 5.0a - Use Context.getArchiveConnection(archiveServerName) instead


### hasPEMModule

`hasPEMModule(moduleConst: number): Boolean`

Function to check if a module is licenced in the pem.

**Parameters:**

- `moduleConst`: `number` — from PEM Module Constants.

**Returns:** Boolean

**Since:** DOCUMENTS 5.0c HF2


```ts
util.out(context.hasPEMModule(context.PEM_MODULE_GADGETS));
```


### reloadCurrentPrincipal

`reloadCurrentPrincipal(pemReload?: boolean): boolean`

Reloads the current principal.

This function invalidates or clears caches (e.g. PortalScriptCache and ScriptEnumCache) in order to reload them. If necessary, you can also use this method to reload the pem-file for the current principal using the parameter pemReload.

**Parameters:**

- `pemReload`: `boolean` — Default: false. Optional boolean indicating whether the pem-file for the current principal to be reloaded.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** context.reloadPrincipal


```ts
if (!context.reloadCurrentPrincipal(true))
   util.out(context.getLastError());
```


### reloadPrincipal

`reloadPrincipal(principalName: string, pemReload?: boolean): boolean`

Reloads the desired principal.

This function invalidates or clears caches (e.g. PortalScriptCache and ScriptEnumCache) in order to reload them. If necessary, you can also use this method to reload the pem-file for the desired principal using the parameter pemReload.

**Parameters:**

- `principalName`: `string` — String containing the name of the principal to be reloaded.
- `pemReload`: `boolean` — Default: false. Optional boolean indicating whether the pem-file for the desired principal to be reloaded.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** context.reloadCurrentPrincipal


```ts
if (!context.reloadPrincipal("peachit", true))
   util.out(context.getLastError());
```


### resetScriptUser

`resetScriptUser(): boolean`

Make the executed script user-less.

**Returns:** boolean

**Since:** DOCUMENTS 6.2.2


### sendTCPStringRequest

`sendTCPStringRequest( server: string, port: number, request: string, responseTimeout?: number, ): string`

Send a String as TCP-Request to a server.

With this method it is possible to send a String via TCP to a server. The return value of the function is the response of the server. Optional you can define a timeout in ms this function waits for the response of a server

Note: The responseTimeout is effective only after a request has successfully been sent. Timeouts for connecting and sending are determined by the underlying OS.

**Parameters:**

- `server`: `string` — String containing the IP address or server host
- `port`: `number` — int containing the port on which the server is listening
- `request`: `string` — String with the request that should be sent to the server
- `responseTimeout`: `number` — Default: 3000. int with the timeout for the response in ms. Default value is 3000ms

**Returns:** string

**Since:** ELC 3.60b / otrisPORTAL 6.0b


```ts
var response = context.sendTCPStringRequest("192.168.1.1", "4010", "Hello World", 5000);
if (!response)
   util.out(context.getLastError());
else
   util.out(response);
```


### setClientLang

`setClientLang(locale: string): string`

Set the abbreviation of the current user's portal language.

If you want to set the portal language different from the current users language, you can use this method. As parameter you have to use the two letter abbreviation as defined in the principal's settings in the Windows DOCUMENTS Manager (e.g. "de" for German).

**Parameters:**

- `locale`: `string` — String containing the two letter abbreviation for the locale

**Returns:** string

**Since:** DOCUMENTS 4.0c

**See:** context.getClientLang


```ts
context.setClientLang("en");
```


### setClientSystemLang

`setClientSystemLang(langIndex: number): boolean`

Set the script's execution context portal language to the desired language.

**Parameters:**

- `langIndex`: `number` — integer value of the index of the desired system language

**Returns:** boolean

**Since:** ELC 3.51g / otrisPORTAL 5.1g

**Deprecated:** since DOCUMENTS 4.0c use setClientLang(String locale) instead


```ts
util.out(context.getClientSystemLang());
var erg = context.setClientSystemLang(0); // first portal language
```


### setFolderPosition

`setFolderPosition(folder: Folder, position: number): boolean`

Place a top level folder a at given position in the global context.

This method can be used to set the position of a top level folder (public, public dynamic or only subfolders folder with no parent) in the global context.

**Parameters:**

- `folder`: `Folder` — Folder object whose position to be set.
- `position`: `number` — new internal position number of folder.

**Returns:** boolean

**Since:** DOCUMENTS 5.0a

**See:** context.getFolderPosition Folder.getPosition Folder.setPosition


```ts
// Create a folder B and place it before a folder A
var folderA = context.getFoldersByName("folderA").first();
var posA = context.getFolderPosition(folderA);
var folderB = context.createFolder("folderB", "public");
if (!context.setFolderPosition(folderB, posA - 1))
   throw context.getLastError();
```


### setGlobalAttribute

`setGlobalAttribute(attributeName: string, value: string): boolean`

Set an attribute of the DOCUMENTS global settings to the desired value.

**Parameters:**

- `attributeName`: `string` — The name of the desired attribute
- `value`: `string` — The value that should be assigned

**Returns:** boolean

**Since:** DOCUMENTS 5.0g

**See:** context.getGlobalAttribute


```ts
var ret = context.setGlobalAttribute("$decreaseSearchArchivesScript", "myDecreaseSearchArchivesScript");
if (!ret)
  throw context.getLastError();
```


### setOrAddCustomProperty

`setOrAddCustomProperty( name: string, type: string, value: string, ): CustomProperty`

Creates or modifies a global custom property according the name and type.

**Parameters:**

- `name`: `string` — String value defining the name
- `type`: `string` — String value defining the type
- `value`: `string` — String value defining the value

**Returns:** CustomProperty

**Since:** DOCUMENTS 5.0

**See:** context.getCustomProperties context.addCustomProperty


```ts
var custProp = context.setOrAddCustomProperty("favorites", "string", "peachit");
if (!custProp)
  util.out(context.getLastError());
```


### setPrincipalAttribute

`setPrincipalAttribute(attributeName: string, value: string): boolean`

Set an attribute of the DOCUMENTS principal to the desired value.

**Parameters:**

- `attributeName`: `string` — the technical name of the desired attribute
- `value`: `string` — the value that should be assigned

**Returns:** boolean

**Since:** ELC 3.51b / otrisPORTAL 5.1b

**See:** context.getCurrentUserAttribute context.getPrincipalAttribute


```ts
context.setPrincipalAttribute("executive.eMail", "test@mail.de");
util.out(context.getPrincipalAttribute("executive.eMail"));
```


### setPrincipalStatus

`setPrincipalStatus(status: string): boolean`

Set the status of the principal.

**Parameters:**

- `status`: `string` — String with the desired value of the status. There are following values available:

inherited
released
registered
blocked
removable

**Returns:** boolean

**Since:** DOCUMENTS 5.0g

**See:** context.getPrincipalStatus


```ts
if (!context.setPrincipalStatus("released"))
  throw context.getLastError();
```


### setProgressBar

`setProgressBar(value: number): void`

Sets the progress (%) of the progress bar in the Documents-Manager during the PortalScript execution.

**Parameters:**

- `value`: `number` — Float with in % of the execution (value >= 0 and value <= 100)

**Returns:** void

**Since:** DOCUMENTS 5.0c

**See:** context.setProgressBarText context.getProgressBar


```ts
context.setProgressBarText("Calculating...");
context.setProgressBar(0.0);  // set progress bar to 0.0%
for (var i = 1; i<100; i++) {
   // do something
   context.setProgressBar(i);
}
```


### setProgressBarText

`setProgressBarText(text: string): void`

Sets the progress bar text in the Documents-Manager during the PortalScript execution.

**Parameters:**

- `text`: `string` — String with the text to displayed in the progress bar

**Returns:** void

**Since:** DOCUMENTS 5.0c

**See:** context.setProgressBar context.getProgressBar


```ts
context.setProgressBarText("Calculating...");
context.setProgressBar(0.0);  // set progress bar to 0.0%
for (var i = 1; i<100; i++) {
   // do something
   context.setProgressBar(i);
}
```


### setSuperMode

`setSuperMode(value: boolean): void`

Set and unset "setSuperMode"-flag for the current PortalScript-Session.

The method gives "superrights" to the session and overrules the DOCUMENTS right management e.g. if you use (G)ACL in a filetype, in supermode a FileResultset / HitResultset in the script will find all files, independed of the access rights of the current user. The supermode will be inhertited to sub-scripts (e.g. implicit running enum scripts), but not to ScriptCalls.

**Parameters:**

- `value`: `boolean` — boolean to set / unset setSuperMode-flag

**Returns:** void

**Since:** DOCUMENTS 5.0e HF2

**See:** context.getSuperMode


```ts
try {
   context.setSuperMode(true);
   // do something with superrights
   // ...... new HitResultset(.....)
} finally {
  context.setSuperMode(false);
}
```


### submitFileChanges

`submitFileChanges(fileTypeName: string, withStatusEntry?: boolean): boolean`

Change the structure of files of a file type.

**Parameters:**

- `fileTypeName`: `string` — String containing the technical name of the file type.
- `withStatusEntry`: `boolean` — Default: true. Optional boolean indicating whether the status entries for the changed files should be suppressed.

**Returns:** boolean

**Since:** DOCUMENTS 5.0g HF2


```ts
try {
   context.submitFileChanges("TestFileType", false);
} catch (err) {
   util.out(err)
}
```


### updateSearchFieldCache

`updateSearchFieldCache(fileTypeName?: string): boolean`

Updates the server sided search field cache for file types.

**Parameters:**

- `fileTypeName`: `string` — Optional string containing the technical name of the file type. If the parameter is missing or empty, this function updates the search field cache for all file types.

**Returns:** boolean

**Since:** DOCUMENTS 5.0g HF2


```ts
try {
   context.updateSearchFieldCache("TestFileType");
} catch (err) {
   util.out(err)
}
```


### writeLogBook

`writeLogBook( actionCode: number, detail1: string, detail2: string, detail3: string, logObject: any, ): boolean`

Logs an executed action to the logbook.

**Parameters:**

- `actionCode`: `number` — The integer code of the executed action to be logged. Range: 0 to n described as follows:

0 : Create file
1 : Start edit file
2 : Cancel edit file
3 : Save file
4 : Archive file
5 : Delete file
6 : Start workflow
7 : Receive file
8 : Forward file
9 : Change filetype
10 : Workflow escalation
11 : Workflow decision
12 : XML-Export
13 : Workflow receive-signal
14 : Workflow finished
15 : Filetype created
16 : Filetype changed
17 : Filetype deleted
18 : Filetype-field created
19 : Filetype-field changed
20 : Filetype-field deleted
21 : Filetype-register created
22 : Filetype-register changed
23 : Filetype-register deleted
24 : User created
25 : User changed
26 : User deleted
27 : Access profile created
28 : Access profile changed
29 : Access profile deleted
30 : Added user to access profile
31 : Removed user from access profile
32 : Delete file to trash
33 : Recovery from trash
34 : Delete archive file
35 : Maintenance operation performed
36 : Life cycle action performed
255: Custom action
- `detail1`: `string` — Optional String with length <= 255 containing additional information of the action. if the string length > 255, only the first 255 characters will be displayed.
- `detail2`: `string` — Optional String with length <= 60 containing additional information of the action. if the string length > 60, only the first 60 characters will be displayed.
- `detail3`: `string` — Optional String with length <= 60 containing additional information of the action. if the string length > 60, only the first 60 characters will be displayed.
- `logObject`: `any` — Optional object to be logged. Currently only DocFile object is allowed.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** context.findLogBookEntries


```ts
context.writeLogBook(32, "info1", "info2", "info3");
```


## Script Origin Constants


### ReadonlySCRIPT_FROM_DB

`SCRIPT_FROM_DB: number`


### ReadonlySCRIPT_FROM_LIBS

`SCRIPT_FROM_LIBS: number`


### ReadonlySCRIPT_UNKNOWN

`SCRIPT_UNKNOWN: number`


## PEM Module Constants


### ReadonlyPEM_MODULE_BUSINESS_UNITS

`PEM_MODULE_BUSINESS_UNITS: number`


### ReadonlyPEM_MODULE_CGC

`PEM_MODULE_CGC: number`


### ReadonlyPEM_MODULE_CGC_ENT

`PEM_MODULE_CGC_ENT: number`


### ReadonlyPEM_MODULE_CGC_ENT_PLUS

`PEM_MODULE_CGC_ENT_PLUS: number`


### ReadonlyPEM_MODULE_CONTRACT

`PEM_MODULE_CONTRACT: number`


### ReadonlyPEM_MODULE_CONTRACT_SAP

`PEM_MODULE_CONTRACT_SAP: number`


### ReadonlyPEM_MODULE_CONTROLLING

`PEM_MODULE_CONTROLLING: number`


### ReadonlyPEM_MODULE_CREATOR

`PEM_MODULE_CREATOR: number`


### ReadonlyPEM_MODULE_DOC_TREE

`PEM_MODULE_DOC_TREE: number`


### ReadonlyPEM_MODULE_DRIVECONNECT

`PEM_MODULE_DRIVECONNECT: number`


### ReadonlyPEM_MODULE_DROP

`PEM_MODULE_DROP: number`


### ReadonlyPEM_MODULE_EASYHR

`PEM_MODULE_EASYHR: number`


### ReadonlyPEM_MODULE_FP_HENR

`PEM_MODULE_FP_HENR: number`


### ReadonlyPEM_MODULE_GADGETS

`PEM_MODULE_GADGETS: number`


### ReadonlyPEM_MODULE_IFRS16

`PEM_MODULE_IFRS16: number`


### ReadonlyPEM_MODULE_IMS

`PEM_MODULE_IMS: number`


### ReadonlyPEM_MODULE_INBOX

`PEM_MODULE_INBOX: number`


### ReadonlyPEM_MODULE_INVOICE

`PEM_MODULE_INVOICE: number`


### ReadonlyPEM_MODULE_IP_MANAGEMENT

`PEM_MODULE_IP_MANAGEMENT: number`


### ReadonlyPEM_MODULE_LDAP

`PEM_MODULE_LDAP: number`


### ReadonlyPEM_MODULE_MATTER

`PEM_MODULE_MATTER: number`


### ReadonlyPEM_MODULE_MOBILE

`PEM_MODULE_MOBILE: number`


### ReadonlyPEM_MODULE_OUTLOOK_SYNC

`PEM_MODULE_OUTLOOK_SYNC: number`


### ReadonlyPEM_MODULE_OUTLOOK_WEB

`PEM_MODULE_OUTLOOK_WEB: number`


### ReadonlyPEM_MODULE_REPORTING

`PEM_MODULE_REPORTING: number`


### ReadonlyPEM_MODULE_RISK_MANAGEMENT

`PEM_MODULE_RISK_MANAGEMENT: number`


### ReadonlyPEM_MODULE_SIGN

`PEM_MODULE_SIGN: number`


### ReadonlyPEM_MODULE_WORDML

`PEM_MODULE_WORDML: number`


## Enumeration Source Constants


### ReadonlyFILETYPE_FIELD

`FILETYPE_FIELD: number`


### ReadonlySCRIPT_PARAM

`SCRIPT_PARAM: number`


### ReadonlySOURCE_UNKNOWN

`SOURCE_UNKNOWN: number`