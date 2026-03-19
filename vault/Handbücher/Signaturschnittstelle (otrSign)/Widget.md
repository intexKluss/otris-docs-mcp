---
title: "Signaturanforderung über ein Widget"
source: "https://otris.software/documents/manuals/books/otrsign/sign-widget.html"
---

# Signaturanforderung über ein Widget

Neben dem klassischen, geführten Dialog zum Versenden einer Signaturanforderung kann diese auch direkt beim Signaturanbieter gestellt werden. In diesem Fall öffnet sich beim Anfordern der Signatur ein Popup-Fenster mit der Anwendung des jeweiligen Anbieters.

Aktuell unterstützen folgende Anbieter diese Option:

- DocuSign
- AdobeSign
- Moxis

Die Option, Signaturanforderungen über ein Widget zu stellen, ist standardmäßig deaktiviert. Sie kann jedoch über das AdminCenter aktiviert werden. Dazu ist über den Konfigurationsordner *Signaturschnittstelle* der Mappentyp auszuwählen, für den Anforderungen immer über ein Widget abgewickelt werden sollen. Alternativ kann diese Option unter *Globale Einstellungen* für alle Mappentypen aktiviert werden. Anschließend ist unter dem Reiter *Weitere Einstellungen* die Checkbox *Signaturanfrage nur beim Anbieter erstellen (Widget)* zu aktivieren. Abschließend muss die Konfiguration gespeichert werden.


![Signatur-Widget aktivieren](images/admincenter-17.png)

Abb. 49 - Signatur-Widget aktivieren

Sobald die Widget-Option aktiviert wurde, erfolgt die Signaturanfrage wie folgt:

1. Dokumentenauswahl: Wie zuvor muss der Benutzer die Dokumente auswählen, die für die Signatur vorgesehen sind. Eine Mehrfachauswahl von Dokumenten ist möglich.
Abb. 50 - Aktion: Signatur anfordern an der Mappe
2. Vorgangserstellung Im Hintergrund wird ein Vorgang beim Signaturanbieter erstellt und die ausgewählten Dokumente werden hochgeladen. Der Benutzer sieht dabei folgenden Bildschirm:
Abb. 51 - Vorbereitung Signaturvorgang
3. Popup-Fenster mit Anbieterapplikation: Nach erfolgreicher Vorgangserstellung öffnet sich ein Popup mit der Anwendung des Anbieters. Sollte sich kein Fenster öffnen, muss überprüft werden, ob der Browser Popups blockiert. Der Signaturvorgang kann anschließend im Fenster definiert werden. Je nach Anbieter ist möglicherweise eine vorherige Anmeldung erforderlich. In diesem Fall erscheint ein Login-Bildschirm. Der Login muss dem Benutzerkonto entsprechen, das mit dem otris Documents-Benutzer verknüpft ist.
Abb. 52 - Signaturvorgang im Widget (DocuSign)
4. Abschluss der Anforderung: Nach dem Versenden der Signaturanfrage, schließt sich das Popup-Fenster automatisch und der erstellte Vorgang öffnet sich (Verhalten bei DocuSign) oder es erscheint das Dashboard des Signaturanbieters und das Popup-Fenster muss manuell geschlossen werden (Verhalten bei AdobeSign und Moxis). In jedem Fall wurde parallel in Documents ein Vorgang erstellt, welcher den Fortschritt der Anfrage überwacht.