---
title: "Konfigurationen sichern und wiederherstellen"
source: "https://otris.software/documents/manuals/books/app-doc/backup.html"
---

# Konfigurationen sichern und wiederherstellen

Konfigurationen können gesichert und bei Bedarf einfach wieder in die
Anwendung importiert werden. Neben dem allgemeinen Vorteil einer
externen Sicherung der Konfigurationen können auf diesem Weg auch
verschiedene Alternativen getestet werden. Auch eine Bearbeitung von
Konfigurationen ohne Zugriff auf den Server ist so möglich.

Öffnen Sie hierzu die Liste *Aktionen* und wählen den Export aus. Mit der Aktion *Export* erzeugen Sie eine JSON-Datei der Konfiguration.
Der Befehl „*Alle Konfigurationen sichern*“ erzeugt in diesem Kontext
eine JSON-Datei mit sämtlichen Konfigurationen. Dies beinhaltet neben
denen für Ordner und Mappentypen auch alle App-Konfigurationen. Das
Wiederherstellen erfolgt in diesem Fall ebenfalls durch einen Dialog mit
einem Textfeld, in das der Inhalt der JSON-Datei kopiert wird.


![Export einer Sicherung einer App Konfiguration](media/import-export.png)

Abb. 43 - Export einer Sicherung einer App Konfiguration

Beim *Import* kann diese Datei dann hochgeladen werden.


![Import einer Sicherung einer App Konfiguration](media/import.png)

Abb. 44 - Import einer Sicherung einer App Konfiguration