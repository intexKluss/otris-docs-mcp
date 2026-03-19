---
title: "Gentable-Gadget"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/gentable.html"
---

# Gentable-Gadget

Das Gentable-Gadget ermöglicht die Nutzung einer Gentable als funktionales Gadget als Alternative zur Nutzung einer Gentable als "Invoice-Plugin". Dazu wird eine Instanz der Klasse [[Gadget API/otris.gadget.gui.Gentable]] konfiguriert und als Ergebnis des Gadgets zurückgegeben.

Mit einer Gentable können tabellarische und positionsbezogene Daten benutzerdefiniert dargestellt, bearbeitet und gespeichert werden. Zudem können externe Daten aus relationalen Datenbanken integriert und angepasst werden.


## Wesentliche Merkmale

- Um eine Gentable als Gadget zu verwenden, muss eine eigene gadgetAction mit dem Namen gentableDefinition registriert werden.
- Die Gentable-Definition wird im typischen Gentable-XML-Format strukturiert. Gentable-Dokumentationen


![Gentable-Gadget Beispiel](../assets/img/dOS_relations_gentableGadget_view.png)

Abb. 93 - Gentable-Gadget als Artikelliste einer Mappe im Feldregister


## Gentable definieren und registrieren

Zur Nutzung einer Gentable als Gadget wird eine `gadgetAction` mit dem Namen `gentableDefinition` registriert, in der die Tabelle als Gentable-Definition im typischen XML-Format strukturiert wird.

- <table_def name="name"> - der technische Name der Tabelle
Dieser wird u.a. zur Zuweisung der Callbacks benötigt.
- <xmlfield>hiddenTextField</xmlfield> - technischer Name des Speicherortes
Der technische Name des unsichtbaren Textfeldes am Mappentyp zur dynamischen Speicherung der Tabellenwerte.

Ein umfangreiches XML-Beispiel ist im Abschnitt Gentable-XML-Definition in Globaler Eigenschaft als Download zu finden.

Für die XML-Struktur stehen bereits folgende Tabellen-Funktionalitäten (Callbacks) bereit, die im <function>-Tag verwendet werden können: `appendNewRow`, `cloneRow`, `deleteRow`, `moveUpRow` und `moveDownRow`.


```xml
<button>
  <label>de:Neue Zeile;en:New row</label>
  <function>appendNewRow</function>
</button>
```

<button>
  <label>de:Neue Zeile;en:New row</label>
  <function>appendNewRow</function>
