---
title: "SystemUser | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/SystemUser.html"
---

# Interface SystemUser

**The SystemUser class has been added to the DOCUMENTS PortalScripting API to gain full access to the DOCUMENTS users by scripting means.**

There are several functions implemented in different classes to retrieve a SystemUser object.


#### Since

ELC 3.50b / otrisPORTAL 5.0b


`interface SystemUser { addCustomProperty( name: string, type: string, value: string, ): CustomProperty; addFileTypeAgent( fileTypes: string | string[], loginNames: string[], ): boolean; addFileTypeAgentScript( fileTypes: string | string[], scriptName: string, ): boolean; addToAccessProfile(ap: AccessProfile): boolean; ANNOTATIONS: number; ARCHIVE: number; CHANGE_TYPE: number; CHANGE_WORKFLOW: number; checkPassword(passwd: string): boolean; COPY: number; CREATE: number; CREATE_WORKFLOW: number; delegateFilesOfAbsentUser(): boolean; delegateFilesToUser(login: string): number; email: string; firstName: string; generateAPIKey( label: string, deviceInfo: string, ): { createdAt: string; deviceInfo: string; id: string; label: string; token: string; username: string; }; getAbsentFrom(): Date; getAbsentMessage(): string; getAbsentUntil(): Date; getAccess(docFile: DocFile): number; getAccessProfiles(): AccessProfileIterator; getAgents(): SystemUserIterator; getAllFolders(): FolderIterator; getAPIKeyLevel(): string; getAPIKeys(): { createdAt: string; deviceInfo: string; id: string; label: string; username: string; }[]; getAttribute(attribute: string): string; getBackDelegatedFiles(removeFromAgentInbox: boolean): boolean; getCustomProperties( nameFilter?: string, typeFilter?: string, ): CustomPropertyIterator; getIndividualFolders(): FolderIterator; getLastError(shortMessage?: boolean): string; getOID(oidLow?: boolean): string; getPrivateFolder(folderType: string): Folder; getSendAbsenceMail(): boolean; getStatus(): string; getSuperior(): SystemUser; getUserdefinedInboxFolders(): FolderIterator; hasAccessProfile(profileName: string): boolean; invalidateAccessProfileCache(): boolean; invalidateFolderCache(): boolean; isAbsent(): boolean; isSuperUser(): boolean; lastName: string; listAgentFileTypes(): string[]; listFileTypeAgents(fileType: string | string[]): string[]; login: string; MAIL: number; MOVE: number; notifyFileReturnedFromSending(notifying?: boolean): boolean; notifyNewFileInInbox(notifying?: boolean): boolean; PDF: number; propCache: PropertyCache; READ: number; REMOVE: number; removeAPIKey(id: string): void; removeFileTypeAgent(fileTypes: string | string[]): boolean; removeFromAccessProfile(ap: AccessProfile): boolean; resetSuperior(): boolean; setAbsent( absent: boolean, filesDueAbsenceToInfo?: boolean, agents?: string[], removeFromAgentInbox?: boolean, from?: Date, until?: Date, ): boolean; setAbsentMail(sendMail: boolean, message?: string): boolean; setAccessProfiles(...apNames1: string[]): boolean; setAccessProfiles(apNames1: string[]): boolean; setAttribute(attribute: string, value: string): boolean; setEasywareAuthentication(value: boolean): boolean; setOrAddCustomProperty( name: string, type: string, value: string, ): CustomProperty; setPassword(newPwd: string, checkRestriction?: boolean): boolean; setStatus(status: string): boolean; setSuperior(sup: SystemUser): boolean; setSuperUser(value: boolean): void; START_WORKFLOW: number; VERSION: number; WRITE: number; }`


## Index


### Properties

- ANNOTATIONS
- ARCHIVE
- CHANGE_TYPE
- CHANGE_WORKFLOW
- COPY
- CREATE
- CREATE_WORKFLOW
- email
- firstName
- lastName
- login
- MAIL
- MOVE
- PDF
- propCache
- READ
- REMOVE
- START_WORKFLOW
- VERSION
- WRITE


