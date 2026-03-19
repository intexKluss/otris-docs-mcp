---
title: "Nach der Installation einer neueren Ldap-Kopplung"
source: "https://otris.software/documents/manuals/books/ldap-update-doc/wizdocupdate/Update-AfterUpdate.html#nach-der-installation-einer-neueren-ldap-kopplung-"
---

# Nach der Installation einer neueren Ldap-Kopplung


## Übernahme von Änderungen in Mappentyp, Ordner und Skripten

Je nach Installationsart sind folgende Änderungen durchzuführen:

- (1) Änderungsübernahme beim Mappentypen otrLdapConfiguration: Der Mappentyp liegt nach der Installation in der aktuellen Version vor. Nun müssen anhand des gesicherten XML-Exportes die Änderungen im aktuellen Mappentyp nachgezogen werden (z.B. Hinterlegung von vorher konfigurierten Berechtigungen, usw.). Hinweis: Es darf nicht der gesicherte Mappentyp über den XML-Import importiert werden, da dieser die aktuelle Version überschreiben würde. Die Anpassungen müssen manuell vorgenommen werden.
- (1) Änderungsübernahme beim öffentlichen Ordner otrLdapConfiguration (Öffentlich...): Der öffentliche Ordner liegt nach der Installation in der aktuellen Version vor. Nun müssen anhand des gesicherten XML-Exportes die Änderungen nachgezogen werden (z.B. Hinterlegung von vorher konfigurierten Berechtigungen und / oder Angabe von Oberordnern, usw.). Hinweis: Es darf nicht der gesicherte Ordner über den XML-Import importiert werden, da dieser die aktuelle Version überschreiben würde. Die Anpassungen müssen manuell vorgenommen werden.
- (1)(2)(3) Änderungsübernahme bei den Skripten: Durch den Import der LDAP_UserScripts.xml werden die 3 Skripte LdapDomainInclude_Versionsnummer, LdapParamDomain_Versionsnummer und LdapCallbackFunctions_Versionsnummer angelegt. Die Versionsnummer entspricht dabei der aktuellen Nummer der installierten LDAP-Version. Da die Skripte LdapDomainInclude und LdapParamDomain als Skripte vorhanden sind und diese die vorgenommenen Anpassungen der LDAP-Konfiguration beinhalten, können die Skripte LdapDomainInclude_Versionsnummer und LdapParamDomain_Versionsnummer gelöscht werden. Sie werden nicht weiter benötigt. In dem Skript LdapCallbackFunctions_Versionsnummer müssen nun anhand der angelegten Sicherung des Skriptes LdapCallbackFunctions die einkommentierten Callbacks nachgezogen werden. Dabei darf nur der Inhalt des Callbacks und nicht die Signatur der Callbackfunktion ausgetauscht werden. Die Signatur kann von der früheren Version abweichen! Das Skript LdapCallbackFunctions_Versionsnummer ist danach in LdapCallbackFunctions umzubenennen.


## SSL

Für alle Installationsarten gilt, dass bei Konfigurationen mit SSL-Verbindung ggf. die verwendeten Zertifikate entsprechend der Konfigurationseinstellungen auf dem Dateisystem des Servers abgelegt werden.