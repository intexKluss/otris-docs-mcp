---
title: "Azure OpenAI Service"
source: "https://otris.software/documents/manuals/books/otr-ai/service-overview-openAI-azure.html"
---

# Azure OpenAI Service

![](./assets/service-openai-logo.png?class=medium)

**OpenAI Platform:**[hier](service-overview-openAI-openAI.html)

[Microsoft](https://www.microsoft.com) ist ein US-amerikanisches Technologieunternehmen, das sich seit seiner Gründung im Jahr 1975 mit der Entwicklung und Bereitstellung innovativer Software- und Hardwarelösungen beschäftigt. Mit dem Azure OpenAI Service bietet Microsoft eine leistungsfähige Plattform, die Unternehmen dabei unterstützt, die OpenAI Technologie auf Microsoft Infrastruktur zu betreiben, auf einer Vielzahl von frei wählbaren Standorten, um beispielsweise EU-konform hinsichtlich des Datenschutzes zu sein.

[OpenAI Inc.](https://openai.com/) ist ein US-amerikanisches Softwareunternehmen, das sich seit Ende 2015 mit der Erforschung von künstlicher Intelligenz beschäftigt.

**Firmensitz:** San Francisco, Kalifornien, Vereinigte Staaten


### Performanz

Die Leistungsfähigkeit und Eigenschaften der Modelle sind identisch mit den Modellen, die direkt bei OpenAI gehostet werden.
Die Azure OpenAI Variante ist eine individuell gehostete OpenAI Instanz mit ausgewählten Modellen. Diese Instanz ist isoliert und unabhängig von OpenAI Servern. Sie bietet den Vorteil durch die Integration von OpenAI-Technologien und Azure-Infrastruktur.

Der Serverstandort ist aus mehreren frei wählbar (u.a. Schweden).


## Chat Modelle

Die im Folgenden aufgelisteten AI Modelle können mit dem AI Toolkit genutzt werden (Stand: Dezember 2025). Eine Übersicht der Modelle ist [hier](https://platform.openai.com/docs/models) zu finden.

**WICHTIG:** Der in documentsOS hinterlegte Modellname **muss** dem **Namen des Deployments** im Azure AI Studio entsprechen.

- gpt-4o
- gpt-4o-mini
- gpt-4.1
- gpt-4.1-mini
- gpt-5
- gpt-5.1


## Reasoning Modelle

Die Schlussfolgerungsfähigkeit wird von einigen Modellen der **GPT-5-Serie** (z.B. gpt-5, gpt-5.1) sowie von bestimmten **vorherigen Modellen** unterstützt.
Die GPT-5-Modelle sind speziell auf die Responses-API und Schlussfolgerungsfähigkeit trainiert, sodass OpenAI bei diesen Modellen die [Nutzung der Responses-API empfiehlt](https://platform.openai.com/docs/guides/reasoning).

**Hinweis:** Nicht alle Modelle jeder Generation unterstützen Schlussfolgerungsfähigkeit vollständig.


### Multimodale Unterstützung

openAI unterstützt die Verarbeitung multimodaler Eingaben der folgenden Dateitypen:

- jpg
- png
- gif
- webp


## API-Key

Das Erstellen eines API Keys ist in der [Quickstart Anleitung](https://platform.openai.com/docs/quickstart/step-2-set-up-your-api-key) beschrieben. Für einen API Key wird ein OpenAI Account benötigt. Diesem Account wird dann der API Key [hier](https://platform.openai.com/account/api-keys) hinterlegt.