---
title: "Installation DOCUMENTS"
source: "https://otris.software/documents/manuals/books/installation-windows-de/installation.html"
---

# Installation DOCUMENTS

Das Windows Setup für DOCUMENTS wird als selbstextrahierendes Archiv bereitgestellt, bei Ausführung des Setups werden alle erforderlichen
Daten in ein temporäres Verzeichnis extrahiert und anschließend automatisch der Setup-Wizard gestartet, der bei der Installation unterstützt.
Im *Willkommen-Bildschirm* muss *Weiter* gewählt werden, um die Installationskonfiguration zu starten.


![InstallationStart](images/SetupWizard_1.png)

Abb. 1 - Start der Installation


## Lizenzbedingungen

Zur Fortsetzung der Installation muss den Lizenzbedingungen durch Aktivierung der entsprechenden Checkbox zugestimmt werden, die Lizenzbedingungen können bei Bedarf ausgedruckt werden.


![LicenseTerms](images/SetupWizard_2.png)

Abb. 2 - Lizenzbedingungen


## Installationstyp

Im nächsten Dialog wird der gewünschte Installationstyp ausgewählt, dies hat Einfluss auf einen Teil der zu installierenden Komponenten.


![InstallationType](images/SetupWizard_3.png)

Abb. 3 - Installationstyp

Es stehen drei Varianten zur Auswahl.


### Standard

Installiert DOCUMENTS ohne Beispielmandant in das Verzeichnis
`C:\Program Files\Documents5`


### Vollständig

Installiert DOCUMENTS mit allen Funktionen und  Beispielmandant in das Verzeichnis
`C:\Program Files\Documents5`


### Benutzerdefiniert

Beim benutzerdefinierten Setup alle möglichen Einstellungen spezifisch gewählt werden:

- der Speicherort der Installation kann verändert werden, wenn auf dem obersten Eintrag per Schaltfläche Durchsuchen der Ort gewählt wird
- über die Schaltfläche Datenträgerverwendung kann geprüft werden, ob auf dem gewählten Medium ausreichend Speicherplatz vorhanden ist
- die zu installierenden Funktionen können über die Microsoft Windows üblichen Einstellungen selbständig festgelegt werden


![InstallationTypeUser](images/SetupWizard_4.png)

Abb. 4 - Installationstyp Benutzerdefiniert

**Hinweis:** Sollen einzelne Funktionen auf getrennten Maschinen installiert werden, müssen alle anderen Funktionen jeweils deaktiviert werden (Auswahl: *Die gesamte Funktion wird nicht verfügbar sein*)

Alle nachfolgend dargestellten Installationseinstellungen beziehen sich auf das benutzerdefinierte Setup, dessen Verwendung generell empfohlen wird.


## DOCUMENTS-Server Einstellungen

In diesem Dialog können Einstellungen für die zugrunde liegende Server-Anwendung vorgenommen werden.


![ServerSettings](images/SetupWizard_5.png)

Abb. 5 - DOCUMENTS Server Einstellungen


### Einrichtung als Dienst

Über die Checkbox *Dienst ‚Documents5Server‘ registrieren* wird festgelegt, ob die Server-Komponente automatisch als Windows-Dienst eingerichtet werden soll. Die *Startart* kann bereits hier auf *Automatisch*, *Manuell* oder *Verzögert* festgelegt oder später am registrierten Dienst konfiguriert werden .
Eine Einrichtung des Servers als Dienst ist generell empfehlenswert, wobei diese Einrichtung auch später manuell vorgenommen werden kann.


### TCP/IP Port

Der *TCP/IP Port* wird für die Kommunikation zum DOCUMENTS-Server verwendet und ist standardmäßig auf den Wert 11000 festgelegt. Dieser kann im Falle bestehender Konflikte optional geändert werden. Stellen Sie vorab sicher, dass die Kommunikation auf den entsprechenden Port nicht durch eine Firewall-Richtlinie blockiert wird.
Spätere Änderungen des Ports sind in der Datei *documents.ini* (Installationsverzeichnis\server) vorzunehmen und bei Bedarf auch in anderen Konfigurationsdateien durchzuführen, z.B.: für Tomcat (web.xml im webapps-Deploy Verzeichnis) oder DOCUMENTS SOAP (docsoaproxy.ini).


### Repository

