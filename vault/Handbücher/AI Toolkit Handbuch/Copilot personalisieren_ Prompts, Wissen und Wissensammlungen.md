---
title: "Copilot individualisieren"
source: "https://otris.software/documents/manuals/books/otr-ai/prompts-knowledge.html"
---

# Copilot individualisieren


## Prompts, Wissen und Wissensammlungen

Der Copilot und das AI Toolkit bieten verschiedene Möglichkeiten, ihn individuell zu gestalten und maßgeschneidert an spezifische Anforderungen anzupassen. Es ist möglich vorgefertigte Prompts, Unternehmenswissen oder ganze Wissensammlungen zu speichern, um dieses im Rahmen von Chats und Skripten einzusetzen. Hierbei ist zwischen "Wissen", "Wissensammlungen" und "Prompts" zu unterscheiden, sowie zwischen der Nutzung im Copilot und im Skript. Nachfolgend werden diese Aspekte erklärt, doch zunächst noch eine kurze Erläuterung der Vorteile.


## Vorteile

Die drei wichtigsten Vorteile der Nutzung eines individualisierten Copiloten sind:

- Effizienzsteigerung und Skalierbarkeit:
Ein individualisierter Copilot ermöglicht schnellere Arbeitsprozesse und reduziert lästige Tipparbeit. Dadurch erhöht sich die Produktivität, da wiederkehrende Aufgaben effizienter erledigt werden können, ohne jedes Mal von Grund auf neu zu beginnen. Dies erleichtert die Bewältigung eines hohen Aufgabenvolumens.
- Konsistenz und Qualität:
Durch vordefinierte und angepasste Eingaben wird eine einheitliche und fehlerfreie Kommunikation sichergestellt. Somit wird gewährleistet, dass Arbeitsprozesse, die Markenstimme und Unternehmensrichtlinien konsistent beachtet und verfolgt werden. Zudem kann der Copilot kontinuierlich optimiert werden, um die Qualität der Ergebnisse stetig zu verbessern.
- Personalisierung:
Der Copilot lässt sich flexibel an individuelle Anforderungen anpassen, um personalisierte Lösungen zu bieten. Nutzer können eigene Prompts anlegen und somit ihre Arbeitsprozesse leicht optimieren. Mit Wissenssammlungen lassen sich unternehmensspezifische Datensätze gezielt durchsuchen und abrufen, sodass der Copilot präzise auf individuelle Anforderungen zugeschnitten wird.


## Anwendungsgebiete und Unterscheidungsmerkmale


### Prompts

Prompts dienen dazu, Arbeitsschritte und Aufgaben zu automatisieren, indem Sie Anfragen bzw. Aufträge für die KI enthalten. Sie werden i.d.R. durch den Nutzer im Chat abgesendet, wenn dieser Unterstützung bei dem entsprechenden Arbeitsschritt benötigt. Sie können jedoch auch für eine Automatische Verarbeitung in Skripten genutzt werden. Sie sind in der Regel imperativer Natur und fordern die KI auf etwas zu tun. Auch der Nutzer kann sich aus seinen Anfragen eigene Prompts erstellen, welche nur für ihn sichtbar sind.

Die **Konfiguration** von Prompts wird im AdminCenter vorgenommen, siehe [Prompts](admincenter.html#prompts).
Ausgenommen hiervon sind vom Benutzer erstellte Prompts, welche ausschließlich direkt im Copiloten durch den Nutzer eingegeben werden können.


### Wissen

Auch bei Wissen handelt es sich um gespeicherte Informationen, welche an die KI übermittelt werden. Jedoch sind diese eher informativer, bzw. regulierender Natur. Wissen kann z.B. Informationen zu Arbeitsprozessen, der Corporate Identity, sowie Erklärungen zu unternehmens- oder anwendungsfallspezifischen Themen enthalten. Wissen ist also i.d.R. Anfragenübergreifend zu nutzen und enthält keine direkte Arbeitsaufforderung. Es kann jedoch Informationen enthalten, wie sich eine KI verhalten soll, oder mit bestimmten Anfragen des Nutzers umgehen soll. Wissen lässt sich hierbei in zwei Unterkategorien teilen

- Systemwissen Systemwissen ist immer automatisch Bestandteil eines Copiloten. Dieses kann zum Beispiel die Arbeitsweise oder die Persönlichkeit des Copiloten festlegen. Außerdem kann es allgemeine Informationen über das System liefern.
- Durch den Anwender aktivierbares Wissen hingegen bezieht sich in der Regel auf spezielle Anwendungsgebiete oder Prozessschritte. So können zum Beispiel Informationen zu verschiedenen Vertragsarten oder Vorgehensweisen zur Bearbeitung des aktuellen Aufgabenbereichs hierin abgelegt werden. I.d.R. entscheidet der Anwender, ob diese Art von Wissen für den aktuellen Arbeitsschritt benötigt wird und aktiviert dieses vor dem Absenden seiner Anfrage

Die **Konfiguration** von Wissen wird im AdminCenter vorgenommen, siehe [Prompts und Wissen](admincenter.html#wissen).


### Wissenssammlungen

Wissenssammlungen dienen der gezielten **Recherche** und dem Abruf von Informationen aus strukturierten Dokumenten durch den Copiloten. Sie eignen sich besonders für umfangreiche Dokumentensammlungen, die mithilfe des AI-Toolkits in einen Vektorindex umgewandelt werden. Dadurch können Inhalte semantisch durchsucht und für Ähnlichkeitssuchen effizient genutzt werden, um relevante Informationen schnell zu identifizieren.


#### Wissen vs. Wissenssammlungen

Während Wissen vor allem kleinere, gezielte Informationen oder Verhaltensregeln für die KI bereitstellt, eignen sich Wissenssammlungen für die Recherche in umfangreichen Dokumentensammlungen und großen Datenbeständen.

Wissenssammlungen können über das AI-Toolkit [angelegt](generate-document-vector-index.html) werden und über das AdminCenter [konfiguriert](vector-index.html) werden.