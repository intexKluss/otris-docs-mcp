---
title: "Lokalisierung der Labels"
source: "https://otris.software/documents/howto/common/localization.html"
---

# Lokalisierung der Labels

Zur Lokalisierung der Labels stehen folgende Möglichkeiten zur Verfügung:

- Angaben nach der mehrsprachigen Syntax: de: ...; en: ...
- pf-Einträge mit der Notation pf:identifier auf die Properties-Dateien bzw. globalen Eigenschaften des Typs ServerLocale verweisen
- Musterbasierte Labels (lbl_IDENT[_Name]) zentral in Properties-Dateien anlegen und verwalten

Im Folgenden wird die globale Eigenschaft des Typs `ServerLocale` kurz als "ServerLocale-Eigenschaft" bezeichnet. Da ServerLocale-Eigenschaften als Alternative zu Properties-Dateien verwendet werden, werden sie im weiteren Verlauf des Dokuments der Einfachheit halber nicht immer separat erwähnt, wenn von Properties-Dateien die Rede ist.


## Properties-Dateien

Im Verzeichnis `/server/locale` befinden sich die Properties-Dateien für verschiedene Sprachen, deren Dateinamen dem folgenden Muster entsprechen: `*_XX.properties`, wobei `XX` für die Sprache (Locale) der Übersetzungen in der Datei steht. Für die folgenden Sprachen sind vordefinierte Standardmeldungen verfügbar (s. `documentsstrings_XX.properties`):

- de = Deutsch
- en = Englisch
- fr = Französisch
- nl = Niederländisch

Die Sprachen müssen mit den in den Portalsprachen des Mandanten definierten Locales übereinstimmen.

Auszug aus `documentsstrings_de.properties`:


```text
[...]
  Dlc_Checkin   =Checkin/Checkout
  Dlc_Deleted   =Gelöscht
  Dlc_Drafts    =In Arbeit
  Dlc_Favorites =Favoriten
[...]
```

[...]
  Dlc_Checkin   =Checkin/Checkout
  Dlc_Deleted   =Gelöscht
  Dlc_Drafts    =In Arbeit
  Dlc_Favorites =Favoriten
[...]Die Syntax der Einträge in diesen Dateien lautet: `key =translation`

**Hinweis**: Nehmen Sie keine Änderungen an diesen vordefinierten Properties-Dateien vor, denn sie werden immer mit neuen Versionen aktualisiert.

Der Server laden diese Dateien beim Start automatisch und stellt die Schlüssel/Wert-Paare zur Verfügung. Die Einstellung `$AdditionalPropertiesFiles` aus `documents.ini` wird (ab DOCUMENTS 5.0d HF1) nicht mehr verwendet. Durch Einführung des Schlüsselworts `#$PROPERTIES_ENCODING` kann man die Codierung von Property-Dateien festlegen (z.B. `#$PROPERTIES_ENCODING=windows-1252`).


### Anpassen oder Hinzufügen von Properties-Einträgen

Wenn Sie neue Einträge hinzufügen möchten (weil Sie sie in PortalScript verwenden möchten) oder Sie die Übersetzung eines Eintrags ändern möchten, passen Sie nicht die vordefinierten Properties-Dateien an, sondern machen Sie es auf folgende Weise:

Erstellen Sie eine mandantenabhängige Properties-Datei, deren Dateiname der folgenden Syntax entspricht:

`*_{Prinzipal}_XX.properties`, wobei `XX` für Locale steht,

   z.B. `documentsstrings_peachit_de.properties`

In dieser Datei können Sie neue Einträge für den Mandanten `peachit` in Locale `de` hinzufügen. Wenn Sie eine vordefinierte Übersetzung anpassen möchten, definieren Sie diese
in dieser Datei ein zweites Mal mit dem angepassten Wert.


