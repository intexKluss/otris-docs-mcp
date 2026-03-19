---
title: "Liste der Features"
source: "https://otris.software/documents/manuals/books/feature-manager/feature-list.html"
---

# Liste der Features

| Feature | Beschreibung | Standardwert | Version |
| --- | --- | --- | --- |
| AllowNotification | Aktiviert das Benachrichtigungssystem über Websockets. | false | 5.0f |
| AllowMessage | Aktiviert die Nachrichten-Kommunikation zwischen den angemeldeten Benutzern. Funktioniert nur wenn auch die Eigenschaft allowNotification auf true gesetzt wird. | false | 5.0f |
| AppletMode | Schaltet das AppletMode (Java) ein oder aus. Ist zum direkten Bearbeiten der Dokumenten, ohne sie runterladen zu müssen, gedacht. | true | 5.0 |
| ArchiveSearch | Schaltet das Suchen im Archiv ein oder aus. | true | 5.0 |
| AreaDropZone | Aktivert man das Feature werden die verfügbaren Dropzones beim Drüberfahren mit der Maus farbig markiert und ein Icon und Label eingeblendet. (Beispiel) | false | 5.0f |
| AutoEditDocument | Schaltet das automatische lokale Bearbeiten eines Dokuments beim Wechsel in den Bearbeitungsmodus ein oder aus. | true | 5.0 |
| AvatarOnMenubar | Zeigt ein Avatar-Icon mit den Initialen des angemeldeten Benutzers in der Menübar an. Über einen Klick auf das Icon können die Einstellungen aufgerufen werden. | false | 5.0d |
| ButtonColorMode | Mit dem Feature "ButtonColorMode" können der Bearbeiten-Knopf in Signalfarbe und die Speichern/Abbrechen-Knöpfe in Rot/Grün angezeigt werden | true | 5.0f |
| CloneSession | Schaltet den Knopf zum Eröffnen einer neuen Session ein oder aus. | true | 5.0d |
| CustomActions | Schaltet die Custom-Actions ein oder aus. | true | 5.0 |
| CustomActionToolbars | Ermöglicht das Rendern von eigenen Toolbars an bestimmten Positionen in Documents. (Beispiel) | true | 5.0f |
| CreateFileZone | Erstellt ein Mappe-anlegen button in der Sidebar. | false | 5.0f |
| DefaultFileCreation | Schaltet die normale Mappenanlage (Klappliste) ein oder aus. | true | 5.0 |
| DocCompareWindow | Blendet den Schalter "Extern vergleichen" in der Toolbar von Dokumentenregistern ein oder aus. | false | 5.0i |
| DocumentFields | Schaltet das Anzeigen der Dokumentenfelder ein oder aus. | true | 5.0a |
| DocToolBarButtonDownload | Blendet den Schalter "Download" in der Toolbar von Dokumentenregistern ein oder aus. | true | 5.0i |
| DocToolBarButtonEdit | Blendet den Schalter "Bearbeiten" in der Toolbar von Dokumentenregistern ein oder aus. | true | 5.0i |
| DocToolBarButtonExternal | Blendet den Schalter "Extern anzeigen" in der Toolbar von Dokumentenregistern ein oder aus. | true | 5.0 |
| DocToolBarButtonInternal | Blendet den Schalter "Intern anzeigen" in der Toolbar von Dokumentenregistern ein oder aus. | true | 5.0 |
| DashboardTransparentTitle | Titel von Dashboard-Kacheln bekommen einen transparenten Hintergrund und einen Farbigen unteren Rand. | false | 5.0f |
| DashboardBackgroundImage | Stellt den Hintergrund für Dashboards bereit. Die Bilddateien sollen im \tomcat8\webapps\documents\img\documents\skin\base\shared\login liegen und werden über Dateinamen plus evtueller Dateiendung als Feature-Wert verwendet. Wird der Wert "login" verwendet, wird das Hintergrundbild der Login-Maske verwendet. | none | 5.0f |
| DropZone | Schaltet die Dropzone bei der Mappe ein oder aus. | true | 5.0 |
| EditMode | Schaltet die Bearbeitungsmodus von Mappen ein oder aus. | true | 5.0a |
| ExpandedFirstFolder | Stellt den ersten Ordner einer Outbar geöffnet dar, sofern kein anderer Ordner zur Zeit geöffnet ist. | true | 5.0f hf1 |
| ExtendedSearch | Schaltet die erweiterte Suche ein oder aus. | true | 5.0 |
| ExtendedSearchTreeHorizontal | Im Dialog für die Erweiterten Suche werden als alternative Darstellung des linken Baumes die beiden Hauptknoten "Suchquellen" und "Mappentypen" optional nebeneinander (statt untereinander) dargestellt. | false | 5.0f |
| ExtendedSearchFieldColumns | Im Dialog für die Erweiterte Suche kann mit dem Feature "ExtendedSearchFieldColumns" = "2" als alternative Darstellung die rechten Suchfelder optional in einem Zwei-Spalten-Layout (statt einer Spalte) dargestellt werden. Damit wird für die Suchfelder nur etwa die Hälfte des sonst üblichen Raumes benötigt, was bei einer großen Anzahl von Feldern zu deutlich mehr Übersicht und weniger Auf-/Ab-Scrolling führt. | 1 | 5.0f |
| ExitEntry | Legt fest an welchen Positionen der Benutzer eine Schaltfläche zum Abmelden angezeigt bekommt. Mögliche Werte sind menubar (Standard) und usersettings. (Beispiel) | true | 5.0d |
| Favorites | Schaltet die Favoriten ein oder aus. | true | 5.0 |
| FileCover | Schaltet den Mappendeckel ein oder aus. | true | 5.0 |
| FileDecouple | Schaltet das Abkoppeln des Mappendeckel ein oder aus. | true | 5.0 |
| FileMenuAction | Schaltet den Aktionsknopf als Klappliste bei der Mappe ein oder aus. | true | 5.0 |
| FileMenuCopyTo | Schaltet den "Kopieren nach"-Knopf bei der Mappe ein oder aus. | true | 5.0 |
| FileSendConfiguration | Schaltet den Responsive-Modus für den Versenden Dialog ein. | false | 5.0f |
| FileTask | Schaltet die Aufgabe in einer Mappe ein oder aus. | true | 5.0 |
| FolderDecouple | Schaltet das Abkoppeln der Ordner ein oder aus. | true | 5.0a |
| FolderTreeVisualizationType | Schaltet die "Sidebar"-Ansicht für Ordnerbäume ein oder aus. (Mögliche Werte: tree, sidebar) |  | 5.0f |
| FolderTree | Schaltet die Anzeige der Ordnerbäume ein oder aus. | true | 5.0 |
| FulltextSearch | Schaltet die Volltextsuche ein oder aus. | true | 5.0 |
| FullViewMode | Schaltet die Vollansicht ein oder aus. | false | 5.0a |
| HideFileEditButton | Mit dem Feature "hideFileEditButton" = true kann der "Bearbeiten"-Button auf einer Mappe optional komplett ausgeblendet werden, falls der aktuelle Benutzer kein Schreibrecht auf dieser Mappe besitzt. Im Standardfall (false) wird der "Bearbeiten"-Button weiterhin im Readonly-Style dargestellt und ist nicht anklickbar. | false | 5.0f |
| HistoryFileNavigation | Schaltet das Navigieren zwischen Mappen über den Verlauf ein oder aus. | true | 5.0a |
| HomeEntry | Legt fest an welchen Positionen dem Benutzer das Home-Icon (Haus-Schaltfläche) angezeigt wird. Mögliche Werte sind statusbar (Standard),menubar und sidebar (Nur in Kombination mit dem FolderTreeVisualizationType Feature verwendbar). (Beispiel) | true | 5.0d |
| Inbox | Schaltet den Eingangskorb ("Eingang"-Knopf, persönliche Ordner, Weiterleitung in Workflows) ein oder aus. | true | 5.0 |
| InfoRegion | Schaltet die gesamte untere Zeile von Documents5 aus. Die dann nicht mehr erreichbaren Funktionalitäten müssen über andere Bereiche verfügbar gemacht werden. (Siehe AvatarOnMenubar, HomeEntry und QuickDropZone) | true | 5.0d |
| LastFileNavigation | Schaltet den Knopf für das Wechsel auf letzte Mappe ein oder aus. | true | 5.0a |
| LinkRegisterSearch | Aktiviert ein Volltextsuchfeld in Verknüpfungsregistern. Bei Verwendung des "OR"-operators in einem erweiterten Filterausdruck (API-Syntax) ist das Suchfeld aus technischen Gründen nicht verfügbar. | false | 5.0f |
| ListCustomActions | Schaltet die benutzerdefinierte Aktionen in Ordneransicht ein oder aus. | true | 5.0a |
| ListMenuAction | Schaltet den "Aktionen"-Knopf in Ordneransicht ein oder aus. | true | 5.0a |
| ListMenuCopyTo | Schaltet den "Kopieren nach"-Knopf in Ordneransicht ein oder aus. | true | 5.0a |
| ListMenuMoveTo | Schaltet den "Verschieben nach"-Knopf in Ordneransicht ein oder aus. | true | 5.0a |
| Monitor | Schaltet den normalen Monitor (eigener Frame unten) ein oder aus. | true | 5.0 |
| MonoView | Stellt das Layout von Documents um, sodass statt Mappe und Ordner nur eine der beiden Ansichten zeitgleich sichtbar ist. Dies entspricht der Darstellung im Classic-Client | false | 5.0i |
| OutbarMinimizedEntries | Minimiert die Outbar-Einträge einer ausgeklappten Outbar. Es wird nur noch das Icon der Einträge angezeigt und die Einträge werden horzizontal am Ende der Outbar dargestellt. | false | 5.0f |
| Overview | Schaltet die Übersicht ein oder aus. | true | 5.0f |
| OutbarlessViewMode | Schaltet die Outbarleiste ein oder aus. Ist diese ausgeschaltet wird nach Anmeldung in Documents nur noch die Ordner-/ und Mappenansicht angezeigt. | false | 5.0h |
| PdfjsViewerHideToolbar | Ermöglicht es die Toolbar im PDF.js Viewer auszublenden, sodass diese nur angezeigt wird, wenn sich der Mauszeiger am oberen Rand des PDFs befindet. | false | 5.0f |
| PrivateFolders | Schaltet die persönlichen Ordner im Ordnerbaum und in der Outbar ein oder aus. | true | 5.0 |
| PrivateFolderTreeIcons | Schaltet die Anzeige von Standardicons für den Ordnerbaum an oder aus. Die Icons können auch angepasst werden. (Beispiel) | false | 5.0f |
| PublicFolders | Schaltet die öffentlichen Ordner im Ordnerbaum und in der Outbar ein oder aus. | true | 5.0 |
| QuickDropZone | Schaltet QuickDropZone (globale DropZone) ein oder aus. Zusätzlich lässt sich seit Version 5.0d eine Position für die QuickDropZone angeben. Mögliche Werte statusbar (Standardwert), outbar oder workspace (nur in Kombination mit dem Feature AreaDropZone, seit 5.0f). (Beispiel) | true | 5.0 |
| SettingsOnStatusbar | Blendet das Zahnradsymbol unten rechts aus und unterbindet den Aufruf der Einstellungen über einen Klick auf den Benutzernamen. Über das Feature AvatarOnMenubar können die Einstellungen dann über das Avatar-Icon aufgerufen werden. | true | 5.0d |
| SeparatorDesign | Steuert das Design der horizontalen Trenner. Die Einstellung "default" entspricht dem normalen Design. Die Einstellung "lean" dem Design20. "small" ist eine kleinere Version des "lean"-Design. | default | 5.0f hf1 |
| ShareFileButton | Fügt einen Teilen-Button dem Mappentitel hinzu. Wird auf diesem geklickt wird ein Quickviewlink zur aktuellen Mappe erstellt und in den Zwischenspeicher geschrieben. Der Link beinhaltet außerdem das aktuelle Register und, sofern eines ausgewählt ist, das aktuell angezeigte Dokument. | false | 5.0h |
| SidebarFixed | Fixiert den linken Menubar-Bereich wenn der Wert true gesetzt wird. Wenn ein ganzzahliger Wert gesetzt wird, wird dieser als feste Breite übernommen. | false | 5.0f |
| SingleOutbar | Schaltet, wenn es nur eine Outbar gibt, die Anzeige der Outbar an oder aus. | true | 5.0f |
| Status | Schaltet den normalen Status von Mappen (Register) ein oder aus. | true | 5.0 |
| StickyPersonalFolder | Steuert n ob die privaten Ordner auch auf anderen Outbars angezeigt werden. Outbaransichten, die über ein Skript erzeugt werden, werden von diesem Feature nicht berührt. | false | 5.0f |
| ToggleFullscreenButton | Fügt der Menubar einen Knopf zum Wechsel in den Vollbildmodus hinzu. | false | 5.0f |
| ToggleFullViewMode | Schaltet das Wechseln zwischen Normal- und Vollansicht ein oder aus. Wenn der KioskViewMode und FullViewMode eingeschaltet ist, schaltet diese Feature ab. | true | 5.0a |
| ToolbarDesign | Ändert das Layout der Toolbar Kann durch Verwendung des Wertes titleToolbar aktiviert werden. |  | 5.0f |
| ToolbarDesignSignalMode | Färbt die Toolbar und verschieden Outbar-Elemente zur SkinSignalColor. Kann nur zusammen mit dem Feature ToolbarDesign unter Verwendung des Wertes titleToolbar aktiviert werden. Zur Verwendung muss der Wert auf skinSignalMode gesetzt werden. |  | 5.0f |
| ToolbarDesignColor | Färbt die Toolbar auf den angegebenen Farbwert. Betrifft keine anderen durch ToolbarDesignSignalMode veränderte Farben. Kann nur zusammen mit dem Feature ToolbarDesignSignalMode unter Verwendung des Wertes skinSignalMode aktiviert werden. Als Wert muss ein CSS-valider Farbwert verwendet werden (z.B. #ea6a21) |  | 5.0f |
| TreeSearch | Schaltet die Suche als Baum (Outbar) ein oder aus. | true | 5.0 |
| TreeVisualisationType | Ändert das Layout des Outbar-Baumes. Kann durch Verwendung des Wertes sidebar aktiviert werden. |  | 5.0f |
| UserAbsenceNotification | Schaltet die automatische Benachrichtigung der Abwesenheit eines Benutzers nach der Anmeldung ein oder aus. | true | 5.0 |
| UserSettings | Schaltet die Einstellungen für den Benutzer ein oder aus. Im Whitelist Mode werden die Einstellungen nur angezeigt wenn sie in <Value> eingetragen sind. Im Blacklist Mode werden die Einstellungen ausgeblendet wenn sie in <Value> eingetragen sind. (Beispiel) | true | 5.0 |
| WorkflowActions | Schaltet Workflow-Aktionen ein oder aus. | true | 5.0 |


## Beispielhafte Konfiguration


```xml
<?xml version="1.0" encoding="UTF-8"?>
<FeatureConfigs principal="dopaag">
    <FeatureConfig name="default">
        <Feature name="AppletMode" active="false" />
        <Feature name="FullViewMode" active="true" />
    </FeatureConfig>
</FeatureConfigs>
```

<?xml version="1.0" encoding="UTF-8"?>
<FeatureConfigs principal="dopaag">
    <FeatureConfig name="default">
        <Feature name="AppletMode" active="false" />
        <Feature name="FullViewMode" active="true" />
    </FeatureConfig>
</FeatureConfigs>
## Details zum Feature UserSettings


```xml
<!-- Whitelist Mode -->
<Feature name="UserSettings" active="true">
  <Property name="VisibleMenuItems">
    <Value>UserSettingsChangePassword</Value>
    <!-- Change Language is available since Version 5.0a -->
    <Value>UserSettingsChangeLanguage</Value>
    <Value>UserSettingsPermamentLogin</Value>
    <Value>UserSettingsAbsence</Value>
    <Value>UserSettingsPrivateFolders</Value>
    <Value>UserSettingsEMail</Value>
    <Value>UserSettingsAdmin</Value>
    <Value>UserSettingsVersion</Value>
    <Value>UserSettingsApiKeys</Value>
    <Value>UserSettingsTwoFactorAuthentication</Value>
  </Property>
</Feature>

<!-- Blacklist Mode -->
<Feature name="UserSettings" active="true">
  <Property name="HiddenMenuItems">
    <Value>...</Value>
  </Property>
</Feature>
```

<!-- Whitelist Mode -->
<Feature name="UserSettings" active="true">
  <Property name="VisibleMenuItems">
    <Value>UserSettingsChangePassword</Value>
    <!-- Change Language is available since Version 5.0a -->
    <Value>UserSettingsChangeLanguage</Value>
    <Value>UserSettingsPermamentLogin</Value>
    <Value>UserSettingsAbsence</Value>
    <Value>UserSettingsPrivateFolders</Value>
    <Value>UserSettingsEMail</Value>
    <Value>UserSettingsAdmin</Value>
    <Value>UserSettingsVersion</Value>
    <Value>UserSettingsApiKeys</Value>
    <Value>UserSettingsTwoFactorAuthentication</Value>
  </Property>
</Feature>

<!-- Blacklist Mode -->
<Feature name="UserSettings" active="true">
  <Property name="HiddenMenuItems">
    <Value>...</Value>
  </Property>
</Feature>
## Details zum Feature QuickDropZone


```xml
<Feature name="QuickDropZone" active="true">
  <Property name="Position">
    <Value>outbar</Value>
  </Property>
</Feature>
```

<Feature name="QuickDropZone" active="true">
  <Property name="Position">
    <Value>outbar</Value>
  </Property>
</Feature>
## Details zum Feature AreaDropZone


```xml
<!-- Highlighting der Dropzones aktivieren -->
<Feature name="AreaDropZone" active="true" />
<!-- Zusätzlivh die QuickDropZone auf den Worspace "legen" (optional) -->
<Feature name="QuickDropZone" active="true">
  <Property name="Position">
    <Value>workspace</Value>
  </Property>
</Feature>
```

<!-- Highlighting der Dropzones aktivieren -->
<Feature name="AreaDropZone" active="true" />
<!-- Zusätzlivh die QuickDropZone auf den Worspace "legen" (optional) -->
<Feature name="QuickDropZone" active="true">
  <Property name="Position">
    <Value>workspace</Value>
  </Property>
</Feature>
## Details zu ExitEntry & HomeEntry


```xml
<Feature name="ExitEntry" active="true">
  <Property name="Positions">
    <Value>menubar</Value>
    <Value>usersettings</Value>
  </Property>
</Feature>

<Feature name="HomeEntry" active="true">
  <Property name="Positions">
    <Value>menubar</Value>
  </Property>
</Feature>
```

<Feature name="ExitEntry" active="true">
  <Property name="Positions">
    <Value>menubar</Value>
    <Value>usersettings</Value>
  </Property>
</Feature>

<Feature name="HomeEntry" active="true">
  <Property name="Positions">
    <Value>menubar</Value>
  </Property>
</Feature>
## Details zum Feature PrivateFolderTreeIcons


```xml
<Feature name="PrivateFolderTreeIcons" active="true">
  <!-- Dies ist die komplette Liste der möglichen Werte -->
  <!-- Die hier gesetzten Werte sind die Standardwerte -->
  <Property name="IconMapping_Favorites">
    <Value>ionicons:ion-md-star</Value>
  </Property>
  <Property name="IconMapping_Inbox">
    <Value>entypo:inbox</Value></Property>
  <Property name="IconMapping_FollowUp">
     <Value>ionicons:ion-md-refresh</Value>
  </Property>
  <Property name="IconMapping_Deleted">
    <Value>ionicons:ion-md-trash</Value>
  </Property>
  <Property name="IconMapping_LastUsed">
    <Value>ionicons:ion-md-time</Value>
  </Property>
  <Property name="IconMapping_Sent">
    <Value>ionicons:ion-md-send</Value>
  </Property>
  <Property name="IconMapping_SendingFinished">
    <Value>ionicons:ion-md-done-all</Value>
  </Property>
  <Property name="IconMapping_InWork">
    <Value>ionicons:ion-md-build</Value>
  </Property>
  <Property name="IconMapping_Task">
    <Value>"ionicons:ion-md-checkbox-outline</Value>
  </Property>
  <Property name="IconMapping_PrivateSearches">
    <Value>"ionicons:ion-md-search</Value>
  </Property>
  <Property name="IconMapping_CheckinCheckout">
    <Value>ionicons:ion-md-unlock</Value>
  </Property>
  <Property name="IconMapping_DEFAULT">
    <Value>ionicons:ion-md-folder</Value>
  </Property>
</Feature>
```

<Feature name="PrivateFolderTreeIcons" active="true">
  <!-- Dies ist die komplette Liste der möglichen Werte -->
  <!-- Die hier gesetzten Werte sind die Standardwerte -->
  <Property name="IconMapping_Favorites">
    <Value>ionicons:ion-md-star</Value>
  </Property>
  <Property name="IconMapping_Inbox">
    <Value>entypo:inbox</Value></Property>
  <Property name="IconMapping_FollowUp">
     <Value>ionicons:ion-md-refresh</Value>
  </Property>
  <Property name="IconMapping_Deleted">
    <Value>ionicons:ion-md-trash</Value>
  </Property>
  <Property name="IconMapping_LastUsed">
    <Value>ionicons:ion-md-time</Value>
  </Property>
  <Property name="IconMapping_Sent">
    <Value>ionicons:ion-md-send</Value>
  </Property>
  <Property name="IconMapping_SendingFinished">
    <Value>ionicons:ion-md-done-all</Value>
  </Property>
  <Property name="IconMapping_InWork">
    <Value>ionicons:ion-md-build</Value>
  </Property>
  <Property name="IconMapping_Task">
    <Value>"ionicons:ion-md-checkbox-outline</Value>
  </Property>
  <Property name="IconMapping_PrivateSearches">
    <Value>"ionicons:ion-md-search</Value>
  </Property>
  <Property name="IconMapping_CheckinCheckout">
    <Value>ionicons:ion-md-unlock</Value>
  </Property>
  <Property name="IconMapping_DEFAULT">
    <Value>ionicons:ion-md-folder</Value>
  </Property>
</Feature>