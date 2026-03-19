---
title: "OpenID"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/openid/openid-intro-d5.html"
---

# OpenID

DOCUMENTS ermöglicht seit der Version 5.0h HF1 einen Benutzerlogin mithilfe von OpenID Anbietern.

Vor der Verwendung sind die folgenden **notwendigen Konfigurationen** bei dem
verwendeten Anbieter (Beispiele: [Gitlab](../openid/example-gitlab.html), [Okta](../openid/example-okta.html)),
im [Tomcat](../openid/config-tomcat.html) und im [Documents Manager](../openid/config-manager.html) vorzunehmen, danach kann
mithilfe der [OpenIDConfig](../openid/config-openid-config.html) Login ermöglicht werden.

Das AutoLogin Skript wurde dahingehend erweitert, dass im Script jetzt zusätzliche Parameter wie z.B. das JSON Web
Token (JWT) zur Verfügung stehen, mit denen weitere Informationen über den Benutzer ausgelesen werden können.

**Hinweis:** Derzeit ist mit einer OpenID-Anbindung noch kein Benutzerimport möglich, nur eine Authentifizierung gegen
den entsprechenden Anbieter kann durchgeführt werden.

[PDF Version](../openid/openid-intro-d5.pdf?b=2026-02-12)