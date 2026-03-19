---
title: "Installation der neuen Ldap-Kopplung"
source: "https://otris.software/documents/manuals/books/ldap-update-doc/wizdocupdate/Update-Install.html#installation-der-neuen-ldap-kopplung-"
---

# Installation der neuen Ldap-Kopplung

Je nach Installationsart erfolgt die neue Bereitstellung wie folgt:

(1) Installation einer mappenbasierten Konfiguration wie in `DOCUMENTS - LDAP Integration (Mappe)`beschrieben.

(2) Die Wizardbasierte Installation ist standardmäßig enthalten, es bedarf keiner weiteren Installation.

(3) Alle notwendigen Scripte befinden sich bereits im Datenbestand, es bedarf keiner weiteren Installation.

(1)(2)(3) Bei allen Installationsarten muss ein `XML-Import` der Datei `server\scriptlibs\Ldap\LDAP_UserScripts.xml` durchgeführt werden. Dabei werden 3 Skripte angelegt, in denen Änderungen an der Ldap-Konfiguration vorgenommen werden können.


![](../wizdocupdatepics/importScriptLibs.png)

Abb. 4 - Importieren der UserScripts.xml