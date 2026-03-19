---
title: "DBResultSet | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/DBResultSet.html"
---

# Interface DBResultSet

**The DBResultSet class contains a list of resultset rows.**

You need an active [[Portalscript API/classes/DBConnection]] object to execute an SQL query which is used to create a DBResultSet.

**Important:** Please consider the restrictions according the order of reading of the columns of the
DBResultSet. Read the example! The following data types for database columns will be supported:

| SQL data type | access method |
| --- | --- |
| SQL_INTEGER | getInt(), getString() |
| SQL_SMALLINT | getInt(), getString() |
| SQL_BIGINT | getInt(), getString() |
| SQL_FLOAT | getFloat(), getInt(), getString() |
| SQL_DECIMAL | getFloat(), getInt(), getString() |
| SQL_NUMERIC | getFloat(), getInt(), getString() |
| SQL_BIT | getBool(), getString() |
| SQL_TIMESTAMP | getTimestamp(), getString() |
| SQL_DATE | getDate(), getString() |
| SQL_GUID | getString() |
| SQL_VARCHAR | getString() |
| SQL_CHAR | getString() |
| all other types | getString() |

**Since:** DOCUMENTS 5.0c HF1 (support for SQL_GUID)


#### Since

ELC 3.50 / otrisPORTAL 5.0


#### See

[[Portalscript API/classes/DBConnection]]


#### Example


```ts
// create DB-Connection to ODBC-64 Datasource "Nordwind"
var myDB = new DBConnection("odbc", "Nordwind");
if (myDB && myDB.getLastError() == null)
{
   var myRS = myDB.executeQuery("SELECT Nachname, Vorname FROM Personal");
   if (myRS)
   {
      // read all persons from the result set
      while (myRS.next())
      {
         var fullName = myRS.getString(0) + ", " + myRS.getString(1);
         // var fullName = myRS.getString(1) + ", " + myRS.getString(0);  // Fails, because you must read the columns in the correct order!
         // var fullName = myRS.getString(0) + ", " + myRS.getString(0);  // Fails, because it is not allowed to read a value twice!
         util.out(fullName);
      }
     // Important: free resource!
     myRS.close()
   }
   else
      util.out("Error in SELECT statement: " + myDB.getLastError());
   // Important: free resource!
   myDB.close();
}
else
   util.out("Error connection the database: " + myDB.getLastError())
```


`interface DBResultSet { close(): boolean; getBool(colNo: number): boolean; getColName(colNo: number): string; getDate(colNo: number): Date; getFloat(colNo: number): number; getInt(colNo: number): number; getLastError(): string; getNumCols(): number; getString(colNo: number): string; getTimestamp(colNo: number): Date; getUCString(colNo: number): string; next(): boolean; }`


## Index


### Methods

- close
- getBool
- getColName
- getDate
- getFloat
- getInt
- getLastError
- getNumCols
- getString
- getTimestamp
- getUCString
- next


## Methods


### close

`close(): boolean`

Close the DBResultSet and free the server ressources.

Note: It is strongly recommanded to close each DBResultSet object you have created, since database connections and resultsets are so-called expensive ressources and should be used carefully.

**Returns:** boolean

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DBConnection.close


### getBool

`getBool(colNo: number): boolean`

Read the indicated column of the current row of the DBResultSet as a boolean value.

**Parameters:**

- `colNo`: `number` — integer value (zero based) indicating the desired column of the current row of the DBResultSet

**Returns:** boolean

**Since:** ELC 3.50 / otrisPORTAL 5.0


### getColName

`getColName(colNo: number): string`

Function returns the name of a column.

**Parameters:**

- `colNo`: `number` — integer value (zero based) indicating the desired column

**Returns:** string

**Since:** DOCUMENTS 5.0


### getDate

`getDate(colNo: number): Date`

Read the indicated column of the current row of the DBResultSet as a Date object.

Note: The return value will be null if the content of the indicated column cannot be converted to a Date object. Note: every value of a DBResultSet can only be read one time and in the correct order!

**Parameters:**

- `colNo`: `number` — integer value (zero based) indicating the desired column of the current row of the DBResultSet

**Returns:** Date

**Since:** ELC 3.50 / otrisPORTAL 5.0


### getFloat

`getFloat(colNo: number): number`

Read the indicated column of the current row of the DBResultSet as a float value.

Note: The return value will be NaN if the content of the indicated column cannot be converted to a float value. Note: every value of a DBResultSet can only be read one time and in the correct order!

**Parameters:**

- `colNo`: `number` — integer value (zero based) indicating the desired column of the current row of the DBResultSet

**Returns:** number

**Since:** ELC 3.50 / otrisPORTAL 5.0


### getInt

`getInt(colNo: number): number`

Read the indicated column of the current row of the DBResultSet as an integer value.

Note: The return value will be NaN if the content of the indicated column cannot be converted to an integer value. Note: every value of a DBResultSet can only be read one time and in the correct order!

**Parameters:**

- `colNo`: `number` — integer value (zero based) indicating the desired column of the current row of the DBResultSet

**Returns:** number

**Since:** ELC 3.50 / otrisPORTAL 5.0


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** DocFile.getLastError


### getNumCols

`getNumCols(): number`

Function returns the amount of columns of the DBResultSet.

**Returns:** number

**Since:** DOCUMENTS 5.0


### getString

`getString(colNo: number): string`

Read the indicated column of the current row of the DBResultSet as a String.

Note: x64/UTF-8 DOCUMENTS version: since DOCUMENTS 4.0a HF2 the method transcode the fetched data to UTF-8 Note: every value of a DBResultSet can only be read one time and in the correct order!

**Parameters:**

- `colNo`: `number` — integer value (zero based) indicating the desired column of the current row of the DBResultSet

**Returns:** string

**Since:** ELC 3.50 / otrisPORTAL 5.0


### getTimestamp

`getTimestamp(colNo: number): Date`

Read the indicated column of the current row of the DBResultSet as a Date object including the time.

Note: The return value will be null if the content of the indicated column cannot be converted to a Date object. Note: every value of a DBResultSet can only be read one time and in the correct order!

**Parameters:**

- `colNo`: `number` — integer value (zero based) indicating the desired column of the current row of the DBResultSet

**Returns:** Date

**Since:** ELC 3.50 / otrisPORTAL 5.0


### getUCString

`getUCString(colNo: number): string`

Read the indicated column of the current row of the DBResultSet on a x64/UTF-8 DOCUMENTS as a String.

Note: every value of a DBResultSet can only be read one time and in the correct order!

**Parameters:**

- `colNo`: `number` — integer value (zero based) indicating the desired column of the current row of the DBResultSet

**Returns:** string

**Since:** DOCUMENTS 4.0

**Deprecated:** since DOCUMENTS 4.0a HF2 use DBResultSet.getString() instead


### next

`next(): boolean`

Move the resultset pointer to the next row of the DBResultSet.

The method must be called at least once after retrieving a DBResultSet, because the newly created object does not point to the first result row but to BOF (beginning of file). Note: every value of a DBResultSet can only be read one time and in the correct order!

**Returns:** boolean

**Since:** ELC 3.50 / otrisPORTAL 5.0