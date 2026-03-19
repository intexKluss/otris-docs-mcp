---
title: "Konfiguration von Skript-Aktionen"
source: "https://otris.software/documents/manuals/books/app-doc/script_actions.html"
---

# Konfiguration von Skript-Aktionen

Dieses Kapitel beschreibt alle verfügbaren Parameter und Konfigurationsmöglichkeiten für Skript-Aktionen.
Eine grundlegende Einführung zur Verwendung von Skript-Aktionen befindet sich im Abschnitt [„Getting Started: Skript-Aktionen“](./script_actions_getting_started.html).
Weitere Anwendungsbeispiele sind im Kapitel [„Beispiele für Skript-Aktionen“](./script_actions_examples.html) zu finden.


## Konfigurationsskripte (appActionConfig)

Die Konfigurationsskripte, welche immer mit dem Namen `appActionConfig_`
beginnen müssen, dienen dazu, eine Aktion bekannt zu machen und
Meta-Informationen über die Aktion zu liefern, sodass diese sowohl in
der App als auch in der Konfigurationsmappe korrekt dargestellt werden
können. Hierzu muss das Objekt, welches in `module.exports` abgelegt wird,
mit den nachfolgenden Attributen versehen werden.


### scopes

Definiert die Gültigkeitsbereiche der Aktion, d.h. an welchen
Konfigurationseinheiten die Aktion zur Verfügung steht (Global (global),
Ordner (folder) oder Mappe (file)). Hierzu muss folgendes Objekt gesetzt
werden, in welchem die `boolean`-Werte (true = aktiv, false = inaktiv)
entsprechend anzupassen sind.


```javascript
{
    global: true,
    folder: false,
    file: false
}
```

{
    global: true,
    folder: false,
    file: false
}

### techName

Definiert den technischen Bezeichner der Aktion. Dieser wird nur intern
verwendet und sollte stets mit dem Teil des Skriptnames übereinstimmen,
welcher hinter `appActionConfig_` folgt (Skriptname:
„appActionConfig_beispiel“; techName: „beispiel“).


### ergName

Definiert den Bezeichner, welcher in der Konfigurationsmappe in der
Web-Oberfläche angezeigt wird (Mehrsprachenfähig über
„de:Deutsch;en:English;“).


### lastChange

Hält das Datum der letzten Änderung an diesem Skript. Dies dient dazu,
die im Cache der App liegenden Daten zu invalidieren, falls das Skript
geändert wurde. Das heißt, falls dieses Datum nicht angepasst wird
könnten Nutzer Änderungen nicht mitbekommen. Dieses Feld muss mit einem
Date Objekt gefüllt werden.


### action

Hier wird festgelegt, wie die Aktion in der App dargestellt wird. Für
dieses Feld bestehen zwei Möglichkeiten:

1. Statisch: Es wird direkt eine Aktionsdefinition (siehe nächstes Kapitel) abgelegt.
2. Dynamisch: Es wird eine Funktion abgelegt, welche die Aktionsdefinition dynamisch erzeugt und zurückgibt. Die Funktion hat zwei Parameter. Der erste Parameter ist das Sprachkürzel des Nutzers (Bsp: “de“). Der zweite Parameter hängt von dem Kontext der Aktion ab. Bei einer globalen Aktion ist dieser Parameter leer, bei einer Mappenaktion enthält der Parameter ein Objekt vom Typ DocFile und bei einer Ordneraktion enthält der Parameter ein Objekt vom Typ Folder. Der Rückgabewert der Funktion kann entweder eine Aktionsdefinition (siehe unten) oder null sein. Falls der Wert null ist wird die Aktion nicht in der App dargestellt und kann somit bedingt ausgeblendet werden.

Die dynamische Variante ist insbesondere dann sinnvoll, falls die
Aktionen mehrsprachig erzeugt werden müssen, falls Aktionen nur bedingt
angezeigt werden sollen oder falls Aktionen nutzerabhängig,
mappenabhängig etc. erzeugt werden sollen.


### Aktionsdefinitionen (action)

Aktionsdefinitionen bestimmen die Darstellung der Aktion in der App. Sie
werden momentan sowohl in Konfigurationsskripten (zur Definition der
initialen Aktion, siehe oben), als auch in Aktionsskripten (zur
Definition von Folgeaktionen, dazu später mehr) verwendet. Bei
Aktionsdefinitionen handelt es sich um ein Objekt, welches verschiedene
Pflichtattribute, sowie einige optionale Attribute besitzt. In der App
können Aktionen zwei Ausprägungen haben:

