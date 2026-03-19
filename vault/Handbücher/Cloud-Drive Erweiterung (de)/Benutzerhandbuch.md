---
title: "Benutzerhandbuch"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-de/userguide.html"
---

# Benutzerhandbuch

Über die Erweiterung **otrDriveConnect** können Dokumente aus Documents mit anderen Personen geteilt werden, um diese z.B. gemeinsam in einem geeigneten Programm zu bearbeiten und nach der Bearbeitung in Documents wieder zu aktualisieren.
In diesem Handbuch wird erläutert, welche Einstellungen Benutzer zur Verbindung mit dem Cloud-Drive Anbieter durchführen müssen und welche Aktionen für die Freigabe und Aktualisierung von Dokumenten zur Verfügung stehen.

Derzeit werden folgende Cloud-Anbieter unterstützt:

- Microsoft OneDrive
- Google Drive (ab documentsOS 6.2.0)

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

Die nachfolgenden Beschreibungen und Abbildungen stellen Informationen bei Verwendung von *Microsoft OneDrive* dar. Bei Verwendung von *Google Drive* sind die Einstellungen ähnlich, an einigen Stellen werden dafür auch Zusatzhinweise gegeben.


## Verbinden eines Cloud-Drive Anbieters

Damit Dokumente mit anderen Personen in einem Cloud-Drive geteilt werden können, muss jeder Benutzer sein persönliches Konto bei einem Anbieter mit Documents verbinden.

1. Über das Benutzermenü in documentsOS ist der Eintrag Apps und Dienste auswählen. Wird Documents5 verwendet, heißt der Eintrag im Benutzermenü Externe Anbieter.


![user-external-services-usermenu](assets/user-external-services-usermenu.png)

Abb. 58 - Menüeintrag - Apps und Dienste

1. Es öffnet sich ein Dialog, in dem alle Anbieter angezeigt werden, welche verbunden werden können (die Anbieter wurden vorher vom Administrator des Systems bereitgestellt). Für die Erweiterung otrDriveConnect muss mindestens ein Anbieter Microsoft OneDrive oder Google Drive vorhanden sein.


![user-external-services-msinactive](assets/user-external-services-inactive.png)

Abb. 59 - Beispiel: Inaktiver Anbieter Microsoft

1. Um einen Anbieter zu verbinden, muss die entsprechende Kachel angeklickt werden. Es öffnet sich ein Dialog, in dem die Anmeldedaten für das Konto beim Anbieter abgefragt werden und eingegeben werden müssen.


![user-external-services-mslogin](assets/user-external-services-mslogin.png)

Abb. 60 - Beispiel: Microsoft-Login

Es ist zu beachten, dass der Browser unter Umständen Pop-up-Fenster blockiert. Diese sind dann freizugeben. Nach einer erfolgreichen Authentifizierung wird die Kachel des Anbieters grün gefärbt (Anbieter ist nun aktiv).


![user-external-services-msactive](assets/user-external-services-active.png)

Abb. 61 - Beispiel: Aktiver Anbieter Microsoft

Über die Aktionsschalter auf der Kachel können weitere Einstellungen angezeigt oder bearbeitet werden:

- führt eine Abmeldung vom Service durch
- zeigt Informationen zum Service an


## Dokumente im Cloud-Drive bereitstellen

Um Dokumente mit anderen Personen zu teilen, muss in der Listenansicht eines Dokumentenregisters ein Dokument markiert und die Aktion **Upload in den Cloud-Drive** (Schalter am Dokumentenregister oder Kontextmenü / rechte Maustaste) gewählt werden:


![user-upload-button](assets/user-upload-1.png)

Abb. 62 - Aktion Upload in den Cloud-Drive


![user-upload-contextmenu](assets/user-upload-2.png)

Abb. 63 - Kontextmenü Upload in den Cloud-Drive

