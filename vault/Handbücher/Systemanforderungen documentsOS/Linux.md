---
title: "Systemanforderungen documentsOS"
source: "https://otris.software/documents/manuals/books/system-requirements/server-linux.html"
---

## Linux


### Server

Es werden folgende **Linux-Distributionen** mit 64-bit Architektur unterstützt.

|  | Ubuntu LTS 24.04 | Ubuntu LTS 22.04 |
| --- | --- |

- Ubuntu LTS 22.04 wird ab Version documentsOS 6.0.1 unterstützt
- Ubuntu LTS 24.04 wird ab Version documentsOS 6.0.2 unterstützt

**Hinweis:** Alle im folgenden aufgeführten zusätzlichen Pakete werden immer aus dem **offiziellen Repository** der verwendeteten Linux-Distribution installiert.


### Datenbanken

Die folgenden **Datenbanksysteme** werden unterstützt.

|  | MariaDB |
| --- | --- |

- In der Standardinstallation wird MariaDB automatisch installiert


### Webserver

Die folgenden **Webserver** werden unterstützt.

|  | nginx wird in der Standardinstallation als Webserver verwendet |
| --- | --- |
|  | Optional kann auch der Apache Webserver eingesetzt werden |

**Hinweis:** Wenn das **EAS-Archiv** (bzw. das Modul **CHRONIK** in otris contract) eingesetzt wird, **muss der Apache Webserver installiert werden!**


### Zusätzliche Komponenten für Linux Installationen

|  | OpenJDK Version (64-bit) 17/21 (LTS Version) |
| --- | --- |
|  | Web-Container Apache Tomcat 9.x (Ubuntu 22.04) bzw. Apache Tomcat 10.x (Ubuntu 24.04) |