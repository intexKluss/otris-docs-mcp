---
title: "System Requirements documentsOS"
source: "https://otris.software/documents/manuals/books/system-requirements-en/server-linux.en.html"
---

## Linux


### Server

The following 64-bit **Linux Distributions** are supported.

|  | Ubuntu LTS 24.04 | Ubuntu LTS 22.04 |
| --- | --- |

- Ubuntu LTS 22.04 is supported as of version documentsOS 6.0.1
- Ubuntu LTS 24.04 is supported as of version documentsOS 6.0.2

**Note:** All following packages are taken from the **offical repository** of the used Linux distribution.


### Database

The following **Database Systems** are supported.

|  | MariaDB |
| --- | --- |

- In the DOCUMENTS standard installation MariaDB will be installed automatically


### Webserver

The following **Webservers** are supported.

|  | nginx will be installed in the standard installation |
| --- | --- |
|  | Optional the Apache Webserver can be used |

**Note:** If the **EAS-Archive** (or the module **CHRONIK** in otris contract) is used, **the Apache Webserver must be installed!**


### Additional components

|  | OpenJDK Version 17/21 (64-bit) (LTS Version) |
| --- | --- |
|  | Web-Container Apache Tomcat 9.x (Ubuntu 22.04) resp. Apache Tomcat 10.x (Ubuntu 24.04) |