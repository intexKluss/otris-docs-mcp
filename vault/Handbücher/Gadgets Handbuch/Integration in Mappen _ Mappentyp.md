---
title: "Integrationsmöglichkeiten von Gadgets an Mappen"
source: "https://otris.software/documents/manuals/books/gadget/integration/integration-filetype.html"
---

# Integrationsmöglichkeiten von Gadgets an Mappen

Gadgets können am Mappentyp wie folgt integriert werden:

- In der Seiteleiste
- Als Mappendeckel
- Im Monitor
- Als Register einer Mappe
- Als benutzerdefinierte Aktion einer Mappe
- Als Mappen-Feld (Typ: Gadget)
- Als User-Exit an einem Mappen-Feld
- Als E-Mail-User-Exit an einem Mappentyp


## Integration von Gadgets in der Seitenleiste

Um ein Gadget in der Seitenleiste von Mappen verfügbar zu machen, wird die Eigenschaft `marginGadgetConfigs` dem Mappentyp hinzugefügt.
Bei der Eigenschaft `marginGadgetConfigs` ist, unabhängig von der Anzahl der eingebundenen Gadget-Konfigurationen, **immer ein Array** zu verwenden.
Dies kann über den **DOCUMENTS-Manager** oder ab documentsOS auch über das **AdminCenter** mit der aktivierten Erweiterung **Admin-Tools** erfolgen.

Zur Dokumentation wird das Skript `GadgetSample_Timeline_Status` dem Mandanten hinzugefügt.

Property-Name = marginGadgetConfigs
Property-Wert = [{"gadgetScript": "GadgetSample_Timeline_ExampleHistory", "gadgetAction": "show"}]

Download: [GadgetSample_Timeline_Status.js](../assets/samples/GadgetSample_Timeline_Status.js)


![dOS_sampleview_sidebar.png](../assets/img/integration/dOS_sampleview_sidebar.png)

Abb. 26 - Beispiel Gadget in der Seitenleiste


### Im Manager

Einrichtung über die **Anwendung** Documents-Manager:

- Mappentyp öffnen
Pfad: Documents -> Mappentypen
Aktion: den Mappentyp wählen
- Gadget-Konfiguration als Eigenschaft hinzufügen
Reiter Eigenschaften:
Aktion: rechte Maustaste
Auswahl: neue Eigenschaft hinzufügen
Name (Auswahl): marginGadgetConfigs
Wert: [{gadgetScript: 'GadgetSample_Timeline_ExampleHistory', gadgetAction: 'show'}]
Aktion: Button OK (2 Stück)

| Abb. 27 - im DOCUMENTS Manager am Mappentyp Eigenschaften öffnen | Abb. 28 - im DOCUMENTS Manager dem Mappentyp Eigenschaft hinzufügen |
| --- | --- |


### Im AdminCenter

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:

- Mappentyp öffnen Pfad: Administration -> Mappentypen
Aktion: den Mappentyp wählen
- Gadget-Konfiguration als Eigenschaft hinzufügen Reiter Eigenschaften:
Feld: Eigenschaften
Auswahl: marginGadgetConfigs
Wert: [{gadgetScript: 'GadgetSample_Timeline_ExampleHistory', gadgetAction: 'show'}]
Aktion: Button Speichern Abb. 29 - in den Admin Tools dem Mappentyp Eigenschaft hinzufügen


## Gadget als Mappendeckel

Ein Gadget kann mit der Eigenschaft `fileCoverGadgetConfig` am Mappentyp als Mappendeckel konfiguriert werden. Es überlagert im Lesemodus die Mappenansicht. Diese Ansicht verschwindet, sobald in den Bearbeitungsmodus gewechselt wird, und sie erscheint erneut, wenn die Änderungen erfolgreich gespeichert und der Bearbeitungsmodus verlassen wird. Die Sichtbarkeit des Monitorbereichs unterhalb der Mappe und die Seitenleiste werden dadurch nicht beeinflusst.
Die Konfiguration kann über den **DOCUMENTS-Manager** oder ab documentsOS auch über das **AdminCenter** mit der aktivierten Erweiterung **Admin-Tools** erfolgen.

Property-Name = fileCoverGadgetConfig
Property-Wert = {"gadgetScript": "GadgetSample_MyFileCoverGadget", "gadgetAction": "show"}


### Im Manager

Einrichtung über die **Anwendung** Documents-Manager:

- Mappentyp öffnen Pfad: Documents -> Mappentypen
Aktion: den Mappentyp wählen
- Gadget-Konfiguration als Eigenschaft hinzufügen Reiter Eigenschaften:
Aktion: rechte Maustaste
Auswahl: neue Eigenschaft hinzufügen
Name (Auswahl): fileCoverGadgetConfig
Wert: { gadgetScript: 'GadgetSample_MyFileCoverGadget', gadgetAction: 'showChart' }
Aktion: Button OK (2 Stück)
Abb. 30 - im DOCUMENTS Manager am Mappentyp Eigenschaften öffnen Abb. 31 - im DOCUMENTS Manager dem Mappentyp Eigenschaft hinzufügen


### Im AdminCenter

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:

- Mappentyp öffnen
Pfad: Administration -> Mappentypen
Aktion: den Mappentyp wählen
- Gadget-Konfiguration als Eigenschaft hinzufügen
Reiter Eigenschaften:
Feld: Eigenschaften
Auswahl: fileCoverGadgetConfig
Wert: { gadgetScript: 'GadgetSample_MyFileCoverGadget', gadgetAction: 'showChart' }
Aktion: Button Speichern


![dOS_admincenter_filecover.png](../assets/img/integration/dOS_admincenter_filecover.png)

Abb. 32 - in den Admin Tools dem Mappentyp Eigenschaft hinzufügen


## Gadgets im Monitor

Um ein Gadget im Monitor von Mappen (unterhalb einer angezeigten Mappe) verfügbar zu machen, wird die Eigenschaft `monitorGadgetConfig` dem Mappentyp hinzugefügt.
Dies kann über den **DOCUMENTS-Manager** oder ab documentsOS auch über das **AdminCenter** mit der aktivierten Erweiterung **Admin-Tools** erfolgen.

