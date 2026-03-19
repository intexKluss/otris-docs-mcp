---
title: "DBConnection | Portalscript API"
source: "https://otris.software/documents/api/portalscript/classes/DBConnection.html"
---

# Class DBConnection

This class allows you to connect to a database and execute SQL statements.

**Important:** For reading the result of a SELECT statement, the class [[Portalscript API/interfaces/DBResultSet]] is used. A DBConnection object can only be used for one DBResultSet object.
Meaning, if you want to create another DBResultSet object you must also create an additional DBConnection object.

You can connect to the Documents or any other database. **See the constructor descriptions for further information.**


## Index


### Methods

- close
- executeQuery
- executeQueryUC
- executeStatement
- executeStatementUC
- getLastError


### Constructors

- constructor


## Methods


### close

`close(): boolean`

Close the database connection and free the server ressources.

Note: It is strongly recommanded to close each DBConnection object you have created, since database connections are so-called expensive ressources and should be used carefully.

**Returns:** boolean

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DBResultSet.close


### executeQuery

`executeQuery(sqlStatement: string): DBResultSet`

Execute a SELECT statement and retrieve a DBResultSet containing the result rows.

Note: This instruction should only be used to SELECT on the external database, since the method always tries to create a DBResultSet. If you need to execute different SQL statements, refer to the DBConnection.executeStatement() method.

Note: x64/UTF-8 DOCUMENTS version: since DOCUMENTS 4.0a HF2 the method handles the statement as UTF-8-String

**Parameters:**

- `sqlStatement`: `string` — String containing the SELECT statement you want to execute in the database

**Returns:** DBResultSet

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DBConnection.executeStatement


### executeQueryUC

`executeQueryUC(sqlStatement: string): DBResultSet`

Execute a SELECT statement using a x64/UTF-8 DOCUMENTS and retrieve a DBResultSet containing the result rows.

Note: This instruction should only be used to SELECT on the external database, since the method always tries to create a DBResultSet. If you need to execute different SQL statements, refer to the DBConnection.executeStatement() method.

**Parameters:**

- `sqlStatement`: `string` — String containing the SELECT statement you want to execute in the database

**Returns:** DBResultSet

**Since:** DOCUMENTS 4.0

**See:** DBConnection.executeStatementUC

**Deprecated:** since DOCUMENTS 4.0a HF2, use DBConnection.executeQuery() instead


### executeStatement

`executeStatement(sqlStatement: string): boolean`

Execute any SQL statement on the external database.

You can execute any SQL statement, as long as the database driver used for the connection supports the type of instruction. Use this method especially if you want to INSERT or UPDATE or DELETE data rows in tables of the external database. If you need to SELECT table rows, refer to the DBConnection.executeQuery() method.

Note: x64/UTF-8 DOCUMENTS version: since DOCUMENTS 4.0a HF2 the method handles the statement as UTF-8-String

**Parameters:**

- `sqlStatement`: `string`

**Returns:** boolean

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DBConnection.executeQuery


### executeStatementUC

`executeStatementUC(sqlStatement: string): boolean`

Execute any SQL statement using a x64/UTF-8 DOCUMENTS on the external database.

You can execute any SQL statement, as long as the database driver used for the connection supports the type of instruction. Use this method especially if you want to INSERT or UPDATE or DELETE data rows in tables of the external database. If you need to SELECT table rows, refer to the DBConnection.executeQueryUC() method.

**Parameters:**

- `sqlStatement`: `string`

**Returns:** boolean

**Since:** DOCUMENTS 4.0

**See:** DBConnection.executeQueryUC

**Deprecated:** since DOCUMENTS 4.0a HF2, use DBConnection.executeStatement() instead


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DocFile.getLastError


## Constructors


### constructor

`new DBConnection(): DBConnection`

Connect to DOCUMENTS database.

This is the constructor with no parameters. It can only be used to get a connection to the DOCUMENTS database.

**Parameters:**

- `dbType`: `string` — The type of database to connect to, which is identical to the DOCUMENTS database type. The value must be "mysql".
- `dbName`: `string` — The name of the database to connect to. E.g. "mydatabase". The default host name is localhost. Another host name or IP address can be specified like "mydatabase@ip-address". Examples: "mydatabase@remote.example.com", "mydatabase@123.123.12.1". To connect to a remote database, the remote database server must be configured for remote access. The configuration for remote access is not the default for the database server.
- `dbUser`: `string` — The login name of a user that exists on the database server and has access to the database. If this is the user of the DOCUMENTS database, you can omit this parameter.
- `password`: `string` — The password of the database user in plain text. If the user is the user of the DOCUMENTS database, you can omit this parameter.

**Returns:** DBConnection

**Since:** DOCUMENTS 4.0

**See:** DBResultSet

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DBResultSet

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DBResultSet

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DBResultSet


```ts
var testDB = new DBConnection("mysql", "testdb@123.123.12.1", "testuser", "testpw");
if (testDB && testDB.getLastError() == null)
{
  var myRS = testDB.executeQuery("SELECT * FROM testtbl");
  // ...
}
```


```ts
var connectionString = "Driver={ODBC Driver 17 for SQL Server};Server=myServerAddress;Database=myDataBase;UID=myUsername;PWD=myPassword;";
var myDB = new DBConnection("odbc", connectionString);
```


```ts
// First example: using Data Source Name
var dataSourceName = "myDSN";
var dbUser = "test";
var password = "test";
var myDB = new DBConnection("odbc", dataSourceName, user, password);
```


```ts
// Third example: using DBConnection together with DBResultset
var myDB = null;
var myRS = null;
try {
   // create DB-Connection using the Data Source Name "Nordwind"
   myDB = new DBConnection("odbc", "Nordwind");
   if (myDB.getLastError() != null)
      throw "Error connection the database: " + myDB.getLastError();
   // executeQuery returns a DBResultSet
   myRS = myDB.executeQuery("SELECT Nachname, Vorname FROM Personal");
   if (!myRS)
      throw "Error in SELECT statement: " + myDB.getLastError();
   // read all persons from the result set
   while (myRS.next()) {
      var fullName = myRS.getString(0) + ", " + myRS.getString(1);
      // Fails, because you must read the columns in the correct order!
      //var fullName = myRS.getString(1) + ", " + myRS.getString(0);
      // Fails, because it is not allowed to read a value twice!
      //var fullName = myRS.getString(0) + ", " + myRS.getString(0);
      util.out(fullName);
   }
} catch (err) {
   util.out(err);
} finally {
    // Important: free resources!
    if (myRS)
       myRS.close();
    if (myDB)
       myDB.close();
}
```