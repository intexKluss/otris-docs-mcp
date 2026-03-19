---
title: "CustomActionToolbars"
source: "https://otris.software/documents/manuals/books/feature-manager/customActionToolbars.html"
---

# CustomActionToolbars

An bestimmten Positionen in Documents können selbst definierte Toolbars angezeigt werden:


![Positionen an denen eigene Toolbars eingebunden werden können](assets/settings/Folie4.PNG)

Abb. 7 - Positionen an denen eigene Toolbars eingebunden werden

Wenn eine Toolbar für eine Position die im Standard schon vorhanden ist definiert wird, wie z.B. *Menubar* und *BeforeCorporateHeader*, wird diese durch die selbst definierte Toolbar ersetzt.

Zum Anzeigen eigener Toolbars, muss in der FeatureConfig


```xml
<Feature name="CustomActionToolbars" active="true">
```

<Feature name="CustomActionToolbars" active="true">eingetragen werden.

Eine Toolbar wird mit einem Property-Tag definiert dessen Name-Attribut die Position bestimmt, an der diese Toolbar angezeigt werden soll.
Innerhalb des Property-Tags folgt eine Liste von Value-Tags, welche die anzuzeigenden Aktionen bestimmen.
Wenn eine Toolbar keine Value-Tags enthält, wird diese leer angezeigt.

Beispieldefinition einer Custom Action Toolbar:


```xml
<Feature name="CustomActionToolbars" active="true">

    <Property name="BeforeCorporateHeader">
        <Value>Home</Value>
        <Value>Inbox</Value>
        <Value>Favorites</Value>
    </Property>

</Feature>
```

<Feature name="CustomActionToolbars" active="true">

    <Property name="BeforeCorporateHeader">
        <Value>Home</Value>
        <Value>Inbox</Value>
        <Value>Favorites</Value>
    </Property>

</Feature>
## Liste der Verfügbaren Aktionen

| Icon | Aktionsname | Beschreibung |
| --- | --- | --- |
|  | ArchiveSearch | Öffnet die Suchmaske zum Suchen in Archiven. Funktioniert nur bei Clients die nur Archiv- und keinen normalen Documents-Zugang haben. |
|  | Avatar | Avatar-Icon mit den Initialen des angemeldeten Benutzers. Öffnet beim Klick die Einstellungen. |
|  | CloneSession | Öffnet einen Tab mit einer neuen Session. Damit die Aktion funktioniert, muss das Feature CloneSession eingeschaltet sein. |
|  | CreateFile | Öffnet den Mappe erstellen Dialog. |
|  | Defaults | Zeigt die für diesen Bereich definierten Standardaktionen an. |
|  | Exit | Meldet den Angemeldeten Benutzer ab. |
|  | Favorites | Öffnet den Favoriten Ordner. |
|  | ExtendedSearch | Öffnet die erweiterte Suche. |
|  | FileNavigation | Zeigt die Mappennavigation zum Blättern durch eine Trefferliste an. Wird erst angezeigt, nachdem eine Mappe aus einer Trefferliste heraus geöffnet wurde. |
|  | GadgetConfig | Führt die hinterlegte GadgetConfig aus. (Beispiel) |
|  | GlobalGadget | Button zum Ausführen des GlobalGadgets. Funktioniert nur, wenn die globale Eigenschaft globalGadgetConfig definiert ist. |
|  | GlobalScript | Button zum Ausführen des Globalscripts. Funktioniert nur, wenn die globale Eigenschaft globalScript definiert ist. |
|  | Home | Öffnet die Übersicht. |
|  | Inbox | Öffnet den Eingangsordner. |
|  | LastFileNavigation | Öffnet beim Klick die zuletzt angezeite Mappe. Beim Rechtsklick öffnet sich die Mappenhistorie. Der Button wird erst angezeigt, wenn die Historie mit mindestens zwei Mappen befüllt wurde. |
|  | MenubarGadgets | Rendert die hinterlegten MenubarGadgets. Funktioniert nur, wenn die globale Eigenschaft menubarGadgetConfigs definiert ist. |
|  | Message | Öffnet die Nachrichteneingabe. |
|  | NavibarGadget | Rendert das NavibarGadget. Funktioniert nur, wenn die globale Eigenschaft navibarGadgetConfig definiert ist. |
|  | Notification | Öffnet den Benachrichtigungen Dialog. |
|  | OnlineHelp | Öffnet die mit der globalen Eigenschaft helpFile definierte online Hilfe. |
|  | runScript | Führt das hinterlegte Skript aus. (Beispiel) |
|  | Settings | Öffnet die Einstellungen. |
|  | SwitchPrincipal | Öffnet eine Liste von Anwendungen, zu denen der Benutzer wechseln kann. Wird nur angezeigt, wenn die Eigenschaft trustedSwitchPrincipals an den Zielmandanten eingeschaltet ist. |
|  | ToggleFullscreen | Wechselt in den Vollbildmodus. Funktioniert nur, wenn die globale Eigenschaft toggleFullscreenButton definiert ist. |
|  | UploadFile | Öffnet einen Dialog um Dateien hochzuladen. |