1. Direkte Ausführung eines Aktionsskriptes, nach Betätigung des Aktionsknopfes
2. Öffnen eines konfigurierbaren Eingabedialogs nach Betätigung des Aktionsknopfes, welcher dann wiederum ein Aktionsskript auslösen kann

Je nachdem, welche Möglichkeit gewählt wird sind verschiedene Attribute
der Aktionsdefinition verpflichtend, diese sind nachfolgend
dementsprechend gekennzeichnet und in dieser Übersicht zusammengefasst.

| Attribut | Direkte Aktion | Dialog | Verpflichtend |
| --- | --- | --- | --- |
| title | ✔ | ✔ | ✔ |
| icon | ✔ | ✔ |  |
| rank | ✔ | ✔ |  |
| style | ✔ | ✔ |  |
| offline | ✔ | ✔ |  |
| showQuickViewGadget | ✔ |  |  |
| callScript | ✔ |  |  |
| callScriptParameters | ✔ |  |  |
| inputSource | ✔ |  |  |
| buttons |  | ✔ | ✔ |
| subTitle |  | ✔ |  |
| message |  | ✔ |  |
| enableBackdropDismiss |  | ✔ |  |
| inputs |  | ✔ |  |


#### title (Direkte Aktion und Dialog, verpflichtend)

Legt den Titel des Aktionsknopfes und des Dialogs fest.


#### icon (Direkte Aktion und Dialog, optional)

Legt das Icon der Aktion fest, welches hinter dem Text des Knopfes
angezeigt wird. Der Wert muss der Name eines „*Ionic/Entypo/Material Design*“-Icons sein.
Siehe [Icon HowTo](./../../../howto/design/icons.html). Beispiel: "entypo:folder;", "ionicons:ion-md-folder;" oder "mdi:mdi-folder;" sein.
Weitere Informationen zu Icons finden Sie in den Kapiteln zur App Konfiguration


#### rank (Direkte Aktion und Dialog, optional)

Steuert den Rang der Aktion in der Reihenfolge der Aktionen und Mappen
an die Home Seite in der App.


#### style (Direkte Aktion und Dialog, optional)

Legt die Darstellung der Aktion fest, falls es sich um eine Mappenaktion
handelt. Es kann zwischen folgenden Möglichkeiten gewählt werden:

- “button“: Anzeige unterhalb des Mappeninhalts oder der Ordner. Diese Option kann auf Mappen und bei globalen Aktionen gewählt werden, nicht jedoch bei Aktionen auf Ordnern.
- “button_inverted“: Wie „button“, jedoch in invertierter Farbgebung.
- “dropdown“: Anzeige im Menü oben rechts.
- „tile“: Die Aktion wird als Kachel angezeigt. Diese Option kann bei globalen Aktionen gewählt werden, nicht jedoch bei Aktionen auf Mappen oder Ordnern.
- “tile_inverted“: wie „tile“, jedoch in invertierter Farbgebung. Die nachfolgende Abbildung zeigt ein Beispiel für eine globale Aktion als invertierte Kachel.


![Aktion als Kachel](media/script-actions-tile.png)

Abb. 48 - Aktion als Kachel

- “fab“: Die Aktion wird als Floating Action Button angezeigt. Falls mehrere Aktionen im Style "FAB" konfiguriert wurden, wird immer nur eine Aktion (die erste) als FAB unterstützt. Alle Weiteren werden einfach als normale Actions angezeigt. Das Icon kann wie immer per App Action Config konfiguriert werden. Der FAB wird immer unten rechts fixiert angezeigt.


![Aktion als FAB](media/script-actions-fab.png)

Abb. 49 - Aktion als FAB

- “top_button“: Anzeige oberhalb des Mappeninhalts. Diese Option kann nur auf Mappen gewählt werden.


![Aktion als Knopf oberhalb des Mappeninhalts](media/script-actions-top-button.png)

Abb. 50 - Aktion als Knopf oberhalb des Mappeninhalts

- “top_button_inverted“: Wie „top_button“, jedoch in invertierter Farbgebung.
- “workflow_button“: Die Aktion wird als Worklow Aktion angezeigt, zusammen mit normale Workflow Aktionen.


