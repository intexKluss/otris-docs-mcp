---
title: "UserAction | Portalscript API"
source: "https://otris.software/documents/api/portalscript/classes/UserAction.html"
---

# Class UserAction

The UserAction class represents the user-defined action of DOCUMENTS.


## Index


### Properties

- label
- name
- scope
- type
- widget


### Methods

- addToFolder
- getAttribute
- getLastError
- getOID
- getPosition
- remove
- setAttribute
- setContext
- setCreateDefaultWorkflow
- setFileTypeForNewFile
- setPortalScript
- setPosition


### Constructors

- constructor


## Properties


### label

`label: string`

The entire label defined for the UserAction object.

**Since:** DOCUMENTS 4.0d


### name

`name: string`

The technical name of the UserAction object.

**Since:** DOCUMENTS 4.0d


### scope

`scope: string`

The scope of the UserAction object.

**Since:** DOCUMENTS 4.0d


### type

`type: string`

The type of the UserAction object.

**Since:** DOCUMENTS 4.0d


### widget

`widget: string`

The widget identifier of the UserAction object.

**Since:** DOCUMENTS 4.0d


## Methods


### addToFolder

`addToFolder(folder: Folder): boolean`

Add the user action to a Folder.

**Parameters:**

- `folder`: `Folder` — Folder object representing the desired Folder.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var it = context.getFoldersByName("testFolder");
var folder = it.first();
if (folder)
{
  var action = new UserAction("testAction");
  if (action)
  {
      if (!action.addToFolder(folder))
          util.out(action.getLastError());
  }
}
```


### getAttribute

`getAttribute(attribute: string): string`

Get the String value of an attribute of the user action.

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute.

**Returns:** string

**Since:** DOCUMENTS 4.0d


### getLastError

`getLastError(): string`

Get the description of the last error that occurred.

**Returns:** string

**Since:** DOCUMENTS 4.0d


### getOID

`getOID(oidLow?: boolean): string`

Returns the object-id.

Since: DOCUMENTS 5.0 (new parameter oidLow)

**Parameters:**

- `oidLow`: `boolean` — Optional flag: If true only the id of the user action object (m_oid) will be returned. If false the id of the user action object will be returned together with the id of the corresponding class in the form class-id:m_oid.

Default: false

**Returns:** string

**Since:** DOCUMENTS 4.0d


### getPosition

`getPosition(): number`

Retrieve the position of the user action within the user-defined action list of the parent object.

**Returns:** number

**Since:** DOCUMENTS 4.0d


```ts
var it = context.getFoldersByName("testFolder");
var folder = it.first();
if (folder)
{
  var action = folder.getActionByName("testAction");
  if (action)
      util.out(action.getPosition());
}
```


### remove

`remove(): boolean`

Remove the user-defined action from DOCUMENTS.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var it = context.getFoldersByName("testFolder");
var folder = it.first();
if (folder)
{
  var action = folder.getActionByName("testAction");
  if (action)
      action.remove();
}
```


### setAttribute

`setAttribute(attribute: string, value: string): boolean`

Set the String value of an attribute of the user action to the desired value.

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute
- `value`: `string` — String containing the desired value of the attribute

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


### setContext

`setContext(context: string): boolean`

Set the context for a user action of type JSP.

Note: This function is only available for a user action of type JSP.

**Parameters:**

- `context`: `string` — String containing the desired context.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var action = new UserAction("testAction");
action.type = "JSP";
if (!action.setContext("myContext"))
  util.out(action.getLastError());
```


### setCreateDefaultWorkflow

`setCreateDefaultWorkflow(createDefaultWorkflow: boolean): boolean`

Set the flag whether to create the default workflow for a user action of type NewFile.

Note: This function is only available for a user action of type NewFile.

**Parameters:**

- `createDefaultWorkflow`: `boolean` — Flag indicating whether to create the default workflow for a new file.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var action = new UserAction("testAction");
if (!action.setCreateDefaultWorkflow(false))
  util.out(action.getLastError());
```


### setFileTypeForNewFile

`setFileTypeForNewFile(fileType: string): boolean`

Set the file type for a user action of type NewFile.

Note: This function is only available for a user action of type NewFile.

**Parameters:**

- `fileType`: `string` — The technical name of the desired file type; use empty string ('') if you want to remove the associated file type.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var action = new UserAction("testAction");
if (!action.setFileTypeForNewFile("Filetype1"))
  util.out(action.getLastError());
// You can remove the file type as follows:
action.setFileTypeForNewFile('');
```


### setPortalScript

`setPortalScript(scriptName: string): boolean`

Set the portal script for a user action of type PortalScript.

Note: This function is only available for a user action of type PortalScript.

**Parameters:**

- `scriptName`: `string` — The name of the desired portal script; use empty string ('') if you want to remove the associated script.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var action = new UserAction("testAction");
action.type = "PortalScript";
if (!action.setPortalScript("testScript"))
  util.out(action.getLastError());
// You can remove the script as follows:
action.setPortalScript('');
```


### setPosition

`setPosition(position: number): boolean`

Place the user action at the given position in the user-defined action list of the parent object.

Note: 0 at the beginning and -1 at the end.

**Parameters:**

- `position`: `number` — The 0-based position for the user action.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var it = context.getFoldersByName("testFolder");
var folder = it.first();
if (folder)
{
  var action = folder.getActionByName("testAction");
  if (action)
      action.setPosition(-1);
}
```


## Constructors


### constructor

`new UserAction( name: string, label?: string, widget?: string, type?: string, scope?: string, ): UserAction`

Create a new instance of the UserAction class.

Since: DOCUMENTS 4.0d Since: DOCUMENTS 5.0i a global user-defined action will be created.

**Parameters:**

- `name`: `string` — String value containing the desired user action name.
- `label`: `string` — String value containing the desired user action label.
- `widget`: `string` — String value containing the desired user action widget.

Default: "Button"
- `type`: `string` — String value containing the desired user action type.

Default: "NewFile"
- `scope`: `string` — String value containting the desired user action scope.

Default: "Unrestricted"

**Returns:** UserAction

**Since:** DOCUMENTS 4.0d

**See:** UserAction.widget UserAction.type UserAction.scope


```ts
var folder = context.createFolder("test", "public");
var action = new UserAction("testAction");
action.widget = "DropdownList";
action.setFileTypeForNewFile("FileType1");
if (!action.addToFolder(folder))
  util.out(action.getLastError());
```


```ts
var action = new UserAction("testAction", "de:Aktion;en:Action", "DropdownList", "PortalScript", "ProcessesOnly");
```