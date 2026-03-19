---
title: "Module: GenericRecordDataCollector"
source: "https://otris.software/documents/api/record-library/module-GenericRecordDataCollector.html"
---

Collect data to be shown in navigator, list or details mode.

### Methods


**staticmodule:GenericRecordDataCollector.collectData(data, mode, searchExpression, config, sortExpression)**

            Collects the data for the navigator/record-list/record-details.
        | Name | Type | Description |
| --- | --- | --- |
| data | RecordDataLib | RecordDataLib object containing base info for collecting data. The data to be shown in the current mode must be added to this object. |
| mode | string | Current mode in which the data collector is called. Possible values: navigator: navigator in file record: show list of records details: script was called as fileDetailsScript |
| searchExpression | string | Search expression used for the data to be displayed. |
| config | object | Configuration defined by eNavigator script. |
| sortExpression | string | Sortexpression to be used when creating a HitResultset |