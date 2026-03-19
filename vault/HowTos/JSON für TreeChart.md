---
title: "JSON zur Anzeige einer TreeChart"
source: "https://otris.software/documents/howto/treechart/json-config.html"
---

# JSON zur Anzeige einer TreeChart

Zur Anzeige einer TreeChart müssen Portalskripte eine bestimmte JSON-Struktur zurückgegeben.
Hierbei kann man entweder nur den Baum oder zusätlich eine allgemeine Layoutkonfiguration
definieren. Auf den einzelnen Knoten der TreeChart können Aktionen für Rechts-, Links- und
Doppelklick hinterlegt werden.


## Layoutkonfiguration

Für die Darstellung der TreeChart können allgemeine Layour-Parameter festgelegt werden:


```javascript
config: {
    acyclicer: undefined, // https://github.com/dagrejs/dagre/wiki
    alignGraph: "TB"|"UL"|"UR"|"DL"|"DR",  // https://github.com/dagrejs/dagre/wiki
    alignGroupedChildren: "left|center|right", // Stellt Gruppenknotenkinder linkbündig, zenrtiert oder rechtsbündig dar, default ist linksbündig (ab 5.0f)
    autoGroupLeafs: false, // Blätter automatisch gruppieren (ab 6.0.1)
    calcEdgeLabelSize: false,    //  Berücksichtige die Größe der gezeichneten Labels beim Zeichnen des Graphen
    collapsible: false,    // Knoten Können auf und zugeklappt werden
    dashBackDirectedEdges: true | "-|.|-.|-..|. |- |--|- .|--.|--..", // Zeichnet rückwärtsgerichtete Kanten gestrichelt. (ab 6.0.1)
    direction: "LR" | "RL"  | "TB" | "BT", //  Der Baum/Graph wird von links nach rechts, rechts nach links (ab 5.0f), oben nach unten oder unten nach oben (ab 5.0f) gezeichnet
    displayBoxShadow: true,  //  Schatten anzeigen/ausblenden
    drag: false,    //  Knoten und Kanten können über dem Bildschirm bewegt werden
    graphMarginX: 0,    //  Abstand außen
    graphMarginY: 0,    //  Abstand außen
    groupConnectorIndentMargin: 10, // Ausgangspunkt der Kante die zu den Kinderknoten führt
    groupIndentMargin: 20,  // Länge der einführenden Kante der gruppierten Kindknoten
    groupNodeOverflow: 5,   // Breitenabstand den der Elternknoten über seine gruppierten Kindknoten hinausgeht
    groupedChildNodeSeparation: 10, // Abstand zwischen gruppierten Kindknoten
    firstGroupedChildNodeSeparation: 40, // Vertikaler Abstand vom Elternknoten zum Ersten gruppierten Kind (ab 5.0f)
    oneGroupHeightByLevel: true, // Sorgt dafür, dass alle Gruppen Knoten auf einer Ebene die selbe Höhe haben (ab 5.0f)
    oneNodeWidthByLevel: false,  // Sorgt dafür, dass Gruppierte Knoten alle die gleiche Breite haben
    oneNodeWidthByGroup: false,  // Sorft dafür, dass alle Kindknoten einer Gruppe dieselbe Breite haben (ab 5.0f)
    header: '',    // Header der oben angefügt wird, kann ein String sein oder HTML
    hideUnrelatedNodesOnHoverEdge: false,  //  Blendet nicht verwandte Knoten aus wenn man mit der Maus über eine Kante fährt
    hideUnrelatedNodesOnHoverNode: false,  //  Blendet nicht verwandte Knoten aus wenn man mit der Maus über einen Knoten fährt
    highlight: true,    //  Knoten und Kanten werden hervorgehoben, wenn der Mauszeiger über sie gehalten wird
    levelSeparation: 50,    //  Der minimale Abstand in Pixeln zwischen Ebenen
    nodeSeparation: 30,     //  Minimaler Abstand zwischen Knoten
    points: true,   //  Muss gesetzt werden, um komplexe Pfade zwischen Knoten zu erlauben / darzustellen, Standardmäßig werden nur rechtwinklige Verbindungen unterstüzt was bei komplexen Pfaden zu häßlichen Kreuzungen von Kanten führt
    rankAlgorithm: "network-simplex"|"tight-tree"|"longest-path",  // wählt den Algorithmus zum bestimmen des Rangs von Knoten
    renderRootNode: true, // Wurzelknoten anzeigen/ausblenden
    useGradientBoxColor: true,  //  Farbverlauf zum Füllen der Knoten
    useDagrePath: false,  // Zeichnet die Pfade genau so wie dagre.js sie berechnet
    useDagreLabelPosition: false,  // Zeichnet die Kantenlabels an den von dagre.js berechneten Positionen
    preCacheLabels: false, // Berechnet die Größe anhand gerenderter Raphael-Texte und verwendet diese hinterher wieder.
    showLegend: "default" | "expert", // Zeigt eine Legende zum Setzen von TreeChart-Einstellungen an. Im Expertenmodues "expert" werden mehr Einstellungen angezeigt. (ab 6.0.1)
    wrapGroupSize: undefined, // Anzahl ab der gruppierte Knoten im Layout umgebrochen werden. (ab 6.0.1)
    skin: {        // allgemeines Layout für knoten
        color: '#999999',  //  Färbung des angezeigten Knotens
        borderColor: '#888',  //  Farbe des Knotenrandes
        edgeColor: '#b5b5b5', // Standardfarbe für Kanten
        useGradientBoxColor: true,  //  Farbverlauf zum Füllen der Knoten
        font: 'Arial',  //  Schriftart der Knotenbeschriftung
        fontColor: '#444', //  Schriftfarbe der Knotenbeschriftung
        fontSize: 13,    //  Schriftgröße der Knotenbeschriftung
        fontStyle: "italic|oblique|...", // CSS Fontstyle (ab 5.0f)
        fontWeight: "bold|100|...", // // CSS Fontweight (ab 5.0f)
        fontBorderColor: "Farbe", // Rendert eine Umrandung
        fontBorderWidth: 5, // Breite der Umrandung
        borderRoundness: 10,  //  Rundung der Ecken des Knotens
        vMargin: 15,    //  Vertikaler Abstand der Knotenbeschriftung zum Knotenrand
        hMargin: 15,    //  Horizontaler Abstand der Knotenbeschriftung zum Knotenrand
        leafRendering: 'box',  //  Rendering der Blätter
        highlightColorIn: '#538',  //  eingehende Highlightfarbe der Knotenkante
        highlightColorOut: '#583'  //  ausgehende Highlightfarbe der Knotenkante
    },
    zoomConfiguration: {
        controlIconsEnabled: false, // Zoombuttons anzeigen
        dblClickZoomEnabled: false, // Reinzoomen bei Doppelklick
        panEnabled: true,  // Graph mit der Maus bewegen
        zoomEnabled: true, // Zoomen erlauben/verbieten (wirkt sich nicht auf die Buttons aus)
        mouseWheelZoomEnabled: true,  // Zoomen per Mausrad erlauben
        zoomScaleSensitivity: 0.6,  // Zoomintensität pro Schritt
        center: 1  // Graph zentrieren
    }
}
```

