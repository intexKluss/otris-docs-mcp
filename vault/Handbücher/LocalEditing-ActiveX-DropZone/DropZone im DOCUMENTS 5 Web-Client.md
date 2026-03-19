---
title: "DropZone im DOCUMENTS 5 Web-Client"
source: "https://otris.software/documents/manuals/books/localediting-activex-dropzone/DropZone_Einleitung.html"
---

# DropZone im DOCUMENTS 5 Web-Client

Die folgenden Informationen beziehen sich auf den neuen HTML 5 Web-Client und nicht auf den Classic-Client.

Die DropZone im DOCUMENTS 5 Web-Client erfüllt verschiedene Aufgaben. Die
Hauptaufgabe ist das Hochladen von Dokumenten aus dem lokalen Dateisystem
auf ein Register einer Mappe. Technologisch stehen die folgenden
zwei Varianten der DropZone zur Verfügung:

- die HTML 5 DropZone (für Chrome, Firefox, Edge und Internet Explorer 11)
- die ActiveX DropZone (ausschliesslich für Internet Explorer 11)

Die HTML 5 DropZone verwendet ausschliesslich Technologien, die in den Browsern
standardmäßig implementiert sind. Die ActiveX DropZone ist ein ActiveX AddOn,
welches im Internet Explorer 11 installiert werden muss.
Da die ActiveX DropZone eine native Windows-Anwendung ist, bietet sie Möglichkeiten,
welche die HTML 5 DropZone nicht hat, da die Sicherheitseinstellungen der Browser
dies verbieten.


## Übersicht der Features der beiden DropZone Varianten

- X = unterstützt
- -- = nicht unterstützt

| Feature | ActiveX DropZone | HTML 5 DropZone |
| --- | --- | --- |
| Installation notwendig | X | -- |
| Drag & Drop aus dem Dateisystem in die DropZone am Register | X | X |
| Drag & Drop aus dem Dateisystem auf den Registernamen | X | X |
| Drag & Drop aus dem Dateisystem auf die globale DropZone | X | X |
| Drag & Drop von E-Mails aus MS Outlook nach DOCUMENTS | X | X(1) |
| Drag & Drop von Mappen im Browser auf einen DOCUMENTS Ordner | X | X |
| Drag & Drop von Anlagen in einem Register in das lokale Dateisystem | X | -- |
|  |  |  |

- (1) Google Chrome unter Windows unterstützt dies seit Version 77.0.3865 (2019-Sep-10)

Neben der Realsierung der Drag & Drop Funktionalität, implementiert die ActiveX DropZone
auch noch die Funktionalität des lokalen Bearbeitens und Auscheckens von Anlagen.
Diese Funktionalität steht für die Browser Firefox und Chrome erst nach nativen
Installation der LocalEditing Konmponente zur Verfügung.