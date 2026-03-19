---
title: "XMLExport | Portalscript API"
source: "https://otris.software/documents/api/portalscript/classes/XMLExport.html"
---

# Class XMLExport

The XMLExport class allows to export DOCUMENTS elements as an XML file by scripting means.

The exported XML structure may then, for example, be used for further manipulation by an external ERP environment. The following elements can be exported:

- DocFile
- PortalScript
- Filetype
- Folder
- Workflow
- Distribution List
- Editor (Fellow)
- AccessProfile
- Alias
- Filing Plan
- Outbar
- DocumentsSettings
- CustomProperties


The XML files may also be reimported into another (or the same) Portal environment by the Docimport application for DocFile objects
and by the XML-import of DOCUMENTS Manager for the remaining elements, respectively.
**Since:** DOCUMENTS 4.0c available for PortalScript, Filetype, Folder, Workflow, Distribution List, Editor, AccessProfile, Alias and Filing Plan
**Since:** DOCUMENTS 4.0d available for Outbar
**Since:** DOCUMENTS 4.0e available for DocumentsSettings
**Since:** DOCUMENTS 5.0d available for CustomProperties


## Index


### Methods

- addAccessProfile
- addAlias
- addCustomProperty
- addDistributionList
- addDocumentsSettings
- addEnumeration
- addFellow
- addFile
- addFileLinkTemplate
- addFileType
- addFileTypesFromCategory
- addFileTypesFromFolder
- addFilingPlan
- addFolder
- addNumberRange
- addOutbar
- addPartnerAccount
- addPortalScript
- addPortalScriptCall
- addPortalScriptsFromCategory
- addSystemUser
- addWorkflow
- clearXML
- getLastError
- getXML
- saveXML


### Constructors

- constructor


## Methods


### addAccessProfile

`addAccessProfile(accessProfile: any): boolean`

Add the desired access profile to the XMLExport.

**Parameters:**

- `accessProfile`: `any` — The desired access profile to be added to the XML output and specified as follows:

String containing the technical name of the access profile
AccessProfile object

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var path = "C:\\temp\\expAccessProfile.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addAccessProfile("AccessProfile1");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addAlias

`addAlias(aliasName: string): boolean`

Add the desired alias to the XMLExport.

**Parameters:**

- `aliasName`: `string` — String value containing the technical name of the alias to be added to the XML output.

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var xmlExp = new XMLExport("C:\\temp\\expAlias.xml", false);
var success = xmlExp.addAlias("alias1");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addCustomProperty

`addCustomProperty(propName: string): boolean`

Add the desired global custom property to the XMLExport.

**Parameters:**

- `propName`: `string` — The technical name of the desired global custom property to be added to the XML output.

**Returns:** boolean

**Since:** DOCUMENTS 5.0d


```ts
var path = "C:\\temp\\expCustomProperty.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addCustomProperty("testProp");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addDistributionList

`addDistributionList(distributionListName: string): boolean`

Add the desired distribution list to the XMLExport.

**Parameters:**

- `distributionListName`: `string` — String containing the name of the distribution list to be added to the XML output.

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var path = "C:\\temp\\expDistributionList.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addDistributionList("DistributionList1");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addDocumentsSettings

`addDocumentsSettings(): boolean`

Add the DOCUMENTS settings data to the XMLExport.

**Returns:** boolean

**Since:** DOCUMENTS 4.0e


### addEnumeration

`addEnumeration(name: string): boolean`

Add the desired enumeration to the XMLExport.

**Parameters:**

- `name`: `string` — The technical name of the desired enumeration to be added to the XML output.

**Returns:** boolean

**Since:** DOCUMENTS 6.0


```ts
var path = "C:\\temp\\expEnumeration.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addEnumeration("testEnum");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addFellow

`addFellow(editor: any, includePrivateFolders?: boolean): boolean`

Add the desired editor (fellow) to the XMLExport.

Since: DOCUMENTS 4.0c HF2 (new parameter includePrivateFolders)

**Parameters:**

- `editor`: `any` — The editor to be added to the XML output and specified as follows:

String containing the login name of the editor.
SystemUser object representing the editor.
- `includePrivateFolders`: `boolean` — Default: true. boolean value indicating whether to export the private folders of the fellow

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var path = "C:\\temp\\expFellow.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addFellow("editor1");
if (success)
 xmlExp.saveXML();
else
 util.out(xmlExp.getLastError());
