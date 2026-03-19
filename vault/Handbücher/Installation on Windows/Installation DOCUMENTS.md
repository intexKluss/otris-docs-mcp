---
title: "Installation DOCUMENTS"
source: "https://otris.software/documents/manuals/books/installation-windows-en/installation.html"
---

# Installation DOCUMENTS

The Windows setup for DOCUMENTS is provided as a self-extracting archive. When the setup is executed, all necessary data is extracted to a temporary directory  then the Setup Wizard is automatically started to assist with the installation.
In the *Welcome* screen *Next* must be selected to start the installation configuration.


![InstallationStart](images/SetupWizard_1.png)

Fig. 1 - Start installation


## License terms

To continue the installation, the license conditions must be agreed to by activating the corresponding checkbox, the license conditions can be printed if required.


![LicenseTerms](images/SetupWizard_2.png)

Fig. 2 - License terms


## Installation type

In the next dialog the desired installation type is selected, this has influence on a part of the components to be installed.


![InstallationType](images/SetupWizard_3.png)

Fig. 3 - Installation type

There are three variants to choose from.


### Typical

Installs DOCUMENTS without samples into the directory
`C:\Program Files\Documents5`


### Complete

Installs DOCUMENTS with all functions and samples into the directory
`C:\Program Files\Documents5`


### Custom

In the custom setup all possible settings can be selected specifically:

- the location of the installation can be changed, if on the uppermost entry by button Browse the location is selected.
- over the button Disk usage can be checked whether on the selected medium sufficient storage space is available
- the functions which can be installed can be specified over the Microsoft Windows usual settings independently


![InstallationTypeUser](images/SetupWizard_4.png)

Fig. 4 - Installation type Custom

**Note:** If individual functions are to be installed on separate machines, all other functions must be deactivated in each case (selection: *The entire function will not be available*)

All installation settings shown below refer to the custom setup, the use of which is generally recommended.


## DOCUMENTS-Server settings

In this dialog, settings for the underlying server application can be made.


![ServerSettings](images/SetupWizard_5.png)

Fig. 5 - DOCUMENTS Server Settings


### Establishment as a service

The checkbox *Register service 'Documents5Server'* is used to specify whether the server component should be set up automatically as a Windows service. The *Start* can already be set here to *Automatic*, *Manual* or *Delayed* or configured later at the registered service .
Setting up the server as a service is generally recommended, although this setup can also be done manually later.


### TCP/IP Port

The *TCP/IP Port* is used for communication to the DOCUMENTS server and is set to the value 11000 by default. This can be optionally changed in case of existing conflicts. Ensure in advance that communication on the corresponding port is not blocked by a firewall policy.
Subsequent changes to the port must be made in the *documents.ini* file (installation directory\server) and, if required, also in other configuration files, e.g.: for Tomcat (web.xml in the webapps-Deploy directory) or DOCUMENTS SOAP (docsoaproxy.ini).


### Repository

In the *Repository* field, the physical storage location of the documents and files uploaded by the users or automated processes in the applications is specified. In addition to local storage, it is also possible to enter a network address via a UNC path. In case of remote storage, however, it must be noted that the login account of the Documents5Server service set up above must have full read and write permissions to the selected path.


### Database Server

The DBMS under which DOCUMENTS is to be used is specified under *Database Server*. For this purpose, the notes mentioned in the prerequisites must be observed in any case. The information presented below on the provision of the database schema refers to the use of Microsoft SQL Server.


### Install Microsoft SQL Server Tools

Selecting the database as Microsoft SQL Server, the SQL tools can be installed automatically. This includes the SQL Server database driver with TLS 1.2 support (Microsoft ODBC/OLE Driver 17 for SQL Server) and the command line tools (including bcp.exe) for full text indexing. When using a remote database (database server is located on another machine) the installation of the SQL tools is recommended in any case, if this is not done, the instructions for *Installation with a remote database* from the readme available after installation (installation directory\server) must be followed.


## Create database schema (only for Microsoft SQL Server)

Before using DOCUMENTS for the first time, a database schema must be created. This can be done automatically in the setup if the checkbox *Create database schema* is selected. The automatic creation is recommended, if it is not selected, the database schema must be created independently after the installation is completed, instructions for this can be found in the corresponding readme.


![DBSettings](images/SetupWizard_6.png)

Fig. 6 - SQL Server Parameter

Before activating the checkbox, check that all the required information is available for the database server. To be specified are:

- the SQL server name and instance name (if a named instance is to be used) with support actions for search and connection test
- the desired database name, default is documents5 the name can be changed using the corresponding button
- the authentication, optionally as integrated Windows authentication or SQL Server authentication with user account / password

The successful connection check to the specified Microsoft SQL Server is also highlighted in color:


![DBConnect](images/SetupWizard_7.png)

Fig. 7 - Successful connection test

The information entered here is stored in the *documents.ini* file (installation directory\server) and can also be adjusted there later.

**Note:** In the further course of the setup it is checked whether a database with the specified name already exists on the database server used. If this is the case, a message is output that this database will be deleted.


![DBInfo](images/SetupWizard_8.png)

Fig. 8 - Warning database name


## License file

In this dialog an existing license file (pem file) can be selected. The selection of the correct license file at this point is recommended. If no selection is made here, the license file must be provided manually later (installation directory\server) and a client must be created or an existing data backup of an existing client must be imported. Further information on this can be found in the chapter *Follow-up to the installation*.


![LicenseSettings](images/SetupWizard_9.png)

