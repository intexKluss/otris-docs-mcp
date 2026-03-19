---
title: "Documents-Server installation using MariaDB"
source: "https://otris.software/documents/manuals/books/documentsserver_readme-mysql-en/"
---

# Documents-Server installation using MariaDB

IMPORTANT:
In any event, work with the supporting database administrator to set up the database!


## Notes for the installation of MariaDB

As of DOCUMENTS 6.2.1, only versions 10.6 *(LTS, EOL 06/26)*, 10.11 *(LTS)*, 11.4 *(LTS)* and 11.8 *(LTS)* of MariaDB are supported.
Compatibility with earlier or newer versions not applies.

- It is recommended to use MariaDB 10.11, 11.4 ot 11.8 as these are LTS versions.


## Installation notes on installing the MariaDB server and MariaDB client

DOCUMENTS 6 uses UTF-8 as database encoding. Please install the MariaDB server
with the option "Use UTF8 as default server's character set".

DOCUMENTS 6 is dynamically linked against the MariaDB-Connector 3.3.10 library and with the
DOCUMENTS installation the MariaDB client library `libmariadb.dll` will be
installed to the `/server``/docfilter` directory.

The separate installation of the MariaDB Client is on necessary if you need the
`mariabdb.exe`  (mysql.exe) tool to transfer the database schema to the database.


### Performance settings for MariaDB

The standard configuration of a MariaDB installation is regarding to
Memory usage and writing behavior performance-wise not sufficient.
The following parameters in my.ini must be adjusted:


```javascript
innodb_buffer_pool_size = 2G
innodb_log_file_size = 512M
innodb_flush_log_at_trx_commit = 2
```

innodb_buffer_pool_size = 2G
innodb_log_file_size = 512M
innodb_flush_log_at_trx_commit = 2Explanation:
InnoDB executes most operations in memory (InnoDB Buffer Pool).
Depending on the size of the database, the buffer pool must be adjusted.
The 2 GB mentioned above may already be too small.
The writing of transactions is done in the transaction log (InnoDB log file).
This size should be 25% of the `innodb_buffer_pool_size`.
The writing of the transaction log to disk can be controlled by the parameter
`innodb_flush_log_at_trx_commit = 2` and be drastically accelerated, because
in the Mode 2 transactions are written in a block every second instead of
individually.


```javascript
net_read_timeout=3600
net_write_timeout=3600
```

net_read_timeout=3600
net_write_timeout=3600Explanation:
During jex-export, especially with large tables DlcField etc.. Resultsets
are kept open for a long time. With the default setting (60 seconds) for
net_read_timeout resp. net_write_timeout it can happen that the database
server runs into a timeout and the jex export aborts with an error message
like:
"Fatal error during jex export: Database contains ..... where exported. This can
happen when the database connection is lost temporarily during the export.
Please try again"


## The DOCUMENTS 6 database schema

The schema file `documents6.sql` uses `utf8mb4` (4-byte UTF-8 encoding) as characterset.
This allows 4-byte UTF-8 characters such as emojis can be stored.

Notice:
The tables are created in row format `DYNAMIC`, otherwise the limitation of the
index size of 767 bytes at InnnoDB will be exceeded. Details can be found in the
MariaDB Reference Manual.


### Creating the database schema

To do this, open a command prompt (command line), and go to the
`\server` directory.

CAUTION: By loading the database schema (documents6) a database named documents6 that already exists will be permanently deleted!


```javascript
The sql script (schema) is loaded as follows:

mariadb.exe [-uUser] [-pPasswd] [-hServerhost] [-v] < documents6.sql

         mariadb.exe: sql tool from the MariaDB client / MariaDB Server (must be
                    present in the PATH)
         -u:        MariaDB user with the necessary privileges to create
                    users, etc. (e.g. the user root)
         -p:        User's password
         -h:        Hostname or IP address of the MariaDB computer
         -v:        Detailed outputs on the console

         Notes:    There must be NO space between the -p and the
                   password!
                   If the MariaDB Server is installed locally, this eliminates the0
                   need to specify the server host [-hServerhost].


         Example: Remote database server on the computer with
                  Hostname = DBComputer:

                  mariadb.exe -uroot -psecret -hDBComputer < documents6.sql
```

The sql script (schema) is loaded as follows:

mariadb.exe [-uUser] [-pPasswd] [-hServerhost] [-v] < documents6.sql

         mariadb.exe: sql tool from the MariaDB client / MariaDB Server (must be
                    present in the PATH)
         -u:        MariaDB user with the necessary privileges to create
                    users, etc. (e.g. the user root)
         -p:        User's password
         -h:        Hostname or IP address of the MariaDB computer
         -v:        Detailed outputs on the console

         Notes:    There must be NO space between the -p and the
                   password!
                   If the MariaDB Server is installed locally, this eliminates the0
                   need to specify the server host [-hServerhost].


         Example: Remote database server on the computer with
                  Hostname = DBComputer:

                  mariadb.exe -uroot -psecret -hDBComputer < documents6.sql
### Creating a database user for the document6-DB:

If the user "root" is not to be used to access the database,
you can create a new user as follows.
Depending on the access rights of the user "root", you can execute the SQL
statement from a mariadb.exe shell on the DOCUMENTS Server computer, or
it must be executed directly on the database computer.

To do this, open a command prompt (command line), and start a
mariadb.exe shell


