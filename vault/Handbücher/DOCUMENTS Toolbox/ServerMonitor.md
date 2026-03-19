---
title: "ServerMonitor"
source: "https://otris.software/documents/manuals/books/toolbox/toolbox-server-console.html"
---

# ServerMonitor

Der ServerMonitor bietet gegenüber der Standard-Konsole viele erweiterte Funktionen, wie zum Beispiel: Filterung nach Inhalt, Log-Level und Mandanten, einen JSON-Viewer und das direkte Ausführen von Skripten und Wartungsoptionen.


# Übersicht mit Konsolenfenster (links)


## Quellenauswahl und AutoScrolling

Standardmäßig ist als Quelle die Live Konsole mit der AutoScroll Option des jeweiligen Mandanten ausgewählt. Mit dieser Auswahl zeigt das Konsolenfenster das kontinuierliche Logging an.
Alternativ kann über die Auswahl "Quelle" auch eine ältere Log Datei ausgewählt und heruntergeladen werden, um gewünschte Informationen mit den Such- und Filterfunktionen auszulesen.

Über die unten stehende Auswahl "Alles löschen" wird z.B. beim Live Logging das gesamte Konsolenfenster geleert.


## Suchfunktion

Das Suchfeld des ServerMonitors ermöglicht die Suche von Begriffen. Die Navigation zum vorherigen oder nächsten Treffer ist über die Pfeile möglich. Treffer werden blau markiert. Weitere Konsolen-Logs werden weiterhin angezeigt.

Beispiel: Suche mit dem Suchwort "run"
![Konsole](assets/console-search.png)


## Filterfunktion

Über die Filterfunktion können Konsolen-Logs gefiltert werden. Es handelt sich hierbei um starkes Tool um präzise die gewünschten Log-Nachrichten anzuzeigen. Nur noch Treffer des Keywords und der ausgewählten Log-Level werden angezeigt. Die Filterung ist jeweils immer nur clientseitig.

Beispiel: Filtern nach dem Keyword "dashboard"
![Konsole](assets/console-filter.png)


### Log-Level

Jegliche Log-Level sind jeweils einzeln an- und abwählbar.

Durch otrLogger unterstützte Level:

- DEBUG
- INFO
- WARN
- ERROR
- FATAL

Weitere Log-Level:

- CLIENT: Client Connection Nachrichten
- NONE: Meldungen ohne Log Level (alle anderen)
- SRVMON: Meldungen vom ServerMonitor (existiert nur clientseitig)
- SCEXEC: Script Execution Meldungen (existiert nur clientseitig)
- SCLOG: Script Log Meldungen (siehe Skripting)


#### otrLogger vs. util.out

Über den otrLogger können die spezifischen Log-Level definiert werden. Util.out Logs werden immer unter dem unspezifischen Log-Level NONE einsortiert bis auf den Fall, dass explizit die Keywords "Error" oder "Warning" genutzt wurden. Es ist somit zu empfehlen den otrLogger inkl. richtiger Zuordnung zu nutzten.


### Mandant

Filterung von Nachrichten eines Mandanten, sofern erkennbar. Die Mandantenauswahl bezieht sich nur auf die Log-Nachrichten und es wird kein Mandantenwechsel durchgeführt. Der ServerMonitor bleibt weiterhin mit der anfangs ausgewählten Server- oder Mandantenverbindung angemeldet.


### Inhalt

- Nur noch Nachrichten mit dem Keyword werden angezeigt
- Negativsuche: Begriffe herausfiltern durch vorangestelltes Minuszeichen: -[Keyword]
- weitere Positiv- und Negativ-Suchbegriffe werden ebenfalls verUNDet


## Scripting

Skripte können direkt über den ServerMonitor ausgeführt werden. Sofern die Serverseitigen Logging Optionen eingeschaltet sind, lassen sich die Log Daten in der Live Konsole beobachten.


### Serverskripte

Die Auswahlliste der Serverskripte zeigt alle vorhandenen Serverskripte des jeweiligen Mandanten an. Diese können ausgewählt und mit dem nebenstehenden Button am Mandanten ausgeführt werden.


### Eigene Skripte

In dem unten stehenden Textfeld können eigene Skripte direkt formuliert oder eingefügt werden. Mit dem nebenstehenden Button wird der Code am Mandanten ausgeführt.


### Skriptnutzer

Für die Ausführung eines Skripts muss ein Skriptnutzer gewählt werden in dessen Kontext das Skript ausgeführt wird. Die Auswahlliste führt jegliche möglichen Skriptnutzer auf z.B. den default admin.


# Einstellungsreiter (rechts)


## Übersicht

Der Reiter Übersicht zeigt weitere Informationen zu einer links in der Konsole ausgewählten Nachricht. Hier können weitere Informationen stehen, die nicht im Konsolenfenster daneben aufgeführt werden. Abhängig von der jeweiligen Nachricht werden spezifische Informationen aufgelistet z.B. die Ausführungsdauer bei Workflow Prozessen.


## JSON-Ansicht

Im Reiter JSON-Ansicht kann der Rückgabewert einer Nachricht in einer aufklappbaren Liste angezeigt werden, wenn dieser im JSON-Format vorliegt.

![Konsole](assets/console-json.png)


## Server-Optionen

![Konsole](assets/console-server-options.png)


### JS Logging

Das Log-Level, mit dem die Nachrichten geloggt werden sollen, ist hier auswählbar. Die Auswahl ist serverseitig und beeinflusst die clientseitigen Filtermöglichkeiten. (Bsp. DEBUG Log-Level muss in Server-Optionen ausgewählt werden, damit DEBUG Logs in der Konsole angezeigt werden).

- Die Log-Level sind in einer Hierarchie angeordnet und schließen die in der Dropdown Auswahl zuvor aufgelisteten Level mit ein.
Bsp. Log-Level Debug loggt alle Log-Level
- Formatauswahl als Text oder JSON möglich.


### Skript Logging

Loggt die Ausführung aller Skripte das Log-Level für die Skriptausführung (SCLOG) sowie das Format können ausgewählt werden. Möglicher Einsatzzweck ist das Debugging in Verbindung mit Filterbegriffen.

Einzeln auswählbare Log-Level:

- INPARAM: Input Parameter der Skripte
- SCRIPT: Script Log Meldungen Bsp. Script Finished
- OUTPARAM: Output Parameter des Skripts
- OUTPUT: Output kann im JSON Format angezeigt werden Bsp. Util.out Output


### Formatauswahl JSON Logging

Bei der Formatauswahl des JSON Loggings werden erweiterte Informationen geloggt, diese können im Reiter "Übersicht" angezeigt werden. Das Konsolenfenster stellt die Log-Nachrichten trotz veränderten Format unverändert dar, jedoch kann das veränderte Format per Rechtsklick kopiert werden.


### Wartungsoperationen

Vorhandene Wartungsoperationen können direkt über die Liste ausgewählt und ausgeführt werden. Freitexteingaben weiterer Wartungsoperationen sind ebenso möglich.


### Server Debugging

Auswahl des Verbosity-Levels, mit dem Log-Meldungen geloggt werden.
Ein höhere verbosity-Level schließt die niedrigeren immer mit ein. Die mögliche Level-Auswahl beträgt 0-15.


## Clients

In diesem Reiter alle derzeit bestehenden Clients aufgelistet. Mit einem Klick kann ein Client ausgewählt und über den Button "Verbindung trennen" getrennt werden.