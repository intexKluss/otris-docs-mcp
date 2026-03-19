---
title: "Documents-Server Installation mit SQL Server"
source: "https://otris.software/documents/manuals/books/documentsserver_readme-sqlserver-de/"
---

# Documents-Server Installation mit SQL Server

WICHTIG:
Führen Sie die Einrichtung der Datenbank auf jeden Fall mit dem
betreuenden Datenbank-Administrator durch!


## Hinweise zur Installation des Microsoft SQL Servers

Die folgenden Versionen des MS SQL Servers werden unterstützt:

- MS SQL Server 2025 (ab documentsOS 6.2.1)
- MS SQL Server 2022
- MS SQL Server 2019
- MS SQL Server 2017
- MS SQL Server 2016

Verwenden Sie als Standard-Sortierung nur Case-Insensitive Formate wie bspw.
`Latin1_General_CI_AS` (also nicht `Latin1_General_CS_AS`), da sonst Probleme bei
der Kennwortänderung von DOCUMENTS-Benutzerkonten auftreten können.


### Anmeldungen / Benutzerkonten im MS SQL Server

Es muss zwischen zwei verschiedenen Anmeldungen unterschieden werden.
Dies ist zu einem der Benutzer, der das Datenbankschema `documents6` anlegt
(im Weiteren "*DB-Creator*" genannt) und dem Benutzer, mit dem sich der
DocumentsServer später am Datenbank-Server anmeldet und die Datenbank
`documents6` verwendet (im Weiteren "*DB-User*" genannt).


#### Schema einspielen

Während des DOCUMENTS 6 Setups kann der Benutzer auswählen, ob er Windows-Authentifizierung oder SQL-Server Authentifizierung verwenden möchte, um das Schema `documents6` einzuspielen.
Daraus ergeben sich unterschiedliche Benutzer (*DB-Creator*) für die Anmeldung
am SQL-Server:

- SQL-Server Authentifizierung: DB-Creator = der im Setup-Dialog angegebene Benutzer (SQL-User)
- Windows-Authentifizierung: DB-Creator = NT-AUTORITÄT\SYSTEM Hinweis:
Bei Windows-Authentifizierung ist NT-AUTORITÄT\SYSTEM der DB-Creator, da das Setup Administrator-Rechte anfordert und damit das Setup nicht mehr im Kontext des angemeldeten Windows-Benutzes ausgeführt wird.

Dem Benutzer *DB-Creator* (`NT-AUTORITÄT\SYSTEM` bzw. SQL-User) muss im
SQL-Server die Serverrolle `dbcreator` zugewiesen werden.


#### Verwendung der Datenbank durch den DocumentsServer

Die spätere Ausführung des DocumentsServers als Applikation oder Dienst findet
in der Regel dann in einem anderen Benutzerkontext (*DB-User*) mit geringeren
Rechten statt.

Es wird wiederum unterschieden, ob die Windows-Authentifizierung oder die
SQL-Server Authentifizierung verwendet werden soll. Wenn in der `documents.ini`
ein `DBUser` spezifiziert wird, dann wird SQL-Server Authentifizierung durchgeführt,
ansonsten Windows-Authentifizierung.

- SQL-Server Authentifizierung: DB-User = DBUser aus documents.ini
- Windows-Authentifizierung
bei Start als Applikation: DB-User = der aktuell angemeldetet Windows-Benutzer
bei Start als Dienst: DB-User = NT-AUTORITÄT\SYSTEM oder ein beim Dienst abweichend definiertes Benutzerkonto.

Der *DB-User* benötigt SQL-seitig die folgenden Berechtigungen

- Serverrolle bulkadmin
public
- Zugriff auf die Datenbank documents6
- Datenbankrollen db_datareader db_datawriter db_ddladmin db_executor Die Rolle db_executor ist keine Standard-Rolle vom SQL Server, sondern wird durch das documents6.sql Script beim Schema einspielen angelegt. Fehlt diese Rolle in ihrer DB, da das Schema in der Vergangenheit angelegt wurde und das System gepatched wurde, dann legen Sie bitte die Rolle im documents6-Schema an mit: CREATE ROLE db_executor
GRANT EXECUTE TO db_executor


### Allgemeine Hinweise

- Bitte nutzen Sie immer die aktuellsten Service Packs.
- Richten Sie die Datenbank mit dem verantwortlichen DB-Administrator ein.
- Wenn Sie als Wiederherstellungsmodell "Vollständig" auswählen, müssen Sie regelmässige Backups der Datenbank erstellen, da sonst das Transaktionsprotokoll SEHR gross wird.
- Erstellen Sie einen Wartungsplan zur regelmässigen Datensicherung der Datenbank, sowie dem Update der Statistiken.


