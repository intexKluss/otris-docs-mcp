---
title: "Debug Server"
source: "https://otris.software/documents/manuals/books/installation-linux/debug.html"
---

# Debug Server


## Installation

Es wird davon ausgegangen, dass das Repository wie in der Installationsanleitung beschrieben, bereits hinzugefügt wurde.

Debug Server installieren:


```bash
apt install documents5-debug-server-mysql
```

apt install documents5-debug-server-mysql
## Interaktiver Start

Der Debug Server kann nicht als Service gestartet werden, nur interaktiv. Der folgende Script-Aufruf startet den Debug Server, wenn es einen gibt und ansonsten den Release Server.


```bash
documents5server
```

documents5serverWenn das Script gestartet ist erhält man durch Drücken von `<ENTER>` die verfügbaren Kommandos:


```bash
Commands available at the server console:
 e      quit server
 I <cl> print cache info for class cl.
 d <l>  change debug level
 c      disconnect all clients
 x <file>       export to <file>
 i <file>       import from <file>
 u      create a new user

A command is invoked by typing it's name and optional
parameters followed by <ENTER>.
```

Commands available at the server console:
 e      quit server
 I <cl> print cache info for class cl.
 d <l>  change debug level
 c      disconnect all clients
 x <file>       export to <file>
 i <file>       import from <file>
 u      create a new user

A command is invoked by typing it's name and optional
parameters followed by <ENTER>.
## Hinweise zu ASAN

In der Debug Version ist immer der *ASAN* einkompiliert. Wenn der Documents Server beendet wird (mit `e`), gibt der ASAN grundsätzlich einen Leak Report aus. Wenn der ASAN ein Laufzeitproblem detektiert, beendet er den Documents Server und gibt einen Report über das detektierte Problem aus. Falls das passiert, sollte dieser Report sofort kopiert und an otris geschickt werden.