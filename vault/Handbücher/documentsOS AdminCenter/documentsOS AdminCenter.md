---
title: "documentsOS - AdminCenter"
source: "https://otris.software/documents/manuals/books/admin-center/"
---

# documentsOS - AdminCenter

Mit dem **documentsOS - AdminCenter** wird direkt im Webclient ein **administrativer Bereich** bereitgestellt, mit dem berechtigte Benutzer über verschiedenste **Erweiterungen** die Einrichtung und Konfiguration eines Documents-Mandanten vornehmen können.
Ab *Version documentsOS 6.1.0* steht zusätzlich eine Paketverwaltung zur Installation von Application Distribution Packages (ADP) zur Verfügung, siehe auch [Paketverwaltung](package.html).

Standardmäßig haben **Redakteure** mit der Funktion **Documents Administrator** Zugang zum *AdminCenter*. Über [Rollen](roles.html) können Zugriffsprofile und/oder Benutzer angegeben werden, die zusätzlich Zugang zum *AdminCenter* oder zu *bestimmten Erweiterungen* erhalten sollen.

Der Zugang zum AdminCenter wird über eine besondere Outbar bereitgestellt:


![general-ac-1](assets/general-ac-1.png)

Abb. 1 - AdminCenter Outbar

**Wichtige Hinweise**:

- Der Zugang zum AdminCenter ist ausschließlich für Webclient-Anmeldungen mit den Sprachen Deutsch (de) oder Englisch (en) möglich. Werden andere Sprachen bei der Anmeldung am Webclient benutzt, steht das AdminCenter nicht zur Verfügung. Außerdem muss am Mandanten als erste Portalsprache Deutsch (de) und als zweite Portalsprache Englisch (en) angegeben sein.
- Benutzer, die das AdminCenter verwenden, dürfen nicht mit dem zweispaltigen Workspace, dem sogenannten MonoView arbeiten. Standardmäßig ist die Eigenschaft monoView nicht gesetzt. Sollte die Eigenschaft als globale Einstellung monoView=true gesetzt sein, muss für Benutzer, die das AdminCenter benutzen wollen, die Benutzereigenschaft monoView=false verwendet werden.
- Wird eine Lizenz ohne lizensiertes Portal-Skripting (pem-Flag scripting = 0) oder ohne lizensierte Gadgets (Plugin) verwendet, steht das AdminCenter ebenfalls nicht zur Verfügung bzw. kann nicht genutzt werden.

Per Klick auf die Outbar werden die AdminCenter Konfigurationsordner dargestellt:


![general-ac-2](assets/general-ac-2.png)

Abb. 2 - AdminCenter Konfigurationsordner (Standard, ohne aktivierte Erweiterungen)

- In der Übersicht kann ein Dashboard eingerichtet werden, siehe auch: Übersicht.
- Über Erweiterungen können Erweiterungen aktiviert, deaktiviert oder konfiguriert werden, siehe auch: Erweiterungen.
- Über Rollen ist die Zugriffskonfiguration der Erweiterungen für Profile und Benutzer durch ein Rollenkonzept erweiterbar, siehe auch: Rollen.

Zusätzlich wird in der Webclient-Toolbar eine **Kommandopalette** bereitgestellt, die Schnellzugriffe auf verschiedene Funktionsbereiche des AdminCenter bereitstellt, siehe auch: [Kommando-Toolbar](commands.html):


![general-ac-3](assets/general-ac-3.png)

Abb. 3 - AdminCenter Kommando-Toolbar

**Hinweis**: Werden Aktionen oder Befehle im AdminCenter ausgeführt, wird der aktuelle Benutzer für Rückmeldungen häufig per **Notification** informiert. Die dazu notwendige Eigenschaft (siehe auch globale Einstellung `allowNotification=true`) ist in documentsOS standardmäßig aktiviert und sollte nicht geändert werden.