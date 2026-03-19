---
title: "Mappen-Link Register und Felder"
source: "https://otris.software/documents/howto/common/multiLink.html"
---

# Mappen-Link Register und Felder

Mappen-Links sind eine Ergänzung zu den bestehenden Referenzfeldern. Während
Referenzfelder 1:1 Beziehungen zwischen zwei Mappen ermöglichen, können durch
Mappen-Links **N:M** Beziehungen zwischen mehreren Mappen dargestellt werden.

| Feature | Version |
| --- | --- |
| Mappen-Link als Register | 5.0d |
| Mappen-Link als Feld (reference & list) | 5.0e |
| Filterregeln für den Auswahldialog | 5.0e |
| Trefferlisten für den Auswahldialog (hitlistForSelection) | 5.0e HF1 |
| Maximale Spaltenbreite für Felder mit displayType='list' | 5.0f HF1 |
| Buttons am Register ausblenden mit fileLinkDefaultActions=false | 6.2.0 |


## Benutzung

Die angezeigten Werte sowohl auf dem Register als auch auf dem Feld sind
abhängig davon, ob auf der verknüpften Mappe eine Trefferliste angelegt worden
ist oder nicht. Wenn keine Trefferliste angelegt worden ist, werden
"Titel", "geändert am", "letzter Bearbeiter", "angelegt am" und "Eigentümer"
angezeigt. Die Ausnahme dazu ist die Darstellung als Referenzfeld, dort wird
ab `5.0e HF1` nur der Titel angezeigt. Wenn eine Trefferliste angelegt wurde,
werden die dort festgelegten Felder angezeigt.


### Register

Im Beispiel wird eine Verknüpfung auf einen Mappentyp ohne Trefferliste genutzt.


Abb. 1 - Mappen-Link Register

Mit einem Klick auf "Hinzufügen" öffnet sich ein Dialog, über den
neue Verknüpfungen angelegt werden können. Bereits bestehende Verknüpfungen
können markiert werden und über den "Entfernen" Button gelöscht werden.

Über die Eigenschaft `fileLinkDefaultActions` können die Buttons `Hinzufügen` und `Entfernen` ausgeblendet werden.


### Feld

Im Beispiel wird eine Verknüpfung auf einen Mappentyp mit Trefferliste genutzt.


#### Ansicht: Referenz

Die Referenzansicht wird genutzt, wenn in der `customConfig` der `displayType=reference` gesetzt ist.


Abb. 2 - Mappen-Link Feld Lesemodus

Im Lesemodus der Mappe ist die Funktionalität an das Referenzfeld angelehnt.
Ein Klick auf den Pfeil öffnet die verlinkte Mappe.


Abb. 3 - Mappen-Link Feld Bearbeitungsmodus

Im Bearbeitungsmodus wird der Pfeil durch ein `x` ersetzt. Ein Klick darauf
löscht die Verknüpfung. Zum Hinzufügen von Verknüpfungen kann, falls
Autocomplete nicht deaktiviert wurde, das Eingabefeld genutzt werden.
Alternativ öffnet ein Klick auf die Lupe den aus dem Register bekannten Dialog.


#### Ansicht: Liste

Die Listenansicht wird genutzt, wenn in der `customConfig` der `displayType=list` gesetzt ist.


Abb. 4 - Mappen-Link Feld Lesemodus

Im Lesemodus der Mappe öffnet ein Klick auf die Zeile die verlinkte Mappe.


Abb. 5 - Mappen-Link Feld Bearbeitungsmodus

Im Bearbeitungsmodus wird zusätzlich ein `x` in jede Zeile eingefügt. Ein Klick
darauf löscht die Verknüpfung. Zum Hinzufügen von Verknüpfungen kann,
falls Autocomplete nicht deaktiviert wurde, das Eingabefeld genutzt werden.
Alternativ öffnet ein Klick auf die Lupe den aus dem Register bekannten Dialog.


#### Autocomplete


Abb. 6 - Autocomplete

Wenn der Mappen-Link als Feld dargestellt wird, können Verknüpfungen auch über
ein Autocomplete hinzugefügt werden. Durch die Auswahl des Autocomplete
Eintrags wird die Verknüpfung automatisch hinzugefügt. Sollte das Autocomplete
nicht die gewünschten Einträge enthalten kann durch einen Klick auf die Lupe
der Hinzufügendialog geöffnet werden. Bereits eingegebene Suchbegriffe
werden dabei übernommen.


### Hinzufügen Dialog

Im Beispiel wird eine Verknüpfung auf einen Mappentyp ohne Trefferliste genutzt.


Abb. 7 - Mappen-Link Hinzufügen Dialog

Neben dem Autocomplete auf Feldern können auch über den Hinzufügendialog
Verknüpfungen hinzugefügt werden. Über die Selektion kann dabei eine
Mehrfachauswahl getroffen werden, alternativ fügt ein Doppelklick auf die
Zeile die Verknüpfung direkt hinzu.


### Suche

Mappen-Link Felder können in der erweiterten Suche durchsucht werden. Das Feld
wird hierbei immer in der Listenansicht dargestellt. Um die Suche zu befüllen,
muss im Moment das Lupensymbol geklickt werden, worauf sich der Hinzufügendialog öffnet. Dort können die verlinkten Mappen ausgewählt werden.


## Einrichtung

Ein Mappen-Link kann im Manager im Reiter Documents → Mappenverknüpfung erstellt werden.


