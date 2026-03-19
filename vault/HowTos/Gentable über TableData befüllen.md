---
title: "Gentable über TableData befüllen"
source: "https://otris.software/documents/howto/gentable/gentableTabledata.html"
---

# Gentable über TableData befüllen

Die Zeilen im Gentable können auch über das TableData befüllt werden. Hierzu muss der Definitionsdatei ein Button hinzugefügt werden.


```xml
<table_def name="gentableTableData">
  ...
  <field number="1">
    <buttonLabel>de:TableData öffnen;en:Open TableData</buttonLabel>
    <title>tabledata</title>
    <type>BUTTON</type>
    <width>130</width>
    <editable>true</editable>
    <event type="onclick">showTableData</event>
  </field>
  ...
</table_def>
```

<table_def name="gentableTableData">
  ...
  <field number="1">
    <buttonLabel>de:TableData öffnen;en:Open TableData</buttonLabel>
    <title>tabledata</title>
    <type>BUTTON</type>
    <width>130</width>
    <editable>true</editable>
    <event type="onclick">showTableData</event>
  </field>
  ...
</table_def>Im onClickCallback für den Button kann man dann über die Documents Client SDK-Funktion
[[Client SDK/documents.sdk.DocumentsContext#openTableDataDialog|openTableDataDialog]] einen Dialog für die Auswahl der Daten aufzurufen.


```javascript
documents.sdk.gentable.gentableRegistry.registerCallback("gentableTableData", "showTableData", function(documentsContext, options) {

    var title = "Gentabledata",
        url = documentsContext.encodeURL("./ext/jsp/docfeat/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

    documentsContext.openTableDataDialog(title, url, {
         width: 1000, // Breite des anzuzeigenden Dialogs
         height: 400, // Höhe des anzuzeigenden Dialogs
         popupWin: false, // Zeigt das TableData entweder als internen Dialog oder als externes Popup Fenster an
         exitOptions: options // Muss als Parameter übergeben werden, damit der Dialog weiß auf welcher Zeile die Daten gesetzt werden sollen
    })
});
```

documents.sdk.gentable.gentableRegistry.registerCallback("gentableTableData", "showTableData", function(documentsContext, options) {

    var title = "Gentabledata",
        url = documentsContext.encodeURL("./ext/jsp/docfeat/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

    documentsContext.openTableDataDialog(title, url, {
         width: 1000, // Breite des anzuzeigenden Dialogs
         height: 400, // Höhe des anzuzeigenden Dialogs
         popupWin: false, // Zeigt das TableData entweder als internen Dialog oder als externes Popup Fenster an
         exitOptions: options // Muss als Parameter übergeben werden, damit der Dialog weiß auf welcher Zeile die Daten gesetzt werden sollen
    })
});Zur Anzeige des TableData können die Dateien Table.jsp, Detail.jsp und Error.jsp aus der Documents Installation kopiert und angepasst werden.


## Beispiel Definionsdatei zum Öffnen von Table-Data im Dialog oder externen Popup

Download: [gentableTableData_Def.xml](gentableTableData_Def.xml)


## Beispiel Skript zum Öffnen des Dialogs/Popups

Download: [gentableTableData.js](gentableTableData.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerCallback("gentableTableData", "showTableData", function(documentsContext, options) {

	var title = "Gentabledata",
	 	url = documentsContext.encodeURL("./ext/jsp/docfeat/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

	documentsContext.openTableDataDialog(title, url, {
	     width: 1000,
	     height: 400,
	     popupWin: false,
	     exitOptions: options
	 })
});

documents.sdk.gentable.gentableRegistry.registerCallback("gentableTableData", "showTableDataInPopupWindow", function(documentsContext, options) {

	var title = "Gentabledata",
	url = documentsContext.encodeURL("./ext/jsp/docfeat/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

	documentsContext.openTableDataDialog(title, url, {
		width: 1000,
		height: 400,
		popupWin: true,
		exitOptions: options
	});
});
```

documents.sdk.gentable.gentableRegistry.registerCallback("gentableTableData", "showTableData", function(documentsContext, options) {

	var title = "Gentabledata",
	 	url = documentsContext.encodeURL("./ext/jsp/docfeat/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

	documentsContext.openTableDataDialog(title, url, {
	     width: 1000,
	     height: 400,
	     popupWin: false,
	     exitOptions: options
	 })
});

documents.sdk.gentable.gentableRegistry.registerCallback("gentableTableData", "showTableDataInPopupWindow", function(documentsContext, options) {

	var title = "Gentabledata",
	url = documentsContext.encodeURL("./ext/jsp/docfeat/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

	documentsContext.openTableDataDialog(title, url, {
		width: 1000,
		height: 400,
		popupWin: true,
		exitOptions: options
	});
});