### Methods

- addCustomProperty
- addFileTypeAgent
- addFileTypeAgentScript
- addToAccessProfile
- checkPassword
- delegateFilesOfAbsentUser
- delegateFilesToUser
- generateAPIKey
- getAbsentFrom
- getAbsentMessage
- getAbsentUntil
- getAccess
- getAccessProfiles
- getAgents
- getAllFolders
- getAPIKeyLevel
- getAPIKeys
- getAttribute
- getBackDelegatedFiles
- getCustomProperties
- getIndividualFolders
- getLastError
- getOID
- getPrivateFolder
- getSendAbsenceMail
- getStatus
- getSuperior
- getUserdefinedInboxFolders
- hasAccessProfile
- invalidateAccessProfileCache
- invalidateFolderCache
- isAbsent
- isSuperUser
- listAgentFileTypes
- listFileTypeAgents
- notifyFileReturnedFromSending
- notifyNewFileInInbox
- removeAPIKey
- removeFileTypeAgent
- removeFromAccessProfile
- resetSuperior
- setAbsent
- setAbsentMail
- setAccessProfiles
- setAttribute
- setEasywareAuthentication
- setOrAddCustomProperty
- setPassword
- setStatus
- setSuperior
- setSuperUser


## Properties


### ANNOTATIONS

`ANNOTATIONS: number`

Annotations right flag in the access mask.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### ARCHIVE

`ARCHIVE: number`

Archive right flag in the access mask.

The bit that specifies the right to archive files.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### CHANGE_TYPE

`CHANGE_TYPE: number`

Change filetype right flag in the access mask.

The bit that specifies the right to change the filetype of a file.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### CHANGE_WORKFLOW

`CHANGE_WORKFLOW: number`

Change workflow right flag in the access mask.

The bit that specifies the right to change a workflow assigned to a file.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### COPY

`COPY: number`

Copy right flag in the access mask.

The bit that specifies the right to copy files to a personal or public folder.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### CREATE

`CREATE: number`

Create right flag in the access mask.

The bit that specifies the right to create new files.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### CREATE_WORKFLOW

`CREATE_WORKFLOW: number`

Create workflow right flag in the access mask.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### email

`email: string`

String value containing the email address of the SystemUser.

**Since:** DOCUMENTS 5.0a


### firstName

`firstName: string`

String value containing the first name of the SystemUser.

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### lastName

`lastName: string`

String value containing the last name of the SystemUser.

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### login

`login: string`

String value containing the unique login name of the SystemUser.

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### MAIL

`MAIL: number`

Mail right flag in the access mask.

The bit that specifies the right to send files via an e-mail system.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### MOVE

`MOVE: number`

Move right flag in the access mask.

The bit that specifies the right to move files to a personal or public folder.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### PDF

`PDF: number`

Create PDF right flag in the access mask.

The bit that specifies the right to create a PDF of a file.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### propCache

`propCache: PropertyCache`

Access to the property cache of the SystemUser.

**Since:** DOCUMENTS 5.0

**See:** PropertyCache AccessProfile.propCache


```ts
var user = context.getSystemUser();
if (!user.propCache.hasProperty("Contacts"))
{
   util.out("Creating cache");
   user.propCache.Contacts = ["Peter", "Paul", "Marry"];
}
```


### READ

`READ: number`

Read right flag in the access mask.

The bit that specifies the right to see files.

Note: the access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### REMOVE

`REMOVE: number`

Remove right flag in the access mask.

The bit that specifies the right to delete files.

Note: the access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### START_WORKFLOW

`START_WORKFLOW: number`

Start workflow flag in the access mask.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### VERSION

`VERSION: number`

Versioning right flag in the access mask.

Note: The access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


### WRITE

`WRITE: number`

Write right flag in the access mask.

The bit that specifies the right for changing index fields or documents in files.

Note: the access mask is returned by SystemUser.getAccess(DocFile)

**See:** SystemUser.getAccess


## Methods


### addCustomProperty

