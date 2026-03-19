---
title: "Konfiguration - Zugangsdaten"
source: "https://otris.software/documents/manuals/books/ldap-wizard-doc/wizdoc/Konfiguration-Zugangsdaten.html#konfiguration-zugangsdaten"
---

# Konfiguration - Zugangsdaten


![](../wizdocpics/zugangsdaten.png)

Abb. 2 - Zugangsdaten erfassen


## LDAP aktiv

Wenn diese Checkbox gesetzt (true) ist, ist es *Documents*-Usern möglich sich beim LDAP-Server anzumelden, da beim Fertigstellen des Wizards die dafür notwendigen Logon-Informationen beim Mandanten hinterlegt werden.

Wird im späteren Durchgang durch den Wizard ein LDAP-Job definiert, der dort als „aktiv" markiert wurde, dann wird der Job wie dort festgelegt, auch ausgeführt.

Wird die Checkbox nicht gesetzt (false), dann ist ein Logon nicht möglich und eventuell bereits beim Mandanten hinterlegten Logon-Informationen werden aus dem Mandanten entfernt. Weiter wird ab der Version `2.3.14` geprüft, ob LDAP deaktiviert ist und der Import und ein Logon in diesem Fall abgebrochen.

Unabhängig vom Zustand der Checkbox kann im Wizard ein definierter Job ausgeführt werden. Ebenso besteht weiterhin die Möglichkeit auf der Wizardseite *Tools* einen Login-Test eines Users durchzuführen. Sie sollten die Checkbox deaktivieren, wenn bereits Daten im Wizard eingetragen wurden, aber noch nicht alle vollständig erfasst wurden oder wenn ungewiss ist, ob die Daten korrekt sind.


## Single Sign-On ist aktiv

Es ist möglich, SSO in Verbindung mit LDAP zu verwenden. Die Konfiguration wird in einer separaten Dokumentation beschrieben.

Nach der erfolgreichen Konfiguration von SSO kann diese Checkbox und damit die Verwendung von SSO in Verbindung mit LDAP aktiviert werden.


## Hostname des LDAP-Domänenservers

Hier ist der vollständige Name (*FQDN*) des LDAP-Domänenserver anzugeben.

Beispiel:

w2k8peachit.peachit.local


## Port

Hier ist der Port anzugeben unter dem der LDAP-Server Anfragen entgegennimmt und beantwortet. In der Regel wird dies der Standardport 389 oder in Verbindung mit SSL der Port 636 sein, beachten Sie aber, dass es je nach verwendeten LDAP-Server zu Abweichungen kommen kann.


## SSL -- SSL Zertifikat

Wird SSL aktiviert, so wird der *Documents*-Server die Verbindung zum LDAP-Server über *OpenSSL* vornehmen. Es muss daher eine entsprechende Zertifikatsdatei an einer Stelle abgelegt werden, auf die der *Documents*-Server zugreifen kann. Die Datei muss an dem angegebenen Ort auf dem Server liegen. Sie wird nicht vom Wizard übertragen und dort abgelegt. Ab der Serverversion *5.0h HF2* kann auch der Windows-Zertifkatsspeicher direkt verwendet werden.

Hinweis ab Serverversion 5.0h HF2:

Wenn in der `documents.ini` im Serververzeichnis der folgende Eintrag gesetzt ist, so kann die Angabe einer Zertifikatsdatei unterbleiben:
`CAPath WinCertStore`
Bei Serverstart werden die CA-Zertifikate aus dem Windows-Zert-Store in das Verzeichnis `/server/certs` exportiert und stehen damit für *OpenSSL* zur Verfügung. Das benötigte Zertfikat muss sich natürlich bereits im Zertifikatsspeicher befunden haben, damit eine SSL-Verbindung hergestellt werden kann.

Wird eine Zertifikatsdatei im Wizard eingetragen, so wird diese auch verwendet. Der Eintrag in der Ini-Datei wird dann nicht weiter beachtet.

Allgemeiner Hinweis:

Behalten Sie immer den Überblick über den Gültigkeitszeitraum der verwendeten Zertifikate. Wenn die Zertifikate abgelaufen oder aus anderen Gründen ungültig
geworden sind, kann keine Verbindung aufgebaut werden. Ein Login/Import wird fehlschlagen!

