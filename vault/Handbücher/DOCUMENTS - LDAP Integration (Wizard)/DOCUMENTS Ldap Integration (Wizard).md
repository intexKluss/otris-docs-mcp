---
title: "Konfigurationswizard"
source: "https://otris.software/documents/manuals/books/ldap-wizard-doc/wizdoc/Konfiguration.html"
---

# Konfigurationswizard


## Vorbemerkung

Aufgabe des Wizards ist es alle Daten für einen LDAP-Anschluss zu sammeln, aufzuarbeiten und diese im Mandanten zu hinterlegen. Wird ein LDAP-Import oder eine Anmeldung (Logon) vorgenommen, so werden die Mandantendaten in der Schnittstelle für den LDAP-Anschluss ausgelesen, verarbeitet und dann an den *Documents*-Server, der letztendlich die eigentliche Verbindung zu dem LDAP-Server herstellt, weitergereicht.

Beachten Sie, dass die im Wizard erfassten Daten vollständig erst im letzten Schritt beim *Fertigstellen* des Wizards geschrieben werden und damit gespeichert werden.

Die Serververbindung zum LDAP-Server wird über [OpenLDAP](https://www.openldap.org), einer Implementierung des Lightweight Directory Access Protokolls (LDAP), hergestellt. Eine SSL-Verbindung des Servers wird ggfs. über [OpenSSL](https://www.openssl.org) aufgebaut.

Ein LDAP-Browser sollte installiert sein und zur Verfügung stehen. Auf diesem Wege können *Distinguished Names* (*DNs*) ausgelesen und aus dem Verzeichnis kopiert werden, ohne Schreibfehler zu verursachen. Gleiches gilt für die Eingabe von Anmeldedaten. Insgesamt kann damit eine Reihe möglicher Fehlerquellen reduziert werden.


## Update einer bestehenden LDAP-Integration

Wurden Änderungen bei den Skripten `LdapParamDomain`, `LdapDomainInclude` und `LdapCallbackfunctions` vorgenommen, dann beachten Sie bei einem Update die gesonderte Dokumentation `DOCUMENTS - LDAP Update`.