---
title: "Einrichtung"
source: "https://otris.software/documents/manuals/books/documents-drop/settings.html"
---

# Einrichtung


![](figures/addin-start-icon.png?class=small)

Abb. 3 - Start-Icon des Add-Ins in Word

Nach dem ersten Start müssen einmalig die Zugangs- und Verbindungsdaten für
den DOCUMENTS Server hinterlegt werden.


![](figures/settings-dialog.png)

Abb. 4 - Einstellungsdialog

- Server URL: http[s]://[Host]/documents[5]/
- Mandant: Mandantenname
- Login-Methode:
Automatisch (empfohlen) Verwendet die in DOCUMENTS konfigurierte Anmeldemethode. Unterstützt Single Sign On und 2-Faktor-Authentifizierung
Benutzername & Passwort Nutzt eine einfache Anmeldung per Benutzername und Passwort. Unterstützt kein SSO oder 2FA.

Bei der Auswahl von **Angemeldet bleiben** wird der Login gespeichert.
Falls der DOCUMENTS-Zugriff per API-Schlüssel aktiviert ist, wird ein
API Schlüssel erzeugt und persistiert. Andernfalls wird bei der Login-Methode
"Benutzername & Passwort" das Passwort verschlüsselt gespeichert. Die
Login-Methode "Automatisch" unterstützt **Angemeldet bleiben** nur per API-Schlüssel


## Vorbelegung der Verbindungsdaten für den DOCUMENTS Server

Zugangs- und Verbindungsdaten können nach der Installation mit in der credentials.json ausgerollt werden:

C:\Users\`[USER]`\AppData\Roaming\DocumentsNative\credentials.json

Beispiel:


```json
{
    "sso":true,
    "srv":"https://[server]/documents5/",
    "pri":"[mandant]",
    "user":"",
    "lang":"auto",
    "pass":""
}
```

{
    "sso":true,
    "srv":"https://[server]/documents5/",
    "pri":"[mandant]",
    "user":"",
    "lang":"auto",
    "pass":""
}