Zur Dokumentation wird das Skript `GadgetSample_Chart_Gadget` dem Mandanten hinzugefügt.

Property-Name = monitorGadgetConfig
Property-Wert = {"gadgetScript": "GadgetSample_Chart_Gadget", "gadgetAction": "showChart"}

Download: [GadgetSample_Chart_Gadget.js](../assets/samples/GadgetSample_Chart_Gadget.js)


![dOS_sampleview_monitor.png](../assets/img/integration/dOS_sampleview_monitor.png)

Abb. 33 - Beispiel Gadget in der Seitenleiste


### Im Manager

Einrichtung über die **Anwendung** Documents-Manager:

- Mappentyp öffnen
Pfad: Documents -> Mappentypen
Aktion: den Mappentyp wählen
- Gadget-Konfiguration als Eigenschaft hinzufügen
Reiter Eigenschaften:
Aktion: rechte Maustaste
Auswahl: neue Eigenschaft hinzufügen
Name (Auswahl): monitorGadgetConfig
Wert: { gadgetScript: 'GadgetSample_Chart_Gadget', gadgetAction: 'showChart' }
Aktion: Button OK (2 Stück)

| Abb. 34 - im DOCUMENTS Manager am Mappentyp Eigenschaften öffnen | Abb. 35 - im DOCUMENTS Manager dem Mappentyp Eigenschaft hinzufügen |
| --- | --- |


### Im AdminCenter

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:

- Mappentyp öffnen
Pfad: Administration -> Mappentypen
Aktion: den Mappentyp wählen
- Gadget-Konfiguration als Eigenschaft hinzufügen
Reiter Eigenschaften:
Feld: Eigenschaften
Auswahl: monitorGadgetConfig
Wert: { gadgetScript: 'GadgetSample_Chart_Gadget', gadgetAction: 'showChart' }
Aktion: Button Speichern


![dOS_admincenter_monitor.png](../assets/img/integration/dOS_admincenter_monitor.png)

Abb. 36 - in den Admin Tools dem Mappentyp Eigenschaft hinzufügen


## Gadget als Mappen-Register

Gadgets können auch an Mappen-Registern verwendet werden. Hierzu wird dem Mappentyp ein neues Register des Typs `Externer Aufruf` hinzugefügt und die Eigenschaft `gadgetConfig` mit der Gadget-Konfiguration hinterlegt.
Die Konfiguration kann über den **DOCUMENTS-Manager** oder ab documentsOS auch über das **AdminCenter** mit der aktivierten Erweiterung **Admin-Tools** erfolgen.

Zur Dokumentation wird das Skript `GadgetSample_Chart_Gadget` dem Mandanten hinzugefügt.

Property-Name = gadgetConfig
Property-Wert = {"gadgetScript": "GadgetSample_Chart_Gadget", "gadgetAction": "showChart"}

Download: [GadgetSample_Chart_Gadget.js](../assets/samples/GadgetSample_Chart_Gadget.js)


![dOS_sampleview_fileregister.png](../assets/img/integration/dOS_sampleview_fileregister.png)

Abb. 37 - Beispiel Gadget als Mappen-Register


### Im Manager

Einrichtung über die **Anwendung** Documents-Manager:

- Mappen-Register hinzufügen
Pfad: Documents -> Mappentypen
Aktion: Mappentyp wählen
Reiter Register: (die untere Reiterleiste)
Aktion: rechte Maustaste (im Registerfenster)
Auswahl: neuen Datensatz anlegen


![dOS_manager_fileregister.png](../assets/img/integration/dOS_manager_fileregister.png)

Abb. 38 - Mappen-Register im Documents Manager anlegen

- Im neuen Fenster wird das Register konfiguriert
Reiter Allgemein:
Name (technisch): productChart
Bezeichnung (sichtbar): Produktstatistik
Registertyp: Externer Aufruf


![dOS_manager_fileregister_new.png](../assets/img/integration/dOS_manager_fileregister_new.png)

Abb. 39 - Mappen-Register im Documents Manager konfigurieren

- Gadget-Konfiguration als Eigenschaft hinzufügen
(hierfür wird in der Register-Konfiguration nur der Reiter gewechselt)
Reiter Eigenschaften:
Aktion: rechte Maustaste
Auswahl: neue Eigenschaft hinzufügen
Name (Auswahl): gadgetConfig
Wert: { gadgetScript: 'GadgetSample_Chart_Gadget', gadgetAction: 'showChart' }
Aktion: Button OK (3 Stück)


![dOS_manager_fileregister_property.png](../assets/img/integration/dOS_manager_fileregister_property.png)

Abb. 40 - im DOCUMENTS Manager dem Register Eigenschaft hinzufügen

**TIPP:** Wenn das neue Gadget-Register auch **in bereits vorhandenen Mappen** des Mappentyps verwendet werden soll, müssen diese nach dem Hinzufügen des Registers über die Schaltfläche `Mappen ändern` im geänderten Mappentyp aktualisiert werden.


### Im AdminCenter

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:

- Mappen-Register hinzufügen Pfad: Administration -> Mappentypen
Aktion: den Mappentyp wählen
Aktion: Schaltfläche Details Abb. 41 - in den Admin Tools die Details des Mappentyps öffnen Aktion: Schaltfläche + (im Register)
Reiter Register:
Name (technisch): productChart
Registertyp: Externer Aufruf
✅ Freigeben
Bezeichnung (sichtbar): Produktstatistik Abb. 42 - in den Admin Tools die Details des Mappentyps öffnen
- Gadget-Konfiguration als Eigenschaft hinzufügen Reiter Eigenschaften:
Feld: Eigenschaften
Auswahl: gadgetConfig
Wert: { gadgetScript: 'GadgetSample_Chart_Gadget', gadgetAction: 'showChart' }
Aktion: Button Speichern Abb. 43 - in den Admin Tools dem Mappentyp Eigenschaft hinzufügen

