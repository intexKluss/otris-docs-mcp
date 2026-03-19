---
title: "Alias"
source: "https://otris.software/documents/manuals/books/otr-user-management/alias.html"
---

# Alias

Ein Alias kann optional als Pseudonym für ein Benutzerkonto verwendet werden.
Die Anzeige und Bearbeitung von Aliasen erfolgt über den Konfigurationsordner **Alias**.
In der Liste stehen die notwendigen Aktionen zum *Erstellen* und *Löschen* von Aliasen bereit, außerdem kann die Verwendung von Aliasen global aktiviert bzw. deaktiviert werden.
Über die Suchfunktion können einzelne Einträge gezielt gesucht werden.


![alias-1](assets/alias-1.png)

Abb. 20 - Liste Aliase

Wird die Aktion *Globale Aktivierung/Deaktivierung* aufgerufen, wird geprüft, ob die Mandanteneigenschaft `loginWithAlias` gesetzt ist. Nur wenn diese Eigenschaft den Wert 1 hat, ist eine Anmeldung per Alias möglich. Ist die Eigenschaft nicht gesetzt oder hat die Eigenschaft den Wert 0, erfolgt eine Aktivierung (Wert 1 wird gesetzt) ansonsten erfolgt eine Deaktivierung (Wert 0 wird gesetzt). Der aktuelle Benutzer wird per Notification über den Status informiert:


![alias-2](assets/alias-2.png)

Abb. 21 - Aktivierung


![alias-3](assets/alias-3.png)

Abb. 22 - Deaktivierung

**Hinweis:** Einige Erweiterungen wie z.B. *Microsoft Entra ID Anbindung* oder *OpenID Anbindung* benötigen die aktivierte Alias-Anmeldung und verwalten diese Eigenschaft selbständig. Sind derartige Erweiterungen aktiviert, ist sicherzustellen, dass diese Eigenschaft hier über die *Globale Aktivierung/Deaktivierung* nicht deaktiviert wird.

Per Klick auf einen Listeneintrag können die Details zu einem Alias angezeigt werden.
Werden Einstellungen im Formular geändert, sind diese Änderungen per *Speichern* bzw. *Zurücksetzen* zu bestätigen, diese Aktionen werden bei Änderungen automatisch aktiviert.
In der Detailansicht werden alle Einstellungen für einen Alias dargestellt:


![alias-4](assets/alias-4.png)

Abb. 23 - Alias Einstellungen

**Hinweis:** Für alle Einstellungen stehen im Formular Tooltips als Entscheidungshilfe bereit.