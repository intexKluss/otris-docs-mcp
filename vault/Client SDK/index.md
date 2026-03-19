---
title: "Documents Client SDK"
source: "https://otris.software/documents/api/client-sdk/index.html"
---

# DOCUMENTS Client SDK


## Version: 6.3.0, Copyright: 2016-2026 otris software AG

**Note:** The **Doby Grid** documentation is no longer available online. For this reason, you can view a copy
 of the documentation here: [Doby Grid Documentation](../dobygrid/) (Opens in a new tab/window)


### Examples for using the DOCUMENTS Client SDK


#### DocumentsContext

The universal interface for user-exits, gentable and gadgets. It includes opening of dialogs and navigation to folders, files, the extended search other etc. Additional interfaces are available via the UserContext, FileContext and the GentableContext.


#### UserContext

The UserContext provides access to information related to the current user like the used language, login name, accessProfiles and custom properties.


#### FileContext

The FileContext provides general information about a document, the possibility to execute scripts, control the edit mode and gives access to various GUI functions like get/set field values, change the color of fields, change the focus to a specific field etc.


```
documents.sdk.exitRegistry.registerFileFieldExitCallback("crmAccount", "crmCountry", function(documentsContext, options) {

  //get the FileContext
  var fileContext = documentsContext.getFileContext();
  //get the value of the field "crmCountry"
  var country = fileContext.getFileFieldValue("crmCountry");
  var scriptParams = {
    country : country
  };

  //execute the script "countryScript"
  var region = fileContext.executeScript("countryScript", scriptParams);

  //set the return of the script as options of a select menu
  fileContext.setFileFieldOptions("crmRegion", region, { 'keepSelected' : false });
});
```


#### GentableContext

The GentableContext provides full access to the [[Client SDK/documents.sdk.gentable.grid.GentableGridModel|GentableGridModel]], [[Client SDK/documents.sdk.gentable.grid.GentableGridColumnModel|GentableGridColumnModel]] and the [[Client SDK/documents.sdk.gentable.grid.GentableGridRowModel|GentableGridRowModel]]. It also provides basic functions like copyRow, moveRow and resetSelection.


#### ExtendedSearchContext

The ExtendedSearchContext provides access to the Extended Search Dialog and gives access to various GUI functions like get/set field values, change the color of fields, change the focus to a specific field etc.