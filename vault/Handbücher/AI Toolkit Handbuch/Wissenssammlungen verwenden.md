---
title: "Wissenssammlungen"
source: "https://otris.software/documents/manuals/books/otr-ai/vector-index.html"
---

# Wissenssammlungen

Das AI Toolkit bietet die Möglichkeit, Dokumente automatisch in einen Vektorindex aufzunehmen. Dabei werden die Inhalte der Dokumente in numerische Vektoren umgewandelt, die ihre semantische Bedeutung repräsentieren. Diese Vektoren werden in einer Sammlung organisiert, wodurch die Dokumente leicht durchsucht und für Ähnlichkeitssuchen verwendet werden können.


## Funktionsweise


### Retrieval-Augmented Generation (RAG)

Das AI Toolkit nutzt Retrieval-Augmented Generation (RAG), um generative KI durch externe Wissensquellen zu erweitern. Dabei werden relevante Informationen aus den Wissenssammlungen abgerufen und in Kombination mit der Anfrage verwendet, um präzise und kontextbezogene Antworten zu generieren. Dieser Ansatz ermöglicht effiziente Suchabfragen und verbessert die Qualität generierter Inhalte durch den Zugriff auf aktuelle und domänenspezifische Daten.
Zur Speicherung der Vektordaten, also u.a. der Dokumentinhalte, wird eine Vektordatenbank wie z.B. [Qdrant](service-overview-qdrant.html) benötigt.


## Verwaltung der Wissenssammlungen im Admin Center

Im Admin Center können bestehende Wissenssammlungen angezeigt und verwaltet werden. Das Erstellen von Wissenssammlungen und Hinzufügen von Dokumenten ist derzeit nur über Portalscripting möglich und wird in dem Handbuch [Wissenssammlungen erstellen](./generate-document-vector-index.html) beschrieben.


### Wissenssammlungen anzeigen

Alle aktuell verfügbaren Wissenssammlungen werden im Admin Center unter dem Menüpunkt AI Toolkit / Wissenssammlungen aufgelistet. Für jede Wissenssammlung
werden folgende Informationen angezeigt:

- Bezeichner: Das Label der Wissenssammlung, das für Benutzer sichtbar ist. Das Label kann angepasst werden; der technische Name der Wissenssammlung bleibt unverändert.
- Modell: Das verwendete Embedding-Modell, mit dem Inhalte in numerische Vektoren umgewandelt werden. Dieses Modell bestimmt, wie Texte inhaltlich verstanden und verglichen werden.
- Service: Der eingesetzte Vektor-Service, in dem die Vektoren gespeichert und durchsucht werden (z. B. eine Vektor-Datenbank).
- Vektorgröße: Die Dimension der erzeugten Vektoren, also wie viele numerische Werte ein einzelner Vektor enthält. Eine größere Vektorgröße kann feinere Bedeutungsunterschiede abbilden, benötigt aber mehr Speicher und Rechenleistung.


![collection-admin-list](./assets/collection-admin-list.png)

Abb. 74 - Liste der Wissenssammlungen im Admin Center

Besteht keine aktive Verbindung zum konfigurierten Vektor-Service, wird die zugehörige Wissenssammlung in der Übersicht als **[GETRENNT]** markiert.


![collection-admin-disconnected](./assets/collection-admin-disconnected.png?class=large)

Abb. 75 - Getrennte Wissenssammlung


### Wissenssammlung bearbeiten

Beim Anklicken einer Wissenssammlung werden die allgemeinen Informationen zur Wissenssammlung angezeigt. Dazu gehören der technische Name sowie der für den Benutzer sichtbare Bezeichner der Wissenssammlung. Dieser Bezeichner kann angepasst werden.


![collection-admin-edit](./assets/collection-admin-edit.png)

Abb. 76 - Getrennte Wissenssammlung


### Wissenssammlung durchsuchen

Zu Debugging-Zwecken kann der Vektorindex über den Tab **Wissenssammlung durchsuchen** durchsucht werden.

Hierzu kann eine Suchanfrage eingegeben und über den Button **Suchen** abgesendet werden. Die Enter-Taste funktioniert aktuell aus technischen Gründen nicht. Zusätzlich kann die maximale Anzahl der Ergebnisse über das Feld **Anzahl Ergebnisse pro Recherche** festgelegt werden.

Die gefundenen Ergebnisse werden dann in einer Tabelle nach ihrem Bewertungswert (Relevanz) sortiert dargestellt und enthalten folgende Informationen:

- Quelle: Verweis auf das Dokument bzw. die Quelle, aus der der Treffer stammt. Bei einem Klick auf den Eintrag wird das entsprechende Dokument in einem Popup geöffnet.
- Pretext: Der Textabschnitt, der unmittelbar vor der gefundenen relevanten Stelle steht.
- Maintext: Der relevante Textabschnitt.
- Posttext: Der Textabschnitt, der direkt nach der relevanten Stelle folgt.


