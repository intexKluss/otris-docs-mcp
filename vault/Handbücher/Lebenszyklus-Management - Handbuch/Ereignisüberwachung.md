---
title: "Ereignisüberwachung"
source: "https://otris.software/documents/manuals/books/otrlifecycle/event-list.html"
---

# Ereignisüberwachung

Bei der automatischen Durchführung der Regelaktionen durch den Documents-Server können Fehler auftreten, z.B.:

- Aktion Archivieren soll durchgeführt werden, der entsprechende Archivserver ist aber nicht verfügbar
- Aktion Löschen soll durchgeführt werden, der Job-Benutzer hat aber keine ausreichenden Berechtigungen
- Aktion Workflow starten kann nicht ausgeführt werden, weil sich der Vorgang noch in einem anderen Workflow befindet
- Aktion Script ausführen kann nicht gestartet werden, weil das Script nicht mehr vorhanden ist

Treten derartige Fehler auf, wird der Fehlschlag der Lebenszyklus-Aktion im Status des Vorgangs protokolliert.
Außerdem werden diese Vorgänge in der Liste der **Ereignismeldungen** gruppiert nach Vorgangsart dargestellt.


![action-error-1](assets/action-error-1.png)

Abb. 17 - Liste Ereignismeldungen mit Statusmeldung im Vorgang

Per Klick auf einen Eintrag kann direkt zum Vorgang gewechselt werden, um im Status die detaillierte Fehlermeldung einsehen zu können.

Per Markierung eines oder mehrere Vorgänge in der Liste und Ausführung der Aktion **Status zurücksetzen**, wird der Vorgang wieder mit der ursprünglichen Aktion zur Verarbeitung durch den Documents-Server bereitgestellt.


![action-error-2](assets/action-error-2.png)

Abb. 18 - Liste Ereignismeldungen, Status zurücksetzen