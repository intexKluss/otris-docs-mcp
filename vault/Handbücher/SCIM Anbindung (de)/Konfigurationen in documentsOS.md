---
title: "Konfigurationen in documentsOS"
source: "https://otris.software/documents/manuals/books/otrscim-doc-de/documents-settings.html"
---

# Konfigurationen in documentsOS


## Voraussetzungen

Der Identitätsanbietern (IDP) kommuniziert über den Webserver (Tomcat) mit *documentsOS*. Da IDP's ausschließlich per SSL kommunizieren, muss im Tomcat SSL aktiv sein, außerdem müssen die daraus resultierenden Einstellungen (SSL aktiv und SSL-Hostname) am Mandanten korrekt konfiguriert sein.


## Erweiterung aktivieren / deaktivieren

Die SCIM-Erweiterung muss im AdminCenter unter Inaktive Erweiterungen aktiviert werden.

**Hinweis:** Standardmäßig haben Redakteure mit der Funktion Documents Administrator nach der Anmeldung am Webclient Zugang zum AdminCenter und können über die Erweiterung SCIM-Einstellungen vornehmen. Für die Erweiterung existieren keine weiteren Rollen, über die andere Benutzer Zugang zu den SCIM-Einstellungen erhalten. Sollen andere Benutzer Einstellungen vornehmen, müssen Benutzer und/oder Profile für die Rolle *admin* des *AdminCenter* eingerichtet werden. Es ist zu beachten, dass diese Benutzer dann vollständigen Zugang zum AdminCenter erhalten.


![documents-1](assets/documents-1.png)

Abb. 1 - Inaktive Erweiterung


![documents-2](assets/documents-2.png)

Abb. 2 - Aktivierte Erweiterung

Wird die Erweiterung über den entsprechenden Schalter deaktiviert, ist der SCIM-Endpunkt nicht mehr verfügbar.


## Einstellungen für die Erweiterung


### Verbindungsdaten

Wurde die Erweiterung aktiviert, können über die **Einstellungen** zur vereinfachten Konfiguration die Verbindungsdaten für den IDP angezeigt bzw. erstellt werden. Außerdem sind optionale Einstellungen möglich.

**Hinweis:** Für alle Einstellungen stehen im Dialog Tooltips als Entscheidungshilfe bereit.


![documents-3](assets/documents-3.png)

Abb. 3 - Einstellungsdialog

Die *Basis-URL für die SCIM Verbindung* kann über den entsprechenden Schalter in die Zwischenablage kopiert und beim IDP in den dafür vorgesehenen Einstellungen eingefügt werden (siehe auch *Mandanten-URL* im Beispiel für Microsoft Entra ID bzw. *SCIM connector base URL* im Beispiel für Okta). Die URL wird automatisch nach folgendem Muster generiert:

- https://<Hostname / SSL-Hostname>/documents/api/documentsOS-Mandant/scim/v2
- Beispiel: https://dockerhost.otris.cloud/documents/api/relations/scim/v2

Für die Verbindung muss ein API Key für einen definierten Benutzer verwendet werden (siehe auch *Geheimes Token* im Beispiel für Microsoft Entra ID bzw. *Authorization* im Beispiel für Okta). Grundsätzlich kann ein bereits bestehender und bekannter API Key eines Benutzers verwendet werden, es wird aber empfohlen, einen Redakteur aus der *Benutzerauswahl-Liste* zu wählen und über den entsprechenden Schalter einen neuen API Key für diesen Benutzer zu erzeugen.

**Hinweis:** Für den Benutzer wird dann nach einer Hinweismeldung ein neuer API Key mit dem Namen *SCIM API Key* erstellt. Dieser API Key wird danach einmalig angezeigt und kann ebenfalls in die Zwischenablage kopiert werden bzw. auch gesichert aufbewahrt werden.


![documents-4](assets/documents-4.png)

Abb. 4 - Einstellungsdialog, Hinweismeldung


![documents-5](assets/documents-5.png)

Abb. 5 - Einstellungsdialog, Anzeige API Key

**Hinweis:** Wird der Einstellungsdialog erneut geöffnet, wird ein erstellter API Key nicht erneut angezeigt.


### Optionale Einstellungen

Für die SCIM-Erweiterung können folgende optionalen Einstellungen vorgenommen werden:

- Bestehende Benutzer verknüpfen
- Markierte Benutzer ausschließen

Mit der Einstellung *Bestehende Benutzer verknüpfen* kann festgelegt werden, ob bestehende Documents-Benutzer beim SCIM Import verknüpft werden sollen. Entspricht also der aus der SCIM-Anwendung übertragene `userName` dem `Documents-Login` eines bestehenden Benutzers, wird für diesen eine SCIM_ID erzeugt und für spätere Aktualisierungen verwendet.

Mit der Einstellung *Markierte Benutzer ausschließen* werden Benutzer mit der Eigenschaft `noSCIMCheck=true` werden von der Synchronisation ausgeschlossen.


### Standardwerte für die Benutzeranlage

Ab documentsOS 6.2.0 können Standardwerte für die Benutzeranlage direkt in den Einstellungen der Erweiterung angegeben werden. Diese Standardwerte werden verwendet, wenn sie nicht explizit im SCIM Schema angegeben sind:

- Standard Documents-Zugang
- Standard Archiv-Zugang
- Standard Lizenzart
- Standard Status

[PDF Version](documents-settings.pdf?b=2026-02-10)