---
title: "Verknüpfungsregister als Felder darstellen"
source: "https://otris.software/documents/howto/common/fileLink.html"
---

# Verknüpfungsregister als Felder darstellen

Ab Version 6.0.1 ist es möglich Verknüpfungsregister als Felder darzustellen.
Für die Darstellung als Feld muss der Typ "Mappen-Link" ausgewählt werden.
Soll das Verknüpfungsregister als Feld dargestellt werden, muss das Register
trotzdem angelegt werden. Mit der Eigenschaft "Visible=0" am Register kann man
dieses aber ausblenden.

Zusätzlich muss die Eigenschaft `customConfig` am Feld gesetzt werden.
Diese definiert unter anderem, auf welches Verknüpfungsregister sich das Feld.
Die Eigenschaft muss dabei in JSON-Notation angegeben werden:


```json
{
  "registerName": "crmContacts",
  "displayType": "list",
  "showColumnTitles": true,
  "maxHeight": 100,
  "maxColumnWidth": 150,
  "displayedFields": ["DlcFile_Title", "crmCompany", "crmPhone"]
}
```

{
  "registerName": "crmContacts",
  "displayType": "list",
  "showColumnTitles": true,
  "maxHeight": 100,
  "maxColumnWidth": 150,
  "displayedFields": ["DlcFile_Title", "crmCompany", "crmPhone"]
}| Eigenschaft | Typ | Pflicht | Mögliche Werte | Default | Funktion |
| --- | --- | --- | --- | --- | --- |
| registerName | String | Ja | --- | --- | Gibt an, auf welches Mappen-Link Register sich das Feld beziehen soll. Es wird der technische Bezeichner des Registers benötigt, in diesem Beispiel "htBooks". |
| displayType | String | Nein | reference list | reference | Die Darstellungsart des Feldes. |
| showColumnTitles | boolean | Nein | true false | true | Nur für displayType=list, stellt ein, ob in der Darstellung die Spaltentitel angezeigt werden sollen oder nicht. |
| maxHeight | Number | Nein | --- | --- | Nur für displayType=list, gibt die Höhe in Pixel an, ab der die Liste eine Scrollbar bekommt. |
| maxColumnWidth | Number | Nein | --- | --- | Nur für displayType=list, gibt die maximale Breite der Spalten an. |
| displayedFields | Array | Nein | --- | Alle Felder (Ausnahme: displayType = reference, hier nur DlcFile_Title) | Gibt an, welche Felder aus der Trefferliste angezeigt werden sollen. Es werden die technischen Bezeichner der Felder benötigt. Wenn keine Trefferliste definiert ist lauten die Bezeichner wie folgt: Titel: DlcFile_Title geändert am: DlcFile_LastModified letzter Bearbeiter: DlcFile_LastEditor angelegt am: DlcFile_Created Eigentümer: DlcFile_Owner |