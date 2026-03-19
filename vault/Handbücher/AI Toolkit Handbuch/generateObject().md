---
title: "API-Methode generateObject()"
source: "https://otris.software/documents/manuals/books/otr-ai/generate-object.html"
---

# API-Methode generateObject()

Die Methode `generateObject` ist eine Funktion der `AIToolkit`-Klasse, die ein JavaScript-Objekt basierend auf einem gegebenen Prompt und einem JSON-Schema generiert. Diese Methode nutzt den gewünschten KI-Dienst, um ein Objekt zu erstellen, das den spezifizierten Anforderungen entspricht. Sie dient dazu, strukturierte Daten in Form von JavaScript-Objekten zu generieren. Dies kann in verschiedenen Anwendungsfällen nützlich sein, wie z.B. beim automatischen Erstellen von Testdaten, bei der Extraktion von Daten oder bei automatischen Entscheidungen, Bewertungen oder Analysen.


## Parameter

Die Methode `generateObject` benötigt zwei Parameter um verwendet werden zu können:

1. prompt: Ein Textprompt, der die notwendigen Informationen und Anweisungen enthält, um das gewünschte Objekt zu generieren. Der Prompt sollte alle erforderlichen Daten und Anweisungen enthalten, wie z.B. Text von Dateien und genaue Anweisungen zur Objekterstellung.
2. schema: Ein JSON-Schema, das die Struktur des zu generierenden Objekts definiert. Das Schema sollte Titel, Beschreibungen und Beispiele enthalten, um optimale Ergebnisse zu gewährleisten.


## Optionen

Die Methode akzeptiert darüber hinaus verschiedene Optionen, um das Verhalten anzupassen:

1. model: Das Modell, das für die Anfrage verwendet werden soll. Falls nicht angegeben, wird ein implementierungsspezifisches Standardmodell verwendet.
2. temperature: Die Temperatur, die für die Anfrage verwendet werden soll. Wenn nicht angegeben, wird eine Standardtemperatur verwendet. Die Standardtemperatur ist spezifisch für die jeweilige Implementierung.
3. retries: Die Anzahl der Wiederholungsversuche im Falle von Fehlern. Standardwert: 0
4. includeSchemaInPrompt: Gibt an, ob das angegebene Schema automatisch in den Prompt aufgenommen werden soll. Wenn false, sollte das Schema im prompt Parameter mit enthalten sein, um gute Ergebnisse zu erzielen. Standardwert: true
5. systemPrompt: Ein zusätzlicher Systemprompt, der zusammen mit dem gegebenen Prompt verwendet wird. Standardwert: ""


## Beispiele

Nachfolgend finden Sie mehrere Beispiele und mögliche Anwendungsfälle zur Verwendung von `generateObject`.


### Einfaches Beispiel: Erzeugung einer Person

Hier ist ein Beispiel, das zeigt, wie die Methode `generateObject` verwendet werden kann:


```javascript
const { AIToolkit } = require("aiToolkit");
const ai = new AIToolkit();

const schema = {
    type: "object",
    properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        hobby: { type: "string" },
    },
    required: ["firstName", "lastName", "hobby"],
};

const prompt =
  "Generate a person called Marty. He just came back from the future.";

const myPerson = ai.generateObject(prompt, schema);
util.out(JSON.stringify(myPerson));
```

const { AIToolkit } = require("aiToolkit");
const ai = new AIToolkit();

const schema = {
    type: "object",
    properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        hobby: { type: "string" },
    },
    required: ["firstName", "lastName", "hobby"],
};

const prompt =
  "Generate a person called Marty. He just came back from the future.";

const myPerson = ai.generateObject(prompt, schema);
util.out(JSON.stringify(myPerson));

### Multimodales Beispiel: Einbinden von Bildern


```javascript
context.enableModules();

const AIToolkit = require("aiToolkit").AIToolkit;
const ai = new AIToolkit();

var parts = [
    {
        type: "text",
        text: "Welches Tier ist auf dem Bild zu erkennen und welche Farbe hat das Tier?",
    },
    {
        type: "image",
        source: {
            type: "document",
            fileId: "otrAI_fi20240000000231",
            documentId: "otrAIdc0000000000000036",
        },
    },
];

var schema = {
    type: "object",
    properties: {
        animal: { type: "string" },
        color: { type: "string" },
    },
};

return JSON.stringify(ai.generateObject(parts, schema));
```

context.enableModules();

