---
title: "Namespace: FunctionUtils"
source: "https://otris.software/documents/api/gadgets/otris.gadget.util.FunctionUtils.html"
---

Global object holding various functions for the processing of function objects


### Methods


**staticotris.gadget.util.FunctionUtils.getFunctionObject(functionString, isHandler){otris.gadget.util.FunctionUtils.FunctionObject}**
Returns an object holding a function which can be attached to some transferable objects.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| functionString | function | string |  | the String containing the function (can contain multiple functions) |
| isHandler | boolean | true | optional sets weather this function will be uses as a handler |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.util.FunctionUtils.FunctionObject | the created object holding the function |


### Type Definitions


**otris.gadget.util.FunctionUtils.FunctionObjectobject**
Object describing a function that can be attached to a transferable object.


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| isHandler | boolean | true, if function will be used as handler |
| isGadgetFunction | boolean | always true |
| functionString | string | string containting the function |
| functionBody | string | string of the function's body |