```text
z.B. documentsstrings_de.properties:
           -------------------------------
           CSV_Label_DlcFile_FollowUp =Wiedervorlage

           documentsstrings_peachit_de.properties:
           ---------------------------------------
           CSV_Label_DlcFile_FollowUp =Wiedervorlage (peachit)
```

      z.B. documentsstrings_de.properties:
           -------------------------------
           CSV_Label_DlcFile_FollowUp =Wiedervorlage

           documentsstrings_peachit_de.properties:
           ---------------------------------------
           CSV_Label_DlcFile_FollowUp =Wiedervorlage (peachit)Beim Start liest der Server die vordefinierten Standardmeldungen und sucht anschließend nach den mandantenabhängigen Meldungen, um diese hinzuzufügen oder die vordefinierten Werte zu überschreiben. Man kann mit der Scripting-Methode `context.getFromSystemTable(identifier, locale)` die Werte abfragen.


### Hinzufügen einer neuen Locale

Wenn Sie dem System eine neue Locale hinzufügen möchten (z.B. Italien: `it`), fügen Sie die Locale `it` zu den Portalsprachen des Mandanten und erstellen eine Datei (z.B. `documentsstrings_it.properties`) mit allen Übersetzungen. Dann können Sie sie verwenden.


## Globale Eigenschaften des Typs "ServerLocale"

Alternativ zu Properties-Dateien kann man ServerLocale-Eigenschaften (`Manager -> Monitoring -> Globale Eigenschaften`) anlegen, und sie sind selbstverständlich immer Mandantenspezifisch. Das Schema des Namens und der Inhalt folgen hierbei dem aus den Properties-Dateien bekannten Schema, abzüglich der Dateiendung.

Um z.B. zwei Meldungen (`MSG1` und `MSG2`) in Deutsch und Englisch im System zu Verfügung zu stellen, kann man zwei ServerLocale-Eigenschaften `msg_de` bzw. `msg_en` anlegen, deren Werte wie folgt aussehen können:


```text
MSG1=Meldung 1 in de
MSG2=Meldung 2 in de
```

MSG1=Meldung 1 in de
MSG2=Meldung 2 in debzw.


```text
MSG1=message 1 in en
MSG2=message 2 in en
```

MSG1=message 1 in en
MSG2=message 2 in en

Die Einträge aus ServerLocale-Eigenschaften haben Vorrang gegenüber Einträgen aus dem Locale-Verzeichnis (`/server/locale`).


## Angaben nach der mehrsprachigen Syntax "de: ...; en: ..."

Wo Mehrsprachigkeit unterstützt wird, kann man direkt an der Stelle den Wert nach der mehrsprachigen Syntax `de: ...; en: ...` angeben, wobei `de`/`en` für die Sprache (Locale) steht. Die Sprachen müssen mit den in den Portalsprachen des Mandanten definierten Locales übereinstimmen. Eine Locale (z.B. `de`) wird in einer Zeichenkette als Locale interpretiert, wenn dies am Anfang der Zeichenkette steht, oder vor der Locale das Zeichen `;` oder Leerzeichen steht. Die folgenden Zeichen in der Zeichenkette müssen mit `\` maskiert werden:

- ; -> \;
- \ -> \\
- XX: -> \XX:, wobei XX für Locale steht, z.B. de:Ich mag die Sprache \en:; en: I like the language \en:


## pf-Einträge

An allen Stellen, wo die mehrsprachige Syntax `de: ...; en: ...` unterstützt wird, können (ab DOCUMENTS 5.0g) `pf`-Einträge mit der Notation `pf:identifier` verwendet werden, die auf die Properties-Dateien verweisen, wobei `identifier` für den Schlüssel eines Eintrags aus den Properties-Dateien steht. Die `pf`-Einträge haben vorrang gegenüber Einträgen nach der Syntax `de: ...; en: ...`.

**Beispiel:**`de:Vorname;en:First name;pf:keyFirstName`

1. Falls in einer Properties-Datei der Anmeldesprache folgender Eintrag gefunden wird: keyFirstName=Test, so lautet das Ergebnis "Test".
2. Falls in den Properties-Dateien der Anmeldesprache kein Wert für den Schlüssel keyFirstName gefunden wird, und die Anmeldesprache Deutsch (de) ist, so lautet das Ergebnis "Vorname".


## Musterbasierte Labels zentral in Properties-Dateien anlegen

Die Labels von Mappentypen, Feldern, Ordnern, Aktionen etc. sind im Manager weit verteilt. Änderungen an Labels sowie Ergänzung oder Austausch von Sprachen sind umständlich. Um dies handlicher zu machen, kann man (ab DOCUMENTS 6.1.1) die Labels mit einem festgelegten Muster in Properties-Dateien zentral speichern und verwalten. Der Server liest diese Dateien beim Start ein und stellt die Labels zur Verfügung. Findet der Server keine Einträge zu bspw. einem Feld in den Properties-Dateien, dann wird die Angabe am Feld und ggf. der Bezeichner im Manager verwendet, um das Label im Web anzuzeigen.


### Muster der Labels

Der Aufbau des Schlüssels in den Properties-Dateien ist wie folgt:


```text
lbl_IDENT[_Name]* = Label