**TIPP:** Wenn das neue Gadget-Register auch **in bereits vorhandenen Mappen** des Mappentyps verwendet werden soll, müssen diese nach dem Hinzufügen des Registers über die Schaltfläche `Mappen ändern` im geänderten Mappentyp aktualisiert werden.


## Als benutzerdefinierte Aktion an einer Mappe

Ein Gadget kann als benutzerdefinierte Aktion ausgeführt werden. Hierzu wird dem Mappentyp eine neue benutzerdefinierte Aktion des Typs `Gadget` als Button oder Dropdown hinzugefügt und die Eigenschaft `gadgetConfig` mit der Gadget-Konfiguration hinterlegt.
Die Konfiguration kann über den **DOCUMENTS-Manager** oder ab documentsOS auch über das **AdminCenter** mit der aktivierten Erweiterung **Admin-Tools** erfolgen.

Zur Dokumentation wird das Skript `GadgetSample_FormGadget` dem Mandanten hinzugefügt.

Property-Name = gadgetConfig
Property-Wert = {"gadgetScript": "GadgetSample_FormGadget", "gadgetAction": "showFormGadget"}

Download: [GadgetSample_FormGadget.js](../assets/samples/GadgetSample_FormGadget.js)


![dOS_sampleview_custom-action.png](../assets/img/integration/dOS_sampleview_custom-action.png)

Abb. 44 - Beispiel Gadget als benutzerdefinierte Aktion


### Im Manager

Einrichtung über die **Anwendung** Documents-Manager:

- benutzerdefinierte Aktion hinzufügen
Pfad: Documents -> Mappentypen
Aktion: Mappentyp wählen
Reiter benutzerdefinierte Aktion: (die untere Reiterleiste)
Aktion: rechte Maustaste (im Aktionenfenster)
Auswahl: neuen Datensatz anlegen


![d5_manager_custom-action.png](../assets/img/integration/d5_manager_custom-action.png)

Abb. 45 - benutzerdefinierte Aktion im Documents Manager anlegen

Im neuen Fenster wird die benutzerdefinierte Aktion konfiguriert:

- Reiter Allgemein:
Name (technisch): customAction
Bezeichnung (sichtbar): Begrüßung
Interaktionselement: Funktionsknopf (oder Klappliste)
Typ: Gadget


![d5_manager_custom-action_new.png](../assets/img/integration/d5_manager_custom-action_new.png)

Abb. 46 - benutzerdefinierte Aktion im Documents Manager konfigurieren

- Gadget-Konfiguration als Eigenschaft hinzufügen
(hierfür wird in der Konfiguration nur der Reiter gewechselt)
Reiter Eigenschaften:
Aktion: rechte Maustaste
Auswahl: neue Eigenschaft hinzufügen
Name (Auswahl): gadgetConfig
Wert: { gadgetScript: 'GadgetSample_FormGadget', gadgetAction: 'showFormGadget' }
Aktion: Button OK (3 Stück)


![d5_manager_custom-action_property.png](../assets/img/integration/d5_manager_custom-action_property.png)

Abb. 47 - im DOCUMENTS Manager der benutzerdefinierten Aktion Eigenschaft hinzufügen

**TIPP:** Wenn die neue Aktion auch **in bereits vorhandenen Mappen** des Mappentyps verwendet werden soll, müssen diese nach dem Hinzufügen der Aktion über die Schaltfläche `Mappen ändern` im geänderten Mappentyp aktualisiert werden.


### Im AdminCenter

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:

- benutzerdefinierte Aktion hinzufügen Pfad: Administration -> Mappentypen
Aktion: den Mappentyp wählen
Aktion: Schaltfläche Details Abb. 48 - in den Admin Tools die Details des Mappentyps öffnen Aktion: Schaltfläche + (bei Benutzerdefinierte Aktionen)
Reiter Aktion:
Name (technisch): customAction
✅ Freigeben
Bezeichnung (sichtbar): Begrüßung
Interaktionselement: Funktionsknopf (oder Klappliste)
Typ: Gadget Abb. 49 - benutzerdefinierte Aktion in den Admin Tools konfigurieren
- Gadget-Konfiguration als Eigenschaft hinzufügen Reiter Eigenschaften:
Feld: Eigenschaften
Auswahl: gadgetConfig
Wert: { gadgetScript: 'GadgetSample_FormGadget', gadgetAction: 'showFormGadget' }
Aktion: Button Speichern


![dOS_admincenter_custom_action_property.png](../assets/img/integration/dOS_admincenter_custom_action_property.png)

Abb. 50 - in den Admin Tools der benutzerdefinierten Aktion Eigenschaft hinzufügen

**TIPP:** Wenn die neue Aktion auch **in bereits vorhandenen Mappen** des Mappentyps verwendet werden soll, müssen diese nach dem Hinzufügen der Aktion über die Schaltfläche `Mappen ändern` im geänderten Mappentyp aktualisiert werden.


## Gadget als Mappen-Feld

Gadgets können auch an Feldern verwendet werden. Hierzu wird im Mappentyp ein neues Feld des Typs `Gadget` hinzugefügt und die Eigenschaft `gadgetConfig` mit der Gadget-Konfiguration hinterlegt.
Die Konfiguration kann über den **DOCUMENTS-Manager** oder ab documentsOS auch über das **AdminCenter** mit der aktivierten Erweiterung **Admin-Tools** erfolgen.

Zur Dokumentation wird das Skript `GadgetSample_FieldGadget` dem Mandanten hinzugefügt.

Property-Name = gadgetConfig
Property-Wert = {"gadgetScript": "GadgetSample_FieldGadget", "gadgetAction": "gadgetField"}

Download: [GadgetSample_FieldGadget.js](../assets/samples/GadgetSample_FieldGadget.js)


![dOS_sampleview_filefield.png](../assets/img/integration/dOS_sampleview_filefield.png)

Abb. 51 - Beispiel Gadget als Mappenfeld


### Im Manager

Einrichtung über die **Anwendung** Documents-Manager:

- Feld am Mappentyp hinzufügen Pfad: Documents -> Mappentypen
Aktion: den Mappentyp wählen
Reiter Felder: (untere Reiterleiste)
Aktion: rechte Maustaste
Auswahl: Neuen Datensatz anlegen Abb. 52 - im DOCUMENTS Manager am Mappentyp Feld hinzufügen Im neuen Fenster wird das Feld konfiguriert: Reiter Allgemein:
Name (technisch): crmGadgetField
Bezeichnung (sichtbar): Bewertung (Random Gadget)
Typ: Gadget


![dOS_manager_filefield_value.png](../assets/img/integration/dOS_manager_filefield_value.png)

Abb. 53 - im DOCUMENTS Manager am Mappentyp Feld konfigurieren

- Gadget-Konfiguration als Eigenschaft hinzufügen
(hierfür wird in der Feld-Konfiguration nur der Reiter gewechselt)
Reiter Eigenschaften:
Aktion: rechte Maustaste
Auswahl: neue Eigenschaft hinzufügen
Name (Auswahl): gadgetConfig
Wert: { gadgetScript: 'GadgetSample_FieldGadget', gadgetAction: 'gadgetField' }
Aktion: Button OK (3 Stück)


![dOS_manager_filefield_property.png](../assets/img/integration/dOS_manager_filefield_property.png)

Abb. 54 - im DOCUMENTS Manager am Feld Eigenschaften hinzufügen

**TIPP:** Wenn das neue Gadget-Register auch **in bereits vorhandenen Mappen** des Mappentyps verwendet werden soll, müssen diese nach dem Hinzufügen des Registers über die Schaltfläche `Mappen ändern` im geänderten Mappentyp aktualisiert werden.


### Im AdminCenter

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:

- Mappen-Register hinzufügen Pfad: Administration -> Mappentypen
Aktion: den Mappentyp wählen
Aktion: Schaltfläche Details Abb. 55 - in den Admin Tools die Details des Mappentyps öffnen Aktion: Schaltfläche + (bei Felder)
Reiter Einstellungen:
Name (technisch): crmGadgetField
Typ: Gadget
Bezeichnung (sichtbar): Bewertung (Random Gadget)


![dOS_admincenter_filefield_values.png](../assets/img/integration/dOS_admincenter_filefield_values.png)

Abb. 56 - in den Admin Tools die Details des Mappentyps öffnen

- Gadget-Konfiguration als Eigenschaft hinzufügen
Reiter Eigenschaften:
Feld: Eigenschaften
Auswahl: gadgetConfig
Wert: { gadgetScript: 'GadgetSample_FieldGadget', gadgetAction: 'gadgetField' }
Aktion: Button Speichern


![dOS_admincenter_filefield_property.png](../assets/img/integration/dOS_admincenter_filefield_property.png)

Abb. 57 - in den Admin Tools dem Mappentyp Eigenschaft hinzufügen

**TIPP:** Wenn das neue Gadget-Register auch **in bereits vorhandenen Mappen** des Mappentyps verwendet werden soll, müssen diese nach dem Hinzufügen des Registers über die Schaltfläche `Mappen ändern` im geänderten Mappentyp aktualisiert werden.


## Gadget im User-Exit

Gadgets können auch als User-Exit an Feldern verwendet werden. Hierzu wird im Mappentyp einem beliebigen Feld ein User-Exit hinzugefügt und die Eigenschaft `gadgetConfig` mit der Gadget-Konfiguration hinterlegt.
Die Konfiguration kann über den **DOCUMENTS-Manager** oder ab documentsOS auch über das **AdminCenter** mit der aktivierten Erweiterung **Admin-Tools** erfolgen.

Zur Dokumentation wird das Skript `GadgetSample_UserExit` dem Mandanten hinzugefügt.

Property-Name = gadgetConfig
Property-Wert = {"gadgetScript": "GadgetSample_UserExit", "gadgetAction": "show"}

Download: [GadgetSample_UserExit.js](../assets/samples/GadgetSample_UserExit.js)


![dOS_sampleview_filefield.png](../assets/img/integration/dOS_sampleview_user_exit.png)

Abb. 58 - Beispiel Gadget als Mappenfeld


### Im Manager

Einrichtung über die **Anwendung** Documents-Manager:

- User-Exit einem Mappenfeld hinzufügen
Pfad: Documents -> Mappentypen
Aktion: den Mappentyp öffnen
Reiter Felder: (untere Reiterleiste)
Aktion: das Feld öffnen
Reiter Exits:
Auswahl: Aktionsknopf neben dem Feld


![d5_manager_user_exit.png](../assets/img/integration/d5_manager_user_exit.png)

Abb. 59 - im DOCUMENTS Manager am Mappentyp Feld öffnen

- Gadget-Konfiguration als Eigenschaft hinzufügen
(hierfür wird in der Feld-Konfiguration nur der Reiter gewechselt)
Reiter Eigenschaften:
Aktion: rechte Maustaste
Auswahl: neue Eigenschaft hinzufügen
Name (Auswahl): gadgetConfig
Wert: { gadgetScript: 'GadgetSample_UserExit', gadgetAction: 'show' }
Aktion: Button OK (3 Stück)


![d5_manager_user_exit_property.png](../assets/img/integration/d5_manager_user_exit_property.png)

Abb. 60 - im DOCUMENTS Manager am Feld Eigenschaften hinzufügen

**TIPP:** Wenn das neue Gadget-Register auch **in bereits vorhandenen Mappen** des Mappentyps verwendet werden soll, müssen diese nach dem Hinzufügen des Registers über die Schaltfläche `Mappen ändern` im geänderten Mappentyp aktualisiert werden.


### Im AdminCenter

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:

- User-Exit einem Mappenfeld hinzufügen Pfad: Administration -> Mappentypen
Aktion: den Mappentyp wählen
Aktion: Schaltfläche Details Abb. 61 - in den Admin Tools die Details des Mappentyps öffnen Aktion: das Feld öffnen
Reiter zusätzliche Einstellungen:
Typ: Aktionsknopf neben dem Feld


![dOS_admincenter_user_exit_button.png](../assets/img/integration/dOS_admincenter_user_exit_button.png)

Abb. 62 - in den Admin Tools User-Exit aktivieren

