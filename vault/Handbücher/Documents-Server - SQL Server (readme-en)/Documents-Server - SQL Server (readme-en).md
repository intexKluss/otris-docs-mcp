---
title: "Documents Server installation with SQL Server"
source: "https://otris.software/documents/manuals/books/documentsserver_readme-sqlserver-en/"
---

# Documents Server installation with SQL Server

IMPORTANT:
In any event, work with the supporting database administrator
to set up the database!


## Notes on installing the Microsoft SQL Server

The following MS SQL Server versions are supported:

- MS SQL Server 2025 (starting with version documentsOS 6.2.1)
- MS SQL Server 2022
- MS SQL Server 2019
- MS SQL Server 2017
- MS SQL Server 2016

Use only case-insensitive formats such as `Latin1_General_CI_AS` (i.e. not `Latin1_General_CS_AS`) as the default sort, because otherwise problems may occur
when changing DOCUMENTS user account passwords.


### Logins / user accounts in MS SQL Server

It is necessary to distinguish between two different logins.
This is one of the users who creates the database schema `documents6`
(hereinafter referred to as "*DB-Creator*") and the user with whom the
DocumentsServer logs on to the database server later and uses the database
`documents6` (hereinafter referred to as "*DB-User*").


#### Creating schema

During the DOCUMENTS 6 Setup, the user can choose to use Windows authentication or SQL server authentication to create
the `documents6` schema. This results in different users (*DB-Creator*) for the login at the SQL server:

- SQL server authentication: DB-Creator = the SQL user specified in the setup dialog
- Windows authentication: DB-Creator = NT AUTHORITY\SYSTEM Notes:
For Windows authentication, NT AUTHORITY\SYSTEM is the DB-Creator because the setup requests administrator rights and so that the setup is no longer executed in the context of the logged in Windows user.

In the SQL server the user *DB-Creator* (`NT AUTHORITY\SYSTEM` or SQL user) must be granted with the server role `dbcreator`.


#### Using the database by the DocumentsServer

The later execution of the DocumentsServer as application or service takes place
usually then in a different user context (*DB-User*) with fewer rights.

It is again distinguished whether the Windows authentication or the
SQL server authentication is to be used. If a `DBUser` is specified in the `documents.ini`
then SQL server authentication is performed, otherwise Windows authentication.

- SQL server authentication: DB-User = DBUser from documents.ini
- Windows authentication
at the start as an application: DB-User = the currently logged in Windows user
at the start as a service: DB-User = NT AUTHORITY\SYSTEM or a user account defined differently for the service.

The *DB-User* requires the following permissions on the SQL side:

- Server roles bulkadmin
public
- Access to the database documents6
- Database roles db_datareader db_datawriter db_ddladmin db_executor The role db_executor is not a standard role of the SQL server. The role will be created by the documents6.sql script at the schema creation. If the role does not exist in your DB, because the schema was created in the past, then create the role in the documents6 schema with: CREATE ROLE db_executor
GRANT EXECUTE TO db_executor


### General notes

- Please always use the latest service packs.
- Work with the responsible DB administrator to set up the database.
- If you choose "Full" as the recovery model, you will have to create regular database backups because otherwise the transaction log files will become VERY large.
- Create a maintenance plan for regular database backup and statistics optimization.


## DOCUMENTS 6 installation notes

DOCUMENTS 5 or later is only available for 64 bit OS.

Install the .msi setup and select SQL server as the database, and following the
installation program's instructions.

If the SQL Server configuration only allows connections with at least TLS 1.2
the option "Install Microsoft SQL Server Tools" must be selected.
This will also install the database driver "ODBC Driver 17 for SQL Server" and the
the "Command Line Utilities 15" will be installed.

The database driver `ODBC Driver 17 for SQL Server` supports TLS 1.2 and
the `Command Line Utilities 15` contain the bulk insert tool `bcp.exe`, which is
required for full text indexing.


## Configuring the DOCUMENTS Server via .ini file

On starting the application, the DOCUMENTS Server verifies that the
`documents.ini`
file resides in the server's execution directory, and uses the settings
transferred there.

The general syntax of elements occurring in the file is defined
as follows:

- Comments always occupy the entire line. They start with the # or ; character. The commenting character may only be preceded by spaces or tabs.
- A value is initially characterized by a keyword. This keyword is case-insensitive. A distinction is made between uppercase and lowercase for self-defined properties (see below).
- Only spaces or tabs may occur between the keyword and the value. Values may not be written in quotes or similar symbols.
- Keywords expecting a Boolean value may only be allocated the values true and false.
- Each keyword may occur only once in the data file. If a keyword is used multiple times, its behavior is not defined.

