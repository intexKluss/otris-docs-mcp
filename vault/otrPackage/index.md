---
title: "otr-package"
source: "https://otris.software/documents/api/otrpackage/index.html"
---

# otr-package


## Zweck

Das `otr-package` ist ein Tool von documentsOS, das zur Erstellung und Verwaltung von Lösungspaketen dient.


## Funktionen

Mit dem `otr-package` können

- Installationspakete für Lösungen erstellt werden.
- Diese Pakete in einen documentsOS-Mandanten installiert werden.


## Auf einem Blick

- Getting Started: Schritt-für-Schritt-Anleitung für das Aufsetzen eines neuen documentsOS-Projektes.
- Feature Walkthrough: Detaillierte Erläuterungen und Beispiele zu verschiedenen Features, einschließlich Abhängigkeiten, Checks und Hooks, Erstellung neuer Versionen sowie ADP-Optimierung.
- Paketverwaltung: Erläuterung, wie Pakete im Admin-Center verwaltet werden.
- Konfiguration: Erläuterung der Konfiguration des Bauens und Installieren von Paketen.
- API: Eine umfassende Beschreibung der otr-package-API.


## Begriffe

Zentrale Begriffe, die in den Beschreibungen verwendet werden:

- Application Deployment Package (ADP): Ein Installationspaket für eine documentsOS-Lösung oder ein Modul, vergleichbar mit einem MSI-Paket unter Windows oder einem Debian-Paket unter Linux. Ein ADP enthält die SDPs aller Versionen und Abhängigkeiten, die für die Installation der Lösung erforderlich sind.
- Single Distribution Package (SDP): Ein Installationspaket für eine spezifische Version, das alle Artefakte einer Lösungsversions oder einer Modulversion enthält, wie z.B. Skripte und Workflows.
- PACKAGE-Script: Ein spezielles Skript, das ein Paket beschreibt, einschließlich Installationsanweisungen und Metadaten wie Versionsnummer und Beschreibungen.
- Update-Script: Ein spezielles Skript, das während der Installation ausgeführt wird, um Änderungen an einem Mandanten vorzunehmen, z.B. das Anlegen eines neuen Mappentyps.