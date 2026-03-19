---
title: "Job Skript"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/azure/config-jobscript.html"
---

# Job Skript

In den Documents scriptlibs ist das Skript `azureUserImportJob` vorhanden. Dieses kann über ein Wrapper-Skript
als Job für den regelmäßigen Import von Benutzern genutzt werden.

![Microsoft Entra ID User Import Job Wrapper Skript](../assets/azure/autologin-script-manager.png)


Benutzer, welchen beim Import kein Microsoft Entra ID Benutzer zugeordnet werden kann werden automatisch gesperrt. Soll dies
verhindert werden kann am Benutzer die Eigenschaft `noOIDCheck` gesetzt werden. Es wird empfohlen, dass diese
Eigenschaft bei technischen Benutzern und Redakteuren gesetzt wird. Diese Benutzer werden dann beim Import
komplett ignoriert. Alternativ können auch die [Callbacks](../azure/config-callbacks.html)`modifyNewBlockedSystemUser` und
`onModifyNotMatchedSystemUser` genutzt werden.

Während des Imports werden am Benutzer die Eigenschaften `loginAlias` und `azureIdentifier` gesetzt. Diese sind für den
Ablauf des Imports und den Login relevant und sollten daher nicht verändert werden. Wenn nötig unterstützt die
Eigenschaft `loginAlias` mehrere kommaseparierte Werte.


## Ergänzung ab 5.0h HF1

Ab Version 5.0h HF1 wird zusätzlich der Import von Zugriffsprofilen über den Import Job ausgeführt. Dies wird allerdings
nur gemacht, wenn in der [ME-ID / Azure Config](../azure/config-azure-config.html) die `accessProfileImportConfig` existiert.

[PDF Version](../azure/config-jobscript.pdf?b=2026-02-12)