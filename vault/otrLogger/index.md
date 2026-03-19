---
title: "otrLogger"
source: "https://otris.software/documents/api/otrLogger/index.html"
---

# otrLogger


## Introduction

This library provides a logging class for writing structured messages to
the server log. Usually, `util.out()` is used for writing the logging
messages.


## Setting It Up

To use the otrLogger in a script, the otrLogger can be either imported by
`#import` or included by `require()`, which is recommended.


```javascript
context.enableModules();
var otrLogger = require("otrLogger");
otrLogger.logDebug("script name", "debug log message");
otrLogger.logInfo("script name", "info log message");
otrLogger.logWarn("script name", "warning log message");
otrLogger.logError("script name", "error log message");
otrLogger.logFatal("script name", "fatal error log message");

try {
  throw new Error("Something is wrong!")
} catch (e) {
  // name, message, script, line, column and stacktrace
  // will be logged
  otrLogger.logError("Sample", e);
}
```

context.enableModules();
var otrLogger = require("otrLogger");
otrLogger.logDebug("script name", "debug log message");
otrLogger.logInfo("script name", "info log message");
otrLogger.logWarn("script name", "warning log message");
otrLogger.logError("script name", "error log message");
otrLogger.logFatal("script name", "fatal error log message");

try {
  throw new Error("Something is wrong!")
} catch (e) {
  // name, message, script, line, column and stacktrace
  // will be logged
  otrLogger.logError("Sample", e);
}To activate and control the level of the written log messages, the global
DOCUMENTS property `$CustomJSLogLevel` has to be set. The following values
are allowed for this property

- DEBUG: All log message will be written
- INFO: All log message besides DEBUG will be written
- WARN: All log message besides DEBUG and INFO will be written
- ERROR: Only error and fatal error log message will be written
- FATAL: Only fatal error log message will be written; these log messages will be also cached and can be retrieved from the otrLogger.


## Properties

The otrLogger's behavior can be controlled using the following global
DOCUMENTS properties:

- CustomJSLogLevel
- CustomJSContextFilter
- CustomJSLogFormat