```


### addFile

`addFile(docFile: DocFile, exportCondition?: any): boolean`

Add the desired DocFile object to the XMLExport.

**Parameters:**

- `docFile`: `DocFile` — An object of the DocFile class which should be added to the XML output
- `exportCondition`: `any` — Default: true. Optional export conditions specified as follows:

boolean value indicating whether the file id should be exported as update key.
XMLExportDescription object defining serveral conditions for the exporting process of the DocFile object.

**Returns:** boolean

**Since:** ELC 3.51b / otrisPORTAL 5.1b


```ts
var path = "C:\\temp\\expDocFile.xml";
var xmlExp = new XMLExport(path, true);
var success = xmlExp.addFile(context.file);
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addFileLinkTemplate

`addFileLinkTemplate(templateName: string): boolean`

Add the desired file link template to the XMLExport.

**Parameters:**

- `templateName`: `string` — The technical name of the desired file link template to be added to the XML output.

**Returns:** boolean

**Since:** DOCUMENTS 5.0h


```ts
var path = "C:\\temp\\expFileLinkTemplate.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addFileLinkTemplate("testTemplate");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addFileType

`addFileType(fileTypeName: string, format?: string): boolean`

Add the desired file type to the XMLExport.

The XML output is able to update the same file type (Update-XML).

Note: The XML files exported in DOCUMENTS 6.0 format are incompatible with DOCUMENTS 5.0.

Since: DOCUMENTS 6.0 (parameter format)

**Parameters:**

- `fileTypeName`: `string` — The technical name of the file type to be added to the XML output.
- `format`: `string` — Default: "6.0". Optional String value defining the desired export format. The following formats are available:

5.0 (DOCUMENTS 5.0)
6.0 (DOCUMENTS 6.0)

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var path = "C:\\temp\\expFileType.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addFileType("Filetype1");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addFileTypesFromCategory

`addFileTypesFromCategory(categoryName?: string, format?: string): boolean`

Add all file types belonging to the specified category to the XMLExport.

The XML output is able to update the same file types (Update-XML).

Note: The XML files exported in DOCUMENTS 6.0 format are incompatible with DOCUMENTS 5.0.

Since: DOCUMENTS 5.0h (Parameter categoryName is optional) Since: DOCUMENTS 6.0 (parameter format)

**Parameters:**

- `categoryName`: `string` — Optional category name of the file types to be added to the XML output. If no category name is specified, then all file types that are NOT assigned to a category are exported.
- `format`: `string` — Default: "6.0". Optional String value defining the desired export format. The following formats are available:

5.0 (DOCUMENTS 5.0)
6.0 (DOCUMENTS 6.0)

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
var path = "C:\\temp\\expFileTypesFromCategory.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addFileTypesFromCategory("ftCategory");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addFileTypesFromFolder

`addFileTypesFromFolder(folderName: string, format?: string): boolean`

Add all file types belonging to the specified file type folder to the XMLExport.

The XML output is able to update the same file types (Update-XML).

Note: The XML files exported in DOCUMENTS 6.0 format are incompatible with DOCUMENTS 5.0.

Since: DOCUMENTS 6.0 (parameter format)

**Parameters:**

- `folderName`: `string` — The folder name of the file types to be added to the XML output.
- `format`: `string` — Default: "6.0". Optional String value defining the desired export format. The following formats are available:

5.0 (DOCUMENTS 5.0)
6.0 (DOCUMENTS 6.0)

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
var path = "C:\\temp\\expFileTypesFromFolder.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addFileTypesFromFolder("ftFolder");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addFilingPlan

`addFilingPlan(filingPlanName: string): boolean`

Add the desired filing plan to the XMLExport.

The XML output is able to update the same filing plan (Update-XML).

**Parameters:**

- `filingPlanName`: `string` — String containing the technical name of the filing plan to be added to the XML output.

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var path = "C:\\temp\\expFilingPlan.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addFilingPlan("myFilingPlan");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addFolder

`addFolder( folder: Folder, exportStructure: boolean, exportCondition: any, updateXML?: boolean, ): boolean`

Add the desired Folder object to the XMLExport.

This function is able to add the folder structure or the files in the folder to the XMLExport.

Since: DOCUMENTS 5.0e HF2 (optional parameter updateXML)

**Parameters:**

- `folder`: `Folder` — The Folder object to be added to the XML output.
- `exportStructure`: `boolean` — Boolean value indicating whether to export the folder structure or the files in the folder, on which the current user has read rights. If you want to export the files in the folder, an XMLExport instance being able to export DocFile should be used.
- `exportCondition`: `any` — The export conditions can be specified as follows:

boolean value
indicating whether the file id should be exported as update key in case of exporting files in the folder;
indicating whether the subfolders should be exported in case of exporting the folder structure.
XMLExportDescription object defining several conditions for the exporting process of the files in the folder.
- `updateXML`: `boolean` — Default: false. Optional boolean value indicating whether the XML output is able to update the same folder (Update-XML) in case of exporting the folder structure.

Note: This Parameter is ignored in case of exporting the files in the folder.

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var xmlExpFiles = new XMLExport("C:\\temp\\expFolderFiles.xml", true); // for exporting the files in the folder
var xmlExpStructure = new XMLExport("C:\\temp\\expFolderStructure.xml", false); // for exporting the folder structure
var it = context.getFoldersByName("myFolder", "dynamicpublic");
var folder = it.first();
if (folder)
{
  var success = xmlExpFiles.addFolder(folder, false, true); // add the files in the folder to the XML output
  if (success)
      xmlExpFiles.saveXML();
  success = xmlExpStructure.addFolder(folder, true, true); // add the folder structure to the XML output
  if (success)
      xmlExpStructure.saveXML();
}
```


