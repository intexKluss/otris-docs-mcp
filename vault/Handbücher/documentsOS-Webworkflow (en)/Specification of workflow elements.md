---
title: "Specification of workflow elements"
source: "https://otris.software/documents/manuals/books/workflow-tool-en/model.html"
---

# Specification of workflow elements


## General

The data model can be customized using forms for the individual shapes (except for the annotation shape). Forms for the corresponding shapes are always displayed on the right-hand side when opened.


## General form elements

There are at least the input fields **Name**, **Label** and **Description** for each workflow element.

- Name: The name of a workflow element is a technical designation that must be unique within a workflow. The name is generated automatically when a shape is applied (e.g. Action_1 or ControlFlow_1). If the name is changed manually, the above-mentioned uniqueness must be ensured. The name may be a maximum of 255 characters long, no dots may be used in the name.
- Label: The label of a workflow element is an ergonomic name that is displayed in the editor depending on the setting in the workflow shape. For the shapes ControlFlow and Operation in particular, this name can also be displayed as a button or drop-down list entry in the web client, provided no other internationalizations are set, see also Internationalization.
- Description: The description is used to enter texts with which any information can be saved, e.g. to document certain workflow steps. Descriptions can be specified in an internationalized language.


## Internationalization

The *Internationalization* is set globally for the current workflow on the *workflow shape*.


![model-locale-1](assets/model-locale-1.png)

Fig. 28 - Language settings on the workflow shape

Clicking on the **Globus icon** opens a selection dialog in which all languages available in documentsOS can be selected. In the event that no different languages are to be used, these can be deselected, in which case the **Default display** selection and thus a non-internationalized input field remains.

These settings affect all shapes and, in addition to the respective *label fields*, also fields such as *description*, *comment* or *task*, for example:


![model-locale-2](assets/model-locale-2.png)

Fig. 29 - Label and comment for control flow / Default, de, en


![model-locale-3](assets/model-locale-3.png)

Fig. 30 - Label, task, comment and description for action / de, en without default


### Workflow-Shape

This shape is automatically inserted when the workflow is created, so it is always present and cannot be removed. This shape must not be linked to incoming or outgoing edges. This shape is used to make global settings for the workflow.


![model-workflow-1](assets/model-workflow-1.png)

Fig. 31 - Workflow

- Version: The version of the currently open workflow is displayed in this field. This field cannot be edited. To create a new version, execute the Create new workflow version action.
- File type: Each workflow requires an existing and released file type to which it refers and with whose settings (e.g. fields or tabs) it works. All existing and released file types are displayed in the list, the corresponding file type must be selected.
- Shape text: This selection list can be used to choose the form or language in which the shapes are displayed:
Identifier (system language): The shapes are displayed with the system language.
Identifier (en): The shapes are displayed with the English name. If a shape does not have an English name, the general name is displayed.
Name: The shapes are displayed with the technical identifier.
Name (filtered): If this setting is selected, a name is no longer displayed for edges (control flows, operations and escalations).
- Exclusive write protection: This setting can be used to set (default setting) or remove Exclusive write protection. Further information can be found here: Exclusive write protection.
- Released: When this option is activated, a workflow is marked as released. Only released workflows can be used, so it is possible to create a workflow, for example, but it cannot be used in the web client as long as it is not marked as released.
- Create new workflow version: This action automatically creates a new version.
- Import Visio metadata: When this action is executed, a dialog is displayed with which an existing Visio sheet can be selected in order to import various metadata from it. Further information can be found here: Migration from Visio.


### Start-Shape

This shape identifies the unique starting point of the workflow. Each workflow must have **exactly one** start shape. This shape must **not** have an incoming connection. Exactly **one** outgoing connection (Edge) is permitted on the start shape; this connection **must be a control flow** (no operation or escalation). The following settings **cannot** be made on this control flow:

- Guard settings (script, condition, error message)
- Leave in inbox (checkbox)
- Withdraw from other inboxes (checkbox)
- Forward directly (checkbox)


![model-start-1](assets/model-start-1.png)

