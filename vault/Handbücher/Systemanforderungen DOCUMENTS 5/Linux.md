---
title: "Systemanforderungen DOCUMENTS 5"
source: "https://otris.software/documents/manuals/books/system-requirements-d5/server-linux.html"
---

## Linux


### Server

Es werden folgende **Linux-Distributionen** mit 64-bit Architektur unterstützt.

|  | Ubuntu LTS 22.04 | Ubuntu LTS 20.04 |
| --- | --- |

- Ubuntu LTS 20.04 wird ab Version DOCUMENTS 5.0f HF2 unterstützt
- Ubuntu LTS 22.04 wird ab Version DOCUMENTS 5.0h HF2 unterstützt

**Hinweis:** Alle im folgenden aufgeführten zusätzlichen Pakete werden immer aus dem **offiziellen Repository** der verwendeteten Linux-Distribution installiert.


### Datenbanken

Die folgenden **Datenbanksysteme** werden unterstützt.

|  | MariaDB | MySQL |
| --- | --- |

- In der Standardinstallation wird MariaDB automatisch installiert
- Die Unterstützung von MySQL ist auf die Versionen 5.5 - 5.7 beschränkt
Ubuntu LTS 20.04: MySQL 8.0 (keine Unterstützung)
Ubuntu LTS 22.04: MySQL 8.0 (keine Unterstützung)


### Webserver

Die folgenden **Webserver** werden unterstützt.

|  | nginx wird in der Standardinstallation als Webserver verwendet |
| --- | --- |
|  | Optional kann auch der Apache Webserver eingesetzt werden |

**Hinweis:** Wenn das **EAS-Archiv** (bzw. das Modul **CHRONIK** in otris contract) eingesetzt wird, **muss der Apache Webserver installiert werden!**


### Zusätzliche Komponenten für Linux Installationen

|  | OpenJDK (64-bit) Version 11/17/21 (LTS Version) |
| --- | --- |
|  | Web-Container Apache Tomcat 9.x |