const AIToolkit = require("aiToolkit").AIToolkit;
const ai = new AIToolkit();

var parts = [
    {
        type: "text",
        text: "Welches Tier ist auf dem Bild zu erkennen und welche Farbe hat das Tier?",
    },
    {
        type: "image",
        source: {
            type: "document",
            fileId: "otrAI_fi20240000000231",
            documentId: "otrAIdc0000000000000036",
        },
    },
];

var schema = {
    type: "object",
    properties: {
        animal: { type: "string" },
        color: { type: "string" },
    },
};

return JSON.stringify(ai.generateObject(parts, schema));

### Workflowentscheidung im IT-Support

Dieses Beispiel zeigt, wie komplexe Workflowentscheidungen in der IT-Support-Bearbeitung mithilfe eines LLMs implementiert werden können, indem Support-Anfragen als Fließtexte verarbeitet werden, um Entscheidungen zu treffen. Die Entscheidungskriterien werden ausführlich beschrieben und das Ergebnis des LLMs wird auf Basis der strukturierten Daten aufbereitet.


```javascript
const { AIToolkit } = require("aiToolkit");

// Initialisiere das AI Toolkit
const ai = new AIToolkit();

// Beispiel-Support-Anfrage als Fließtext
const incidentDescription = `
Hallo IT-Support,

seit heute Morgen um 10 Uhr ist unser Intranet offline. Ich komme nicht an meine Dokumente. Bitte helfen Sie mir.

Vielen Dank,
John Doe
`;

const prompt = `
Basierend auf der folgenden Support-Anfrage, ermittle welcher der vier Schweregrade zutrifft und welcher Bearbeiter zuständig ist:

- Geringer Schweregrad: Der Vorfall beeinträchtigt keine kritischen Systeme und hat nur geringe Auswirkungen auf den Betrieb. Beispielsweise können kleine Funktionen oder nicht kritische Anwendungen betroffen sein, die leicht zu beheben sind.
- Mittlerer Schweregrad: Der Vorfall beeinträchtigt Systeme mit mittleren Auswirkungen auf den Betrieb. Dies können wichtige, aber nicht kritische Systeme sein, deren Ausfall zu moderaten Störungen führt.
- Hoher Schweregrad: Der Vorfall beeinträchtigt wichtige Systeme und hat erhebliche Auswirkungen auf den Betrieb. Dies umfasst Situationen, in denen zentrale Systeme wie Hauptdatenbanken oder zentrale Anwendungen ausfallen, was zu großen Betriebsstörungen führt.
- Kritisches System: Der Vorfall betrifft ein kritisches System, das für den Betrieb unerlässlich ist. Beispiele für kritische Systeme sind zentrale Datenbanken, Webserver, Authentifizierungsserver und andere geschäftskritische Infrastrukturkomponenten.

Kritische Systeme:
- Zentrale Datenbanken
- Webserver
- Authentifizierungsserver
- Geschäftskritische Infrastrukturkomponenten

Support-Anfrage:
${incidentDescription}
`;

const schema = {
    type: "object",
    properties: {
        decision: {
            type: "string",
            description: "Die getroffene Workflowentscheidung",
            enum: ["Geringer Schweregrad", "Mittlerer Schweregrad", "Hoher Schweregrad", "Kritisches System"]
        }
    },
    required: ["decision"],
    title: "Workflowentscheidung",
    description: "Eine Workflowentscheidung basierend auf der Support-Anfrage"
};

// Generiere die Workflowentscheidung
const workflowDecision = ai.generateObject(prompt, schema);

// Setze die Bearbeiter und technischen Klassifikationen basierend auf der ermittelten Entscheidung
let handlers = [];
let error = false;
let classification = "";

if(workflowDecision.decision === "Geringer Schweregrad") {
    handlers = ["helpdesk"];
    classification = "low";
}
else if(workflowDecision.decision === "Mittlerer Schweregrad") {
    handlers = ["itsupport"];
    classification = "medium";
}
else if(workflowDecision.decision === "Hoher Schweregrad") {
    handlers = ["itsupport"];
    classification = "high";
}
else if(workflowDecision.decision === "Kritisches System") {
    handlers = ["itlead", "security"];
    classification = "critical";
}
else {
    handlers = ["itsupport", "itlead"];
    classification = "unknown";
    error = true;
}

// Füge die Ergebnisse in das Ursprungsobjekt ein
const incident = {
    incidentId: "INC-1001",
    description: incidentDescription,
    classification,
    handlers,
    error
};

// Ausgabe des aktualisierten Support-Antragsobjekts
util.out(JSON.stringify(incident, null, 2));
```

