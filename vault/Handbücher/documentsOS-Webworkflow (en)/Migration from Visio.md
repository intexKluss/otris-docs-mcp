---
title: "Migration from Visio"
source: "https://otris.software/documents/manuals/books/workflow-tool-en/migration.html"
---

# Migration from Visio


## General information

The general rule is:

- Workflows created with Microsoft Visio can still be used normally in documentsOS.
- Post-processing of workflows with Microsoft Visio is still possible, but further development of the workflow plugin will no longer take place; this will only be carried out in the web workflow.

**Important note**: Once a workflow created in Microsoft Visio has been **loaded and saved** in the web workflow, **Visio may no longer be used for editing**.

**Important note**: If a workflow previously created with Microsoft Visio is saved with the web workflow in the same version, any existing files in the workflow, such as the Visio model (vsdx file), Visio image (png file) and Visio HTML (htm file), are deleted. It is therefore recommended to save these files beforehand.


## Migration


![migration-visio-1](assets/migration-visio-1.png)

Fig. 54 - Example workflow in Microsoft Visio

The corresponding workflow must be selected and loaded from the available workflows via the file menu *Open / Server*. After loading, the workflow is displayed in an unstructured form because no layout information is available:


![migration-webworkflow-1](assets/migration-webworkflow-1.png)

Fig. 55 - Imported workflow without layout information

The correct file type must be selected via the form editing of the workflow shape and the setting must be saved:


![migration-webworkflow-2](assets/migration-webworkflow-2.png)

Fig. 56 - Save file type on the workflow shape

If the correct Visio file is available, this should be used to load the essential layout information.

**Important note:** A Visio metadata import is only possible if the workflow loaded in the web workflow is identical to the one in the Visio sheet.

Via the form editing of the workflow shape, a dialog can be opened via the action *Import Visio metadata*, which enables the selection of the Visio sheet.


![migration-webworkflow-3](assets/migration-webworkflow-3.png)

Fig. 57 - Import Visio metadata action on the workflow shape


![migration-webworkflow-4](assets/migration-webworkflow-4.png)

Fig. 58 - Dialog for importing Visio metadata

These are transferred via *Import metadata*. The data provided by Visio is used as far as possible to determine and display positions and angles. As not all of the data is usually available, the representation never fully matches the previous Visio drawing:


![migration-webworkflow-5](assets/migration-webworkflow-5.png)

Fig. 59 - Workflow after transferring Visio metadata

However, the workflows can usually be quickly adapted and, for example, the necessary alignments can be made by making simple revisions using the possibilities of the editor.

If the correct Visio file is not or no longer available, formatting can be carried out using the *automatic layout* after importing without layout information and saving the file type on the workflow shape. The automatic layout uses various default settings, such as equal spacing and vertical alignment. It cannot be guaranteed that the workflow graph will be optimally redrawn, but even after an automatic layout, it is usually possible to make the necessary adjustments quickly.


![migration-webworkflow-6](assets/migration-webworkflow-6.png)

Fig. 60 - Workflow according to automatic layout

**Note**: After revising the layout, the workflow should be saved and transferred to the server so that all layout changes made are available the next time it is opened.

**Important note**: Once the workflow has been loaded and saved in the web workflow, **Visio may no longer be used for processing**.