---
title: "Konfiguration - Tools"
source: "https://otris.software/documents/manuals/books/ldap-wizard-doc/wizdoc/Konfiguration-Tools.html#konfiguration-tools"
---

# Konfiguration - Tools

Diese Seite wird nur angezeigt, wenn bei der *Konfiguration der Zugangsdaten* die Option *Wizard-Seite mit Zusatzfunktionen anzeigen* aktiviert wurde.


![](../wizdocpics/tools.png)

Abb. 18 - Tools - Hilfswerkzeuge


## Script-User

Um die nachfolgenden Skripte auszuführen, muss hier das Login eines Benutzers angegeben werden, unter dessen Namen diese dann ausgeführt werden. Wurde bereits ein Job-User festgelegt, so wird dessen Eintrag übernommen.


## Dump Konfiguration

Das Skript ermittelt die aktuelle Konfiguration und schreibt die Meldungen in einen kleinen Dialog, von dem sie dann ggfs. in einen Editor kopiert werden können.


![](../wizdocpics/tools-config.png)

Abb. 19 - Dump - Konfiguration


## Mandantenproperties

Das Skript speichert die beim Mandanten hinterlegten LDAP-Properties in ein kleines Skript. Mit Ausführung des Skriptes („Reload Properties Mandantenname -- Datum"), werden die Werte dann wieder beim Mandanten gesetzt. Zur Ausführung des Skriptes ist eine Scripting-Lizenz notwendig.


![](../wizdocpics/tools-reload-1.png)

Abb. 20 - Mandantenproperties speichern![](../wizdocpics/tools-reload-2.png)

Abb. 21 - Mandantenproperties einspielen


## Redakteurproperties -- Benutzerkontenproperties

Die Skripte speichern die bei den Benutzern (Partneraccount) bzw. Redakteuren (Fellow) gesetzten LDAP-Properties jeweils in ein eigenes Skript. Werden diese ausgeführt, so werden diese Werte bei den Usern wieder gesetzt. Damit kann vor der Durchführung eines Importes eine Art Sicherheitskopie der User erzeugen und ggfs. auf den Zustand vor dem Import wieder zurückgesetzt werden.
Zur Ausführung wird eine Scripting-Lizenz benötigt.


![](../wizdocpics/reload-partneraccount.png)

Abb. 22 - Partneraccount - Fellows speichern

Hinweis:

Das Skript speichert nur die bei den Systemusern hinterlegten LDAP-Properties, es erzeugt keine Sicherheitskopie des Systemusers an sich.


## Mandantenproperties als LdapParamDomain speichern

Das Skript erzeugt aus den Mandantenproperties ein *LdapParamDomain*-Konfigurationsskript, das dann in eine *Multi-Domain-Konfiguration* eingebunden werden kann. Das `LdapPassword` wird bei diesem Vorgang nicht kopiert. Der Wizard sollte vorher einmal fertigestellt oder ein Import vorgenommen werden, damit die Mandantenproperties korrekt gefüllt werden.


![](../wizdocpics/ldapparamdomain.png)

Abb. 23 - LdapParamDomain-Skript erzeugen


## CaCertFile überprüfen

Das Skript startet die „openssl.exe" zur Überprüfung der Validität des angegeben SSL-Zertifikates und zeigt die Meldungen in einem kleinen Dialog an. Sie müssen die von *OpenSSL* direkt erzeugten Meldungen darauf hin prüfen, ob dies für *OpenSSL* ein gültiges Zertifikat ist oder nicht (*Verify return code: 0* (ok)). Wenn der Test fehlschlägt, so kann der Server keine LDAPs-Verbindung aufbauen, da das hinterlegte Zertifikat ungültig ist und eine Verbindung über *OpenSSL* nicht zustande kommen kann. Diese Funktion überprüft nur das Zertifikat an sich, es können sich beim Verbindungsaufbau mit *OpenSSL* auch andere Fehler ergeben.


![](../wizdocpics/tools-ssl.png)

Abb. 24 - SSL-Zertifikat testen


## Login -- Password -- Test Login ausführen --Anmeldung nur emulieren

Unter Angabe des Logins und des Passwortes kann ein Userlogin geprüft werden. Die Einstellung des LogLevels wird dabei von der Wizardseite LDAP Job übernommen. Die Logmeldungen werden nach Durchführung in einem kleinen Dialog angezeigt und können von dort in eine Textdatei kopiert werden.


![](../wizdocpics/logon-emulate.png)

Abb. 25 - LdapLogin für den User schreiber

Wird die Option *Anmeldung nur emulieren* aktiviert, so wird nur geprüft, ob eine Anmeldung mit dem richtigen Passwort erfolgen könnte. In dem Fall, dass der User importiert werden könnte, wird aber keine Neuanlage des Users im DOCUMETS durchgeführt, was bei deaktivierter Option der Fall sein würde. Diese Option wirkt sich nur bei der Anmeldung über den Wizard aus, ihr Wert wird nicht eigens gespeichert.