`addCustomProperty(name: string, type: string, value: string): CustomProperty`

Creates a new CustomProperty for the user.

**Parameters:**

- `name`: `string` — String value defining the name
- `type`: `string` — String value defining the type
- `value`: `string` — String value defining the value

**Returns:** CustomProperty

**Since:** DOCUMENTS 4.0a

**See:** SystemUser.setOrAddCustomProperty SystemUser.getCustomProperties


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
var custProp = currentUser.addCustomProperty("favorites", "string", "peachit");
if (!custProp)
  util.out(currentUser.getLastError());
```


### addFileTypeAgent

`addFileTypeAgent(fileTypes: string | string[], loginNames: string[]): boolean`

Create file type agents for the user.

**Parameters:**

- `fileTypes`: `string` — The desired file types may be passed as follows:

String containing the technical name of the desired file type;
Array of strings containing the technical names of the desired file types;
String constant "*" indicating all file types.
- `loginNames`: `string` — Array of strings containing the login names of the agents.

**Returns:** boolean

**Since:** DOCUMENTS 5.0a


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
var loginNames = new Array();
loginNames.push("user1");
loginNames.push("user2");
if (!currentUser.addFileTypeAgent("testFileType", loginNames))
   util.out("Error: " + currentUser.getLastError());
else
   util.out("OK.");
```


### addFileTypeAgentScript

`addFileTypeAgentScript( fileTypes: string | string[], scriptName: string, ): boolean`

Create file type agents for the user, whereby the agents are specified by the desired script.

**Parameters:**

- `fileTypes`: `string` — The desired file types may be passed as follows:

String containing the technical name of the desired file type;
Array of strings containing the technical names of the desired file types;
String constant "*" indicating all file types.
- `scriptName`: `string` — String containing the name of the script specifying the file type agents.

**Returns:** boolean

**Since:** DOCUMENTS 5.0a


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
if (!currentUser.addFileTypeAgentScript("*", "testScript"))
   util.out("Error: " + currentUser.getLastError());
else
   util.out("OK.");
```


### addToAccessProfile

`addToAccessProfile(ap: AccessProfile): boolean`

Make the SystemUser a member of the desired AccessProfile.

Note: If the user is already logged in, it is necessary to invalidate the cache of the user s. SystemUser.invalidateAccessProfileCache()

Since: ELC 3.50b / otrisPORTAL 5.0b for PartnerAccounts Since: DOCUMENTS 4.0b HF1 for Fellows

**Parameters:**

- `ap`: `AccessProfile` — AccessProfile the user should be a member of

**Returns:** boolean

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### checkPassword

`checkPassword(passwd: string): boolean`

Evaluate if the password is correct.

**Parameters:**

- `passwd`: `string` — String value containing the plain password

**Returns:** boolean

**Since:** ELC 3.60d / otrisPORTAL 6.0d


### delegateFilesOfAbsentUser

`delegateFilesOfAbsentUser(): boolean`

Move the files from the inbox of an absent user to his agent.

If a Systemuser is set to absent, then all new files are redirected to his agent. The currently existing files (that came into the inbox before the was absent) can be moved to the agent with this method. If the user is not absent this method returns an error.

**Returns:** boolean

**Since:** ELC 3.60g / otrisPORTAL 6.0g

**See:** setAbsent setAbsentMail getAgents


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
if (!currentUser.delegateFilesOfAbsentUser())
   util.out("Error: " + currentUser.getLastError());
else
   util.out("OK.");
```


### delegateFilesToUser

`delegateFilesToUser(login: string): number`

Move the files from the inbox of a user to another user.

**Parameters:**

- `login`: `string` — String containing the login name of the user the files moved to.

**Returns:** number

**Since:** DOCUMENTS 6.0

**See:** delegateFilesOfAbsentUser


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
var count = currentUser.delegateFilesToUser("anotherUser");
if ( count == -1)
   util.out("Error: " + currentUser.getLastError());
else
   util.out("Count of delegated files: " + count);