Fig. 32 - Start

The checkbox *Archive file* can be used to specify directly at the start of a workflow whether a file should already be archived at this point. It is not possible to select a target archive here; the archive that is specified as the *Target server* for the file type is always used.

Other form settings:

- Field values: See Field values
- Properties: See Properties


### End-Shape

Each workflow must have at least one endpoint; no more connections may originate from an endpoint.


![model-end-1](assets/model-end-1.png)

Fig. 33 - End

- Seal file: If this option is activated, the file is sealed with the workflow end, i.e. locked against any further form of processing within and also outside the workflow. This setting is ignored if the workflow was called as a subworkflow, as the end status of the called workflow is only evaluated as a return signal to the calling workflow. Sealing the file must then be activated in the calling workflow.
- Delete file: If this option is active, the file is deleted at the end of the workflow.
- Archive file: If this option is active, the file is archived. It is not possible to select a target archive here; the archive that is specified as the Target server in the file type is always used.

Other form settings:

- Field values: See Field values
- Properties: See Properties
- Connections: See Connections


### Action-Shape

An **Action** represents a user interaction (user or group members). Outgoing control flows indicate the possible buttons of the action.


![model-action-1](assets/model-action-1.png)

Fig. 34 - Action

An action can be configured as *processing* or as *information* to different recipients (alias, user, groups). If the file is assigned for processing, the recipient(s) must perform the corresponding forwarding so that the workflow continues. If the file is assigned for information purposes only, the recipient(s) will only receive the file for viewing and the workflow will continue once the file has been made available.

Depending on whether the recipient is determined static or dynamic, the available entries are displayed in the drop-down list. With dynamic determination, the fields contained in the file type are listed, in which a corresponding recipient is then expected as a field value.

If the configuration is carried out as processing or information by / to a group member, the execution can be carried out either *asynchronously* or *synchronously*. In the case of synchronous execution to a group with a large number of members, there may be a noticeable delay in the previous action (forwarding) because the file must be made available in the inbox for each group member. With asynchronous execution, on the other hand, the previous action (forwarding) can be carried out immediately without delay.

The checkbox *Dissolve group* can be used to specify whether only the group name (checkbox not set) or the name of each group member (checkbox set) is listed in the monitor display of the file for the workflow step in the case of the assignment *Processing by one group member* or *Processing by all group members*.

Depending on the language, the text entered in the *Task* field is displayed in the monitor list and in the task line of the file when the file is displayed.

The text entered in the *Comment* field is entered after the file has been forwarded, depending on the language, if no comment has been specified for the forwarding control flow itself. If the action was only provided *for information* and is therefore carried out automatically, the comment and the task are not displayed.

Other settings:

- Open in edit mode: If this action is activated, the file is switched directly to edit mode when it is loaded. If the action is not active, a recipient must first press the Edit button to be able to make entries.
- Show action list / copy list: If these options are activated, the drop-down lists for Actions or *Copy" are displayed in read mode of the file.
- No mail notification: If this option is activated, the delivery of an e-mail via the file inbox in a user's inbox is suppressed, provided one has been set up for the user.
- No inbox filing: If this option is activated, the file is not delivered to a user's inbox when it is delivered and can then be found via appropriately configured public folders, for example.
- Expenditure: In this field, the action can be given a numerical value that reflects the costs or effort involved in carrying it out. The field is preset with the value 1. However, no further evaluation of this setting takes place by default.

Other form settings:

- Exclusive write protection: See Exclusive write protection
- Escalation: See Escalation
- Field values: See Field values
- Properties: See Properties
- Connections: See Connections
- Fields: See Fields
- TabbedPages: See TabbedPages


### Signal Input-Shape

A **Signal input** can be used to wait for a condition to occur. Processing of the file remains blocked for everyone until the condition is fulfilled, so the workflow remains at this point. A signal input is used, for example, when the value of a file field is changed by an external application.


![model-signalinput-1](assets/model-signalinput-1.png)

Fig. 35 - Signal input

