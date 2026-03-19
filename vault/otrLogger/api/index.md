---
title: "@otr-documents/otrlogger"
source: "https://otris.software/documents/api/otrLogger/api/index.html"
---

## @otr-documents/otrlogger


# otrLogger

otrLogger ist ein Logger, der mit der Scripting-Funktion
`util.out` auf die Documents-Konsole schreibt.

*Hinweis:* Historisch bedingt, wird die Klasse otrLoggerClass auf
einer Variable mit dem Namen OtrLogger auf dem globalen Gültigkeitsbereich
definiert. Der Name OtrLogger ist daher reserviert, da sonst die
Klasse überschrieben wird.

*Einbindung*: Der otrLogger kann per Import-Direktive und per `require()`
eingebunden werden. Per `require()` wird aber nur das
Objekt `otrLogger` exportiert. Auf die Klasse "OtrLogger" kann entweder
über die globale Variable oder die Funktion
`otrLogger.getInstance()` zugegriffen werden.

Wird der OtrLogger per Import-Direktive eingebunden, dann ist ein
Logger (Objekt) mit dem Namen "otrLogger" ist bereits erzeugt.

*Aktivierung*: Wenn die Documents-Eigenschaft "CustomJSLogLevel" gesetzt ist,
wird diese übernommen. Gültige Eigenschaftswerte sind: DEBUG,
INFO, WARN, ERROR, FATAL, NONE (als Zeichenkette/String) In
Abhängigkeit des LOG-Level werden die Meldungen der
verschiedenen log-Funktionen (siehe Beispiel) ausgegeben oder
unterdrückt.

*LOG-Level*: Die LOG-Level haben die folgende Wertigkeit

- DEBUG: Alle Meldungen werden ausgegeben*
- INFO: Alle ausser DEBUG*
- WARN: Alle Warnungen und Fehler-Text*
- ERROR: Fehler und fatale Fehler*
- FATAL: Nur der FATAL-Level*

Alle LOG-Funktionen besitzen die gleiche Signatur

- logContext: Skript/Klassenname*
- message: Beliebiger Text*
- transactionNo: Eine Transaktionsnummer (optional)*
- fileId: Eine Mappen-Id (optional)*


## Beispiel


```js
context.enableModules();
var otrLogger = require("util.otrLogger");
otrLogger.logDebug("Skript/Klassenname", "Beliebiger Debug-Text");
otrLogger.logInfo("Skript/Klassenname", "Beliebiger Info-Text");
otrLogger.logError("Skript/Klassenname", "Beliebiger Fehler-Text");
otrLogger.logWarn("Skript/Klassenname", "Beliebiger Warnungs-Text");
otrLogger.logFatal("Skript/Klassenname", "Beliebiger Fehler-Text");
 *
try {
  throw new Error("Something is wrong!")
} catch (e) {
  // name, message, script, line, column and stacktrace
  // will be logged
  otrLogger.logError("Sample", e);
}
```


## Typings

Typings stehen zur Verfügung und können als dev-Abhängigkeit wie folgt
installiert werden:


```sh
npm install @types/otrlogger --save-dev
```

Bei der Verwendung muss der Modulname in Kleinbuchstaben geschrieben werden.


```js
const otrLogger = require("otrlogger");
```

In der Regel spielt Groß-Klein-Schreibung in Documents keine Rolle. Wenn
doch, kann mit der Pfadangabe die Datei direkt referenziert werden:


```js
const otrLogger = require("otrlogger/core.cat/util.otrLogger");
```