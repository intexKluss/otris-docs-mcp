---
title: "DOCUMENTS CLI"
source: "https://otris.software/documents/manuals/books/toolbox/toolbox-cli.html"
---

# DOCUMENTS CLI


## Einführung

Die CLI ist ein Kommandozeilen-Werkzeug, mit dem sich die Toolbox
über die Kommandozeile ansteuern lässt sowie die
documentsOS-Lösungen bauen und paketieren lassen. Zudem kann CLI
auch in automatisierten Build- und Testprozessen eingesetzt
werden.


## Installation


### Windows

Unter Windows wird die CLI mit der Toolbox installiert. Sie wird
zudem automatisch in in `%PATH%` eingetragen, so dass sie nach
der Installation auf der Kommandozeile verfügbar ist.


### Linux

Unter Linux (Ubuntu) kann die CLI über `apt` installiert werden.
Hierzu ist das [APT-Repository der otris wie für DOCUMENTS
einzubinden](https://otris.software/documents/manuals/books/installation-linux/index.html).

Anschließend kann die CLI wie folgt installiert werden:


```javascript
> sudo apt update
> sudo apt install documents-cli
```

> sudo apt update
> sudo apt install documents-cli
## Kommandos

Eine Übersicht über alle Kommandos lässt sich mit dem Kommando
`help` abfragen:


```javascript
> documents help
```

> documents helpDie Hilfe für eines Kommandos kann ebenfalls abgefragt werden,
indem der Kommandonamen ergänzt wird. Für das Kommando `init`
kann die Hilfe wie folgt abgefragt werden:


```javascript
> documents help init
```

> documents help init Es werden dann vorhandene Subkommandos und Optionen mit einer
kurzen Beschreibung angezeigt.


### Toolbox-Kommandos

Über die CLI lässt sich die Toolbox bedienen. Hierfür stehen
folgende Kommandos stehen hierfür zur Verfügung:

- toolbox: Öffnet die Toolbox.
- manager: Öffnet den Manager für das aktuelle Projekt.
- console: Öffnet für den ServerMonitor für das aktuelle Projekt.
- web: Öffnet die Web-Oberfläche für das aktuelle Projekt.

Es werden dabei die Verbindungsdaten aus der `.vscode/launch.json`
des aktuellen Ordners verwendet, und der dort angegebene
Mandant jeweils verwendet.


### Entwicklungs-Kommandos


#### init

Initialisiert ein Projekt. Im aktuellen oder in einem angegebenen
Zielverzeichnis werden dazu die grundlegende Ordnerstruktur mit Vorlagen
für die notwendigen Konfigurationsdateien erzeugt. Eine Beschreibung
der Ordner und der Konfigurationsdateien findet sich der ebenso
angelegten Datei `README.md` des initialisierten Projekts.


#### build


##### Übersicht

Baut und paketiert die Lösung des Projekts. Dazu werden eine Reihe
von Build-Artefakten erstellt:

- XML-Dateien: Liegen im Ordner build. Entsprechend der Konfiguration werden die Scripte in XML-Dateien verpackt, die in documentsOS importiert werden können.
- SDP-Dateien: Die Single-Distribution-Packages (SDP) fassen die XML-Dateien für Scripte sowie andere XML-Exporte einer Version einer Lösung zusammen. Diese Dateien werden im Ordner deploy abgelegt. Vorhanden Dateien werden beim Bauen nicht überschrieben. Wenn erforderlich ist dies mit der Option --force zu erzwingen.
- ADP-Dateien: Die Application-Distribution-Packages fassen die SDP-Dateien einer Lösung sowie die SDP-Dateien aller Abhängigkeiten zusammen. Diese werden ebenfalls im Ordner deploy abgelegt.

Die für das Bauen erforderlichen Konfigurationen sind in der
Datei `otr-build.json` hinterlegt. Soweit sich im Standard
bewegt wird, ist die nicht anzupassen.


```javascript
> documents build
```

> documents buildSoll eine bestimmte Build-Konfiguration verwendet werden,
um z. B. bestimmte Dateien ein- oder auszuschließen, so
kann dies in der `otr-build.json` angegeben werden. Die
Build-Konfiguration lässt sich dann wie folgt anwenden:


```javascript
> documents build --buildConfig demo
```

> documents build --buildConfig demo
##### Build-Konfiguration

Die Build-Konfiguration kann in der `otr-build.json`
angegeben werden. Deren Aufbau und deren wichtigste
Einstellungen sind wie folgt:


```json
{
    // Build-Konfiguration
    "build": [
        // Konfiguration für eine Script-XML. Wenn Scripte in
        // getrennte XMLs zusammengefügt werden sollen, dann
        // weitere Objekte in diesem Array ergänzen.
        {
            // Name der zu erstellenden XML-Datei.
            // Default: Name aus der package.json
            "xmlFileName": "example",
            // Glob-Pattern für die Scripte, die in diese XML
            // eingefügt werden sollen.
            "includeSourceOnlyPattern": [
                "src/jscript/core.cat/**/*.js" // Default
            ],
            // Ordner, in dem die XML-Dateien abgelegt werden sollen
            "outputDir": "build", // Default
            // Aktivierung der Verschlüsselung und Signierung
             "encrypt": true // Default
        }
    ],
    // Weitere Build-Konfigurationen
    "demo": [
        // ...
    ]
}
```

{
    // Build-Konfiguration
    "build": [
        // Konfiguration für eine Script-XML. Wenn Scripte in
        // getrennte XMLs zusammengefügt werden sollen, dann
        // weitere Objekte in diesem Array ergänzen.
        {
            // Name der zu erstellenden XML-Datei.
            // Default: Name aus der package.json
            "xmlFileName": "example",
            // Glob-Pattern für die Scripte, die in diese XML
            // eingefügt werden sollen.
            "includeSourceOnlyPattern": [
                "src/jscript/core.cat/**/*.js" // Default
            ],
            // Ordner, in dem die XML-Dateien abgelegt werden sollen
            "outputDir": "build", // Default
            // Aktivierung der Verschlüsselung und Signierung
             "encrypt": true // Default
        }
    ],
    // Weitere Build-Konfigurationen
    "demo": [
        // ...
    ]
}
#### deploy

Installiert ein gebautes ADP in einem documentsOS-Server.
Wird nichts weiter angegeben, so wird das vorhandene ADP
im Ordner `deploy` verwendet.

Um das aktuelle ADP auf einem lokalen Documents in den
Mandanten "demo" zu installieren, ist das Kommando wie
folgt aufzurufen:


```javascript
> documents deploy --principal demo --deployConfig deploy-demo
```

> documents deploy --principal demo --deployConfig deploy-demo
##### Deploy-Konfigurationen

Analog zu `build` können in der `otr-build.json`
Deploy-Konfigurationen hinterlegt werden. Diese
unterscheiden sich in den Angaben, die dort vorzunehmen
sind:


```json
{
    // Build-Konfigurationen
    "build": [
        // ...
    ],
    // Deploy-Konfigurationen
    "deploy-demo": [
        // Glob-Muster für zusätzliche XML- und JS-Dateien,
        // die beim deploy mit hochgeladen werden sollen.
        "includePattern": [],
        // Aktionen, die während des Deploys ausgeführt
        // werden sollen
        "hooks": {
            "afterImport": [{
                // Auszuführende Aktion
                // Aktionen: doMaintenance, executeScriptOnServer
                "action": "doMaintenance",
                // Parameter für die Aktion
                "params": ["ScriptLog 1"],
                // Erwartetes Ergebnis. Tritt das nicht ein,
                // schlägt der Deploy fehl.
                "expectedResult": "scriptlog done"
            }],
            "beforeImport": [
                // siehe `afterImport`
            ]
        }
    ]
}
```

{
    // Build-Konfigurationen
    "build": [
        // ...
    ],
    // Deploy-Konfigurationen
    "deploy-demo": [
        // Glob-Muster für zusätzliche XML- und JS-Dateien,
        // die beim deploy mit hochgeladen werden sollen.
        "includePattern": [],
        // Aktionen, die während des Deploys ausgeführt
        // werden sollen
        "hooks": {
            "afterImport": [{
                // Auszuführende Aktion
                // Aktionen: doMaintenance, executeScriptOnServer
                "action": "doMaintenance",
                // Parameter für die Aktion
                "params": ["ScriptLog 1"],
                // Erwartetes Ergebnis. Tritt das nicht ein,
                // schlägt der Deploy fehl.
                "expectedResult": "scriptlog done"
            }],
            "beforeImport": [
                // siehe `afterImport`
            ]
        }
    ]
}
#### test

Führt alle Tests in dem Projekt aus, und wertet die
Ergebnisse aus. Dazu muss in dem Projekt das Testframework
konfiguriert und Test-Scripte vorhanden sein. Wie das
konfiguriert und Test-Scripte entwickelt werden ist in
der Dokumentation des Testframeworks beschrieben.

Im einfachsten Fall können die Tests wie folgt ausgeführt
werden:


```javascript
> documents test
```

> documents testZur Initialisierung des Testframeworks steht zu dem ein
gesondertes `init`-Kommando zur Verfügung:


```javascript
> documents test init
```

> documents test init
#### clean

Kommando was alle erzeugte Artefakte von `build` und
`test` weglöscht.

*Ausgenommen* sind dabei die Artefakte, die im Ordner
`deploy` liegen. Diese werden nicht gelöscht.