```


### generateAPIKey

`generateAPIKey( label: string, deviceInfo: string, ): { createdAt: string; deviceInfo: string; id: string; label: string; token: string; username: string; }`

Creates an API key.

**Parameters:**

- `label`: `string` — An arbitrary name for the client application.
- `deviceInfo`: `string` — An arbitrary description for the client device.

**Returns:** {
    createdAt: string;
    deviceInfo: string;
    id: string;
    label: string;
    token: string;
    username: string;
}


### getAbsentFrom

`getAbsentFrom(): Date`

Retrieve the configured start date of absence.

**Returns:** Date

**Since:** DOCUMENTS 5.0g

**See:** setAbsent


### getAbsentMessage

`getAbsentMessage(): string`

Get the absence message.

**Returns:** string

**Since:** DOCUMENTS 5.0g

**See:** setAbsentMail setAbsent


### getAbsentUntil

`getAbsentUntil(): Date`

Retrieve the configured end date of absence.

**Returns:** Date

**Since:** DOCUMENTS 5.0g

**See:** setAbsent


### getAccess

`getAccess(docFile: DocFile): number`

Retrieve an access mask whose bits correspond to the user's access rights supported by the given DocFile or filetype.

Note: There is a constant for any right flag in the access mask (e.g. SystemUser.READ specifies the read right).

**Parameters:**

- `docFile`: `DocFile` — DocFile object to which the access rights should be retrieved.

**Returns:** number

**Since:** DOCUMENTS 5.0a HF2

**See:** e.g. SystemUser.READ


```ts
var docFile = context.file;
var currentUser = context.getSystemUser();
if (!currentUser)
    throw "currentUser is NULL";
var accessMask = currentUser.getAccess(docFile);
if(SystemUser.READ & accessMask)
    util.out("The user " + currentUser.login + " has read access!");
```


### getAccessProfiles

`getAccessProfiles(): AccessProfileIterator`

Retrieve an AccessProfileIterator representing a list of all AccessProfiles the user is a member of.

**Returns:** AccessProfileIterator

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### getAgents

`getAgents(): SystemUserIterator`

Get a SystemUserIterator with the agents of the user.

This method returns a SystemUserIterator with the agents of the user, if the user is absent.

**Returns:** SystemUserIterator

**Since:** ELC 3.60g / otrisPORTAL 6.0g

**See:** setAbsent setAbsentMail delegateFilesOfAbsentUser


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
var itSU = currentUser.getAgents();
for (var su = itSU.first(); su; su = itSU.next())
{
   util.out(su.login);
}
```


### getAllFolders

`getAllFolders(): FolderIterator`

Retrieve a list of private and public Folders of the Systemuser.

**Returns:** FolderIterator

**Since:** DOCUMENTS 5.0c

**See:** SystemUser.getAllFolders


```ts
var currentUser = context.getSystemUser();
if (!currentUser)
  throw "currentUser is null";
var folderIter = currentUser.getAllFolders();
```


### getAPIKeyLevel

`getAPIKeyLevel(): string`

Returns the value of the property ApiKeyAuthentication.

**Returns:** string


### getAPIKeys

`getAPIKeys(): { createdAt: string; deviceInfo: string; id: string; label: string; username: string; }[]`

Returns all API keys as array.

**Returns:** {
    createdAt: string;
    deviceInfo: string;
    id: string;
    label: string;
    username: string;
}[]


### getAttribute

`getAttribute(attribute: string): string`

Get the String value of an attribute of the SystemUser.

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute

**Returns:** string

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### getBackDelegatedFiles

`getBackDelegatedFiles(removeFromAgentInbox: boolean): boolean`

Get back the delegated files.

If the user is not present this method returns an error.

**Parameters:**

- `removeFromAgentInbox`: `boolean` — Optional boolean indicating whether the files are removed from agent inbox after getting back by the user. If this parameter is not specified, the value from the user settings in the absent dialog on the web is used.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d

**See:** setAbsent delegateFilesOfAbsentUser


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
if (!currentUser.getBackDelegatedFiles(true))
   util.out("Error: " + currentUser.getLastError());
