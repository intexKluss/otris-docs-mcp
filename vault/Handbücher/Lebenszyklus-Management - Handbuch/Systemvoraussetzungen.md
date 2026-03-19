---
title: "Systemvoraussetzungen"
source: "https://otris.software/documents/manuals/books/otrlifecycle/requirements.html"
---

# Systemvoraussetzungen


## Allgemeines

Voraussetzung für die Nutzung der Erweiterung **otrLifeCycle** ist die Verwendung von Documents 5i (Build #2320) oder höher.

- Bei Verwendung von documentsOS gelten folgende Hinweise zur Einrichtung: Bereitstellung in documentsOS.
- Bei Verwendung von Documents 5 gelten folgende Hinweise zur Einrichtung: Bereitstellung in Documents 5.

**Wichtiger Hinweis:** Die Erweiterung kann standardmäßig ausschließlich von Redakteuren mit der Funktion *Documents Administrator* konfiguriert werden. Bei unberechtigtem Zugriff werden entsprechende Fehlermeldungen ausgegeben. Bei Verwendung von **Documents 5** kann per *Callback* anderen Personen Zugang zur Regel- und Vorlagenverwaltung bzw. zur Ereignisübersicht gewährt werden, falls dies notwendig sein sollte. Bei Verwendung von **documentsOS** erfolgt dies über die Rollenverwaltung im *AdminCenter*.


## Sonstige Voraussetzungen


### Job-Benutzer und Berechtigungen

Alle in Regeln angegebenen Aktionen (Archivieren mit verschiedenen Optionen, Löschen mit verschiedenen Optionen, Workflow starten und Script ausführen) werden zum entsprechenden Zeitpunkt im Kontext des Job-Benutzers vom Documents-Server automatisch ausgeführt, folgende Voraussetzungen sind per Konfiguration sicherzustellen:

- der Job-Benutzer muss vorhanden und als solcher in den Documents-Einstellungen angegeben sein
- der Job-Benutzer muss alle erforderlichen Berechtigungen für die jeweiligen Vorgänge besitzen


### Archivierungseinstellungen

Die Erweiterung unterstützt für Archivierungen ausschließlich **Embedded Archive Storage (EAS)**. Die Aktion **Archivieren** steht in der Auswahlliste des Regeleditors nur zur Verfügung, wenn mindestens ein Archivserver vom Typ *DOCUMENTS (EAS)* konfiguriert wurde. Außerdem müssen am Archivserver die korrekten Benutzerkonten und Passwörter angegeben werden:

- EAS Administratorkonto
- EAS Wartungskonto
- Trusted server Benutzerkennung

Zusätzlich **muss** für jede Vorgangsart der entsprechende Archivserver als Zielserver angegeben oder als Zielserver der *Hauptserver* vom Typ *DOCUMENTS (EAS)* gewählt sein.


### Workfloweinstellungen

Im Regeleditor stehen in der entsprechenden Auswahlliste nur die Workflows bereit, die als *Zulässige Workflows* an der Vorgangsart konfiguriert sind.


### Einstellungen für Scripte

Im Regeleditor stehen in der entsprechenden Auswahlliste nur die Scripte bereit, bei denen die Eigenschaft *LifeCycleEnabled=1* gesetzt wurde.