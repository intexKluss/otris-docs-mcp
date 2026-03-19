---
title: "Angepasste Login-QR-Codes generieren"
source: "https://otris.software/documents/manuals/books/app-doc/custom_qr.html"
---

# Angepasste Login-QR-Codes generieren

Die Anmeldung in der App ist mit Hilfe eines QR-Codes möglich. Dieser QR-Code kann standardmäßig über das Benutzermenü in der DOCUMENTS Webanwendung abgerufen werden. Die notwendige Einrichtung für diesen QR-Code ist im Kapitel [Installation der Komponenten](installation.html) beschrieben. Falls die Benutzer des Systems jedoch keinen Zugang über die Webanwendung erhalten sollen oder angepasste Zugangsdaten verwendet werden sollen, dann ist eine anderweitige Verteilung von QR-Codes möglich. Diese QR-Codes erleichtern dem Nutzer die Einrichtung der App ohne Webanwendung. Die Erstellung dieser QR-Codes ist nachfolgend beschrieben.


## Vorbelegung von Serveradresse und Mandant

Um einen QR-Code zur Vorbelegung von Serveradresse und Mandant zu generieren wird ein Werkzeug zur Erzeugung von QR-Codes benötigt. Hierzu gibt es zum Beispiel im Internet kostenfreie Werkezuge. In das Werkzeug zur QR-Code-Generierung muss folgender **Text** eingegeben werden:


```javascript
{"dsrv":"[SERVER ADRESSE]","dpri":"[MANDANTENKÜRZEL]"}
```

{"dsrv":"[SERVER ADRESSE]","dpri":"[MANDANTENKÜRZEL]"}In diesem Text müssen dann **[SERVER ADRESSE]** und **[MANDANTENKÜRZEL]** durch die jeweilige Serveradresse bzw. das Mandantenkürzel ersetzt werden. Der generierte QR-Code kann nun mit der App verwendet werden. Eine Verteilung ist zum Beispiel per E-Mail möglich.


## Vorbelegung von Serveradresse, Mandant und Benutzername

Die Erzeugung eines QR-Codes für Serveradresse, Mandant und Benutzername erfolgt prizipiell wie zuvor für Serveradresse und Mandant beschrieben. Hierbei muss lediglich ein anderer **Text** verwendet werden:


```javascript
{"dsrv":"[SERVER ADRESSE]","dpri":"[MANDANTENKÜRZEL]","dusr":"[BENUTZERNAME]"}
```

{"dsrv":"[SERVER ADRESSE]","dpri":"[MANDANTENKÜRZEL]","dusr":"[BENUTZERNAME]"}In diesem Text muss zusätzlich zu den oben beschriebenen Teilen auch noch **[BENUTZERNAME]** durch den Login-Namen des Benutzers ersetzt werden.