---
title: "Globale benutzerdef. Aktionen in DOCUMENTS"
source: "https://otris.software/documents/howto/common/global-action.html"
---

# Globale benutzerdef. Aktionen in DOCUMENTS


## Einleitung

Damit eine benutzerdef. Aktion für alle Mappen bzw. Register global verfügbar sein kann, kommen die sogenannten globalen Aktionen (ab 5.0i) zum Einsatz. Sie sind unter *Documents > Globale Aktionen* im DOCUMENTS-Manager zu finden.


Dort kann man neue Aktionen erstellen, oder alternativ per Scripting wie z.B. `var action = new UserAction("ActionName");` Die Konfiguration erfolgt über die folgenden Eigenschaften:

- GlobalFileAction ab 5.0i
- GlobalRegisterAction ab 5.0i
- allowedGlobalActionsScript ab 6.0.1
- GlobalFolderAction ab 6.2.0


## Eigenschaften GlobalFileAction, GlobalRegisterAction und GlobalFolderAction

Die Eigenschaft `GlobalFileAction` steht für globale benutzerdef. Aktionen, Documents-Einstellungen und Mappentypen zur Verfügung.

Die Eigenschaft `GlobalRegisterAction` steht für globale benutzerdef. Aktionen, Documents-Einstellungen, Mappentypen und Register zur Verfügung.

Die Eigenschaft `GlobalFolderAction` steht für globale benutzerdef. Aktionen, Documents-Einstellungen und Ordner zur Verfügung.

Eine globale benutzerdef. Aktion wird mit den Eigenschaften `GlobalFileAction=ActionX`, `GlobalRegisterAction=ActionX` und `GlobalFolderAction=ActionX` für die globalen Mappen-Aktionen, Register-Aktionen bzw. Ordner-Aktionen aktiviert. Als Wert wird eine (frei wählbare) Bezeichnung der Aktion erwartet, wie z.B. `ActionX`.

An Documents-Einstellungen, Mappentypen, Registern und Ordner wird als Wert eine kommaseparierte Liste der Bezeichnungen der aktivierten globalen Aktionen erwartet, wie z.B. `GlobalFileAction=ActionX,ActionY,ActionZ` bzw. `GlobalRegisterAction=ActionX,ActionY,ActionZ`. Die Reihenfolge der Bezeichnungen wird berücksichtigt. Eine globale Aktion ist erst unter der Bezeichnung `ActionX` für die Eigenschaften `GlobalFileAction`, `GlobalRegisterAction` und `GlobalFolderAction` an Documents-Einstellungen, Mappentypen, Registern bzw. Ordner verfügbar, nachdem sie mit den Eigenschaften `GlobalFileAction=ActionX`, `GlobalRegisterAction=ActionX` bzw. `GlobalFolderAction=ActionX` dafür aktiviert worden ist. Am Mappentyp / Register / Ordner kann man die in den Documents-Einstellungen global definierten Aktionen ausblenden oder weitere Aktionen hinzufügen, indem man ein `-` vor den Aktionsbezeichnungen bzw. weitere Aktionsbezeichnungen einfügt, wie z.B. `GlobalRegisterAction=ActionX,-ActionY,ActionZ, ActionA`. Dabei setzt sich die Einstellung am Mappentyp / Register / Ordner gegenüber der globalen durch. Die Eigenschaften verhalten sich additiv. Zur Verdeutlichung verwenden wir die folgenden Tabellen:

| Position der Deklaration | GlobalRegisterAction |
| --- | --- |
| Documents-Einstellungen | Action1,Action3 |
| Register | -Action1,Action3,Action4 |
| Ergebnis am Register | Action3,Action4 |

| Position der Deklaration | GlobalFileAction |
| --- | --- |
| Documents-Einstellungen | Action1,Action2 |
| Mappentyp | Action1,-Action2,Action4 |
| Ergebnis an einer Mappe des Mappentypen | Action1,Action4 |

Auf Registerebene kann man die Einstellung der Eigenschaft `GlobalRegisterAction` an Mappentypen analog weiter anpassen, wie die folgende Tabelle zeigt:

| Position der Deklaration | GlobalRegisterAction |
| --- | --- |
| Documents-Einstellungen | Action1 |
| Mappentyp | Action3,Action4 |
| Register | -Action3 |
| Ergebnis am Register einer Mappe des Mappentypen | Action1,Action4 |


## Eigenschaft allowedGlobalActionsScript

Mit der globalen Eigenschaft `allowedGlobalActionsScript=ScriptName` kann man abhängig von Benutzern oder deren Rechten die globalen Aktionen auf Mappentypen / Registern  / Ordner einschränken. Das Skript wird nur dann ausgeführt, wenn für Mappe / Register / Ordner globale Aktionen definiert sind.

**ACHTUNG**: Der `enumval` im Skript beinhaltet aber ALLE Aktionen der Mappe / Register / Ordner und nicht nur die globalen Aktionen.


```javascript
// Beispielcode in dem Skript:
var currUser = context.currentUser;
for (var i = 0; i < enumval.length; i++)
{
    if (enumval[i] == "testAction1") // using the technical action name
    {
        if (currUser == "user1")
            enumval[i] = "";
    }

    // ...
}
```

// Beispielcode in dem Skript:
var currUser = context.currentUser;
for (var i = 0; i < enumval.length; i++)
{
    if (enumval[i] == "testAction1") // using the technical action name
    {
        if (currUser == "user1")
            enumval[i] = "";
    }

    // ...
}
## Beispiele

