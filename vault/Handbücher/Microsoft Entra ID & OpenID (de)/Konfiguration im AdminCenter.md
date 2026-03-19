---
title: "Konfiguration im AdminCenter"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/openid/config-admincenter.html"
---

# Konfiguration im AdminCenter


## Allgemeines

Redakteure mit der Funktion *Documents Administrator* haben nach der Anmeldung am Webclient standardmäßig Zugang zum
AdminCenter und können über die Erweiterung *OpenID Anbindung* Einstellungen vornehmen. Wurde die Erweiterung aktiviert,
können über die Rollenverwaltung Zugriffsprofile und/oder Benutzer angegeben werden, die zusätzlich Einstellungen
vornehmen können.


## Aktivierung/Deaktivierung, Einstellungen, Berechtigungen

Die Aktivierung wird im AdminCenter über den Ordner *Erweiterungen* durchgeführt. Auf der Erweiterung ist die Aktion *
*Aktivieren** auszuführen.


![admincenter-1](../assets/openid/admincenter-1.png)

Abb. 17 - Inaktive Erweiterung

**Hinweis:** Eine Aktivierung kann nur durchgeführt werden, wenn nicht bereits die Erweiterung **Microsoft Entra ID
Anbindung** aktiviert wurde, eine gleichzeitige Verwendung von *OpenID Anbindung* und *Microsoft Entra ID Anbindung* ist
nicht möglich.

Wird bei der Aktivierung festgestellt, dass der Webserver (Tomcat) nicht für SSL/TLS konfiguriert wurde, wird eine
Hinweismeldung ausgegeben.


![admincenter-2](../assets/openid/admincenter-2.png)

Abb. 18 - Hinweismeldung SSL/TLS

**Hinweis:** Je nach Anbieter muss SSL/TLS aktiviert sein, da ansonsten die Kommunikation über den Webserver (Tomcat)
abgelehnt werden könnte. Prüfen Sie, ob der zu verwendende Anbieter SSL/TLS benötigt.

Wurde die Erweiterung aktiviert, wird sie im AdminCenter unter *aktivierte Erweiterungen* dargestellt und ermöglicht
weitere allgemeine Einstellungen über die Aktion *Einstellungen*. Außerdem wird im AdminCenter ein Konfigurationsordner
*OpenID Anbindung* aktiviert.


![admincenter-3](../assets/openid/admincenter-3.png)

Abb. 19 - Aktive Erweiterung


![admincenter-4](../assets/openid/admincenter-4.png)

Abb. 20 - Einstellungsdialog

**Hinweis:** Für alle Einstellungen stehen im Dialog Tooltips als Entscheidungshilfe bereit.


![admincenter-5](../assets/openid/admincenter-5.png)

Abb. 21 - Konfigurationsordner im AdminCenter

Dieser Konfigurationsordner und die damit verbundenen Einstellungen sind auch für Benutzer sichtbar, die über die
Rollenverwaltung im AdminCenter für diese Erweiterung *optional* angegeben wurden.


![admincenter-6](../assets/openid/admincenter-6.png)

Abb. 22 - Rollenverwaltung mit optionalen weiteren Zugriffseinstellungen

Per Klick auf die entsprechende Rolle (standardmäßig steht eine Rolle *admin* mit Vollzugriff auf die OpenID Anbindung
bereit) können im entsprechenden Formular optional vorhandene Zugriffsprofile und/oder Benutzer angegeben werden, die
Berechtigungen zur Konfiguration erhalten sollen.

- Hinzufügen: Klick in das entsprechende Feld und Auswahl aus AutoComplete-Liste
- Entfernen: Klick auf das entsprechende Symbol in der jeweiligen Zeile

Wird die Erweiterung deaktiviert, kann optional angegeben werden, ob bestehende Konfigurationen gelöscht und eine
Anmeldung per Alias entfernt werden soll. Nach einer Deaktivierung wird auch der Konfigurationsordner im AdminCenter
entfernt, es können somit keine Einstellungen mehr getroffen werden.


![admincenter-7](../assets/openid/admincenter-7.png)

Abb. 23 - Deaktivierungsdialog


## OpenID Konfigurationen

Über den Konfigurationsordner *OpenID Anbindung* werden im weiteren Verlauf die Einstellungen für eine oder mehrere
OpenID Anbindungen festgelegt. Per Klick auf den Ordner wird eine Liste mit vorhandenen OpenID Konfigurationen
dargestellt, außerdem stehen in der Liste die notwendigen Aktionen *Hinzufügen*, *Löschen* und *Als primär festlegen*
bereit. Primäre Konfigurationen werden besonders hervorgehoben.


![admincenter-8](../assets/openid/admincenter-8.png)

Abb. 24 - Liste OpenID Konfigurationen


### OpenID Anbindung


#### Allgemeines

Per Klick auf einen Listeneintrag oder beim Erstellen einer neuen Konfiguration (+ Hinzufügen) wird ein entsprechendes
Formular dargestellt, in dem alle weiteren Einstellungen angegeben werden können. Auf dem Formular sind alle
Einstellungen auf verschiedenen Registern fachlich gruppiert nach *Globalen Einstellungen* und *Experteneinstellungen*.
Werden Einstellungen getroffen oder geändert, erfolgt eine Markierung ( * ), die darauf hinweist, dass ungespeicherte
Änderungen vorhanden sind und die Aktionen *Speichern* bzw. *Zurücksetzen* werden aktiviert.

**Hinweis:** Für alle Formularfelder stehen Tooltips als Entscheidungshilfe bereit.


![admincenter-9](../assets/openid/admincenter-9.png)

Abb. 25 - Konfigurationsformular, Register


#### Globale Einstellungen

Auf dem Register **Globale Einstellungen** werden die wichtigsten Konfigurationen für diese Anbindung angegeben,
mindestens die Felder *Client-ID*, *Client Secret* und die *Konfigurations-URL* müssen angegeben werden.


![admincenter-10](../assets/openid/admincenter-10.png)

Abb. 26 - Konfigurationsformular, Globale Einstellungen


#### Experteneinstellungen

Auf dem Register **Experteneinstellungen** können zusätzliche Einstellungen angegeben werden. Die gebräuchlisten
Einstellungen sind voreingestellt.

**Wichtiger Hinweis:** Eine Änderung dieser Einstellungen sollte nur mit entsprechenden Kenntnissen durchgeführt
werden. Die Dokumentation und die Tooltips auf den entsprechenden Formularfeldern geben wichtige Informationen zu
möglichen Auswirkungen derartiger Änderungen.


![admincenter-11](../assets/openid/admincenter-11.png)

Abb. 27 - Konfigurationsformular, Experteneinstellungen


## Zusätzliche Informationen

Für den Login von Benutzern wird die Documents Eigenschaft loginAlias verwendet. Bei OpenID Anbindungen setzt sich dieser
nach dem folgenden Muster aus dem Parameter `alias` und dem Wert für den Claim aus `login_claim` zusammen:
`alias:login_claim`.

Beispielhaft für eine OpenID Anbindung an Okta mit dem alias `Okta` und dem login_claim `sub` würde der Wert für loginAlias
bei **einem** der Benutzer wie folgt lauten: `Okta:00umgpy3u19sl70Zo5d8`

Ein nachträgliches Ändern dieser Parameter wird nicht empfohlen, da für alle bestehenden Logins anschließend ein Update
gemacht werden muss.

[PDF Version](../openid/config-admincenter.pdf?b=2026-02-12)