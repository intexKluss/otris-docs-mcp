---
title: "Testen der Konfiguration"
source: "https://otris.software/documents/manuals/books/ldap-mappe-doc/wizdocmappe/Konfiguration-Mappe-Test.html#testen-der-konfiguration-"
---

# Testen der Konfiguration

Die Verbindung zum LDAP-Server wird beim Speichern der Konfiguration mit dem hinterlegten LDAP-Benutzer getestet, sofern die Option LDAP aktivieren angeschaltet ist. Nach dem Speichern werden oben in der Konfigurationsmappe drei Schaltflächen eingeblendet, mit denen sowohl der LDAP-Job als auch der Login und der Verbinungsaufbau getestet werden können.


## LDAp-Verbindung testen

Klicken Sie auf die Schaltfläche *LDAP-Verbindung testen*, so wird mit den hinterlegten Konfigurationsdaten eine Verbindung zum LDAP-Server aufgebaut. Im Fehlerfall prüfen Sie die Logdatei des Servers auf entsprechende Fehlermeldungen.


![](../wizdocmappepics/testldapconnection.png)

Abb. 7 - Ldap-Verbindung testen


## LDAP-Job

Klicken Sie auf die Schaltfläche *LDAP-Job ausführen*, so können Sie weitere Details im folgenden Dialog aus Abb. 7 abstimmen.


![](../wizdocmappepics/mappe-test-job.png)

Abb. 8 - Ldap-Job testen/ausführen

Für den ersten Lauf des Skripts verwendet Sie bitte die voreingestellten Parameter. Beim Ausführen des Skripts sollte eine ähnliche Ausgabe
wie die folgende erzeugt werden.


![](../wizdocmappepics/mappe-emulate.png)

Abb. 9 - Ldap-Job emulieren

Ist die Option *Import nur emulieren* aktiviert, so werden bei der Durchführung des Jobs keine Benutzer im DOCUMENTS angelegt oder deren Zugriffsrechte geändert. Es werden auch keine Zugriffsprofile erzeugt oder Zuordnungen zu den Profilen vorgenommen. Angezeigt wird, welche User gesperrt und welche User aus dem LDAP neu angelegt werden würden. Wenn nach Durchführung die im Dialog angezeigten Werte plausibel erscheinen, können Sie den LDAP-Job erneut ausführen und dieses Mal die Option *Import nur emulieren* auf *Nein* setzen. Erst jetzt erfolgt ein tatsächlicher Import, und es werden die Benutzerkonten und Zugriffsprofile angelegt.

Wenn das LDAP-Job Skript erfolgreich ausgeführt wurde, können Sie in der Konfigurationsmappe den Bereich *Konfiguration des Synchronisationsjobs* ausfüllen und aktivieren.


## LDAP-Login

Analog zum LDAP-Job kann ein Logintest für einen bestimmten User unter Angabe seines Passwortes durchgeführt werden. Import, Profilzuweisung und Rechtevergabe werden nur durchgeführt, wenn die Option *Import emulieren* auf *Nein* gesetzt ist.


![](../wizdocmappepics/mappe-login-emulate.png)

Abb. 10 - Ldap-Login emulieren