## Installationshinweise DOCUMENTS 6

Ab DOCUMENTS 5 werden nur noch 64-bit Betriebssysteme für den Server unterstützt.

Installieren Sie das Setup, wählen Sie SQL Server als Datenbank aus und
folgen Sie den Anweisungen des Installationsprogramms.

Wenn die Konfiguration des SQL Server nur Verbindungen mit mind. TLS 1.2
zuläßt, muss die Option "Microsoft SQL Server Tools installieren" ausgewählt werden.
Damit werden dann auch der Datenbank-Treiber "ODBC Driver 17 for SQL Server" sowie
die "Command Line Utilities 15" installiert.

Der Datenbank-Treiber `ODBC Driver 17 for SQL Server` unterstützt TLS 1.2 und
die `Command Line Utilities 15` enthalten das Bulk-Insert Tools `bcp.exe`, welches
für die Volltext-Indexierung benötigt wird.


## Konfiguration des DOCUMENTS-Server per .ini-Datei

Der DOCUMENTS-Server überprüft bei Anwendungsstart, ob sich im
Ausführungsverzeichnis des Servers die Datei
`documents.ini`
befindet und übernimmt die dort angebenen Einstellungen.

Die allgemeine Syntax der, in der Datei vorkommenden Elemente ist wie
folgt definiert:

- Kommentare erstrecken sich immer über eine ganze Zeile. Sie beginnen mit dem Zeichen # oder ;. Vor dem Kommentarzeichen dürfen nur Leerzeichen bzw. Tabulatoren sein.
- Ein Wert wird zunächst durch ein Schlüsselwort charakterisiert. Die Groß- und Kleinschreibung spielt bei diesem Schlüsselwort keine Rolle. Bei selbstdefinierten Properties (siehe unten) wird zwischen Groß- und Kleinschreibung unterschieden.
- Zwischen dem Schlüsselwort und dem Wert dürfen nur Leerzeichen oder Tabulatoren stehen. Werte dürfen nicht in Anführungszeichen oder ähn- liches geschrieben werden.
- Schlüsselwörter, die einen booleschen Wert erwarten, dürfen nur die Werte true und false erhalten.
- Jedes Schlüsselwort darf in der Datei nur einmal vorkommen. Wird ein Schlüsselwort mehrfach verwendet, ist das Verhalten nicht definiert.

In dieser Datei sind unter anderem folgende vordefinierte Direktiven enthalten:
(es wird sich auf die wichtigen Direktiven für den DOCUMENTS-Server beschränkt)

| Schlüsselwort | Bedeutung |
| --- | --- |
| DBServer | Name der Datenbank mit Datenbank-Server |
| DBUser | Name des Benutzers zur Anmeldung an der Datenbank |
| DBPassword | Passwort für die Anmeldung an der Datenbank |
| DBDriver | Zu verwendender ODBC Treiber |
| Port | Nummer des Ports, über den der Server Verbindungen entgegen nehmen soll. |
| LogAppend [false] | Wird dieser Wert als true in die Ini-Datei geschrieben, wird die mit LogPath definierte Protokolldatei beim Start des Servers nicht überschrieben. |
| LogPath | Mit dieser Direktive kann eine Datei angegeben werden, in die alle Ausgaben protokolliert werden, die normalerweise ins Server-Fenster geschrieben würden. |

Hinweis:
Im Server-Verzeichnis befindet sich eine Beispiel-Datei
`documents.ini`, in der die verwendeten Direktiven auskommentiert
sind.


## Auswahl des zu verwendenden Datenbank Treibers

Zur Verbindung des DocumentsServer mit dem SQL-Server benötigt der DocumentsServer
einen Datenbank Treiber. Auf jedem Windows-System ist der Datenbank Treiber `SQL Server`
schon vorinstalliert. Diesen Treiber verwendet der DocumentsServer standardmäßig.
Wenn aufgrund der Unternehmens-Policy nur verrschlüsselte Verbindungen zum SQL-Server zulässig sind (z.B. TLS 1.2),
kann der Datenbank Treiber `SQL Server` nicht verwendet werden, da er dieser TLS 1.2. nicht unterstützt.
Dann muss auf dem Documents-Rechner ein neuerer ODBC-Treiber installiert werden. Dies kann
während der Installation durch das Setup über die Option "Microsoft SQL Server Tools installieren"
geschehen oder alternativ kann ein Treiber bei Microsoft heruntergeladen werden: z. Bsp.: `ODBC Driver 17 for SQL Server`