```javascript
mariadb.exe [-uUser] [-pPasswd] [-hServerhost]

   Log in as "root", and run the following SQL
   statements:

GRANT ALL privileges ON documents6.* TO dbUser@DOCUMENTSServerHostname IDENTIFIED BY 'Password';



   Example: dbUser = doc6
	      DOCUMENTSServerHostname = '%'  (access from all hosts)
	      dbPasswd = doc6secret

GRANT ALL privileges ON documents6.* TO doc6@'%' IDENTIFIED BY 'doc6secret';
```

mariadb.exe [-uUser] [-pPasswd] [-hServerhost]

   Log in as "root", and run the following SQL
   statements:

GRANT ALL privileges ON documents6.* TO dbUser@DOCUMENTSServerHostname IDENTIFIED BY 'Password';



   Example: dbUser = doc6
	      DOCUMENTSServerHostname = '%'  (access from all hosts)
	      dbPasswd = doc6secret

GRANT ALL privileges ON documents6.* TO doc6@'%' IDENTIFIED BY 'doc6secret'; You will then have to enter the database connection data in the documents.ini
 file (`DBServer`, `DBUser`, `DBPassword`).


## DOCUMENTS 6 installation notes

DOCUMENTS 5 is only available for 64 bit OS.

Install the .exe setup and select MariaDB (MySQL) as the database, and following the
installation program's instructions.


## Configuring the DOCUMENTS Server via .ini file

On starting the application, the DOCUMENTS Server verifies
that the `documents.ini` file resides in the server's execution directory, and uses
the settings transferred there.

The general syntax of elements occurring in the file is defined
as follows:

- Comments always occupy the entire line. They start with the # or ; character. The commenting character may only be preceded by spaces or tabs.
- A value is initially characterized by a keyword. This keyword is case-insensitive. A distinction is made between uppercase and lowercase for self-defined properties (see below).
- Only spaces or tabs may occur between the keyword and the value. Values may not be written in quotes or simi- lar symbols.
- Keywords expecting a Boolean value may only be allocated the values true and false.
- Each keyword may occur only once in the data file. If a keyword is used multiple times, its behavior is not defined.

This data file contains, among others, the following predefined directives:
(this is limited to the important directives for the DOCUMENTS Server)

| Keyword | Meaning |
| --- | --- |
| DBServer | Database server to be used instead of the local computer. |
| DBUser | Name of user for database login |
| DBPassword | DBPassword Password for database login |
| DBPort | A database port different from 3306 can be specified |
| Port | Number of port via which the server should accept connections |
| LogAppend [false] | If this value is written as true in the ini file, the log file defined via LogPath will not be overwritten on starting the server. |
| LogPath | This directive lets you specify a file in which all outputs will be logged which would normally be written in the server window. |

Note: The server directory contains a sample file named `documents.ini` in which the directives used are commented out.


## Registering the DOCUMENTS Server as a service

Please start a command prompt. Go to the server directory of the DOCUMENTS Server.

- DOCUMENTS Server and database server reside on the same computer DOCUMENTSServer.exe -i The DOCUMENTS Server is registered as a service with the name "Documents6Server". Dependency on the database server is entered in the registry. The "Documents6Server" service can then be started via Start->Control Panel->Administrative Tools->Services.
- DOCUMENTS Server and database server reside on different computers (remove database) DOCUMENTSServer.exe --install=nodepend The DOCUMENTS Server is registered as a service with the name "Documents6Server". The "Documents6Server" service can then be started via Start->Control Panel->Administrative Tools->Services.
- Deregister the DocumentsServer service DOCUMENTSServer.exe -u


## Migration of a DOCUMENTS 5 utf8mb3 database to utf8mb4

If the database schema was created with a `documents5.sql` before version 5.0i HF1
then the tables have the character set `utf8mb3`.

There are two possible ways of migration:

- By jex export / import
- Migration of the DB by SQL


### By jex export / import


```javascript
1. perform jex-export
2. create new schema with current documents5.sql
3. jex-Import
```

1. perform jex-export
2. create new schema with current documents5.sql
3. jex-ImportNote:
Disadvantage is that this can take a long time with large amounts of data and also a "reindex" must be called after the jex import.


### Migration of the existing DB via SQL


```javascript
1. make a backup of the database e.g. via mariadbdump (mysqldump)

2. start the Dcuments-Manager without principal as user "admin

3. call the maintenance operation "createUtf8mb4" which generates a SQL file
   (convert_db_to_utf8mb4.sql) and offers it for download.

   Note:
   The DBUser entered in the documents.ini must have read access to the Information_Schema

4. terminate DocumentsServer

5. import the migration script in the same way as described in "3.1 Creating the database schema"

   mariadb.exe -uroot -p -hDBComputer < convert_db_to_utf8mb4.sql


6. in the documents.ini add the entry

   MySQLutf8mb4 true

7. start DocumentsServer
```

1. make a backup of the database e.g. via mariadbdump (mysqldump)

2. start the Dcuments-Manager without principal as user "admin

3. call the maintenance operation "createUtf8mb4" which generates a SQL file
   (convert_db_to_utf8mb4.sql) and offers it for download.

   Note:
   The DBUser entered in the documents.ini must have read access to the Information_Schema

4. terminate DocumentsServer

5. import the migration script in the same way as described in "3.1 Creating the database schema"

   mariadb.exe -uroot -p -hDBComputer < convert_db_to_utf8mb4.sql


6. in the documents.ini add the entry

   MySQLutf8mb4 true

7. start DocumentsServerNote:
Depending on the size of the DB the migration-SQL `convert_db_to_utf8mb4.sql` will take some time (e.g. 30 minutes for a 20 GB DB)