---
title: "Tour - Selector overview"
source: "https://otris.software/documents/api/scriptextensions/ScriptTourSelectors.html"
---

# Tour - Selector overview


## global

Selectors for global DOCUMENTS elements


### global.menu

Menu in the upper left corner

Following selectors exist at the moment:

- global.menu:toggle
- global.menu:avatar
- global.menu:home
- global.menu:favorites
- global.menu:inbox
- global.menu:file
- global.menu:search
- global.menu:archiveSearch
- global.menu:cloneSession
- global.menu:globalScript
- global.menu:globalGadgetConfig
- global.menu:exit
- global.menu:help


### global.settings

System settings in the menu which appears when you click the username/settingsicon in the status bar

Following selectors exist at the moment:

- global.settings:password
- global.settings:language
- global.settings:privateFolder
- global.settings:email
- global.settings:info


### global.search

Searchbar in the top center

Following selectors exist at the moment:

- global.search:context
- global.search:input
- global.search:container


### global.statusbar

Statusbar on the bottom of the window

Following selectors exist at the moment:

- global.statusbar:container
- global.statusbar:home
- global.statusbar:dropzone
- global.statusbar:navibar
- global.statusbar:user
- global.statusbar:settings


### global.sidebar

Sidebar containers on the left. For more detailed selectors also see global.menu and tree

Following selectors exist at the moment:

- global.sidebar:treecontainer
- global.sidebar:menucontainer
- global.sidebar:outbarcontainer
- global.sidebar:container


## file

Selectors for file specific element


### file.element

Static element on the file view

Following selectors exist at the moment:

- file.element:task
- file.element:headerbar
- file.element:title
- file.element:image
- file.element:favorite
- file.element:monitor
- file.element:nav_prev
- file.element:nav_next
- file.element:nav_jump
- file.element:history
- file.element:content
- file.element:tabs
- file.element:carousel
- file.element:toolbar
- file.element:container
- file.element:dropzone
- file.element:magic
- file.element:magic_register
- file.element:registerToggle
- file.element:top_margin_gadget
- file.element:navigator
- file.element:navigator_icon


### file.field

Selects a file field in the currently visible file view (**Important:** the field has to be on the currently visible register)


#### Syntax

`file.field:<Fieldname>`

`<Fieldname>` has to be replaced with the technical name of the field


### file.field.checkbox