Dem DocumentsServer muss in der `documents.ini` dann noch bekannt gemacht werden, dass dieser
ODBC-Treiber dann verwendet werden soll. Dies geschieht über die `DBDriver` Direktive.

z. Bsp.:   `DBDriver ODBC Driver 17 for SQL Server`


## Installation bei einer "entfernten" Datenbank (DOCUMENTS-Server und DB befinden sich auf unterschiedlichen Rechnern)

Damit die Volltextindexierung von Anhängen funktioniert oder wenn volltextindexierte
Mappenfelder definiert sind, muss auf dem DOCUMENTS-Rechner das Bulkinsert-Tool `bcp.exe`
installiert sein.

Dieses ist Bestandteil der *Microsoft Command Line Utilities* (sqlcmd Utility). Zusammen mit dem ebenfalls für das Utility benötigten ODBC-Driver (z.B. *ODBC Driver 17 for SQL Server*), können
beide Setups bei Microsoft heruntergeladen werden.

Das Programm `bcp.exe` muss im `PATH` liegen. Dies kann durch Aufruf von `bcp.exe` von einer
Eingabeaufforderung getestet werden.


## Datenbankschema von der Eingabeaufforderung einspielen

Alternativ zum Einspielen des Datenbank-Schemas im Rahmen des DOCUMENTS Setups
kann das Datenbank-Schema `documents6` auch mit dem Konsolenprogramm `server/sqlserver.exe`
angelegt werden.

Dazu bitte eine Eingabeaufforderung starten und in das `/server`-Verzeichnis des DOCUMENTS-Servers wechseln.

Dort bitte den folgenden Befehl ausführen:

`sqlserver.exe documents6.sql -s Rechnername -u User -p Kennwort`

Bsp.:
`sqlserver.exe documents6.sql -s DBRechner -u documentsCreator -p 12Zvdsf`

Die Datei `documents.ini` anpassen: `DBServer | DBUser | DBPassword`

Wenn der Datenbank-Server nur verschlüsselte Verbindungen zuläßt (z.B. TLS 1.2) dann muss dem Tool `sqlserver.exe` mit dem Parameter -e der Treiber mitgeteilt werden, der verwendet werden soll.

Bsp.:
`sqlserver.exe documents6.sql -s DBRechner -u documentsCreator -p 12Zvdsf -e Driver={"ODBC Driver 17 for SQL Server"}`


## Installation von DOCUMENTS 6 auf Systemen, auf denen mehrere Instanzen des SQL-Server installiert sind

Bei der Standardinstallation des SQL-Servers ist nur eine Instanz des
SQL-Servers installiert. Der Name dieser Instanz entspricht dann dem
Rechnernamen.
Ist eine weitere Instanz des SQL-Servers auf diesem Rechner installiert,
bestimmt sich der Name dieser SQL-Server-Instanz wie folgt:

`Rechnername\Instanzname`

Die Installation entspricht der Standardinstallation. Es muss nur für den Rechnernamen des Datenbanktrechner immer Rechnername\Instanzname
angegeben werden z.B. `localhost\sqlexpress`


## DOCUMENTS-Server als Dienst registrieren

Wenn der DOCUMENTS-Server nicht schon während des Setups als Dienst registriert
worden ist, dann kann dies auch nachträglich wie folgt durchgeführt werden.

Bitte eine Eingabeaufforderung starten. Dort ins `/server`-
Verzeichnis des DOCUMENTS-Servers wechseln.

- DOCUMENTS-Server und Datenbank-Server befinden sich auf dem gleichen Rechner DOCUMENTSServer.exe -i Der DOCUMENTS-Server wird als Dienst mit dem Namen "Documents6Server" registriert. Die Abhängigkeit zum Datenbank-Server wird in die Registry eingetragen. Über Start->Systemsteuerung->Verwaltung->Dienste kann der Dienst "Documents6Server" dann gestartet werden.
- DOCUMENTS-Server und Datenbank-Server sind auf verschiedenen Rechnern (entfernte Datenbank) DOCUMENTSServer.exe --install=nodepend Der DOCUMENTS-Server wird als Dienst mit dem Namen "Documents6Server" registriert. Über Start->Systemsteuerung->Verwaltung->Dienste kann der Dienst "Documents6Server" dann gestartet werden.
- Deregistrierung des Dienstes DocumentsServer DOCUMENTSServer.exe -u