- Gadget-Konfiguration als Eigenschaft hinzufügen
Reiter Eigenschaften:
Feld: Eigenschaften
Auswahl: gadgetConfig
Wert: { gadgetScript: 'GadgetSample_UserExit', gadgetAction: 'show' }
Aktion: Button Speichern


![dOS_admincenter_user_exit_property.png](../assets/img/integration/dOS_admincenter_user_exit_property.png)

Abb. 63 - in den Admin Tools dem Mappentyp Eigenschaft hinzufügen

**TIPP:** Wenn das neue Gadget-Register auch **in bereits vorhandenen Mappen** des Mappentyps verwendet werden soll, müssen diese nach dem Hinzufügen des Registers über die Schaltfläche `Mappen ändern` im geänderten Mappentyp aktualisiert werden.


### Beispiel GadgetSample_UserExit

Es wird ein Dialogfenster mit einer Auswahlliste erzeugt, die für jeden Wert individuellen Beschreibungen anzeigt.

Daten aus dem Gadget können über den Documents-Kontext als Feldwert übernommen werden.
Anwendungsfälle könnten sein:

- Geo-Daten aus einer Karte übernehmen
- Variantenkürzel zuordnen, die im Gadget beschrieben werden
- komplexe Nummern, die im Gadget zusammengesetzt werden.

Beim Start des Gadget-Beispiels wird eine Auswahl von 3 Beispielwerten mit individuellen Beispiel-Beschreibungstexten angeboten.

| Abb. 64 - Der geöffnete Beispieldialog zur Auswahl | Abb. 65 - Der ausgewählte Eintrag wurde übernommen |
| --- | --- |

Mit dem Button `Übernehmen` wird der Titel in das Mappenfeld übertragen und das Gadget geschlossen.

Die Einrichtung erfolgt wie oben beschrieben.

Download: [GadgetSample_UserExit.js](../assets/samples/GadgetSample_UserExit.js)


```javascript
// This script uses module import with 'require'
// instead of the preprocessor directive '#import', which is deprecated.

/**
 * To use the Gadget:
 * Property name: gadgetConfig
 * Property value: { gadgetScript: 'GadgetSample_UserExit', gadgetAction: 'show' }
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "show"
// and link it to an action function.
gadgetAPI.registerGadgetAction("show", function () {

    // Initialize a Form-Gadget instance
    const formGadget = gadgetAPI.getFormInstance();
    formGadget.setTitle(context.getLocaleValue("de:Beispielauswahl;en:Sample Selection;"));

    // Set selectable field-value with a description for the dialog
    const sampleFieldValues = {
        "Titel 1": context.getLocaleValue("de:Eine Beschreibung für 1;en:A description for 1"),
        "Titel 2": context.getLocaleValue("de:Die Beschreibung für 2;en:The description for 2"),
        "Titel 3": context.getLocaleValue("de:Und eine Beschreibung für 3;en:And a description for 3")
    };


    // Extract keys from the object for the dropdown list
    const options = Object.keys(sampleFieldValues).map(function (key) {
        return [key, key];
    });

    // Create the dropdown list and add an event handler
    const myComboBox = formGadget.addSingleSelectList('selectSample',
    context.getLocaleValue("de:eine Auswahl;en:Select an option;"), options);
    myComboBox.setEvent("change", "myOnChangeFunction");

    // Add TextArea to the dialog and fill it with the description of the first object
    const descriptionTA = formGadget.addTextArea("descriptionTA",
    context.getLocaleValue("de:Beschreibung;en:Description;"), "");
    const firstKey = Object.keys(sampleFieldValues)[0];
    const firstDescription = sampleFieldValues[firstKey];
    descriptionTA.setValue(firstDescription);

    // Configure and add the save button
    const configContainerButton_save = {
        id: "myCustomSaveButton",
        label: context.getLocaleValue("de:Übernehmen;en:Save"),
        clickFunction: "saveSelectedValue",
    };
    formGadget.addContainerButton(configContainerButton_save);

    // Configure and add the cancel button
    const configContainerButton_cancel = {
        id: "myCustomCancelButton",
        label: context.getLocaleValue("de:Abbruch;en:Cancel"),
        clickFunction: "my_closeGadget",
    };
    formGadget.addContainerButton(configContainerButton_cancel);

    // Make the functions available client-side
    formGadget.addClientFunction(saveSelectedValue);
    formGadget.addClientFunction(myOnChangeFunction);
    formGadget.addClientFunction(my_closeGadget);

    // Make the data available client-side
    formGadget.setContextData(sampleFieldValues);

    // Return the Gadget instance WITHOUT calling the transfer() method
    return formGadget;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();

// End and close the gadget.
function my_closeGadget() {
    documentsContext.closeGadget();
}

// Transfer the selected title to the field.
function saveSelectedValue() {

    // Get the dropdown list element with the selection.
    const selectElement = document.getElementById("selectSample");
    const selectedKey = selectElement.options[selectElement.selectedIndex].value;

    if (!selectedKey){
        const messageTitle = "Fehlermeldung";
        var messageText = '<b>Übernahme fehlgeschlagen</b>'
        + '<div>Es konnte kein verarbeitbarer Wert übernommen werden. Der Dialog wird ohne Veränderungen geschlossen</div>';
        documentsContext.openMessageDialog(messageTitle, messageText, documentsContext.closeDialog());
    }
    else {
        // In the file context, adopt the selected title.
        const fileContext = documentsContext.getFileContext();
        // "crmDivision" = the field name where the user-exit is implemented
        fileContext.setFileFieldValue("crmDivision", selectedKey);
    }

    my_closeGadget();
}

// Adjust the description to the selected title
function myOnChangeFunction() {

    // Retrieve data passed from the server by .setContextData()
    const contextData = documentsContext.getGadgetContext().getContextData();

    // Get the dropdown list element with the selection and description.
    const selectElement = document.getElementById("selectSample");
    const selectedKey = selectElement.options[selectElement.selectedIndex].value;
    const selectedDescription = contextData[selectedKey];

    // Set the description in the TextArea
    document.getElementById("descriptionTA").value = selectedDescription;
}
```