This data file contains, among others, the following predefined directives:
(this is limited to the important directives for the DOCUMENTS Server)

| Keyword | Meaning |
| --- | --- |
| DBServer | Name of database with database server |
| DBUser | Name of user for database login |
| DBPassword | Password for database login |
| DBDriver | ODBC driver to use |
| Port | Number of port via which the server should accept connections |
| LogAppend [false] | If this value is written as true in the ini file, the log file defined via LogPath will not be overwritten on starting the server. |
| LogPath | This directive lets you specify a file in which all outputs will be logged which would normally be written in the server window. |

Note:
The server directory contains a sample file named `documents.ini` in
which the directives used are commented out.


## Selection of the database driver to use

To connect the DocumentsServer to the SQL-Server DocumentsServer requires a database driver.
On every Windows system, the database driver `SQL Server` is already preinstalled. This driver uses the DocumentsServer by default.
If due to the company policy only encrypted connections to the SQL server are allowed (e.g. TLS 1.2),
the database driver 'SQL Server' cannot be used, because it does not support TLS 1.2.
Then a newer ODBC driver must be installed on the Documents computer. This can be done
during the installation by the setup using the option "Install Microsoft SQL Server Tools".
or alternatively a driver can be downloaded from Microsoft: e.g.: `ODBC Driver 17 for SQL Server`.

The DocumentsServer must then be made known in `documents.ini` that this
ODBC driver should then be used. This is done via the `DBDriver` directive.

e.g.:   `DBDriver ODBC Driver 17 for SQL Server`


## Installing on a "remote" database (DOCUMENTS Server and DB reside on different computers)

In order for full text indexing of attachments to work or if full-text indexed fields are defined, the Bulkinsert tool `bcp.exe` must be installed on the DOCUMENTS machine.

This is part of the *Microsoft Command Line Utilities* (sqlcmd utility). Together with the ODBC driver also required for the utility (e.g., *ODBC driver 17 for SQL server*), both setups can be downloaded from Microsoft.

The program `bcp.exe` must reside in the `PATH`. This can be tested by running
`bcp.exe` through a command prompt.


## Creating database schema from a command prompt

As an alternative to creating the database schema as part of the DOCUMENTS Setup, the database schema `documents6` can also be created with the console program `server/sqlserver.exe` as follows:

Start a command prompt and go to the DOCUMENTS Server's `/server` directory.

Run the following command from there:

`sqlserver.exe documents6.sql -s computer -u User -p password`

Example:
`sqlserver.exe documents6.sql -s DBComputer -u documentsCreator -p 12Zvdsf`

Customize the `documents.ini` file: `DBServer | DBUser | DBPassword`

If the database server only accepts encrypted connections (i.e. TLS 1.2)
you have to specifiy the database driver with the parameter -e.

Example:
`sqlserver.exe documents6.sql -s DBRechner -u documentsCreator -p 12Zvdsf -e Driver={"ODBC Driver 17 for SQL Server"}`


## Installing DOCUMENTS 6 on systems where multiple SQL server instances are installed

In typical SQL server installation, only one SQL server instance
is installed. The name of this instance is then equivalent to the
computer name.
If another SQL server instance is installed on this computer,
the name of this SQL server instance is determined as follows:

`Computer name\instance name`

The installation corresponds to the standard installation. You only need
to always specify `computer name\instance name` for the database computer's
computer name, e.g. `localhost\sqlexpress`


## Registering the DOCUMENTS Server as a service

Please start a command prompt. Go to the server directory of the DOCUMENTS Server.

- DOCUMENTS Server and database server reside on the same computer DOCUMENTSServer.exe -i The DOCUMENTS Server is registered as a service with the name "Documents6Server". Dependency on the database server is entered in the registry. The "Documents6Server" service can then be started via Start->Control Panel->Administrative Tools->Services.
- DOCUMENTS Server and database server reside on different computers (remove database) DOCUMENTSServer.exe --install=nodepend The DOCUMENTS Server is registered as a service with the name "Documents6Server". The "Documents6Server" service can then be started via Start->Control Panel->Administrative Tools->Services.
- Deregister the DocumentsServer service DOCUMENTSServer.exe -u