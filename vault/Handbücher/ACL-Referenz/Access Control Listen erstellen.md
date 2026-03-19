---
title: "Access Control Listen anlegen"
source: "https://otris.software/documents/manuals/books/acl-reference/createacl.html"
---

# Access Control Listen anlegen

Die Einsetzung einer ACL für den Mappenklassenschutz ist über ein Feld vom Typ Doppelauswahlliste in der Mappe realisiert. Im Folgenden werden die einzelnen Schritte zur Anlegung einer ACL aufgelistet.

1. Erzeugen Sie auf dem Mappentyp bzw. auf dem Archivmappentyp ein Feld z.B. mit dem Namen „Berechtigt“, welches Sie als Doppelauswahlliste definieren. Als Aufzählungswerte geben Sie den Autotext %login% ein. So werden alle im System (am Mandanten) angelegten Benutzer im linken Teil der Doppelauswahlliste dargestellt und können später ausgewählt werden.
2. Der Ersteller der Mappe muss bei der Neuanlage der Mappe schon zwingend als Berechtigter eingetragen werden, damit er diese initial bearbeiten kann. Daher ist der Vorgabewert (Wert/Voreinstellung) %userLogin% bei dem Feld „Berechtigt“ festzulegen.


![Doppelauswahlliste „Berechtigt“ mit Vorgabenwerten](./img/image2.png)

Abb. 1 - Doppelauswahlliste „Berechtigt“ mit Vorgabenwerten

1. Definieren Sie nun als Mappenklassenschutz das soeben angelegte Feld „Berechtigt“ und übernehmen Sie Ihre Änderung.


![Mappenklassenschutz auf das Feld „Berechtigt“ gesetzt](./img/image3.png)

Abb. 2 - Mappenklassenschutz auf das Feld „Berechtigt“ gesetzt

1. Erzeugen Sie auf dem nun erscheinenden Reiter „Mappenklassenschutz“ ein neues Mappenklassenschutz-Profil mit dem Klassennamen „ACL“. Diese Bezeichnung ist für ACLs zwingend vorgeschrieben. Der Feldwert dieser ACL muss dann %userLogin% lauten. Die Definition eines Zugriffsprofils entfällt hier.


![Neue ACL mit Feldwert %userLogin%](./img/image4.png)

Abb. 3 - Neue ACL mit Feldwert %userLogin%

1. Speichern Sie Ihre Änderungen am Mappentyp.

Die so konfigurierte ACL wirkt sich nun auf öffentlichen Ordnern und beim Suchen dahingehend aus, dass nur noch in der ACL als berechtigt ausgewiesene Benutzer die Mappen finden und aufrufen können. Für alle anderen Benutzer scheint es, als würden diese Mappen nicht existieren.