IDENT = FT | FD | REG | FTA | REGA | FL | FLA | HL | SM | DT | ET | OB | PSP

Labels am Mappentypen
=====================
Mappentyp:           lbl_FT_Mappentypname                            =Mein Mappentyp
Feld:                lbl_FD_Mappentypname_Feldname                   =Mein Feld
Tooltip am Feld:     lbl_FDTT_Mappentypname_Feldname                 =Ich bin der Tooltip am Feld
Register:            lbl_REG_Mappentypname_Registername              =Mein Register

Suchmaske:           lbl_SM_Mappentypname_Suchmaskenname             =Meine Suchmaske
Trefferliste:        lbl_HL_Mappentypname_Trefferlistenname          =Meine Trefferliste

Dokumentvorlage:     lbl_DT_Mappentypname_Dokumentenvorlagenname     =Meine Dokumentenvorlage
Mailvorlage:         lbl_ET_Mappentypname_Mailvorlagenname           =Meine EMailvorlage

Aktion am Mappentyp: lbl_FTA_Mappentypname_Aktionsname               =Meine Aktion
Aktion am Register:  lbl_REGA_Mappentypname_Registername_Aktionsname =Meine Aktion

Labels am Outbar
================
Outbar:              lbl_OB_Outbarname                               =Meine Outbar

Labels am Ordner
================
Ordner:              lbl_FL_Ordnername                               =Mein Ordner
Aktion am Ordner:    lbl_FLA_Ordnername_Aktionsname                  =Meine Aktion

Labels am PortalScriptParameter
===============================
PortalScriptParameter:  lbl_PSP_Scriptname_Parametername             =Mein Parameter

