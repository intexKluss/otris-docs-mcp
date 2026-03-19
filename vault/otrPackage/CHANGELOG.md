---
title: "Changelog"
source: "https://otris.software/documents/api/otrpackage/CHANGELOG.html"
---

# Changelog


## 0.7.5

- Konfigurationseinstellung im PACKAGE-Script konnten zu Fehlern bei der Installation über das Admin-Center führen. (#72464)


## v0.7.4

- In einigen Fällen sprang der Fortschrittsbalken bei der Installation sofort oder zwischendurch auf 100 %. (#67334)


## v0.7.3

- Korrektur beim Aufräumen der temporären Eigenschaften nach der Ausführung von Scriptlib-Updates. (!420)


## v0.7.2

- Korrektur für Anzeige in der Paketliste des Admin-Centers. (#68998)


## v0.7.1

- Das Fehlschlagen der Installationsvoraussetzungen (prerequisites) wurde nicht korrekt behandelt. (#71060)
- Bereits installierte Pakete wurden im Ausführungsplan bei einer Paketinstallation angezeigt. (#70920)
- Beim Serverstart wurden einige Funktionen im Serverstart-Callback von otrPackage ohne Nutzerkontext ausgeführt, was zu Fehlern führte. (#71412)


## v0.7.0

- Versionsgetreue Installation von Paketen. Damit werden für ein ADP bzw. die Lösung die Versionen der Lösung in exakt der Reihenfolge installiert, wie sie veröffentlicht wurden. Dies setzt voraus
dass am Mandanten die Eigenschaft $PACKAGE_INSTALL_PINNED_VERSION_ENABLED auf den Wert true gesetzt ist. Alternativ kann auch eine gleichnamige Umgebungsvariable gesetzt werden.
Die SDPs der Lösungsversionen mit ihren Ausführungsplänen gebaut wurden. Fehlen die Ausführungsplänen in den SDPs wird normal wie bisher installiert. (#67952)
- Der Backport wurden vereinfacht. In ein ADP kann nun eine Zip-Datei backport.zip gelegt werden. Ist diese vorhanden, wird diese nach entpacken der SDPs aus dem ADP entpackt und die darin enthaltenen Dateien in Zielordner der SDPs kopiert. Dadurch werden die XML-Dateien aus den XMLs überschrieben, bevor diese in den Mandanten importiert werden. Die Namen der Ordner in der backport.zip müssen dabei den Namen und der Version des jeweiligen SPDs entsprechen, deren XML-Dateien überschrieben werden sollen. (#64558)
- Post-Import-Action-Scripte in hochgeladenen XML-Dateien werden nun ausgeführt. Sowohl beim Hochladen von XMLs über die Paketverwaltung des Admin-Centers, als auch über die reguläre Installation aus einem SDP. (#67472)
- Neue Funktion executeUpdateScriptIfMain(), die in Update-Scripts verwendet werden kann, um Update-Scripte direkt auszuführen. (#54214)
- Die Dauer der einzelnen Installationsschritte und die Gesamtdauer der Installation werden im Installationsbericht im Property duration als Millisekunden erfasst. (#62220)


## v0.6.0

- Hochgeladene Installationsdateien werden als Custom-Property-Blobs temporär gespeichert. Falls während der Installation die zugrunde liegende VM bzw. Container neu gestartet wird und der Ordner mit den temporären Dateien gelöscht wird, werden diese Dateien wieder automatisch aus dem Custom-Property-Blobs wieder zur Verfügung gestellt. (#67575)


## v0.5.1

- Admin-Center berücksichtigte nicht den Status für den Server-Absturz. Die Installation konnte daher nicht fortgesetzt werden. (#63473)


## v0.5.0

- Auswertung "vorgefertigter" Ausführungspläne, die in SDP mit ausgeliefert werden können (siehe otr-build v2.43.0). Diese werden bei der Installation eines ADPs berücksichtitigt, so dass die einzelnen Versionen der Lösung, die in dem ADP enthalten ist, in der genau Reihenfolge installiert wird, wie sie zum Zeitpunkt der Freigabe in den vorgefertigen Ausführungsplänen definiert wurden. Das schließt die Versionen der Abhängigkeiten mit ein. (#59962)
- Überarbeitung der Abhängigkeitsbaum-Algorithmus, so dass nicht mehr bei jeder neuen Abhängigkeit der gesamte Abhängigkeitsbaum durchlaufen wird. (#66553)
- SDPs konnten nicht über das Admin Center installiert werden. (#66013)
- XML-Exporte können nun über die Paketverwaltung im Admin Center importiert werden. Deren Import wird ebenfalls in den Installationsberichten vermerkt. (#65928)
- Admin-Center-Module werden von otrPackage nicht aktualisiert. (#64057)
- Mappen-Ändern war nach Serverabsturz nicht vollständig fortführbar. (#63473)


## v0.4.9

- Korrektur beim Aufbau des Abhängigkeitsbaum. In einigen Fällen wurden Abhängigkeiten mehrfach in den Abhängigkeitsbaum eingetragen, was die Installation verlangsamte. (#66553)


## v0.4.8

- Funktionen getPreviousVersionName() und isPreviousVersionAvailable() lieferten bei ADPs mit mehreren Versionen nicht mehr die Angabe von vor Beginn der Installation. (#64675)
- Korrektur der Typings für den Kontext von execute() und postHandling() der Update-Scripte. (#64675)


## v0.4.7

- Dokumentierten Default-Verhalten des keepUpdateScripts-Flag, so dass es mit dem fehlerhaften Verhalten vor v0.4.6 übereinstimmt. Per Default werden Update-Scripte nach der Installation nicht gelöscht. (#64370)


## v0.4.6

- Ergänzung der Korrektur für den Status "running" für Korrektur aus v0.4.5. (#64004)
- Update-Scripte wurden nach erfolgreicher Installation nicht gelöscht, auch wenn dies konfiguriert war. (#64370)


## v0.4.5

- Der Fortschrittsbalken erzeugte Fehlermeldungen im Server-Log, wenn noch kein Fortschritt protokolliert wurde. Die Funktionalität des Fortschrittsbalkens war dadurch aber nicht beeinträchtigt. (#64004)


## v0.4.4

- Fehler beim Entpacken von ADP/SPD-Paketen wurden verschluckt.
- Wurde eine neuere Version einer Scriptlib-Bibliothek in einem Mandanten installiert, so wurde immer die ältere Version aus dem Scriptlib-Ordner installiert. (#59988)


## v0.4.3

- Fortsetzen fehlgeschlagener Installationen im Admin-Center. (#62777)


## v0.4.2

- Korrekturen in den Sprachproperties. (#62777)


## v0.4.1

- Korrekturen im Admin-Center, so dass fehlende Datumswerte in Installationsberichten keine Fehler auslösen. (#62777)


## v0.4.0

- Installationsstatus war nicht sofort "running", nach dem eine Installation gestartet wurde. Das erfolgte erst, nachdem der Listener aufgerufen wurde. Für diesen Zweck wurden interne API-Funktionen ergänzt. (#62777)
initInstallationProgress()
setInstallationProgress()
- Englische Sprachproperties für das Admin-Center und verschiedene, kleinere Verbesserung der Integration selbst. (#62777)


## v0.3.1

- Kleinere Korrekturen der Admin-Center-Integration. (#62777)


## v0.3.0

- Integration in das Admin-Center von documentsOS, so dass ADP-Pakete direkt aus dem Admin-Center installiert werden können. Die bisherigen Wizard sind damit veraltet und werden nicht mehr weitergepflegt. In zukünfigen Version werden die Scripte auch entfernt. (#62777)
- Neue API-Funktionen, um Installationsstatus und -berichte abzufragen (#62884):
getInstallationReports()
getInstallationReportByIndex()
findInstallationReport()
findCurrentInstallation()
- Neue API-Funktionen zum Steuern des Installationsprozesses (#62777):
abortInstallation()
augmentExecutionPlanWithConfigValues()
continueInstallation()
findErrorInExecutionPlan()
getConfigParameter()
getConfigValueKey()
getInstallationStatus()
- Mandant wird während der Installation nur noch dann neugeladen, wenn mit einer XML Custom Properties importiert wurden. Das Neuladen setzt die Sprachproperties zurück, wodurch die neu geladen werden. Das bremste Funktionen, die auf die Sprachproperties während er Installation zugreifen. (#63294)
- Datumswerte werden in Installationsberichten und Versionshistorie einheitlich in im Format ISO 8601 gespeichert. Alte Einträge werden beim ersten Serverneustart nach dem Update auf das ISO-8601-Format migriert. (#62784)
- Mappen-Ändern wurde für globale Update-Skripte nicht ausgeführt. (#62589)
- Fehler im Ausführungsplan (bei der Installation) werden als Exception geworfen. (#62053)


## v0.2.0

- Installation von Modulen wurde für Cloud/Komandozeile vereinheitlicht. (#57510)
- Neue Funktion getExecutionPlanAndDependenciesFromADP(), um den Ausführungsplan eines Moduls zu ermitteln. Dazu wird auch der 'minimale' Abhängigkeitsbaum erstellt. (#57510)
- Neue Funktion deployLocalADP(). Ermöglicht das Deployen einen Module mit Hilfe der Pfadeingabe des .adp-Pakets auf dem System des Benutzer/des Service. (#57510)
- Neue Funktion getAllOtrPackageProperties(): Gibt alle Eigenschaften, die während einer Modul-Installation am Mandant hinterlegt wurden (History, Errors, ...) zurück. (#57510)
- Neue Funktion otrPackageUtils.isScriptLibModule(): Ermöglicht die Suche in den ScriptLibs nach der eingegebene Scriptname. Wenn diese gefunden wird, gibt die Funktion true zurück, sonst false. Die Suche erfolgt mittels otris.tools.getScriptNamesFromMapFiles. (#57510)
- Stürzt während der Installations eines Pakets der Server ab, so wird nun die Installation an der Stelle forgesetzt. Bisher wurde von vorne begonnen. (#60320)
- Wurde die Paket-Deklaration per require() eingebunden, funktionierten nicht alle Funktionen, wenn dabei ein Destructive Assignment verwendet wurde (const { isActive } = require("Example_PACKAGE");). (!147)
- Update Center aus AdditionalSetttings-Menü entfernt, da nur ein Prototyp. (!167)
- Allgemeine Verbesserung der Handhabung von Server-Abstürzen während der Installation. (#59267)
- Allgemeine Verbesserung beim Wiederaufsetzen der Installation nach einem Abbruch durch einen Fehler. (#59267)
- Automatische Prüfung, ob die verwendete Version von Scriptlib-Modulen in einem Mandanten jeweils mit der Version übereinstimmt, die mit der verwendeten Serverversion ausgeliefert wurde. Ist das nicht der Fall, wird bei der Installation eines ADP eine Warnung in das Server-Log geschrieben. (#60321)


## v0.1.36

- Wurde die Paket-Deklaration per require() eingebunden, funktionierten nicht alle Funktionen, wenn dabei ein Destructive Assignment verwendet wurde (const { isActive } = require("Example_PACKAGE");). (#60363)


## v0.1.36

- Wurde die Paket-Deklaration per require() eingebunden, funktionierten nicht alle Funktionen, wenn dabei ein Destructive Assignment verwendet wurde (const { isActive } = require("Example_PACKAGE");). (#60363)


## v0.1.35

- Neues Property submitFileChangeMode in der Paketdeklaration, welches steuert, wann Mappenändern und damit die Post-Handlings ausgeführt werden. (#61954) Unterstützt werden die Modi:
local: Jeweils nach Installations einer Version eines Pakets (Pro SDP)
global: Gebündelt nach Installation aller Versionen aller Pakete (Einmal für das gesamte ADP) Durch setzen der globalen Documents-Eigenschaft $packageSubmitFileChangeMode kann diese Einstellung in Paketen überschrieben werden.


## v0.1.34

- Das Script "otrPackageManager" wird ab 5.0i HF7 bzw. 6.0.2 automatisch beim Serverstart aus dem Mandanten gelöscht, wenn vorhanden. (#62058)


## v0.1.33

Technisches Release aufgrund von Problemem mit otr-build bzw. dem
otrisbook.


## v0.1.32

- Beim Installieren in der Cloud wurden Fehler bei der Installation nicht an das Cloud Control weitergegeben. (#62053)
- Bei Neustart einer fehlgeschlagenen Installation in der Cloud schlug mit einem Fehler fehl. (#62053)
- Das Script "otrPkgDistributionInCloud" wird ab 5.0i HF7 bzw. 6.0.2 automatisch beim Serverstart aus dem Mandanten gelöscht, wenn vorhanden. (#62058)


## v0.1.31

- Filterung bereits installierter Versionen korrigiert. Es wurde nicht die Semver-Sortierung berücksichtigt, so dass z. B. v3.7.0 als neuer als v3.10.0 angesehen wurde. Das betraf ebenso die Erzeugung der initialen Versionshistorie, wodurch dann falsche Versionen darin enthalten waren. (#61573)
- Entfernung unnötiger Log-Ausgaben. Die Log-Datein wurde bei umfangreichen Paketen sonst zu groß.


## v0.1.30

- Allow-Client-Definitionen für Script-Ausführung im Web ergänzt.


## v0.1.29

- Bestimmung der neusten Version eines SDPs bei der Installation korrigiert. Bisher konntne dadurch nur Patch-Version bis x.y.9 installiert werden. x.y.10 usw. wurden ignoriert. (#60815)


## v0.1.28

- Ermittelte Abhängigkeiten werden im Custom Property PackageDependency zwischengespeichert. (#59989)


## v0.1.27

- roles in Paket-Deklaration sind auch für Basic-Pakete erlaubt. (!136)
- Optimierung beim Auslesen des Modul-Properties. (!137)


## v0.1.26

- configurationType in der Paket-Deklaration zu type mit den folgenden Werten umbenannt (#60102):
basic: Standard-Paket, die nicht im Admin-Center eingebunden sind
extension: Paket, das in das Admin-Center eingebunden werden soll


## v0.1.25

- Erweiterung der Paket-Deklaration um Eigenschaften und Funktionen, um das Paket in das Admin-Center einzubinden. Alle Funktionen sind optional. Im Fall von isActivate, activate und deactivate gibt es Default-Implementierungen. (#59796)
module.exports = require("otrPackage").declarePackage({ name: "example", version: "1.0.0", configurationType: "none" | "tile", /* tile = Kachel im Admin-Center */ isActive: () => { /* Abfrage, ob Paket aktiv */ }, activate: (options) => { /* Aktivierung des Pakets */ }, deactivate: (options) => { /* Deaktivierung des Pakets */ }, actions: () => { /* Abfrage der Aktionen */ }, callAction: (name) => { /* Aufruf einer Aktion */ }, roles: () => { /* Abfrage der Rollen des Pakets */ }
});
- Rollback-Mechanismus für PACKAGE-Scripte. Tritt beim Importieren der PACKAGE-Scripte ein Fehler auf, weil z. B. die prerequisites nicht erfüllt sind, werden alle Scripte der Kategorie init, und damit min. alle PACKAGE-Scripte wiederhergestellt. Der Mandant ist danach wieder im Originalzustand. (#59208)


## v0.1.24

- Erweiterung der Paket-Deklaration um eine Funktion zum Prüfen von Voraussetzungen. Die Funktion wird direkt nach dem Import des Package-Deployment-Descriptors ausgeführt. Wirft diese eine Exception oder liefert einen Array mit Strings (Fehlermeldungen) zurück, wird die Installation sofort abgebrochen, und die Fehlermeldungen ausgegeben. (#59207)
module.exports = require("otrPackage").declarePackage({ name: "example", version: "1.0.0", prerequisites: () => { const unfulfilled = []; if (!context.hasPEMModule(context.PEM_MODULE_GADGETS)) { unfulfilled.push("Gadget license is missing"); } if (!context.hasPEMModule(context.PEM_MODULE_DROP)) { unfulfilled.push("pf:MISSING_DROP_LICENSE"); } // ... return unfulfilled;
}
});
- Bei Aktualisierungen durch das Auto-Start-Script des Servers wird der Package-Admin-Nutzer nicht mehr angelegt. Fehlt dieser, es sollen aber Pakete aktualisiert werden, wird nun eine Exception geworfen. (#58745)


## v0.1.23

- Neue Funktionen am Package-Context (#58025):
getPreviousVersionName(): Liefert die Versionsnummer der aktuell installierten Version des aktuellen Pakets zurück.
isPrewviousVersionAvailable(): true, wenn bereits eine Vorgängerversion des aktuellen Pakets installiert wurde.
- Der Rückgabewert der execute- und der postHandling-Funktion eines Update-Scripts ist nun optional. Er kann zudem verwendet werden, um Warnungen in den Installationsbericht einzufügen. (#56147, #58014)
- Korrektur bei der Installation eines ADPs in der Cloud. (#58007)
- Beim Entpacken von SPDs und ADPs wurde der Fehlercode nicht ausgewertet, so dass Fehler beim Entpacken unbemerkt blieben. (#57954)
- Update-Scripte mit Punkt im Namen und Dateierweiterung wie script.install.js wurden nicht ausgeführt. (#56560)
- Korrektur bei der Installation eines ADP in der Cloud. (#58007)
- Berücksichtigung des Breaking Change beim Default-Zeichensatz der File-Klasse im Scripting in Documents 6, weswegen XML-Importe kaputt gehen konnte, wenn die XML Zeichen enthielt, die vom Default-Zeichensatz des unterliegenden Betriebssystems nich unterstützt wurden. Betraf nur Windows. (#58527)
- Nach dem Import einer XML wird automatisch der Mandant neu geladen, so dass die verschiedenen Caches zurückgesetzt werden. (#58753)
- ADPs von Projekten mit Leerzeichen im Namen können nicht installiert werden. (#56365)
- Wird eine Update-XML für einen Mappentyp während der Installation importiert, dann wird der Mappentyp automatisch im submitFileChanges eingetragen. (#56153)
- Für Zielversionen kann die benötigte Serverversion im Package-Script definiert werden:
latestServerVersions: [{ needsServerVersion: 2501, version: "1.0.0"
}, { needsServerVersion: 2530, version: "1.1.0"
}]
Hier benötigt Version v1.0.0 die Serverversion 2501 oder höher, Version v1.1.0 Serverversion 2530 oder höher. Wird v1.1.0 z. B. auf einer 2500 eingespielt, dann wird bei Beginn der Installation ein Fehler geworfen. (#54897)
- Importe großer XML-Dateien konnten zu Abbrüchen der Installation führen. (#54756)
- Das automatische Löschen des Update-Scripte kann durch den neuen Schalter keepUpdateScripts im Package-Script deaktiviert werden. (#54695)
- Im Package-Script kann nun eine Sperrliste für Scripte im Mandanten definiert werden. Ist die Serverversion gleich oder höher als angegeben, wird das Script bei der Aktualisierung automatisch gelöscht. (#54491) Im Folgenden wird das Script util.otrPerfmon nur dann gelöscht, wenn es min. der Server min. eine 2322 ist. Andernfalls nicht:
scriptBlacklist: [{ sinceServerVersion: "2322", scriptBlacklist: [ "util.otrPerfmon" ]
}, { app_version: "4.0.1", scriptBlacklist: []
}]
- Die Sperrliste in der Paketdeklaration (blackListScripts) hatte sich geändert und die Abwärtskompatibilität gebrochen. Diese wurde wieder hergestellt. (#58208)
- ADP-Installation schlug kann wegen eines fehlenden incVersion fehlschlagen, wenn die erweiterte Angabe der Update-Scripte verwendet wurde. (#54292)


## v0.1.22

- Für Zielversionen kann die benötigte Serverversion im Package-Script definiert werden (#54897): latestServerVersions: [{ needsServerVersion: 2501, version: "1.0.0" }, { needsServerVersion: 2530, version: "1.1.0" }]
Hier benötigt Version v1.0.0 die Serverversion 2501 oder höher, Version v1.1.0 Serverversion 2530 oder höher. Wird v1.1.0 z. B. auf einer 2500 eingespielt, dann wird bei Beginn der Installation ein Fehler geworfen.
- Importe großer XML-Dateien konnten zu Abbrüchen der Installation führen. (#54756)
- Das automatische Löschen des Update-Scripte kann durch den neuen Schalter keepUpdateScripts im Package-Script deaktiviert werden. (#54695)
- Im Package-Script kann nun eine Sperrliste für Scripte im Mandanten definiert werden. Ist die Serverversion gleich oder höher als angegeben, wird das Script bei der Aktualisierung automatisch gelöscht. (#54491) Im Folgenden wird das Script util.otrPerfmon nur dann gelöscht, wenn es min. der Server min. eine 2322 ist. Andernfalls nicht:
scriptBlacklist: [{ sinceServerVersion: "2322", scriptBlacklist: [ "util.otrPerfmon" ]
}, { app_version: "4.0.1", scriptBlacklist: []
}]
- Wird eine Update-XML für einen Mappentyp während der Installation importiert, dann wird der Mappentyp automatisch im submitFileChanges eingetragen. (#56153)
- ADP-Installation schlug kann wegen eines fehlenden incVersion fehlschlagen, wenn die erweiterte Angabe der Update-Scripte verwendet wurde. (#54292)
- Für den webRoot-Nutzer kann ein anderer Nutzer konfiguriert werden. Entweder durch die Umgebungsvariable DOCUMENTS_PACKAGE_ADMIN oder die Mandanteneigenschaft $packageAdmin. Sind beide definiert, dann greift $packageAdmin. (#56561)
- Wurde ein ADP ein zweites Mal über die Konsole installiert, dann kam eine Fehlermeldung. (#57520)
- Der webRoot-Nutzer, der von otr-package automatisch angelegt wird, war per Default in Documents-Listen sichtbar. (#56947)