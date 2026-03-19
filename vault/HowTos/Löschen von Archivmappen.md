---
title: "Löschen von Archivmappen"
source: "https://otris.software/documents/howto/scripting/deletingarchivedfiles.html"
---

# Löschen von Archivmappen

In diesem Howto wird beschrieben, welche Möglichkeiten es gibt, Mappen
in einem EDA-Archiv zu löschen. Generell erfolgt das Löschen wie bei
lebenden Mappen mittels der Funktion
[[Portalscript API/interfaces/DocFile#deleteFile|DocFile.deleteFile()]]:

- Einfaches Löschen von Archivmappen
- Endgültiges Löschen von Archivmappen
- Löschen von einzelnen Mappenversionen


## Einfaches Löschen von Archivmappen

Das einfache Löschen geschieht im Archiv darüber, dass auf den Mappen ein
Löschflag gesetzt wird. D. h.:

- diese Mappe taucht nicht mehr in Trefferlisten auf
- die Mappe kann nicht mehr abgefragt werden
- die Mappe ist physikalisch aber noch im Archiv vorhanden und kann nur noch über administrative Funktionen eingesehen und wiederhergestellt werden
- das Setzen des Löschflags wird im Audit Trail vermerkt, so dass nachvollzogen werden kann, wann das Setzen erfolgt ist

Im Scripting wird das Löschen mittels das Parameters `easDeleteMode = 0`
gesteuert:


```javascript
// [...]

var file = ...;
var moveTrash = false; // is ignored for archived files
var movePool = true; //  is ignored for archived files

var allVersions = true; // ensure that all versions of a file will be deleted
var easDeleteMode = 1; // deletion by setting the delete flag

if (!file.deleteFile(moveTrash, movePool, allVersions, easDeleteMode)) {
	throw new Error("Could not delete archived file: " + file.getLastError());
}

// [...]
```

// [...]

var file = ...;
var moveTrash = false; // is ignored for archived files
var movePool = true; //  is ignored for archived files

var allVersions = true; // ensure that all versions of a file will be deleted
var easDeleteMode = 1; // deletion by setting the delete flag

if (!file.deleteFile(moveTrash, movePool, allVersions, easDeleteMode)) {
	throw new Error("Could not delete archived file: " + file.getLastError());
}

// [...]
## Endgültiges Löschen von Archivmappen

Um eine Mappe endgültig aus einem Archiv zu löschen, müssen am Archivserver
weitere notwendige Konfigurationseinstellungen vorgenommen werden, da nur
Nutzer mit der Rolle `eas_keeper` im Archiv physikalisch Mappen löschen
können. Die Einstellung ist an der Archivserver-Konfiguration bei den
Einträgen zum "EAS Wartungskonto" vorzunehmen:


Abb. 1 - EAS-Wartungskonto

Ist dies konfiguriert, können in diesem Archiv physikalisch gelöscht werden:

- alle Einträge zu dieser Mappe in Repository, Index und Registry werden physikalisch gelöscht
- diese Mappe taucht nicht mehr in Trefferlisten auf
- die Mappe kann nicht mehr abgefragt werden
- die Mappe kann nicht mehr wiederhergestellt werden
- das endgültige Löschen wird im Audit Trail vermerkt, so dass nachvollzogen werden kann, wann eine Mappe endgültig gelöscht wurde

*Hinweis*: Im Index können anschließend immer noch Daten enthalten sein,
auch wenn die bei der Sucher nicht mehr berücksichtigt werden. Die werden
bei der mächsten Zusammenführung des jeweiligen Index-Segments entfernt.
Im Zweifel dies aber durch eine regelmäßige Indexoptimierung erzwungen
werden.

Mit dieser Einstellung, kann per `easDeleteMode = 2` nun eine Mappe endgültig
gelöscht werden:


```javascript
// [...]

var file = ...;
var moveTrash = false; // is ignored for archived files
var movePool = true; //  is ignored for archived files

var allVersions = true; // ensure that all versions of a file will be deleted
var easDeleteMode = 2; // Deletion by phyiscally deleting in the archive

if (!file.deleteFile(moveTrash, movePool, allVersions, easDeleteMode)) {
	throw new Error("Could not delete archived file: " + file.getLastError());
}

// [...]
```

// [...]

var file = ...;
var moveTrash = false; // is ignored for archived files
var movePool = true; //  is ignored for archived files

var allVersions = true; // ensure that all versions of a file will be deleted
var easDeleteMode = 2; // Deletion by phyiscally deleting in the archive

if (!file.deleteFile(moveTrash, movePool, allVersions, easDeleteMode)) {
	throw new Error("Could not delete archived file: " + file.getLastError());
}

// [...]
## Löschen einzelner Mappenversionen

In der Regel werden immer alle Versionen einer Mappe gelöscht. Mitunter kann
es aber gewünscht sein, nur eine Version einer Mappe zu löschen. Dies ist
ebenfalls mit `DocFile.deleteFile()` realisierbar:

- es wird nur die neueste Version der Mappe mit dem Löschflag versehen bzw. physikalisch gelöscht
- die Vorgängerversion wird, wenn vorhanden, zur neusten Version der Mappe und taucht dann in Trefferlisten für die Mappe auf

Dies kann über den Parameter `allVersions = false` gesteuert werden:


```javascript
// [...]

var file = ...;
var moveTrash = false; // is ignored for archived files
var movePool = true; //  is ignored for archived files

var allVersions = false; // ensure that only the newest versions of a file will be deleted
var easDeleteMode = 1; // deletion by by setting the delete flag

if (!file.deleteFile(moveTrash, movePool, allVersions, easDeleteMode)) {
	throw new Error("Could not delete archived file: " + file.getLastError());
}

// [...]
```

// [...]

var file = ...;
var moveTrash = false; // is ignored for archived files
var movePool = true; //  is ignored for archived files

var allVersions = false; // ensure that only the newest versions of a file will be deleted
var easDeleteMode = 1; // deletion by by setting the delete flag

if (!file.deleteFile(moveTrash, movePool, allVersions, easDeleteMode)) {
	throw new Error("Could not delete archived file: " + file.getLastError());
}

// [...]