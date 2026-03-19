---
title: "Interface: ConfigController"
source: "https://otris.software/documents/api/documents-native/ConfigController.html"
---

Controls the configuration of the application and can be used to store custom configuration on the device of the user.

**IMPORTANT**: Custom attribute keys should always start with a "$" sign at the beginning of their name! This is to avoid future conflicts.


### Methods


**getAttribute(key){Promise.<string>}**
Gets a config attribute

| Name | Type | Description |
| --- | --- | --- |
| key | string | The key of the attribute |


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<string> | Promise which resolves with the value of this attribute or null if it could not be found |


**setAttribute(key, value){Promise.<boolean>}**
Sets a config attribute

| Name | Type | Description |
| --- | --- | --- |
| key | ConfigController.ConfigAttributeKey | The key of the attribute which should be set |
| value | string | The new value for the attribute |


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<boolean> | Promise which resolves with true after the attribute was set or false in case of any error |


### Type Definitions


**ConfigController.ConfigAttributeKey"Title" "Name" "Icon" "$..."**
Key of the attribute


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| "Title" | string | Title of the window, which is shown in the titlebar (default: "DOCUMENTS Drop") |
| "Name" | string | Name of the application, which is used in messages and titles of sub dialogs (default: "DOCUMENTS") |
| "Icon" | string | Icon which is shown as part of titlebars and buttons (default: "res:Icon") |
| "$..." | string | Custom values can also be saved and have to start with a dollar sign! |