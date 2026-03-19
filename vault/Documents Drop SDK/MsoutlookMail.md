---
title: "Interface: MsoutlookMail"
source: "https://otris.software/documents/api/documents-native/MsoutlookMail.html"
---

Methods to modify the currently selected Outlook mails


### Methods


**addCategory(name, color){Promise.<boolean>}**
Adds a category to the currently selected mails. If the category does not exist in this inbox, then it will be created

| Name | Type | Description |
| --- | --- | --- |
| name | string | The name of the category |
| color | number | optional The color index of the category (0-25). If not set outlook chooses the next free color automatically |


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<boolean> | Promise which resolves after the category was added to all selected mails |


**markAsDone(){Promise.<boolean>}**
Marks the selected mails as done. This is equal to markAsTask(5)


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<boolean> | Promise which resolves after all selected mails were marked as done |


**markAsTask(dueDate){Promise.<boolean>}**
Marks the selected mails as a task for a specific due date. The due date -1 removes the task

| Name | Type | Description |
| --- | --- | --- |
| dueDate | number | The due date of the task (-1-5). -1 = Remove the task, 0 = Today, 1 = Tomorrow, 2 = This Week, 3 = Next Week, 4 = No Date, 5 = Complete |


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<boolean> | Promise which resolves after the task was set for all selected mails |


**removeCategory(name){Promise.<boolean>}**
Removes a category from the currently selected mails

| Name | Type | Description |
| --- | --- | --- |
| name | string | The name of the category |


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<boolean> | Promise which resolves after the category was removed from all selected mails |