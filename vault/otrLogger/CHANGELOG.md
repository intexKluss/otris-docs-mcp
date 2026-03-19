---
title: "v3.1.3"
source: "https://otris.software/documents/api/otrLogger/CHANGELOG.html"
---

# v3.1.3

- Korrektur der Typings der Log-Funktionen. (!138)


# v3.1.2

- Destructive Assignments funktionierten nicht mehr. (!136)
const { logDebug } = require("otrLogger");


# v3.1.1

- Mutex-Handhabung beim setzen des CaptureLogs korrigiert. (!135)


# v3.1.0

- Funktionen zum Aufzeichnen und Abfragen der Log-Meldungen (!134):
setCaptureLogs()
deleteCapturedLogs()
getCapturedLogs()


# v3.0.3

- Korrektur der optionalen Parameter der log-Funktionen. (#59077)


# v3.0.2

- Korrekturen der Auslieferung. (#59077)


# v3.0.1

- Korrekturen für TypeScript-Unterstützung. (#59077)


# v3.0.0

- Umstellung auf TypeScript und Bereitstellung von Typings über die Extension. (#59077)


# v2.0.0

- Umstellung auf scriptlib-Package und Anpassungen für Admin Center (!86, !87)


# v1.9.0

- Unterstützung des cause-Properties des Error-Objekts. (#56356)


# v1.8.0

- Umstellung auf otr-package (!53)


# v1.7.0

- otrPerfmon wieder Bestandteil und wird mit im scriptlibs-Ordner ausgeliefert. (!51)


# v1.6.3

- Bereinigung von alten Scripten und nie verwendeten Einbindungen. (!49)


# v1.6.2

- Anpassung für die Verwendung in ES6-Modulen. (!47)


# v1.6.1

- Anpassungen für DOCUMENTS 6. (#46878)
- Korrekturen und Erweiterung in der Dokumentation. (#44332)


# v1.6.0

- Logging als JSON mit erweiterten Kontext-Informationen. (#35625)
- Neue Funktion setLogFormat(), um das Log-Format (text, json) zu setzen. (#35625)
- Definition eigener Log-Handler über die globale Eigenschaft $CustomJSLogHandler. Dort ist ein Script anzugeben, das eine Funktion exportiert. (#38921) Beispiel:
module.exports = function(msg) { msg += "\nChanged in custom log handler!"; util.out(msg);
}


# v1.5.0

- Der otrLogger kann per require() eingebunden werden. (#28079)
- Die log{Debug|Info|Warn|Error|Fatal}()-Funktionen akzeptieren jetzt auch Funktionen als Parameter für die Log-Nachricht. Diese Funktionen werden direkt vor der Ausgabe ausgeführt und deren Rückgabewert als Meldung protokolliert. Der Vorteil darin, liegt, dass der Nachricht nur dann erzeugt wird, wenn die Nachricht auch wirklick geschrieben wird. (#24142)
- Log-Nachrichten der Funktionen logError() und logFatal() werden auch dann als Exceptions ausgegeben, wenn nur nur ein String als Nachricht übergeben wird. Der Vorteil ist, dass in solchen Fällen auch dann ein Stacktrace protokolliert wird, wenn nur ein String als Log-Nachricht übergeben wurde. (#28126)


# v1.4.1

- Zeilenumbrüche fehlten bei der Ausgabe des Stacktraces in Fehlermeldungen. (#24078)


# v1.4.0

- Die verschiedenen Log-Funktionen können jetzt auch eine Error-Exception als Eingabe erhalten. Deren Daten (Stacktrace usw.) werden automatisch mit ausgegeben. (#22629)


# v1.3.0

- Neue Funktionen setContextFilter() und resetContextFilter() zum Setzen eines Filters von Log-Ausgaben abh. von deren Kontext. Ebenso kann dies über ein neues Property CustomJSContextFilter eingestellt werden. Als Wert ist ein regulärer Ausdruck gemäß JavaScript anzugeben. (#20060)
- Neuer Log-Level FATAL, der gecacht wird. Zum Auslesen oder Verändern des Caches gibt es neue Funktionen addMessageToCache(), clearLastFatalLogMessages() und getLastFatalLogMessages(). (#18769)
- FATAL ist als LogLevel immer voreingestellt. (#20709)


# v1.2.0

- Code-Bereinigungen und Checkstyle-Fehler korrigiert. (#16618)
- Protokollierung der Performance einer Anwendung durch den otrPerfmon. (#17315)


# v1.1.0

- Neue Funktion zum Setzen eines eigenen Handlers für Log-Meldungen: otrLogger.setLogHandler() (#15613)
- Neue Funktionen zum Setzen und Abrufen eines eigenen Timers: otrLogger.time() und otrLogger.timeEnd() (#15614)