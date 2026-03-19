---
title: "Erweitertes Logging in DOCUMENTS"
source: "https://otris.software/documents/howto/common/extended-logging.html"
---

# Erweitertes Logging in DOCUMENTS


## Einleitung

Mit dem *Log-Buch* steht im DOCUMENTS-Manager eine Möglichkeit bereit, Änderungen sowie Ereignisse an Mappen zu protokollieren (bspw. „Mappe bearbeitet“, „Mappe archiviert“ oder „Workflow gestartet“).


## Allgemeine Funktionsweise des Log-Buchs

Die Konfiguration dieser Protokollierung erfolgt über die Aktivierung vordefinierter Einstellungen im DOCUMENTS-Manager und ist daher auf Standards limitiert.

Das eigentliche *Log-Buch* mit sämtlichen Protokoll-Einträgen kann im DOCUMENTS-Manager im Navigationsbaum unter „*Documents*“ eingesehen werden.

In den Einträgen sind jeweils *Mappe*, *Bearbeiter* und *Zeitpunkt* der Aktion ersichtlich. Zudem werden die jeweiligen Aktionen beschrieben und die *Wertänderung* protokolliert (jeweils mit altem und neuem Wert).


## Erweiterung seit DOCUMENTS 4.0a

Mit der Version DOCUMENTS 4.0a wird die Log-Funktionalität erweitert und somit die Möglichkeit bereitgestellt, auch Veränderungen der Attribute an anderen Objekten wie *Benutzern*, *Zugriffsprofilen* oder *Mappen*- bzw. *Archivtypen* detaillierter im *Log-Buch* festzuhalten.

Die Einrichtung dieser erweiterten Protokollierung erfolgt durch die Ergänzung weiterer Parameter in der Datei documents.ini.

**Wichtiger Hinweis**

Bevor Sie mit Hilfe dieser Dokumentation ein System einrichten, lesen Sie dieses Dokument bitte **zuerst vollständig** durch. Es müssen einige Anforderungen an das System im Vorfeld erfüllt sein und ein Systemneustart ist während der Konfiguration einzuplanen.


## Logbuch-Eintrag

Der folgende Dialog zeigt exemplarisch einen Logbuch-Eintrag mit Details der Protokollierung am Beispiel der entzogenen Freigabe eines Mappentyps.


Abb. 1 - Logbucheintrag zu einer Änderung am Mappentyp


## Einrichtung des erweiterten Logging


### Allgemeine Aktivierung

Die Protokollierung von Aktionen im Logbuch muss zunächst einmal zentral aktiviert werden.

Hierzu muss dann für jedes zu protokollierende Objekt (*Benutzer* bzw. *Redakteur*, *Zugriffsprofil* und *Mappen*- bzw. *Archivtyp*) ein spezieller Parameter in der Datei documents.ini ergänzt werden, um das erweiterte Logging für dieses Objekt global zu einzuschalten.

Für alle derart aktivierten Objekttypen werden nun in der Folge Änderungen protokolliert. Ohne weitere Angaben beschränken sich diese zunächst auf eine Reihe von vordefinierten Attributen. Eine Auflistung dieser vordefinierten Logging-Attribute finden Sie weiter unten in Kapitel 3. Die einzelnen Parameter für die Aktivierung der jeweiligen Objekte sowie die standardmäßig geloggten Attribute werden im weiteren Verlauf dieses Kapitels beschrieben.

Nach den Anpassungen an der Datei „documents.ini“ ist für die Aktivierung des erweiterten Logging ein Neustart der Anwendung (bzw. Dienstes) *Documents4Server* erforderlich!

Die folgenden Parameter müssen in der Datei documents.ini ergänzt werden, um die Protokollierung aller Objekte des entsprechenden Objekt-Typs generell einzuschalten:


### Logging von Benutzern und Redakteuren

Das erweiterte Logging von *Benutzern* und *Redakteuren* wird mit folgendem Parameter aktiviert:

`$LogSystemuser 1`

Dieser hält im Standard nur die Veränderungen im Login und im Status fest. So wird bspw. erfasst, wenn ein neuer Benutzer erstellt und dieser auf „gesperrt“ gesetzt wird.


### Logging von Zugriffsprofilen

Für die Zugriffsprofile wird folgender Parameter verwendet:

`$LogAccessProfile 1`

Hiermit werden Veränderungen des *Profilnamens*, der Checkbox *„Profil in Documents-Listen anzeigen“* und *Veränderungen* in Verbindung mit *Benutzern* und *Redakteuren* in das *Log-Buch* eingetragen.


### Logging von Mappentypen und Archivtypen

Damit Veränderungen in *Mappentypen* und in *Archivtypen* im *Log-Buch* festgehalten werden, verwenden Sie den Parameter:

`$LogFiletype 1`

Durch diesen Parameter werden die Veränderungen bei den Attributen „*Name*“ und „*Freigegeben*“ erfasst.


### Erweiterung um individuelle Parameter

Die vordefinierten Attribute können individuell um weitere Parameter gemäß der Listen aus Kapitel 3 ergänzt werden. Die Attribute werden dabei in einer kommaseparierten Liste ohne Leerzeichen angegeben.


### Weitere Parameter für Benutzer und Redakteure

Um das *Logging* zu erweitern, können Sie den folgenden Parameter verwenden und um individuelle Attribute ergänzen:

`$loggingAttributes\_Systemuser Attribut1,Attribut2,…`

Achtung: Benutzer und Redakteure teilen nicht alle Attribute.


### Weitere Parameter für Zugriffsprofile

Ein erweitertes Logging von Attributen für Zugriffsprofile erfolgt über den Parameter:

`$loggingAttributes\_AccessProfile Attribut1,Attribut2,…`


### Weitere Parameter für Mappentypen und Archivtypen

Für eine genauere Erfassung können drei weitere optionale Parameter verwendet werden, die spezielle Eigenschaften der Objekte aufgreifen. Im Falle von Mappentypen und Archivtypen wird weiter unterschieden zwischen Attributen des Typs, dessen Feldern und dessen Registern:

`$loggingAttributes\_Filetype Attribut1,Attribut2,…`

`$loggingAttributes\_Field Attribut1,Attribut2,…`

`$loggingAttributes\_Register Attribut1,Attribut2,…`


### Vollständige Protokollierung

Sollen Veränderungen an **allen** verfügbaren Attributen gemäß den jeweiligen Tabellen aus Kapitel 3 erfasst werden, kann anstelle der Attributnamen folgender Parameter verwendet werden:

`all\_attr`


### Beispielkonfiguration

Die folgende Abbildung zeigt eine mögliche Beispielkonfiguration mit individuellen Anpassungen für Benutzer, der Aktivierung aller Attribute bei Zugriffsprofilen sowie einer allgemeinen Aktivierung der Protokollierung von Mappentypen / Archivtypen.


Abb. 2 - Mögliche Verwendung der Parameter in der documents.ini

Beachten Sie bei der erweiterten Protokollierung, dass das *Logging* die Performance des *DOCUMENTS-Servers* beeinträchtigen kann. Bereinigen Sie die Konfiguration daher um irrelevante Aspekte.


### Anpassung über eine Negativliste von Log-Attributen

Bei einer komplexen Protokollierung kann die Liste der Attribute auch über eine Negativliste festgelegt werden. Soll generell die Mehrzahl der Attribute mit Ausnahme von bestimmten erfasst werden, wird vor diesen Attributen ein Minuszeichen angegeben. Dies ergibt insbesondere bei den jeweils vordefinierten Attributen Sinn und könnte z.B. beim Benutzer-Logging so aussehen:

`$loggingAttributes\_Systemuser –login,Attribut2,…`

In diesem Fall wird *Attribut2* protokolliert, während Änderungen am *Login* nicht erfasst werden, obwohl dies eigentlich standardmäßig der Fall wäre.

