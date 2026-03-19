---
title: "Beispiel für Microsoft Entra ID"
source: "https://otris.software/documents/manuals/books/otrscim-doc-de/example-azure.html"
---

# Beispiel für Microsoft Entra ID

Nachfolgend wird dargestellt, welche Schritte in **Microsoft Entra ID** notwendig sind, um Benutzer und Gruppen nach *documentsOS* zu synchronisieren. Es wird davon ausgegangen, dass die Einstellungen für **documentsOS** im *AdminCenter* bereits korrekt vorgenommen wurden, siehe auch [Konfigurationen für documentsOS](documents-settings.html).

**Wichtiger Hinweis:** Zur Implementierung einer SCIM Integration sind Kenntnisse in Microsoft Entra ID erforderlich. Für weitere Informationen zur SCIM-Konfiguration mit Microsoft Entra ID siehe die [Microsoft-Dokumentation](https://learn.microsoft.com/de-de/azure/databricks/administration-guide/users-groups/scim/aad).


## Zu Microsoft Entra ID navigieren

[https://portal.azure.com/#home](https://portal.azure.com/#home)


![azure-1](assets/azure-1.png)

Abb. 6 - Navigation Microsoft Entra ID


## Neue Anwendung anlegen

Microsoft Entra ID → Unternehmensanwendungen → Alle Anwendungen → Neue Anwendung


![azure-2](assets/azure-2.png)

Abb. 7 - Neue Anwendung (1)

Eine **Eigene Anwendung** anlegen:


![azure-3](assets/azure-3.png)

Abb. 8 - Neue Anwendung (2)

Anwendungsinformationen erfassen:

- Name frei wählbar
- Typ: Beliebige andere, nicht im Katalog gefundene Anwendung integrieren


![azure-4](assets/azure-4.png)

Abb. 9 - Neue Anwendung (3)


## Bereitstellung konfigurieren und verwalten

Microsoft Entra ID → Unternehmensanwendungen → Alle Anwendungen → Anwendung → Bereitstellung


![azure-5](assets/azure-5.png)

Abb. 10 - Bereitstellung konfigurieren

Microsoft Entra ID → Unternehmensanwendungen → Alle Anwendungen → Anwendung → Bereitstellung → Bereitstellung


![azure-6](assets/azure-6.png)

Abb. 11 - Bereitstellung verwalten (1)


### Bereitstellungsinformationen erfassen

- Bereitstellungsmodus angeben: Automatisch
- Administratoranmeldeinformationen
Mandanten-URL angeben: Es muss die SCIM Endpunkt URL aus documentsOS angegeben werden, siehe auch Konfigurationen für documentsOS
Geheimes Token: Es muss der in documentsOS erstellte API Key für den zu verwendenden Benutzer angegeben werden, siehe auch Konfigurationen für documentsOS


![azure-7](assets/azure-7.png)

Abb. 12 - Bereitstellung verwalten (2)

Über die Aktion *Verbindung testen* kann geprüft werden, ob eine Verbindung mit **documentsOS** aufgebaut werden kann, war der Test erfolgreich, wird eine entsprechende Hinweismeldung ausgegeben.


![azure-8](assets/azure-8.png)

Abb. 13 - Erfolgreicher Verbindungstest


### Zuordnungen erfassen

Über Zuordnungen können die Einstellungen für die Synchronisation von Benutzer und Gruppen angepasst werden.


![azure-9](assets/azure-9.png)

Abb. 14 - Zuordnungen festlegen

Per Klick auf einen Eintrag (*Provision Azure Active Directory Users* bzw. *Provision Azure Active Directory Groups*) wird die jeweilige Zuordnung durchgeführt. In den allgemeinen Attributseinstellungen kann festgelegt werden, ob dies überhaupt (*Aktiviert Ja/Nein*) und bei welchen Aktionen dies durchgeführt werden soll (*Erstellen*, *Aktualisieren*, *Löschen*).


![azure-10](assets/azure-10.png)

Abb. 15 - Allgemeine Attributseinstellungen

**Hinweis:** Werden Benutzer in Microsoft Entra ID gelöscht, die vorher in documentsOS erstellt wurden, erfolgt bei der nächsten Übertragung keine Löschung der Benutzer in documentsOS, sondern eine Statusänderung auf gesperrt bzw. entfernbar.

In den weiteren Attributszuordnungen wird festgelegt, welche Attribute synchronisiert werden sollen.


#### Zuordnungen für Benutzer

Die Standardzuordnungen für documentsOS-Benutzer sind im Schema beschrieben: [Schema](schema.html#documents-user). Es sind nur Attribute zu verwenden, die auch unterstützt werden, nicht unterstützte Attribute sind zu löschen.

Eine beispielhafte Zuordnung von Benutzerattributen könnte wie folgt aussehen:


![azure-11](assets/azure-11.png)

Abb. 16 - Benutzerattribute

Um besondere Attribute (hier für *Lizenzen*, *Status*, *Documents-Zugang* bzw. *Archivzugang*) selbst zu definieren, ist wie folgt vorzugehen:

- Erweiterte Optionen anzeigen
- Attributliste für customappsso bearbeiten

**Hinweis:** Ab documentsOS 6.2.0 können diese Konfigurationen entfallen, da sie direkt in den Einstellungen der Erweiterung angegeben werden können, siehe auch [Standardwerte für die Benutzeranlage](documents-settings.html#Standardwerte-f%C3%BCr-die-Benutzeranlage).


![azure-12](assets/azure-12.png)

Abb. 17 - Zusätzliche Attribute (1)

In der Liste die neuen Attribute unten anfügen:


![azure-13](assets/azure-13.png)

Abb. 18 - Zusätzliche Attribute (2)

| Name | Typ | Kommentar |
| --- | --- | --- |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User:licence | String | Lizenzattribut |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User:status | String | Statusattribut |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User:documentsAccess | Boolean | Attribut für Documents-Zugang |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User:archiveAccess | Boolean | Attribut für Archiv-Zugang |

Wurden die Zusätzlichen Attribute erstellt, kann über die Aktion *Neue Zuordnung* die Attributsbearbeitung erfolgen (Beispiel für Lizenzart):


![azure-14](assets/azure-14.png)

Abb. 19 - Zusätzliche Attribute (3)

Folgende Zuweisungen müssen dann für die o.a. zusätzlichen Attribute angegeben werden:

- Zuordnungstyp: Konstante
- Konstanter Wert:
named oder shared oder concurrent_standard oder concurrent_open bei Lizenzattribut, je nach vorgesehener Standard Lizenzart beim Erstellen von Benutzern
inherited oder released oder registered oder blocked oder removable bei Statusattribut, je nach vorgesehenem Standard Status beim Erstellen von Benutzern
true oder false bei Attribut für Documents-Zugang, je nach vorgesehener Einstellung beim Erstellen von Benutzern
true oder false bei Attribut für Archiv-Zugang, je nach vorgesehener Einstellung beim Erstellen von Benutzern
- Zielattribut: den jeweiligen Wert aus der Liste auswählen (siehe Name in o.a. Tabelle)


#### Zuordnungen für Gruppen

Die Standardzuordnungen für documentsOS-Benutzerprofile sind im Schema beschrieben: [Schema](schema.html#documents-access-profile). Es sind nur Attribute zu verwenden, die auch unterstützt werden, nicht unterstützte Attribute sind zu löschen.

Eine beispielhafte Zuordnung von Gruppenattributen könnte wie folgt aussehen:


![azure-15](assets/azure-15.png)

Abb. 20 - Gruppenattribute

**Hinweis:** Bei Zuweisungen für Gruppen müssen standardmäßig keine Änderungen vorgenommen werden.


## Bereitstellung testen

Nachdem die Konfiguration für die Bereitstellung durchgeführt wurde, sollte in jedem Fall ein Test durchgeführt werden.
Zunächst ist festzulegen, welche Benutzer und Gruppen *testweise* synchronisiert werden sollen. Für den Test sollten zunächst nur einzelne Benutzer und/oder Gruppen angegeben werden. Unter *Verwalten* ist *Benutzer und Gruppen* zu wählen und eine entsprechende Auswahl zu treffen:


![azure-16](assets/azure-16.png)

Abb. 21 - Benutzer- und Gruppenauswahl

Danach können über den Menüpunkt *Bei Bedarf bereitstellen* die zuvor gewählten Benutzer bzw. Gruppen ausgewählt werden. Die Aktion *Bereitstellen* ist auszuführen:


![azure-17](assets/azure-17.png)

Abb. 22 - Bei Bedarf bereitstellen

Für den Test wird ein Protokoll mit Details ausgegeben, eine erfolgreiche Bereitstellung würde z.B. wie folgt dargestellt:


![azure-18](assets/azure-18.png)

Abb. 23 - Erfolgreiche Bereitstellung

Zusätzlich sollten die so in documentsOS erstellten Benutzer und/oder Benutzerprofile ebenfalls geprüft werden.


## Bereitstellung starten

Waren die Überprüfungen erfolgreich, kann die Bereitstellung für weitere Benutzer und/oder Gruppen aktiviert werden. Dazu müssen diese Benutzer und/oder Gruppen ebenfalls über *Verwalten / Benutzer und Gruppen* hinzugefügt werden:


![azure-16](assets/azure-16.png)

Abb. 21 - Benutzer- und Gruppenauswahl

Danach kann die Bereitstellung gestartet werden:


![azure-19](assets/azure-19.png)

Abb. 24 - Bereitstellung starten

Microsoft Entra ID synchronisiert nun neue oder geänderte Benutzer/Gruppen regelmäßig nach documentsOS. Dies Synchronisierung wird in aller Regel alle 40 Minuten durchgeführt, Ausführungen werden standardmäßig in *Bereitstellungsprotokolle* bzw. *Überwachungsprotokolle* festgehalten.

[PDF Version](example-azure.pdf?b=2026-02-10)