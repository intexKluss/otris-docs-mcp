---
title: "Skript-API"
source: "https://otris.software/documents/manuals/books/otrwebservices/script-api-general.html"
---

# Skript-API

Über die Skript-API lassen sich individuelle Schnittstellen entwickeln.
Vorraussetzung für die Entwicklung eine solchen Schnittstelle sind fortgeschrittene Kenntnisse in der Portalskripting-API und der Implementierung von REST-Schnittstellen.

Um eine eigene Skript-API bereitzustellen, sind im Wesentlichen die folgenden Schritte erforderlich:

1. Planung der Schnittstelle: Welche Funktionen sollen über welche Endpunkte und Methoden bereitgestellt werden? Beispiel für einen Anwendungsfall: Über den Endpunkt GET /example/files sollen alle Vorgänge aufgelistet werden.
2. Entwicklung einer Routenkonfiguration: Alle zuvor geplanten Endpunkte sollten über eine Konfiguration dem DOCUMENTS-Server bekannt gemacht werden. Hierzu stehen weiterführende Dokumentationen bereit: Konfiguration definieren
Konfiguration registrieren
3. Entwicklung eines Portalskriptes zur Verarbeitung der Anfragen: Die Verarbeitung der zuvor definierten Endpunkte erfolgt über Portalskripting. Hierzu gibt es eine weiterführende Dokumentation: Skriptgesteuerte Verarbeitung von Anfragen
4. Testen