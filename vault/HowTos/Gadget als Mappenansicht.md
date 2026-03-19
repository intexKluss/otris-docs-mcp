---
title: "Gadget anstelle der Mappen-Sicht darstellen"
source: "https://otris.software/documents/howto/gadgets/gadget-as-fileView.html"
---

# Gadget anstelle der Mappen-Sicht darstellen

Das Attribut `gadgetDestination` der Gadget-Config ermöglicht es den Ort, an dem ein Gadget angezeigt ist zu definieren. Es stehen die drei Orte `dialog`, `folder` und `file` zur Verfügung.


```javascript
gadgetConfig = {gadgetScript: 'Gadget_CalendarBirthday', gadgetAction: 'showCalendar', gadgetDestination: 'file'}
```

gadgetConfig = {gadgetScript: 'Gadget_CalendarBirthday', gadgetAction: 'showCalendar', gadgetDestination: 'file'}Im Folgenden Beispiel wird eine Script-List erstellt, die bei Auswahl eines Eintrages, den Eintrag im Detail in der Mappen-Ansicht anzeigt.

Hierzu wird als Datengrundlage ein Skript verwendet. Dieses finden Sie zusammen mit den Skripten für die Script-List und das Gadget im Anhang.


## Erstellen der Script-List

Die Script-List beinhaltet zeigt die drei Zeilen `Status`, `Product` und `ProductId` an und führt nach klicken auf einer Zeile die Funktion `documentsContext.callGadget` aus.
In der GadgetConfig wird das Attribut-Wert-Paar `"gadgetDestination":"file"` verwendet, um das Gadget in der Mappensicht anzuzeigen.


```javascript
const scriptListAPI = require("otris.scriptlist");

var call = new ScriptCall("schreiber", "screwList", true);

if(call.launch()) {
	if(call.waitForFinish()) {
        var productsString = call.getReturnValue();
        var products = JSON.parse(productsString);
		var stati = ["_image:custom/bullet_ball_glass_red.gif", "_image:custom/bullet_ball_glass_yellow.gif", "_image:custom/bullet_ball_glass_green.gif"];

		var list = new otris.scriptlist.List("Product-List");

		list.setStartIndex(0);
		list.setShowSearchBox({ remoteSearch: false });

		list.addColumn("Status", "Status", "CUSTOM");
		list.addColumn("Product", "Product", "STRING");
		list.addColumn("ProductId", "ProductId", "NUMBER");

        products.forEach(function(product) {
            var status = stati[2];
            if (product.stock<product.reserve) {
                status = stati[0];
            }
            else if (product.stock<product.reorderPoint) {
                status = stati[1];
            }
            var row = list.addRow([status, product.name, product.id]);
            row.setOnClick("documentsContext.callGadget({'gadgetScript':'Gadget_screwDetails','gadgetAction':'showProduct','gadgetDestination':'file','gadgetId':'myGadgetId', productId:"+product.id+"});");
        });
        list.endList();

		// Return the data as JSON string
		context.returnType = "scriptList";
		context.returnValue = list.transfer();
	}
	else {
        util.out(call.getLastError());
        context.error = call.getLastError();
        context.returnValue = -1;
    }
}
```

const scriptListAPI = require("otris.scriptlist");

var call = new ScriptCall("schreiber", "screwList", true);

if(call.launch()) {
	if(call.waitForFinish()) {
        var productsString = call.getReturnValue();
        var products = JSON.parse(productsString);
		var stati = ["_image:custom/bullet_ball_glass_red.gif", "_image:custom/bullet_ball_glass_yellow.gif", "_image:custom/bullet_ball_glass_green.gif"];

		var list = new otris.scriptlist.List("Product-List");

		list.setStartIndex(0);
		list.setShowSearchBox({ remoteSearch: false });

		list.addColumn("Status", "Status", "CUSTOM");
		list.addColumn("Product", "Product", "STRING");
		list.addColumn("ProductId", "ProductId", "NUMBER");

        products.forEach(function(product) {
            var status = stati[2];
            if (product.stock<product.reserve) {
                status = stati[0];
            }
            else if (product.stock<product.reorderPoint) {
                status = stati[1];
            }
            var row = list.addRow([status, product.name, product.id]);
            row.setOnClick("documentsContext.callGadget({'gadgetScript':'Gadget_screwDetails','gadgetAction':'showProduct','gadgetDestination':'file','gadgetId':'myGadgetId', productId:"+product.id+"});");
        });
        list.endList();

		// Return the data as JSON string
		context.returnType = "scriptList";
		context.returnValue = list.transfer();
	}
	else {
        util.out(call.getLastError());
        context.error = call.getLastError();
        context.returnValue = -1;
    }
}
## Anzeige des Gadgets

