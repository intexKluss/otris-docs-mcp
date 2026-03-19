---
title: "Docimport"
source: "https://otris.software/documents/manuals/books/reference-fields/apis/int-docimport.html"
---

# Docimport

Auch über den Docimport können Mappen in DOCUMENTS erstellt und bearbeitet und somit auch Referenzfelder gesetzt werden. Wie für SOAP gilt auch für den Docimport, dass beim Setzen eines Referenzfeldes der Anzeigename *nicht* angegeben werden darf. Auch hier ist die Referenz fehlerhaft, wenn der Anzeigename mit angegeben wird.

Im Folgenden sind Beispiele für XML-Dateien, mit denen über den Docimport die entsprechenden Mappen angelegt werden können.


```javascript
<files>
	<file owner="schreiber" type="Firma">
		<field name="Name">otris</field>
		<field name="FirmenID">1234</field>
	</file>
</files>
```

<files>
	<file owner="schreiber" type="Firma">
		<field name="Name">otris</field>
		<field name="FirmenID">1234</field>
	</file>
</files>
```javascript
<files>
	<file owner="schreiber" type="Rechnung">
		<field name="Kreditor">1234</field>
	</file>
</files>
```

<files>
	<file owner="schreiber" type="Rechnung">
		<field name="Kreditor">1234</field>
	</file>
</files>