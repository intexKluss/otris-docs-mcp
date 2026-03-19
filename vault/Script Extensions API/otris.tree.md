---
title: "Namespace: tree"
source: "https://otris.software/documents/api/scriptextensions/otris.tree.html"
---

### Classes


**TreeItem**


### Methods


**staticotris.tree.getScriptTreeEvent(){ScriptTreeEvent|undefined}**
Returns the ScriptTree event.

Currently the event `subtree` is supported. See [[Script Extensions API/otris.tree.TreeItem#lazyLoad|lazyLoad]] for details.
**Notice:** Returns `undefined` if the script was not triggered by an event.

- Since:
DOCUMENTS 5.0d HF2


##### Returns:

| Type | Description |
| --- | --- |
| ScriptTreeEvent | undefined | ScriptTree event object |


### Type Definitions


**ScriptTreeEventobject**

##### Properties:

| Name | Type | Argument | Description |
| --- | --- | --- | --- |
| name | string |  | event name |
| nodeId | string | <optional> | node id |

- Since:
DOCUMENTS 5.0d HF2