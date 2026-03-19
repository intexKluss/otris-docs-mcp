---
title: "MS Office Dateien nach PDF konvertieren"
source: "https://otris.software/documents/manuals/books/installation-linux/libreoffice7.html"
---

# MS Office Dateien nach PDF konvertieren

Anhänge in DOCUMENTS Mappen können zu verschiedenen Zwecken nach PDF Konvertiert werden. (Z.B. wenn die Mappe als PDF gedruckt werden soll oder auch in der direkten Anzeige über das Property `showBlobAsPdf`). Diese Konvertierung kann mit Hilfe von LibreOffice 7 durchgeführt werden. Dazu muss LibreOffice 7 installiert werden.


## Installation

Zu den Documents Paketen wurde das Paket `documents5-libreoffice` zugefügt. Darüber kann alles, was für die Verwendung von LibreOffice 7 benötigt wird, installiert werden. Die empfohlenen Abhängigkeiten sollten an dieser Stelle nicht mit installiert werden.

Damit die Dokumente bei der Konvertierung möglichst ihre originalen (Microsoft) Fonts beibehalten, wird bei der Installation außerdem das Paket `ttf-mscorefonts-installer` installiert. Dieses Paket ist von Ubuntu und installiert einige *frei nutzbare* Core Fonts von Microsoft. Weitere Informationen dazu gibt es [hier](https://wiki.ubuntu.com/Fonts). Die Seite ist leider etwas älter aber bis heute weitgehend gültig.


### Bis Ubuntu 20.04

Der folgende Befehl muss für Ubuntu Distributionen bis 20.04 verwendet werden. Ab 22.04 kann der Befehl angepasst verwendet werden um ein neueres Libreoffice zu installieren. Ggf. muss die 5 in `documents5` durch 6 ersetzt werden.


```sh
apt install --no-install-recommends -t focal-backports libreoffice documents5-libreoffice
```

apt install --no-install-recommends -t focal-backports libreoffice documents5-libreoffice
### Ab Ubuntu 22.04

Ab Ubuntu 22.04 ist es nicht zwingend notwendig das Paket aus dem Backports Repository zu installieren. Libreoffice kann einfach mit dem folgenden Befehl installiert weden. Ggf. muss die 5 in `documents5` durch 6 ersetzt werden.


```sh
apt install --no-install-recommends documents5-libreoffice
```

apt install --no-install-recommends documents5-libreoffice
## Konfiguration


### documents.ini

Weiterhin wird mit dem Paket `documents5-libreoffice` auch das Skript `/usr/lib/documents5/createpdf/convert/libreoffice/office2pdf` installiert. Ggf. muss die 5 in `documents5` durch 6 ersetzt werden. Um das Script zu aktivieren, müssen in der Datei `/etc/documents5/documents.ini` die folgenden Zeilen (durch entfernung der Auskommentierung!) eingefügt werden.


```sh
# Configuration for LibreOffice 7 to convert office.formats to pdf
$convert.xlsx [INSTALLDIR]/../createpdf/convert/libreoffice/office2pdf %inputWithExt %output
$convert.xls [INSTALLDIR]/../createpdf/convert/libreoffice/office2pdf %inputWithExt %output
$convert.docx [INSTALLDIR]/../createpdf/convert/libreoffice/office2pdf %inputWithExt %output
$convert.doc [INSTALLDIR]/../createpdf/convert/libreoffice/office2pdf %inputWithExt %output
```

# Configuration for LibreOffice 7 to convert office.formats to pdf
$convert.xlsx [INSTALLDIR]/../createpdf/convert/libreoffice/office2pdf %inputWithExt %output
$convert.xls [INSTALLDIR]/../createpdf/convert/libreoffice/office2pdf %inputWithExt %output
$convert.docx [INSTALLDIR]/../createpdf/convert/libreoffice/office2pdf %inputWithExt %output
$convert.doc [INSTALLDIR]/../createpdf/convert/libreoffice/office2pdf %inputWithExt %output
### Properties

Um Office Dokumente im Web direkt als PDF darstellen zu können, müssen noch die folgenden Properties in den Einstellungen gesetzt werden.


```javascript
showBlobAsPdf=doc,docx,xls,xlsx
showBlobAsPdfInDocEditMode=0
```

showBlobAsPdf=doc,docx,xls,xlsx
showBlobAsPdfInDocEditMode=0