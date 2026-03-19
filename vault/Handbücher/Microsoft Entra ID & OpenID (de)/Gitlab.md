---
title: "Einrichtung am Beispiel von Gitlab"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/openid/example-gitlab.html"
---

# Einrichtung am Beispiel von Gitlab

![Anlegen der Application](../assets/openid/gitlab-demo-1.png)


| Einstellung | Wert | Hinweis |
| --- | --- | --- |
| Name | otris Software: <Produktname> | Beispiel: otris Software: Documents |
| Redirect URI | https://<HOST>/documents<5>/srv/GenericRedirectReceiver | Host anpassen, documents (Windows bzw. Linux mit documentsOS) oder documents5 (Linux mit Documents5) je nach Installation |
| Scope | openid | Der openid Scope ist erforderlich, alle weiteren können nach Bedarf aktiviert werden um z.B. Benutzer in einem Autologin Script zu erzeugen. Das vom Benutzer beim Login erzeugte Token wird im Autologin Script zur Verfügung gestellt, sodass weitere Anfragen an z.B. Gitlab gestellt werden können. |

![Anlegen der Application](../assets/openid/gitlab-demo-2.png)


Nach der Anlage muss die `Application ID` und das `Secret` in die [OpenID Config](../openid/config-openid-config.html)
eingetragen werden. Im Falle von Gitlab folgt die `wellKnownOpenIdConfigURL` normalerweise dem folgenden Muster:
`<Gitlab URL>/.well-known/openid-configuration`

Zum Testen kann diese URL auch im Browser geöffnet werden, es wird eine JSON Struktur erwartet.

Da es keinen Import von Benutzern gibt müssen diese aktuell per Hand angelegt werden. Dafür
muss an jedem Benutzer die Eigenschaft `loginAlias` gesetzt werden. Als Wert wird dabei das `alias` und der
`login_claim` aus der [OpenID Config](../openid/config-openid-config.html) nach dem folgenden Schema genutzt:
`alias:login_claim`. Der Default (`sub`) ist die User ID aus dem Gitlab. Diese kann für den Benutzer auf der jeweiligen
Profilseite entnommen werden.

Soll ein anderer `login_claim` wie z.B. `email` genutzt werden muss unter Umständen der Parameter `scope` in der
[OpenID Config](../openid/config-openid-config.html) angepasst werden. Es können dabei mehrere Scopes angegeben werden,
diese werden durch *Leerzeichen* getrennt. Der Scope `openid` muss auf jeden Fall immer mitgegeben werden. Genauere
Informationen über die möglichen Scopes/Claims können auch durch Aufruf der `wellKnownOpenIdConfigURL` in Erfahrung
gebracht werden.

![Anlegen der Application](../assets/openid/gitlab-demo-3.png)


Beim ersten Login mit dem Gitlab Account muss die Application noch bestätigt werden.

[PDF Version](../openid/example-gitlab.pdf?b=2026-02-12)