---
title: "Beispielskript für eine einfache TreeChart"
source: "https://otris.software/documents/howto/treechart/example_script.html"
---

# Beispielskript für eine einfache TreeChart

Download: [TreeChart_Example.js](TreeChart_Example.js)


```javascript
var treeChart = {
        config: {
            header: '<div id="legend" style="padding-top: 32px;padding-left: 8px;font-size: 12px;">\
                        <div id=\"legendBlue\" style=\"padding: 10px;\">\
                            <div style=\"width:50px;height: 20px; display: inline-block;margin-right: 5px;background: linear-gradient(180deg, #fdfdfd, #8eb4e3);border: solid #999999 1px;border-radius: 5px;\"/>\
                            <span style=\"vertical-align: top;line-height: 22px;\">Aktion</span>\
                        </div>\
                        <div id=\"legendGrey\" style=\"padding: 10px;\">\
                            <div style=\"width:50px;height: 20px;display: inline-block;margin-right: 5px;background: grey;background: linear-gradient(180deg, #fdfdfd, #999999);border: solid #999999 1px;border-radius: 5px;\"/>\
                            <span style=\"vertical-align: top;line-height: 22px;\">keine Aktion</span>\
                        </div>\
                     </div>',
            collapsible: false,
            direction: "TB",
            levelSeparation: 50,
            nodeSeparation: 30,
            highlight: true,
            drag: false,
            points: true,
            skin: {
              color: "#999999",
              borderColor: "#888",
              font: "Arial",
              fontColor: "#444",
              fontSize: 13,
              borderRoundness: 10,
              vMargin: 15,
              hMargin: 15,
              leafRendering: "box",
              highlightColorIn: "#538",
              highlightColorOut: "#583"
            }
        },
        treeData: {
            id: "1",
            color: "#8eb4e3",
            borderColor: "#999999",
            font: "Arial",
            fontColor: "#333333",
            fontSize: 11,
            borderRoundness: 5,
            vMargin: 16,
            hMargin: 16,
            childRelations: {
              "2": "53,68",
              "3": "50,00"
            },
            children: [
            {
                id: "2",
                label1: "Freinetz AG",
                label2: "Hamburg",
                label3: "Deutschland",
                color: "#999999",
                borderColor: "#999999",
                font: "Arial",
                fontColor: "#333333",
                fontSize: 11,
                borderRoundness: 5,
                vMargin: 16,
                hMargin: 16
            },
            {
                id: "3",
                label1: "Ferra-domains AG",
                label2: "Dortmund",
                label3: "Deutschland",
                color: "#8eb4e3",
                borderColor: "#999999",
                font: "Arial",
                fontColor: "#333333",
                fontSize: 11,
                borderRoundness: 5,
                vMargin: 16,
                hMargin: 16,
                clientScript: 'alert("You just clicked on me!")'
            }
            ],
            label1: "Hansen, Susanne",
            label2: "Düsseldorf",
            label3: "Deutschland",
            actionEvents: {
                click: "showFile:dopaag_fi20140000005777",
                dblClick: "showFolder:96:834346;showFile:dopaag_fi20140000005777",
                rightClick: "runScript:scriptList_example"
            }
        }
};

context.returnType = "treeChart";

return JSON.stringify(treeChart);
```

var treeChart = {
        config: {
            header: '<div id="legend" style="padding-top: 32px;padding-left: 8px;font-size: 12px;">\
                        <div id=\"legendBlue\" style=\"padding: 10px;\">\
                            <div style=\"width:50px;height: 20px; display: inline-block;margin-right: 5px;background: linear-gradient(180deg, #fdfdfd, #8eb4e3);border: solid #999999 1px;border-radius: 5px;\"/>\
                            <span style=\"vertical-align: top;line-height: 22px;\">Aktion</span>\
                        </div>\
                        <div id=\"legendGrey\" style=\"padding: 10px;\">\
                            <div style=\"width:50px;height: 20px;display: inline-block;margin-right: 5px;background: grey;background: linear-gradient(180deg, #fdfdfd, #999999);border: solid #999999 1px;border-radius: 5px;\"/>\
                            <span style=\"vertical-align: top;line-height: 22px;\">keine Aktion</span>\
                        </div>\
                     </div>',
            collapsible: false,
            direction: "TB",
            levelSeparation: 50,
            nodeSeparation: 30,
            highlight: true,
            drag: false,
            points: true,
            skin: {
              color: "#999999",
              borderColor: "#888",
              font: "Arial",
              fontColor: "#444",
              fontSize: 13,
              borderRoundness: 10,
              vMargin: 15,
              hMargin: 15,
              leafRendering: "box",
              highlightColorIn: "#538",
              highlightColorOut: "#583"
            }
        },
        treeData: {
            id: "1",
            color: "#8eb4e3",
            borderColor: "#999999",
            font: "Arial",
            fontColor: "#333333",
            fontSize: 11,
            borderRoundness: 5,
            vMargin: 16,
            hMargin: 16,
            childRelations: {
              "2": "53,68",
              "3": "50,00"
            },
            children: [
            {
                id: "2",
                label1: "Freinetz AG",
                label2: "Hamburg",
                label3: "Deutschland",
                color: "#999999",
                borderColor: "#999999",
                font: "Arial",
                fontColor: "#333333",
                fontSize: 11,
                borderRoundness: 5,
                vMargin: 16,
                hMargin: 16
            },
            {
                id: "3",
                label1: "Ferra-domains AG",
                label2: "Dortmund",
                label3: "Deutschland",
                color: "#8eb4e3",
                borderColor: "#999999",
                font: "Arial",
                fontColor: "#333333",
                fontSize: 11,
                borderRoundness: 5,
                vMargin: 16,
                hMargin: 16,
                clientScript: 'alert("You just clicked on me!")'
            }
            ],
            label1: "Hansen, Susanne",
            label2: "Düsseldorf",
            label3: "Deutschland",
            actionEvents: {
                click: "showFile:dopaag_fi20140000005777",
                dblClick: "showFolder:96:834346;showFile:dopaag_fi20140000005777",
                rightClick: "runScript:scriptList_example"
            }
        }
};

context.returnType = "treeChart";

return JSON.stringify(treeChart);