Das verwendete Gadget ist ein einfaches HTML-Gadget, welches über ein handlebars-Template Detailinformationen zu dem Produkt anzeigt.


```javascript
//#import "Gadget_API_Controller"
//#import "ScriptCall"

function showProduct() {
	this.execute = function() {

		var call = new ScriptCall("schreiber", "screwList", true);
		if(call.launch()) {
			if(call.waitForFinish()) {
				var productsString = call.getReturnValue();
				var products = JSON.parse(productsString);
				var productId = gadgetContext.gadgetParams.productId;
				var product = {};
				products.some(function(prod) {
					if(productId == prod.id) {
                        product = prod;
                        return true;
					}
				});

				product.status = "/documents//img/documents/skin/base/shared/custom/bullet_ball_glass_green.gif";
				if(product.stock < product.reserve) {
					product.status = "/documents//img/documents/skin/base/shared/custom/bullet_ball_glass_red.gif";
				}
				else if(product.stock < product.reorderPoint) {
					product.status = "/documents//img/documents/skin/base/shared/custom/bullet_ball_glass_yellow.gif";
				}

				var strHtml = "<div style=\"margin: 20pt 32pt;\"> <h1>{name}</h1><br> <h2>Info</h2> <p>Product-ID: {id}</p> <p>In Stock: {stock}</p> <p>Reorder Point: {reorderPoint}</p> <p>Reserve: {reserve}</p> <p><span>Status: </span><img style=\"vertical-align: middle;\" src=\"{status}\"/></p> <div> <h2>Details</h2> <div style=\"display: flex;\"> <p>Head: {head}</p><br><img src=\"{headImage}\" style=\"height: 20pt;margin-left: 10pt;\"> </div> <p>length: {length}</p> <p>fitting: {fitting}</p> </div> </div>",
					htmlGadget = new otris.gadget.gui.HTML(strHtml);
				htmlGadget.compileTemplate(product);

				htmlGadget.addClientFunction("console.log(" + JSON.stringify(product) + ")");

				if(product.stock < product.reorderPoint) {
					htmlGadget.addContainerButton({ id: "reorderButton", label: "reorder", clickFunction: "gadgetAlert", styleType: "commit" });
				}
				htmlGadget.addClientFunction(function gadgetAlert(event) {
					console.log("Gadget alert");
				});
				return htmlGadget.transfer();
			}
		}
	}
};
```

//#import "Gadget_API_Controller"
//#import "ScriptCall"

function showProduct() {
	this.execute = function() {

		var call = new ScriptCall("schreiber", "screwList", true);
		if(call.launch()) {
			if(call.waitForFinish()) {
				var productsString = call.getReturnValue();
				var products = JSON.parse(productsString);
				var productId = gadgetContext.gadgetParams.productId;
				var product = {};
				products.some(function(prod) {
					if(productId == prod.id) {
                        product = prod;
                        return true;
					}
				});

				product.status = "/documents//img/documents/skin/base/shared/custom/bullet_ball_glass_green.gif";
				if(product.stock < product.reserve) {
					product.status = "/documents//img/documents/skin/base/shared/custom/bullet_ball_glass_red.gif";
				}
				else if(product.stock < product.reorderPoint) {
					product.status = "/documents//img/documents/skin/base/shared/custom/bullet_ball_glass_yellow.gif";
				}

				var strHtml = "<div style=\"margin: 20pt 32pt;\"> <h1>{name}</h1><br> <h2>Info</h2> <p>Product-ID: {id}</p> <p>In Stock: {stock}</p> <p>Reorder Point: {reorderPoint}</p> <p>Reserve: {reserve}</p> <p><span>Status: </span><img style=\"vertical-align: middle;\" src=\"{status}\"/></p> <div> <h2>Details</h2> <div style=\"display: flex;\"> <p>Head: {head}</p><br><img src=\"{headImage}\" style=\"height: 20pt;margin-left: 10pt;\"> </div> <p>length: {length}</p> <p>fitting: {fitting}</p> </div> </div>",
					htmlGadget = new otris.gadget.gui.HTML(strHtml);
				htmlGadget.compileTemplate(product);

				htmlGadget.addClientFunction("console.log(" + JSON.stringify(product) + ")");

				if(product.stock < product.reorderPoint) {
					htmlGadget.addContainerButton({ id: "reorderButton", label: "reorder", clickFunction: "gadgetAlert", styleType: "commit" });
				}
				htmlGadget.addClientFunction(function gadgetAlert(event) {
					console.log("Gadget alert");
				});
				return htmlGadget.transfer();
			}
		}
	}
};
## Skripte zum Download

**Daten** : [screwListData](gadget-as-fileView-data.js)

**ScriptList** : [screwScriptList](gadget-as-fileView-scriptList.js)

**Gadget**: [Gadget_screwDetails](gadget-as-fileView-details.js)