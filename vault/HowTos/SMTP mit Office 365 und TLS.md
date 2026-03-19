---
title: "Office365 SMTP mit TLS Einstellungen"
source: "https://otris.software/documents/howto/email/o365-smpt-tls.html"
---

# Office365 SMTP mit TLS Einstellungen


## Konfiguration am Mandanten

| Eigenschaft | Wert |
| --- | --- |
| SMTP-Server | smtp.office365.com:587 |
| SMTP-Authentifizierung | 1 |
| Verfahren | Login |
| Benutzername | Vollständige Office-365-Email Adresse |
| Kennwort | ***** |
| STARTTLS | 1 |
| CA infofile | Pfad zum Root CA des Office365-Cert |
| Standard-Absender | MUSS der Benutzername sein |


## Besonderheiten (Probleme)

- smtp.office365.com verwendet verschiedene X.509 Zertifikate für TLS-Verbindungen abhängig vom Standort (siehe Zertifikat herunterladen)
- smtp.office365.com akzeptiert als der E-Mail-Absender ausschließlich den Benutzername der SMTP-Auth.
DOCUMENTS verwendet u.U. die E-Mail-Adresse des angemeldeten DOCUMENTS-Benutzers als Absender
Mandanten-Property: SMTPUseDefaultSender = 1 ab (5.0f)


## Zertifikat herunterladen

[Microsoft 365 encryption chains](https://docs.microsoft.com/en-us/microsoft-365/compliance/encryption-office-365-certificate-chains)

Mit folgendem Befehl das **Root CA** ermitteln: `openssl s_client -connect smtp.office365.com:587 -starttls smtp`

**Beispielausgabe DigiCert:**


Abb. 1 - Open SSL Befehl

In diesem Beispiel muss das Zertifikat von [DigiCert](https://www.digicert.com/kb/digicert-root-certificates.htm) heruntergeladen werden (suche nach `DigiCert Global Root CA`):


Abb. 2 - Microsoft Cert Download

**Beispielausgabe GlobalSign:**


Abb. 3 - Open SSL Befehl

In diesem Beispiel muss das Zertifikat von [GlobalSign](https://docs.microsoft.com/en-us/microsoft-365/compliance/encryption-office-365-certificate-chains?view=o365-worldwide#globalsign) heruntergeladen werden:


Abb. 4 - Global Sign Download

Die Zertifikatsdatei (PEM Format) == CA infofile in den E-Mail Einstellungen am Mandanten