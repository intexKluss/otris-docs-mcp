---
title: "Working with drawing elements"
source: "https://otris.software/documents/manuals/books/workflow-tool-en/editor.html"
---

# Working with drawing elements


## General

The **Editor** enables the actual creation and editing of a workflow; it is used to create the so-called **workflow graph**.

A **workflow graph** describes the composition of the various building blocks, the so-called **shapes**, in a workflow.

**Shapes** are the workflow elements that can be placed on the editor from the Shape menu using drag & drop.
Shapes that **do not represent a connecting element** are referred to as **Nodes**.
Shapes that **connect nodes** are referred to as **Edges**.
With the exception of the **Annotation shape**, all shapes have **Forms** on which the specifications of the respective shapes for the workflow are specified. Information on the shape forms can be found here: [Specification of workflow elements](model.html).


## Short description of the workflow shapes

The following is a short description of the workflow shapes. Detailed information on the individual shapes can be found here: [Specification of workflow elements](model.html).

- Workflow: This shape is automatically inserted when the workflow is created. It cannot be moved and must not be linked to incoming or outgoing edges. This shape is used to make global settings for the workflow.
- Start: This shape identifies the unique start point of the workflow; it may be used exactly once per workflow.
- End: Each workflow must have at least one end point; no more connections may originate from an end point.
- Action: Represents a user interaction (user or group members). Outgoing control flows indicate the possible buttons of the action.
- Signal Input: A signal input can be used to wait for a condition to occur.
- Signal Output: A signal output can be used to send a signal for other applications or the workflow itself.
- Subworkflow: A subworkflow can be used to call up other workflows; the end of a subworkflow always leads back to the calling workflow.
- Decision: This shape can be used to automatically determine the course of a workflow when evaluating different initial conditions. If this shape has several outputs, it is always referred to as a decision; if it has several inputs and exactly one output, it is always referred to as a merge.
- Delay: Transitions can be time-controlled with a delay.
- Control Flow: Describes the transition from one workflow element to another.
- Operation: An operation involves a transition to the same element.
- Escalation: Describes the transition from one workflow element to another (only action, subworkflow, signal output or signal input shape permitted), whereby the transition is automatically time-controlled.
- Fork: A fork can be used to split a workflow into various concurrent strands. A fork must have exactly one incoming and at least two outgoing connections. The strands must always be merged via a join.
- Join: A join is used to merge strands of the workflow that have been split via a fork. A join must have at least two incoming and exactly one outgoing connection.
- Annotation: This shape can be used to specify descriptions at any point. This shape may not be connected to incoming or outgoing edges.

Nodes and edges have different click functions:

- Nodes

| Function | Description |
| --- | --- |
| Left-click | Opening the halo |
| Right-click | Opening the halo and the form |
| Double left-click | Opening the halo and the form |
| Drag&Drop | New positioning |

- Edges

| Function | Description |
| --- | --- |
| Left-click | Opening the halo |
| Right-click | Opening the halo and the form |
| Double left-click | Open the halo (only by clicking on Source, Target or Segment, see below) |
| Drag&Drop | New positioning |

**Note:** The same click functions apply to the *Workflow shape* and the *Annotation shape* as for Edges, but the *Annotation shape* does not have an additional form.

Edge labels can be moved directly using drag & drop.
As edges represent the connections between nodes, it is important to ensure that these connections are also active; inactive and therefore invalid connections are highlighted in *red*:


![editor-edge-inactive-1](assets/editor-edge-inactive-1.png)

Fig. 19 - Inactive, invalid connection


![editor-edge-active-1](assets/editor-edge-active-1.png)

Fig. 20 - Active, valid connection


## Halo

All placed shapes have additional buttons called **Halos**, which are mainly used for quick editing of workflows and become visible when the corresponding shape is selected (left or right click). These halos can be different for each shape.


### Workflow-Node Halo

**Note:** The workflow shape is always unique and can therefore neither be deleted nor created independently; it is created automatically. Due to these properties, it has a different halo.


![editor-halo-workflow-1](assets/editor-halo-workflow-1.png)

Fig. 21 - Halo Workflow-Shape

| Position | Name | Function |
| --- | --- | --- |
| bottom-right | Opening the form | Opens a form that contains the data model for the shape. |
| enclosing | Change size | Making changes to the size of the shape. |


### Halo Nodes (general)


