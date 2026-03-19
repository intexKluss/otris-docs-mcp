---
title: "OpenID"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/openid/openid-intro-d6.html"
---

# OpenID

DOCUMENTS ermöglicht seit der Version 5.0h HF1 einen einen Benutzerlogin mithilfe von OpenID Anbietern.

Vor der Verwendung sind die folgenden **notwendigen Konfigurationen** bei dem verwendeten Anbieter (
Beispiele: [Gitlab](../openid/example-gitlab.html), [Okta](../openid/example-okta.html)) und
im [AdminCenter](../openid/config-admincenter.html) vorzunehmen.

Das AutoLogin Skript wurde dahingehend erweitert, dass im Script jetzt zusätzliche Parameter wie z.B. das
OpenID-Token zur Verfügung stehen, mit denen weitere Abfragen für den Benutzer durchgeführt werden können.

Bei einer *Aktualisierung von Documents 5 auf documentsOS* mit bestehender OpenID Anbindung werden vorhandene
Konfigurationen automatisch übernommen und können in der Folge im [AdminCenter](../openid/config-admincenter.html)
bearbeitet werden.

**Hinweis:** Derzeit ist mit einer OpenID-Anbindung noch kein Benutzerimport möglich, nur eine Authentifizierung gegen
den entsprechenden Anbieter kann durchgeführt werden.

[PDF Version](../openid/openid-intro-d6.pdf?b=2026-02-12)