---
title: "Documents-Server Installation mit MariaDB"
source: "https://otris.software/documents/manuals/books/documentsserver_readme-mysql-de/"
---

# Documents-Server Installation mit MariaDB

WICHTIG:
Führen Sie die Einrichtung der Datenbank auf jeden Fall mit dem
betreuenden Datenbank-Administrator durch!


## Hinweise zur Installation von MariaDB

Ab DOCUMENTS 6.2.1 werden nur noch die Versionen 10.6 *(LTS, EOL 06/26)*, 10.11 *(LTS)*, 11.4 *(LTS)* und 11.8 *(LTS)* von MariaDB unterstützt.
Eine Kompatibilität zu älteren Versionen oder neueren Versionen ist NICHT gegeben.

- Es wird empfohlen MariaDB 10.11, 11.4 oder 11.8 zu verwenden, da dies LTS Versionen sind.


## Hinweise zur Installation des MariaDB-Servers und des MariaDB-Clients

DOCUMENTS 6 verwendet UTF-8 als Datenbank-Encoding. Bitte installieren Sie
den MariaDB Server mit der Option "Use UTF8 as default server's character set".

DOCUMENTS 6 ist dynamisch gegen den MariaDB-Connector 3.3.10 gelinkt und mit der DOCUMENTS
Installation wird im `/server` und `/docfilter` Verzeichnis die MariaDB
Client Library `libmariadb.dll` installiert.

Die Installation des MariaDB-Clients ist nur noch notwendig, wenn die mariadb.exe (mysql.exe)
zum Einspielen des Datenbank-Schemas benötigt wird.


### Performance-Einstellungen für MariaDB

Die Standard-Konfiguration einer MariaDB Installation ist hinsichtlich
Speicherverwendung und Schreibverhalten performance-technisch nicht ausreichend.
Die folgenden Parameter in der `my.ini` müssen angepasst werden:


```javascript
innodb_buffer_pool_size = 2G
innodb_log_file_size = 512M
innodb_flush_log_at_trx_commit = 2
```

innodb_buffer_pool_size = 2G
innodb_log_file_size = 512M
innodb_flush_log_at_trx_commit = 2Erläuterung:
InnoDB führt die meisten Operationen im Speicher aus (InnoDB Buffer Pool).

Dieser muss abhängig von der Größe der Datenbank entsprechend groß gewählt
werden. Die oben angebenen 2 GB können unter Umständen schon zu klein sein.
Das Schreiben von Transaktion geschieht in das Transaktion-Logs (InnoDB Log file).
Diese Größe sollte 25% der `innodb_buffer_pool_size` sein.
Das Schreiben des Transaktion-Logs auf die Festplatte kann über den Parameter
`innodb_flush_log_at_trx_commit = 2` drastisch beschleunigt werden, da im
Modus 2 Transaktionen sekündlich in einem Block geschrieben werden, anstatt
einzeln.


```javascript
net_read_timeout=3600
net_write_timeout=3600
```

net_read_timeout=3600
net_write_timeout=3600Erläuterung:
Beim jex-Export werden insbesondere bei großen Tabellen DlcField etc. Resultsets
lange offen gehalten. Bei der Standardeinstellung (60 Sekunden) für
net_read_timeout bzw. net_write_timeout kann es dann vorkommen, dass der
Datenbank-Server in einen Timeout läuft und der jex-Export mit einer Fehlermeldung
abbricht wie:
"Fatal error during jex export: Database contains ..... where exported. This can
happen when the database connection is lost temporarily during the export.
Please try again"


## Das DOCUMENTS 6 Datenbank-Schema

Die Schema-Datei `documents6.sql` verwendet `utf8mb4` (4-Byte UTF-8 Encoding) als characterset.
Damit können dann auch 4-Byte UTF-8 Zeichen wie z.B. Emojis gespeichert werden.

Hinweis:
Die Tabellen werden im Row-Format `DYNAMIC` angelegt, da sonst die Limitierung der
Indexgröße von 767 Bytes bei InnnoDB überchritten wird. Details dazu können dem
MariaDB Reference Manual entnommen werden.


### Anlegen des Datenbankschemas

Öffnen Sie dazu eine Eingabeaufforderung (Kommandozeile) und wechseln Sie
in das Verzeichnis `\server`.

ACHTUNG:
Durch das Einspielen des Datenbankschemas (documents6) wird eine bereits bestehende Datenbank documents6 unwiderruflich gelöscht!

Das sql-Script (Schema) wird wie folgt eingespielt:


```javascript
mariadb.exe [-uUser] [-pPasswd] [-hServerhost] [-v] < documents6.sql

         mariadb.exe: sql-Tool aus dem MariaDB Client / MariaDB Server (muss im
                    PATH sein)
         -u:        MariaDB-User mit den notwendigen Rechten zum Anlegen von
                    Benutzern etc. (z.B. der Benutzer root)
         -p:        Kennwort des Benutzers
         -h:        Hostname oder IP-Adresse des MariaDB-Rechners
         -v:        Ausführliche Ausgaben auf der Konsole

         Hinweise: Zwischen dem -p und dem Kennwort darf KEIN Leerzeichen
                   sein!
                   Ist der MariaDB Server lokal installiert kann die Angabe
                   des Serverhost [-hServerhost] entfallen.


         Bsp.: Entfernter Datenbank-Server auf Rechner mit
               Hostname = DBRechner:

               mariadb.exe -uroot -pgeheim -hDBRechner < documents6.sql
```

mariadb.exe [-uUser] [-pPasswd] [-hServerhost] [-v] < documents6.sql

         mariadb.exe: sql-Tool aus dem MariaDB Client / MariaDB Server (muss im
                    PATH sein)
         -u:        MariaDB-User mit den notwendigen Rechten zum Anlegen von
                    Benutzern etc. (z.B. der Benutzer root)
         -p:        Kennwort des Benutzers
         -h:        Hostname oder IP-Adresse des MariaDB-Rechners
         -v:        Ausführliche Ausgaben auf der Konsole

         Hinweise: Zwischen dem -p und dem Kennwort darf KEIN Leerzeichen
                   sein!
                   Ist der MariaDB Server lokal installiert kann die Angabe
                   des Serverhost [-hServerhost] entfallen.


         Bsp.: Entfernter Datenbank-Server auf Rechner mit
               Hostname = DBRechner:

               mariadb.exe -uroot -pgeheim -hDBRechner < documents6.sql
### Erstellung eines Datenbank-Benutzers für die documents6-DB:

Wenn nicht der Benutzer "root" zum Zugriff auf die Datenbank verwendet
werden soll, kann wie folgt ein neuer Benutzer angelegt werden.
In Abhängigkeit der Zugriffsrechte des Benutzers "root" kann das SQL-
Statement aus einer mariadb.exe-Shell vom DOCUMENTS-Server-Rechner aus er-
folgen oder muss direkt auf dem Datenbank-Rechner ausgeführt werden.

Öffnen Sie dazu eine Eingabeaufforderung (Kommandozeile) und starten Sie
eine mariadb.exe Shell


```javascript
mariadb.exe [-uUser] [-pPasswd] [-hServerhost]

   Melden Sie sich als "root" an und führen die folgenden SQL-Statements
   aus:

GRANT ALL privileges ON documents6.* TO dbUser@DOCUMENTSServerHostname IDENTIFIED BY 'Kennwort';

   Bsp: dbUser = doc6
	      DOCUMENTSServerHostname = '%'  (Zugriff von allen Hosts aus)
	      dbPasswd = doc6geheim

GRANT ALL privileges ON documents6.* TO doc6@'%' IDENTIFIED BY 'doc6geheim';
```

mariadb.exe [-uUser] [-pPasswd] [-hServerhost]

   Melden Sie sich als "root" an und führen die folgenden SQL-Statements
   aus:

GRANT ALL privileges ON documents6.* TO dbUser@DOCUMENTSServerHostname IDENTIFIED BY 'Kennwort';

   Bsp: dbUser = doc6
	      DOCUMENTSServerHostname = '%'  (Zugriff von allen Hosts aus)
	      dbPasswd = doc6geheim

GRANT ALL privileges ON documents6.* TO doc6@'%' IDENTIFIED BY 'doc6geheim'; Die Datenbankverbindungsdaten müssen dann wie in 5.2. dargestellt in die
 `documents.ini` (`DBServer`, `DBUser`, `DBPassword`) eingetragen werden.


## Installationshinweise DOCUMENTS 6

Ab DOCUMENTS 5 werden nur noch 64-bit Betriebssysteme für den Server unterstützt.

Installieren Sie das Setup, wählen Sie MariaDB (MySQL) als Datenbank aus und
folgen Sie den Anweisungen des Installationsprogramms.


## Konfiguration des DOCUMENTS-Server per .ini-Datei

