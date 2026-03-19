---
title: "Einen Ordner als Kalender darstellen"
source: "https://otris.software/documents/howto/gadgets/folder-as-calendar.html"
---

# Einen Ordner als Kalender darstellen

Mit dem Kalender-Gadget (`otris.gadget.gui.FullCalendar `) ist es möglich eine Kalenderansicht zu erzeugen. Dieses HowTo beschreibt wie man die Mappen eines Ordners in einer Kalenderansicht darstellen kann.

Dazu wird ein neuer Ordner vom Typ `Öffentlich (dyn. Filter)` erstellt. Über den Reiter **Filter (Mappentyp)** wird der Inhalt des Ordners auf den Mappentyp **Mitarbeiter** (*ftEmployee*) eingeschränkt.


Abb. 1 - Reiter: Filter (Mappentyp)

Um die Standarddarstellung eines Ordners zu ersetzen muss an dem Ordner eine Gadget-Konfiguration (`gadgetConfig`) als Eigenschaft hinterlegt werden. Bei einem Klick auf den Ordner wird nun das Gadget anstelle der Listenansicht angezeigt.


```javascript
gadgetConfig = {gadgetScript: 'Gadget_CalendarBirthday', gadgetAction: 'showCalendar'}
```

gadgetConfig = {gadgetScript: 'Gadget_CalendarBirthday', gadgetAction: 'showCalendar'}Um die Mappen im Kalender anzuzeigen müssen diese eine Datumsinformation enthalten. Für dieses Beispiel wurde ein Feld Geburtstag (`hrBirthday`) am Mappentyp **Mitarbeiter** (*ftEmployee*) aus dem *dopaag-Mandanten* ergänzt und mit zufälligen Werten gefüllt. Ein Skript zum zufälligen Befüllen der Felder findet sich am Ende dieses HowTos.

Die Funktionsweise des Gadgets lässt sich anhand des kommentierten Quellcodes nachvollziehen. Details zu den Konfigurationsmöglichkeiten befinden sich in der **Gadget-API**.


## Skript: Gadget_CalendarBirthday


```javascript
//#import "Gadget_API_Controller"

function showCalendar() {
	var currentY = new Date().getFullYear();
	var rangeY = 5;
	var events = [];

	this.execute = function() {
		// Erzeugen des Gadget vom Typ otris.gadget.gui.FullCalendar
		var gadgetCalendar = new otris.gadget.gui.FullCalendar();
		// Erstellen der Kalenderkonfiguration
		var calendarConfig = {
			header: {
				left: 'prev next today',
				center: 'title',
				right: 'month basicWeek listYear'
			},
			// Render Callback für die Events
			eventRender: function(event, element) {
				element.hover(function() {
						element.css("background", "#ffc99e");
					},
					function() {
						element.css("background", "#ffe9d8");
					});
				element.css("padding", "5px");
			},
			// Wird bei einem Click auf ein Event ausgeführt
			eventClick: function(calEvent, jsEvent, view) {
				var fileId = calEvent.fileId;
				documentsContext.openFileView(fileId);
			}
		};

		gadgetCalendar.setTitle("Geburtstagskalender");
		gadgetCalendar.setLazyLoad(false);
		gadgetCalendar.setConfig(calendarConfig);

		// Hinzufügen einer Quelle
		gadgetCalendar.addSource({
			id: "common",
			color: "#ffe9d8",
			textColor: "#333"
		});

		// Allgemeine Funktion um die Events zu laden
		// In diesem Beispiel gibt es nur eine Quelle und kein lazyLoad,
		// deshalb werden hier einfach alle Events zurück geliefert.
		gadgetCalendar.setEventLoader(function eventLoader(source, start, end, tzone) {
			var it = context.folderFiles,
				myFile;
			if(!it) {
				return events;
			}
			for(myFile = it.first(); myFile; myFile = it.next()) {
				addBirthdayEvents(myFile);
			}
			return events;
		});

		return gadgetCalendar.transfer();
	}

	/**
	 *  Hilfsfunktion die Geburtstags-Events aus einer Mitarbeiter-Mappe erzeugt
	 */
	var addBirthdayEvents = function(myFile) {
		var bdDate = myFile && myFile.getFieldValue("hrBirthday");
		// Kein Event hinzufügen wenn das Feld Geburtstag nicht gefüllt ist
		if(!bdDate) {
			return;
		}
		// ID, Titel und Datum der Mitarbeiter-Mappe auslesen
		var fileId = myFile.getAutoText("id");
		var title = myFile.getAutoText("%hrFirstName% %hrLastName%");
		var bdStr = util.convertDateToString(bdDate, ".mm.dd").replace(/\./gi, "-");
		var birthdayYear = bdDate.getFullYear();

		// Erzeugt jeweils ein Event für die letzten/nächsten X (yearRange) Jahre
		for(var year = (currentY - rangeY); year <= (currentY + rangeY); year++) {
			var event = {
				id: "event_" + fileId + "_" + year,
				fileId: fileId,
				title: "Geburtstag von: " + title + " (" + (year - birthdayYear) + ")",
				start: year + "-" + bdStr
			};
			events.push(event);
		}
	};

}
```

