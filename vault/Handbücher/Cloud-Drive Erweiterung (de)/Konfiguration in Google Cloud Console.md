---
title: "Konfiguration in Google Cloud Console"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-de/config-google.html"
---

# Konfiguration in Google Cloud Console

Nachfolgend wird beschrieben, welche Einrichtungen in Google Cloud Console notwendig sind, um die Erweiterung für die Anbindung an **Google Drive** zu konfigurieren. In der Beschreibung wird die Einrichtung mit einem Standard-Google Account dargestellt. Die Einrichtung für eine Google-Workspace-Domain wird auf ähnliche Art und Weise vorgenommen, ist dann aber vom jeweiligen Administrator durchzuführen.
Die notwendigen Einrichtungen werden über die Google Cloud Console durchgeführt: [Link zur Google Cloud Console](https://console.cloud.google.com)

**Wichtige Hinweise:**

- Benutzer, die Dokumente aus Documents mit anderen Personen teilen möchten, müssen über einen Google Account verfügen (i.a.R. in der Workspace-Domain, in der das Projekt erstellt wurde).
- Personen, mit denen Dokumente aus Documents geteilt werden, müssen ebenfalls über einen Google Account verfügen, wenn sie Dokumente auch bearbeiten können sollen.
- Dokumente können auch mit Personen geteilt werden, die über keinen Google Account verfügen. In diesem Fall können die Dokumente von diesen Personen aber nicht bearbeitet sondern nur eingesehen werden.
- In Google Workspace kann der Administrator externe Freigaben untersagen oder einschränken. In diesem Fall ist u.U. nicht der volle Funktionsumfang der Erweiterung verwendbar.


## Projekt erstellen

Über das Navigationsmenü der Google Cloud Console [Link zum Cloud Console](https://console.cloud.google.com) muss entweder ein vorhandenes Projekt ausgewählt oder ein neues erstellt werden. Im Beispiel wird ein neues Projekt erstellt:


![google-navigation-menu](assets/google-navigation-menu-1.png)

Abb. 11 - Google Cloud Navigationsmenü

Über den Menüpunkt *IAM und Verwaltung* ist das Untermenü *Projekt erstellen* zu wählen:


![google-project-new-1](assets/google-project-new-1.png)

Abb. 12 - Navigation, Projekt erstellen

Für das Projekt ist ein Name anzugeben, der Name ist frei wählbar. Ein spezieller Speicherort kann bei Bedarf gewählt werden:


![google-project-new-2](assets/google-project-new-2.png)

Abb. 13 - Neues Projekt erstellen

Für den weiteren Verlauf der Konfiguration ist sicherzustellen, dass in der Google Cloud Console das entsprechende Projekt ausgewählt ist:


![google-project-new-3](assets/google-project-new-3.png)

Abb. 14 - Neues Projekt auswählen


## OAuth-Zustimmungsbildschirm konfigurieren

Im Projekt ist über den Menüpunkt *APIs und Dienste* das Untermenü *OAuth-Zustimmungsbildschirm* zu wählen:


![google-oauth-1](assets/google-oauth-1.png)

Abb. 15 - Navigation, OAuth-Zustimmungsbildschirm

Zur Konfiguration der Identität der Anwendung sind *Erste Schritte* auszuführen:


![google-oauth-2](assets/google-oauth-2.png)

Abb. 16 - OAuth-Zustimmungsbildschirm, Erste Schritte

In der Projektkonfiguration sind alle Schritte fertigzustellen. Die nachfolgenden Screenshots stellen eine Beispielkonfiguration dar:


![google-oauth-3](assets/google-oauth-3.png)

Abb. 17 - Erste Schritte, App-Information


![google-oauth-4](assets/google-oauth-4.png)

Abb. 18 - Erste Schritte, Zielgruppe


![google-oauth-5](assets/google-oauth-5.png)

Abb. 19 - Erste Schritte, Kontaktdaten

Im letzten Schritt ist die Projektkonfiguration für den OAuth-Zustimmungsbildschirm fertigzustellen:


![google-oauth-6](assets/google-oauth-6.png)

Abb. 20 - Erste Schritte, Fertig


## OAuth-Client-Anmeldedaten erstellen

Im Projekt ist über den Menüpunkt *APIs und Dienste* das Untermenü *Anmeldedaten* zu wählen:


![google-client-data-1](assets/google-client-data-1.png)

Abb. 21 - Navigation, Anmeldedaten

Über den Menüpunkt *+ Anmeldedaten erstellen* sind neue Anmeldedaten zu erfassen:


![google-client-data-2](assets/google-client-data-2.png)

Abb. 22 - Neue Anmeldedaten erstellen

Es ist die Auswahl *OAuth-Client-ID* zu wählen:


![google-client-data-3](assets/google-client-data-3.png)

Abb. 23 - Auswahl OAuth-Client-ID

Über die nachfolgenden Einstellungen ist der *Anwendungstyp***Webanwendung** zu wählen, ein frei wählbarer **Name** anzugeben und mindestens eine **Autorisierte Weiterleitungs-URI** zu erfassen:


![google-client-data-4](assets/google-client-data-4.png)

Abb. 24 - OAuth-Client-ID erstellen

Die URI muss wie folgt angegeben werden:

- URI: https://<HOST>:<PORT>/documents/srv/GenericRedirectReceiver/service/GoogleDrive

**Hinweis:** Die Werte für `<HOST>` und `<PORT>` müssen passend zur Documents-Installation (Tomcat), ggf. auch mit vom Standard abweichenden SSL-Port angepasst werden. Die restlichen Angaben sind fix:


![google-client-data-5](assets/google-client-data-5.png)

Abb. 25 - Beispiel Weiterleitungs-URI

Wird die Konfiguration gespeichert, werden eine *Client-ID* und ein *Clientschlüssel* angezeigt. Diese Angaben sollten für die spätere Einrichtung in **documentsOS** gespeichert werden, Hinweise im Ausgabebildschirm sind zu beachten. Zusätzlich können bei Bedarf die Anmeldedaten als JSON heruntergeladen werden.


![google-client-data-6](assets/google-client-data-6.png)

Abb. 26 - OAuth-Client erstellt


## API aktivieren

Im Projekt ist über den Menüpunkt *APIs und Dienste* das Untermenü *Bibliothek* zu wählen:


![google-api-1](assets/google-api-1.png)

Abb. 27 - Navigation, Bibliothek

In den API-Bibliotheken ist *Google Drive API* zu wählen:


![google-api-2](assets/google-api-2.png)

Abb. 28 - Auswahl Google Drive API

Diese API ist zu aktivieren:


![google-api-3](assets/google-api-3.png)

Abb. 29 - Google Drive API aktivieren

Nach Fertigstellung muss bei der API der Status *Aktiviert* angezeigt werden:


![google-api-4](assets/google-api-4.png)

Abb. 30 - Google Drive API aktiviert


## Testnutzer verwenden (nur für Testzwecke)

Um die Einstellungen zu prüfen, können Testnutzer zur Anwendung hinzugefügt werden. Dabei ist wie folgt vorzugehen:

Im Projekt ist über den Menüpunkt *APIs und Dienste* das Untermenü *Anmeldedaten* zu wählen:


![google-test-1](assets/google-test-1.png)

Abb. 31 - Navigation, Anmeldedaten

Es ist die erstellte OAuth-Client-ID zu wählen:


![google-test-2](assets/google-test-2.png)

Abb. 32 - Auswahl OAuth-Client-ID

Über den Menüpunkt *Zielgruppe* können Testnutzer hinzugefügt werden:


![google-test-3](assets/google-test-3.png)

Abb. 33 - Testnutzer hinzufügen

[PDF Version](config-google.pdf?b=2026-01-13)