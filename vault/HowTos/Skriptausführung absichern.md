---
title: "Skriptausführung absichern"
source: "https://otris.software/documents/howto/common/secure-script-execution.html"
---

# Skriptausführung absichern

In **documentsOS** ist eine clientseitige Ausführung von Portalskripten nur
noch möglich, wenn diese dafür explizit freigegeben sind.
Mit einer clientseitigen Ausführung ist eine über den Browser initiierte
Skriptausführung mittels des Skriptnamens gemeint.

Eine Ausführung eines nicht freigegebenen Skriptes führt zu der folgenden
Fehlermeldung im Client. Im Log des Webservers wird dieser Fehler auch
protokolliert. Der Log-Eintrag enthält dort zusätzlich auch den Skriptnamen.


Abb. 1 - Fehlermeldung im Webclient

Eine Übersicht zu blockierten Skripten kann auch als Dashboard-Kachel
im documentsOS-AdminCenter eingestellt werden, siehe dazu auch die [Dokumentation zum AdminCenter](../../manuals/books/admin-center/dashboard.html#uebersicht).


Abb. 2 - Blockierte Skripte Kachel


## Relevante Skripte

Clientseitige Skriptausführungen umfassen alle Ausführungen bei denen der
Skriptname des auszuführenden Skriptes durch den Client bestimmt wird.
Dies betrifft insbesondere die folgenden Skripte:

- Ausführung von Skripten über das ClientSDK (documentsContext.executeScript("SKRIPTNAME");)
- Autocomplete-Skripte
- Skripte, die über Eigenschaften oder in Skripten per runscript:SKRIPTNAME-Syntax referenziert werden

Skripte, die an benutzerdefinierten Aktionen referenziert werden,
Gadgetskripte und auch Systemskripte (*system_*) sind standardmäßig
zur Ausführung freigegeben.


## Freigabe eines Skriptes

Um ein Skript für die clientseitige Ausführung freizugeben muss an dem Skript
die Eigenschaft `clientExecutable` auf `true` bzw. `1` gesetzt werden.
Damit die *Whitelist* der freigegebenen Skripte anschließend neu aufgebaut wird
muss der serverseitige Cache (Webserver, Tomcat) einmal neu aufgebaut werden.
Hierfür kann z.B. die ClientSDK-Methode [[Client SDK/documents.sdk.DocumentsContext#cacheEventClearAll|cacheEventClearAll]] genutzt werden.
In **documentsOS** kann alternativ auch die Funktionalität des AdminCenters dazu
verwendet werden.


## Freigabe über eigene Whitelist

Eine weitere Möglichkeit Skripte freizugeben besteht darin eine eigene
*Whitelist* anzulegen. Die Whitelist muss dazu als globale
Eigenschaft *(im Monitoring)* mit folgendem Namen `clientExecutableWhitelist`
und Typ `clientExecutableWhitelist` angelegt werden. Die *Whitelist* muss pro
Zeile einen Skriptnamen bzw. ein *Namenspattern* enthalten. In einem *Pattern*
kann der `*` für eine beliebige Zeichenkette verwendet werden.
Eine Änderung der Eigenschaft erfordert einen Neuaufbau des serverseitigen
Caches (Webserver, Tomcat).

- myCustomWebScript: Gibt das Skript mit dem Namen myCustomWebScript frei
- myWebScripts*: Gibt alle Skripte frei, deren Name mit myWebScripts beginnt
- *_web: Gibt alle Skripte frei, deren Name mit _web endet


## Globale Eigenschaft clientExecutableCheck

Mit der globalen Eigenschaft `clientExecutableCheck` kann der Mechanismus zur
Absicherung der clientseitigen Ausführung von Portalskripten komplett
deaktiviert werden (**Nicht empfohlen!**).
Eine Änderung des Wertes erfordert einen Neuaufbau des
serverseitigen Caches (Webserver, Tomcat).

Der hier beschriebene Mechanismus zur Absicherung der clientseitigen Ausführung
von Portalskripten kann auch schon ab der DOCUMENTS Version `5.0i HF3`
aktiviert werden. Dazu muss die globale Eigenschaft `clientExecutableCheck`
auf `true` gesetzt werden.