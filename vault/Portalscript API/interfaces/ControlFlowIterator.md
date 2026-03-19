---
title: "ControlFlowIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/ControlFlowIterator.html"
---

# Interface ControlFlowIterator

**The ControlFlowIterator class has been added to the DOCUMENTS PortalScripting API to gain full control over a file's workflow by scripting means.**

You may access ControlFlowIterator objects of a certain WorkflowStep by the different methods described in the WorkflowStep chapter. The objects of
this class reflect a list of outgoing control flows of a WorkflowStep object.
**Note:** This class and all of its methods and attributes require a full workflow engine license, it does not work with pure distribution lists.


#### Since

ELC 3.51e / otrisPORTAL 5.1e


`interface ControlFlowIterator { first(): ControlFlow; next(): ControlFlow; size(): number; }`


## Index


### Methods

- first
- next
- size


## Methods


### first

`first(): ControlFlow`

Retrieve the first ControlFlow object in the ControlFlowIterator.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Returns:** ControlFlow

**Since:** ELC 3.51e / otrisPORTAL 5.1e


### next

`next(): ControlFlow`

Retrieve the next ControlFlow object in the ControlFlowIterator.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Returns:** ControlFlow

**Since:** ELC 3.51e / otrisPORTAL 5.1e


### size

`size(): number`

Get the amount of ControlFlow objects in the ControlFlowIterator.

Note: This function requires a full workflow engine license, it does not work with pure distribution lists.

**Returns:** number

**Since:** ELC 3.51e / otrisPORTAL 5.1e