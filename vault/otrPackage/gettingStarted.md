---
title: "Getting Started"
source: "https://otris.software/documents/api/otrpackage/gettingStarted.html"
---

# Getting Started

Das Getting Started für documentsOS zeigt wie ein vollständiges Projekt aus einer Vorlage erstellt wird. Es enthält die folgenden Schritte:

1. Initialisieren eines Projekts aus einer Vorlage
2. Anpassen der Paket-Spezifikation
3. Erstellen eines Update-Scripts
4. Bauen und Installieren des Pakets

Für eine ausführlichere Erläuterung einzelner Features siehe den [[otrPackage/walkthrough|Feature Walkthrough]].


## Projektinitialisierung

Der schnellste Weg, um ein Projekt anzulegen, ist die Verwendung des Befehls `documents init`:


```sh
mkdir my-project
cd my-project
documents init
```

Dadurch wird das Projekt und mit seiner Ordnerstruktur initialisiert:


```sh
❯ documents init
√ Target directory the project:  ... C:/Users/VeitJahns/Documents/Projekte/my-project
Install template...
...
```

Beim Aufsetzen der Vorlage werden verschiedene Verzeichnisse und Dateien angelegt - entweder als Vorlagen oder vorbereitete Konfigurationen für verwendete Tools. Zur Erläuterung aller Verzeichnisse und Dateien ist eine Datei `README.md` beigefügt. Zudem wird für das Projekt ein Git-Repository initialisiert.


## Paket-Spezifikation (PACKAGE-Script)

Mit der Vorlage werden alle notwendigen Ordner und Init-Scripte erzeugt. Im Ordner `src/jscript/init.cat` liegen die Scripte, die für die Installation des Paket notwendig sind. Zentral ist dabei das PACKAGE-Script (Namensschema `${PROJECT_NAME}_PACKAGE.js`):


```js
// #crypt

/**
 * Paket-Spezifikation für my-project
 */

const { declarePackage } = require("otr-package");

module.exports = declarePackage({
    version: "@versionNumber@",
    name: "my-project",
    description: "",
    dependencies: [],
    updateScripts: {
        "@versionNumber@": [
            "my-project.xml",
            "issue_1"
        ]
    }
});
```

// #crypt

/**
 * Paket-Spezifikation für my-project
 */

const { declarePackage } = require("otr-package");

module.exports = declarePackage({
    version: "@versionNumber@",
    name: "my-project",
    description: "",
    dependencies: [],
    updateScripts: {
        "@versionNumber@": [
            "my-project.xml",
            "issue_1"
        ]
    }
});Folgende Minimalangaben müssen gemacht werden:

- Die beschreibenden Eigenschaften version, name, description sind für die Paketverwaltung erforderlich. Der Platzhalter @versionNumber@ wird beim Bauen durch die aktuelle Versionsnummer aus der package.json ersetzt.
- Die Eigenschaft dependencies definiert Abhängigkeiten (siehe Abschnitt zu Abhängigkeiten).
- Die Eigenschaft updateScripts definiert die Update-Schritte für alle Versionen und dient somit als Installationsanleitung für das Paket. Bei mehreren Versionen kann dies beispielsweise wie folgt aussehen:
updateScripts: { "1.0.0": [ "my-project.xml", // Importiere my-project.xml aus Version v1.0.0 dem Paket "issue_1" // Führe Update-Script "issue_1" aus ], "@versionNumber@": [ "my-project.xml", // Importiere my-project.xml aus der aktuellen Version "issue_2" // Führe Update-Script "issue_2" aus ]
}

Für alle weiteren verfügbaren Properties sowie deren Zweck und Funktionsweise siehe die [Dokumentation der Paket-Deklaration](./api/interfaces/otr-package.PackageDeclaration.html).


## Update-Script

Einzelne Änderungen wie das Anlegen und Ändern eines Mappentyps werden in Update-Scripten definiert. Diese liegen im Ordner `src/jscript/update.cat`, und weisen folgenden Aufbau auf:


```js
// #crypt

/**
 * Vorlage für ein Update-Script
 */

const { makeUpdateScript } = require("otr-package");

module.exports = makeUpdateScript({

    execute(context) {
        // ...
    },

    submitFileChanges: {
        // ...
    },

    postHandling(context) {
        // ...
    }
});
```

// #crypt

/**
 * Vorlage für ein Update-Script
 */

const { makeUpdateScript } = require("otr-package");

module.exports = makeUpdateScript({

    execute(context) {
        // ...
    },

    submitFileChanges: {
        // ...
    },

    postHandling(context) {
        // ...
    }
});Ein Update-Skript besteht aus drei Hauptbestandteilen:

- execute: Die eigentliche Update-Funktion, um z.B. Mappentypen anzulegen oder zu ändern, welche mit otrUpgrade implementiert werden können.
- submitFileChanges: Angabe der Mappentypen, auf die "Mappen ändern" ausgeführt werden soll, um Änderung auf bestehende Mappen zu übertragen.
submitFileChanges: { Mappentyp: true
}
- postHandling: Funktion, die nach Abschluss von execute und submitFileChanges ausgeführt, um z.B. Datenmigrationen auszuführen.

Siehe hierzu auch die [API-Dokumentation](./api/functions/otr-package.makeUpdateScript.html).


## Bauen und Installieren

Der Build-Prozess umfasst verschiedene Schritte. Diese sind bereits als Script-Task in der `package.json` vordefiniert. Auf der Konsole kann daher einfach der `build`-Task ausgeführt werden:


```sh
npm run build
```

Es werden der Reihe nach die XMLs, das SDPs und das ADP gebaut. Die XMLs liegen im Ordner `build` und die SDPs und ADPs im Ordner `deploy`.

Die Installation kann mittels des Script-Tasks `deploy` erfolgen:


```sh
# Installation auf einem lokalem System
npm run deploy -- --principal $name
```