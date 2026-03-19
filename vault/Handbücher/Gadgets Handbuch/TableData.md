---
title: "TableData"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/tabledata.html"
---

# TableData

Das TableData-Gadget ermöglicht die Datenübernahme aus einer externen Datenbanktabelle in einen Mappentyp.
Hierzu wird eine Instanz der Klasse [[Gadget API/otris.gadget.gui.TableData]] konfiguriert und als Ergebnis des Gadgets zurückgegeben. Innerhalb des Gadgets wird für den Dialog eine **otris.scriptlist.List** konfiguriert, die standardmäßig für jeden Eintrag als onClick-Funktion die Übernahme der Daten in eine Mappe ermöglicht.


## Wesentliche Merkmale

- Datenbankanbindung: Verbindung über DBConnection mit MySQL-Datenbanken (nativ) oder anderen Datenbanken über ODBC (z.B. MSSQL).
- Datenübernahme: Abrufen externer Datenbanktabellen aus Mappen in documentsOS. SQL-Abfragen und Mapping für Mappenfelder.
- Konfiguration: Über die Klassen otris.gadget.gui.TableData mit otris.scriptlist.List.
- Dialogoptionen: Konfigurierbare Spalten, Suchfelder, und Aktionen im Auswahlfenster.
- Anpassbarkeit: Erweiterbar mit eigenen Funktionen zur Transformation.


## Aufbau eine TableData-Gadgets

In diesem Abschnitt wird der allgemeine Aufbau eines TableData-Gadgets beschrieben, wie es in documentsOS zu konfigurieren ist.


### Datenbankanbindung