![collection-admin-search](./assets/collection-admin-search.png)

Abb. 77 - Wissenssammlung durchsuchen

**Hinweis:** Bei getrennten Wissenssammlungen ist dieser Tab ausgeblendet und Inhalte können nicht durchsucht werden.


### Wissenssammlungen löschen

Wissenssammlungen können durch die Aktion **Eintrag löschen** in der Liste gelöscht werden.

**Hinweis:** Durch das Löschen der Wissenssammlung wird diese auch aus der Datenbank entfernt und der Vektorindex geht verloren.


![collection-admin-delete](./assets/collection-admin-delete.png?class=large)

Abb. 78 - Löschen von Wissenssammlungen

Ist eine Wissenssammlung getrennt, kann diese nicht aus der Datenbank entfernt werden. In diesem Fall ist es trotzdem möglich, die Verknüpfung in documentsOS zu löschen. Dies kann zum Beispiel erforderlich sein, wenn die Wissenssammlung oder die Datenbank manuell gelöscht wurde. In diesem Fall muss die Aktion durch einen zusätzlichen Dialog bestätigt werden.


![collection-admin-delete-disconnected](./assets/collection-admin-delete-disconnected.png)

Abb. 79 - Bestätigungsdialog zum Löschen von getrennten Wissenssammlungen


## Wissensammlungen im Copiloten nutzen


### Sammlungen einem Copiloten zur Verfügung stellen

Im Admin Center lässt sich der Copilot so konfigurieren, dass er Zugriff auf die erstellte Wissenssammlung erhält. Dazu muss zunächst ein Copilot erstellt oder bearbeitet werden, der für den gewünschten Mappentyp, in diesem Fall "Verträge", freigeschaltet ist.


![copilot-docs-01](./assets/copilot-general.png?class=large)

Abb. 80 - Admin Center, Copilot bearbeiten oder erstellen