### Standardaktionen verwenden und bestimmte ausblenden

Wenn man die Standardaktionen des jeweiligen Bereiches einblenden möchte, kann man den Platzhalter *Defaults* verwenden.
Wenn hier Aktionen ausgelassen werden sollen, kann man mit dem exclude-Attribut auf dem Value-Tag eine Liste von zu exkludierenden Aktionen angeben.

Beispiel:


```xml
<Feature name="CustomActionToolbars" active="true">

    <!-- Zeigt vorne die Inbox und danach die Standardaktionen an -->
    <Property name="Menubar" >
        <Value>Inbox</Value>
        <Value>Defaults</Value>
    </Property>

    <Property name="Menubar" >
        <!-- Zeigt die Standardaktionen ohne CloneSession, Favorites und Inbox an -->
        <Value exclude="CloneSession,Favorites,Inbox">Defaults</Value>
    </Property>

</Feature>
```

<Feature name="CustomActionToolbars" active="true">

    <!-- Zeigt vorne die Inbox und danach die Standardaktionen an -->
    <Property name="Menubar" >
        <Value>Inbox</Value>
        <Value>Defaults</Value>
    </Property>

    <Property name="Menubar" >
        <!-- Zeigt die Standardaktionen ohne CloneSession, Favorites und Inbox an -->
        <Value exclude="CloneSession,Favorites,Inbox">Defaults</Value>
    </Property>

</Feature>
### Beispiel GadgetConfig

Der Button wird direkt als GadgetConfig im Value-Tag eingetragen.


```xml
<Feature name="CustomActionToolbars" active="true">

    <Property name="BeforeSearchbar">
        <Value>{ gadgetScript: "script", gadgetAction: "action", gadgetIcon: "icon" }</Value>
    </Property>

</Feature>
```

<Feature name="CustomActionToolbars" active="true">

    <Property name="BeforeSearchbar">
        <Value>{ gadgetScript: "script", gadgetAction: "action", gadgetIcon: "icon" }</Value>
    </Property>

</Feature>In der GadgetConfig kann mit *gadgetIcon* ein eigenes entypo- oder ionicon-Icon und mit *tooltip* ein eigener Tooltip angezeigt werden.


```xml
<Feature name="CustomActionToolbars" active="true">

    <Property name="BeforeSearchbar">
        <Value>{ gadgetScript: "script", gadgetAction: "action", gadgetIcon: "entypo:star" }</Value>
        <Value>{ gadgetScript: "script", gadgetAction: "action", gadgetIcon: "ionicons:ion-ios-star-outline", tooltip: "Execute gadget" }</Value>
    </Property>

</Feature>
```

<Feature name="CustomActionToolbars" active="true">

    <Property name="BeforeSearchbar">
        <Value>{ gadgetScript: "script", gadgetAction: "action", gadgetIcon: "entypo:star" }</Value>
        <Value>{ gadgetScript: "script", gadgetAction: "action", gadgetIcon: "ionicons:ion-ios-star-outline", tooltip: "Execute gadget" }</Value>
    </Property>

</Feature>
### Beispiel runScript


```xml
<Feature name="CustomActionToolbars" active="true">
    <Property name="AfterSearchbar">
        <Value>runScript:theScript</Value>
    </Property>

</Feature>
```

<Feature name="CustomActionToolbars" active="true">
    <Property name="AfterSearchbar">
        <Value>runScript:theScript</Value>
    </Property>

</Feature>Es ist auch möglich mit `runScript:theScript?param1=val1` dem Skript Parameter an dieser Stelle zu übergeben.

Falls runScript mehr als einen Parameter übergeben bekommen soll, muss es in ein CDATA eingebettet werden:


```xml
<![CDATA[runScript:theScript?param1=val2&param2=value2]]>
```

<![CDATA[runScript:theScript?param1=val2¶m2=value2]]>Alternativ kann auch einfach nur ein Paramter als JSON-Objekt verwendet werden:


```xml
runScript:theScript?config={ param1:val2, param2=value2 }
```

runScript:theScript?config={ param1:val2, param2=value2 }Die Paramter müssen dann aus dem geparsten *config* Objekt ausgelesen werden.

Beispiel runScript:


```xml
<Feature name="CustomActionToolbars" active="true">

    <Property name="Menubar">
        <Value>runScript:theScript</Value>
        <Value>runScript:theScript?param1=val1</Value>
        <Value><![CDATA[runScript:theScript?param1=val2&param2=value2]]></Value>
        <Value>runScript:theScript?config={ param1:val2, param2=value2 }</Value>
    </Property>

</Feature>
```

<Feature name="CustomActionToolbars" active="true">

    <Property name="Menubar">
        <Value>runScript:theScript</Value>
        <Value>runScript:theScript?param1=val1</Value>
        <Value><![CDATA[runScript:theScript?param1=val2¶m2=value2]]></Value>
        <Value>runScript:theScript?config={ param1:val2, param2=value2 }</Value>
    </Property>

