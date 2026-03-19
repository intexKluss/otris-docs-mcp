---
title: "Installation"
source: "https://otris.software/documents/manuals/books/documents-drop/installation.html"
---

# Installation


## Voraussetzungen

- DOCUMENTS Drop-Lizenz und eine Named-Benutzerlizenz
- Word bzw. Outlook 2013 oder neuer für die jeweiligen Add-Ins

Um **DOCUMENTS Drop** zu verwenden muss serverseitig die globale Eigenschaft
`DropConnector` in den Documents Einstellungen auf `true` bzw. `1` gesetzt werden.


## DOCUMENTS Drop Native Office-Add-Ins und Desktop-Client

Auf den *Desktop-Clients* muss das Setup `DocumentsDrop_[x64|x86].msi`
ausgeführt werden.

- Das Setup liegt im Unterverzeichnis addon/drop des DOCUMENTS Installationsverzeichnisses.
- Das Setup kann außerdem über den Webclient heruntergeladen werden
Im Menü Apps und Dienste → DOCUMENTS Drop (ab 6.0)
Im Menü Addons (ab 5.0g, aktivierbar durch Property addonDownloadSettings)

Die zu installierende Version muss hierbei in der Bit-Zahl (64-Bit/x64 vs. 32-Bit/x86) mit der Installation von Office übereinstimmen.

Während des Installationsvorgangs können optional die verschiedenen Integrationsmöglichkeiten
ausgewählt werden.


![](figures/setup-dialog.png)

Abb. 1 - Auswahl im Setup


## Microsoft 365 Web-Add-In Installation (auch für "neues Outlook"/"Outlook (new)")

Um DOCUMENTS Drop als **Microsoft 365 Web-Add-In** zu nutzen, ist es notwendig, die
DOCUMENTS Webanwendung über *HTTPS* zur Verfügung zu stellen.
Zusätzlich zur globalen Eigenschaft `DropConnector` (siehe oben) muss auch die
globale Eigenschaft `embeddedMode` auf `true` bzw. `1` gesetzt werden. Außerdem muss seit DOCUMENTS 5.0i eine cspConfig erstellt werden, siehe unten.
Durch das Setzen dieser Eigenschaften ist es dann möglich die DOCUMENTS Webanwendung
in eine andere Anwendung (in diesem Fall *Microsoft 365 Web*) einzubetten.

Zur Installation in *Microsoft 365 Web* wird eine Manifestdatei (XML-Datei)
benötigt. Die Datei kann direkt über die folgenden URLs heruntergeladen werden.

- https://[HOST]/documents/addin-manifest/word.xml?pri=[MANDANT]
- https://[HOST]/documents/addin-manifest/outlook.xml?pri=[MANDANT]

`[HOST]` und `[MANDANT]` müssen durch die für ihren Server passenden Werte
ersetzt werden. Bei `[MANDANT]` bitte auch auf Groß-/Kleinschreibung achten!


### cspConfig erstellen

Es muss im DOCUMENTS Manager in den globalen Eigenschaften (nicht Documents Einstellungen) eine Eigenschaft mit dem Namen und Typ `cspConfig` angelegt werden. Diese muss folgenden Wert haben:


```json
{
    "frame-source-hosts" : [ "https://<my endpoint 1>", "https://<my endpoint 2>" ],
    "routes": {
        "documents": {
            "source-hosts": ["https://appsforoffice.microsoft.com", "https://ajax.aspnetcdn.com"]
        },
        "login": {
            "source-hosts": ["https://appsforoffice.microsoft.com", "https://ajax.aspnetcdn.com"]
        }
    }
}
```

{
    "frame-source-hosts" : [ "https://<my endpoint 1>", "https://<my endpoint 2>" ],
    "routes": {
        "documents": {
            "source-hosts": ["https://appsforoffice.microsoft.com", "https://ajax.aspnetcdn.com"]
        },
        "login": {
            "source-hosts": ["https://appsforoffice.microsoft.com", "https://ajax.aspnetcdn.com"]
        }
    }
}Bei frame-source-hosts müssen dann die Endpunkte entsprechend durch die Hosts ersetzt werden, auf welchen das Add-In eingebunden werden soll.

**Beispiel 1 (OWA)**: Das Add-In wird in Outlook Web Access eingebunden. Outlook Web Access ist unter owa.mycompany.de zu erreichen. Dann muss in das Array unter `"frame-source-hosts"` der folgende String eingetragen werden: `"https://owa.mycompany.de"`.

**Beispiel 2 ("neues Outlook")**: Das Add-In wird im "neuen Outlook" eingebunden. Dann muss in das Array unter `"frame-source-hosts"` der folgende String eingetragen werden: `"https://outlook.office.com"`.

**Beispiel 3 (Microsoft 365)**: Das Add-In wird bei Microsoft 365 mit Outlook in der Cloud verwendet. Hier muss dann in das Array unter `"frame-source-hosts"` die URL eingesetzt werden unter der Outlook genutzt wird. Dies könnten zum Beispiel `"https://outlook.office365.com"` sowie `"https://outlook.office.com"` sein.


### Manifestdatei installieren

Zur Installation mit der heruntergeladenen Manifestdatei stehen die folgenden
Möglichkeiten zur Verfügung.


#### Direkte Installation im "neuen Outlook", Outlook Web

Auf [https://aka.ms/olksideload](https://aka.ms/olksideload) gehen
→ Meine Add-Ins
→ Benutzerdefiniertes Add-In hinzufügen


#### Direkte Installation in OWA, Exchange

Outlook starten (z.B. `outlook.com` bzw. eine entsprechende Domain)
→ Eine Nachricht öffnen
→ ...
→ Add-Ins erhalten
→ Meine Add-Ins
→ Benutzerdefiniertes Add-In hinzufügen


![](figures/outlook-web-manifest-install.png)

Abb. 2 - Installation in Outlook Web


#### Verteilung über Office 365

`admin.microsoft.com`
→ Einstellungen
→ Add-Ins
→ Add-In bereitstellen.

bzw.

`admin.microsoft.com`
→ Einstellungen
→ Integrierte Apps
→ Benutzerdefinierte Apps hochladen
→ App-Typ = Office-Add-In


#### Verteilung über Exchange

Im Exchange Admin Center unter dem Menüpunkt Add-Ins das Add-In hinzufügen.


#### Installation in Word Web

Word-Dokument aus *OneDrive* öffnen
→ Einfügen
→ Add-Ins
→ Mein Add-In hochladen