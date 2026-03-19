---
title: "WorkflowStepIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/WorkflowStepIterator.html"
---

# Interface WorkflowStepIterator

**The WorkflowStepIterator class has been added to the DOCUMENTS PortalScripting API to gain full control over a file's workflow by scripting means.**

You may access WorkflowStepIterator objects by the getAllLockingWorkflowSteps() method described in the [[Portalscript API/interfaces/DocFile]] chapter.

**Note:** This class and all of its methods and attributes require a full workflow engine license, it does not work with pure distribution lists.


#### Since

ELC 3.51e / otrisPORTAL 5.1e


`interface WorkflowStepIterator { first(): WorkflowStep; next(): WorkflowStep; size(): number; }`


## Index


### Methods

- first
- next
- size


## Methods


### first

`first(): WorkflowStep`

Retrieve the first WorkflowStep object in the WorkflowStepIterator.

**Returns:** WorkflowStep

**Since:** ELC 3.51e / otrisPORTAL 5.1e


### next

`next(): WorkflowStep`

Retrieve the next WorkflowStep object in the WorkflowStepIterator.

**Returns:** WorkflowStep

**Since:** ELC 3.51e / otrisPORTAL 5.1e


### size

`size(): number`

Get the amount of WorkflowStep objects in the WorkflowStepIterator.

**Returns:** number

**Since:** ELC 3.51e / otrisPORTAL 5.1e