---
title: "Prompting best practices"
source: "https://otris.software/documents/manuals/books/otr-ai/prompting-best-practices.html"
---

# Prompting best practices


## Warum muss man überhaupt prompten?

LLMs sind in der Regel von Grund auf darauf trainiert mit dem Nutzer in einen Dialog zu treten und diesen auf hilfreiche Art und Weise zu unterstützen. Interessant hierbei ist, dass man dadurch LLMs Anweisungen geben kann, wie man es auch bei einem Menschen tun würde. Da einem LLM jedoch im Gegensatz zu einem menschlichen Gegenüber oftmals viele Informationen zu dem aktuellen Kontext, in dem es agiert, fehlen, kann es schnell irreführende Antworten liefern.

Man kann sich dies in etwa vorstellen wie einen neuen Mitarbeiter, der zwar sehr clever ist und viele Fähigkeiten besitzt, sich jedoch noch nicht mit den Details und Fachlichkeiten des neuen Arbeitsumfelds und der Software vertraut gemacht hat.

Hier kommt nun das Prompting ins Spiel, in dem man als Anwender bzw. Entwickler die Möglichkeit hat der KI etwas über das System, den Nutzer und sein aktuelles Umfeld zu erläutern. Darüber hinaus kann (und sollte) man auch Anweisungen zur Arbeitsweise geben.


## Was ist ein Prompt?

Doch vorerst zurück zum Anfang: Was ist überhaupt ein Prompt? Ein Prompt ist grundsätzlich erstmal ein Text, welchen man an das LLM übergibt. Ein Prompt kann aus einer Kombination von zwei Quellen stammen: Vom Nutzer und vom System. Auf einen Prompt antwortet das LLM mit einer Antwort, welche i.d.R. dem Nutzer präsentiert wird oder automatisch weiterverarbeitet wird.

In einer Konversation mit mehreren Schritten (Sprich mehrere Anfrage-Antwortpaare) bildet der gesamte vorherige Konversationsverlauf (inkl. der vorherigen Antworten) den Prompt. Die Antwort des LLMs wird dann wiederum dem Verlauf hinzugefügt. **Wichtig:** Die KI "lernt" nicht direkt aus dem Gespräch, sondern bekommt immer den gesamten Verlauf übermittelt und antwortet auf Grund dieses Chatverlaufs. Falls ein Training erfolgt (i.d.R. nur bei kostenfreien Diensten), dann erfolgt dieses nachgelagert und selbst dann wird die KI sich nicht direkt an vorherige Gesprächsverläufe "erinnern" können.


## Prompts in documentsOS

In documentsOS unterscheiden wir zwischen drei verschiedenen Quellen von Prompts, welche im Rahmen des Copiloten dann als Teil des Chatverlaufs an das LLM übermittelt werden.

- Prompts
Prompts sind Aufforderungen bzw. Anfragen des Nutzers an das System. Sie geben vor, was der Nutzer wissen oder mit der KI tun möchte. Diese können entweder vom Nutzer selbst eingegeben werden oder über die Administration vordefiniert werden. Auch der Nutzer kann seine selbst eingegebenen Prompts speichern und somit wiederverwenden.
- Wissen
Wissen bildet die Grundlage für das Antworten und Handeln des LLMs. Wissen wird zusätzlich zu den Anfragen des Nutzers als Teil des Chatverlaufs mitgegeben und enthält Informationen darüber in welchem System sich das LLM befindet, wie es agieren soll, sowie wichtige Grundlagen zu documentsOS- und lösungsspezifischen Fachlichkeiten
- Funktionsergebnisse / Kontext
Funktionsergebnisse bilden das Ergebnis von Anfragen an documentsOS ab. Diese Anfragen können zum einen den Text von Dokumenten oder die Feldwerte der Mappe zurückgeben, zum Anderen aber auch die Ergebnisse von Aktionen in documentsOS, wie z.B. das erfolgreiche Aktualisieren der Feldvorschläge.
Funktionen können entweder vom Anwender ausgeführt werden (das sind dann immer Abfragen, wie zum Beispiel die Feldwerte). Sie können aber auch vom LLM ausgelöst werden, wenn dieses es für notwendig hält. So kann das LLM selbstständig den Nutzer dazu auffordern den Inhalt eines Dokuments freizugeben, aber auch Feldvorschläge unterbreiten.


## Prompt engineering

Prompt engineering beschreibt die systematische und kontinuierliche Weiterentwicklung von Prompts zur Verbesserung der Ergebnisse, welche sich mit der KI erzielen lassen. Hierzu werden ein initialer Prompt und verschiedene Testfälle entworfen. Danach wird dieser Prompt stetig weiterentwickelt und mit Hilfe der entworfenen Testfälle überprüft.

Der Prompt-Entwicklungsprozess umfasst hierbei i.d.R. folgende mögliche Schritte:

1. Aufgabe und Erfolgskriterien definieren: Klar definieren, welche Aufgabe das LLM ausführen soll (z.B. Entitätsextraktion, Fragen beantworten, Textzusammenfassung) und die Erfolgskriterien festlegen (z.B. Leistung und Genauigkeit, Latenz, Kosten).
2. Testfälle entwickeln: Eine diverse Sammlung von Testfällen erstellen, die typische Fälle und Edge-Cases abdeckt, um die Leistung der Prompts objektiv zu messen.
3. Vorläufigen Prompt erstellen: Einen ersten Prompt entwerfen, der die Aufgabenbeschreibung, Merkmale einer guten Antwort und notwendige Kontextinformationen enthält. Hierzu gibt es verschiedene Vorgehensweisen wie z.B. Single Shot Prompting. Dazu später mehr.
4. Prompt gegen Testfälle testen: Die Testfälle mit dem vorläufigen Prompt ausführen und die Antworten des LLMs mit den erwarteten Ergebnissen vergleichen und anhand der Erfolgskriterien bewerten.
5. Prompt verfeinern: Basierend auf den Testergebnissen den Prompt iterativ anpassen, um die Leistung zu verbessern und die Erfolgskriterien besser zu erfüllen.


## Verschiedene Entwurfsmuster für Prompts

Wie auch in der Programmierung gibt es für das Prompt Engineering verschiedene Entwurfsmuster. Diese Muster helfen dabei, das Modell optimal zu nutzen und die Qualität der generierten Antworten zu verbessern. Oftmals empfiehlt es sich eine Kombination aus mehreren Verfahren anzuwenden. Im Folgenden sind die Wichtigsten kurz vorgestellt:

1. Zero-Shot Prompting: Das Modell löst die Aufgabe ohne vorherige Beispiele oder Anweisungen. Dieses Verfahren ist das einfachste und oft fehleranfälligste. Es führt leicht zu sog. Halluzinationen und ungenauen Ergebnissen, da weder eine Struktur für die Antworten vorgegeben wurde, noch Wissen mit geliefert wurde aus dem sich die Antwort ergeben soll.
Beispiel: "Was ist die Hauptstadt von Frankreich?"
2. Single-Shot Prompting: Das Modell erhält ein einzelnes Beispiel einer Eingabe und Antwort, bevor es eine ähnliche Aufgabe lösen soll. Dieses Verfahren verbessert die Formatierung und den Umfang der Antworten, indem das Modell versucht sich am Beispiel zu orientieren.
Beispiel: "Beispiel: Frage: Was ist die Hauptstadt von Frankreich? -> Antwort: Paris ist die Hauptstadt von Frankreich. Frage: Was ist die Hauptstadt von Deutschland? -> Antwort: ..."
3. Few-Shot Prompting: Das Modell wird mit mehreren Beispielen (oft 2-5) versorgt, die zeigen, wie auf verschiedene Eingaben reagiert werden soll. Ähnlich wie Single-Shot Prompting, jedoch mit verbesserter Genauigkeit, da mehrere Beispiele angeführt werden. Nachteilig wirkt sich hierbei jedoch der größere Umfang und damit auch die höheren Kosten aus. Außerdem kann es das Modell durch die vielen Beispiele von der eigentlichen Aufgabe ablenken, insbesondere, wenn die Beispiele sehr lang sind.
Beispiel: "Beispiel 1: Eingabe -> Antwort, Beispiel 2: Eingabe -> Antwort, Aufgabe: Eingabe -> ?"
4. Chain-of-Thought Prompting: Das Modell wird gebeten, seinen Denkprozess oder die Schritte zur Lösung der Aufgabe zu erklären, bevor es die endgültige Antwort gibt. Dieses Vorgehen ist insbesondere bei logischen Fragestellungen von Vorteil, da es das Modell dazu verleitet Schritt für Schritt über den Prozess nachzudenken, wodurch es sich eine eigene Anleitung zur Lösung der Aufgabe verfasst, welche es dann abarbeiten kann. Dies steigert oftmals die Qualität der Ergebnisse enorm.
Beispiel: "Was ist 5 mal 6? Denke laut."
5. Instruction-Based Prompting: Das Modell erhält klare und präzise natürlichsprachige Anweisungen, was es tun soll. Dieses Verfahren setzt im Gegensatz zu Single- oder Few-Shot-Prompting auf eine natürlichsprachliche Anweisung zur Bearbeitung und Formatierung der Aufgaben. Selbstverständlich ist auch eine Kombination aus Beispielen und Erklärungen möglich und auch oftmals sinnvoll.
Beispiel: "Fasse den folgenden Text in zwei Sätzen zusammen: [Text]"
6. Contextual Prompting: Das Modell wird mit zusätzlichem Kontext oder Hintergrundinformationen versorgt, um eine fundiertere Antwort zu liefern. Dieses Verfahren wird auch oftmals als "Grounding" bezeichnet. Hierbei gibt man dem LLM einen Textkorpus mit auf dessen Basis geantwortet werden soll. Dies wird in documentsOS zum Beispiel durch das "Wissen" ermöglicht.
Beispiel: "Basierend auf den unten stehenden Daten, welche Trends sind erkennbar? [Daten]"