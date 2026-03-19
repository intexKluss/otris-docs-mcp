---
title: "Getting started"
source: "https://otris.software/documents/api/otrTest/getting-started.html"
---

# Getting started


## Einrichten per Documents CLI

Die Initialisierung der Testumgebung ist in `documents deploy` integriert. Sofern der Schalter `--dev` übergeben wird, ruft `documents deploy` automatisch den Befehl `documents test init` mit passenden Verbindungsdaten zum documentsOS-Server auf.

1. Gewünschten Branch des Projekts auschecken
2. Entwicklungsmandant aufsetzen:
documents deploy --principal myDevPrincipal --host localhost --dev
(bzw. npm run deploy, wenn ein scripts-Kommando eingerichtet ist).


## Einrichten in einem Projekt mit Tests

1. Gewünschten Branch des Projekts auschecken
2. Testframework importieren, weitere Sourcen und Hooks aus der otr-test.json:
$> documents test init --host localhost --principal test
3. Per VS Code gewünschte Testsuite öffnen, hochladen und ausführen
4. Scripts in package.json ergänzen
{ scripts: { // ... "test": "documents test" }
}
5. Ordner anlegen
mkdir src/test
6. otrTest konfigurieren in src/test/otr-test.json (siehe auch Konfiguration):
{ // Skripts to upload before starting the test execution "include": [ "src/test/util/**/*.{js,mjs}" ], "testCoverage": { "include": [ "src/jscript/**/*.{js,mjs}", // any other needed source files ], "exclude": [ // files the should excluded from the coverage ] } }
7. Ignore-Dateien erweitern (.npmignore und .gitignore):
# Instrumented source files and coverage files
instrumentedFiles/
coverage/
html-report/*
# Execution data
backup/
serverLogs.zip
# Test results
test.*.xml
8. Testsuite unter src/test anlegen, z. B. src/test/test.HelloWorld.js:
context.enableModules(undefined, 3); // Only needed on Documents 5
const { describe, it } = require("otrTest");
const { expect } = require("chai"); describe("Say Hello world", () => { it("should not fail, as Hello is always fine", function() { var say = "Hello World!"; expect(say).to.be.equal("Hello World!"); });
});
9. Tests initialisieren und ausführen
npm run test