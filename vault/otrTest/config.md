---
title: "otrTest"
source: "https://otris.software/documents/api/otrTest/config.html"
---

## Konfiguration

Die folgende Konfigurationsdatei muss unter `src/test/otr-test.json` abgelegt werden.


## Minimalkonfiguration


```json
{
	"include": [
		// Optional. Weitere Sourcen wie Hilfsbibliotheken, die für das Testen
		// benötigt werden. Für das Deployment des Testmandanten wird die
		// Verwendung von otr-build empfohlen.
		"src/test/util/**/*.{js,mjs}"
	],
	"testCoverage": {
		"include": [
			"src/jscript/**/*.{js,mjs}"
		],
		"exclude": []
	}
}
```

{
	"include": [
		// Optional. Weitere Sourcen wie Hilfsbibliotheken, die für das Testen
		// benötigt werden. Für das Deployment des Testmandanten wird die
		// Verwendung von otr-build empfohlen.
		"src/test/util/**/*.{js,mjs}"
	],
	"testCoverage": {
		"include": [
			"src/jscript/**/*.{js,mjs}"
		],
		"exclude": []
	}
}
## Gesamtkonfiguration

Die Eigenschaften können nach Bedarf hinzugefügt oder entfernt werden:


```json
{
	// Name des Mandanten, indem die Tests ausgeführt werden sollen (muss
	// selbst deployed werden)
	// Kommandozeilenargument `--principal` hat Vorrang
	"principal": "test",

	// Benutzer / Redakteur, der über ausreichend Rechte verfügt, um ggf.
	// Mandanten anzulegen
	// Optional (default = admin ohne Passwort). Benutzer / Redakteur für
	// die Skriptausführung per SDS (muss sich im Manager anmelden können)
	// Kommandozeilenargument `--user` und --password hat Vorrang
	"user": "admin",
	"password": "",

	// glob-Patterns zum Hochladen von Skripten und XML-Dateien vor dem Starten der Tests
	"include": [
		"src/test/util/**/*.{js,mjs}",
		"src/test/util/**/*.xml"
	],

	// Liste Testsuite-Dateinamen, die nicht generell ausgeführt werden sollen
	"exclude": [
		"test.term.matrix.termination.series" // <-- Dateiname der Testsuite
	],

	// Liste von Testsuiten, die in Merge Requests nicht ausgeführt werden sollen
	// (Wird nur angewendet, wenn Kommandozeilenargument `--mr` definiert wurde)
	"nonMergeRequestTestSuites": [
		"test.term.matrix.termination.series" // <-- Dateiname der Testsuite
	],

	"scripts": {

		// Wird noch vor dem Upload der Source Files ausgeführt
		"preinit": [
			{
				"type": "shell",
				"command": "npm run compile"
			}
		],

		// Deprecated. Wird zum gleichen Zeitpunkt wie preinit ausgeführt.
		"postinit": [],

		// Wird vor dem Upload der Sourcen in "config.include" hochgeladen
		"preimport": [],

		// Wird vor dem Ausführen der Tests ausgeführt.
		// Zu diesem Zeitpunkt wurden die Sourcen "config.include" bereits importiert
		"prelaunch": [
			{
				// Portal-Skript, welches bereits auf dem Server ist,
				// ausführen (z.B. Initialisierung)
				"type": "portalscript",
				"command": "otrTerm-INIT" // Name des Skripts
			}
		],

		// Wird nach dem Ausführen der Tests aufgerufen
		"postlaunch": [
			{
				// Portal-Skript, welches bereits auf dem Server ist,
				// ausführen (z.B. Initialisierung)
				"type": "<cmd|shell|sh>",
				"command": "node byeByeWorld.js"
			}
		]
	},

	// Wenn angegeben, werden Coverage-Daten gesammelt
	"testCoverage": {
		// Sourcen, für die Coverage-Daten gesammelt werden sollen
		"include": [
			"src/jscript/**/*.{js,mjs}"
		],

		// Einzelne Ordner und Skripte, die ausgeschlossen werden sollen
		"exclude": [
			"src/jscript/otrTest_TypeDefs.js"
		]
	},
	// Pfad zum Ordner, in denen sich die Testsuites befinden. Bei der Verwendung von Transpilern, wie typescript,
	// kann der Ausgabepfad der transpilierten Testsuites abweichen.
	"testSuiteDirectory": "src/test"
}
```

{
	// Name des Mandanten, indem die Tests ausgeführt werden sollen (muss
	// selbst deployed werden)
	// Kommandozeilenargument `--principal` hat Vorrang
	"principal": "test",

	// Benutzer / Redakteur, der über ausreichend Rechte verfügt, um ggf.
	// Mandanten anzulegen
	// Optional (default = admin ohne Passwort). Benutzer / Redakteur für
	// die Skriptausführung per SDS (muss sich im Manager anmelden können)
	// Kommandozeilenargument `--user` und --password hat Vorrang
	"user": "admin",
	"password": "",

	// glob-Patterns zum Hochladen von Skripten und XML-Dateien vor dem Starten der Tests
	"include": [
		"src/test/util/**/*.{js,mjs}",
		"src/test/util/**/*.xml"
	],

	// Liste Testsuite-Dateinamen, die nicht generell ausgeführt werden sollen
	"exclude": [
		"test.term.matrix.termination.series" // <-- Dateiname der Testsuite
	],

	// Liste von Testsuiten, die in Merge Requests nicht ausgeführt werden sollen
	// (Wird nur angewendet, wenn Kommandozeilenargument `--mr` definiert wurde)
	"nonMergeRequestTestSuites": [
		"test.term.matrix.termination.series" // <-- Dateiname der Testsuite
	],

	"scripts": {

		// Wird noch vor dem Upload der Source Files ausgeführt
		"preinit": [
			{
				"type": "shell",
				"command": "npm run compile"
			}
		],

		// Deprecated. Wird zum gleichen Zeitpunkt wie preinit ausgeführt.
		"postinit": [],

		// Wird vor dem Upload der Sourcen in "config.include" hochgeladen
		"preimport": [],

		// Wird vor dem Ausführen der Tests ausgeführt.
		// Zu diesem Zeitpunkt wurden die Sourcen "config.include" bereits importiert
		"prelaunch": [
			{
				// Portal-Skript, welches bereits auf dem Server ist,
				// ausführen (z.B. Initialisierung)
				"type": "portalscript",
				"command": "otrTerm-INIT" // Name des Skripts
			}
		],

		// Wird nach dem Ausführen der Tests aufgerufen
		"postlaunch": [
			{
				// Portal-Skript, welches bereits auf dem Server ist,
				// ausführen (z.B. Initialisierung)
				"type": "<cmd|shell|sh>",
				"command": "node byeByeWorld.js"
			}
		]
	},

	// Wenn angegeben, werden Coverage-Daten gesammelt
	"testCoverage": {
		// Sourcen, für die Coverage-Daten gesammelt werden sollen
		"include": [
			"src/jscript/**/*.{js,mjs}"
		],

		// Einzelne Ordner und Skripte, die ausgeschlossen werden sollen
		"exclude": [
			"src/jscript/otrTest_TypeDefs.js"
		]
	},
	// Pfad zum Ordner, in denen sich die Testsuites befinden. Bei der Verwendung von Transpilern, wie typescript,
	// kann der Ausgabepfad der transpilierten Testsuites abweichen.
	"testSuiteDirectory": "src/test"
}