config: {
    acyclicer: undefined, // https://github.com/dagrejs/dagre/wiki
    alignGraph: "TB"|"UL"|"UR"|"DL"|"DR",  // https://github.com/dagrejs/dagre/wiki
    alignGroupedChildren: "left|center|right", // Stellt Gruppenknotenkinder linkbündig, zenrtiert oder rechtsbündig dar, default ist linksbündig (ab 5.0f)
    autoGroupLeafs: false, // Blätter automatisch gruppieren (ab 6.0.1)
    calcEdgeLabelSize: false,    //  Berücksichtige die Größe der gezeichneten Labels beim Zeichnen des Graphen
    collapsible: false,    // Knoten Können auf und zugeklappt werden
    dashBackDirectedEdges: true | "-|.|-.|-..|. |- |--|- .|--.|--..", // Zeichnet rückwärtsgerichtete Kanten gestrichelt. (ab 6.0.1)
    direction: "LR" | "RL"  | "TB" | "BT", //  Der Baum/Graph wird von links nach rechts, rechts nach links (ab 5.0f), oben nach unten oder unten nach oben (ab 5.0f) gezeichnet
    displayBoxShadow: true,  //  Schatten anzeigen/ausblenden
    drag: false,    //  Knoten und Kanten können über dem Bildschirm bewegt werden
    graphMarginX: 0,    //  Abstand außen
    graphMarginY: 0,    //  Abstand außen
    groupConnectorIndentMargin: 10, // Ausgangspunkt der Kante die zu den Kinderknoten führt
    groupIndentMargin: 20,  // Länge der einführenden Kante der gruppierten Kindknoten
    groupNodeOverflow: 5,   // Breitenabstand den der Elternknoten über seine gruppierten Kindknoten hinausgeht
    groupedChildNodeSeparation: 10, // Abstand zwischen gruppierten Kindknoten
    firstGroupedChildNodeSeparation: 40, // Vertikaler Abstand vom Elternknoten zum Ersten gruppierten Kind (ab 5.0f)
    oneGroupHeightByLevel: true, // Sorgt dafür, dass alle Gruppen Knoten auf einer Ebene die selbe Höhe haben (ab 5.0f)
    oneNodeWidthByLevel: false,  // Sorgt dafür, dass Gruppierte Knoten alle die gleiche Breite haben
    oneNodeWidthByGroup: false,  // Sorft dafür, dass alle Kindknoten einer Gruppe dieselbe Breite haben (ab 5.0f)
    header: '',    // Header der oben angefügt wird, kann ein String sein oder HTML
    hideUnrelatedNodesOnHoverEdge: false,  //  Blendet nicht verwandte Knoten aus wenn man mit der Maus über eine Kante fährt
    hideUnrelatedNodesOnHoverNode: false,  //  Blendet nicht verwandte Knoten aus wenn man mit der Maus über einen Knoten fährt
    highlight: true,    //  Knoten und Kanten werden hervorgehoben, wenn der Mauszeiger über sie gehalten wird
    levelSeparation: 50,    //  Der minimale Abstand in Pixeln zwischen Ebenen
    nodeSeparation: 30,     //  Minimaler Abstand zwischen Knoten
    points: true,   //  Muss gesetzt werden, um komplexe Pfade zwischen Knoten zu erlauben / darzustellen, Standardmäßig werden nur rechtwinklige Verbindungen unterstüzt was bei komplexen Pfaden zu häßlichen Kreuzungen von Kanten führt
    rankAlgorithm: "network-simplex"|"tight-tree"|"longest-path",  // wählt den Algorithmus zum bestimmen des Rangs von Knoten
    renderRootNode: true, // Wurzelknoten anzeigen/ausblenden
    useGradientBoxColor: true,  //  Farbverlauf zum Füllen der Knoten
    useDagrePath: false,  // Zeichnet die Pfade genau so wie dagre.js sie berechnet
    useDagreLabelPosition: false,  // Zeichnet die Kantenlabels an den von dagre.js berechneten Positionen
    preCacheLabels: false, // Berechnet die Größe anhand gerenderter Raphael-Texte und verwendet diese hinterher wieder.
    showLegend: "default" | "expert", // Zeigt eine Legende zum Setzen von TreeChart-Einstellungen an. Im Expertenmodues "expert" werden mehr Einstellungen angezeigt. (ab 6.0.1)
    wrapGroupSize: undefined, // Anzahl ab der gruppierte Knoten im Layout umgebrochen werden. (ab 6.0.1)
    skin: {        // allgemeines Layout für knoten
        color: '#999999',  //  Färbung des angezeigten Knotens
        borderColor: '#888',  //  Farbe des Knotenrandes
        edgeColor: '#b5b5b5', // Standardfarbe für Kanten
        useGradientBoxColor: true,  //  Farbverlauf zum Füllen der Knoten
        font: 'Arial',  //  Schriftart der Knotenbeschriftung
        fontColor: '#444', //  Schriftfarbe der Knotenbeschriftung
        fontSize: 13,    //  Schriftgröße der Knotenbeschriftung
        fontStyle: "italic|oblique|...", // CSS Fontstyle (ab 5.0f)
        fontWeight: "bold|100|...", // // CSS Fontweight (ab 5.0f)
        fontBorderColor: "Farbe", // Rendert eine Umrandung
        fontBorderWidth: 5, // Breite der Umrandung
        borderRoundness: 10,  //  Rundung der Ecken des Knotens
        vMargin: 15,    //  Vertikaler Abstand der Knotenbeschriftung zum Knotenrand
        hMargin: 15,    //  Horizontaler Abstand der Knotenbeschriftung zum Knotenrand
        leafRendering: 'box',  //  Rendering der Blätter
        highlightColorIn: '#538',  //  eingehende Highlightfarbe der Knotenkante
        highlightColorOut: '#583'  //  ausgehende Highlightfarbe der Knotenkante
    },
    zoomConfiguration: {
        controlIconsEnabled: false, // Zoombuttons anzeigen
        dblClickZoomEnabled: false, // Reinzoomen bei Doppelklick
        panEnabled: true,  // Graph mit der Maus bewegen
        zoomEnabled: true, // Zoomen erlauben/verbieten (wirkt sich nicht auf die Buttons aus)
        mouseWheelZoomEnabled: true,  // Zoomen per Mausrad erlauben
        zoomScaleSensitivity: 0.6,  // Zoomintensität pro Schritt
        center: 1  // Graph zentrieren
    }
}
## Konfiguration eines Baumknotens

