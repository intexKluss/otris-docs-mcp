---
title: "Namespace: WizardData"
source: "https://otris.software/documents/api/gadgets/otris.gadget.WizardData.html"
---

- Deprecated
To avoid confusion, `WizardData` has been renamed to `WizardContext`. Please use otris.gadget.WizardContext instead.
- See:
otris.gadget.WizardContext


### Methods


**staticotris.gadget.WizardData.addStepButton(containerButtonConfig)**
Add a button to the current wizard step that will be displayed before the other buttons (prev, next, cancel)

| Name | Type | Description |
| --- | --- | --- |
| containerButtonConfig | ContainerButtonConfig | button config object |

- Since:
Documents 5.0i


**staticotris.gadget.WizardData.getData(){object}**
Get a reference to wizard data


##### Returns:

| Type | Description |
| --- | --- |
| object | wizardData - wizard data (saved with stepIds as keys) |


**staticotris.gadget.WizardData.getDataFromPreviousStep(){object}**
Get a reference to the data of the previous step


##### Returns:

| Type | Description |
| --- | --- |
| object | stepData - data of the previous step |


**staticotris.gadget.WizardData.getStepData(stepId){object}**
Get a reference to the step data defined by the `stepId`

| Name | Type | Description |
| --- | --- | --- |
| stepId | string | optional id of the step |


##### Returns:

| Type | Description |
| --- | --- |
| object | stepData - data of the step |


**staticotris.gadget.WizardData.isWizardStep(){boolean}**
Checks if the current gadget is running in a wizard


##### Returns:

| Type | Description |
| --- | --- |
| boolean | inWizard - Is the current gadget running in a wizard |