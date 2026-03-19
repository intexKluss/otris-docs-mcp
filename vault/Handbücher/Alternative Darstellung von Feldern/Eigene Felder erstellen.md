---
title: "Eigene Felder erstellen"
source: "https://otris.software/documents/manuals/books/alternative-rendering/createAField.html"
---

# Eigene Felder erstellen

Um eine eigene Feld-Darstellung zu implementieren steht die Funktion
`documents.sdk.exitRegistry.registerAlternativeRenderingCallback` zur Verfügung.

Dieser Funktion werden als Parameter der Bezeichner der Felddarstellung, die Unterstützten Feld-Typen (siehe documents.sdk.Fieldmodel.Types), die Unterstützen Module und eine Callback-Funktion mitgegeben.

Die Funktion zur Registrierung bietet auch eine Möglichkeit eine Priorität mitzugeben. Hierzu wird als letzter Parameter ein Objekt welches den Schlüssel `priority` enthält. Diesem muss ein Zahlenwert übergeben werden.

In der Callback-Funktion wird das Feld erstellt und gerendert.

Im Callback stehen verschiedene Eingabeparameter zur Verfügung. Zum einen wird ein Container-Objekt, an dem das eigene Feld im DOM angehangen werden kann, übergeben.
Ebenfalls wird das Feld-Model mitgeliefert. Mit dem Feld-Model ist es möglich die Feldwerte des neuen Feldes zu synchronisieren, damit diese gespeichert werden können.

In den Optionen werden Informationen wie der Bearbeitungs-status der Mappe (Lese-/ Bearbeitungsmodus) mitgeliefert.

Zu Letzt werden einige Callbacks bereitgestellt. Diese dienen hauptsächlich dazu, es zu ermöglichen Feld-Exits anzustoßen, die dann einen Exit über documents.sdk.exitRegistry.registerFileFieldExit auslösen können. Ebenfalls gibt es einen Einstiegspunkt, der ausgeführt wird, wenn immer documents normalerweise das Model synchronisieren möchte.


```JSON
{ priority: 50 }
```

Es wird nur der Callback mit der höchsten Priorität ausgeführt.


## Beispiel

Im Folgenden ist ein einfaches Beispiel zu sehen, in dem ein Input-Feld erzeugt wird.
Im Bearbeitungsmodus wird das Feld zusammen mit einem Icon angezeigt.


![Feld im Bearbeitungsmodus](assets/CustomField_EditMode.png)

Abb. 3 - Feld im Bearbeitungsmodus

Im Lesemodus hingegen wird das Feld mit einem Hintergrund versehen und invers angezeigt.


![Feld im Lesemodus](assets/CustomField_DisplayMode.png)

Abb. 4 - Feld im Lesemodus

Die alternative Darstellung wird in diesem Beispiel mit dem Namen "myAltRender" hinterlegt. Am Manager kann über diesen Identifier die Darstellung aktiviert werden.


![Einstellung am Manager](assets/CustomField_Manager.png)

Abb. 5 - Einstellung am Manager


### Code-Ausschnitt


```js
documents.sdk.exitRegistry.registerAlternativeRenderingCallback("myAltRender", "STRING", "File", function($container, field, options, callbacks) {

	// gives you the container element to append your field to (add it to the dom here)
    var $this = $(this),
        style,
        // you have full access to the fields fieldModel. You can view "" to see what you can do.
        value = field.getValue(),
        // the symbol will be displayed next to the imput-field
        symbol = $('<span class="mdi mdi-arrow-left-right"></span>');;

	if(options.editMode) {
        // sets the background-color in the eddit-mode
		$this.addClass("editMode");
        // change width to fit the symbol
        style = 'width:calc(100% - 16px);';
	}
	else {
        // flips the text horizontally, sets the background-color, and sets the width to fit the symbol
		style = "transform: scale(-1, 1); background-color: #ffd;width:calc(100% - 16px);";
        $this.css("background-color", "#ffd");
        // adds the arrow-symbol before the input field
        $this.append(symbol);
	}

    // add the class to the container to make the field look like a documents-field
    $this.addClass("inputWrapper");

    // creates the input-field
    var $input = $('<input type="text" class="formInputText" style="' + style + '" value="'+value+'">');

    //adds the input-field to the container
	$this.append($input);

    if(options.editMode){
        // adds the arrow-symbol after the input field
        $this.append(symbol);
    }

	$input.on("change", function() {
		field.setValue($input.val(), {"silent": true});
		// triggers the change-exit-callback if a callback is registered via exit-registry
		callbacks.change();
	});
}, {priority: 100});
```

documents.sdk.exitRegistry.registerAlternativeRenderingCallback("myAltRender", "STRING", "File", function($container, field, options, callbacks) {

	// gives you the container element to append your field to (add it to the dom here)
    var $this = $(this),
        style,
        // you have full access to the fields fieldModel. You can view "" to see what you can do.
        value = field.getValue(),
        // the symbol will be displayed next to the imput-field
        symbol = $('<span class="mdi mdi-arrow-left-right"></span>');;

	if(options.editMode) {
        // sets the background-color in the eddit-mode
		$this.addClass("editMode");
        // change width to fit the symbol
        style = 'width:calc(100% - 16px);';
	}
	else {
        // flips the text horizontally, sets the background-color, and sets the width to fit the symbol
		style = "transform: scale(-1, 1); background-color: #ffd;width:calc(100% - 16px);";
        $this.css("background-color", "#ffd");
        // adds the arrow-symbol before the input field
        $this.append(symbol);
	}

    // add the class to the container to make the field look like a documents-field
    $this.addClass("inputWrapper");

    // creates the input-field
    var $input = $('<input type="text" class="formInputText" style="' + style + '" value="'+value+'">');

    //adds the input-field to the container
	$this.append($input);

    if(options.editMode){
        // adds the arrow-symbol after the input field
        $this.append(symbol);
    }

	$input.on("change", function() {
		field.setValue($input.val(), {"silent": true});
		// triggers the change-exit-callback if a callback is registered via exit-registry
		callbacks.change();
	});
}, {priority: 100});