// This script uses module import with 'require'
// instead of the preprocessor directive '#import', which is deprecated.

/**
 * To use the Gadget:
 * Property name: gadgetConfig
 * Property value: { gadgetScript: 'GadgetSample_UserExit', gadgetAction: 'show' }
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "show"
// and link it to an action function.
gadgetAPI.registerGadgetAction("show", function () {

    // Initialize a Form-Gadget instance
    const formGadget = gadgetAPI.getFormInstance();
    formGadget.setTitle(context.getLocaleValue("de:Beispielauswahl;en:Sample Selection;"));

    // Set selectable field-value with a description for the dialog
    const sampleFieldValues = {
        "Titel 1": context.getLocaleValue("de:Eine Beschreibung für 1;en:A description for 1"),
        "Titel 2": context.getLocaleValue("de:Die Beschreibung für 2;en:The description for 2"),
        "Titel 3": context.getLocaleValue("de:Und eine Beschreibung für 3;en:And a description for 3")
    };


    // Extract keys from the object for the dropdown list
    const options = Object.keys(sampleFieldValues).map(function (key) {
        return [key, key];
    });

    // Create the dropdown list and add an event handler
    const myComboBox = formGadget.addSingleSelectList('selectSample',
    context.getLocaleValue("de:eine Auswahl;en:Select an option;"), options);
    myComboBox.setEvent("change", "myOnChangeFunction");

    // Add TextArea to the dialog and fill it with the description of the first object
    const descriptionTA = formGadget.addTextArea("descriptionTA",
    context.getLocaleValue("de:Beschreibung;en:Description;"), "");
    const firstKey = Object.keys(sampleFieldValues)[0];
    const firstDescription = sampleFieldValues[firstKey];
    descriptionTA.setValue(firstDescription);

    // Configure and add the save button
    const configContainerButton_save = {
        id: "myCustomSaveButton",
        label: context.getLocaleValue("de:Übernehmen;en:Save"),
        clickFunction: "saveSelectedValue",
    };
    formGadget.addContainerButton(configContainerButton_save);

    // Configure and add the cancel button
    const configContainerButton_cancel = {
        id: "myCustomCancelButton",
        label: context.getLocaleValue("de:Abbruch;en:Cancel"),
        clickFunction: "my_closeGadget",
    };
    formGadget.addContainerButton(configContainerButton_cancel);

    // Make the functions available client-side
    formGadget.addClientFunction(saveSelectedValue);
    formGadget.addClientFunction(myOnChangeFunction);
    formGadget.addClientFunction(my_closeGadget);

    // Make the data available client-side
    formGadget.setContextData(sampleFieldValues);

    // Return the Gadget instance WITHOUT calling the transfer() method
    return formGadget;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();

// End and close the gadget.
function my_closeGadget() {
    documentsContext.closeGadget();
}

// Transfer the selected title to the field.
function saveSelectedValue() {

    // Get the dropdown list element with the selection.
    const selectElement = document.getElementById("selectSample");
    const selectedKey = selectElement.options[selectElement.selectedIndex].value;

    if (!selectedKey){
        const messageTitle = "Fehlermeldung";
        var messageText = '<b>Übernahme fehlgeschlagen</b>'
        + '<div>Es konnte kein verarbeitbarer Wert übernommen werden. Der Dialog wird ohne Veränderungen geschlossen</div>';
        documentsContext.openMessageDialog(messageTitle, messageText, documentsContext.closeDialog());
    }
    else {
        // In the file context, adopt the selected title.
        const fileContext = documentsContext.getFileContext();
        // "crmDivision" = the field name where the user-exit is implemented
        fileContext.setFileFieldValue("crmDivision", selectedKey);
    }

    my_closeGadget();
}

// Adjust the description to the selected title
function myOnChangeFunction() {

    // Retrieve data passed from the server by .setContextData()
    const contextData = documentsContext.getGadgetContext().getContextData();

    // Get the dropdown list element with the selection and description.
    const selectElement = document.getElementById("selectSample");
    const selectedKey = selectElement.options[selectElement.selectedIndex].value;
    const selectedDescription = contextData[selectedKey];

    // Set the description in the TextArea
    document.getElementById("descriptionTA").value = selectedDescription;
}
## Gadget im User-Exit des E-Mail-Sendedialog

Ein Gadget kann mit der Eigenschaft `emailGadgetConfig` am Mappentyp als `User-Exit` im `E-Mail senden`-Dialog konfiguriert werden. Das einmal konfigurierte Gadget ist dann im Dialog als User-Exit an den Feldern `An`, `CC` und `BCC` verfügbar.
Die Konfiguration kann über den **DOCUMENTS-Manager** oder ab documentsOS auch über das **AdminCenter** mit der aktivierten Erweiterung **Admin-Tools** erfolgen.

Zur Dokumentation wird das Skript `GadgetSample_FileEmailDialog` dem Mandanten hinzugefügt.

Property-Name = emailGadgetConfig
Property-Wert = {"gadgetScript": "GadgetSample_FileEmailDialog", "gadgetAction": "gadgetUserExit"}

Download: [GadgetSample_FileEmailDialog.js](../assets/samples/GadgetSample_FileEmailDialog.js)


![dOS_sampleview_email_exit.png](../assets/img/integration/dOS_sampleview_email_exit.png)

Abb. 66 - Beispiel Gadget als E-Mail User-Exit


### Im Manager

Einrichtung über die **Anwendung** Documents-Manager:

- Mappentyp öffnen
Pfad: Documents -> Mappentypen
Aktion: den Mappentyp wählen
- Gadget-Konfiguration als Eigenschaft hinzufügen
Reiter Eigenschaften:
Aktion: rechte Maustaste
Auswahl: neue Eigenschaft hinzufügen
Name: emailGadgetConfig
Wert: {"gadgetScript": "GadgetSample_FileEmailDialog", "gadgetAction": "gadgetUserExit"}
Aktion: Button OK (2 Stück)


![d5_manager_email_exit.png](../assets/img/integration/d5_manager_email_exit.png)

Abb. 67 - im DOCUMENTS Manager am Mappentyp E-Mail User-Exit hinzufügen


### Im AdminCenter

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:

- Mappentyp öffnen
Pfad: Administration -> Mappentypen
Aktion: den Mappentyp wählen
- Gadget-Konfiguration als Eigenschaft hinzufügen
Reiter Eigenschaften:
Feld: Eigenschaften
Name: (ergänzen) emailGadgetConfig
Wert: {"gadgetScript": "GadgetSample_FileEmailDialog", "gadgetAction": "gadgetUserExit"}
Aktion: Button Speichern


![dOS_admincenter_filecover.png](../assets/img/integration/dOS_admincenter_email_exit.png)

Abb. 68 - in den Admin Tools dem Mappentyp Eigenschaft hinzufügen


### Beispiel GadgetSample_FileEmailDialog

Das Beispiel zeigt ein Gadget-Skript, das für das Dialogfenster `Mappe per E-Mail versenden` verwendet wird. Es handelt sich hierbei um ein User-Exit, das für die Felder `An`, `CC` und `BCC` ausgeführt werden kann.


![dOS_sampleview_email_exit.png](../assets/img/integration/dOS_sampleview_email_exit.png)

Abb. 66 - Beispiel Gadget als E-Mail User-Exit

In diesem Beispiel werden Mappentypen und die Struktur des Demo-Mandanten `relations` genutzt.

Funktionen des Skripts:

- Scriptlist-List: Konfiguration einer Liste mit 4 Spalten zur Anzeige im Dialog.
- Zwei Mappentypen mit denselben technischen Feldnamen für E-Mail, Vorname und Nachname werden für die Übernahme der Werte bestimmt.
- Es gibt Filter und Checkboxen zur Auswahl, die die Scriptlist-List erweitern.
- OnClick-Funktion: Damit kann der Benutzer einzelne Einträge direkt übernehmen.
- MultiSelect-Funktion: Ermöglicht die gleichzeitige Übernahme mehrerer Einträge.
- Eine ScriptListWrapperInstance wird mit der konfigurierten Scriptlist-List eingerichtet und transferiert.

Die E-Mail-User-Exits sind über die **benutzerdefinierte Aktion**`E-Mail senden...` über das Mappenmenü erreichbar.


![dOS_sampleview_email_exit_start.png](../assets/img/integration/dOS_sampleview_email_exit_start.png)

Abb. 69 - Der E-Mail-Dialog im Mandanten

Im Dialogfenster werden alle Datensätze aus den Mappen der zwei Mappentypen angezeigt, sodass der Benutzer diese zur Auswahl hat.


![dOS_sampleview_email_exit_select.png](../assets/img/integration/dOS_sampleview_email_exit_select.png)

Abb. 70 - Der Auswahldialog im Mandanten

Durch Anklicken eines Eintrags oder durch die Auswahl über Checkboxen und den Button `Auswahl übernehmen` werden die E-Mail-Adressen in die entsprechenden Felder übernommen, und das Gadget schließt sich.

Die Einrichtung erfolgt wie oben beschrieben.

Download: [GadgetSample_FileEmailDialog.js](../assets/samples/GadgetSample_FileEmailDialog.js)


```javascript
/**
 * Sample for email dialog with click- and multiselect
 * Configured as filetype property emailGadgetConfig
 * Returns a list of filetypes (contacts or leads) from the relations demo principal.
 *
 * To use the Gadget:
 * Property name: emailGadgetConfig
 * Property value: {"gadgetScript": "GadgetSample_FileEmailDialog", "gadgetAction": "gadgetUserExit"}
*/

