---
title: "Gadget zur Auswahl von Referenzeinträgen"
source: "https://otris.software/documents/manuals/books/gadget/additional-examples/reference-field-gadget.html"
---

# Gadget zur Auswahl von Referenzeinträgen

Mit einem eigenen **Referenzfelddialog** kann eine Verknüpfung zu einer Mappe gesetzt werden.
Damit anstelle des Standard-Referenzdialogs ein eigenes Gadget genutzt wird, muss am Referenzfeld die folgende Eigenschaft gesetzt werden:


```javascript
referenceSelect = false
```

referenceSelect = false  Dadurch wird der standardmäßige Referenzbutton ausgeblendet.
Stattdessen wird am Referenzfeld der **Exit "Aktionsknopf neben Feld"** aktiviert,
und die folgende `gadgetConfig`-Eigenschaft hinterlegt:


```javascript
{
    gadgetScript: "<script>",
    gadgetAction: "<gadget-action>",
    gadgetId: "<gadget-id>"
}
```

{
    gadgetScript: "<script>",
    gadgetAction: "<gadget-action>",
    gadgetId: "<gadget-id>"
}  Im zugehörigen **Gadget-Skript** kann beispielsweise eine Skriptliste generiert werden,
die einen Button enthält, mit dem die Referenz anschließend gesetzt wird.


---


## Beispielkonfiguration & Downloads

📥 **Beispiel-Mappentyp für die Auswahl von Referenzen:**
[referenceFieldGadget.xml](../assets/samples/referenceFieldGadget.xml)

📥 **Verknüpfter Beispiel-Mappentyp:**
[referenceConnect.xml](../assets/samples/referenceConnect.xml)

📥 **Beispiel-Gadget-Skript:**
[Gadget_referenceField.js](../assets/samples/Gadget_referenceField.js)


```javascript
// Dynamischer Import der benötigten Module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptList = require("otris.scriptlist");

//  gadgetConfig: { gadgetScript: "Gadget_referenceField", gadgetAction: "showDialog", gadgetDialog: true, gadgetId: "gadgetReferenceFieldDialog" }
gadgetAPI.registerGadgetAction("showDialog", (gadgetContext) => {
    const docFile = context.getFileById(gadgetContext.fileId);
    const list = new scriptList.List(
        context.getLocaleValue("de:Referenzfeld-Dialog;en:Reference Field Dialog")
    );
    const register = docFile.getRegisterByName("referenceConnect");

    const col1 = list.addColumn("title", context.getLocaleValue("de:Titel;en:Title"));
    const col2 = list.addColumn("conValue", "conValue");

    const fileResultSet = register.getFiles();
    for (let subFile = fileResultSet.first(); subFile; subFile = fileResultSet.next()) {
        const subFileId = subFile.getAutoText("%id%");
        const row = list.addRow(subFileId, [
            subFile.getAutoText("%title%"),
            subFile.referenceLinkValue
        ]);
        row.setOnDoubleClick('documentsContext.getClientFunctions()["setReferenceField"]();');
    }

    list.setShowTitle(false);
    list.setShowSearchBox({ remoteSearch: false });
    list.endList();

    const wrapper = gadgetAPI.getScriptListWrapperInstance();
    wrapper.addScriptList(list);
    wrapper.setTitle(
        context.getLocaleValue("de:Gadget Referenzfeld-Dialog;en:Gadget Reference Field Dialog")
    );

    wrapper.addClientFunction(function clearReferenceField() {
        const fileContext = documentsContext.getFileContext();
        fileContext.setFileFieldReference("referenceField", null);
        documentsContext.closeDialog();
    });
    wrapper.addContainerButton({
        id: "clear",
        label: context.getLocaleValue("de:Eintrag löschen;en:Clear Entry"),
        clickFunction: "clearReferenceField"
    });

    wrapper.addClientFunction(function setReferenceField() {
        const dobyGrid = documentsContext.getGadgetContext().getClientObject();
        const activeRow = dobyGrid.active &&
            (dobyGrid.active.row !== undefined) &&
            dobyGrid.getRowFromIndex(dobyGrid.active.row);

        if (activeRow) {
            const fileContext = documentsContext.getFileContext();
            fileContext.setFileFieldReference("referenceField", activeRow.get("id"));
            documentsContext.closeDialog();
        }
    }, "setReferenceField");
    wrapper.addContainerButton({
        id: "ok",
        label: context.getLocaleValue("de:OK;en:OK"),
        clickFunction: "setReferenceField"
    });

    wrapper.addClientFunction(function cancel() {
        documentsContext.closeDialog();
    }, "cancel");
    wrapper.addContainerButton({
        id: "cancel",
        label: context.getLocaleValue("de:Abbrechen;en:Cancel"),
        clickFunction: "cancel"
    });

    return wrapper;
});

context.returnValue = gadgetAPI.transfer();
```