![Aktion als Workflow Button](media/script-actions-workflow-button.png)

Abb. 51 - Aktion als Workflow Button

- “workflow_button_inverted“: Wie „workflow_button“, jedoch in invertierter Farbgebung.


#### offline (Direkte Aktion und Dialog, optional)

Steuert ob die Aktion offline ausgeführt werden kann. Im Fall eines
Netzwerkproblems, wird die Aktion gespeichert, und bei der nächsten
Synchronisierung ausgeführt. Wird die Option nicht eingestellt, wird
die Aktion offline nicht vefügbar. Mögliche Werte:

- "on": Die Aktion ist offline verfügbar.
- "off": Die Aktion kann nur online ausgeführt werden.
- "unchanged": Die Aktion wird offline ausgeführt, wenn die verbundene Daten sich in Zwischenzeit nicht geändert haben.


#### showQuickViewGadget (Direkte Aktion)

Legt den Namen des QuickViewGadgets fest, das aufgerufen werden soll.
Beispiel in der Dokumentation zu [[Handbücher/myFavorites - Handbuch/Gadgets in der App|Gadgets in der App]].
Kann statt


#### callScript (Direkte Aktion)

Legt den Skriptnamen des direkt aufzurufenden Skriptes fest. Der
Skriptname muss mit `appActionCall_` beginnen.


#### callScriptParameters (Direkte Aktion, optional)

Legt über ein Objekt zusätzliche Daten für das aufzurufende Skript.
Standard key-value Paare können hier genutzt werden:
{
key1 : value1,
key2 : value2,
...
}


#### inputSource (Direkte Aktion, optional)

Enthält die Optionen die für die Verwendung des Barcode-Scanners
erforderlich sind. Hierbei wird anstatt eines Dialogs die Kamera
des Gerätes geöffnet, welches es ermöglicht einen Barcode zu scannen.
Nach dem Scan wird der Barcode an das Action-Skript übermittelt und
ist im Parameter `result` verfügbar.

- "source": Der einzige mögliche Wert ist momentan "scan".
- "appHandlerScript": Legt den Skriptnamen des aufzurufenden Skriptes fest. Der Skriptname muss mit appActionCall_ beginnen.
- "barcodeFormats": Liste möglicher Barcodeformate. Beispiel: ["EAN_13", "EAN_8", "UPC_A", "CODE_39", "CODE_93", "ITF"]
- "sound": Aktiviert (true) oder deaktiviert (false) den Ton beim Scannen.


#### buttons (Dialog, verpflichtend)

Legt über ein Array die Schaltflächen fest, welche an dem Dialog
dargestellt werden. Hierbei wird je Button ein Objekt in einem Array
gespeichert, welches wiederum als Wert für die Eigenschaft gesetzt wird.

Jedes Button Objekt hat drei Eigenschaften:

1. text – Beschriftung des Buttons
2. role – Funktion des Buttons. Der Wert wird an das Aktionsskript übergeben. Besonderheit: „cancel“ schließt das Fenster und führt keine Aktion auf dem Server aus.
3. appHandlerScript – Legt das bei Aktivierung des Knopfes auszuführende Skript fest. Der Skriptname muss mit appActionCall_ beginnen. Dazu mehr im nächsten Kapitel.

Beispiel:


```javascript
...
buttons: [{
    text: "Abbrechen",
    role: "cancel"
}, {
    text: "Ok",
    appHandlerScript: "appActionCall\_test"
}],
...
```

...
buttons: [{
    text: "Abbrechen",
    role: "cancel"
}, {
    text: "Ok",
    appHandlerScript: "appActionCall\_test"
}],
...
#### subTitle (Dialog, optional)

Legt den Untertitel im Dialog fest.


#### message (Dialog, optional)

Legt den angezeigten Text im Dialog fest.


#### enableBackdropDismiss (Dialog, optional)

Legt fest ob das Dialogfeld durch Antippen des abgedunkelten
Hintergrundes geschlossen werden kann.


#### inputs (Dialog, optional)