Labels an Globalen Aktionen
===========================
Globale Aktion:         lbl_GLA_Aktionname                           =Meine Aktion
```

lbl_IDENT[_Name]* = Label

IDENT = FT | FD | REG | FTA | REGA | FL | FLA | HL | SM | DT | ET | OB | PSP

Labels am Mappentypen
=====================
Mappentyp:           lbl_FT_Mappentypname                            =Mein Mappentyp
Feld:                lbl_FD_Mappentypname_Feldname                   =Mein Feld
Tooltip am Feld:     lbl_FDTT_Mappentypname_Feldname                 =Ich bin der Tooltip am Feld
Register:            lbl_REG_Mappentypname_Registername              =Mein Register

Suchmaske:           lbl_SM_Mappentypname_Suchmaskenname             =Meine Suchmaske
Trefferliste:        lbl_HL_Mappentypname_Trefferlistenname          =Meine Trefferliste

Dokumentvorlage:     lbl_DT_Mappentypname_Dokumentenvorlagenname     =Meine Dokumentenvorlage
Mailvorlage:         lbl_ET_Mappentypname_Mailvorlagenname           =Meine EMailvorlage

Aktion am Mappentyp: lbl_FTA_Mappentypname_Aktionsname               =Meine Aktion
Aktion am Register:  lbl_REGA_Mappentypname_Registername_Aktionsname =Meine Aktion

Labels am Outbar
================
Outbar:              lbl_OB_Outbarname                               =Meine Outbar

Labels am Ordner
================
Ordner:              lbl_FL_Ordnername                               =Mein Ordner
Aktion am Ordner:    lbl_FLA_Ordnername_Aktionsname                  =Meine Aktion

Labels am PortalScriptParameter
===============================
PortalScriptParameter:  lbl_PSP_Scriptname_Parametername             =Mein Parameter

Labels an Globalen Aktionen
===========================
Globale Aktion:         lbl_GLA_Aktionname                           =Meine Aktion

### Vorgehensweise

Für jede Sprache muss eine Properties-Datei bzw. Ergänzung der vorhandenen Sprachdateien erstellt werden. Nach dem Eintragen der Schlüssel/Wert-Paare in die Properties-Dateien muss der Server neu gestartet oder am Mandanten die Funktion `"Mandant neu laden"` ausgeführt werden.

Deaktiviert wird diese Option mit der Ini-Einstellung (d.h. standardmäßig ist sie an):


```ini
$DefaultLabelsFromLocaleFile 0
```

$DefaultLabelsFromLocaleFile 0
## Prioritätsregeln für die Auswahl von Labels

Um klarzustellen, welches Label verwendet wird, gelten die folgenden Prioritätsregeln, die anhand des Labels des Feldes mit dem technischen Bezeichner `firstName` aus dem Mappentyp `ftPerson` erläutert werden:

1. Falls für die Anmeldesprache (z.B. de) ein musterbasiertes Label (lbl_FD_ftPerson_firstName =Vorname) in Properties-Dateien oder ServerLocale-Eigenschaften definiert ist, hat dieses die höchste Priorität. Ist kein lbl_FD_ftPerson_firstName definiert oder existiert kein Wert für die Anmeldesprache, wird mit Regel 4 fortgefahren.
2. Eine Definition von lbl_FD_ftPerson_firstName in ServerLocale-Eigenschaften hat Vorrang gegenüber der Definition im Locale-Verzeichnis. Das bedeutet, ein identischer Schlüssel kann in den ServerLocale-Eigenschaften mit einem anderen Wert überschrieben werden.
3. Wenn mehrere ServerLocale-Eigenschaften vorhanden sind, werden diese alphabetisch aufsteigend nach ihrem Namen eingelesen. Falls dabei lbl_FD_ftPerson_firstName mehrfach vorkommt, wird der letzte Eintrag übernommen.
4. Wurde in den vorherigen Regeln (1–3) nichts gefunden, wird das Label aus dem Feld des Mappentyps verwendet. Die Angabe des Labels kann wie folgt aussehen: de:Vorname;en:First name
oder pf:keyFirstName
oder de:Vorname;en:First name;pf:keyFirstName
5. Falls ein pf-Eintrag definiert ist (z.B. de:Vorname;en:First name;pf:keyFirstName), wird das zugehörige Label aus den Properties-Dateien bzw den ServerLocale-Eigenschaften verwendet. Labels aus den ServerLocale-Eigenschaften haben erneut Vorrang gegenüber denen aus dem Locale-Verzeichnis.
6. Existiert kein pf-Eintrag oder ist kein Wert für die Anmeldesprache verfügbar, wird die mehrsprachige Angabe am Feld (z.B. de:Vorname;en:First name) verwendet.
7. Wenn die Anmeldesprache (z.B. fr) in der Angabe nicht enthalten ist, wird der technische Bezeichner firstName angezeigt.

**Hinweis:** Da die Labels aus Properties-Dateien bzw. ServerLocale-Eigenschaften gecacht werden, muss nach Änderungen entweder am Mandanten die Funktion `"Mandant neu laden"` ausgeführt werden oder der Server neu gestartet werden.