Diese Eigenschaften beschränken sich jedoch nur auf die in der documents.ini definierten Attribute, so dass diese das reguläre *Logging* z.B. bei Mappen nicht beeinflussen.

Dafür muss wiederum jeweils eine entsprechende Eigenschaft definiert werden:

- am Mappentyp: FileTypeLogbook = 0
- am Schema/Archiv: ArchiveTypeLogbook = 0
- am Zugriffsprofil: AccessProfileLogBook = 0
- am Benutzer/ Redakteur: SystemuserLogbook = 0

Für Mappentypen, die im DOCUMENTS-Archiv archiviert werden, reicht es aus, am Mappentyp die Eigenschaft *FileTypeLogbook* bzw. *ArchiveTypeLogbook* zu setzen (vgl. folgende Abbildung).


Abb. 3 - Setzen der Eigenschaft am Archivtyp


## Übersicht: Erweiterte Attribute

Die folgenden Tabellen liefern eine Übersicht der Objekte mit den jeweiligen Attributen. Der Eintrag „*vordefinierter Wert*“ bedeutet hierbei, dass diese Attribute bereits mit der allgemeinen Aktivierung protokolliert werden.


## Benutzer/Redakteur Attribute

| Attribut | Bezeichner/Erklärung |
| --- | --- |
| login | Login - vordefinierter Wert |
| status | Status - vordefinierter Wert |
| password | Passwort - wird verschlüsselt dargestellt |
| userLicenceType | Lizenzart |
| HasArchiveAccess | Archiv Zugang |
| DlcUser | Documents Zugang |


## Zugriffsprofil Attribute

| Attribut | Bezeichner/Erklärung |
| --- | --- |
| profileName | Profilname - vordefinierter Wert |
| ShowInDlcLists | Profil in Documents Listen anzeigen - vordefinierter Wert |
| name | in Portalsprache 1 |
| enableArchive | Archiv-Zugriff |


## Mappentyp Attribute

| Attribut | Bezeichner/Erklärung |
| --- | --- |
| Title | Name – vordefinierter Wert |
| Released | Freigegeben – vordefinierter Wert |
| MultiLangLabel | Bezeichnung |
| AutoTitle | Automatischer Titel |
| ArchiveServer | Zielserver |


### Feld Attribute

| Attribut | Bezeichner/Erklärung |
| --- | --- |
| Name | Name – vordefinierter Wert |
| FieldDataType | Typ |
| EnumValues | Aufzählungswerte |
| Value | Wert/Voreinstellung |


### Register Attribute

| Attribut | Bezeichner/Erklärung |
| --- | --- |
| Name | Name – vordefinierter Wert |
| MultiLangLabel | Bezeichner |
| Type | Registertyp |
| FieldNamex | Feldname – findet nur Verwendung in Verknüpfungsregister, x kann die Werte 1 bis 3 haben z.B. FieldName2 |
| Comparatorx | Vergleich – wird ebenfalls bei Verknüpfungsregistern verwendet, x kann die Werte 1 bis 3 haben z.B. Comparator1 |
| Valuex | Wert – wird nur bei Verknüpfungsregistern benötigt, x kann die Werte 1 bis 3 haben z.B. Value3 |


## Vollständige Liste der Attribute

Sollte das gewünschte Attribut nicht in den oben stehenden Tabellen aufgeführt sein, kann eine komplette Liste ausgeben werden, indem an dem entsprechenden Parameter in der documents.ini das Attribut all_attr definiert wird und anschließend im *DOCUMENTS-Manager* die Einstellung verbositiy unter *Servereinstellungen > Systemparameter…* auf den Wert 12 geändert wird. Bei einem Neustart des *DOCUMENTS-Servers* gibt dieser dann eine Liste aller möglichen Attribute in der Logdatei bzw. im Server-Fenster aus:


Abb. 4 - Darstellung aller möglichen Attribute im Document-Server Fenster