### addNumberRange

`addNumberRange(name: string, withCounter?: boolean): boolean`

Add the desired number range alias to the XMLExport.

**Parameters:**

- `name`: `string` — String value containing the technical name of the number range to be added to the XML output.
- `withCounter`: `boolean` — Default: false. boolean value indicating whether to export the actual counter value of the number range

**Returns:** boolean

**Since:** DOCUMENTS 4.0d HF1


### addOutbar

`addOutbar(outbarName: string): boolean`

Add the desired outbar to the XMLExport.

**Parameters:**

- `outbarName`: `string` — String value containing the technical name of the outbar to be added to the XML output.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var xmlExp = new XMLExport("C:\\temp\\expOutbar.xml", false);
var success = xmlExp.addOutbar("outbar1");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addPartnerAccount

`addPartnerAccount(userAccount: any, includePrivateFolders?: boolean): boolean`

Add the desired user account (not fellow) to the XMLExport.

**Parameters:**

- `userAccount`: `any` — The user account to be added to the XML output and specified as follows:

String containing the login name of the user account.
SystemUser object representing the user account.
- `includePrivateFolders`: `boolean` — Default: true. boolean value indicating whether to export the private folders of the user account

**Returns:** boolean

**Since:** DOCUMENTS 5.0 HF2


```ts
var path = "C:\\temp\\expUserAccount.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addPartnerAccount("login1");
if (success)
 xmlExp.saveXML();
else
 util.out(xmlExp.getLastError());
```


### addPortalScript

`addPortalScript(namePattern: string, format?: string): boolean`

Add all PortalScripts with the desired name pattern to the XMLExport.

Note: The XML files exported in DOCUMENTS 6.0 format are incompatible with DOCUMENTS 5.0.

Since: DOCUMENTS 6.0 (default format is 6.0)

**Parameters:**

- `namePattern`: `string` — The name pattern of the PortalScripts to be added to the XML output.
- `format`: `string` — Default: "6.0". Optional String value defining the desired export format. The following formats are available:

5.0 (DOCUMENTS 5.0)
6.0 (DOCUMENTS 6.0)

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var path = "C:\\temp\\expPortalScript.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addPortalScript("test*", "6.0");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addPortalScriptCall

`addPortalScriptCall(nameScript: string): boolean`

Defines a PortalScript, that will be executed after the XML-import.

This method does not export the content of a PortalScript (see XMLExport.addPortalScript()), but executes a PortalScript at the end of the XML-Import of the whole xml file.

**Parameters:**

- `nameScript`: `string` — The name of the PortalScript, that should be executed.

**Returns:** boolean

**Since:** DOCUMENTS 5.0c HF1


```ts
var path = "C:\\temp\\expPortalScript.xml";
var xmlExp = new XMLExport(path, false);
...
var success = xmlExp.addPortalScriptCall("updateSolution");
...
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addPortalScriptsFromCategory

`addPortalScriptsFromCategory(nameCategory?: string, format?: string): boolean`

Add all PortalScripts belonging to the specified category to the XMLExport.

Note: The XML files exported in DOCUMENTS 6.0 format are incompatible with DOCUMENTS 5.0.

Since: DOCUMENTS 5.0h (Parameter nameCategory is optional) Since: DOCUMENTS 6.0 (default format is 6.0)

**Parameters:**

- `nameCategory`: `string` — Optional category name of the PortalScripts to be added to the XML output. If no category name is specified, then all scripts that are NOT assigned to a category are exported.
- `format`: `string` — Default: "6.0". Optional String value defining the desired export format. The following formats are available:

5.0 (DOCUMENTS 5.0)
6.0 (DOCUMENTS 6.0)

**Returns:** boolean

**Since:** DOCUMENTS 4.0d HF1


```ts
var path = "C:\\temp\\expPortalScript.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addPortalScriptsFromCategory("testScripts", "6.0");
if (success)
   xmlExp.saveXML();
