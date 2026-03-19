---
title: "Einleitung"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-de/index.html"
---

# Einleitung

Mit der Erweiterung **otrDriveConnect** können Dateien von einem Dokumentenregister in einen Cloud-Drive hochgeladen und wieder heruntergeladen werden. Derzeit werden folgende Cloud-Anbieter unterstützt:

- Microsoft OneDrive via Microsoft Graph API, siehe auch Konfiguration in Microsoft Entra ID
- Google Drive via Google Drive API und Google Docs API (ab documentsOS 6.2.0), siehe auch Konfiguration in Google Cloud Console

Wichtigster Anwendungsfall ist die gemeinsame Bearbeitung von **Office-Dokumenten** (Collaboration) mit mehreren Personen:

- Dokumente aus Documents werden mit anderen Benutzern geteilt und im jeweiligen Drive (Microsoft One Drive oder Google Drive) des Erstellers / Besitzers bereitgestellt
- andere Benutzer werden automatisch per E-Mail informiert, das geteilte Dokument kann nun gemeinsam bearbeitet werden
- nach Abschluss der Bearbeitung kann das Dokument wieder aus dem jeweiligen Drive des Erstellers / Besitzers heruntergeladen und als neue Dokumentenversion bereitgestellt werden

**Hinweise:** Grundsätzlich können alle Dateitypen geteilt werden. Eine Bearbeitung geteilter Dateien ist allerdings nur für jeweils unterstützte **Office-Dokumente** möglich. Diese Dokumente werden dann je nach Cloud-Anbieter direkt im Browser mit der jeweiligen Anwendung zur Bearbeitung geöffnet, z.B. Word Online, Excel Online oder PowerPoint Online bei via Microsoft OneDrive geteilten Dokumenten bzw. Google Docs bei via Google Drive geteilten Dokumenten (wenn sie von Google Docs automatisch konvertiert werden können). Bei Verwendung von Google Drive können Bearbeitungen am Dokument von anderen Personen nur vorgenommen werden, wenn sich diese Personen mit einem *Google Account* anmelden. Wird dies nicht durchgeführt, haben diese Personen nur *Leseberechtigungen*. Änderungen an Dokumenten, die in den jeweiligen Browseranwendungen der Anbieter durchgeführt werden, werden normalerweise innerhalb weniger Sekunden gespeichert. Um sicherzustellen, dass beim Herunterladen des bearbeiteten Dokuments auch alle Änderungen enthalten sind, sollten geöffnete Dokumente geschlossen werden. Die nachfolgende Übersicht stellt die Bearbeitungsmöglichkeit für Office-Dokumente dar (Stand Oktober 2025):

| Dateiformat | Microsoft OneDrive | Google Drive |
| --- | --- | --- |
| .docx (Microsoft Word Format) | ✓ 1 | ✓ 2 |
| .xlsx (Microsoft Excel Format) | ✓ 1 | ✓ 2 |
| .pptx (Microsoft PowerPoint Format) | ✓ 1 | ✓ 2 |
| .vsdx (Microsoft Visio Format) | ✓ 1 | ✗ |
| .odt (OpenDocument-Text) | ✓ 3 | ✗ |
| .ods (OpenDocument-Tabelle) | ✓ 3 | ✗ |
| .odp (OpenDocument-Präsentation) | ✓ 3 | ✗ |
| .odg (OpenDocument-Grafik) | ✗ | ✗ |
| .doc (altes Microsoft Word Format) | ✗ 4 | ✓ 2 |
| .xls (altes Microsoft Excel Format) | ✗ 4 | ✓ 2 |
| .ppt (altes Microsoft PowerPoint Format) | ✗ 4 | ✓ 2 |
| .vsd (altes Microsoft Visio Format) | ✗ 4 | ✗ |
| .txt (unformatierte Textdatei) | ✓ 5 | ✗ |

Standardprogramme zur Bearbeitung:

- 1 Word Online, Excel Online, PowerPoint Online oder Visio für das Web
- 2 Automatische Konvertierung mit Google Docs
- 3 Mit Formatierungsunterschieden (Kompatibilitätsprobleme)
- 4 Keine Bearbeitungsmöglichkeit mit Word Online, Excel Online, PowerPoint Online oder Visio für das Web, Datei wird nur schreibgeschützt geöffnet
- 5 Wenn im Online-Text-Editor geöffnet

[PDF Version](index.pdf?b=2026-01-13)