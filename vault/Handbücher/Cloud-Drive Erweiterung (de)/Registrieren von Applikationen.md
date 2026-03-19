---
title: "Registrieren von Applikationen für Benutzer"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-de/config-documents.html"
---

# Registrieren von Applikationen für Benutzer

Um die installierte und konfigurierte Erweiterung verwenden zu können, muss der entsprechende Diensteanbieter mit der Documents-Installation verbunden werden.

**Hinweis:** Bei Verwendung von **documentsOS** kann die Registrierung von Applikationen für Benutzer direkt im Einstellungsdialog der Erweiterung *Cloud-Drive Anbindung* erfolgen (*Apps und Dienste*). Bei Verwendung von **Documents5** muss sich ein Redakteur am Webclient anmelden und über sein Benutzermenü den Eintrag **Externe Anbieter** aufrufen. In beiden Versionen sind die Konfigurationen aber identisch und werden nachfolgend am Beispiel von *documentsOS* über den Einstellungsdialog der Erweiterung dargestellt.


![external-services-settings-1](assets/external-services-settings-1.png)

Abb. 44 - Einstellungen für Erweiterung

Wird der Schalter *Einstellungen* betätigt, öffnet sich das Dialogfenster zur Verwaltung externer Services. Zur Einrichtung der Erweiterung muss per **+ Neuer Service** ein Service erstellt und konfiguriert werden.


![external-services-add](assets/external-services-add.png)

Abb. 45 - Einen externen Anbieter hinzufügen

Per Einstellungs-Wizard können nun die notwendigen Konfigurationen vorgenommen werden.


## Einstellungen bei Verwendung von Microsoft OneDrive

Wird *Microsoft OneDrive* für die Erweiterung verwendet, ist dieser Service unter **Service Auswahl** auszuwählen:


![external-services-config-microsoft-1](assets/external-services-microsoft-1.png)

Abb. 46 - Serviceauswahl Microsoft OneDrive

Für den Service kann ein Alias vergeben werden. Dieser ist dann verpflichtend, wenn mehrere Integrationen von einem Anbieter in einer Documents-Installation verwendet werden. Ein solcher Fall tritt z.B. ein, wenn ein Unternehmen mehrere Tenants für einen der Anbieter nutzt. Der Alias identifiziert in diesem Fall den Tenant.

**Achtung:** Der Alias kann nach der Anlage nicht mehr verändert werden.

Mit **Weiter** müssen im nächsten Schritt des Einstellungs-Wizard die Serviceeinstellungen angegeben werden:


![external-services-config-microsoft-2](assets/external-services-microsoft-2.png)

Abb. 47 - Serviceeinstellungen für Microsoft OneDrive

- als Client ID ist die bei der App-Registrierung erstellte Anwendungs-ID anzugeben, siehe auch Konfiguration in Microsoft Entra ID
- als Client Secret ist der bei der App-Registrierung erstellte geheime Schlüssel anzugeben, siehe auch Konfiguration in Microsoft Entra ID
- als Tenant ist die bei der App-Registrierung erstellte Verzeichnis-ID anzugeben, siehe auch Konfiguration in Microsoft Entra ID

Mit **Weiter** können im nächsten Schritt des Einstellungs-Wizard Berechtigungen für Benutzergruppen angegeben werden:


![external-services-config-microsoft-3](assets/external-services-microsoft-3.png)

Abb. 48 - Berechtigungen für Microsoft OneDrive

Werden keine Benutzergruppen ausgewählt, sind alle Gruppen zur Verwendung des Service berechtigt.

Mit **Fertig** werden die Einstellungen gespeichert, der Service ist allerdings noch nicht aktiv:


![external-services-config-microsoft-4](assets/external-services-microsoft-4.png)

Abb. 49 - Inaktiver Service für Microsoft OneDrive

Um zu prüfen, ob die zuvor angegebenen Einstellungen korrekt waren, wird per Klick auf die Kachel eine Verbindung aufgerufen, bei der über eine Microsoft-Loginseite Anmeldedaten eingegeben oder ausgewählt werden müssen:


![external-services-config-microsoft-5](assets/external-services-microsoft-5.png)

Abb. 50 - Microsoft-Login

