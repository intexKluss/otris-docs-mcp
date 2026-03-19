---
title: "ActiveX DropZone für Internet Explorer 11"
source: "https://otris.software/documents/manuals/books/localediting-activex-dropzone/Installation-ActiveX-DropZone.html"
---

# ActiveX DropZone für Internet Explorer 11


## Lokale Installation der ActiveX DropZone für den Internet Explorer 11

Vor der Benutzung der ActiveX DropZone muss diese erst als Add-On für den Internet Exlorer 11 installiert werden. Wenn diese einmal für den angemeldeten Windows-Benutzer oder für alle Benutzer installiert ist, wird das Add-On automatisch aktiviert, wenn mit dem Internet Explorer 11 der DOCUMENTS 5 Web-Client aufgerufen wird.

Die ActiveX DropZone für den Internet Explorer 11 kann auf zwei verschiedene Arten auf den Client-Rechnern installiert werden:

1. Implizite Installation beim ersten Aufruf des DOCUMENTS 5 Web-Clients
2. Installation per msi-Setup


### 1. Implizite Installation beim Aufruf des DOCUMENTS 5 Web-Clients

Nach der ersten Anmeldung an DOCUMENTS 5 mit dem  Internet Exlorer 11, wird der Benutzer gefragt, ob das Add-On installiert werden soll.


![activex-install-browser](activex-install-browser.png)

Abb. 1 - Browser

Ob im folgenden die Installation des Add-On möglich ist, hängt von den den lokalen Sicherheitsrichtlinien bzw. Gruppenrichtlinien für den Internet Explorer 11 ab.
Der seit Internet Explorer 10 bzw. Windows 8 standardmäßig aktivierte "Geschützte Modus" des Internet Explorers schränkt die Installationsmöglichkeiten ein.

Wenn der Benutzer Administrator-Rechte besitzt, ist die Installation des Add-On in der Regel möglich. Ein Benutzer mit Administrator-Rechten kann das Add-On für sich oder "Für alle Benutzer installieren".

Ein Benutzer, der "nur" ein Standardbenutzer oder Domänen-Benutzer ist, kann in der Regel das Add-On nicht installieren, solange die URL der DOCUMENTS 5 Webseite noch nicht der "Vertrauenswürdigen" Zone zugeordnet ist. Wird die URL als "Vertrauenswürdige Site" definiert, ist standardmäßig der "Geschützte Modus des IE" deaktiviert und der Benutzer kann das Add-On für sich installieren.

Informationen über den Installationsort und Version können dann im Internet Explorer 11 unter "Add-Ons verwalten" > "Dropzone LocalEdit Tool" und "Dropzone Control" abgerufen werden.


### 2. Installation per msi-Setup

Alternativ kann die DropZone auch per Setup installiert werden. Im Installationsverzeichnis `documents5\addon\localediting` befinden sich die folgenden Setups:

- Dropzone_IE_x64_de.msi
- Dropzone_IE_x86_de.msi
- Dropzone_IE_x64_en.msi
- Dropzone_IE_x86_en.msi

Die Architekturangabe x86/x64 bezieht sich auf den verwendeten Internet Explorer 11. Für den 32-bit Version des IE 11 muss die x86-Variante installiert werden - für die 64-bit Version analog die x64-Variante.

Bei der nächsten Anmeldung an DOCUMENTS 5 mit dem Internet Explorer 11 fragt dieser dann nach, ob das Add-On aktiviert werden soll, was dann zuzustimmen ist.


## Remote Installation der ActiveX DropZone für den Internet Explorer 11 per Gruppenrichtlinien

Wenn ein Domänen-Controller in der Systeminfrastruktur verwendet wird, dann können die oben im Rahmen der lokalen Installation dargestellten Installationsmöglichkeiten auch per Gruppenrichtlinien durchgeführt werden.


### 1. Gruppenrichtlinie, um die DOCUMENTS URL als trusted Site zu definieren

Hier als Beispiel ein Screenshot wie die DOCUMENTS URL `http:\\dopaagmember2.dopaag.local` als Trusted Site an die Domänenbenutzer provisioniert wird. Dafür muss eine Gruppenrichtlinie angelegt werden in:

`Benutzerkonfiguration > Richtlinien > Administrative Vorlagen > Windows Komponenten >``Internet Explorer > Internetsystemsteuerung > Sicherheitsseite > Liste der Site zu Zonenzuweisungen`


![activex-gpo-trusted-site](activex-gpo-trusted-site.png)

Abb. 2 - GPO trusted site

Im Browser stellt sich das dann wie folgt dar:


![activex-browser-gpo-ts](activex-browser-gpo-ts.png)

Abb. 3 - Browser GPO trusted site


### 2. Gruppenrichtlinie, um das Dropzone-msi Setup zu verteilen

Hier als Beispiel ein Screenshot, wie die Installation der ActiveX DropZone bei Anmeldung des Benutzers an sein Windows System automatisch während des Anmeldevorgangs durchgeführt wird.
Dafür muss eine Gruppenrichtlinie angelegt werden in:

`Benutzerkonfiguration > Richtlinien > Softwareeinstellungen > Softwareinstallation`


![activex-gpo-install-dropzone](activex-gpo-install-dropzone.png)

Abb. 4 - GPO install dopzone

Hinweise:

- mit dem Komandozeilen-Befehl gpupdate kann auf den Windows-Client Rechner erzwungen werden, dass sich dieser vom Domänen-Controller die aktuellen Gruppenrichtlinien direkt neu holt (normalerweise geschieht dies sonst nur in periodischen Abständen - z.T. 90 Minuten)
- die Bereitstellungsquelle, wo sich das msi-Paket befindet, muss sich in einer Netzwerkfreigabe befinden, auf die das Systemkonto des Windows-Client Rechners Lesezugriff hat, da die Installation der DroZone entsprechend der Installation-Gruppenrichtlinie im Kontext des Systemkontos vor der Anmeldung des Benutzers durchgeführt wird.