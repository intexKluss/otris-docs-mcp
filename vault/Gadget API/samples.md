---
title: "Samples"
source: "https://otris.software/documents/api/gadgets/samples.html"
---

# Samples

In the following you will find some examples to get you started with programming your own **Gadget**.

Most of the gadgets can also be launched from the browser console.

So you can test the gadgets without storing the configurations in the principal.

Sample command: `documentsContext.callGadget({gadgetScript: 'GadgetSample_HelloWorld', gadgetAction: 'helloWorld'})`


## Hello world

The classic **hello world** example. Simple & minimal.

**gadgetConfig:**`{gadgetScript: 'GadgetSample_HelloWorld', gadgetAction: 'helloWorld'}`


```
// #import "Gadget_API_Controller"

// {gadgetScript: 'GadgetSample_HelloWorld', gadgetAction: 'helloWorld'}

function helloWorld() {
  this.execute = function() {

    // create a new gadget instance
    var htmlGadget = new otris.gadget.gui.HTML();

    // add some html content
    htmlGadget.appendHtml('<h1>Hello, world!</h1>');

    // return the result of the transfer function
    return htmlGadget.transfer();
  };
}
```

**Download:**[GadgetSample_HelloWorld.js (Right click and Save target as...)](samples/GadgetSample_HelloWorld.js)


## Form Gadget

This example shows how to use a Form Gadget. A simple form is created and the submitted data is processed and displayed.

To display this gadget in a dialog the gadget configuration (*gadgetConfig*) contains the attribute `gadgetDestination: 'dialog'`.

**gadgetConfig:**`{ gadgetScript: 'GadgetSample_Form', gadgetAction: 'showForm', gadgetDestination: 'dialog' }`


```
// #import "Gadget_API_Controller"

function showForm() {
  var gadget;

  this.execute = function() {
    var selectOptions,
      sendEventName = "gadgetEventSend";

    // check if gadgetEvent is set
    if(gadgetContext.gadgetEvent === sendEventName) {
      // process and show submitted data
      return processFormData();
    }

    // create the gadget form instance
    gadget = new otris.gadget.gui.Form();

    // set a title for the dialog
    gadget.setTitle("Welcome/Willkommen");

    // Add a select field
    selectOptions = [
      ['female', 'weiblich'],
      ['male', 'männlich']
    ];
    gadget.addSingleSelectList('gender', 'Geschlecht', selectOptions);

    // Add two text fields
    gadget.addTextField('firstname', 'Vorname');
    gadget.addTextField('lastname', 'Nachname');

    // The name of the action button is used as gadgetEvent
    gadget.addGadgetActionButton(sendEventName, 'Absenden');
    return gadget.transfer();
  };

  var processFormData = function() {
    // create gadget instance
    gadget = new otris.gadget.gui.HTML();
    gadget.appendHtml('<h1 style="margin:10px;">Hallo ');

    // $FORM is a shortcut reference to gadgetContext.formParams
    gadget.appendHtml($FORM.gender == "female" ? "Frau " : "Herr ");
    // appendHtml also accepts string arrays
    gadget.appendHtml([$FORM.firstname, " ", $FORM.lastname]);
    gadget.appendHtml("</h1>");

    return gadget.transfer();
  };
}
```

**Download:**[GadgetSample_Form.js (Right click and Save target as...)](samples/GadgetSample_Form.js)


## Chart Gadget

This example shows how to use a Chart Gadget. The library **chart.js** is used to display the charts.

