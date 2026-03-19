---
title: "Nachbereitung der Installation"
source: "https://otris.software/documents/manuals/books/installation-windows-de/postinstallation.html"
---

# Nachbereitung der Installation


## Test der Installation


### Anwendungskomponenten als Konsolenanwendung starten

Nach einem Setup wird empfohlen, die jeweils installierten Anwendungskomponenten einmal als Konsolenanwendung zu starten, da so ggf. auftretende Meldungen einfach nachvollzogen werden können. Die Konsolenanwendungen stehen z.B. im Startmenü oder als Programmsymbole auf dem Desktop bereit, wenn die DOCUMENTS Shortcuts beim Setup mit eingerichtet wurden (empfohlen). Beim Start der Anwendungen kann es bei aktiver Windows-UAC erforderlich sein, diese explizit mit administrativen Rechten auszuführen. Ebenso kann es sein, dass die Konfiguration der Windows-Firewall um einige Ausnahmen bzw. Richtlinien erweitert werden muss.


### Verbindung per Browser herstellen

Eine Verbindung per Browser kann erst hergestellt werden, wenn ein Mandant im System vorhanden ist.
Wurde beim Setup angegeben, dass der Beispielmandant *Samples (Komponenten-Feature Serverkomponente)* mit installiert werden sollte, wird dieser beim ersten Start des DOCUMENTS Server eingerichtet, eine Verbindung per Browser kann direkt mit Angabe des entsprechenden Tomcat-Ports erfolgen, z.B.:

`http://localhost:8080`

Wurde kein Beispielmandant installiert, muss ein Mandant per DOCUMENTS-Manager passend zur Lizenz angelegt und weiter konfiguriert werden. Je nach eingesetzter Lösung, z.B. otris contract, otris corporate, otris compliance oder otris dossier werden in den Dokumentationen zur jeweiligen Lösung weitere Hinweise dazu gegeben.

Liegt eine Datensicherung vor, z.B. für die automatische Anlage einer Lösung oder mit Daten eines Vorgängersystems, die in die neue Installation übertragen werden sollen, kann diese Datensicherung per DOCUMENTS-Manager eingespielt werden, dabei ist wie folgt vorzugehen:

- Anmeldung am DOCUMENTS-Manager als Benutzer admin, nach einer Neuinstallation ohne Passwort und ohne Angabe eines Mandanten
- Über den Menüeintrag Administration / Datensicherung einspielen den Dialog öffnen und folgende Werte angeben bzw. per Schaltfläche auswählen und hochladen:
Normale Inhalte: Beinhaltet die Metadaten einer Datensicherung als zip-Datei (Mandantenname.zip)
Documents Inhalte: Beinhaltet das Repository einer Datensicherung als zip-Datei (Mandantenname_documents.zip)
.pem-Datei: Hier ist die korrekte Lizenzdatei auszuwählen
- Über die Schaltfläche Fertigstellen wird das Einspielen der Datensicherung gestartet.

Eine Verbindung per Browser kann direkt mit Angabe des entsprechenden Tomcat-Ports und der Angabe des korrekten Mandantennamens erfolgen, wenn der Mandantenname *contract* lautet z.B.:

`http://localhost:8080/documents/?pri=contract`


## Dienste konfigurieren

Wenn beim Setup die Registrierung der Dienste aktiviert wurde (empfohlen), sollten diese weiter konfiguriert werden. In der Windows-Server Diensteverwaltung stehen je nach Einstellungen im Setup folgende Dienste zur Verfügung:

- Documents5Server
- Documents5Tomcat8
- Documents5Soap
- Documents5Archive

In den Diensten kann jeweils der Starttyp (*Automatisch*, *Manuell* oder *Verzögert*) angepasst werden.
Bei den Diensten *Documents5Server* und *Documents5Archive* ist zusätzlich darauf zu achten, dass auf dem Register *Anmelden* ein Benutzerkonto angegeben wird, dass vollen Zugriff auf die während des Setups angegebenen Verzeichnisse hat (DOCUMENTS-Repository bzw. Archiv WORM- und RW-Verzeichnis).

**Hinweis:** Wurde beim Setup auf die automatische Registrierung von Diensten verzichtet, kann das jederzeit manuell nachgeholt werden, indem über das Startmenü der Eintrag *Register all DOCUMENTS Services* als Administrator ausgeführt wird.


## Lösungsspezifische Anpassungen vornehmen

Je nach eingesetzter Lösung, z.B. otris contract, otris corporate, otris compliance oder otris dossier ist zu prüfen, ob zusätzliche Installationen oder besondere weitere Konfigurationen notwendig sind. Dies beinhaltet z.B.:

- Installation der JavaScript-Laufzeitumgebung Node.js (bei Verwendung des CREATOR-Moduls)
- Installation von LibreOffice (für die PDF-Konvertierung von Microsoft Office Dateien)
- besondere Konfigurationen an der Initialisierungsdatei documents.ini (Installationsverzeichnis\server) für eine Lösung oder bei Verwendung einer Oracle-Datenbank

Die Informationen sind den Dokumentationen zur entsprechenden Lösung zu entnehmen. Zusätzlich ist jeweils die aktuelle Dokumentation zur den *Systemvoraussetzungen* zu beachten.


## Datensicherung einrichten

In jedem Fall sollten regelmäßige Datensicherungen eingerichtet werden. Die DOCUMENTS Datenhaltung besteht grundsätzlich aus folgenden Bereichen:

- DOCUMENTS Datenbank
- DOCUMENTS Repository
- Archivdaten (wenn die Archivkomponente installiert wurde)


### DOCUMENTS Datenbank

Sämtliche Meta-Informationen des Systems sowie alle Daten, welche die Benutzer in der Web-Anwendung eingegeben, werden in der angeschlossenen Datenbank verwaltet. Mit den jeweiligen Werkzeugen des verwendeten Datenbanksystems ist daher ein Wartungsplan zur regelmäßigen Sicherung der Datenbank zu erstellen.


### DOCUMENTS Repository

Durch Benutzer hochgeladene Dateien und Dokumente sowie Dokumentenvorlagen und Workflow-Sheets werden in einer Verzeichnisstruktur (Repository) gespeichert. Das gesamte Repository ist ebenfalls mit geeigneten Mitteln in eine Datensicherung einzubeziehen.
Weitere Hinweise zu Datensicherungen können der Dokumentation zum DOCUMENTS-Manager entnommen werden.


### Archivdaten

Wenn die Archivkomponente installiert wurde, sind alle Daten des bei der Installation angegebenen WORM- bzw. RW-Verzeichnisses mit geeigneten Mitteln in eine Datensicherung einzubeziehen.
Weitere Hinweise zur Datensicherung der Archivdaten können dem Archiv-Sicherungshandbuch entnommen werden.