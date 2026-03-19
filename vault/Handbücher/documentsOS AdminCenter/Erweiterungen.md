---
title: "Erweiterungen"
source: "https://otris.software/documents/manuals/books/admin-center/extensions.html"
---

# Erweiterungen


## Allgemeines

Über **Erweiterungen** können vorhandene Zusatzfunktionen angezeigt und *aktiviert / deaktiviert* werden.


![extensions-ac-1](assets/extensions-ac-1.png)

Abb. 7 - Übersicht aktuelle Erweiterungen (inaktiv)

Durch die Aktivierung werden i.a.R. zusätzliche Konfigurationsordner für die jeweilige Erweiterung bereitgestellt:


![extensions-ac-2](assets/extensions-ac-2.png)

Abb. 8 - Beispiel Konfigurationsordner nach Aktivierung (Admin Tools, Azure AD Anbindung)

Für einige Erweiterungen können nach der Aktivierung globale Einstellungen vorgenommen werden, wenn dies vorgesehen ist:


![extensions-ac-3](assets/extensions-ac-3.png)

Abb. 9 - Beispiel Erweiterung ohne (Admin Tools) bzw. mit (Azure AD Anbindung) Einstellungen

Bei der Deaktivierung einer Erweiterung werden nach Bestätigung einer Sicherheitsabfrage vorher bereitgestellte Konfigurationsordner i.a.R. wieder entfernt. Für einige Erweiterungen werden bei einer Deaktivierung zusätzliche Dialoge dargestellt, die weitere Einstellungen für die Deaktivierung ermöglichen, siehe dazu jeweils die Dokumentation zur entsprechenden Erweiterung.

**Hinweis**: Die Aktivierung bzw. Deaktivierung einer Erweiterung wird im Logbuch protokolliert.


## Informationen zu aktuellen Erweiterungen

Folgende Erweiterungen stehen aktuell zur Verfügung:

- Admin Tools: Diese Erweiterung aktiviert die Konfigurationsordner Administration und Entwicklung mit weiteren Unterordnern. Mit diesen Einstellungen können die wichtigsten Einstellungen für die Konfiguration eines Documents-Mandanten vorgenommen werden.
- AI Toolkit: Diese Erweiterung ermöglicht es diverse KI Dienste mit documentsOS zu verbinden. Es enthält außerdem einen Copiloten, welcher die Arbeit mit Mappen erleichtert, siehe auch AI Toolkit Handbuch. Diese Erweiterung steht ab Version documentsOS 6.0.1 zur Verfügung.
- Benutzermanagement: Mit dieser Erweiterung können Redakteure, Benutzerkonten, Zugriffsprofile und Aliase im Webclient verwaltet werden, siehe auch Benutzermanagement.
- Cloud-Drive Anbindung: Mit dieser Erweiterung kann die Bereitstellung von Dokumenten in einem Cloud-Drive konfiguriert werden, siehe auch Cloud-Drive Erweiterung.
- Formularverwaltung: Mit dieser Erweiterung können Formulare erstellt werden, die die Bereitstellung von benutzerdefinierten Aktionen ermöglichen.
- Globale Aufzählungen: Mit dieser Erweiterung können häufig verwendete Aufzählungen global konfiguriert werden. Ist die Erweiterung Admin Tools aktiviert, wird der entsprechende Konfigurationsordner dort eingeordnet, ansonsten wird ein eigener Konfigurationsordner aktiviert.
- Lebenszyklus Verwaltung: Mit dieser Erweiterung kann das Lebenszyklus-Management konfiguriert werden, siehe auch Lebenszyklus-Management.
- Microsoft Entra ID Anbindung: Mit dieser Erweiterung kann eine Anbindung an Microsoft Entra ID (vormals als Azure AD bezeichnet) vorgenommen werden, siehe auch Microsoft Entra ID Sync.
- Mobile App: Mit dieser Erweiterung können die Einstellungen für die myFavorites-App im Webclient verwaltet werden, siehe auch myFavorites.
- OpenID Anbindung: Mit dieser Erweiterung kann die Authentifizierung mithilfe von OpenID Anbietern vorgenommen werden, siehe auch OpenID.
- SCIM Endpunkt: Mit dieser Erweiterung kann die automatisierte Bereitstellung von Benutzerkonten zwischen Identitätsanbietern (IDP) und Service Providern (SP) konfiguriert werden, siehe auch SCIM Anbindung.
- Signaturschnittstelle: Mit dieser Erweiterung können Signaturschnittstellen eingerichtet werden, siehe auch Signaturschnittstelle.
- Übersetzungsservice: Mit dieser Erweiterung können Übersetzungsservices für Texte und Dokumente in Documents eingerichtet werden, siehe auch Übersetzungsservice. Diese Erweiterung steht ab Version documentsOS 6.0.1 zur Verfügung.
- Web Services: Mit dieser Erweiterung können REST-Schnittstellen für Documents bereitgestellt werden, siehe auch Web Services. Diese Erweiterung steht ab Version documentsOS 6.0.1 zur Verfügung.
- Workflow Verwaltung: Mit dieser Erweiterung können documentsOS-Workflows direkt im Webclient erstellt und bearbeitet werden, siehe auch Webworkflow.