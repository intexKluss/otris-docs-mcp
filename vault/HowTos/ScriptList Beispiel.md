---
title: "Beispiel ScriptList"
source: "https://otris.software/documents/howto/list/example-scriptlist.html"
---

# Beispiel ScriptList


```javascript
const scriptListAPI = require("otris.scriptlist");

// Create a new ScriptList
var i=0, listRow, list = new scriptListAPI.List("ScriptList Example");

// Activate the search using the global search field
list.setSearchContext({name:"Beispiel ScriptList", remoteSearch : true});

// Add two actions displayed as buttons in the ScriptList toolbar
list.addAction({name:"sum", label:"Summe", action:"runScript:SL_Summary", type:"button"});
list.addAction({name:"check", label:"Überprüfen", action:"runScript:SL_Check", type:"button"});

// Show the checkboxes for multiselect
list.setShowCheckboxes(true);

// Add the data columns
list.addColumn("vorname", "Vorname", "STRING");
list.addColumn("nachname", "Nachname", "STRING");
list.addColumn("adresse", "Adresse", "STRING");

// Show details in ScriptList and set the PortalScript for this action
list.setShowDetailsColumn(true);
list.setDetailsScriptName("SL_Details");

// if parameter searchExpression is defined entries must be filtered
for (i=0; i<10; i+=1) {
    // Add row (setting id and row model)
    listRow = list.addRow(i, {
        vorname: "Vorname " + i,
        nachname: "Nachname " + i,
        adresse: "Adresse "+ i
    });
    listRow.setDetailsParams({id: i});
    // other possible values: showFile:fileId or showFolder:folderId
    listRow.setAction("runScript:SL_Action&id=" + i);
}

// Mark this list object to contain the last entries of the total list.
list.endList();

// Set the correct returnType and transfer the list to the client
context.returnType = "scriptList";
context.returnValue = list.transfer();
```

const scriptListAPI = require("otris.scriptlist");

// Create a new ScriptList
var i=0, listRow, list = new scriptListAPI.List("ScriptList Example");

// Activate the search using the global search field
list.setSearchContext({name:"Beispiel ScriptList", remoteSearch : true});

// Add two actions displayed as buttons in the ScriptList toolbar
list.addAction({name:"sum", label:"Summe", action:"runScript:SL_Summary", type:"button"});
list.addAction({name:"check", label:"Überprüfen", action:"runScript:SL_Check", type:"button"});

// Show the checkboxes for multiselect
list.setShowCheckboxes(true);

// Add the data columns
list.addColumn("vorname", "Vorname", "STRING");
list.addColumn("nachname", "Nachname", "STRING");
list.addColumn("adresse", "Adresse", "STRING");

// Show details in ScriptList and set the PortalScript for this action
list.setShowDetailsColumn(true);
list.setDetailsScriptName("SL_Details");

// if parameter searchExpression is defined entries must be filtered
for (i=0; i<10; i+=1) {
    // Add row (setting id and row model)
    listRow = list.addRow(i, {
        vorname: "Vorname " + i,
        nachname: "Nachname " + i,
        adresse: "Adresse "+ i
    });
    listRow.setDetailsParams({id: i});
    // other possible values: showFile:fileId or showFolder:folderId
    listRow.setAction("runScript:SL_Action&id=" + i);
}

// Mark this list object to contain the last entries of the total list.
list.endList();

// Set the correct returnType and transfer the list to the client
context.returnType = "scriptList";
context.returnValue = list.transfer();