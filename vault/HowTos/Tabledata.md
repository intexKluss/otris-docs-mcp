---
title: "Konfiguration TableData"
source: "https://otris.software/documents/howto/exit/tabledata.html"
---

# Konfiguration TableData


Abb. 1 - TableData Dialog

| Feature | Version |
| --- | --- |
| TableData | 5.0 HF1 |
| Anzeige als Documents Dialog | 5.0c |
| MultiSelect | 5.0e HF1 |


## JDBC Datenbank Treiber

Jede Datenbank benötigt spezielle JDBC Treiber, daher werden diese nicht mit der Documents-Installation ausgeliefert, sondern müssen über [externe Ressourcen](../exit/externalResources.html) eingebunden werden.

| Datenbank | Treiber |
| --- | --- |
| Microsoft SQL Server Sybase Adaptive Server Enterprise | http://jtds.sourceforge.net/ |
| Microsoft SQL Server | https://www.microsoft.com/en-us/download/details.aspx?id=55539 |
| Oracle Database | http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html |
| MySQL | https://dev.mysql.com/downloads/connector/j/ |
| MariaDB | https://downloads.mariadb.org/connector-java/ |


## Konfiguration der JSP-Dateien


### JSP Tags


#### table.jsp & detail.jsp

| Tag | Attribute | Pflichtattribut | Funktion |
| --- | --- | --- | --- |
| driver |  |  | Die Klasse für den JDBC-Treiber. Beispiel: net.sourceforge.jtds.jdbc.Driver |
| password |  |  | Das Passwort für den gewählten Benutzer. |
| sqlselect |  |  | Der SELECT Anteil aus dem SQL-Statement. Beispiel: SELECT * FROM Kunden |
| sqlfilter |  |  | Der WHERE Anteil aus dem SQL-Statement. Beispiel: WHERE Land LIKE 'Mexiko' |
| sqlparam |  |  | Kann genutzt werden, um dynamische Parameter innerhalb des SQL-Statements gegen SQL-Injection abzusichern. Beispiel 1: <tab:sqlfilter>WHERE "Kunden-Code" = <tab:sqlparam name="Firmentabelle" /></tab:sqlfilter> Beispiel 2: <tab:sqlfilter>WHERE "Kunden-Code" = <tab:sqlparam><%=request.getParameter("Firmentabelle")%></tab:sqlparam></tab:sqlfilter> |
|  | name | nein | Der Name des Parameters. Es wird überprüft, ob es einen Parameter mit dem angegebenen Namen gibt. Dabei werden folgende Orte durchsucht. 1. pageContext 2. request 3. session Wenn das Attribut gesetzt ist wird der Inhalt des Tags nicht mehr ausgewertet. |
| url |  |  | URL zur Datenbank. Beispiel: jdbc:jtds:sqlserver://localhost/northwind |
| user |  |  | Der Benutzername, mit dem sich an der Datenbank angemeldet werden soll. |


#### table.jsp

