---
title: "Overview"
source: "https://otris.software/documents/manuals/books/workflow-tool-en/list.html"
---

# Overview

Workflows are displayed via the **Workflow** configuration folder. The list shows all existing workflows and snapshots grouped together with the most important general settings. Individual entries can be searched for using the search function.


![admincenter-6](assets/admincenter-6.png)

Fig. 6 - Workflow overview

When you click on a list entry, this workflow or snapshot is opened directly in the workspace, see also [Workspace](workspace.html).

The list also contains all the necessary actions:

- + Workflow (Button): Click to open the workspace for a new workflow.
- Release (Button): This action releases a workflow, only released workflows can be used in the system. The button is only active if at least one workflow is marked with the checkbox. Snapshots cannot be released.
- Lock (Button): This action locks a workflow. The button is only active if at least one workflow is marked with the checkbox. Snapshots cannot be locked.
- Export (Drop-down list): This action can be used to export workflows and snapshots as a JSON file. The file is provided in the download directory. The drop-down list entry is only active if at least one workflow or snapshot is marked with the checkbox.
- Delete (Drop-down list): This action can be used to delete workflows and snapshots. Only workflows that were previously locked can be deleted. Snapshots can be deleted directly. The drop-down list entry is only active if at least one workflow or snapshot is marked with the checkbox.