Eine Instanz der Portalscript API Klasse [[Portalscript API/classes/DBConnection#constructor]] muss definiert werden.
Diese Instanz wird anschließend mit dem Setter **.setDBConnection(myDataBaseInstance)** der TableData-Instanz hinzugefügt.


```javascript
const myDataBaseInstance = new DBConnection(dbType, dbName, dbUser, password);
tableData.setDBConnection(myDataBaseInstance);
```

const myDataBaseInstance = new DBConnection(dbType, dbName, dbUser, password);
tableData.setDBConnection(myDataBaseInstance);**Parameter:**

- dbType: string
"mysql" - MySQL- (kompatible) Datenbank
"odbc" - nicht MySQL-kompatibel, aber ein ODBC-Treiber ist für die Datenbank installiert
- dbName: string
Name der Datenbank, mit der eine Verbindung hergestellt werden soll.
Der Standard-Hostname ist localhost. Ein anderer Hostname oder eine IP-Adresse muss spezifiziert werden.
Beispiele: "meinedatenbank@remote.example.com", "meinedatenbank@192.168.1.1".
Die Datenbank muss erreichbar sein.
(Für den Fernzugriff muss der entfernte Datenbankserver entsprechend konfiguriert sein.)
- dbUser: string
Anmeldename des Benutzers für die Datenbank (existiert und hat Zugriff)
- password: string
Passwort des Datenbankbenutzers im Klartext.


### Auswahldialog konfigurieren

Für den Auswahldialog können wesentliche Spalten bestimmt werden, die im Dialogfenster zur Anzeige kommen sollen. *(Unabhängig von der hierbei getroffenen reduzierten Auswahl können für die Datenübernahme aber alle Spalten gemappt werden.)*
Ein Suchfeld und eigene Buttons können dem Dialogfenster hinzugefügt werden.
**Tipp:** Der Auswahldialog bleibt leer, wenn der Datenbankzugriff fehlerhaft ist.

- .setTitle(title, titleIcon?)
Setzt den Titel (und das optionale Icon) im Header des Dialogfensters.
- .setListTitle(title)
Setzt den Titel in der Liste im Dialogfenster.
- .setShowSearchBox(true)
Zeigt ein Suchfeld über der Liste im Dialogfenster an.
- .setSqlSelect("SELECT * FROM mytable")
SQL-Statement, das die Tabelle bestimmt. (ohne Filter)
- .setSqlFilter(sqlFilter)
Ergänzt das setSqlSelect mit WHERE- und ORDER-Klauseln.
- .setColumns(columns)
Bestimmt die im Dialog sichtbaren Spalten als Array von TableDataColumn-Objekten.
TableDataColumn = {key: "key", label: "label", ...}
key = Name der Datenbank-Spalte
label = im Dialog anzuzeigende Spaltenüberschrift
- .setKeyColumn(pk_column)
Benennt die Datenbankspalte (Primary Key), die jeden Datensatz eindeutig identifiziert.
- .addAction(action)
Fügt innerhalb der Liste eine neue Aktion (Button, Listeneintrag) hinzu. Weitere Details siehe ScriptList-API (ScriptExtensions)..


### Datenübernahme konfigurieren

Für die Übernahme der Daten des gewählten Datensatze wird ein SQL-Statement definiert, dass den Wert für die KeyColumn als Filter zum Identifizieren in der Datenbank nutzt. Mit dem Mapping wird die Zuordnung von TabellenSpalten und Mappenfeldern definiert.

- .setDetailsSql(sqlQuery) Definiert die SQL-Abfrage, um den Datensatz für den ausgewählten Eintrag zu identifizieren und abzurufen.
(?) wird durch eine kommagetrennte Liste der Werte aus der KeyColumn ersetzt.
tableData.setDetailsSql('SELECT * FROM mytable WHERE pk_column IN (?)');
- .setMapping(mappingArray) Legt die Zuordnung von Datenbankspalten zu Mappenfeldern in einem Array von Paar-Objekten fest.
fieldName: Technischer Name des Mappenfeldes.
columnName: Name der Spalte in der Datenbanktabelle.
valueCallback: optional Callback-Funktion, um dem Wert aus der Datenbankspalte Transformationsregeln mitzugeben.
Funktion: valueCallback(value, documentsContext, item, mappingConfig) {}


```javascript
tableData.setMapping([
  {fieldName: "crmName", columnName: "sqlFullName",
    valueCallback: function(value, documentsContext, item, mappingConfig) {
      return value.split(/\s+/)[1];
    }
  },
  {fieldName: "crmFirstName", columnName: "sqlFullName",
    valueCallback: function(value, documentsContext) {
      return value.split(/\s+/)[0];
    }
  },
  {fieldName: "crmAccountnumber", columnName: "sql_pk_id"},
  {fieldName: "crmCompany", columnName: "sql_company"},
  {fieldName: "crmPhone", columnName: "sql_phone"}
]);
```

tableData.setMapping([
  {fieldName: "crmName", columnName: "sqlFullName",
    valueCallback: function(value, documentsContext, item, mappingConfig) {
      return value.split(/\s+/)[1];
    }
  },
  {fieldName: "crmFirstName", columnName: "sqlFullName",
    valueCallback: function(value, documentsContext) {
      return value.split(/\s+/)[0];
    }
  },
  {fieldName: "crmAccountnumber", columnName: "sql_pk_id"},
  {fieldName: "crmCompany", columnName: "sql_company"},
  {fieldName: "crmPhone", columnName: "sql_phone"}
]);
### (onClick) - Funktion "detailsHandler"

Die vorgegebene Standardfunktionalität (DetailsHandler) wird den Einträgen in der Dialogliste als onClick-Funktion mitgegeben. Ist die Mehrfachauswahl `.setMultiSelect()` aktiviert, erhalten die Zeilen Checkboxen zur Mehrfachauswahl und einen Button, mit dem der `detailsHandler` ausgelöst wird. Der Standard-DetailsHandler ist nur für die Verarbeitung eines einfachen Datensatzes implementiert und muss für die Verarbeitung komplexerer oder mehrerer Datensätze mit `.setDetailsHandler(detailsHandler)` überschrieben werden.

- .setMultiSelect(multiSelect, buttonLabel, theFunction) Zeigt die Checkboxen zur Mehrfachauswahl und einen Button im Kopf der Liste, und übergibt die Funktion, die mit dem Button ausgelöst werden kann.
tableData.setMultiSelect(true, "Multi-Button", "detailsHandler");
- .setDetailsHandler(detailsHandler) Setzt die Funktion, die den default-DetailsHandler überlagert.
Es stehen 2 Argumente zur Verfügung:
argument[0] = Array der ausgewählten Datensätze.
argument[1] = Mapping, wie mit .setMapping() definiert.
tableData.setDetailsHandler(function details(items, mapping) { alert(JSON.stringify(items, null, 2)) alert(JSON.stringify(mapping, null, 2));
});


## Beispiel im Demo-Mandanten "relations"

Beispielhaft wurde eine Datenbank erstellt, deren Struktur speziell auf den Mappentyp `crmContact` (Ansprechpartner) des "relations" Demo-Mandanten abgestimmt ist. Das TableData-Gadget wurde in einem Skript entsprechend konfiguriert. Um die Funktion bereitzustellen, wurde das Gadget als Aktion vom Typ "Gadget" mit der Eigenschaft `onlyShowInEditMode` dem Mappentyp hinzugefügt. Dadurch ist der Button für das Gadget ausschließlich im Bearbeitungsmodus einer Mappe verfügbar.
Es werden die Daten aus der Datenbank tabelarisch zur Auswahl angezeigt. Mit der Auswahl wird der Datensatz in die Datenbank übernommen.


![tableDataGadget-example](../assets/img/dOS_relations_tabledataGadget_example.png)

Abb. 103 - Dialogfenster für das TableData-Gadget Beispiel


### SQL Beispiel-Daten

Für das Beispiel wurde eine Datenbank mit Beispieldaten auf einem lokalen Server erstellt.

Download: [initialize_examplecompany_db.sql](../assets/samples/initialize_examplecompany_db.sql)


### MySQL/MariaDB-Konfiguration anpassen

Für den Zugriff auf die Datenbank müssen Konfigurationsanpassungen vorgenommen werden. Im Folgenden wird beispielhaft der Datenbankzugriff aus einer Docker-Instanz beschrieben.

- Datenbanktyp: Beispielhaft MySQL myDBType = "mysql".
- MySQL-Konfiguration: In der MySQL-Konfigurationsdatei my.ini müssen alle eingehenden Verbindungen akzeptiert werden. Finde die Zeile # bind-address, entferne das # und ersetze die IP-Adresse.
Eintrag: bind-address="0.0.0.0" - Akzeptiert alle Verbindungen.
Neustart des MySQL-Dienstes ist erforderlich.
- MySQL-Benutzer und Passwort: Standardbenutzer: mySqlUser = "root". Standardpasswort: mySqlUserPassword = "". SQL-Anweisung dafür: CREATE USER 'root'@'%' IDENTIFIED VIA mysql_native_password USING '***';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' REQUIRE NONE WITH GRANT OPTION
MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0
MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
- Lokale IP-Adresse: z.B. myIP = "192.168.7.40" (ermitteln mit ipconfig,)
- Datenbankname: - myDBName = "relationsexamplecompany".

Damit ergibt sich für das Erstellen einer DBConnection-Instanz die folgende Konfiguration:


```javascript
// Parameters
const myDBType = "mysql";           // Database type
const myIP = "192.168.7.40";        // Server IP address
const myDBName = "relationsexamplecompany";  // Database name
const mySqlUser = "root";           // Database username
const mySqlUserPassword = "";       // Password for the user

// Create the database connection with the parameters
const dbConnection = new DBConnection(myDBType, myDBName + "@" + myIP, mySqlUser, mySqlUserPassword);
```

// Parameters
const myDBType = "mysql";           // Database type
const myIP = "192.168.7.40";        // Server IP address
const myDBName = "relationsexamplecompany";  // Database name
const mySqlUser = "root";           // Database username
const mySqlUserPassword = "";       // Password for the user

// Create the database connection with the parameters
const dbConnection = new DBConnection(myDBType, myDBName + "@" + myIP, mySqlUser, mySqlUserPassword);
### Gadget Integration

In diesem Beispiel wird das Gadget [als benutzerdefinierte Aktion in den Mappentyp](../integration/integration-filetype.html#als-benutzerdefinierte-aktion-an-einer-mappe) als **Interaktionselement:**`Funktionskopf` integriert.

Eigenschaft `gadgetConfig`: **{ gadgetScript: 'GadgetSample_TableData' , gadgetAction: 'gadgetUserExit' }**

Es ist so konfiguriert, dass es den Mappen dieses Typs nur im Bearbeiten-Modus als Button zur Verfügung steht.

Zusätzliche Eigenschaft der benutzerdefinierten Aktion: **onlyShowInEditMode: true**

**Tipp:** Der Auswahldialog bleibt leer, wenn der Datenbankzugriff fehlerhaft ist.


### Gadget Skript

Das Skript `GadgetSample_TableData` wird im Mandanten zur Verfügung gestellt.
**Die Werte der DBConnection-Konfiguration müssen angepasst werden.**

Download: [GadgetSample_TableData.js](../assets/samples/GadgetSample_TableData.js)


```javascript
// This script uses module import with 'require' (supported from documentsOS version 6.0.2 onwards)
// instead of the preprocessor directive '#import', which is deprecated.

/**
 * To use the Gadget:
 * Property name: gadgetConfig
 * Property value: { gadgetScript: 'GadgetSample_TableData' , gadgetAction: 'gadgetUserExit' }
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // not required since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "gadgetUserExit"
// and link it to an action function.
gadgetAPI.registerGadgetAction("gadgetUserExit", function (gadgetContext, otris) {

    // Create the gadget and set the title for the dialog
    const tableData = gadgetAPI.getTableDataInstance();

    // Set the title (and optional an icon) for the dialog header
    const title = "Datenübernahme";
    const titleIcon = "mdi:mdi-database-import";
    tableData.setTitle(title, titleIcon);

    // DataBase-Connection
    // Parameters for an example local MySQL database connection (DBConnection)
    const myDBType = "mysql";                   // DataBase type
    const myIP = "192.168.7.40";              // Server IP address (ask ipconfig)
    const myDBName = "relationsexamplecompany"; // DataBase name - (dbName = myDBName@myIP)
    const mySqlUser = "root";                   // DataBase username
    const mySqlUserPassword = "";               // Password for the user

    // Define the database connection with the given parameters
    const dbConnection = new DBConnection(myDBType, myDBName + "@" + myIP, mySqlUser, mySqlUserPassword);

    // Set the database connection to be used for executing the queries
    tableData.setDBConnection(dbConnection);

    // Specify the table to be used from myDBName
    // (example database provided as an SQL script in the documentation: relations.sql)
    const queryDBtable = "relationsexamplecontact";

    // Set the title of the list (displayed above the list)
    tableData.setListTitle("Externe Datenbank-Tabelle: " + queryDBtable);

    // Set the SQL query WITHOUT the WHERE and ORDER clauses
    tableData.setSqlSelect("SELECT * FROM " + queryDBtable);

    // For default filtering of entries, use the setSqlFilter(sqlFilter) method
    // tableData.setSqlFilter("WHERE exmplCountry = 'Schweiz'");

    // Enable the search box above the list
    tableData.setShowSearchBox(true);

    // Localization of labels must be handled externally
    const localized_FirstName_Label = context.getLocaleValue("de:Vorname;en:First Name;pf:tableDataDialog_exmplFirstName");

    // Select columns from the database table to display in the dialog list
    // key = the original column name in the database table
    // label = the column name to display in the dialog list
    tableData.setColumns([
        { key: "exmplFirstName", label: localized_FirstName_Label }, // Example of using localized label
        { key: "exmplName", label: "Nachname" },
        { key: "exmplJobtitle", label: "Position" },
        { key: "exmplDivision", label: "Abteilung" },
        { key: "exmplCountry", label: "Land" },
    ]);

    // Specify the database table column as the identifier for the list entries
    tableData.setKeyColumn("exmplId");

    // Set the SQL query to fetch details for the selected entry/entries
    // The (?) is replaced by a comma-separated list of the KeyColumn values
    tableData.setDetailsSql('SELECT * FROM relationsexamplecontact WHERE exmplId IN (?)');

    // Select and set the Database-to-FileType mapping
    // Upon selecting a list entry, the corresponding file fields in the current file are automatically populated.
    // fieldName = technical name of the Field of FileType
    // columnName = name of the DataBase-Table-Column
    tableData.setMapping([
        { fieldName: "crmSalutation", columnName: "exmplSalutation" },
        { fieldName: "crmTitle", columnName: "exmplTitle" },
        { fieldName: "crmFirstName", columnName: "exmplFirstName" },
        { fieldName: "crmName", columnName: "exmplName" },
        { fieldName: "crmJobtitle", columnName: "exmplJobtitle" },
        { fieldName: "crmDivision", columnName: "exmplDivision" },
        { fieldName: "crmPhone", columnName: "exmplPhone" },
        { fieldName: "crmMobilePhone", columnName: "exmplMobilePhone" },
        { fieldName: "crmFax", columnName: "exmplFax" },
        { fieldName: "crmEmail", columnName: "exmplEmail" },
        { fieldName: "crmNoEmails", columnName: "exmplNoEmails" },
        { fieldName: "crmTeam", columnName: "exmplTeam" },
        { fieldName: "crmStreet", columnName: "exmplStreet" },
        { fieldName: "crmCountry", columnName: "exmplCountry",
                valueCallback: function(value, documentsContext, item, mappingConfig) {
                return value.toUpperCase();
            }
        },
        { fieldName: "crmAddressAnnex", columnName: "exmplAddressAnnex" },
        { fieldName: "crmRegion", columnName: "exmplRegion" },
        { fieldName: "crmZip", columnName: "exmplZip" },
        { fieldName: "crmCity", columnName: "exmplCity" },
        { fieldName: "crmPostboxZip", columnName: "exmplPostboxZip" },
        { fieldName: "crmPostbox", columnName: "exmplPostbox" }
    ]);

    // Replace the callback function "detailsHandler" to handle the details data
    tableData.setDetailsHandler(function details(items, mapping) {
        const data = items[0];  // Even in multiselect, only the first record is processed in this example

        // Create an object to collect the values for the form
        const fieldValues = {};

        // Country-specific prefixes
        const countryPrefixes = {
            "Deutschland": "+49",
            "Österreich": "+43",
            "Schweiz": "+41"
        };

        // Determine the country in the record
        const country = data['exmplCountry'];

        // Iterate through the mapping array and assign the values
        mapping.forEach(function (map) {
            const formFieldName = map.fieldName;
            const dataColumnName = map.columnName;

            // Get the value from the data, applying the valueCallback if it exists
            var fieldValue = (map.valueCallback) ? map.valueCallback(data[dataColumnName], documentsContext, data, mapping) : data[dataColumnName];

            // Format according to DIN 5008
            // Define an array with the field names to check
            const phoneFields = ['crmPhone', 'crmMobilePhone', 'crmFax'];

            // Check if formFieldName is in the array
            if (phoneFields.includes(formFieldName)) {

                /// Check if the country prefix is missing (e.g., no '+' at the beginning)
                if (fieldValue) {
                    fieldValue = fieldValue.replace(/-/g, ' ');
                    if (!fieldValue.startsWith('+') && !fieldValue.startsWith('00')) {

                        // Add the country prefix based on the country, if available
                        if (countryPrefixes[country]) {

                            // Remove the leading '0', if present, before adding the prefix
                            if (fieldValue.startsWith('0')) {
                                fieldValue = fieldValue.substring(1);
                            }

                            // Add the country prefix and format the number according to DIN 5008
                            fieldValue = countryPrefixes[country] + " " + fieldValue.replace(/(\d{3})(\d+)/, '$1 $2');
                        }
                    }
                }
            }

            // Add the assigned pair to the fieldValues object
            fieldValues[formFieldName] = fieldValue;
        });

        // Set the values in the form fields
        const fileContext = documentsContext.getFileContext();
        fileContext.setFileFieldValues(fieldValues);
    });

    // This setter replaces onClick on list entries with multiselect checkboxes and a button,
    // using the current detailsHandler when the button is clicked
    // tableData.setMultiSelect(true, "Multi", "detailsHandler");

    // Return the Gadget instance WITHOUT calling the transfer() method
    return tableData;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();
```

// This script uses module import with 'require' (supported from documentsOS version 6.0.2 onwards)
// instead of the preprocessor directive '#import', which is deprecated.

/**
 * To use the Gadget:
 * Property name: gadgetConfig
 * Property value: { gadgetScript: 'GadgetSample_TableData' , gadgetAction: 'gadgetUserExit' }
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // not required since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "gadgetUserExit"
// and link it to an action function.
gadgetAPI.registerGadgetAction("gadgetUserExit", function (gadgetContext, otris) {

    // Create the gadget and set the title for the dialog
    const tableData = gadgetAPI.getTableDataInstance();

    // Set the title (and optional an icon) for the dialog header
    const title = "Datenübernahme";
    const titleIcon = "mdi:mdi-database-import";
    tableData.setTitle(title, titleIcon);

    // DataBase-Connection
    // Parameters for an example local MySQL database connection (DBConnection)
    const myDBType = "mysql";                   // DataBase type
    const myIP = "192.168.7.40";              // Server IP address (ask ipconfig)
    const myDBName = "relationsexamplecompany"; // DataBase name - (dbName = myDBName@myIP)
    const mySqlUser = "root";                   // DataBase username
    const mySqlUserPassword = "";               // Password for the user

    // Define the database connection with the given parameters
    const dbConnection = new DBConnection(myDBType, myDBName + "@" + myIP, mySqlUser, mySqlUserPassword);

    // Set the database connection to be used for executing the queries
    tableData.setDBConnection(dbConnection);

    // Specify the table to be used from myDBName
    // (example database provided as an SQL script in the documentation: relations.sql)
    const queryDBtable = "relationsexamplecontact";

    // Set the title of the list (displayed above the list)
    tableData.setListTitle("Externe Datenbank-Tabelle: " + queryDBtable);

    // Set the SQL query WITHOUT the WHERE and ORDER clauses
    tableData.setSqlSelect("SELECT * FROM " + queryDBtable);

    // For default filtering of entries, use the setSqlFilter(sqlFilter) method
    // tableData.setSqlFilter("WHERE exmplCountry = 'Schweiz'");

    // Enable the search box above the list
    tableData.setShowSearchBox(true);

    // Localization of labels must be handled externally
    const localized_FirstName_Label = context.getLocaleValue("de:Vorname;en:First Name;pf:tableDataDialog_exmplFirstName");

    // Select columns from the database table to display in the dialog list
    // key = the original column name in the database table
    // label = the column name to display in the dialog list
    tableData.setColumns([
        { key: "exmplFirstName", label: localized_FirstName_Label }, // Example of using localized label
        { key: "exmplName", label: "Nachname" },
        { key: "exmplJobtitle", label: "Position" },
        { key: "exmplDivision", label: "Abteilung" },
        { key: "exmplCountry", label: "Land" },
    ]);

    // Specify the database table column as the identifier for the list entries
    tableData.setKeyColumn("exmplId");

    // Set the SQL query to fetch details for the selected entry/entries
    // The (?) is replaced by a comma-separated list of the KeyColumn values
    tableData.setDetailsSql('SELECT * FROM relationsexamplecontact WHERE exmplId IN (?)');

    // Select and set the Database-to-FileType mapping
    // Upon selecting a list entry, the corresponding file fields in the current file are automatically populated.
    // fieldName = technical name of the Field of FileType
    // columnName = name of the DataBase-Table-Column
    tableData.setMapping([
        { fieldName: "crmSalutation", columnName: "exmplSalutation" },
        { fieldName: "crmTitle", columnName: "exmplTitle" },
        { fieldName: "crmFirstName", columnName: "exmplFirstName" },
        { fieldName: "crmName", columnName: "exmplName" },
        { fieldName: "crmJobtitle", columnName: "exmplJobtitle" },
        { fieldName: "crmDivision", columnName: "exmplDivision" },
        { fieldName: "crmPhone", columnName: "exmplPhone" },
        { fieldName: "crmMobilePhone", columnName: "exmplMobilePhone" },
        { fieldName: "crmFax", columnName: "exmplFax" },
        { fieldName: "crmEmail", columnName: "exmplEmail" },
        { fieldName: "crmNoEmails", columnName: "exmplNoEmails" },
        { fieldName: "crmTeam", columnName: "exmplTeam" },
        { fieldName: "crmStreet", columnName: "exmplStreet" },
        { fieldName: "crmCountry", columnName: "exmplCountry",
                valueCallback: function(value, documentsContext, item, mappingConfig) {
                return value.toUpperCase();
            }
        },
        { fieldName: "crmAddressAnnex", columnName: "exmplAddressAnnex" },
        { fieldName: "crmRegion", columnName: "exmplRegion" },
        { fieldName: "crmZip", columnName: "exmplZip" },
        { fieldName: "crmCity", columnName: "exmplCity" },
        { fieldName: "crmPostboxZip", columnName: "exmplPostboxZip" },
        { fieldName: "crmPostbox", columnName: "exmplPostbox" }
    ]);

    // Replace the callback function "detailsHandler" to handle the details data
    tableData.setDetailsHandler(function details(items, mapping) {
        const data = items[0];  // Even in multiselect, only the first record is processed in this example

        // Create an object to collect the values for the form
        const fieldValues = {};

        // Country-specific prefixes
        const countryPrefixes = {
            "Deutschland": "+49",
            "Österreich": "+43",
            "Schweiz": "+41"
        };

        // Determine the country in the record
        const country = data['exmplCountry'];

        // Iterate through the mapping array and assign the values
        mapping.forEach(function (map) {
            const formFieldName = map.fieldName;
            const dataColumnName = map.columnName;

            // Get the value from the data, applying the valueCallback if it exists
            var fieldValue = (map.valueCallback) ? map.valueCallback(data[dataColumnName], documentsContext, data, mapping) : data[dataColumnName];

            // Format according to DIN 5008
            // Define an array with the field names to check
            const phoneFields = ['crmPhone', 'crmMobilePhone', 'crmFax'];

            // Check if formFieldName is in the array
            if (phoneFields.includes(formFieldName)) {

                /// Check if the country prefix is missing (e.g., no '+' at the beginning)
                if (fieldValue) {
                    fieldValue = fieldValue.replace(/-/g, ' ');
                    if (!fieldValue.startsWith('+') && !fieldValue.startsWith('00')) {

                        // Add the country prefix based on the country, if available
                        if (countryPrefixes[country]) {

                            // Remove the leading '0', if present, before adding the prefix
                            if (fieldValue.startsWith('0')) {
                                fieldValue = fieldValue.substring(1);
                            }

                            // Add the country prefix and format the number according to DIN 5008
                            fieldValue = countryPrefixes[country] + " " + fieldValue.replace(/(\d{3})(\d+)/, '$1 $2');
                        }
                    }
                }
            }

            // Add the assigned pair to the fieldValues object
            fieldValues[formFieldName] = fieldValue;
        });

        // Set the values in the form fields
        const fileContext = documentsContext.getFileContext();
        fileContext.setFileFieldValues(fieldValues);
    });

    // This setter replaces onClick on list entries with multiselect checkboxes and a button,
    // using the current detailsHandler when the button is clicked
    // tableData.setMultiSelect(true, "Multi", "detailsHandler");

    // Return the Gadget instance WITHOUT calling the transfer() method
    return tableData;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();