The following information can be used to record conditions: [Conditions, Guards](../../../howto/common/guards.html).
The occurrence of a condition can also be checked by a script; to do this, activate the "Script" option and select the corresponding script from the list. A condition in the case of a script check is considered fulfilled if the script has a return value of 1 (context.returnValue = 1;).

Signal inputs are regularly checked by the server as *signal jobs* according to the settings in the documents.ini file (`$NumberSignalJobsPerHour`); depending on the setting, there may also be time delays. The `docFile.checkWorkflowReceiveSignal()` method can be used for scripting to initiate an immediate check at the time the script is executed.

Other form settings:

- Exclusive write protection: See Exclusive write protection
- Escalation: See Escalation
- Field values: See Field values
- Properties: See Properties
- Connections: See Connections
- Comment: See Comment


### Signal Output-Shape

A **Signal output** can be used to send a signal for other applications or the workflow itself.


![model-signaloutput-1](assets/model-signaloutput-1.png)

Fig. 36 - Signal output

Further settings are made depending on the **Type** selected:

- Archiving: If Static assignment is activated, an archive name must be selected from the list of existing and released archives; the file is archived in this archive. If the option Export without documents is activated, file documents are not transferred to the archive. Further archiving settings are configured on the file type.
- XML Export: If this type is selected, an existing directory on the server must be specified for Outbox into which the XML export, i.e. the creation of an XML file, is to be carried out. The file name is automatically created from the unique file ID, the file contains all field names and field values of the file. Documents assigned to the file are also saved in subdirectories if the option Export without documents has not been selected. References to the subdirectory are then also saved in the XML file. In addition, status and monitor information can also be exported; an HTML file containing this information is created for each. Corresponding references to these HTML files are then also saved in the XML file. If the XML export is to take place without documents, this information is not generated. In the Job field, you can specify the name of a batch file that is called up by the server after the export. The path to the generated XML file is transferred to this file as a parameter, so that the data can be processed further by an external application, for example.
- EMail: If this type is selected, an email is sent. In this case, at least one recipient must be specified; this can be done static by selecting a fixed e-mail address or dynamic, in which case a field name must be selected in which an e-mail address is expected. The same settings (static, dynamic) also apply to Sender, CC or BCC, whereby the email default sender from the system settings is used if the sender is not specified. In the Subject and Content fields, auto texts can also be used in addition to fixed values.
- Insert in folder: If this type is selected, a folder must be selected from the list in which the file is to be provided. In addition, a folder option Copy or Move must be specified.
- Change file type:* If this type is selected, a file type must be selected from the list to which the change is to be made. A change affects the entire file and the structure is adapted to the new file type. The workflow is then able to react to fields that were not available in the previous file type. Fields from the original file type that are not present in the new file type are lost along with their field values in the further processing step of the file. When changing the file type, there should therefore be an intersection of shared fields and the replaced file type should also be used to determine basic data. A file type change is also necessary, for example, if subworkflows are to be called up that are set to a different file type and field values are to be changed by the system or by user input in this subworkflow. However, a change is not necessary if a called subworkflow uses another of the same file type.
- If this type is used, the script that is to be used for this signal output must be selected from the list.

Signal inputs are regularly checked by the server as *signal jobs* according to the settings in the documents.ini file (`$NumberSignalJobsPerHour`); depending on the setting, there may also be time delays.

Other form settings:

- Exclusive write protection: See Exclusive write protection
- Escalation: See Escalation
- Field values: See Field values
- Fields: See Fields
- TabbedPages: See TabbedPages
- Properties: See Properties
- Connections: See Connections
- Comment: See Comment


### Subworkflow-Shape

A sub-workflow can be used to call up other workflows, which can increase clarity in complex processes, for example, as sub-processes can be outsourced to sub-workflows.


![model-subworkflow-1](assets/model-subworkflow-1.png)

Fig. 37 - Subworkflow