Legt über ein Array die Eingabefelder des Dialogs fest. Hierbei können
**entweder** Eingabefelder **oder** eine Mehrfachauswahl (Checkboxen) **oder** eine Einfachauswahl (Radiobuttons) genutzt
werden. Das Format ist dem der Buttons ähnlich, das heißt es muss ein
Array mit ein oder mehreren Objekten angegeben werden. Es stehen hierbei
folgende Attribute für die jeweiligen Objekte zur Verfügung:

- type – „checkbox“, „radio“ oder HTML5 Eingabefelder (zum Beispiel „text“; siehe unten). Wichtig: Falls „checkbox“ oder „radio“ verwendet werden müssen alle anderen Felder auch von dem jeweiligen Typ sein.
- name – Name des Feldes, wird benötigt, um das Feld auf dem Server identifizieren zu können
- value – Vordefinierter Wert des Feldes. Je nach Feldtyp werden hier verschiedene Formate erwartet
- placeholder – Text, welcher in dem Feld angezeigt wird, falls kein Wert gesetzt ist
- disabled – Gibt an ob das Feld deaktiviert (ausgegraut) ist.
- label – Beschriftung des Eintrages (nur bei „checkbox“ und „radio“)
- checked – Gibt an ob der aktuelle Eintrag ausgewählt ist (nur bei „checkbox“ und „radio“)


##### HTML5 Eingabefeldtypen als Input type

- text – Nur Text
- password – Nur Text, aber es werden Punkte statt der Buchstaben dargestellt
- tel – Es wird eine angepasste Tastatur für Telefonnummern angezeigt
- url – Es wird eine für Internetadressen angepasste Tastatur angezeigt und die URL wird überprüft
- email – Es wird eine für E-Mails angepasste Tastatur angezeigt
- number – Es sind nur Zahlen erlaubt, eine entsprechende Tastatur wird eingeblendet
- hidden – Es wird kein Feld angezeigt, der vorbelegte Wert wird an den Server übertragen
- date – Es wird ein Datumsfeld mit einem Datepicker angezeigt
- time – Es wird ein Uhrzeitfeld mit entsprechendem Auswahldialog angezeigt


## Aktionsskripte (appActionCall)

Ein Aktionsskript enthält den Skript Code, welcher ausgeführt wird,
nachdem eine Aktion in der App abgesendet wurde. Diesen Skripten stehen
alle Funktionalitäten des Skriptings zur Verfügung. Falls die Aktion auf
einem Ordner bzw. einer Mappe durchgeführt wurde können
`context.folderName`, `context.folderFiles` bzw. `context.file` wie gewohnt
verwendet werden. Auch weitere Attribute, wie `context.currentUser` sind
wie üblich verwendbar. Hinzu kommt ein spezielles Objekt mit dem Namen
`result`, dieses stellt, falls ein Dialog angezeigt wurde, die
Rückgabewerte des Dialogs also JSON-String zur Verfügung.
Verwenden Sie am besten folgendes Pattern zum verarbeiten des Strings:


```javascript
//Parsen des "result" string
var actionResult = null;
if (typeof result === "string") {
    actionResult = JSON.parse(result);
}
```

//Parsen des "result" string
var actionResult = null;
if (typeof result === "string") {
    actionResult = JSON.parse(result);
}
Das erhaltene Objekt verfügt über zwei Attribute:

1. pressedButton – Die „role“ der vom Nutzer gedrückten Schaltfläche.
2. data – Die Formulardaten als Schlüssel-Wert Paare (z.B. actionResult.data.hello enthält den Wert des Feldes mit dem Namen „hello“).

Das Aktionsskript kann nun mit diesen Daten beliebige Aktionen in
DOCUMENTS durchführen.

Bevor das Skript beendet wird sollte dann ein Rückgabewert für die App
erstellt werden. Der Rückgabewert kann von einer einfachen Meldung bis
hin zu einer komplexen Aktionssequenz reichen. Diese Aktionsergebnisse
werden nun erläutert.


### Aktionsergebnisse

Die Basis für Skriptrückgabewerte bildet das sogenannte Aktionsergebnis,
welches ein zu JSON umgewandeltes Objekt ist. Erzeugen Sie den
Rückgabewert nach dem folgenden Muster:


```javascript
var returnValue = {
    //Die nächste Aktion
    nextStep: "showText",
    //Daten für die nächste Aktion
    text: "Hello World " + context.getSystemUser().firstName
}
//Daten zurückgeben
return JSON.stringify(returnValue);
```

