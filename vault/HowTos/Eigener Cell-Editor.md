---
title: "Eigener Cell-Editor"
source: "https://otris.software/documents/howto/gentable/gridCellEditor.html"
---

# Eigener Cell-Editor


Abb. 1 - Einfacher eigener Editor

Im Gentable können auch eigene Editoren zum Bearbeiten von Daten erstellt werden.
Dafür gibt es in der Documents Client SDK die Funktionen [[Client SDK/documents.sdk.gentable.gentableRegistry#.registerGridCellEditor|registerGridCellEditor]].

Hier muss eine doby-grid Editor-Funktion zurückgegeben werden, die bestimmte Methoden implementiert:


```javascript
documents.sdk.gentable.gentableRegistry.registerGridCellEditor("gentableCustomCellRendererAndEditor", "MY_CUSTOM_TYPE", function(documentsContext, gentableOptions) {

    var gentableEditor = function() {

        // Wird aufgerufen um den Editor nach dem Initialisieren zu fokussieren
        this.focus = function () {...};

        // Optional: Kann intern verwendet werden um den Anzeigewert zu holen, bspws. für Fehlerausgaben.
        this.getValue = function () {...};

        // Läd die Daten aus dem Model in den Editor in einem für ihn verwendbaren Format
        this.loadValue = function (item) {...};

        // Schreibt die Daten zurück ins Model
        this.applyValue = function (items, value, options, otrOpts) {...};

        /* Gibt zurück ob sich die Daten im Vergleich zum gespeicherten Model verändert haben.
           Beim Zerstören des Editors verwendet doby-grid diese Funtion um festzustellen, ob diese Zelle neu gerendert werden muss. */
        this.isValueChanged = function () {...};

        // Wird aufgerufen, wenn die Bearbeitung abgebrochen wird. Hier wird der Editor zerstört und die Zelle in den Ursprungszustand zurückversetzt.
        this.cancel = function () {...};

        // Liest die Benutzereingabe aus und gibt sie im serialisierten Format zurück, welches genau so ins Model geschreiben wird.
        this.serializeValue = function () {...};

        //	Wird aufgerufen um den Editor zu zerstören.
        this.destroy = function () {...};

        // Setzt den Wert im Editor
        this.setValue = function (val) {...};

        //	Kann zur validieren verwendet werden.
        this.validate = function (items, callback) {..};

        // Wird aufgerufen wenn die Validierung fehlschlägt. Hier kann z.B. die Zelle markiert werden und eine Fehlermeldung angezeigt.
        this.showInvalid = function (results) {...};

        // Wird zum Initialisieren des Editors aufgerufen. Hier wird der Editor in die Zelle gerendert.
        this.initialize = function () {...};
    };

return gentableEditor;
```

documents.sdk.gentable.gentableRegistry.registerGridCellEditor("gentableCustomCellRendererAndEditor", "MY_CUSTOM_TYPE", function(documentsContext, gentableOptions) {

    var gentableEditor = function() {

        // Wird aufgerufen um den Editor nach dem Initialisieren zu fokussieren
        this.focus = function () {...};

        // Optional: Kann intern verwendet werden um den Anzeigewert zu holen, bspws. für Fehlerausgaben.
        this.getValue = function () {...};

        // Läd die Daten aus dem Model in den Editor in einem für ihn verwendbaren Format
        this.loadValue = function (item) {...};

        // Schreibt die Daten zurück ins Model
        this.applyValue = function (items, value, options, otrOpts) {...};

        /* Gibt zurück ob sich die Daten im Vergleich zum gespeicherten Model verändert haben.
           Beim Zerstören des Editors verwendet doby-grid diese Funtion um festzustellen, ob diese Zelle neu gerendert werden muss. */
        this.isValueChanged = function () {...};

        // Wird aufgerufen, wenn die Bearbeitung abgebrochen wird. Hier wird der Editor zerstört und die Zelle in den Ursprungszustand zurückversetzt.
        this.cancel = function () {...};

        // Liest die Benutzereingabe aus und gibt sie im serialisierten Format zurück, welches genau so ins Model geschreiben wird.
        this.serializeValue = function () {...};

        //	Wird aufgerufen um den Editor zu zerstören.
        this.destroy = function () {...};

        // Setzt den Wert im Editor
        this.setValue = function (val) {...};

        //	Kann zur validieren verwendet werden.
        this.validate = function (items, callback) {..};

        // Wird aufgerufen wenn die Validierung fehlschlägt. Hier kann z.B. die Zelle markiert werden und eine Fehlermeldung angezeigt.
        this.showInvalid = function (results) {...};

        // Wird zum Initialisieren des Editors aufgerufen. Hier wird der Editor in die Zelle gerendert.
        this.initialize = function () {...};
    };

return gentableEditor;
## Beispiel Grid Cell Editor

Download: [gridCellEditor.js](gridCellEditor.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerGridCellEditor("erpInvoice", "MY_CUSTOM_TYPE", function(documentsContext, gentableOptions) {

	var gentableEditor = function(gridOptions, otrOpts) {

		this.classinvalid = "otr-invalid-cell";

	    // When the cell with an initialized editor is focused
	    this.focus = function () {
	        this.$input.focus().select();
	    };

	    // Gets the current value of whatever the user has inputted
	    this.getValue = function () {
	        return this.$input.val();
	    };

	    // Loads the current value for the item
	    this.loadValue = function (item) {

	    	if (!item) {
	    		return null;
	    	}

			var value = item instanceof Backbone.Model ? item.get(gridOptions.column.field) : item.data ? item.data[gridOptions.column.field] : null;

			value = documents.sdk.utils.escapeHTML(value);

			this.currentValue = value || "";
			return this.currentValue;
	    };

	    // This is the function that will update the data model in the grid.
	    this.applyValue = function (items, value, options, otrOpts) {
	    	var item;

			for (var i = 0, l = items.length; i < l; i++) {
				item = items[i];

	            // Make sure we always have an id for our item
	            if (!('id' in item.item) && item.column.field == 'id') {
	                item.item.id = value;
	            }

	            var success = (otrOpts && otrOpts.applyCallback) ? otrOpts.applyCallback(value) : true;

	            if(success){
	            	if (item.item instanceof Backbone.Model) {

						item.item.set(item.column.field, value, options || {silent: true});
					} else {
						// This might be a nested row with no data
						if (item.item.data) {
							item.item.data[item.column.field] = value;
						}
					}
	            }

				if(item.column.otr_editmode && item.column.otr_editmode === "once"){
					item.column.editable = false;
				}
			}
	    };

	    // Determines whether or not the value has changed
	    this.isValueChanged = function () {
	        return (!(this.$input.val() === "" && this.currentValue === null)) && (this.$input.val() != this.currentValue);
	    };

	    // Cancel the edit and return the cell to its default state
	    this.cancel = function () {
	        this.destroy();
	        $(gridOptions.cell).html(this.currentValue);
	    };

	    // Process the input value before submitting it
	    this.serializeValue = function () {
	        return this.$input.val();
	    };

	    this.destroy = function () {
	    	gridOptions.grid.$el.find('.' + this.classinvalid).removeClass(this.classinvalid);
	        this.$input.remove();
	    };

	    // Sets the value inside your editor, in case some internal grid calls needs to do it dynamically.
	    this.setValue = function (val) {
	        this.$input.val(val);
	    };

	    this.validate = function (items, callback) {
	        var results = [];

	        // Sample code for validation failure
	        /*
	        for (var i = 0, l = items.length; i < l; i++) {
	            results.push({
	                row: items[i].row,
	                cell: items[i].cell,
	                $cell: items[i].$cell,
	                msg: "You cannot use " + this.getValue() + " as your value."
	            });
	        }
	        */

	        // No errors
	        if (results.length === 0) {
	        	results = true;
	        }

	        // Your must return `true` here once validation passes (or if you want validation
	        // to be disabled), otherwise applyValue will never be called.
	        callback(results);
	    };


	    // What to do when the validation for an edit fails. Here you can highlight the cell and show the user the error message.
	    this.showInvalid = function (results) {
	        var result;
	        for (var i = 0, l = results.length; i < l; i++) {
	            result = results[i];

	            // Add Invalid Icon
	            result.$cell.append([
	                ''
	            ].join(''));

	            // Highlight Cell
	            result.$cell
	                .removeClass(classinvalid)
	                .width(); // Force layout
	            result.$cell.addClass(classinvalid);
	        }
	    };

	 // initialize()
	    this.initialize = function () {

	    	var editor = this;

	        // Will hold the current value of the item being edited
	        this.loadValue(gridOptions.item);

	        var value = this.currentValue;
	        if (value === null || value === undefined) value = "";

	        $jq(gridOptions.cell).empty();

	        this.$input = $('<div>custom:<input type="text" class="doby-grid-editor" value="' + value + '"/></div>')
	            .appendTo(gridOptions.cell)
	            .find('input')
		        .on("keydown", function (event) {
		        	// Escape out of here on 'Tab', 'Enter', 'Home, 'End', 'Page Up' and 'Page Down'
		        	// so that the grid can capture that event
		        	if ([9, 13, 33, 34, 35, 36].indexOf(event.which) >= 0) {
		        		event.preventDefault();
		        		return;
		        	}

		        	if((event.which == 40 || event.which == 38) && editor.autoComplete && $jq(this).autocomplete('instance').menu.element.is(':visible')) {
		        		event.stopPropagation();
		        	}

		        	// Esc
		        	if (event.which == 27) return;

		        	// Check if position of cursor is on the ends, if it's not then
		        	// left or right arrow keys will prevent editor from saving
		        	// results and will instead, move the text cursor
		        	var pos = documents.editors.util.getCaretPosition(this);

		        	if ((pos === null && event.which != 38 && event.which != 40) ||
		        			(pos > 0 && event.which === 37) ||
		        			(pos < $(this).val().length && event.which === 39)
		        	) {
		        		event.stopImmediatePropagation();
		        	}
		        });
	    };
	};

	return gentableEditor;

});
```

documents.sdk.gentable.gentableRegistry.registerGridCellEditor("erpInvoice", "MY_CUSTOM_TYPE", function(documentsContext, gentableOptions) {

	var gentableEditor = function(gridOptions, otrOpts) {

		this.classinvalid = "otr-invalid-cell";

	    // When the cell with an initialized editor is focused
	    this.focus = function () {
	        this.$input.focus().select();
	    };

	    // Gets the current value of whatever the user has inputted
	    this.getValue = function () {
	        return this.$input.val();
	    };

	    // Loads the current value for the item
	    this.loadValue = function (item) {

	    	if (!item) {
	    		return null;
	    	}

			var value = item instanceof Backbone.Model ? item.get(gridOptions.column.field) : item.data ? item.data[gridOptions.column.field] : null;

			value = documents.sdk.utils.escapeHTML(value);

			this.currentValue = value || "";
			return this.currentValue;
	    };

	    // This is the function that will update the data model in the grid.
	    this.applyValue = function (items, value, options, otrOpts) {
	    	var item;

			for (var i = 0, l = items.length; i < l; i++) {
				item = items[i];

	            // Make sure we always have an id for our item
	            if (!('id' in item.item) && item.column.field == 'id') {
	                item.item.id = value;
	            }

	            var success = (otrOpts && otrOpts.applyCallback) ? otrOpts.applyCallback(value) : true;

	            if(success){
	            	if (item.item instanceof Backbone.Model) {

						item.item.set(item.column.field, value, options || {silent: true});
					} else {
						// This might be a nested row with no data
						if (item.item.data) {
							item.item.data[item.column.field] = value;
						}
					}
	            }

				if(item.column.otr_editmode && item.column.otr_editmode === "once"){
					item.column.editable = false;
				}
			}
	    };

	    // Determines whether or not the value has changed
	    this.isValueChanged = function () {
	        return (!(this.$input.val() === "" && this.currentValue === null)) && (this.$input.val() != this.currentValue);
	    };

	    // Cancel the edit and return the cell to its default state
	    this.cancel = function () {
	        this.destroy();
	        $(gridOptions.cell).html(this.currentValue);
	    };

	    // Process the input value before submitting it
	    this.serializeValue = function () {
	        return this.$input.val();
	    };

	    this.destroy = function () {
	    	gridOptions.grid.$el.find('.' + this.classinvalid).removeClass(this.classinvalid);
	        this.$input.remove();
	    };

	    // Sets the value inside your editor, in case some internal grid calls needs to do it dynamically.
	    this.setValue = function (val) {
	        this.$input.val(val);
	    };

	    this.validate = function (items, callback) {
	        var results = [];

	        // Sample code for validation failure
	        /*
	        for (var i = 0, l = items.length; i < l; i++) {
	            results.push({
	                row: items[i].row,
	                cell: items[i].cell,
	                $cell: items[i].$cell,
	                msg: "You cannot use " + this.getValue() + " as your value."
	            });
	        }
	        */

	        // No errors
	        if (results.length === 0) {
	        	results = true;
	        }

	        // Your must return `true` here once validation passes (or if you want validation
	        // to be disabled), otherwise applyValue will never be called.
	        callback(results);
	    };


	    // What to do when the validation for an edit fails. Here you can highlight the cell and show the user the error message.
	    this.showInvalid = function (results) {
	        var result;
	        for (var i = 0, l = results.length; i < l; i++) {
	            result = results[i];

	            // Add Invalid Icon
	            result.$cell.append([
	                ''
	            ].join(''));

	            // Highlight Cell
	            result.$cell
	                .removeClass(classinvalid)
	                .width(); // Force layout
	            result.$cell.addClass(classinvalid);
	        }
	    };

	 // initialize()
	    this.initialize = function () {

	    	var editor = this;

	        // Will hold the current value of the item being edited
	        this.loadValue(gridOptions.item);

	        var value = this.currentValue;
	        if (value === null || value === undefined) value = "";

	        $jq(gridOptions.cell).empty();

	        this.$input = $('<div>custom:<input type="text" class="doby-grid-editor" value="' + value + '"/></div>')
	            .appendTo(gridOptions.cell)
	            .find('input')
		        .on("keydown", function (event) {
		        	// Escape out of here on 'Tab', 'Enter', 'Home, 'End', 'Page Up' and 'Page Down'
		        	// so that the grid can capture that event
		        	if ([9, 13, 33, 34, 35, 36].indexOf(event.which) >= 0) {
		        		event.preventDefault();
		        		return;
		        	}

		        	if((event.which == 40 || event.which == 38) && editor.autoComplete && $jq(this).autocomplete('instance').menu.element.is(':visible')) {
		        		event.stopPropagation();
		        	}

		        	// Esc
		        	if (event.which == 27) return;

		        	// Check if position of cursor is on the ends, if it's not then
		        	// left or right arrow keys will prevent editor from saving
		        	// results and will instead, move the text cursor
		        	var pos = documents.editors.util.getCaretPosition(this);

		        	if ((pos === null && event.which != 38 && event.which != 40) ||
		        			(pos > 0 && event.which === 37) ||
		        			(pos < $(this).val().length && event.which === 39)
		        	) {
		        		event.stopImmediatePropagation();
		        	}
		        });
	    };
	};

	return gentableEditor;

});