const { AIToolkit } = require("aiToolkit");

// Initialisiere das AI Toolkit
const ai = new AIToolkit();

// Beispiel-Support-Anfrage als Fließtext
const incidentDescription = `
Hallo IT-Support,

seit heute Morgen um 10 Uhr ist unser Intranet offline. Ich komme nicht an meine Dokumente. Bitte helfen Sie mir.

Vielen Dank,
John Doe
`;

const prompt = `
Basierend auf der folgenden Support-Anfrage, ermittle welcher der vier Schweregrade zutrifft und welcher Bearbeiter zuständig ist:

- Geringer Schweregrad: Der Vorfall beeinträchtigt keine kritischen Systeme und hat nur geringe Auswirkungen auf den Betrieb. Beispielsweise können kleine Funktionen oder nicht kritische Anwendungen betroffen sein, die leicht zu beheben sind.
- Mittlerer Schweregrad: Der Vorfall beeinträchtigt Systeme mit mittleren Auswirkungen auf den Betrieb. Dies können wichtige, aber nicht kritische Systeme sein, deren Ausfall zu moderaten Störungen führt.
- Hoher Schweregrad: Der Vorfall beeinträchtigt wichtige Systeme und hat erhebliche Auswirkungen auf den Betrieb. Dies umfasst Situationen, in denen zentrale Systeme wie Hauptdatenbanken oder zentrale Anwendungen ausfallen, was zu großen Betriebsstörungen führt.
- Kritisches System: Der Vorfall betrifft ein kritisches System, das für den Betrieb unerlässlich ist. Beispiele für kritische Systeme sind zentrale Datenbanken, Webserver, Authentifizierungsserver und andere geschäftskritische Infrastrukturkomponenten.

Kritische Systeme:
- Zentrale Datenbanken
- Webserver
- Authentifizierungsserver
- Geschäftskritische Infrastrukturkomponenten

Support-Anfrage:
${incidentDescription}
`;

const schema = {
    type: "object",
    properties: {
        decision: {
            type: "string",
            description: "Die getroffene Workflowentscheidung",
            enum: ["Geringer Schweregrad", "Mittlerer Schweregrad", "Hoher Schweregrad", "Kritisches System"]
        }
    },
    required: ["decision"],
    title: "Workflowentscheidung",
    description: "Eine Workflowentscheidung basierend auf der Support-Anfrage"
};

// Generiere die Workflowentscheidung
const workflowDecision = ai.generateObject(prompt, schema);

// Setze die Bearbeiter und technischen Klassifikationen basierend auf der ermittelten Entscheidung
let handlers = [];
let error = false;
let classification = "";

if(workflowDecision.decision === "Geringer Schweregrad") {
    handlers = ["helpdesk"];
    classification = "low";
}
else if(workflowDecision.decision === "Mittlerer Schweregrad") {
    handlers = ["itsupport"];
    classification = "medium";
}
else if(workflowDecision.decision === "Hoher Schweregrad") {
    handlers = ["itsupport"];
    classification = "high";
}
else if(workflowDecision.decision === "Kritisches System") {
    handlers = ["itlead", "security"];
    classification = "critical";
}
else {
    handlers = ["itsupport", "itlead"];
    classification = "unknown";
    error = true;
}

// Füge die Ergebnisse in das Ursprungsobjekt ein
const incident = {
    incidentId: "INC-1001",
    description: incidentDescription,
    classification,
    handlers,
    error
};

// Ausgabe des aktualisierten Support-Antragsobjekts
util.out(JSON.stringify(incident, null, 2));

### Datenextraktion aus Bewerbungsunterlagen

Dieses Beispiel zeigt, wie komplexe Datenstrukturen aus Bewerbungsunterlagen ermittelt werden können. Diese können dann z.B. als Standardwerte für eine Mappe genutzt werden.


```javascript
const { AIToolkit } = require("aiToolkit");

// Initialisiere das AI Toolkit
const ai = new AIToolkit();

// Beispiel-Bewerbung
const application = `
Bewerbung als Softwareentwickler

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich auf die ausgeschriebene Stelle als Softwareentwickler. Ich habe ein Studium der Informatik abgeschlossen und verfüge über mehrjährige Erfahrung in der Softwareentwicklung. Meine Kenntnisse in JavaScript und Python sind ausgezeichnet, und ich arbeite gerne im Team.

