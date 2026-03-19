---
title: "Zusätzliche Einträge im Einstellungsmenü"
source: "https://otris.software/documents/howto/toolbar-settings/additional-settings.html"
---

# Zusätzliche Einträge im Einstellungsmenü

In Documents ist es möglich dem Einstellungsmenü (Aufruf über das Zahnradsymbol unten rechts) zusätzliche Einträge hinzuzufügen. Diese Funktionalität steht seit der Version **5.0c** zur Verfügung. Um dem Menü zusätzliche Einträge hinzuzufügen muss ein Skript erstellt werden und der entsprechende Skriptname als **globale Eigenschaft**`additionalSettingsScript` hinterlegt werden.

Als Rückgabewert des Skriptes wird ein Array von *Konfigurationen*, kodiert als JSON-String, erwartet. Die einzelnen Konfigurationen haben dabei den folgenden Aufbau:


```javascript
{
  // Eindeutiger technischer Name (ohne Leerzeichen und Sonderzeichen)
  name:"showInbox",
  // Angezeigter Text für den Eintrag
  label: "Zum Ordner Eingang",
  // Optionaler Tooltip
  tooltip: "Öffne den Ordner Eingang"
  // Aktion, die beim Klick ausgeführt werden soll
  action: "showFolder:96:313427"
}
```

{
  // Eindeutiger technischer Name (ohne Leerzeichen und Sonderzeichen)
  name:"showInbox",
  // Angezeigter Text für den Eintrag
  label: "Zum Ordner Eingang",
  // Optionaler Tooltip
  tooltip: "Öffne den Ordner Eingang"
  // Aktion, die beim Klick ausgeführt werden soll
  action: "showFolder:96:313427"
}Für das Attribut `action` stehen die folgenden Optionen zur Verfügung:

- showFile:[FILED_ID] - Zeigt eine Mappe an
- showFolder:[FOLDER_ID] - Öffnet einen Ordner
- runScript:[SCRIPT_NAME] - Führt ein Skript aus
- GadgetConfig {gadgetScript: "Gadget_InfoGadget", gadgetAction: "initGadget"} - Führt ein Gadget aus. Um das Gadget in einem Dialog darzustellen muss der GadgetConfig das Attribut gadgetDialog: true hinzugefügt werden.


### Beispiel für ein additionalSettingsScript


```javascript
var entries = [
  {name:"showInbox", label: "Zum Ordner Eingang", action: "showFolder:96:313427"},
  {name:"showFile", label: "Zeige Mappe", action: "showFile:dopaag_fi20140000006447"},
  {name:"runScript", label: "Führe Skript aus", action: "runScript:myScriptName"},
  {name:"gadget1", label: "Gadget", action: {
	  gadgetScript: "Gadget_InfoGadget",
	  gadgetAction: "initGadget"
    }
  },
  {name:"gadget2", label: "Gadget als Dialog", action: {
      gadgetDialog: true,
	  gadgetScript: "Gadget_InfoGadget",
	  gadgetAction: "initGadget"
    }
  }
];
return JSON.stringify(entries);
```

var entries = [
  {name:"showInbox", label: "Zum Ordner Eingang", action: "showFolder:96:313427"},
  {name:"showFile", label: "Zeige Mappe", action: "showFile:dopaag_fi20140000006447"},
  {name:"runScript", label: "Führe Skript aus", action: "runScript:myScriptName"},
  {name:"gadget1", label: "Gadget", action: {
	  gadgetScript: "Gadget_InfoGadget",
	  gadgetAction: "initGadget"
    }
  },
  {name:"gadget2", label: "Gadget als Dialog", action: {
      gadgetDialog: true,
	  gadgetScript: "Gadget_InfoGadget",
	  gadgetAction: "initGadget"
    }
  }
];
return JSON.stringify(entries);
### Einstellungsmemü mit zusätzlichen Einträgen


Abb. 1 - Einstellungsmemü mit zusätzlichen Einträgen