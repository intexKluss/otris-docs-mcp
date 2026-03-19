---
title: "OpenID"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/openid/openid-intro-d5.html"
---

# OpenID

Since version 5.0h HF1 DOCUMENTS allows a user login with the help of OpenID providers.

Before use, the following **necessary configurations** must be made with the
provider used (examples: [Gitlab](../openid/example-gitlab.html), [Okta](../openid/example-okta.html)),
in [Tomcat](../openid/config-tomcat.html) and in the [Documents Manager](../openid/config-manager.html), after which login can
be enabled using the [OpenIDConfig](../openid/config-openid-config.html).

The AutoLogin script has been extended so that additional parameters such as the JSON Web Token (JWT) are now available
in the script, which can be used to read out further information about the user.

**Note:** Currently no user import is possible with an OpenID connection, only an authentication against the
corresponding provider can be performed.

[PDF Version](../openid/openid-intro-d5.pdf?b=2026-02-12)