Fig. 9 - License file selection


## DOCUMENTS-Tomcat Settings

In this dialog settings for the servlet container (Tomcat) can be made.


![TomcatSettings](images/SetupWizard_10.png)

Fig. 10 - DOCUMENTS Tomcat Settings


### Establishment as a service

The checkbox *Register service 'Documents5Tomcat'* is used to specify whether the web server component should be set up automatically as a Windows service. The *Start* can already be set here to *Automatic*, *Manual* or *Delayed* or configured later on the registered service .
Setting up Tomcat as a service is generally recommended, although this setup can also be done manually later.


### TCP/IP Port and Shutdown Port

In these fields, the default ports for Tomcat can be adjusted if the suggested configuration (8080 or 8005) should lead to conflicts with other applications. Changes to these ports are possible after an installation in the *server.xml* file (installation directory\tomcat\conf).


### Client

If a valid license file was selected in the previous step, the correct value is already entered in the Client field and should not be changed. If no valid license file was selected before, the client name can be entered here manually if it is known. If no value is set in the Client field, the notes from the chapter *Following the installation* are to be taken.


### Documents Host and Documents Port

In the *Documents Host* field, the IP address or full name (FQDN) of the machine on which the Documents5Server application is running must be specified. Changing the default value 127.0.0.1 is only necessary if the web server component is running on another machine.
The value entered in the *Documents Port* field must match the TCP/IP port specified in the DOCUMENTS server settings.
Changes to these values can be made manually in the *web.xml* file (Tomcat webapps-Deploy directory) after the installation is complete (see *DocumentsServerIpAddress* or *DocumentsServerPort* parameters).


## DOCUMENTS-SOAP Settings

Settings for the DOCUMENTS SOAP interface can be made in this dialog.


![SoapSettings](images/SetupWizard_11.png)

Fig. 11 - DOCUMENTS SOAP Settings


### Establishment as a service

The checkbox *Register service 'Documents5Soap'* is used to specify whether the SOAP component should be set up automatically as a Windows service. The *Start* can already be set here to *Automatic*, *Manual* or *Delayed* or configured later on the registered service .
Setting up the SOAP interface as a service is generally recommended, although this setup can also be done manually later.


### TCP/IP Port

The *TCP/IP Port* is used for communication to the SOAP interface and is set to the value 11001 by default. This can be optionally changed in case of existing conflicts. Subsequent changes to the port must be made in the *docsoapproxy.ini* file (installation directory\soapproxy).


### Documents Host and Documents Port

In the *Documents Host* field, the IP address or full name (FQDN) of the machine on which the Documents5Server application is running must be specified. Changing the default value 127.0.0.1 is only necessary if the Documents5Server application is running on a different machine than the SOAP application is running on.
The value entered in the *Documents Port* field must match the TCP/IP port specified in the DOCUMENTS server settings.
Changes to these values can be made manually in the *docsoapproxy.ini* file (installation directory\soapproxy) after installation is complete.


## DOCUMENTS-Archive Settings

In this dialog settings for DOCUMENTS Archive can be made.


![ArchiveSettings](images/SetupWizard_12.png)

Fig. 12 - DOCUMENTS Archive Settings


### Establishment as a service

The checkbox *Register service 'Documents5Archive'* is used to specify whether the archive server should be set up automatically as a Windows service. The *Start* can already be set here to *Automatic*, *Manual* or *Delayed* or configured later on the registered service.
Setting up the archive server as a service is generally recommended, although this setup can also be done manually later.


### TCP/IP Port

In this field the default port for the archive server can be adjusted if the suggested configuration (8085) should lead to conflicts with other applications. Changes to the port are possible after an installation in the *httpd.conf* file (installation directory\eas\http\conf).


### WORM-Directory and RW-Directory

Two directories must be specified for the archive server:

- The WORM directory represents the high-security area for audit-proof archived data. The storage location is designed so that data is created and read there, but not changed (Write Once Read Many). For this repository area, it is therefore important that there is sufficient space in a storage network designed for security.
- The RW directory contains the archive's administrative data (e.g., search index, table of contents, audit trail). Numerous accesses occur in this area for each user action on the archive. It is therefore important for this repository area that the storage medium used allows fast read and write access at all times.


### Create new Archiv Storage and Archivename

By activating the checkbox *Create new Archive Storage*, the installation automatically already creates an archive with the name specified in *Archivename*. After installation, its connection must be further configured in DOCUMENTS.


## DOCUMENTS Shortcuts

This dialog can be used to specify whether the DOCUMENTS program symbols are to be displayed on the desktop and in the Start menu (recommended).


![ShortcutSettings](images/SetupWizard_13.png)

Fig. 13 - DOCUMENTS Shortcuts


## Security prompt and finishing the installation

DOCUMENTS is now ready for installation, the *Install* button will run the installation with the previously selected settings.


![StartInstallation](images/SetupWizard_14.png)

Fig. 14 - Starting the DOCUMENTS Installation

If the logon was not as *Administrator* and the user account control (UAC) is active, the button is overlaid by a *Shield*, so that the execution can be executed explicitly as administrator, according to Microsoft Windows guidelines.

The installation routine shows the status of the component installation in the further course in each case, if the installation is finished, a dialog is displayed, over the button *Complete* the installation is terminated.


![FinishInstallation](images/SetupWizard_15.png)

Fig. 15 - Completing the DOCUMENTS Installation

The DOCUMENTS installation is now complete. The information from the chapter *Follow-up to the installation* must be observed.