---
title: "Vor der Installation einer neueren Ldap-Kopplung"
source: "https://otris.software/documents/manuals/books/ldap-update-doc/wizdocupdate/Update-BeforeUpdate.html#vor-der-installation-einer-neueren-ldap-kopplung-"
---

# Vor der Installation einer neueren Ldap-Kopplung


## Sichern von Mappentyp, Ordner und Skripten

Je nach Installationsart sollten folgende Sicherungen vor einem Update durchgeführt werden:

- (1) Sichern des Mappentypen otrLdapConfiguration Wurden am Mappentypen Änderungen vorgenommen z.B. bei dessen Verrechtung, so sollte auf dem Detaildialog ein XML Export vorgenommen werden, damit nach dem Einspielen des aktuellen Mappentypes diese Änderungen entsprechend nachgezogen werden können.
- (1) Sichern des öffentlichen Ordners otrLdapConfiguration Wurden am Ordner Änderungen vorgenommen z.B. bei seiner Verrechtung oder Ordnerstruktur, so sollte auf dem Detaildialog ein XML Export vorgenommen werden, damit nach dem Einspielen des aktuellen Ordners diese Änderungen später entsprechend hinzugefügt werden können.
- (1)(2)(3) Sichern des Skripte LdapCallbackFunctions Wurden in dem Skript LdapCallbackFunctions Änderungen in einem oder mehreren der Callbacks vorgenommen, sollte das Skript gesichert werden. Dies kann durch einen XML-Export auf dem Detaildialog geschehen oder dadurch, dass der Skriptinhalt in einer Textdatei gespeichert und somit später zur Verfügung steht.


## Löschen von Mappentyp, Ordner, Vorgang und Skripten

Je nach Installationsart müssen folgende Löschungen vor einem Update durchgeführt werden:

- (1) Löschen der Konfigurationsmappe Der aus dem Mappentyp erzeugte Vorgang, d.h. die Mappe, in der bei der Konfiguration u.a. die Verbindungsdaten eingetragen werden, muss gelöscht werden. Abb. 1 - Löschen der Konfigurationsmappe Monitoring->Vorgänge->de:LDAP-Konfiguration vom...
- (1) Löschen des Mappentypen otrLdapConfiguration Abb. 2 - Löschen des Mappentypen
- (1) Löschen des öffentliche Ordners otrLdapConfiguration (Öffentlich...). Abb. 3 - Löschen des Ordners
- (1)(2)(3) Löschen des Skriptes LdapCallbackFunctions