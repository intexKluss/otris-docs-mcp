---
title: "Taglist"
source: "https://otris.software/documents/manuals/books/alternative-rendering/taglist.html"
---

# Taglist

Die Taglist ermöglicht es Mehrfachauswahlen unterschiedlich darzustellen. Hierzu sind 2 verschiedene Konfigurations-Modi möglich, die sich stark unterscheiden.

| Name der Felddarstellung | Documents-Version | Feldtypen |
| --- | --- | --- |
| tagList | ab 6.2.0 | Doppelauswahlliste |


Unterschieden wird im Allgemeinen zwischen zwei Modi der Tag-Liste.

1. tagSelect: Dieser Modus ist eine Liste von Tags, die als an- und abwählbare Buttons dargestellt wird. Dieser Modus ist der Standard-Modus.
2. tagList: Der Modus tagList enthält ein autocomplete-Feld, durch welches Tags zu einer Liste hinzugefügt werden können.

Da sich die Konfigurierbarkeit dieser beiden Modi unterscheidet, wird die Konfiguration im
Folgenden einzeln betrachtet und es wird empholen die Konfiguration per JSON durchzuführen.


## Tag-Select

Der Modus Tag-Select funktioniert ähnlich wie eine Checkbox-Gruppe. Es werden alle verfügbaren Optionen angezeigt und selektierte Optionen hervorgehoben.


![Tag-Select](assets/tagSelect.png)

Abb. 16 - Tag-Select

| Name | Beschreibung | Standardwert | Documents-Version |
| --- | --- | --- | --- |
| mode | Für die Verwendung des Modus Tag-Select muss der Wert auf tagSelect gesetzt werden | tagSelect | 6.2.0 |
| hasSearchbar | Fügt eine Suchleiste zu den Tabs hinzu | false | 6.2.0 |
| showAllInReadonly | Zeigt im Lesemodus eine Suchleiste an | false | 6.2.0 |
| sorted | Sortiert die Tags alphabetisch | false | 6.2.0 |
| selectedStyles | Ermöglicht es eigene CSS-Styles für selektierte Tags hinzuzufügen |  | 6.2.0 |
| unselectedStyles | Ermöglicht es eigene CSS-Styles für nicht selektierte Tags hinzuzufügen |  | 6.2.0 |
| hasCheckedIcon | Fügt einen Haken an einem Tag hinzu, wenn es selektiert wurde. | false | 6.2.0 |


```JSON
{
    "name":"tagList",
    "params":{
        "mode":"tagSelect",
        "hasCheckedIcon":true,
        "selectedStyles":{
            "background":"cadetblue",
            "color":"#444"
        }
    }
}
```


## Tag-List

Der Modus Tag-List zeigt nur ausgewählte Einträge an. Es gibt ein Eingabe-Feld mit dem per Autovervollständigung weitere Aufzählungswerte aktiviert werden können. Außerdem ist es möglich die Tag-List so zu konfigurieren, dass neue Werte sich hinzufügen lassen, die nicht in den Aufzählungswerten enthalten sind.


![Tag-List](assets/tagList.png)

Abb. 17 - Tag-List

| Name | Beschreibung | Standardwert | Documents-Version |
| --- | --- | --- | --- |
| mode | Für die Verwendung des Modus Tag-List muss der Wert auf tagList gesetzt werden | tagSelect | 6.2.0 |
| hasSearchbar | Fügt eine Suchleiste zu den Tabs hinzu | false | 6.2.0 |
| allowDeletion | Ermöglicht das Entfernen von ausgewählten Tags | false | 6.2.0 |
| addDeleteIcon | Fügt einen Papierkorb beim Hovern über einem Tag hinzu, falls die Eigenschaft allowDeletion aktiv ist | true | 6.2.0 |
| allowAddEntries | Ermöglicht das Hinzuzufügen von Einträge, die nicht in den Aufzählungswerten vorhanden sind. Diese Einträge gelten nur für das Feld des Vorgangs an dem diese hinzugefügt worden sind. Sollen die Einträge auf allen Vorgängen der Mappe oder Mappenübergreifend verfügbar sein ist es notwendig die Eigenschaft changeEnumSource zu konfigurieren. | false | 6.2.0 |
| changeEnumSource | Mit dieser Eigenschaft ist es möglich weitere Einträge Vorgangsübergreifen hizuzufügen. Weitere Informationen sind im entsprechenden Unterkapitel zu finden. |  | 6.2.0 |
| showAllInReadonly | Zeigt im Lesemodus eine Suchleiste an | false | 6.2.0 |
| sorted | Sortiert die Tags alphabetisch | false | 6.2.0 |
| selectedStyles | Ermöglicht es eigene CSS-Styles für selektierte Tags hinzuzufügen |  | 6.2.0 |
| unselectedStyles | Ermöglicht es eigene CSS-Styles für nicht selektierte Tags hinzuzufügen |  | 6.2.0 |
| hasCheckedIcon | Fügt einen Haken an einem Tag hinzu, wenn es selektiert wurde. | false | 6.2.0 |


```JSON
{
    "name":"tagList",
    "params": {
        "mode":"tagList",
        "allowDeletion":true,
        "allowAddEntries":true,
        "addDeleteIcon":true,
        "changeEnumSource":{
            "globalProperty":"default"
        }
    }
}
```


### Erweiterung der Aufzählungswerte

Sollen die Aufzählungswerte von Client aus erweitert werden können, ist es notwendig die Parameter `allowAddEntries` und `changeEnumSource` zu setzen.

Außerdem muss als Aufzählungswert-Quelle am Feld ein Script hinterlegt werden.


#### Aufzählungswerte in globalen Eigenschaften speichern

Grundsätzlich können die Werte über ein Standard-Skript in eine globale Eigenschaft gespeichert werden. Hierzu wird der Paramter `changeEnumSource` mit dem Wert


```JSON
{
    "globalProperty":"globalPropertyName"
}
```

versehen. Als Wert muss an dieser Stelle der Name der Globalen Eigenschaft oder der Wert `"default"` hinterlegt werden. Wird der Wert `"default"` verwendet, wird automatisch der Mappentypname_Feldname als Wert angenommen. Die Globalen Eigenschaften sind hierbei immer vom Typen `tagListCustomProperty`.

Für den Namen der globalen Eigenschaft stehen die Ersetzungsmarken `{fileType}` und `{fieldName}` zur Verfügung.

Als Standart-Wert wird `{fileType}_{fieldName}` verwendet.


![Aufzählungswerte als globale Eigenschaft abgelegt](assets/tagList_global_property.png)

Abb. 18 - Aufzählungswerte als globale Eigenschaft abgelegt

Am Feld wird hierzu `runscript:defaultTagListSaveScript` in den Aufzählungswerten verwendet.


#### Aufzählungswerte selber verwalten

Es ist ebenfalls möglich die Verwaltung der Aufzählungswerte selber zu übernehmen. Hierzu kann `changeEnumSource` mit dem Parameter `script` versehen werden.


```JSON
{
    "script":"scriptName",
    "customOptions": {}
}
```

Das Skript wird mit den Parametern `enumValues` (Array aller verfügbaren Tags. Die Tags haben
die folgenden Attribute: `key, label, selected`)
und `customOptions` aufgerufen. `customOptions` können in der Konfiguration eingestellt
werden.

Damit die Werte am Feld verfügbar sind muss auch hier ein Skript per `runscript` in den
Aufzahlungswerten hinterlegt werden.