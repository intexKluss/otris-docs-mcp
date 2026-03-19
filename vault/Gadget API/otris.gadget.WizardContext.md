---
title: "Namespace: WizardContext"
source: "https://otris.software/documents/api/gadgets/otris.gadget.WizardContext.html"
---

Helper class for managing the current wizard setup.


### Example


```
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const wizardContext = gadgetAPI.getWizardContext();
wizardContext.getData();
```


### Methods


**staticotris.gadget.WizardContext.addStep(newStep, index)**
Add a new step to the wizard

Note: You should not add a step at the current index (the step the user is currently looking at)

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| newStep | otris.gadget.gui.WizardStep |  | new wizard step |
| index | number | -1 | optional Position of the new step in the wizard (index starts at 0). Default: Step will be attached at the end (index = -1) |

- Since:
Documents 6.2.0


**staticotris.gadget.WizardContext.addStepButton(containerButtonConfig)**
Add a button to the current wizard step that will be displayed before the other buttons (prev, next, cancel)

| Name | Type | Description |
| --- | --- | --- |
| containerButtonConfig | ContainerButtonConfig | button config object |

- Since:
Documents 5.0i


**staticotris.gadget.WizardContext.getData(){object}**
Get a reference to wizard data


##### Returns:

| Type | Description |
| --- | --- |
| object | wizardData - wizard data (saved with stepIds as keys) |


**staticotris.gadget.WizardContext.getDataFromPreviousStep(){object}**
Get a reference to the data of the previous step


##### Returns:

| Type | Description |
| --- | --- |
| object | stepData - data of the previous step |


**staticotris.gadget.WizardContext.getStepData(stepId){object}**
Get a reference to the step data defined by the `stepId`

| Name | Type | Description |
| --- | --- | --- |
| stepId | string | optional id of the step |


##### Returns:

| Type | Description |
| --- | --- |
| object | stepData - data of the step |


**staticotris.gadget.WizardContext.getSteps(){Array.<otris.gadget.gui.WizardStep>}**
Get the array of the defined steps

- Since:
Documents 6.2.0


##### Returns:

| Type | Description |
| --- | --- |
| Array.<otris.gadget.gui.WizardStep> | steps Array of the defined steps |


**staticotris.gadget.WizardContext.isWizardStep(){boolean}**
Checks if the current gadget is running in a wizard


##### Returns:

| Type | Description |
| --- | --- |
| boolean | inWizard - Is the current gadget running in a wizard |


**staticotris.gadget.WizardContext.removeStep(stepId, removeData)**
Remove a step from the wizard

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| stepId | string |  | Id of the step that should be removed |
| removeData | boolean | true | optional Flag indicating if the related step data should be removed |

- Since:
Documents 6.2.0


**staticotris.gadget.WizardContext.updateSteps(updateSteps, removeData)**
Update the wizard steps with the provided ones

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| updateSteps | Array.<otris.gadget.gui.WizardStep> |  | all steps that should be part of the wizard |
| removeData | boolean | true | optional cleanup data related to removed steps |

- Since:
Documents 6.2.0