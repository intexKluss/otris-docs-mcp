---
title: "OpenAI"
source: "https://otris.software/documents/manuals/books/otr-ai/service-overview-openAI-openAI.html"
---

# OpenAI

![](./assets/service-openai-logo.png?class=medium)

**Azure OpenAI Service:**[hier](service-overview-openAI-azure.html)

[OpenAI Inc.](https://openai.com/) ist ein US-amerikanisches Softwareunternehmen, das sich seit Ende 2015 mit der Erforschung von künstlicher Intelligenz beschäftigt.

**Firmensitz:** San Francisco, Kalifornien, Vereinigte Staaten


### Performanz

Sie sind Marktführer auf dem GenAI-Markt und bekannt für fortschrittliche Modelle wie GPT-4 und GPT-5. Die leistungsstärksten Modelle bieten die höchste Qualität im Vergleich zu allen anderen Diensten (Anthropic, VertexAI, Mixtral, Mistral).

Unter dem Aspekt der Geschwindigkeit befindet sich das leistungsfähigste Modell (gpt-5.2) im Mittelfeld, es ist etwas langsamer als z.B. Mixtral 8x7B, aber dafür deutlich schneller als das stärkste Anthropic Modell (claude-opus-4).


### Kosten

Preislich gesehen befindet sich das leistungsfähigste Modell (gpt-5.2) auch eher im Mittelfeld, es gibt einige (u.a. schwächere) Dienste, die deutlich günstiger sind, jedoch auch Dienste, die erheblich teurer sind.

Quelle Modell Vergleich: [artificialanalysis.ai](https://artificialanalysis.ai/)


## Chat Modelle

Die im Folgenden aufgelisteten AI Modelle können mit dem AI Toolkit genutzt werden (Stand: Dezember 2025). Eine Übersicht der Modelle ist [hier](https://platform.openai.com/docs/models) zu finden.

- gpt-4o
- gpt-4o-mini
- gpt-4.1
- gpt-4.1-mini
- gpt-4.1-nano
- o1
- o3
- o3-mini
- o4-mini
- gpt-5
- gpt-5-mini
- gpt-5-nano
- gpt-5.2

**Hinweis:** Das Modell `o1-mini` wird explizit nicht unterstützt.


## Reasoning Modelle

Die Schlussfolgerungsfähigkeit wird von einigen Modellen der **GPT-5-Serie** (z.B. gpt-5, gpt-5-mini) sowie von bestimmten **vorherigen Modellen** unterstützt.
Die GPT-5-Modelle sind speziell auf die Responses-API und Schlussfolgerungsfähigkeit trainiert, sodass OpenAI bei diesen Modellen die [Nutzung der Responses-API empfiehlt](https://platform.openai.com/docs/guides/reasoning).

**Hinweis:** Nicht alle Modelle jeder Generation unterstützen Schlussfolgerungsfähigkeit vollständig.


### Multimodale Unterstützung

OpenAI unterstützt die Verarbeitung multimodaler Eingaben der folgenden Dateitypen:

- jpg
- png
- gif
- webp


## API-Key

Das Erstellen eines API Keys ist in der [Quickstart Anleitung](https://platform.openai.com/docs/quickstart/step-2-set-up-your-api-key) beschrieben. Für einen API Key wird ein OpenAI Account benötigt. Diesem Account wird dann der API Key [hier](https://platform.openai.com/account/api-keys) hinterlegt.