Auf jedem Knoten im Organigramm können Aktionen hinterlegt und Farbe und Form eingestellt werden. Dazu muss das PortalScript eine JSON Strunktur die wie folgt aufgebaut ist zurückgeben:


```javascript
node = {
    actionEvents:  {
        click:      'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>'|'showFolder:<folderId>',  // Achtung! runScript erwartet immer das ein JSON Baum zurückgegeben wird und versucht diesen zu zeichnen
        dblClick:   'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>'|'showFolder:<folderId>',
        rightClick: 'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>'|'showFolder:<folderId>' | { // Objektnotation (ab 5.0f)
            doNotExecuteDefaultClientScript: true, // verhindert das Ausführen des Default Client Scripts
            clientScript: "..." | showFile: "..." | showFolder: "..."// Auszuführender Code bei event,
            clientScriptFunc: "function(documentsContext) {...}" /* Function als String die zu echter Function geparst wird. Bei Verwendung der TreeChart-ScriptExtension, kann man ClientFunctions einfach
                                                     als Code hinterlegen und bei Transfer wird automatisch der String erzeugt. */
        },
    },
    borderColor: '#c00c00',  // Farbe des Knotenrahmens
    children: [
        child1, child2,...   //Liste von Kindknoten
        // Gruppierbarer Kinderknoten
        {
            actionEv...
            groupable: true // Knoten unterhalb seines Elternknotens gruppieren
        }
    ],
    childRelations: {        // Beschriftung in % der Kanten die zum jeweiligen Kindknoten führen
        child1: 50,// Beschriftung in Objekt Notation ist ohne %-Zeichen
        child2: {
            actionEvents:  { // Aktion auf Kantenlabel (ab 5.0f)
                click:      'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',  // Achtung! runScript erwartet immer das ein JSON Baum zurückgegeben wird und versucht diesen zu zeichnen
                dblClick:   'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',
                rightClick: 'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',
            },
            edgeActionEvents:  { // Aktion auf Kante selbst (ab 5.0f)
                click:      'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',  // Achtung! runScript erwartet immer das ein JSON Baum zurückgegeben wird und versucht diesen zu zeichnen
                dblClick:   'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',
                rightClick: 'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',
            },
            clientScript: 'alert("Hello World");',  // Auszuführender Code bei click auf Kantenlabel
            edgeClientScript: 'alert("Hello World");',  // Auszuführender Code bei click auf Kante (ab 5.0f)
            label: "Bezeichnung",
            html: '<span>I am a HTML edge!</span>', // HTML-Inhalt der anstatt eines Labels gerendert wird (ab 5.0f)
            fontFamily: "Schriftart",
            fontWeight: "bold|100|...", // // CSS Fontweight (ab 5.0f)
            fontColor: "#ff0000",
            fontStyle: "italic|oblique|...", // CSS Fontstyle (ab 5.0f)
            fontBorderColor: "Farbe", // Rendert eine Umrandung
            fontBorderWidth: 5, // Breite der Umrandung
            width: 10,  // Breite des Labels, macht Sinn wenn calcEdgeLabelSize eingeschaltet ist
            height: 10, // Höhe des Labels, macht Sinn wenn calcEdgeLabelSize eingeschaltet ist
            highlight: true,  //  Highlightet die Kante beim Hover (ab 5.0f)
            labelpos: "r"|"c"|"l",  // Position an der die Kantenbeschriftung angebracht wird, funktioniert nur mit useDagreLabelPosition, calcEdgeLabelSize sollte eingeschaltet sein
            labeloffset: 10,  // offset um das das Kantenlabel verschoben wird, funktioniert nur mit useDagreLabelPosition, calcEdgeLabelSize sollte eingeschaltet sein
            minlen: 1,  // Anzahl an Rängen die die Kante lang sein soll
            edgeTitle: "My Tooltip", // Tooltip der beim Hover über der Kante angezeigt wird (ab 5.0f)
            title: "My Tooltip", // Tooltip der beim Hover über dem Kantenlabel angezeigt wird (ab 5.0f)
            weight: 1,  // Gewicht der Kante, wird beim Berechnen des Baums verwendet
            color: "red"  // Farbe der Kante,
            stroke: { // https://dmitrybaranovskiy.github.io/raphael/reference.html#Element.attr (ab 6.0.1)
                stroke: "red",
                "stroke-dasharray": "-|.|-.|-..|. |- |--|- .|--.|--..",
                "stroke-opacity": 1,
                "stroke-width": 1
            }
        }
    },
    useGradientBoxColor: true,  //  Farbverlauf zum Füllen der Knoten
    clientScript: 'alert("Hello World");',  // Auszuführender Code bei click
    color: '#cbcbcb',  // Füllfarbe des Knotens
    currentFileId:  'ims_fi20140000001549',  // id die bei ausführen eines Scripts weitergereicht wird
    font: 'Arial',    //  Schriftart
    fontSize:  16,    //  Schriftgröße
    fontColor: '#c00' //  Schriftfarbe
    fontStyle: "italic|bold|...", // CSS Fontstyle
    fontBorderColor: "Farbe", // Rendert eine Umrandung
    fontBorderWidth: 5, // Breite der Umrandung
    textAlign: 'left|middle|right', // positionierung der Schrift innerhalb des Knotens
    hMargin:   5,     //  horizontaler Abstand zum Knotenrand
    vMargin:   5,     //  vertikaler Abstand zum Knotenrand
    highlight: true,  //  Highlightet den Knoten beim Hover
    highlightEdges: false, // Highlight der ein- und ausgehenden Kanten ein/ausschalten
    ignoreStylePropertyValue: false, // Verhindert der Außenabstände (hMargin/vMargin) für diesen Knoten, relevant wenn ein skin definiert Skin wurde
    groupIndentMargin: undefined, // Länge der einführenden Kante pro Knoten oder für die gruppierten Kinder
    groupNodeOverflow: 5 | false, // Breite die ein einzelner Gruppenknoten über seine Kindknoten hinausgeht. Bei false wird der Knoten nur so groß wie sein Inhalt gerendert wurde, Kinknoten können dann Breiter sein und über den Elternknoten hinausgehen. (ab 5.0f)
    minHeight:  100,  //  Mindesthöhe des Knotens
    minWidth:   100,  //  Mindestbreite des Knotens
    maxWidth:   120,  //  Maximalbreite des Knotens, zu lange labels werden abgeschnitten mit "..."
    minGroupHeight: 1,//  Mindesthöhe bei Gruppierten Knoten beim Berechnen des Layouts
    staticWidth: 100, //  Feste Breite des Knotes
    staticHeight:100, //  Feste Höhe des Knotens
    html:      '<span>Text</span>', // HTML-Inhalt der anstatt label/label1.. gerendert wird (ab 5.0f)
    label:     'Knotentext', // Kann anstatt label1, label2, label3 verwendet werden und auch mehrzeilig sein (Zeile1\r\nZeile2...)
    label1:    'Text' //  Beschriftung der ersten Knotenzeile
    label2:    'Text' //  Beschriftung der zweiten Knotenzeile
    label3:    'Text' //  Beschriftung der dritten Knotenzeile
    title: "My Tooltip", // Tooltip der beim Hover über dem Knoten angezeigt wird (ab 5.0f)
    treeParams:{      //  Parameter, die an das auszuführende Script weitergeleitet werden, welche zur Baumgenerierung benötigt werden
        param1: val1,
        param2: val2,
        ...
    },
    wrapGroupSize: undefined // Bricht gruppierte Kindknoten ab diesem Wert zu einer neuen Spalte um. (ab 6.0.1)
}
```