Im Feld *Repository* wird der physikalischen Ablageort der Dokumente und Dateien festgelegt, die durch die Benutzer oder automatisierte Prozesse in den Anwendungen hochgeladen werden. Neben einer lokalen Ablage ist ebenso die Eingabe einer Netzwerkadresse über einen UNC-Pfad möglich. Im Falle einer entfernten Ablage ist jedoch zu beachten, dass das Anmeldekonto des oben eingerichteten Dienstes Documents5Server über volle Lese- und Schreibrechte auf den ausgewählten Pfad verfügen muss.


### Datenbank Server

Unter *Datenbank Server* wird angegeben, unter welchem DBMS DOCUMENTS eingesetzt werden soll. Hierzu sind in jedem Fall die in den Voraussetzungen genannten Hinweise zu beachten. Die nachfolgend dargestellten Informationen zur Bereitstellung des Datenbank-Schema beziehen sich auf die Verwendung des Microsoft SQL Server.


### Microsoft SQL Server Tools installieren

Bei Auswahl der Datenbank-Auswahl als Microsoft SQL Server können die SQL-Tools automatisch mit installiert werden. Dies beinhaltet den SQL Server Datenbank Treiber mit TLS 1.2 Unterstützung (Microsoft ODBC/OLE Driver 17 for SQL Server) und die Command-Line Tools (inklusive bcp.exe) für die Volltextindexierung. Bei der Verwendung einer entfernten Datenbank (Datenbankserver befindet sich auf einer anderen Maschine) wird die Installation der SQL-Tools in jedem Fall empfohlen, wird dies nicht durchgeführt, müssen die Hinweise für die *Installation bei einer entfernten Datenbank* aus der Readme beachtet werden, die nach der Installation zur Verfügung steht (Installationsverzeichnis\server).


## Datenbank-Schema anlegen (nur für Microsoft SQL Server)

Vor der ersten Verwendung von DOCUMENTS muss ein Datenbankschema angelegt werden. Im Setup kann dies automatisch durchgeführt werden, wenn die Checkbox *Datenbank-Schema anlegen* aktiviert wird. Die automatische Anlage wird empfohlen, wird sie nicht gewählt, ist das Datenbankschema nach Abschluss der Installation selbständig anzulegen, Hinweise dazu sind in der entsprechenden Readme zu finden.


![DBSettings](images/SetupWizard_6.png)

Abb. 6 - SQL Server Parameter

Vor der Aktivierung der Checkbox ist zu prüfen, ob alle erforderlichen Informationen für den Datenbankserver zur Verfügung stehen. Anzugeben sind:

- der SQL-Server Name und Instanzname (wenn eine benannte Instanz verwendet werden soll) mit Unterstützungsaktionen zur Suche und zum Verbindungstest
- der gewünschte Datenbankname, Voreinstellung ist documents5 der Name kann über die entsprechende Schaltfläche geändert werden
- die Authentifizierung, wahlweise als integrierte Windows Authentifizierung oder SQL Server Authentifizierung mit Benutzerkonto / Passwort

Die erfolgreiche Verbindungsprüfung zum angegebenen Microsoft SQL Server wird auch farbig hervorgehoben:


![DBConnect](images/SetupWizard_7.png)

Abb. 7 - Erfolgreiche Verbindungsprüfung

Die hier erfassten Informationen werden in der Datei *documents.ini* (Installationsverzeichnis\server) gespeichert und können dort auch nachträglich angepasst werden.

**Hinweis:** Im weiteren verlauf des Setups wird geprüft, ob auf dem verwendeten Datenbankserver eine Datenbank mit dem angegeben Namen bereits existiert. Ist dies der Fall, wird eine Meldung ausgegeben, dass diese Datenbank gelöscht wird.


![DBInfo](images/SetupWizard_8.png)

Abb. 8 - Warnhinweis Datenbankname


## Lizenzdatei

In diesem Dialog kann eine vorhandene Lizenzdatei (pem-Datei) ausgewählt werden. Die Auswahl der korrekten Lizenzdatei an dieser Stelle wird empfohlen. Erfolgt hier keine Auswahl, ist die Lizenzdatei später manuell bereitzustellen (Installationsverzeichnis\server) und es ist ein Mandant anzulegen bzw. eine vorhandene Datensicherung eines bestehenden Mandanten einzuspielen. Weitere Informationen dazu sind dem Kapitel *Nachbereitung der Installation* zu entnehmen.