</Feature>
## Eigene Icons und Tooltips

Mit folgender Notation kann man bei Aktionen eigene Icons, Tooltips und Styles hinterlegen:


```xml
<Aktion>;Icon-Klasse:Icon;tooltip:<Tooltip>;CSS-Property1:CSS-Value1;...;CSS-PropertyN:CSS-ValueN
```

<Aktion>;Icon-Klasse:Icon;tooltip:<Tooltip>;CSS-Property1:CSS-Value1;...;CSS-PropertyN:CSS-ValueNDie Verfügaben Icon-Klassen sind unter [HowTo:Icons](../../../howto/design/icons.html) beschrieben.

Beispiel:


```xml
<Feature name="CustomActionToolbars" active="true">

    <Property name="BeforeSearchbar">
        <Value>Message;entypo:mobile</Value>
        <Value>LastFileNavigation;ionicons:ion-md-alarm</Value>
        <Value>Notification;entypo:mobile;color:blue;tooltip:Aloaheja heja heja heja aloa heja he</Value>
    </Property>

</Feature>
```

<Feature name="CustomActionToolbars" active="true">

    <Property name="BeforeSearchbar">
        <Value>Message;entypo:mobile</Value>
        <Value>LastFileNavigation;ionicons:ion-md-alarm</Value>
        <Value>Notification;entypo:mobile;color:blue;tooltip:Aloaheja heja heja heja aloa heja he</Value>
    </Property>

</Feature>Bei der Aktion *FileNavigation* kann man mit folgender Notation die Icons der Navigationspfeile austauschen:


```xml
FileNavigation;previous:<Icon-Klasse:Icon>;tooltip:<Tooltip>;CSS-Property1:CSS-Value1;...;CSS-PropertyN:CSS-ValueN;next:<Icon-Klasse:Icon>;CSS-Property1:CSS-Value1...
```

FileNavigation;previous:<Icon-Klasse:Icon>;tooltip:<Tooltip>;CSS-Property1:CSS-Value1;...;CSS-PropertyN:CSS-ValueN;next:<Icon-Klasse:Icon>;CSS-Property1:CSS-Value1...
Beispiel:


```xml
<Feature name="CustomActionToolbars" active="true">

    <Property name="AfterSearchbar">
        <Value>FileNavigation;previous:entypo:chevron-up;color:red;tooltip:Vorherige;next:entypo:chevron-down;color:green;tooltip:Nächste</Value>
    </Property>

</Feature>
```

<Feature name="CustomActionToolbars" active="true">

    <Property name="AfterSearchbar">
        <Value>FileNavigation;previous:entypo:chevron-up;color:red;tooltip:Vorherige;next:entypo:chevron-down;color:green;tooltip:Nächste</Value>
    </Property>

</Feature>
## Beispielkonfiguration für CustomActionToolbars


```xml
<?xml version="1.0" encoding="UTF-8"?>

<FeatureConfigs principal="relations">

    <FeatureConfig name="default">

        <Feature name="CustomActionToolbars" active="true">

            <Property name="BeforeCorporateHeader">
                <Value>Home</Value><!-- Zeigt das Home Icon an -->
            </Property>

            <Property name="BeforeSearchbar">
                <Value>LastFileNavigation</Value><!-- Zeigt die Mappenhistorie an -->
            </Property>

            <Property name="AfterSearchbar">
                <Value>FileNavigation</Value><!-- Zeigt die Trefferlistennavigation an -->
            </Property>

            <Property name="ExcludeInMenubar"><!-- Zeigt die Standardmenubar an ohne Mappe erstellen, Eingang und Favoriten -->
                <Value>CreateFile</Value>
                <Value>Inbox</Value>
                <Value>Favorites</Value>
            </Property>

        </Feature>

    </FeatureConfig>

</FeatureConfigs>
```

<?xml version="1.0" encoding="UTF-8"?>

<FeatureConfigs principal="relations">

    <FeatureConfig name="default">

        <Feature name="CustomActionToolbars" active="true">

            <Property name="BeforeCorporateHeader">
                <Value>Home</Value><!-- Zeigt das Home Icon an -->
            </Property>

            <Property name="BeforeSearchbar">
                <Value>LastFileNavigation</Value><!-- Zeigt die Mappenhistorie an -->
            </Property>

            <Property name="AfterSearchbar">
                <Value>FileNavigation</Value><!-- Zeigt die Trefferlistennavigation an -->
            </Property>

            <Property name="ExcludeInMenubar"><!-- Zeigt die Standardmenubar an ohne Mappe erstellen, Eingang und Favoriten -->
                <Value>CreateFile</Value>
                <Value>Inbox</Value>
                <Value>Favorites</Value>
            </Property>

        </Feature>

    </FeatureConfig>

</FeatureConfigs>