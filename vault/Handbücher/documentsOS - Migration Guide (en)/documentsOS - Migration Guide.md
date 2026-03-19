---
title: "documentsOS - Migration Guide"
source: "https://otris.software/documents/manuals/books/migration-doc6-en/index.html"
---

# documentsOS - Migration Guide

**documentsOS** is the new major version of the otris ECM platform for document-based solutions in the cloud and on premises. *documentsOS* is the further development of Documents 5 with new features and enhancements as well as changes that may affect previously used features (breaking changes).

**Caution:****Before converting an existing installation**, in addition to this documentation, please also note the **Overview of particularly important changes** see also [Breaking changes](../../../howto/scripting/breaking.html) and in particular the following points:

- Restriction of script execution (security feature), see also Restriction of script execution
- Important changes resulting from the conversion of the Java Script Engine from Mozilla SpiderMonkey to V8, for example, see also Scripting Breaking Changes.
- New version of chart.js, see also ChartJS 4
- New version of fullcalendar.io, see also Fullcalendar 6
- Change of the signature interface otrSign, see also Change of the signature interface and Post-processing (Windows) or Post-processing (Linux).

**Important Note:** Especially due to these changes, when using special solutions such as Contract management, Investment management, Legal matter management or IP management from the **otris legal suite** or other solutions or partner solutions, *documentsOS* may only be used if these solutions have been released for this purpose.

**Important note:** With **documentsOS** the support of Oracle as database system for Documents data is dropped, only Microsoft SQL Server and MariaDB are supported in the respective versions, which are specified in the general system requirements. If Oracle was used as database system with the existing Documents 5 installation, the database must be migrated to a supported version of Microsoft SQL Server or MariaDB by suitable means before a changeover. No support will be provided for such a migration. If external Oracle databases are connected in a solution via scripting, this is still possible. In these cases **must** always be used an *ODBC connection*, a use of *dbType=oracle* is **no longer permitted**, a conversion of corresponding scripts must take place before the migration to **documentsOS**.

The following describes how an existing *Documents 5 installation* can be converted to *documentsOS*, distinguishing between installations on Microsoft Windows systems and Linux systems.