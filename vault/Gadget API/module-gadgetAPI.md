---
title: "Module: gadgetAPI"
source: "https://otris.software/documents/api/gadgets/module-gadgetAPI.html"
---

Gadget API module

- Since:
Documents 5.0g


### Methods


**staticmodule:gadgetAPI.getChartInstance(){otris.gadget.gui.Chart}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Chart |  |


**staticmodule:gadgetAPI.getChatInstance(){otris.gadget.gui.Chat}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Chat |  |


**staticmodule:gadgetAPI.getDropFormInstance(){otris.gadget.gui.DropForm}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.DropForm |  |


**staticmodule:gadgetAPI.getElementInstance(){otris.gadget.gui.Element}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element |  |


**staticmodule:gadgetAPI.getFormInstance(){otris.gadget.gui.Form}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Form |  |


**staticmodule:gadgetAPI.getFullCalendarInstance(){otris.gadget.gui.FullCalendar}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.FullCalendar |  |


**staticmodule:gadgetAPI.getGadgetContext(){GadgetContext}**
Returns a reference to the gadgetContext object


##### Returns:

| Type | Description |
| --- | --- |
| GadgetContext | The otris namespace |


**staticmodule:gadgetAPI.getGentableInstance(){otris.gadget.gui.Gentable}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Gentable |  |


**staticmodule:gadgetAPI.getHTMLInstance(){otris.gadget.gui.HTML}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.HTML |  |


**staticmodule:gadgetAPI.getMessageInstance(message, messageType){otris.gadget.gui.Message}**
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| message | string |  | optional the message to display (since: Documents 5.0i HF3) |
| messageType | string | info | optional the type of the message (error/info/warn) (since: Documents 5.0i HF3) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Message |  |


**staticmodule:gadgetAPI.getOptionGroupInstance(){otris.gadget.gui.OptionGroup}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.OptionGroup |  |


**staticmodule:gadgetAPI.getOtrisNamespace(){otris}**
Returns a reference to the `otris`-namespace


##### Returns:

| Type | Description |
| --- | --- |
| otris | The otris namespace |


**staticmodule:gadgetAPI.getPropertyGridInstance(){otris.gadget.gui.PropertyGrid}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.PropertyGrid |  |


**staticmodule:gadgetAPI.getScriptListWrapperInstance(){otris.gadget.gui.ScriptListWrapper}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.ScriptListWrapper |  |


**staticmodule:gadgetAPI.getScriptTreeInstance(){otris.gadget.gui.ScriptTree}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.ScriptTree |  |


**staticmodule:gadgetAPI.getSelectableElementInstance(){otris.gadget.gui.SelectableElement}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.SelectableElement |  |


**staticmodule:gadgetAPI.getSettingsInstance(){otris.gadget.gui.Settings}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Settings |  |


**staticmodule:gadgetAPI.getTableDataInstance(){otris.gadget.gui.TableData}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.TableData |  |


**staticmodule:gadgetAPI.getTimelineInstance(){otris.gadget.gui.Timeline}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Timeline |  |


**staticmodule:gadgetAPI.getTreeChartInstance(){otris.gadget.gui.TreeChart}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.TreeChart |  |


**staticmodule:gadgetAPI.getVersionInfo(){GadgetVersionInformation}**
Get the gadget api version information


##### Returns:

| Type | Description |
| --- | --- |
| GadgetVersionInformation | version information |


**staticmodule:gadgetAPI.getWizardContext(){otris.gadget.WizardContext}**
Returns a helper class for managing the current wizard setup

- Since:
Documents 6.2.0


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.WizardContext |  |


**staticmodule:gadgetAPI.getWizardInstance(){otris.gadget.gui.Wizard}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Wizard |  |


**staticmodule:gadgetAPI.getWizardStepInstance(id, label, gadgetConfig, dataClientFunction){otris.gadget.gui.WizardStep}**
| Name | Type | Description |
| --- | --- | --- |
| id | string |  |
| label | string |  |
| gadgetConfig | string | object | gadget config (object) or gadgetAction (string) |
| dataClientFunction | string | optional name of the client function that provides the step data |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.WizardStep |  |


**staticmodule:gadgetAPI.getXMLInstance(){otris.gadget.gui.XML}**


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.XML |  |


**staticmodule:gadgetAPI.isGadgetCall(){boolean}**
Check if the current script call is a gadget call.

- Since:
Documents 6.0.1


##### Returns:

| Type | Description |
| --- | --- |
| boolean |  |


**staticmodule:gadgetAPI.registerGadgetAction(gadgetAction, actionFunction){otris.gadget.gui.XML}**
Register a gadget action.

| Name | Type | Description |
| --- | --- | --- |
| gadgetAction | string | gadget action name |
| actionFunction | function | gadget action function GadgetActionFunction(gadgetContext, otris) Name Type Description gadgetContext GadgetContext otris otris otris namespace Returns: gadget instance | Name | Type | Description | gadgetContext | GadgetContext |  | otris | otris | otris namespace |
| Name | Type | Description |
| gadgetContext | GadgetContext |  |
| otris | otris | otris namespace |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.XML |  |


**staticmodule:gadgetAPI.transfer(){string}**
Use this function to serialize and return the gadget instances.


##### Returns:

| Type | Description |
| --- | --- |
| string | gadget instance serialized as string |