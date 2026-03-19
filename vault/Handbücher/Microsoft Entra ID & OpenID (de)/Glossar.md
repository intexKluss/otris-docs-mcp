---
title: "Office 365/Azure Glossar"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/glossar.html"
---

# Office 365/Azure Glossar


## Microsoft 365/ Office 365

Microsoft 365 ist ein Abonnement, in welchem diverse Microsoft Produkte wie Word, Excel, PowerPoint als auch Dienste wie OneDrive zur Datensicherung und Azure AD zur Benutzerverwaltung angeboten werden.
Der Produktumfang ist abhängig von der Version und dem Preis pro Benutzer/Monat.


## Microsoft Entra ID

Der Enterprise-Identitätsdienst Microsoft Entra ID (ME-ID) bietet Single Sign-On (SSO) und mehrstufige Authentifizierung (Multi-Factor Authentication). MitMicrosoft Entra ID (IDP - Identity provider) können die hinterlegten Microsoft Benutzer sich an verschiedenen Anwendungen wie beispielsweise Documents (SP - Service provider) anmelden.


## OAuth 2 und OpenID Connect

Die Verbindung zwischen den Anwendungen (SP) und Microsoft Entra ID (IDP) wird über die Protokolle OAuth2 und OpenID Connect realisiert. Die Kommunikationsprotokolle sind für die Datenübertragung von beispielsweise Benutzerinformationen (OAuth 2) und den externen Login via Login Maske des IDPs (OpenID Connect) gedacht.


## Unterstützte Verbindungen zwischen Microsoft Entra ID und Documents

Die Verbindungen, Berechtigungen und allgemeinen Einstellungen werden hauptsächlich in der Microsoft Entra ID Administration verwaltet

- Benutzerimport aus einer in Microsoft Entra ID bereitgestellten Benutzergruppe (konfigurierbarer Job)
- Login via Microsofts Login Maske
Unterstützung von SSO (Login nur einmal notwendig, wenn der Benutzer beispielsweise in Word eingeloggt ist)
Unterstützung von 2FA (2 Faktor Authentifizierung)
Allgemeine Berechtigungssteuerung
- (Optional - gegen Aufwand) allgemeine Daten über die Graph API abfragen

[PDF Version](glossar.pdf?b=2026-02-12)