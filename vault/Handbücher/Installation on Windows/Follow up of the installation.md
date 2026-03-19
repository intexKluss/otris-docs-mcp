---
title: "Follow up of the installation"
source: "https://otris.software/documents/manuals/books/installation-windows-en/postinstallation.html"
---

# Follow up of the installation


## Installation test


### Launching application components as a console application

After a setup, it is recommended to start the installed application components once as a console application, since any messages that may occur can then be easily traced. The console applications are available, for example, in the Start menu or as program icons on the desktop if the DOCUMENTS shortcuts were also set up during setup (recommended). When starting the applications, it may be necessary to run them explicitly with administrative rights if Windows UAC is active. It may also be necessary to add some exceptions or policies to the Windows firewall configuration.


### Connect via browser

A connection via browser can only be established if a client exists in the system.
If it was specified during setup that the *Samples* (component feature server component) should be installed, the call can be made directly by specifying the corresponding Tomcat port, e.g.:

`http://localhost:8080`

If no sample client has been installed, a client must be created via DOCUMENTS Manager to match the license and further configured. Depending on the solution used, e.g. otris contract, otris corporate, otris compliance or otris dossier, further instructions are given in the documentation for the respective solution.

If a data backup is available, e.g. for the automatic creation of a solution or with data from a previous system that is to be transferred to the new installation, this data backup can be imported via DOCUMENTS Manager, proceeding as follows:

- Log on to DOCUMENTS Manager as user admin, after a new installation without password and without specifying a client.
- Open the dialog via the menu item Administration / Import data backup and enter the following values or select and upload them using the button:
Normal Contents: Contains the metadata of a backup as a zip file (clientname.zip).
Documents content: Contains the repository of a data backup as zip file (clientname_documents.zip)_
.pem file: Here you have to select the correct license file
- The Finish button starts the import of the data backup.

A connection via browser can be made directly by specifying the corresponding Tomcat port and the correct client name, if the client name is *contract*, e.g.:

`http://localhost:8080/documents/?pri=contract`


## Configure services

If the registration of services was activated during setup (recommended), these should be configured further. Depending on the settings in the setup, the following services are available in the Windows server service management:

- Documents5Server
- Documents5Tomcat8
- Documents5Soap
- Documents5Archive

In the services the start type (*Automatic*, *Manual* or *Delayed*) can be adjusted in each case.
With the services *Documents5Server* and *Documents5Archive* it is to be made certain additionally that on the register *Logon* a user account is indicated, which has full access to the directories indicated during the Setup (DOCUMENTS repository and/or Archive WORM and RW directory).

**Note:** If automatic registration of services was omitted during setup, this can be done manually at any time by executing the entry *Register all DOCUMENTS Services* as administrator via the start menu.


## Make solution-specific adjustments

Depending on the solution used, e.g. otris contract, otris corporate, otris compliance or otris dossier, it is necessary to check whether additional installations or special further configurations are required. This includes, for example:

- Installation of the JavaScript runtime environment Node.js (when using the CREATOR module).
- installation of LibreOffice (for PDF conversion of Microrosft Office files)
- special configurations on the initialization file documents.ini (installation directory\server) for a solution or when using an Oracle database

The information can be found in the documentation for the corresponding solution. In addition, the current documentation for the *System requirements* must be observed in each case.


## Set up data backup

In any case, regular data backups should be set up. DOCUMENTS data management basically consists of the following areas:

- DOCUMENTS Database
- DOCUMENTS Repository
- Archive data (if the archive component has been installed)


### DOCUMENTS Database

All meta-information of the system as well as all data entered by the users in the web application are managed in the connected database. Therefore, a maintenance plan for regular backup of the database must be created with the respective tools of the database system used.


### DOCUMENTS Repository

Files and documents uploaded by users as well as document templates and workflow sheets are stored in a directory structure (repository). The entire repository must also be included in a data backup by suitable means.
Further information on data backups can be found in the DOCUMENTS Manager documentation.


### Archive data

When the archive component has been installed, all data in the WORM or RW directory specified during installation must be included in a data backup by suitable means.
Further notes on backing up the archive data can be found in the Archive Backup Manual.