---
title: "Bereitstellung in Documents 5"
source: "https://otris.software/documents/manuals/books/otrlifecycle/install-d5.html"
---

# Bereitstellung in Documents 5

Nachfolgend wird die empfohlene Art der Bereitstellung für besondere Administratoren (Redakteure mit der Funktion *Documents Administrator*) im Webclient für Documents 5i beschrieben.

**Wichtiger Hinweis:** Die Erweiterung kann standardmäßig ausschließlich von Redakteuren mit der Funktion *Documents Administrator* konfiguriert werden. Für die nachfolgend dargestellten Ordner müssen daher immer Ordnerzugriffsrechte für Gruppen angegeben werden, in denen ausschließlich Redakteure mit dieser Funktion enthalten sind. Bei unberechtigtem Zugriff werden entsprechende Fehlermeldungen ausgegeben. Soll die Erweiterung auch durch andere Personen konfiguriert werden können, ist ein *Callback* bereitzustellen, siehe dazu auch Callback-Dokumentation (`checkRoles`).


## Ordner für Regel- und Vorlagenverwaltung

Alle notwendigen Konfigurationseinstellungen für das Lebenszyklus-Management, die Regel- und Vorlagenverwaltung sowie zusätzliche Optionen wie Export / Import von Regeln und Beispielen werden über Gadget-Aktionen einer Scriptliste abgebildet. Um diese Liste bereitzustellen wird die Konfiguration eines Ordners per Documents-Manager empfohlen:

- Name: otrLifeCycle
- Bezeichnung: de:Lebenszyklus;en:Life cycle
- Typ: Öffentlich
- Icon: mdi:mdi-alarm
- Eigenschaften: gadgetConfig={gadgetScript: "Gadget_LifeCycleRuleList", gadgetAction: "showList"}
- Ordnerzugriffsrechte: nur für Redakteure mit Funktion Documents Administrator (siehe Hinweis)

Die möglichen Aktionen der Regel- und Vorlagenverwaltung sind hier beschrieben: [Regel- und Vorlagenverwaltung](main-list.html).


## Ordner für Ereignismeldungen

Vorgänge, bei denen Regeln aufgrund von Fehlern nicht angewendet werden konnten, enthalten entsprechende Hinweismeldungen im Status. Um diese Vorgänge gruppiert nach Vorgangsart filtern zu können, wird empfohlen, einen zusätzlichen Ordner (als Unterordner der Regel- und Vorlagenverwaltung) per Documents-Manager zu konfigurieren:

- Oberordner: otrLifeCycle
- Name: otrLifeCycleEventList
- Bezeichnung: de:Ereignismeldungen;en:Event notifications
- Typ: Öffentlich
- Icon: mdi:mdi-alert-circle-outline
- Eigenschaften: gadgetConfig={gadgetScript: "Gadget_LifeCycleErrorFilesList", gadgetAction: "showList"}
- Ordnerzugriffsrechte: nur für Redakteure mit Funktion Documents Administrator (siehe Hinweis)

Die möglichen Aktionen bei Ereignismeldungen sind hier beschrieben: [Ereignismeldungen](event-list.html).

**Hinweis:** Beide Ordner bzw. der Hauptordner *otrLifeCycle* können in eigenen Outbars oder zusätzlichen administrativen Ordnerstrukturen z.B. bei Verwendung von eigenen Lösungen eingebunden werden.