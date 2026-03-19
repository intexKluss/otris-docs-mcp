---
title: "Lokalisierte Felder in Documents"
source: "https://otris.software/documents/howto/common/translation-field.html"
---

# Lokalisierte Felder in Documents

Seit der Version Documents-Version *5.0g* ist es möglich lokalisierte Felder hinzuzufügen. Diese lassen sich über die Eigenschaft `translationField` an einem `STRING`-, `TEXT`- oder `HTML`-Feld einer Mappe, eines Scriptdialoges oder eines Gadgets hinzufügen.

Wird der Wert auf `true` gesetzt wird eine Standard-Konfiguration geladen.
Diese kann über die globale Eigenschaft `translationFieldSettings` verändert werden.
Alternativ kann ein JSON übergeben werden.

Die Werte der Felder werden als lokalisierter Text in Documents gespeichert. Dieser hat folgenden Aufbau:


```javascript
Standardwert;Sprachkürzel:Sprachwert;Sprachkürzel:Sprachwert.
```

Standardwert;Sprachkürzel:Sprachwert;Sprachkürzel:Sprachwert.Zum Beispiel kann der Wert so aussehen:


```javascript
my vale;de:Mein Wert;en:my value
```

my vale;de:Mein Wert;en:my value
## Konfigurationsparameter

Es stehen verschiedene Konfigurationsparameter zur Verfügung. Die Konfiguration der Sprachquellen und der Anzeigemodi werden in den folgenden Unterabschnitten gezeigt.

| Einstellung | Wert | Beschreibung |
| --- | --- | --- |
| displayMode | changeSingle | Ein Globus-Symbol zur An- und Abwahl der Sprachen wird hinzugefügt. |
| displayMode | changeAll | Ein Globus-Symbol zur An- und Abwahl der Sprachen wird hinzugefügt. Änderungen wirken sich auf alle anderen Felder mit dieser Option aus, sodass bei allen Feldern mit dieser Option Sprachen an- oder abgewählt werden. Die ausgewählten Sprachen werden am Benutzer gespeichert. |
| displayMode | all | Es werden immer alle Sprachen angezeigt. |
| displayMode | systemLang | Es wird nur die Benutzersprache angezeigt. |
| displayMode | showSetValuesInitially | Zeigt nur die Sprachen an, bei denen ein Wert hinterlegt ist. Die Möglichkeit zur Sprach An- und Abwahl besteht jedoch. |
| displayModeReadonly |  | optional funktioniert äquivalent zum displayMode. Wird nur angewandt, wenn sich die Mappe im Lesemodus befindet. |
| languageSource | systemLang | Alle Systemsprachen stehen als Sprachen zur Verfügung. |
| languageSource | script:<scriptName> | Die zur Verfügung stehenden Sprachen kommen aus dem übergebenen Skript. |
| languageSource | <globalPropertyName> | Die zur Verfügung stehenden Sprachen kommen aus dem übergebenen globalen Property. Dieses muss den Typen languageSettings haben. |
| langs | <String[]> | Ein Array aus verfügbaren Sprachen. Alternative zu languageSource. Es wird mit niedrigerer Priorität ausgewertet. |


### Sprachquellen

Sprachquellen können unterschiedlich konfiguriert werden. Zur Verfügung stehen die Konfiguration per Attribut direkt am Feld, die Verwendung der Systemsprachen, Konfiguration per Portalscript und die Konfiguration über eine globale Eigenschaft. Im Folgenden werden die Konfigurationen gezeigt.


#### Als Attribut


```JSON
{"langs": ["de","en","sp"]}
```

Die Sprachen `"de","en","sp"` werden für das Feld verwendet.


#### Systemsprachen


```JSON
{"languageSource": "systemLang"}
```

Die Systemsprache des Benutzers wird für das Feld verwendet.


#### Portalscript


```JSON
{"languageSource": "script:languageSourceScript"}
```

Der Name eines Portalscriptes kann hier angegeben werden. Dieses muss ein Array von Sprachen zurückgeben:


```javascript
return ["de","en","sp"];
```

return ["de","en","sp"];
#### Globale Eigenschaften


```JSON
{"languageSource": "myLanguageSource"}
```


Abb. 1 - Globale Eigenschaft zur Sprachkonfiguration


### Übersicht der Anzeigemodi

In diesem Abschnitt werden die verschiedenen Anzeige-Modi dargestellt.


#### all

In diesem Modus werden immer alle Sprachen angezeigt.


Abb. 2 - Modus zu Anzeige aller


#### changeSingle

Der Modus `changeSingle` bietet eine Sprachauswahl, zeigt initial aber alle Sprachen. Dies ist der Standard-Modus.


Abb. 3 - Modus zur Sprachauswahl


#### changeAll

`changeAll` bietet ebenfalls eine Sprachauswahl. Diese wirkt sich jedoch auf alle anderen Felder, an denen der Modus `changeAll` konfiguriert ist, aus. Die Sprachauswahl wird am Benutzer gespeichert.


Abb. 4 - Modus zur Sprachauswahl, der sich auf andere Felder auswirkt.

An dieser Stelle wurde die Sprache `nl` abgewählt. Sie ist folglich sowohl für das Feld `translationFieldChangeAll` als auch für das Feld `translationFieldChangeAll2` abgewählt worden.


Abb. 5 - Modus zur Sprachauswahl, der sich auf andere Felder auswirkt.


#### showSetValuesInitially

Dieser Modus funktioniert genau so wie `changeSingle`. Der Unterschied ist, dass initial nur die Sprachen angezeigt werden, für denen ein Wert hinterlegt wurde. Ist nur die Systemsprache oder keine Sprache mit einem Wert versehen, wird die Systemsprache ohne Sprachkürzel angezeigt.


Abb. 6 - Anzeige der aller ausgefüllten Sprachen


#### systemLang

Dieser Modus zeigt nur die Systemsprache ohne Sprachkürzel. Dieser Modus bietet sich insbesondere für die Einstellung `displayModeReadonly` an.


Abb. 7 - Anzeige der Systemsprache