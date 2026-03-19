---
title: "Beispiel für Okta"
source: "https://otris.software/documents/manuals/books/otrscim-doc-de/example-okta.html"
---

# Beispiel für Okta

Nachfolgend wird dargestellt, welche Schritte in **Okta** notwendig sind, um Benutzer und Gruppen nach *documentsOS* zu synchronisieren. Es wird davon ausgegangen, dass die Einstellungen für **documentsOS** im *AdminCenter* bereits korrekt vorgenommen wurden, siehe auch [Konfigurationen für documentsOS](documents-settings.html).

**Wichtiger Hinweis:** Zur Implementierung einer SCIM Integration sind Kenntnisse in Okta erforderlich. Für weitere Informationen zur SCIM-Konfiguration mit Okta siehe die [Okta-Dokumentation](https://developer.okta.com/docs/concepts/scim/).


## App Integration erstellen

- als Administrator an Okta anmelden und zur Admin Console wechseln
- zu Applications → Applications wechseln


![okta-1](assets/okta-1.png)

Abb. 25 - Okta Navigation Applications

Die Aktion **Create App Integration** wählen:


![okta-2](assets/okta-2.png)

Abb. 26 - Okta App Integration (1)

Bei *Sign-in method***SWA - Secure Web Authentication** wählen und *Next*:


![okta-3](assets/okta-3.png)

Abb. 27 - Okta App Integration (2)

In den nächsten Schritten die erforderlichen Informationen für die App angeben bzw. auswählen, z.B.:


![okta-4](assets/okta-4.png)

Abb. 28 - Okta App Integration (3)


![okta-5](assets/okta-5.png)

Abb. 29 - Okta App Integration (4)

Die Erstellung mit *Finish* abschließen.

In der neuen Applikation ist unter *General / Provisioning***SCIM** auswählen und speichern:


![okta-6](assets/okta-6.png)

Abb. 30 - Okta App Integration (5)


## Bereitstellung einrichten

In der neuen Applikation unter *Provisioning / Integration* sind die Verbindungsdaten und die gewünschten Aktionen zu erfassen und zu speichern.


![okta-7](assets/okta-7.png)

Abb. 31 - Okta App Integration Connection

- SCIM connector base URL: Es muss die SCIM Endpunkt URL aus documentsOS angegeben werden, siehe auch Konfigurationen für documentsOS
- Unique identifier field for users: Es ist ein für Okta gültiger Wert anzugeben, z.B. userName
- Supported provisioning actions: Es sind die gewünschten Aktionen für die Synchrinisierung zu documentsOS anzugeben, z.B. Push new Users, Push Profile Updates, Push Groups
- Authentication Mode: Es ist der Modus HTTP Header auszuwählen
- Authorization: Es muss der in documentsOS erstellte API Key für den zu verwendenden Benutzer angegeben werden, siehe auch Konfigurationen für documentsOS


## Zuweisungen einrichten

Benutzer und Gruppen, die in die Synchronisierung einbezogen werden sollen, können entweder direkt (über *Directory People / Groups*) einer Applikation zugewiesen werden oder in der Applikation selbst. Nachfolgend wird die Zuweisung in der Applikation dargestellt.

**Hinweis:** In jedem Fall sollten über diese Art und Weise Test's für die verschiedenen Szenarien (Neu erstellen von Benutzern und Gruppen, Änderungen von Benutzern und Gruppen) mit einzelnen Benutzern und Gruppen durchgeführt werden, bevor ein Livebetrieb gestartet wird.

In der Applikation unter *Assignments / People* sind die Benutzer zu wählen, für die eine Synchronisierung stattfinden soll:


![okta-8](assets/okta-8.png)

Abb. 32 - Benutzer zuweisen

...
In der Applikation unter *Provisioning / To App* sind die Aktionen zu aktivieren, die durchgeführt werden sollen:


![okta-9](assets/okta-9.png)

Abb. 33 - Aktionen für die Synchronisierung

Wurden diese Einstellungen gespeichert, wird die Synchronisation für die gewählten Benutzer sofort gestartet und kann danach in der documentsOS-Benutzerverwaltung geprüft werden.

Um Gruppen zu synchronisieren, sind in der Applikation unter *Push Groups* die Gruppen zu suchen und zuzuweisen. Nach einer korrekten Zuweisung werden die Gruppen automatisch synchronisiert und den Benutzern in documentsOS zugewiesen, wenn die Okta-Benutzer vorher den entsprechenden Gruppen zugeordnet wurden.


![okta-10](assets/okta-10.png)

Abb. 34 - Gruppen für Synchronisation hinzufügen

Wenn Benutzerattribute für die Synchronisation angepasst werden sollen, kann dies über **Attribute Mappings** unter *Provisioning / To App* eingerichtet werden. Die Standardzuordnungen für documentsOS-Benutzer sind im Schema beschrieben: [Schema](schema.html#documents-user). Es sind nur Attribute zu verwenden, die auch unterstützt werden, nicht unterstützte Attribute sind zu löschen.

[PDF Version](example-okta.pdf?b=2026-02-10)