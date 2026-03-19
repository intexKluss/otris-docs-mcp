---
title: "Responses API"
source: "https://otris.software/documents/manuals/books/otr-ai/responses-api.html"
---

# Responses API

Die **Responses API** ist die neue Schnittstelle von OpenAI, die erweiterte Funktionen wie Websuche und Reasoning unterstützt. Um diese API zu nutzen, können entsprechende Einstellungen im **AdminCenter** vorgenommen werden.

**Hinweis:** Die Responses API wird sowohl unter der OpenAI Platform als auch im Azure unterstützt.


## AI-Konfiguration

Wenn in einer **AI-Konfiguration** der Service OpenAI (nicht im Azure) ausgewählt wird, erscheint das Register **Werkzeugeinstellungen**:


![aiconfig-service-openai](./assets/aiconfig-service-openai.png?class=large)

Abb. 47 - OpenAI-Auswahl blendet Werkzeugeinstellungen ein

In diesem Register kann über das Dropdownfeld **Antwortgenerierungsmodus** zwischen der bisherigen **Chat/completions API** und der neuen **Responses API** gewechselt werden.


![aiconfig-service-openai-api-choice](./assets/aiconfig-service-openai-api-choice.png?class=large)

Abb. 48 - OpenAI-Auswahl blendet Werkzeugeinstellungen ein

Für die Responses API kann dann wahlweise die **Websuche** und/oder das **Reasoning** aktiviert werden. Diese beiden Optionen werden im Folgenden näher beschrieben.


## Websuche

Bei Auswahl der **Responses API** besteht die Möglichkeit, die Websuche zu aktivieren. Damit kann die KI während des Chats auf aktuelle Informationen zugreifen, um fundierte Antworten zu liefern.

Um die Ergebnisse der Websuche zu optimieren, können weitere **Sucheinstellungen** festgelegt werden:

- Umfang des Suchskontexts: Bestimmt, wie viel Text rund um die gefundenen Suchtreffer ausgewertet wird. Ein größerer Kontext kann zu besseren Antworten führen.
- Standort: Gibt an, welcher geografische Standort bei der Websuche berücksichtigt wird, z. B. für lokale Ergebnisse oder zeitbezogene Informationen.
Stadt: z.B. Berlin
Land: Zwei-Buchstaben-ISO-Code des Landes, z.B. DE
Region: Region oder Bundesland, z.B. Nordrhein-Westfalen (Freitext)
Zeitzone: IANA-Zeitzone, z.B. Europe/Berlin


![aiconfig-service-openai-websearch-option](./assets/aiconfig-service-openai-websearch-option.png?class=large)

Abb. 49 - Konfiguration der Websuche


## Reasoning

Bei Auswahl der **Responses API** kann die Reasoning-Funktion (Schlussfolgerungsfähigkeit) aktiviert werden.

Die Reasoning-Funktion wird aktuell durch die folgenden Modelle unterstützt:

- O-Serie (z.B. o3, o4‑mini): Unterstützt mehrstufiges Denken, Tool-Integration und strukturierte Argumentation innerhalb der Responses API.
- GPT‑5-Serie (z.B. gpt-5, gpt-5-mini, gpt-5-nano): Neuere Reasoning-Modelle, trainiert mit Reinforcement Learning. Produzieren längere interne Chains of Thought und sind besonders stark bei komplexen Problemen, wissenschaftlicher Analyse, Codierung und Multi-Step Planning.

Es können zusätzlich folgende Einstellungen getroffen werden:

- Zusammenfassung: Steuert, ob und in welcher Form der Reasoning-Prozess zusammengefasst wird. Diese Zusammenfassung ist kein Einblick in interne Chain-of-Thought-Inhalte, sondern eine modellgenerierte, nutzerorientierte Kurzfassung der angewendeten Schritte. Automatisch (Default): Das Modell entscheidet abhängig vom Kontext, wie ausführlich die Zusammenfassung ausfällt. Kompakt (modellabhängig): Liefert eine kurze, prägnante Übersicht über die wichtigsten Schlussfolgerungen, ohne zusätzliche Details oder längere Erklärstrukturen. Detailliert: Erstellt eine umfassendere Beschreibung der vom Modell verwendeten Überlegungswege auf Output-Ebene, inkl. Begründungen, Annahmen und Zwischenschritten – jedoch weiterhin ohne Offenlegung der internen Chain of Thought.
- Reasoning-Intensität: Gibt an, wie viel kognitiver Aufwand in die Bearbeitung einer Anfrage investiert wird. Niedrig: Schnellere Antworten mit geringerer Analyse-Tiefe. Geeignet für einfache Nachfragen, Lookup-Antworten oder kurzes Umformulieren. Mittel (Default): Balance aus Tiefe und Geschwindigkeit. Ideal für allgemeine Fachfragen, Problemlösungen mittlerer Komplexität, Code-Erstellung oder strukturierte Erklärungen. Hoch: Maximale Reasoning-Tiefe. Das Modell nutzt erweiterte Analyse, mehrschrittige Planung und Validierungen. Geeignet für anspruchsvolle Aufgaben wie mehrteilige Berechnungen, komplexe Architekturplanung, wissenschaftliche Argumentation oder tiefgehende Fehleranalyse.


![ai-config-service-openai-reasoning](./assets/ai-config-service-openai-reasoning.png?class=large)

Abb. 50 - Konfiguration der Schlussfolgerung

**Hinweis:** Im Azure-Modus mit der Responses API können im AI Toolkit ausschließlich die Modelle `o4-mini`, `gpt-5` und `gpt-5.1` für Reasoning verwendet werden. Bei anderen Modellen (z.B. gpt-4.1) kann es zu einer Fehlermeldung kommen, wenn Reasoning trotzdem aktiviert wird.