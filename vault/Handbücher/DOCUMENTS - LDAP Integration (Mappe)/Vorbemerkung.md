---
title: "Einrichtung mit Hilfe der Konfigurationsmappe"
source: "https://otris.software/documents/manuals/books/ldap-mappe-doc/wizdocmappe/Konfiguration-Mappe.html#vorbemerkung-"
---

# Einrichtung mit Hilfe der Konfigurationsmappe


## Vorbemerkung

Aufgabe der Mappenkonfiguration ist es alle Daten für einen LDAP-Anschluss zu sammeln, aufzuarbeiten und diese im Mandanten zu hinterlegen. Wird ein LDAP-Import oder eine Anmeldung (Logon) vorgenommen, so werden die Mandantendaten in der Schnittstelle für den LDAP-Anschluss ausgelesen, verarbeitet und dann an den *Documents*-Server, der letztendlich die eigentliche Verbindung zu dem LDAP-Server herstellt, weitergereicht.

Beachten Sie, dass die in der Mappe erfassten Daten erst beim Speichern der Mappe beim Mandanten hinterlegt werden.

Die Serververbindung zum LDAP-Server wird über [OpenLDAP](https://www.openldap.org), einer Implementierung des Lightweight Directory Access Protokolls (LDAP), hergestellt. Eine SSL-Verbindung des Servers wird ggfs. über [OpenSSL](https://www.openssl.org) aufgebaut.


## Voraussetzungen

- Ein LDAP-Browser sollte installiert sein und zur Verfügung stehen. Auf diesem Wege können Distinguished Names (DNs) ausgelesen und aus dem Verzeichnis kopiert werden, ohne Schreibfehler zu verursachen. Gleiches gilt für die Eingabe von Anmeldedaten. Insgesamt kann damit eine Reihe möglicher Fehlerquellen reduziert werden.

Wenn Ihre *Documents*-Installation nicht mit einem EASY Archive verbunden ist, muss die Checkbox „Neue Benutzer automatisch mit Archiv-Zugriff" deaktiviert werden. Diese Einstellung erfolgt im *Documents*-Manager im `Hauptmenüzeile -> Documents -> Einstellungen` auf dem Register Archiv (Basis).


![](../wizdocmappepics/archiv.png)

Abb. 1 - Einstellung für den Betrieb ohne Anbindung an ein EASY-Archiv


## Installation der LDAP-Integration

Führen Sie folgende Schritte in der genannten Reihenfolge durch:

- Melden Sie sich als admin unter Angabe des Mandanten am Documents-Manager an.
- Importieren Sie folgende Datei aus dem Verzeichnis server\scriptlibs\Ldapüber das Menü Hauptmenüzeile -> Servereinstellungen -> XML-Import. Dabei werden Portalskripte, der Mappentyp otrLdapConfiguration und der "öffentliche Ordner" otrLdapConfiguration importiert. LDAP_Import.xml Bei einer LDAP-Version < 2.3 müssen folgende Dateien in der angegebenen Reihenfolge importiert werden: 01_LDAP_Scripts.xml
02_LDAP_ConfigurationFiletype.xml
03_LDAP_ConfigurationFolder.xml


![](../wizdocmappepics/mappe-install-1.png)

Abb. 2 - XML- Import der LDAP_Import.xml

Die *LDAP-Integration* kann nun mit Hilfe der soeben importierten Skripte konfiguriert werden.

Hinweis:

Beachten Sie bitte, dass die importierten Objekte nach dem Import im *Documents*-Manager manuell mit *Mappen- und Ordnerzugriffsrechten* eingeschränkt werden sollten. Vergeben Sie exklusive Schreib- und Leserechte für ein administratives Zugriffsprofil.

Die Installation der benötigten Komponenten ist damit abgeschlossen.


## Update einer bestehenden LDAP-Integration

Wurden Änderungen am Mappentypen, Ordner oder bei den Skripten `LdapParamDomain`, `LdapDomainInclude` und `LdapCallbackfunctions` vorgenommen, dann beachten Sie bei einem Update die gesonderte Dokumentation `DOCUMENTS - LDAP Update`.