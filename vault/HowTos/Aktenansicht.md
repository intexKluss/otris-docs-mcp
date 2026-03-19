---
title: "Aktenansicht"
source: "https://otris.software/documents/howto/eNavigator/eNavigator.html"
---

# Aktenansicht

Mithilfe der Aktenansicht können die bestehenden Verknüpfungen einer Mappe an
bestimmten Stellen in DOCUMENTS angezeigt werden.


Abb. 1 - Navigator und Inhaltsverzeichnis


## Aktenansicht einschalten und konfigurieren

Die Aktenansicht kann in mehreren Stufen konfiguriert werden.


### Stufe 1 - Eigenschaft

Mit der Eigenschaft `eNavigator = true` an einem Mappentyp, genannt *Akte*, wird der *Navigator* eingeschaltet.
Dieser erscheint dann über den Registern in der Mappenansicht.
Über den Button **Akte öffnen** wird das *Inhaltsverzeichnis* der verknüpften Akten im Listenbereich angezeigt.


#### eMaster

Der eNavigator kann auch auf anderen Mappentypen angezeigt werden.
Hierzu müssen auf diesen die Mappen-Eigenschaften `eNavigator = true` und `eMaster = <Feldname>` gesetzt sein.
Der Navigator wird dann angezeigt, wenn dieses Feld (z.B. Referenzfeld) auf eine Akte verweist.


### Stufe 2 - Skript - Konfiguration

Mit der Eigenschaft `eNavigator = <Skriptname>` kann ein Skript zur
Konfiguration der Aktenansicht eingebunden werden. Dieses Skript kann die
Konfiguration entweder als String, Objekt oder Funktion definieren.


#### Definition als String

Mit der Definition als String, lässt sich der HTML-Inhalt
des Navigators bestimmen.

Inhalt des Skriptes:


```javascript
module.exports = "<HTML>";
```

module.exports = "<HTML>";
#### Konfiguration der Akte als Objekt

