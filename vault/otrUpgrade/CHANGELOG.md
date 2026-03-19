---
title: "v4.9.0"
source: "https://otris.software/documents/api/otrUpgrade/CHANGELOG.html"
---

# v4.9.0

- Mit attachDocumentTemplateToFileType() kann nun auch das Register angegeben werden, auf dem die Dokumentenvorlage verfügbar sein soll. (#70126)
- Der Typ FileTypeInfo für die Funktion getFileTypeInformations() wurde korrigiert. Es waren nicht vorhandene Properties und Funktionen definiert. (#70854)


# v4.8.0

- Mit attachGlobalEnumeration() konnte die Beschreibung einer globalen Aufzählung nicht gesetzt werden. (#67501)
- Rückgabetyp von getRegistersFromFileType() war nicht korrekt dokumentiert. (#70053)


# v4.7.3

- Typings für NewPublicFolderSpec und PublicFolderSpec korrigiert. (#68179)
- Dokumentation für setParentOutbar() verbessert. (#69198)


# v4.7.2

- Korrektur beim Setzen von Properties mittels Properties. (68390)
- Kleinere Korrekturen in der Dokumentation. (!614)


# v4.7.1

- Löschen eines Mappentyp-Feldes hat den Änderungszeitstempel am Mappentypen nicht aktualisiert. Infolge wurden beim Mappen-Ändern nicht alle Mappen, die nach dem alten Änderungszeit angelegt wurden, nicht angepasst. (#67431)
- Kleinere Dokumentation-Korrekturen für attachFolder(). (!596)
- Typings-Korrektur für PortalScriptParameterSpec.Pos, was ein number und kein string sein muss. (!598)
- Typings-Korrektur in UpdatePublicFolderSpec: Die beiden Attribute fileTypes und attributes sind optional. (#57969)
- Nummernkreise ließen sich nicht mit dem Startwert 0 anlegen bzw. nicht auf den Startwert 0 setzen. (#29113)
- Typings-Korrektur für FileTypeAccessSpec. Es mussten immer ProfileName und UserLogin angegeben werden, obwohl nur eines von beiden zulässig ist. Betrifft die Funktion attachAccess(). (#67066)
- Typings-Korrekturen bei FullFileTypeSpec und PortalScriptParameterSpec. Properties waren nicht als optional deklariert. (!610)
- Typings- und Doku-Korrektur bei getPropertiesOfPDObject(). (#62752)


# v4.7.0

- FileTypeAccessRightsSpec vollständig definiert.
- Scripte wurden mit use strict; ausgeliefert, was bei Einbindung per #import zu Problemen führen konnte. (#64641)
- Default-Werte für ShowDocAttributes, AllowVersioning und AllowAnnotations waren falsch dokumentiert.
- ES-Target beim Transpilieren auf ES5 zurückgeändert. (#64641)


# v4.6.0

- Neue Funktion hasFileClassProtection(), zum Prüfen, ob ein Mappenklassenschutz auf einem Mappentypen definiertist. (#37732)
- Neue Funktion getAllFieldsOfRegister() zum Abfragen aller Felder eines Registers. (!544)
- Enthält nicht Korrekturen aus v4.5.2.
- Enthält nicht Korrekturen aus v4.5.3.


# v4.5.3

- ES-Target beim Transpilieren auf ES5 zurückgeändert. (#64641)


# v4.5.2

- Scripte wurden mit use strict; ausgeliefert, was bei Einbindung per #import zu Problemen führen konnte. (#64641)


# v4.5.1

- SortOrder war in den Typings für AbstractDocumentsFolder bzw. für PublicFolderSpec und DocumentsFolder nicht als optional markiert, was zu Transpiler-Fehlern führte.


# v4.5.0

- Erweiterung, so dass auch Sprach-Maps für die ergnomischen Bezeichner für Literalen von globalen Aufzählungen angegeben werden können. (#63007)
otrUpgrade.attachGlobalEnumeration({ name: "Beispiel", enumerationItems: [{ name: "Item", ErgonomicNames: { de: "Literal", en: "Item" } }]
});
- Eigenschaften von Aktionen konnten mit attachActionToFileType() nicht gelöscht werden. (#34110)


# v4.4.0

- Neue Funktionen globale Aufzählungen. Diese sollen die Funktionen der PortalScript API nur ergänzen und die Verwendung im Zusammenhang mit otrUpgrade vereinfachen, und nicht die Funktionen der PortalScript API ersetzen. (#62693)
attachGlobalEnumeration()
attachGlobalEnumerationToField()
attachGlobalEnumerationItem()
findGlobalEnumeration()
findGlobalEnumerationOfField()
findPDGlobalEnumeration()
getPDGlobalEnumeration()
getGlobalEnumeration()
attachFieldToFileType() wurde für globale Aufzählungen erweitert Hinweis: attachFileType() unterstützt das Anlegen von globalen Aufzählungen noch nicht.


# v4.3.0

- Erweiterung des Interfaces AbstractPortalScript um die Eigenschaft Encrypted?: ExtendedBoolean. Die Eigenschaft gibt an, ob der Quelltext verschlüsselt ist oder nicht. Diese Eigenschaft ist am besten nur in Kombination mit SourceCode zu verwenden. Die Verwendung der zwei Parameter wird überprüft und als INFO im Log-File ausgegeben. Achtung: Beim Setzen ist folgendes zu beachten und wird von otrUpgrade nicht geprüft:
Encrypted === true: SourceCode muss verschlüsselten Quellcode als Wert erhalten
Encrypted === false: SourceCode muss Quellcode im Klartext als Wert erhalten Empfohlen wird, vorher abzufragen, ob das zu ändernde Script verschlüsselt ist oder nicht.
- Neue Funktion importPortalScript(), zum Importieren eines Scripts aus einer XML-Datei. (#59262)
- Erweiterung von attachPortalScriptToScriptCategory() und removeScriptsFromPortalScriptCategory(), so dass Scriptnamen als String (nur ein Script), als Array und als Set übergeben werden können. (!514)
- Fehlermeldung bei leerem UserexitType bei Feldanlage bzw. Aktualisierung verbessert. (#61387)
- Neue Funktionen zum Verwalten von Outbars (!524):
getSubOutbars()
getOutbars()
getOutbarAccessProfiles()
- FilterFileType fehlte in den Typings bei PublicFolderSpec. (!523)


# v4.2.0

- Neue Funktionen zum Verwalten von PortalScript-Kategorien (#58105):
createPortalScriptCategory()
attachPortalScriptToScriptCategory()
attachScriptCategory()
deleteScriptCategory()
findPortalScriptCategory()
getPortalScriptsOfScriptCategory()
removeScriptsFromPortalScriptCategory()
renamePortalScriptCategory()
- Wurde mit attachFileType() eine Trefferliste mit einem technischen Feld hinzugefügt, kam ein Fehler mit der Meldung "Das Feld '' ist am Mappentyp 'X' nicht bekannt". (!504)


# v4.1.0

- Anpassung des Verhaltens bei Fehlern von Setzen von Properties auf öffentlichen Ordnern per attachFolder() und attachPropertyToObject(). Unter Documents 5 werden die Fehler grundsätzlich nur im Server-Log protokolliert. Unter documents OS wird eine Exception geworfen. Soll dies nicht erfolge, dann kann mit dem neuen globalen Property otrUpgrade_IgnoreFolderSetAttributeError diese Fehler ignoriert werden. Dann werden die Fehler ebenfalls nur im Server-Log protokoliert. Das Property ist auf den Wert true zu setzen:
context.setGlobalAttribute("$otrUpgrade_IgnoreFolderSetAttributeError", "true");
Siehe hierzu auch die Properties-Korrektur aus v4.0.3. (!494, !491)
- Anlegen eines Mappentyps mit Trefferliste per attachFileType() führte zu einem undefined-Fehler. Zudem wurden die Attribute der Trefferliste-Spalten bei der Anlage nicht übernommen. (#59781)
- Korrektur des Datentyps des Rückgabewerts von getFieldsOfFileType(). (!492)


# v4.0.3

- Fehler beim Setzen von Properties an öffentlichen Ordnern (z.B. fehlenden $-Zeichen beim Namen) mit attachFolder() wurden ignoriert. Jetzt werden hier Exceptions geworfen. (!489)
- Neue Hilfsfunktion attachPropertyToObject() zum Setzen von Properties. Die Funktion attachPropertyToPDObject() wurde als veraltet markiert, ist aber noch vorhanden.
- String- und Text-Felder konnten nicht aktualisiert werden, wenn Value auf einen leeren String gesetzt wurde. (#59707)
- Korrektur für die Unterstützung von #import [otrUpgrade]. Analog gilt das auch für die anderen Scripte von otrUpgrade. (#59077)


# v4.0.2

- Property Field.FulltextIndex was als Muss-Property in den Typings definiert. (#59077)


# v4.0.1

- Typen der alten Konstanten wurden zu den neuen Alias-Typen kompatibel gemacht. (#59077)


# v4.0.0

- Anpassung an Encoding-Breaking-Change in documentsOS. (#59127)
- Umstellung auf TypeScript und Bereitstellung von Typings über die Extension. (#59077)
- Eigene Bibliotheksdatei otrUpgrade_FileTypeCategory für Mappentypkategorie-Funktionen. (#59077)
- Korrektur einer Konstanten-Attribute, wie z. B. Scope für benutzerdefinierten Aktinen. Die konnten nicht gesetzt werden.


# v3.1.0

- Modulnamen im Versions-Property sind case-insensitiv. rememberModuleVersion(), findCurrentVersionFromCustomProperty() und getCurrentVersionFromCustomProperty() wurden entsprechend angepasst. Beim Speichern werden bestehende Einträge angepasst. Die genannten Funktionen sind aber nun "deprecated". (!422)


# v3.0.1

- updateScripts-Korrektur zur scriptlib-Umstellung


# v3.0.0

- Umstellung auf scriptlib-Package und Anpassungen für das Admin Center (!419)


# v2.25.0

- Neue Funktion getHitlistsOfFileType() zur Abfrage von Trefferlisten. (!417)
- UserExitType und ExecutionFrequency wurden nicht otrUpgrade exportiert. (!416)


# v2.24.2

- PACKAGE-Script war in otrUpgrade-Script eingebunden, was zu Zirkeln-Fehler bei require() führte (!410))
- Debug-Property an PortalScript dokumentiert (!406)
- Prüfungen für inkorrekte RelativeFieldPosition-Daten fehlten, so dass falsche Werte akzeptiert und verarbeitet wurden (!407)


# v2.24.1

- DE-Name von ArchiveSoftwares.EEX_NATIVE korrigiert (!404)


# v2.24.0

- Neue Funktionen und Konstanten zum Verwalten von globalen Aktionen (!384, !383, !381)
ActionScope
attachAction()
deleteAction()
getAction()
getActionsByNamePattern()
- Neue Funktionen zum Verwalten von Nummernkreisen (!380)
attachNumberRange()
deleteNumberRange()
findNumberRange()
getNumberRange()
- Umstellung auf otr-package (#50639, !363)


# v2.23.0

- Neue Konstanten otrUpgrade.ScriptMode für Modulmodus von Portalscripten (!365)
- Neue Konstante otrUpgrade.ExecutionFrequency für Ausführungshäufigkeit von Portalscripten (!365)
- Erweiterung der Dokumentation zu PortalScriptData (!365)
- Korrekturen des Updates-Prozesses für Subnodule (!374)


# v2.22.0

- Neue Funktion otrUpgrade.setParentOutbar() (#53169)


# v2.21.2

- Korrekturen und Erweiterungen für neuen Update-Prozess (!361)


# v2.21.1

*


# v2.21.0

- Neue Funktion otrUpgrade.getAllActionsOfRegister() (#52025)


# v2.20.2

- Korrekturen für DOCUMENTS 6 (!347)
- Dokumentation für AttachRegisterInfo registriert (!358)


# v2.20.1

- Doppeltes Löschen bei Anlage von Feldern und Nummernkreise korrigiert. (#46591)


# v2.20.0

- Neue Konstanten otrUpgrade.FieldScope.
- Neue Konstante otrUpgrade.DELETE_VALUE.


# v2.19.1

- Doppeltes Löschen bei Anlage von Feldern und PortalScripten korrigiert. (#46591)


# v2.19.0

- Neue Konstante otrUpgrade.TargetArchives.
- Neue Konstanten otrUpgrade.ArchiveSoftwares.
- Erweiterung otrUpgrade.ArchiveServerDescription.


# v2.10.0

- Der Log-Level des otrLoggers wurde an einigen Stellen mit DEBUG überschrieben, was zu Log-Ausgaben führen konnte, obwohl am Property des otrLoggers ein andere Log-Level eingestellt war. (#33416)
- deleteField() löschte Felder nicht, sondern trennte es nur von den dazugehörigen Mappentypen. Dadurch konnten verwaiste Felder in einem Mandanten entstehen. (#32977)
- Kleinere Verbesserungen in Beispielen. (#35101)
- Korrektur in der Fehlerbehandlung bei der Positionierung von Ordnern. (#35101)
- Neue Funktionen findMailTemplate() und getMailTemplate() zum Abfragen von Mailvorlagen an Mappentypen. (#34127)
- Unterstützung von in sich geschlossenen Modul-Updates innerhalb von Lösungen. (#25809)


# v2.9.0

- Die Funktion attachPropertyToFileType() führte zur unvollständigen Aktualisierung des Mappentyp-Caches. (#32406)
- Trefferlisten konnte mit attachHitListToFiletype() nicht gelöscht oder geändert werden, wenn keine Feldliste angegeben war. (#32348)
- Dokumentation für attachOutbar() korrigiert. (#31768)
- Neue Funktion detachFieldFromRegister() zum Entfernen von Mappenfeldern von Registern. (#32364)


# v2.8.0

- Anpassung attachScriptToFolder() an die Dokumentation, so dass der Script-Name mit dem Property Name angegeben werden kann. Das alte Property Script wird weiterhin unterstützt. (#29637)
- Das Umbenennen von Mappentypen und Registern per renameFileType() bzw. renameRegister() war nicht idempotent. (#29369)
- Korrektur bei Verknüpfung eines Registers zur Archivsicht in attachRegisterToFileType(). (#28846)
- Der Wert der Konstante otrUpgrade.FilterStyle.F_EXTENDED Filterstile am Mappentyp war falsch. (#28246)
- attachRegisterToFileType() unterstützt das Released-Attribut nicht. Ferner wurde das Attribut MultiLangLabel nicht vollständig unterstützt. Das Label-Attribut wird aus Gründen der Abwärtskompatibilität weiter unterstützt und darf nicht gleichzeitig mit MultiLangLabel verwendet werden. (#27779)
- attachFieldToFileType() legte ungültige Felder an, wenn Attribute nicht angegeben waren, die auf dem Template-Field gespeichert werden (z. B. Label). Dieser Felder konnten nicht bearbeitet und archiviert werden. (#27684)
- Nummernkreise konnten nicht mit Startwert "0" angelegt werden. (#27417)
- attachActionToFolder() warf im Fehlerfall keine Exception. (#27032)
- Mappen-Links können per otrUpgrade angelegt und bearbeitet werden. Dazu wurden zum einen die Funktionen attachRegisterToFileType() und attachFieldToFileType() erweitert, und zum anderen otrUpgrade um Funktionen Erstellen, Aktualisieren, Löschen und Abfragen von Mappen-Links. Siehe otrUpgrade_FileLink. (#28734)
- Unterstützung von require(). Ferner können nun auch Teilbibliotheken wie otrUpgrade_FileType, otrUpgrade_Register usw. per require() eingebunden werden. (#29421)


# v2.7.0

- attachFieldToFileType() setzte nicht den richtigen Default-Wert bei Checkboxen. (#24263)
- Ergänzung der Dokumentation von attachScriptToFolder(), attachFolder() und attachFileType(). (#26072)
- attachActionToFolder() warf im Fehlerfall keine Exception. (#27032)
- Reihenfolge von Ordner lässt sich per attachFolder() und createFolder() festlegen. (#25228)
- Neue Funktionen zum ein-/ausschalten des E-Mail-Dienstes, abfragen von gesperrten Mappen und Löschen von Arbeitskopien. (#26609)
- Neue Funktion attachPortalScript() zum Anlegen von Portalskripten. (#26508)


# v2.6.1

- attachParamToPortalScript() hat Properties nicht berücksichtigt. (#25341)


# v2.6.0

- attachFileType() aktualisierte nicht die Attribute von bestehenden Mappentypen. (#22989)
- findFileType() ließ interne Iteratoren offen (#22688)
- Mit getRegistersFromFileType() konnten nicht alle Register eines Mappentyps abgefragt werden. (#24341)
- Funktionen löschten Transaktionsobjekte nicht, wenn Exceptions geworfen wurden. Das konnte unter Umständen zum Absturz des DOCUMENTS-Servers führen. (#22801)
- Fehler eines Issue-Skriptes wurden nicht richtig behandelt, was zum Abbruch des Updates-Prozesses führte. (#21379)
- Ausgabe von attachPropertyToFileType() im Fehlerfall war unvollständig. (#21329)
- Optimierung der Anlage der PD-Objekte, so dass alle internen Documents-Constraints geprüft werden. (#21248, #21058, #21709, #17241)
- attachOutbar() aktualisiert nicht die Eigenschaften einer existierenden Outbar. (#23219)
- writeLog() funktionierte auf Linux-Systemen nicht richtig. (#21376)
- Überarbeitung und Ergänzung der Dokumentation. (#20869)
- Neue Funktion attachAccessProfileToRegister() zum Hinzufügen eines Zugriffprofils zu einem Register. (#22943)
- Neue Funktionen, um das Update einer Lösung zu definieren: parseProductVersionFromScript(), getCurrentProductUpdateSteps(), applyIssuesOnCurrentProduct(), getAvailableVersions(), getIssuesByVersion(), getConsideredVersions(). (#22565)
- Neue Funktion setRelativeFieldPosition() zum relativen Setzen der Position eines Feldes an einem Mappentyp. (#22474)
- Die Position eines Feldes lässt sich nun auch bei attachFieldToRegister() angeben. (#22413)
- Mit getArchiveServer() lassen sich jetzt auch EBIS-Stores abfragen. Ferner können mit einem Aufruf Archivserver verschiedener Typen auf einmal abgefragt werden. (#21884)
- Neue Funktion createFolder() zum Anlegen von Ordner, ohne das ein anderer Ordner als Vorlage benötigt wird. (#19757)
- Mittels attachFileType() kann auch die Feldreihenfolge gesetzt oder geändert werden. (#24372)
- Vor Durchführung eines Lösungsupdates wird geprüft, ob das Update-Log geschrieben werden kann. Ist dies nicht möglich, wird das Update nicht durchgeführt. (#24311)
- Erweiterung der Abschlussmeldung, falls wichtige Hinweise während des Updates in das Update-Log geschrieben wurde. (#24310, #22283)
- eue Funktion attachAccess() zum Setzen der Berechtigungen von Benutzern oder Zugriffsprofilen an Mappentypen. (#24303)
- Bis auf die Funktionen für ein Update von Lösungen benötigen alle Funktionen keinen Nutzerkontext mehr. (#24144)
- Mit attachFieldToFileType() kann die Position eines Feldes auf der Mappe oder einem Register geändert werden. (#23019)
- Mit attachFileType() können auch benutzerdefinierte Aktionen einem Mappentyp hinzugefügt werden. (#21466)
- Mit der Funktion attachFileType() können jetzt auch Mappentypen, die einen Mappenklassenschutz haben, angelegt werden. (#21457)
- Mit attachFieldToFileType() können Felder von Registern entfernt werden. (#21250)
- Neue Funktionen zum Hinzufügen/Ändern (attachArchiveServer()) und Ermitteln (findArchiveServer()) eines Archivservers. (#23183)
- Bei attachRegisterToFileType() können mehrere Mappentypen beim Filter angegeben werden. (#21093)
- Neue Funktion attachFolder() zum Anlegen von Ordnern. (#21016)
- Neue Funktion attachActionToRegister() zum Hinzufügen einer Aktion an ein Register. (#20354)
- runUpdate() kann jetzt eine Liste von Skripten mitgegeben werden, die nach dem erfolgreichem Update gelöscht werden sollen. (#19187)


# v2.5.3

- Das Löschen von Eigenschaften an Registern funktionierte nicht richtig. (#21376)


# v2.5.2

- writeLog() funktionierte auf Linux-Systemen nicht richtig. (#21376)
- Fehler eines Issue-Skriptes wurden nicht richtig behandelt, was zum Abbruch des Updates-Prozesses führte. (#21379)


# v2.5.1

- Korrektur von globalen Importen, die zu Folgefehler führen können, wenn otrUpgrade importiert wird. (#20590)


# v2.5.0

- deleteFileType() warf eine Exception, wenn der zu löschende Mappentyp nicht vorhanden war. Neue Funktion findFileType(), die null zurückgibt, wenn der Mappentyp nicht vorhanden ist. (#18902)
- Verschiedene Detailverbesserungen in der Dokumentation. (#19841)
- Bei attachActionToFolder() wurde das Label bei einer existierenden Aktion mit "undefined" überschrieben, wenn es im Datenobjekt nicht angegeben war. (#18390)
- Die Funktion attachOutbar() gab die Outbar direkt frei. Spezifikation im Datenobjekt wird berücksichtigt. (#19628)
- Update lässt sich nicht wiederholen, wenn Fehler im Post-Handling auftrat. (#19182)
- Die Funktion attachFileType() versuchte, den Mappentypen zu erzeugen. Existiert dieser bereits, wird ein Fehler geworfen. (#20208)
- Der LogLevel wird beim Durchführen des Updates immer auf "DEBUG" gesetzt. Anschließend wieder auf "ERROR". (#19588)
- Die Eigenschaften "UserexitTooltip" und "UserexitFieldReadonly" werden bei updateField () jetzt berücksichtigt. (#19200)


# v2.4.0

- Funktion updateToLatestVersion() warf keine Exception, weswegen Fehler beim Update nicht ausgegeben wurden. (#18708)
- Neue Funktionen deleteProtectedFileFieldOnFileType() und setProtectedFileFieldOnFileType() zum Bearbeiten geschützte Felder (#18184)


# v2.3.0

- Korrektur in setFileClassProtection(). Es wurde eine interne Funktion falsch aufgerufen, was zu einer Exception führte. (#17647)
- Korrektur einer fehlerhaften Transkodierung von "ß" in UTF-8. (#17543)
- Neue Funktions isFileTypeReleased() zum Abfragen, ob ein Mappentyp freigegeben ist. (#17813)
- Neue Funktion getRegisterPosition() zum Ermitteln der Position eines Registers. (#17780)
- Die Funktion updateField() unterstützt jetzt das Attribute FulltextIndex. (#17508)
- Neue Funktion setProtectedFileFieldOnFileType() zum Setzen des Mappenklassenschutz verfügbar. (#17303)


# v2.2.0

- Anpassungen an geänderte writeLog-Funktion. (#17645)


# v2.1.0

- Neue Funktion isFieldAvailable() hinzugefügt. Prüft, ob ein Feld an einem Mappentyp verfügbar ist. (#17349)


# v2.0.2

- Korrektur eines Fehlers in Update-Ausführung, der zum vorzeitigen Abbruch führte. (#17310)


# v2.0.1

- Korrektur von attachActionToFileType(), so dass Werte an dem PD-Objekt des Mappentyps nur gesetzt werden, wenn diese im übergebenen Datenobjekt auch angegeben sind. (#17227)
- Fortführung der Umstellungen auf Nutzung von Transaktionsobjekte. (#17163)
- Korrektur der Mappentypabfrage in attachHitListToFiletype(), so dass Trefferlisten richtig an Mappentyp angehangen werden. (#17120)