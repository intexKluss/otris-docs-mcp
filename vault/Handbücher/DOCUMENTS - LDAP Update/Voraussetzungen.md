---
title: "Ldap-Update"
source: "https://otris.software/documents/manuals/books/ldap-update-doc/wizdocupdate/Update.html#voraussetzungen-"
---

# Ldap-Update


## Voraussetzungen

Vorausgesetzt wird, dass eine bestehende, vollständig konfigurierte Ldap-Kopplung vorliegt:

- beim Mandanten sind entsprechende Eigenschaften (Ldap-Properties) vorhanden
- oder es existieren angepasste LdapParamDomain-Skripte und eventuell durchgeführte Skriptänderungen (s.u.) sind als Skripte unter Documents->Scripte vorhanden

Sind diese Skripte nicht vorhanden, wird davon ausgegangen, dass keine Anpassungen vorgenommen wurden.
Die Objekte werden im Rahmen der Installation neu erstellt und müssen bei einem Update nicht gesichert werden.

Änderungen an der Ldap-Kopplung könnten in folgenden Skripten vorliegen:

- LdapDomainInclude - wenn eine Konfiguration mehrerer Domänen vorgenommen wurde oder ein bestimmtes LdapParamDomain-Skript benutzt werden soll.
- LdapParamDomain - wenn Änderungen an der Default-Ldapkonfiguration vorgenommen wurden.
- LdapCallbackFunctions - wenn Änderungen an den Callbacks vorgenommen wurden.

**Wichtige Hinweise**:

Es sollten außer den oben aufgeführten Dateien keine anderen Ldap-Skripte in `Documents->Scripte` vorhanden sein. Diese stammen unter Umständen aus einer älteren Ldap-Version und können die Funktionalität der Ldap-Kopplung gefährden. Diese Skripte sollten gesichert und anschließend gelöscht werden.

Sollte das Skript `LdapUserAttributes` vorhanden sein und wurden in diesem Änderungen vorgenommen, so sind diese in dem Skript `LdapCallbackFunctions`
im Abschnitt `callbackUserSetUserAttributes`  zu integrieren. Die Funktion ist dann ensprechend einzukommentieren.
In dem Skript `LdapUserAttributes` sollten grundsätzlich keine Anpassungen vorgenommen werden, diese sind ausschließlich in dem Skript `LdapCallbackFunctions` vorzunehmen.

Änderungen im Verzeichnis `server\scriptlibs\Ldap` sollten generell nicht vorgenommen werden, da das Verzeichnis bei Updateinstallationen überschrieben wird.

Ein gegebenenfalls vorhandenes Skript `LdapContractSupport` sollte weder gelöscht noch geändert werden. Dieses Skript wird im Rahmen einer Contract-Installation angelegt und von dieser verwaltet. Es ist nicht Bestandteil der Ldap-Kopplung. Gleiches gilt natürlich auch für Ldap-Skripte, die aus anderen Installationen stammen.


## Installationsarten

Eine Ldap-Kopplung kann auf 3 verschiedene Arten installiert bzw. konfiguriert sein:

1. Mappenbasierte Installation über einen Import von Mappentyp, Ordner und Skripten und ggfs. ergänzt durch zusätzliche Skripte.
2. Wizardbasierte Installation, die eventuell durch die Bearbeitung von Skripten ergänzt wurde.
3. Rein skriptbasierte oder ergänzende Installation, die über LdapParamDomain und LdapDomainInclude-Skripte konfiguriert wurde.