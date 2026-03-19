---
title: "Microsoft Entra ID Sync"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/azure/azure-intro-d6.html"
---

# Microsoft Entra ID Sync

DocumentsOS ermöglicht einen Benutzer- und Gruppenimport sowie einen Abgleich von Documents-Benutzern und
Documents-Zugriffsprofilen mit einem Microsoft Entra ID (vormals Microsoft Azure AD benannt).

Über ein *Job Skript* kann der Import einmalig oder in regelmäßigen Abständen durchgeführt werden, zusätzlich kann ein
Import auch über eine Aktion im AdminCenter gestartet werden. Über ein *AutoLogin Script* wird der Import oder Abgleich
auch während des Anmeldevorgangs (Login) ermöglicht. Zusätzlich zum grundlegenden Import stehen diverse *Callbacks* zur
Verfügung, mit denen unter anderem die Zuordnung zu bestehenden Benutzern sowie das Setzen von Rechten, Zugriffsprofilen
und Eigenschaften projektspezifisch gesteuert werden kann.

Vor der Verwendung sind die folgenden **notwendigen Konfigurationen** im [Microsoft Entra ID](../azure/config-azure.html)
und im [AdminCenter](../azure/config-admincenter.html) vorzunehmen. Zusätzlich können **optionale Konfigurationen** für
die [Callbacks](../azure/config-callbacks.html) eingestellt werden.

Bei einer *Aktualisierung von Documents 5 auf documentsOS* mit bestehendem Microsoft Entra ID Sync werden vorhandene
Konfigurationen automatisch übernommen und können in der Folge im [AdminCenter](../azure/config-admincenter.html) bearbeitet
werden.

[PDF Version](../azure/azure-intro-d6.pdf?b=2026-02-12)