Only one control flow may originate from a subworkflow shape. The end of a subworkflow always leads back to the calling workflow.
In a subworkflow, it should also be noted that the options *Seal file* and *Delete file* are not evaluated in the end states of the called workflows, as this could impair the usability of created workflow modules and possibly lead to the calling workflow being blocked.
If the assignment is *static*, the corresponding subworkflow must be selected from the drop-down list. In the case of a *dynamic* assignment, the corresponding field in which the workflowname of the subworkflow is expected must be selected from the drop-down list. The workflow name is derived from the technical workflow name, a hyphen and the version number.
When using subworkflows, you should ensure that they do not call themselves.

Subworkflows have no further form settings.


### Decision-Shape / Merge-Shape

This shape can be used to automatically determine the course of a workflow when evaluating different initial conditions. The conditions are specified in the adjacent control flows of the shape. Autotexts can also be used in the conditions.
If this shape has several outputs, it is always referred to as a decision; if it has several inputs and exactly one output, it is always referred to as a merge.


![model-decision-merge-1](assets/model-decision-merge-1.png)

Fig. 38 - Workflow with decision / merging

Decisions and mergers are displayed in different colors by default (without manually changing the shape color):

- Decision: white background
- Merge: gray background

The respective status can also be seen from the heading of the detailed dialog.


![model-decision-merge-2](assets/model-decision-merge-2.png)

Fig. 39 - Decision


![model-decision-merge-3](assets/model-decision-merge-3.png)

Fig. 40 - Merge

Conditions that originate from an action shape and connect to a decision shape are always interpreted as a condition for the action shape and not as a condition for the decision shape.

When using decision shapes, it is important to ensure that a condition must always apply. An outgoing control flow should always contain an *else branch* as a condition expression to ensure that a decision branch can always be run through. If no decision can be made, the workflow can come to a standstill at the decision point.

Operations or control flows that start from this shape and end at the same shape are **not allowed**.

Other form settings:

- Field values: See Field values
- Properties: See Properties
- Connections: See Connections


### Delay-Shape

Transitions can be time-controlled with a delay. Used in parallel-or-workflow-processes, it can also act as a timeout signal for a process strand.

The following restrictions apply to the delay shape:

- A delay shape may have several incoming control flows, but only exactly one outgoing control flow.
- Attaching an escalation is not permitted.


![model-delay-1](assets/model-delay-1.png)

Fig. 41 - Delay

- Use work calendar: If this setting is not selected, the time and unit refer to the annual calendar. If this setting is selected, a working calendar must be activated and maintained in the global settings. If this is the case, delays are only carried out during the specified working hours and not on any public holidays that may have been stored.
- Time / unit: The time (numerical value or absolute time) and the time unit (minutes, hours, days, weeks, absolute) up to which the delay should be active are specified. The server executes escalation jobs regularly and automatically according to the settings in the documents.ini file ($NumberEscalationJobsPerHour); depending on the setting, there may also be time delays. If the time unit Absolute is selected, the time must be specified as a Date format, which is defined according to the format settings (see global settings), e.g. MM/DD/YYYY, when specifying times, e.g.: 10/31/2023 10:30 (space between date and time).

Other form settings:

- Exclusive write protection: See Exclusive write protection
- Comment: See Comment
- Field values: See Field values
- Properties: See Properties
- Connections: See Connections


### Controlflow-Shape

This shape describes the transition from one workflow element to another.


![model-controlflow-1](assets/model-controlflow-1.png)

Fig. 42 - Control flow / General tab

The transition from one element to another (*forwarding*) can be *monitored*, i.e. the transition is only made if a certain condition is met. Either a *script* or a *condition* can be specified as the *guard*.

- Script: If the condition check is performed via script, the corresponding checkbox must be selected and a script selected from the list. In this case, a condition is considered fulfilled if the script has a return value of 1 (context.returnValue = 1;). If the return value is 0, the specified error message is displayed, if available.
- Condition: The following information can be used to record conditions: Conditions, Guards. If the condition is not fulfilled, an error message can be specified to be displayed. An error message can only be used for control flows that start with an action.

The following settings can be defined under *Display*:

- Control: You can specify whether a button (function button) should be displayed for control flows that originate from action shapes or whether the control flow should be displayed as an action in the action drop-down list.
- Navigation: You can specify which view should be used after forwarding; possible navigations can be selected from the corresponding list
- File Ok / Comment: The fields File Ok and Comment can be used to specify a status description of the file that is displayed in the file monitor. While only the status is set to Ok or Not Ok for File Ok, autotexts can also be used in the comment.
- Leave in inbox: It can be specified whether the file remains in the inbox of the respective processor after forwarding.
- Withdraw from other inboxes: If this option is activated, the file is removed from the inboxes of other users after forwarding. This is useful, for example, if it is sufficient for a file to only be edited by one group member.
- Copy to sent items folder: You can specify whether the file should be stored as a file copy in the sent folder of the respective editor after forwarding.
- Forward directly: If this option is activated, forwarding takes place directly and without displaying a forwarding page. The values for File Ok and Comment are used as defined in the shape. If the option is not active, an additional forwarding page is displayed when forwarding, on which, if the value No is used for File Ok, there is the option of a Request, forwarding or Forwarding to the preset recipient according to the workflow. The deactivated option is only evaluated after actions in which the file is actually processed by a group, alias or user. If the preceding workflow element is processed by the system (e.g. signal or decision), it is always forwarded automatically and directly.

Further settings for a control flow can be specified on the *Access* tab.


![model-controlflow-2](assets/model-controlflow-2.png)

Fig. 43 - Control flow / Access tab

You can use **Visibility** to specify via *Script* or *Condition* whether or not the control flow should be displayed as a button or as an entry in the drop-down list (see *Control* above). This can be used to map additional authorization checks, for example.

Via **Confirmation**, a *message* can optionally be displayed if the authorization applies (condition for visibility is met), which must also be confirmed. In this case, if the option *Check password* is activated, the additional entry of the password of the corresponding user can be requested in order to carry out forwarding.

An *Alternative task* can be specified via **Task**. In this case, an additional dialog is displayed when forwarding. The specified *task* or *description* is displayed in the dialog. If the option *Task overwritable* is also selected, the task text can be adjusted manually.

Other form settings:

- Field values: See Field values
- Properties: See Properties
- Nodes: See Connections


### Operation-Shape

While a *Control flow shape* always involves a transition to another workflow element, an *Operation* can be used to perform a transition to the same element. However, this does not trigger a new file input. The operation is therefore used to assign new values to fields via the field assignment.


![model-operation-1](assets/model-operation-1.png)

Fig. 44 - Operation

The other settings for *Control* and *Access* correspond to those of a control flow, but no *Alternative tasks* can be specified.

Other form settings:

- Field values: See Field values
- Properties: See Properties


### Escalation-Shape

This shape can be used to perform an automatic time-controlled transition from one workflow element to another.

The following restrictions apply to the escalation shape:

- A maximum of one escalation shape may be attached to a shape.
- An escalation shape may only originate from an action shape, a subworkflow shape, a signal input shape or a signal output shape.
- An escalation shape must always be linked to another workflow element and may not perform a transition to the same workflow element.
- In the case of an escalation transition, the transition always takes place as a direct forwarding,


![model-escalation-2](assets/model-escalation-2.png)

Fig. 45 - Escalation

- Escalation time / time / unit: The time (numerical value or absolute time) and the time unit (minutes, hours, days, weeks, absolute) from which the escalation is to be executed are specified. The server executes escalation jobs regularly and automatically according to the settings in the documents.ini file ($NumberEscalationJobsPerHour); depending on the setting, there may also be time delays. If the time unit Absolute is selected, the time must be specified as a Date format, which is defined according to the format settings (see global settings), e.g. MM/DD/YYYY, when specifying times, e.g.: 10/31/2023 10:30 (space between date and time).
- Escalation time / work calendar: If this setting is not selected, the time and unit refer to the annual calendar. If the setting is selected, a work calendar must be activated and maintained in the global settings. If this is the case, escalations are only carried out during the specified working hours and not on any stored public holidays.
- Display / Withdraw from other inboxes: If this option is activated, the file is removed from the inboxes of other processors after forwarding. This option should be selected so that direct editing is no longer possible after escalation.

