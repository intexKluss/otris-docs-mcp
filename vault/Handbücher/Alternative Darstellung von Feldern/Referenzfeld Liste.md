---
title: "Referenzfeldliste"
source: "https://otris.software/documents/manuals/books/alternative-rendering/referenceFieldList.html"
---

# Referenzfeldliste

Die Referenzfeldliste funktioniert wie ein Referenzfeld, an dem mehrere Referenzen zeitgleich gesetzt werden können.

| Name der Felddarstellung | Documents-Version | Feldtypen |
| --- | --- | --- |
| doubleListReferenceField | ab 5.0h | Doppelauswahlliste |

--> Bild Referenzfeldliste

Im Bearbeiten-Modus lassen sich per Autovervollständigung Referenzen hinzufügen. Diese lassen sich durch betätigung des X-Knopfes wieder entfernen.


![Referenzfeldliste Bearbeitungsmodus](assets/ReferenceFieldList_Edit.png)

Abb. 7 - Referenzfeldliste Bearbeitungsmodus

Im Lesemodus kann auf eine Referenzierte Mappe gewechselt werden.


![Referenzfeldliste Anzeigemodus](assets/ReferenceFieldList_View.png)

Abb. 8 - Referenzfeldliste Anzeigemodus

Im Standard werden 10 Einträge in der Autovervollständigung angezeigt. Sollen mehr/weniger angezeit werden muss das Attribut `maxResults`angepasst werden.


## Zu beachten

Auch wenn der Name und Funktionsweise dem Referenzfeld ähneln basiert das Feld auf einer Doppelauswahlliste.

Daher werden einige Features des normalen Referenzfeldes nicht unterstützt, wie zum Beispiel das automatische Setzen von anderen Feldern.

Außerdem wird eine bestimmte Struktur für die Auswahlwerte vorausgesetzt, um die Funktionalität des Feldes zu gewährleisten.

Ein Auswahlwert muss zwingend als Schlüssel-Wert die Id der referenzierten Mappe beinhalten. Das Label muss dem Anzeigewert entsprechen. Ein mögliches Format ist das Standard lokalisierte Format:


```javascript
fileId;de:Beschriftung;en:label
```

fileId;de:Beschriftung;en:labelEin Standard-Script wird hierzu bereits ausgeliefert. Dieses ermöglicht die Referenzierung aller Mappen eines Mappentypes.
Zur Verwendung muss in den Aufzählungswerten `runscript:defaultRFfDblScript` eingetragen werden und die Eigenschaft `RfDbl_FileType` mit dem Namen des zu referenzierenden Mappentypen am Feld gesetzt werden.

Alternativ ist hier ein Beispiel eines entsprechenden Aufzählungswerte Skriptes:


```js
var file = context.file,
    fileType = context.fileType,
    fieldName = context.fieldName;


var myFRS = new FileResultset("ftEmployee", "", "");
for (var myFile = myFRS.first(); myFile; myFile = myFRS.next()) {
    var fId = myFile.asJSON(["DlcFile_Id"]);
    fId = JSON.parse(fId)["DlcFile_Id"];

    enumval.push(fId+";de:"+myFile.getTitle("de")+";en:"+myFile.getTitle("en")+";");
}
```

var file = context.file,
    fileType = context.fileType,
    fieldName = context.fieldName;


var myFRS = new FileResultset("ftEmployee", "", "");
for (var myFile = myFRS.first(); myFile; myFile = myFRS.next()) {
    var fId = myFile.asJSON(["DlcFile_Id"]);
    fId = JSON.parse(fId)["DlcFile_Id"];

    enumval.push(fId+";de:"+myFile.getTitle("de")+";en:"+myFile.getTitle("en")+";");
}
## Weitere Konfiguration

Die folgenden Parameter können verwendet werden, wenn die `alternativeRendering`-Eigenschaft per JSON konfiguriert wird:

Beispiel maxResults:


```JSON
{"name": "doubleListReferenceField", "params": {"maxResults": 15}}
```

| Name | Beschreibung | Standardwert | Documents-Version |
| --- | --- | --- | --- |
| maxResults | Schränkt die Anzahl der vorgeschlagenen Werte ein oder erweitert diese | 10 | 5.0h |
| noFileMapping | Entfernt die Lupe zum Öffnen einer Mappe im Lesemodus | false | 5.0i HF3 |
| autoCompleteConfig | Eine Autovervollständigungs-Konfiguration die anstelle der Feldauswahlwerte als Datenquelle dient. Weitere Informationen sind im entsprechenden Unterkapitel zu finden. |  | 5.0i HF3 |
| icon | Das Icon, über welches eine verknüpfte Mappe geöffnet werden kann. |  | 5.0i HF5 |


### Konfiguration der Autovervollständigung

Anstelle von Aufzählungswerten (z.B. per `runscript:defaultRFfDblScript`) kann ein Autovervollständigungs-Skript verwendet werden.


```JSON
{
    "name": "doubleListReferenceField",
    "params": {
        "autoCompleteConfig": {
            "scriptName": "autocompleteScript"
        }
    }
}
```


#### Autocomplete-Skript

Das Skript muss ein Array von Objekt mit den Attributen `value` und `label` zurückgeben.


```JSON
[{
    "value": "myId",
    "label": "mein Label"
}]
```


#### RenderValueCallback

Ab `5.0i HF5` ist ein Callback verfügbar, über den die Anzeige des Wertes, z.B. die Länge oder die Formatierung,
manipuliert werden kann. Dazu muss am Feld die Eigenschaft `renderValueCallback` mit einem beliebigen String gesetzt
werden. Dieser Wert wird dann verwendet, um den Callback zu registrieren.


```javascript
documents.sdk.exitRegistry.registerGeneralExitCallback("[Wert aus renderValueCallback]", function(documentsContext, options) {
	return {
		label: options.label.length > 20 ? options.label.substring(0, 20) + "..." : options.label,
		type: "plaintext"
	};
});

documents.sdk.exitRegistry.registerGeneralExitCallback("[Wert aus renderValueCallback]", function(documentsContext, options) {
	return {
		label: options.label.substring(0, options.label.lastIndexOf(" ") + 1) + "<b>" + options.label.substring(options.label.lastIndexOf(" ") + 1) + "</b>",
		type: "html",
		sanitize: false
	};
});
```

documents.sdk.exitRegistry.registerGeneralExitCallback("[Wert aus renderValueCallback]", function(documentsContext, options) {
	return {
		label: options.label.length > 20 ? options.label.substring(0, 20) + "..." : options.label,
		type: "plaintext"
	};
});

documents.sdk.exitRegistry.registerGeneralExitCallback("[Wert aus renderValueCallback]", function(documentsContext, options) {
	return {
		label: options.label.substring(0, options.label.lastIndexOf(" ") + 1) + "<b>" + options.label.substring(options.label.lastIndexOf(" ") + 1) + "</b>",
		type: "html",
		sanitize: false
	};
});
Das `options` Objekt beinhaltet dabei die folgenden Keys:

| Key | Beschreibung |
| --- | --- |
| label | Der in der Oberfläche Angezeigte Wert. |
| value | Der Key des Eintrags. |
| fieldModel | Das Model des Feldes. |
| escapeHTML | Eine Funktion, mit der HTML escaped werden kann. |

Der `return` Wert ist ein Objekt, welches die folgenden Keys enthalten kann.

| Key | Default | Mögliche Werte | Beschreibung |
| --- | --- | --- | --- |
| label |  |  | Der Wert, welcher angezeigt werden soll |
| type | plaintext | plaintext html | Legt fest, ob es sich bei dem Label um einen String oder HTML handelt |
| sanitize | true | true false | Nur wenn type=html, legt fest, ob JavaScript im HTML (z.B. onclick) entfernt werden soll. |