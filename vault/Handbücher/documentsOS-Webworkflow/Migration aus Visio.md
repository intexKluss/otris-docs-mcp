---
title: "Migration aus Visio"
source: "https://otris.software/documents/manuals/books/workflow-tool/migration.html"
---

# Migration aus Visio


## Allgemeine Informationen

Generell gilt:

- Mit Microsoft Visio erstellte Workflows sind in documentsOS normal weiter nutzbar.
- Eine Nachbearbeitung von Workflows mit Microsoft Visio ist weiterhin möglich, Weiterentwicklungen des Workflow-Plugins finden allerdings nicht mehr statt, diese werden nur noch im Webworkflow durchgeführt.

**Wichtiger Hinweis**: Wenn ein in Microsoft Visio erstellter Workflow im Webworkflow **geladen und gespeichert** wurde, darf danach **Visio nicht mehr zur Bearbeitung benutzt werden**.

**Wichtiger Hinweis**: Wird ein zuvor mit Microsoft Visio erstellter Workflow mit dem Webworkflow in derselben Version gespeichert, werden am Workflow ggf. vorhandene Dateien, wie Visio Modell (vsdx-Datei), Visio Image (png-Datei) und Visio HTML (htm-Datei) gelöscht. Es wird daher empfohlen, diese Dateien vorher zu sichern.


## Migration


![migration-visio-1](assets/migration-visio-1.png)

Abb. 54 - Beispielworkflow in Microsoft Visio

Der entsprechende Workflow ist per Dateimenü *Öffnen / Server* aus den verfügbaren Workflows auszuwählen und zu laden. Nach dem Laden wird der Workflow in einer unstrukturierten Form dargestellt, weil keine Layout-Informationen zur Verfügung stehen:


![migration-webworkflow-1](assets/migration-webworkflow-1.png)

Abb. 55 - Importierter Workflow ohne Layoutinformationen

Über die Formularbearbeitung des Workflow-Shapes ist der korrekte Mappentyp auszuwählen, die Einstellung ist zu speichern:


![migration-webworkflow-2](assets/migration-webworkflow-2.png)

Abb. 56 - Mappentyp am Workflow-Shape speichern

Ist die korrekte Visio-Datei verfügbar, sollte diese verwendet werden, um die wesentlichen Layoutinformationen zu laden.

**Wichtiger Hinweis:** Ein Visio-Metadaten-Import ist nur möglich, wenn der geladene Workflow im Webworkflow identisch zu dem im Visio-Sheet ist.

Über die Formularbearbeitung des Workflow-Shapes kann über die Aktion *Visio Metadaten einspielen* ein Dialog geöffnet werden, der die Auswahl des Visio-Sheets ermöglicht.


![migration-webworkflow-3](assets/migration-webworkflow-3.png)

Abb. 57 - Aktion Visio Metadaten einspielen am Workflow-Shape


![migration-webworkflow-4](assets/migration-webworkflow-4.png)

Abb. 58 - Dialog zum Einspielen der Visio Metadaten

Per *Metadaten einspielen* werden diese übernommen. Dabei werden die aus Visio zur Verfügung gestellten Daten so weit möglich genutzt, um Positionen und Winkel zu ermitteln und diese darzustellen. Da meist nicht alle Daten vorliegen, stimmt die Darstellung nie vollständig mit der vorherigen Visio-Zeichnung überein:


![migration-webworkflow-5](assets/migration-webworkflow-5.png)

Abb. 59 - Workflow nach Übernahme Visio Metadaten

Durch meist einfache Überarbeitungen mit den Möglichkeiten des Editors lassen sich die Workflows aber i.a.R. schnell anpassen und z.B. die notwendigen Ausrichtungen vornehmen.

Ist die korrekte Visio-Datei nicht oder nicht mehr verfügbar, kann nach dem Importieren ohne Layoutinformationen und der Speicherung des Mappentypen am Workflow-Shape mit Hilfe des *automatischen Layouts* eine Formatierung vorgenommen werden. Das automatische Layout verwendet diverse Voreinstellungen, wie z.B. gleiche Abstände und vertikale Ausrichtung. Dabei kann nicht sichergestellt werden, dass der Workflowgraph optimal neu gezeichnet wird, aber auch nach einem automatischen Layout lassen sich i.a.R. schnell erforderliche Anpassungen vornehmen.


![migration-webworkflow-6](assets/migration-webworkflow-6.png)

Abb. 60 - Workflow nach automatischem Layout

**Hinweis**: Nach den Überarbeitungen des Layouts sollte der Workflow gespeichert und somit zum Server übertragen werden, damit beim nächsten Öffnen alle vorgenommenen Layoutänderungen vorhanden sind.

**Wichtiger Hinweis**: Wenn der Workflow im Webworkflow geladen und gespeichert wurde, darf danach **Visio nicht mehr zur Bearbeitung benutzt werden**.