context.enableModules(); // not required since documentsOS

// Import required modules
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptList = require("otris.scriptlist");

// Register a gadget action "gadgetUserExit"
gadgetAPI.registerGadgetAction("gadgetUserExit", function (gadgetContext) {

    // Create the ScriptList with a localized title
    const list = new scriptList.List(context.getLocaleValue("de:Kontakte;en:Contacts"));

    list.setShowCheckboxes(true); // Enable multiselect
    list.setShowQuickFilter(true); // Add a search field for each column
    list.setSort({ remoteSort: false, multiSort: false }); // Sorting by a single column

    // Define the list columns with localized labels
    list.addColumn("firstName", context.getLocaleValue("de:Vorname;en:First name"));
    list.addColumn("lastName", context.getLocaleValue("de:Nachname;en:Last name"));
    list.addColumn("email", context.getLocaleValue("de:E-Mail;en:Email"));
    list.addColumn("source", context.getLocaleValue("de:Herkunft;en:Source"));

    // Populate the list with data
    const fileTypes = ["crmContact", "crmLead"]; // FileTypes from the relations demo principal
    var frs;
    var fileTypeTitles = {};
    fileTypes.forEach(function (ft) {
        frs = new FileResultset(ft, "", "");
        var isFirstFile = true;
        for (var file = frs.first(); file; file = frs.next()) {
            if (isFirstFile) {
                fileTypeTitles[ft] = file.getAutoText("%fileTypeTitle%");
                isFirstFile = false;
            }
            list.addRow(file.crmEmail, [file.crmFirstName, file.crmName, file.crmEmail, fileTypeTitles[ft]]);
        }
    });

    // Define row click action
    list.setOnRowClick(function (dc, options) {
        const cdata = dc.getGadgetContext().getContextData();

        // "FileEmail" is a predefined property for the FileEmailDialog
        const dlgContext = documents.sdk.dialogRegistry.getDialogContext("FileEmail");

        dlgContext.getModel().set(cdata.fieldName, options.row.get("email") + ";");

        // Without a delay value: Closes the dialog immediately after a row is clicked
        setTimeout(function () {
            dc.closeGadget();
        });
    });
    list.endList();

    // Create and configure the ScriptListWrapper instance
    const slw = gadgetAPI.getScriptListWrapperInstance();

    // Add the ScriptList to the ScriptListWrapper
    slw.addScriptList(list);

    // Set a dynamic localized title based on fileTypes
    var titlesString = context.getLocaleValue("de:Daten aus ;en:data from ;") + " " + fileTypes.map(function (ft) {
        return fileTypeTitles[ft];
    }).join(", ");
    slw.setTitle(titlesString);

    // Set context data to provide field information on the client-side
    const fieldConfig = JSON.parse(gadgetContext.gadgetParams.formFieldsJSON);
    slw.setContextData({
        fieldName: gadgetContext.gadgetParams.fieldName,
        fieldConfig: fieldConfig
    });

    // Add a cancel button and its client-side function
    slw.addClientFunction(function onCancel() {
        documentsContext.closeGadget();
    });
    slw.addContainerButton({
        id: "cancel",
        label: context.getLocaleValue("de:Abbrechen;en:Cancel"),
        clickFunction: "onCancel"
    });

    // Add an "OK" button with its associated client-side function
    slw.addClientFunction(function onOk() {
        const dobyGrid = documentsContext.getGadgetContext().getClientObject();
        const selectedRows = dobyGrid.getSelectedRows();
        const cdata = documentsContext.getGadgetContext().getContextData();
        const dlgContext = documents.sdk.dialogRegistry.getDialogContext("FileEmail");
        var recipients = "";

        if (selectedRows.length > 0) {
            selectedRows.forEach(item =>
                recipients += item.id + ";");
        }
        dlgContext.getModel().set(cdata.fieldName, recipients);
        documentsContext.closeGadget();
    });
    slw.addContainerButton({
        id: "ok",
        label: context.getLocaleValue("de:Auswahl übernehmen;en:Apply selection"),
        clickFunction: "onOk"
    });

    // Return the configured ScriptListWrapper instance
    return slw;
});

