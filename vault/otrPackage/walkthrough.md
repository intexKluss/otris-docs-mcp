---
title: "Feature Walkthrough"
source: "https://otris.software/documents/api/otrpackage/walkthrough.html"
---

# Feature Walkthrough

Dieses Dokument bietet eine kurze Übersicht über die einzelnen Features von `otr-package`.

Die Erläuterungen basieren auf der Standardkonfiguration des Projekts. Bei Abweichungen können zusätzliche Anpassungen erforderlich sein.

Dieses Dokument beschreibt folgende Features:

- Neue Version: Erstellen einer neuen Version
- Abhängigkeiten: Einbinden von Abhängigkeiten
- Check und Hooks: Definieren von Checks und Hooks während des Installationsprozesses
- Installations-Konfigurationangaben: Definieren von Konfigurationen, die während der Installation vorgenommen werden können, z.B. Verbindungsdaten zu weiteren Datenbanken.
- Mappen-Ändern-Modus: Definieren, wann während der Installation eines Pakets das Mappen-Ändern ausgeführt wird.
- Löschen veralteter Scripte: Automatisches Löschen von veralteten Scripten bei der Installation eines Pakets.
- Admin-Center-Integration: Definieren der Einbindung des Pakets in das Admin-Center.
- Anpassen der Build- und Deploy-Konfiguration: Erweitertes Konfigurieren für das Bauen und Installieren der otr-package-Artefakte.
- ADP-Optimierung: Optimierung der Erstellung der Installationspakete.
- Versionsgetreue Installation: Installation in exakter Reihenfolge der Versionen der Hauptlösung.
- Vereinfachter Backport: Korrektur bereits ausgelieferter Pakete.

**Hinweis:** Alle Code-Beispiele sind in TypeScript verfasst, können
funktionieren aber auch analog in JavaScript.


## Neue Version erstellen

Für eine neue Version eines Pakets, ist das `PACKAGE`-Script zu ergänzen:

- Ergänzen einer neuen updateScripts-Liste für die neue Version.
// ...
module.export = declarePackage({ // ... updateScripts: { "1.0.0": [ // Bereits veröffentlichte Version "my-project.xml", "issue_1" ], "1.1.0": [ // Neue, geplannte Version "my-project.xml", "issue_2", "issue_3" // ... ] }, // ...
});
- Generell wird empfohlen die Update-Scripte der einzelnen Versionen in einem separatem Ordner abzulegen. Bezogen auf das zuvor genannte Beispiel wären dies
issue_1 in src/jscript/update.cat/1.0.0/
issue_2 und issue_3 in src/jscript/update.cat/1.1.0/

