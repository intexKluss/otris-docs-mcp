---
title: "jQuery 3 Upgrade Guide"
source: "https://otris.software/documents/howto/common/jquery-upgrade-guide.html"
---

# jQuery 3 Upgrade Guide

Da in jQuery 3.5 wichtige Sicherheitslücken geschlossen wurden,
wurde zu DOCUMENTS 5.0g auf die neue Version aktualisiert.
Mit der neuen Version haben sich einige Funktionen geändert,
weswegen hier die wichtigsten Änderungen mit Lösung zusammengefasst sind.


## Migrate

Um das Verhalten der vorherigen Version von jQuery wiederherzustellen, kann die
globale Eigenschaft `enableJQueryMigrate`  verwendet werden.
Mit `enableJQueryMigrate = true` wird das Migrate generell eingeschaltet und
wenn `enableJQueryMigrate = log` gesetzt wird, werden die *Warnings* des
jQuery Migrate Plugins ausgegeben. Diese müssen nicht alle gefixt werden,
bieten aber die Möglichkeit, an entsprechenden Code-Stellen Breakpoints zu setzen.


### Ausführliche Upgrade Informationen von jquery.com

- jQuery Core 3.0 Upgrade Guide
- jQuery Core 3.5 Upgrade Guide


## Ajax

Beim Aufruf von `jQuery.ajax()` wurden **auf dem zurückgegeben Objekt** die Callbacks `success()`, `error()` und `complete()` entfernt.
Stattdessen müssen jetzt `done()`, `fail()` und `always()` oder gleich die Promise-API (`then()`/`catch()`) verwendet werden.


## Attributes

Zum Setzen von Element-Zuständen wie *disabled, checked, selected, readonly* etc.
sollte immer `$element.prop()` anstatt `removeAttr()/attr()` verwendet werden.

**Beispiel:**


```javascript
$element.attr('disabled', 'disabled') /* --> */ $element.prop('disabled', true)
$element.removeAttr('disabled') /* --> */ $element.prop('disabled', false)
```

$element.attr('disabled', 'disabled') /* --> */ $element.prop('disabled', true)
$element.removeAttr('disabled') /* --> */ $element.prop('disabled', false)
## Core

`jQuery.isNumeric()`, `jQuery.swap()`, `jQuery.buildFragment()` und `jQuery.domManip()` wurden entfernt.

`$element.size()` wurde entfernt, es muss `$element.length` verwendet werden.

`$element.width()`, `$element.outerWidth()`, `$element.innerWidth()`, `$element.offsetTop()` etc. geben jetzt `undefined` zurück, wenn `$element.length = 0` ist.

Das kann vor allem bei Berechnungen zu Problemen führen.

Beispiel:


```javascript
Number + undefined = NaN
Math.max(11, NaN) = NaN
```

Number + undefined = NaN
Math.max(11, NaN) = NaNDeswegen muss das Vorhandensein der Elemente zum Zeitpunkt der Berechnung gewährleistet sein.


## Data

Wenn an einem Element Daten mit `$element.data("my-key", "value")` gespeichert werden, dann werden jetzt alle Dashes in Camelcase umgewandelt.
Das kann Probleme machen, wenn man mit `data = $element.data()` die Daten als Objekt läd. Dann ist `data["my-key"]` nicht mehr da, sondern heißt jetzt `data["myKey"]`


## Deferred

`jQuery.then()` wird jetzt immer asynchron aufgerufen. Das heißt, dass Code der danach kommt nicht mehr sofort ausgeführt wird.
Hier muss überprüft werden, ob der Code nach `.then()` von dessen Ausführung abhängig ist und entsprechend angepasst werden.


## Dimensions

`$element.width()`, `$element.height()` etc. geben jetzt auch Dezimalstellen zurück.

Das kann Probleme machen, wenn z.B. Zahlenwerte direkt an Komponenten weitergegeben werden, die von Integer Werten ausgehen.
Es kann auch zu Renderfehlern kommen, wenn die Werte z.B. in den *Style* anderer Elemente kopiert werden und verschiedene Browser diese dann unterschiedlich rendern.


## Effects

`$element.show()`, `$element.hide()`, und `$element.toggle()` verhalten sich jetzt anders, wenn `$element` nicht im DOM eingehangen ist.

Das sollte normalerweise keine Probleme machen, da die Elemente beim Aufrufen dieser Methoden in der Regel eingehangen sind.
Sonst kann es passieren, dass die Elemente nicht angezeigt werden, da dann z.B. das Stylesheet zieht.

Grund hierfür ist, dass z.B. beim Ausführen von `$element.show()`, der Style `display:block` nicht mehr hart in den inline-Style des Elementes geschrieben wird.


## Event

Die Convenience-Methoden `.load()`, `.unload()` und `.error()` wurden entfernt. Stattdessen muss `.on("load", ...)`, `.on("unload", ...)` und `on("error", ...)` verwendet werden.

`jQuery.event.props` und `jQuery.event.fixHooks` wurden entfernt. Hiervon betroffen sind hauptsächlich selbst definierte Custom-Events oder veraltete Bibliotheken, die solche Events definieren.

`.on("ready", fn)` wurde entfernt.


## Offset

`$element.offset()` schmeißt jetzt einen Fehler, wenn in der jQuery-Collection nicht wenigstens ein valides DOM-Element mit `getBoundingClientRect` vorhanden ist.
Normalerweise unproblematisch, das es keinen Sinn macht `.offset()` auf einem nicht DOM-Element aufzurufen.


## Selector

`$element.is(":visible")` ist jetzt `true` für Elemente ohne Höhe (z.B. hr und span). Umgekehrt ist `$element.is(":hidden")` jetzt `false` für diese Elemente.


## Serialize

`jQuery.param()` konvertiert %20 nicht mehr in ein Plus-Zeichen. Falls sich Code darauf verlassen sollte...


## Traversing

Die Methode `$element.andSelf()` wurde entfernt, stattdessen soll jetzt `$element.addBack()` verwendet werden.