---
title: "TreeChart Callbacks"
source: "https://otris.software/documents/howto/treechart/treeChart_Callbacks.html"
---

# TreeChart Callbacks

Über das DOCUMENTS Client SDK können für TreeCharts Callbacks hinterlegt werden, welche zu bestimmten Zeiten ausgeführt werden
um die Darstellung der TreeChart zu beinflussen.


## TreeChart.afterChangeConfig

Wenn die Legende durch **config.showLegend** angezeigt wird, ist es möglich, die Einstellungen der angezeigten TreeChart zu ändern.
Nach dem Ändern einer Einstellungen wird der Callback **TreeChart.afterChangeConfig** ausgeführt.
Dieser kann dazu verwendet werden, geänderte Einstellungen zu persistieren.

Beispiele:


```javascript
/**
 * Example 1: Saving the changes in LocalStorage.
 * Please note that the LocalStorage can be deleted in the browser and changes would be lost.
 */
documents.sdk.exitRegistry.registerTreeChartExitCallback("TreeChart.afterChangeConfig", function(documentsContext, options) {
	// Current settings have been reset by the user => delete saved configuration
	if(options.reset) {
		documentsContext.getLocalStorage("treeChart").remove("treeChart_fileId_" + documentsContext.getFileContext().getFileId());
	}
	else { // Store configuration in LocalStorage
		documentsContext.getLocalStorage("treeChart").put("treeChart_fileId_" + documentsContext.getFileContext().getFileId(), options.config);
	}
});

/**
 * Example 2: Saving the changes as user property.
 */
documents.sdk.exitRegistry.registerTreeChartExitCallback("TreeChart.afterChangeConfig", function(documentsContext, options) {
	var userContext = documentsContext.getUserContext();
	var fileContext = documentsContext.getFileContext();
	var fileId = fileContext.getFileId();
	var registerName = fileContext.getRegisterName();
	// Current settings have been reset by the user => delete saved configuration
	if(options.reset) {
		userContext.removeCustomProperty("treeChartConfig_" + fileId + "_" + registerName, "treeChartConfig");
	}
	else { // Store configuration as new user property
		userContext.setCustomPropertyValue("treeChartConfig_" + fileId + "_" + registerName, "treeChartConfig", JSON.stringify(options.config));
	}
});
```

/**
 * Example 1: Saving the changes in LocalStorage.
 * Please note that the LocalStorage can be deleted in the browser and changes would be lost.
 */
documents.sdk.exitRegistry.registerTreeChartExitCallback("TreeChart.afterChangeConfig", function(documentsContext, options) {
	// Current settings have been reset by the user => delete saved configuration
	if(options.reset) {
		documentsContext.getLocalStorage("treeChart").remove("treeChart_fileId_" + documentsContext.getFileContext().getFileId());
	}
	else { // Store configuration in LocalStorage
		documentsContext.getLocalStorage("treeChart").put("treeChart_fileId_" + documentsContext.getFileContext().getFileId(), options.config);
	}
});

/**
 * Example 2: Saving the changes as user property.
 */
documents.sdk.exitRegistry.registerTreeChartExitCallback("TreeChart.afterChangeConfig", function(documentsContext, options) {
	var userContext = documentsContext.getUserContext();
	var fileContext = documentsContext.getFileContext();
	var fileId = fileContext.getFileId();
	var registerName = fileContext.getRegisterName();
	// Current settings have been reset by the user => delete saved configuration
	if(options.reset) {
		userContext.removeCustomProperty("treeChartConfig_" + fileId + "_" + registerName, "treeChartConfig");
	}
	else { // Store configuration as new user property
		userContext.setCustomPropertyValue("treeChartConfig_" + fileId + "_" + registerName, "treeChartConfig", JSON.stringify(options.config));
	}
});
Download: [treeChart_Callback_afterChangeConfig_Example.js](treeChart_Callback_afterChangeConfig_Example.js)


## TreeChart.beforeLoadConfig

Bevor die Einstellungen einer TreeChart geladen werden, wird dieser Callback mit der anzuwendenen Konfiguration aufgerufen.
Hier ist es möglich, die Einstellungen vor Anzeige zu verändern.
Dieser Callback kann dazu verwendet werden, persistierte Einstellungen anzuwenden.

Beispiele:


```javascript
/**
 * Example 1: Load the config from LocalStorage.
 * See Example 1 in treeChart_Callback_afterChangeConfig_Example.js
 * Please note that the LocalStorage can be deleted in the browser and changes would be lost.
 */
documents.sdk.exitRegistry.registerTreeChartExitCallback("TreeChart.beforeLoadConfig", function(documentsContext, options) {
	// Load existing configuration from LocalStorage
	var customConfig = documentsContext.getLocalStorage("treeChart").get("treeChart_fileId_" + documentsContext.getFileContext().getFileId())
	if(customConfig) { //Overwrite settings with saved settings
		Object.entries(customConfig).forEach(entry => {
			options.config[entry[0]] = entry[1];
		});
	}
});

/**
 * Example 2: Load the config from user property.
 * See Example 2 in treeChart_Callback_afterChangeConfig_Example.js
 */
documents.sdk.exitRegistry.registerTreeChartExitCallback("TreeChart.beforeLoadConfig", function(documentsContext, options) {
	var userContext = documentsContext.getUserContext();
	var fileContext = documentsContext.getFileContext();
	var fileId = fileContext.getFileId();
	var registerName = fileContext.getRegisterName();
    // Load existing configuration from user property
    var customConfig = JSON.parse(userContext.getCustomPropertyValue("treeChartConfig_" + fileId + "_" + registerName, "treeChartConfig"));
    if(customConfig) { // Overwrite settings with saved settings
        Object.entries(customConfig).forEach(entry => {
            options.config[entry[0]] = entry[1];
        });
    }
});
```

/**
 * Example 1: Load the config from LocalStorage.
 * See Example 1 in treeChart_Callback_afterChangeConfig_Example.js
 * Please note that the LocalStorage can be deleted in the browser and changes would be lost.
 */
documents.sdk.exitRegistry.registerTreeChartExitCallback("TreeChart.beforeLoadConfig", function(documentsContext, options) {
	// Load existing configuration from LocalStorage
	var customConfig = documentsContext.getLocalStorage("treeChart").get("treeChart_fileId_" + documentsContext.getFileContext().getFileId())
	if(customConfig) { //Overwrite settings with saved settings
		Object.entries(customConfig).forEach(entry => {
			options.config[entry[0]] = entry[1];
		});
	}
});

/**
 * Example 2: Load the config from user property.
 * See Example 2 in treeChart_Callback_afterChangeConfig_Example.js
 */
documents.sdk.exitRegistry.registerTreeChartExitCallback("TreeChart.beforeLoadConfig", function(documentsContext, options) {
	var userContext = documentsContext.getUserContext();
	var fileContext = documentsContext.getFileContext();
	var fileId = fileContext.getFileId();
	var registerName = fileContext.getRegisterName();
    // Load existing configuration from user property
    var customConfig = JSON.parse(userContext.getCustomPropertyValue("treeChartConfig_" + fileId + "_" + registerName, "treeChartConfig"));
    if(customConfig) { // Overwrite settings with saved settings
        Object.entries(customConfig).forEach(entry => {
            options.config[entry[0]] = entry[1];
        });
    }
});
Download: [treeChart_Callback_beforeLoadConfig_Example.js](treeChart_Callback_beforeLoadConfig_Example.js)