---
title: "LdapJob - LdapLogon"
source: "https://otris.software/documents/manuals/books/ldap-callbacks-doc/wizdoccallbacks/Konfiguration-LdapJob.html#ldapjob-ldaplogon"
---

# LdapJob - LdapLogon

Öffnen Sie das Skript `prxLdapJob` oder `LdapJob`und wechseln Sie in das Register `Test`. Geben Sie hier den Benutzer-Login eines administrativen *Documents* Benutzers ein. Auf dem Register `Job` kann eingestellt werden, in welchen zeitlichen Abständen der Synchronisationsjob automatisch gestartet werden soll.

Um die Synchronisation manuell zu starten, verwenden Sie auf dem Register `Allgemein` die Schaltfläche `Skript ausführen`.


![](../wizdoccallbackspics/ldapjob_1.png)

Abb. 2 - LdapJob

Um letztlich den Login mit LDAP-Verbindung zu aktivieren, muss noch eine Eigenschaft `loginScript` mit dem Wert `LdapLogon` am Mandanten hinzugefügt werden. Besitzt die Eigenschaft den Wert `LdapLogon`, so wird das Skript im Skript-Ordner ausgeführt. Besitzt die Eigenschaft den Wert `Ldap.LdapLogon`, so wird das Skript `LdapLogon#.js` aus dem Dateiverzeichnis `\server\scriptlibs\Ldap` ausgeführt.


![](../wizdoccallbackspics/ldaplogon_1.png)

Abb. 3 - LdapLogon-Property