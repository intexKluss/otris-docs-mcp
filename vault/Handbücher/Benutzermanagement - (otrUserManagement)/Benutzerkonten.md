---
title: "Benutzerkonten und Redakteure"
source: "https://otris.software/documents/manuals/books/otr-user-management/user.html"
---

# Benutzerkonten und Redakteure

Die Anzeige und Bearbeitung von Redakteuren und Benutzerkonten erfolgt über den Konfigurationsordner **Benutzerkonten**.
In der Liste stehen alle notwendigen Aktionen zum *Erstellen*,  *Löschen* und *Aktivieren* bzw. *Deaktivieren* von Redakteuren und Benutzerkonten bereit. Über die Suchfunktion können einzelne Einträge gezielt gesucht werden.

**Hinweis:** Die Liste kann per *Callback* angepasst werden, siehe dazu die [Callback-Dokumentation](callbacks.html).


![user-1](assets/user-1.png)

Abb. 6 - Liste Benutzerkonten und Redakteure

Per Klick auf einen Listeneintrag können die Details zu einem Benutzerkonto angezeigt werden.
Werden Einstellungen im Formular geändert, sind diese Änderungen per *Speichern* bzw. *Zurücksetzen* zu bestätigen, diese Aktionen werden bei Änderungen automatisch aktiviert.
In der Detailansicht werden die wichtigen Einstellungen fachlich gruppiert auf verschiedenen Registern dargestellt:


![user-2](assets/user-2.png)

Abb. 7 - Benutzerkonten - Allgemeine Einstellungen


![user-3](assets/user-3.png)

Abb. 8 - Benutzerkonten - Zusätzliche Einstellungen


![user-4](assets/user-4.png)

Abb. 9 - Benutzerkonten - Experteneinstellungen

**Hinweis:** Für die wichtigsten Einstellungen stehen im Formular Tooltips als Entscheidungshilfe bereit.

**Hinweis:** Die Detailansicht kann per *Callback* angepasst werden, siehe dazu die [Callback-Dokumentation](callbacks.html).

Mit der Standard-Aktion **Passwort ändern** kann das Passwort eines Benutzerkontos geändert werden. Diese Aktion ist deaktiviert, wenn eine externe Benutzerverwaltung angebunden ist und Passworte ausschließlich dort verwaltet werden sollen.


![user-5](assets/user-5.png)

Abb. 10 - Benutzerkonten - Passwortänderungsdialog (1)

Im Dialog werden das eingegebene Passwort und die Passwortwiederholung auf Korrektheit geprüft.


![user-6](assets/user-6.png)

Abb. 11 - Benutzerkonten - Passwortänderungsdialog (2)

Zusätzlich wird geprüft, ob die Mindestlänge (siehe Mandanteneinstellung / Kennwortlänge) eingehalten wurde.
Existiert zusätzlich ein Skript zur Passwortprüfung (siehe Mandanteneinstellung / Eigenschaft `setPasswordScript`), wird die im Skript bei Nichteinhaltung der Regel angegebene Meldung ebenfalls ausgegeben.


![user-7](assets/user-7.png)

Abb. 12 - Benutzerkonten - Passwortänderungsdialog (3)

Mit der Standard-Aktion **Mappen delegieren** können Mappen des aktuellen Benutzerkontos direkt einem anderen Benutzerkonto zugewiesen werden (z.B. im Falle einer nicht selbst gesetzten Abwesenheit), es ist dann ein entsprechendes Benutzerkonto anzugeben, an das delegiert werden soll.


![user-8](assets/user-8.png)

Abb. 13 - Benutzerkonten - Mappen delegieren

Eine zusätzliche Aktion **Benutzer abmelden** wird standardmäßig angezeigt, wenn der gewählte Benutzer angemeldet ist. Wird die Aktion ausgeführt, wird der Benutzer nach Bestätigung einer Sicherheitsabfrage abgemeldet.