---
title: "Google Gemini API / Vertex AI"
source: "https://otris.software/documents/manuals/books/otr-ai/service-overview-vertexAI.html"
---

# Google Gemini API / Vertex AI

![](./assets/service-vertexai-logo.png?class=medium)

Google Vertex AI ist ein Dienst von Google, welcher Zugriff auf verschiedene KI-Dienstleistungen bietet. Google Gemini ist ein von **Google** entwickelter KI-basierter, multimodaler Chatbot, der auf Vertex AI zur Verfügung steht.

**Firmensitz:** Mountain View, Kalifornien, Vereinigte Staaten


### Performanz

Google Gemini ist ein führender Anbieter auf dem GenAI-Markt und bekannt für fortschrittliche Modelle wie Gemini 1.5 Pro. Diese Modelle bieten eine hohe Qualität, die im Vergleich zu anderen Diensten (OpenAI, Anthropic, Mixtral, Mistral) sehr konkurrenzfähig sind. In Bezug auf die Qualität erzielt Gemini 1.5 Pro eine hohe Bewertung und gehört zu Spitzenklasse der bewerteten Modelle.

Unter dem Aspekt der Geschwindigkeit positioniert sich Gemini 1.5 Pro im Mittelfeld. Es ist etwas langsamer als einige Modelle wie Mixtral 8x7B und GPT-4o von OpenAI, aber immer noch schneller als das stärkste Anthropic Modell, Claude-3-Opus.


### Kosten

Preislich gesehen ist Gemini 1.5 Pro moderat und bietet ein gutes Preis-Leistungs-Verhältnis. Preislich liegt es im mittleren Segment und ist günstiger als einige Spitzenmodelle wie GPT-4 Turbo und Claude-3-Opus.

Quelle Modell Vergleich: [artificialanalysis.ai](https://artificialanalysis.ai/)


## Chat Modelle

Die im Folgenden aufgelisteten AI-Modelle können mit dem AI Toolkit genutzt werden (Stand: Dezember 2025).

- gemini-2.5-flash-lite
- gemini-2.5-flash
- gemini-2.5-pro
- gemini-3-pro-preview


## API-Key

Es gibt zwei Varianten die Gemini API zu nutzen:

1. Gemini API über Google AI Studio
2. Gemini API über die Google Cloud Platform mit Google Vertex AI

Im Folgenden wird vorrangig die Nutzung der ersten Variante beschrieben, da diese einfach einzurichten ist und leichter verfügbar sein sollte.


### API Key für die Nutzung der Gemini API über Google AI Studio

Um den Zugang über Google AI Studio einzurichten ist eine Registrierung unter [https://aistudio.google.com](https://aistudio.google.com) erforderlich. Danach kann über die Nutzeroberfläche ein neuer API-Schlüssel angelegt werden. Danach muss in documentsOS ein neuer Dienst vom Typ "Google Gemini" angelegt und dort der API-Schlüssel hinterlegt werden.


### Gemini API über Google Vertex AI anbinden

Diese zweite Variante ist insbesondere für Kunden interessant, welche schon die Google Cloud Platform nutzen. Hierbei wird ein Account für Vertex AI sowie ein Zugang für die verschiedenen Nutzer benötigt. Die Authentifizierung geschieht hierbei über OIDC und nicht per API-Schlüssel. Für weitere Details zur Nutzung wenden Sie sich bitte an Ihren documentsOS Vertriebspartner.