Wir nehmen an, dass die folgenden globalen benutzerdef. Aktionen mit der aufgelisteten Eigenschaften vorhanden sind:

- testAction1: GlobalFileAction=Action1 und GlobalRegisterAction=Action1
- testAction2: GlobalFileAction=Action2
- testAction3: GlobalRegisterAction=Action3
- testAction4: GlobalFileAction=Action4 und GlobalRegisterAction=Action4
- testAction5: die beiden Eigenschaften sind nicht gesetzt.


```ini
Beispiel 1:
-----
Documents-Einstellungen:
GlobalRegisterAction=Action1,Action3,Action4

=> dann werden 'testAction1', 'testAction3' und 'testAction4' an allen Registern aller Mappentypen angezeigt.
```

Beispiel 1:
-----
Documents-Einstellungen:
GlobalRegisterAction=Action1,Action3,Action4

=> dann werden 'testAction1', 'testAction3' und 'testAction4' an allen Registern aller Mappentypen angezeigt.
```ini
Beispiel 2:
-----
Documents-Einstellungen:
GlobalFileAction=Action1,Action2,Action4

=> dann werden 'testAction1', 'testAction2' und 'testAction4' an allen Mappen angezeigt.
```

Beispiel 2:
-----
Documents-Einstellungen:
GlobalFileAction=Action1,Action2,Action4

=> dann werden 'testAction1', 'testAction2' und 'testAction4' an allen Mappen angezeigt.
```ini
Beispiel 3:
-----
Documents-Einstellungen:
GlobalFileAction=testAction5,Action1,Action3

=> dann wird nur 'testAction1' an allen Mappen angezeigt, die Angaben 'testAction5' und 'Action3' sind ungültig und werden ignoriert.
```

Beispiel 3:
-----
Documents-Einstellungen:
GlobalFileAction=testAction5,Action1,Action3

=> dann wird nur 'testAction1' an allen Mappen angezeigt, die Angaben 'testAction5' und 'Action3' sind ungültig und werden ignoriert.
```ini
Beispiel 4:
-----
Documents-Einstellungen:
GlobalRegisterAction=Action1,Action3

Mappentyp-Property:
GlobalRegisterAction=-Action3,Action4

Register-Property:
GlobalRegisterAction=-Action1

=> Es wird dann nur noch 'testAction4' an diesem Register des Mappentypen dargetellt. An den übrigen Registern des Mappentypen werden weiterhin 'testAction1' und 'testAction4' angezeigt.
```

Beispiel 4:
-----
Documents-Einstellungen:
GlobalRegisterAction=Action1,Action3

Mappentyp-Property:
GlobalRegisterAction=-Action3,Action4

Register-Property:
GlobalRegisterAction=-Action1

=> Es wird dann nur noch 'testAction4' an diesem Register des Mappentypen dargetellt. An den übrigen Registern des Mappentypen werden weiterhin 'testAction1' und 'testAction4' angezeigt.
```ini
Beispiel 5:
-----
Documents-Einstellungen:
GlobalRegisterAction ist nicht gesetzt

Register-Property:
GlobalRegisterAction=Action1,Action4

=> Es werden dann 'testAction1' und 'testAction4' nur an diesem Register des Mappentypen dargetellt.
```

Beispiel 5:
-----
Documents-Einstellungen:
GlobalRegisterAction ist nicht gesetzt

Register-Property:
GlobalRegisterAction=Action1,Action4

=> Es werden dann 'testAction1' und 'testAction4' nur an diesem Register des Mappentypen dargetellt.
```ini
Beispiel 6:
-----
Documents-Einstellungen:
GlobalRegisterAction ist nicht gesetzt

Mappentyp-Property:
GlobalFileAction=Action1,Action4

=> Es werden dann 'testAction1' und 'testAction4' nur an Mappen des Mappentypen dargetellt.
```

Beispiel 6:
-----
Documents-Einstellungen:
GlobalRegisterAction ist nicht gesetzt

Mappentyp-Property:
GlobalFileAction=Action1,Action4

=> Es werden dann 'testAction1' und 'testAction4' nur an Mappen des Mappentypen dargetellt.
```ini
Beispiel 7:
-----
Documents-Einstellungen:
GlobalRegisterAction=Action1,Action3,Action4
allowedGlobalActionsScript=testScript

Beispielcode in testScript:
var currUser = context.currentUser;
for (var i = 0; i < enumval.length; i++)
{
    if (enumval[i] == "testAction1") // using the technical action name
    {
        if (currUser == "user1")
            enumval[i] = "";
    }

    // ...
}

=> dann werden für 'user1' nur noch 'testAction3' und 'testAction4' an allen Registern aller Mappentypen angezeigt, 'testAction1' ist durch 'allowedGlobalActionsScript' ausgeblendet.
```

Beispiel 7:
-----
Documents-Einstellungen:
GlobalRegisterAction=Action1,Action3,Action4
allowedGlobalActionsScript=testScript

Beispielcode in testScript:
var currUser = context.currentUser;
for (var i = 0; i < enumval.length; i++)
{
    if (enumval[i] == "testAction1") // using the technical action name
    {
        if (currUser == "user1")
            enumval[i] = "";
    }

    // ...
}

=> dann werden für 'user1' nur noch 'testAction3' und 'testAction4' an allen Registern aller Mappentypen angezeigt, 'testAction1' ist durch 'allowedGlobalActionsScript' ausgeblendet.