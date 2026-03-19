---
title: "OpenIDConfig"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/openid/config-openid-config.html"
---

# OpenIDConfig

Über die OpenIDConfig wird die Verbindung zu einem OpenID Anbieter gesteuert. Die folgende
Beispielkonfiguration enthält alle von uns gesetzten Standardwerte. Eine genaue Aufschlüsselung wie welcher Wert
funktioniert und welche Pflichtparameter gesetzt werden müssen, wird nachfolgend erläutert.


```json
{
	"tenants": [
		{
			"clientId": "",
			"clientSecret": "",
			"wellKnownOpenIdConfigURL": "",
			"alias": "",
			"optionals": {
				"grant_type": "authorization_code",
				"scope": "openid",
				"response_type": "code",
				"login_claim": "sub",
                "authorization_method": "client_secret_basic"
			}
		}
	]
}
```

{
	"tenants": [
		{
			"clientId": "",
			"clientSecret": "",
			"wellKnownOpenIdConfigURL": "",
			"alias": "",
			"optionals": {
				"grant_type": "authorization_code",
				"scope": "openid",
				"response_type": "code",
				"login_claim": "sub",
                "authorization_method": "client_secret_basic"
			}
		}
	]
}Unter `tenants` können mehrere Konfigurationen abgelegt werden. Jede Konfiguration muss dabei als eigenes Objekt
innerhalb des Arrays angelegt werden. Alle möglichen Einstellungen sind in der Tabelle `Tenant` beschrieben.


## Tenant

| Key | Typ | Default | Pflichtparameter | Version | Beschreibung |
| --- | --- | --- | --- | --- | --- |
| clientID | String |  | ja | 5.0h HF1 | Die Client ID (Anwendungs-ID (Client)) der Applikation, über die Documents den Zugang zur OpenID Anwendung erhält. |
| clientSecret | String |  | ja | 5.0h HF1 | Ein Client Secret für die Applikation, über die Documents den Zugang zur OpenID Anwendung erhält. |
| wellKnownOpenIdConfigURL | String |  | ja | 5.0h HF1 | URL, über die sich Documents die OpenId Konfiguration abholen kann. Die URL beinhaltet häufig den Pfad /.well-known/openid-configuration |
| alias | String |  | ja | 5.0h HF1 | Parameter, über den mehrere verschiedene OpenID Anbindungen unterschieden werden können. Um mögliche Probleme zu vermeiden sollten keine Leer- oder Sonderzeichen verwendet werden. In OpenID Verbindungen wird der Alias auch für den Login verwendet und sollte daher nicht nachträglich geändert werden. |


## Optionals

Die Optionals beinhalten spezialisierte Einstellungen, die im Normalfall nicht verändert werden müssen.

| Key | Typ | Mögliche Werte | Default | Pflichtparameter | Version | Beschreibung |
| --- | --- | --- | --- | --- | --- | --- |
| grant_type | String | authorization_code | authorization_code | nein | 5.0h HF1 | Methode, um den Login gegenüber dem OpenID Anbieter zu verifizieren. Aktuell wird nur "authorization_code" unterstützt. Der Anbieter leitet den Benutzer nach erfolgreichem Login mit einem Autorisierungscode zurück auf die Documents-Oberfläche. Mit diesem Code kann Documents den Benutzer anmelden. |
| scope | String | Für jeden Identity Provider unterschiedlich, alle unterstützten Scopes werden in der .well-known/openid-configuration unter scopes_supported aufgelistet. | openid | nein | 5.0h HF1 | Im Scope Parameter werden die Ressourcen aufgelistet, welche der OpenID Connect Benutzer an Documents übergibt / mit Documents teilt. Der openid Scope-Parameter erlaubt beispielsweise das teilen des OpenID Connect Token (id_token). |
| response_type | String | code | code | nein | 5.0h HF1 | Die Art, wie der Server bei einer Authentifizierung antworten soll. Aktuell wird nur "code" unterstützt. |
| login_claim | String | Für jeden Identity Provider unterschiedlich, alle unterstützten Scopes werden in der .well-known/openid-configuration unter claims_supported aufgelistet. | sub | nein | 5.0h HF1 | Legt fest, welcher Claim für den Login genutzt werden soll. Diese Claims werden aus dem id_token (siehe scope) ausgelesen. |
| authorization_method | String | client_secret_basic client_secret_post | client_secret_basic | nein | 5.0h HF2 | Legt fest, welcher Authentifizierungsmethode vom Server gegenüber dem OpenID Anbieter genutzt werden soll. Siehe dazu auch https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication. |


## Zusätzliche Informationen

Für den Login von Benutzern wird die Documents Eigenschaft loginAlias verwendet. Bei OpenID Anbindungen setzt sich dieser
nach dem folgenden Muster aus dem Parameter `alias` und dem Wert für den Claim aus `login_claim` zusammen:
`alias:login_claim`.

Beispielhaft für eine OpenID Anbindung an Okta mit dem alias `Okta` und dem login_claim `sub` würde der Wert für loginAlias
bei **einem** der Benutzer wie folgt lauten: `Okta:00umgpy3u19sl70Zo5d8`

Ein nachträgliches Ändern dieser Parameter wird nicht empfohlen, da für alle bestehenden Logins anschließend ein Update
gemacht werden muss.

[PDF Version](../openid/config-openid-config.pdf?b=2026-02-12)