else
   util.out("OK.");
```


### getCustomProperties

`getCustomProperties( nameFilter?: string, typeFilter?: string, ): CustomPropertyIterator`

Get a CustomPropertyIterator with all CustomProperty of the user.

This method returns a CustomPropertyIterator with the CustomProperty of the user.

**Parameters:**

- `nameFilter`: `string` — String value defining an optional filter depending on the name
- `typeFilter`: `string` — String value defining an optional filter depending on the type

**Returns:** CustomPropertyIterator

**Since:** DOCUMENTS 4.0a

**See:** context.findCustomProperties SystemUser.setOrAddCustomProperty SystemUser.addCustomProperty


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
var itProp = currentUser.getCustomProperties();
for (var prop = itProp.first(); prop; prop = itProp.next())
{
   util.out(prop.name + ": " + prop.value);
}
```


### getIndividualFolders

`getIndividualFolders(): FolderIterator`

Retrieve a list of individual Folders of the Systemuser.

**Returns:** FolderIterator

**Since:** DOCUMENTS 4.0d

**See:** SystemUser.getPrivateFolder


```ts
var currentUser = context.getSystemUser();
if (!currentUser)
  throw "currentUser is null";
var folderIter = currentUser.getIndividualFolders();
```


### getLastError

`getLastError(shortMessage?: boolean): string`

Function to get the description of the last error that occurred.

Since: DOCUMENTS 5.0g (new parameter shortMessage)

**Parameters:**

- `shortMessage`: `boolean` — optional Boolean; removes "Error in function: class.method(): " from the message.

Default: false

**Returns:** string

**Since:** ELC 3.50b / otrisPORTAL 5.0b

**See:** DocFile.getLastError


### getOID

`getOID(oidLow?: boolean): string`

Returns the object-id.

Since: DOCUMENTS 5.0 (new parameter oidLow)

**Parameters:**

- `oidLow`: `boolean` — Optional flag: If true only the id of the Systemuser object (m_oid) will be returned. If false the id of the Systemuser object will be returned together with the id of the corresponding class in the form class-id:m_oid.

Default: false

**Returns:** string

**Since:** ELC 3.60c / otrisPORTAL 6.0c


### getPrivateFolder

`getPrivateFolder(folderType: string): Folder`

Try to retrieve a particular private Folder of the Systemuser.

In addition to the public folders you may define in DOCUMENTS, each DOCUMENTS user has a set of private folders. You might need to access a particular private folder to access its contents, for example.

**Parameters:**

- `folderType`: `string` — String value defining the kind of private folder you want to access. You may choose between

"individual" individual folder

Note: This function returns only the first individual folder on the top level. Using SystemUser.getIndividualFolders() to retrieve all individual folders.

"favorites" favorites folder

"inbox" the user's inbox

"sent" the user's sent folder

"sendingfinished" user's folder containing files which finished their workflow

"inwork" folder containing the files the SystemUser created himself

"resubmission" folder containing files with a resubmission defined for the SystemUser

"trash" folder containing files the user has deleted

"tasks" folder containing all files the user has a task to perform to

"lastused" folder containing the files the SystemUser accessed latest, sorted in descending chronological order

"introuble" folder containing files which ran into some workflow error. This folder is only available for editors and only if it has been added manually by the administrator.

**Returns:** Folder

**Since:** ELC 3.51b / otrisPORTAL 5.1b

**See:** SystemUser.getIndividualFolders


### getSendAbsenceMail

`getSendAbsenceMail(): boolean`

Gather information whether an absence mail will be sent.

If the Systemuser is absent and get a file in the inbox, an absence mail to the sender of this file can be send.

**Returns:** boolean

**Since:** DOCUMENTS 5.0g

**See:** setAbsentMail setAbsent


### getStatus

`getStatus(): string`

Get the status of the SystemUser.

**Returns:** string

**Since:** DOCUMENTS 5.0g

**See:** SystemUser.setStatus


### getSuperior

