---
title: "Workflow information (general)"
source: "https://otris.software/documents/manuals/books/workflow-tool-en/general.html"
---

# Workflow information (general)

A workflow is a collection of predefined rules that react accordingly to defined conditions. This means that a process is always carried out in the same way without exception. This distinguishes workflows from so-called distribution lists:

- Distribution list (Ad hoc)
Manual distribution by the user
Every distribution takes place differently
There are no automatisms
- Workflow (Rule-based)
Standardized distribution, company-wide specification
Each distribution follows the same pattern
Automations can be used

Prerequisites are necessary for modeling workflows in *documentsOS*:

- File type with index data: corresponds to the web layout/form for displaying the process
- Access profiles: for controlling task owners and/or authorizations
- Public folders: for authorization control and/or collective display of processes
- Archive (optional): analogous to the file type, an archive definition may be required, technical field names must match

**Note:** The use of *access profiles* as task owners is preferable to the use of *users*, as organizational changes do not necessarily require changes to the workflow.

Before creating workflows, the most important criteria should already be known, including:

- When and how does the process begin?
- Which steps must always be followed?
- Which steps must be followed under certain conditions?
- Which information is required at which workflow step?
- Which master data is accessed?
- When is the document archived?
- Is data exchanged with external programs?
- How long does a user have for the task or does an escalation have to take place?

**Note:** If there are extensive criteria or complex processes, so-called sub-workflows should be modeled; this increases the clarity and adaptability of workflows.

The authorization concept plays a special role in the modelling of workflows. A distinction is made between different variants of the authorization concept:

- No authorization: Every user sees everything
- Personal authorization: Each user only sees their own documents
- Mixed forms: Users and defined groups see documents, e.g. user only sees own documents, special group sees all documents

**Note:** An authorization concept should primarily be created based on the critical documents, which simplifies the definition and subsequent administration of workflows. As mixed forms of the authorization concept are often required, the use of *ACL* (Access Control List) or *GACL* (Group Access Control List) is recommended. Information on their configurations can be found in the associated documentation.

In addition to general authorizations for the visibility of documents, visibility settings for fields and tabs can be defined in workflows, particularly for actions with corresponding user interaction.

**Note:** If a workflow contains many such actions with different authorizations, it is recommended to use script exits instead of workflow authorizations, as these are very flexible and can simplify the adaptability of workflows. Information on the provision of these script exits, e.g. *decreaseFieldRightOnFileViewScript* or *hideRegisterOnFileViewScript* can be found in the documentation for the Portalscript API.

If further, special actions are to be triggered in addition to workflow settings, this can also be carried out flexibly using additional script exits, details can be found in the documentation for the Portalscript API, this applies in particular to the following script exits:

- onForwardFileScript
- afterForwardFileScript
- onReceiveWorkflowActionScript
- beforeWorkAssignScript
- onConnectInboxScript
- hideForwardReceiverScript
- hideForwardOptionScript
- onWorkflowAgentScript