Ich freue mich darauf, meine Fähigkeiten und Erfahrungen in Ihrem Unternehmen einzubringen.

Lebenslauf:
- Geboren am 15.04.1990 in Berlin
- 2010-2014: Studium der Informatik an der Technischen Universität Berlin
- 2014-2017: Softwareentwickler bei Firma TechSolutions
- 2017-2021: Senior Softwareentwickler bei Firma CodeCrafters
- Seit 2021: Lead Developer bei Firma DevMasters

Sie erreichen mich unter:
E-Mail: markus.schneider@example.com
Telefon: +49 30 1234567
Adresse: Friedrichstraße 123, 10117 Berlin

Mit freundlichen Grüßen,
Markus Schneider
`;

// Definiere den Prompt und das Schema zur Generierung einer digitalen Akte
const prompt = `
Du bist ein gewissenhafter und genau arbeitender Mitarbeiter in unserer Personalabteilung. Du bearbeitest eingehende Bewerbungen. Erstelle eine digitale Akte für den Bewerber auf Grundlage der folgenden Bewerbung. Extrahiere alle relevanten Informationen, die zur Erstellung eines umfassenden Bewerberprofils notwendig sind. Dazu gehören mindestens persönliche Daten, Kontaktinformationen, Fähigkeiten und Qualifikationen, Bildungsweg und Berufserfahrung. Achte darauf, dass die extrahierten Informationen klar und strukturiert dargestellt werden, um eine einfache Weiterverarbeitung zu ermöglichen.

Bewerbung:
${application}
`;

const schema = {
    type: "object",
    properties: {
        name: { type: "string", description: "Der vollständige Name des Bewerbers" },
        email: { type: "string", description: "Die E-Mail-Adresse des Bewerbers" },
        birthDate: { type: "string", format: "date", description: "Das Geburtsdatum des Bewerbers" },
        address: { type: "string", description: "Die Wohnadresse des Bewerbers" },
        phone: { type: "string", description: "Die Telefonnummer des Bewerbers" },
        qualifications: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    skill: { type: "string", description: "Die Fähigkeit oder Qualifikation des Bewerbers" },
                    level: { type: "integer", minimum: 1, maximum: 10, description: "Das Fähigkeitsniveau des Bewerbers auf einer Skala von 1 bis 10" }
                },
                required: ["skill", "level"]
            },
            description: "Liste der Fähigkeiten und Qualifikationen des Bewerbers"
        },
        resume: {
            type: "object",
            properties: {
                birthPlace: { type: "string", description: "Der Geburtsort des Bewerbers" },
                education: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            degree: { type: "string", description: "Der erworbene Abschluss" },
                            institution: { type: "string", description: "Die Bildungseinrichtung, an der der Abschluss erworben wurde" },
                            graduationYear: { type: "integer", description: "Das Jahr des Abschlusses" }
                        },
                        required: ["degree", "institution", "graduationYear"]
                    },
                    description: "Bildungsweg des Bewerbers"
                },
                workExperience: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            companyName: { type: "string", description: "Name des Unternehmens" },
                            role: { type: "string", description: "Die Rolle des Bewerbers im Unternehmen" },
                            startDate: { type: "string", format: "date", description: "Das Startdatum der Beschäftigung" },
                            endDate: { type: "string", format: "date", description: "Das Enddatum der Beschäftigung" },
                            responsibilities: { type: "string", description: "Die Hauptaufgaben und Verantwortlichkeiten in dieser Rolle" }
                        },
                        required: ["companyName", "role", "startDate", "endDate"]
                    },
                    description: "Berufserfahrung des Bewerbers"
                }
            },
            required: ["birthPlace", "education", "workExperience"],
            description: "Detaillierter Lebenslauf des Bewerbers"
        }
    },
    required: ["name", "email", "birthDate", "address", "phone", "qualifications", "resume"],
    title: "Digitale Bewerberakte",
    description: "Eine digitale Akte für eine neue Mitarbeiterbewerbung"
};

// Generiere das Objekt
const employeeApplicationRecord = ai.generateObject(prompt, schema);

// Ausgabe der digitalen Akte
util.out(JSON.stringify(employeeApplicationRecord, null, 2));
```

const { AIToolkit } = require("aiToolkit");

// Initialisiere das AI Toolkit
const ai = new AIToolkit();

