---
title: "Class: RecordDataLib"
source: "https://otris.software/documents/api/record-library/RecordDataLib.html"
---

### Constructors


****

            Class for collecting data for use in navigator and file details
        | Name | Type | Description |
| --- | --- | --- |
| currentFile | DocFile | the current file |
| mainFile | DocFile | the master file |


### Methods


**addColumn(name, label, options)**

            Adds a column to the dataset. Has to be called before creating a hitlist and before adding entries
        | Name | Type | Description |
| --- | --- | --- |
| name | string | Technical name of the column (if autofill is used, this must be equal to the field name) |
| label | string | Label for the column in the current language |
| options | ColumnOptions | Options for column creation |


**addEntry(){RecordEntry}**

            Adds a new empty entry, which has to be filled manually


##### Returns:

| Type | Description |
| --- | --- |
| RecordEntry | the new entry |


**addEntryFromDoc(docFile, doc){RecordDocEntry}**

            Adds a new entry based on a Document, autofill columns will be automatically filled.
The documentId and fileId or archiveKey will be added automatically
        | Name | Type | Description |
| --- | --- | --- |
| docFile | DocFile | DOCUMENTS file to which this document belongs. |
| doc | Document | Document to be added. |


##### Returns:

| Type | Description |
| --- | --- |
| RecordDocEntry | the new entry |


**addEntryFromFile(docFile){RecordFileEntry}**

            Adds a new entry based on a DocFile, autofill columns will be automatically filled.
The fileId or archiveKey will be added automatically
        | Name | Type | Description |
| --- | --- | --- |
| docFile | DocFile | DOCUMENTS file to be added. |


##### Returns:

| Type | Description |
| --- | --- |
| RecordFileEntry | the new entry |


**addEntryFromHit(docHit){RecordHitEntry}**

            Adds a new entry based on a DocHit, autofill columns will be automatically filled.
The fileId or archiveKey will be added automatically
        | Name | Type | Description |
| --- | --- | --- |
| docHit | DocHit | DOCUMENTS file to be added from DocHit. |


##### Returns:

| Type | Description |
| --- | --- |
| RecordHitEntry | the new entry |


**addLastEditorColumn(options)**

            Adds a default column for the last editor of the file
        | Name | Type | Description |
| --- | --- | --- |
| options | ColumnOptions | Options for column creation |


**addLastModifiedColumn(options)**

            Adds a default column for the last modified date of the file
        | Name | Type | Description |
| --- | --- | --- |
| options | ColumnOptions | Options for column creation |


**addTitleColumn(options)**

            Adds a default column for the file title
        | Name | Type | Description |
| --- | --- | --- |
| options | ColumnOptions | Options for column creation |


**createHitlist(fields)**

            Returns an array of fields for use with HitResultsets
        | Name | Type | Description |
| --- | --- | --- |
| fields | Array.<string> | Additional fields which should also be added |


**createSet(name, label, options)**

            Adds a new set of files to the collected data
        | Name | Type | Description |
| --- | --- | --- |
| name | string | Technical name for the set |
| label | string | Label for the set in the current language |
| options | SetOptions | Options for set creation |


**getCurrentFile(){DocFile}**

            Gets the current file


##### Returns:

| Type | Description |
| --- | --- |
| DocFile | Current file |


**getMainFile(){DocFile}**

            Gets the master file


##### Returns:

| Type | Description |
| --- | --- |
| DocFile | Master file |


**getSelectedSet(){string}**

            Gets the technical name of the active set


##### Returns:

| Type | Description |
| --- | --- |
| string | set |


**limit(amount)**

            Limits the data to a fixed amount of hits. Important: If possible always limit your resultsets and only limit using this method if you are combining resultsets!
        | Name | Type | Description |
| --- | --- | --- |
| amount | number | Amount of files to limit the dataset to |


**setCurrentFile(currentFile)**

            Sets the current file
        | Name | Type | Description |
| --- | --- | --- |
| currentFile | DocFile | Current file |


**setMainFile(mainFile)**

            Sets the master file
        | Name | Type | Description |
| --- | --- | --- |
| mainFile | DocFile | Master file |


**setSelectedSet(selectedSet)**

            Sets the technical name of the active set
        | Name | Type | Description |
| --- | --- | --- |
| selectedSet | string |  |


**sortByDate(columnName, ascending)**

            Sorts the data by a date column. This is usefull if multiple resultsets are aggregated.
        | Name | Type | Default | Description |
| --- | --- | --- | --- |
| columnName | string | DlcFile_LastModified | optional Technical name of the column to sort by |
| ascending | boolean | false | optional If true the sorting is going to be ascending |