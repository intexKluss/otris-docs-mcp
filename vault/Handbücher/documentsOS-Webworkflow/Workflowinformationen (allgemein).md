---
title: "Workflowinformationen (allgemein)"
source: "https://otris.software/documents/manuals/books/workflow-tool/general.html"
---

# Workflowinformationen (allgemein)

Ein Workflow ist eine Sammlung von vordefinierten Regeln, die entsprechend auf definierte Bedingungen reagieren. Ein Prozess wird dadurch ohne Ausnahme immer gleich abgewickelt. Damit unterscheiden sich Workflows von sogenannten Versendelisten:

- Versendeliste (Ad hoc)
Manuelle Versendung durch Anwender
Jede Versendung findet anders statt
Es gibt keine Automatismen
- Workflow (Regelbasiert)
Standardisierte Versendung, unternehmensweite Vorgabe
Jede Versendung erfolgt nach dem gleichen Schema
Es können Automatismen verwendet werden

Für die Modellierung von Workflows in *documentsOS* sind Voraussetzungen notwendig:

- Mappentyp mit Indexdaten: entspricht dem Weblayout/Formular zur Anzeige des Vorgangs
- Zugriffsprofile: zur Steuerungsmöglichkeit von Aufgabenträgern und/oder Berechtigungen
- Öffentliche Ordner: zur Berechtigungssteuerung und/oder gesammelten Darstellung von Vorgängen
- Archiv (optional): analog zum Mappentypen ist ggf. eine Archivdefinition erforderlich, technische Feldnamen müssen übereinstimmen

**Hinweis:** Die Verwendung von *Zugriffsprofilen* als Aufgabenträger ist der Verwendung von *Benutzern* vorzuziehen, da bei organisatorischen Änderungen so nicht zwangsläufig Änderungen am Workflow notwendig sind.

Vor der Erstellung von Workflows sollten die wichtigsten Kriterien bereits bekannt sein, dazu gehören u.a.:

- Wann und wie beginnt der Prozess?
- Welche Schritte sind immer einzuhalten?
- Welche Schritte müssen bei bestimmten Bedingungen eingehalten werden?
- Welche Informationen werden an welchem Workflowschritt benötigt?
- Auf welche Stammdaten wird zugegriffen?
- Wann wird der Beleg archiviert?
- Erfolgt ein Datenaustausch mit Fremdprogrammen?
- Wie lange hat ein Anwender Zeit für die Aufgabe bzw. muss eine Eskalation stattfinden?

**Hinweis:** Liegen umfangreiche Kriterien bzw. komplexe Prozesse vor, sollten sogenannte Subworkflows modelliert werden, dies erhöht die Übersichtlichkeit und Anpassbarkeit von Workflows.

Eine besondere Rolle bei der Modellierung von Workflows hat das Berechtigungskonzept. Grundsätzlich wird zwischen verschiedenen Varianten des Berechtigungskonzeptes unterschieden:

- Keine Berechtigung: Jeder Benutzer sieht alles
- Personenbezogene Berechtigung: Jeder Benutzer sieht nur die eigenen Belege
- Gemischte Formen: Benutzer und definierte Gruppen sehen Belege, z.B. Benutzer sieht nur eigene Belege, besondere Gruppe sieht alle Belege

**Hinweis:** Ein Berechtigungskonzept sollte vorrangig anhand der kritischen Belege erstellt werden, das vereinfacht die Definition und spätere Administration von Workflows. Da gemischte Formen des Berechtigungskonzeptes häufig erforderlich sind, wird die Verwendung von *ACL* (Access Control List) bzw. *GACL* (Group Access Control List) empfohlen. Hinweise zu deren Konfigurationen sind in den zugehörigen Dokumentationen zu finden.

Neben generellen Berechtigungen für die Sichtbarkeit von Belegen können in Workflows insbesondere an Aktionen mit entsprechender Benutzerinteraktion Sichtbarkeitseinstellungen für Felder und Register definiert werden.

**Hinweis:** Sind in einem Workflow viele derartiger Aktionen mit unterschiedlichen Berechtigungen vorgesehen, wird empfohlen, Skript-Exits an Stelle der Workflowberechtigungen zu verwenden, weil diese sehr flexibel sind und die Anpassbarkeit von Workflows vereinfachen können. Hinweise zur Bereitstellung dieser Skript-Exits, z.B. *decreaseFieldRightOnFileViewScript* bzw. *hideRegisterOnFileViewScript* können der Dokumentation zur Portalscript API entnommen werden.

Sollen zusätzlich zu Workfloweinstellungen weitere, besondere Aktionen ausgelöst werden, kann dies ebenfalls flexibel per zusätzlichen Skript-Exits durchgeführt werden, Details können der Dokumentation zur Portalscript API entnommen werden, dies betrifft insbesondere folgende Skript-Exits:

- onForwardFileScript
- afterForwardFileScript
- onReceiveWorkflowActionScript
- beforeWorkAssignScript
- onConnectInboxScript
- hideForwardReceiverScript
- hideForwardOptionScript
- onWorkflowAgentScript