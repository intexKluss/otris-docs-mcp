---
title: "Basis-Zugangskonfiguration LDAP"
source: "https://otris.software/documents/manuals/books/ldap-mappe-doc/wizdocmappe/Konfiguration-Mappe-Basis.html#basis-zugangskonfiguration-ldap-"
---

# Basis-Zugangskonfiguration LDAP

Melden Sie sich an *Documents* an und öffnen Sie in der Ordnerstruktur den Eintrag *LDAP-Konfiguration*.


![](../wizdocmappepics/mappe-1.png)

Abb. 3 - LDAP-Konfigurationsmappe

Folgende Einstellungen sind auf der Mappe zu berücksichtigen:


## LDAP aktivieren (LdapActive)

Wird diese Option aktiviert, so wird beim Speichern der Mappe die Konfiguration überprüft und eine LDAP-Verbindung zu dem angegebenen LDAP-Server aufgebaut. Schlägt der Verbindungsaufbau fehl, so kann die Mappe nur gespeichert werden, wenn die Option deaktiviert wird. In diesem Fall wird auch außerhalb der Konfigurationsmappe kein Ldap-Job und kein Ldap-Logon ausgeführt. Die Skripte können aber wie weiter unten geschildert ausgeführt und getestet werden.


## Port (LdapPort)

Hier ist der Port anzugeben unter dem der LDAP-Server Anfragen entgegennimmt und beantwortet. In der Regel wird dies der Standardport 389 oder in Verbindung mit SSL der Port 636 sein, beachten Sie aber, dass es je nach verwendeten LDAP-Server zu Abweichungen kommen kann.


## Hostname des LDAP-Domänenservers (LdapHostname)

Vollständiger Name (*FQDN*) des LDAP-Domänenservers.

Beispiel:


```javascript
w2k8peachit.peachit.local
```

w2k8peachit.peachit.local
## SSL - Zertifikatsdatei (LdapCaCertFile)

Wird SSL aktiviert, so wird der *Documents*-Server die Verbindung zum LDAP-Server über *OpenSSL* vornehmen. Es muss daher eine entsprechende Zertifikatsdatei an einer Stelle abgelegt werden, auf die der *Documents*-Server zugreifen kann. Die Datei muss an dem angegebenen Ort auf dem Server liegen. Sie wird nicht vom Wizard übertragen und dort abgelegt. Ab der Serverversion *5.0h HF2* kann auch der Windows-Zertifkatsspeicher direkt verwendet werden.

Hinweis ab Serverversion 5.0h HF2:

Wenn in der `documents.ini` im Serververzeichnis der folgende Eintrag gesetzt ist, so kann die Angabe einer Zertifikatsdatei unterbleiben:
`CAPath WinCertStore`
Bei Serverstart werden die CA-Zertifikate aus dem Windows-Zert-Store in das Verzeichnis `/server/certs` exportiert und stehen damit für *OpenSSL* zur Verfügung. Das benötigte Zertfikat muss sich natürlich bereits im Zertifikatsspeicher befunden haben, damit eine SSL-Verbindung hergestellt werden kann.

Wird eine Zertifikatsdatei im Wizard eingetragen, so wird diese auch verwendet. Der Eintrag in der Ini-Datei wird dann nicht weiter beachtet.

Allgemeiner Hinweis:

Behalten Sie immer den Überblick über den Gültigkeitszeitraum der verwendeten Zertifikate. Wenn die Zertifikate abgelaufen oder aus anderen Gründen ungültig geworden sind, kann keine Verbindung aufgebaut werden. Ein Login/Import wird fehlschlagen.

Wenn Änderungen am SSL-Zertifikat oder am Dateipfad vorgenommen wurden, kann es notwendig sein den *Documents*-Server neu zu starten, da die *OpenLDAP/OpenSSL*-Schnittstelle die Zertifikate cached.


## LDAP Verweise folgen - 2.2.5

Antwortet der LDAP-Server auf einen Request oder einer Suchanfrage mit einem Verweis auf einem anderen LDAP-Server, so kann hier festgelegt werden, ob der *Documents*-Server die Anfrage auf den verwiesenen Server weiterleiten soll. Dabei muss sichergestellt sein, dass die Netwerkadresse des LDAP-Servers aufgelöst und eine LDAP-Anmeldung an diesen erfolgen kann. Ab der Serverbuildnummer  2311, dies entspricht der Version *5.0h HF1* und der LDAP-Version *2.2.5*, kann der Wert auch auf *false* gesetzt werden. Der Default-Wert ist *true*.


## Wurzelstruktur des LDAP (LdapBaseDN)

Geben Sie hier einen *Startknoten* bzw. ein *Wurzelverzeichnis* im LDAP-System an. Mit dieser Einstellung legen Sie eine *Suchbasis* für sämtliche LDAP-Strukturen fest. Möglichkeiten zur Eingrenzung der zu durchsuchenden Strukturen erfolgen bei der Konfiguration der Benutzer und Gruppen (vgl. das folgende Kapitel 3.1.2).

Beispiel:


```javascript
DC=peachit,DC=local
```

DC=peachit,DC=local
## Default-Lizenzart (LdapLicenseType)

Abhängig von den vorhandenen Lizenzen kann entschieden werden, welche *Lizenzart* (named, concurrent_standard, concurrent_open oder shared ) neu synchronisierten Benutzern standardmäßig zugewiesen wird.


## DN eines LDAP-Users mit vollem Lesezugriff (LdapLoginDN)

Für den Zugriff auf das LDAP-System wird ein Benutzer benötigt, der Lesezugriff auf die gesamte LDAP-Struktur hat.

Beispiel:


```javascript
CN=LDAP-Sync-Konto,CN=Users,DC=peachit,DC=local
```

CN=LDAP-Sync-Konto,CN=Users,DC=peachit,DC=local
## Password des LDAP-Users (LdapPassword)

Tragen Sie hier das *Passwort* des oben genannten Benutzers ein. Ab der LDAP-Version *2.3* wird das Passwort beim Speichern der Mappe nach dem "AES 256 CBC"-Algorithmus verschlüsselt beim Mandanten hinterlegt. In den Vorgängersionen  *<= 2.2.5* geschah dieses noch im Klartext.