Other form settings:

- Nodes: See Connections
- Field values: See Field values
- Properties: See Properties


### Fork-Shape and Join-Shape

With a *Fork shape*, a workflow can be split into various concurrent strands (parallel branching). A fork must have exactly one incoming and at least two outgoing connections. The strands **must always** be merged via a *Join shape*. A join must have at least two incoming and exactly one outgoing connection.

The following rules must be observed for workflow modeling with fork and join:

- There must be exactly one associated join for each fork.
- Processing threads must run from the branching point to the synchronization point.
- Connections between different processing lines are not permitted.
- A parallel and synchronization area may not be left.
- A processing strand, including its branches, has exactly one start and one end point.
- Field value changes always apply to the entire session. They are not limited to sub-strands.
- If there is a possibility that the editor of a file can be active in different threads, e.g. because he is a member of different groups, the Navigation to overview should be switched in the control flow leading to the parallel branch. Via the task of the respective action, the processor can then recognize in which thread and in which workflow step processing tasks are due.


![model-fork-join-1](assets/model-fork-join-1.png)

Fig. 46 - Important modeling guidelines for fork / join


![model-fork-join-2](assets/model-fork-join-2.png)

Fig. 47 - Fork


![model-fork-join-3](assets/model-fork-join-3.png)

Fig. 48 - Join

For both the fork shape and the join shape, the type can be defined with **And** or **Or**, these types have the following rules and meanings:

- And fork / join: A process that was initiated with an and fork must also be completed with an and join. With this type of modelling, each strand must be run through completely so that the workflow does not remain at the synchronization point.
- Or fork / join: A process that was initiated with an or fork must also be completed with an or join. With this type of modelling, it is sufficient if a sub-strand has been completely processed and arrives at the or-synchronization point.

Other form settings:

- Field values: See Field values
- Properties: See Properties
- Connections: See Connections


### Annotation-Shape

This shape can be used to specify descriptions at any point. This shape must not be linked to incoming or outgoing edges, it has no further form settings.


### Other form elements


#### Exclusive write protection

An *Exclusive write protection* field is displayed on some workflow elements.

If a user locks a file because they are the person responsible for the current workflow step, they have exclusive write access to this file. This default behavior of the workflow can be changed on the workflow shape by activating the "Cancel exclusive write protection" option for the entire workflow. The file can then also be edited by another user, provided they have the necessary rights.

Changing the write protection in the workflow shape affects the entire workflow for all workflow elements that belong to the types *Delay*, *Action*, *Signal Input* or *Signal Output*. A different behavior from the overall workflow can be defined for each of these elements in the associated form.

The write protection of the element in question can follow the setting of the workflow *workflow* or it can be explicitly *remove* or *don't remove* for this element, regardless of which setting was made for the workflow itself.


#### Escalation settings

An *Escalation* tab is displayed on some workflow elements.

If processing does not take place within a certain period of time, the workflow can respond with a gradual *escalation*. This prevents files from remaining unprocessed during the editing process or the workflow remaining at this point. Two escalation levels can be defined.


![model-escalation-1](assets/model-escalation-1.png)

Fig. 49 - Escalation