Es ist zu beachten, dass der Browser unter Umständen Pop-up-Fenster blockiert. Diese sind dann freizugeben. Nach einer erfolgreichen Authentifizierung wird die Kachel des Anbieters grün gefärbt (Service ist nun aktiv):


![external-services-config-microsoft-6](assets/external-services-microsoft-6.png)

Abb. 51 - Aktiver Service

Waren die zuvor eingegebenen Einstellungen nicht korrekt, werden vom Service Fehlermeldungen ausgegeben, es sind dann entsprechende Korrekturen in den Konfigurationen (Microsoft Entra ID und/oder Documents-Servicekonfigurationen) vorzunehmen.

Über die Aktionsschalter auf der Kachel können weitere Einstellungen angezeigt oder bearbeitet werden:

- führt eine Abmeldung vom Service durch
- zeigt Informationen zum Service an
- startet den Einstellungswizard
- löscht den Service nach Rückfrage


## Einstellungen bei Verwendung von Google Drive

Wird *Google Drive* für die Erweiterung verwendet, ist dieser Service unter **Service Auswahl** auszuwählen:


![external-services-config-google-1](assets/external-services-google-1.png)

Abb. 52 - Serviceauswahl Google Drive

Für den Service kann ein Alias vergeben werden. Dieser ist dann verpflichtend, wenn mehrere Integrationen von einem Anbieter in einer Documents-Installation verwendet werden. Ein solcher Fall tritt z.B. ein, wenn ein Unternehmen mehrere Clients für einen der Anbieter nutzt. Der Alias identifiziert in diesem Fall den Client.

**Achtung:** Der Alias kann nach der Anlage nicht mehr verändert werden.

Mit **Weiter** müssen im nächsten Schritt des Einstellungs-Wizard die Serviceeinstellungen angegeben werden:


![external-services-config-google-2](assets/external-services-google-2.png)

Abb. 53 - Serviceeinstellungen für Google Drive

- als Client ID ist die bei der OAuth-Client-Anmeldedaten-Konfiguration erzeugte Client-ID anzugeben, siehe auch Konfiguration in Google Cloud Console
- als Client Secret ist der OAuth-Client-Anmeldedaten-Konfiguration erzeugte Clientschlüssel anzugeben, siehe auch Konfiguration in Google Cloud Console

Mit **Weiter** können im nächsten Schritt des Einstellungs-Wizard Berechtigungen für Benutzergruppen angegeben werden:


![external-services-config-google-3](assets/external-services-google-3.png)

Abb. 54 - Berechtigungen für Google Drive

Werden keine Benutzergruppen ausgewählt, sind alle Gruppen zur Verwendung des Service berechtigt.

Mit **Fertig** werden die Einstellungen gespeichert, der Service ist allerdings noch nicht aktiv:


![external-services-config-google-4](assets/external-services-google-4.png)

Abb. 55 - Inaktiver Service für Google Drive

Um zu prüfen, ob die zuvor angegebenen Einstellungen korrekt waren, wird per Klick auf die Kachel eine Verbindung aufgerufen, bei der über eine Google-Loginseite Anmeldedaten eingegeben oder ausgewählt werden müssen:


![external-services-config-google-5](assets/external-services-google-5.png)

Abb. 56 - Google-Login

Es ist zu beachten, dass der Browser unter Umständen Pop-up-Fenster blockiert. Diese sind dann freizugeben. Nach einer erfolgreichen Authentifizierung wird die Kachel des Anbieters grün gefärbt (Service ist nun aktiv):


![external-services-config-google-6](assets/external-services-google-6.png)

Abb. 57 - Aktiver Service

Waren die zuvor eingegebenen Einstellungen nicht korrekt, werden vom Service Fehlermeldungen ausgegeben, es sind dann entsprechende Korrekturen in den Konfigurationen (Google Cloud Console und/oder Documents-Servicekonfigurationen) vorzunehmen.

Über die Aktionsschalter auf der Kachel können weitere Einstellungen angezeigt oder bearbeitet werden:

- führt eine Abmeldung vom Service durch
- zeigt Informationen zum Service an
- startet den Einstellungswizard
- löscht den Service nach Rückfrage

[PDF Version](config-documents.pdf?b=2026-01-13)