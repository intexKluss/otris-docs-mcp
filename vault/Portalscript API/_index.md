---
title: "Portalscript API"
source: "https://otris.software/documents/api/portalscript/"
---

# Portalscript API


# Portalscript API


## Introduction

The DOCUMENTS Server supports an embedded scripting language called PortalScript and is an extension to JavaScript.
In DOCMENTS 5 the Mozilla JavaScript engine SpiderMonkey 24 is used and implements ECMAScript 5.1 and parts of ECMAScript 6.
Since DOCUMENTS 6 the Chrome JavaScript Engine V8 is embedded. DOCUMENTS 6 uses the same V8 engine as Nodes.js.
Currently is this Node.js v18.15.0 (LTS) / V8 10.2.

**Import**

- There are some breaking changes in PortalScripting between Documents 5 and Documents 6. For details check our documentation portal https://otris.software

**Notes**

- The PortalScripting API environment is only available in fully activated DOCUMENTS licenses, it cannot be used inside pure retrieval principals (EasyWEB principals).
- A history of the PortalScripting API can be found at the Changelog
- For Documents 5 see also Firefox JavaScript
- For Documents 6 see also https://V8.dev


### Script Exits

The PortalScripting allows to widely customize the behaviour of your system.
For this purpose, PortalScripts (JavaScript files that use PortalScripting) can be
called at special points in the system. These points are called **Script Exits**.
To use this feature, you can simply create a PortalScript and attach it to one
of the Script Exits. You'll find the Script Exits in the DOCUMENTS Manager.

You can find the entire list and documentation in chapter [[Portalscript API/documents/script-exits|Script Exits]].
The following list just shows a small overview:

- Common file actions like
creating new files
activating the edit mode of a file
saving a file (both before and after)
archiving a file
deleting a file
- User defined actions attached to filetypes or folders
- As a signal exit shape within workflows
- Using actions to set field values in workflows
- Definitions of the enumeration values using an enumeration-type field
- Script-execution at user login


### Features

PortalScripts may also be used to implement special requirements in DOCUMENTS, such as:

- Dropdown lists which enumeration values depend on another field's value
- Access an external database to fill dropdown lists or field values
- Complex guard-conditions that can't be defined in a simple term
- Calculate data
- Create reports
- Access to xml-data with integrated DOMParser
E4X is removed from DOCUMENTS since 5.0!
See example
- Realization of daily housekeeping jobs
- Call external DLLs to trigger third-party systems

The PortalScript runtime environment grants access to a couple of properties of files or fields.
You can also read out named constants (AutoTexts) like the current user or the name of the current workflow step.
Prerequisites to implement PortalScripts are at least basic skills in general JavaScript programming and knowledge of
classes, objects and properties allocated by the DOCUMENTS scripting interface (PortalScripting API).


### Classes and Predefined Objects

In the following list you will find a small overview of all available classes and predefined objects.
Predefined objects are explained in a contextual usage (i.e. when editing a file, fill a dropdown list etc.).

Predefined objects:

- Context (implicit object) - root object which refers to DOCUMENTS objects via PortalScript (i.e. file, folder).
- Util (implicit object) - global object, providing several utility functions.
- PropertyCache - this class makes it possible to store / cache data over the end of the run time of a script.
- enumval (implicit array) - Definition of enumeration values using a script.

Some classes and interfaces:

- AccessProfile / AccessProfileIterator - represents an access profile (group)
- SystemUser / SystemUserIterator - represents DOCUMENTS Users
- CustomProperty / CustomPropertyIterator - represents a class for storing user specific properties
- FileResultset - represents a list of DOCUMENTS files
- ArchiveFileResultset - represents a list of archive files
- Folder / FolderIterator - this class grants access to all kinds of (public) folders
- HitResultset / DocHit - classes allow comprehensive search operations in Documents and in connected archives.
- DocFile - represents a certain file of a filetype
- ArchivingDescription - class to specify archiving option for a DocFile
- Register / RegisterIterator - represents a (public) folder of a file
- Document / DocumentIterator - represents a certain document that is stored on a document register of a file
- WorkflowStep / WorkflowStepIterator - represents a workflow step
- ControlFlow / ControlFlowIterator - represents the controlflows in the workflow-engine
- DOMParser - provides basic methods to parse or synthesize XML documents using the DOM.
- DOMDocument - represents the root of a DOM tree.
- DOMNode - the base class of all tree elements in a DOMDocument.
- DOMNodeList - a dynamic, ordered list of DOMNodes.
- DOMNamedNodeMap - a kind of index for a set of DOMNodes, in which each node has got a unique name.
- DOMElement - represents a HTML or XML element in the DOM.
- DOMCharacterData - represents text-like nodes in the DOM tree.
- DOMAttr - this class models a single attribute of a DOMElement.
- DOMDocumentType - a container for %Document Type Declaration (DTD) information associated with a DOMDocument.
- DOMProcessingInstruction - represents a processing instruction node in the DOM tree.
- DOMEntity - represents either an entity in an XML document or a notation in a DTD.
- DOMException - represents DOMExceptions thrown by the DOM API functions.
- File - class granting access to the physical file system of the machine running the DOCUMENTS-Server
- DBConnection / DBResultSet - These classes grant access to ODBC data sources and databases
- XMLExport / XMLExportDescription - classes to specify XML-export options to Documents elements.
- ScriptCall - this class allows asynchronous calling a script from another script.
- Email - this class allows to create and send an email.
- XMLHTTPRequest - represents a HTTP request using XML in Windows.
- XLSXWriter - allows creating files in the Excel 2007+ XLSX file format.
- XLSXWorksheet - represents the Excel worksheet.
- XLSXChartsheet - represents the Excel chartsheet.
- XLSXFormat - allows formatting cells in Excel.
- XLSXChart - allows creating an Excel chart.
- XLSXChartSeries - represents the Excel chart data series.
- XLSXChartAxis - represents the Excel chart axis.