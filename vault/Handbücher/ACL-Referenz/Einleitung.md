---
title: "Einleitung ACL"
source: "https://otris.software/documents/manuals/books/acl-reference/acl-intro.html"
---

# Einleitung ACL

Access Control Listen (ACLs) oder Group Access Control Listen (GACLs) sind Abwandlungen des [Mappenklassenschutz](/intro-file.md)-Konzeptes. Sie erlauben die Definition der Sichtbarkeit (Suchbarkeit) einer Mappe in Abhängigkeit vom angemeldeten Benutzer oder dessen Gruppenzugehörigkeit (Zugriffsprofil). Anders als bei der globalen Rechtedefinition am Mappentyp, die dann für alle Mappen dieses Mappentyps gilt, bezieht sich das Sichtbarkeitsrecht bei (G)ACLs auf einzelne Mappen. Dafür werden die berechtigten Benutzer und Zugriffsprofile in einem Indexfeld hinterlegt.

Eine Definition von Mappenklassenschutz dieser Art ist möglich an:

- Mappentypen
- Archivtypen der EE.i unter Verwendung des XML-Servers

Bei ACLs werden die Login-Namen der berechtigten Benutzer bzw. bei GACLs die Zugriffsprofil-Namen der berechtigten Gruppen in ein Indexfeld geschrieben. Nur berechtigte Benutzer können eine entsprechende Mappe suchen oder in einem Ordner sehen.


### Hinweise

- Bei Verwendung einer EE.x native Anbindung (per XML-Server) muss der in der EE.x vorhandene Mappenklassenschutz verwendet werden. GACLs können jedoch über die EBIS-Store-Anbindung unter Verwendung des adaptiven Schemas verwendet werden.
- Der Zugriffschutz durch ACLs und GACLs wird wirkungslos bei Direktzugriff auf Archive mit anderer Clientsoftware als DOCUMENTS und durch den Zugriff über ein ArchiveConnection-Objekt im PortalScripting.