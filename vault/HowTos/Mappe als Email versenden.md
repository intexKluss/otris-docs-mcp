---
title: "Mappe als Email versenden"
source: "https://otris.software/documents/howto/email/send-file-as-email.html"
---

# Mappe als Email versenden

Seit der Version `5.0h` gibt es die Möglichkeit den
**Mappe als E-Mail versenden**-Dialog über *Callbacks* noch weiter anzupassen.
Im Folgenden werden einmal alle bisherigen und neuen Möglichkeiten
der Anpassung anhand von Beispielen erläutert.


## Eigenschaften

**Eigenschaften**, mit denen der Dialog zusätzlich angepasst werden kann:


### sendEmailAsHTML

Wenn diese Eigenschaft aktiviert ist, wird anstatt eines Textfeldes zum
Bearbeiten des Emailtextes ein HTML-Feld angezeigt. Der dort genutzte
[WYSIWYG-Editor Quill](https://quilljs.com/) kann über den
User-Exit `FileEmail.beforeOpen` weiter konfiguriert werden.


### fileEmailAutoCompleteConfig

Über diese Eigenschaft kann ein *Autocomplete*-Funktionalität auf den
Dialogfeldern `An`, `CC` und `BCC` aktiviert werden.


```json
// Beispiel für den Wert der Eigenschaft fileEmailAutoCompleteConfig
{
  "scriptName" : "MyAutoCompleteScript",
  "minQueryChars" : 2,
  "queryDelay" : 0.5,
  "maxResults" : 25
}
```

// Beispiel für den Wert der Eigenschaft fileEmailAutoCompleteConfig
{
  "scriptName" : "MyAutoCompleteScript",
  "minQueryChars" : 2,
  "queryDelay" : 0.5,
  "maxResults" : 25
}
```javascript
// Skript: MyAutoCompleteScript
var retval = [];

var fileType = "crmContact";
var filter = "crmName~" + query;
var sortOrder = "";
var myFRS = new FileResultset(fileType, filter, sortOrder);

for (var myFile = myFRS.first(); myFile; myFile = myFRS.next())
{
    retval.push({
        label: myFile.crmFirstName + " " + myFile.crmName,
        value: myFile.crmEmail
    })
}

return JSON.stringify(retval);
```

// Skript: MyAutoCompleteScript
var retval = [];

var fileType = "crmContact";
var filter = "crmName~" + query;
var sortOrder = "";
var myFRS = new FileResultset(fileType, filter, sortOrder);

for (var myFile = myFRS.first(); myFile; myFile = myFRS.next())
{
    retval.push({
        label: myFile.crmFirstName + " " + myFile.crmName,
        value: myFile.crmEmail
    })
}

return JSON.stringify(retval);
### emailGadgetConfig

Über diese Eigenschaft am Mappentyp kann eine **GadgetConfig** angegeben werden.
Diese sorgt dafür, dass neben den Email-Feldern ein Button angezeigt wird,
welcher das Gadget startet (siehe auch ``FileEmail.recipients`).
Über dieses Gadget können dann z.B. die Felder mit Emailadressen gefüllt werden.

Beispielgadget:


```json
{
  "gadgetScript": "Gadget_SampleFileEmailDialog",
  "gadgetAction": "gadgetUserExit",
  "gadgetDestination": "dialog"
}
```

{
  "gadgetScript": "Gadget_SampleFileEmailDialog",
  "gadgetAction": "gadgetUserExit",
  "gadgetDestination": "dialog"
}
```javascript
const scriptListAPI = require("otris.scriptlist");
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("gadgetUserExit", (gadgetContext) => {

  var list = new scriptListAPI.List("Kontakte");
      list.setStartIndex(0);

  // Creating the list columns
  list.addColumn("Vorname", "Vorname");
  list.addColumn("Nachname", "Nachname");
  list.addColumn("Email", "Email");

  // Fill the list with data
  var fileType = "crmContact";
  var sortOrder = "";
  var myFRS = new FileResultset(fileType, "", sortOrder);

  for (var myF = myFRS.first(); myF; myF = myFRS.next()) {
    list.addRow(myF.crmEmail, [myF.crmFirstName, myF.crmName, myF.crmEmail]);
  }

  list.setOnRowClick(function (dc, options) {
    var cdata = dc.getGadgetContext().getContextData();
    var dlgContext = documents.sdk.dialogRegistry.getDialogContext("FileEmail");

    dlgContext.getModel().set(cdata.fieldName, options.row.get("Email"));

    setTimeout(function() {
      dc.closeGadget();
    });

  });
  list.endList();

  var slw = gadgetAPI.getScriptListWrapperInstance();
  slw.addScriptList(list);
  var fieldConfig = JSON.parse(gadgetContext.gadgetParams.formFieldsJSON);

  slw.setContextData({
    fieldName: gadgetContext.gadgetParams.fieldName,
    fieldConfig: fieldConfig
  });

  slw.addClientFunction(function onCancel() {
    documentsContext.closeGadget();
  })

  slw.addContainerButton({
    id: "cancel",
    label: "Abbrechen",
    clickFunction: "onCancel"
  })

  return slw;
});
context.returnValue = gadgetAPI.transfer();
```

const scriptListAPI = require("otris.scriptlist");
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("gadgetUserExit", (gadgetContext) => {

  var list = new scriptListAPI.List("Kontakte");
      list.setStartIndex(0);

  // Creating the list columns
  list.addColumn("Vorname", "Vorname");
  list.addColumn("Nachname", "Nachname");
  list.addColumn("Email", "Email");

  // Fill the list with data
  var fileType = "crmContact";
  var sortOrder = "";
  var myFRS = new FileResultset(fileType, "", sortOrder);

  for (var myF = myFRS.first(); myF; myF = myFRS.next()) {
    list.addRow(myF.crmEmail, [myF.crmFirstName, myF.crmName, myF.crmEmail]);
  }

  list.setOnRowClick(function (dc, options) {
    var cdata = dc.getGadgetContext().getContextData();
    var dlgContext = documents.sdk.dialogRegistry.getDialogContext("FileEmail");

    dlgContext.getModel().set(cdata.fieldName, options.row.get("Email"));

    setTimeout(function() {
      dc.closeGadget();
    });

  });
  list.endList();

  var slw = gadgetAPI.getScriptListWrapperInstance();
  slw.addScriptList(list);
  var fieldConfig = JSON.parse(gadgetContext.gadgetParams.formFieldsJSON);

  slw.setContextData({
    fieldName: gadgetContext.gadgetParams.fieldName,
    fieldConfig: fieldConfig
  });

  slw.addClientFunction(function onCancel() {
    documentsContext.closeGadget();
  })

  slw.addContainerButton({
    id: "cancel",
    label: "Abbrechen",
    clickFunction: "onCancel"
  })

  return slw;
});
context.returnValue = gadgetAPI.transfer();
## User-Exits

Die folgenden drei *Callbacks* stehen zur Anpassung zur Verfügung:


### FileEmail.beforeOpen

Über diesen User-Exit kann der Dialog bearbeitet werden, bevor er geöffnet wird.
Des Weiteren können auch Einstellungen am [WYSIWYG-Editor Quill](https://quilljs.com/) vorgenommen werden.
Weitere Hinweise zur Konfiguration von HTML-Feldern können folgendem HowTo entnommen werden: [Toolar für HTML-Felder anpassen](../common/toolbar-html-fields.html).


```javascript
documents.sdk.exitRegistry.registerFileExitCallback("*", "FileEmail.beforeOpen", function (dc, options) {
  options.dialogSize.width = 800;
  options.editorConfig.quill = {
    "theme": "snow",
    "modules": {
      "toolbar": [
        ["bold", "italic", "underline"],
        [{ "list": "ordered"}, { "list": "bullet" }],
        [{ "color": [] }, { "background": [] }],
      ]
    }
  };
});
```

documents.sdk.exitRegistry.registerFileExitCallback("*", "FileEmail.beforeOpen", function (dc, options) {
  options.dialogSize.width = 800;
  options.editorConfig.quill = {
    "theme": "snow",
    "modules": {
      "toolbar": [
        ["bold", "italic", "underline"],
        [{ "list": "ordered"}, { "list": "bullet" }],
        [{ "color": [] }, { "background": [] }],
      ]
    }
  };
});
### FileEmail.beforeSend

Über diesen User-Exit können Daten manipuliert werden,
bevor die Email abgeschickt wird.


```javascript
documents.sdk.exitRegistry.registerFileExitCallback("*", "FileEmail.beforeSend", function(dc, options) {
  var bdy = "</body>",
      text = "<p>Gesendet mit DOCUMENTS.</p>";
  options.data.body = options.data.body.replace(bdy, txt + bdy);
});
```

documents.sdk.exitRegistry.registerFileExitCallback("*", "FileEmail.beforeSend", function(dc, options) {
  var bdy = "
		<script>window.OTRIS_PATH_PREFIX = "../../";</script>
		<script src="../../assets/scripts/headroom.min.js?h=20260213-112036"></script>
		<script src="../../assets/scripts/autocomplete.min.js?h=20260213-112036"></script>
		<script src="../../assets/scripts/clipboard.min.js?h=20260213-112036"></script>
		<script src="../../assets/scripts/notyf.min.js?h=20260213-112036"></script>
		<script src="../../assets/scripts/global-script.js?h=20260213-112036"></script>
	</body>",
      text = "<p>Gesendet mit DOCUMENTS.</p>";
  options.data.body = options.data.body.replace(bdy, txt + bdy);
});

### FileEmail.recipients

Wenn dieser User-Exit registriert ist, wird neben den Email-Feldern ein Button
angezeigt, welcher den Exit auslöst. Alternativ kann auch ein Gadget
eingebunden werden, diese wird über die Eigenschaft `emailGadgetConfig`
an der Mappe konfiguriert.


```javascript
documents.sdk.exitRegistry.registerFileExitCallback("*", "FileEmail.recipients", function(dc, options) {
  var title = "Empfänger",
      query = "?" + dc.getBaseParamsQueryString(),
      url = dc.encodeURL("./ext/jsp/email/table.jsp") + query;

  dc.openTableDataDialog(title, url, {
    width: 600,
    height: 400,
    popupWin: false,
    exitOptions: options
  });
});
```

documents.sdk.exitRegistry.registerFileExitCallback("*", "FileEmail.recipients", function(dc, options) {
  var title = "Empfänger",
      query = "?" + dc.getBaseParamsQueryString(),
      url = dc.encodeURL("./ext/jsp/email/table.jsp") + query;

  dc.openTableDataDialog(title, url, {
    width: 600,
    height: 400,
    popupWin: false,
    exitOptions: options
  });
});