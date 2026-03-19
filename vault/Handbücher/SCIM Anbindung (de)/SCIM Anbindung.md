---
title: "Einleitung"
source: "https://otris.software/documents/manuals/books/otrscim-doc-de/index.html"
---

# Einleitung

**SCIM** (System for Cross-domain Identity Management) ist ein offener Standard zur automatisierten Bereitstellung von
Benutzerkonten. SCIM vermittelt Daten zur Benutzeridentität zwischen Identitätsanbietern (IDP) z.B. Microsoft Entra ID
und Service Providern (SP) hier **documentsOS**. Bei entsprechenden Einstellungen werden Änderungen, wie das Erstellen,
Aktualisieren und Löschen von Benutzerkonten beim IDP automatisch nach documentsOS synchronisiert. Die
Benutzerkontenadministration kann somit beim IDP erfolgen, ohne dass documentsOS Zugang zu diesem System hat. Von
documentsOS wird für die Kommunikation durch den IDP ein SCIM-Endpunkt bereitgestellt, die Authentifizierung des IDP
erfolgt per in documentsOS bereitgestellten API-Key eines dafür vorgesehenen administrativen Accounts.

Ab documentsOS Build 2503 können Benutzer und Zugriffsprofile mithilfe von SCIM synchronisiert werden.

[PDF Version](index.pdf?b=2026-02-10)