| Tag | Attribute | Pflichtattribut | Funktion |
| --- | --- | --- | --- |
| columnselect |  |  | Die Spalten, die im TableData angezeigt werden. Die Spalten werden durch Kommata getrennt. |
| filterignorecase |  |  | Gibt an, ob die Suche case-insensitiv sein soll. Der Defaultwert ist false. |
| headline |  |  | Die Überschriften für die Spalten, die im TableData angezeigt werden. Die Überschriften werden durch Kommata getrennt. |
| keycolumn |  |  | Der Schlüssel der erzeugten Tabelle. |
| sqlcount |  |  | Gibt an, ob die Anzahl der Ergebniszeilen über eine weitere Datenbankabfrage oder aus dem Ergebnis der eigentlichen Abfrage ermittelt werden soll. Der Defaultwert ist false, die Anzahl der Ergebniszeilen werden ohne zusätzliche Datenbankabfrage ermittelt. |
| sqlsort |  |  | Der ORDER BY oder SORT Anteil aus dem SQL-Statement. Beispiel: ORDER BY PLZ DESC |
| tableconfig |  |  | Umschließendes Tag in der table.jsp |
|  | detailFile | nein | Der Name der detail.jsp. Der Defaultwert ist detail.jsp. |
|  | filtering | nein | Legt fest, ob eine Suchmaske im TableData angezeigt werden soll. Mögliche Werte sind yes/true und no/false. Der Defaultwert ist yes/true. |
|  | filterMode | nein | Legt fest, wie gesucht werden soll. Mögliche Werte: 0 = Mitte (*Suche*) 1 = exakter Treffer (Suche) 2 = Wortbeginn (Suche*) |
|  | id | ja | Eine eindeutige ID, mit der ausgewählte Daten zwischen der table.jsp und der detail.jsp übertragen werden. Die ID wird auch im detailconfig und detail tag verwendet. |
|  | scrolling | nein | Legt fest, ob in der Ergebnisliste geblättert werden kann. Mögliche Werte sind yes/true und no/false. Wenn no/false gesetzt ist wird nur die Menge an Ergebnissen angezeigt, die in viewSize festgelegt wurden. Der Defaultwert ist yes/true. |
|  | sorting | nein | Legt fest, ob in der Ergebnisliste nach Spalten sortiert werden kann. Mögliche Werte sind yes/true und no/false. Der Defaultwert ist yes/true. |
|  | style | nein | Styleklasse, die für das TableData verwendet werden soll. Es wird auf die eingebundene css/less-Datei zurückgegriffen. Funktioniert nicht in Kombination mit useDocumentsStyle = true. Der Defaultwert ist standard. |
|  | tableFile | nein | Der Name der table.jsp. Der Defaultwert ist table.jsp. |
|  | useDocumentsStyle | nein | Legt fest, ob das TableData im neuen Documents5 Design verwendet werden soll. Der Defaultwert ist true. |
|  | viewSize | nein | Anzahl der Zeilen pro Seite. Der Defaultwert ist 10. |
|  | multiSelect | nein | Legt fest, ob MultiSelect verwendet werden soll. Der Defaultwert ist false |


#### detail.jsp

| Tag | Attribute | Pflichtattribut | Funktion |
| --- | --- | --- | --- |
| detail |  |  | Tag um einzelne Werte aus dem Ergebnis der Datenbankabfrage abzuholen. |
|  | escapeMode | nein | Legt fest, ob der Wert aus der Datenbank escaped werden soll. Mögliche Werte sind script und html. Als Default wird kein escaping durchgeführt. |
|  | id | ja | Die selbe ID wie im tableconfig und detailconfig tag |
|  | name | ja | Spaltenname im Ergebnis der Datenbankabfrage. |
|  | removeCRLF | nein | Legt fest, ob Zeilenumbrüche aus den Ergebnissen entfernt werden sollen. Mögliche Werte sind true und false. Der Defaultwert ist true. |
| detailconfig |  |  | Umschließender Tag in der detail.jsp. |
|  | id | ja | Die selbe ID wie im tableconfig und detail Tag |
| multipleRowResult |  | nein | Umschließender Tag für MultiSelect, alles innerhalb dieses Tags wird für jede selektierte Zeile in der table.jsp separat ausgeführt |
|  | id | ja | Die selbe ID wie im tableconfig und detail Tag |


### Konfiguration table.jsp

Beispielhafte Konfiguration der table.jsp mit dem JTDS Treiber.