![editor-halo-node-1](assets/editor-halo-node-1.png)

Fig. 22 - Halo nodes general

This illustration shows the halo of an action and is identical for all nodes (except join, fork and workflow).

| Position | Name | Function |
| --- | --- | --- |
| top-left | Delete | Deletes the shape and its data in the data model. |
| top-center | Create an action | Creates a new action without a connection (control flow). |
| top-right | Create linked action | Creates a new action with a direct connection (control flow). |
| center-right | Pull out control flow | Creates an outgoing control flow with a connection to the shape. |
| bottom-center | Coloring | The shape can be colored with a color picker. |
| bottom-right | Opening the form | Opens a form that contains the data model for the shape. |
| enclosing | Change size | Making changes to the size of the shape. |

The color picker can be used to make color settings for *Nodes* and for the *Annotation shape*:


![editor-halo-node-2](assets/editor-halo-node-2.png)

Fig. 23 - Color-Picker


### Halo Join and Fork


![editor-halo-join-fork-1](assets/editor-halo-join-fork-1.png)

Fig. 24 - Halo Join and Fork

The Joint and Fork Halo supplements the general Node Halo with an additional **Rotate** function.

| Position | Name | Function |
| --- | --- | --- |
| left (with more distance to the shape) | Rotate | Rotates the shape to a new position. |


### Halo Edges


![editor-halo-edge-1](assets/editor-halo-edge-1.png)

Fig. 25 - Halo Edges

| Position | Name | Function |
| --- | --- | --- |
| left | Delete | Deletes the shape and its data in the data model. |
| right | Opening the form | Opens a form that contains the data model for the shape. |


## Other block functions

A so-called **ToolsView** combines the interaction elements **Source**, **Target**, **Vertice** and **Segment**. A ToolsView exists **only on Edges** and appears with a **Hover** on an Edge.


![editor-toolsview-1](assets/editor-toolsview-1.png)

Fig. 26 - Edge ToolsView

- Source: The source is represented by a bar and symbolizes the starting point / source node.
- Target: A target symbolizes the destination point / destination node of the edge and is represented by a filled arrowhead.
- Vertice: A vertice symbolizes a bend point on a connection by means of a filled circle.
- Segment: The segment is shown on exactly vertical and horizontal edges or sections of the edge.

| Function | Description |
| --- | --- |
| hover | Opening the ToolsView |
| hover + Drag&Drop (Source) | Determine new output / source node |
| hover + Drag&Drop (Target) | Determine new target node |
| hover + Drag&Drop (Vertice) | Vertice move |
| hover + Drag&Drop (Segment) | Move line, possibly creating new vertices in the process |
| hover + Double-click (Source, Target, Segment) | Opening halo and the form |
| hover + Double-click (Vertice) | Delete Vertice |
| left-click (Source, Target, Segment) | Opening the halo and marking the label |
| right-click | Opening halo and the form |
| Drag&Drop (Edge) | When you mouse down on the edge line, a vertice is created which can then be moved as required and is created at the position of the mouse cursor when you mouse up. |
| Drag&Drop (Label) | The label can be repositioned in a given space. |


## Annotation-Shape

The *Annotation shape* can be used for additional descriptions or notes. In addition to direct text entries, you can use the color picker to highlight the shape in color. To enter descriptions, the text area must be selected, not the shape itself.


![editor-annotation-shape-1](assets/editor-annotation-shape-1.png)

Fig. 27 - Annotation-Shape


## Other help functions


### Copy / Paste

Elements that have already been placed can be copied and pasted again. All properties of the element are copied and the technical identifier (name) of the element is automatically renamed when it is pasted. To copy, the element is selected by clicking on it and copied to the clipboard using *Ctrl + C*. The key combination *Ctrl + V* can be used to paste the element. You can also select several elements by holding down the *Ctrl* key while selecting them. All selected elements are then copied and pasted using *Ctrl + C* and then *Ctrl + V*.


### Move selected areas

Selected elements can be moved together. Several elements are selected by holding down the *Ctrl* key and dragging a desired area with the *pressed left mouse button*. While dragging with the mouse, the selected area is highlighted in red. If the mouse button is then released, the marked area is highlighted in blue and is ready to be moved. The *Ctrl* key must then be released and the marked area can now be moved to the desired position by *pressing the left mouse button* on **Nodes**.