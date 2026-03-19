---
title: "CLI-Befehle und Parameter"
source: "https://otris.software/documents/api/otrTest/cli.html"
---

# CLI-Befehle und Parameter


## Liste der verfügbaren Befehle

Mit dem folgenden Befehl können die verfügbaren Befehle der CLI ausgegeben werden. Jeder Befehl ist jeweils mit einer kurzen Beschreibung erläutert:
*Hinweis: Für eine vollständige Liste bitte den Befehl manuell ausführen*


```sh
$> documents test --help
Usage: documents test [options] [command]

Start execution of all unit tests

# [...]

Commands:
  init [options]                  Prepares the DOCUMENTS principal for the test execution.
                                  Uploads the test framework and other dependencies needed for
                                  the test execution and executes hooks defined in the
                                  configuration file otr-test.json.
  coverage                        Initialization and processing of the code coverage
```


## Liste der verfügbaren Kommandozeilenparameter

Jeder Befehl unterstützt verschiedene Kommandozeilenparameter, die mit `--help` ausgegeben werden können:
*Hinweis: Für eine vollständige Liste bitte den Befehl manuell ausführen*


```sh
$> documents test --help
Usage: documents test [options] [command]

Start execution of all unit tests

Options:
  -m, --principal <string>        Id of the target principal
  -u, --user <string>             Login (fellow or admin) used to deploy the principal
                                  (env:DOCUMENTS_SERVER_USER) (default: "admin")
  -p, --password <string>         Password of the passed user (env:DOCUMENTS_SERVER_PASSWORD)
                                  (default: "")
  -H, --host <address>            Host / IP of the DOCUMENTS-Server (env:DOCUMENTS_SERVER_HOST)
                                  (default: "localhost")
  -p, --port <number>             Port of the DOCUMENTS-Server (env:DOCUMENTS_SERVER_PORT)
                                  (default: "11000")
  --coverage                      Enables code coverage (if configured). (default: true)
  --no-coverage                   Disables code coverage even when configured.
  --coverage-dir <string>         Path to the output folder for the coverage data (default:
                                  "coverage")
  --coverage-dir-prefix <string>  Name prefix of folders which contains coverage data. Will be
                                  used instead of 'coverage-dir' if defined. (default: "")
  --enforce-all-tests             Enforces the execution of all tests on all parallel nodes.
                                  Useful for matrix builds in pipelines (default: false)
  --formatter <name>              Name of a supported formatter for the test results (e. g.
                                  JUnitXMLFormatter, BoostTestXmlFormatter) (default:
                                  "JUnitXMLFormatter")
  --format <string>               Report format for the command `report` (comma separated list).
                                  Supported formats: html, cobertura, text (default: "html")
  --mr                            If specified only merge request test suites will be executed
                                  (default: false)
  --num-executors <number>        Number of executors for parallel test execution on different
                                  documents servers (env: CI_NODE_TOTAL) (default: 1)
  --executor-id <number>          Id of the executing node in case of parallel test executions
                                  (default: 1)
  --backup                        Specifies if a backup should be created after text execution
                                  (only if tests failed). (default: true)
  --forbid-only                   Enforce a rule that tests may not be exclusive (use of e.g.,
                                  describe.only() or it.only() is disallowed). (default: true)
  --forbid-pending                Enforce a rule that tests may not be skipped (use of e.g.,
                                  describe.skip(), it.skip(), or this.skip() anywhere is
                                  disallowed). (default: false)
  --timeout                       Timeout for each test suite in milliseconds (env:
                                  TESTSUITE_TIMEOUT)
  --no-log-download               Disables the download of the server logs
  -h, --help                      display help for command
```


## Konfiguration über Umgebungsvariablen

Einige Kommandozeilenparameter können über Umgebungsvariablen konfiguriert werden. Als Beispiel sei hier die Verbindungsinformationen zum DOCUMENTS-Server genannt:

| Umgebungsvariable | Beschreibung |
| --- | --- |
| DOCUMENTS_SERVER_HOST | Host / IP des Servers, auf dem die Tests ausgeführt werden sollen. |
| DOCUMENTS_SERVER_PORT | Port des Servers. |
| DOCUMENTS_SERVER_USER | Administrativer Benutzer oder Redakteur. |
| DOCUMENTS_SERVER_PASSWORD | Passwort des Benutzers |

Diese Liste ist nur ein **Auszug** der verfügbaren Umgebungsvariablen. Eine vollständige Liste kann mit `--help` hinter dem jeweiligen Befehl abgefragt werden. In der Beschreibung des Parameters wird der Name der Umgebungsvariable (sofern verfügbar) genannt (erkennbar an `env: <Name der Umbebungsvariable>`):


```sh
$ documents test --help
Usage: documents test [options] [command]

Start execution of all unit tests

Options:
  -u, --user <string>             Login (fellow or admin) used to deploy the principal
                                  (env:DOCUMENTS_SERVER_USER) (default: "admin")
  -p, --password <string>         Password of the passed user (env:DOCUMENTS_SERVER_PASSWORD)
                                  (default: "")
  -H, --host <address>            Host / IP of the DOCUMENTS-Server (env:DOCUMENTS_SERVER_HOST)
                                  (default: "localhost")
  -p, --port <number>             Port of the DOCUMENTS-Server (env:DOCUMENTS_SERVER_PORT)
                                  (default: "11000")
                                  documents servers (env: CI_NODE_TOTAL) (default: 1)
  --timeout                       Timeout for each test suite in milliseconds (env:
                                  TESTSUITE_TIMEOUT)
  ...
```