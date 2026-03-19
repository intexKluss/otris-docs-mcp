---
title: "Script Extensions Callbacks"
source: "https://otris.software/documents/api/scriptextensions/ScriptExtensionsCallbacks.html"
---

# Script Extensions Callbacks

Since DOCUMENTS `5.0e HF2` it is possible to register callbacks at specific  *exit points*.

Currently a callback can be attached at the following *exit points*.

- additionalSettings, add: Callback to add additional setting entries (since: DOCUMENTS 5.0f)
- clientHeaderCode, beforeTransferCode: Executed before the client header code is transferred to the client

To register a callback you have to put a script in the global property `ScriptExtensionsCallbackScripts` (comma separated list of script names).

Since DOCUMENTS `5.0g` the list of the script names is cached in
the PropertyCache **propCache** (cache key: `otris.tools.callbackScripts`).
To update the list of script names after a change, either the server must be restarted
or the key must be removed from the cache manually (`propCache.removeProperty("otris.tools.callbackScripts")`).

Since DOCUMENTS `5.0g` it is also possible to add a script to the list using
the property `ScriptExtensionsCallbackScript`**= true**.
The property must be added in the property tab of the script.


```
ScriptExtensionsCallbackScripts = myCallbackScript, secondCallbackScript
```

In this script the callback must be implemented in the following way. All callback
scripts use the *require* mechanism. So the implmented callback must be
assigend to the global available `export` object.


### additionalSettings, add


```
exports.additionalSettings = {
  /**
   * The current array of additional settings entries
   * is made available in the callback.
   * @param {object} options
   * @param {object[]} options.entries array of entries
   */
  add: function(options) {
    // callback implementation
  }
};
```


### clientHeaderCode, beforeTransferCode


```
exports.clientHeaderCode = {
  /**
  * The instance of the class otris.tools.ClientHeaderCode is made
  * available in the callback.
  * @param {otris.tools.ClientHeaderCode} clientHeaderCode
  */
  beforeTransferCode: function(clientHeaderCode) {
    // callback implementation
  }
};
```


## Callbacks via otrCallback

The following callbacks are available via the *otrCallback* module.
In order for the *otrCallback* module to use the callback scripts,
they must contain the following string `_CALLBACK_` in their name.

The callbacks documented above can also be used via the *otrCallback* module.
The following syntax must be used for this:


```
exports.version = 2;
exports.moduleName = "myCustomModule";
exports.scriptExtensions = {
  clientHeaderCode_beforeTransferCode: function(clientHeaderCode) {
    // callback implementation
  }
  additionalSettings_add: function(options) {
    // callback implementation
  }
}
```


### scriptExtensions:beforeTransferInitConfig

Available since: `documents OS 6.1.0`

In this callback it is possible to set the attribute `gadgetDialog` to show
a gadget in a dialog after the user has logged in.


```
exports.version = 2;
exports.moduleName = "myCustomModule";
exports.scriptExtensions = {
    beforeTransferInitConfig: function(options) {
      const gadgetConfig = {
        gadgetScript: "Gadget_WelcomeDialog",
        gadgetAction: "start",
        gadgetWidth: 700,
        gadgetHeight: 450
      };
      options.gadgetDialog = JSON.stringify({ gadgetConfig: gadgetConfig });
    }
};
```