//#import "Gadget_API_Controller"

function showCalendar() {
	var currentY = new Date().getFullYear();
	var rangeY = 5;
	var events = [];

	this.execute = function() {
		// Erzeugen des Gadget vom Typ otris.gadget.gui.FullCalendar
		var gadgetCalendar = new otris.gadget.gui.FullCalendar();
		// Erstellen der Kalenderkonfiguration
		var calendarConfig = {
			header: {
				left: 'prev next today',
				center: 'title',
				right: 'month basicWeek listYear'
			},
			// Render Callback für die Events
			eventRender: function(event, element) {
				element.hover(function() {
						element.css("background", "#ffc99e");
					},
					function() {
						element.css("background", "#ffe9d8");
					});
				element.css("padding", "5px");
			},
			// Wird bei einem Click auf ein Event ausgeführt
			eventClick: function(calEvent, jsEvent, view) {
				var fileId = calEvent.fileId;
				documentsContext.openFileView(fileId);
			}
		};

		gadgetCalendar.setTitle("Geburtstagskalender");
		gadgetCalendar.setLazyLoad(false);
		gadgetCalendar.setConfig(calendarConfig);

		// Hinzufügen einer Quelle
		gadgetCalendar.addSource({
			id: "common",
			color: "#ffe9d8",
			textColor: "#333"
		});

		// Allgemeine Funktion um die Events zu laden
		// In diesem Beispiel gibt es nur eine Quelle und kein lazyLoad,
		// deshalb werden hier einfach alle Events zurück geliefert.
		gadgetCalendar.setEventLoader(function eventLoader(source, start, end, tzone) {
			var it = context.folderFiles,
				myFile;
			if(!it) {
				return events;
			}
			for(myFile = it.first(); myFile; myFile = it.next()) {
				addBirthdayEvents(myFile);
			}
			return events;
		});

		return gadgetCalendar.transfer();
	}

	/**
	 *  Hilfsfunktion die Geburtstags-Events aus einer Mitarbeiter-Mappe erzeugt
	 */
	var addBirthdayEvents = function(myFile) {
		var bdDate = myFile && myFile.getFieldValue("hrBirthday");
		// Kein Event hinzufügen wenn das Feld Geburtstag nicht gefüllt ist
		if(!bdDate) {
			return;
		}
		// ID, Titel und Datum der Mitarbeiter-Mappe auslesen
		var fileId = myFile.getAutoText("id");
		var title = myFile.getAutoText("%hrFirstName% %hrLastName%");
		var bdStr = util.convertDateToString(bdDate, ".mm.dd").replace(/\./gi, "-");
		var birthdayYear = bdDate.getFullYear();

		// Erzeugt jeweils ein Event für die letzten/nächsten X (yearRange) Jahre
		for(var year = (currentY - rangeY); year <= (currentY + rangeY); year++) {
			var event = {
				id: "event_" + fileId + "_" + year,
				fileId: fileId,
				title: "Geburtstag von: " + title + " (" + (year - birthdayYear) + ")",
				start: year + "-" + bdStr
			};
			events.push(event);
		}
	};

}
Download: [Gadget_CalendarBirthday.js](Gadget_CalendarBirthday.js)


## Skript: hrBirthday mit Werten füllen


```javascript
// Skript um das Feld hrBirthday des Mappentyps ftEmployee
// zufällig mit Geburtstagen zu befüllen
var myHRS, myHit, myFile;

myHRS = new HitResultset("ftEmployee", "", "");

for(myHit = myHRS.first(); myHit; myHit = myHRS.next()) {
	myFile = myHit.getFile();

	myFile.startEdit();
	myFile.setFieldValue("hrBirthday", randomDate());
	myFile.commit();
}

function randomDate() {
	var arr = [
		[1950, 2000], // year
		[0, 11], // month
		[0, 30] // day
	].map(function(a) {
		return parseInt(Math.random() * (a[1] - a[0])) + a[0];
	});
	return new Date(arr[0], arr[1], arr[2], 0, 0, 0);
};
```

// Skript um das Feld hrBirthday des Mappentyps ftEmployee
// zufällig mit Geburtstagen zu befüllen
var myHRS, myHit, myFile;

myHRS = new HitResultset("ftEmployee", "", "");

for(myHit = myHRS.first(); myHit; myHit = myHRS.next()) {
	myFile = myHit.getFile();

	myFile.startEdit();
	myFile.setFieldValue("hrBirthday", randomDate());
	myFile.commit();
}

function randomDate() {
	var arr = [
		[1950, 2000], // year
		[0, 11], // month
		[0, 30] // day
	].map(function(a) {
		return parseInt(Math.random() * (a[1] - a[0])) + a[0];
	});
	return new Date(arr[0], arr[1], arr[2], 0, 0, 0);
};Download: [generate_hrBirthday.js](generate_hrBirthday.js)