else
   util.out(xmlExp.getLastError());
```


### addSystemUser

`addSystemUser(systemUser: any, includePrivateFolders?: boolean): boolean`

Add the desired SystemUser (user account or fellow) to the XMLExport.

**Parameters:**

- `systemUser`: `any` — The SystemUser to be added to the XML output and specified as follows:

String containing the login name of the SystemUser.
SystemUser object representing the user account.
- `includePrivateFolders`: `boolean` — Default: true. boolean value indicating whether to export the private folders of the SystemUser

**Returns:** boolean

**Since:** DOCUMENTS 5.0 HF2


```ts
var path = "C:\\temp\\expSystemUser.xml";
var xmlExp = new XMLExport(path, false);
var success = xmlExp.addSystemUser("login1");
if (success)
 xmlExp.saveXML();
else
 util.out(xmlExp.getLastError());
```


### addWorkflow

`addWorkflow(workflowName: string): boolean`

Add the desired workflow to the XMLExport.

**Parameters:**

- `workflowName`: `string` — String containing the technical name and optional the version number of the workflow to be added to the XML output. The format of the workflowName is technicalName[-version]. If you don't specify the version of the workflow, the workflow with the highest workflow version number will be used. If you want to add a specific version, you have to use technicalName-version e.g. "Invoice-2" as workflowName.

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var path = "C:\\temp\\expWorkflow.xml";
var xmlExp = new XMLExport(path, false);
xmlExp.addWorkflow("Invoice"); // add the latest version of the workflow "Invoice"
xmlExp.addWorkflow("Invoice-2"); // add the version 2 of the workflow "Invoice"
xmlExp.saveXML();
```


### clearXML

`clearXML(): boolean`

Remove all references to DocFile objects from the XMLExport object.

After the execution of this method the XMLExport object is in the same state as right after its construction.

**Returns:** boolean

**Since:** ELC 3.51b / otrisPORTAL 5.1b


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** ELC 3.51b / otrisPORTAL 5.1b

**See:** DocFile.getLastError


### getXML

`getXML(): string`

Retrieve the XML structure of the DocFile objects already added to the XMLExport.

The XML structure is returned as a String, so it is possible to further manipulate it (e.g. with the E4X scripting extension (not discussed in this documentation) before outputting it to its final destination.

**Returns:** string

**Since:** ELC 3.51b / otrisPORTAL 5.1b


### saveXML

`saveXML(): boolean`

Performs the final save process of the XML structure.

Not earlier than when executing this instruction the XML file is created in the target file path.

**Returns:** boolean

**Since:** ELC 3.51b / otrisPORTAL 5.1b


## Constructors


### constructor

`new XMLExport(pathFileName: string, exportDocFile?: boolean): XMLExport`

Create a new instance of the XMLExport class.

The constructor is neccessary to initialize the XMLExport object with some basic settings. The pathFileName parameter is mandatory, the path must be an existing directory structure, and the target file should not yet exist in that directory structure.

Since: ELC 3.51b / otrisPORTAL 5.1b available for DocFile Since: DOCUMENTS 4.0c (new parameter exportDocFile)

**Parameters:**

- `pathFileName`: `string` — String containing full path and file name of the desired target output XML file
- `exportDocFile`: `boolean` — Default: true. Optional boolean value:

true indicating that the created XMLExport instance is only able to export DocFile objects;
false indicating the created XMLExport instance is able to export the following elements:
PortalScript
Filetype
Folder
Workflow
Distribution List
Editor (Fellow)
AccessProfile
Alias
Filing Plan
Outbar
DocumentsSettings
CustomProperties

**Returns:** XMLExport

**Since:** ELC 3.51b / otrisPORTAL 5.1b


```ts
var f = context.file;
if (f)
{
   // create a new XMLExport
   var xml = new XMLExport("c:\\tmp\\" + f.getAutoText("id") + ".xml");
   xml.addFile(f); // add the current file to the export
   xml.saveXML(); // perform the export operation
   var xmlString = xml.getXML(); // get XML as String for further use
   xml.clearXML(); // empty XMLExport object
}
```