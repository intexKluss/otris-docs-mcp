---
title: "Workspace"
source: "https://otris.software/documents/manuals/books/workflow-tool-en/workspace.html"
---

# Workspace


## General

If an authorized user starts workflow processing by clicking on a list entry from the **Overview**, the workspace always opens maximized automatically, i.e. all other areas of the web client are automatically minimized. The workspace is divided as follows:


![workspace-overview-1](assets/workspace-overview-1.png)

Fig. 7 - Workspace overview

| Area | Description |
| --- | --- |
| Toolbar (green) | Various actions can be carried out via the Toolbar. |
| Shape menu (red) | The Shapes menu is used to place shapes on the Editor via drag & drop. |
| Editor (blue) | The Editor is used for the actual workflow processing. |
| Navigation (yellow) | You can scroll to a desired part of the workflow using Navigation. |


## Toolbar

The toolbar is used to make various settings on the workflow graph (e.g. zoom and autolayout) and to perform various actions (e.g. open, save and search).


![workspace-toolbar-1](assets/workspace-toolbar-1.png)

Fig. 8 - Toolbar in general

The following actions are available:

| Action | Description |
| --- | --- |
| File | Opens a menu with a click, see File menu |
| Save | Saves the workflow and automatically transfers it to the server |
| Create snapshot | A new snapshot is created, there is no transfer to the server |
| Zoom-In | Increases the zoom factor in the editor by 20% (other settings can be adjusted using the slider) |
| Zoom-Out | Reduces the zoom factor in the editor by 20% (other settings can be adjusted using the slider) |
| Show entire workflow | Sets the zoom factor so that the entire workflow is displayed in the editor |
| Automatic layout | Restructures existing layouts, see Auto Layout |
| Search | Allows you to search for shapes, see Shape search |

**Important note:** If the workflow is saved via *Save* or *Save / Server*, the workflow is transferred to the server after confirmation of a security prompt. Any changes made then automatically apply to existing files in the workflow and to new files for which the workflow is to be executed. If workflow steps that applied to existing files were removed before saving, these files may be in an undefined workflow status. When making changes to workflows, it is therefore always recommended to create a new version and store it at the file type for new files.

**Note:** Snapshots are also created automatically every 5 minutes regardless of manual creation via the corresponding action when workflows are open and therefore represent a temporary storage of work statuses. If a save with transfer to the server is executed (via *Save* or *Save / Server*), existing snapshots are automatically deleted.


### File menu

Various other actions are available via the file menu.


![workspace-file-menu-1](assets/workspace-file-menu-1.png)

Fig. 9 - File menu


#### New Workflow

This action creates a new workflow and, if available, removes a previously displayed workflow from the display. If a workflow has already been edited before the action is activated and this workflow contains unsaved changes, a corresponding message is displayed:


![workspace-message-1](assets/workspace-message-1.png)

Fig. 10 - Unsaved changes message


#### Update data

This action loads data from *documentsOS* such as users, profiles, aliases, script names. However, this data is always loaded when the workspace is opened. The action therefore only needs to be executed if new data has been created or existing data has been changed in the meantime while a workflow is being processed.


#### Open

This action can be used to open workflows either from the *server* or from a *local file*.
When opening a workflow from the server, a dialog is displayed with which the desired workflow can be selected:


![workspace-message-2](assets/workspace-message-2.png)

Fig. 11 - Display available workflows

If snapshots exist for a workflow to be opened, these can be selected:


![workspace-message-7](assets/workspace-message-7.png)

Fig. 12 - Display available workflows with snapshots

- If a selectable workflow has existing snapshots, this is indicated by a corresponding icon.
- If a selectable workflow has an automatically created snapshot, this is indicated by the additional text (Auto).

**Important note:** As soon as a workflow is loaded, edited and saved by the server, it can no longer be edited in the associated Visio sheet if it was created with the Visio plugin. Further information can be found here: [Migration from Visio](migration.html).

When opening a workflow from a local file, a dialog is also displayed; the file can be made available on the dialog using drag & drop. This file must be in the JSON format used by the web workflow.


![workspace-message-3](assets/workspace-message-3.png)

Fig. 13 - Import from local file


#### Save

This action can be used to save the current workflow either in the data model of the *server* or in a *local file*.

**Note:** Depending on the size and complexity, saving the workflow may take some time.

If the action *Save* or *Save / Server* was selected and the workflow already existed, a confirmation prompt is displayed with which the saving can be confirmed or canceled:


![workspace-message-4](assets/workspace-message-4.png)

Fig. 14 - Security prompt before saving

The status of the storage is acknowledged with a *notification*:


![workspace-message-5](assets/workspace-message-5.png)

Fig. 15 - Saving successful

**Important note**: If a workflow previously created with Microsoft Visio is saved with the web workflow in the same version, any existing files in the workflow, such as the Visio model (vsdx file), Visio image (png file) and Visio HTML (htm file), are deleted. It is therefore recommended to save these files beforehand.

If the action *Save / local file* is selected, the file is downloaded to the local download directory and displayed as a download in the browser:


![workspace-message-6](assets/workspace-message-6.png)

Fig. 16 - Saving as local file

**Note:** A workflow saved as a local file can be imported as a new workflow on another target system, for example.


#### Export

This action can be used to export the current workflow to the image formats *SVG*, *JPEG* or *PNG*. The corresponding file is also downloaded to the local download directory and displayed as a download in the browser.

**Note:** Depending on the size and complexity, saving the workflow may take some time.


### Save (button)

This action corresponds to the file menu action *Save / Server*.


### Auto Layout

This action can be used to create an automatic layout for the current workflow. This layout uses various default settings, such as equal spacing and vertical alignment. However, it cannot be guaranteed that the workflow graph will be optimally redrawn.

**Note:** The function should only be used if the existing layout is to be changed or if the workflow graph shows all elements overlapped during a migration from Visio due to missing layout information, see also [Migration from Visio](migration.html). Before the action is executed, it may be necessary to save to a local file or create a snapshot in order to be able to restore a previous layout.


### Shape Search

With the *Shape search*, a quick search can be carried out by entering a term in the search field and pressing `Enter`. Shapes that match the search term are displayed centered in the editor and highlighted in color. If several hits are found, this is displayed in the toolbar based on the number of hits and the corresponding buttons (up or down) can be used to navigate through the set of hits. If the number of hits is large, the list button can be used to open an additional dialog in which all hits are displayed in a table. In this table, the hits can be limited by additional search criteria. By clicking on an entry, the corresponding shape is centered again and highlighted in color. An existing description of the shape can be displayed by hovering over the info icon.


![workspace-search-1](assets/workspace-search-1.png)

Fig. 17 - Search and marking via toolbar


![workspace-search-2](assets/workspace-search-2.png)

Fig. 18 - Detailed search via list button


## Shape menu

Shapes are placed on the **editor** via the **shapemenu** using drag & drop. A shape is only placed if it is dropped in the *Editor* area.


## Editor

The workflow is displayed in the *Editor* and the actual workflow processing also takes place here. Details on functions in the editor can be found here: [Working with drawing elements](editor.html).


## Navigation

A thumbnail view of the current workflow is displayed in the *Navigation*. The visible area is highlighted and can also be moved using the mouse.