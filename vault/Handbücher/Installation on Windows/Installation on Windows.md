---
title: "Preliminary remarks and installation requirements"
source: "https://otris.software/documents/manuals/books/installation-windows-en/"
---

# Preliminary remarks and installation requirements


## General

This documentation describes the installation of DOCUMENTS under Microsoft Windows operating systems starting with **version DOCUMENTS 5h**. The DOCUMENTS platform includes a document management system and is also the installation basis for solutions such as otris contract, otris corporate, otris compliance or otris dossier.

The requirements for the hardware used and the configuration of the server and clients can be found in the current documentation for the *System Requirements*.

In addition, it should be checked before an installation whether all necessary information is available, these are in particular:

- Information on the database server to be used
- Information on ports, if other than standard ports of the components suggested in the setup are to be used
- Information about the DOCUMENTS system components to be installed on the current machine.

If possible, a license should also already be available before the installation.


## Overview system components

DOCUMENTS consists essentially of four components (services) whose installation can be scaled. Operation of all components on a single machine is possible, as is operation of each individual service on separate machines.
The following components are part of DOCUMENTS:

- DOCUMENTS Server: Central server application with connection to a supported database
- DOCUMENTS Tomcat: Servlet container as web server for communication between DOCUMENTS server and users' web browsers
- DOCUMENTS SOAP: SOAP proxy interface for integration of external solutions
- DOCUMENTS Archive: Audit-proof archive solution


## Additional important notes


### Java Virtual Machine

A *Java Virtual Machine* either as Java SDK (Java Software Development Kit) or Java JRE (Java Runtime Environment) must be installed on the machine on which the DOCUMENTS Server and / or DOCUMENTS Tomcat components are to be installed before the installation routine is executed. The supported SDK / JRE versions can be found in the current documentation for the *System Requirements*. After installation, an environment variable **JAVA_HOME** (SDK) or **JRE_HOME** (JRE) must be set to the path of the installation directory, e.g.:

`C:\Program Files\Java\jre1.8.0_341`


### Databases

DOCUMENTS works with either Microsoft SQL Server, MySQL/MariaDB or Oracle databases. During the installation routine, you must specify which of these databases is to be used. This documentation follows an installation using Microsoft SQL Server. Only in this case a database schema can be created already during the installation, if the name of the database server and the authentication data are already known.
When using MySQL/MariaDB or Oracle, the database schema is created only after the installation. A corresponding instruction is available after the installation as readme files (installation directory\server). This also applies to the use of Microsoft SQL Server, if the creation of the database schema was waived during the installation.

**Note:** A database license is not part of DOCUMENTS.


### Previous versions

If this new installation replaces an existing previous version, the old version must first be uninstalled (Control Panel\Programs and Features). During an uninstallation, certain customized directories and files are not automatically removed, these must be deleted manually.

**Note:** A data backup should always be performed before uninstalling. This backup can be restored after a new installation, with data automatically migrated to the new database schema.