Im folgenden Dialog sind die Personen anzugeben, mit denen das Dokument geteilt werden soll.
Im Dialog wird der **Cloud-Drive Besitzer** dargestellt, dieses Feld ist nicht bearbeitbar.
Das Feld **Ausgewählter Anbieter** kann nur geändert werden, wenn mehrere Anbieter konfiguriert und verbunden wurden.
Eine Person wird hinzugefügt, indem die E-Mail-Adresse angegeben und der Schalter **Person hinzufügen** betätigt wird. Vor dem Hinzufügen einer Person kann optional noch eine Nachricht angegeben werden, die der Person in der späteren E-Mail Benachrichtigung mit dargestellt wird *(Ab Version documentsOS 6.1.0)*. Soll das Dokument nur mit einer weiteren Person geteilt werden, reicht es aus, die entsprechende E-Mail-Adresse anzugeben, der Schalter **Person hinzufügen** muss dann nicht zusätzlich betätigt werden.
Bereits hinzugefügte Personen werden in der Liste dargestellt, hinzugefügte Personen können über den Schalter **Person entfernen** wieder aus der Liste gelöscht werden. Für Personen, bei denen eine zusätzliche Nachricht angegeben wurde, wird dies über ein entsprechendes Symbol kenntlich gemacht.
Über die Auswahl **Kann bearbeiten** bzw. **Kann anzeigen** wird angegeben, ob die gewählte Person nur Leserechte auf das Dokument erhält oder dieses auch bearbeiten darf.

**Hinweis:** Bei Verwendung von *Google Drive* können Bearbeitungen am Dokument von anderen Personen nur vorgenommen werden, wenn sich diese Personen mit einem *Google Account* anmelden. Wird dies nicht durchgeführt, haben diese Personen nur *Leseberechtigungen* unabhängig von der hier gewählten Einstellung.

Eine Dokumentenfreigabe wird abgeschlossen, wenn der Schalter **Dokument freigeben** betätigt wird. Der Schalter **Abbrechen** beendet die Aktion, ohne das eine Freigabe erteilt wird.


![user-share-start](assets/user-share-1.png)

Abb. 64 - Dokumentenfreigabe

Wurde ein Dokument geteilt, wird es in der Listenansicht durch ein entsprechendes Symbol (Wolke) markiert. Geteilte Dokumente können in Documents nicht geändert werden, Änderungen sind erst möglich, wenn Freigaben wieder beendet wurden. Per Klick auf das Symbol kann der Cloud-Drive Besitzer das Dokument direkt in seinem Cloud-Drive öffnen.


![user-share-end](assets/user-share-2.png)

Abb. 65 - Freigegebenes Dokument

Personen, mit denen das Dokument geteilt wurde, erhalten eine E-Mail mit einem Link und können das Dokument darüber öffnen und je nach Berechtigung nur lesen oder auch bearbeiten.


![user-share-email](assets/user-email-1.png)

Abb. 66 - E-Mail Benachrichtigung

Möglicherweise werden die Personen dazu aufgefordert, aus Sicherheitsgründen noch einmal ihre E-Mail-Adresse einzugeben, um einen Sicherheitscode anzufordern, wenn sie das Dokument über den Link öffnen wollen. In dem Fall wird dann i.a.R. eine weitere E-Mail zugestellt, die einen Prüfcode enthält, der dann zusätzlich eingegeben werden muss, um Zugriff auf das Dokument zu erhalten.

**Hinweis:** Werden Dokumente bei Verwendung von *Microsoft OneDrive* im Microsoft Office Format geteilt, z.B. Word-Dateien (docx), Excel-Dateien (xlsx) oder PowerPoint-Dateien (pptx), können diese einfach mit dem entsprechenden Microsoft Office Produkt geöffnet werden. Für andere Formate, z.B. PDF-Dateien muss ein entsprechendes Programm zur Verfügung stehen. Bei Verwendung von *Google Drive* gilt dies in ähnlicher Art und Weise, Dokumente werden hier generell per *Google Docs* geöffnet.


## Dokumente aus Cloud-Drive aktualisieren

Soll ein Dokument z.B. nach einer gemeinsamen Bearbeitung mit anderen Personen in Documents wieder aktualisiert werden, ist in der Listenansicht des Dokumentenregisters dieses Dokument zu markieren und die Aktion **Download aus dem Cloud-Drive** zu wählen (Schalter am Dokumentenregister oder Kontextmenü / rechte Maustaste):


![user-download-button](assets/user-download-1.png)

Abb. 67 - Aktion Download aus dem Cloud-Drive


