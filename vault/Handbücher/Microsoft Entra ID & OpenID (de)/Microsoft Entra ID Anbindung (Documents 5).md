---
title: "Microsoft Entra ID Sync"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/azure/azure-intro-d5.html"
---

# Microsoft Entra ID Sync

DOCUMENTS ermöglicht seit der Version 5.0h einen Benutzer- und Gruppenimport sowie einen Abgleich von
Documents-Benutzern und Documents-Zugriffsprofilen mit einem Microsoft Entra ID (vormals Microsoft Azure AD benannt).

Über ein *Job Skript* kann der Import einmalig oder in regelmäßigen Abständen durchgeführt werden. Über ein *AutoLogin
Script* wird der Import oder Abgleich auch während des Anmeldevorgangs (Login) ermöglicht. Zusätzlich zum grundlegenden
Import stehen diverse *Callbacks* zur Verfügung, mit denen unter anderem die Zuordnung zu bestehenden Benutzern sowie
das Setzen von Rechten, Zugriffsprofilen und Eigenschaften projektspezifisch gesteuert werden kann.

Vor der Verwendung sind die folgenden **notwendigen Konfigurationen**
im [Microsoft Entra ID](../azure/config-azure.html), im [Tomcat](../azure/config-tomcat.html) und
im [Documents-Manager](../azure/config-manager.html) vorzunehmen, danach kann mithilfe
der [ME-ID / AzureConfig](../azure/config-azure-config.html) der Import gesteuert werden. Zusätzlich können **optionale
Konfigurationen** für das [Job Skript](../azure/config-jobscript.html), das [AutoLogin Skript](../azure/config-autologin.html)
oder die [Callbacks](../azure/config-callbacks.html) eingestellt werden.

[PDF Version](../azure/azure-intro-d5.pdf?b=2026-02-12)