`getSuperior(): SystemUser`

Get the SystemUser object representing the superior of the user.

**Returns:** SystemUser

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### getUserdefinedInboxFolders

`getUserdefinedInboxFolders(): FolderIterator`

Retrieve a list of userdefined inbox Folders of the Systemuser.

**Returns:** FolderIterator

**Since:** DOCUMENTS 4.0d

**See:** SystemUser.getPrivateFolder


```ts
var currentUser = context.getSystemUser();
if (!currentUser)
  throw "currentUser is null";
var folderIter = currentUser.getUserdefinedInboxFolders();
```


### hasAccessProfile

`hasAccessProfile(profileName: string): boolean`

Retrieve information whether the SystemUser is a member of a particular AccessProfile which is identified by its technical name.

**Parameters:**

- `profileName`: `string` — String value containing the technical name of an AccessProfile

**Returns:** boolean

**Since:** ELC 3.50e / otrisPORTAL 5.0e


### invalidateAccessProfileCache

`invalidateAccessProfileCache(): boolean`

Invalidates the server sided cache of the access profiles for the SystemUser.

**Returns:** boolean

**Since:** DOCUMENTS 4.0 (HF1)


### invalidateFolderCache

`invalidateFolderCache(): boolean`

Invalidates the server sided cache of the folders for the SystemUser.

**Returns:** boolean

**Since:** DOCUMENTS 5.0g (HF2)


### isAbsent

`isAbsent(): boolean`

Gather information whether the current user is absent.

**Returns:** boolean

**Since:** DOCUMENTS 5.0g

**See:** setAbsent


### isSuperUser

`isSuperUser(): boolean`

Returns, if the "Superuser"-flag is actually set at the SystemUser.

**Returns:** boolean

**Since:** DOCUMENTS 5.0b HF2

**See:** SystemUser.setSuperUser

**Deprecated:** since DOCUMENTS 5.0e HF2 - Use Context.setSuperMode(boolean value) / Context.getSuperMode() instead


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
util.out(currentUser.isSuperUser());
```


### listAgentFileTypes

`listAgentFileTypes(): string[]`

Retrieve a list of file types for that an agent exists.

**Returns:** string[]

**Since:** DOCUMENTS 5.0a


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
var fileTypes = currentUser.listAgentFileTypes();
if (fileTypes)
{
   for (var i=0; i < fileTypes.length; i++)
   {
      util.out(fileTypes[i]);
    }
}
else
   util.out("Error: " + currentUser.getLastError());
```


### listFileTypeAgents

`listFileTypeAgents(fileType: string | string[]): string[]`

Retrieve a list of all agents for the desired file type of the user.

**Parameters:**

- `fileType`: `string` — String containing the technical name of the file type.

**Returns:** string[]

**Since:** DOCUMENTS 5.0a


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
var loginNames = currentUser.listFileTypeAgents("testFileType");
if (loginNames)
{
   for (var i=0; i < loginNames.length; i++)
   {
      util.out(loginNames[i]);
    }
}
else
   util.out("Error: " + currentUser.getLastError());
```


### notifyFileReturnedFromSending

`notifyFileReturnedFromSending(notifying?: boolean): boolean`

Define whether to notify the user by e-mail of files returned from sending.

**Parameters:**

- `notifying`: `boolean` — boolean indicating whether files returned from sending are to be notified to the user.

Default: true

**Returns:** boolean

**Since:** DOCUMENTS 5.0a


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
if (!currentUser.notifyFileReturnedFromSending(true))
   util.out("Error: " + currentUser.getLastError());
else
   util.out("OK.");
```


### notifyNewFileInInbox

`notifyNewFileInInbox(notifying?: boolean): boolean`

Define whether to notify the user by e-mail of new files in inbox.

**Parameters:**

- `notifying`: `boolean` — boolean indicating whether new files in inbox are to be notified to the user.

Default: true

**Returns:** boolean

**Since:** DOCUMENTS 5.0a


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
if (!currentUser.notifyNewFileInInbox(true))
   util.out("Error: " + currentUser.getLastError());
