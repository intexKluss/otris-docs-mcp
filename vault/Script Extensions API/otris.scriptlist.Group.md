---
title: "Class: Group"
source: "https://otris.software/documents/api/scriptextensions/otris.scriptlist.Group.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| columnOrGroup | string | Group | Group value or an object Name Type Description id string value to group by label string label to be displayed in the group row emptyText string text that will be displayed if there are no rows for this group | Name | Type | Description | id | string | value to group by | label | string | label to be displayed in the group row | emptyText | string | text that will be displayed if there are no rows for this group |
| Name | Type | Description |
| id | string | value to group by |
| label | string | label to be displayed in the group row |
| emptyText | string | text that will be displayed if there are no rows for this group |

- Since:
DOCUMENTS 5.0g


### Methods


**setEmptyText(emptyText)**
This text will be displayed if there are no rows for this group.

Else the group will just be empty

| Name | Type | Description |
| --- | --- | --- |
| emptyText | string | text to display |


**setId(id)**
Group id that will be used for this group.

| Name | Type | Description |
| --- | --- | --- |
| id | string | id of this group |


**setLabel(label)**
Label for the group row to be displayed.

| Name | Type | Description |
| --- | --- | --- |
| label | string | label for the group row |