// Beispiel-Bewerbung
const application = `
Bewerbung als Softwareentwickler

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich auf die ausgeschriebene Stelle als Softwareentwickler. Ich habe ein Studium der Informatik abgeschlossen und verfüge über mehrjährige Erfahrung in der Softwareentwicklung. Meine Kenntnisse in JavaScript und Python sind ausgezeichnet, und ich arbeite gerne im Team.

Ich freue mich darauf, meine Fähigkeiten und Erfahrungen in Ihrem Unternehmen einzubringen.

Lebenslauf:
- Geboren am 15.04.1990 in Berlin
- 2010-2014: Studium der Informatik an der Technischen Universität Berlin
- 2014-2017: Softwareentwickler bei Firma TechSolutions
- 2017-2021: Senior Softwareentwickler bei Firma CodeCrafters
- Seit 2021: Lead Developer bei Firma DevMasters

Sie erreichen mich unter:
E-Mail: markus.schneider@example.com
Telefon: +49 30 1234567
Adresse: Friedrichstraße 123, 10117 Berlin

Mit freundlichen Grüßen,
Markus Schneider
`;

// Definiere den Prompt und das Schema zur Generierung einer digitalen Akte
const prompt = `
Du bist ein gewissenhafter und genau arbeitender Mitarbeiter in unserer Personalabteilung. Du bearbeitest eingehende Bewerbungen. Erstelle eine digitale Akte für den Bewerber auf Grundlage der folgenden Bewerbung. Extrahiere alle relevanten Informationen, die zur Erstellung eines umfassenden Bewerberprofils notwendig sind. Dazu gehören mindestens persönliche Daten, Kontaktinformationen, Fähigkeiten und Qualifikationen, Bildungsweg und Berufserfahrung. Achte darauf, dass die extrahierten Informationen klar und strukturiert dargestellt werden, um eine einfache Weiterverarbeitung zu ermöglichen.

Bewerbung:
${application}
`;

const schema = {
    type: "object",
    properties: {
        name: { type: "string", description: "Der vollständige Name des Bewerbers" },
        email: { type: "string", description: "Die E-Mail-Adresse des Bewerbers" },
        birthDate: { type: "string", format: "date", description: "Das Geburtsdatum des Bewerbers" },
        address: { type: "string", description: "Die Wohnadresse des Bewerbers" },
        phone: { type: "string", description: "Die Telefonnummer des Bewerbers" },
        qualifications: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    skill: { type: "string", description: "Die Fähigkeit oder Qualifikation des Bewerbers" },
                    level: { type: "integer", minimum: 1, maximum: 10, description: "Das Fähigkeitsniveau des Bewerbers auf einer Skala von 1 bis 10" }
                },
                required: ["skill", "level"]
            },
            description: "Liste der Fähigkeiten und Qualifikationen des Bewerbers"
        },
        resume: {
            type: "object",
            properties: {
                birthPlace: { type: "string", description: "Der Geburtsort des Bewerbers" },
                education: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            degree: { type: "string", description: "Der erworbene Abschluss" },
                            institution: { type: "string", description: "Die Bildungseinrichtung, an der der Abschluss erworben wurde" },
                            graduationYear: { type: "integer", description: "Das Jahr des Abschlusses" }
                        },
                        required: ["degree", "institution", "graduationYear"]
                    },
                    description: "Bildungsweg des Bewerbers"
                },
                workExperience: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            companyName: { type: "string", description: "Name des Unternehmens" },
                            role: { type: "string", description: "Die Rolle des Bewerbers im Unternehmen" },
                            startDate: { type: "string", format: "date", description: "Das Startdatum der Beschäftigung" },
                            endDate: { type: "string", format: "date", description: "Das Enddatum der Beschäftigung" },
                            responsibilities: { type: "string", description: "Die Hauptaufgaben und Verantwortlichkeiten in dieser Rolle" }
                        },
                        required: ["companyName", "role", "startDate", "endDate"]
                    },
                    description: "Berufserfahrung des Bewerbers"
                }
            },
            required: ["birthPlace", "education", "workExperience"],
            description: "Detaillierter Lebenslauf des Bewerbers"
        }
    },
    required: ["name", "email", "birthDate", "address", "phone", "qualifications", "resume"],
    title: "Digitale Bewerberakte",
    description: "Eine digitale Akte für eine neue Mitarbeiterbewerbung"
};

// Generiere das Objekt
const employeeApplicationRecord = ai.generateObject(prompt, schema);

