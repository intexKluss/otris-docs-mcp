---
title: "Class: RecordEntry"
source: "https://otris.software/documents/api/record-library/RecordEntry.html"
---

### Constructors


****

            Entry in collected data
        | Name | Type | Description |
| --- | --- | --- |
| dataLib | RecordDataLib |  |


### Members


**archiveKeystring**

        Archive key (used for click handler and navigation in navigator)



**docIdstring**

        Document id (used for click handler and navigation in navigator)



**fileIdstring**

        File id (used for click handler and navigation in navigator)



**rowIdstring**

        Row id (used for the model row in the displayed list)



### Methods


**addToSet(name, label)**

            Adds this entry to a set. If a set with the technical name does not exist, a new one will be created
        | Name | Type | Description |
| --- | --- | --- |
| name | string | technical name of the set |
| label | Register | label of the set in the current language |


**setTag(tag)**

            Sets a tag on this entry for the list view
        | Name | Type | Description |
| --- | --- | --- |
| tag | boolean | show tag |


**setTagColor(color)**

            Sets the tag color
        | Name | Type | Description |
| --- | --- | --- |
| color | string | CSS-Color to be used for the tag. |


**setValue(name, value, ergValue)**

            Sets the value of a column
        | Name | Type | Description |
| --- | --- | --- |
| name | string | technical name of the column |
| value | string | technical value |
| ergValue | string | ergonomic value in the current language |


**setValueFromRegister(name, value)**

            Sets the value of a column from the name of a register This function is usefull if you want to group by register
and need a column with the register name for grouping
        | Name | Type | Description |
| --- | --- | --- |
| name | string | technical name of the column |
| value | Register | technical value |