Hiermit kann die Aktenansicht komplett konfiguriert werden.
Im Navigator und im Inhaltsverzeichnis können HTML und [Handlebars-Templates](https://handlebarsjs.com/guide/) verwendet werden.


Abb. 2 - Navigator Einstellungen


Abb. 3 - Inhaltsverzeichnis Einstellungen


```javascript
module.exports = {
  // Zeigt eine kleine Navigation für die verknüpften Vorgänge an.
  // Default ist false.
  enableNavigation: {boolean},
  // Klappt die Navigation der verknüpften Mappen bei Anzeige auf.
  // Default ist false.
  navigatorExpanded: {boolean},
  // Icon zum Öffnen des Inhaltsverzeichnisses. Bsp: entypo:location;color:blue;
  // Default wird ein Standard-Icon angezeigt.
  contentIcon: {string} "<Icon-Syntax>",
  // Tooltip für das angezeigte Icon.
  // Default wird eine Standardmeldung angezeigt.
  iconTooltip: {string} "<text>",
  // Zeigt ein Photofeld an, über welches im Bearbeitungsmodus ein Bild
  // hochgeladen werden kann. Dessen Daten werden dann in diesem Mappenfeld
  // gespeichert. Das Feld sollte vom Typ Text sein und der Haken bei
  // "in der Mappenansicht darstellen" sollte entfernt werden.
  // Default wird kein Feld angezeigt.
  photoFieldName: {string} "<Mappenfeldname>",
  // Text der angezeigt werden kann, wenn kein Bild hinterlegt wurde.
  // Default werden keine Initialien angezeigt.
  photoFieldInitials: {string} "<text>",
  // Komplexere Konfiguration für den Navigatortext.
  // Default wird ein vorgefertigter HTML-Inhalt angezeigt.
  navigatorText: {string} "<text>" oder {object} {
      // plain: Einfacher Text, handlebars: Ermöglicht das Verwenden von Handlebars Templates
      type: {string} "<plain|handlebars>",
      // Anzuzeigendes HTML
      value: {string} "<HTML>",
  },
  // Maximale Anzahl an Einträgen im Inhaltsverzeichnis für alle Verknüpfungen.
  // Default ist 10.
  allMax: {number},
  // Maximale Anzahl an Einträgen im Inhaltsverzeichnis für neueste Verknüpfungen.
  // Default ist 30.
  newestMax: {number},
  // Erlaubt das Sortieren mehrerer Spalten im Inhaltsverzeichnis
  multiSort: {boolean},
  // Legt fest bis zu welcher Ebene die angezeigten Gruppen initial geöffnet angezeigt werden
  openGroupLevel: {number},
  // Überschrift im Header des Inhaltsverzeichnisses.
  // Default wird ein vorgefertigter HTML-Inhalt angezeigt.
  contentHeaderTitle: {string} "<text>" oder {object} {
      type: {string} "<plain|handlebars>", value: {string} "<HTML>"
  },
  // Unter-Überschrift im header des Inhaltsverzeichnisses.
  // Default wird ein vorgefertigter HTML-Inhalt angezeigt.
  contentHeaderSubtitle: {string} "<text>" oder {object} {
      type: {string} "<plain|handlebars>", value: {string} "<HTML>"
  },
  // Inhalt des Headers des Inhaltsverzeichnisses.
  // Default wird ein vorgefertigter HTML-Inhalt angezeigt.
  contentHeaderHTML: {string} "<text>" oder {object} {
      type: {string} "<plain|handlebars>", value: {string} "<HTML>"
  },
  // Text Titel der als Suchquelle des Inhaltsverzeichnisses in der Volltextsuche angezeigt wird.
  // Default wird der Mappentitel angezeigt.
  textTitle: {string} "<text>" oder {object} {
      type: {string} "<plain|handlebars>", value: {string} "<text>"
  },
  // Icon im Header des Inhaltsverzeichnisses. Hier kann mit CSS der
  // Style des Icons angepasst werden.
  // Default wird ein Standard-Icon angezeigt.
  contentHeaderIcon: {string} "<Icon-Syntax>",
  // Wird ausgeführt bevor dem Standard-DataCollector der Aktenansicht eine Spalte hinzugefügt wird.
  beforeDataCollectorAddColumn: {function}
  // Wird ausgeführt, nachdem die Spalten im Standard-DataCollector der Aktenansicht hinzugefügt wurden.
  afterDataCollectorAddColumns: {function}
  // Wird ausgeführt, bevor die Liste in der Übersicht oder der Detailansicht angezeigt wird.
  // Ermöglicht das manipulieren der Liste.
  beforeTransferList: {function}
  // Schaltet das Verschieben von Zeilen ein.
  // Default ist das Verschieben der Zeilen ausgeschaltet.
  onMoveRow: {function}
  // Schaltet das Speichern der Spaltenbreiten ein.
  // Default ist das Speichern der Spaltenbreiten ab DOCUMENTS 6.1.0 eingeschaltet.
  saveColumnModel: {boolean}
}
```

module.exports = {
  // Zeigt eine kleine Navigation für die verknüpften Vorgänge an.
  // Default ist false.
  enableNavigation: {boolean},
  // Klappt die Navigation der verknüpften Mappen bei Anzeige auf.
  // Default ist false.
  navigatorExpanded: {boolean},
  // Icon zum Öffnen des Inhaltsverzeichnisses. Bsp: entypo:location;color:blue;
  // Default wird ein Standard-Icon angezeigt.
  contentIcon: {string} "<Icon-Syntax>",
  // Tooltip für das angezeigte Icon.
  // Default wird eine Standardmeldung angezeigt.
  iconTooltip: {string} "<text>",
  // Zeigt ein Photofeld an, über welches im Bearbeitungsmodus ein Bild
  // hochgeladen werden kann. Dessen Daten werden dann in diesem Mappenfeld
  // gespeichert. Das Feld sollte vom Typ Text sein und der Haken bei
  // "in der Mappenansicht darstellen" sollte entfernt werden.
  // Default wird kein Feld angezeigt.
  photoFieldName: {string} "<Mappenfeldname>",
  // Text der angezeigt werden kann, wenn kein Bild hinterlegt wurde.
  // Default werden keine Initialien angezeigt.
  photoFieldInitials: {string} "<text>",
  // Komplexere Konfiguration für den Navigatortext.
  // Default wird ein vorgefertigter HTML-Inhalt angezeigt.
  navigatorText: {string} "<text>" oder {object} {
      // plain: Einfacher Text, handlebars: Ermöglicht das Verwenden von Handlebars Templates
      type: {string} "<plain|handlebars>",
      // Anzuzeigendes HTML
      value: {string} "<HTML>",
  },
  // Maximale Anzahl an Einträgen im Inhaltsverzeichnis für alle Verknüpfungen.
  // Default ist 10.
  allMax: {number},
  // Maximale Anzahl an Einträgen im Inhaltsverzeichnis für neueste Verknüpfungen.
  // Default ist 30.
  newestMax: {number},
  // Erlaubt das Sortieren mehrerer Spalten im Inhaltsverzeichnis
  multiSort: {boolean},
  // Legt fest bis zu welcher Ebene die angezeigten Gruppen initial geöffnet angezeigt werden
  openGroupLevel: {number},
  // Überschrift im Header des Inhaltsverzeichnisses.
  // Default wird ein vorgefertigter HTML-Inhalt angezeigt.
  contentHeaderTitle: {string} "<text>" oder {object} {
      type: {string} "<plain|handlebars>", value: {string} "<HTML>"
  },
  // Unter-Überschrift im header des Inhaltsverzeichnisses.
  // Default wird ein vorgefertigter HTML-Inhalt angezeigt.
  contentHeaderSubtitle: {string} "<text>" oder {object} {
      type: {string} "<plain|handlebars>", value: {string} "<HTML>"
  },
  // Inhalt des Headers des Inhaltsverzeichnisses.
  // Default wird ein vorgefertigter HTML-Inhalt angezeigt.
  contentHeaderHTML: {string} "<text>" oder {object} {
      type: {string} "<plain|handlebars>", value: {string} "<HTML>"
  },
  // Text Titel der als Suchquelle des Inhaltsverzeichnisses in der Volltextsuche angezeigt wird.
  // Default wird der Mappentitel angezeigt.
  textTitle: {string} "<text>" oder {object} {
      type: {string} "<plain|handlebars>", value: {string} "<text>"
  },
  // Icon im Header des Inhaltsverzeichnisses. Hier kann mit CSS der
  // Style des Icons angepasst werden.
  // Default wird ein Standard-Icon angezeigt.
  contentHeaderIcon: {string} "<Icon-Syntax>",
  // Wird ausgeführt bevor dem Standard-DataCollector der Aktenansicht eine Spalte hinzugefügt wird.
  beforeDataCollectorAddColumn: {function}
  // Wird ausgeführt, nachdem die Spalten im Standard-DataCollector der Aktenansicht hinzugefügt wurden.
  afterDataCollectorAddColumns: {function}
  // Wird ausgeführt, bevor die Liste in der Übersicht oder der Detailansicht angezeigt wird.
  // Ermöglicht das manipulieren der Liste.
  beforeTransferList: {function}
  // Schaltet das Verschieben von Zeilen ein.
  // Default ist das Verschieben der Zeilen ausgeschaltet.
  onMoveRow: {function}
  // Schaltet das Speichern der Spaltenbreiten ein.
  // Default ist das Speichern der Spaltenbreiten ab DOCUMENTS 6.1.0 eingeschaltet.
  saveColumnModel: {boolean}
}Zum Verwenden von Autotexten, steht der [Handlebars-Helper](https://handlebarsjs.com/guide/block-helpers.html#basic-blocks)*autotext* zur verfügung.

Beispiel:


```javascript
<span>{{autoText "title"}}</span>
```

<span>{{autoText "title"}}</span>Informationen zur [Icon-Syntax](../design/icons.html)


### Callbacks


#### beforeDataCollectorAddColumn (ab DOCUMENTS 6.0.1)

Der Callback **beforeDataCollectorAddColumn** wird ausgeführt, bevor im Standard-DataCollector der Aktenansicht eine Spalte übergeben wird.
Hier ist es möglich, Spalteneinstellungen zu ändern oder Spalten nicht hinzuzufügen, indem *false* zurückgegeben wird.

Achtung: Wenn der technische Name einer Spalte geändert wird, verweist diese nicht mehr auf ihr ursprüngliches Mappenfeld.


```javascript
beforeDataCollectorAddColumn: function(column) {
  column: {
    name: {string} // technischer Spaltenname
    label: {string} // angezeigter Spaltenbezeichner
    options: {ColumnOptions} {
      autoFill: {boolean} // Spalte automatisch ausfüllen
      compactMode: {string} "<hide|only|title>" // hide: Spalte nicht in Kompaktansicht, only: Spalte nur in Kompaktansicht, title: Spaltenüberschrift in Kompaktansicht
      createSets: {boolean} // automatisch Sets für diese Spalte generieren
      dataType: {otris.scriptlist.ColumnDataType} // Skriptlistendatentyp
      grouping: {boolean} // Nach dieser Spalte gruppieren
      hidden: {boolean} // Spalte nicht anzeigen
      width: {number} // Spaltenbreite
    }
  }
}
```

beforeDataCollectorAddColumn: function(column) {
  column: {
    name: {string} // technischer Spaltenname
    label: {string} // angezeigter Spaltenbezeichner
    options: {ColumnOptions} {
      autoFill: {boolean} // Spalte automatisch ausfüllen
      compactMode: {string} "<hide|only|title>" // hide: Spalte nicht in Kompaktansicht, only: Spalte nur in Kompaktansicht, title: Spaltenüberschrift in Kompaktansicht
      createSets: {boolean} // automatisch Sets für diese Spalte generieren
      dataType: {otris.scriptlist.ColumnDataType} // Skriptlistendatentyp
      grouping: {boolean} // Nach dieser Spalte gruppieren
      hidden: {boolean} // Spalte nicht anzeigen
      width: {number} // Spaltenbreite
    }
  }
}
#### Beispiel Spaltenbezeichner ändern und die Spalte "letzter Bearbeiter" nicht anzeigen


```javascript
module.export = {
  ...
  beforeDataCollectorAddColumn: (col) => {
      // Spalte auslassen
      if (col.name === "DlcFile_LastEditor") {
          return false;
      }
      // Spaltenbezeichner ändern
      col.label = `${col.label} (cb-changed)`;
  }
}
```

module.export = {
  ...
  beforeDataCollectorAddColumn: (col) => {
      // Spalte auslassen
      if (col.name === "DlcFile_LastEditor") {
          return false;
      }
      // Spaltenbezeichner ändern
      col.label = `${col.label} (cb-changed)`;
  }
}
#### afterDataCollectorAddColumns (ab DOCUMENTS 6.0.1)

Der Callback **afterDataCollectorAddColumns** wird ausgeführt, nachdem alle Spalten im Standard-DataCollector der Aktenansicht hinzugefügt wurden.
Hier ist es möglich, weitere Spalten hinzuzufügen oder andere Änderungen mithilfe der RecordDataLib vorzunehmen.


```javascript
afterDataCollectorAddColumns: function(options) {
  options: {
    data: {RecordDataLib} // Aktuelle Instanz für das erzeugen der Aktenansicht
    mode: {string} "<navigator|record|details" // Modus in dem die Aktenansicht aufgerufen wurde
    searchExpression: {string} // Suchbegriff der für diese Ansicht eingeben wurde
    sortExpression: {string} // Sortierung die für die Ergebnisse verwendet wird
  }
}
```

afterDataCollectorAddColumns: function(options) {
  options: {
    data: {RecordDataLib} // Aktuelle Instanz für das erzeugen der Aktenansicht
    mode: {string} "<navigator|record|details" // Modus in dem die Aktenansicht aufgerufen wurde
    searchExpression: {string} // Suchbegriff der für diese Ansicht eingeben wurde
    sortExpression: {string} // Sortierung die für die Ergebnisse verwendet wird
  }
}
#### Beispiel Spalte hinzufügen


```javascript
module.exports = {
  ...
  afterDataCollectorAddColumns: (opts) => {
      // Feld "mail" hinzufügen
      opts.data.addColumn("mail", "E-Mail");
  }
}
```

module.exports = {
  ...
  afterDataCollectorAddColumns: (opts) => {
      // Feld "mail" hinzufügen
      opts.data.addColumn("mail", "E-Mail");
  }
}
#### beforeTransferList (ab DOCUMENTS 5.0i HF3)

Der Callback **beforeTransferList** wird ausgeführt, bevor die Liste der Aktenansicht oder der Detailansicht zurück an den Browser transferiert wird.
Hier ist es möglich, die Liste zu manipulieren.


```javascript
beforeTransferList: function(list) {
  list: {otris.scriptlist.List} // Liste mit den anzuzeigenden Daten
}
```

beforeTransferList: function(list) {
  list: {otris.scriptlist.List} // Liste mit den anzuzeigenden Daten
}
#### Beispiel Gruppen einklappen

Im folgenden Beispiel werden die Gruppen eingeklappt.


```javascript
module.exports = {
  ...
  beforeTransferList: function(list) {
    list.setOpenGroupLevel(0);
  }
}
```

module.exports = {
  ...
  beforeTransferList: function(list) {
    list.setOpenGroupLevel(0);
  }
}
#### onMoveRow

Der Callback **onMoveRow** schaltet, wenn er implementiert wurde, das Verschieben der Zeilen im Inhaltsverzeichnis ein.
Die Funktion wird nach dem Fallenlassen einer Zeile im Inhaltsverzeichnis aufgerufen.
Ihr werden die Informationen der verschobenen Zeile(n) übergeben und die der Gruppe(n), in der die Zeile(n) fallengelassen wurden.

Anhand dieser Informationen können dann die damit verknüpften Daten angepasst werden.
Nach dem Ausführen des Callbacks, wird das Inhaltsverzeichnis dann mit den angepassten Daten angezeigt.


```javascript
onMoveRow: function(event) {
  event: {
      // gefeuertes Event
      name: "moveRow",
      // Liste von Vorgangs-Ids, die bewegt wurden
      ids: [FILE_ID,...],
        // Daten der Gruppe in die diese Zeile verschoben wurde.
        newGroup:
          {
              // Wert der ersten Spalte, nach der gruppiert wird.
              Gruppen-Spalte1: Wert1,
              Gruppen-Spalte2:...
          }
      }
}
```

onMoveRow: function(event) {
  event: {
      // gefeuertes Event
      name: "moveRow",
      // Liste von Vorgangs-Ids, die bewegt wurden
      ids: [FILE_ID,...],
        // Daten der Gruppe in die diese Zeile verschoben wurde.
        newGroup:
          {
              // Wert der ersten Spalte, nach der gruppiert wird.
              Gruppen-Spalte1: Wert1,
              Gruppen-Spalte2:...
          }
      }
}
#### Beispiel onMoveRow Daten in Mappe schreiben

Das folgende Beispiel bezieht sich auf das Inhaltsverzeichnis einer Firma im relations-Mandanten.

Hier wird nach dem Verschieben einer Zeile die Kategorie der Zielzeile in die Beschreibung der verschobenen Mappe geschrieben.

Der Code kann im Skript *crmAccount_Navigator* hinzugefügt werden, indem er mit `require("onMoveRowExample").onMoveRow` in die Konfiguration eingebunden wird.


```javascript
module.exports = {
  ...
  onMoveRow: require("onMoveRowExample").onMoveRow
}
```

module.exports = {
  ...
  onMoveRow: require("onMoveRowExample").onMoveRow
}Download: [Beispiel onMoveRowExample.js](onMoveRowExample.js)


```javascript
module.exports.onMoveRow = function(event) {

	// event und Parameter prüfen
	if(event.name === "moveRow" && event.ids && event.ids.length && event.newGroup) {

		// Mappe laden
		var file = context.getFileById(event.ids[0]),
			dropCategory = event.newGroup[Object.keys(event.newGroup)[0]], // {recordType: "<Typ>"} -> <Typ> auswerten
			dropText = "Mappe wurde in Kategorie fallengelassen: " + dropCategory; // Text für Mappenfeld

		//	Daten ans Feld anfügen
		file.crmDescription = file.crmDescription ? file.crmDescription + "\r\n" + dropText : dropText;
		file.sync();
	}
};
```

module.exports.onMoveRow = function(event) {

	// event und Parameter prüfen
	if(event.name === "moveRow" && event.ids && event.ids.length && event.newGroup) {

		// Mappe laden
		var file = context.getFileById(event.ids[0]),
			dropCategory = event.newGroup[Object.keys(event.newGroup)[0]], // {recordType: "<Typ>"} -> <Typ> auswerten
			dropText = "Mappe wurde in Kategorie fallengelassen: " + dropCategory; // Text für Mappenfeld

		//	Daten ans Feld anfügen
		file.crmDescription = file.crmDescription ? file.crmDescription + "\r\n" + dropText : dropText;
		file.sync();
	}
};
#### Navigatorkonfiguration als Funktion

Es ist auch möglich, die Navigatorkonfiguration mithilfe einer Funktion zu erstellen.
Hier werden dann masterFile, der Verweis auf den eMaster und currentFile, der Verweis auf die Mappe auf der der Navigator angezeigt wird, übergeben.
Die Funktion muss dann eine Objektkonfiguration zurückgeben.


```javascript
module.exports = function(masterFile, currentFile) {
  return {
      contentIconName: "print",
      enableNavigation: true,
      navigatorText: {
          type: "plain",
          value: "This configuration was created by a function."
      },
      ...
  };
};
```

module.exports = function(masterFile, currentFile) {
  return {
      contentIconName: "print",
      enableNavigation: true,
      navigatorText: {
          type: "plain",
          value: "This configuration was created by a function."
      },
      ...
  };
};
### Stufe 3 - Eigenes Skript für Inhalt des Navigators

Der Inhalt des Navigators kann auch über ein Skript, genannt *Data-Collector*, bestimmt werden.
Hierfür muss in der Objektkonfiguration der Callback `dataCollector` implementiert werden.


```javascript
module.exports = {
  ...
  dataCollector: function(data, mode, searchExpresssion, config, sortExpression) {
      // Objekt zum Befüllen mit anzuzeigenden Daten.
      data: {RecordDataLib}
      // Modus in dem der Collector aufgerufen wurde.
      mode: <"navigator"|"record"|"details">
      // Eingegebener Suchbegriff
      searchExpression: {string}
      // Konfiguration des eNavigators
      config: {object}
      // Sortierung des Benutzers als String der beim Erzeugen des HitResultset übergeben werden muss.
      sortExpression: {string}
  }
  ...
};
```

module.exports = {
  ...
  dataCollector: function(data, mode, searchExpresssion, config, sortExpression) {
      // Objekt zum Befüllen mit anzuzeigenden Daten.
      data: {RecordDataLib}
      // Modus in dem der Collector aufgerufen wurde.
      mode: <"navigator"|"record"|"details">
      // Eingegebener Suchbegriff
      searchExpression: {string}
      // Konfiguration des eNavigators
      config: {object}
      // Sortierung des Benutzers als String der beim Erzeugen des HitResultset übergeben werden muss.
      sortExpression: {string}
  }
  ...
};**data:**

data ist die Schnittstelle, eine Instanz der [[Record-Library/RecordDataLib]], über die die anzuzeigenden Daten übergeben werden.

**mode:**

Der Callback wird beim Anzeigen einer Aktenansicht, in einem der drei Modi navigator, record oder details aufgerufen.

navigator: Anzeige im Navigator.

record: Anzeige im Inhaltsverzeichnis.

details: Anzeige als Detailansicht einer Akte im Ordner.

**searchExpresssion:**

Wenn im angezeigten Inhaltsverzeichnis eine Suche abgesetzt wurde, dann wird dieser Parameter mit dem eingegeben Suchbegriff befüllt.

**config:**

Stellt die Konfiguration des eNavigators zur Verfügung.

**sortExpression**

Sortierung einer Spalte, nachdem ein Benutzer sie angeklickt hat.


#### Sammeln der Daten

Wenn der Data-Collector im Kontext des Navigators aufgerufen wird, dann sollten nur dann Daten gesammelt werden, wenn in der Konfiguration enableNavigation eingeshaltet ist.

Für das Inhaltsverzeichnis können die Daten mit [[Record-Library/RecordDataLib#createSet|data.createSet()]] in eigene Sets einsortiert werden, welche dann über eine Klappliste auswählbar sind.
Mögliche Sets wären hier zum Beispiel Sammlungen der neuesten Vorgänge, aller Vorgänge oder Vorgänge die einem bestimmten Kriterium entsprechen.

Die anzuzeigenden Spalten im Inhaltsverzeichnis und der Detailansicht, können über die Methoden [[Record-Library/RecordDataLib#addColumn|data.addColumn()]], [[Record-Library/RecordDataLib#addTitleColumn|data.addTitleColumn()]],
[[Record-Library/RecordDataLib#addLastModifiedColumn|data.addLastModifiedColumn()]] und [[Record-Library/RecordDataLib#addLastEditorColumn|data.addLastEditorColumn()]], festgelegt werden. Diese werden dann anhand der verknüpften Vorgänge automatisch befüllt.

Die Verknüpfungsdaten werden als [[Record-Library/RecordEntry]] an data übergeben.
Die Methode [[Record-Library/RecordDataLib#addEntry|data.addEntry()]] erzeugt einen allgemeinen RecordEntry zum Befüllen.
Mit [[Record-Library/RecordDataLib#addEntryFromHit|data.addEntryFromHit()]] oder [[Record-Library/RecordDataLib#addEntryFromFile|data.addEntryFromFile()]] werden die Daten der Akte automatisch in ein [[Record-Library/RecordFileEntry]]/[[Record-Library/RecordHitEntry]] übertragen.


#### Kleines Beispiel für Data-Collector

Das folgende Beispiel, zeigt im Inhaltsverzeichnis einer Firma im relations-Mandanten, die Ansprechpartner nach Änderungsdatum sortiert an.

Der Code kann im Skript crmAccount_Navigator hinzugefügt werden,  indem er mit `require("simpleDataCollector").collectData` in die Konfiguration eingebunden wird.


```javascript
module.exports = {
  ...
  dataCollector: require("simpleDataCollector").collectData
}
```

module.exports = {
  ...
  dataCollector: require("simpleDataCollector").collectData
}Download: [Beispiel simpleDataCollector.js](simpleDataCollector.js)


```javascript
module.exports.collectData = function(data, mode, searchExpresssion, config, sortExpression) {

	//	Anzeige im Navigator. Daten nur sammeln, wenn enableNavigation eingeschaltet ist.
	if(mode === "navigator" && !config.enableNavigation) {
		return;
	}

	//	Anzahl neuer Einträge im Inhaltsverzeichnis anhand Konfiguration begrenzen.
	var newestMax = config.newestMax || 30;

	//	Akte, von der die Daten gesammelt werden.
	const mainFile = data.getMainFile();

	// Set für neueste Vorgänge anlegen.
	data.createSet("___newest___", "Neueste");

	//	Spalten Titel, letzte Änderung und letzter Bearbeiter anzeigen.
	data.addTitleColumn({ compactMode: "title", width: 250 });
	data.addLastModifiedColumn({ width: 150 });
	data.addLastEditorColumn({ width: 150 });

	// Die anzuzeigenden Vogänge werden entsprechend der vom Benutzer angeforderten Sortierung oder nach ihrer letzten Änderung sortiert.
	var hrsSort = sortExpression || "DlcFile_LastModified-";

	//	Register Ansprechpartner laden.
	var reg = mainFile.getRegisterByName("crmContacts", true);

	//	Sortierte Trefferliste laden.
	var regHrs = reg.getHitResultset(data.createHitlist(), hrsSort, "", newestMax);

	//	Treffer zu den Einträgen hinzufügen.
	for(var hit = regHrs.first(), hitcounter = 0; hit; hit = regHrs.next(), hitcounter++) {
		data.addEntryFromHit(hit);
	}

	//	Daten nach Datum sortieren und Limit newestMax anwenden.
	data.sortByDate();
	data.limit(newestMax);
};
```

module.exports.collectData = function(data, mode, searchExpresssion, config, sortExpression) {

	//	Anzeige im Navigator. Daten nur sammeln, wenn enableNavigation eingeschaltet ist.
	if(mode === "navigator" && !config.enableNavigation) {
		return;
	}

	//	Anzahl neuer Einträge im Inhaltsverzeichnis anhand Konfiguration begrenzen.
	var newestMax = config.newestMax || 30;

	//	Akte, von der die Daten gesammelt werden.
	const mainFile = data.getMainFile();

	// Set für neueste Vorgänge anlegen.
	data.createSet("___newest___", "Neueste");

	//	Spalten Titel, letzte Änderung und letzter Bearbeiter anzeigen.
	data.addTitleColumn({ compactMode: "title", width: 250 });
	data.addLastModifiedColumn({ width: 150 });
	data.addLastEditorColumn({ width: 150 });

	// Die anzuzeigenden Vogänge werden entsprechend der vom Benutzer angeforderten Sortierung oder nach ihrer letzten Änderung sortiert.
	var hrsSort = sortExpression || "DlcFile_LastModified-";

	//	Register Ansprechpartner laden.
	var reg = mainFile.getRegisterByName("crmContacts", true);

	//	Sortierte Trefferliste laden.
	var regHrs = reg.getHitResultset(data.createHitlist(), hrsSort, "", newestMax);

	//	Treffer zu den Einträgen hinzufügen.
	for(var hit = regHrs.first(), hitcounter = 0; hit; hit = regHrs.next(), hitcounter++) {
		data.addEntryFromHit(hit);
	}

	//	Daten nach Datum sortieren und Limit newestMax anwenden.
	data.sortByDate();
	data.limit(newestMax);
};
#### Erweitertes Beispiel für Data-Collector

Dieser Beispiel-Data-Collector nutzt einen Großteil der zur Verfügung stehenden Funktionalität.
Es werden alle Verknüpfungsregister im Navigator angezeigt und im Inhaltsverzeichnis stehen mehrere Sets zur Auswahl.

Der Code kann mit `require("exampleDataCollector").collectData` in einer Konfiguration eingebunden werden.


```javascript
module.exports = {
  ...
  dataCollector: require("exampleDataCollector").collectData
}
```

module.exports = {
  ...
  dataCollector: require("exampleDataCollector").collectData
}Download: [Beispiel exampleDataCollector.js](exampleDataCollector.js)


```javascript
module.exports.collectData = function(data, mode, searchExpresssion, config, sortExpression) {

	//	Anzeige im Navigator. Daten nur sammeln, wenn enableNavigation eingeschaltet ist.
	if(mode === "navigator" && !config.enableNavigation) {
		return;
	}

	//	Anzahl aller und neuer Einträge für die Sets __all__ und __newest__ begrenzen.
	var allMax = config.allMax || 10;
	var newestMax = config.newestMax || 30;

	//	Akte, von der die Daten gesammelt werden.
	const mainFile = data.getMainFile();

	//	Cache-Key für die angezeigten Einträge in der Detailansicht festlegen.
	const filterProperty = mainFile.getAutoText("fileType") + "DetailsFilter";

	//	In der Detailansicht ein Set festlegen
	if(!data.getSelectedSet() && mode === "details") {
		data.setSelectedSet(context.getSystemUser().propCache[filterProperty]);
	}

	//	Fallback auf Set mit allen Einträgen, falls nicht schon ein Set ausgewählt ist.
	data.setSelectedSet(data.getSelectedSet() || "___all___");

	//	Spezialbehandlung bei Anzeige außerhalb Navigator.
	if(mode !== "navigator") {

		//	In der Detailansicht wird das set für alle Vorgänge ausgelassen.
		if(mode !== "details") {
			data.createSet("___all___", "Alle", { default: true });
		}
		data.createSet("___newest___", "Neueste", { default: true });
	}

	//	Spalten für Titel, letzte Änderung, letzter Bearbeiter und Kategorie anzeigen.
	data.addTitleColumn({ compactMode: "title", width: 250 });
	data.addColumn("recordType", context.getLocaleValue("de:Kategorie;en:Category;"), { autoFill: false, grouping: mode === "record" && data.getSelectedSet().startsWith("___") && data.getSelectedSet() !== "___newest___", hidden: !data.getSelectedSet().startsWith("___"), createSets: true, width: 150 });
	data.addLastModifiedColumn({ width: 150 });
	data.addLastEditorColumn({ width: 150 });

	var hrsFilterValue = "";

	//	Eingegeben Suchbegriff auslesen.
	if(searchExpresssion) {
		hrsFilterValue = util.getQuoted(searchExpresssion);
	}

	var selectedSet = data.getSelectedSet();
	var hrsSort = null;

	// Benutzersortierung
	if(sortExpression) {
		hrsSort = sortExpression;
	}
	else if(selectedSet === "___newest___" || selectedSet === "___all___") { //	Wenn das Set mit allen oder den neuesten Einträgen ausgewählt ist, Sortierung für spätere Trefferliste festlegen.
		hrsSort = "DlcFile_LastModified-"
	}

	//	Alle Verknüpfungsregister laden.
	var regIter = mainFile.getRegisters("links", true);

	//	Alle Register durchiterieren.
	for(var reg = regIter.first(); reg; reg = regIter.next()) {

		var hitmax = 0;

		//	Im Set mit allen Einträgen einen Eintrag für "weitere ..." zulassen.
		if(selectedSet === "___all___") {
			hitmax = allMax + 1;
		}
		else if(selectedSet === "___newest___") { // "newest" Set enthält nur newestMax Einträge.
			hitmax = newestMax;
		}
		else if(selectedSet !== reg.name) { // Andere Sets Zeigen nur einen Treffer
			hitmax = 1;
		}

		//	Trefferliste für aktuelles Register laden.
		var regHrs = reg.getHitResultset(data.createHitlist(), hrsSort, hrsFilterValue, hitmax);

		//	Treffer durchiterieren.
		for(var hit = regHrs.first(), hitcounter = 0; hit; hit = regHrs.next(), hitcounter++) {

			var entry = null;

			//	Eintrag "weitere ..." erstellen.
			if(selectedSet === "___all___" && hitcounter >= hitmax - 1) {
				entry = data.addEntry();
				entry.setValue("DlcFile_Title", "more", context.getLocaleValue("de:weitere ...;en:more ...;"));
				entry.runScript = context.scriptName;
				entry.scriptParams = {
					fileId: mainFile.getid(),
					filter: reg.name
				}
			}
			else { // Eintrag hinzufügen.
				entry = data.addEntryFromHit(hit);
			}

			//	Kategorie vom Register übernehmen.
			entry.setValueFromRegister("recordType", reg);
		}
	}

	//	Im Set neueste, Daten nach Datum sortieren und Limit newestMax anwenden.
	if(selectedSet === "___newest___") {
		data.sortByDate();
		data.limit(newestMax);
	}

	//	In der Detailansicht das selektierte Set cachen.
	if(mode === "details") {
		context.getSystemUser().propCache[filterProperty] = data.getSelectedSet();
	}
};
```

module.exports.collectData = function(data, mode, searchExpresssion, config, sortExpression) {

	//	Anzeige im Navigator. Daten nur sammeln, wenn enableNavigation eingeschaltet ist.
	if(mode === "navigator" && !config.enableNavigation) {
		return;
	}

	//	Anzahl aller und neuer Einträge für die Sets __all__ und __newest__ begrenzen.
	var allMax = config.allMax || 10;
	var newestMax = config.newestMax || 30;

	//	Akte, von der die Daten gesammelt werden.
	const mainFile = data.getMainFile();

	//	Cache-Key für die angezeigten Einträge in der Detailansicht festlegen.
	const filterProperty = mainFile.getAutoText("fileType") + "DetailsFilter";

	//	In der Detailansicht ein Set festlegen
	if(!data.getSelectedSet() && mode === "details") {
		data.setSelectedSet(context.getSystemUser().propCache[filterProperty]);
	}

	//	Fallback auf Set mit allen Einträgen, falls nicht schon ein Set ausgewählt ist.
	data.setSelectedSet(data.getSelectedSet() || "___all___");

	//	Spezialbehandlung bei Anzeige außerhalb Navigator.
	if(mode !== "navigator") {

		//	In der Detailansicht wird das set für alle Vorgänge ausgelassen.
		if(mode !== "details") {
			data.createSet("___all___", "Alle", { default: true });
		}
		data.createSet("___newest___", "Neueste", { default: true });
	}

	//	Spalten für Titel, letzte Änderung, letzter Bearbeiter und Kategorie anzeigen.
	data.addTitleColumn({ compactMode: "title", width: 250 });
	data.addColumn("recordType", context.getLocaleValue("de:Kategorie;en:Category;"), { autoFill: false, grouping: mode === "record" && data.getSelectedSet().startsWith("___") && data.getSelectedSet() !== "___newest___", hidden: !data.getSelectedSet().startsWith("___"), createSets: true, width: 150 });
	data.addLastModifiedColumn({ width: 150 });
	data.addLastEditorColumn({ width: 150 });

	var hrsFilterValue = "";

	//	Eingegeben Suchbegriff auslesen.
	if(searchExpresssion) {
		hrsFilterValue = util.getQuoted(searchExpresssion);
	}

	var selectedSet = data.getSelectedSet();
	var hrsSort = null;

	// Benutzersortierung
	if(sortExpression) {
		hrsSort = sortExpression;
	}
	else if(selectedSet === "___newest___" || selectedSet === "___all___") { //	Wenn das Set mit allen oder den neuesten Einträgen ausgewählt ist, Sortierung für spätere Trefferliste festlegen.
		hrsSort = "DlcFile_LastModified-"
	}

	//	Alle Verknüpfungsregister laden.
	var regIter = mainFile.getRegisters("links", true);

	//	Alle Register durchiterieren.
	for(var reg = regIter.first(); reg; reg = regIter.next()) {

		var hitmax = 0;

		//	Im Set mit allen Einträgen einen Eintrag für "weitere ..." zulassen.
		if(selectedSet === "___all___") {
			hitmax = allMax + 1;
		}
		else if(selectedSet === "___newest___") { // "newest" Set enthält nur newestMax Einträge.
			hitmax = newestMax;
		}
		else if(selectedSet !== reg.name) { // Andere Sets Zeigen nur einen Treffer
			hitmax = 1;
		}

		//	Trefferliste für aktuelles Register laden.
		var regHrs = reg.getHitResultset(data.createHitlist(), hrsSort, hrsFilterValue, hitmax);

		//	Treffer durchiterieren.
		for(var hit = regHrs.first(), hitcounter = 0; hit; hit = regHrs.next(), hitcounter++) {

			var entry = null;

			//	Eintrag "weitere ..." erstellen.
			if(selectedSet === "___all___" && hitcounter >= hitmax - 1) {
				entry = data.addEntry();
				entry.setValue("DlcFile_Title", "more", context.getLocaleValue("de:weitere ...;en:more ...;"));
				entry.runScript = context.scriptName;
				entry.scriptParams = {
					fileId: mainFile.getid(),
					filter: reg.name
				}
			}
			else { // Eintrag hinzufügen.
				entry = data.addEntryFromHit(hit);
			}

			//	Kategorie vom Register übernehmen.
			entry.setValueFromRegister("recordType", reg);
		}
	}

	//	Im Set neueste, Daten nach Datum sortieren und Limit newestMax anwenden.
	if(selectedSet === "___newest___") {
		data.sortByDate();
		data.limit(newestMax);
	}

	//	In der Detailansicht das selektierte Set cachen.
	if(mode === "details") {
		context.getSystemUser().propCache[filterProperty] = data.getSelectedSet();
	}
};
#### Inhaltsverzeichnis als Detailansicht


Abb. 4 - Inhaltsverzeichnis als Detailansicht

In einem Ordner kann auch das Inhaltsverzeichnis als *Detailansicht* für einzelne Zeilen angezeigt werden.
Hierzu muss am Ordner die Eigenschaft `fileDetailsShowColumn = true` gesetzt sein und am Mappentyp muss die Eigenschaft
`fileDetailsScript = navigator.GenericRecordDetails` gesetzt sein.

Die Detailansicht lässt sich über das Dreieck vorne an einer Zeile öffnen.
In der Detailansicht kann über den Button rechts oben, das Inhaltsverzeichnis in Vollansicht geöffnet werden.