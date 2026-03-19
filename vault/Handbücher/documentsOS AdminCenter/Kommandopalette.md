---
title: "Kommandopalette"
source: "https://otris.software/documents/manuals/books/admin-center/commands.html"
---

# Kommandopalette

Für **Schnellzugriffe** auf bestimmte AdminCenter Funktionen steht in der Standard-Toolbar die sogenannte **AdminCenter Kommando Toolbar** zur Verfügung:


![commands-ac-1](assets/commands-ac-1.png)

Abb. 11 - AdminCenter Kommando Toolbar


## Standard Kommandos

Per Klick auf das Icon der *AdminCenter Kommando Toolbar* wird eine Liste von *Standard Kommandos* dargestellt, aus der die entsprechende Aktion ausgewählt werden kann.


![commands-ac-2](assets/commands-ac-2.png)

Abb. 12 - Liste von Standard Kommandos

Je nach gewählter Aktion wird diese dann ausgeführt und z.B. eine Rückmeldung als *Notification* gegeben (z.B. *Clear all caches*) oder ein Dialog angezeigt (z.B. *System- und Versionsinformationen*).


## Zusätzliche Kommandos

Neben den Standard Kommandos können weitere Aktionen durchgeführt werden, dazu müssen die Namen der Kommandos im Suchfeld eingegeben werden. Folgende Kommandos stehen zusätzlich zur Verfügung:

- Mappenpool löschen:
Eingabe: pool und Auswahl Delete file pool
Aktion: Löscht den Mappenpool
Standard-Rückmeldung: Notification
- Wartungsoperation durchführen:
Eingabe: mtc: und Auswahl der entsprechenden Wartungsoperation, ggf. mit Angabe zusätzlicher Parameter
Aktion: führt die angegebene Wartungsoperation durch
Standard-Rückmeldung: Dialog bei Wartungsoperationen, die innerhalb kurzer Frist durchgeführt werden konnten oder Notification bei länger laufenden Wartungsoperationen
- XML-Export durchführen:
Eingabe: export: und Auswahl der entsprechenden Exportklasse
Aktion: führt einen XML-Export mit der ausgewählten Exportklasse durch
Rückmeldung: Downloadinformation im Browser
- Logging-Einstellungen der Web-Client-Applikation anpassen:
Eingabe: log und Auswahl Logging-Einstellungen
Aktion: Öffnet Dialogfenster zur Anpassung des Log-Levels sowie zum Herunterladen von Log-Dateien der Web-Client-Applikation (Tomcat-Logs).
Rückmeldung: Dialogfenster, Downloadinformation im Browser und Notification bei Änderungen

**Hinweis**: Hier geänderte Log-Levels werden sofort aktiv, sie dienen hauptsächlich zu Kontrollzwecken. Nach Durchführung der Kontrolle sollte das Standard-Level *ERROR* wieder eingestellt werden.

Die nachfolgenden Abbildungen verdeutlichen die o.a. Kommandos.


![commands-ac-3](assets/commands-ac-3.png)

Abb. 13 - Mappenpool löschen


![commands-ac-4](assets/commands-ac-4.png)

Abb. 14 - Mappenpool löschen, Standard-Rückmeldung


![commands-ac-5](assets/commands-ac-5.png)

Abb. 15 - Liste der Wartungsoperationen nach Suche mit mtc:


![commands-ac-6](assets/commands-ac-6.png)

Abb. 16 - Wartungsoperation, Rückmeldung als Dialog


![commands-ac-7](assets/commands-ac-7.png)

Abb. 17 - Wartungsoperation, Rückmeldung als Notification


![commands-ac-8](assets/commands-ac-8.png)

Abb. 18 - XML-Export mit Anzeige verfügbarer Exportklassen


![commands-ac-11](assets/commands-ac-11.png)

Abb. 19 - Logging-Einstellungen


![commands-ac-12](assets/commands-ac-12.png)

Abb. 20 - Dialog zur Anpassung der Logging-Einstellungen


## Erweiterungsabhängige Kommandos

Wenn bestimmte Erweiterungen aktiviert wurden, stehen zusätzliche Kommandos bereit, aktuell sind das:

- Mappentyp anzeigen:
Notwendige Erweiterung: Admin Tools muss aktiviert sein
Eingabe: ft: bzw. ft:<Mappentypname>
Aktion: zeigt das Formular zur Bearbeitung des ausgewählten Mappentypen an
- Benutzer anzeigen:
Notwendige Erweiterung: Benutzermanagement muss aktiviert sein
Eingabe: u:<Benutzername>
Aktion: zeigt das Formular zur Bearbeitung des ausgewählten Benutzerkontos an

Die nachfolgenden Abbildungen verdeutlichen die o.a. Kommandos.


![commands-ac-9](assets/commands-ac-9.png)

Abb. 21 - Mappentyp anzeigen per ft:


![commands-ac-10](assets/commands-ac-10.png)

Abb. 22 - Benutzerkonto anzeigen per u:sch