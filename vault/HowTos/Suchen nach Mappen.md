---
title: "Abfragen von Mappen"
source: "https://otris.software/documents/howto/scripting/searchingfiles.html"
---

# Abfragen von Mappen

Um Mappen in DOCUMENTS abzufragen, gibt es mit `HitResultset`, `FileResultset` und `ArchiveFileResultset` drei verschiedene Klassen im Portal-Scripting, die dafür verwendet werden können. Dieses How-To gibt einen kurzen Überblick über diese drei Klassen, um die Auswahl der geeigneten Klasse zu erleichtern und auf mögliche Stolpersteine bei Verwendung dieser Klassen hinzuweisen.

Hier sollen jedoch *nicht* die Klassen im Detail erklärt werden (siehe hierzu die entsprechende [Dokumentation in der PortalScript-API](../../api/portalscript/)) oder erklärt werden, wie nach bestimmten Inhalten gesucht werden kann (siehe hierzu das Tutorial für [[Portalscript API/documents/filter|Filterausdrücke]] und den dazugehörigen [[Portalscript API/documents/filter-examples|Beispielen]]).


## HitResultset

Zweck der Klasse [[Portalscript API/classes/HitResultset]] ist, dass Suchen nach Mappen performanter und zielgenauer zu gestalten. Mit dieser Klasse kann sowohl gleichzeitig über mehrere Suchquellen gesucht werden als auch genauer gesteuert werden, welche Daten in dem Suchergebnis enthalten sein sollen. Das erlaubt schnellere Suchen.


### Anwendungsfälle

- Die gefundenen Treffer oder nur sehr wenige davon, sollen verändert werden. Dadurch entfällt der Aufwand, temporäre DocFile-Objekte zu erstellen.
- Es werden nur ausgewählte Felder eines Mappentyps benötigt. Angabe mittels des Parameters hitlist möglich.
- Es muss über mehrere Suchquellen (lebende und archivierte Mappen; Mappen verschiedenen Mappentyps) gesucht werden. Mittels des Parameters searchResources können hier mehrere Mappentypen und/oder Archive angegeben werden.
- Es werden große Treffermengen erwartet. Deren Verarbeitung kann mittels des Parameters pageSize und den dazugehörigen Funktionen gesteuert werden, so dass nicht alle Treffer auf einmal in den Speicher geladen werden.
- Es muss über die Treffermenge iteriert werden. (Ist nur die Anzahl der Treffer für einen Mappentypen relevant, dann besser das FileResultset verwenden.)


### Einschränkungen

- Das HitResultset wirft im Fehlerfall keine Exception, sondern es muss ein Fehlercode abgefragt werden. Wird dies nicht ausgewertet, so ist das HitResultset leer und alle weiteren Verarbeitungen erfolgen mit einem leeren HitResultset, d. h., fehlenden Daten:


```javascript
var set = new HitResultset("crmAccount", "crmName='otris'", "");
if (set.getLastErrorCode() !== 0) {
	throw new Error(set.getLastError()); // or any other kind of error handling, e.g., logging, creating a user-friendly error message
}
for (var h of set) {
	// ...
}
```

var set = new HitResultset("crmAccount", "crmName='otris'", "");
if (set.getLastErrorCode() !== 0) {
	throw new Error(set.getLastError()); // or any other kind of error handling, e.g., logging, creating a user-friendly error message
}
for (var h of set) {
	// ...
}- Wird der optionale Parameter fullColumnLength nicht angegeben, so werden die Feldwerte nach 50 Zeichen abgeschnitten und um Auslassungspunkten ("...") ergänzt. Werden die Daten danach weiterverarbeitet, kann dies zu ungewollten Effekten führen, wie z. B. nicht funktionierende ACL-Listen.


## FileResultset

Die Klasse [[Portalscript API/classes/FileResultset]] ist der "klassische" Weg, um Mappen zu suchen. Als Ergebnis werden die Mappen selbst mit all ihren Daten zur Verfügung gestellt.


### Anwendungsfälle

- Es müssen nur Mappen eines Mappentyps gesucht werden.
- Es werden (fast) alle Felder der Mappen für die Weiterverarbeitung benötigt.
- Die gesuchten Mappen sollen anschließend bearbeitet/verändert werden, so dass immer das DocFile-Objekt benötigt wird.
- Es soll nur die Anzahl der Suchtreffer ermittelt werden.


### Einschränkungen

- Bei Fehlern wirft das FileResultset anders als viele andere Funktionen der PortalScripting-API eine Exception, welche abzufangen ist. Andernfalls wird die Exception direkt zum Nutzer weitergereicht:


```javascript
try {
	var set = new FileResultset("crmAccount", "Name='otris'", "");
	for (var f of set) {
		// ...
	}
} catch (e) {
	// Handle error, e.g., logging or creating a user-friendly error message
}
```

try {
	var set = new FileResultset("crmAccount", "Name='otris'", "");
	for (var f of set) {
		// ...
	}
} catch (e) {
	// Handle error, e.g., logging or creating a user-friendly error message
}
## ArchiveFileResultset

Die Klasse [[Portalscript API/classes/ArchiveFileResultset]] ist das Gegenstück zum `FileResultset` für die Suche im Archiv.


## Anwendungsfälle

- Es muss nur in einem Archiv gesucht werden, dessen Typ feststeht und sich im Laufe der Zeit nicht ändert.
- Es werden nur ausgewählte Felder eines Mappentyps benötigt. Angabe mittels des Parameters hitlist möglich.


### Einschränkungen

- Die konkrete Verwendung unterscheidet sich je nachdem, in was für einem Archiv gesucht wird (EDA/EAS, EE.i, EE.x).
- Bei Fehlern kann entweder eine Exception geworfen werden oder eine Fehlermeldung bereitgestellt werden. Für eine korrekte Fehlerbehandlung, muss daher immer beides abgefragt werden:


```javascript
try {
	// Searching in an EAS/EDA store
	var set = new ArchiveFileResultset("crmAccount@store1", "Name='otris'", "", "Name");
	if (set.getLastError() !== "") {
		throw new Error(set.getLastError());
	}
	for (var f of set) {
		// ...
	}
} catch (e) {
	// Handle error, e.g., logging or creating a user-friendly error message
}
```

try {
	// Searching in an EAS/EDA store
	var set = new ArchiveFileResultset("crmAccount@store1", "Name='otris'", "", "Name");
	if (set.getLastError() !== "") {
		throw new Error(set.getLastError());
	}
	for (var f of set) {
		// ...
	}
} catch (e) {
	// Handle error, e.g., logging or creating a user-friendly error message
}