![LicenseSettings](images/SetupWizard_9.png)

Abb. 9 - Auswahl Lizenzdatei


## DOCUMENTS-Tomcat Einstellungen

In diesem Dialog können Einstellungen für den Servlet-Container (Tomcat) vorgenommen werden.


![TomcatSettings](images/SetupWizard_10.png)

Abb. 10 - DOCUMENTS Tomcat Einstellungen


### Einrichtung als Dienst

Über die Checkbox *Dienst ‚Documents5Tomcat‘ registrieren* wird festgelegt, ob die Webserver-Komponente automatisch als Windows-Dienst eingerichtet werden soll. Die *Startart* kann bereits hier auf *Automatisch*, *Manuell* oder *Verzögert* festgelegt oder später am registrierten Dienst konfiguriert werden .
Eine Einrichtung des Tomcat als Dienst ist generell empfehlenswert, wobei diese Einrichtung auch später manuell vorgenommen werden kann.


### TCP/IP Port und Shutdown Port

In diesen Feldern können die Standardports für den Tomcat angepasst werden, wenn die vorgeschlagene Konfiguration (8080 bzw. 8005) zu Konflikten mit anderen Anwendungen führen sollte. Änderungen dieser Ports sind nach einer Installation in der Datei *server.xml* (Installationsverzeichnis\tomcat\conf) möglich.


### Mandant

Wurde im vorherigen Schritt eine gültige Lizenzdatei ausgewählt, wird im Feld Mandant bereits der korrekte Wert eingetragen und sollte nicht geändert werden. Wurde vorher keine gültige Lizenzdatei ausgewählt, kann hier manuell der Mandantenname eingegeben werden, sofern dieser bekannt ist. Wird im Feld Mandant kein Wert eingestellt, sind die Hinweise aus dem Kapitel *Nachbereitung der Installation* zu entnehmen.


### Documents Host und Documents Port

Im Feld *Documents Host* muss die IP-Adresse oder der vollständige Name (FQDN) der Maschine angegeben werden, auf der die Documents5Server-Anwendung läuft. Eine Änderung des Standardwertes 127.0.0.1 ist nur notwendig, wenn die Webserver-Komponente auf einer anderen Maschine läuft.
Der im Feld *Documents Port* eingegebene Wert muss mit dem TCP/IP Port übereinstimmen, der bei den DOCUMENTS-Server Einstellungen angegeben wurde.
Änderungen dieser Werte können nach Abschluss der Installation manuell in der Datei *web.xml* (Tomcat webapps-Deploy Verzeichnis) durchgeführt werden (siehe Parameter *DocumentsServerIpAddress* bzw. *DocumentsServerPort*).


## DOCUMENTS-SOAP Einstellungen

In diesem Dialog können Einstellungen für die DOCUMENTS-SOAP-Schnittstelle vorgenommen werden.


![SoapSettings](images/SetupWizard_11.png)

Abb. 11 - DOCUMENTS SOAP Einstellungen


### Einrichtung als Dienst

Über die Checkbox *Dienst ‚Documents5Soap‘ registrieren* wird festgelegt, ob die SOAP-Komponente automatisch als Windows-Dienst eingerichtet werden soll. Die *Startart* kann bereits hier auf *Automatisch*, *Manuell* oder *Verzögert* festgelegt oder später am registrierten Dienst konfiguriert werden .
Eine Einrichtung der SOAP-Schnittstelle als Dienst ist generell empfehlenswert, wobei diese Einrichtung auch später manuell vorgenommen werden kann.


### TCP/IP Port

Der *TCP/IP Port* wird für die Kommunikation zur SOAP-Schnittstelle verwendet und ist standardmäßig auf den Wert 11001 festgelegt. Dieser kann im Falle bestehender Konflikte optional geändert werden. Spätere Änderungen des Ports sind in der Datei *docsoapproxy.ini* (Installationsverzeichnis\soapproxy) vorzunehmen.


### Documents Host und Documents Port

Im Feld *Documents Host* muss die IP-Adresse oder der vollständige Name (FQDN) der Maschine angegeben werden, auf der die Documents5Server-Anwendung läuft. Eine Änderung des Standardwertes 127.0.0.1 ist nur notwendig, wenn die Documents5Server-Anwendung auf einer anderen Maschine läuft als die SOAP-Anwendung läuft.
Der im Feld *Documents Port* eingegebene Wert muss mit dem TCP/IP Port übereinstimmen, der bei den DOCUMENTS-Server Einstellungen angegeben wurde.
Änderungen dieser Werte können nach Abschluss der Installation manuell in der Datei *docsoapproxy.ini* (Installationsverzeichnis\soapproxy) durchgeführt werden.