- Active: The escalation level is activated, further settings can be defined.
- Time / unit: The time (numerical value or absolute time) and the time unit (minutes, hours, days, weeks, absolute) from which the escalation is to be executed are specified. The server executes escalation jobs regularly and automatically according to the settings in the documents.ini file ($NumberEscalationJobsPerHour); depending on the setting, there may also be time delays. If the time unit Absolute is selected, the time must be specified as a Date format, which is defined according to the format settings (see global settings), e.g. MM/DD/YYYY, when specifying times, e.g.: 10/31/2023 10:30 (space between date and time).
- Use work calendar: If this setting is not selected, the time and unit refer to the annual calendar. If this setting is selected, a work calendar must be activated and maintained in the global settings. If this is the case, escalations are only carried out during the specified working hours and not on any stored public holidays.
- Type: The types E-Mail message, Delegate to user, Delegate to alias, Delegate to group and Back to initiator can be selected.
E-Mail message: Depending on whether a static or dynamic recipient or sender determination is performed, the available entries are displayed in the drop-down list. In the case of dynamic determination, the fields contained in the file type are listed, in which a corresponding recipient or sender is expected as a field value. In addition, Mail subject and Mail text can be specified; autotexts can also be used here.
Delegation (user, alias, group): If a delegation takes place, the processing is withdrawn from the originally assigned processor and the processing is transferred to another user, an alias or a group. Depending on whether the recipient is determined statically or dynamically, the available entries are displayed in the drop-down list. With dynamic determination, the fields contained in the file type are listed, in which a corresponding recipient is then expected as a field value.
Back to initiator: With this selection, the file is delegated to the original file creator for further processing and removed from the current user.


#### Field values

A *Field values* tab is displayed on some workflow elements.

Field values can be set automatically before the start or after the end of the respective workflow step.


![model-fieldvalue-1](assets/model-fieldvalue-1.png)

Fig. 50 - Field values

There are various options for field values:

- Set empty entry for a field: Leave value blank
- Set autotexts as field values: Autotexts can also be used as field values, e.g.: Value = %currentDate% enters the current date.
- Set field references as field values: When assigning values, you can refer to other fields, e.g.: %Fieldname%`.
- Set script as field value: If "runscript" is entered as the field name, the name of the script can be entered as the value. The script is then executed at the relevant time.


#### Fields

A *Fields* tab is displayed on some workflow elements.


![model-fields-1](assets/model-fields-1.png)

Fig. 51 - Field settings

All existing fields of the file type are displayed on the tab; you can set for each field whether and with which setting it should be displayed:

- Read/write: The field is displayed and can be edited.
- Mandatory: The field is displayed, can be edited and must not contain an empty value.
- Readonly: The field is displayed but cannot be edited.
- Not chosen: The field is not displayed.

The *Set all access rights* button is used to set the value *RW* (read/write) for all fields.
The *Reset all access rights* button is used to remove any settings that have been made.

It should be noted that other settings, e.g. scripts, may also restrict the visibility and editing options of fields.


#### TabbedPages

A *TabbedPages* tab is displayed on some workflow elements.


![model-register-1](assets/model-register-1.png)

Fig. 52 - TabbedPages settings

All existing registers of the file type are displayed on the tab; you can set for each register whether and with which setting it should be displayed:

- Read/write: The register is displayed and can be edited, e.g. document register with upload option.
- Readonly: The register is displayed but cannot be edited.
- Not chosen: The register is not displayed.

The *Set all access rights* button is used to set the value *RW* (read/write) for all registers.
The *Reset all access rights* button is used to remove any settings that have been made.

It should be noted that other settings, e.g. scripts, may also restrict the visibility and editing options of registers.


#### Properties

Name-value pairs of supported workflow properties can be specified in the properties. Possible properties for workflow nodes and workflow control flows can be found here: [Properties](../../../api/properties/)


#### Connections

On some workflow elements, a *Connections* tab is displayed for incoming and outgoing connections for the respective workflow step. Changes to the connection settings cannot be made here, but for *outgoing connections* it is possible to change the order using drag & drop. For actions with outgoing control flows, for example, this sequence determines the sequence of possible actions that are displayed for buttons or in the action drop-down list. This overview can also be used to check whether all intended connections to the respective workflow step are active and therefore valid.


![model-connection-1](assets/model-connection-1.png)

Fig. 53 - Move outgoing connections using drag & drop

In the *Control Flow* and *Escalation* shapes, the incoming and outgoing connections are displayed on the *Nodes* field.


#### Comment

A *Comment* field is displayed on some workflow elements. Comments can be specified in internationalized language. Comments are also saved in the monitor of the file, they can also contain autotexts and can be used, for example, for more precise documentation of the workflow process.