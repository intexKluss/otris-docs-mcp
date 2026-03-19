---
title: "Umstellung bei Verwendung von Linux"
source: "https://otris.software/documents/manuals/books/migration-doc6-de/migration-linux.html"
---

# Umstellung bei Verwendung von Linux


## Vorbemerkungen

Während der Umstellung ist das System nicht verfügbar.

**Hinweis:** Während der Umstellung ist sicherzustellen, dass andere Systeme nicht auf die Documents-Installation zugreifen. Die entsprechenden Schnittstellen, z.B. über SOAP, gRPC, docimport, Factory usw. dürfen nicht verwendet werden (auch wenn sie temporär zur Verfügung stehen).

Der technische Name von **documentsOS** unter Linux lautet `documents6`. Dies gilt z.B. für die Pakete und einige Ordner und Dateien. Für die Migration müssen alle benötigten `documents6`-Pakete installiert werden.

**Hinweis:** Es ist für die Migration nicht ausreichend, nur das Paket `documents6-mysql` (wie bei einer Neu-Installation) zu installieren. Es muss der Befehl aus dem Abschnitt Umstellung verwendet werden.

Stellen Sie sicher, dass die notwendigen Voraussetzungen erfüllt sind, siehe [Voraussetzungen](requirements-linux.html):

- Vollständige Datensicherung liegt vor (falls diese nicht automatisch mit Variante 1 erstellt werden soll)
- Neue Lizenzdatei liegt vor


## Umstellung


### Variante 1 Umstellung unter Verwendung einer Datenbankschema Migration


#### Automatische Änderungen durch die Migration

- Die vorhandenen documents5-Pakete werden bei der Installation der documents6-Pakete automatisch verdrängt.
- Das Verzeichnis /var/lib/documents5/documents (Repositories) wird automatisch nach /var/lib/documents6 verschoben.
- Eine vorhandene documents.ini in /etc/documents5 wird nach /etc/documents6 kopiert und angepasst. Abgesehen davon enthält /etc/documents6 nach der Migration genau die gleichen Dateien, wie nach einer Neu-Installation.
- Die Dateien in /etc/documents5 bleiben unverändert.
- Die Datenbank wird automatisch während der Installation migriert.
- Die Datenbank wird nicht umbenannt und heißt weiterhin documents5.
- Falls unter /var/lib/documents5/ noch kein Datenbank-Dump mit dem Namen dbdump_documents5.sql.zstd liegt, wird dieser automatisch während der Installation erstellt (bitte dazu den nächsten Abschnitt lesen).


#### Erstellung des Datenbank-Dumps

Da das Erstellen eines Datenbank-Dumps einige Zeit in Anspruch nehmen kann, ist es auch möglich, ihn vorher auf andere Art zu erzeugen (z.B. manuell oder durch ein automatisches nächtliches Backup). In diesem Fall kann die Erstellung während der Installation unterdrückt werden. Dazu muss die Umgebungsvariable `DOCUMENTS6_SUPPRESS_DOCUMENTS5_DBDUMP` in derselben Shell vor dem Migrations-Befehl gesetzt werden, z.B. mit `export DOCUMENTS6_SUPPRESS_DOCUMENTS5_DBDUMP=1`. Diese Variable darf nicht gesetzt werden, wenn der Datenbank-Dump nicht erstellt wurde.


#### Durchführung der Migration


```javascript
apt install $(dpkg -l|awk '/documents5/{print $2}'|sed s/s5/s6/)
```

apt install $(dpkg -l|awk '/documents5/{print $2}'|sed s/s5/s6/)Danach sollten zwei Pakete deinstalliert werden.


```javascript
apt purge libjsrdbg0 libmozjs-24-0v5
```

apt purge libjsrdbg0 libmozjs-24-0v5
### Variante 2 Umstellung unter Verwendung einer aktuellen Documents Datensicherung

Bei dieser Art der Umstellung wird eine neue Installation vorgenommen und danach die vorhandene Documents-Datensicherung als Backup wiederhergestellt. Für die neue Installation sind die Punkte zu beachten, die in der Dokumentation zur Installation unter Linux angegeben sind:
[Installation Linux](../installation-linux/ubuntu2204-d6.html)

**Hinweis:** Die Art der Umstellung nimmt, abhängig vom vorhandenen Datenvolumen, wesentlich mehr Zeit in Anspruch als die zuvor dargestellte Variante 1. Außerdem ist nach der Umstellung eine Reindexierung von Dokumenten notwendig.

