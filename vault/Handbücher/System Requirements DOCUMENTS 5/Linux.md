---
title: "System Requirements DOCUMENTS 5"
source: "https://otris.software/documents/manuals/books/system-requirements-d5-en/server-linux.en.html"
---

## Linux


### Server

The following 64-bit **Linux Distributions** are supported.

|  | Ubuntu LTS 22.04 | Ubuntu LTS 20.04 |
| --- | --- |

- Ubuntu LTS 20.04 is supported since version DOCUMENTS 5.0f HF2
- Ubuntu LTS 22.04 is supported since version DOCUMENTS 5.0h HF2

**Note:** All following packages are taken from the **offical repository** of the used Linux distribution.


### Database

The following **Database Systems** are supported.

|  | MariaDB | MySQL |
| --- | --- |

- In the DOCUMENTS standard installation MariaDB will be installed automatically
- Only the MySQL versions 5.5 - 5.7 are supported by DOCUMENTS
Ubuntu LTS 20.04: MySQL 8.0 (not supported)
Ubuntu LTS 22.04: MySQL 8.0 (not supported)


### Webserver

The following **Webservers** are supported.

|  | nginx will be installed in the standard installation |
| --- | --- |
|  | Optional the Apache Webserver can be used |

**Note:** If the **EAS-Archive** (or the module **CHRONIK** in otris contract) is used, **the Apache Webserver must be installed!**


### Additional components

|  | OpenJDK (64-bit) Version 11/17/21 (LTS Version) |
| --- | --- |
|  | Web-Container Apache Tomcat 9.x |