---
title: "Einstellungen in Microsoft Entra ID"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/azure/config-azure.html"
---

# Einstellungen in Microsoft Entra ID


## Zu Microsoft Entra ID navigieren

[https://portal.azure.com/#home](https://portal.azure.com/#home)

![Azure services -> Microsoft Entra ID](../assets/azure/azure-1.png)


## Eine neue App registrieren

Microsoft Entra ID → App-Registrierungen → Neue Registrierung

![Microsoft Entra ID -> App registrations](../assets/azure/azure-2.png)


![Microsoft Entra ID -> App registrations -> App -> Authentication](../assets/azure/azure-3.png)


| Einstellung | Wert | Hinweis |
| --- | --- | --- |
| Name | otris Software: <Produktname> | Beispiel: otris Software: Documents |
| Unterstützte Kontotypen | ( 1 ) Nur Konten in diesem Organisationsverzeichnis (einzelner Mandant) | Erlaubt nur den Login von Anwendern aus dieser Organisation |
| Umleitungs-URI | Web - https://<HOST>/documents<5>/srv/GenericRedirectReceiver | Host anpassen, documents (Windows bzw. Linux mit documentsOS) oder documents5 (Linux mit Documents5) je nach Installation |


## Client Secret erstellen

Microsoft Entra ID → App-Registrierungen → App → Zertifikate & Geheimnisse → Neuer geheimer Clientschlüssel

| Einstellung | Wert | Hinweis |
| --- | --- | --- |
| Beschreibung | otris intitial secret | Vorschlag - Name nicht wichtig |
| Gültig bis | 6 Monate | Vorschlag - Secrets können auch zeitlich kürzer/länger begrenzt werden |

Wichtig: Der rot markierte Wert muss sofort notiert werden, da er nur bei der Erstellung sichtbar ist.

![Microsoft Entra ID -> App registrations -> App -> Certificates & secrets](../assets/azure/azure-4.png)


**Wichtiger Hinweis:** Als *Client Secret* muss der **Wert** verwendet werden und **nicht** die *Geheime ID*.


## API Zugriff einrichten

Microsoft Entra ID -> App-Registrierungen -> App -> API-Berechtigungen

| API | Typ | Berechtigungsname |
| --- | --- | --- |
| Microsoft Graph | Anwendungsberechtigungen | User.Read.All |
| Microsoft Graph | Anwendungsberechtigungen | Group.Read.All |

Achtung: Für die beiden APIs ist eine Administratoreinwilligung notwendig. Wenn der anlegende Benutzer kein
Administrator ist, werden die Rechte nur angefragt, ein Administrator muss dann noch zustimmen.

![Microsoft Entra ID -> App registrations -> App -> API permissions](../assets/azure/azure-5.png)


## Gruppen erstellen

Um den Import nutzen zu können muss mindestens eine Gruppe mit Benutzern eingerichtet werden, welche anschließend
importiert werden kann. Zusätzlich können noch weitere Importgruppen oder Gruppen für die Zuweisung von
Zugriffsprofilen erstellt werden. Für die genaue Funktionsweise der Gruppen siehe
[ME-ID / Azure Config](../azure/config-azure-config.html#verhalten-von-einzelnen-eigenschaften).


## Gesammelte Informationen bereitstellen

Microsoft Entra ID -> App-Registrierungen -> App -> Übersicht

Folgende Informationen müssen zusätzlich zum Client Secret und mindestens einer
Importgruppe bereitgestellt werden:

| Bezeichnung | Englische Bezeichnung | Name in späterer Konfiguration |
| --- | --- | --- |
| Anwendungs-ID (Client) | Application (client) ID | clientId |
| Verzeichnis-ID (Mandant) | Directory (tenant) ID | tenantId |

[PDF Version](../azure/config-azure.pdf?b=2026-02-12)