Selects a checkbox field in the currently visible file view (**Important:** the field has to be on the currently visible register)
(**note:** it is also possible to select the field via file.field selector. Using the file.field selector might cause a different behavior when "clickToAdvance' is used.)


#### Syntax

`file.field.checkbox:<Fieldname>`

`<Fieldname>` has to be replaced with the technical name of the field


### file.field.enum

Selects an enum field in the currently visible file view (**Important:** the field has to be on the currently visible register)


#### Syntax

`file.field.enum:<Fieldname>:<EnumValue>`

`<Fieldname>` has to be replaced with the technical name of the field

`<EnumValue>` has to be replaced with the technical name of the enum value


### file.field.double_list

Different selectors for a double list field in the currently visible file view (`since: `**5.0h**) (**Important:** the field has to be on the currently visible register)


#### Syntax

`file.field.double_list:<Fieldname>:<EnumValue>` adresses a single entry of the double list.

`<Fieldname>` has to be replaced with the technical name of the field

`<EnumValue>` has to be replaced with the technical name of the enum value

`file.field.double_list:<Fieldname>:container` adresses the whole double list.

`file.field.double_list:<Fieldname>:entries_left` adresses the all entries on the left side of the double list.

`file.field.double_list:<Fieldname>:entries_right` adresses the all entries on the right side of the double list.

`file.field.double_list:<Fieldname>:search_left` adresses the left search field.

`file.field.double_list:<Fieldname>:search_right` adresses the right search field.

`file.field.double_list:<Fieldname>:reorder_left` adresses the left reordering button.

`file.field.double_list:<Fieldname>:reorder_right` adresses the right reordering button.

`file.field.double_list:<Fieldname>:move_right` adresses the button that moves the entires selected on the left side to the right side.

`file.field.double_list:<Fieldname>:move_left` adresses the button that moves the entires selected on the right side to the left side.

`file.field.double_list:<Fieldname>:move_up` the button that moves the selected entires up.

`file.field.double_list:<Fieldname>:move_down` the button that moves the selected entires down.


### file.register

Selects a given tab (button to open a register)


#### Syntax

`file.register:<RegisterId>`

`<RegisterId>` has to be replaced with the technical id of the register (can be retrieved using a PortalScript function)


### file.actionbutton

Selects a system action button like `Edit`

Following selectors exist at the moment:

- file.actionbutton:startedit
- file.actionbutton:commit
- file.actionbutton:commit_archive
- file.actionbutton:cancel
- file.actionbutton:reactivate
- file.actionbutton:dropdown_actions
- file.actionbutton:dropdown_workflow


### file.customactionbutton

Selects a user defined action button


#### Syntax

`file.customactionbutton:<TechName>`

`<TechName>` has to be replaced with the technical name of the user defined action


### file.workflowactionbutton

Selects a workflow action button


#### Syntax

`file.workflowactionbutton:<WorkflowStepId>`

`<WorkflowStepId>` has to be replaced by the workflow step id (sometimes called flow id) for the current user and file (can be retrieved using a PortalScript function)


### file.dropdownaction

Selects a system action from the actions dropdown of the file

Following selectors exist at the moment:

- file.dropdownaction:mail
- file.dropdownaction:create_custom_pdf
- file.dropdownaction:print_template
- file.dropdownaction:print_pdf
- file.dropdownaction:print_pdf_attachmentes_only
- file.dropdownaction:print_control_sheet
- file.dropdownaction:retrieval_add_note
- file.dropdownaction:waimea_report
- file.dropdownaction:resubmission
- file.dropdownaction:workflow_start
- file.dropdownaction:workflow_forward
- file.dropdownaction:workflow_cancel
- file.dropdownaction:change_file_type
- file.dropdownaction:archive
- file.dropdownaction:archive_and_delete
- file.dropdownaction:delete
- file.dropdownaction:delete_all_versions
- file.dropdownaction:add_archive_fields


### file.customdropdownaction

Selects a user defined action from the actions dropdown of the file


#### Syntax

`file.customdropdownaction:<TechName>`

`<TechName>` has to be replaced with the technical name of the user defined action


## folder

Selectors for the folder view in the center of the window


### folder.element

Selects a static element of the folder view

Following selectors exist at the moment:

- folder.element:headerbar
- folder.element:title
- folder.element:folder_grid
- folder.element:container
- folder.element:magic


### folder.item

Selects an item in the folder view


#### Syntax

`folder.item:<FileId>[:<ColumnNumber>]`

`<FileId>` has to be replaced with the technical name of the user defined action
`<ColumnNumber>` can optionally be specified and has to be replaced with the numer of the column from left to right, starting with 0.


### folder.actionbutton

Selects a system action button of the folder view

Following selectors exist at the moment:

- folder.actionbutton:refresh
- folder.actionbutton:dropdown_copyto
- folder.actionbutton:dropdown_moveto
- folder.actionbutton:dropdown_actions


### folder.customactionbutton

Selects a user defined action button


#### Syntax

`folder.customactionbutton:<TechName>`

`<TechName>` has to be replaced with the technical name of the user defined action


### folder.dropdownaction

Selects a system action from the actions dropdown of the folder

Following selectors exist at the moment:

- folder.dropdownaction:delete
- folder.dropdownaction:forward
- folder.dropdownaction:archive
- folder.dropdownaction:archive_and_delete
- folder.dropdownaction:delete_all_versions
- folder.dropdownaction:remove
- folder.dropdownaction:print
- folder.dropdownaction:print_no_cover
- folder.dropdownaction:waimea_report
- folder.dropdownaction:export_selected_csv
- folder.dropdownaction:export_all_csv
- folder.dropdownaction:export_selected_xml
- folder.dropdownaction:export_all_xml
- folder.dropdownaction:create_erf
- folder.dropdownaction:create_ref


### folder.customdropdownaction

Selects a user defined action from the actions dropdown of the folder


#### Syntax

`folder.customdropdownaction:<TechName>`

`<TechName>` has to be replaced with the technical name of the user defined action


## filereference-dialog

**Since**: `5.0f`

Selectors for the filereference-dialog


### fileReferenceDialog.static

Static element on the scriptparameter-dialog

Following selectors exist at the moment:

- fileReferenceDialog.static:search
- fileReferenceDialog.static:searchInput
- fileReferenceDialog.static:searchIcon
- fileReferenceDialog.static:deleteEntry
- fileReferenceDialog.static:cancel
- fileReferenceDialog.static:ok


### fileReferenceDialog.entry

Selects a field in the currently visible scriptparameter dialog


#### Syntax

`fileReferenceDialog.entry:<Entryname>`

`<Entryname>` has to be replaced with the name of the entry


## scriptparameter-dialog

**Since**: `5.0f`

Selectors for the scriptparameter-dialog


### scriptParameterDialog.actionbutton

Static element on the scriptparameter-dialog

Following selectors exist at the moment:

- scriptParameterDialog.actionbutton:close
- scriptParameterDialog.actionbutton:cancel
- scriptParameterDialog.actionbutton:ok


### scriptParameterDialog.field

Selects a field in the currently visible scriptparameter dialog


#### Syntax

`scriptParameterDialog.field:<Fieldname>`

`<Fieldname>` has to be replaced with the technical name of the field


### scriptParameterDialog.field.checkbox

**Since**: `5.0f`

Selects a checkbox field in the currently visible scriptparameter dialog


#### Syntax

`scriptParameterDialog.field.checkbox:<Fieldname>`

`<Fieldname>` has to be replaced with the technical name of the field


### scriptParameterDialog.field.enum

Selects an enum field in the currently visible scriptparameter dialog


#### Syntax

`scriptParameterDialog.field.enum:<Fieldname>:<EnumValue>`

`<Fieldname>` has to be replaced with the technical name of the field

`<EnumValue>` has to be replaced with the technical name of the enum value


## scriptlist

**Since**: `5.0h`


### scriptlist.entry

Selects an entry in the currently visible scriptplist


#### Syntax

`scriptlist.entry:<Entryname>`

`<Entryname>` has to be replaced with the name of the entry
scriptlist-entries


## dashboard

Selectors for the dashboard


### dashboard.element

Selects a static element of the dashboard

Following selectors exist at the moment:

- dashboard.element:container
- dashboard.element:title
- dashboard.element:btn_edit
- dashboard.element:btn_submit
- dashboard.element:btn_cancel
- dashboard.element:btn_add
- dashboard.element:btn_reset
- dashboard.element:tile_inbox
- dashboard.element:tile_favorites
- dashboard.element:tile_resubmission
- dashboard.element:tile_lastused
- dashboard.element:tile_tasks


### dashboard.folder

Selects a tile for a user defined folder (standard folders can be selected using `dashboard.element`)


#### Syntax

`dashboard.folder:<TechName>`

`<TechName>` has to be replaced with the technical name of the folder


### dashboard.chart

Selects a tile for a user defined chart


#### Syntax

`dashboard.chart:<TechName>`

`<TechName>` has to be replaced with the technical name of the chart


### dashboard.custom

Selects a tile for a user defined gadget


#### Syntax

`dashboard.custom:<TechName>`

`<TechName>` has to be replaced with the name of the gadget script


## tree

Selectors for outbar and tree


### tree.outbar

Selects an outbar button from below the tree


#### Syntax

`tree.outbar:<TechName>`

`<TechName>` has to be replaced with the technical name of the outbar or one of the special identifiers below

The following special `<TechName>` identifiers exist:

- OutbarPublicFolder
- OutbarPrivateFolder
- OutbarCombinedFolder
- OutbarHitTree


### tree.foldertree

Selects an entry from a folder tree (e.g.: **Inbox**)


#### Syntax

`tree.foldertree:<FolderId>`

`<FolderId>` has to be replaced with the technical id of the folder (oid)


### tree.scripttree

Selects an entry from a script tree


#### Syntax

`tree.scripttree:<TreeItemId>`

`<TreeItemId>` has to be replace with the id of the tree item (is set when you create the tree using your PortalScript)


## plugin

Collection of selectors for varius plugins.


### treechart

**Since**: `5.0f-hf1`

Selects an entry from a treechart


#### Syntax

`plugin.treechart:<ChartItemId>`

`<ChartItemId>` has to be replace with the id of the tree-chart item (is set when you create the tree-chart using your PortalScript)


## dom

Selectors for the dom

**IMPORTANT:** Try not to use this selector at all. It could break at any time with any update or change to the system! We do not gurantee for these selectors to work and do not provide support for `dom` selectors!


### dom.jq

Selects using a JQuery expression


#### Syntax

`dom.jq:<JQueryExpression>`

`<JQueryExpression>` has to be replaced with a jquery expression