var returnValue = {
    //Die nächste Aktion
    nextStep: "showText",
    //Daten für die nächste Aktion
    text: "Hello World " + context.getSystemUser().firstName
}
//Daten zurückgeben
return JSON.stringify(returnValue);
In `returnValue` kann entweder ein Objekt oder ein Array von Objekten
abgelegt werden. Falls mehrere Aktionsergebnisse dort abgelegt werden,
führt die App diese sequenziell nacheinander aus.

Ein Aktionsergebnis enthält immer je zwei Attribute:

1. nextStep – gibt an, welche Art von Aktion ausgeführt werden soll. Mögliche Werte werden im weiteren Verlauf erklärt.
2. Ein Datenattribut, welches die Daten für die Aktion enthält. Mögliche Attribute sind: text, action, html und id. Welches jeweils verwendet werden muss hängt von der Art der Aktion ab und wird auch im weiteren Verlauf erklärt.

Folgende Arten von Aktionsergebnissen existieren:


#### showText

Zeigt einen Dialog mit einer Text-Meldung. Hierbei muss das Attribut
`text` auf den jeweiligen Text gesetzt werden.


#### showAction

Zeigt einen Aktionsdialog an. Hierbei muss dem Attribut `action` eine
Aktionsdefinition zugewiesen werden.


#### syncFile

Synchronisiert eine Mappe auf dem Gerät. Das `id` Attribut muss auf die Id
der Mappe gesetzt werden.


#### syncFolder

Synchronisiert einen Ordner auf dem Gerät. Das `id` Attribut muss auf die
OID des Ordners gesetzt werden. Die OID erhält man mit Hilfe von
`folder.getOID()`.


#### showFile

Öffnet eine Mappe in der App.

Wichtig: Die Mappe muss auf dem Gerät synchronisiert sein (ggf. über
einen syncFile Schritt vorher synchronisieren). Für diesen Aktionstypen
muss das Attribut `id` auf die Mappen-Id gesetzt werden.


#### uploadDoc

Öffnet den Upload-Dialog um ein Dokument an die gegebene Mappe
hochzuladen.

*Wichtig: Die Mappe muss auf dem Gerät synchronisiert sein (ggf. über
einen syncFile Schritt vorher Synchronisieren). Für diesen Aktionstypen
muss das Attribut id auf die Mappen-Id gesetzt werden, an welche das
Dokument hochgeladen werden soll.*


#### showHTMLMessage

Zeigt eine HTML Nachricht. Es werden Grundliegende HTML Attribute wie
<b> und <i> unterstützt. Viele erweiterte Funktionalitäten
wie <script> werden jedoch nur bei `showHTMLPage` unterstützt.
showHTMLMessage bietet jedoch den Vorteil, dass dieses mit einer
Standardformatierung kommt, welche zum Stil der App passt. Bei diesem
Aktionstypen muss der HTML-Code in dem `html`-Attribut abgelegt werden.


#### showHTMLPage

Beispiel siehe: [Statistiken mit HTML-Seiten und Chart.js](script_actions_examples.html#statistiken-mit-html-seiten-und-chartjs)

Dieser Aktionstyp zeigt eine komplett eigenständige HTML-Seite an.
Skripte und Styles werden unterstützt und es wird keine
Standardformatierung vorgegeben. Der HTML-Code sollte in dem `html`
Attribut abgelegt werden.


#### showQuickViewGadget

Beispiel siehe: [QuickViewGadget](script_actions_examples.html#quickviewgadget)

Zeigt ein QuickViewGadget innerhalb der App an. Hierzu muss eine
QuickViewGadget-Konfiguration angelegt werden, deren Name dann in dem
`gadgetName`-Attribut abgelegt werden muss.

Die QuickViewGadget-Konfiguration wird wie folgt im Admin Center angelegt,
wobei der Name frei gewählt werden darf:

- Entwicklung -> Properties -> Neu:
Name: "ChartGadget"
Typ: "qvGadget"
Wert: [Gadget Config]


![QuickViewGadget Eigenschaft für das Diagramm Gadget](media/script-actions-showQuickViewGadget.png)

Abb. 52 - QuickViewGadget Eigenschaft für das Diagramm Gadget


#### closeView

Die vorherige Seite wird angezeigt.


#### backToHome

Die Home Seite wird angezeigt.