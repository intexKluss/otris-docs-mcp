---
title: "Einleitung"
source: "https://otris.software/documents/manuals/books/otrlifecycle/index.html"
---

# Einleitung

Mit der Erweiterung **otrLifeCycle** wird ein Lebenszyklus-Management für aktive und in Documents-Archive (*EAS*) archivierte Vorgänge und Dokumente bereitgestellt.
Das Lebenszyklus-Management ermöglicht neben der Abbildung von Vorschriften und gesetzlichen Regelungen für Aufbewahrungsfristen von Vorgängen und Dokumenten auch die Möglichkeit der Umsetzung von DSGVO-konformen Löschkonzepten von Daten.

Die Erweiterung kann nach der Bereitstellung und unter Beachtung der Systemvoraussetzungen von berechtigten Personen vollständig im Web-Client konfiguriert werden.
In einem Editor im Web-Client werden dazu Regeln definiert. Eine Regel enthält immer eine auszuführende Aktion und einen Zeitpunkt. Optional können zusätzliche Bedingungen angegeben werden. Folgende Aktionen werden unterstützt:

- Archivieren mit verschiedenen Optionen
- Löschen mit verschiedenen Optionen
- Start eines Workflows, z.B. um anstehende Löschungen zu prüfen bzw. zu bestätigen
- Ausführung eines Scriptes, um z.B. komplexe Zusatzprüfungen durchzuführen

Die Erstellung von ähnlichen Regeln kann durch die Konfiguration von Vorlagen unterstützt werden.
Alle sonstigen Einstellungen, wie die Registrierung von Vorgangsarten für das Lebenszyklus-Management, die Übertragung von neuen oder geänderten Regeln auf bestehende Vorgänge sowie der Export und Import von Regeln und Vorlagen können ebenfalls im Web-Client per administrativer Einstellung von berechtigten Benutzern vorgenommen werden.
Alle anstehenden (zukünftigen) Lebenszyklusregeln werden automatisch im Status dargestellt und sind somit für die Anwender ersichtlich.
In einer Ereignisübersicht können Administratoren die korrekte Ausführung von Regeln überwachen.

Eine zusätzliche Dokumentation bietet darüber hinaus eine Übersicht der zur Verfügung stehenden Callbacks von otrLifeCycle: [Callbacks](callbacks.html).