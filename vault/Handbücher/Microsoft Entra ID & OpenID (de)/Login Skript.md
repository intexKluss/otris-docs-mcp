---
title: "Login Skript"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/azure/config-loginscript.html"
---

# Login Skript

Ab Documents 5.0i HF3 wird ein Login Skript für die Microsoft Entra ID Anbindung zur Verfügung gestellt. Wenn dieses genutzt werden
soll, muss die Eigenschaft `loginScript` am Mandanten mit dem Wert `otrOpenId_azureLoginScript` gesetzt werden.

Mit dem Skript kann verhindert werden, dass sich Benutzer, welche über Microsoft Entra ID importiert wurden, mit Benutzername /
Passwort anmelden können.

Das Skript überprüft, ob am Benutzer die Eigenschaft `noOIDCheck` = 0 in Kombination mit `azureUserId` gesetzt ist.
Diese Eigenschaften werden vom Microsoft Entra ID Import für alle importierten Benutzer gesetzt. Wenn `noOIDCheck` nicht oder auf 1
gesetzt ist, wird der Login unabhängig von `azureUserId` normal durchgeführt.

[PDF Version](../azure/config-loginscript.pdf?b=2026-02-12)