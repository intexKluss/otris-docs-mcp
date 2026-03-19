---
title: "Einstellungen im Documents Manager"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/openid/config-manager.html"
---

# Einstellungen im Documents Manager


## Documents Einstellungen

Unter Documents → Einstellungen → Globale Einstellungen → Automatisches Login muss der Haken bei 'Aktiv' gesetzt werden.

![Documents -> Einstellungen -> Globale Einstellungen -> Automatisches Login](../assets/autologin-manager.png)


## Documents Eigenschaften (Documents → Einstellungen → Eigenschaften)

| Eigenschaft | Wert | Hinweis |
| --- | --- | --- |
| hasAutologinLink | true | Gewünschter Text kann angepasst werden, die Eigenschaft erzeugt einen Link auf der Login-Seite, mit dem sich automatisch angemeldet werden kann. |


## Mandanteneigenschaften (Seitenleiste Administration → Mandanten → Eigenschaften)

| Eigenschaft | Pflicht | Wert | Hinweis |
| --- | --- | --- | --- |
| loginWithAlias | Ja | 1 |  |


# Documents Manager: OpenID Config

Über die OpenID Config können Einstellungen für den Login mit einem OpenID Anbieter festgelegt werden. Diese
Konfiguration wird auch die Verbindung zum jeweiligen Anbieter genutzt, daher ist sie zwingend erforderlich.

Für eine genaue Beschreibung aller dort möglichen Konfigurationen siehe
Kapitel [OpenID Config](/azure/config-openid-config.md).

![Monitoring - Globale Eigenschaften](../assets/openid/config-manager.png)


Die Konfiguration wird im Manager unter Monitoring - Globale Eigenschaften abgelegt.

Name: `openIdConfig`

Typ: `otrOAuth`

[PDF Version](../openid/config-manager.pdf?b=2026-02-12)