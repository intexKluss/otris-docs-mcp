---
title: "API-Dokumentation"
source: "https://otris.software/documents/manuals/books/otrlifecycle/api.html"
---

# API-Dokumentation


Public API of otrLifeCycle

**Kind**: global namespace

- otrLifeCycle_API : object
.updateLifeCycleAction(file)
.findFutureMatchingRules(file, [startTimestamp]) ⇒ Array.<{time: Date, rule: LifeCycleRule}>


### otrLifeCycle_API.updateLifeCycleAction(file)

Updates all fields and attributes of a file which are set by the life cycle rules. Can be called, if you used sync to change the file.

**Kind**: static method of otrLifeCycle_API

| Param | Type | Description |
| --- | --- | --- |
| file | DocFile | File for which to evaluate the life cycle rules |


### otrLifeCycle_API.findFutureMatchingRules(file, [startTimestamp]) ⇒ Array.<{time: Date, rule: LifeCycleRule}>

Finds matching rules for a given file which are in the future relative to the startTimestamp. Returns rules sorted by date.
Repeating rules are only returned once, for the next repetition after the startTimestamp.

**Kind**: static method of otrLifeCycle_API
**Returns**: `Array.<{time: Date, rule: LifeCycleRule}>` - The matching rules

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| file | DocFile |  | DocFile for which to determine future matching rules |
| [startTimestamp] | Date |  | Date from which the search should start, if null or omitted, then the date will be determined automatically |