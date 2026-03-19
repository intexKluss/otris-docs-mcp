---
title: "Voraussetzungen"
source: "https://otris.software/documents/manuals/books/migration-doc6-de/requirements-linux.html"
---

# Voraussetzungen

Für eine Installation von **documentsOS** gelten generell die allgemeinen Systemvoraussetzungen für eine Documents-Installation, siehe auch [[Client SDK/index|Systemvoraussetzungen]].

Für die Aktualisierung einer *vorhandenen Documents 5-Installation* auf *documentsOS* gelten zusätzlich die nachfolgend dargestellten Voraussetzungen.

**Wichtiger Hinweis:** Für eine Migration nach **documentsOS** müssen mindestens die Packages in Version **5.0i-2322-454** installiert und **einmal erfolgreich gestartet** worden sein. Sollen ältere Versionen umgestellt werden, muss zunächst eine Aktualisierung auf die angegebene Version erfolgen.

**Wichtiger Hinweis:** Ab Version #2322 unterstützt Documents bei Verwendung von MariaDB bzw. MySQL zusätzlich zum bisherigen Encoding utf8mb3 auch utf8mb4. Dieses Encoding (utf8mb4) wird z.B. zum Speichern von Emojis benötigt. Sollte die Konvertierung bisher noch nicht durchgeführt worden sein, ist dies vor der Umstellung unter Verwendung einer Datenbankschema Migration, siehe [Variante 1](migration-linux.html#variante-1-umstellung-unter-verwendung-einer-datenbankschema-migration) sicherzustellen, die Vorgehensweise ist hier beschrieben: [[Client SDK/index#migration-einer-documents-5-utf8mb3-datenbank-nach-utf8mb4|Migration einer DOCUMENTS 5 utf8mb3 Datenbank nach utf8mb4]].


## Datensicherung

Vor der Umstellung ist sicherzustellen, dass eine vollständige, aktuelle Datensicherung durchgeführt wird. Falls für die Documents 5 Datenbank ein einfacher Datenbank-Dump ausreicht, kann dieser während der Migration automatisch erstellt werden (dies ist der Default).
Eine vollständige Datensicherung umfasst immer:

- Daten:
entweder eine mit Mitteln des verwendeten Datenbanksystems erstellte vollständige Datensicherung der Documents 5 Datenbank und eine vollständige Datensicherung des Repositories (z.B. erstellt mit Backup-System) - notwendig als Backup zur Umstellung mit Variante 1, siehe Variante 1
oder eine per Documents erstellte Datensicherung mit Documents-Repository (bei Umstellung eines Mandanten innerhalb der Installation) bzw. eine sogenannte System-Datensicherung (bei Umstellung mehrerer Mandanten innerhalb einer Installation) - notwendig zur Umstellung mit Variante 2, siehe Variante 2
- Installation:
Dateien, die zusätzlich in die Documents 5 Verzeichnisse gelegt wurden, sollten gesichert werden (notwendig für Anpassungen während der Umstellung und für Nachbereitungen)


## Neue Lizenzdatei

Für die Verwendung von *documentsOS* ist eine neue Lizenzdatei notwendig. Eine Lizenzdatei mit dem **Release-Flag 9000** muss vor der Installation zur Verfügung stehen.