Anschließend kann die gewünschte Wissenssammlung im Reiter "Wissensammlungen" des Copilots hinzugefügt werden.
Die Standardwerte können beibehalten werden. Die Konfigurationsmöglichkeiten sind [hier](./admincenter.html#wissenssammlungen) aufgelistet.


![index-docs-02](./assets/index-docs-02.png?class=large)

Abb. 81 - Admin Center, Hinzufügen einer Sammlung


### Wissen über den Copiloten abrufen

Sobald die Wissenssammlung mit dem Copiloten verknüpft ist, kann dieser `recherchieren`. Wenn Wissen aus der Sammlung abgerufen und für die Generierung einer Antwort verwendet wird, wird dies als `Recherchieren`‑Aktion angezeigt. In der generierten Antwort wird zudem die Textstelle verlinkt, die als Grundlage der Nachricht dient. Diese Referenz ist klickbar, wodurch sich das zugehörige Dokument und die Textstelle direkt öffnen.


![index-docs-02](./assets/index-docs-03.png?class=large)

Abb. 82 - Copilot, Wissenssammlung abrufen


![index-docs-02](./assets/index-docs-04.png?class=large)

Abb. 83 - Copilot, Quellen anzeigen lassen


## Wissenssammlungen im Skripting verwenden


### Semantische Suche

Die Methode `queryIndex` ermöglicht es, eine semantische Suche in einer vektorisierten Wissenssammlung über die Skript-API durchzuführen.
Dabei wird eine in natürlicher Sprache formulierte Frage verwendet, um inhaltlich ähnliche Informationen zu finden.


#### Parameter

Die Methode `queryIndex` benötigt zwei Parameter, um verwendet werden zu können:

1. collectionName: Name der Wissenssammlung, in der gesucht werden soll.
2. query: Die Suchanfrage als Freitext (z. B. ein Satz oder eine Frage).


#### Optionen

Die Methode akzeptiert darüber hinaus verschiedene Optionen, um das Verhalten anzupassen:

- entweder: maximale Anzahl der zurückgegebenen Ergebnisse (number)
- oder: ein QueryOptions-Objekt mit weiteren Filtermöglichkeiten resultNumber: Anzahl der gewünschten Ergebnisse.
categoryFilter: Eingrenzung der Suche auf eine bestimmte Kategorie innerhalb der Collection.
threshold: Relevanzschwelle, um irrelevante Treffer herauszufiltern.


#### Beispiel

Das folgende Beispiel zeigt die Suche mit `queryIndex` in einer Wissenssammlung von deutschen Gesetzestexten. Gesucht wird nach relevanten Paragraphen zur Frage, welche Regeln an einem Zebrastreifen gelten.
Die gefundenen Treffer enthalten sowohl den passenden Textabschnitt (Chunk) als auch einen Score, der angibt, wie gut der jeweilige Treffer inhaltlich zur gestellten Frage passt.


```javascript
context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();

// Semantische Suche nach einer konkreten Frage
const query = "Welche Regeln gelten an einem Zebrastreifen?";

const result = ai.queryIndex(
    "lawDE",	// Name einer bestehenden Wissenssammlung Bsp. Gesetzestexten
    query,
    3           // Anzahl der gewünschten Treffer
);

// Ausgabe der Ergebnisse
if(result.length > 0) {
    util.out("Gefundene relevante Passagen:");
    result.forEach((match, index) => {
        const chunk = match.chunk;
        util.out(`Treffer ${index + 1} hat einen Trefferscore von ${match.score}
			und befindet sich in Chunk ${chunk.serialNumber}.`);

        util.out(`Inhalt des Chunks: ${chunk.mainText}`);
    });
}
else {
    util.out("Keine relevanten Stellen gefunden.");
}
```

context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();

// Semantische Suche nach einer konkreten Frage
const query = "Welche Regeln gelten an einem Zebrastreifen?";

const result = ai.queryIndex(
    "lawDE",	// Name einer bestehenden Wissenssammlung Bsp. Gesetzestexten
    query,
    3           // Anzahl der gewünschten Treffer
);

// Ausgabe der Ergebnisse
if(result.length > 0) {
    util.out("Gefundene relevante Passagen:");
    result.forEach((match, index) => {
        const chunk = match.chunk;
        util.out(`Treffer ${index + 1} hat einen Trefferscore von ${match.score}
			und befindet sich in Chunk ${chunk.serialNumber}.`);

        util.out(`Inhalt des Chunks: ${chunk.mainText}`);
    });
}
else {
    util.out("Keine relevanten Stellen gefunden.");
}

### Suche nach Vektoren anhand von Keys

Die Methode `findInIndex` ermöglicht es, gezielt nach Vektoren in einer bestehenden Wissenssammlung zu suchen und nicht auf Basis einer Freitext-Suche,
sondern anhand definierter Schlüssel z. B. der FileID oder Kategorien.
Dies ist besonders nützlich,
wenn bestimmte Dokumente oder Datensätze direkt identifiziert und nach spezifischen Kategorien durchsucht werden sollen.
Werden über die Optionen keine eingrenzenden Parameter übergeben, werden entsprechend alle Vektoren der gewählten Sammlung zurückgegeben.


#### Parameter

Die Methode erwartet folgende Eingaben:

1. collectionName: Name der Wissenssammlung, in der gesucht werden soll.


#### Optionen

1. id (optional): Der zu suchende Schlüsselwert (z. B. fileId)
2. identifier (optional): Der Typ des Schlüssels, z. B. "fileId" oder "docId"
3. category (optional): Eingrenzung auf eine bestimmte Kategorie innerhalb der Collection
4. limit (optional): Begrenzung der maximal zurückgegebenen Treffer


#### Beispiel


```javascript
context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();

const collectionName = "productInformation";   // Name der Wissenssammlung
const fileId = "otrAI_fi20240000000788"; // Beispielmappe: Vertrag Geheimhaltungsvereinbarung FerraCom Freinetz


// Suchen nach relevanten Passagen für die Datei in einer bestimmten Kategorie
const results = ai.findInIndex(collectionName, {
    id: fileId,
    identifier: "fileId",
    category: "technicalData",
    limit: 3
});

// Ausgabe der Ergebnisse
if(results.length > 0) {
    util.out("Gefundene relevante Passagen:");
    results.forEach((match, index) => {
        util.out(`Treffer ${index + 1} (Score: ${match.score}): ${match.chunk.mainText}`);
    });
}
else {
    util.out("Keine relevanten Stellen gefunden.");
}
```

context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();

const collectionName = "productInformation";   // Name der Wissenssammlung
const fileId = "otrAI_fi20240000000788"; // Beispielmappe: Vertrag Geheimhaltungsvereinbarung FerraCom Freinetz


// Suchen nach relevanten Passagen für die Datei in einer bestimmten Kategorie
const results = ai.findInIndex(collectionName, {
    id: fileId,
    identifier: "fileId",
    category: "technicalData",
    limit: 3
});

// Ausgabe der Ergebnisse
if(results.length > 0) {
    util.out("Gefundene relevante Passagen:");
    results.forEach((match, index) => {
        util.out(`Treffer ${index + 1} (Score: ${match.score}): ${match.chunk.mainText}`);
    });
}
else {
    util.out("Keine relevanten Stellen gefunden.");
}