```xml
<tab:tableconfig id="Firmentabelle" style="standard" viewSize="10" filtering="yes" filterMode="0" scrolling="yes" sorting="yes" multiSelect="false" tableFile="table.jsp" detailFile="detail.jsp">
    <%-- optional html form markup --%>
    <tab:driver>net.sourceforge.jtds.jdbc.Driver</tab:driver>
    <tab:url>jdbc:jtds:sqlserver://localhost/northwind</tab:url>
    <tab:user>northwind-user</tab:user>
    <tab:password>northwind-user</tab:password>
    <tab:sqlselect>SELECT * FROM Kunden</tab:sqlselect>
    <tab:sqlfilter></tab:sqlfilter>
    <tab:sqlsort></tab:sqlsort>
    <tab:keycolumn>Kunden-Code</tab:keycolumn>
    <tab:columnselect>Firma,Kontaktperson,PLZ,Ort,Land</tab:columnselect>
    <tab:headline>Firma,Ansprechpartner,PLZ,Ort,Land</tab:headline>
</tab:tableconfig>
```

<tab:tableconfig id="Firmentabelle" style="standard" viewSize="10" filtering="yes" filterMode="0" scrolling="yes" sorting="yes" multiSelect="false" tableFile="table.jsp" detailFile="detail.jsp">
    <%-- optional html form markup --%>
    <tab:driver>net.sourceforge.jtds.jdbc.Driver</tab:driver>
    <tab:url>jdbc:jtds:sqlserver://localhost/northwind</tab:url>
    <tab:user>northwind-user</tab:user>
    <tab:password>northwind-user</tab:password>
    <tab:sqlselect>SELECT * FROM Kunden</tab:sqlselect>
    <tab:sqlfilter></tab:sqlfilter>
    <tab:sqlsort></tab:sqlsort>
    <tab:keycolumn>Kunden-Code</tab:keycolumn>
    <tab:columnselect>Firma,Kontaktperson,PLZ,Ort,Land</tab:columnselect>
    <tab:headline>Firma,Ansprechpartner,PLZ,Ort,Land</tab:headline>
</tab:tableconfig>
### Konfiguration detail.jsp

Beispielhafte Konfiguration der detail.jsp mit dem JTDS Treiber.


```xml
<tab:detailconfig id="Firmentabelle">
    <tab:driver>net.sourceforge.jtds.jdbc.Driver</tab:driver>
    <tab:url>jdbc:jtds:sqlserver://localhost/northwind</tab:url>
    <tab:user>northwind-user</tab:user>
    <tab:password>northwind-user</tab:password>
    <tab:sqlselect>SELECT * FROM Kunden</tab:sqlselect>
    <tab:sqlfilter>WHERE "Kunden-Code" = <tab:sqlparam name="Firmentabelle" /></tab:sqlfilter>
</tab:detailconfig>
```

<tab:detailconfig id="Firmentabelle">
    <tab:driver>net.sourceforge.jtds.jdbc.Driver</tab:driver>
    <tab:url>jdbc:jtds:sqlserver://localhost/northwind</tab:url>
    <tab:user>northwind-user</tab:user>
    <tab:password>northwind-user</tab:password>
    <tab:sqlselect>SELECT * FROM Kunden</tab:sqlselect>
    <tab:sqlfilter>WHERE "Kunden-Code" = <tab:sqlparam name="Firmentabelle" /></tab:sqlfilter>
</tab:detailconfig>
#### Konfiguration ohne MultiSelect

Beispielhafter Funktionsaufruf zum zurückgeben der ausgewählten Daten an den User-Exit.


```javascript
function update()
{
    try
    {
        var fieldData = {
            crmName: '<tab:detail id="Firmentabelle" name="Kontaktperson" scapeMode="script" removeCRLF="true" />'.split(/\s+/)[1],  //  split "firstName lastName"
            crmFirstName: '<tab:detail id="Firmentabelle" name="Kontaktperson" escapeMode="script" removeCRLF="true" />'.split(/\s+/)[0],  //  split "firstName lastName"
            crmAccountnumber: '<tab:detail id="Firmentabelle" name="Kunden-Code" escapeMode="script" removeCRLF="true" />',
            [...]
        };

        (window.opener || parent).postMessage({
            action: "<%= request.getParameter("actionId") %>",
            data: fieldData
        }, "*");
    }
    catch(e) {
        console.log("TableData: " + e);
    }

    window.close();
}
```

