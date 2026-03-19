---
title: "SystemUser-Attribute"
source: "https://otris.software/documents/manuals/books/autotexte/SystemUser.html"
---

# SystemUser-Attribute

SystemUser-Attribute können in Verbindung mit den folgenden User-AutoTexten verwendet werden:

- currentUser: angemeldeter Benutzer
- fileOwner: Besitzer einer Mappe
- lastEditor: letzter Bearbeiter
- Feld-Name (wenn das entsprechende Feld Informationen über Benutzer enthält): beliebiger Benutzer, in Feld definiert
- User.superior: Vorgesetzter des Benutzers, auf alle user Typen anwendbar

Damit können im Rahmen der Unternehmenshierarchie und der Historie einer Mappe alle nötigen Benutzerinformationen herausgefiltert werden. Die Informationen über Benutzer und deren Vorgesetzte sind beispielsweise dann von Nutzen, wenn in der Workflow-Modellierung die vollständige Bearbeitung einer Mappe durch den Einsatz von Eskalationsschritten sichergestellt werden soll. Der Rückgabewert für Systemuser-Attribute ist stets vom Typ String.

Die folgenden Abschnitte enthalten alle verfügbaren SystemUser-Attribute, wobei jeweils die GUI-Beschriftungen in den Sprachen Deutsch und Englisch in Klammern hinter dem Attribut aufgeführt sind.


## Status

- status: status eines Benutzers

Mögliche Werte:

- geerbt, inherited
- freigegeben, released
- registriert, registered
- gesperrt, blocked
- entfernbar, removable


### Beispiele

- Der Status des aktuellen Benutzers wird mit %currentUser.status% abgefragt.
- Der Status des Vorgesetzten des Mappenbesitzers wird erfragt über: %fileOwner.superior.status%


## DlcUser und Absent

- DlcUser: Gibt true zurück, wenn der Benutzer über einen DOCUMENTS-Zugang verfügt und false, wenn er keinen Zugang besitzt. Default ist false.
- Absent Gibt true zurück, wenn der Benutzer in seinen persönlichen Einstellungen eine Abwesenheit eingetragen hat. Default ist false.


### Beispiele

- Die Abwesenheit des Mappenbesitzers wird mit %fileOwner.Absent% abgefragt.
- Die Abwesenheit des Vorgesetzten des letzten Bearbeiters wird erfragt über: %lastEditor.superior.Absent%


## AbsentMessage und propertyName

- AbsentMessage Liefert die Abwesenheitsnachricht zurück, die ein Benutzer in seinen persönlichen Einstellungen hinterlegt hat. Bei der Anfrage der Nachricht wird nicht überprüft, ob eine Abwesenheit vermerkt ist, so dass die Nachricht auch ausgegeben wird, wenn der Benutzer anwesend ist.
- $propertyname Ermittelt den Feldwert einer beim Benutzer oder Redakteur angelegten Eigenschaft


### Beispiele

Bei dem Benutzer Willi Schreiber ist als Eigenschaft hinterlegt, dass ihm der Redakteur Oppen, Bernhard als Prüfer zugeordnet ist. Ist Willi Schreiber der Besitzer einer Mappe, so liefert der AutoText `%fileOwner.$Pruefer%` den Wert `oppen` zurück. Dies ist der Login-Name des zugeordneten Prüfers Bernhard Oppen.


## Particulars

Die im Benutzermanagement hinterlegten Informationen und Kontaktdaten zu Redakteuren und Benutzern sind ebenfalls über SystemUser-Attribute verfügbar. Für das Erreichen der einzelnen Daten werden innerhalb der SystemUser-Attribute sogenannte **Particulars** bereitgestellt. Der Aufruf einer Information aus den Particulars erfolgt über folgende Notation.


```javascript
%user.particulars.particularName%
```

%user.particulars.particularName%Hierbei muss der Platzhalter `user` wiederum gegen einen der bekannten Typen (siehe Liste oben) ausgetauscht werden. Der Platzhalter Particular-Name muss weiterhin durch einen Eintrag aus der folgenden Tabelle ersetzt werden.

| particularName (Personalien, Particulars) | Information |
| --- | --- |
| sex (Anrede, Salutation) | keine Angabe, unknown Herr, Mr. Frau, Mrs. |
| salutation (Titel, Salutation) |  |
| firstName (Vorname, First name) |  |
| lastName (Nachname, Last name) |  |
| jobtitle (Position, Job title) |  |
| eMail (E-Mail, E-mail) |  |
| telephone (Telefon, Telephone) |  |
| fax (Fax, Fax) |  |
| mobile (Mobilfon, Cell / mobile phone) |  |
| furtherfon (Sonstige, Other) |  |
| name (Vor- und Zuname, First and Last Name) |  |


### Beispiele

Den Nachnamen des angemeldeten Benutzers erreichen Sie über den AutoText


```javascript
%currentUser.particulars.lastName%
```

%currentUser.particulars.lastName%Die Telefonnummer des Besitzers der Mappe geben Sie folgendermaßen aus:


```javascript
%fileOwner.particulars.telephone%
```

%fileOwner.particulars.telephone%Für einen Eskalationsschritt, zum Beispiel bei Verstreichen einer Bearbeitungsfrist, kann eine Nachricht an die E-Mail-Adresse des Vorgesetzten des letzten Bearbeiters gesendet werden. Die Adresse wird über diesen AutoText abgerufen:


```javascript
%lastEditor.superior.particulars.eMail%
```

%lastEditor.superior.particulars.eMail%
## Auslesen von benutzerdefinierten Eigenschaften

Für jeden DOCUMENTS-Benutzer besteht über das Eigenschaften-System (**Documents-Manager -> Redakteure** oder **Alle Benutzerkonten -> Eigenschaften**) die Möglichkeit, spezielle Eigenschaften zu definieren. Diese Eigenschaften bestehen aus einer Bezeichnung und einem Wert. Die Werte dieser Eigenschaften lassen sich als AutoTexte auslesen.

Wird beispielsweise am Benutzerkonto eine Eigenschaft FreigabeGrenze definiert, kann diese als **SystemUser-Attribut** ausgelesen werden.

Zur Unterscheidung von vordefinierten Systemuser-Attributen (wie bspw. `particulars.lastName`) muss zum Auslesen der benutzerdefinierten Eigenschaften dem Eigenschaftenname ein Dollarzeichen (`$`) vorangestellt werden.


### Beispiele

Ein Feld (z.B. `Grenze`, für Freigabegrenze des aktuellen Benutzers) soll mit der benutzerdefinierten Eigenschaft FreigabeGrenze belegt werden. Dazu wird der folgende AutoText verwendet.


```javascript
%currentUser.$FreigabeGrenze%
```

%currentUser.$FreigabeGrenze%