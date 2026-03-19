---
title: "ControlFlow | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/ControlFlow.html"
---

# Interface ControlFlow

**The ControlFlow class has been added to the DOCUMENTS PortalScripting API to gain full control over a file's
workflow by scripting means.**

You may access ControlFlow objects of a certain WorkflowStep by the different methods described in the WorkflowStep
chapter. The objects of this class reflect only outgoing control flows of a WorkflowStep object.

**Note:**
This class and all of its methods and attributes require a full workflow engine license, it does not work with pure distribution lists.


#### Since

ELC 3.51e / otrisPORTAL 5.1e


`interface ControlFlow { getAttribute(attribute: string): string; getLastError(): string; id: string; label: string; name: string; setAttribute(attribute: string, value: string): boolean; }`


## Index


### Properties

- id
- label
- name


### Methods

- getAttribute
- getLastError
- setAttribute


## Properties


### Readonlyid

`id: string`

String value containing the unique internal ID of the ControlFlow.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** ELC 3.51e / otrisPORTAL 5.1e


### Readonlylabel

`label: string`

String value containing the ergonomic label of the ControlFlow.

This is usually the label of the according button in the web surface.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** ELC 3.51e / otrisPORTAL 5.1e


### Readonlyname

`name: string`

String value containing the technical name of the ControlFlow.

Note: This property requires a full workflow engine license, it does not work with pure distribution lists.

**Since:** ELC 3.51e / otrisPORTAL 5.1e


## Methods


### getAttribute

`getAttribute(attribute: string): string`

Get the String value of an attribute of the ControlFlow.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute

**Returns:** string

**Since:** ELC 3.51e / otrisPORTAL 5.1e


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Returns:** string

**Since:** ELC 3.51e / otrisPORTAL 5.1e

**See:** DocFile.getLastError


### setAttribute

`setAttribute(attribute: string, value: string): boolean`

Set the String value of an attribute of the ControlFlow to the desired value.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute
- `value`: `string` — String containing the desired value of the attribute

**Returns:** boolean

**Since:** ELC 3.51e / otrisPORTAL 5.1e