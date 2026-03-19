---
title: "Documents-API"
source: "https://otris.software/documents/manuals/books/otrwebservices/documents-api-general.html"
---

# Documents-API

Über die *Documents-API* werden diverse Endpunkte bereitgestellt. Folgende Endpunkte können aktuell genutzt werden:

- Dokumenten Spooling
Dateien hochladen
Dateien herunterladen
Dateien löschen
- Mappen
Mappen anlegen
Mappen suchen
Mappeninformationen holen
Mappen aktualisieren
Mappen löschen
Mappen archivieren
Autotexte für Mappen ermitteln
Dokumente von Mappen herunterladen
- Workflows
Workflows auflisten
Workflows starten
Workflows abbrechen
Workflowaktionen auflisten
Workflowaktionen auslösen
Nachverfolgunsdatum festlegen
- Ordner
Öffentliche Ordner auflisten
Statusinformationen privater Ordner abfragen
Mappen in Ordnern auflisten (per Ordnertyp)
Mappen in Ordnern auflisten (per Ordnername)
Mappen in Ordnern auflisten (per Ordner-Id)
- Skripting
Portalskripte ausführen

Endpunkte, die benutzt werden sollen, müssen als *Erlaubte Endpunkte* angegeben sein, um sie zu aktivieren. Wenn ein nicht aktivierter Endpunkt aufgerufen wird, kommt es zu einem 404 - Not Found Fehler.