Bei dieser Variante wird außerdem unterschieden, ob innerhalb der Installation **nur ein Mandant** oder **meherere Mandanten** betrieben werden.


#### Umstellung unter Verwendung einer aktuellen Documents Datensicherung (ein Mandant)

Nach der neuen Installation muss die zuvor erstellte Datensicherung eingespielt werden, dazu können folgende Tools benutzt werden:

- Manager-Loader oder
- Documents-Manager aus documentsOS-Toolbox

Starten Sie das entsprechende Tool und melden Sie sich **mandantenlos** (also ohne Angabe eines Mandanten) an:


![windows-install-7](./assets/windows-install-7.png)

Abb. 15 - Mandantenlose Anmeldung am Documents-Manager

- Starten Sie das Einspielen der Datensicherung unter Administration / Datensicherung einspielen...
- Geben Sie die entsprechenden Verzeichnisse an bzw. wählen Sie aus
Normale Inhalte: die zip-Datei der Datensicherung mit den Metadaten
Documents: die zip-Datei der Datensicherung mit den Dokumenten-Daten (Repository)
.pem-Datei: Die neue, für documentsOS gültige Lizenzdatei


![windows-install-8](./assets/windows-install-8.png)

Abb. 16 - Datensicherung einspielen

- Wählen Sie Weiter, bestätigen Sie den Mandantennamen und beenden Sie das Einspielen der Datensicherung mit Fertigstellen.

**Hinweis:** Das Einspielen einer Datensicherung kann je nach vorhandenem Datenvolumen längere Zeit in Anspruch nehmen (z.B. mehrere Stunden oder Tage) und darf nicht abgebrochen werden.

**Wichtiger Hinweis:** Beachten Sie anschließend die Hinweise zur Nachbereitung der Installation: [Nachbereitungen](post-processing-linux.html) und dabei insbesondere den Punkt Nachindexierung von Dokumenten.


#### Umstellung unter Verwendung einer aktuellen Documents Datensicherung (mehrere Mandanten)

**Hinweis:** Werden mehrere Mandanten in einer Installation betrieben, wird empfohlen, eine sogenannte *System-Datensicherung (jex-Export)* als Export / Import zu verwwenden, da ein Import dann schneller (optimiert) ducrhgeführt werden kann. Diese Art der Datensicherung enthält außerdem kein Repository, die Verbindung zum Repository muss nach Abschluss des Imports geprüft bzw. eingestellt werden.


##### Erstellung der System-Datensicherung (jex-Export)

Eine System-Datensicherung der bestehenden Installatuion (Documents 5) kann erstellt werden per:

- Manager-Loader oder
- Documents-Manager aus documentsOS-Toolbox

Starten Sie das entsprechende Tool und melden Sie sich **mandantenlos** (also ohne Angabe eines Mandanten) an. Führen Sie die Menü-Aktion *Servereinstellungen / serverseitiger Datenexport (jex)* mit Angabe des Exportverzeichnisses und Export-Datei aus:


![windows-install-10](./assets/windows-install-10.png)

Abb. 17 - System-Datensicherung als jex-Datei (Export / Documents-Manager)


##### Einspielen der System-Datensicherung

Starten Sie nach erfolgreicher Installation den *Manager-Loader* oder den *Documents-Manager aus der documentsOS-Toolbox*, melden Sie sich **mandantenlos** (also ohne Angabe eines Mandanten) an und führen Sie das Einspielen der System-Datensicherung unter *Servereinstellungen / serverseitiger Datenimport (jex)* mit Angabe des Pfades zur zuvor erstellten System-Datensicherung durch:


![windows-install-12](./assets/windows-install-12.png)

Abb. 18 - System-Datensicherung als jex-Datei (Import / Documents-Manager)

**Hinweis:** Das Einspielen einer Datensicherung kann je nach vorhandenem Datenvolumen längere Zeit in Anspruch nehmen (z.B. mehrere Stunden oder Tage) und darf nicht abgebrochen werden.

Stellen Sie nach Fertigstellung des Imports sicher, dass der Pfad zum Repository korrekt ist und passen sie diesen ggf. unter *Servereinstellungen / Systemparameter / Server-Verzeichnis für Documents-Repository* an.

**Wichtiger Hinweis:** Beachten Sie anschließend die Hinweise zur Nachbereitung der Installation: [Nachbereitungen](post-processing-windows.html) und dabei insbesondere den Punkt Nachindexierung von Dokumenten.