Wenn Änderungen am SSL-Zertifikat oder am Dateipfad vorgenommen wurden, kann es notwendig sein den *Documents*-Server neu zu starten, da die *OpenLDAP/OpenSSL*-Schnittstelle die Zertifikate cached.


## LDAP Verweise folgen - 2.2.5

Antwortet der LDAP-Server auf einen Request oder einer Suchanfrage mit einem Verweis auf einem anderen LDAP-Server, so kann hier festgelegt werden, ob der *Documents*-Server die Anfrage auf den verwiesenen Server weiterleiten soll. Dabei muss sichergestellt sein, dass die Netwerkadresse des LDAP-Servers aufgelöst und eine LDAP-Anmeldung an diesen erfolgen kann. Ab der Serverbuildnummer  2311, dies entspricht der Version *5.0h HF1* und der LDAP-Version *2.2.5*, kann der Wert auch auf *false* gesetzt werden. Der Default-Wert ist *true*.


## Standard-Lizenzart

Abhängig von den vorhandenen Lizenzen kann festgelegt werden, welche *Lizenzart* neu angelegten Benutzern standardmäßig zugewiesen wird.

| Dialogbezeichner | Technischer Bezeichner |
| --- | --- |
| Concurrent (open) | concurrent_open |
| Concurrent (standard) | concurrent_standard |
| Named | named |
| Shared | shared |

Wenn im Laufe eines Imports Benutzer nicht erzeugt werden können, da  die zugewiesene Lizenz erschöpft ist, wird der Import abgebrochen und eine entsprechende Meldung in die LOG-Datei geschrieben. Die Neuanlage von Benutzern erfolgt dabei erst am Ende des Imports, damit die
zwischenzeitlich evtl. freigewordenen Lizenzen von gesperrten Benutzern bei der Lizenzzählung mit eingerechnet werden können.


## Wurzelstruktur des LDAP

Geben Sie hier einen Startknoten bzw. ein Wurzelverzeichnis im LDAP-System an. Mit dieser Einstellung legen Sie eine Suchbasis, d.h. einen Suchstartpunkt, für sämtliche LDAP-Strukturen fest.


## DN eines LDAP-Users mit vollem Lesezugriff

Für den Zugriff auf das LDAP-System wird ein Benutzer benötigt, der Lesezugriff auf die gesamte LDAP-Struktur hat. Von diesem LDAP-Nutzer ist das Attribut *distinguishedName* (z.B.
CN=LDAP-Sync-Konto,CN=Users,DC=peachit,DC=local) als DN zu verwenden.

Wird keine DN und kein Passwort angegeben, so erfolgt die Anmeldung anonym, was eine entsprechende Konfiguration des LDAP-Servers voraussetzt.


![](../wizdocpics/distinguishedName.png)

Abb. 3 - Distinguished Name


## Password des LDAP-Users

Tragen Sie hier das *Passwort* des oben genannten Benutzers ein. Ab der LDAP-Version *2.3* wird das Passwort nach dem "AES 256 CBC"-Algorithmus verschlüsselt beim Mandanten hinterlegt. In den Vorgängersionen  *<= 2.2.5* geschah dieses noch im Klartext.


## LDAP-Verbindung testen


![](../wizdocpics/anmeldung.png)

Abb. 4 - LDAP Verbindung testen

Fehlermeldungen bei der Anmeldung am LDAP-Server werden dabei aus der *OpenLDAP*/ *OpenSSL*-Schnittstelle an den *Documents*-Server weitergereicht. Nutzen Sie bei Fehlern auch einen LDAP-Browser um Fehler zu identifizieren und näher einschränken zu können.

Die Validität des SSL-Zertifikates können Sie auf der Wizardseite *Tools* gesondert überprüfen, die über die folgende Option eingeblendet werden kann.


## Wizard-Seite mit Zusatzfunktionen einblenden

Wenn Sie die Checkbox aktivieren, so wird eine zusätzliche Seite mit einigen Hilfswerkzeugen (z.B. Validitätsüberprüfung des SSL-Zertifikates, Testlogin eines Users usw.) eingeblendet. Die
Verwendung dieser Tools ist nicht notwendig, um einen Benutzerimport oder Gruppenimport durchzuführen. Die Werkzeuge sollten nur von erfahrenen Benutzern verwendet werden!