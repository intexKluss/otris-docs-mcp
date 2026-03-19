---
title: "FP-Sign Anbindung"
source: "https://otris.software/documents/manuals/books/otrsign/fp-sign.html"
---

# FP-Sign Anbindung


## Konfiguration einer Applikation

Voraussetzung für die Verwendung von FP Sign ist eine eingerichtete Applikation (Tenant) auf Seiten von FP Sign. Damit dieser Tenant mit Documents verbunden werden kann, muss Folgendes bereitgestellt werden:

- Eine Tenant-ID
- Ein technische Benutzer mit den Berechtigungen
ROLE_INTEROP_API_BUSINESS_SYSTEM
ROLE_WORKFLOW_CREATOR
ROLE_TENANT_ADMIN

Die Einrichtung und Bereitstellung dieser Informationen muss durch FP Sign erfolgen.

Wie diese Informationen in Documents eingereichtet werden wird im Folgenden beschrieben.

1. Eine neue Applikation über den Menüpunkt "Apps und Dienste" (vormals "Externe Anbieter") anlegen (siehe Registrieren von Applikationen). Dabei müssen zwei Informationen konfiguriert werden.
Tenant ID: Hier muss die von FP Sign übermittelte ID eingetragen werden.
Technical User (Documents): Der Loginname des Documents-Benutzers, welcher später mit dem technischen Benutzer auf Seiten von FP Sign verbunden wird. Dies sollte in Documents am Besten auch ein technischer Benutzer sein (z.B. der Redakteur, mit welchem die Applikation gerade angelegt wird).
2. Den technischen FP Sign-Benutzer mit dem technischen Documents-Benutzer verbinden (siehe Verbinden von Benutzerkonten).


## Verknüpfen von FP Sign Benutzern mit Documents

Alle Benutzer, welche aus Documents heraus Signaturanforderungen über FP Sign verschicken möchten, müssen über den Menüpunkt "Apps und Dienste" (vormals "Externe Anbieter") ihr FP Sign-Konto verbinden (siehe [Verbinden von Benutzerkonten](install-configure-d6.html#verbinden-von-benutzerkonten)).