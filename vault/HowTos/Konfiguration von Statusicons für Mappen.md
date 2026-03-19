---
title: "Konfiguration von Statusicons für Mappen"
source: "https://otris.software/documents/howto/common/showStateIcon.html"
---

# Konfiguration von Statusicons für Mappen

Seit der DOCUMENTS Version `5.0f HF1` lässt sich über die
globale Eigenschaft **showStateIcons** der Mappenstatus von Mappen in Ordnern
und Suchen anzeigen.

Wird die Eigenschaft am Manager als Property eingeschaltet, werden folgende
Icons zu Mappen mit dem jeweiligen Mappenstatus hinzufügt.


Abb. 1 - Standardeinstellung für Statusicons


## Eigene Icons definieren

Es ist außerdem möglich eigene Werte für den Mappenstatus zu hinterlegen.
Hierzu wird ein JSON-Objekt als Konfiguration unter
globale Eigenschaften hinterlegt.


Abb. 2 - globale Eigenschaft

Die globale Eigenschaft muss als Namen und Typ `showStateIcon` hinterlegt haben.


Abb. 3 - globale Eigenschaft

Es wird jeweils der Mappenstatus als Schlüssel und eine Icon-Konfiguration
als Wert in JSON hinterlegt.

Folgende Konfiguration ist standardmäßig aktiv:


```json
{
    "new": "",
    "deleted": "ionicons:ion-md-trash",
    "follow_up": "ionicons:ion-md-refresh",
    "task": "ionicons:ion-md-checkbox-outline",
    "cancel_workflow": "mdi:mdi-progress-close",
    "file_back": "ionicons:ion-md-done-all",
    "info": "ionicons:ion-md-information",
    "to_forward": "ionicons:ion-md-send",
    "default": "",
    "archive_file_default": "ionicons:ion-md-filing",
    "archive_file_target": "ionicons:ion-md-filing",
    "archive_file_self": "ionicons:ion-md-filing",
    "consultation": "ionicons:ion-md-help",
    "file_checked_out": "ionicons:ion-md-lock"
}
```

{
    "new": "",
    "deleted": "ionicons:ion-md-trash",
    "follow_up": "ionicons:ion-md-refresh",
    "task": "ionicons:ion-md-checkbox-outline",
    "cancel_workflow": "mdi:mdi-progress-close",
    "file_back": "ionicons:ion-md-done-all",
    "info": "ionicons:ion-md-information",
    "to_forward": "ionicons:ion-md-send",
    "default": "",
    "archive_file_default": "ionicons:ion-md-filing",
    "archive_file_target": "ionicons:ion-md-filing",
    "archive_file_self": "ionicons:ion-md-filing",
    "consultation": "ionicons:ion-md-help",
    "file_checked_out": "ionicons:ion-md-lock"
}Wird zum Beispiel folgendes JSON hinterlegt:


```json
{
    "new":"ionicons:ion-md-add;color:red"
}
```

{
    "new":"ionicons:ion-md-add;color:red"
}Werden alle Mappen mit dem Status `new` angepasst. Alle anderen Mappen behalten ihre Standard-Konfiguration.


Abb. 4 - Mappen mit dem Status new wurden verändert


## Beispiel für ein Komplettaustausch

In diesem Beispiel werden alle Stati alternativ belegt:


```json
{
    "new": "mdi:mdi-file-star-outline",
    "deleted": "mdi:mdi-file-remove-outline",
    "follow_up": "mdi:mdi-file-clock-outline",
    "task": "mdi:mdi-file-edit-outline",
    "cancel_workflow": "mdi:mdi-file-cancel-outline",
    "file_back": "mdi:mdi-file-undo-outline",
    "info": "mdi:mdi-file-alert-outline",
    "to_forward": "mdi:mdi-file-move-outline",
    "default": "mdi:mdi-file-outline",
    "archive_file_default": "mdi:mdi-archive",
    "archive_file_target": "mdi:mdi-archive",
    "archive_file_self": "mdi:mdi-archive-outline",
    "consultation": "mdi:mdi-file-question-outline",
    "file_checked_out": "mdi:mdi-file-lock-outline"
}
```

{
    "new": "mdi:mdi-file-star-outline",
    "deleted": "mdi:mdi-file-remove-outline",
    "follow_up": "mdi:mdi-file-clock-outline",
    "task": "mdi:mdi-file-edit-outline",
    "cancel_workflow": "mdi:mdi-file-cancel-outline",
    "file_back": "mdi:mdi-file-undo-outline",
    "info": "mdi:mdi-file-alert-outline",
    "to_forward": "mdi:mdi-file-move-outline",
    "default": "mdi:mdi-file-outline",
    "archive_file_default": "mdi:mdi-archive",
    "archive_file_target": "mdi:mdi-archive",
    "archive_file_self": "mdi:mdi-archive-outline",
    "consultation": "mdi:mdi-file-question-outline",
    "file_checked_out": "mdi:mdi-file-lock-outline"
}Das Ergebnis sieht anschließend so aus:


Abb. 5 - Alternative Konfiguration der Status-Icons