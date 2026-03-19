---
title: "Gentabledaten per Skript speichern/laden"
source: "https://otris.software/documents/howto/gentable/xmlScript.html"
---

# Gentabledaten per Skript speichern/laden

Zum Anzeigen und Speichern von Gentabledaten, kann ein Skript aufgerufen werden.
Hierzu muss in der Definitionsdatei das Tag "xmlScript" hinzugefügt werden.

Beispiel:


```xml
<table_def name=...
    ...
    <xmlScript>Skriptname</xmlScript>
    ...
</table_def>
```

<table_def name=...
    ...
    <xmlScript>Skriptname</xmlScript>
    ...
</table_def>Dieses Skript gibt bei Anzeige die Daten im XML-Format zurück.
Beim Speichern wird der Parameter gentableData im Skript mit den Daten im XML-Format befüllt.
Diese können dann beispielsweise in einer Datenbank abgelegt werden.


## Beispiel xmlGentableScript, speichern der Daten in einer Datenbank

Download: [xmlGentableScript.js](xmlGentableScript.js)


```javascript
var gentableDBCon = new DBConnection("odbc", "sqlserver", "sa", "sa"),
    defaultData = "",
    data,
    dbResult;

//  check for db connection, log error in case of error
if(!gentableDBCon || gentableDBCon.getLastError() != null) {
    var errorMessage = "Error connecting to the database" + (gentableDBCon ? ": " + gentableDBCon.getLastError() : "");
    context.errorMessage = errorMessage;
    return -1;
}

//	save gentable data
if(typeof gentableData !== "undefined") {

    var result = gentableDBCon.executeStatement('UPDATE xmlScript SET gentableData=\'' + gentableData + '\'');

	//	check if there was an error updating the db
    if(result===false) {
        context.errorMessage = result.getLastError();
        return -1;
    }

    //  close resultset & connection
    gentableDBCon.close();
    return;
}

//	load gentable data
var gentableRS = gentableDBCon.executeQuery("SELECT * FROM xmlScript");

if(gentableRS && gentableRS.next()) {

	//	get content of xml field
    var savedGentableData = gentableRS.getString(0);

    //  close resultset & connection
    gentableRS.close();
    gentableDBCon.close();
    return savedGentableData;
}

//  close connection
gentableDBCon.close();
```

var gentableDBCon = new DBConnection("odbc", "sqlserver", "sa", "sa"),
    defaultData = "",
    data,
    dbResult;

//  check for db connection, log error in case of error
if(!gentableDBCon || gentableDBCon.getLastError() != null) {
    var errorMessage = "Error connecting to the database" + (gentableDBCon ? ": " + gentableDBCon.getLastError() : "");
    context.errorMessage = errorMessage;
    return -1;
}

//	save gentable data
if(typeof gentableData !== "undefined") {

    var result = gentableDBCon.executeStatement('UPDATE xmlScript SET gentableData=\'' + gentableData + '\'');

	//	check if there was an error updating the db
    if(result===false) {
        context.errorMessage = result.getLastError();
        return -1;
    }

    //  close resultset & connection
    gentableDBCon.close();
    return;
}

//	load gentable data
var gentableRS = gentableDBCon.executeQuery("SELECT * FROM xmlScript");

if(gentableRS && gentableRS.next()) {

	//	get content of xml field
    var savedGentableData = gentableRS.getString(0);

    //  close resultset & connection
    gentableRS.close();
    gentableDBCon.close();
    return savedGentableData;
}

//  close connection
gentableDBCon.close();
# Beispiel Definionsdatei mit XML-Skript

Download: [xmlScript_Def.xml](xmlScript_Def.xml)


```xml
<?xml version="1.0" encoding="UTF-8"?>

<table_def name="xmlScript">

	<xmlscript>xmlGentableScript</xmlscript>

	<field number="1">
		<label>de:Artikelnr.;en:item number</label>
		<title>itemno</title>
		<type>TEXT</type>
		<width>90</width>
		<editable>true</editable>
	</field>

	<field number="2">
		<label>de:Artikeltext;en:description</label>
		<title>itemtext</title>
		<type>TEXTAREA</type>
		<width>200</width>
		<editable>true</editable>
	</field>

	<field number="3">
		<label>de:Stückpreis;en:unit price</label>
		<title>unitprice</title>
		<type>NUMBER</type>
		<width>80</width>
		<editable>true</editable>
		<numberFormat>n.2</numberFormat>
	</field>

	<button>
		<label>de:Neue Zeile;en:New row</label>
		<function>appendNewRow</function>
	</button>

	<button>
		<label>de:Zeile(n) löschen;en:delete row(s)</label>
		<function>deleteRow</function>
	</button>

</table_def>
```

﻿<?xml version="1.0" encoding="UTF-8"?>

<table_def name="xmlScript">

	<xmlscript>xmlGentableScript</xmlscript>

	<field number="1">
		<label>de:Artikelnr.;en:item number</label>
		<title>itemno</title>
		<type>TEXT</type>
		<width>90</width>
		<editable>true</editable>
	</field>

	<field number="2">
		<label>de:Artikeltext;en:description</label>
		<title>itemtext</title>
		<type>TEXTAREA</type>
		<width>200</width>
		<editable>true</editable>
	</field>

	<field number="3">
		<label>de:Stückpreis;en:unit price</label>
		<title>unitprice</title>
		<type>NUMBER</type>
		<width>80</width>
		<editable>true</editable>
		<numberFormat>n.2</numberFormat>
	</field>

	<button>
		<label>de:Neue Zeile;en:New row</label>
		<function>appendNewRow</function>
	</button>

	<button>
		<label>de:Zeile(n) löschen;en:delete row(s)</label>
		<function>deleteRow</function>
	</button>

</table_def>