## DOCUMENTS-Archive Einstellungen

In diesem Dialog können Einstellungen für DOCUMENTS Archive vorgenommen werden.


![ArchiveSettings](images/SetupWizard_12.png)

Abb. 12 - DOCUMENTS Archive Einstellungen


### Einrichtung als Dienst

Über die Checkbox *Dienst ‚Documents5Archive‘ registrieren* wird festgelegt, ob der Archivserver automatisch als Windows-Dienst eingerichtet werden soll. Die *Startart* kann bereits hier auf *Automatisch*, *Manuell* oder *Verzögert* festgelegt oder später am registrierten Dienst konfiguriert werden.
Eine Einrichtung des Archivservers als Dienst ist generell empfehlenswert, wobei diese Einrichtung auch später manuell vorgenommen werden kann.


### TCP/IP Port

In diesem Feld kann der Standardport für den Archivserver angepasst werden, wenn die vorgeschlagene Konfiguration (8085) zu Konflikten mit anderen Anwendungen führen sollte. Änderungen des Ports sind nach einer Installation in der Datei *httpd.conf* (Installationsverzeichnis\eas\http\conf) möglich.


### WORM-Verzeichnis und RW-Verzeichnis

Für den Archivserver sind zwei Verzeichnisse anzugeben:

- Das WORM-Verzeichnis stellt den Hochsicherheitsbereich für revisionssicher archivierte Daten dar. Der Speicherort ist so ausgelegt, dass dort Daten angelegt und lesend abgefragt, jedoch nicht verändert werden (Write Once Read Many). Für diesen Repository-Bereich ist daher wichtig, dass ausreichend Platz in einem auf Sicherheit ausgelegten Speicherverbund besteht.
- Das RW-Verzeichnis enthält die Verwaltungsdaten des Archivs (z.B. Suchindex, Inhaltsverzeichnis, Audit Trail). In diesem Bereich erfolgen bei jeder Benutzeraktion auf das Archiv zahlreiche Zugriffe. Für diesen Repository-Bereich ist daher wichtig, das das eingesetzte Speichermedium einen schnellen lesenden und schreibenden Zugriff jederzeit ermöglicht.


### Archiv Storage anlegen und Archivname

Durch Aktivieren der Checkbox *Archiv Storage anlegen* wird durch die Installation automatisch bereits ein Archiv mit dem in *Archivname* angegebenen Namen angelegt. Nach der Installation muss dessen Anbindung in DOCUMENTS noch weiter konfiguriert werden.


## DOCUMENTS Shortcuts

In diesem Dialog kann festgelegt werden, ob die DOCUMENTS Programmsymbole auf dem Desktop und im Startmenü angezeigt werden sollen (empfohlen).


![ShortcutSettings](images/SetupWizard_13.png)

Abb. 13 - DOCUMENTS Shortcuts


## Sicherheitsabfrage und Fertigstellen der Installation

DOCUMENTS ist nun bereit zur Installation, über die Schaltfläche *Installieren* wird die Installation mit den vorher gewählten Einstellungen ausgeführt.


![StartInstallation](images/SetupWizard_14.png)

Abb. 14 - Start der DOCUMENTS Installation

Erfolgte die Anmeldung nicht als *Administrator* und ist die Benutzerkontensteuerung (*User Account Control (UAC)*) aktiv, ist die Schaltfläche durch ein *Shield* überlagert, damit kann, passend zu Microsoft Windows Richtlinien die Ausführung explizit als Administrator ausgeführt werden.

Die Installationsroutine stellt im weiteren Verlauf jeweils den Status der Komponenteninstallation dar, ist die Installation beendet, wird ein Dialog angezeigt, über die Schaltfläche *Fertigstellen* wird die Installation beendet.


![FinishInstallation](images/SetupWizard_15.png)

Abb. 15 - Fertigstellen der DOCUMENTS Installation

Die DOCUMENTS Installation ist damit abgeschlossen. Es sind die Informationen aus dem Kapitel *Nachbereitung der Installation* zu beachten.