Siehe hierzu auch die [API-Dokumentation](./api/interfaces/otr-package.PackageDeclaration.html#updatescripts).


## Abhängigkeiten definieren

Um abhängige Pakete zusammen mit einem Paket zu installieren, können diese in der Paketdeklaration unter `dependencies` angegeben werden:


```js
// ...
module.export = declarePackage({
    // ...
    dependencies: [
        "otrsign",
        "otrlanguage"
    ],
    // ...
});
```

// ...
module.export = declarePackage({
    // ...
    dependencies: [
        "otrsign",
        "otrlanguage"
    ],
    // ...
});An dieser Stelle ist der Name des Pakets einzutragen. Bei Scriptlib-Paketen (z. B. otrSign) sind keine weiteren Schritte erforderlich. Bei anderen Paketen (z. B. otrLanguage) hängt es davon ab, ob sie aus einer Registry geladen werden oder im Projekt selbst mit vorhanden sind.

Abhängigkeiten werden vor dem eigentlichen Paket und in der Reihenfolge installiert, wie sie in `dependencies` angegeben sind.

Siehe hierzu auch die [API-Dokumentation](./api/interfaces/otr-package.PackageDeclaration.html#dependencies).


### Abhängigkeiten aus Registries

Um Abhängigkeiten aus Registries zu verwenden, müssen diese im Projekt installiert werden:


```sh
npm install --save @otr-documents/otrlanguage
```

Weitere Anpassungen sind in der Regel nicht notwendig. Beim Bauen werden die notwendigen Build-Artefakte der Abhängigkeiten von `documents` bzw. `otr-build` automatisch berücksichtigt, um das Gesamtpaket zu bauen.

Es können aktuell aber nur die Abhängigkeiten verwendet werden, die in den Scopes `@otr-documents` und  `@documents-components`.


### Abhängigkeiten in lokalen Projekt

Projektabhängigkeiten können auch direkt im Projekt abgelegt werden. Diese müssen im Verzeichnis `${PROJECT_ROOT}/dependencies` mit folgender Struktur abgelegt werden:


```javascript
dependencies
 +- ${DEPENDENCY_NAME}
    +- deploy
       +- ${DEPENDENCY_NAME}_V1.0.0.sdp
```

dependencies
 +- ${DEPENDENCY_NAME}
    +- deploy
       +- ${DEPENDENCY_NAME}_V1.0.0.sdpBeim Bauvorgang muss zusätzlich der Parameter `--dev` angegeben werden. Dadurch werden alle SDPs aus dem Verzeichnis `dependencies` in den ADP-Bauprozess einbezogen.


## Checks und Hooks


### Prerequisites

Während des Installationsprozesses können an verschiedenen Stellen Funktionen ausgeführt werden, beispielsweise zur Überprüfung von Installationsvoraussetzungen. Die einfachste Methode ist die Verwendung der `prerequisites`-Funktion. Diese wird unmittelbar nach dem Import der Paketdeklaration ausgeführt.

Wirft diese Funktion eine Exception oder gibt ein Array mit Fehlermeldungen zurück, wird der Installationsvorgang abgebrochen. In dem Fall werden die Paketspezifikationen zurückgerollt. Da zu diesem Zeitpunkt lediglich die Paketspezifikationen importiert wurden, befindet sich der Mandant anschließend wieder im ursprünglichen Zustand.


```js
// ...
module.export = declarePackage({
    // ...
    prerequisites() {
        const condition = ...;
        if (!condition) {
            return [ "Prerequisites not fulfilled!" ];
        }
        return [];
    },
    // ...
});
```

// ...
module.export = declarePackage({
    // ...
    prerequisites() {
        const condition = ...;
        if (!condition) {
            return [ "Prerequisites not fulfilled!" ];
        }
        return [];
    },
    // ...
});Siehe hierzu auch die [API-Dokumentation](./api/interfaces/otr-package.PackageDeclaration.html#prerequisites).


### Pre-Update-Scripte

Eine weitere Möglichkeit bieten die `preUpdateScripts`. Dabei handelt es sich um Update-Scripte, die vor der Installation jeder einzelnen Paketversion ausgeführt werden. Als Update-Scripte ermöglichen sie Fehlerprüfungen und Korrekturen im Zielmandanten, um z.B. eine fehlerfreie Installation sicherzustellen.

Die Pre-Update-Scripte werden vor der Installation jeder einzelnen Version ausgeführt. Bei zwei Versionen werden die `preUpdateScripts` beispielsweise vor der Installation von Version 1 und erneut vor der Installation von Version 2 ausgeführt. Es kann sich dabei um eine beliebige Anzahl von Update-Scripten handeln:


```js
// ...
module.export = declarePackage({
    // ...
    preUpdateScripts: [
        "pre-update-script-1",
        "pre-update-script-2"
    ],
    // ...
});
```

// ...
module.export = declarePackage({
    // ...
    preUpdateScripts: [
        "pre-update-script-1",
        "pre-update-script-2"
    ],
    // ...
});Die Scripte müssen (aktuell) im Package Deployment Descriptor enthalten sein, d.h., im Ordner `src/jscript/init.cat` liegen.

Siehe hierzu auch die [API-Dokumentation](./api/interfaces/otr-package.PackageDeclaration.html#preupdatescripts).


### Globale Pre- und Post-Update-Scripte

Als dritte Möglichkeit gibt es globale Pre- und Post-Update-Scripte, die sogenannten `globalScripts`. Die globalen Pre-Update-Scripte werden zu Beginn ausgeführt, noch vor der Installation der ersten Version oder der ersten Abhängigkeit. Die Post-Update-Scripte werden abschließend nach erfolgreicher Installation der letzten Version ausgeführt.

Wie bei den `preUpdateScripts` handelt es sich dabei um Update-Scripte. Der besondere Vorteil der `globalScripts` besteht darin, dass zwischen einer Erstinstallation (`new`) und einem Update (`update`) unterschieden werden kann:


```js
// ...
module.export = declarePackage({
    // ...
    globalScripts: {
        new: {
            pre: [
                "pre-update-script-1",
                "pre-update-script-2"
            ],
            post: [
                "post-update-script-1"
            ]
        },
        update: {
            pre: [
                "pre-update-script-3",
            ],
            post: [
                "post-update-script-1"
            ]
        }
    }
    // ...
});
```

// ...
module.export = declarePackage({
    // ...
    globalScripts: {
        new: {
            pre: [
                "pre-update-script-1",
                "pre-update-script-2"
            ],
            post: [
                "post-update-script-1"
            ]
        },
        update: {
            pre: [
                "pre-update-script-3",
            ],
            post: [
                "post-update-script-1"
            ]
        }
    }
    // ...
});Die Scripte müssen (aktuell) im Package Deployment Descriptor enthalten sein, d.h., im Ordner `src/jscript/init.cat` liegen.

Siehe hierzu auch die [API-Dokumentation](./api/interfaces/otr-package.PackageDeclaration.html#globalscripts).


## Installations-Konfigurationangaben

Dem Installationsprozess können Konfigurationsdaten übergeben werden, die während der Installation ausgelesen und verwendet werden. Beispiele hierfür sind Zugangsdaten zu externen Datenbanken oder andere systemrelevante Parameter.

Die Definition der verfügbaren Konfigurationsparameter erfolgt über `installationConfig`:


```json
{
  "installationConfig": {
    "dbHost": {
      "type": "string",
      "description": "Datenbank-Hostname",
      "required": true
    },
    "dbPort": {
      "type": "number",
      "description": "Datenbank-Port",
      "default": 5432
    }
  }
}


```js
// ...
module.export = declarePackage({
    // ...
    installationConfig: {
        allVersions: true, // Gilt für alle Versionen
        configs: {
            dbConfig: {
                dbAdminUser: "admin", // Default-Werte
                dbHost: "127.0.0.1" // Default-Werte
            }
        }
    },
    // ...
});
```

{
  "installationConfig": {
    "dbHost": {
      "type": "string",
      "description": "Datenbank-Hostname",
      "required": true
    },
    "dbPort": {
      "type": "number",
      "description": "Datenbank-Port",
      "default": 5432
    }
  }
}


```js
// ...
module.export = declarePackage({
    // ...
    installationConfig: {
        allVersions: true, // Gilt für alle Versionen
        configs: {
            dbConfig: {
                dbAdminUser: "admin", // Default-Werte
                dbHost: "127.0.0.1" // Default-Werte
            }
        }
    },
    // ...
});Vor der Installation fordert der Assistent im Admin-Center die Eingabe von `dbAdminUser` und `dbHost` an:


Auf diese Konfigurationseinstellungen kann in den Update-Scripten wie folgt zugegriffen werden:


```js
// ...
module.export = makeUpdateScript({
    execute(context: PackageContext) {
        const configs = context.getInstallationConfig("dbConfig");
        const dbAdminUser = configs.dbAdminUser;
        const dbHost = configs.dbHost;
        // ...
    },
    // ...
});
```

// ...
module.export = makeUpdateScript({
    execute(context: PackageContext) {
        const configs = context.getInstallationConfig("dbConfig");
        const dbAdminUser = configs.dbAdminUser;
        const dbHost = configs.dbHost;
        // ...
    },
    // ...
});Siehe hierzu auch die [API-Dokumentation](./api/interfaces/otr-package.PackageContext.html#getInstallationConfig).


## Mappen-Ändern-Strategien


### Standardverhalten

Standardmäßig wird nach der Installation jedes SDP (d.h. nach der Installation jeder Version der Lösung oder Abhängigkeit) ein Mappen-Ändern durchgeführt. Dies erhöht zwar die Robustheit des Installationsvorgangs gegenüber Abbrüchen, kann jedoch bei großen Systemen mit vielen Mappen zu längeren Laufzeiten führen, da Mappen-Ändern für die gleichen Mappentypen mehrfach während der Installation ausgeführt werden kann.


### Optimiertes Verhalten bei globalem Mappen-Ändern

Durch die Verwendung des Mappen-Ändern-Moduls `global` kann die Mappen-Änderung gebündelt werden, sodass sie nur einmal während der gesamten Installation ausgeführt wird. Dadurch verschiebt sich die Ausführung aller Post-Handling-Prozesse auf den Zeitpunkt nach der Mappen-Änderung:


```js
module.export = declarePackage({
    // ..
    submitFileChangeMode: "global",
    // ...
});
```

module.export = declarePackage({
    // ..
    submitFileChangeMode: "global",
    // ...
});Alternativ kann der Modus auch per CLI mittels der Option `--submit-file-change-mode` oder per Umgebungsvariable `SUBMIT_FILE_CHANGE_MODE` bei der Installation erzwungen werden:


```sh
documents deploy --submit-file-change-mode global ...

set SUBMIT_FILE_CHANGE_MODE="global"
documents deploy ...

# Bei otr-build-Variante
otr-build deploy --submit-file-change-mode global ...

set SUBMIT_FILE_CHANGE_MODE="global"
otr-build deploy ...
```


## Löschen veralteter Scripte

Während der Paketinstallation können veraltete Skripte automatisch aus dem Mandanten entfernt werden. Dies betrifft insbesondere:

- Skripte, die für die aktuelle Server-Version nicht mehr benötigt werden
- Durch neue Funktionen ersetzte Skripte
- Nicht mehr unterstützte Legacy-Skripte

Der Löschvorgang wird durch die Server-Version gesteuert und folgt dieser Logik:

1. Versionsprüfung: Vor dem Löschen wird die Server-Version geprüft
2. Bedingte Ausführung: Löschung erfolgt nur bei Erfüllung der Versionsbedingung
3. Protokollierung: Alle Löschvorgänge werden dokumentiert

Im folgenden Beispiel wird das Script `otrPerfmon` immer dann gelöscht, wenn das Paket auf einer 6.0.0 oder höher installiert wird. Wird das Paket auf einer älteren Server-Version installiert, dann wird das genannte Script nicht gelöscht.


```js
module.export = declarePackage({
    // ..
    scriptBlacklist: [{
        sinceServerVersion: 2501,
            scriptBlacklist: [
                "otrPerfMon"
            ]
    }]
    // ...
});
```

module.export = declarePackage({
    // ..
    scriptBlacklist: [{
        sinceServerVersion: 2501,
            scriptBlacklist: [
                "otrPerfMon"
            ]
    }]
    // ...
}); Siehe hierzu auch die [API-Dokumentation](./api/interfaces/otr-package.PackageDeclaration.html#scriptBlacklist).


## Admin-Center-Integration

Pakete lassen sich in das Admin-Center einbinden, so dass sie nach der Installation dort angezeigt und von dort konfiguriert werden bzw. werden können. Dazu ist in der Paket-Deklaration der `type: "extension"` zu setzen. Dann können weitere Angaben für die Integration in das Admin-Center vorgenommen werden:

- Metadaten zur Beschreibung des Pakets (ergonomischer Titel, Icon, Beschreibung)
- Funktionen zur Integration in das Admin-Center zum De-/Aktivieren, Verrechtung usw. für das De-/Aktivieren kann auf eine Default-Implementierung zurückgegriffen werden, die in otrPkgModuleTools bereitgestellt wird.

Siehe das folgende Beispiel:


```js
const { declarePackage } = require("otr-package");
const { activate, deactivate } = require("otrPkgModuleTools");

module.export = declarePackage({
    // ..

    // Meta data
    type: "extension",
    title: "Admin Center Example",
    icon: "mdi:mdi-file-cabinet",
    description: "A package that can be configured in the Admin Center.",

    // Admin center functions
    isActive: () => {
        return true; // Package is always active
    },
    activate: (options) => {
        // Do some own stuff
        // ...
        // Activate the package using the default implementation
        activate("PackageName");
    },
    deactivate: (options) => {
        // Do some own stuff
        // ...
        // Deactivate the package using the default implementation
        deactivate("PackageName");
    },
    roles: () => {
        return [{
            name: "exampleRole",
            title: "Example Role",
            description: "This role is an example role"
        }];
    }
    // ...
});
```

const { declarePackage } = require("otr-package");
const { activate, deactivate } = require("otrPkgModuleTools");

module.export = declarePackage({
    // ..

    // Meta data
    type: "extension",
    title: "Admin Center Example",
    icon: "mdi:mdi-file-cabinet",
    description: "A package that can be configured in the Admin Center.",

    // Admin center functions
    isActive: () => {
        return true; // Package is always active
    },
    activate: (options) => {
        // Do some own stuff
        // ...
        // Activate the package using the default implementation
        activate("PackageName");
    },
    deactivate: (options) => {
        // Do some own stuff
        // ...
        // Deactivate the package using the default implementation
        deactivate("PackageName");
    },
    roles: () => {
        return [{
            name: "exampleRole",
            title: "Example Role",
            description: "This role is an example role"
        }];
    }
    // ...
}); Siehe hierzu auch die [API-Dokumentation](./api/interfaces/otr-package.PackageDeclaration.html#type).


## ADP-Optimierung

Folgende Schalter sorgen für eine Optimierung der erstellten ADPs. Für zukünftige Versionen kann diese Funktionen aber Default-Verhalten werden, so dass dies nicht mehr angegeben werden muss.


### Entfernen unnötiger SDPs

Beim Erstellen der ADPs werden derzeit alle im Ordner `deploy` gefundenen SDPs der Vorgängerversionen und aller Abhängigkeiten bzw. deren Versionen in das ADP eingefügt, auch denn wenn Sie bei der Installation gar nicht verwendet werden.

Der Schalter `--reduce-size` sorgt dafür, dass diese unnötigen SDPs entfernt werden. Da dies aber Abhängig vom PACKAGE-Script ist, wird hierfür einmal das ADP installiert und ausgewertet, welche SDPs tatsächliche installiert wurden. Daher ist für diese Funktion ein Documents-Server notwendig, dessen Verbindungsdaten ebenfalls gegeben werden müssen, wenn sie von den Default-Werten abweichen.


```sh
documents build --reduce-size --host localhost ...

# Bei otr-build-Variante
otr-build build-adp --reduce-size --host localhost ...
```


### Ignorieren der SDPs von dev-Abhängigkeiten

Mittels `--sdp-dep-check` prüft `otr-build` beim Erstellen des ADPs, ob gefundene SDPs zu dev-Abhängigkeiten gehören. Ist das der Fall, werden diese beim Bauen des ADPs ignoriert.


```sh
documents build --sdp-dep-check ...

# Bei otr-build-Variante
otr-build build-adp --sdp-dep-check ...
```


## Versionsgetreue Installation


### Verwendung

Um die versionsgetreue Installation zu verwenden, müssen in den SDP-Paketen der Hauptlösung die Ausführungspläne zum Zeitpunkt der Veröffentlichung enthalten sein. Durch Bauen des ADPs mit dem Schalter `--reduce-size` oder `--full` werden diese von `otr-build` automatisch mit in die relevanten SDPs eingefügt:


```sh
otr-build build-adp --full ...
otr-build build-adp --reduce-size ...
```

Die Ausführungspläne werden bei der Installation nicht automatisch ausgewertet, sondern dies ist zu aktivieren. Entweder durch

- Setzen der Mandanteneigenschaft $PACKAGE_INSTALL_PINNED_VERSION_ENABLED=true
- oder Setzen der Umgebungsvariable PACKAGE_INSTALL_PINNED_VERSION_ENABLED=true


### Erläuterung

Der Unterschied zwischen der normalen und der versionsgetreuen Installation besteht in der Reihenfolge, wie die einzelnen Pakete installiert werden. Das soll an folgendem Beispiel erläutert werden:


```javascript
otr-sample v1.0.0
  +- otr-dep v1.0.0
    +- otr-sub-dep v1.0.0
otr-sample v1.1.0
  +- otr-dep v1.1.0
```

otr-sample v1.0.0
  +- otr-dep v1.0.0
    +- otr-sub-dep v1.0.0
otr-sample v1.1.0
  +- otr-dep v1.1.0Bei der normalen Installation ist die Installationsreihenfolge:


```javascript
1. otr-sub-dep v1.0.0
2. otr-dep v1.0.0
3. otr-dep v1.1.0
4. otr-sample v1.0.0
5. otr-sample v1.1.0
```

1. otr-sub-dep v1.0.0
2. otr-dep v1.0.0
3. otr-dep v1.1.0
4. otr-sample v1.0.0
5. otr-sample v1.1.0Es werden erst alle Versionen der Abhängigkeiten installiert, und anschließend alle Versionen der Hauptlösung. Dabei wird `otr-dep v1.1.0` vor `otr-sample v1.0.0` installiert. In dieser Version wurde `otr-dep v1.1.0` aber noch nicht verwendet.

In der Regel führt das nicht zu Problemen, insbesondere wenn die neueren Versionen abwärtskompatibel sind. Ist dies aber nicht der Fall, kann dies zu Problemen führen, wenn `otr-sample v1.0.0` installiert wird.

Mit der versionsgetreuen Installation werden erst alle Abhängigkeiten bis zu der Version installiert, die zum Zeitpunkt der jeweiligen Version der Hauptversion veröffentlicht wurden. In dem Beispiel ist dann die Reihenfolge wie folgt:


```javascript
1. otr-sub-dep v1.0.0
2. otr-dep v1.0.0
3. otr-sample v1.0.0
4. otr-dep v1.1.0
5. otr-sample v1.1.0
```

1. otr-sub-dep v1.0.0
2. otr-dep v1.0.0
3. otr-sample v1.0.0
4. otr-dep v1.1.0
5. otr-sample v1.1.0Dadurch wird die Lösung exakt in der Reihenfolge installiert, als ob die beiden Versionen der Hauptlösung separat installiert wurden, also erst `otr-sample v1.0.0` und dann `otr-sample v1.1.0`.

Nachteil dieses Vorgehens ist jedoch, dass der Installation länger dauert. Bei jeder Installation einer Version der Hauptlösung wird selbst im globalen Mappen-Ändern-Modus das Mappen-Ändern und die Post-Handlings ausgeführt. Bei dem Beispiel 2-mal, nach `otr-sample v1.0.0` und nach `otr-sample v1.1.0`.


## Vereinfachter Backport

Ein ADP enthält immer die SDPs der Vorgängerversionen zum Zeitpunkt der Auslieferung. Enthält ein solches SDPs ein fehlerhaftes Script, was bereits bei der Installation zu Problemen führt, kann es nicht durch ein korrigiertes ausgetauscht werden.

Um solche Scripte zu korrigieren, kann eine `backport.zip` dem ADP hinzugefügt werden. Aktuell muss diese händisch erstellt und händisch dem ADP hinzugefügt werden:

- Pro Paket und Version muss die backport.zip einen Ordner enthalten, in dem eine XML-Export-Datei mit dem korrigiertem Script enthalten ist. Z.B. für das Paket otr-sample v1.0.0 und v1.2.0 sieht die Struktur so aus
otr-sample_V1.0.0 +- otr-sample.xml
otr-sample_V1.2.0 +- PackageDeploymentDescriptor.xml
Bei v1.0.0 wird die reguläre XML-Datei mit den Scripten von otr-sample überschrieben, bei v1.2.0 der Package Deployment Descriptor der v1.2.0.
- Die backport.zip muss in der Wurzel des ADPs neusten Version (hier v1.3.0) liegen:
- backport.zip
- otr-sample_V1.0.0.sdp
- otr-sample_V1.1.0.sdp
- otr-sample_V1.2.0.sdp
- otr-sample_V1.3.0.sdp
Durch das Entpacken der backport.zip werden die jeweiligen XML-Dateien in dem Ordner für die v1.0.0 und die v1.2.0 überschrieben, bevor sie in den Mandanten importiert werden.