function update()
{
    try
    {
        var fieldData = {
            crmName: '<tab:detail id="Firmentabelle" name="Kontaktperson" scapeMode="script" removeCRLF="true" />'.split(/\s+/)[1],  //  split "firstName lastName"
            crmFirstName: '<tab:detail id="Firmentabelle" name="Kontaktperson" escapeMode="script" removeCRLF="true" />'.split(/\s+/)[0],  //  split "firstName lastName"
            crmAccountnumber: '<tab:detail id="Firmentabelle" name="Kunden-Code" escapeMode="script" removeCRLF="true" />',
            [...]
        };

        (window.opener || parent).postMessage({
            action: "<%= request.getParameter("actionId") %>",
            data: fieldData
        }, "*");
    }
    catch(e) {
        console.log("TableData: " + e);
    }

    window.close();
}
#### Konfiguration mit MultiSelect


```javascript
function update() {
    try {
        var fieldData = [];
        <tab:multipleRowResult id="Firmentabelle">  //  iterates all selected table rows
        fieldData.push({
            crmName: '<tab:detail id="Firmentabelle" name="Kontaktperson" escapeMode="script" removeCRLF="true" />'.split(/\s+/)[1],  //  split "firstName lastName"
            crmFirstName: '<tab:detail id="Firmentabelle" name="Kontaktperson" escapeMode="script" removeCRLF="true" />'.split(/\s+/)[0],  //  split "firstName lastName"
            crmAccountnumber: '<tab:detail id="Firmentabelle" name="Kunden-Code" escapeMode="script" removeCRLF="true" />',
            [...]
        });
        </tab:multipleRowResult>

        (window.opener || parent).postMessage({
            action: "<%= request.getParameter("actionId") %>",
            data: fieldData
        }, "*");
    } catch (e) {
        console.log("TableData: " + e);
    }

    window.close();
}
```

function update() {
    try {
        var fieldData = [];
        <tab:multipleRowResult id="Firmentabelle">  //  iterates all selected table rows
        fieldData.push({
            crmName: '<tab:detail id="Firmentabelle" name="Kontaktperson" escapeMode="script" removeCRLF="true" />'.split(/\s+/)[1],  //  split "firstName lastName"
            crmFirstName: '<tab:detail id="Firmentabelle" name="Kontaktperson" escapeMode="script" removeCRLF="true" />'.split(/\s+/)[0],  //  split "firstName lastName"
            crmAccountnumber: '<tab:detail id="Firmentabelle" name="Kunden-Code" escapeMode="script" removeCRLF="true" />',
            [...]
        });
        </tab:multipleRowResult>

        (window.opener || parent).postMessage({
            action: "<%= request.getParameter("actionId") %>",
            data: fieldData
        }, "*");
    } catch (e) {
        console.log("TableData: " + e);
    }

    window.close();
}
## Einrichten und Implementieren des User-Exits


### Konfiguration Mappenfeld


Abb. 2 - Exit im Documents Manager einrichten


Abb. 3 - Eingerichteter Exit in der Mappe


### Exit

Der TableData Dialog kann über die Funktion `openTableDataDialog` geöffnet werden. Die Funktion kann erkennen, aus welchem Zusammenhang das TableData aufgerufen wurde (Mappenfeld, Gentable, EMail-Dialog) und setzt die Feldwerte automatisch wie in der detail.jsp definiert, ohne das weiteres handeln notwendig ist. Es gibt außerdem die Möglichkeit sich die Daten zurückgeben zu lassen und selber zu verarbeiten.

Beispiel eines TableData mit automatischer Erkennung:


```javascript
documents.sdk.exitRegistry.registerFileFieldExitCallback("crmContact", "crmName", function(documentsContext, options) {
    var title = "Ansprechpartner";
    var url = documentsContext.encodeURL("./ext/jsp/TableData/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

    documentsContext.openTableDataDialog(title, url, {
        width: 1000,
        height: 400,
        exitOptions: options  // mandatory for automatic field setting
    });
});
```

