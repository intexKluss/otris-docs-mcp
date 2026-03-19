---
title: "Integration von Gadgets als öffentliche Ordner"
source: "https://otris.software/documents/manuals/books/gadget/integration/integration-public-folder.html"
---

# Integration von Gadgets als öffentliche Ordner

Gadgets können als eigener Ordner integriert werden, oder als benutzerdefinierte Aktion.


## Gadget als Ordner

Um ein Gadget im Ordnerbaum verfügbar zu machen, wird ein Ordner erstellt und die Gadget-Konfiguration als Eigenschaft `gadgetConfig` diesem Ordner hinzugefügt.
Dies kann über den **DOCUMENTS-Manager** oder ab documentsOS auch über das **AdminCenter** mit der aktivierten Erweiterung **Admin-Tools** erfolgen.

Zur Dokumentation wurde das Skript `GadgetSample_HTML_Gadget` dem Mandanten hinzugefügt.

Property-Name = gadgetConfig
Property-Wert = { gadgetScript: 'GadgetSample_HTML_Gadget' , gadgetAction: 'showHtml' }

Download: [GadgetSample_HTML_Gadget.js](../assets/samples/GadgetSample_HTML_Gadget.js)


![dOS_sampleview_folder.png](../assets/img/integration/dOS_sampleview_folder.png)

Abb. 18 - Beispiel Gadget als Ordner


### Im Documents-Manager

Einrichtung über die **Anwendung** Documents-Manager:


#### Ordner anlegen

- Pfad: Documents -> öffentliche Ordner
- Aktion: Button Neu
- Reiter Allgemein:
Name (technisch): htmlGadget
✅ Freigeben
Bezeichnung (sichtbar): HTML-Gadget
Typ: Öffentlich (dyn. Filter)


![dOS_manager_folder.png](../assets/img/integration/dOS_manager_folder.png)

Abb. 19 - Ordner im Documents Manager anlegen


#### Gadget-Konfiguration als Eigenschaft hinzufügen

(hierfür wird in der Ordner-Konfiguration nur der Reiter gewechselt)

- Reiter Eigenschaften:
Aktion: rechte Maustaste
Auswahl: neue Eigenschaft hinzufügen
Name (Auswahl): gadgetConfig
Wert: { gadgetScript: 'GadgetSample_HTML_Gadget' , gadgetAction: 'showHtml' }
Aktion: Button OK (2 Stück)


![dOS_manager_folder_property.png](../assets/img/integration/dOS_manager_folder_property.png)

Abb. 20 - im DOCUMENTS Manager dem Ordner Eigenschaft hinzufügen


### In den Admin Tools des AdminCenters

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:


#### Ordner anlegen

- Pfad: Administration -> Ordner
- Aktion: Button + Erstellen
- Reiter Ordner:
Name (technisch): htmlGadget
Typ: Öffentlich (dyn. Filter)
Bezeichnung (sichtbar): HTML-Gadget
✅ Freigeben


![dOS_admincenter_folder.png](../assets/img/integration/dOS_admincenter_folder.png)

Abb. 21 - Ordner in den Admin Tools anlegen


#### Gadget-Konfiguration als Eigenschaft hinzufügen

(hierfür wird in der Ordner-Konfiguration nur der Reiter gewechselt)

- Reiter Eigenschaften:
Feld: Eigenschaften
Auswahl: gadgetConfig
Wert: { gadgetScript: 'GadgetSample_HTML_Gadget' , gadgetAction: 'showHtml' }
Aktion: Button Anlegen (2 Stück)


![dOS_admincenter_folder_property.png](../assets/img/integration/dOS_admincenter_folder_property.png)

Abb. 22 - in den Admin Tools dem Ordner Eigenschaft hinzufügen


## Gadget als benutzerdefinierte Aktion an einem Ordner

Ein Gadget kann als benutzerdefinierte Aktion an einem Ordner ausgeführt werden. Dazu wird dem Ordner eine neue benutzerdefinierte Aktion als Schaltfläche oder Klappliste hinzugefügt und die Eigenschaft `gadgetConfig` mit der Gadget-Konfiguration hinterlegt.
Die Konfiguration kann über den **DOCUMENTS-Manager** oder das **AdminCenter** in documentsOS mit der Erweiterung Admin-Tools erfolgen.

Zur Dokumentation wird das Skript `GadgetSample_FormGadget` dem Mandanten hinzugefügt.

Property-Name = gadgetConfig
Property-Wert = { gadgetScript: 'GadgetSample_FormGadget', gadgetAction: 'showFormGadget' }

Download: [GadgetSample_FormGadget.js](../assets/samples/GadgetSample_FormGadget.js)


![dOS_sampleview_folder_action.png](../assets/img/integration/dOS_sampleview_folder_action.png)

Abb. 23 - Beispiel Gadget als benutzerdefinierte Aktion am Ordner


### Im Documents-Manager

Einrichtung über die **Anwendung** Documents-Manager:

- Pfad: Documents -> öffentliche Ordner
- Aktion: Ordner wählen oder erstellen
- in Benutzerdefinierte Aktionen: (die untere Reiterleiste)
Aktion: neuen Datensatz anlegen
in Eigenschaften:
Aktion:neue Eigenschaft hinzufügen
Name: gadgetConfig
Wert: { gadgetScript: 'GadgetSample_FormGadget', gadgetAction: 'showFormGadget' }


![dOS_manager_folder_action.png](../assets/img/integration/dOS_manager_folder_action.png)

Abb. 24 - benutzerdefinierte Aktion einem Ordner im Documents Manager hinzufügen


### In den Admin Tools des AdminCenters

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:

- Pfad: Administration -> Ordner
- Aktion: Ordner wählen oder erstellen
- in Benutzerdefinierte Aktionen:
Aktion: Anlegen
in Eigenschaften:
Aktion:neue Eigenschaft hinzufügen
Name: gadgetConfig
Wert: { gadgetScript: 'GadgetSample_FormGadget', gadgetAction: 'showFormGadget' }


![dOS_admincenter_folder_action.png](../assets/img/integration/dOS_admincenter_folder_action.png)

Abb. 25 - benutzerdefinierte Aktion einem Ordner in den Admin Tools hinzufügen