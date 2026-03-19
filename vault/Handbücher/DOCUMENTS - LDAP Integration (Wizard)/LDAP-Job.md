---
title: "Konfiguration - LDAP Job"
source: "https://otris.software/documents/manuals/books/ldap-wizard-doc/wizdoc/Konfiguration-Job.html#konfiguration-ldap-job"
---

# Konfiguration - LDAP Job


![](../wizdocpics/gruppenimport.png)

Abb. 15 - Konfiguration des LDAP-Jobs


## Als Job starten

Ist diese Option aktiv, so kann der Importjob automatisch durch den Server zu den unten definierten Uhrzeiten registriert und ausgeführt werden. Der Job wird aber der Version `2.3.14` nur ausgeführt, wenn auf der Seite LDAP-Konfiguration -- Zugangsdaten die Checkbox `LDAP aktiv` angeschaltet ist.


## LogLevel

Hier kann das LogLevel (0 -5) festgelegt werden, mit dem gesteuert wird, welche und wie viele Meldungen bei der Durchführung des Imports in die Logdatei des Servers herausgeschrieben werden. LogLevel 0 (Default) schreibt generelle Meldungen (Start, Stopp, Fehler bei Neuanlage von Benutzern...) in die Logdatei. LogLevel 1 schreibt zusätzlich jede auftretende Exception. LogLevel 2 schreibt darüber hinaus Fehler bei LDAP-Objekten und Lizenzproblemen. LogLevel 3 wird in den Usercallbacks verwendet. LogLevel 4 sollte als Debuglevel nur verwendet werden, wenn eine Analyse des Importes notwendig ist, da die Menge der Logmeldungen sehr umfangreich werden kann. Im Loglevel 5 werden zusätzlich Meldungen für den Cachingmechanismus herausgeschrieben.

Soll der Import direkt aus dem Wizard ausgeführt werden, so sollte bei umfangreichen Importen maximal das LogLevel 2 verwendet werden.

Die aktive Logdatei des Servers kann über *„Hauptmenüzeile->Servereinstellungen->Server-Logs..."* heruntergeladen werden.


![](../wizdocpics/activelog.png)

Abb. 16 - Aktive Logdatei


## Job-User

Hier ist das das Login eines Benutzers anzugeben unter dem das Importskript ausgeführt wird.


## Uhrzeiten -- Ausführung

Hier werden die Uhrzeiten zu denen der Job laufen soll festgelegt. Nach Durchführung des Jobs durch den Server werden die Ausführungszeiten entsprechend gesetzt.


## LDAP-Import jetzt ausführen - Job emulieren

Der Import kann manuell, also unabhängig davon, ob er als Job registriert ist, im Wizard ausgeführt werden, wobei die Logmeldungen nach Durchführung in einem Dialog angezeigt werden. Das LogLevel sollte bei umfangreichen Importen maximal den Wert 2 haben. Zur Ausführung muss oben ein Job-User eingetragen werden.


![](../wizdocpics/ldapjob-import.png)

Abb. 17 - Job ausführen

Ist die Option *Job emulieren* aktiviert, so werden bei der Durchführung des Jobs keine Benutzer im *DOCUMENTS* angelegt oder deren Zugriffsrechte geändert. Es werden auch keine Zugriffsprofile erzeugt oder Zuordnungen zu den Profilen vorgenommen. Angezeigt wird, welche User gesperrt und welche User aus dem LDAP neu angelegt werden würden.

Die Option wirkt sich nur auf den LDAP-Import im Wizard aus und nicht auf das angelegte Job-Skript, das beim automatischen Import aufgerufen wird. Der Wert der Option wird im Wizard nicht eigens gespeichert. Soll also ein regulärer Import über den Button ausgelöst werden, so ist diese jeweils zu deaktivieren.

Sie können den Job auch manuell über das Skript „LdapJob" starten (Menübaum->Documents->Skripte->LdapJob - Skript ausführen).