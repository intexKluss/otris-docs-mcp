---
title: "Kontext-Verwalter"
source: "https://otris.software/documents/manuals/books/otr-ai/contextManager.html"
---

# Kontext-Verwalter

Ein konfigurierbarer Kontext-Verwalter ermöglicht es dem Copiloten, den KI-Kontext intelligent aufzuräumen, indem bei einer Überschreitung der Kontextgröße nicht mehr benötigte Dokumente auf relevante Informationen reduziert oder vollständig ausgeblendet werden.

Der Kontext-Verwalter wird sowohl bei einer Überschreitung der natürlichen Kontextgröße eines KI Modells als auch bei einer Überschreitung der [in der AI-Konfiguration definierten Kontextgröße](admincenter.html#kontextgroesse) aktiv.


![copilot-contextmanager-process](./assets/copilot-contextmanager-process.png?class=large)

Abb. 93 - Kontext-Verwalter in Aktion


## Globale Eigenschaft

Der Kontext-Verwalter kann mithilfe der globalen Eigenschaft `$otrAIContextManagerReduceStrategy` aktiviert werden.

| Wert | Bedeutung |
| --- | --- |
| 0, false | Deaktiviert den Kontext-Verwalter (= Eigenschaft nicht vorhanden) |
| 1, true | Aktiviert den Kontext-Verwalter mit der Standard Reduzierunsstrategie aiOnDemandBased |
| aiOnDemandBased | Aktiviert den Kontext-Verwalter mit der Standard Reduzierunsstrategie aiOnDemandBased |
| aiBased | Aktiviert den Kontext-Verwalter mit der Reduzierunsstrategie aiBased |
| timeBased | Aktiviert den Kontext-Verwalter mit der Reduzierunsstrategie timeBased |
| <benutzerdefiniert> | Aktiviert den Kontext-Verwalter mit der Reduzierunsstrategie <benutzerdefiniert>. Ein ensprechendes Callback muss implementiert werden. |


## Kontext Reduzierungsstrategien

- aiBased: Bei einem Fehler der Kontextüberschreitung, wird jede relevante Inhaltsnachricht isoliert durch die KI bewertet, ob relevante Informationen in Hinblick auf die letzte Nutzer Nachricht und den Chatverlauf enthalten sind. Wenn keine relevanten Informationen enthalten sind, wird die gesamte Nachricht für die KI ausgeblendet. Wenn relevante Informationen enthalten sind werden alle relevanten vollständigen Textstellen extrahiert und der Inhalt der Inhaltsnachricht wird ersetzt. Bei einer neuen Chatanfrage, werden erneut alle Dokumente wieder für die KI sichtbar und alle reduzierten Inhaltsnachrichten werden erneut auf die originalen Inhalte zurückgesetzt.
- aiOnDemandBased [Erweiterung von aiBased]: Bei einer neuen Chatanfrage, werden nicht erneut alle Dokumente automatisch wieder für die KI sichtbar und alle reduzierten Inhaltsnachrichten sollen nur nach Bedarf erneut abgefragt werden. (Standard und empfohlen)
- timeBased: Bei einem Fehler der Kontextüberschreitung, wird die älteste Nachricht aus dem Chatverlauf für die KI versteckt, dies wird solange wiederholt bis keine Kontextüberschreitung mehr auftritt.

Zusätzlich kann auch über `<benutzerdefiniert>` eine eigene Kontext-Verwalter Strategie als Callback implementiert werden.