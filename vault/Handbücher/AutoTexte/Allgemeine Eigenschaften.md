---
title: "AutoTexte aus Informationen über Benutzer"
source: "https://otris.software/documents/manuals/books/autotexte/User.html"
---

# AutoTexte aus Informationen über Benutzer

| AutoText-Ausdruck | Übermittelte Information |
| --- | --- |
| %userFullname% | Name eines Benutzers im Anzeigeformat Nachname, Vorname |
| %userLogin% | Login-Name eines Benutzers |
| %currentUser.attribut% | Dieser AutoText liefert Informationen über den aktuell angemeldeten Benutzer. Über diese Notation können eine ganze Reihe verschiedener AutoTexte aufgerufen werden. Siehe Kapitel SystemUser Attribute |
| %clientLanguage% | locale (Kürzel) der Sprache des angemeldeten Clients, z.B. de fürDeutsch oder en für Englisch. |
| %fromPartner% | Name der Organisation, welcher der Benutzer angehört |
| %user.superior.attribut% | Dieser AutoText bezieht sich wieder auf die Kapitel SystemUser Attribute, allerdings werden in diesem Fall Informationen über den Vorgesetzten des betrachteten Users abgefragt. Zu user siehe Hinweis unten. |
| %user.propCache.element% | Gibt den Wert des Elements im Property Cache des Benutzers zurück, sofern das Element existiert. Siehe hierzu auch die Klasse PropertyCache in der Portalscript API. Zu user siehe Hinweis unten. |
| %accessProfiles% | Liste der Zugriffsprofile des angemeldeten Benutzers in der Form: ZP1 &#124; ZP 2 &#124; ZP 3 |
| %listAccessProfiles% | Liste der Zugriffsprofile des angemeldeten Benutzers in der Form: ZP1 \\n ZP 2 \\n ZP 3 |
| %firstAccessProfiles% | Erstes Zugriffsprofil des angemeldeten Benutzers |
| %accessProfilesGACLFilter% | Liste der Zugriffsprofile des angemeldeten Benutzers in der Form: \\r\\n ZP1 \\r\\n &#124; \\r\\n ZP2 \\r\\n &#124; \\r\\n ZP 3 \\r\\n |
| %accessProfilesGACLList% | \\r\\n AP1 \\r\\n AP2 \\r\\n AP3 \\r\\n |


## Hinweis zu user

Die Bezeichnung `user` innerhalb der Notation ist ein Platzhalter, der diesem AutoText eine erhöhte Flexibilität ermöglicht, da hierdurch verschiedene Arten von Benutzern betrachtet werden können. Die Bezeichnung User muss zwingend ersetzt werden, anderenfalls erhalten Sie kein Ergebnis, da dieser Ausdruck an sich dem System nicht bekannt ist.

`user` kann durch die folgenden Werte ersetzt werden

- currentUser: angemeldeter Benutzer
- fileOwner: besitzer der Mappe
- lastEditor: letzter Bearbeiter
- Feld-Name (mit Benutzern): in Mappenfeld definiert


## Performante Ausdrücke, um Benutzer aus Feldern auszulesen

Identifiziert den Login-Namen eines Benutzers aus einem Feldwert.


```javascript
%field->userlogin.fieldName.SystemUser-AutoText%
```

%field->userlogin.fieldName.SystemUser-AutoText%Identifiziert den Nachnamen eines Benutzers aus einem Feldwert.


```javascript
%field->userlastname.fieldName.SystemUser-AutoText%
```

%field->userlastname.fieldName.SystemUser-AutoText%Identifiziert den Vornamen eines Benutzers aus einem Feldwert.


```javascript
%field->userfullname.fieldName.SystemUser-AutoText%
```

%field->userfullname.fieldName.SystemUser-AutoText%Identifiziert den Alias-Namen eines Benutzers aus einem Feldwert.


```javascript
%field->alias.fieldName.SystemUser-AutoText%
```

%field->alias.fieldName.SystemUser-AutoText%Analog zu oben, erwartet jedoch einen festen Wert eines Login.


```javascript
%value->userlogin.[']login['].SystemUser-AutoText%
```

%value->userlogin.[']login['].SystemUser-AutoText%Analog zu oben, erwartet jedoch einen festen Wert eines Nachnamens.


```javascript
%value->userlastname.[']lastname['].SystemUser-AutoText%
```

%value->userlastname.[']lastname['].SystemUser-AutoText%Analog zu oben, erwartet jedoch einen festen Wert eines Vornamens.


```javascript
%value->userfullname.[']fullname['].SystemUser-AutoText%
```

%value->userfullname.[']fullname['].SystemUser-AutoText%Analog zu oben, erwartet jedoch einen festen Wert eines Alias.


```javascript
%value->alias.[']alias['].SystemUser-AutoText%
```

%value->alias.[']alias['].SystemUser-AutoText%Weitere AutoTexte


```javascript
%idFile->fileId.transTable->eintrag.localeNo%
%loginuser->loginName:fileFromInbox->fileId%
%loginuser->loginName:fileFromFileBack->fileId%
```

%idFile->fileId.transTable->eintrag.localeNo%
%loginuser->loginName:fileFromInbox->fileId%
%loginuser->loginName:fileFromFileBack->fileId%