---
title: "Übersicht"
source: "https://otris.software/documents/manuals/books/admin-center/dashboard.html"
---

# Übersicht


## Übersicht konfigurieren

Per Klick auf den Konfigurationsordner **Übersicht** wird ein Dashboard geöffnet, dass von jedem berechtigten Benutzer selbstständig konfiguriert werden kann:


![dashboard-ac-1](assets/dashboard-ac-1.png)

Abb. 4 - Standarddashboard (leer)

Per Bearbeiten / Hinzufügen können Kacheln ausgewählt und danach mit den Standard-Dashboard-Einstellungen platziert werden:


![dashboard-ac-2](assets/dashboard-ac-2.png)

Abb. 5 - Dashboard Auswahl

Ein Beispiel-Dashboard mit allen verfügbaren Kacheln könnte wie folgt aussehen:


![dashboard-ac-3](assets/dashboard-ac-3.png)

Abb. 6 - Beispiel-Dashboard


## Informationen zu Aktionen / Kacheln

Die einzelnen **Aktionen / Kacheln** haben folgende Bedeutungen:

- Clear PropertyCaches: Löscht folgende Caches: PropertyCache (propCache), Benutzer-PropertyCache (SystemUser.propCache) und Profil-PropertyCache (AccessProfile.propcache). Gibt Informationen als Notification zurück.
- Clear Portalscript cache: Löscht den Portal-Skript-Cache. Gibt Informationen als Notification zurück.
- otrCallback rebuild cache: Aktualisiert den otrCallback-Cache. Gibt Informationen als Notification zurück.
- Clear all caches: Löscht alle Caches (siehe Clear PropertyCaches und Clear Portalscript cache) sowie den Tomcat-Cache und lädt die Seite neu. Gibt Informationen als Notification zurück.
- AdminCenter Basisfarbe: Öffnet einen Color-Picker, mit dem sich die AdminCenter-Basisfarbe für den aktuellen Benutzer einstellen lässt.
- XML-Import: Öffnet einen Dialog zur Auswahl einer XML-Datei und führt einen XML-Import durch. Die XML-Datei muss eine für documentsOS passende Importstruktur besitzen.
- Versionsinformationen: Stellt diverse Versionsinformationen der Umgebung dar.
- Blockierte Skripte: Protokolliert tabellarisch Blockierte Skripte. Standardmäßig werden aus Sicherheitsgründen diverse Skriptausführungen blockiert. Weitere Hinweise zur Konfiguration für Skriptausführungen sind im entsprechenden HowTo zu finden.