---
title: "Installation und optionale Zusatzkonfigurationen in Documents5"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-de/installation-documents5.html"
---

# Installation und optionale Zusatzkonfigurationen in Documents5

Nachfolgend werden die Installation und zusätzliche Konfigurationsmöglichkeiten bei Verwendung von **Documents5** beschrieben.


## Installation

Zur Installation (Bereitstellung) der Erweiterung muss per Documents-Manager ein Script erstellt und einmalig ausgeführt werden:

- Scriptname: Der Scriptname kann frei gewählt werden
- Quellcode aus server/scriptlibs: der Wert muss otrDriveConnect_INIT lauten
- Quellcode: es darf kein Quellcode angegeben werden

**Hinweis:** Damit das Script ausgeführt werden kann, muss entweder unter Documents-Einstellungen / Documents (Basis) ein korrekter Job-Benutzer angegeben werden oder am Script muss auf dem Register Testen ein korrekter Benutzer-Login hinterlegt sein.


![install-script-settings](assets/install-script-settings.png)

Abb. 42 - Scripteinstellungen

War die Installation erfolgreich, wird vom Script die Rückmeldung **SUCCESS** ausgegeben:


![install-script-message](assets/install-script-message.png)

Abb. 43 - Erfolgreiche Installation

War die Installation nicht erfolgreich, werden entsprechende Hinweismeldungen ausgegeben, die dann zu beachten sind, mögliche Meldungen betreffen z.B.:

- eine fehlende Lizenzierung für die Erweiterung
- eine zu geringe Version der zugrunde liegenden Documents-Installation


## Optionale Zusatzkonfigurationen


### Änderung der Registeraktionen für Upload und Download

Bei der Installation wird die globale Eigenschaft (Documents-Einstellungen / Eigenschaften) **GlobalRegisterAction=otrDriveConnect** gesetzt. Dadurch werden die Aktionen für den Cloud-Drive Upload bzw. Download automatisch für alle Dokumentenregister aller vorhandenen Mappentypen bereitgestellt. Werden neue Mappentypen mit Dokumentenregistern später angelegt, stehen die Aktionen auf diesen Registern somit ebenfalls automatisch zur Verfügung. Sollen die Aktionen bei bestimmten Mappentypen und / oder nur bestimmten Dokumentenregistern zur Verfügung stehen, sind folgende Änderungen möglich:

- Abschalten der Aktionen auf allen Dokumentenregistern eines bestimmten Mappentypen: Mappentyp-Eigenschaft GlobalRegisterAction=-otrDriveConnect ("-" vor dem Aktionsnamen)
- Abschalten der Aktionen auf bestimmten Dokumentenregistern eines Mappentypen: Register-Eigenschaft GlobalRegisterAction=-otrDriveConnect ("-" vor dem Aktionsnamen)


### Bereitstellung einer Benutzer-Übersicht für geteilte Dokumente

Per Documents-Manager kann am Benutzer die zusätzliche Eigenschaft **hasDriveConnectFolder** auf den Wert 1 gesetzt werden (Standard = 0 oder nicht gesetzt). Wird die Einstellung gesetzt, erhalten Benutzer einen zusätzlichen Ordner **Cloud Checkin/Checkout**, in dem alle Dokumente dargestellt werden, die von diesem Benutzer mit anderen Personen geteilt wurden und somit gesperrt sind. Über entsprechende Aktionen können dort die Freigaben direkt beendet werden.

[PDF Version](installation-documents5.pdf?b=2026-01-13)