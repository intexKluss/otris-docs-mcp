---
title: "Autologin Skript"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/azure/config-autologin.html"
---

# Autologin Skript

In Documents 5 wird ein Autologin Skript für die Microsoft Entra ID Anbindung zur Verfügung gestellt. Wenn dieses genutzt werden soll,
muss die Eigenschaft 'autoLoginScript' am Mandanten mit dem Wert 'azureAutologinScript' gesetzt werden. Zusätzlich muss
die Eigenschaft 'adminUser' am Mandanten gesetzt werden. Dort muss der Login für einen Benutzer angegeben werden,
welcher die Rechte hat über das Portalscripting Benutzer anzulegen und zu modifizieren.

Das Autologin Skript wird über die 'userLoginConfig' in der [ME-ID / AzureConfig](../azure/config-azure-config.html) gesteuert.

Das Skript überprüft dabei zuerst, ob der Benutzer im System vorhanden ist. Wenn dies nicht der Fall ist, wird überprüft,
ob 'importUserOnLogin' auf 'true' gesetzt ist. Wenn dies der Fall ist, wird jede Tenant Config in der Reihenfolge,
in der sie in der 'AzureConfig' stehen angefragt, ob der Benutzer im jeweiligen Tenant vorhanden ist. Wenn dies erfüllt
ist, wird der Benutzer von dort mit den Einstellungen in der 'userImportConfig' für den Tenant importiert. Alle weiteren
Tenant Configs werden ignoriert, auch wenn der Benutzer in einem der Tenants vorhanden ist.

Wenn der Benutzer bereits im System vorhanden ist, wird überprüft, ob 'updateUserOnLogin' auf 'true' gesetzt ist.
Wenn dies der Fall ist, wird die für den Benutzer genutzte Tenant Config ermittelt und basierend darauf ein Update für
den Benutzer durchgeführt. Dabei wird derselbe Prozess durchlaufen wie beim Ausführen des Importskripts inklusive
aller Callbacks.

[PDF Version](../azure/config-autologin.pdf?b=2026-02-12)