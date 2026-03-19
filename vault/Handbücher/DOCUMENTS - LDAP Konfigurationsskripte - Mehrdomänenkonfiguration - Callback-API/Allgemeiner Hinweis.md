---
title: "LDAP Konfigurationsskripte - Mehrdomänenkonfiguration - Callback-API - Zugang ohne Synchronisation - LdapJob - LdapLogon"
source: "https://otris.software/documents/manuals/books/ldap-callbacks-doc/wizdoccallbacks/Konfiguration-Callbacks.html#allgemeinerhinweis"
---

# LDAP Konfigurationsskripte - Mehrdomänenkonfiguration - Callback-API - Zugang ohne Synchronisation - LdapJob - LdapLogon


## Allgemeiner Hinweis

Generell zu beachten ist, dass die vom Active-Directory Server (Microsoft/Windows Server) abweichenden LDAP-Server Installationen nicht im Rahmen des Standardsupports unterstützt werden. Dies gilt auch für die cloudbasierten AD-Lösungen von Microsoft/ Windows oder für spezielle unternehmensspezifische AD-Konfigurationen, die sich in ihrem Aufbau weit von den Strukturen entfernen, wie sie in diesem Dokument dargestellt werden. Abweichenden Systeme (Novell, Domino, Univention, OpenDJ usw.)
werden von der Schnittstelle zwar grundsätzlich bereit gestellt, erfahrungsgemäß kann es aber bei der Installation solcher LDAP-Lösungen zu Problemen kommen, bei denen Analyse-, Konfigurations- oder ggfs. auch Implementierungsaufwand entsteht. Daher sollte bei der Installation solcher „abweichenden“ Systeme oder bei Berücksichtigung besonderer AD-Konfigurationen im Vorhinein eine projektbegleitende Unterstützung vereinbart werden.


## Update einer bestehenden Installation

Wenn, wie im Folgenden dargestellt, Anpassungen in den Skripten `LdapParamDomain` , `LdapDomainInclude` und `LdapCallbackFunctions` vorgenommen werden, dann sind die Hinweise aus dem Dokument `DOCUMENTS - LDAP Update` zu beachten, damit die gemachten Änderungen übernommen werden.