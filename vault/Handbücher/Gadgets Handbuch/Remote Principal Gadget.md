---
title: "Remote Principal Gadget"
source: "https://otris.software/documents/manuals/books/gadget/additional-examples/remote_principal_gadget.html"
---

# Remote Principal Gadget

Seit DOCUMENTS `5.0g` ist es möglich, ein Gadget im Kontext eines anderen Mandanten auf demselben Server auszuführen. Voraussetzung dafür ist, dass das **Multi-Principal-Feature** konfiguriert ist.

Weitere Details zum **Multi-Principal-Feature** finden sich hier:

- HowTo - Multi-Solution Features
- DOPaK 2021: Multi-Solution-Features


## gadgetConfig Beispiel

Um ein Gadget im Kontext eines anderen Mandanten auszuführen, muss der **Name des remote-Mandanten** zur **gadgetConfig** mit dem Attribut **gadgetRemotePrincipal** hinzugefügt werden.


```javascript
{
    gadgetScript: 'GadgetSample_RemotePrincipal',
    gadgetAction: 'show',
    gadgetRemotePrincipal: 'relations'
}
```

{
    gadgetScript: 'GadgetSample_RemotePrincipal',
    gadgetAction: 'show',
    gadgetRemotePrincipal: 'relations'
}Wird **diese gadgetConfig** beispielsweise im `dopaag`-Mandanten verwendet, bedeutet dies, dass das Gadget-Skript im Kontext des relations Demo-Mandanten ausgeführt wird. Daher muss das Skript `GadgetSample_RemotePrincipal` im relations Demo-Mandanten verfügbar sein. Das clientseitige Rendering des Gadgets erfolgt jedoch im ursprünglichen Mandanten `dopaag`.


## Beispiel-Skript

Das folgende Codebeispiel zeigt, welche besonderen Aspekte dabei zu beachten sind.


```javascript
/**
 * Example:
 * This script demonstrates how to execute a gadget in the context of a remote principal.
 * The gadget is executed in the relations demo principal, while the client-side rendering
 * remains in the source principal.
 *
 * Usage:
 * {
 *   gadgetScript: 'GadgetSample_RemotePrincipal',
 *   gadgetAction: 'show',
 *   gadgetRemotePrincipal: 'relations'
 * }
 */

// enable require mechanism
context.enableModules(); // no needed since documentsOS
// use the require mechanism for the gadget API (available since: DOCUMENTS 5.0g)
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// register the gadget action "show"
gadgetAPI.registerGadgetAction("show", function(gadgetContext) {
	// get an instance of "otris.gadget.gui.HTML"
	const gadget = gadgetAPI.getHTMLInstance();
	// retrieve the principal name (in this example, the name of the "relations" demo principal)
	const priName = context.getPrincipalAttribute("mnemonic");

	// set the gadget title with the principal name
	gadget.setTitle('Principal: ' + priName); /* Principal: RELATIONS Demo-Version */
	gadget.appendHtml([
		'<div style="padding:30px;" class="container">',
		'<h1>Principal: ', priName, '</h1>',
		'<code><pre>gadgetSourcePrincipal: ', gadgetContext.gadgetSourcePrincipal, '</pre></code>',
		'<code><pre>gadgetRemotePrincipal: ', gadgetContext.gadgetRemotePrincipal, '</pre></code>',
		'</div>',
	]);

	gadget.onGadgetLoad(function() {
		// This function is executed on the client side
		// and in the context of the "source" principal.
		var userContext = documentsContext.getUserContext();
		console.log("principal:", userContext.principal); /* principal: dopaag */

		// The executeScript() and callGadget() methods on documentsContext
		// within a client function of a "remote" gadget will implicitly execute
		// in the remote principal "relations".
		documentsContext.executeScript("sample-script");
		documentsContext.callGadget({ gadgetScript: 'GadgetSample_HelloWorld', gadgetAction: 'helloWorld' });

		// To call scripts or gadgets in the source principal, a new DocumentsContext
		// can be created. The newly created context will be associated with
		// the source principal "dopaag".
		var dC = documents.sdk.utils.createDocumentsContext();
		dC.executeScript("sample-script");
		dC.callGadget({ gadgetScript: 'GadgetSample_HelloWorld', gadgetAction: 'helloWorld' });
	});

	// Return the gadget instance without calling the transfer method
	return gadget;
});

// call the transfer() method of the gadget API
context.returnValue = gadgetAPI.transfer();
```

/**
 * Example:
 * This script demonstrates how to execute a gadget in the context of a remote principal.
 * The gadget is executed in the relations demo principal, while the client-side rendering
 * remains in the source principal.
 *
 * Usage:
 * {
 *   gadgetScript: 'GadgetSample_RemotePrincipal',
 *   gadgetAction: 'show',
 *   gadgetRemotePrincipal: 'relations'
 * }
 */

// enable require mechanism
context.enableModules(); // no needed since documentsOS
// use the require mechanism for the gadget API (available since: DOCUMENTS 5.0g)
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// register the gadget action "show"
gadgetAPI.registerGadgetAction("show", function(gadgetContext) {
	// get an instance of "otris.gadget.gui.HTML"
	const gadget = gadgetAPI.getHTMLInstance();
	// retrieve the principal name (in this example, the name of the "relations" demo principal)
	const priName = context.getPrincipalAttribute("mnemonic");

	// set the gadget title with the principal name
	gadget.setTitle('Principal: ' + priName); /* Principal: RELATIONS Demo-Version */
	gadget.appendHtml([
		'<div style="padding:30px;" class="container">',
		'<h1>Principal: ', priName, '</h1>',
		'<code><pre>gadgetSourcePrincipal: ', gadgetContext.gadgetSourcePrincipal, '</pre></code>',
		'<code><pre>gadgetRemotePrincipal: ', gadgetContext.gadgetRemotePrincipal, '</pre></code>',
		'</div>',
	]);

	gadget.onGadgetLoad(function() {
		// This function is executed on the client side
		// and in the context of the "source" principal.
		var userContext = documentsContext.getUserContext();
		console.log("principal:", userContext.principal); /* principal: dopaag */

		// The executeScript() and callGadget() methods on documentsContext
		// within a client function of a "remote" gadget will implicitly execute
		// in the remote principal "relations".
		documentsContext.executeScript("sample-script");
		documentsContext.callGadget({ gadgetScript: 'GadgetSample_HelloWorld', gadgetAction: 'helloWorld' });

		// To call scripts or gadgets in the source principal, a new DocumentsContext
		// can be created. The newly created context will be associated with
		// the source principal "dopaag".
		var dC = documents.sdk.utils.createDocumentsContext();
		dC.executeScript("sample-script");
		dC.callGadget({ gadgetScript: 'GadgetSample_HelloWorld', gadgetAction: 'helloWorld' });
	});

	// Return the gadget instance without calling the transfer method
	return gadget;
});

// call the transfer() method of the gadget API
context.returnValue = gadgetAPI.transfer();
**Download:**[GadgetSample_RemotePrincipal.js](../assets/samples/GadgetSample_RemotePrincipal.js)