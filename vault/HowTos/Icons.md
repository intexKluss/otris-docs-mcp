---
title: "Icons: Entypo, Ionicons und Material Design Icons"
source: "https://otris.software/documents/howto/design/icons.html"
---

# Icons: Entypo, Ionicons und Material Design Icons


## Syntax

Beispielsyntax für Entypo:


```javascript
entypo:folder;color:red;
```

entypo:folder;color:red;Beispielsyntax für Ionicons:


```javascript
ionicons:ion-md-folder;color:red;
```

ionicons:ion-md-folder;color:red;Beispielsyntax für Material Design Icons:


```javascript
mdi:mdi-folder;color:red;
```

mdi:mdi-folder;color:red;
## Liste der Icons

- Material Design Icons
- Entypo
- Ionicons


### Quellen

- Material Design Icons: https://pictogrammers.com/library/mdi/ (jedem Icon-Namen ein "mdi-" voranstellen)
- Entypo: Eine Übersicht der möglichen Icons findet sich in der Datei ..\Programme\Documents5\doc\entypo.zip beim Öffnen von index.html.
- Ionicons V3: https://ionicframework.com/docs/v3/ionicons/ (jedem Icon-Namen ein "ion-" voranstellen)


## An welchen Stellen können die Icons eingesetzt werden?


##### Ordner in der Baumansicht

DocumentsManager -> Documents -> Öffentliche Ordner -> Ordner -> Reiter Allgemein -> Icon

*Die Unterelemente erben von dessen übergeordnetem Element die Icons und werden mit jedem weiteren Unterelement transparenter (max. 60% transparent).*


##### Benutzerdefinierte Aktionen an einem Ordner

DocumentsManager -> Documents -> Öffentliche Ordner -> Ordner -> Reiter Benutzerdefinierte Aktionen -> Aktion -> Reiter Eigenschaften -> Eigenschaft `imageFile`


##### Menubar: globalGadgetConfig & menubarGadgetConfigs

Globale Eigenschaft im DocumentsManager als [globalGadgetConfig](../toolbar-settings/globalScriptClientScript.html) und/oder `menubarGadgetConfigs`


##### Outbars

DocumentsManager -> Documents -> Outbars -> Outbar -> Reiter Allgemein -> Icon aktiv


##### Benutzerdefinierte Felder

DocumentsManager -> Documents -> Mappentyp -> Reiter Felder -> Benutzerdefiniertes Feld -> Reiter Allgemein -> Wert/Voreinstellung


##### Benutzerdefinierte Aktionen an einem Mappentyp

DocumentsManager -> Documents -> Mappentyp -> Reiter Benutzerdefinierte Aktionen -> Aktion -> Reiter Eigenschaft -> Eigenschaft `imageFile`


##### Icon in der Kopfzeile der Mappenansicht

DocumentsManager -> Documents -> Mappentyp -> Reiter Erweiterte Einstellungen -> Mappendeckelrand -> Icon


##### Gentable Funktionsknopf als CustomFormatter (Gentable Custom Field)

Beispiel Definitionsdatei:


```xml
<field number="8">
    <title>customButton</title>
    <type>BUTTON</type>
    <img>ionicons:ion-md-network</img>
</field>

<field number="9">
    <title>customButton2</title>
    <type>BUTTON</type>
    <img>entypo:folder</img>
</field>

<field number="10">
    <title>customButton3</title>
    <type>BUTTON</type>
    <img>mdi:mdi-folder</img>
</field>
```

<field number="8">
    <title>customButton</title>
    <type>BUTTON</type>
    <img>ionicons:ion-md-network</img>
</field>

<field number="9">
    <title>customButton2</title>
    <type>BUTTON</type>
    <img>entypo:folder</img>
</field>

<field number="10">
    <title>customButton3</title>
    <type>BUTTON</type>
    <img>mdi:mdi-folder</img>
</field>
## Supporttabelle

| Stelle | Icon | Color | sonstige CSS |
| --- | --- | --- | --- |
| DobyGrid CustomFormatter |  |  |  |
| Ordner |  |  |  |
| Ordner benutzerdefinierte Aktionen |  |  |  |
| Menubar |  |  |  |
| Outbars |  |  |  |
| Benutzerdefinierte Felder |  |  | (Font-size nicht in der Mappenliste übernommen) |
| Mappe benutzerdefinierte Aktion |  |  |  |
| Mappenicon in Kopfzeile |  |  |  |