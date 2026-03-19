---
title: "Anleitung zur Softwareverteilung"
source: "https://otris.software/documents/manuals/books/documents-drop/distribution.html"
---

# Anleitung zur Softwareverteilung

Diese Anleitung bezieht sich auf die Installation der nativen Clients per Softwareverteilung


## DOCUMENTS Drop Native Office-Add-Ins und Desktop-Client

Die Anwendung wird per **MSI-Paket** verteilt, vgl. hierzu auch das Kapitel [[Handbücher/DOCUMENTS Drop/Installation|Installation]]. Die zu installierende Version muss hierbei in der Bit-Zahl (64-Bit/x64 vs. 32-Bit/x86) mit der Installation von Office übereinstimmen.


### Installation (Silent)


```javascript
msiexec /i DocumentsDrop.msi /qn /norestart
```

msiexec /i DocumentsDrop.msi /qn /norestartFeatures können über `ADDLOCAL` gezielt ein- bzw. ausgeschlossen werden. Bspw. kann die MSIX für die ModernShell Integration mit folgender Variable deaktiviert werden


```javascript
ADDLOCAL=Desktop,Desktop_DesktopShortcut,Desktop_StartMenuShortcut,Desktop_ShellMenuEntry,AddIn,AddIn_Outlook2013,AddIn_Word2013,ProtocolHandler
```

ADDLOCAL=Desktop,Desktop_DesktopShortcut,Desktop_StartMenuShortcut,Desktop_ShellMenuEntry,AddIn,AddIn_Outlook2013,AddIn_Word2013,ProtocolHandlerEine detaillierte Auflistung aller aktuellen Features finden Sie weiter unten


### Übersicht der MSI-Features


#### Desktop

| Feature-ID | Titel |
| --- | --- |
| Desktop | Desktop Client |
| Desktop_ShellMenuEntry | Klassisches Explorer-Kontextmenü |
| Desktop_ModernShellMenuEntry | Modernes Windows-/Explorer-Menü |
| Desktop_DesktopShortcut | Desktop-Verknüpfung |
| Desktop_StartMenuShortcut | Startmenü-Verknüpfung |
| Desktop_ScannerIntegration | Scanner-Integration |
| Desktop_AutostartShortcut | Autostart-Eintrag |


#### Office-Add-Ins

| Feature-ID | Titel |
| --- | --- |
| AddIn | Office Add-Ins (Basis) |
| AddIn_Outlook2013 | Outlook Add-In |
| AddIn_Word2013 | Word Add-In |
| AddIn_Excel2013 | Excel Add-In |


#### Sonstiges

| Feature-ID | Titel |
| --- | --- |
| ProtocolHandler | Protokoll-Handler |