Details on the configuration can be found in the documentation at [https://chartjs.org](https://chartjs.org).

**gadgetConfig:**`{ gadgetScript: 'GadgetSample_Chart', gadgetAction: 'showChart' }`


```
//#import "Gadget_API_Controller"

function showChart() {

  this.execute = function() {
    var chart, data, config;

    // chart.js data (details: https://chartjs.org)
    data = {
      labels: ["Kategorie A", "Kategorie B", "Kategorie C"],
      datasets: [{
        data: [32, 15, 23],
        backgroundColor: ["#2ecc71", "#3498db", "#e74c3c"],
        hoverBackgroundColor: ["#27ae60", "#2980b9", "#c0392b"]
      }]
    };

    // chart.js configuration (details: https://chartjs.org)
    config = {
      title: { text: 'Kategorien', display: true }
    };

    // gadget instance with chart.js charttype, data and config
    chart = new otris.gadget.gui.Chart("pie", data, config);
    // dialog title
    chart.setTitle("Sample chart");
    // add some padding
    chart.setStyle("padding", "10px 10px 20px 10px");
    // prevents scrollbars (https://developer.mozilla.org/de/docs/Web/CSS/box-sizing)
    chart.setStyle("box-sizing", "border-box");
    return chart.transfer();
  };
}
```

**Download:**[GadgetSample_Chart.js (Right click and Save target as...)](samples/GadgetSample_Chart.js)


## ScriptTree Gadget with lazy loading

This example shows how to use a ScripTree Gadget with lazy loading.

This functionality is available since `DOCUMENTS 5.0i`.

**gadgetConfig:**`{ gadgetScript: 'GadgetSample_ScriptTreeLazyLoad', gadgetAction: 'showTree' }`


```
context.enableModules();
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// { gadgetScript: "GadgetSample_ScriptTreeLazyLoad", gadgetAction: "showTree" }
gadgetAPI.registerGadgetAction("showTree", function() {
    const otrTree = require("otris.tree");
    const returnSubtree = function(nodeId) {
        // Create the root node of the subtree
        const subtreeRootItem = new otrTree.TreeItem(nodeId, nodeId);
        var idx, childNode;
        for(idx = 1; idx <= 5; idx++) {
            childNode = new otrTree.TreeItem(nodeId + "_" + idx, "child node " + nodeId + "_" + idx);
            childNode.hasChilds = true;
            // Add the child nodes
            subtreeRootItem.addItem(childNode);
        }
        return subtreeRootItem;
    };

    const treeEvent = otrTree.getScriptTreeEvent();
    // Check if the script was called via a "subtree" event
    if(treeEvent && treeEvent.name === "subtree") {
        return returnSubtree(treeEvent.nodeId);
    }

    const rootItem = new otrTree.TreeItem("treeLazyLoad", "Lazy Load Tree");
    rootItem.lazyLoad = true;

    var newNode = new otrTree.TreeItem("id1", "New node title 1");
    newNode.hasChilds = true;
    rootItem.addItem(newNode);

    newNode = new otrTree.TreeItem("id2", "New node title 2");
    newNode.hasChilds = true;
    rootItem.addItem(newNode);

    const gadgetScriptTree = gadgetAPI.getScriptTreeInstance();
    gadgetScriptTree.setTitle("TEST");
    gadgetScriptTree.setRootItem(rootItem);

    gadgetScriptTree.addContainerButton({ id: "btn", label: "Show selected IDs", clickFunction: "showIds" });
    gadgetScriptTree.setStyle("background", "white");
    gadgetScriptTree.addClientFunction(function showIds() {
        var gTree = documentsContext.getGadgetContext().getClientObject();
        console.log("gTree", gTree, gTree.getSelectedIds());
        documentsContext.openMessageDialog("selected IDs", gTree.getSelectedIds());
    });

    return gadgetScriptTree;
});

context.returnValue = gadgetAPI.transfer();
```

**Download:**[GadgetSample_ScriptTreeLazyLoad.js (Right click and Save target as...)](samples/GadgetSample_ScriptTreeLazyLoad.js)


## Layout Gadget

This example shows how to use a Layout Gadget.
This functionality is available since `DOCUMENTS 5.0i`.

**gadgetConfig:**`{ gadgetScript: 'GadgetSample_LayoutGadget', gadgetAction: 'show' }`


```
context.enableModules();
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// { gadgetScript: "GadgetSample_LayoutGadget", gadgetAction:"show" }
gadgetAPI.registerGadgetAction("show", function(/*gadgetContext, otris*/) {
    const signalColor = require("chromaColorTool")("signalcolor");
    const generateGadgetConfig = (action, lightness) => ({
        gadgetScript: context.scriptName,
        gadgetId: "id" + util.getUniqueId(),
        gadgetAction: action,
        bgColor: signalColor.set('hsl.l', lightness).hex()
    });

    const layoutGadget = gadgetAPI.getLayoutInstance();
    layoutGadget.setTitle("Layout Gadget Example");

    // generate 4 gadgetConfigs
    const gadgetConfigs = {
        topLeft: generateGadgetConfig("topLeft", .5),
        topRight: generateGadgetConfig("topRight", .4),
        bottomLeft: generateGadgetConfig("bottomLeft", .3),
        bottomRight: generateGadgetConfig("bottomRight", .2)
    };

    // add layout html code & position the gadgetConfigs
    layoutGadget.append(
        '<div class="myLayout--main">',
        '  <div class="myLayout--top">', gadgetConfigs.topLeft, gadgetConfigs.topRight, '</div>',
        '  <div class="myLayout--bottom">', gadgetConfigs.bottomLeft, gadgetConfigs.bottomRight, '</div>',
        '</div>'
    );

    // add layout css (consider using ClientHeaderCode to embed "static" css code)
    layoutGadget.addGadgetStyles(".myLayout--main * { box-sizing: border-box; }");
    layoutGadget.addGadgetStyles(".myLayout--main { height:100%; display:flex; flex-direction:column; border:10px solid #666; box-sizing: border-box; }");
    layoutGadget.addGadgetStyles(".myLayout--main > * { flex:1 }");
    layoutGadget.addGadgetStyles(".myLayout--top, .myLayout--bottom  { display:flex; }");
    layoutGadget.addGadgetStyles(".myLayout--top > *, .myLayout--bottom > * { flex:1; text-align:center; color:#fff; font-size:20px; line-height:5;}");

    return layoutGadget;
});

// minimal gadget implementation (printing the name of the gadgetAction & setting a bg color)
const action = function(gadgetContext) {
  const gdgt = gadgetAPI.getHTMLInstance();
    gdgt.setStyle("background-color", gadgetContext.gadgetParams.bgColor);
    gdgt.appendHtml(gadgetContext.gadgetAction);
  return gdgt;
};

gadgetAPI.registerGadgetAction("topLeft", action);
gadgetAPI.registerGadgetAction("topRight", action);
gadgetAPI.registerGadgetAction("bottomLeft", action);
gadgetAPI.registerGadgetAction("bottomRight", action);

return gadgetAPI.transfer();
```

**Download:**[GadgetSample_LayoutGadget.js (Right click and Save target as...)](samples/GadgetSample_LayoutGadget.js)