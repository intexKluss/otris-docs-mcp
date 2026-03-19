---
title: "Einleitung"
source: "https://otris.software/documents/manuals/books/otr-ai/index.html"
---

# Einleitung

Bei dem AI Toolkit handelt es sich um eine Bibliothek zur Verwendung von APIs für LLMs (z.B. OpenAI GPT) in documentsOS.


## Bestandteile

Das AI Toolkit besteht aus drei Kernkomponenten:

1. Copilot - Der Copilot ist ein KI-Chat für documentsOS, der unter anderem im Kontext von Mappen eingesetzt werden kann.
2. Scout - Der Scout analysiert mit KI-Unterstützung Mappen und Dokumente in einem Ordner und kann hieraus Information extrahieren, die (bisher) nicht in Mappenfeldern gespeichert sind. Damit kann der Scout auch zur Suche oder als Auswertungstool genutzt werden.
3. API - Die API ermöglicht die Integration von KI-Diensten über Skripte und bereitgestellte Funktionen


## Übersicht vorhandener KI Dienste und deren Funktionalitäten

| Service | Streaming der Antworten | Ausführen von Funktionen im Copiloten | generateText() | generateObject() | generateEmbeddings() | transcribe() |
| --- | --- | --- | --- | --- | --- | --- |
| Anthropic | ☑ | ☑ | ☑ | ☑ | - (Nicht unterstützt) | - (Nicht unterstützt) |
| Google Vertex AI | ☑ | ☑ | ☑ | ☑ | ☑ | ☐ |
| Mistral | ☑ | ⚪︎ (Oft fehlerhaft seitens Mistral) | ☑ | ☑ | ☑ | - (Nicht unterstützt) |
| OpenAI | ☑ | ☑ | ☑ | ☑ | ☑ | ☑ |
| Azure OpenAI Service | ☑ | ☑ | ☑ | ☑ | ☑ | ☑ |


## Übersicht vorhandener Vektordatenbanken und deren Funktionalitäten

| Service | Ablage und Abfrage von Vektordaten |
| --- | --- |
| Qdrant | ☑ |