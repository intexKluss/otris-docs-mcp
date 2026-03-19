---
title: "Drop Gadget in DOCUMENTS"
source: "https://otris.software/documents/howto/gadgets/drop-gadgets.html"
---

# Drop Gadget in DOCUMENTS

Im DOCUMENTS Drop und auf der Quickdropzone im Web-Client können Gadgets eingebunden werden.


Abb. 1 - Standard Drop Gadgets im DOCUMENTS Drop


## Drop für Desktop, Outlook Add-In, Word Add-In, Office 365 (ab 5.0f)

Wenn die globale Eigenschaft DropConnector=true gesetzt ist, werden im DOCUMENTS Drop eine Reihe von Standard Drop-Gadgets angezeigt.

Um eigene Gadgets einzubinden, kann hier eine Liste von Gadget-Konfigurationen hinterlegt werden. Der Wert DEFAULT_DROP_GADGETS als Listeneintrag bindet hier die Standard Drop-Gadgets ein.

Beispiel:


```javascript
DropConnector = [{gadgetScript: 'Gadget_MyDropGadget', gadgetAction: 'show'}, DEFAULT_DROP_GADGETS]
```

DropConnector = [{gadgetScript: 'Gadget_MyDropGadget', gadgetAction: 'show'}, DEFAULT_DROP_GADGETS]

Abb. 2 - Eigenes + Standard Drop-Gadgets im DOCUMENTS Drop


## Quickdropzone (ab 5.0f HFII)

Mit der globalen Eigenschaft "quickDropZoneGadgetConfig" kann für die Quickdropzone eine Gadget-Konfiguration beim Fallenlassen von Dateien eingebunden werden. Die Dateien sind dann im Gadget-Skript als accessToken verfügbar.

Der Wert "DropDefault" zeigt hier das Standard-Drop-Gadget an.

Beispiele:


```javascript
// Standard Drop Gadget
quickDropZoneGadgetConfig = dropDefault

// Eigenes Drop Gadget
quickDropZoneGadgetConfig = { gadgetScript: "GadgetSample_HandleUploadDialog", gadgetAction: "showHandleUploadDialog" }
```

// Standard Drop Gadget
quickDropZoneGadgetConfig = dropDefault

// Eigenes Drop Gadget
quickDropZoneGadgetConfig = { gadgetScript: "GadgetSample_HandleUploadDialog", gadgetAction: "showHandleUploadDialog" }Beispielskript mit Zugriff auf accessToken:


```javascript
// #import "Gadget_API_Controller"
// GadgetConfig: { gadgetScript: "GadgetSample_HandleUploadDialog", gadgetAction: "showHandleUploadDialog" }
function showHandleUploadDialog() {

	this.execute = function() {

		var files = JSON.parse(gadgetContext.gadgetParams.uploadedFiles), // parameter contains file data
			filePath;

		if(files) {

			//  check multiple files
			if(files.length) {

				//  iterate entries
				files.forEach(function(entry) {

					//  get file path
					filePath = context.getTempPathByToken(entry.accessToken);
					util.out("name: " + entry.fileName + " path: " + filePath);
					// ...
				});
			}
			else {
				//  get file path
				var entry = files,
					filePath = context.getTempPathByToken(entry.accessToken);

				//  log file
				util.out("name: " + entry.fileName + " path: " + filePath);
				// ...
			}
		}
	};
}
```

// #import "Gadget_API_Controller"
// GadgetConfig: { gadgetScript: "GadgetSample_HandleUploadDialog", gadgetAction: "showHandleUploadDialog" }
function showHandleUploadDialog() {

	this.execute = function() {

		var files = JSON.parse(gadgetContext.gadgetParams.uploadedFiles), // parameter contains file data
			filePath;

		if(files) {

			//  check multiple files
			if(files.length) {

				//  iterate entries
				files.forEach(function(entry) {

					//  get file path
					filePath = context.getTempPathByToken(entry.accessToken);
					util.out("name: " + entry.fileName + " path: " + filePath);
					// ...
				});
			}
			else {
				//  get file path
				var entry = files,
					filePath = context.getTempPathByToken(entry.accessToken);

				//  log file
				util.out("name: " + entry.fileName + " path: " + filePath);
				// ...
			}
		}
	};
}Download: [GadgetSample_HandleUploadDialog.js](GadgetSample_HandleUploadDialog.js)