else
   util.out("OK.");
```


### removeAPIKey

`removeAPIKey(id: string): void`

removes the API-Key with the given id

**Parameters:**

- `id`: `string` — The id of the API-Key that should be removed

**Returns:** void


### removeFileTypeAgent

`removeFileTypeAgent(fileTypes: string | string[]): boolean`

Remove file type agents from the user.

**Parameters:**

- `fileTypes`: `string` — The desired file types may be passed as follows:

String containing the technical name of the desired file type;
Array of strings containing the technical names of the desired file types;
String constant "*" indicating all file types.

**Returns:** boolean

**Since:** DOCUMENTS 5.0a


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
var fileTypes = new Array();
fileTypes.push("Filetype1");
fileTypes.push("Filetype2");
if (!currentUser.removeFileTypeAgent(fileTypes))
   util.out("Error: " + currentUser.getLastError());
else
   util.out("OK.");
```


### removeFromAccessProfile

`removeFromAccessProfile(ap: AccessProfile): boolean`

Clear the SystemUser's membership in the given AccessProfile.

Note: If the user is already logged in, it is necessary to invalidate the cache of the user s. SystemUser.invalidateAccessProfileCache()

Since: ELC 3.50b / otrisPORTAL 5.0b for PartnerAccounts Since: DOCUMENTS 4.0b HF1 for Fellows

**Parameters:**

- `ap`: `AccessProfile`

**Returns:** boolean

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### resetSuperior

`resetSuperior(): boolean`

Clear the user's relation to a superior.

**Returns:** boolean

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### setAbsent

`setAbsent( absent: boolean, filesDueAbsenceToInfo?: boolean, agents?: string[], removeFromAgentInbox?: boolean, from?: Date, until?: Date, ): boolean`

Set a Systemuser absent or present.

If a Systemuser is on holiday with this function it is possible to set the user absent. After his return you can set him present. You can also define one or more agents for the absent user. The agent will get new files for the absent user in substitution. With the agent list you set the agents for the user (you overwrite the existing agents!). With an empty agent list you remove all agents.

Since: DOCUMENTS 4.0d (Option: removeFromAgentInbox) Since: DOCUMENTS 5.0a (Option: from and until)

**Parameters:**

- `absent`: `boolean` — boolean true, if the user should be set absent, false, if the user is present
- `filesDueAbsenceToInfo`: `boolean` — boolean set to true, if the user should get the files due absence to info in his inbox

Default: true
- `agents`: `string` — Array with the login-names of the agents

Default: []
- `removeFromAgentInbox`: `boolean` — Optional boolean indicating whether the files are removed from agent inbox after getting back by the user. If this parameter is not specified, the value from the user settings in the absent dialog on the web is used.

Default: false
- `from`: `Date` — Optional Date object specifying when the absence begins.
- `until`: `Date` — Optional Date object specifying when the absence ends.

**Returns:** boolean

**Since:** ELC 3.60g / otrisPORTAL 6.0g

**See:** setAbsentMail delegateFilesOfAbsentUser getBackDelegatedFiles getAgents


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
// set user absent
var agents = new Array();
agents.push("oppen");
agents.push("buch");
var from = new Date();
var until = context.addTimeInterval(from, 3, "days", false);
if (!currentUser.setAbsent(true, false, agents, true, from, until))
   util.out("Error: " + currentUser.getLastError());
else
   util.out("OK.");
// set user present
if (!currentUser.setAbsent(false))
   util.out("Error: " + currentUser.getLastError());
else
   util.out("OK.");
```


### setAbsentMail

`setAbsentMail(sendMail: boolean, message?: string): boolean`

Define if an absence mail for the absent user will be sent to the sender of the file.

If a Systemuser is absent and get a file in the inbox, an absence mail to the sender of this file can be send.

**Parameters:**

- `sendMail`: `boolean` — boolean true, if an absent mail should be sent, otherwise false
- `message`: `string` — String with an additional e-mail message from the absent user

**Returns:** boolean

**Since:** ELC 3.60g / otrisPORTAL 6.0g

**See:** setAbsent delegateFilesOfAbsentUser getAgents


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
if (!currentUser.setAbsentMail(true, "I will be back on 12/31 2009"))
   util.out("Error: " + currentUser.getLastError());
else
   util.out("OK.");
```