// Serialize and return the gadget instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Sample for email dialog with click- and multiselect
 * Configured as filetype property emailGadgetConfig
 * Returns a list of filetypes (contacts or leads) from the relations demo principal.
 *
 * To use the Gadget:
 * Property name: emailGadgetConfig
 * Property value: {"gadgetScript": "GadgetSample_FileEmailDialog", "gadgetAction": "gadgetUserExit"}
*/

context.enableModules(); // not required since documentsOS

// Import required modules
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptList = require("otris.scriptlist");

// Register a gadget action "gadgetUserExit"
gadgetAPI.registerGadgetAction("gadgetUserExit", function (gadgetContext) {

    // Create the ScriptList with a localized title
    const list = new scriptList.List(context.getLocaleValue("de:Kontakte;en:Contacts"));

    list.setShowCheckboxes(true); // Enable multiselect
    list.setShowQuickFilter(true); // Add a search field for each column
    list.setSort({ remoteSort: false, multiSort: false }); // Sorting by a single column

    // Define the list columns with localized labels
    list.addColumn("firstName", context.getLocaleValue("de:Vorname;en:First name"));
    list.addColumn("lastName", context.getLocaleValue("de:Nachname;en:Last name"));
    list.addColumn("email", context.getLocaleValue("de:E-Mail;en:Email"));
    list.addColumn("source", context.getLocaleValue("de:Herkunft;en:Source"));

    // Populate the list with data
    const fileTypes = ["crmContact", "crmLead"]; // FileTypes from the relations demo principal
    var frs;
    var fileTypeTitles = {};
    fileTypes.forEach(function (ft) {
        frs = new FileResultset(ft, "", "");
        var isFirstFile = true;
        for (var file = frs.first(); file; file = frs.next()) {
            if (isFirstFile) {
                fileTypeTitles[ft] = file.getAutoText("%fileTypeTitle%");
                isFirstFile = false;
            }
            list.addRow(file.crmEmail, [file.crmFirstName, file.crmName, file.crmEmail, fileTypeTitles[ft]]);
        }
    });

    // Define row click action
    list.setOnRowClick(function (dc, options) {
        const cdata = dc.getGadgetContext().getContextData();

        // "FileEmail" is a predefined property for the FileEmailDialog
        const dlgContext = documents.sdk.dialogRegistry.getDialogContext("FileEmail");

        dlgContext.getModel().set(cdata.fieldName, options.row.get("email") + ";");

        // Without a delay value: Closes the dialog immediately after a row is clicked
        setTimeout(function () {
            dc.closeGadget();
        });
    });
    list.endList();

    // Create and configure the ScriptListWrapper instance
    const slw = gadgetAPI.getScriptListWrapperInstance();

    // Add the ScriptList to the ScriptListWrapper
    slw.addScriptList(list);

    // Set a dynamic localized title based on fileTypes
    var titlesString = context.getLocaleValue("de:Daten aus ;en:data from ;") + " " + fileTypes.map(function (ft) {
        return fileTypeTitles[ft];
    }).join(", ");
    slw.setTitle(titlesString);

    // Set context data to provide field information on the client-side
    const fieldConfig = JSON.parse(gadgetContext.gadgetParams.formFieldsJSON);
    slw.setContextData({
        fieldName: gadgetContext.gadgetParams.fieldName,
        fieldConfig: fieldConfig
    });

    // Add a cancel button and its client-side function
    slw.addClientFunction(function onCancel() {
        documentsContext.closeGadget();
    });
    slw.addContainerButton({
        id: "cancel",
        label: context.getLocaleValue("de:Abbrechen;en:Cancel"),
        clickFunction: "onCancel"
    });

    // Add an "OK" button with its associated client-side function
    slw.addClientFunction(function onOk() {
        const dobyGrid = documentsContext.getGadgetContext().getClientObject();
        const selectedRows = dobyGrid.getSelectedRows();
        const cdata = documentsContext.getGadgetContext().getContextData();
        const dlgContext = documents.sdk.dialogRegistry.getDialogContext("FileEmail");
        var recipients = "";

        if (selectedRows.length > 0) {
            selectedRows.forEach(item =>
                recipients += item.id + ";");
        }
        dlgContext.getModel().set(cdata.fieldName, recipients);
        documentsContext.closeGadget();
    });
    slw.addContainerButton({
        id: "ok",
        label: context.getLocaleValue("de:Auswahl übernehmen;en:Apply selection"),
        clickFunction: "onOk"
    });

    // Return the configured ScriptListWrapper instance
    return slw;
});

// Serialize and return the gadget instance
context.returnValue = gadgetAPI.transfer();