---
title: "DOCUMENTS unter Ubuntu 18.04 mit EAS"
source: "https://otris.software/documents/manuals/books/installation-linux/troubleshooting/eas-1804.html"
---

# DOCUMENTS unter Ubuntu 18.04 mit EAS

Wenn documents unter ubuntu 18.04 mit EAS verwendet wird, kann es Verbindungsprobleme geben (HTTP-status 401).

Das Problem wird behoben, wenn das Property `ArchiveDigestAuthOnly` an der EAS-Archivserverkonfiguration im Documents Manager auf `1` gesetzt wird.

Im Folgenden werden Details zu dem Problem beschrieben, welches durch einen Bug in der libcurl hervorgerufen wird.


## Bug in der libcurl in Ubuntu 18.04

Das Problem tritt erst beim zweiten Versuch, eine Verbindung aufzubauen, auf. Es gibt unterschiedliche Fälle:

1. Im Bug-Fix (s.u.) wird das Problem beschrieben, dass bei zwei Verbindungsanfragen zu unterschielichen Servern mit Authentifizierungsmethode CURLAUTH_DIGEST, die zweite Verbindung fehlschlägt.
2. Der Fall in DOCUMENTS mit EAS unterscheidet sich leicht. Hier schlägt die zweite Anfrage zum gleichen Server fehl. Allerdings mit Authentifizierungsmethode CURLAUTH_ANY. Das Problem wird durch den gleichen Bug hervorgerufen und folglich mit dem Fix auch behoben.
3. Bei zwei Anfragen an den gleichen Server mit Authentifizierungsmethode CURLAUTH_DIGEST tritt das Problem nicht auf. (Das Property ArchiveDigestAuthOnly erzwingt genau das).


## Bug-Fix

- Bug-Fix auf GitHub.
- Der Fix ist in der curl Version 7.59.0 (curl Changelog).
- Das libcurl Paket in Ubuntu 18.04 hat die Version 7.58.0-2ubuntu3.8 (libcurl Paket in bionic).
- Der Fix wurde in die curl Version von Ubuntu 18.04 nicht eingefügt (curl Changelog in bionic).
- Solange der Fix in Ubuntu 18.04 nicht verfügbar ist, kann das Property als Workaround verwendet werden.