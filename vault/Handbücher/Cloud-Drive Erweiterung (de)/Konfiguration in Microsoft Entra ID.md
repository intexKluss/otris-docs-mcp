---
title: "Konfiguration in Microsoft Entra ID"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-de/config-microsoft.html"
---

# Konfiguration in Microsoft Entra ID

Nachfolgend wird beschrieben, welche Einrichtungen in Microsoft Entra ID notwendig sind, um die Erweiterung für die Anbindung an **Microsoft OneDrive** zu konfigurieren.
Die notwendigen Einrichtungen werden über das Microsoft Entra ID Admin Center durchgeführt: [Link zum Admin Center](https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview)

**Hinweis:** Für Benutzer, die Dokumente aus Documents mit anderen Personen teilen möchten, muss Microsoft OneDrive eingerichtet und aktiviert sein.


## App Registrierung vornehmen

Über Verwalten / App Registrierungen muss eine neue Registrierung vorgenommen werden:


![microsoft-app-registration-new](assets/microsoft-app-registration-1.png)

Abb. 1 - Neue App Registrierung

Für die App Registrierung ist ein Name anzugeben (frei wählbar), außerdem muss ein unterstützter Kontotyp gewählt werden. Zusätzlich ist eine Umleitungs-URI zu hinterlegen, diese muss folgenden Aufbau haben:

- Typ: Web
- URI: https://<HOST>:<PORT>/documents<5>/srv/GenericRedirectReceiver/service/Microsoft

**Hinweis:** Die Werte für `<HOST>` und `<PORT>` müssen passend zur Documents-Installation (Tomcat), ggf. auch mit vom Standard abweichenden SSL-Port angepasst werden. Bei Installationen unter Windows und Linux mit **documentsOS** muss danach "documents" angegeben werden, bei Linux-Installationen unter **Documents5** "documents5". Die restlichen Angaben sind fix.


![microsoft-app-registration-name](assets/microsoft-app-registration-2.png)

Abb. 2 - Neue App Registrierung / Name, Redirect-URI

Wurde die neue App registriert, sind die Anwendungs-ID (Client) und die Verzeichnis-ID (Mandant) für die spätere Konfiguration zu speichern:


![microsoft-app-registration-ids](assets/microsoft-app-registration-3.png)

Abb. 3 - Neue App Registrierung / Client-Id, Tenant

**Hinweis:** Die Anwendungs-ID (Client) wird später als Client ID verwendet. Die Verzeichnis-ID (Mandant) wird später als Tenant verwendet.


## Clientanmeldeinformation zu erstellen

Zusätzlich ist eine Clientanmeldeinformation zu erstellen, dabei ist eine Beschreibung und ein Gültigkeitszeitraum anzugeben, nach der Erstellung ist der Wert für die spätere Konfiguration zu speichern:


![microsoft-app-registration-secret-key](assets/microsoft-app-registration-clientsecret.png)

Abb. 4 - Neue App Registrierung / Geheimer Schlüssel

**Hinweis:** Der Wert wird später als Client Secret verwendet. Der Wert ist nur direkt nach der Erstellung sichtbar / kopierbar (als *Client Secret* muss der **Wert** verwendet werden und **nicht** die *Geheime ID*).


## App API-Berechtigungen

Für die App sind API-Berechtigungen hinzuzufügen, folgende API-Berechtigungen sind notwendig:

- User.Read (Microsoft Graph API), diese Berechtigung ist notwendig, um Benutzer anzumelden
- Files.ReadWrite.All (Microsoft Graph API), diese Berechtigung ist notwendig, um die ausgewählten Dokumente mit anderen Personen zu teilen und den Schreibzugriff zu gewähren

**Hinweis:** Für beide API-Berechtigungen sollte direkt die Administratorzustimmung erteilt werden, erfolgt dies nicht, müssen Benutzer später zusätzlich zustimmen.

Für die registrierte App ist im Microsoft Entra ID unter Verwalten **API-Berechtigungen** auszuwählen:


![api-permissions-1](assets/microsoft-app-registration-permissions1.png)

Abb. 5 - API-Berechtigungen

Es ist **Berechtigung hinzufügen** und **Microsoft Graph** auszuwählen:


![api-permissions-2](assets/microsoft-app-registration-permissions2.png)

Abb. 6 - Berechtigung hinzufügen / Microsoft Graph API

Es sind **Delegierte Berechtigungen** zu verwenden:


![api-permissions-3](assets/microsoft-app-registration-permissions3.png)

Abb. 7 - Berechtigung hinzufügen / Microsoft Graph API / Delegierte Berechtigungen

Die Berechtigung kann gesucht, markiert und hinzugefügt werden:


![api-permissions-4](assets/microsoft-app-registration-permissions4.png)

Abb. 8 - Berechtigung hinzufügen / Microsoft Graph API / Delegierte Berechtigungen / User.Read

Der Vorgang ist für die Berechtigung **Files.ReadWrite.All** zu wiederholen.

Die Administratorzustimmung ist zu erteilen:


![api-permissions-5](assets/microsoft-app-registration-permissions5.png)

Abb. 9 - Administratorzustimmung erteilen


![api-permissions-6](assets/microsoft-app-registration-permissions6.png)

Abb. 10 - Korrekte API-Berechtigungen

[PDF Version](config-microsoft.pdf?b=2026-01-13)