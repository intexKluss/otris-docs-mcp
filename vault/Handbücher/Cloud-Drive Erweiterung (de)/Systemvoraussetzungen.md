---
title: "Systemvoraussetzungen"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-de/requirements.html"
---

# Systemvoraussetzungen

Für die Verwendung der Erweiterung sind folgende Voraussetzungen notwendig:

- Lizenzierung:
Die Erweiterung muss lizensiert sein (Modul DriveConnect muss in Lizenz vorhanden sein).
Die Erweiterung kann nur von Benutzern mit named-Benutzerlizenz verwendet werden.
- Documents-Version:
Documents5: Mindestens Documents Version 5.0i oder höher muss verwendet werden.
documentsOS: Mindestens documentsOS Version 6.0.0 oder höher muss verwendet werden. Bei Verwendung von Google Drive muss mindestens Version 6.2.0 oder höher verwendet werden.
- Firewall: Der Documents-Server muss mit dem eingestellten Anbieter kommunizieren können:
Microsoft: *microsoftonline.com, *.graph.microsoft.com, *.sharepoint.com
Google: drive.googleapis.com, docs.googleapis.com, oauth2.googleapis.com, accounts.google.com, *.googleusercontent.com
- SSL/TLS: Documents muss per SSL konfiguriert sein. Das SSL-Zertifikat sollte von einer vertrauenswürdigen Stammzertifizierungsstelle (Certificate Authority, "CA") gegen zertifiziert sein.
- Personen, die Dokumente aus Documents heraus teilen, benötigen Zugang zu dem jeweiligen Drive:
Microsoft: Microsoft OneDrive in dem Microsoft Entra ID, in dem die App-Registrierung konfiguriert ist
Google: Google Cloud Projekt, in dem die entsprechenden API's aktiviert wurden

[PDF Version](requirements.pdf?b=2026-01-13)