![user-download-contextmenu](assets/user-download-2.png)

Abb. 68 - Kontextmenü Download aus dem Cloud-Drive

In dem folgenden Dialog ist anzugeben, welche Option für die Aktualisierung verwendet werden soll, es stehen folgende Optionen zur Verfügung:

- Dokument aus Cloud-Drive löschen: Mit Beendigung der Freigabe wird das Dokument aus dem Cloud-Drive des Besitzers gelöscht.
- Freigabeberechtigungen im Cloud-Drive entziehen: Mit Beendigung der Freigabe werden die Berechtigungen am Dokument im Cloud-Drive des Besitzers für andere Personen entfernt. Diese Option kann nur einzeln gewählt werden, wenn das Dokument nicht zusätzlich auch gelöscht wird.
- Zusätzlich als PDF-Datei speichern: Mit Beendigung der Freigabe wird das Dokument zusätzlich als PDF-Datei in Documents gespeichert. Diese Option steht nur für bestimmte Dokumententypen zur Verfügung, z.B. Word-Dateien (docx), Excel-Dateien (xlsx) oder PowerPoint-Dateien (pptx).

**Hinweis:** Die Option *Zusätzlich als PDF-Datei speichern* steht nur bei Verwendung von *Microsoft OneDrive* zur Verfügung und nicht bei Verwendung von *Google Drive*.

Die Aktualisierung wird durchgeführt, wenn der Schalter **Freigabe beenden** betätigt wird. Der Schalter **Abbrechen** beendet die Aktion, ohne das eine Aktualisierung erfolgt.


![user-end-sharing](assets/user-end-sharing-1.png)

Abb. 69 - Freigabe beenden

**Achtung:** Eine Freigabe kann auch abgebrochen werden, wenn der Schalter **Freigabe verwerfen** betätigt wird. In diesem Fall wird zur Sicherheit ein zusätzlicher Bestätigungsdialog geöffnet, in dem weitere Optionen zur Löschung im Cloud-Drive bzw. zur Entfernung von Berechtigungen verwendet werden können.


![user-cancel-sharing](assets/user-end-sharing-2.png)

Abb. 70 - Freigabe verwerfen

Wurde für ein Dokument eine Aktualisierung durchgeführt, wird das vorherige Symbol (Wolke) entfernt. Das Dokument wird als neue Version bereitgestellt. Eine zusätzliche PDF-Datei wird bereitgestellt, wenn dies vorher gewählt war (nur bei *Microsoft OneDrive*).


![user-sharing-finish](assets/user-end-sharing-3.png)

Abb. 71 - Aktualisiertes Dokument


### Fehlermeldungen beim Download aus dem Cloud-Drive

Beim Beenden der Freigabe und dem Download können Fehler auftreten.
Folgende Meldung wird ausgegeben, wenn eine Person das Dokument noch geöffnet hat, das Dokument wird dann heruntergeladen, aber nicht im Cloud-Drive gelöscht:


![user-end-sharing-error1](assets/user-end-sharing-error1.png)

Abb. 72 - Fehlermeldung bei noch geöffneten Dokumenten

Folgende Meldung wird ausgegeben, wenn das Dokument im Cloud-Drive des Benutzers nicht mehr vorhanden ist, das Dokument wird dann in Documents wieder freigegeben, aber nicht aktualisiert:


![user-end-sharing-error2](assets/user-end-sharing-error2.png)

Abb. 73 - Fehlermeldung bei nicht mehr im Cloud-Drive vorhandenen Dokumenten


## Übersichtsordner für geteilte Dokumente

Wurden administrativ entsprechende Einstellungen festgelegt, steht Benutzern ein Übersichtsordner **Cloud Checkin/Checkout** zur Verfügung, in dem alle aktuell geteilten (und somit gesperrten Dokumente) des entsprechenden Benutzers angezeigt werden.


![user-folder-checkincheckout](assets/user-folder-checkincheckout.png)

Abb. 74 - Übersichtsordner geteilte Dokumente

Über den Ordner können die Dokumente geöffnet werden, außerdem stehen dieselben Möglichkeiten zur Beendigung der Freigabe wie am Dokumentenregister zur Verfügung.

[PDF Version](userguide.pdf?b=2026-01-13)