// Ausgabe der digitalen Akte
util.out(JSON.stringify(employeeApplicationRecord, null, 2));

### Copilot als Daten-Analyst: Erstellen von Feldvorschlägen

Dieses Beispiel zeigt, wie der Copilot mithilfe des Prompts die Rolle eines Daten-Analysten übernimmt, um Feldvorschläge für eine Mappe zu generieren.
Dazu wird der Textinhalt eines Dokuments ausgelesen, ein JSON-Schema basierend auf dem Mappentypen erzeugt und mithilfe von `generateObject()` die passenden Werte ermittelt.
Die erkannten Daten werden anschließend als Feldervorschläge gespeichert.


```javascript
const { AIToolkit } = require("aiToolkit");
const { userRepository } = require("otrSuggestionRepository");

// Einlesen des ersten Dokuments der akutellen Mappe
const file = context.file;
const reg = file.getRegisters("documents").first();
const document = reg.getDocuments().first();
const docText = document.extractText();

// Prompt erstellen: Copilot handelt als Daten-Analyst
let prompt = file.getAutoText(`
Kontext:
    - Du bist ein gewissenhafter Datenanalyst.
    - Heute ist der %currentDate% und du arbeitest mit einem Dokument vom Typ '%fileTypeTitle%'.

Aufgabe:
    - Analysiere den folgenden Text, der zwischen drei doppelten Anführungszeichen (""" triple quotes) steht.
    - Extrahiere alle relevanten Informationen gemäß dem vorgegebenen JSON-Schema.
    - Falls Informationen fehlen oder unklar sind, gib leere Strings ('') zurück oder lasse das Feld weg.
`);


// Hinzufügen des Dokumenteninhalts
prompt +=
`
Text:
"""
${docText}
"""
`;

// JSON Schema für den Mappentypen erstellen
const fileType = file.getAutoText("fileType");
const schema = AIToolkit.createJSONSchemaForFileType(fileType);

// Initialisiere das AI Toolkit
const ai = new AIToolkit();
const resultObject = ai.generateObject(prompt, schema);

// Erstellt aus den generierten JSON Daten ein Objekt basierend auf dem Schema/Mappentyp
const fieldData = AIToolkit.createFileDataFromJSON(fileType, resultObject, { filterReadonly: true });

// Alte Vorschläge löschen
const entry = userRepository.findEntryByFileId(file.getid());
if(entry) {
    entry.delete();
}

// Neue Vorschläge hinzufügen
userRepository.addEntry({
    fileId: file.getid(),
    title: file.getid(),
    fileType,
    data: fieldData
});
```

const { AIToolkit } = require("aiToolkit");
const { userRepository } = require("otrSuggestionRepository");

// Einlesen des ersten Dokuments der akutellen Mappe
const file = context.file;
const reg = file.getRegisters("documents").first();
const document = reg.getDocuments().first();
const docText = document.extractText();

// Prompt erstellen: Copilot handelt als Daten-Analyst
let prompt = file.getAutoText(`
Kontext:
    - Du bist ein gewissenhafter Datenanalyst.
    - Heute ist der %currentDate% und du arbeitest mit einem Dokument vom Typ '%fileTypeTitle%'.

Aufgabe:
    - Analysiere den folgenden Text, der zwischen drei doppelten Anführungszeichen (""" triple quotes) steht.
    - Extrahiere alle relevanten Informationen gemäß dem vorgegebenen JSON-Schema.
    - Falls Informationen fehlen oder unklar sind, gib leere Strings ('') zurück oder lasse das Feld weg.
`);


// Hinzufügen des Dokumenteninhalts
prompt +=
`
Text:
"""
${docText}
"""
`;

// JSON Schema für den Mappentypen erstellen
const fileType = file.getAutoText("fileType");
const schema = AIToolkit.createJSONSchemaForFileType(fileType);

// Initialisiere das AI Toolkit
const ai = new AIToolkit();
const resultObject = ai.generateObject(prompt, schema);

// Erstellt aus den generierten JSON Daten ein Objekt basierend auf dem Schema/Mappentyp
const fieldData = AIToolkit.createFileDataFromJSON(fileType, resultObject, { filterReadonly: true });

// Alte Vorschläge löschen
const entry = userRepository.findEntryByFileId(file.getid());
if(entry) {
    entry.delete();
}

// Neue Vorschläge hinzufügen
userRepository.addEntry({
    fileId: file.getid(),
    title: file.getid(),
    fileType,
    data: fieldData
});