documents.sdk.exitRegistry.registerFileFieldExitCallback("crmContact", "crmName", function(documentsContext, options) {
    var title = "Ansprechpartner";
    var url = documentsContext.encodeURL("./ext/jsp/TableData/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

    documentsContext.openTableDataDialog(title, url, {
        width: 1000,
        height: 400,
        exitOptions: options  // mandatory for automatic field setting
    });
});Über den `options` Parameter der `openTableDataDialog` Funktion können diverse Einstellungen weitergegeben werden. Diese Einstellungen sind alle optional.

| Parameter | Datentyp | Default | Funktion |
| --- | --- | --- | --- |
| exitOptions | Objekt |  | Das options Objekt, dass über die register[...]ExitCallback Methode mitgegeben wurde. Ohne das options Objekt ist keine automatische Erkennung möglich. Dieser Wert sollte gesetzt werden, wenn onSelect nicht gesetzt ist. |
| height | Integer | 300 | Die initiale Höhe des TableData Dialogs. |
| left | Integer |  | Die Entfernung zum linken Rand des Fensters, in dem das TableData geöffnet wird. Wenn left nicht gesetzt wird wird der TableData Dialog mittig platziert. |
| onClose | Funktion |  | Eine Funktion, die ausgeführt wird, wenn der TableData Dialog geschlossen wird. Die Funktion wird nicht ausgeführt, wenn popupWin = true gesetzt ist. |
| onSelect | Funktion |  | Eine Funktion, die ausgeführt wird, wenn im TableData eine Zeile ausgewählt wurde. Die ausgewählten Daten werden an die Funktion übergeben. Wenn onSelect gesetzt ist wird keine automatische Erkennung ausgeführt. |
| params | Objekt |  | Ein Objekt, über das verschiedene Parameter an den TableData Dialog übergeben werden können. |
| popupWin | Boolean | false | Über diesen Parameter kann gesteuert werden, ob der TableData Dialog in einem Popup (true) oder in einem Documents Dialog (false) geöffnet werden soll. |
| searchColumn | String |  | Die Spalte, auf die der Parameter searchText beim Öffnen des TableData Dialogs angewendet werden soll. |
| searchText | String |  | Wenn der Parameter gesetzt ist wird beim Öffnen des TableData eine Suche mit dem gegebenen Suchtext ausgeführt. |
| sortColumn | String |  | Die Spalte, nach der das TableData beim Öffnen sortiert werden soll. Ein + hinter dem Spaltennamen sortiert die Spalte in aufsteigender, ein - in absteigender Reihenfolge. Wenn kein + oder - angehängt wird, wird aufsteigend sortiert. |
| top | Integer |  | Die Entfernung zum oberen Rand des Fensters, in dem das TableData geöffnet wird. Wenn top nicht gesetzt wird wird der TableData Dialog mittig platziert. |
| width | Integer | 400 | Die initiale Breite des TableData Dialogs. |


## Weiterleitung von Parametern

Parameter, die über das *params* Objekt an das TableData übergeben wurden, müssen im TableData über ein *hidden* Feld weitergegeben werden. Wird dies nicht gemacht stehen die Parameter nur im initialen Aufruf des TableData zur Verfügung, aber nicht mehr nach z.B. dem Blättern innerhalb der Ergebnisliste.


```javascript
[...]
documentsContext.openTableDataDialog(title, url, {
    params: {
        country: "Schweden"
    },
    [...]
});
[...]
```

[...]
documentsContext.openTableDataDialog(title, url, {
    params: {
        country: "Schweden"
    },
    [...]
});
[...]
```xml
<%
[...]
String country = request.getParameter("country");
%>

[...]

<tab:tableconfig id="Firmentabelle" style="standard" viewSize="10" filtering="yes" filterMode="0" scrolling="yes" sorting="yes" tableFile="table.jsp" detailFile="detail.jsp">
    <%-- optional html form markup --%>
    <input type="hidden" name="country" value="<%= (country!=null) ? country : "" %>" />

    [...]
    <tab:sqlfilter>WHERE country = '<%= (country!=null) ? country : "" %>'</tab:sqlfilter>
    [...]

</tab:tableconfig>
```

<%
[...]
String country = request.getParameter("country");
%>

[...]

<tab:tableconfig id="Firmentabelle" style="standard" viewSize="10" filtering="yes" filterMode="0" scrolling="yes" sorting="yes" tableFile="table.jsp" detailFile="detail.jsp">
    <%-- optional html form markup --%>
    <input type="hidden" name="country" value="<%= (country!=null) ? country : "" %>" />

    [...]
    <tab:sqlfilter>WHERE country = '<%= (country!=null) ? country : "" %>'</tab:sqlfilter>
    [...]

</tab:tableconfig>
## Suchfilter, Suchspalte und Sortierspalte

Über die Parameter `sortColumn`, `searchColumn` und `searchText` kann auf dem TableData eine initiale Suche und Sortierung vorgenommen werden. Im folgenden Beispiel wird dabei die Spalte `Land` nach `sch` durchsucht und die Suchergebnisse anschließend mit der Spalte `Land` absteigend sortiert.


```javascript
[...]
documentsContext.openTableDataDialog(title, url, {
    sortColumn: "Land-",    //sort with column 'Land' in descending order
    searchColumn: "Land",   //search in column 'Land'
    searchText: "sch"       //search for values that contain 'sch'
});
[...]
```

[...]
documentsContext.openTableDataDialog(title, url, {
    sortColumn: "Land-",    //sort with column 'Land' in descending order
    searchColumn: "Land",   //search in column 'Land'
    searchText: "sch"       //search for values that contain 'sch'
});
[...]

Abb. 4 - Durchsuchter und sortierter TableData Dialog


## Selektion von Einträgen


### Ohne MultiSelect

Nach der Selektion eines Eintrags im TableData werden die Daten über die Funktion `update` in der detail.jsp ausgewertet und zurück an den User-Exit geschickt. Dort besteht die Möglichkeit, die Daten automatisch auswerten zu lassen, oder sie selbst zu verarbeiten.

Für die automatische Auswertung inklusive setzen der entsprechenden Felder ist es zwingend erforderlich, dass beim Aufruf der `openTableDataDialog` Funktion der Parameter exitOptions gesetzt ist.

Wenn die Daten nicht automatisch ausgewertet werden sollen muss beim Aufruf der `openTableDataDialog` Funktion der Parameter `onSelect` gesetzt sein. Die dort gesetzte Funktion erhält als ersten Eingabeparameter die Daten aus dem TableData. Innerhalb der `onSelect` Funktion ist der DocumentsContext verfügbar.

Für den Fall, dass sowohl `exitOptions` als auch `onSelect` gesetzt sind wird die `onSelect` Funktion genutzt.


```javascript
documentsContext.openTableDataDialog(title, url, {
    [...]
    onSelect: function (data) {
        console.log(data);
    }
})
```

documentsContext.openTableDataDialog(title, url, {
    [...]
    onSelect: function (data) {
        console.log(data);
    }
})
#### Mit MultiSelect

Wenn  MultiSelect eingeschaltet ist werden vor jeder Zeile zusätzliche Checkboxen angezeigt. Über diese können mehrere Zeilen selektiert werden.
Es ist zusätzlich möglich einen Bereich mit Shift + Click oder die komplette Seite über die Checkbox in der Überschriftenzeile auszuwählen.

Nach der Selekton von einem oder mehreren Einträgen im TableData wird das auswerten über die `update` Funktion in der detail.jsp durch einen Klick auf `OK` gestartet und anschließend an den User-Exit geschickt. Eine automatische Auswertung der Daten ist im MultiSelect Fall nicht möglich, es muss daher in der `openTableDataDialog` Funktion der Parameter `onSelect` gesetzt sein. Die dort gesetzte Funktion erhält als ersten Eingabeparameter die Daten aus dem TableData. Innerhalb der `onSelect` Funktion ist der DocumentsContext verfügbar.


## Mehrsprachigkeit

Die Spaltenüberschriften des TableData können über die TableData_<lang>.properties Datei lokalisiert werden. Die im headline tab angegebenen Spaltenüberschriften fungieren dabei als Key.


```xml
<tab:headline>Firma,Ansprechpartner,PLZ,Ort,Land</tab:headline>
```

<tab:headline>Firma,Ansprechpartner,PLZ,Ort,Land</tab:headline>Beispiel aus der TableData_en.properties Datei:


```jsp
Firma=Company
Ansprechpartner=Contact
PLZ=Postal Code
Ort=City
Land=Country
```

Firma=Company
Ansprechpartner=Contact
PLZ=Postal Code
Ort=City
Land=CountryDamit das Tabledate weiß, welche Sprache der aktuelle Benutzer nutzt, muss diese im User-Exit an die URL angehängt werden. Dies kann über die Funktion getBaseParamsQueryString() aus dem DocumentsContext gemacht werden.


```javascript
[...]
var url = documentsContext.encodeURL("./ext/jsp/TableData/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

documentsContext.openTableDataDialog(title, url, {
    [...]
});
[...]
```

[...]
var url = documentsContext.encodeURL("./ext/jsp/TableData/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

documentsContext.openTableDataDialog(title, url, {
    [...]
});
[...]
## Troubleshooting

Mit der Einführung der `openTableDataDialog` Funktion und des TableData Dialogs als Documents Dialog wurden einzelne Funktionsweisen angepasst. Das TableData ist vollständig abwärtskompatibel, um einige der neuen Funktionen, wie z.B. das Öffnen in einem Documents5 Dialog, nutzen zu können müssen allerdings Änderungen vorgenommen werden.


### Der Documents5 Dialog schließt sich nicht

Innerhalb der detail.jsp muss der folgende Codeblock angepasst werden:

Alt:


```javascript
window.opener.postMessage({
    message: "setFileFieldData",
    fields: fieldData
},"*");
```

window.opener.postMessage({
    message: "setFileFieldData",
    fields: fieldData
},"*");Neu:


```javascript
(window.opener || parent).postMessage({
    action: "<%= request.getParameter("actionId") %>",
    data: fieldData
}, "*");
```

(window.opener || parent).postMessage({
    action: "<%= request.getParameter("actionId") %>",
    data: fieldData
}, "*");Der Parameter `action` bzw. `actionId` muss nicht für einzelne TableData angepasst werden.


### Das automatische Befüllen funktioniert nicht

Hierfür gibt es zwei mögliche Fehlerquellen:

1. Der Parameter exitOptions wurde nicht gesetzt Ohne den Parameter exitOptions kann nicht erkannt werden, um welchen Exit-Typ es sich handelt. documents.sdk.exitRegistry.registerFileFieldExitCallback("crmContact", "crmName", function(documentsContext, options) { [...] documentsContext.openTableDataDialog(title, url, { [...] exitOptions: options, [...] });
});
2. Der Parameter onSelect wurde gesetzt Der Parameter onSelect hat immer Priorität über exitOptions und verhindert dadurch das automatische Befüllen.


### Der Parameter actionId ist null

Der Parameter `actionId` ist erst ab der mit Version 5.0c ausgelieferten TableData.jar verfügbar. Der Fehler kann auch in späteren Versionen auftreten, wenn über einen [externen Kontext](externalResources.html) eine veraltete TableData.jar eingebunden wurde, welche die von uns ausgelieferte überschreibt.