// Dynamischer Import der benötigten Module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptList = require("otris.scriptlist");

//  gadgetConfig: { gadgetScript: "Gadget_referenceField", gadgetAction: "showDialog", gadgetDialog: true, gadgetId: "gadgetReferenceFieldDialog" }
gadgetAPI.registerGadgetAction("showDialog", (gadgetContext) => {
    const docFile = context.getFileById(gadgetContext.fileId);
    const list = new scriptList.List(
        context.getLocaleValue("de:Referenzfeld-Dialog;en:Reference Field Dialog")
    );
    const register = docFile.getRegisterByName("referenceConnect");

    const col1 = list.addColumn("title", context.getLocaleValue("de:Titel;en:Title"));
    const col2 = list.addColumn("conValue", "conValue");

    const fileResultSet = register.getFiles();
    for (let subFile = fileResultSet.first(); subFile; subFile = fileResultSet.next()) {
        const subFileId = subFile.getAutoText("%id%");
        const row = list.addRow(subFileId, [
            subFile.getAutoText("%title%"),
            subFile.referenceLinkValue
        ]);
        row.setOnDoubleClick('documentsContext.getClientFunctions()["setReferenceField"]();');
    }

    list.setShowTitle(false);
    list.setShowSearchBox({ remoteSearch: false });
    list.endList();

    const wrapper = gadgetAPI.getScriptListWrapperInstance();
    wrapper.addScriptList(list);
    wrapper.setTitle(
        context.getLocaleValue("de:Gadget Referenzfeld-Dialog;en:Gadget Reference Field Dialog")
    );

    wrapper.addClientFunction(function clearReferenceField() {
        const fileContext = documentsContext.getFileContext();
        fileContext.setFileFieldReference("referenceField", null);
        documentsContext.closeDialog();
    });
    wrapper.addContainerButton({
        id: "clear",
        label: context.getLocaleValue("de:Eintrag löschen;en:Clear Entry"),
        clickFunction: "clearReferenceField"
    });

    wrapper.addClientFunction(function setReferenceField() {
        const dobyGrid = documentsContext.getGadgetContext().getClientObject();
        const activeRow = dobyGrid.active &&
            (dobyGrid.active.row !== undefined) &&
            dobyGrid.getRowFromIndex(dobyGrid.active.row);

        if (activeRow) {
            const fileContext = documentsContext.getFileContext();
            fileContext.setFileFieldReference("referenceField", activeRow.get("id"));
            documentsContext.closeDialog();
        }
    }, "setReferenceField");
    wrapper.addContainerButton({
        id: "ok",
        label: context.getLocaleValue("de:OK;en:OK"),
        clickFunction: "setReferenceField"
    });

    wrapper.addClientFunction(function cancel() {
        documentsContext.closeDialog();
    }, "cancel");
    wrapper.addContainerButton({
        id: "cancel",
        label: context.getLocaleValue("de:Abbrechen;en:Cancel"),
        clickFunction: "cancel"
    });

    return wrapper;
});

context.returnValue = gadgetAPI.transfer();