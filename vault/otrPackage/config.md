---
title: "Konfiguration"
source: "https://otris.software/documents/api/otrpackage/config.html"
---

# Konfiguration


## Installationsnutzer

Für die Installation über die Kommandozeile sowie für die automatische Aktualisierung von Scriptlib-Paketen wird ein Installationsnutzer benötigt. Standardmäßig wird hierfür der Nutzer `webRoot` verwendet. Falls dieser nicht vorhanden ist, wird er automatisch von otr-package angelegt.

Alternativ kann ein anderer Nutzer als Installationsnutzer festgelegt werden. Hierfür gibt es folgende Möglichkeiten:

| Methode | Beschreibung |
| --- | --- |
| Mandanteneigenschaft | Der Nutzerlogin wird in der Mandanteneigenschaft $packageAdmin spezifiziert. |
| Umgebungsvariable | Der Nutzerlogin wird in der Umgebungsvariable DOCUMENTS_PACKAGE_ADMIN spezifiziert. |

Hinweis: Wenn beide Methoden verwendet werden, hat die Angabe in `$packageAdmin` Vorrang.

Der Nutzer kann gesperrt werden, so dass er keine Nutzerlizenz belegt. otr-package kann ihn dann dennoch verwenden.


## Build-Konfiguration

Die Erstellung der Script-XMLs kann zentral in der Datei `otr-build.json` konfiguriert werden. Dabei kann eine der Build-Konfigurationen für den Build-Prozess ausgewählt werden.


```sh
documents build --buildConfig build
```

In einer Build-Konfiguration können folgende Einstellungen konfiguriert werden. Sofern nicht anders angegeben, gelten die Beispielwert als Standardwerte der jeweiligen Einstellungen.


```json
{
    "build": {

        // Aktivierung oder Deaktivierung der Script-Verschlüsselung (// #crypt)
        "encrypt": true,

        // Aktivierung oder Deaktivierung der Script-Komprimiierung (// #compress)
        "compress": true,

        // Erzwinge die Verschlüsselung aller Script, außer die markiert mit "// #nocrypt"
        "forceEncrypt": false,

        // Erzwinge Komprimierung aller Scripte. Funktioniert nicht mit //#import!
        "forceCompress": false,

        // Glob-Muster für die Script-Dateien, die für beim Erstellen der
        // Import-XML eingebunden werden sollen.
        "includeSourceOnlyPattern": [
            "src/jscript/**/*.js",
            "src/**/*.xml"
        ],

        // Glob-Muster für die Scripte aus Abhängigkeiten, die beim Bauen der
        // Import-XML mit eingebunden werden sollen.
        "includeDependenciesPattern": [
            "node_modules/@otr-documents/*/src/jscript/**/*.js",
            "node_modules/@otr-documents/*/src/**/*.xml"
        ],

        // Ausgabeverzeichnis für die XML-Dateien.
        "outputDir": "build",

        // Name der XML-Dateien. Wenn nicht angegeben, dann wird der Name
        // aus der package.json verwendet.
        "xmlFileName": "beispiel",

        // Optional. Es können mehrere Build-Konfigurationen angegeben werden.
        // Mit dieser Anweisung können diese zu einer zusammengeführt werden.
        "extends": [
            "build-conf1",
            "build-conf2"
        ],

        // Optional. Name einer oder mehrerer Build-Konfigurationen, die vor
        // der Ausführung dieser Build-Konfiguration ausgeführt werden müssen.
        "needs": "build", // oder "needs": ["build", "build2", "build3", ...]

        // Aktiviert die Ersetzung von folgenden Ersetzungsmarken im den Scripten
        // * `@buildDate@`: Datum im Format YYYY-MM-DD
        // * `@buildTimestamp@`: Zeitstempel in ISO8601-Format
        // * `@versionNumber@`: Versionnummer aus der package.json
        // * `@gitRevision@`: Git-Revision letzten Commits
        "replaceVersionTags": true ,

        // Optional: Versionsnummer. Default: Versionsnummer aus der package.json
        "versionNumber": "1.0.0",
    }
}
```

