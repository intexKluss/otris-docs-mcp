---
title: "Globale Einstellungen"
source: "https://otris.software/documents/manuals/books/app-doc/global_config.html"
---

# Globale Einstellungen

In diesem Bereich können Sie das Verhalten der Anwendung
genauer steuern, indem Sie Funktionen hinzufügen. Vergleichbare
Einstellungen sind auch für jede App-Konfiguration einzeln möglich,
hierzu finden Sie weitere Informationen in dem Kapitel "App-Konfiguration".
Die hier beschriebenen Einstellungen steuern globale Eigenschaften.

Die Aktion zur Anlage einer globalen Steuerung wird erst dann angeboten,
wenn mehr als eine App-Konfiguration vorhanden ist.

Beim parallelen Betrieb mehrerer Konfigurationen in einer App bietet
dieser Bereich hier die Möglichkeit, bspw. einen globalen Titel und ein
globales Design zu bestimmen. Dieses wird dann für die neue Hauptseite
verwendet, auf der letztlich aus den verschiedenen Konfigurationen
gewählt wird.


![Globale Einstellungen](media/global-settings.png)

Abb. 40 - Globale Einstellungen

Aktuell sind folgende Funktionen einsetzbar:

- enablePush (Pushbenachrichtigungen aktivieren): Aktiviert die Registrierung für Push-Benachrichtigungen.
- clearBadge (Zähler beim Start zurücksetzen): Wenn aktiviert wird der Benachrichtigungszähler am App Icon beim Start der App zurückgesetzt.
- disableBinaryEncryption (Binärdatenverschlüsslung deaktivieren): Deaktiviert die Verschlüsselung von Dokumenten (zum Beispiel PDFs), welche an Mappen hängen. Diese Einstellung beeinflusst nicht die Daten in Mappenfeldern o.Ä. Um sicherzustellen, dass die Einstellung tatsächlich wirksam ist müssen nach Ändern der Einstellung auf jedem Gerät die Daten gelöscht und neu synchronisiert werden. Dies geschieht nicht automatisch!
- appTitle (Titel): Legt den Titel fest, welcher im Hauptbildschirm der App angezeigt wird.
- theme (Design): Legt ein globales Design fest, welches im Hauptbildschirm der App angezeigt wird. Folgende Auswahlmöglichkeiten sind aktuell verfügbar:
contract - contract (Hellblau)
corporate - corporate (Grün)
compliance - compliance (Gold)
privacy - privacy (Rot)
documents - DOCUMENTS (Orange)
workforce - workforce (Magenta)
easyblue - EASY-blau (Hellblau)
default - myFavorites (Dunkelblau)
beliebige Hexfarbe
- Daten - Blockintervall: Definiert das maximale Intervall in Stunden, um die App ohne Login zu nutzen. Wenn diese Option eingestellt ist, wird die App nach diesem Intervall blockiert, und kann nur mit einem erfolgreichem Login freigeschaltet werden. Passiert das Login nicht in dem festgelegten Intervall, werden alle Daten entfernt.
- Daten - Löschintervall: Definiert das maximale Intervall in Stunden, um die App mit einen Login zu freischalten.


## Design

Sie haben die Möglichkeit ein beliebiges Design für die App zu verwenden.
Mit der Einstellung einer Hexfarbe (z.B. #880000) in den Globalen Einstellungen können
Sie eine beliebige Farbe konfigurieren. Wenn *Design* nicht bestimmt wurde, oder die gegebene
Hexfarbe nicht korrekt ist, wird das Standard-Design der App angewendet (z.B. Hellblau - contract, Dunkelblau - myFavorites).


![Globales Design](media/global-settings-default-design.png)

Abb. 41 - Default design![Globales Design](media/global-settings-custom-design.png)

Abb. 42 - Design #880000