node = {
    actionEvents:  {
        click:      'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>'|'showFolder:<folderId>',  // Achtung! runScript erwartet immer das ein JSON Baum zurückgegeben wird und versucht diesen zu zeichnen
        dblClick:   'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>'|'showFolder:<folderId>',
        rightClick: 'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>'|'showFolder:<folderId>' | { // Objektnotation (ab 5.0f)
            doNotExecuteDefaultClientScript: true, // verhindert das Ausführen des Default Client Scripts
            clientScript: "..." | showFile: "..." | showFolder: "..."// Auszuführender Code bei event,
            clientScriptFunc: "function(documentsContext) {...}" /* Function als String die zu echter Function geparst wird. Bei Verwendung der TreeChart-ScriptExtension, kann man ClientFunctions einfach
                                                     als Code hinterlegen und bei Transfer wird automatisch der String erzeugt. */
        },
    },
    borderColor: '#c00c00',  // Farbe des Knotenrahmens
    children: [
        child1, child2,...   //Liste von Kindknoten
        // Gruppierbarer Kinderknoten
        {
            actionEv...
            groupable: true // Knoten unterhalb seines Elternknotens gruppieren
        }
    ],
    childRelations: {        // Beschriftung in % der Kanten die zum jeweiligen Kindknoten führen
        child1: 50,// Beschriftung in Objekt Notation ist ohne %-Zeichen
        child2: {
            actionEvents:  { // Aktion auf Kantenlabel (ab 5.0f)
                click:      'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',  // Achtung! runScript erwartet immer das ein JSON Baum zurückgegeben wird und versucht diesen zu zeichnen
                dblClick:   'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',
                rightClick: 'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',
            },
            edgeActionEvents:  { // Aktion auf Kante selbst (ab 5.0f)
                click:      'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',  // Achtung! runScript erwartet immer das ein JSON Baum zurückgegeben wird und versucht diesen zu zeichnen
                dblClick:   'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',
                rightClick: 'showFile:<fileId>[&dlcDocumentId=<documentId>]'|'runScript:<scriptName>|showFolder:<folderId>',
            },
            clientScript: 'alert("Hello World");',  // Auszuführender Code bei click auf Kantenlabel
            edgeClientScript: 'alert("Hello World");',  // Auszuführender Code bei click auf Kante (ab 5.0f)
            label: "Bezeichnung",
            html: '<span>I am a HTML edge!</span>', // HTML-Inhalt der anstatt eines Labels gerendert wird (ab 5.0f)
            fontFamily: "Schriftart",
            fontWeight: "bold|100|...", // // CSS Fontweight (ab 5.0f)
            fontColor: "#ff0000",
            fontStyle: "italic|oblique|...", // CSS Fontstyle (ab 5.0f)
            fontBorderColor: "Farbe", // Rendert eine Umrandung
            fontBorderWidth: 5, // Breite der Umrandung
            width: 10,  // Breite des Labels, macht Sinn wenn calcEdgeLabelSize eingeschaltet ist
            height: 10, // Höhe des Labels, macht Sinn wenn calcEdgeLabelSize eingeschaltet ist
            highlight: true,  //  Highlightet die Kante beim Hover (ab 5.0f)
            labelpos: "r"|"c"|"l",  // Position an der die Kantenbeschriftung angebracht wird, funktioniert nur mit useDagreLabelPosition, calcEdgeLabelSize sollte eingeschaltet sein
            labeloffset: 10,  // offset um das das Kantenlabel verschoben wird, funktioniert nur mit useDagreLabelPosition, calcEdgeLabelSize sollte eingeschaltet sein
            minlen: 1,  // Anzahl an Rängen die die Kante lang sein soll
            edgeTitle: "My Tooltip", // Tooltip der beim Hover über der Kante angezeigt wird (ab 5.0f)
            title: "My Tooltip", // Tooltip der beim Hover über dem Kantenlabel angezeigt wird (ab 5.0f)
            weight: 1,  // Gewicht der Kante, wird beim Berechnen des Baums verwendet
            color: "red"  // Farbe der Kante,
            stroke: { // https://dmitrybaranovskiy.github.io/raphael/reference.html#Element.attr (ab 6.0.1)
                stroke: "red",
                "stroke-dasharray": "-|.|-.|-..|. |- |--|- .|--.|--..",
                "stroke-opacity": 1,
                "stroke-width": 1
            }
        }
    },
    useGradientBoxColor: true,  //  Farbverlauf zum Füllen der Knoten
    clientScript: 'alert("Hello World");',  // Auszuführender Code bei click
    color: '#cbcbcb',  // Füllfarbe des Knotens
    currentFileId:  'ims_fi20140000001549',  // id die bei ausführen eines Scripts weitergereicht wird
    font: 'Arial',    //  Schriftart
    fontSize:  16,    //  Schriftgröße
    fontColor: '#c00' //  Schriftfarbe
    fontStyle: "italic|bold|...", // CSS Fontstyle
    fontBorderColor: "Farbe", // Rendert eine Umrandung
    fontBorderWidth: 5, // Breite der Umrandung
    textAlign: 'left|middle|right', // positionierung der Schrift innerhalb des Knotens
    hMargin:   5,     //  horizontaler Abstand zum Knotenrand
    vMargin:   5,     //  vertikaler Abstand zum Knotenrand
    highlight: true,  //  Highlightet den Knoten beim Hover
    highlightEdges: false, // Highlight der ein- und ausgehenden Kanten ein/ausschalten
    ignoreStylePropertyValue: false, // Verhindert der Außenabstände (hMargin/vMargin) für diesen Knoten, relevant wenn ein skin definiert Skin wurde
    groupIndentMargin: undefined, // Länge der einführenden Kante pro Knoten oder für die gruppierten Kinder
    groupNodeOverflow: 5 | false, // Breite die ein einzelner Gruppenknoten über seine Kindknoten hinausgeht. Bei false wird der Knoten nur so groß wie sein Inhalt gerendert wurde, Kinknoten können dann Breiter sein und über den Elternknoten hinausgehen. (ab 5.0f)
    minHeight:  100,  //  Mindesthöhe des Knotens
    minWidth:   100,  //  Mindestbreite des Knotens
    maxWidth:   120,  //  Maximalbreite des Knotens, zu lange labels werden abgeschnitten mit "..."
    minGroupHeight: 1,//  Mindesthöhe bei Gruppierten Knoten beim Berechnen des Layouts
    staticWidth: 100, //  Feste Breite des Knotes
    staticHeight:100, //  Feste Höhe des Knotens
    html:      '<span>Text</span>', // HTML-Inhalt der anstatt label/label1.. gerendert wird (ab 5.0f)
    label:     'Knotentext', // Kann anstatt label1, label2, label3 verwendet werden und auch mehrzeilig sein (Zeile1\r\nZeile2...)
    label1:    'Text' //  Beschriftung der ersten Knotenzeile
    label2:    'Text' //  Beschriftung der zweiten Knotenzeile
    label3:    'Text' //  Beschriftung der dritten Knotenzeile
    title: "My Tooltip", // Tooltip der beim Hover über dem Knoten angezeigt wird (ab 5.0f)
    treeParams:{      //  Parameter, die an das auszuführende Script weitergeleitet werden, welche zur Baumgenerierung benötigt werden
        param1: val1,
        param2: val2,
        ...
    },
    wrapGroupSize: undefined // Bricht gruppierte Kindknoten ab diesem Wert zu einer neuen Spalte um. (ab 6.0.1)
}
## Hinterlegen von Events auf Knoten

