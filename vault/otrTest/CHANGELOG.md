---
title: "v4.9.0"
source: "https://otris.software/documents/api/otrTest/CHANGELOG.html"
---

# v4.9.0

- Testergebnisse werden während der Ausführung einer Testsuite zwischengespeichert, so dass die auch noch nach einem Timeout oder anderweitigen Abbruch der Verbindung zum Server zur Verfügung stehen. Nach einem solchen Abbruch werden die Zwischenergebnisse vom Testframework heruntergeladen. (#68335)


# v4.8.0

- Anpassungen für Auslieferung als SEA. (#69019)


# v4.7.1

- Korrektur beim Löschen von Testdaten, wenn Testmappen bereits gelöscht waren. (#69018)


# v4.7.0

- Neue Prüfungfunktionen assertObjectsEqual() und assertFileFieldRights(). (!481)
- Neuer Hook preimport, der vor dem Hochladen der Dateien, die in include angegeben sind, ausgeführt wird. (!480)
- Trat bei der Ausführung der Testsuiten ein Fehler auf, wurde nicht in allen Fällen der Verbindungs-Timeout zurückgesetzt. In Fällen, wo der Server nicht mehr verfügbar ist, konnte die Fehlerbehandlung stark verzögert werden, wenn der TESTSUITE_TIMEOUT sehr hoch eingestellt wurde. (#67762)


# v4.6.3

- engines-Eingabe in package.json korrigiert.


# v4.6.2

- Abhängigkeit zu shelljs entfernt. (#67824)
- Löschen der Testdaten für bereits gelöschte Testdaten korrigiert, so dass keine falschen Fehlermeldungen ausgelöst werden. (#67178)


# v4.6.1

- Fehler in Typings korrigiert.


# v4.6.0

- Neue Hilfsfunktion isDocFileDeleted() zum prüfen, ob einen Mappenobjekt endgültig gelöscht wurde. (#63701)
- Erweiterung der Hilfsfunktionen createSystemUser() und createFellow() um die optionalen Parameter licenseType und status. (#66681)
- createFellow() schlug fehl, wenn kein Login angegeben wurde. Der generierte Default-Login-Name war zu lang. (#66681)
- Anpassung an erweiterte Prüfung im Server, so dass mit gelöschten Mappenobjekten nicht mehr gearbeitet werden kann. (#63701)
- Nutzerangabe auf der Kommandozeile wurde beim Kommando test nicht berücksichtigt. (#67347)
- Aktualisierung von documents-sds auf v2.5.1 (!474)
Wenn in Hooks Scripte ausgeführt wurden, die es nicht gibt, wurde kein Fehler ausgegeben.
Documents-Properties, die in der specs.json definiert waren (properties) wurden nicht richtig gesetzt.


# v4.5.6

- Abhängigkeit @otr-tools/documents-sds aktualisiert. Bei verschlüsselten Scripten wurden der instrumentierte Code nicht mehr korrekt hochgeladen. (!457)


# v4.5.5

- Verbindungsprüfung während der Testausführung fehlertoleranter gemacht. (!456)


# v4.5.4

- Binden auf Typescript v5.4.* wegen fehlendem implicitUseStrict in neueren Versionen. (#64641)


# v4.5.3

- Korrektur des Löschens von Testdaten, wenn Documents-Objekte mehr als einmal vorhanden waren. (#63857)


# v4.5.2

- Ausgabeordner und Dateinamen der Coverage-Berichte hatten sich geändert. (!436)


# v4.5.1

- Abhängigkeit istanbul-lib-instrument wurde wieder hinzugefügt.


# v4.5.0

- Code-Coverage-Bibliothek istanbul auf v3 aktualisiert. (!425)
Neue Report-Formate: text-summary, lcov, json, json-summary, teamcity, clover
- CLI-Bibliothek commander auf v13 aktualisiert. Breaking Changes wurden deaktiviert, und kommen mit der v5.0.0 von otrTest. (!422)


# v4.4.0

- Neue Funktionen zum Erzwingen der Testdatenlöschung, auch wenn dabei Fehler auftreten. Aktuell wird dies aber nur Fehler im OnDelete-Exit von Mappen unterstützt. (#63702)
desribe("Test data deletion", function() { // Für die gesamte Suite this.enforceTestDataDeletion(); it("should delete test data", function() { // Nut für diesen Testfall this.enforceTestDataDeletion(); });
});


# v4.3.3

- Technisches Release zu v4.3.2.


# v4.3.2

- Fehlerhafte Parameterübergabe führten durch Commander v13 zu Abbrüchen.


# v4.3.1

- Aufräumen konnte mit DlcErrFileUnknown fehlschlagen, wenn eine Mappe in ihrem OnDelete-Exit andere Mappen gelöscht hat, die ebenfalls zum Aufräumem vorgemerkt waren. (!420)


# v4.3.0

- Neue Funktion zum Deaktivierung der verteilten Testausführung in einer Testsuite. (#40)
describe("...", function() { // Deaktiviert die verteilte Testausführung für alle Tests dieser // Suite und garantiert, dass alle Tests dieser Suite vom gleichen // Runner ausgeführt werden. this.disableDistributedTestExecution();
});
- Fehler beim Einbinden von otrLogger auf Documents 5 korrigiert. (!407)


# v4.2.0

- Neue Optionen --no-backup, --no-forbid-only und --no-forbid-pending für das test-Kommando, mit denen sich die dazugehörigen Optionen deaktivieren lassen.
- Testausführung schlug fehl, wenn in einem Testscript mit Mocha-Interface context.returnValue gesetzt wurde.
- Aktualisierung von @types/chai auf v4.3.20.


# v4.1.1

- Mappen werden durch das Testframework beim Löschen in den Mappenpool verschoben. Andernfalls konnte das zu Abstürzen führen.
- setBeforeDeleteTestDataCallback() in Typings ergänzt.
- Aktualisierung von @types/chai auf v4.3.17.


# v4.1.0

- Optimierung der parallelen Testausführung. Die kann mittels eines Webdis-Servers pro Testsuite parallelisiert werden. Wird über die folgenden neuen Optionen gesteuert. Siehe hierzu auch die Dokumentation (#18):
--webdis-host
--webdis-execution-id
--webdis-executor-id
--shuffle-testsuites
- Neue Funktion UnitTest.captureLogs(capture: boolean), mit der die Lognachrichten, die während eines Unit Tests mit otrLogger geloggt werden, vom Testframework aufgezeichnet und im Fehlerfall mit ausgegeben werden.
it("Retry case example", function() { this.captureLogs(true);
});
Hinweis: Setzt otrLogger v3.1.0 voraus.
- Funktionen zum Wiederholen von fehlschlagenden Testfällen. Das ist sinnvoll bei Wackeltests, die aufgrund von instabilen äußeren Faktoren fehlschlagen, und nicht aufgrund eines Fehler. Die beforeEach- und afterEach-Hooks werden dabei jedes mal ausgeführt. Ist in Anlehung an Mocha implementiert: https://mochajs.org/#retry-tests
describe("Retry example", function() { // Alle Testfälle, werden 2 wiederholt, wenn sie fehlschlagen this.retries(2); // Dieser Testfall, wird 4 wiederholt, wenn er fehlschlagen it("Retry case example", function() { this.retries(4); });
});
- Die Coverage Ergebnisse werden bei Verwendung des PrettyFormatter (Default bei manueller Ausführung, nicht über das CLI) nicht mehr ausgegeben. (!363)
- Optimierung der Übertragung der Testergbenisse vom Server. (#30)
- Neue Konfigurationsoption testSuiteNamePattern. Die kann verwendet werden, wenn die für die Testsuiten ein anderes Namensschema verwendet wird, wie z.B. ' *.test.js`. (#25)
- Default-Werte für testSuiteDirectory und testCoverage berücksichtigen in TypeScript-Projekten das Ausgabeverzeichnis, welche in der tsconfig.json angegeben ist. Für die Testsuite muss die tsconfig.json neben der Konfigurationsdatei otr-test.json liegen. (#27)
- Erweiterung der Angaben zu Dateinamen, Hostnamen usw. im JUnit-Bericht. (!364, !365)
- Erweiterung der Log-Ausgaben um Angaben zur Testsuite. (!366)


# v4.0.1

- Aufrufe der alten beforeAll() und afterAll()-Hooks konnten zu folgenden Fehler führen:
TypeError: this.currentTestContainer is null


# v4.0.0

- Umbenennung der Hooks beforeAll() und afterAll() an in before() bzw. after(). Die Benennung ist nun gleich mit Mocha. Die alten Namen beforeAll() und afterAll() werden aber weiterhin unterstützt.
- Korrektur der Ausführungsreihenfolge der Hooks. Die ist nun wie folgt: before()
beforeEach()
afterEach()
after(). Zuvor wurden before() bzw. beforeAll() erst nach dem beforeEach() ausgeführt. Die Ausführungsreihenfolge ist damit auch gleich zu der von Mocha.
- Neue Funktion this.setTestSuitesName() zum Setzen des Namens einer Menge von Testsuiten. (!344) describe("Example", function() { this.setTestSuitesName("Suites collection"); // ...
}); Wird aber nur im JUnit-Format berücksichtigt. Führt hier zu folgender JUnit-Ausgabe: <testsuites name="Suites collection"><testsuite name="Example"> ... </testsuite></testsuites> Bei anderen Ausgabeformaten wird dieser Name ignoriert. Relevant ist das für den Import der XML-Dateien in Test-Management-Tools, die darüber die XML-Dateien
- Default-Einstellungen von chai.js angepasst (#26): includeStack: Per Default wird die Aufrufliste (Callstack) in die Ausgabe eingefügt.
truncateThreshold: Per Default wird die Begrenzung der Ausgabe von geprüften Werten bei Fehlern von 40 auf 100000 Zeichen erhöht. Angepasst werden können die in Testsuite wie folgt:
const chai = require("chai");
chai.config.includeStack = false;
chai.config.truncateThreshold = 0; // Unbegrenzt
- Die Option --timeout wird auch beim Herunterladen der Coverage-Daten berücksichtigt. (!349)


# v3.8.1

- Die Schalter --no-log-download und --tls für das test-Kommando wiederhergestellt. (!331)


# v3.8.0

- Neue Funktion this.executeAsUser(login: string, callback: () => T): T, die die übergebene Callback-Funktion im Kontext des übergebenen Benutzers ausführt und anschließend wieder zum aktuellen Skriptuser zurück wechselt. (!316)
- Neuer Schalter --testsuite, um eine einzelne Testsuite per otr-test test ausführen zu können. (!324)
- Neuer Schalter --skip-test-init, um die Testinitialisierung (Code Coverage Instrumenter, Upload der Sourcen, Ausführen von Hooks) zu überspringen. Nützlich in Kombination mit --testsuite. (!324)
- Das Testframework erkennt nun, wenn die Serververbindung getrennt wurde und bricht die Testausführung ab. (!325)
Neuer Schalter --check-alive-interval <number>, mit der die Wartezeit zwischen den Prüfungen eingestellt werden kann. Der Default-Wert ist 5 s.
- Korrektur der Beschreibung des Schalters --timeout. (!325)
- Das Testframework loggt nun auf der Konsole den Fortschritt der Testausführung. (!325)
- Das Löschen der Testdaten kann im SuperMode erfolgen. Die kann mit den neuen Funktionen this.setDeleteTestDataInSuperMode(boolean): void für eine Testsuite oder einem Testfall eingestellt werden. Per Default ist der SuperMode beim Löschen deaktiviert. (!318)
- Neuer Hook, der vor dem Löschen der Testdaten ausgeführt wird. Der kann mit this.setBeforeDeleteTestDataCallback(callback: () => void): void für eine Testsuite oder einen Testfall definiert werden. (!318)
- Kleinere Aktualisierung der Log-Ausgaben für die Hooks bei der Testausführung. (!319)
- Die Typings der Funktionen this.util.findPortalScript, this.util.createCallbacks, this.util.createFellow und this.util.createSystemUser waren nicht korrekt. (!330)


# v3.7.0

- Neuer Schalter --tls zum Verbinden zu Documents per TLS. (#22)


# v3.6.2

- Anpassung an Encoding-Breaking-Change in documentsOS. (#59127)


# v3.6.1

- Die Kürzel von --password und --port waren identisch, was zu einem Konflikt führte. Neues Kürzel von --password ist -P. (!300)


# v3.6.0

- Die Fehlermeldung bei Verwendung von .only und .skip in Kombination mit dem CLI-Parameter --forbid-only bzw. --forbid-pending wurde ist nun ausführlicher und schlägt nun mögliche Maßnahmen zur Behebung vor. (!284)
- Bei Verwendung des Pretty-Formatters (Default, wenn nicht per CLI ausgeführt) wird nun darauf hingewiesen otr-test init auszuführen, um Fehler durch fehlende Testdaten zu vermeiden, die ggf. in einem prelaunch-Hook angelegt werden. (!285)
- Die Ausgabe des Pretty-Formatters erfolgt nun in englischer Sprache. (!285)
- Die CLI-Flags forbid-only und forbid-pending werden als Mandanteneigenschaft gespeichert, damit das Testframework die Kommandozeilenparameter bei der Ausführung der Tests auswerten kann. Die Mandanteneigenschaften wurden nach der Testausführung nicht wieder gelöscht. (!286)
- Bei Verwendung von .only wurde in der Serverkonsole fälschlicherweise die Anzahl aller Unit Tests der Testsuite geloggt anstatt nur die Tests, die per .only ausgeführt werden sollen (Meldung Execute Unit Test X of X). (!287)
- Aktualisierung von chai auf v4.4.0 (https://github.com/chaijs/chai/releases/tag/v4.4.0). (!289)


# v3.5.3

- Die Typdefinition für this.util wurde korrigiert (Code Completion, Code Validierung).


# v3.5.2

- Der Default-Wert von --no-log-download wurde korrigiert. Der hatte sich mit v3.5.0 versehentlich geändert. (!269)
- Aktualisierung von @types/chai auf 4.3.11. (!270)


# v3.5.1

- Der Code Instrumenter, der bei aktivierter Code Coverage mit dem Befehl otr-test test die JavaScript-Quelldateien instrumentiert, kann nun per --no-instrument deaktiviert werden. Hierdurch ist es bspw. möglich, die Instrumentierung des Codes von der Generierung des Coverage Reports zu trennen (bspw. bei Parallisierung der Testausführung). (!264)


# v3.5.0

- Sämtliche CLI Optionen der Kommandos test und coverage können nun per Umgebungsvariable konfiguriert werden. Eine Liste der Umgebungsvariablen kann mit der Option --help des jeweiligen Kommandos abgefragt werden.
- Der Default-Wert der Option --fetch-coverage-data wurden an das Standardverhalten angepasst. (!259)


# v3.4.1

- Die zusätzlichen Coverage Daten, die im Server erfasst werden, werden nun serverseitig komprimiert, um die Übertragungsdauer zu reduzieren


# v3.4.0

- Der Schalter --enforce-all-tests kann nun alternativ per Umgebungsvariable ENFORCE_ALL_TESTS aktiviert werden.


# v3.3.2

- Korrektur beim Aufsplitten von instrumentierten Quellcodedateien (!245, eb1465fd)


# v3.3.1

- Beim Zusammensetzen der gesplitteten Dateien, die mehr als 256000 Zeichen haben, lag ein Syntaxfehler im Skript vor, das die gesplitteten Dateien wieder zusammen gesetzt hat. (d2679757)


# v3.2.2

- Chai.js wurde beim Veröffentlichen nicht gebundelt; fehlten dann in der Registry. (!214)


# v3.2.1

- Versionsnummer (--version) falsch, wenn als Abhängigkeit installiert (!212)


# v3.2.0


## Erweiterungen

- otrTest kann als Binärdatei ausgeliefert werden (!209, !211)
- Neuer Schalter --no-coverage für test, um die Code Coverage zu deaktivieren (!209)
- Neuer Schalter --no-log-download für test, um das Herunterladen der Server-Logs zu deaktivieren (!209)


# v3.1.0

- Optimierungen für die Einbindung in andere Programme (#21)
- Neuer Schalter --cwd zum Setzen des Arbeitsverzeichnisses (!206)


# v3.0.0

- Chai Assertion Library verfügbar (!185).
- Neuer Schalter --enforce-all-tests zur Ausführung in Matrix-Builds (#7).
- Konfig-Dateinamen in otr-test.json geändert. Umbenennung erfolgt automatisch, muss aber selbst eingecheckt werden (#4).
- Neue Konfigurationsoption testSuiteDirectory, mit der sich das Verzeichnis mit den Testsuiten konfigurieren lässt (!195).
- Umstellung des CLI-Parser (#10).
- Funktionen zusätzlich als API verfügbar (#10).
- Upgrade jsverify v0.8.4 (#8).
- Verbesserung der Doku (!183).