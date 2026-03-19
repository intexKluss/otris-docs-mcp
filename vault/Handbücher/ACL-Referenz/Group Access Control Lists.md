---
title: "Group Access Control Lists"
source: "https://otris.software/documents/manuals/books/acl-reference/gacl.html"
---

# Group Access Control Lists

Analog zu den oben vorgestellten ACL gibt es eine weitere Abwandlung des Mappenklassenschutz-Konzeptes – die GACL. Während die ACL sich auf einzelne Benutzer beschränkt, ist die GACL für Zugriffsprofile geeignet. Wenn Sie eine GACL auf einem Mappentyp hinterlegen und Mappen dieses Typs zum Beispiel in öffentlichen Ordnern oder im Archiv ablegen, können ausschließlich die Benutzer auf diese Mappen zugreifen, die beim Anlegen bzw. Verarbeiten der Mappen für die GACL ausgewählt worden sind. Realisieren können Sie dies am bequemsten über eine Doppelauswahlliste. Alle anderen Benutzer haben keinerlei Zugriffsrechte auf diese Mappen.

Um GACL für den Mappenklassenschutz einzusetzen, gehen Sie beispielsweise wie folgt vor:

1. Erzeugen Sie auf dem vorgesehenen (EE.i Archiv-) Mappentyp ein Feld vom Typ Doppelauswahlliste. Als Aufzählungswerte geben Sie den Autotext %accessProfile% ein. So werden alle im System (am Mandanten) angelegten Zugriffsprofile im linken Teil der Doppelauswahlliste dargestellt und können später ausgewählt werden.
2. Damit der Benutzer eine Mappe erstellen und auch Zugriff auf eine von ihm erstellte Mappe erhält, ist es dann zwingend notwendig, als Wert/Voreinstellung den Autotext %accessProfilesGACLList% festzulegen. Mit Hilfe dieses Autotextes werden die Zugriffsprofile des erzeugenden Users automatisch in der Doppelauswahlliste ausgewählt.
3. Definieren Sie nun als Mappenklassenschutz das soeben angelegte Feld und übernehmen Sie Ihre Änderung.
4. Erzeugen Sie auf dem nun erscheinenden Reiter „Mappenklassenschutz“ ein neues Mappenklassenschutz-Profil mit dem Klassennamen „GACL“. Diese Bezeichnung ist für GACL zwingend vorgeschrieben. Der Feldwert dieser GACL muss dann %accessProfilesGACLFilter% lauten. Dadurch haben nur die Benutzer Zugriff auf diese Mappen, denen ein Zugriffsprofil zugeordnet ist, das auch in der Doppelauswahlliste ausgewählt wurde.
5. Speichern Sie Ihre Änderungen am Mappentyp.
6. Die so konfigurierte GACL wirkt sich nun auf öffentlichen Ordnern und beim Suchen dahingehend aus, dass nur noch in der GACL als berechtigt ausgewiesene Benutzer die Mappen finden und aufrufen können. Für alle anderen Benutzer scheint es, als würden diese Mappen nicht existieren.