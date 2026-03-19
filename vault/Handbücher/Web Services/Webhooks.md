---
title: "Webhooks"
source: "https://otris.software/documents/manuals/books/otrwebservices/webhooks-general.html"
---

# Webhooks

Ein Webhook ist eine HTTP-basierte Rückmeldefunktion, die eine schlanke, event-gesteuerte Kommunikation zwischen zwei Server-Anwendungen ermöglicht.

Der grundlegende Ablauf eines Webhooks ist wie folgt: Eine Anwendung (in diesem Fall Documents) stellt einen Endpunkt (URL) bereit, an den andere Anwendungen Daten senden können. Wenn ein bestimmtes Ereignis in der sendenden Anwendung eintritt (z.B. neuer Termin in Calendly), wird eine (POST-)HTTP-Anfrage an den Webhook-Endpunkt der empfangenden Anwendung (Documents) gesendet. Diese Anfrage enthält normalerweise die relevanten Daten zum Ereignis.

Webhooks bieten diverse Vorteile:

- Echtzeitkommunikation: Ein Webhook wird meist zeitnah aufgerufen, nachdem ein Ereignis bei einer Anwendung eingetreten ist.
- Effizienz: Webhooks senden nur dann Daten, wenn ein Ereignis auftritt. Damit reduzieren sie den Overhead im Vergleich zu regelmäßigen Abfragen oder Polling-Mechanismen.
- Einfache Integration: Webhooks erleichtern die Integration von verschiedenen Anwendungen oder Diensten, da sie auf standardisierten HTTP-Protokollen basieren. Die Entwickler können Webhooks nutzen, um Anwendungen schnell miteinander zu verbinden und Daten auszutauschen.
- Flexibilität: Webhooks bieten eine flexible und anpassbare Methode zur Datenübertragung. Die empfangende Anwendung kann die eingehenden Daten verarbeiten und je nach Bedarf spezifische Aktionen ausführen. Dadurch lassen sich komplexe Workflows und Integrationen realisieren.

**Wichtiger Hinweis:** Ab Version documentsOS 6.0.1 (#2505) wurde die Erweiterung *Webhooks* entfernt und in die neue Erweiterung *Web Services* integriert. Bereits vorher eingerichtete Webhooks werden automatisch in der neuen Erweiterung bereitgestellt. Damit bereits vorher eingerichtete Webhooks weiter funktionieren, muss die neue Erweiterung *Web Services***aktiviert werden**. Diese Dokumentation beschreibt die notwendigen Konfigurationen in documentsOS und stellt zusätzlich ein Beispiel für die Integration mit einem ausgehenden Webhook in Microsoft Teams bereit.