{
    "build": {

        // Aktivierung oder Deaktivierung der Script-Verschlüsselung (// #crypt)
        "encrypt": true,

        // Aktivierung oder Deaktivierung der Script-Komprimiierung (// #compress)
        "compress": true,

        // Erzwinge die Verschlüsselung aller Script, außer die markiert mit "// #nocrypt"
        "forceEncrypt": false,

        // Erzwinge Komprimierung aller Scripte. Funktioniert nicht mit //#import!
        "forceCompress": false,

        // Glob-Muster für die Script-Dateien, die für beim Erstellen der
        // Import-XML eingebunden werden sollen.
        "includeSourceOnlyPattern": [
            "src/jscript/**/*.js",
            "src/**/*.xml"
        ],

        // Glob-Muster für die Scripte aus Abhängigkeiten, die beim Bauen der
        // Import-XML mit eingebunden werden sollen.
        "includeDependenciesPattern": [
            "node_modules/@otr-documents/*/src/jscript/**/*.js",
            "node_modules/@otr-documents/*/src/**/*.xml"
        ],

        // Ausgabeverzeichnis für die XML-Dateien.
        "outputDir": "build",

        // Name der XML-Dateien. Wenn nicht angegeben, dann wird der Name
        // aus der package.json verwendet.
        "xmlFileName": "beispiel",

        // Optional. Es können mehrere Build-Konfigurationen angegeben werden.
        // Mit dieser Anweisung können diese zu einer zusammengeführt werden.
        "extends": [
            "build-conf1",
            "build-conf2"
        ],

        // Optional. Name einer oder mehrerer Build-Konfigurationen, die vor
        // der Ausführung dieser Build-Konfiguration ausgeführt werden müssen.
        "needs": "build", // oder "needs": ["build", "build2", "build3", ...]

        // Aktiviert die Ersetzung von folgenden Ersetzungsmarken im den Scripten
        // * `@buildDate@`: Datum im Format YYYY-MM-DD
        // * `@buildTimestamp@`: Zeitstempel in ISO8601-Format
        // * `@versionNumber@`: Versionnummer aus der package.json
        // * `@gitRevision@`: Git-Revision letzten Commits
        "replaceVersionTags": true ,

        // Optional: Versionsnummer. Default: Versionsnummer aus der package.json
        "versionNumber": "1.0.0",
    }
}
### Zusätzliche Ressourcen einbinden

Neben den Scripten könnnen noch weitere Ressourcen in ein SDP eingebunden werden. Hierzu ist in der Projektwurzel die Datei `otr-build-addon.json` zu erstellen. Dann wird beim Bauen des SDPs diese Dateien in das SDP eingefügt:


```json
{
    "build": [
        {
            "resource": [
                {
                    // Frei wählbarerer Namen. Im SDP wird daraus ein
                    // Ordner erstellt, in dem die Dateien abgelegt
                    // werden. Empfohlen wird, diese nach den Typ
                    // zu trennen; filetypes, folders, workflows usw.
                    "name": "filetypes",
                    // Fester Wert
                    "type": "property",
                    // Filtermuster für die Dateieen der Ressource
                    // [VERSION] wird durch die Versionsnummer aus der
                    // package.json ersetzt
                    "directory": "src/filetype/[VERSION]/**/*.xml"
                }
            ]
        }
    ]
}
```

{
    "build": [
        {
            "resource": [
                {
                    // Frei wählbarerer Namen. Im SDP wird daraus ein
                    // Ordner erstellt, in dem die Dateien abgelegt
                    // werden. Empfohlen wird, diese nach den Typ
                    // zu trennen; filetypes, folders, workflows usw.
                    "name": "filetypes",
                    // Fester Wert
                    "type": "property",
                    // Filtermuster für die Dateieen der Ressource
                    // [VERSION] wird durch die Versionsnummer aus der
                    // package.json ersetzt
                    "directory": "src/filetype/[VERSION]/**/*.xml"
                }
            ]
        }
    ]
}Um diese Ressourcen bei der Installation einzuspielen, sind diese im PACKAGE-Script zu referenzieren. Für das zuvor genannte Beispiel, sieht es wie folgt aus, wenn ein XML-Export mit einem Mappentypen `submission` darin abgelegt ist:


```js
updateScripts: {
        "1.0.0": [
            "filetypes/submission.xml",
            // ...
        ]
    }
```

    updateScripts: {
        "1.0.0": [
            "filetypes/submission.xml",
            // ...
        ]
    }Hier wird die XML aus den Ressourcen, die in der  `otr-build-addon.json` unter dem Namen `filetypes` angegeben wurde, imporiert.


## Deploy-Konfiguration

Die Erstellung der Script-XMLs kann zentral in der Datei `otr-build.json` konfiguriert werden. Dabei kann eine der Deploy-Konfigurationen für den Deploy-Prozess ausgewählt werden.


```sh
documents deploy --distribution --deployConfig deploy
```

In einer Deploy-Konfiguration können folgende Einstellungen konfiguriert werden. Sofern nicht anders angegeben, gelten die Beispielwert als Standardwerte der jeweiligen Einstellungen.


