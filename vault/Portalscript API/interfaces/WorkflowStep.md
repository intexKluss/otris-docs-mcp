---
title: "WorkflowStep | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/WorkflowStep.html"
---

# Interface WorkflowStep

**The WorkflowStep class allows access to the according object type of DOCUMENTS.**

You may access WorkflowStep objects by the different methods described in the [[Portalscript API/interfaces/DocFile]] chapter.

**Note:** This class and all of its methods and attributes require a full workflow engine license, it does not work with pure distribution lists.


`interface WorkflowStep { executiveGroup: string; executiveType: string; executiveUser: string; firstControlFlow: string; forwardFile(controlFlowId: string, comment?: string): boolean; getAttribute(attribute: string): string; getAutoText(autoText: string, startTag?: string, endTag?: string): string; getControlFlows(): ControlFlowIterator; getLastError(shortMessage?: boolean): string; getOID(oidLow?: boolean): string; getWorkflowName(): string; getWorkflowProperty(propertyName: string): string; getWorkflowVersion(): string; id: string; name: string; setAttribute(attribute: string, value: string): boolean; setNewExecutiveGroup(accessProfileName: string): boolean; setNewExecutiveUser(loginUser: string): boolean; status: string; templateId: string; }`


## Index


### Properties

- executiveGroup
- executiveType
- executiveUser
- firstControlFlow
- id
- name
- status
- templateId


### Methods

- forwardFile
- getAttribute
- getAutoText
- getControlFlows
- getLastError
- getOID
- getWorkflowName
- getWorkflowProperty
- getWorkflowVersion
- setAttribute
- setNewExecutiveGroup
- setNewExecutiveUser


## Properties


### ReadonlyexecutiveGroup

`executiveGroup: string`

String value containing the locking user group of the WorkflowStep.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** DOCUMENTS 4.0c


### ReadonlyexecutiveType

`executiveType: string`

String value containing the type of recipient of the WorkflowStep.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** ELC 3.50 / otrisPORTAL 5.0


### ReadonlyexecutiveUser

`executiveUser: string`

String value containing the locking user of the WorkflowStep.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** ELC 3.50 / otrisPORTAL 5.0


### ReadonlyfirstControlFlow

`firstControlFlow: string`

String value containing the unique internal ID of the first outgoing ControlFlow.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** ELC 3.50 / otrisPORTAL 5.0


### Readonlyid

`id: string`

String value containing the unique internal ID of the WorkflowStep.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** ELC 3.50 / otrisPORTAL 5.0


### Readonlyname

`name: string`

String value containing the technical name of the WorkflowStep.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** ELC 3.50 / otrisPORTAL 5.0


### Readonlystatus

`status: string`

String value containing the status of the WorkflowStep.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** ELC 3.50 / otrisPORTAL 5.0


### ReadonlytemplateId

`templateId: string`

String value containing the unique internal ID of the Workflow template.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** ELC 3.50 / otrisPORTAL 5.0


## Methods


### forwardFile

`forwardFile(controlFlowId: string, comment?: string): boolean`

Forward the file to its next WorkflowStep.

This requires the internal ID (as a String value) of the ControlFlow you want the file to pass through. The optional comment parameter will be stored as a comment in the file's monitor. Note: This function requires a full workflow engine license, it does not work with pure distribution lists. The current user's permissions are not checked when using this function!

**Parameters:**

- `controlFlowId`: `string` — String value containing the internal ID of the ControlFlow you want to pass through.
- `comment`: `string` — optional String value containing your desired comment for the file's monitor.

**Returns:** boolean

**Since:** ELC 3.50e / otrisPORTAL 5.0e


### getAttribute

`getAttribute(attribute: string): string`

Get the String value of an attribute of the WorkflowStep.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute

**Returns:** string

**Since:** ELC 3.51e / otrisPORTAL 5.1e


### getAutoText

`getAutoText(autoText: string, startTag?: string, endTag?: string): string`

Retrieve a AutoText in the context of the WorkflowStep and the executive user.

Since: DOCUMENTS 5.0i new optional parameters startTag and endTag

**Parameters:**

- `autoText`: `string` — String containing the rule of the autotext
- `startTag`: `string` — optional start tag.

Default: "%"
- `endTag`: `string` — optional end tag.

Default: "%"

**Returns:** string

**Since:** DOCUMENTS 5.0f HF1


### getControlFlows

`getControlFlows(): ControlFlowIterator`

Retrieve an iterator representing a list of all outgoing ControlFlows of the WorkflowStep.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Returns:** ControlFlowIterator

**Since:** ELC 3.51e / otrisPORTAL 5.1e


### getLastError

`getLastError(shortMessage?: boolean): string`

Function to get the description of the last error that occurred.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

Since: DOCUMENTS 5.0g (new parameter shortMessage)

**Parameters:**

- `shortMessage`: `boolean` — optional Boolean; removes "Error in function: class.method(): " from the message.

Default: false

**Returns:** string

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DocFile.getLastError


### getOID

`getOID(oidLow?: boolean): string`

Returns the object-id.

Since: DOCUMENTS 5.0 (new parameter oidLow)

**Parameters:**

- `oidLow`: `boolean` — Optional flag: If true only the id of the WorkflowStep object (m_oid) will be returned. If false the id of the WorkflowStep object will be returned together with the id of the corresponding class in the form class-id:m_oid.

Default: false

**Returns:** string

**Since:** ELC 3.60c / otrisPORTAL 6.0c


### getWorkflowName

`getWorkflowName(): string`

Retrieve the name of the workflow, the WorkflowStep belongs to.

Note: This function is only available for workflows, but not distribution lists.

**Returns:** string

**Since:** ELC 3.60d / otrisPORTAL 6.0d

**See:** WorkflowStep.getWorkflowVersion


### getWorkflowProperty

`getWorkflowProperty(propertyName: string): string`

Retrieve a property value of the workflow action, the WorkflowStep belongs to.

Note: This function is only available for workflows, but not distribution lists.

**Parameters:**

- `propertyName`: `string` — String containing the name of the desired property

**Returns:** string

**Since:** DOCUMENTS 4.0a


### getWorkflowVersion

`getWorkflowVersion(): string`

Retrieve the version number of the workflow, the WorkflowStep belongs to.

Note: This function is only available for workflows, but not distribution lists.

**Returns:** string

**Since:** ELC 3.60d / otrisPORTAL 6.0d

**See:** WorkflowStep.getWorkflowName


### setAttribute

`setAttribute(attribute: string, value: string): boolean`

Set the String value of an attribute of the WorkflowStep to the desired value.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute
- `value`: `string` — String containing the desired value of the attribute

**Returns:** boolean

**Since:** ELC 3.51e / otrisPORTAL 5.1e


### setNewExecutiveGroup

`setNewExecutiveGroup(accessProfileName: string): boolean`

Reassign the current WorkflowStep object to the given user group.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Parameters:**

- `accessProfileName`: `string` — String containing the technical name of the access profile.

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var f = context.file;
var step = f.getCurrentWorkflowStep();
if (!step)
  step = f.getFirstLockingWorkflowStep();
if (!step)
  util.out("File is not in a workflow.");
if (!step.setNewExecutiveGroup("AccessProfile1"))
  util.out(step.getLastError());
```


### setNewExecutiveUser

`setNewExecutiveUser(loginUser: string): boolean`

Reassigns the current WorkflowStep object to the given user.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Parameters:**

- `loginUser`: `string` — String containing the login name of the desired user.

**Returns:** boolean

**Since:** ELC 3.50e / otrisPORTAL 5.0e