Abb. 8 - Mappen-Link Definition


### Register


Abb. 9 - Mappen-Link Register Definition

Der Mappen-Link kann auf zwei Arten dargestellt werden. Die erste
Möglichkeit ist als Register. Für die Darstellung als Register muss als
Registertyp "Mappen-Link" ausgewählt werden. Anschließend kann über die
Auswahlliste "Mappen-Link (Definition)" die erstellte Verknüpfung
ausgewählt werden.


### Feld


Abb. 10 - Mappen-Link Feld Definition

Die zweite Darstellungsmöglichkeit ist als Feld. Für die Darstellung als Feld
muss der Typ "Mappen-Link" ausgewählt werden. Soll der Mappen-Link über ein Feld verwendet werden, muss das Register dennoch wie beschrieben angelegt werden. Mit der Eigenschaft "Visible=0" am Register kann man dieses aber ausblenden, sodass die Auswahl von verknüpften Mappen einheitlich nur das Feld funktioniert.
Zusätzlich muss die Eigenschaft `customConfig` an dem Feld gesetzt sein.
Diese definiert unter anderem, auf welches Mappen-Link Register sich das Feld
bezieht. Die Eigenschaft muss dabei in *JSON-Notation* angegeben werden.


```json
{
  "registerName": "htAuthor",
  "displayType": "list",
  "showColumnTitles": false,
  "maxHeight": 100,
  "maxColumnWidth": 150,
  "displayedFields": ["htLastName", "htName"],
  "sortColumn": 1,
  "autoCompleteConfig": {
    "minQueryChars": 2,
    "queryDelay": 0.5,
    "maxResults": 25,
    "autoFocusResult": false
  }
}
```

{
  "registerName": "htAuthor",
  "displayType": "list",
  "showColumnTitles": false,
  "maxHeight": 100,
  "maxColumnWidth": 150,
  "displayedFields": ["htLastName", "htName"],
  "sortColumn": 1,
  "autoCompleteConfig": {
    "minQueryChars": 2,
    "queryDelay": 0.5,
    "maxResults": 25,
    "autoFocusResult": false
  }
}| Eigenschaft | Typ | Pflicht | Mögliche Werte | Default | Funktion |
| --- | --- | --- | --- | --- | --- |
| registerName | String | Ja | --- | --- | Gibt an, auf welches Mappen-Link Register sich das Feld beziehen soll. Es wird der technische Bezeichner des Registers benötigt, in diesem Beispiel "htAuthor". |
| displayType | String | Nein | reference list | reference | Die Darstellungsart des Feldes. |
| showColumnTitles | boolean | Nein | true false notEmpty (ab 6.1.1) | true | Nur für displayType=list, stellt ein, ob in der Darstellung die Spaltentitel angezeigt werden sollen oder nicht. Ab Version 6.1.1 kann zusätzlich der Wert notEmpty genutzt werden. Die Spaltentitel werden dann nur angezeigt, wenn mindestens ein Eintrag vorhanden ist. |
| maxHeight | Number | Nein | --- | --- | Nur für displayType=list, gibt die Höhe in Pixel an, ab der die Liste eine Scrollbar bekommt. |
| maxColumnWidth | Number | Nein | --- | --- | Nur für displayType=list, gibt die maximale Breite der Spalten an. Ab Version 5.0f HF1. |
| displayedFields | Array | Nein | --- | Alle Felder (Ausnahme: displayType = reference, hier nur DlcFile_Title) | Gibt an, welche Felder aus der Trefferliste angezeigt werden sollen. Es werden die technischen Bezeichner der Felder benötigt. Wenn keine Trefferliste definiert ist lauten die Bezeichner wie folgt: Titel: DlcFile_Title geändert am: DlcFile_LastModified letzter Bearbeiter: DlcFile_LastEditor angelegt am: DlcFile_Created Eigentümer: DlcFile_Owner |
| sortColumn | Number | Nein | --- | --- | Gibt an, nach welcher Spalte die Werte im Feld sortiert werden sollen. Der Wert ist dabei der Index der Spalte wie er in der Trefferliste festgelegt wurde, displayedFields hat keine auswirkungen auf den Index. Die erste Spalte hat den Index 1. |
| autoCompleteConfig | Object/Boolean | Nein | --- | { "minQueryChars": 2, "queryDelay": 0.5, "maxResults": 25, "autoFocusResult": false } | Gibt an, ob das Hinzufügen von Verknüpfungen über ein Autocomplete möglich sein soll. Es wird dabei die selbe Autocomplete Konfiguration wie auf anderen Feldern genommen, allerdings muss kein Skript angegeben werden. Autocomplete ist default aktiviert, wenn kein Autocomplete genutzt werden soll muss die Eigenschaft auf false gesetzt werden. Die Einträge des Autocomplete entsprechen dabei den in displayedFields festgelegten Feldern. |


### Filterregeln im Hinzufügen Dialog

Es besteht die Möglichkeit die Einträge des Hinzufügendialogs mithilfe von
Filterregeln zu optimieren. Diese funktionieren analog zum Referenzfeld, der
einzige Unterschied besteht darin, dass die Filterregel über die
Eigenschaft `FileLinkFilter` (Documents 5 ab 5.0e, documentsOS ab 6.2.0) auf dem zugehörigen Register gesetzt werden muss.
Für eine genaue Beschreibung und die möglichen Filterregeln siehe
Unterkapitel 'Auswahldialog' im Handbuch zu Referenzfeldern.