Für jeden Event (click, dblClick, rightClick) kann eine Aktion ausführt werden. Ist für ein Event keine Aktion festgeleg, wird auch kein Code ausgeführt.
Außerdem kann noch ein clientScript mitgegeben werden (bitte ohne function:... !!!), welches vor der jeweiligen Aktion ausgeführt wird.

Beispiel:

Knoten der beim Linksklick eine Mappe und beim Doppelklick einen Ordner öffnet und beim Rechtsklick ein Skript ausführt.


```javascript
node:    {
    ...,
    clientScript: 'alert("Hello World");',
    ...,
    actionEvents:    {
        click:        'showFile:ims_fi20150000001783',
        dblClick:    'showFolder:88:392091',
        rightClick:    { // Objektnotation (ab 5.0f), kann auch bei click und dblClick verwendet werden.
            clientScript: 'alert("Hello World 2");', // clientScript nur für diese Aktion
            doNotExecuteDefaultClientScript: true, // verhindert das Ausführen von clientScript (falls man es nicht bei jeder Aktion haben möchte beispielsweise)
            showFile:   '<fileId>',
            runScript:  '<scriptName>',
            showFolder: '<folderId>',
        }
    },
    ...
}
```

node:    {
    ...,
    clientScript: 'alert("Hello World");',
    ...,
    actionEvents:    {
        click:        'showFile:ims_fi20150000001783',
        dblClick:    'showFolder:88:392091',
        rightClick:    { // Objektnotation (ab 5.0f), kann auch bei click und dblClick verwendet werden.
            clientScript: 'alert("Hello World 2");', // clientScript nur für diese Aktion
            doNotExecuteDefaultClientScript: true, // verhindert das Ausführen von clientScript (falls man es nicht bei jeder Aktion haben möchte beispielsweise)
            showFile:   '<fileId>',
            runScript:  '<scriptName>',
            showFolder: '<folderId>',
        }
    },
    ...
}