Der DOCUMENTS-Server überprüft bei Anwendungsstart, ob sich im
Ausführungsverzeichnis des Servers die Datei `documents.ini`  befindet und übernimmt die dort angebenen Einstellungen.

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
| DBPort | Ein von 3306 abweichener Datenbank Port kann angegeben werden. |
| Port | Nummer des Ports, über den der Server Verbindungen entgegen nehmen soll. |
| LogAppend [false] | Wird dieser Wert als true in die Ini-Datei geschrieben, wird die mit LogPath definierte Protokolldatei beim Start des Servers nicht überschrieben. |
| LogPath | Mit dieser Direktive kann eine Datei angegeben werden, in die alle Ausgaben protokolliert werden, die normalerweise ins Server-Fenster geschrieben würden. |

Hinweis:
Im Server-Verzeichnis befindet sich eine Beispiel-Datei
`documents.ini`, in der die verwendeten Direktiven auskommentiert
sind.


## DOCUMENTS-Server als Dienst registrieren

Wenn der DOCUMENTS-Server nicht schon während des Setups als Dienst registriert
worden ist, dann kann dies auch nachträglich wie folgt durchgeführt werden.

Bitte eine Eingabeaufforderung starten. Dort ins `/server`-
Verzeichnis des DOCUMENTS-Servers wechseln.

- DOCUMENTS-Server und Datenbank-Server befinden sich auf dem gleichen Rechner DOCUMENTSServer.exe -i Der DOCUMENTS-Server wird als Dienst mit dem Namen "Documents6Server" registriert. Die Abhängigkeit zum Datenbank-Server wird in die Registry eingetragen. Über Start->Systemsteuerung->Verwaltung->Dienste kann der Dienst "Documents6Server" dann gestartet werden.
- DOCUMENTS-Server und Datenbank-Server sind auf verschiedenen Rechnern (entfernte Datenbank) DOCUMENTSServer.exe --install=nodepend Der DOCUMENTS-Server wird als Dienst mit dem Namen "Documents6Server" registriert. Über Start->Systemsteuerung->Verwaltung->Dienste kann der Dienst "Documents6Server" dann gestartet werden.
- Deregistrierung des Dienstes DocumentsServer DOCUMENTSServer.exe -u


## Migration einer DOCUMENTS 5 utf8mb3 Datenbank nach utf8mb4

Wenn das Datenbankschema mit einer documents5.sql vor dem Versionstand 5.0i HF1
erstellt wurde, dann haben die Tabellen das character set `utf8mb3`.

Es gibt zwei Wege mögliche Wege der Migration:

- per jex-Export / Import
- Migration der DB per SQL


### per jex-Export / Import


```javascript
1. jex-Export durchführen
2. Neues Schema mit aktueller documents5.sql anlegen
3. jex-Import
```

1. jex-Export durchführen
2. Neues Schema mit aktueller documents5.sql anlegen
3. jex-ImportHinweis:
Nachteil ist, dass dies bei großen Datenmengen lange dauern kann und auch
ein "reindex" nach dem jex-Import aufgerufen werden muss.


### Migration der bestehenden DB per SQL


```javascript
1. zur Sicherheit immer ein Backup der Datenbank machen z.b. per mariadbdump (mysqldump)

2. mandantenlos als User "admin" den Documents-Manager starten

3. die Wartungsoperation "createUtf8mb4" aufrufen, welche eine SQL-Datei generiert
   (convert_db_to_utf8mb4.sql) und zum Download anbietet

   Hinweis:
   Der in der documents.ini eingetragene DBUser muss Leserecht auf das information_schema
   haben.

4. DocumentsServer beenden

5. Analog wie in "Anlegen des Datenbankschemas beschrieben" das Migrationsscript einspielen

   mariadb.exe -uroot -p -hDBRechner < convert_db_to_utf8mb4.sql

6. in der documents.ini den Eintrag

   MySQLutf8mb4 true

7. DocumentsServer starten
```

1. zur Sicherheit immer ein Backup der Datenbank machen z.b. per mariadbdump (mysqldump)

2. mandantenlos als User "admin" den Documents-Manager starten

3. die Wartungsoperation "createUtf8mb4" aufrufen, welche eine SQL-Datei generiert
   (convert_db_to_utf8mb4.sql) und zum Download anbietet

   Hinweis:
   Der in der documents.ini eingetragene DBUser muss Leserecht auf das information_schema
   haben.

4. DocumentsServer beenden

5. Analog wie in "Anlegen des Datenbankschemas beschrieben" das Migrationsscript einspielen

   mariadb.exe -uroot -p -hDBRechner < convert_db_to_utf8mb4.sql

6. in der documents.ini den Eintrag

   MySQLutf8mb4 true

7. DocumentsServer startenHinweis:
Die Laufzeit der Migrations-SQL `convert_db_to_utf8mb4.sql` nimmt je nach Größe der DB einige Zeit in Anspruch (z.B. 30 Minuten bei einer 20 GB DB)