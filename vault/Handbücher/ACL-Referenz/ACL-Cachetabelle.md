---
title: "Die ACL-Cachetabelle"
source: "https://otris.software/documents/manuals/books/acl-reference/aclcache.html"
---

# Die ACL-Cachetabelle

Seit **Portalversion 6.0d** besteht die Möglichkeit, den Feldinhalt eines ACL- oder GACL-Feldes zusätzlich in einer speziellen Datenbanktabelle zu speichern. Die Liste der berechtigten Benutzer und Gruppen wird dabei zerlegt und jeder einzelne Eintrag in einem neuen Datensatz gespeichert.

Die Rechteprüfung bei Suchoperationen in dem betreffenden Mappentyp wird mit Hilfe dieser Cachetabelle deutlich schneller. Das Speichern von Mappen dauert dafür ein wenig länger, was in der Praxis erst spürbar wird, wenn eine ganze Serie von Mappen in einem Durchlauf neu angelegt wird.

Für Archive kann die Cachetabelle nicht benutzt werden. Um einen Mappentyp für die Verwendung der Cachetabelle zu konfigurieren, muss man bei diesem die Eigenschaft ACLCacheDiv setzen. Als Wert ist die Zeichenfolge anzugeben, mit der die einzelnen Einträge in dem Schutzfeld voneinander getrennt sind. Im Normalfall ist hier also der Autotext %CRLF% für einen Zeilenumbruch anzugeben.

Um sicherzustellen, dass beim Reaktivieren von Mappen aus Altarchiven alle Feldinhalte sauber zerlegt werden, um bestehende Leserechte nicht zu verändern, muss für den jeweiligen Mappentyp zusätzlich die Eigenschaft ACLCacheDiv2 gesetzt werden. Als Wert ist im Normalfall der Autotext %LF% anzugeben.

Sofern der Mappentyp gerade neu angelegt wurde, ist hiermit schon alles Notwendige getan. Wenn jedoch bereits Mappen des Typs vorhanden sind, werden sie nach der Aktivierung der Cachetabelle zunächst von keiner Suchoperation mehr gefunden. Dasselbe passiert, wenn Mappen anhand einer Portaldatensicherung wiederhergestellt worden sind.

In diesen Fällen kann der Inhalt der Cachetabelle mit Hilfe einer Wartungsoperation aktualisiert werden. Sie heißt BuildACLCache und arbeitet stets mappentypweise. Um sie zu starten, müssen Sie im Hauptfenster den Menüpunkt Administration/Wartungsoperation aufrufen und als Wartungskommando BuildACLCache <Leerzeichen> <Mappentypname> eingeben.

Die Wartungoperation kann nicht für mehrere Mappentypen auf einmal ausgeführt werden und erst recht nicht mandantenübergreifend, weil pro Mandant eine Cachetabelle angelegt wird. Am Ende der Operation wird lediglich ein numerischer Statuscode ausgegeben, der folgendermaßen zu interpretieren ist.

0 = Alles in Ordnung

-1 = Der Mappentypname ist unbekannt.

-2 = Die Cachetabelle konnte nicht fehlerfrei angelegt werden. (Berechtigungsproblem, nicht genügend freier Festplattenplatz oder inkompatible Datenbanksoftware) Für einen neuen Versuch muss der Portalserver neu gestartet werden.

3 = Auf dem Mappentyp ist gegenwärtig keine (G)ACL konfiguriert. Sofern das früher einmal der Fall war und die Cachetabelle noch alte Daten für den Mappentyp enthielt, sind sie jetzt gelöscht.

4 = Die Cachetabelle ist für den Mappentyp nicht aktiviert (*ACLCacheDiv* ist nicht gesetzt oder leer). Falls die Cachetabelle alte Daten für den Mappentyp enthielt, dann sind sie jetzt gelöscht.

-5 = Bei der Operation sind unerwartete SQL-Fehler aufgetreten. Details zu den Fehlern sind dem Serverlog zu entnehmen. Dieser Status wird erst ab Version 5.0h gemeldet. Ältere Versionen erzeugen in dieser Situation nur Logmeldungen und belassen den Status bei 0.