### setAccessProfiles

`setAccessProfiles(...apNames1: string[]): boolean`

Set the AccessProfiles for an user.

All existing AccessProfiles will be removed and the AccessProfiles from the parameters will be set.

**Parameters:**

- `apNames1`: `string` — String or Array with the names of the AccessProfiles

**Returns:** boolean

**Since:** DOCUMENTS 5.0c HF2


```ts
var val1 = ["AP1", "AP2"];
var val2 = "AP3\r\nAP4";
var user = context.getSystemUser();
if (!user.setAccessProfiles(val1, val2))
   throw user.getLastError();
```


### setAttribute

`setAttribute(attribute: string, value: string): boolean`

Set the String value of an attribute of the SystemUser to the desired value.

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute
- `value`: `string` — String containing the desired value of the attribute

**Returns:** boolean

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### setEasywareAuthentication

`setEasywareAuthentication(value: boolean): boolean`

Turn EASYWARE Authentication on or off.

**Parameters:**

- `value`: `boolean` — boolean true to turn authentication on false to turn it off.

**Returns:** boolean

**Since:** DOCUMENTS 5.0c HF2


### setOrAddCustomProperty

`setOrAddCustomProperty( name: string, type: string, value: string, ): CustomProperty`

Creates a new CustomProperty or modifies a CustomProperty according the name and type for the user.

This method creates or modifies a unique CustomProperty for the user. The combination of the name and the type make the CustomProperty unique for the user.

**Parameters:**

- `name`: `string` — String value defining the name
- `type`: `string` — String value defining the type
- `value`: `string` — String value defining the value

**Returns:** CustomProperty

**Since:** DOCUMENTS 4.0a

**See:** SystemUser.getCustomProperties SystemUser.addCustomProperty


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
var custProp = currentUser.setOrAddCustomProperty("superior", "string", "oppen");
if (!custProp)
  util.out(currentUser.getLastError());
```


### setPassword

`setPassword(newPwd: string, checkRestriction?: boolean): boolean`

Set the password of the user represented by the SystemUser object to the desired new value.

**Parameters:**

- `newPwd`: `string` — String containing the plaintext new password
- `checkRestriction`: `boolean` — boolean if true, check if password is strong (see property StrongPasswords)

Default: false

**Returns:** boolean

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### setStatus

`setStatus(status: string): boolean`

Set the status of the SystemUser.

**Parameters:**

- `status`: `string` — String with the desired value of the status. There are following values available:

inherited
released
registered
blocked
removable

**Returns:** boolean

**Since:** DOCUMENTS 5.0g

**See:** SystemUser.getStatus


```ts
var currUser = context.getSystemUser();
if (!currUser.setStatus("released"))
  throw currUser.getLastError();
```


### setSuperior

`setSuperior(sup: SystemUser): boolean`

Set the SystemUser object representing the superior of the user to the desired object.

**Parameters:**

- `sup`: `SystemUser` — Systemuser object representing the new superior of the user

**Returns:** boolean

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### setSuperUser

`setSuperUser(value: boolean): void`

Set and unset "Superuser"-flag at the SystemUser.

The method gives "superrights" to the user and overrules the DOCUMENTS right management. e.g. if you use (G)ACL in a filetype, the Superuser will find all files, independed from the content of the ACL field...

**Parameters:**

- `value`: `boolean` — boolean to set / unset superuser-flag

**Returns:** void

**Since:** DOCUMENTS 4.0a HF2

**Deprecated:** since DOCUMENTS 5.0e HF2 - Use Context.setSuperMode(boolean value) instead


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
currentUser.setSuperUser(true);
// do something with super rights
currentUser.setSuperUser(false);  // Important: unset the rights!
```