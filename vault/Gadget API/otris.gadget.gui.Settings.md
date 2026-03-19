---
title: "Class: Settings"
source: "https://otris.software/documents/api/gadgets/otris.gadget.gui.Settings.html"
---

### Constructors


****
- Since:
Documents 5.0a


### Methods


**set(name, value)**
Adds a generic setting to this settings object

| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of the option to set |
| value | any | the value of the option |


**setBackgroundColor(color)**
Set the color (background) for the gadghet

| Name | Type | Description |
| --- | --- | --- |
| color | string | the desired background color |


**setColor(color)**
Set the color (foreground) for the gadghet

| Name | Type | Description |
| --- | --- | --- |
| color | string | the desired foreground color |


**setEditable(editable)**
Set weather or not the gadget will be editable

| Name | Type | Description |
| --- | --- | --- |
| editable | boolean | will it be editable (default: false) |


**setIconLink(iconLink)**
Set weather or not the gadget will have a link on its icon.

| Name | Type | Description |
| --- | --- | --- |
| iconLink | string | An external URL or a javascript client command starting with 'javascript:' |


**setIconPath(iconPath)**
Set the icon path for the icon displayed for the gadget

| Name | Type | Description |
| --- | --- | --- |
| iconPath | string | the new iconPath |


**setRefreshInterval(refreshInterval)**
Set weather or not the gadget will have a link on its icon.

| Name | Type | Description |
| --- | --- | --- |
| refreshInterval | number | Refreshinterval in seconds |


**setResizable(resizable)**
Set weather or not the gadget will be resizable by the user

| Name | Type | Description |
| --- | --- | --- |
| resizable | boolean | will it be resizable (default: false) |


**setTextLabels(langLabelArray)**
Set weather or not the gadget will have a link on its icon.

| Name | Type | Description |
| --- | --- | --- |
| langLabelArray | array | Array with the Mapping of key -> Langlabel |


**setTileLink(tileLink)**
Set weather or not the gadget will have a link on its title.

| Name | Type | Description |
| --- | --- | --- |
| tileLink | string | An external URL or a javascript client command starting with 'javascript:' |


**setTitle(title)**
Set the title of the gadget

| Name | Type | Description |
| --- | --- | --- |
| title | string | the new title to set for the gadget |


**setViewable(viewable)**
Set weather or not the gadget will be viewable

| Name | Type | Description |
| --- | --- | --- |
| viewable | boolean | will it be viewable (default: false) |