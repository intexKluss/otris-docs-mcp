---
title: "Einrichtung am Beispiel von Okta"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/openid/example-okta.html"
---

# Einrichtung am Beispiel von Okta

![Anlegen der Application](../assets/openid/okta-demo-1.png)


| Einstellung | Wert |
| --- | --- |
| Sign-in method | OIDC - OpenID Connect |
| Application type | Web Application |

![Anlegen der Application](../assets/openid/okta-demo-2.png)


| Einstellung | Wert | Hinweis |
| --- | --- | --- |
| App integration name | otris Software: <Produktname> | Beispiel: otris Software: Documents, kann frei gewählt werden. |
| Grant type | Authorization Code |  |
| Sign-in redirect URIs | https://<HOST>/documents<5>/srv/GenericRedirectReceiver | Host anpassen, documents (Windows bzw. Linux mit documentsOS) oder documents5 (Linux mit Documents5) je nach Installation |
| Assignments |  | Kann frei gewählt werden. |

*Hinweis: Die Maske beinhaltet weiter Felder, die für die Anbindung an Documents allerdings nicht notwendig sind und daher für die Anleitung ausgeblendet wurden.*

![ClientID und Secret](../assets/openid/okta-demo-3.png)


Nach der Anlage muss die `Client ID` und das `Client Secret` in die [OpenID Config](../openid/config-openid-config.html)
eingetragen werden. Im Falle von Okta folgt die `wellKnownOpenIdConfigURL` normalerweise dem folgenden Muster:
`https://<oktaID>.okta.com/.well-known/openid-configuration`

Zum Testen kann diese URL auch im Browser geöffnet werden, es wird eine JSON Struktur erwartet.

Da es keinen Import von Benutzern gibt müssen diese per Hand angelegt werden. Dafür muss an jedem Benutzer
die Eigenschaft `loginAlias` gesetzt werden. Als Wert wird dabei das `alias` und der `login_claim` aus der
[OpenID Config](../openid/config-openid-config.html) nach dem folgenden Schema genutzt: `alias:login_claim`.
Der Default (`sub`) ist die User ID aus dem Okta. Diese kann für den Benutzer aus der URL des jeweiligen Benutzerprofils
entnommen werden.

Soll ein anderer `login_claim` wie z.B. `email` genutzt werden muss unter Umständen der Parameter `scope` in der
[OpenID Config](../openid/config-openid-config.html) angepasst werden. Es können dabei mehrere Scopes angegeben werden,
diese werden durch *Leerzeichen* getrennt. Der Scope `openid` muss auf jeden Fall immer mitgegeben werden. Genauere
Informationen über die möglichen Scopes/Claims können auch durch Aufruf der `wellKnownOpenIdConfigURL` in Erfahrung
gebracht werden.

[PDF Version](../openid/example-okta.pdf?b=2026-02-12)