</button>Eigene Funktionen `<function>myFunction</function>`
und Events `<event type="onclick">myOnClickEvent</event>` müssen in der Gentable-Registry registriert werden, um als Callback verwendet zu werden. ( [[Client SDK/documents.sdk.gentable.gentableRegistry#.registerCallback|.gentableRegistry.registerCallback(tableDefName, event, fn)]] )


```javascript
// Sample
documents.sdk.gentable.gentableRegistry.registerCallback("crmQuote", "setPosAmount", function (documentsContext, options) {
  const row = options.row;
  const grid = documentsContext.getGentableContext().getGridModel();
  row.set('total', calcRowTotal(row));
  setFileFieldsTotal(grid);
});
```

// Sample
documents.sdk.gentable.gentableRegistry.registerCallback("crmQuote", "setPosAmount", function (documentsContext, options) {
  const row = options.row;
  const grid = documentsContext.getGentableContext().getGridModel();
  row.set('total', calcRowTotal(row));
  setFileFieldsTotal(grid);
});Im relations Demo-Mandanten sind Beispiele für **Exits und Funktionen** im `crmQuote_gentableFunctions`-Skript zu finden:

Download: [crmQuote_gentableFunctions.js](../assets/samples/crmQuote_gentableFunctions.js)

In der XML-Definition kann an Feldern ein `<autocomplete>` mit einem Skript definiert werden.
**Konvention:** Der Skriptname des dafür implementierten Skripts endet auf `AutoComplete`


```xml
<field number="10">
  <label>de:Produktnr.;en:product code</label>
  <title>productno</title>
  <type>TEXT</type>
  <width>70</width>
  <editable>true</editable>
  <!-- setPosAmount = Callback, registered in Script crmQuote_gentableFunctions -->
  <event type="onChange">setPosAmount</event>
  <autoComplete>
    <!-- relations script crmQuote_gentableAutoComplete -->
    <scriptName>crmQuote_gentableAutoComplete</scriptName>
    <minQueryChars>2</minQueryChars>
    <queryDelay>0.5</queryDelay>
    <maxResults>25</maxResults>
    <autoFocusResult>false</autoFocusResult>
  </autoComplete>
</field>
```

<field number="10">
  <label>de:Produktnr.;en:product code</label>
  <title>productno</title>
  <type>TEXT</type>
  <width>70</width>
  <editable>true</editable>
  <!-- setPosAmount = Callback, registered in Script crmQuote_gentableFunctions -->
  <event type="onChange">setPosAmount</event>
  <autoComplete>
    <!-- relations script crmQuote_gentableAutoComplete -->
    <scriptName>crmQuote_gentableAutoComplete</scriptName>
    <minQueryChars>2</minQueryChars>
    <queryDelay>0.5</queryDelay>
    <maxResults>25</maxResults>
    <autoFocusResult>false</autoFocusResult>
  </autoComplete>
</field>Im `relations` Demo-Mandanten ist das **Autocomplete-Skript**`crmQuote_gentableAutoComplete` implementiert:

Download: [crmQuote_gentableAutoComplete.js](../assets/samples/crmQuote_gentableAutoComplete.js)


### Gentable-XML-Definition im Skript

Die XML-Definition der Gentable kann im Skript übergeben werden.


```javascript
// Enable required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// "gentableDefinition" is a mandatory name at this point
gadgetAPI.registerGadgetAction("gentableDefinition", function () {
  const gentableGadget = gadgetAPI.getGentableInstance();
  // xmlString defines the Table structure
  const xmlString =
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
    + "<table_def name=..."
    ...
    + "</table_def>"
  gentableGadget.setDefinition(xmlString); // Since 6.0.2 / 5.0i HF7
  return gentableGadget;
});
```

// Enable required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// "gentableDefinition" is a mandatory name at this point
gadgetAPI.registerGadgetAction("gentableDefinition", function () {
  const gentableGadget = gadgetAPI.getGentableInstance();
  // xmlString defines the Table structure
  const xmlString =
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
    + "<table_def name=..."
    ...
    + "</table_def>"
  gentableGadget.setDefinition(xmlString); // Since 6.0.2 / 5.0i HF7
  return gentableGadget;
});
### Gentable-XML-Definition in Globaler Eigenschaft

Die XML-Definition der Gentable kann als Globale Eigenschaft erstellt und gepflegt werden.

Im otris Demo-Mandanten `relations` wurde eine **Gentable-Definition**`crmQuote_Def` als gobale Eigenschaft zur Verwendung am Mappentyp `crmQuote`(Angebote) mit dem **Typ**: `gentableDefinition`  angelegt.

**Globale Eigenschaften:**
entweder  `AdminCenter -> Entwicklung -> Properties ->`
oder  `Manager -> Monitoring -> Globale Eigenschaften ->`
**Name** = crmQuote_Def; **Typ** = gentableDefinition
**Value** = *siehe Download crmQuote_Def.xml*

Download: [crmQuote_Def.xml](../assets/samples/crmQuote_Def.xml)

Mit der Methode **context.getCustomProperties()** der **Portalscript-API** kann die XML-Definition aus der Property abgerufen werden.

**gentableGadget.setDefinition(xmlString)** stellt der gadgetAPI-Instanz die Gentable-XML zur Verfügung.


```javascript
// Enable required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// "gentableDefinition" is a mandatory name at this point
gadgetAPI.registerGadgetAction("gentableDefinition", function () {
  const gentableGadget = gadgetAPI.getGentableInstance();
  // get definition from custom propery
  const customProp = context.getCustomProperties("crmQuote_Def", "gentableDefinition"); // : CustomPropertyIterator
  const customPropFirst = customProp.first();
  const xmlString = customPropFirst.value;
  gentableGadget.setDefinition(xmlString); // Since 6.0.2 / 5.0i HF7
  return gentableGadget;
});
```

// Enable required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// "gentableDefinition" is a mandatory name at this point
gadgetAPI.registerGadgetAction("gentableDefinition", function () {
  const gentableGadget = gadgetAPI.getGentableInstance();
  // get definition from custom propery
  const customProp = context.getCustomProperties("crmQuote_Def", "gentableDefinition"); // : CustomPropertyIterator
  const customPropFirst = customProp.first();
  const xmlString = customPropFirst.value;
  gentableGadget.setDefinition(xmlString); // Since 6.0.2 / 5.0i HF7
  return gentableGadget;
});
## Gentable als Gadget registrieren

In einem Skript (z.B. "`Gadget_Script`") wird

1. eine Gentable mit einer XML-Definition registriert
gadgetAPI.registerGadgetAction("gentableDefinition", function () {...} ,
2. mit dem Funktionsnamen der Funktion (z.B. "start_function") das Gadget implementiert
gadgetAPI.registerGadgetAction("start_function", function () {...}. in der die Gentable-Gadget Instanz gadgetAPI.getGentableInstance()konfiguriert wird.

Das Gadget wird über eine
**Eigenschaft** (z.B. `gadgetConfig`) und dem
**Wert**`{gadgetScript: 'Gadget_Script', gadgetAction:'start_function'}`
bereitgestellt.


## Einfaches Beispiel

**Gentable-Gadget als Mappen-Feld in Feldregister**
In diesem Beispiel wird ein Gentable-Gadget als [Mappen-Feld einer Mappe](../integration/integration-filetype.html#gadget-als-mappen-feld) konfiguriert. Dieses Feld wird einem Feldregister zugewiesen, wodurch das Gadget-Feld aus der Mappenansicht verschwindet und nur in seiner separaten Ansicht geändert werden kann.

Dieses Beispiel wird in die Struktur des **Demo-Mandanten relations** integriert.


![relations_gentable_sample.png](../assets/img/gadget-types/relations_gentable_sample.png)

Abb. 94 - Gentable-Gadget als Mappen-Feld in Feldregister


### Speicherort für die Daten

Für dieses Beispiel ist bereits ein **unsichtbares Textfeld** als Speicherort für die Daten der Gentable vorhanden, da die Gentable-XML mit der Eigenschaft `hasInvoicePlugin:true` als Gentable-Beispiel im Monitor integriert ist. Dieses Text-Feld übernimmt die Daten und ist mit seinem Namen `crmLineItemsJson` in die Gentable-XML `<xmlfield>crmLineItemsJson</xmlfield>` integriert.

Für eigene Implementierungen muss entsprechend am Mappentyp ein Feld mit **technischem Namen**, Typ: **Text**, Bezeichner: **ohne** für die Datenspeicherung hinzugefügt werden und mit dem technischen Namen der Gentable-XML hinzugefügt sein.


### Gadget-Feld am Mappentyp

Die Gadget-Konfiguration wird [am Mappen-Feld integriert.](../integration/integration-filetype.html#gadget-als-mappen-feld)

In diesem Beispiel wird das Feld mit den folgenden Werten angelegt:

- am Mappentyp: crmQuote (Angebot)
Name: gentableField
Bezeichner: de:Artikelliste;en:Items
Typ: Gadget
gadgetConfig: {gadgetScript: 'Gadget_gentable', gadgetAction:'gentable'}


### Feldregister

Das Gadget-Feld wird einem dafür am Mappentyp erstellten Feldregister zugewiesen.

Für das Beispiel wird das Register im Tab `Register` am Mappentyp mit den folgenden Werten erstellt:

- im Tab Register des neuen Registers
Name: registerFTname
Bezeichner: de:Artikelliste;en:Items
Typ: Feldregister
- im Tab Felder des neuen Registers
Feld hinzufügen: gentableField


### Das Gadget-Skript Gadget_gentable

Das folgende Skript wurde für das Beispiel dem Mandanten zur Verfügung gestellt.


```javascript
// Enable required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

const otrLogger = require("otrLogger");
const scriptName = context.scriptName;

try {
    // property: gadgetConfig
    // value: {gadgetScript: 'Gadget_gentable', gadgetAction:'gentable'}
    gadgetAPI.registerGadgetAction("gentable", function () {

        // Initialize as Gentable instance
        const gentable = gadgetAPI.getGentableInstance();

        // Required for visibility
        // Sets a style attribute of the HTML container
        gentable.setStyle("height", "600px");

        // Required for functionality
        // setDefinitionName is only for caching the definition,
        // not for the Gentable registry
        gentable.setDefinitionName("nameForCache");

        // For optional configuration methods,
        // see the otris.gadget.gui.Gentable documentation

        return gentable;
    });

    // Action that register the Gentable-XML-definition
    // ("gentableDefinition" is the predefined name for this)
    gadgetAPI.registerGadgetAction("gentableDefinition", function () {
        const gentableGadget = gadgetAPI.getGentableInstance();
        let xmlString = "";

        // Get definition from custom property
        const definitions = context.getCustomProperties("crmQuote_Def", "gentableDefinition");
        const gentableDefinition = definitions.first();

        // Use definition value if available
        if (gentableDefinition) {
            xmlString = gentableDefinition.value;
        }
        // .setDefinition() Since: 6.0.2 / 5.0i HF7
        gentableGadget.setDefinition(xmlString);

        return gentableGadget; //returns the xmlString.transfer() as an Object
    });
    context.returnValue = gadgetAPI.transfer();

} catch (err) {
    otrLogger.logError(scriptName, err);
    context.errorMessage = context.getLocaleValue("de:Das Gentable-Gadget konnte nicht geladen werden;en:The Gentable-Gadget could not be loaded.");
    return -1;
}
```

// Enable required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

const otrLogger = require("otrLogger");
const scriptName = context.scriptName;

try {
    // property: gadgetConfig
    // value: {gadgetScript: 'Gadget_gentable', gadgetAction:'gentable'}
    gadgetAPI.registerGadgetAction("gentable", function () {

        // Initialize as Gentable instance
        const gentable = gadgetAPI.getGentableInstance();

        // Required for visibility
        // Sets a style attribute of the HTML container
        gentable.setStyle("height", "600px");

        // Required for functionality
        // setDefinitionName is only for caching the definition,
        // not for the Gentable registry
        gentable.setDefinitionName("nameForCache");

        // For optional configuration methods,
        // see the otris.gadget.gui.Gentable documentation

        return gentable;
    });

    // Action that register the Gentable-XML-definition
    // ("gentableDefinition" is the predefined name for this)
    gadgetAPI.registerGadgetAction("gentableDefinition", function () {
        const gentableGadget = gadgetAPI.getGentableInstance();
        let xmlString = "";

        // Get definition from custom property
        const definitions = context.getCustomProperties("crmQuote_Def", "gentableDefinition");
        const gentableDefinition = definitions.first();

        // Use definition value if available
        if (gentableDefinition) {
            xmlString = gentableDefinition.value;
        }
        // .setDefinition() Since: 6.0.2 / 5.0i HF7
        gentableGadget.setDefinition(xmlString);

        return gentableGadget; //returns the xmlString.transfer() as an Object
    });
    context.returnValue = gadgetAPI.transfer();

} catch (err) {
    otrLogger.logError(scriptName, err);
    context.errorMessage = context.getLocaleValue("de:Das Gentable-Gadget konnte nicht geladen werden;en:The Gentable-Gadget could not be loaded.");
    return -1;
}
Download: [Gadget_gentable.js](../assets/samples/Gadget_gentable.js)


### Für das Beispiel notwendige Skripte

Die in diesem Beispiel benötigten und in der XML-Definition referenzierten Skripte gehören zur Gentable und werden unabhängig von ihrer Verwendung als Gadget implementiert.
Diese Skripte sind in den oberen Kapiteln verfügbar:

- Gadget_gentable.js = das Gadget-Skript
- crmQuote_Def.xml = XML-Definition der Gentable (Value der globalen Eigenschaft)
- crmQuote_gentableFunctions.js = Gentable-Funktionen und -Exits zur XML-Definition der Gentable
- crmQuote_gentableAutoComplete.js = AutoComplete für Felder in der XML-Definition der Gentable


## FAQ

**Q: Was tun, wenn die Implementierung nicht erfolgreich ist?**
**A:** Hinzufügen von `?cacheEvent=clearAll` an das Ende der URL.


## Links zur Gentable in der otris-Dokumentation

- Gentable Handbuch - Administration
- Gentable HowTo - Cell-Renderer
- Gentable HowTo - Cell-Editor
- Gentable HowTo - Sortierung für Spalten
- Gentable HowTo - Gentable über TableData befüllen
- Gentable HowTo - Gentable über Gadget-Skripliste befüllen
- Gentable HowTo - Zeilen zusammenfassen
- Gentable HowTo - postprocessCell
- Gentable HowTo - Gentabledaten per Skript speichern/laden
- Gentable HowTo - Zeilen und Zellen einfärben
- Gentable HowTo - Zusatzbereiche rendern