```json
{
    "deploy": {

        // Hooks, die vor oder nach der Installation ausgeführt werden sollen
        "hooks": {
            // Hooks, die nach der Installation ausgeführt werden
            "afterImport": [
                {
                    // Name der auszuführenden Funktionen, verfügbar sind
                    // - doMaintenance (Name der Wartungsoperation)
                    // - downloadCurrentLogFile (Zielpfad)
                    // - executeScriptOnServer (Scriptname)
                    // - runCodeOnServer (Code)
                    "action": "doMaintenance",

                    // Parameter der Funktion
                    "params": ["encryptMarkedScripts"],

                    // Erwartetes Ergebnis. Wenn das Ergebnis nicht mit dem
                    // hier angegeben übereinstimmt, dann schlägt das
                    // Installieren fehl.
                    "expectedResult": "Scripts encrypted"
                }
            ],
            // Hooks werden vor der Installation ausgeführt
            "beforeImport": [
                // Siehe `afterImport`
            ]
        },

        // Optional. Wenn angegeben, wird dieser Präfix zusammen mit einer
        // generierten eindeutigen Id al Mandantnenamen verwendet
        "principalIdPrefix": "beispiel",

        // Optional. Es können mehrere Deploy-Konfigurationen angegeben werden.
        // Mit dieser Anweisung können diese zu einer zusammengeführt werden.
        "extends": [
            "deploy-extends1",
            "deploy-extends2"
        ],

        // Optional. Array von Dateien, die vor dem Import an den Server
        // geschickt werden sollen.
        "staticSources": [
            {
                "pattern": "src/templates/globalConfig/*.*",
                "globOptions": {},
                 // Werden abgelegt in /tmp/doc6_tmp/beispiel/templates/...
                "targetLocation": "beispiel/templates/"
            }
        ],

        // Optional. Name der Build-Konfiguration, die verwendet werden solle,
        // wenn `deploy` mit dem Argument `--build` aufgerufen wird.
        "buildConfig": "",

        // Optional. Vor der Installation wird die angegebene Datensicherung
        // importiert, anstatt einen neuen, leeren Mandanten zu erstellen.
        "backup": {
            "jexPath": "path/to/jex(.zip|.jex)",
            "repositoryPath": "path/to/repo.zip"
        },

        // Optional. Pfade zu Lizenzdatei(en), die vor der Installation zum
        // Server geschickt werden sollen.
        "licences": []
    }
}
```

{
    "deploy": {

        // Hooks, die vor oder nach der Installation ausgeführt werden sollen
        "hooks": {
            // Hooks, die nach der Installation ausgeführt werden
            "afterImport": [
                {
                    // Name der auszuführenden Funktionen, verfügbar sind
                    // - doMaintenance (Name der Wartungsoperation)
                    // - downloadCurrentLogFile (Zielpfad)
                    // - executeScriptOnServer (Scriptname)
                    // - runCodeOnServer (Code)
                    "action": "doMaintenance",

                    // Parameter der Funktion
                    "params": ["encryptMarkedScripts"],

                    // Erwartetes Ergebnis. Wenn das Ergebnis nicht mit dem
                    // hier angegeben übereinstimmt, dann schlägt das
                    // Installieren fehl.
                    "expectedResult": "Scripts encrypted"
                }
            ],
            // Hooks werden vor der Installation ausgeführt
            "beforeImport": [
                // Siehe `afterImport`
            ]
        },

        // Optional. Wenn angegeben, wird dieser Präfix zusammen mit einer
        // generierten eindeutigen Id al Mandantnenamen verwendet
        "principalIdPrefix": "beispiel",

        // Optional. Es können mehrere Deploy-Konfigurationen angegeben werden.
        // Mit dieser Anweisung können diese zu einer zusammengeführt werden.
        "extends": [
            "deploy-extends1",
            "deploy-extends2"
        ],

        // Optional. Array von Dateien, die vor dem Import an den Server
        // geschickt werden sollen.
        "staticSources": [
            {
                "pattern": "src/templates/globalConfig/*.*",
                "globOptions": {},
                 // Werden abgelegt in /tmp/doc6_tmp/beispiel/templates/...
                "targetLocation": "beispiel/templates/"
            }
        ],

        // Optional. Name der Build-Konfiguration, die verwendet werden solle,
        // wenn `deploy` mit dem Argument `--build` aufgerufen wird.
        "buildConfig": "",

        // Optional. Vor der Installation wird die angegebene Datensicherung
        // importiert, anstatt einen neuen, leeren Mandanten zu erstellen.
        "backup": {
            "jexPath": "path/to/jex(.zip|.jex)",
            "repositoryPath": "path/to/repo.zip"
        },

        // Optional. Pfade zu Lizenzdatei(en), die vor der Installation zum
        // Server geschickt werden sollen.
        "licences": []
    }
}