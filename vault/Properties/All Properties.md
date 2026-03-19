---
title: "DOCUMENTS Properties"
source: "https://otris.software/documents/api/properties/"
---

# Documents Properties 6.2.1

- AccessProfile
- ApiKeyAuthenticationPasswordReset AccessProfile DlcGlobalOptions Systemuser string Öffentlich [Login/Logout/LDAP, Schnittstellen] Mögliche Werte: 0,1 Standardwert: 1 Gültigkeit: ab: 5.00g HF2 Wenn dieses Property auf 0 gesetzt wird, dann werden die API-Keys bei Änderung des Passworts nicht gelöscht.
- defaultFeatureConfig Systemuser AccessProfile string Öffentlich [Webclient5] Mögliche Werte: String, Name der Konfiguration Gültigkeit: ab: 5.00 Zur individuellen Konfiguration des FeatureManagers kann am Benutzer oder an Zugriffsprofilen diese Eigenschaft gesetzt werden. Der Wert der Eigenschaft ist der Name der Konfiguration.
- noLdapCheck Systemuser AccessProfile enum Veröffentlicht [Login/Logout/LDAP] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.51e Gelegentlich müssen auch in Documentsinstallationen, die generell mit einem ActiveDirectory oder anderen LDAP-Verzeichnisdienst gekoppelt worden sind, einzelne Benutzer/Redakteure/Zugriffsprofile von der LDAP-Kopplung ausgenommen werden, z.B. Redakteure für Docimport/Factory-Zwecke, da deren Accounts nicht im AD angelegt werden (können).
Dies bewerkstelligt bei eingerichteter und aktiver Ldap-Kopplung das hier vorgestellte Property namens noLdapCheck. true: der Benutzer/Zugriffsprofil wird bei konfigurierter Ldap-Bibliothek NICHT gegen LDAP geprüft
false: der Benutzer muss sich korrekt im LDAP authentifizieren. Das Zugriffsprofil wird gegen das LDAP aktualisiert.
(bei Client-Relevanz: Classic-Client und Client 5)
- TwoFactorAuthenticationEnforce AccessProfile DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: suggest, logout Gültigkeit: ab: 5.00g Mit der Eigenschaft "TwoFactorAuthenticationEnforce" kann gesteuert werden, wie alle Benutzer oder Gruppen von Benutzern geführt werden sollen, welche die Zwei-Faktor-Authentifizierung (2FA) aktuell noch nicht eingeschaltet haben. So kann auf Wunsch sichergestellt werden, dass niemand versehentlich vergisst, diese zu aktivieren.
Mit dem Wert "suggest" (verfügbar ab 5.0g) kann den Benutzern nach jeder Anmeldung vorgeschlagen werden, die Zwei-Faktor-Authentifizierung zu aktivieren. Dies kann ein Benutzer jedoch bei jedem Mal erneut ablehnen und wie gewohnt ohne Einschränkungen fortfahren.
Mit dem Wert "logout" (verfügbar ab 5.0i) können die Benutzern nach der Anmeldung dazu aufgefordert werden, die Zwei-Faktor-Authentifizierung zu aktivieren. Lehnt der Benutzer die Aktivierung ab, bleibt ihm anschließend nur noch die Möglichkeit, sich wieder abzumelden.
In allen Fällen muss die Zwei-Faktor-Authentifizierung (2FA) grundsätzlich aktiviert sein (siehe Eigenschaft "TwoFactorAuthentication").
Diese Eigenschaft kann sowohl global auf den Documents-Einstellungen, auf einem Zugriffsprofil oder auf einzelnen Benutzern hinterlegt werden.
- App Global
- appTitle App Global string Öffentlich [MobileApp] Gültigkeit: ab: 5.00e Legt den Titel fest, welcher im Hauptbildschirm der App angezeigt wird.
- blockTerm App Global string Öffentlich [MobileApp] Mögliche Werte: Intervall in Stunden Gültigkeit: ab: 5.00f Definiert das maximale Intervall in Stunden, um die App ohne Login zu nutzen. Nach diesem Intervall wird die App gesperrt.
- clearBadge App Global enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Wenn aktiviert wird der Benachrichtigungszähler am App Icon beim Start der App zurückgesetzt.
- disableBinaryEncryption App Global enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00e Deaktiviert die Verschlüsslung von Dokumenten (zum Beispiel PDFs), welche an Mappen hängen.
- enableMultiAccount App Global enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00e Aktiviert einen Modus in der App, welcher es erlaubt mehrere Server hinzuzufügen.
- saveDataTerm App Global string Öffentlich [MobileApp] Mögliche Werte: Intervall in Stunden Gültigkeit: ab: 5.00f Definiert das maximale Intervall in Stunden, um die App mit einen Login freizuschalten und die Datenlöschung abzuwenden.
- theme App Global string Öffentlich [MobileApp] Standardwert: default Gültigkeit: ab: 5.00e Legt ein globales Design fest, welches im Hauptbildschirm der App angezeigt wird
- App Konfiguration
- autoInitialSync App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00e Aktiviert die automatische Synchronisierung beim neuen Hinzufügen dieser Konfiguration
- disableDataEncryption App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00e Deaktiviert die Verschlüsslung von Mappen und Ordnern, beeinflusst jedoch nicht die Verschlüsslung von Dokumenten
- filesPerRequest App Konfiguration string Öffentlich [MobileApp] Standardwert: 35 Gültigkeit: ab: 5.00f Maximale Anzahl von Mappen in einer Anfrage.
- inFileUploadMethod App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: normal - Normal gadget - Drop Gadget Standardwert: normal Gültigkeit: ab: 5.00f Steuert ob das Drop Gadget oder der normale Upload für den Upload in der Mappen genutzt wird.
- noDataVisible App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Steuert ob der Text "Keine Daten vorhanden" auf der Home Seite aktiviert ist.
- oldDocumentLifetime App Konfiguration string Öffentlich [MobileApp] Mögliche Werte: Dokument-Lebensdauer in Tagen Gültigkeit: ab: 5.00f Steuert wie lange (in Tagen) die nicht standardmäßig heruntergeladenen Dokumente auf dem Gerät verbleiben sollen.
- oldSubfileLifetime App Konfiguration string Öffentlich [MobileApp] Mögliche Werte: Verknüpfungsmappen Lebensdauer in Tagen Gültigkeit: ab: 5.00f Steuert wie lange (in Tagen) die nicht standardmäßig heruntergeladenen Untermappen (von Verknüpfungsregistern) auf dem Gerät verbleiben sollen.
- onlineSearchInverted App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Steuert ob der "Online Suche" - Kachels Stil invertiert sein soll.
- quickUploadFiletype App Konfiguration string Öffentlich [MobileApp] Gültigkeit: ab: 5.00f Mappentyp der Mappe, zu welcher das hochgeladene Dokument gehört. (Schnellupload)
- quickUploadInverted App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Steuert ob der "Schnellupload" - Kachels Stil invertiert sein soll.
- quickUploadMethod App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: normal - Normal gadget - Drop Gadget Standardwert: normal Gültigkeit: ab: 5.00f Steuert ob das Drop Gadget oder der normale Upload für den Schnellupload genutzt wird.
- showAllDocsEnabled App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Aktiviert die Anzeige aller Dokumente in einer Datei, ohne die Taste 'Weitere' zu verwenden.
- timeoutDocDownload App Konfiguration string Öffentlich [MobileApp] Standardwert: 1200000 Gültigkeit: ab: 5.00f Timeout für das Herunterladen von Dokumenten.
- timeoutDocUpload App Konfiguration string Öffentlich [MobileApp] Standardwert: 1800000 Gültigkeit: ab: 5.00f Timeout für das Hochladen von Dokumenten.
- timeoutFilerequest App Konfiguration string Öffentlich [MobileApp] Standardwert: 15000 Gültigkeit: ab: 5.00f Timeout für das Herunterladen von Mappen (pro Mappe).
- timeoutFolderrequest App Konfiguration string Öffentlich [MobileApp] Standardwert: 15000 Gültigkeit: ab: 5.00f Timeout für das Herunterladen von Ordnern (pro Ordner).
- timeoutLogin App Konfiguration string Öffentlich [MobileApp] Standardwert: 10000 Gültigkeit: ab: 5.00f Timeout für Login Anfrage.
- uploadBinarized App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00e Aktiviert oder deaktiviert den Schwarzweiß-Filter
- uploadCameraEnabled App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Aktiviert die Kamera als Fotoquelle für das Hochladen.
- uploadColorEnhanced App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00e Aktiviert oder deaktiviert den Filter für verbesserte Farben
- uploadFileEnabled App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Aktiviert Datei importieren (aus dem Dateisystem) für das Hochladen.
- uploadFileQuality App Konfiguration string Öffentlich [MobileApp] Mögliche Werte: [0-100] Standardwert: 80 Gültigkeit: ab: 5.00i Definiert die Qualität der Datei, ausgedrückt als Bereich von 0 bis 100, wobei 100 normalerweise die volle Auflösung ohne Verlust durch Dateikomprimierung darstellt
- uploadFiletype App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: pdf - PDF-Datei jpg - JPG/JPEG-Datei Gültigkeit: ab: 5.00e Überschreibt den Dateityp für Uploads
- uploadFiletypeFilter App Konfiguration string Öffentlich [MobileApp] Mögliche Werte: MIME types text/plain,image/jpg,application/pdf Gültigkeit: ab: 5.00f Dateityp filter für Dateiimport (Hochladen). MIME types getrennt mit "," .
- uploadGalleryEnabled App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Aktiviert die Galerie als Fotoquelle für das Hochladen.
- uploadGrayscale App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00e Aktiviert oder deaktiviert den Graustufen-Filter
- uploadIcon App Konfiguration string Öffentlich [MobileApp] Standardwert: cloud-upload Gültigkeit: ab: 5.00f Upload-Kachel und Menueintrag Icon.
- uploadImportEnabled App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Aktiviert Dokument importieren (mit Crop & Perspektivkorrektur) aus der Galerie als Fotoquelle für das Hochladen.
- uploadMagicColor App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00e Aktiviert oder deaktiviert den Filter "Magic Color"
- uploadScanEnabled App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Aktiviert Scan als Fotoquelle für das Hochladen.
- uploadStandardFilter App Konfiguration enum Öffentlich [MobileApp] Mögliche Werte: colorEnhanced - Verbesserte Farben grayscale - Graustufen magicColor - Magic Color binarized - Schwarzweiß Gültigkeit: ab: 5.00e Legt den Standardfilter fest
- uploadTitle App Konfiguration string Öffentlich [MobileApp] Standardwert: Datei hochladen Gültigkeit: ab: 5.00f Upload-Kachel und Menueintrag Titel.
- DlcAction
- actionGroup DlcAction string Öffentlich [Webclient5] Mögliche Werte: ID einer hinterlegten Aktionslistenkonfiguration Standardwert: - Gültigkeit: ab: 5.00i Legt fest in welcher konfigurierten Aktionsliste diese Aktion angezeigt werden soll.
Die benutzerdefinierte Aktion muss eine Klapplistenaktion sein.
Siehe auch Eigenschaft "actionGroups".
- aiActionDescription DlcAction text Öffentlich Gültigkeit: ab: 6.1.0 Setzt die Beschreibung, welche der KI Dienst für diese Aktion erhält
- aiGadgetParamsSchema DlcAction string Öffentlich Gültigkeit: ab: 6.1.0 Name eines CustomProperties, das das Schema der Gadget-Parameter speichert. Für mehr Informationen nutzen Sie bitte das AI Toolkit Handbuch
- aiRelevant DlcAction enum Öffentlich Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 6.1.0 Definiert, ob die Aktion im Copiloten zur Verfügung steht
- alwaysEnabled DlcAction enum Öffentlich [Webclient] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 4.00a Wird dieses Property auf true gesetzt, so wird der Button immer angezeigt. Im Bearbeitungsmodus werden normalerweise die benutzerdefinierten Aktionen ausgeblendet. Mit dem Property „Always enabled“ kann man erzwingen, dass diese dauerhaft eingeblendet werden. (bei Client-Relevanz: Classic-Client und Client 5)
- alwaysShowLabel DlcAction Workflow-Kontrollfluss string Öffentlich [Webclient5, Workflow] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Wenn auf einer Benutzerdefinierten Aktion oder einem Workflow das Property 'imageFile' gesetzt ist kann mit dieser Property zusätzlich das Label angezeigt werden.
- buttonStyle DlcAction string Öffentlich [Webclient5] Mögliche Werte: CSS Styles Gültigkeit: ab: 5.00f Über die Eigenschaft können den Buttons für Benutzerdefinierte Aktionen eigene Styles gegeben werden.
Es kann dabei jeder gültige CSS Style genutzt werden, z.B. 'background-color:red'.
- commitEditMode DlcAction string Öffentlich [Webclient5] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00e Zeigt eine benutzerdefinierte Aktion auch beim Bearbeiten einer Mappen an und speichert die Mappe vor dem Ausführen der Aktion.
- contextmenu DlcAction string Öffentlich Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00e Bewirkt, dass benutzerdefinierte Aktionen an einem Ordner auch im Kontextmenu beim Rechtsklick angezeigt werden.
Übertragen werden bei Skripten dann immer alle selektierten Mappen und die angeklickte Mappe.
- gadgetConfig DlcField DlcRegister DlcFolder DlcAction text Öffentlich Gültigkeit: ab: 5.00 JSON-Konfiguration zum Einbinden eines Gadgets an der konfigurierten Stelle. Näheres hierzu steht in der Gadget Dokumentation.
- imageFile DlcAction string Öffentlich [Workflow, Webclient] Mögliche Werte: Dateiname Gültigkeit: ab: 4.00a Die Eigenschaft wird in den Kontrollflüssen gesetzt und bewirkt, dass die Funktionsknöpfe im Workflow mit einer Grafik dargestellt werden. Das Bild wird dabei aus \www\images\dlc\compact\button referenziert (s.a. tooltip). Es kann auch an den folgenden Stellen gesetzt werden:
- benutzerdefinierte Aktionen an einem Ordner
- benutzerdefinierte Aktionen an einem Mappentyp
Hier ist auch eine Definition von Entypo, Ionicons und Material Design Icons möglich:
(bei Client-Relevanz: Classic-Client und Client 5)
- labelStyle DlcAction string Öffentlich [Webclient5] Mögliche Werte: CSS Styles Gültigkeit: ab: 5.00f Über die Eigenschaft kann dem Text auf Buttons für Benutzerdefinierte Aktionen ein eigener Style gegeben werden.
Es kann dabei jeder gültige CSS Style genutzt werden, z.B. 'color:green'.
- OnDeletedFileAction DlcAction string Öffentlich [Rechte] Mögliche Werte: 1 Gültigkeit: ab: 5.00e Benutzerdefinierte Aktion am Mappentyp: Standardmäßig werden die benutzerdefinierten Aktionen an Mappen ausgeblendet, falls die Mappen sich im Papierkorb befinden.
Über die Eigenschaft OnDeletedFileAction=1 kann man eine Aktion bei gelöschten Mappen wieder einblenden. Aktionen mit OnDeletedFileAction=1 werden bei aktiven Mappen nicht angezeigt.
- onlyShowInEditMode DlcAction string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00g Eine Benutzerdefinierte Aktion an einer Mappe wird nur angezeigt, wenn die Mappe im Bearbeiten-Modus ist oder die Option alwaysEnabled gesetzt ist.
- tooltip DlcAction Workflow-Knoten string Öffentlich [Webclient, Workflow] Mögliche Werte: Text Gültigkeit: ab: 4.00a Diese Eigenschaft wird am Kontrollfluß gesetzt und bewirkt das bei dem Funktionsknopf der eingestellte Text als Tooltip eingeblendet wird (s.a. imageFile). Diese Eigenschaft kann auch an einer benutzerdefinierten Aktion im Documents Manager gesetzt werden.
Der Wert ist jeweils der anzuzeigende tooltip - Text.
(bei Client-Relevanz: Classic-Client und Client 5)
- useInEditMode DlcAction string Öffentlich Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: Wenn diese Eigenschaft an einer benutzerdefinierten Ordneraktion auf false gesetzt wird, dann kann diese Aktion nur dann ausgeführt werden, wenn sich die angezeigte Mappe nicht im Bearbeitungsmodus befindet.
- DlcArchiveServer
- ArchiveDigestAuthOnly DlcGlobalOptions DlcArchiveServer string Öffentlich [EAS] Mögliche Werte: 0, 1 Standardwert: 0 Gültigkeit: ab: 5.00e HF2 Dieses Property sollte gesetzt werden, wenn ein EAS Archiv mit Digest Access Authentication Unterstützung unter Ubuntu verwendet wird und keine Verbindung mit dem Archiv-Server hergestellt werden kann. Hinweis: Eine globale Änderung unter "Documents / Einstellungen" erfordert einen Serverneustart.
- CAInfoFile DlcArchiveServer string Öffentlich [EAS, EBIS Store] Gültigkeit: ab: 5.00g HF2 Wenn SSL für die Kommunikation zum Archiv konfiguriert ist, kann über die Eigenschaft CAInfoFile der Pfad zur der .pem Datei mit dem Zertifikat definiert werden.
- CommonRequestTimeout DlcArchiveServer string Öffentlich [EAS, EEi, EEx] Mögliche Werte: Zeit in Sekunden Gültigkeit: ab: 4.00 Es lässt sich mit diesen Parameter einstellen wie lange der Archivserver auf eine Anfrage warten soll. Diese Eigenschaft ist von der Funktion her identisch mit dem gleichnamigen Parameter aus der ArchiveXML.ini des Server Verzeichnisses, hat aber den Vorteil das bei einer Änderung der Zeit ein Neustart nicht notwendig ist.
- ConnectionPool DlcArchiveServer enum Öffentlich [EBIS Store, EAS, EEx] Mögliche Werte: 0 1 false true Gültigkeit: ab: 5.00 Aktiviert einen Verbindungspool zur Kommunikation mit dem Archiv. Für EDA- und EBIS-Stores ist er standardmäßig eingeschaltet (1), für EE.i/x ausgeschaltet (0).
Nur EDA funktioniert nachweislich mit beiden Modi. Die übrigen Systeme wurden nur mit der jeweiligen Standardkonfiguration getestet. Die entsprechende Eigenschaft in den Documents-Einstellungen heißt "ArchiveConnPool".
- EASAllowReactivate DlcArchiveServer DlcGlobalOptions DlcFile enum Öffentlich [EAS] Mögliche Werte: 0 1 false true Standardwert: true Gültigkeit: ab: 4.00 Die Eigenschaft EASAllowReactivate kann abseits der Mappentypeinstellung benutzt werden, um das Reaktivieren für bestimmte EAS-Server im Web zu unterbinden. Die Voreinstellung ist "true" (reaktivieren erlaubt).
Für Scripting/SOAP bleibt dieses Verbot ggf. unwirksam.
In den DOCUMENTS-Einstellungen gilt die Eigenschaft als Voreinstellung für alle EAS-Server ohne eigene Angabe.
- EASDelAll DlcArchiveServer DlcGlobalOptions enum Öffentlich [EAS] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00d Die Eigenschaft aktiviert im Web eine Aktion zum Löschen aller Versionen einer Archivmappe auf einmal, sofern der Benutzer das Recht zum Löschen der dargestellten Mappe hat..
Dies wird zurzeit nur von EDA unterstützt.
Die Eigenschaft kann auch in den Documents-Einstellungen verwendet werden. Sie gilt dann für alle Stores und auch für dynamische Archivordner. Diese Variante sollte nur in Kombination mit "LatestVersionOnly=true" benutzt werden, um redundante Löschaufträge ans Archiv, welche zu Abbrüchen mit Fehlermeldung führen können, auszuschließen. Alternativ kann die Eigenschaft "EASDelAllFV" benutzt werden. Administratoren und Skriptentwickler müssen beachten, dass ein onDelete-Exit bei dieser Aktion nur für die Archivmappe aufgerufen wird, von der die Aktion ausgeht, und nicht für jede einzelne Version. Der Ereignisstring für das Skript lautet in diesem Fall "onDeleteAll".
- EASDeleteMode DlcArchiveServer DlcGlobalOptions enum Öffentlich [EAS] Mögliche Werte: mark full Standardwert: mark Gültigkeit: ab: 5.00e Löschmodus für EAS-Archivmappen Modus "mark": Die Löschoperation entfernt Archivmappen aus allen Indizes und sie sind nicht mehr in DOCUMENTS erreichbar. Sie können mit Archiv-Administrationswerkzeugen entweder wieder hergestellt oder endgültig gelöscht werden. Modus "full": Die Löschoperation entfernt Archivmappen sofort aus sämlichen Archivdatenspeichern.
Dazu muss in den Archivservereinstellungen das Wartungs-Benutzerkonto "eas_keeper" hinterlegt sein. Hinweis: Beim Löschen mit PortalScripting kann der Löschmodus für jeden einzelnen Vorgang unterschiedlich festgelegt werden.
- EASNoteWithDate DlcGlobalOptions DlcArchiveServer enum Öffentlich [EAS] Mögliche Werte: 0 1 2 Standardwert: 0 Gültigkeit: ab: 4.00b Den Mappennotizen in EDA wird aus Symmetriegründen zu EE.i bzw. EE.x
automatisch der Benutzername vorangestellt. Wahlweise
kann mit dieser neuen Eigenschaft zusätzlich ein Datum vorangestellt werden.
Dessen Ausgabe erfolgt entweder immer im Feldwertformat (Wert "1") oder in der
Sprache des Benutzers, der die Notiz erzeugt (Wert "2").
Das Datum wird direkt in den Notiztext eingefügt. Eine
sprachabhängige Anzeige ist deshalb nicht möglich. Die Eigenschaft kann auch serverübergreifend in den Documents-Einstellungen angegeben werden. (bei Client-Relevanz: Nein (Server Feature))
- EASRetentionInfo DlcGlobalOptions DlcArchiveServer enum Öffentlich [EAS] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00i Festlegung, ob Documents vom EAS-Archiv auch LifeCycle-Daten
zur aktuellen Mappe abfragen soll.
- EASSendArchiverUnicode DlcArchiveServer enum Öffentlich [EAS] Mögliche Werte: 0 1 false true Standardwert: true Gültigkeit: ab: 4.00b Ab DOCUMENTS 4.0a mit Hotfix 1 ändert sich bei der Übermittlung des Archivierers einer Mappe an das EAS/EDA-Archiv die Codierung. Die alte Codierung war leider nur für wenige Landessprachen ausreichend.
Wenn eine ältere Version des Archivs eingebunden werden soll, kann man die Eigenschaft auf 0 oder false setzen. Der DocumentsServer benutzt daraufhin die alte Codierung.
Es wird jedoch empfohlen, die Archivinstallation stattdessen frühzeitig zu aktualisieren. Unter Umständen erfordert die Änderung der Eigenschaft einen Server-Neustart.
- EASShowVersioningErrors DlcFile DlcArchiveServer enum Öffentlich [EAS] Mögliche Werte: 0 1 2 3 Standardwert: 1 Gültigkeit: ab: 4.00d Verfahrensweise für Lesefehler bei der Versionierung von Archivmappen festlegen. Beim Speichern von Änderungen an einer Archivmappe passiert es gelegentlich, dass die Daten der Vorversion nicht mehr gelesen werden können. Die Archivmappe könnte zum Beispiel inzwischen gelöscht sein oder das EAS-Archiv hat ein technisches Problem beim Zugriff auf die Registry. DOCUMENTS kann nicht alle möglichen Ursachen für so einen Lesefehler kennen und muss dennoch entscheiden, wie mit dem Fehler verfahren wird.
Dieselbe Problematik besteht auch beim wiederholten Archivieren einer aktiven Mappe. Vor Version 4.0d übersprang DOCUMENTS in so einem Fall die Versionierung und legte eine neue Archivmappe an. Mit der Einführung dieser Eigenschaft in Version 4.0d ist zugleich die Voreinstellung für EAS so geändert worden, dass solche Fehler gemeldet werden. Bedeutung der möglichen Eigenschaftswerte:
0 = Keine Meldung; immer eine neue Mappe im Archiv anlegen
1 = Immer einen Fehler melden
2 = Fehlermeldung nur bei Bearbeitung einer Archivmappe, sonst Neuanlage
3 = Fehlermeldung nur bei Archivierung einer aktiven Mappe, sonst Neuanlage Die Eigenschaft kann auch beim Archivserver angegeben werden. Sie gilt dann innerhalb eines Stores für alle Mappentypen ohne eigenen Eintrag.
Für EE.x existiert eine vergleichbare Eigenschaft "ShowVersioningErrors".
- EASTriggerOnDeleteFromList DlcArchiveServer enum Öffentlich [EAS] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 4.00d Der Scripting-Exit "onDelete" (auch "onDeleteAll") kann mit dieser Eigenschaft für das listenweise Löschen von EDA-Mappen abgeschaltet werden. Das Löschen mehrerer Archivmappen auf einmal geht schneller, wenn Documents den Exit nicht aufrufen muss.
Die Eigenschaft darf auch in den DOCUMENTS-Einstellungen eingetragen werden und gilt dort für alle Stores ohne eigenen Eintrag.
Solange kein einziger Mappentyp des Mandanten ein Skript beim Löschen verwendet, ist die Eigenschaft bedeutungslos.
- EasyAuthOneForAll DlcArchiveServer enum Öffentlich [EEx, EEi] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00a Bei aktiver Easy-Authentifizierung und mehreren angeschlossenen EE.i/x-Archivservern wurde das beim Authentifizierungsserver* benutzte Login bis einschließlich Version 4.0a auch für alle anderen Server benutzt.
Wenn dieses Login oder das Passwort in einem zusätzlichen Server nicht identisch eingerichtet
war, war kein Zugriff auf dessen Archive möglich.
Da eine vollkommen identische Einrichtung aller Benutzer und Kennwörter auf mehreren Servern viel Administrationsaufwand erfordert und in der Praxis selten anzutreffen ist, wird für die
Zusatzserver ab 4.0a HF1 standardmäßig das jeweilige NotStandardbenutzerkon.to verwendet.
Um das individuelle Login wieder für alle Server gelten zu lassen, kann
beim Authentifizierungsserver diese Eigenschaft auf 1 oder true gesetzt werden.
Die Benutzer sollten in so einer Installation ihr eigenes Passwort nicht ändern, weil DOCUMENTS die Änderung nur im Authentifizierungsserver ausführen kann. * Hinweis: In DOCUMENTS 4 konnte nur der Hauptserver zur Authentifizierung benutzt werden. In DOCUMENTS 5 kann ein anderer gewählt werden.
- EBISFieldForFileType DlcArchiveServer string Öffentlich [EBIS Store] Standardwert: _type Gültigkeit: ab: 5.00 Im EBIS-Store archiviert DOCUMENTS den Mappentypnamen standardmäßig in einem reservierten Feld namens "_type". Mit dieser Eigenschaft kann dieser Feldname geändert werden.
Diese Einstellung darf ausschließlich an einem noch völlig leeren Store vorgenommen werden. Ferner darf der neue reservierte Name nie in einem Mappentyp als Feldname auftauchen. Anderenfalls können die archivierten Mappen in DOCUMENTS weder recherchiert noch korrekt angezeigt werden.
- EBISNoCR DlcArchiveServer string Öffentlich [Debug, EBIS Store] Mögliche Werte: 0, 1, false, true Gültigkeit: ab: 5.00 Schaltet das CR-Verfahren beim EBIS-Login ab.
Nur für Tests während der DOCUMENTS-Entwicklung vorgesehen. Ohne dieses Verfahrn können EE.x-seitig Lizenzfehler auftreten bzw es werden die falschen Lizenzen von Documents belegt.
- EBISSearchKey DlcArchiveServer string Öffentlich [EEx] Gültigkeit: ab: 5.00 Ein technischer Bezeichner der Standard-Suchquelle (View) in einem EE.x-Store (Anbindung über EBIS-Schnittstelle)
- EBISShowVersioningErrors DlcFile DlcArchiveServer enum Öffentlich [EBIS Store] Mögliche Werte: 0 1 2 3 Standardwert: 0 Gültigkeit: ab: 5.00 Verfahrensweise für Lesefehler bei der Versionierung von Archivmappen festlegen.
Diese Eigenschaft entspricht ShowVersioningErrors, gilt jedoch für EBIS Bedeutung der möglichen Eigenschaftswerte:
0 = Keine Meldung; immer eine neue Mappe im Archiv anlegen
1 = Immer einen Fehler melden
2 = Fehlermeldung nur bei Bearbeitung einer Archivmappe, sonst Neuanlage
3 = Fehlermeldung nur bei Archivierung einer aktiven Mappe, sonst Neuanlage
- EBISUnformattedResult DlcArchiveServer string Öffentlich [EBIS Store] Mögliche Werte: ß, 1 Standardwert: 1 Gültigkeit: ab: 5.00 Intern: Steuerflag, damit EBIS für Zahlen und Datumsangeben unformatiert in die Trefferliste schreibt, so dass DOCUMENTS systemübergreifend sortieren kann.
Die Abschaltmöglichkeit wurde als Workaroung für einen EBIS-Bug in der Entwiscklungsphase gebraucht.
- EEXIntersectSearchFields DlcArchiveServer enum Öffentlich [EEx, Suche] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00c Setzt man diese Eigenschaft auf "1" oder "true", dann werden bei einer EE.x-Recherche mit mehreren beteiligten Schemata nur noch jene Felder in der Suchmaske angezeigt, die in jedem Schema zu Treffern führen können. Im Gegensatz zur internen DOCUMENTS Mappenrecherche werden in diesem Modus die Bedeutungen (meanings) der Felder miteinander verglichen anstelle der Namen.
- EEXLocaleMap DlcArchiveServer string Öffentlich [EEx] Gültigkeit: ab: 5.00d Dies ist eine Ersetzungstabelle für die Sprachbezeichner, die DOCUMENTS während der Anmeldung an EE.x sendet.
Auf diese Weise können Sprachvarianten und landesspezifische Zahlenformate eingestellt werden.
Ein Beispiel für die Schweiz und Australien:
de=de-CH;en=en-AU
Anstelle von '=' darf auch mit ':' getrennt werden TODO Klapplisteneintraq: --> ab 5.0c HF2
- EEXUnicodeOverBase64 DlcArchiveServer enum Öffentlich [EEx] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00d Wenn der EE.x-JBOSS-Server mit dem unten angegebenen Parameter konfiguriert wurde,
dann muss zugleich diese Eigenschaft eingeschaltet werden (1/true), damit die beiden Systeme korrekt kommunizieren.
wrapper.java.additional.##=-Dfile.encoding=UTF-8
Dabei steht "##" für eine beliebige ganze Zahl. (Die Parameter sind durchnummeriert.) Ohne diese systemübergreifende Anpasung können im Highlighting-Modus nur Feldwerte im lokalen Encoding, korrekt an DOCUMENTS übertragen werden. Mit der Anpasung wird auch im Highlighting-Modus Unicode verwendet. -> ab 5.0cHF2 (fehlt noch in der Auswahlliste)
- EEXUnicodePW DlcArchiveServer enum Öffentlich [EEx] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00i Diese Eigenschaft legt fest, mit welcher Zeichencodierung Passwörter an den XML-Server von EE.x übermittelt werden. 0 = plattformspezifisches lokales Encoding des Servers
1 = UTF-8-Codierung (Unicode) Bei unpassender Konfiguration werden Umlaute und einigs Sonderzeichen in Passwörtern (z.B. Paragraph, Euro-Zeichen) falsch übergeben.
Im Modus "0" können u.U. nicht alle Zeichen verwendet werden. Der verfügbare Zeichensatz kann durch OS-seitige Spracheinstellungen beschränkt sein. (Unter Windows vor allem durch die Gebietsschemaeinstellung.) Der korrekte Wert für diese Eigenschaft hängt von der Version und Konfiguration des EE.x-Systems ab. Wenn die installierte EE.x ihn bereits unterstützt, sollte der Modus "1" bevorzugt werden.
- EnableDocUpdateRequests DlcArchiveServer enum Öffentlich [EEx] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 4.00 Legt fest, in welcher Form bearbeitete EE.x-Mappen beim Speichern dem XML-Server übergeben werden. true: per Update-Kommando (überträgt nur die Änderungen)
false: per Import-Kommando (überträgt neuen Mappeninhalt) Anmerkung: Das Updatekommando funkioniert ab EE.x 3.1.
- FCPExclusionBracket DlcArchiveServer DlcGlobalOptions enum Öffentlich [EBIS Store, EEx, Performance] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00i HF1 Möglichkeit zur Restrukturierung von Negativlisten in Mappenklassenschutzfiltern bei EE.x oder EBIS-Archivanfragen.. Die ältere Abfragestruktur (für den Wert 0 oder false) lautet:
(not Bedingung1 [ and not Bedingung2 ...])
Die geänderte Abfragestruktur (für den Wert 1 oder true) lautet:
not (Bedingung1 [ or Bedingung2 ...]) Formal liefern beide Varianten dasselbe Ergebnis. Allerdings besteht die Vermutung, dass die neue Variante kürzere Abfragezeiten bietet. Bei positiven Rückmeldungen wird sie in einer späteren Version Standard werden.
- IgnoreCertError DlcArchiveServer enum Öffentlich [EAS, EBIS Store] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00g HF2 Wenn SSL für die Kommunikation zum Archiv konfiguriert ist, kann über die Eigenschaft CAInfoFile der Pfad zur der .pem Datei mit dem Zertifikat definiert werden. Mit die Eigenschaft IgnoreCertError=1 kann erzwungen werden, dass auch bei fehlerhafter Verifikation des Server-Zertifikats die Verbindung zum Archivserver aufgebaut wird.
- MergeDMIAnnotation DlcArchiveServer enum Öffentlich [EEi, EEx, Blob] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00a Wenn einem EE.x-Schema nachträglich ein Notizattribut hinzugefügt wurde aber bereits Mappen mit grafischen Notizen im Documents-Format (DMI) archiviert waren, gab es früher keine Möglichkeit die vorhandenen Notizen zu konvertieren.
Jede Archivmappenbearbeitung konnte zum Verlust der alten Notizen führen. Für Anhänge, die ausschließlich DMI-Notizen enthalten, führen neuere DocumentsServer automatisch eine Konvertierung durch, sobald die Mappe bearbeitet wird.
Für Anhänge mit beiden Notizarten wird nur optional konvertiert, weil die ersten Documents4-Server oftmals redundant gespeichert haben (DMI+EE.x). Dazu ist die Eigenschaft "MergeDMIAnnotation" am Archivserver auf "1" oder "true" zu setzen.
Die Konvertierung findet in diesem Fall schon bei der Mappenansicht statt. Daher sollten nach der Änderung die temporären Archivmappen gelöscht werden.
Ein bekannter Seiteneffekt der Konvertierung ist eine Änderung der Schriftgröße. Dies lässt sich momentan nicht verhindern. * ab 4.0a HF1
- ReceiveFieldsB64 DlcArchiveServer DlcGlobalOptions string Öffentlich [EEx, EEi] Mögliche Werte: 0, 1, false, true Standardwert: keiner, siehe Beschreibung Gültigkeit: ab: 4.00c Wenn diese Eigenschaft auf 1 oder true gesetzt ist, fordert Documents den XML-Server dazu auf, Feldinhalte vorzugsweise in Base64-Codierung zu senden. Der Zweck besteht darin, das Problem zu umgehen, dass jeder XML-Parser Zeilenumbrüche stets in den Unix-Stil (LF) umwandelt. Wenn die Eigenschaft gar nicht oder auf einen ungültigen Wert gesetzt ist, aktiviert DOCUMENTS sie ausschließlich für die Volltexttreffermarkierung in EE.x von selbst. Die Umwandlung der Zeilenumbrüche ist in folgenden Fällen ein Problem.
1. Die Markierfunktion für Volltexttreffer in EE.x ist eingeschaltet. Hierbei können die Markierungen durch das Enfternen der Wagenrücklaufzeichen (CR) verrutschen. DOCUMENTS versucht dann eine Korrektur, doch das ist nicht in allen Anwendungsfällen möglich.
2. Eine andere Archivanwendung funktioniert nicht richtig, wenn die CR-Zeichen infolge einer Archivmappenbearbeitung in DOCUMENTS entfernt werden. Hierbei ist auch die Eigenschaft "SendFieldsB64" zu beachten.
3. (TODO: austesten) In EE.x wurden von einer anderen Archivanwendung kurze, mehrzeilige Texte mit Windows-Zeilenumbruch in einem Primärindexfeld abgelegt. Ein dynamischer Ordner oder ein Script in DOCUMENTS filtert explizit auf CR/LF Zeichenfolgen in diesem Feld. Die Filter funktionieren dann möglicherweise nach einer Archivmappenbearbeitung nicht mehr.
- RenditionDetector DlcArchiveServer text Öffentlich [EEx] Mögliche Werte: 0 = Anhänge mit leerem Zeitstempel gelten als gerendert. 1 = Anhänge mit der Dateigröße "-1" gelten als gerendert. 2 = Anhänge mit leerem Zeitstempel und Dateigröße "-1" gelten als gerendert. 3 = Anhänge mit leerem Zeitstempel oder Dateigröße "-1" gelten als gerendert. Standardwert: 0 Gültigkeit: ab: 4.00a Dateianhänge in EE.x-Dokumenten lassen sich teilweise nicht über
DOCUMENTS löschen, wenn sie mit anderer Clientsoftware erstellt wurden.
Ursache ist ein leerer Zeitstempel, der DOCUMENTS annehmen lässt,
es halte sich um einen gerenderten Anhang. Da es zurzeit kein
absolut verlässliches Kriterium zur Erkennung von gerenderten Anhängen
gibt, kann über diese Eigenschaft "RenditionDetector"
projektspezifisch eine Erkennungsstrategie gewählt werden.
- SendFieldsB64 DlcArchiveServer DlcGlobalOptions string Öffentlich [EEi, EEx] Mögliche Werte: 0, 1, 2 bzw "false", "true", "ifCRFound" Standardwert: 0 Gültigkeit: ab: Für die Archivierung in EE.i und EE.x kann DOCUMENTS mit dieser Eigenschaft angewiesen werden, manche oder sogar alle Feldinhalte mit einer Base64-Codierung zu übertragen.
Das ist minimal langsamer. Es erschwert zudem im Falle einer Problemanalyse die Auswertung von Anfrageprotokollen des XML-Servers. Es verhindert allerdings, dass Wagenrücklaufzeichen im XML-Server vom Parser herausgefiltert werden. Mit dem Wert 0 oder "false" werden nur die Feldwerte umcodiert, wo es technisch notwendig ist.
Mit dem Wert 1 oder "true" werden alle Feldwerte umcodiert.
Mit dem Wert 2 (alias "ifCRfound") verhält es sich wie bei "0", jedoch werden zusätzlich alle Feldwerte mit einem Wagenrücklaufzeichen (CR) umcodiert. siehe auch: Eigenschaft "ReceiveFieldsB64"
- ShowVersioningErrors DlcFile DlcArchiveServer enum Veröffentlicht [EEx] Mögliche Werte: 0 1 2 3 Standardwert: 0 Gültigkeit: ab: 4.00 Verfahrensweise für bestimmte Lesefehler bei der Versionierung von Archivmappen festlegen. Beim Speichern von Änderungen an einer Archivmappe passiert es gelegentlich, dass die Daten der Vorversion nicht mehr gelesen werden können. Die Archivmappe könnte zum Beispiel inzwischen gelöscht oder aber exklusiv gesperrt sein. DOCUMENTS kann nicht alle möglichen Ursachen für so einen Lesefehler kennen und muss dennoch entscheiden, wie mit dem Fehler verfahren wird.
Dieselbe Problematik besteht auch beim wiederholten Archivieren einer aktiven Mappe. Traditionell übergeht DOCUMENTS in so einem Fall die Versionierung und legt eine neue Archivmappe an. In Version 4.0 wurde allerings unter bestimmten Voraussetzungen (siehe unten) eine Fehlermeldung angezeigt und die Archivierung abgebrochen. Ab 4.0 HF1 ist wieder das traditionelle Verhalten voreingestellt. Fehlermeldungen sind optional mit Hilfe dieser Eigenschaft einstellbar. Bedeutung der möglichen Eigenschaftswerte:
0 = Keine Meldung; immer eine neue Mappe im Archiv anlegen
1 = Immer einen Fehler melden
2 = Fehlermeldung nur bei Bearbeitung einer Archivmappe, sonst Neuanlage
3 = Fehlermeldung nur bei Archivierung einer aktiven Mappe, sonst Neuanlage Voraussetzungen, unter denen die Eigenschaft wirksam wird:
- Das Archivsystem ist ENTERPRISE.x
- Die Kompatibilitätseinstellung "OldDocVersioning" wird nicht verwendet.
- Der XML-Server hat den Lesezugriff auf die Vorversion mit einem der folgenden Fehlercodes beantwortet:
81100030 (internal Java Beans error) oder 81100036 (Dokument nicht gefunden) Die Eigenschaft kann auch beim Archivserver angegeben werden. Sie gilt dann für alle Schemata ohne eigenen Eintrag.
Für EDA existiert ab Version 4.0d eine vergleichbare Eigenschaft "EASShowVersioningErrors".
- SSL DlcArchiveServer enum Veröffentlicht [EAS] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00d Aktivierung der SSL- bzw. TLS-verschlüsselten Kommunikation mit einem Archivserver. Zu beachten: zusätzlich wird eine Stammzertifikatsdatei benötigt (Parameter $CAInfoFile in "documents.ini").
Die verschlüsselte Kommunikation mit Archiven ist in DOCUMENTS 4 sehr langsam, wegen häufigem Neuaufbau der Verbindung. DOCUMENTS 5 kann einen Verbindungspool nutzen, um Neuverbindungen zu reduzieren. Prüfen Sie auch die Eigenschaft "ConnectionPool" unter den Archivservereinstellungen.
- SuppressDMIAnnotations DlcFile DlcArchiveServer enum Öffentlich [EEi, EEx, Blob] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00a Die Speicherung grafischer Annotationen als "DocumentsMetaInfo" kann durch Setzen dieser Eigenschaft am importierten (Archiv-)Schema unterdrückt werden. Wenn die Speicherung von Annotationen komplett verboten werden soll, genügt es bei EE.x nicht, ein Schema ohne Notizattribut anzulegen. Zusätzlich muss dann diese Eigenschaft gesetzt werden.
Es kann unter gleichem Namen eine Voreinstellung für einen ganzen Archivserver getroffen werden. *ab Version 4.0HF1
- TrustedLoginLateRecovery DlcArchiveServer enum Öffentlich [EEx, Login/Logout/LDAP] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00b Wird Documents mit SSO und "trusted login" gegen EE.x betrieben, so überprüft der DocumentsServer EE.x-Sitzungen (technisch: ContextIds), die eine Weile nicht benutzt wurden, zunächst auf Gültigkeit, bevor er eine weitere produktive Archivanfrage stellt. Abgelaufene Sitzungen werden nach Bedarf automatisch erneuert. Wenn dieser Mechanismus einmal nicht funktioniert (z.B. wenn eine Sitzung unmittelbar nach einer erfolgreichen Gültigkeitsprüfung per EE.x-Monitor gelöscht wurde), kann Documents in einen Betriebszustand fallen, in dem weitere Anmeldeversuche nur noch mit einem nutzlosen Standardlogin ohne Password erfolgen. Der einzige zuverlässige Weg diesen Zustand zu verlassen ist ein erneuter Aufruf der autoLogin-URL von Documents. Aktiviert man die Eigenschaft "TrustedLoginLateRecovery", dann versucht Documents verlorene "trusted"-Sitzungen auch nachträglich zu erkennen und zu erneuern. Diese Zusatzprüfungen wirken erst, nachdem der XML-Server eine nach Sessionablauf gestellte Anfrage mit dem Code "81100005" (login error) beantwortet hat. Die nächste Archivanfrage funktioniert dann wieder.
- UpdateDocFieldsWithTypeNames DlcArchiveServer enum Öffentlich [EEx] Mögliche Werte: 0 1 Standardwert: "0" zur Einführung in 4.0 #1820, ab 4.0a HF1 jedoch "1" Gültigkeit: ab: 4.00a Für den EE.x-Update-Request (das Ändern von Mappen) wird hiermit festgelegt, ob alle Felddatentypen in Textform gesendet werden sollen.
Eigentlich schreibt der XML-Server diese Form der Feldwertübergabe für die Mappenänderung sogar vor.
Die alte numerische Typangabe führt u.a. dazu, dass Inhaltsfelder vom Typ "Text" nicht verändert werden können
(DocumentPartNotFound-Exception im Kernel). Ein anderes Problem bei der Angabe in Textform, welches zunächt im XML-Server behoben werden musste,
verhinderte anfangs, dass diese Korrektur standardmäßig aktiviert wurde. Aktuelle Installationen sollten ohne diese Eigenschaft funktionieren.
- UseBase64ForMultiline DlcArchiveServer string Öffentlich [Debug, EEx, EEi] Mögliche Werte: 0, 1, false, true Standardwert: 0 Gültigkeit: ab: 4.00c Diese Einstellung weist den DocumensServer an, alle mehrzeiligen Feldwerte base64-codiert an den XML-Server zu senden. Dieses Feature wurde intern einmal gebraucht, um ein spezielles Problem beim EE.x-Trefferhighlighting reproduzierbar zu machen. Es ist nicht für den Produktiveinsatz gedacht.
- DlcField
- afterSetReferenceFieldScript DlcField DlcFile string Öffentlich [Scripting] Standardwert: Scriptname Gültigkeit: ab: 4.00d PortalScript welches aufgerufen wird, nach dem eine Referenz im WebClient gesetzt oder gelöscht wird. s auch portalscripting-API
- aiRelevant DlcField enum Öffentlich Mögliche Werte: true false readonly required optional auto Gültigkeit: ab: 6.00 Definiert, ob und wie dieses Feld der KI zur Verfügung steht. Für weitere Informationen bitte im AI Toolkit Handbuch nachlesen.
- alternativeCellRendering DlcField string Öffentlich Mögliche Werte: Callback-Name Standardwert: - Gültigkeit: ab: 6.1.0 Callback der mit documents.sdk.exitRegistry.registerAlternativeCellRenderingCallback() registriert wurde, um diese Felder in Listen anzuzeigen.
- alternativeRendering DlcField text Öffentlich Mögliche Werte: Name der Felddarstellung, JSON-Konfiguration Gültigkeit: ab: 5.00h Durch diese Eigenschaft wird eine alternative Darstellung eines Feldes verwendet. Hierzu stehen einige Standard-Werte bereit (z.B. slider für Numerische Felder) und es können eigene Lösungen erstellt werden.
Um ein Feld alternativ darzustellen muss entweder der Name der alternativen Darstellung für eine Standard-Konfiguration oder eine erweiterte Konfiguration mittels eines JSONs hinterlegt werden. Genauere Informationen sind unter otris.software zu finden.
- autoCompleteConfig DlcField PortalScriptParameter text Öffentlich [Webclient5] Mögliche Werte: Portalskript, JSON-Konfiguration Gültigkeit: ab: 5.00a Autocomplete bei Mappenfeld (man gibt Portalskript an) {
scriptName: <Skriptname>[,
minQueryChars: <mindestens einzugebenden Zeichen>,
queryDelay: <Verzögerung bis zum Aufruf>,
maxResults: <maximale Anzahl der Auswahloptionen>,
autoFocusResult: <erste Option sofort auswählen>,
template: <Handlebars-Template zur Generierung von eigenem HTML>]
}
(bei Client-Relevanz: Nur Client 5)
- AutoQuote DlcField enum Öffentlich [Suche] Mögliche Werte: 0 1 false true Gültigkeit: ab: 4.00d Mit der Eigenschaft "AutoQuote" an einem Mappentypfeld kann DOCUMENTS veranlasst werden, einen Suchbegriff für dieses Feld bei der erweiterten Suche automatisch in Anführungszeichen einzuschließen,
so dass stets nach Phrasen gesucht wird.
Logische Verknüpfungen innerhalb des Suchausdrucks mit "&", "|" sowie dem Leerzeichen sind dann allerdings nicht mehr möglich. Bei Aufzählungsfeldern macht es einen Unterschied, ob die Eigenschaft undefiniert oder "0"/"false" ist.
Im ersten Fall beeinflussen einige weitere Bedingungen die Entscheidung für oder gegen Phrasenausdrücke.
Im zweiten Fall wird jegliche Phrasenmaskierung unterdrückt. Falls die technischen Aufzählungwerte Zeichen enthalten, die im Suchfeldern als Trenn- oder Operatorzeichen gelten (z.B Leerzeichen, "&", "*") kann diese Einstellung unerwartete Suchergebnisse produzieren.
- AutoUpdateByRefFields DlcField string Öffentlich [Webclient] Mögliche Werte: Key-Field[,WithDefaultValues][,-IgnoredFileType.RefField][,uniqueKey] Gültigkeit: ab: 4.00c HF2 Wenn eine Mappe eine andere Mappe per Referenzfeld verknüpft, dann aktualiseren
sich der Anzeigename oder die Default-Werte nicht, wenn sich die verknüpfte
Mappe ändert. Automatische Aktualisierung von verknüpften Mappen per Referenzfeld spezifizieren:
Dies geschieht mit der Feldeigenschaft AutoUpdateByRefFields am Mappentypen
AutoUpdateByRefFields=Key-Field [,WithDefaultValues] [,-IgnoredFileType.RefField]
Bsp:
Mappentyp Mitarbeiter •Feld: PersonalNr (KEY)
•Feld: Vorname
•Feld: Nachname
•Feld: Position
Mappentyp Krankmeldung •Feld: Person (Referenzfeld):
•Feld: Name
•Feld: KrankVon
•Feld: KrankBis Statt der folgenden Referenz auf die fachliche MappenId "PersonalNr" kann auch eine Referenz über die technische MappenId hergestellt werden. Hier muss das unveränderliche Schlüsselwort "idFile" statt "PersonalNr" eingetragen werden. Es ist also eine Anpassung auf dem Referenzfeld und den Feldeigenschaften notwendig. Im folgenden Beispiel steht diese Variante jeweils in Klammern (idFile) (ab Documents 5.0 c HF 1).
Das Feld Person ist ein Referenzfeld mit der Regel:
Mitarbeiter.PersonalNr(idFile)
%Nachname% (%PersonalNr%)
Name=%Vorname% %Nachname% Wenn nun bei Änderung des Feldes Nachname einer Mappe des Mappentypen
Mitarbeiter die Krankmeldungen auch aktualisiert werden sollen: 1. Eigenschaft am Feld Vorname am Mappentyp Mitarbeiter!
AutoUpdateByRefFields PersonalNr(idFile),WithDefaultValues 2. Eigenschaft am Feld Nachname am Mappentyp Mitarbeiter!
AutoUpdateByRefFields PersonalNr(idFile),WithDefaultValues Nach dem Speichern der Arbeitskopie! einer Mappe vom Mappentypen Mitarbeiter
wird geprüft, ob sich der Vorname/Nachname geändert hat. Dann werden Mappen
gesucht, die ein Referenzfeld haben, welches sich auf Mitarbeiter.PersonalNr
bezieht.
Diese werden untersucht, ob sich im Anzeigename (2. Zeile der Referenzregel bzw.
optional in den Default-Werten 3. - n-te Zeile) der Wert Vorname/Nachname
befindet und dieser dann neu bestimmt. Bei ein Änderung des KEY-Feldes (PersonalNr) kann keine automatische
Aktualisierung stattfinden. Sind mehrere Mappentypen mit einer Mappe verknüpft, können über die Regel
-FileType.RefField einzelne Mappentypen von der automatischen Aktualiserung
ausgenommen werden Die Option uniqueKey ist seit 5.0c verfügbar und sollte verwendet werden, wenn der referenzierte Key eindeutig im ganzen System (z.B. durch die Vorbelegung %uniqueId%) ist.
- doublelistToolbar DlcGlobalOptions DlcField string Öffentlich [Webclient5] Mögliche Werte: false, true Standardwert: true Gültigkeit: ab: 5.00c HF1 Deaktiviert global bzw auf Feld den AutoComplete und Sortierknopf des Doppelauswahlliste, wenn es auf false gesetzt ist.
(bei Client-Relevanz: Neues Verhalten in Client 5)
- EASAnalyzer DlcField enum Veröffentlicht [EAS] Mögliche Werte: standard keyword linebreak text Gültigkeit: ab: 4.00 Bestimmt die Interpretation bzw. Indexierung eines Feldwerts im "Embedded Archive Storage".
Der Standardanalyzer unterscheidet automatisch zwischen Datumsangaben, numerischen Angaben sowie Text.
Der Keywordanalyzer indexiert den ganzen Feldwert als ein einziges Wort. Dies ist z.B. bei Aktenplanfelden und Nummernkreisfeldern sinnvoll, damit das Archivsystem keine führenden Nullen abschneidet. Die Suche in "keyword"-Feldern ist case-sensitiv.
Der Linebreakanalyzer zerlegt den Feldwert nach Zeilenumbrüchen und indiziert jede Zeile wie sonst ein einzelnes Wort. Dies ist vor allem bei ACL-Feldern sinnvoll.
Der Textanalyzer enspricht "standard", bis auf ein Detail. Zahlenwerte werden nicht normalisiert (wie bei "keyword".) Ohne Angabe des Properties wählt Documents den Analyzer nach einer vordefinierten Logik aus.
"linebreak" und "text" sind erst ab DOCUMENTS 5 verfügbar.
- editorConfig DlcGlobalOptions DlcField text Öffentlich [Webclient5] Mögliche Werte: editorConfig = {quill: { sampleKey: "sampleValue"}} Gültigkeit: ab: 5.00d Über die Eigenschaft editorConfig kann man dem WYSIWYG-Editor für HTML-Felder eine eigene Konfiguration übergeben. Der WYSIWYG-Editor wird für HTML-Felder im Bearbeitungsmodus verwendet. Die Eigenschaft kann dabei global oder am Mappenfeld definiert werden.
- emphasized DlcField enum Öffentlich [Webclient5] Mögliche Werte: false true Standardwert: false Gültigkeit: ab: 5.00f Bei Feldern mit der Eigenschaft emphasized wird der Feldwert in fett hervorgehoben und ist in einer größeren Schriftgröße dargestellt.
- exitImageFile DlcField string Öffentlich [Webclient5] Gültigkeit: ab: 5.00c Ersetzt den Standardicon des User-Exits, 2 Möglichkeiten:
1. Pfad zur Imagedatei - Rootpfad ist /img/documents/skin/base/shared/custom
Hier müssten in einer Standardinstallation die Bilder abgelegt werden (Bsp.: Plus - Button)
C:\Program Files\Documents5\tomcat8\webapps\documents\img\documents\skin\base\shared\custom\
Als Beispielwert kann in dem Feld der folgende Wert eingetragen werden: add_doc.gif
2. Entypo/Ionicons - Syntax: entypo:folder; (bei Client-Relevanz: Nur Client 5)
- extSearchAutoCompleteConfig DlcField text Öffentlich Mögliche Werte: Portalskript Gültigkeit: ab: 5.00a Autocomplete bei der erweiterten Suche (man gibt Portalskript an)
(bei Client-Relevanz: Nur Client 5)
- FilingPlanClearDefaultValuesOnDeselect DlcField DlcFile DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 4.00c Eigenschaft bewirkt, dass wenn beim Auswahldialog für den Aktenplan "Eintrag löschen" ausgewählt wird, vorher gesetzte Defaultwerte auch geleert werden (bei Client-Relevanz: Classic-Client und Client 5)
- foldable DlcField string Öffentlich [Webclient] Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 6.2.0 Endscheidet ob sich ein Horizontaler Trenner einklappen lässt und das Symbol zum Einklappen angezeigt wird.
- gadgetConfig DlcField DlcRegister DlcFolder DlcAction text Öffentlich Gültigkeit: ab: 5.00 JSON-Konfiguration zum Einbinden eines Gadgets an der konfigurierten Stelle. Näheres hierzu steht in der Gadget Dokumentation.
- growInHeight DlcField string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 6.0.1 Felder mit dieser Eigenschaft werden so groß wie möglich (Höhe) in einer Mappe dargestellt, ohne dass eine Scrollleiste entsteht.
- hiddenField DlcField string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00h Felder mit dieser Eigenschaft werden nicht in der Mappendarstellung berücksichtigt. Es ist jedoch weiterhin möglich per Client-SDK auf den Feldwert zuzugreifen und diesen zu verändern.
Hierzu sollte folgende Methode verwendet werden:
https://otris.software/documents/api/client-sdk/documents.sdk.FieldModel.html#setValue
- htmlDynamicHeightReadonly DlcField string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i HF5 Durch die Eigenschaft htmlDynamicHeightReadonly wird die Höhe eines HTML-Felder im Lesemodus abhängig vom Inhalt bestimmt.
- htmlFieldAsHtml DlcField DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i Stellt das HTML-Feld im Lesemodus oder als schreibgeschützes Feld ohne Rahmen dar.
- htmlSanitizeDisabled DlcField DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i HF7 Eigenschaft für Felder vom Typ HTML Wenn diese Eigenschaft an einem Feld auf true gesetzt wird,
wird der Wert des HTML-Feldes vor der Anzeige nicht bereinigt.
D.h. es besteht die Gefahr das schädlicher HTML-Code in die Webapplikation gelangt.
Felder mit dieser Eigenschaft sollten deshalb grundsätzlich schreibgeschützt sein und
die Sicherheit des Inhaltes muss über andere Mechanismen gewährleistet werden. Das Setzen der Eigenschaft am Mappentyp führt dazu das der gesetzte Wert als Standard für alle
HTML-Felder der Mappe verwendet wird.
Die Eigenschaft kann auch global gesetzt werden und wirkt sich dann auf alle HTML-Felder aus (nicht empfohlen). Hinweis: Aufgrund der Art und Weise wie der Inhalt von HTML Feldern in die Applikation eingebunden
wird ist es auch mit dem Setzen dieser Eigenschaft NICHT möglich script-Tags über
HTML-Felder in den Webclient einzubinden. Stattdessen sollte der ClientHeaderCode-Mechanismus
verwendet werden.
- InSearchMaskAsRefField DlcField string Öffentlich [Webclient, Suche] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00i HF9 Falls in der erweiterten Suche (genau) ein Mappentyp bei den Suchquellen ausgewählt wird und bei einem beliebigen Referenzfeld dieses Mappentyps diese Eigenschaft konfiguriert ist, so wird das betreffende Feld in der Suchmaske als ein echtes Referenzfeld dargestellt. Hier kann dann eine Suchliste mit passenden Treffern geöffnet und ein gewünschter Eintrag für die aktuelle Suchanfrage ausgewählt werden.
- labelAppearance DlcField string Öffentlich Mögliche Werte: default, compact Standardwert: - Gültigkeit: ab: 5.00f HF1 Zeigt den Bezeichner eines Feldes entweder nur in der Standard- oder Kompaktansicht an.
- layoutFixedWidth DlcField string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00b Nur gültig für die Feldtypen Datum, Zeitstempel und Bool. Dieser Schalter ermöglicht es, die standardmäßig festen Breiten im Mappen-Layout zu ignorieren. Mit dem Wert "false" werden diese mit flexibler Breite (wie die anderen Felder) dargestellt, solange keine feste Breite (in Pixeln) angegeben wurde.
(bei Client-Relevanz: Nur Client 5)
- LineIndex DlcField enum Öffentlich [Suche, EAS] Mögliche Werte: 0 1 false true Gültigkeit: ab: 5.00e Diese Eigenschaft legt fest, ob die Anwendung für ein Feld einen Zeilenindex anstelle eines Volltextindexes aufbaut. Ohne gesetzte Volltextindex-Option bleibt die Eigenschaft wirkungslos. Sie gilt zudem nicht für Archivmappen. Details:
DOCUMENTS kann seit Version 5.0e den Inhalt eines Felds optional zeilenweise statt wortweise indizieren. Die Zeilenlänge ist dabei auf auf 255 Zeichen begrenzt. Längere Zeilen werden in den Indexdaten abgeschnitten.
Dieser Indextyp ist für Doppelauswahllistenfelder bestens geeignet. Bei diesen wird er automatisch (statt einem Volltextindex) benutzt, wenn die LineIndex-Eigenschaft nicht festgelegt wurde.
Wenn auf einem Feld die Eigenschaft "EASAnalyzer" auf "linebreak" gesetzt wurde, ist "LineIndex" ebenfalls schon implizit auf "1" voreingestellt. Zu beachten: Bei der Suche in einem Zeilenindexfeld werden keine Suchmethoden berücksichtigt (->exakte Suche). Ein nachträglicher Wechsel des Indextyps erfordert eine Neuindizierung der Bestandsdaten per Wartungsoperation.
- MaxValue DlcField string Öffentlich [Webclient] Mögliche Werte: Datumswert, Numerischer Wert oder Länge Gültigkeit: ab: 4.00c HF1 An Mappentypfeldern kann man mit der Eigenschaft MinValue und MaxValue einen Wertebereich angeben, in dem die eingegebenen Werte liegen müssen. Für die Datentypen Datum, Zeitstempel und Numerisch muss der angebene Wert dem Format aus Documents-Einstellungen->Loale/Format->Format-Einstellungen entsprechen.
z.B. MinValue=01.01.1980 oder MinValue=0,5
Für alle textbasierten Datentyp (String, Text, E-Mail...) kann über die Eigenschaften die Länge des Wertes vorgegeben werden. (bei Client-Relevanz: Nein (Server Feature))
- maxWidth DlcField string Öffentlich [Webclient] Mögliche Werte: numerische Werte Gültigkeit: ab: 6.2.0 Durch maxWidth kann eine maximale Breite für Text-, HTML und alternative gerenderte Markdown- und Code-Editor-Felder festgelegt werden.
- MinValue DlcField string Öffentlich [Webclient] Mögliche Werte: Datumswert, Numerischer Wert oder Länge Gültigkeit: ab: 4.00c HF1 An Mappentypfeldern kann man mit der Eigenschaft MinValue und MaxValue einen Wertebereich angeben, in dem die eingegebenen Werte liegen müssen. Für die Datentypen Datum, Zeitstempel und Numerisch muss der angebene Wert dem Format aus Documents-Einstellungen->Loale/Format->Format-Einstellungen entsprechen.
z.B. MinValue=01.01.1980 oder MinValue=0,5
Für alle textbasierten Datentyp (String, Text, E-Mail...) kann über die Eigenschaften die Länge des Wertes vorgegeben werden. (bei Client-Relevanz: Nein (Server Feature))
- noBorderReadonly DlcField string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i HF5 Durch die Eigenschaft noBorderReadonly werden im Lesemodus html-Felder ohne Rahmen dargestellt.
- password DlcField string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00h HF2 Wandelt ein String Feld in ein Passwort Feld um, sodass der Benutzer den eingetragenen Wert nicht sehen kann und stattdessen * zu sehen bekommt.
- pdfjsAutoSearch DlcField string Öffentlich [Webclient5] Mögliche Werte: true false Funktionsname Standardwert: false Gültigkeit: ab: 5.00f Aktiviert die automatische Suche von Feldwerten im Pdfjs für das Feld. Es muss zusätzlich die globale Property pdfjsAllowAutoSearch aktiviert sein.
Bei einem Klick auf dem Feld wird der aktuelle Feldwert als Suche an den PDF.js übergeben und sofern das PDF durchsuchbar ist markiert. Über den Wert Funktionsname kann eine Funktion angegeben werden, die über den ClientHeaderCode eingebunden wurde. Diese wird mit dem Feldwert als Argument aufgerufen und gibt den Returnwert an den PDF.js als Suche weiter, wodurch die Feldwerte vorab formatiert werden können. Aktuell unterstützte Feldtypen sind: String, Text, Datum, Numerisch, Referenz, Text (Fixed Font), E-Mail, Url, Zeitstempel
- placeholder DlcField string Öffentlich Gültigkeit: ab: 5.00h Ermöglicht das Setzen eines Platzhalter-Textes für String- und Text-Felder. Er gibt dem Benutzer einen Hinweis oder ein Beispiel für die erwartete Eingabe gibt. Sobald der Benutzer beginnt zu tippen, verschwindet der Placeholder. Lokalisierte Werte sind an dieser Stelle möglich (z.B. my vale;de:Mein Wert;en:my value)
- ReferenceFileClearDefaultValuesOnDeselect DlcField DlcFile DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: 1 0 Gültigkeit: ab: 4.00a Eigenschaft bewirkt, dass wenn beim Auswahldialog für Referenzen "Eintrag löschen" ausgewählt wird, vorher gesetzte Defaultwerte der Referenz auch geleert werden. Beispiel:
In einem Referenzfeld wird eingetragen, dass Felder der referenzierenden Mappe (hier: car_id) mit Feldwerten aus der referenzierten Mappe (hier: file_id) gefüllt werden. Das Property sorgt dafür, dass der Eintrag in "car_id" gelöscht wird. Referenzfeld "car" im Mappentyp "Driver".
Aufzählungswerte:
car.file_id
%title%
car_id=%file_id%
- ReferenceListGroupBy DlcField string Öffentlich [Webclient5] Mögliche Werte: 1+,2,3 Standardwert: - Gültigkeit: ab: 5.00b Die Spalten einer Referenzfeldliste können durch eine Kommaseparierte Liste nach Index gruppiert werden. Ein Plus-Zeichen hinter dem Index bewirkt ein Öffnen der Gruppierung. Die Spalten nach denen gruppiert wurde, werden in der Darstellung nicht angezeigt. Gültig ab 5.0 HF2
(bei Client-Relevanz: Nur Client 5)
- ReferenceListGroupByLimit DlcField string Öffentlich [Webclient5] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00b Die Property funktioniert nur wenn ReferenceListGroupBy gesetzt ist und begrenzt die zu ladende Anzahl an Zeilen.
(bei Client-Relevanz: Neues Verhalten in Client 5)
- referenceNavigation DlcField string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: true Gültigkeit: ab: 5.00b HF1 Auf Referenzfeldern kann mit dieser Eigenschaft der Aktionsknopf des Feldes im Lesemodus ausgeblendet werden
(bei Client-Relevanz: Nur Client 5)
- referenceSelect DlcField string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: true Gültigkeit: ab: 5.00b HF1 Auf Referenzfeldern kann mit dieser Eigenschaft der Aktionsknopf des Feldes im Bearbeitungsmodus ausgeblendet werden
(bei Client-Relevanz: Nur Client 5)
- rowspanLeft DlcField string Öffentlich [Webclient5] Mögliche Werte: Anzahl der Zeilen Gültigkeit: ab: 5.00f Mit dieser Eigenschaft ist es möglich, zeilenübergreifende Felder zu definieren, so dass die folgenden x Zeilen rechts neben diesem Feld dargestellt werden. Optional kann nach der Angabe der Zeilenanzahl auch noch die Breite einer der beiden Spalten explizit festgelegt werden. Beispiel:
* 3,200px (Das Feld das über die drei Zeilen geht wird mit einer Breite von 200 Pixeln dargestellt)
* 3,-250px (Die Felder neben dem mehrzeiligen Feld haben eine Breite von 250 Pixeln zur Verfügung)
- rowspanRight DlcField string Öffentlich [Webclient5] Mögliche Werte: Anzahl der Zeilen Gültigkeit: ab: 5.00f Mit dieser Eigenschaft ist es möglich, zeilenübergreifende Felder zu definieren, so dass die folgenden x Zeilen links neben diesem Feld dargestellt werden. Optional kann nach der Angabe der Zeilenanzahl auch noch die Breite einer der beiden Spalten explizit festgelegt werden. Beispiel:
* 3,200px (Das Feld das über die drei Zeilen geht wird mit einer Breite von 200 Pixeln dargestellt)
* 3,-250px (Die Felder neben dem mehrzeiligen Feld haben eine Breite von 250 Pixeln zur Verfügung)
- ScriptEnumCache DlcField string Öffentlich [Server, Scripting] Mögliche Werte: {Principal|SystemUser}.[propname] Gültigkeit: ab: 5.00a Ermöglicht das Cache von Aufzählungswerten aus Enum-Scripten. Die genaue Funktionsweise ist in der portalscripting.chm -> "Usage of he property cache for caching of enumvals of enum scripts" beschrieben.
- separatorDesign DlcGlobalOptions FeatureManager DlcField string Öffentlich Mögliche Werte: default, lean, small, headline Standardwert: default, bei Einstellung des Design20: lean Gültigkeit: ab: 5.00f HF1 Steuert das Design der horizontalen Trenner. Die Einstellung "default" entspricht dem normalen Design. Die Einstellung "lean" dem Design20. "small" ist eine kleinere Version des "lean"-Design. Neu ab 6.2 ist "headline", eine größere Version des Sepatators. Einstellung als Feature:
<Feature name="SeparatorDesign" value="lean" /> Die Unterstützung am Feld wurde in der Documents-Version 5.0i hinzugefügt.
- tooltip DlcField string Öffentlich Mögliche Werte: String Gültigkeit: ab: 5.00h Legt den Tooltip für ein Feld fest.
- translationField DlcField string Öffentlich Mögliche Werte: true, false, JSON-Konfiguration Standardwert: false Gültigkeit: ab: 5.00g Durch diese Eigenschaft wird ein String, Text oder HTML-Feld als Translation-Feld dargestellt. Dieses dient zur Eingabe lokalisierter Werte.
Wird die Eigenschaft auf true gesetzt, wird eine Standard-Konfiguration geladen. Diese lässt sich über die Eigenschaft translationFieldSettings noch beeinflussen. Für weitere Informationen, insbesondere die Konfiguration via JSON, steht ein HowTo im Doku-Portal zur Verfügung.
- uniqueFieldValueCheck DlcField string Öffentlich [Rechte] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00g Wenn die Eigenschaft uniqueFieldValueCheck=1 an einem Feld (mit Ausnahme von Aktenplan-Feldern) in einem Mappentypen gesetzt ist, wird beim Anlegen bzw. Ändern einer Mappe die Eindeutigkeit des Feldwertes unter allen aktiven Mappen des Mappentypen geprüft. Dies gilt jedoch nicht für ein Aktenplan-Feld, das diese Eigenschaft einfach ignoriert .
- userExitReadMode DlcField string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: true Gültigkeit: ab: 5.00b HF1 Mit dieser Eigenschaft kann der User-Exit-Aktionsknopf des Feldes im Lesemodus ausgeblendet werden.
- Validator.regex DlcField string Öffentlich [Server] Mögliche Werte: Ein regulärer Ausdruck Gültigkeit: ab: 5.00i Die Eigenschaft 'Validator.regex' an einem Feld ermöglicht es, den geänderten Feldwert beim Speichern einer Mappe mit einem regulären Ausdruck von der ECMAScript-Grammatik (s. https://262.ecma-international.org/5.1/#sec-15.10) zu validieren. Diese Eigenschaft ist verfügbar für Felder der folgenden Typen: String, Text, Numerisch, Text (Fixed Font), E-Mail und URL.
Siehe auch die Eigenschaft 'Validator.regex.message'
- Validator.regex.message DlcField string Öffentlich [Server] Mögliche Werte: Eine (mehrsprachige) Meldung, z.B. de:Bitte geben Sie eine gültige E-Mail Adresse an!; en:Please define a valid email address!; Gültigkeit: ab: 5.00i Mit der Eigenschaft 'Validator.regex.message' an einem Feld kann man eine (mehrsprachige) Meldung angeben, die dann angezeigt wird, falls die Feldvalidierung mit einem regulären Ausdruck fehlgeschlagen ist. Diese Eigenschaft ist verfügbar für Felder der folgenden Typen: String, Text, Numerisch, Text (Fixed Font), E-Mail und URL.
Siehe auch die Eigenschaft 'Validator.regex'
- DlcFile
- AccessScript DlcFile string Veröffentlicht [Rechte] Mögliche Werte: Scriptname Gültigkeit: ab: 3.51 Das gesetzte Script wird ausgeführt, wenn der Benutzer eine Mappe öffnet. Dabei werden die Schreib- und Leserechte für den Benutzer auf die Mappe festgelegt. Die folgenden 4 Rechte werden bei der Mappenansicht ausgewertet:
"DlcFile_RightRead"
"DlcFile_RightWrite"
"DlcFile_RightChangeWorkflow"
"DlcFile_RightReactivate"
Diese befinden sich in dem enumval des aufgerufenen Scriptes. An die Stelle des Scriptnamen muss als Wert 0 / 1 angegeben werden in Abhängigkeit, ob das Recht vorhanden sein soll oder nicht.
Damit ist eine benutzerabhängige und inhaltsabhänigige (content related permissions) Verrechtung von Mappen möglich.
- ACLCacheDiv DlcFile string Veröffentlicht [Rechte] Mögliche Werte: Trennzeichen Standardwert: %CRLF% Gültigkeit: ab: 3.60c Dieses Property kommt bei Gruppen ACL zum Einsatz. Standardmäßig wird als Trennzeichen zwischen den einzelnen ACL Einträgen \r\n benutzt. Dafür muss für der folgende Propertywert gesetzt werden:
ACLCacheDiv=%CRLF% Es können auch abweichende Trennwerte gesetzt werden. Dazu sind tiefere Kenntnisse erforderlich. Dazu sich auch die Dokumentation: Mappenklassenschutz Update bestehender Daten per Wartungsoperation:
BuildAclCache Mapentypename
- ACLWithDenial DlcFile enum Öffentlich [Rechte] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00a Ermöglicht GACLs mit expliziten Verbotseinträgen für bestimmte Benutzer und Gruppen.
Für Verbotseinträge muss dem jeweiligen Bezeichner eine bestimmte Zeichenfolge vorangestellt werden, die in den Gruppenbezeichnern nicht vorkommt. (Siehe Eigenschaft ACLDenialPrefix in den Documents-Einstellungen) Diese Funktionalität wird für aktve Mappen und EAS/EDA unterstützt. Mit dem EBIS-Store funktioniert es nicht wie vorgesehen.
- actionGroups DlcFile DlcFolder DlcGlobalOptions DlcRegister text Öffentlich [Webclient5] Mögliche Werte: Ein Array von JSON-Konfigurationen. Bsp: [{ id: "gadgets", label: "de:Gadgets;en:Gadgets"}, { id: "globalActions", label: "de:Globale Aktionen;en:Global Actions", position: "end"}] Standardwert: - Gültigkeit: ab: 5.00i Konfiguration für die Anzeige einer eigenen Aktionsliste an Ordnern, Mappen und Dokumentenregister.
Aktionen müssen mit actionGroup=id die hinterlegte Liste referenzieren, um in dieser angezeigt zu werden.
Siehe auch Eigenschaft "actionGroup". JSON - Konfiguration einer Aktionsliste:
{
id: "<action-group-id>", // ID der Aktionsliste zum Referenzieren
icon: "<entypo|ionicon|mdi-icon>", // Icon das im Button der Aktionsliste angezeigt wird
label: "<action-group-label>, // Bezeichner der im Button der Aktionsliste angezeigt wird
position: "<default|right|end> // Position an der die Liste angezeigt wird.
} Aktionslisten mit gleicher ID am Register werden gegenüber am Mappentypen und global Konfigurierten Aktionslisten bevorzugt.
Für das Label kann auch die "de:...;en:..." - Notation verwendet werden.
Die Positionen sind:
default - Neben der Standard-Aktionsliste. Kann weggelassen werden.
right - Aktionsliste wird Rechtsbündig vor allen anderen Elementen angezeigt
end - Aktionsliste wird am Ende der Toolbar angezeigt
- addDoubleViewButton DlcGlobalOptions DlcFile string Öffentlich Mögliche Werte: false, 0 , true, 1 Standardwert: false Gültigkeit: ab: 5.00e Zeigt in den Mappenaktionen einen Button zur Anzeige des Dokumentennavigators neben der Mappenansicht an.
- addPdfButtonToNativeBrowserViewer DlcFile DlcGlobalOptions string Öffentlich Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00e HF2 Zeigt im nativen Webbrowser-Viewer (NativeBrowserViewer) einen Button zum Drucken dessen Inhalts als PDF.
- AdHocWorkflowDirectForward DlcFile DlcGlobalOptions enum Öffentlich [Workflow, Webclient] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00c HF2 AdHoc-Versendung: das Documents-Einstellungen bzw. Mappentyp Property AdHocWorkflowDirectForward=1 bewirkt, dass zum Weiterleiten neben dem Eintrag in der Aktionsklappliste ein "Direkt weiterleiten" Button in der Mappe dargestellt wird, der die Mappe direkt zum nächsten Empfänger sendet.
Dies bezieht sich nur auf AdHoc-Workflows und nicht auf vordefinierte Versendeliste (->DistributionListDirectForward=1) oder vordefinierte Workflow (Visio-Workflows).
(bei Client-Relevanz: Classic-Client und Client 5)
- advancedStamp DlcFile enum Öffentlich Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00a Skriptgenerierter Textstempel für Anmerkung in pdf, Man verweist mit true auf das Skript getStamp, was Stempeltext und Datum beinhalten kann.
(bei Client-Relevanz: Nur Client 5)
- afterArchiveScript DlcFile string Öffentlich [EAS, EBIS Store, EEi, EEx] Mögliche Werte: Scriptname Standardwert: leer Gültigkeit: ab: 5.00e Hier kann der Name eines Skriptes angegeben werden, das nach dem Archivieren einer Mappe ausgeführt werden soll.
- afterCancelCheckOutScript DlcFile string Veröffentlicht Mögliche Werte: Scriptname Gültigkeit: ab: 3.60h Es wird nachdem man den Check Out einer Mappe bzw. eines Dokumentes abgebrochen hat das festgelegte PortalScript ausgeführt. Als zusätzlichen globalen Scriptparameter kann man auf den Parameter documentOID zugreifen, der die oid des Dokumentes enthält, für das der Auscheckvorgang abgebrochen wird.
- afterCancelEditScript DlcFile string Veröffentlicht [Scripting] Mögliche Werte: Skriptname Kommaseparierte Liste von Skriptnamen (ab 6.0) Gültigkeit: ab: 3.60b Bei Abbruch der Mappenbearbeitung können Skripte ausgeführt werden. Details s. Portalscript API
- afterCheckInScript DlcFile string Veröffentlicht [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 3.60h Nachdem man eine Mappe bzw. Dokument eingecheckt hat wird mit Hilfe dieses Properties ein PortalScript gestartet. Als zusätzlichen globalen Scriptparameter kann man auf den Parameter documentOID zugreifen, der die oid des Dokumentes enthält, welches eingecheckt wird.
- afterDocimportScript DlcFile string Öffentlich [Scripting] Standardwert: Scriptname Gültigkeit: ab: 5.00d PortalScript, welches direkt nach dem Docimport einer Mappe ausgeführt werden kann. Details s. portalscript.chm
- afterEditArchiveFileScript DlcFile string Öffentlich [Server, Scripting, EAS, EBIS Store, EEi, EEx] Mögliche Werte: <Skriptname> Gültigkeit: ab: 5.00d HF2 Definiert ein Skript, welches nur nach dem Speichern einer Archivmappe ausgeführt wird.
- afterForwardFileScript DlcFile string Veröffentlicht [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 3.60h Es wird nachdem man eine Mappe weitergeleitet hat das festegelegte PortalScript ausgeführt.
Dies gilt nur für durch Benutzer getriggerte Aktionen. Das definierte Portalscript wird dann nach dem Weiterleiten ausgeführt. D.h. es ist damit auch KEIN Abbrechen der Weiterleitung mehr möglich. s. auch onForwardFileScript
- afterMailScript DlcFile string Öffentlich [Email, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 3.51 Dieses Property dient zur Protokollierung der versendeten Informationen bei einer, in DOCUMENTS integrierten, Adhoc-Emailversendung. Im Script stehen folgende Umgebungsvariablen zur Verfügung: - mailSubject -> Betreff wie vom Absender im Maildialog eingegeben
- mailFrom -> Emailadresse des Absenders
- mailTo -> Emailadresse des/der Empfänger(s)
- mailBody -> Inhalt der Email, wie im Versendedialog eingegeben
- mailAttachments -> Kommaseparierte Liste der versendeten Dokumente (Dokumentennamen)
- afterOcrScript DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: ScriptName Gültigkeit: ab: 5.00f Das definierte afterOcrScript wird nach durchgeführten OCR-Job für ein Dokument durchgeführt. Details s.
https://otris.software/documents/api/portalscript/tutorial-scriptexits.html#after-ocr
- afterReactivateScript DlcFile string Veröffentlicht [EEi, EEx, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 3.60g Am Mappentypen kann mit der Eigenschaft afterReactivateScript = ScriptName ein PortalScript definiert werden, welches nach Reaktivierung eines Archivtreffers zu einer Mappe des Mappentypen, ausgeführt wird.
- afterSaveScript DlcFile string Veröffentlicht [Scripting] Mögliche Werte: Kommaseparierte Liste von Skriptnamen Gültigkeit: ab: 6.00 Skripte, welche nach dem Speichern einer Mappe ausgeführt werden können. Details s. Portalscript API
- afterSetReferenceFieldScript DlcField DlcFile string Öffentlich [Scripting] Standardwert: Scriptname Gültigkeit: ab: 4.00d PortalScript welches aufgerufen wird, nach dem eine Referenz im WebClient gesetzt oder gelöscht wird. s auch portalscripting-API
- afterUploadDocumentScript DlcGlobalOptions DlcRegister DlcFile string Öffentlich [Blob, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 3.60j ab 1795, Property kann auch am Mappentypen oder Register definiert werden Dieses Script wird nach dem Upload eines Blobs ausgeführt: context.Event = afterUploadDocument, afterUploadNewDocument Lesend/Schreibend globales Object Param
----------------------------------------
param.filePath
param.fileName Document
--------
context.document
Register
--------
context.register (bei Client-Relevanz: Nein (Server Feature))
- AllowChangeFileType DlcFile enum Veröffentlicht [Webclient] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51 Der Mappentyp steht für die Klappliste beim Mappentypenwechsel nicht mehr zur Verfügung.
(bei Client-Relevanz: Classic-Client und Client 5)
- AllowedActionsScriptMode DlcGlobalOptions DlcFolder DlcFile enum Öffentlich [Rechte, Scripting, Ordner] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f HF1 Das Property AllowedActionsScriptMode = 1 am Ordner, Mappentypen oder Documents-Einstellungen
bewirkt, dass im enumval des AllowedActions-Scripts neben den benutzerdef. Aktionen auch die Standardaktionen enthalten sind.
Analog zu den benutzerdef. Aktionen können die Standardaktionen ausgeblendet werden. s. auch portalscripting.chm
- allowedDocumentTemplatesScript DlcFile DlcRegister string Öffentlich [Rechte, Webclient, Webclient5, pdf-Druck] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00a Mit dieser Eigenschaft kann ein Script definiert werden, welches Dokument Vorlagen in der Aktionsklappliste des Registers im Bearbeitungsmodus der Mappe ausblendet. Details sind in der portalscript.chm zu entnehmen
(bei Client-Relevanz: Nein (Server Feature))
- allowedMailTemplatesScript DlcFile string Öffentlich [Rechte, Webclient, Webclient5] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00a Mit dieser Eigenschaft kann ein Script definiert werden, welches Mail Vorlagen in der Aktionsklappliste ausblendet. Details sind in der portalscript.chm zu entnehmen
(bei Client-Relevanz: Nein (Server Feature))
- allowedPrintTemplatesScript DlcFile string Öffentlich [Rechte, Webclient, Webclient5, pdf-Druck] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00a Mit dieser Eigenschaft kann ein Script definiert werden, welches Druck Vorlagen in der Aktionsklappliste ausblendet. Details sind in der portalscript.chm zu entnehmen
(bei Client-Relevanz: Nein (Server Feature))
- allowReactivateWithoutWriteRight DlcFile enum Veröffentlicht [EEx, Rechte] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60f Das Reaktivieren von EE.x-Mappen ist derzeit nur möglich, wenn der Benutzer Schreibrechte für das Schema hat. Mit diesen Property am Schema kann diese Einschränkung abgeschaltet werden.
- AllowStandardCreation DlcFile enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51 bis: 3.51 Die Neuanlage einer Mappe dieses Mappentypen ist über die Aktion "Neue Mappe erstellen" nicht möglich. Diese Einstellung findet man ab Version 3.60 unter:
Mappentyp - Einstellungen => Mappenaktionen => Mappe anlegen
- alwaysShowTask DlcFile DlcGlobalOptions string Öffentlich [Webclient] Mögliche Werte: true|false|1|0 Standardwert: true Gültigkeit: ab: Mit alwaysShowTask wird auf einer Mappe die Aufgabe auch dann angezeigt, wenn ein Dokument angezeigt wird.
(bei Client-Relevanz: Nur Client 5)
- AnnotatePrevVer DlcFile enum Öffentlich [EEx, Blob] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00 Wenn innerhalb einer bestehendes EE.x-Mappe im Bearbeitungsmodus grafische Annotationen bearbeitet werden,
und ein Notizattribut im Schema enthalten ist, legt diese Eigenschaft fest, wohin die Änderung gschrieben wird. 0/false: Die Änderung der Annotationen wird nur in die neue bzw. letzte Version übertragen (nach dem Speichern der übrigen Mappendaten). Aufgrund gesperrter "Notizlayer" ist hier bei archivierten Dokumenten allerdings oft nur ein Hinzufügen neuer Notizen möglich. Andere Änderungen werden beim Speichern verworfen. 1/true: Die Änderung der Annotationen wird - soweit möglich - unmittelbar vor dem Speichern der übrigen Mappendaten an der Ursprungsversion der Archivmappe vorgenommen. Annotationen, die erst in jener Version angelegt wurden, lassen sich somit noch ändetn. Falls der EE.x-Kernel allerdings infolge weiterer Änderungen (z.B. Feldwerte) eine neue Version der Mappe anlegt, sind die Annotationen nach dem Speichern somit in zwei Versionen der Mappe geändert.
- ArchiveFullMonitor DlcGlobalOptions DlcFile enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60g Bei der Archivierung des Monitors werden ab ELC 3.60g nur noch die Einträge archiviert, die auch im Web angezeigt werden (also unter Berücksichtigung der Einstellungen am Mappentypen wie "Entscheidungen anzeigen" etc.. Mit der Mappentyp-Eigenschaft bzw. Documents-Einstellungen Eigenschaft ArchiveFullMonitor=1 kann das alte Verhalten wieder erzwungen werden (es werde alle Einträge archiviert). Gibt es an DlcGlobalOptions und DlcFile 0 : nur im Monitor-Frame angezeigte Werte werden mit archiviert
1 : alle Einträge des Mappenmonitors werden archiviert (Defaultverhalten bis ELC 3.60f)
- ArchiveHasMultiLangLabel DlcGlobalOptions DlcFile enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60g + Kann sowohl in den Documents-Einstellungen als auch am einzelnen Archivmappentypen bzw. Schema hinterlegt werden
+ dient dazu, mehrsprachige Autotitel auch in Archivmappen sauber darstellen zu können.
+ Die allgemeine Documents-Einstellung wirkt sich ab DOCUMENTS 4.0e auch in der Trefferlistenansicht aus.
- ArchiveMonitorAsPdf DlcFile enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.51 Bei der Archivierung einer Mappe, wird der als PDF-Datei statt als HTML-Datei mitarchiviert. Die PDF-Erzeugung beansprucht jedoch mehr Leistung als die HTML Erzeugung.
- ArchiveMonitorAsPdfUseFop DlcGlobalOptions DlcFile string Öffentlich [Blob, EAS, EBIS Store, EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00e Wenn ArchiveMonitorAsPdf=1 gesetzt wurde, um bei der Archivierung den Monitor als pdf zu erzeugen, wird ab DOCUMENTS 5.0e ein neuer pdf-Generator verwendet. Dadurch sehen die pdfs etwas anders aus.
Wenn die bisherige Generierung weiter verwendet werden soll. kann die mit der Eigenschaft ArchiveMonitorAsPdfUseFop=1 erzwungen werden.
- ArchiveSelectedAttachment DlcRegister DlcGlobalOptions DlcFile enum Öffentlich [Webclient, EEi, EEx, EAS] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00c Mit ArchiveSelectedAttachment=0 kann man die Registeraktion "Archivierung der selektierten Anhänge" ausschalten. (bei Client-Relevanz: Classic-Client und Client 5)
- ArchiveStatusAsPdf DlcFile enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.51 Beim Archivieren einer Mappe kann der Status mitarchiviert werden. Statt im HTML-Format wird der Status im PDF-Format abgelegt. Die PDF-Erzeugung beansprucht jedoch mehr Leistung als die HTML Erzeugung.
- ArchiveStatusAsPdfUseFop DlcGlobalOptions DlcFile string Öffentlich [Blob, EAS, EBIS Store, EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00e Wenn ArchiveStatusAsPdf=1 gesetzt wurde, um bei der Archivierung den Status als pdf zu erzeugen, wird ab DOCUMENTS 5.0e ein neuer pdf-Generator verwendet. Dadurch sehen die pdfs etwas anders aus.
Wenn die bisherige Generierung weiter verwendet werden soll. kann die mit der Eigenschaft ArchiveStatusAsPdfUseFop=1 erzwungen werden.
- ArchiveTypeLogbook DlcFile enum Öffentlich [Debug] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00a Wird das erweiterte Logging für Mappentypen und Archivtypen in der documents.ini aktiviert, so werden alle Veränderungen der definierten Attributen an allen Mappentypen und Archivtypen im Log Buch festgehalten. Möchte man jedoch einzelne Archivtypen vom Logging ausschließen so kann diese Eigenschaft am Schema gesetzt werden (s.a. FileTypeLogbook / Dokumentation: Erweitertes Logging).
- autoEditDocument DlcFile enum Veröffentlicht [Blob, Webclient] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.51f Öffnet man einen Dateianhang und lässt sich diesen intern anzeigen, so wird im Normalfall beim Klick auf den Bearbeiten Knopf das Kommentarfeld editierbar. Setzt man jedoch autoEditDocument auf true, so wird stattdessen das Bearbeiten des Dokumentes gestartet. Dieses Property macht insbesondere mit der Funktion "Erstes Dokument sofort öffnen" unter Mappentyp - Einstellungen => Allgemeines => Dokumentenoptionen Sinn.
(bei Client-Relevanz: Classic-Client und Client 5)
- autoOpenDocMode DlcGlobalOptions DlcFile DlcRegister Systemuser enum Veröffentlicht [Blob] Mögliche Werte: internal external download Standardwert: internal Gültigkeit: ab: 3.60b Es lässt sich durch dieses Property bestimmen, wie man ein Dokument aufrufen möchte. Verhalten im Classic Client: Es kann zwischen internal (im Browser) external (externer Viewer) und download gewählen werden. Die Eigenschaft wird auf dem Register, der Mappe und global unterstützt. Verhalten im Client 5: Der Wert "external" wird ab der Version 5.0e HF1 unterstützt. Die Eigenschaft kann auf einem Register, Mappentyp und global gesetzt werden und bewirkt das beim Anzeigen einer Mappe dieses Typs ein Popup mit dem ersten Dokument automatisch geöffnet wird.
Ab Version 5.0e HF2 wird die Eigenschaft zusätzlich auf dem Benutzer und mit dem Wert "internal" unterstützt. Des weiteren greift die Eigenschaft nicht mehr, wenn auf dem Mappentyp die Option "Erstes Dokument sofort öffnen" deaktiviert ist. Der Wert "download" wird weiterhin nicht unterstützt.
- autoOpenDoubleView DlcFile DlcGlobalOptions Systemuser string Öffentlich Mögliche Werte: 0, false , 1, true Standardwert: false Gültigkeit: ab: 5.00e Öffnet neben der Mappeansicht einen Dokumentennavigator mit allen Dokumenten der Mappe.
- AutoSplitFields DlcFile string Veröffentlicht [EEi] Mögliche Werte: Kommaseparierte Liste technischer Feldnamen Gültigkeit: ab: 3.60f Feldtexte, die die maximale von Enterprise.i unterstützte Länge von 32kB überschreiten, können zum Archivieren automatisch in mehrere Blöcke zerlegt werden. Beim Lesen der Archivmappe werden sie transparent wieder zusammengefügt. Die Aktivierung erfolgt durch die Eigenschaft "AutoSplitFields" beim Archivtyp. Der Eigenschaftswert ist eine kommaseparierte Liste technischer Feldnamen. Das Feature ist nicht für EE.x geeeignet. Es verursacht dort voraussichtlich Probleme bezüglich der Versionierung.
- barcodeCharsetCode128 DlcFile DlcGlobalOptions enum Veröffentlicht [Webclient, Webclient5] Mögliche Werte: A B C Standardwert: B Gültigkeit: ab: 3.51 Der ASCII-Barcode-Typ CODE128 unterstützt drei verschiedene Zeichensätze. Variante A stellt Zeichen "0-9", "A-Z" und Sonderzeichen dar,
Variante B gestattet darüber hinaus die Zeichen "0-9", "A-Z", "a-z" und Sonderzeichen,
Variante C stellt lediglich Ziffern, jedoch mit doppelter Informationsdichte dar.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeCheckChar DlcFile DlcGlobalOptions enum Veröffentlicht [Webclient, Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.51 Es ist optional möglich, bei den Barcode-Typen BAR39, BAR39EXT, CODE11, CODE93, CODE128, CODABAR, INTERLEAVED25 und MSI ein spezielles Prüfzeichen zu generieren. Manche Systeme können nur mit Barcodes umgehen, die ein solches Prüfzeichen beinhalten, daher empfiehlt es sich stets, diese Einstellungen auszuprobieren. Dies bezieht sich auf den Leitbeleg.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeFileField DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: <techn. Bezeichner Mappenfeld>, "fileId", "shortFileId" oder "shortFileId2" Gültigkeit: ab: 3.51 Es wird festgelegt, welche Information der Mappe als Barcode ausgegeben werden soll. Der Barcode wird auf dem Leitbeleg nur dann ausgegeben, wenn diese Eigenschaft am Mappentypen gesetzt ist und einen gültigen Wert enthält. Anderenfalls verhält sich der Leitbelegdruck standardmäßig, d.h. ohne Barcodeausgabe. Als Wert ist der technische Name des Mappenfelds anzugeben, dessen Inhalt als Barcode ausgegeben werden soll. Zusätzlich stehen drei spzielle Bezeichner zur Verfügung, um die aktuelle Mappen-ID anzuzeigen. - fileId
Mappen-ID inkl. Mandantennamen, z.B.:
peachit_fi20070000003791 - shortFileId
Mappen-ID ohne Mandantennamen, z.B.:
fi20070000003791 - shortFileId2
Mappen-ID ohne vorangestelltes "fi", z.B.:
20070000003791
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeHeightCm DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: cm Standardwert: 2 Gültigkeit: ab: 3.51 Die Balkenhöhe der erzeugten Barcode-Grafik in cm. Einige Barcodes geben zusätzlich die in der Grafik enthaltene Information im Klartext unter den Balken aus. Durch Manipulation dieses Parameters kann man also die Barcodehöhe und damit auch den für den Klartext verfügbaren Platz im Bild beeinflussen.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeImageHeight DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: Pixel Standardwert: 150 Gültigkeit: ab: 3.51 Die Höhe der gesamten Barcode-Grafik (inkl. Klartext) in Pixeln.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeImageWidth DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: Pixel Standardwert: 500 Gültigkeit: ab: 3.51 Die Breite der gesamten Barcode-Grafik (inkl. Klartext) in Pixeln.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeResolution DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: DPI Standardwert: 60 Gültigkeit: ab: 3.51 Die intern verwendete Auflösung der Barcode-Grafik in DPI. Höhere Werte vergrößern den erzeugten Barcode, kleinere Werte verkleinern ihn.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeTestMode DlcFile DlcGlobalOptions enum Veröffentlicht [Webclient, Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.51 Setzt man dieses Property auf true, erscheint beim Aufruf des Leitbelegfunktion aus der Aktionen-Klappliste nicht mehr der ansonsten automatisch aufgerufene Druckdialog, was das Testen der Barcode-Einstellungen komfortabler macht.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeType DlcFile DlcGlobalOptions enum Veröffentlicht [Webclient, Webclient5] Mögliche Werte: BAR39EXT BAR39 CODE11 CODE93 CODE128 CODABAR INTERLEAVED25 IND25 EAN8 EAN13 EAN128 MSI Standardwert: BAR39EXT Gültigkeit: ab: 3.51 Der zu verwendende Barcode-Standard. Zu beachten ist, dass nicht jeder Barcode-Standard mit Buchstaben und Sonderzeichen umgehen kann.
(bei Client-Relevanz: Classic-Client und Client 5)
- beforeEditScript DlcFile string Öffentlich [Scripting] Mögliche Werte: Skriptname Kommaseparierte Liste von Skriptnamen (ab 6.0) Gültigkeit: ab: 5.00 PortalScript, welches direkt vor der Bearbeitung einer Mappe ausgeführt werden kann. Details s. Portalscript API
- beforeWorkAssignScript DlcGlobalOptions DlcFile string Öffentlich [Workflow, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00f HF1 Neuer Script-Exit am Mappentyp: beforeWorkAssignScript=Scriptname wird bei jedem Workflowübergang in der Scripting-Engine ausgeführt. s. auch portalscripting.chm
- CancelWorkflowAccess DlcGlobalOptions DlcFile string Öffentlich [Workflow] Mögliche Werte: 0 Gültigkeit: ab: 4.00e Die Klapplistenaktion "Versendung abbrechen" im Web-Client kann über die diese Eigenschaft ausgeblendet werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- CheckACLOnOpenArchiveFile DlcFile enum Veröffentlicht [EEi, Rechte, EAS, EBIS Store] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60h Es war in den EEi Archiven möglich durch Quickview oder direkte Eingabe der Mappen ID auf Archivmappen zuzugreifen, für die man eigentlich keine Rechte aufgrund von ACLs bzw. GACLs hatte. Dies wurde mit der 3.60h behoben. Möchte man aber das alte Verhalten haben, so kann dies machen indem man das Property auf 0 setzt und somit die Zusatzprüfung ausschaltet.
Ab Version "5.0c HF1" ist die Eigenschaft auch für EAS- und EBIS-Stores wirksam.
- CheckMandatoryOnSave DlcFile DlcGlobalOptions enum Öffentlich [Rechte, Webclient] Mögliche Werte: n Standardwert: 0 Gültigkeit: ab: 5.00 HF1 Mappentyp-Eigenschaft CheckMandatoryOnSave=n:
Über CheckMandatoryOnSave kann gesteuert werden, wie sich der Web-Client verhalten soll, wenn Mussfelder nicht ausgefüllt wurden. Wenn CheckMandatoryOnSave nicht gesetzt ist (Standard) oder den Wert 0 hat, dann wird beim Registerwechsel im Web-Client eine Fehlermeldung ausgegeben, dass ein Mussfeld nicht ausgefüllt ist und der Registerwechsel wird nicht durchgeführt. Ab 5.0g:
Darüber hinaus kann für CheckMandatoryOnSave die folgende numerische Bitmaske als Wert gesetzt werden:
2^2 (=4): Es kann bei leeren Mussfeldern ohne Fehlermeldung zwischen den Registern gewechselt werden (ab 5.0g)
2^1 (=2): Beim Speichern der Mappe werden alle Mussfelder geprüft und ggfs eine Fehlermeldung zurück gegeben. (Ein definiertes decreaseFieldRightOnFileViewScript oder hideRegisterOnFileViewScript wird dabei NICHT berücksichtigt.)
2^0 (=1): Beim Speichern der Mappe werden alle Mussfelder geprüft und ggfs eine Fehlermeldung zurück gegeben. Restriktionen aus einem definierten decreaseFieldRightOnFileViewScript oder hideRegisterOnFileViewScript werden berücksichtigt. Bsp. Keine Fehlermeldung bei Registerwechsel, Überprüfung beim Speichern mit decreaseFieldRightOnFileViewScript, hideRegisterOnFileViewScript:
2^2 + 2^1 => CheckMandatoryOnSave=5 Hinweis:
Im decreaseFieldRightOnFileViewScript können Felder, die als Mussfelder definiert sind, auch ausblendet oder readonly werden -w, -rw, -gw.
Falls nun ein Feld ein Mussfeld ist und der Benutzer es z.B. nicht sehen kann, wegen -rw, würde bei dem Wert 2^1 (=1) dann eine Fehlermeldung kommen, dass ein Feld nicht gefüllt ist.
- collapseEmptyLabelRows DlcFile DlcGlobalOptions string Öffentlich Mögliche Werte: false, true, 0, 1 Standardwert: true (ab 6.2.0), davor false Gültigkeit: ab: 5.00f HF1 Wenn die Bezeichner aller Felder in einer Zeile nicht angezeigt werden, wird der Platzhalter für diese entfernt. Ab 6.2.0 ist dieses Verhalten im Standard aktiviert.
- CommentField DlcFile string Öffentlich Mögliche Werte: Mappenfeld Standardwert: - Gültigkeit: ab: 5.00d Ermöglicht eine Mappe zu diskutieren. Andere Benutzer können mit @-Syntax angesprochen werden. Die Kommentare können pro Mappe abonniert werden.
- commentPosition DlcGlobalOptions DlcFile string Öffentlich [Webclient5, Webclient] Mögliche Werte: default, bottom, top Gültigkeit: ab: 5.00h Positioniert den Mappenkommentar im Register. default: Standardposition (Selbes Verhalten wie bei ungesetzter Eigenschaft)
top: Als erstes nach den Register-Reitern.
bottom: Als letztes nach allen anderen Elementen.
- commentPositionBottom DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00e HF2 Zeigt die Mappenkommentar die mit commentField=Feld eingeschaltet wurden, an letzter Stelle in der Marginalspalte an. Ab der Version 5.0h sollte hierfür die Eigenschaft commentPosition verwendet werden, da diese flexibler ist.
- controlSheetFileCoverFields DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: kommaseparierte Liste technischer Feldnamen Gültigkeit: ab: 3.60 Da ein Leitbeleg u.U. nicht sehr aussagekräftig ist, kann man mit diesem Property beliebige weitere Felder im Leitbeleg hinzufügen. Es besteht die Möglichkeit, das Property sowohl am Mappentypen als auch global zu setzen.
- decreaseFieldRightOnFileViewScript DlcFile string Öffentlich [Scripting, Rechte] Mögliche Werte: Scriptname Gültigkeit: ab: 3.60d Mit dem angegebenen PortalScript kann man weitere Schreib- und Leserechte mappenanhängig bei der Mappenansicht weiter einschränken, z.B. können anhängig vom angemeldeten Nutzer die Feldrechte der Mappe dynamisch geändert werden (enumScript).(s.a. portalscripting.chm)
(bei Client-Relevanz: Nein (Server Feature))
- DefaultDropzoneRegister DlcFile string Öffentlich [Blob] Mögliche Werte: Registername Gültigkeit: ab: 5.00b Quickdropzone - Standardregister: Über die neue Eigenschaft DefaultDropzoneRegister=Registername kann das Register definiert werden, auf welches ein Dokument hochgeladen werden soll, wenn es in der Dropzone abgelegt wird.
(bei Client-Relevanz: Nein (Server Feature))
- denyArchivingIfDocumentLocked DlcFile DlcGlobalOptions enum Öffentlich [Schnittstellen, Checkin/Checkout, EBIS Store, EEx, EEi, EAS] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f HF1 Wenn die Eigenschaft denyArchivingfDocumentLocked=1 gesetzt ist, kann eine Mappe nicht archiviert werden, solange ein Dokument der Mappe ausgechecked ist.
- denyDeletionIfDocumentLocked DlcFile DlcGlobalOptions enum Öffentlich [Schnittstellen, Checkin/Checkout] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f HF1 Wenn die Eigenschaft denyDeletionIfDocumentLocked=1 gesetzt ist, kann eine Mappe nicht gelöscht werden, solange ein Dokument der Mappe ausgechecked ist.
- disableFileUploadWithoutDocumentRegister DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: Deaktiviert die Area Dropzone und den Upload Button in der Menubar, wenn die aktuelle Mappe kein Dokumentenregister hat.
- DistributionListDirectForward DlcFile DlcGlobalOptions enum Öffentlich [Workflow, Webclient] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 4.00c Versendelisten / AdHoc-Versendung: das Documents-Einstellungen bzw. Mappentyp Property DistributionListDirectForward=1 bewirkt, dass zum Weiterleiten neben dem Eintrag in der Aktionsklappliste ein "Direkt weiterleiten" Button in der Mappe dargestellt wird, der die Mappe direkt zum nächsten Empfänger sendet. Dies bezieht sich nur auf Versendelisten (s. auch AdHocWorkflowDirectForward=1) nicht aber auf vordefinierte Workflows (Visio-Workflows)
(bei Client-Relevanz: Classic-Client und Client 5)
- dlcFileTypeMaxRegisters DlcFile string Veröffentlicht [Webclient] Mögliche Werte: Zahl Gültigkeit: ab: bis: 3.60 Überschreibt den initialen Wert aus der web.xml (dlcFileTypeMaxRegisters), ab dem aus Registern Einträge in der Registerklappliste werden. Ab Version 3.60
Mappentyp - Einstellungen => Allgemeines => Dokumentenoptionen / Max. Anzahl Dokumentenregister
- dlcMarginImage DlcFile string Veröffentlicht [Webclient] Mögliche Werte: Dateiname der Grafikdatei Standardwert: Dateiname der Grafikdatei Gültigkeit: ab: 3.51 In der Mappenansicht kann in die rechte Formular-Spalte eine Grafik angezeigt werden, die den
Mappentypen repräsentiert. Dies sollte eine gif-Datei mit der Größe 48x48 Die Datei muss sich dann im Verzeichnis: \www\images\dlc\compact\margin befinden.
(bei Client-Relevanz: Nur Classic-Client)
- dlcMarginWidth DlcGlobalOptions DlcFile string Öffentlich Gültigkeit: ab: 4.00 Gibt an (in Pixeln) wie breit die rechte Seite ist. Dieses Property kann auch auf Mappentypen oder Registern gesetzt werden
In Documents4 ist dies ausserdem einstellbar unter »Documents/Einstellungen/Globale Einstellungen«. Es muss erst durch die Eigenschaft useMarginWidth eingeschaltet werden. (bei Client-Relevanz: Neues Verhalten in Client 5)
- docCompareWindow DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Öffentlich [Webclient] Mögliche Werte: false true Standardwert: false Gültigkeit: ab: 3.60g Es können mehrere Dateien extern nebeneinander zum Vergleich geöffnet werden. Zurzeit werden nur die browserinternen Viewer genutzt.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocCompareWindow". (bei Client-Relevanz: Classic-Client und Client 5)
- docFieldsEditDocument DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Webclient, Webclient5] Mögliche Werte: false, true Standardwert: true (D5), false (D4) Gültigkeit: ab: 4.00a Bei der Dokumentendetailansicht mit nebenstehenden Mappenfeldern, kann mit dieser Eigenschaft der Funktionsknopf "Dokument bearbeiten", mit dem das aktuell angezeigte Dokument direkt in den lokalen Bearbeitungsmodus versetzt werden kann, optional ausblendet werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- docRegisterGridType DlcRegister DlcFile DlcGlobalOptions string Veröffentlicht [Webclient5, Blob] Mögliche Werte: list, gallery Standardwert: list Gültigkeit: ab: 5.00d Mit der Eigenschaft docRegisterGridType kann man die Standardansicht für Dokumentenregister einstellen.
- docToolBarButtonDownload DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den "Download" Knopf ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonDownload".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonEdit DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den "Bearbeiten" Knopf ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonEdit".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonExternal DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den Knopf "Extern anzeigen" ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonExternal".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonInternal DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den Knopf "Intern anzeigen" ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonInternal".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarDropzone DlcFile string Öffentlich [Webclient5] Mögliche Werte: [true,false] Standardwert: true Gültigkeit: ab: 5.00a Mappendropzone ein-/ausschalten, Effekt: Sie ist nicht mehr zu sehen (bei Client-Relevanz: Nur Client 5)
- DocumentAttributes DlcRegister DlcFile FeatureManager string Öffentlich [Blob, Webclient, Webclient5, Rechte] Mögliche Werte: Kommaseparierte Liste: author,lastModified,version,comment Gültigkeit: ab: 5.00d HF1 Über die Registereinstellung "Dokumentenfelder anzeigen" kann man alle Dokumenenattribute Author, geändert am, Version und Kommentar gemeinsam ein- oder ausblenden. Möchte man nur einzelne Attribute darstellen kann dies über eine Positivliste gemacht werden. Dafür wird am Register die Option "Dokumentenfelder anzeigen" gesetzt und die Eigenschaft DocumentAttributes=Attr1, Attr2,...Attrn ergänzt, wobei es die folgenden Attribute gibt:
* author
* lastModified
* version
* comment
- DocumentListWithComment DlcFile DlcGlobalOptions enum Öffentlich [Webclient5, Blob] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00b Am Mappentypen bzw Documents-Einstellungen kann mit der Eigenschaft DocumentListWithComment=1 die Darstellung des Dokumentenkommentars in der Dokumentenliste aktiviert werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- doubleViewBesidesHeader DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00e Erlaubt das Rendern des DoubleView neben den Registern, bei ausschalten der Property.
- downloadBlobAsPdf DlcGlobalOptions DlcFile string Öffentlich [Blob, pdf-Druck] Mögliche Werte: 0 : Originalformat zurückgeben 1 : pdf zurückgeben, falls konfiguriert Gültigkeit: ab: 4.00d Mit der Eigenschaft showBlobAsPdf kann definiert werden, dass nach pdf konvertiert werden sollen. Möchte man beim Download der Anhänge aber das Originalformat haben, kann dies über die Eigenschaft "downloadBlobAsPdf=0" erzwungen werden.
s. auch showBlobAsPdf, sendBlobAsPdf, showBlobAsPdfInDocEditMode, showBlobAsPdfInViewMode
(bei Client-Relevanz: Classic-Client und Client 5)
- dropZoneCheckMandatoryFields DlcFile FeatureManager DlcGlobalOptions string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i Prüft ob alle Pflichtfelder ausgefüllt sind, wenn ein Benutzer versucht eine Datei an einer Mappe hochzuladen. Sind nicht alle Pflichtfelder gefüllt wird der Hochladevorgang abgebrochen.
- DropZoneOpenDocumentAfterDrop DlcGlobalOptions DlcFile string Öffentlich [Blob, Webclient5] Mögliche Werte: true, 1, false, 0 Standardwert: true Gültigkeit: ab: 5.00c Beim Hochladen von Dokumenten per DropZone kann hiermit das automatische Öffnen von Dokumenten ausgestellt werden.
(bei Client-Relevanz: Neues Verhalten in Client 5)
- EASAllowReactivate DlcArchiveServer DlcGlobalOptions DlcFile enum Öffentlich [EAS] Mögliche Werte: 0 1 false true Standardwert: true Gültigkeit: ab: 4.00 Die Eigenschaft EASAllowReactivate kann abseits der Mappentypeinstellung benutzt werden, um das Reaktivieren für bestimmte EAS-Server im Web zu unterbinden. Die Voreinstellung ist "true" (reaktivieren erlaubt).
Für Scripting/SOAP bleibt dieses Verbot ggf. unwirksam.
In den DOCUMENTS-Einstellungen gilt die Eigenschaft als Voreinstellung für alle EAS-Server ohne eigene Angabe.
- EASMergeFields DlcFile DlcGlobalOptions string Öffentlich [EAS, Performance] Gültigkeit: ab: 4.00d HF3 Bei der Migration von EE.i-Archiven nach EDA besteht das Problem, dass EE.i mehrere Felder mit gleichem Namen innerhalb eine Mappe zulässt. Bei DOCUMENTS -Mappentypen, welche unmittelbar die Mappenstruktur für EDA festlegen ist das jedoch nicht erlaubt. Damit DOCUMENTS solche Felder zu einem großen Feld zusammenfasst und korrekt damit arbeiten kann, wurde jetzt beim Mappentyp sowie in der Documents-Einstellungen die neue Eigenschaft "EASMergeFields" eingeführt. Als Wert kann eine kommaseparierte Liste von Feldnamen oder "*" für "alle Felder" angegeben werden.
Ein leerer Wert ist auch erlaubt, um anzuzeigen, dass die migrierten Archive eines bestimmten Mappentyps keine mehrfachen Felder enthalten. Wenn die Gesamtzahl von Feldern in einer Mappe groß ist (z.B. 100) und in Scripten viel mit ArchiveFileResultsets gearbeitet wird, kann die Überprüfung nach mehrfachen Feldern Zeit kosten.
Deshalb ist es sinnvoll dies nur nach Notwendigkeit einzuschalten.
- EASRetentionPolicy DlcFile DlcGlobalOptions string Öffentlich [EAS] Gültigkeit: ab: 5.00f Beim Archivieren in EAS/EDA kann mit dieser Eigenschaft eine Ablaufrichtlinie (minimale/maximale Aufbewahrungszeit) festgelegt werden. Als Wert wird eine GUID erwartet, die man zuvor aus dem EAS-Manager ermitteln muss. Bei ungültiger Id schlagen alle Archivierungsversuche fehl.
- EASSeparatorMergedFields DlcFile string Öffentlich [EAS] Gültigkeit: ab: 4.00d HF3 Trennzeichenfolge, wenn mehrfach-Felder aus EDA mit Hilfe der Eigenschaft "EASMergeFields" verschmolzen werden. Triviale Autotexte wie %CRLF% sind erlaubt.
- EASShowVersioningErrors DlcFile DlcArchiveServer enum Öffentlich [EAS] Mögliche Werte: 0 1 2 3 Standardwert: 1 Gültigkeit: ab: 4.00d Verfahrensweise für Lesefehler bei der Versionierung von Archivmappen festlegen. Beim Speichern von Änderungen an einer Archivmappe passiert es gelegentlich, dass die Daten der Vorversion nicht mehr gelesen werden können. Die Archivmappe könnte zum Beispiel inzwischen gelöscht sein oder das EAS-Archiv hat ein technisches Problem beim Zugriff auf die Registry. DOCUMENTS kann nicht alle möglichen Ursachen für so einen Lesefehler kennen und muss dennoch entscheiden, wie mit dem Fehler verfahren wird.
Dieselbe Problematik besteht auch beim wiederholten Archivieren einer aktiven Mappe. Vor Version 4.0d übersprang DOCUMENTS in so einem Fall die Versionierung und legte eine neue Archivmappe an. Mit der Einführung dieser Eigenschaft in Version 4.0d ist zugleich die Voreinstellung für EAS so geändert worden, dass solche Fehler gemeldet werden. Bedeutung der möglichen Eigenschaftswerte:
0 = Keine Meldung; immer eine neue Mappe im Archiv anlegen
1 = Immer einen Fehler melden
2 = Fehlermeldung nur bei Bearbeitung einer Archivmappe, sonst Neuanlage
3 = Fehlermeldung nur bei Archivierung einer aktiven Mappe, sonst Neuanlage Die Eigenschaft kann auch beim Archivserver angegeben werden. Sie gilt dann innerhalb eines Stores für alle Mappentypen ohne eigenen Eintrag.
Für EE.x existiert eine vergleichbare Eigenschaft "ShowVersioningErrors".
- EASStrictDeleteMode DlcFile enum Öffentlich [EAS, Rechte] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00b Mit der Mappentyp-Eigenschaft EASStrictDeleteMode=0 kann definiert werden, dass das Löschen ohne Löschrecht (Mappentyprechte) bei EDA Mappen möglich ist.
- EBISArchivingConfig DlcFile DlcGlobalOptions text Öffentlich [EBIS Store] Gültigkeit: ab: 5.00g Der in diesem Property eingetragene String wird beim Archivieren las "archiving_config" an EBIS übergeben. Enthaltene Autotexte werden vorher ersetzt. Dies wurde von Easy für bestimmte Projektlösungen angefordert und erfordert eine neue, noch unbekannte EE.x- bzw. EBIS-Version. Ältere Versionen produzieren einen "Fehler 400", wenn diese Eigenschaft benutzt wird und der String nicht leer ist.
- EBISPreferProcessModDate DlcFile DlcGlobalOptions enum Öffentlich [EBIS Store, Blob] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00e HF2 Wenn Documents eine Mappe samt "Metadaten der Dokumente" in einen EBIS-Store archiviert, fügt es (seit Version 5.0e HF2) zu der Metainformation jedes Anhangs zwei verschiedene Zeitstempel hinzu.
Beim späteren Wiedereinlesen steuert diese Eigenschaft, welcher Zeitstempel als Änderungsdatum des Anhangs gelten soll. 0/false: Der Zeitpunkt der Archivierung
1/true: Der Zeitpunkt der letzten bekannten Änderung innerhalb von Documents Nach dem Ändern dieser Eigenschaft sollten die temporären Archivmappen gelöscht werden. sonst bleibt die Änderung teilweise wirkungslos.
- EBISShowVersioningErrors DlcFile DlcArchiveServer enum Öffentlich [EBIS Store] Mögliche Werte: 0 1 2 3 Standardwert: 0 Gültigkeit: ab: 5.00 Verfahrensweise für Lesefehler bei der Versionierung von Archivmappen festlegen.
Diese Eigenschaft entspricht ShowVersioningErrors, gilt jedoch für EBIS Bedeutung der möglichen Eigenschaftswerte:
0 = Keine Meldung; immer eine neue Mappe im Archiv anlegen
1 = Immer einen Fehler melden
2 = Fehlermeldung nur bei Bearbeitung einer Archivmappe, sonst Neuanlage
3 = Fehlermeldung nur bei Archivierung einer aktiven Mappe, sonst Neuanlage
- EditDetachedFromFolders DlcFile enum Veröffentlicht [Suche, Rechte, Ordner] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.51 Dieses Property besitzt die gleiche Eigenschaft wie die Einstellung "Ordnerrechte ignorieren" in den Documents - Einstellungen. Der Unterschied ist jedoch das dieses Property nur für den Mappentypen gilt bei dem es gesetzt wird. Sollten beide Einstellungen gesetzt sein, so überschreibt dieses Property die Einstellung "Ordnerrechte ignorieren" für den Mappentyp.
- EEIBlobNaming DlcFile enum Veröffentlicht [Blob, EEi] Mögliche Werte: 0 1 2 3 4 Standardwert: 0 Gültigkeit: ab: 3.60c Für Dateianhänge von Enterprise.i-Archivmappen kann man jetzt beeinflussen, wie die Web-Dateinamen aus den beiden EE.i-Eigenschaftsfeldern "Original-Dateiname" und "Dokumenttitel" zusammengesetzt werden. Das Feld "Original-Dateiname" nimmt leider nur MS-DOS-Dateinamen auf, während das andere Feld zwar längere Dateinamen, aber stattdessen auch nahezu beliebigen Text enthalten kann, den das jeweils archivierende Programm dort hineingeschrieben hat. Um Probleme mit der Dateibennenung im Webclient zu umgehen, kann man in den Documents-Einstellungen oder am Archivtyp eine Eigenschaft "EEIBlobNaming" mit den Werten 0 bis 4 setzen. 0 = (Standard) Es wird der "Dokumenttitel" als Dateiname benutzt. Innerhalb der XML-Server-Schnittstelle handelt es sich hierbei um das Element "BLOBNAME". Sofern in dem Namen mindestens ein Punkt enthalten ist, gelten alle Zeichen ab dem letzten Punkt als Extension. Ansonsten wird die Extension aus dem Feld "Original-Dateiname" (alias "ORGFILENAME") ermittelt und angefügt. 1 = Der "Dokumenttitel" wird als Dateiname ohne Extension interpretiert und die Extension aus "Original-Dateiname" stets hinten angefügt. 2 = Es wird zunächst die Extension aus "Original-Dateiname" ermittelt. Sofern der Inhalt aus "Dokumenttitel" mit denselben Zeichen endet, wird er unverändert übernommen, ansonsten die Extension angefügt.
Ab Version 4.0b #1843 wird auch eine abgeschnittene Extension im Dokumenttitel erkannt und mit den fehlenden Zeichen aus dem anderen Feld aufgefüllt. 3 = Es wird nur der "Original-Dateiname" angezeigt. 4 = Der vollständige Dateiname wird dem XML-Element "FILENAME" aus der Schnittstelle entnommen (hinzugefügt in Version 4.0c HF1). Das Entfernen von Pfadangaben oder vorangestellten Mimetype-Angaben aus dem Dokumenttitel erfolgt unabhängig von dieser Einstellung.
- EEXBlobNaming DlcFile enum Veröffentlicht [Blob, EEx] Mögliche Werte: 0 1 2 3 4 Standardwert: 0 Gültigkeit: ab: 4.00c HF1 Ein Dateianhang an einem EE.x-Dokument kann unter Umständen mehrere Benennungen haben.
Diese Eigenschaft legt fest, wie Documents den intern verwendeten Dateinamen aus den verfügbaren Angaben des XML-Servers zusammensetzt.
Die Eigenschaft unterstützt dieselben Optionen wie "EEIBlobNaming". Für EE.x erscheinen jedoch nur folgende Werte sinnvoll. 0 = (Standard) Der Dateiname wird dem XML-Element "BLOBNAME" entnommen. Falls dieser Name keine Extension enthält, wird die Extension aus dem XML-Element "ORGFILENAME" ermittelt und angefügt. 3 = Der Dateiname wird dem XML-Element "ORGFILENAME" entnommen. 4 = Der Dateiname wird dem XML-Element "FILENAME" entnommen. Anmerkung: In der Regel sind diese Namensangaben alle identisch. Im Zusammenhang mit EE.i-Migrationstools sind jedoch Fälle bekannt geworden, wo das nicht mehr der Fall ist.
- emailViewerHTMLTextSwitch DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 6.00 Aktiviert einen Button, mit dem im Email-Viewer zwischen HTML- und Textansicht gewechselt werden kann.
- eMaster DlcFile string Öffentlich [Webclient5] Mögliche Werte: Name eines Referenzfelds Gültigkeit: ab: 5.00f Gibt ein Referenzfeld an, mit welchem die übergeordnete Mappe für die Aktennavigation ausgewählt wird. Von dieser übergeordneten Mappe wird daraufhin die eNavigator Eigenschaft untersucht.
Seit 5.0f HF1: Kann auch einen AutoText enthalten, welcher im Mappenkontext ausgewertet wird: z.B.: %feldname%
- emptyEnumPlaceholder DlcFile string Öffentlich [Webclient5] Gültigkeit: ab: 5.00g HF2 Über die Eigenschaft emptyEnumPlaceholder an einem Enum-Feld wird ein nicht selektierbarer Platzhalter als Feldwert gesetzt, solange dieses keine Aufzählungswerte hat.
- eNavigator DlcFile string Öffentlich [Webclient5] Mögliche Werte: true oder Name eines Skriptes Gültigkeit: ab: 5.00f Aktiviert die Aktennavigation und das Inhaltsverzeichis an dem aktuellen Mappentypen. Falls ein Skriptname angegeben wird, dient dieses zur Konfiguration des Navigators und des Inhaltsverzeichnisses
- ExtSearchScope DlcFile enum Öffentlich [Suche, EAS] Mögliche Werte: 0 1 2 3 Standardwert: 3 Gültigkeit: ab: 4.00b HF1 Mit dieser Eigenschaft kann die erweiterte Suche in einem Mappentyp hinsichtlich EDA auf ein System eingeschränkt oder auch komplett ausgeschlossen werden. 0 = Der Mappentyp ist in der erweiterten Suche nicht mehr auswählbar.
1 = Die Suche in dem Mappentyp ist auf aktive Vorgänge beschränkt.
2 = Die Suche in dem Mappentyp ist auf Archivmappen beschränkt.
3 = Die Suche in dem Mappentyp ist unbeschränkt. Auf die direkte Volltextsuche, dynamische Ordner u.s.w. hat diese Einstellung keinen Einfluss. Sie lasst sich zudem umgehen, wenn die erweitere Suche auf Einzelauswahl von Mappentypen (per Klappliste) eingestellt ist und die Option "[alle Mappentypen]" verfügbar ist. Die Option lässt sich entfernen, indem die Eigenschaft "FiletypeMassSelection" unter "Documents-Einstellungen" auf "0" gesetzt wird. (bei Client-Relevanz: Nein (Server Feature))
- fieldAIRelevantDefaultMode DlcFile enum Öffentlich Mögliche Werte: true false readonly required optional auto Standardwert: auto Gültigkeit: ab: 6.1.0 Definiert, ob und wie die Felder der Mappe der KI zur Verfügung stehen. Für weitere Informationen bitte im AI Toolkit Handbuch nachlesen.
- fieldRegisterName DlcFile string Veröffentlicht [Webclient] Mögliche Werte: AutoText Standardwert: AutoText oder statischer Text Gültigkeit: ab: 3.51 Statt dem Standardbezeichner "Felder" kann für die Feldregisterseite ein Bezeichner definiert werden. Dies ist auch mit einem dynamischem Bezeichner in Form eines AutoTextes möglich.
(bei Client-Relevanz: Classic-Client und Client 5)
- fileCoverGadgetConfig DlcFile text Öffentlich [Webclient5] Mögliche Werte: Gadget-Konfiguration (z.B.: { gadgetScript: "Gadget_MyFileCoverGadget", gadgetAction: "showFileCover" }) Gültigkeit: ab: 5.00h Mit der Eigenschaft fileCoverGadgetConfig kann ein Gadget definiert werden, das im Lesemodus statt des Standard-Mappendeckels angezeigt wird.
- fileDetailsScript DlcFile string Öffentlich Mögliche Werte: Portalskript Gültigkeit: ab: 5.00a Skript zum Generieren von Mappendetailinfos zur Anzeige im Ordner (bei Client-Relevanz: Nur Client 5)
- fileDisplayedViewAsPdf DlcFile string Öffentlich [Webclient5, pdf-Druck] Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00f Fügt allen Feldregistern einer Mappe, die sich im Anzeigemodus befinden, einen PDF-Generierungsbutton hinzu. Bei Betätigung wird ein PDF des aktuell angezeigten Registers erzeugt und zum Download angeboten. Der Button zur PDF-Generierung wird nur beim Hovern über die rechte obere Ecke des Feldregisters angezeigt.
- fileEmailAutoCompleteConfig DlcFile DlcGlobalOptions text Öffentlich [Email] Mögliche Werte: Beispiel AutoComplete Konfiguration JSON-Format: { scriptName : "MyAutoCompleteScript", minQueryChars : 2, queryDelay : 0.5, maxResults : 25, autoFocusResult : false } Standardwert: JSON Format Gültigkeit: ab: 5.00c Mit dieser Eigenschaft kann die Autocomplete Funktion für die E-Mail Felder wie To: und CC: konfiguriert werden.
- fileInfoBackgroundColor DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: CSS-Farbe/Alle möglichen Werte für die CSS-Property "background-color" Standardwert: - Gültigkeit: ab: Ändert die Hintergrundfarbe des Fileinfo-Headers oben auf der Mappe. Hier kann jeder gültige Wert für die CSS-Eigenschaft "background-color" verwendet werden.
- fileInfoIconBackgroundColor DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: CSS-Farbe/Alle möglichen Werte für die CSS-Property "background-color" Standardwert: - Gültigkeit: ab: Ändert die Hintergrundfarbe des Fileinfo-Icons links oben im auf der Mappe. Hier kann jeder gültige Wert für die CSS-Eigenschaft "background-color" verwendet werden.
- fileInfoIconColor DlcFile DlcGlobalOptions string Öffentlich Mögliche Werte: CSS-Farbe/Alle möglichen Werte für die CSS-Property "color" Standardwert: - Gültigkeit: ab: 6.2.0 Ändert die Farbe des Fileinfo-Icons links oben im auf der Mappe. Hier kann jeder gültige Wert für die CSS-Eigenschaft "color" verwendet werden.
- fileRegisterbarBackgroundColor DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: CSS-Farbe/Alle möglichen Werte für die CSS-Property "background-color" Standardwert: - Gültigkeit: ab: Ändert die Hintergrundfarbe der Registeranzeige. Hier kann jeder gültige Wert für die CSS-Eigenschaft "background-color" verwendet werden.
- fileRegisterDisableToggle DlcFile DlcGlobalOptions string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: Entfernt die Möglichkeit die Registerbar ein oder auszuklappen.
- fileSignalColor DlcGlobalOptions DlcFile string Öffentlich [Webclient5] Mögliche Werte: CSS-kompatible Farbe als Hexadezimalcode oder Farbname Gültigkeit: ab: 5.00a Anzeigefarbe der Mappe
Hinweis: ignoriert den Parameter fileColorMode, falls es auf false steht
(bei Client-Relevanz: Nur Client 5)
- FileTypeLogbook DlcFile enum Öffentlich [Debug] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00a Wird das erweiterte Logging für Mappentypen und Archivtypen in der documents.ini aktiviert, so werden alle Veränderungen der definierten Attributen an allen Mappentypen und Archivtypen im Log Buch festgehalten. Möchte man jedoch einzelne Mappentypen vom Logging ausschließen so kann diese Eigenschaft am Mappentyp gesetzt werden (s.a. ArchiveTypeLogbook / s.a. Dokumentation: Erweitertes Logging).
- FilingPlanClearDefaultValuesOnDeselect DlcField DlcFile DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 4.00c Eigenschaft bewirkt, dass wenn beim Auswahldialog für den Aktenplan "Eintrag löschen" ausgewählt wird, vorher gesetzte Defaultwerte auch geleert werden (bei Client-Relevanz: Classic-Client und Client 5)
- firstRegisterName DlcFile string Öffentlich [Webclient5] Mögliche Werte: tech. Name vom Register Gültigkeit: ab: 5.00a Mit der Eigenschaft "firstRegisterName" am Mappentyp kann ein Register angegeben werden, welches beim Erstellen der Mappe direkt angezeigt wird. Für den Mappendeckel kann "FileCover" verwendet werden.
Die Eigenschaft "startRegisterName" wird überstimmt
Allerdings wird "erstes Dokument öffnen" vorrangig behandelt.
(bei Client-Relevanz: Neues Verhalten in Client 5)
- fromFiletypeChangedScript DlcGlobalOptions DlcFile string Öffentlich [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00f HF1 Neuer Script-Exit am Mappentyp: fromFiletypeChangedScript=Scriptname. Nach dem Mappentypwechsel wird das angebene Script ausgeführt. Die Eigenschaft fromFiletypeChangedScript muss am Ausgangsmappentypen gesetzt werden.
- FulltextSearch DlcFile enum Veröffentlicht [Suche] Mögliche Werte: 0 1 2 3 Standardwert: 0 Gültigkeit: ab: 3.51 Unterhalb des Volltextsuchfelds kann eine Klappliste mit ausgewählten Mappen- und Archivtypen angezeigt werden, auf den die Volltextsuche nach Auswahl eines Mappen-/Archivtypen begrenzt ist. siehe Anhang 0 = Der Mappentyp steht nicht zur Auswahl
1 = Der Mappentyp steht zur Auswahl. DOCUMENTS 4: EAS-Archive werden nicht durchsucht. Weitere Werte ab DOCUMENTS 4.0b in Verbindung mit EAS/EDA:
2 = Der Mappentyp steht zur Auswahl. Die Suche ist auf Archive beschränkt.
3 = Der Mappentyp steht zur Auswahl. Die Suche schließt Archive mit ein.
- gentableDefField DlcFile string Öffentlich [Gentable] Mögliche Werte: Der Name des Feldes das den Namen der Definitionsdatei enthält. Gültigkeit: ab: 4.00a Problem: Nicht immer reicht es eine Definitionsdatei für das Invoice-Szenario zu haben. Wie kann man abweichend vom Mappentypnamen eine derartige Datei anlegen? Lösung: Es sollte ein Feld angelegt werden, das den Namen aufnimmt (mit Endung: z.B. Test_Def.xml). In den Eigenschaften des Mappentyps trägt man das Property »gentableDefField« ein. Der Wert ist der technische Name des Feldes.
(bei Client-Relevanz: Classic-Client und Client 5)
- gentableDefScriptName DlcFile string Öffentlich [Gentable] Mögliche Werte: Skriptname Standardwert: "" Gültigkeit: ab: 5.00b Das Property erlabut es, eine Gentable Definition über ein Skript zu laden.
- HandleBlobWithAlreadyUsedNameAsNew DlcRegister DlcFile DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00c HF1 Wird ein Dokument auf ein Register hochgeladen, welches schon ein Dokument mit dem gleichen Namen enthält, dann wird das neue Dokument automatisch umbenannt (ein Zahl wird angehängt 0,1,2..).
Ist HandleBlobWithAlreadyUsedNameAsNew=0 gesetzt, dann wird das neue Dokument mit dem gleichen Namen als neue Version des bestehenden Dokumentes angesehen und ist das die neue aktuelle Version.
- hasInvoicePlugin DlcFile enum Veröffentlicht Mögliche Werte: true false Gültigkeit: ab: 3.60f Das Invoice Plugin kann hiermit aktiviert werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- hideFileEditButton DlcGlobalOptions DlcFile string Öffentlich [Webclient5] Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00d Mit der globalen oder Mappentyp-Eigenschaft "hideFileEditButton" = "true" kann der "Bearbeiten"-Button auf einer Mappe optional komplett ausgeblendet werden, falls der aktuelle Benutzer kein Schreibrecht auf dieser Mappe besitzt. Im Standardfall ("false") wird der "Bearbeiten"-Button weiterhin im Readonly-Style dargestellt und ist nicht anklickbar.
- hideForwardOptionScript DlcFile string Öffentlich [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00e HF2 Mit dem angegebenen Aufzählungsskript kann man die Optionen ('Weiterleiten an' und 'Rückfrage an') auf dem Dialog zum Weiterleiten der Mappe ausblenden (s.a. portalscripting.chm). Der Dialog wird angezeigt, nachdem ein Benutzer eine Aktion zum indirekten Weiterleiten in einem Workflow auswählt. Ein indirektes Weiterleiten wird erlangt durch Deselektierung der Option 'direkt weiterleiten' beim Kontrollfuß der Aktion.
- hideForwardReceiverScript DlcFile string Öffentlich [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00e HF2 Mit dem angegebenen Aufzählungsskript kann man Empfänger auf dem Dialog zum Weiterleiten der Mappe ausblenden (s.a. portalscripting.chm). Der Dialog wird angezeigt, nachdem ein Benutzer eine Aktion zum indirekten Weiterleiten in einem Workflow auswählt. Ein indirektes Weiterleiten wird erlangt durch Deselektierung der Option 'direkt weiterleiten' beim Kontrollfuß der Aktion.
- hideRegisterOnFileViewScript DlcFile string Öffentlich [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 4.00c Mit dem angegebenen Aufzählungsskript kann man einzelne Register einer Mappe bei der Mappenansicht ausblenden. (s.a. portalscripting.chm)
(bei Client-Relevanz: Nein (Server Feature))
- HighlightHitwords DlcFile enum Veröffentlicht [Suche] Mögliche Werte: false true Gültigkeit: ab: 3.51 Wenn die gleichnamige Eigenschaft in den Documents-Einstellungen eingeschaltet wurde, kann sie hier
für einzelne Mappentypen bzw. Schemata ausgeschaltet werden.
Der umgekehrte Fall wird bislang nicht unterstützt. DOCUMENTS 4 und neuer: In den Documents-Einstellungen ersetzt eine Checkbox diese Eigenschaft.
- htmlSanitizeDisabled DlcField DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i HF7 Eigenschaft für Felder vom Typ HTML Wenn diese Eigenschaft an einem Feld auf true gesetzt wird,
wird der Wert des HTML-Feldes vor der Anzeige nicht bereinigt.
D.h. es besteht die Gefahr das schädlicher HTML-Code in die Webapplikation gelangt.
Felder mit dieser Eigenschaft sollten deshalb grundsätzlich schreibgeschützt sein und
die Sicherheit des Inhaltes muss über andere Mechanismen gewährleistet werden. Das Setzen der Eigenschaft am Mappentyp führt dazu das der gesetzte Wert als Standard für alle
HTML-Felder der Mappe verwendet wird.
Die Eigenschaft kann auch global gesetzt werden und wirkt sich dann auf alle HTML-Felder aus (nicht empfohlen). Hinweis: Aufgrund der Art und Weise wie der Inhalt von HTML Feldern in die Applikation eingebunden
wird ist es auch mit dem Setzen dieser Eigenschaft NICHT möglich script-Tags über
HTML-Felder in den Webclient einzubinden. Stattdessen sollte der ClientHeaderCode-Mechanismus
verwendet werden.
- IgnoreBlobMetaFile DlcFile enum Veröffentlicht [EEi, EEx, Blob] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60h Wird eine Mappe aus DOCUMENTS archiviert, kann man im PortalClient beim Mappentyp festlegen, ob der Status, der Monitor und die Metadaten der Dokumente ebenfalls archiviert werden sollen. Lädt man nun eine solche Mappe aus dem Archiv in DOCUMENTS werden die Dokumente in ihre ursprünglichen Dokumentenregister sortiert. Möchte man dies für den Mappentypen nicht, so kann man dieses Property setzen. Es gehen dabei Registerzuordnungen, Kommentar und grafische Annotationen verloren. Die Dokumente werden dann dem ersten Dokumentenregister zugeordnet. (s.a. RegAssign)
- ignoreEmptyMonitor DlcGlobalOptions DlcFile string Öffentlich [Workflow] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00e HF1 Zeigt den Monitor nur an, wenn Einträge vorhanden sind.
- IgnoreFolderRights DlcFile enum Veröffentlicht [Rechte, Suche] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60d Alternativ zu der globalen Einstellung "Ordnerrechte ignorieren", kann mit dieser Eigenschaft am Mappentypen, das Suchverhalten mappentypspezifisch konfiguriert werden.
- IgnoreReadRightCheckOnAccessScript DlcFile DlcGlobalOptions enum Öffentlich [Rechte, Scripting] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00h PortalScripting: AccessScript in Verbindung mit (G)ACLs: Wenn ein AccessScript am Mappentypen definiert ist wurden die Leserechte auf die Mappe z.B. durch Mappenklassenschutz ignoriert. Nun werden immer erst die Leserechte geprüft. Wenn kein Leserecht auf die Mappe besteht, dann wird das AccessScript nicht mehr ausgeführt und der Benutzer hat keine Rechte für die Mappe. Als Fallback kann man über die Mappentyp bzw. Documents Einstellungen Eigenschaft: IgnoreReadRightCheckOnAccessScript = 1 das bisherige Verhalten wieder einschalten.
- ImportLock DlcFile enum Öffentlich [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60e Mit dem Setzen dieser Eigenschaft auf 1 kann man einen einzelnen Archivtyp (ein importiertes EE.i-Archiv bzw. EE.x-Schema) vor Veränderungen durch erneute Archivstrukurimporte schützen.
Dies gilt sowohl für manuelle Importe durch einen Documents-Administrator als auch für AdHoc-Schemaimporte.
- InitialLifeState DlcFile enum Veröffentlicht [EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60h Mit diesen Property lässt sich beim Archivieren einer Mappe in das EEx Archiv der LifeState Zustand festlegen. Wird der Wert auf 0 gesetzt, so gilt die Mappe noch als "lebendig" und kann somit noch bearbeitet werden. Ändert man den Wert auf 1 wird die Mappe sofort archiviert und jede weitere Änderung verursacht eine neue Version der Mappe.
- keepDocRegisterSorting DlcGlobalOptions DlcFile enum Öffentlich [Webclient, Sortierung] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 4.00b HF2 Die Eigenschaft "keepDocRegisterSorting" schaltet bei Bedarf die sessionweite, nicht-persistente(!) Speicherung der Sortierung der Dokumentenlisten auf Registern ein oder aus. Die Sortierung wird je Mappentyp (nicht Vorgang!) und Register für die Dauer einer Sitzung beibehalten.
Diese Eigenschaft ist sowohl bei DOCUMENTS EInstellungen als auch auf einem Mappentyp verfügbar,
wobei der Mappentyp im konkurrierenden Fall die höhere Priorität hat. (bei Client-Relevanz: Nein (Server Feature))
- linkRegisterCompactView DlcGlobalOptions DlcFile DlcRegister string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00h HF1 Schaltet die Kompaktansicht für Verknüpfungsregister und Mappen-Link-Register ein/aus.
- linkRegisterCompactViewWidth DlcGlobalOptions DlcRegister DlcFile string Öffentlich [Webclient5] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00h HF1 Legt die Breite fest, ab der die Verknüpfungsregister- und Mappenlinkregisteransicht in den Kompaktmodus wechselt.
- mailAvailableBlobsScript DlcGlobalOptions DlcFile string Öffentlich [Email, Blob] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00e Neuer Script-Exit am Mappentyp: mailAvailableBlobsScript=Scriptname ermöglicht die im Web-Client zur Mail-Versendung zur Verfügung stehenden Anlagen einzuschränken oder zu ergänzen. s. auch portalscripting.chm
- marginGadgetConfigs DlcFile text Öffentlich Mögliche Werte: Ein Array von Gadget - Verweisen. Bsp.: [{gadgetScript:'GadgetSample_HelloGadget',gadgetAction:'showHelloMessage'}, {gadgetScript: 'GadgetSample_HtmlGadget', gadgetAction: 'showHtmlText'}] Gültigkeit: ab: 5.00a In der Seitenleiste von Mappen können ebenfalls Gadgets verwendet werden. Dazu muss die Eigenschaft „marginGadgetConfigs“ für den jeweiligen Mappentypen festgelegt werden. In dieser Eigenschaft können mehrere Gadgets verwendet werden, die in der Seitenleiste untereinander dargestellt werden.
(bei Client-Relevanz: Nur Client 5)
- MarginTitle DlcFile string Öffentlich [Webclient] Mögliche Werte: AutoText Gültigkeit: ab: 4.00 Mit dem MarginTitle kann ein vom Mappentitel abweichender Titel definiert werden, der in der Randspalte (Marginalspalte) der Mappenansicht (Feldregister) angezeigt werden soll.
(bei Client-Relevanz: Classic-Client und Client 5)
- MaxArchivedBlobNameLength DlcFile string Veröffentlicht [EEi, EEx, Blob] Mögliche Werte: vorzeichenlose Ganzzahl; der Wert 0 steht für "unbegrenzt" Standardwert: 78 für Enterprise.i, sonst 0 Gültigkeit: ab: 3.60i Legt fest, bei welcher Länge ELC den in einem Metadatenblob (.DMI-Blob) geschriebenen Namen des
dazugehörigen Dateianhangs abschneiden soll, um die korrekte Zuordnung zwischen Metadaten
und Dateianhang herzustellen. Hintergrund: Das Dateinamensattribut von Enterprise.I fasst nur 78 Zeichen. Wenn ein Dateianhang
einen längeren Namen hat und mit Metadaten (Registerzuordnung, grafische Annotationen) im
ELC-Format) archiviert wurde, steht im Metadatenblob der ungekürzte Dateiname, der Name der
beschriebenenen Datei ist jedoch archivseitig abgeschnitten.
Um das Ursprungsblob zu den Metadaten weiterhin identifizieren zu können, bleibt ELC nichts übrig, als den aus den Metadaten gelesenen Namen ebenfalls abzuschneiden, damit die Namen wieder übereinstimmen. Die Eigenschaft kann am Archiv/Schema sowie in den Documents-Einstellungen gesetzt werden.
- maxRegisterMode DlcFile string Öffentlich Mögliche Werte: 1,0,true,false Standardwert: true Gültigkeit: ab: 5.00d HF2 Wirkt sich nur auf das Verhalten der Registerklapptliste bei gesetztem "Max. Anzahl Register" aus. Bei false kann man die Register schon ab dem ersten Register nach dem FileCover einklappen.
Normalerweise wird das FileCover nicht als normales Register mitgezählt.
(bei Client-Relevanz: Nur Client 5)
- ModifyDoc DlcFile text Veröffentlicht [Blob] Mögliche Werte: Dateiendung1,Dateiendung2;Programmpfad Beispiel: pdf;C:\tmp\stamp.bat %input %output stamp.bat: @setlocal @set inputFile=%1 @set outputFile=%2 @set watermark="c:\tmp\watermark.pdf" @set pdftk="C:\Program Files\documuments5\createpdf\concatpdf\pdftk.jar" @set javacmd=java -jar %pdftk% @call %javacmd% %inputFile% background %watermark% output %outputFile% 2>&1 @endlocal Zu beachten ist, dass der letzte Wert das externe Programm ist und das %input %output Bestandteile des letzten Wertes darstellen. Gültigkeit: ab: 3.51 Beim Abrufen bzw. beim Download eines Dokumentes wird bevor die Aktion ausgeführt wird ein externes Programm geladen, dass das Dokument verändert. Dies kann z.B. dazu genutzt werden, um Bilder die der Viewer nicht darstellen kann so umzuwandeln, dass die Darstellung des Dokumentes möglich wird. Da man Properties nicht zweimal an der gleichen Stelle setzt, sollte man dran denken, dass man hiermit nur ein Dateityp bearbeitet werden kann.
Typisches Beispiel: z.B Wasserzeichen auf pdf aufbringen.
- monitorGadgetConfig DlcFile text Öffentlich [Webclient5] Mögliche Werte: { gadgetScript: '<Skriptname>, gadgetAction: '<Aktionname>' } Standardwert: - Gültigkeit: ab: Im Monitor kann ein Gadget zur Anzeige hintererlegt werden.
(bei Client-Relevanz: Neues Verhalten in Client 5)
- monitorRegister DlcFile string Veröffentlicht [Webclient] Mögliche Werte: Registername Standardwert: Registername Gültigkeit: ab: 3.51 In dem Monitor-Frame unterhalb der Mappenfelder wird standardmäßig der Worklfow-Monitor dargestellt.
Es können aber auch, die in einem Verknüpfungsregister spezifizierten verknüften Mappen in diesem Monitor-Frame dargestellt werden. Dazu muss als Propertywert der Registername angegeben werden. Der Workflow-Monitor wird dann nur noch auf der Status-Registerseite angezeigt.
(bei Client-Relevanz: Classic-Client und Client 5)
- MonitorWithTimestamp DlcFile enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60i Ausblenden der Uhrzeitangabe Im Monitor. Mit der globalen Eigenschaft bzw. Mappentypeigenschaft MonitorWithTimestamp=0 kann definiert werden, dass im Worklfow-Monitor nur noch das Datum ohne Uhrzeit für die einzelnen Einträge angezeigt wird
- nativePdfViewerUrlParameter DlcGlobalOptions DlcFile DlcRegister Systemuser string Öffentlich [Webclient5] Standardwert: view=fitV Gültigkeit: ab: 5.00e HF2 Über die Property können Parameter an die URL des Nativen PDF Viewers angehängt werden, mit denen der Viewer geöffnet werden soll. Beispiele hierfür sind 'view=FitV', 'view=FitH' und 'zoom=100'. Die Eigenschaft ist erst ab 6.1.0 am Benutzer verfügbar.
- NewRegisterFieldRights DlcGlobalOptions DlcFile DlcRegister string Öffentlich [Rechte, Webclient] Mögliche Werte: 0 Gültigkeit: ab: 4.00d Verrechtung am Dokumentenregister: Wenn auf dem Dokumentenregister
Mappenfelder angezeigt wurden, und das Dokumentenregister verrechtet war
haben fehlende Schreibrechte auf dem Dokumentenregister dazu geführt,
dass auch die Mappenfelder auf dem Register "readonly" waren.
Dieses wurde dahingehend korrigiert, dass Rechte auf Dokumentenregister
keinen Einfluß mehr auf die angezeigten Felder auf diesem Register haben.
Das alte Verhalten kann man über die Documents-Einstellungen Eigenschaft
NewRegisterFieldRights=0 erreichen.
Beim Starten des DOCUMENTSServers nach dem Patch auf die 4.0d wird ein-
malig eine Wartungsoperation ausgeführt, die nach der Verwendung von
Registerrechten sucht und automatisch dann die Eigenschaft
NewRegisterFieldRights=0 setzt
- NoStatusEntry DlcGlobalOptions DlcFile string Öffentlich [DOCUMENTS Manager] Mögliche Werte: FileTypeChanged, EditFile (ab 5.0h) Gültigkeit: ab: 5.00e HF2 Über die Eigenschaft NoStatusEntry=FileTypeChanged am Mappentypen (Zielmappentyp) oder Documents- Einstellungen kann erreicht werden, dass bei Mappen ändern / Mappentypwechsel kein Eintrag in das Status-Journal (Mappen-Status) geschrieben wird.
- OCR DlcGlobalOptions DlcFile DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: pdf, jpg, png,... (abhängig von dem verwendeten OCR-Tool Gültigkeit: ab: 5.00e Komma-separierte Liste von Extensions für die OCR durchgeführt werden soll.
Wenn ein Dokument hochgeladen wird, dessen Extension in der Liste konfiguriert ist, wird beim Hochladen der Datei OCR durchgeführt, wenn das Dokument noch keine Worte enthält. Details sind der Dokumentation auf https://otris.software zu entnehmen
- ocrClientConfig DlcFile DlcGlobalOptions text Öffentlich [Webclient5] Mögliche Werte: JSON Objekt true Gültigkeit: ab: 5.00g Über die Eigenschaft kann ein Modus aktiviert werden, in dem Ausschnitte aus einem PDF ausgelesen und in Mappenfelder eingefügt werden können. Genauere Infos siehe HowTo.
Zum Benutzen der Funktionalität wird eine OCR Lizenz benötigt.
- OCROutputFormat DlcGlobalOptions DlcRegister DlcFile string Öffentlich [Blob, OCR] Mögliche Werte: pdf, docx Standardwert: pdf Gültigkeit: ab: 5.00f Defaultmäßig ist die Ausgabe ein durchsuchbares PDF Dokument. Optional kann auch ein Word Dokument erstellt werden (nicht mit Tesseract möglich).
- OCRTextFormat DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: txt, alto Gültigkeit: ab: 5.00f Der durch die OCR erkannte Text wird extrahiert und im Script afterOcrScript als Parameter ocrText zur Verfügung gestellt.
Für den Wert "txt" im einfachen Textformat. Für den Wert "alto" im im ALTO XML Format.
- OCRTextTarget DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: Registername Gültigkeit: ab: 5.00f Nur im Zusammenhang mit dem Property OCRTextFormat.
Falls OCRTextTarget einen gültigen Registernamen enthält, wird der mit OCR erkannte Text als zusätzliche Datei in das entsprechende Register hochgeladen. Falls OCRTextTarget ein gültiger Feldname ist, dann wird der erkannte Text in das Feld geschreiben (ab 5.0f HF1). Falls OCRTextTarget keinen gültigen Registernamen und keinen gültigen Feldnamen enthält aber einen Wert ungleich dem Leerstring enthält, wird der Text im Register des aktuellen Dokuments als Datei hochgeladen.
- onConnectInboxScript DlcFile Systemuser DlcGlobalOptions string Öffentlich [Scripting] Mögliche Werte: Scriptname Standardwert: -- Gültigkeit: ab: 5.00d Wenn eine Mappe in den Eingangsordner des Benutzers mittels Versendeliste oder Workflow gelangt, wird das hier hinterlegte Skript aufgerufen.
Nähere Beschreibung der verfügbaren Properties auf Skriptebene siehe portalscripting.chm (list of available script-exits).
- onCreationScript DlcFile string Veröffentlicht [Scripting] Mögliche Werte: Kommaseparierte Liste von Skriptnamen Gültigkeit: ab: 6.00 Skripte, welche bem Anlegen einer Mappe ausgeführt werden können. Details s. Portalscript API
- onEditScript DlcFile string Veröffentlicht [Scripting] Mögliche Werte: Kommaseparierte Liste von Skriptnamen Gültigkeit: ab: 6.00 Skripte, welche bei der Bearbeitung einer Mappe ausgeführt werden können. Details s. Portalscript API
- onFileViewScript DlcFile string Öffentlich [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00a Definiert ein PortalScript, welches vor der Anzeige der Mappe ausgeführt wird. Zum Zeitpunkt des Aufrufes wurden die Feldwerte der Mappe bereits geladen. Der Aufruf erfolgt asynchron. Unterstützt clientspezifische Rückgabewerte (context.returnType).
(bei Client-Relevanz: Nein (Server Feature))
- onForwardFileScript DlcFile string Veröffentlicht [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 3.51e Es wird beim Weiterleiten einer Mappe das festgelegte PortalScript ausgeführt. (s.a. afterForwardFileScript).
Dies gilt nur für durch Benutzer getriggerte Aktionen. Das definierte Portalscript wird dann vor dem Weiterleiten ausgeführt. D.h. es ist damit auch ein Abbrechen der Weiterleitung möglich. Wenn das PortalScript einen Rückgabewert != 0 zurückgibt, wird das als Abbruch interpretiert. s.auch afterForwardFileScript
(bei Client-Relevanz: Nein (Server Feature))
- onSaveScript DlcFile string Veröffentlicht [Scripting] Mögliche Werte: Kommaseparierte Liste von Skriptnamen Gültigkeit: ab: 6.00 Skripte, welche beim Speichern einer Mappe ausgeführt werden können. Details s. Portalscript API
- onUndeleteScript DlcFile string Öffentlich [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00e Name des Skriptes, welches beim Wiederherstellen einer Mappe ausgeführt wird.
- onWorkflowAgentScript DlcFile DlcGlobalOptions string Öffentlich [Workflow] Standardwert: ScriptName Gültigkeit: ab: 5.00g Script-Exit am Mappentypen oder Documents-Einstellungen: onWorkflowAgentScript=Scriptname
Wenn ein Benutzer abwesend ist und im Workflow durch seinen Vertreter vertreten wird, dann wird dieser Script-Exit nach der Zustellung des Workflow-Schrittes in den Eingangskorb des Vertreters ausgeführt.
- openDocMode DlcGlobalOptions DlcFile DlcRegister enum Veröffentlicht [Blob, Webclient] Mögliche Werte: internal external download Standardwert: internal Gültigkeit: ab: 3.60b Bestimmt das Standardverhalten der Anzeige beim Öffnen eines Dokuments.
- pdfButtonNativeBrowserViewerOpenDocument DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00e HF2 Läd das PDF-Dokument runter, anstatt es anzuzeigen.
- pdfjsAutoSearchAllFields DlcGlobalOptions DlcFile string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Aktiviert die automatische Suche von Feldwerten im Pdfjs für alle Felder. Es muss zusätzlich die globale Property pdfjsAllowAutoSearch aktiviert sein.
Bei einem Klick auf dem Feld wird der aktuelle Feldwert als Suche an den PDF.js übergeben und sofern das PDF durchsuchbar ist markiert. Über die Feldproperty 'pdfjsAutoSearch' können einzelne Felder wieder deaktiviert werden.
- pdfjsViewerButtonDownload DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00d Über das Property kann der Download-Button im PDF.js Viewer deaktiviert werden.
- pdfjsViewerButtonPrint DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00d Über das Property kann der Drucken-Button im PDF.js Viewer deaktiviert werden.
- pdfjsViewerConfig DlcFile DlcGlobalOptions text Öffentlich [Webclient5] Gültigkeit: ab: 5.00g Über die Eigenschaft kann ein JSON Objekt zur Konfiguration des PDFjs Viewers angegeben werden. Für den genauen Aufbau des Objekts siehe PDFjs HowTo.
- PreviewCompleteDocumentList DlcGlobalOptions DlcFile enum Öffentlich [Webclient, Blob] Mögliche Werte: 0 1 Gültigkeit: ab: 4.00c HF1 Wurde am Mappentypen definiert, dass eine Vorschau (Thumbnail) der Anlagen einer Mappe auf dem Mappendeckel angezeigt werden sollen, wurden bisher nur die Anlagen des ersten nicht leeren Dokumentenregisters berücksichtigt. Ab 4.0c HF1 werden nun alle Anlagen berücksichtigt. Mit der Eigenschaft PreviewCompleteDocumentList=0 kann auf das alte Verhalten zurück geschaltet werden.
(bei Client-Relevanz: Nein (Server Feature))
- PrintPdfFileName DlcFile string Öffentlich [pdf-Druck] Mögliche Werte: AutoText z.B. %title% Gültigkeit: ab: 5.00e HF2 Die Listen- oder Mappenaktion pdf-Druck im Web-Client erzeugt standardmäßig ein Dokument mit dem Namen "Print.pdf". Über die Mappentyp-Eigenschaft PrintPdfFileName = %AutoText% kann ein abweichender Dateiname spezifiziert werden. z.B. würde für PrintPdfFileName = %title% der Mappentitel als Dateiname verwendet werden.
- PropertiesAsScriptParams DlcFolder DlcFile DlcRegister string Öffentlich [Scripting] Mögliche Werte: 0, 1 Standardwert: 0 Gültigkeit: ab: 4.00d HF3 Benutzerdef. Aktionen am Ordner, Mappentypen und Register: Wenn die Aktion ein PortalScript ausführt, kann über die Aktions-Eigenschaft PropertiesAsScriptParams=1 festgelegt werden, dass die Aktionseigenschaften als globale Parameter im Script zur Verfügung stehen. Dies ist dann sinnvoll, wenn ein Script bei mehrerer Aktionen verwendet werden soll.
- QDZAutoCreateRegister DlcFile DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00c Quickdrop-Zone: Wenn eine Mappe kein Dokumentenregister hat, konnte über die QDZ der Mappe im Bearbeitungsmodus eine Anlage hinzugefügt werden. Dabei wurde automatisch ein Standard-Dokumentenregister erzeugt. Mit der Eigenschaft am Mappentypen oder Documents-Einstellungen QDZAutoCreateRegister=0 kann dies nun unterbunden werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- ReferenceFileClearDefaultValuesOnDeselect DlcField DlcFile DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: 1 0 Gültigkeit: ab: 4.00a Eigenschaft bewirkt, dass wenn beim Auswahldialog für Referenzen "Eintrag löschen" ausgewählt wird, vorher gesetzte Defaultwerte der Referenz auch geleert werden. Beispiel:
In einem Referenzfeld wird eingetragen, dass Felder der referenzierenden Mappe (hier: car_id) mit Feldwerten aus der referenzierten Mappe (hier: file_id) gefüllt werden. Das Property sorgt dafür, dass der Eintrag in "car_id" gelöscht wird. Referenzfeld "car" im Mappentyp "Driver".
Aufzählungswerte:
car.file_id
%title%
car_id=%file_id%
- refResolveStore DlcFile string Öffentlich [EAS, EBIS Store] Mögliche Werte: <Name eines EAS/EBIS-Archivservers>, ALLEAS Gültigkeit: ab: 4.00e Mit dieser Eigenschaft am Mappentyp der referenzierten Mappen kann man angeben, in welchem EAS-Archivserver die Referenz auf eine Archivmappe eines Referenzfeldes aufgelöst wird. Falls der Wert auf 'ALLEAS' gesetzt ist, wird die referenzierte Archivmappe in allen EAS/EBIS-Archiveserver aufgesucht. Falls die Eigenschaft nicht gesetzt ist, sind die folgenden Fälle zu unterscheiden. Ist die referenzierende Mappe (die eine Archivmappe durch ein Referenzfeld referenziert),
1. eine aktive Mappe:
Die Referenz wird im Zielarchivserver des Mappentyps der referenzierten Mappe aufgelöst,
wobei 'Skripting' oder 'Hauptserver' als Zielarchivserver nicht unterstützt ist.
2. eine archivierte Mappe:
Die Referenz wird im Archivserver, wo sie archiviert wurde, aufgelöst.
Bemerkung: EBIS-Archivserver werden erst ab Version 5.0e unterstützt
- RegAssign DlcFile string Veröffentlicht [EEi, EEx, Blob] Mögliche Werte: RegAssignN:BlobName=RegisterName N=1,2,3... z.B. Bezeichnung = RegAssign1 Wert = Status.htm=intern Gültigkeit: ab: 3.60h Bei der Archivierung einer Mappe nach EE.i bzw. EE.x kann man im PortalClient festlegen, dass der Status, der Monitor und die Metadaten der Dokumente archiviert werden sollen. Lädt man nun eine Archivmappe in DOCUMENTS so werden diese Dateien in das erste Dokumentenregisters der Mappe untergeordnet, dies kann bei aktivierter Option "Erstes Dokument zuerst öffnen" dazu führen, dass die Status.htm geladen wird. Man kann daher dieses Property setzen, um die Dateien einen bestimmten Dokumentenregister zuzuordnen. Es ist dabei zu beachten, dass die Register bereits vorhanden sein sollten, ggfs. müssen diese am Archivtypen angelegt werden. (s.a. IgnoreBlobMetaFile) Die Properties müssen am importierten Schema (Archivtyp) gesetzt werden.
Am Mappentyp sind sie bei EE.i/x (XMLServer-Schnittstelle) wirkungslos.
- registerBarDropzoneTop DlcFile DlcGlobalOptions string Öffentlich [Webclient5, Blob] Mögliche Werte: false, 0, true, 1 Standardwert: false Gültigkeit: ab: 5.00e Render die dropZone in der FileRegisterbar oberhalb der Margingadgets.
- registerBarState DlcFile string Öffentlich [Webclient5] Mögliche Werte: min Gültigkeit: ab: 5.00 HF1 Das Property am Mappentypen heißt "registerBarState" und kann auf "min" gesetzt werden um Mappen des Typs immer mit minimierter zugeklappter Randspalte (RegisterBar) zu öffnen.
(bei Client-Relevanz: Nur Client 5)
- scanDocumentName DlcFile string Veröffentlicht [Blob] Mögliche Werte: Name des gescannten Dokuments Gültigkeit: ab: 3.51 Das eingescannte Dokument wird automatisch unter dem, als Wert angegebenen Namen gespeichert. Dieses Property kann man ebenfalls für alle Scans setzen, indem man es in den Documents - Einstellungen einträgt.
- scanDocumentRenaming DlcFile enum Veröffentlicht [Blob] Mögliche Werte: false true Gültigkeit: ab: 3.51 Ein Fenster zur Eingabe des Namens für das eingescannte Dokument wird geöffnet. Bei der Aktivierung des Property scanDocumentName wird der vordefinierte Name in der Eingabezeile angezeigt.
- SearchEnabled DlcFile enum Veröffentlicht [Suche] Mögliche Werte: 0 1 Gültigkeit: ab: 3.60a Es wird mit diesen Property ermöglicht die Volltextsuche und die Erweiterte Suche für einen Mappentypen / Archivtypen auszuschalten.
- sendBlobAsPdf DlcGlobalOptions DlcFile string Öffentlich [Blob, Email, pdf-Druck] Mögliche Werte: 0 : Originalformat versenden 1 : pdf versenden, falls konfiguriert Gültigkeit: ab: 4.00d Mit der Eigenschaft sendBlobAsPdf=0 kann man verhindern, dass die Anhänge einer als Email gesendeten Mappe nach PDF konvertiert werden, falls die Eigenschaft showBlobAsPdf eingeschaltet ist.
(bei Client-Relevanz: Classic-Client und Client 5)
- sendEmailAsHTML DlcFile DlcGlobalOptions string Öffentlich Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00e Blendet ein Html-Feld zum Bearbeiten des Email Inhalts im "Mappe als E-Mail versenden"-Dialog ein.
- shareFileButton DlcGlobalOptions FeatureManager DlcFile string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00h Fügt einen Teilen-Button dem Mappentitel hinzu. Wird auf diesem geklickt wird ein Quickviewlink zur aktuellen Mappe erstellt und in den Zwischenspeicher geschrieben. Der Link beinhaltet außerdem das aktuelle Register und, sofern eines ausgewählt ist, das aktuell angezeigte Dokument.
- ShowArchivedVersions DlcFile enum Öffentlich [EEx, EEi, EAS] Mögliche Werte: 0 1 false true Standardwert: 0 (außer EE.x, siehe Text) Gültigkeit: ab: 4.00 Die Eigenschaft "ShowArchivedVersions" am Mappentyp blendet im Web ein
Archivversionsregister ein, wenn eine aktive Mappe bereits archiviert wurde. Besonderheiten bei ENTERPRISE.x:
Für den EE.x-Client ist die automatische Anzeige eines Versionsregisters der Standard.
Ab DOCUMENTS 4.0 HF1 kann sie unterdrückt werden, indem die Eigenschaft beim importierten
Schema oder für den ganzn Archivserver auf 0 gesetzt wird. Besonderheiten bei ENTERPRISE.i:
Die Eigenschaft darf auch auf Archivtypen angewendet werden,
um ein Versionsregister zu erzeugen.
Dieses wird dann allerdings auch bei nur einer vorhandenen Version angezeigt.
Ein dynamisches Ausblenden, solange nur eine Version existiert, ist hier nicht möglich.
Bei früher Archivierung würde das Register zunächst in das Level-1-Archiv
und später in das Level-2-Archiv verweisen. In diesem Kontext erscheint
die Aktivierung weniger sinnvoll.
- showBlobAsPdf DlcGlobalOptions DlcFile string Veröffentlicht [Blob] Mögliche Werte: 0 : keine Konvertierung 1 : Konvertierung aller Blobs Angabe einzelner Extensionen : Konvertierung der Blobs mit den angegebenen Extensionen, z.B. tif,doc,xls Gültigkeit: ab: 3.60b Anhänge, die nach pdf konvertiert werden können (partnernet.ini pdf-Druck Konverter), werden mit diesen Property im Web als Pdf angezeigt unabhängig vom tatsächlichen Dateityp.
(bei Client-Relevanz: Classic-Client und Client 5)
- showBlobAsPdfInDocEditMode DlcFile DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60i Voraussetzung:
Das Property showBlobAsPdfInDocEditMode ist nur einsetzbar, wenn auch das Property showBlobAsPdf=1 gesetzt ist. Wenn showBlobAsPdf=1 gesetzt ist, werden die Anlagen an einer Mappe als pdf-Dokument dargestellt, soweit in der partnernet.ini / documents.ini Konverter für die pdf-Konvertierung definiert sind. Die Anlagen werden auch als pdf-Datei dargestellt, wenn sich die Mappe im Bearbeitungsmodus befindet und ein Dokument bearbeitet wird.
Wenn das Property showBlobAsPdfInDocEditMode=0 definiert ist, werden im Bearbeitungsmodus die Anlagen immer noch als pdf dargestellt, wenn aber eine Anlage beabeitet wird, wird diese in ihrem eigentlich Dateiformat dargestellt. Das Property kann auch global bei Documents-Einstellungen definiert werden
(bei Client-Relevanz: Classic-Client und Client 5)
- showFileCover DlcFile enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60f Das erste Register mit den Mappenfeldern lässt sich mit diesen Property für die Mappenansicht ausblenden. Die weiteren Register am Mappentyp "rutschen" entsprechend nach links.
(bei Client-Relevanz: Classic-Client und Client 5)
- showFileImage DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00f Erlaubt das Ausblenden des Mappen-Icons links oben in der Mappenansicht.
- showMonitorStrict DlcGlobalOptions DlcFile DlcRegister string Öffentlich Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00d HF2 Mit dieser Property wird der Monitor nur auf Registern angezeigt, bei denen "Monitor anzeigen" angehakt ist.
Diese Property funktioniert nur, wenn unter Monitor "Auf Register darstellen" nicht gesetzt ist.
(bei Client-Relevanz: Nein (Server Feature))
- ShowVersioningErrors DlcFile DlcArchiveServer enum Veröffentlicht [EEx] Mögliche Werte: 0 1 2 3 Standardwert: 0 Gültigkeit: ab: 4.00 Verfahrensweise für bestimmte Lesefehler bei der Versionierung von Archivmappen festlegen. Beim Speichern von Änderungen an einer Archivmappe passiert es gelegentlich, dass die Daten der Vorversion nicht mehr gelesen werden können. Die Archivmappe könnte zum Beispiel inzwischen gelöscht oder aber exklusiv gesperrt sein. DOCUMENTS kann nicht alle möglichen Ursachen für so einen Lesefehler kennen und muss dennoch entscheiden, wie mit dem Fehler verfahren wird.
Dieselbe Problematik besteht auch beim wiederholten Archivieren einer aktiven Mappe. Traditionell übergeht DOCUMENTS in so einem Fall die Versionierung und legt eine neue Archivmappe an. In Version 4.0 wurde allerings unter bestimmten Voraussetzungen (siehe unten) eine Fehlermeldung angezeigt und die Archivierung abgebrochen. Ab 4.0 HF1 ist wieder das traditionelle Verhalten voreingestellt. Fehlermeldungen sind optional mit Hilfe dieser Eigenschaft einstellbar. Bedeutung der möglichen Eigenschaftswerte:
0 = Keine Meldung; immer eine neue Mappe im Archiv anlegen
1 = Immer einen Fehler melden
2 = Fehlermeldung nur bei Bearbeitung einer Archivmappe, sonst Neuanlage
3 = Fehlermeldung nur bei Archivierung einer aktiven Mappe, sonst Neuanlage Voraussetzungen, unter denen die Eigenschaft wirksam wird:
- Das Archivsystem ist ENTERPRISE.x
- Die Kompatibilitätseinstellung "OldDocVersioning" wird nicht verwendet.
- Der XML-Server hat den Lesezugriff auf die Vorversion mit einem der folgenden Fehlercodes beantwortet:
81100030 (internal Java Beans error) oder 81100036 (Dokument nicht gefunden) Die Eigenschaft kann auch beim Archivserver angegeben werden. Sie gilt dann für alle Schemata ohne eigenen Eintrag.
Für EDA existiert ab Version 4.0d eine vergleichbare Eigenschaft "EASShowVersioningErrors".
- ShowWorkflowStepNameInMonitor DlcFile string Öffentlich [Workflow, Webclient, Webclient5] Mögliche Werte: 0,1 Standardwert: 0 Gültigkeit: ab: 5.00f Mit der Eigenschaft "ShowWorkflowStepNameInMonitor=1" am Mappentypen werden die Aktionsnamen des Workflows im Monitor einer Mappe angezeigt.
- stamp DlcFile string Öffentlich Mögliche Werte: Text Gültigkeit: ab: 5.00a Textstempel für Anmerkungen in pdf, es wird ein voreingestellter Text für den Stempel vorgegeben.
Standard-Stempel, wird über die Mappentyp-Eigenschaft stamp gesetzt. Der Wert ist der Stempeltext.
(bei Client-Relevanz: Nur Client 5)
- startRegisterName DlcFile string Öffentlich [Webclient5] Mögliche Werte: tech. Name vom Register Gültigkeit: ab: 5.00a Mit der Eigenschaft "startRegisterName" am Mappentyp kann ein Register angegeben werden, welches beim Öffnen der Mappe direkt angezeigt wird.
Allerdings wird "erstes Dokument öffnen" vorrangig behandelt.
(bei Client-Relevanz: Nur Client 5)
- StatusIgnoredColumns DlcFile DlcGlobalOptions string Öffentlich [Webclient] Mögliche Werte: Col1,Col2,... Colx = Action,Comment,Timestamp,User Gültigkeit: ab: 4.00c Über die Mappentyp/Documents Einstellungen Eigenschaft StatusIgnoredColumns=Col1,Col2,... mit Colx = Action,Comment,Timestamp,User können einzelne Spalten im Status-Register ausgeblendet werden.
Diese Einschränkung gilt nur für die Web-Ansicht und nicht für andere Funktionen z.B. Archivieren mit Status.
(bei Client-Relevanz: Classic-Client und Client 5)
- StatusWithTimestamp DlcFile enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51e Ausblenden der Uhrzeitangabe Im Status. Mit der globalen Eigenschaft bzw. Mappentypeigenschaft StatusWithTimestamp=0 kann definiert werden, dass im Status nur noch das Datum ohne Uhrzeit für die einzelnen Einträge angezeigt wird
- StrictDeleteMode DlcFile enum Veröffentlicht [Rechte] Mögliche Werte: 0 1 Gültigkeit: ab: 3.60e Mit der Mappentyp-Eigenschaft StrictDeleteMode=0 kann das Löschen generell erlaubt oder verboten werden, ohne dass man Benutzerrechte definieren muss. Explizite Benutzerrechte überschreiben diese Einstellung. 1 = löschen verboten
0 = löschen erlaubt
<sonstige Wert oder nicht definiert> = Nur der Eigentümer einer Mappe darf löschen Siehe auch: EASStrictDeleteMode
- SuppressDMIAnnotations DlcFile DlcArchiveServer enum Öffentlich [EEi, EEx, Blob] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00a Die Speicherung grafischer Annotationen als "DocumentsMetaInfo" kann durch Setzen dieser Eigenschaft am importierten (Archiv-)Schema unterdrückt werden. Wenn die Speicherung von Annotationen komplett verboten werden soll, genügt es bei EE.x nicht, ein Schema ohne Notizattribut anzulegen. Zusätzlich muss dann diese Eigenschaft gesetzt werden.
Es kann unter gleichem Namen eine Voreinstellung für einen ganzen Archivserver getroffen werden. *ab Version 4.0HF1
- TargetArchiveField DlcFile string Veröffentlicht [EEi, EEx] Mögliche Werte: Der Feldwert, des in dem als TargetArchiveField spezifizierten Feldes, muss der Archiv-Key $(Lagerort)/Archiv bei EE.i bzw. View-Key bei EE.x des Zielarchives der Mappe sein. Standardwert: Feldname Gültigkeit: ab: 3.51 Archivierung von Mappen über die Aktionsklappliste
Nur möglich, wenn ein "aktives Archiv" am Mappentypen definiert ist
Nachteilig: alle Mappen des Mappentypen "landen" im gleichen Archiv Beispiel:
Feld: Zielarchiv
Wert: %archive%
Mappentyp: TargetArchiveField=Zielarchiv
- thumbnailOpenDocMode DlcGlobalOptions DlcFile string Öffentlich [Blob] Mögliche Werte: external Gültigkeit: ab: 3.60 Dokumente einer Mappe können in einem externen Fenster geöffnet werden. Dabei wird der in DOCUMENTS eingestellte Viewer angezeigt. Bei mehreren Dokumenten besteht die Möglichkeit über eine Navigationszeile durch diese zu blättern. Dabei sollten folgene Properties in den Documents - Einstellungen gesetzt sein: useThumbnailInFileView = true
thumbnailOpenDocMode = external (auch am Mappentyp möglich) Das externe Fenster lässt sich durch folgene Properties konfigurieren extViewerWinDimension und
extViewerWinProperties Voraussetzung:
Auf dem Bestriebssystem des Servers muss grundsätzlich ImageMagick installiert werden. (bei Client-Relevanz: Classic-Client und Client 5)
- toFiletypeChangedScript DlcGlobalOptions DlcFile string Öffentlich [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00f HF1 Neuer Script-Exit am Mappentyp: toFiletypeChangedScript=Scriptname. Nach dem Mappentypwechsel wird das angebene Script ausgeführt. Die Eigenschaft toFiletypeChangedScript muss am Zielmappentyp gesetzt werden.
- translationFieldSettings DlcGlobalOptions DlcFile string Öffentlich Mögliche Werte: JSON-Konfiguration Gültigkeit: ab: 5.00g Setzt die Standard-Konfiguration für Translation-Felder. Für Informationen über die möglichen Einstellung steht auf dem Dokuportal ein HowTo bereit.
- treeSort DlcFile DlcGlobalOptions string Öffentlich [Tree] Mögliche Werte: Beispiel: treeSort = Feld1-, Feld2+,... oder treeSort_Trefferliste = Feld1-,Feld2+,... Standardwert: Feld1, Feld2 Gültigkeit: ab: 3.51f Der Trefferbaum wird nach den Feldern gruppiert und durch + / - dementsprechend sortiert. Man kann dies auch auf eine Trefferliste einschränken, indem man treeSort_Trefferliste = Feld1-, Feld2+,.... benutzt.
(bei Client-Relevanz: Classic-Client und Client 5)
- UniqueDocNamesOnReactivate DlcFile enum Veröffentlicht [EEi, EEx, Blob] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60f Wird eine Mappe aus dem Archiv reaktiviert, werden mit diesen Property Dokumentennamen in einem Register eindeutig gemacht. Dies kann notwendig sein, da es in Archiven möglich ist mehrere Dokumente mit den gleichen Namen zu haben und in ELC die Restriktion vorhanden ist, dass Dokumente innerhalb eines Registers eindeutig sein müssen.
- UseAutoOpenFirstDocumentFromFile DlcFile DlcGlobalOptions enum Öffentlich [Blob, Webclient5] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00c HF3 Erstes Dokument sofort anzeigen: Seit DOCUMENTS 5 wird diese Eigenschaft immer vom Mappentypen ausgewertet. Soll dies unterschiedlich für Mappen eines Mappentypen sein, kann mit der Mappentyp-Eigenschaft und Documents-Einstellungen Eigenschaft UseAutoOpenFirstDocumentFromFile=1 das Verhalten so geändert werden, dass dies von der einzelnen Mappe ausgewertet wird.
- useAutoVersioningFromFile DlcFile enum Veröffentlicht [Blob] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60b Für die Versionierung der Dokumente wird die Einstellung am Mappentypen verwendet. Soll nicht mehr die aktuelle Einstellung am Mappentypen, sondern die Einstellung zum Zeitpunkt der Erstellung der Mappe verwendet werden, ist dieses Property zu setzen.
- WFNoWriteLock DlcFile enum Veröffentlicht [Workflow] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60c Über diese Mappentyp-Eigenschaft kann das Verhalten abgeschaltet werden, dass eine Mappe, die sich im Workflow/Versendung befinden, nur vom aktuell sperrenden Benutzer bearbeitet werden kann. Dies bedeutet nicht, dass Rechte, die am Mappentyp hinterlegt sind, überschrieben werden.
- DlcFolder
- actionGroups DlcFile DlcFolder DlcGlobalOptions DlcRegister text Öffentlich [Webclient5] Mögliche Werte: Ein Array von JSON-Konfigurationen. Bsp: [{ id: "gadgets", label: "de:Gadgets;en:Gadgets"}, { id: "globalActions", label: "de:Globale Aktionen;en:Global Actions", position: "end"}] Standardwert: - Gültigkeit: ab: 5.00i Konfiguration für die Anzeige einer eigenen Aktionsliste an Ordnern, Mappen und Dokumentenregister.
Aktionen müssen mit actionGroup=id die hinterlegte Liste referenzieren, um in dieser angezeigt zu werden.
Siehe auch Eigenschaft "actionGroup". JSON - Konfiguration einer Aktionsliste:
{
id: "<action-group-id>", // ID der Aktionsliste zum Referenzieren
icon: "<entypo|ionicon|mdi-icon>", // Icon das im Button der Aktionsliste angezeigt wird
label: "<action-group-label>, // Bezeichner der im Button der Aktionsliste angezeigt wird
position: "<default|right|end> // Position an der die Liste angezeigt wird.
} Aktionslisten mit gleicher ID am Register werden gegenüber am Mappentypen und global Konfigurierten Aktionslisten bevorzugt.
Für das Label kann auch die "de:...;en:..." - Notation verwendet werden.
Die Positionen sind:
default - Neben der Standard-Aktionsliste. Kann weggelassen werden.
right - Aktionsliste wird Rechtsbündig vor allen anderen Elementen angezeigt
end - Aktionsliste wird am Ende der Toolbar angezeigt
- AllowedActionsScriptMode DlcGlobalOptions DlcFolder DlcFile enum Öffentlich [Rechte, Scripting, Ordner] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f HF1 Das Property AllowedActionsScriptMode = 1 am Ordner, Mappentypen oder Documents-Einstellungen
bewirkt, dass im enumval des AllowedActions-Scripts neben den benutzerdef. Aktionen auch die Standardaktionen enthalten sind.
Analog zu den benutzerdef. Aktionen können die Standardaktionen ausgeblendet werden. s. auch portalscripting.chm
- compactViewWidth DlcFolder DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00f Legt die Breite fest, ab der die Ordner- und Trefferlistenansicht in den Kompaktmodus wechselt.
Für Trefferlisten kann mit "hitlistCompactViewWidth" eine eigene Breite festgelegt werden.
Für Verknüpfungsregister und Mappenlink-Register kann mit "linkRegisterCompactViewWidth" eine eigene Breite festgelegt werden.
- DoNotCopy DlcFolder enum Veröffentlicht [Ordner] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.51 Wird dieses Property bei einem Ordner gesetzt, so ist es nicht mehr möglich mit der Aktion "Kopieren nach" in diesen Ordner zu kopieren.
- DoNotMove DlcFolder enum Veröffentlicht [Ordner] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f HF1 Wird dieses Property bei einem Ordner gesetzt, so ist es nicht mehr möglich mit der Aktion "Ablegen in" in diesen Ordner zu kopieren.
- fileDetailsExpand DlcFolder string Öffentlich [Webclient5] Mögliche Werte: [false, true] Standardwert: false Gültigkeit: ab: 5.00a Mappendetails ausklappbar (bei Client-Relevanz: Nur Client 5)
- fileDetailsShowColumn DlcFolder DlcRegister string Öffentlich Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00a Mappendetails ausklappbar. (bei Client-Relevanz: Neues Verhalten in Client 5)
- filter DlcFolder string Veröffentlicht [Ordner] Mögliche Werte: Filterausdruck Gültigkeit: ab: 3.60h bis: 4.00 Erstellt man in DOCUMENTS einen dynamischen Ordner, so kann man für diesen Ordner bis zu 3 Filter setzen. Mit diesen Property ist es möglich einen Filterausdruck anzugeben, der mehr als nur 3 Bedingungen enthält. Die Syntax des Filterausdrucks orientiert sich dabei an die vom PortalScripting. Dieses Property lässt sich auch in den Eigenschaften von Verknüpfungsregistern setzen. Ab Documents 4 findet man dies unter dem Reiter Abfrage(erweitert).
- FilteredFolderExport DlcGlobalOptions DlcFolder enum Öffentlich [Ordner, Suche] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 5.00e Nach einer Volltextsuche innerhalb eines Ordners legt diese Eigenschaft das Verhalten der Funktionen "XML Export (alle)" und "CSV Export (alle)" fest. Wert 0/false: Der gesamte Ordnerinhalt wird exportiert.
Wert 1/true: Nur die gefilterte Liste wird exportiert.
- FolderExportAllAsXLSX DlcGlobalOptions DlcFolder enum Öffentlich [Schnittstellen, Ordner, Output, Trefferliste] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00e XLSX-Export von Ordnern und Suchergebnissen: Mit der Documents-Einstellungen
bzw. Ordner-Eigenschaft FolderExportAllAsXLSX=1 kann ein Menüeintrag in der Ordneraktionsliste
aktiviert werden, mit dessen es möglich ist die Trefferliste bzw. das Suchergebnis
als XLSX-Datei zu exportieren. s. auch FolderExportSelectedAsXLSX Bemerkung: ab Version 6.0 wird die globale Eigenschaft durch die globale Option 'Aktiv für alle Datensätze'
unter Documents-Einstellungen > Listen-Export > XLSX-Export ersetzt.
- FolderExportSelectedAsXLSX DlcGlobalOptions DlcFolder enum Öffentlich [Schnittstellen, Ordner, Output, Trefferliste] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00e XLSX-Export von Ordnern und Suchergebnissen: Mit der Documents-Einstellungen
bzw. Ordner-Eigenschaft FolderExportSelectedAsXLSX=1 kann ein Menüeintrag in der Ordneraktionsliste
aktiviert werden, mit dessen es möglich ist die selektierten Trefferlisten bzw. Suchergebnissen
als XLSX-Datei zu exportieren. s. auch FolderExportAllAsXLSX Bemerkung: ab Version 6.0 wird die globale Eigenschaft durch die globale Option 'Aktiv für selektierte Datensätze'
unter Documents-Einstellungen > Listen-Export > XLSX-Export ersetzt.
- gadgetConfig DlcField DlcRegister DlcFolder DlcAction text Öffentlich Gültigkeit: ab: 5.00 JSON-Konfiguration zum Einbinden eines Gadgets an der konfigurierten Stelle. Näheres hierzu steht in der Gadget Dokumentation.
- hiddenFiletypesForTrash DlcGlobalOptions DlcFolder string Öffentlich [Ordner] Mögliche Werte: Kommaseparierte Liste technischer Mappentypnamen Gültigkeit: ab: 5.00e Mit der Eigenschaft können gelöschte Mappen von den ausgewählten Mappentypen im Gelöscht-Ordner für den Webclient ausgeblendet werden. Diese Eigenschaft steht für die globale Einstellung und den Gelöscht-Ordner zur Verfügung. (bei Client-Relevanz: Nein (Server Feature))
- hitlist DlcFolder text Veröffentlicht [Ordner] Mögliche Werte: Für statische Ordnertypen: kommaseparierte Liste der Spalten Für dynamische Ordner: ein Trefferlistenname oder ein zusammengesetzter Ausdruck in der Form Mappentypname.Trefferlistenname Standardwert: (abhängig vom Ordnertyp) Gültigkeit: ab: 3.51 Mit dieser Eigenschaft kann konfiguriert werden, welche Trefferspalten in der Ordneransicht erscheinen sollen. Die Angabe erfolgt je nach Ordnertyp auf zweierlei Weise. * Für statische Ordner (z.B. den Typ "Öffentlich") muss eine kommaseparierte Spaltenliste angegeben werden. Gewöhnliche Felder sind darin in der Schreibweise
Mappentypname.Feldname
anzugeben. Außerdem gibt es folgende Standardspaltennamen.
Title
Owner
LastEditor
CreatedAt
ModifiedAt
Task * Für dynamische Ordner ist üblicherweise ein Trefferlistenname als Eigenschaftswert anzugeben.
Bei Ordnern, die mehrere Mappentypen durchsuchen, ist die Schreibweise
Mapppentypname.Trefferlistenname
erforderlich. Für Ordner mit verknüpften EE.x-Views gilt entsprechend
Viewname.Trefferlistenname * Für dynamische Ordner ohne Archivzugriff darf (seit Version 5.0h) auch eine kommaseparierte Spaltenliste wie bei statischen Ordnern angegeben werden. * Die speziellen Ordnertypen "Aufgaben" und "Wiedervorlage" sind nicht konfigurierbar. Die Eigenschaft ist in diesen Fällen wirkungslos. Der Wert kann (seit Version 5.0f HF2) auch ein Autotext sein, wovon eine individuelle Definition
abgeleitet wird, z.B. %runscript:ScriptName% . Anmerkung:
Bei der Referenzierung über Trefferlistennamen oder "Mappentyp.Trefferliste" wird das Sortierkriterium nicht automatisch aus der Trefferlistendefinition übernommen.
Der Grund ist, dass die Standardsortierung des Ordners vorrangig ausgeführt wird.
Um die Trefferlistensortierung zu verwenden, muss die Ordnersortierung explizit ausgeschaltet werden. Dazu wählt man im Register "Abfrage" unter "Sortierung / Standard-Feld" die Option "definiertes Mappenfeld" aus und lässt das Eingabefeld darunter komplett leer. (bei Client-Relevanz: Classic-Client und Client 5)
- possibleTile DlcFolder string Öffentlich [Webclient5] Mögliche Werte: false,true,0,1 Gültigkeit: ab: 5.00b Notwendiger Schalter für die Aktivierung des Ordners als mögliche Kachel im Auswahldialog [false|true|0|1].
(bei Client-Relevanz: Nur Client 5)
- Postfetch DlcFolder string Veröffentlicht [Webclient] Mögliche Werte: 1 Gültigkeit: ab: 3.60 Enthält eine Trefferliste mehr Treffer als diese auf der ersten Seite darstellen kann, so kann man mit diesen Property einstellen, dass nur die Treffer der aktuellen Seite aufgerufen werden. Dies stellt zwar eine Verbesserung der Performance dar, hat jedoch auch den Nachteil, dass beim Wechsel der aktuellen Seite die Abfrage erneut bearbeitet werden muss.
- PostfetchShowCount DlcFolder enum Veröffentlicht [Suche, Ordner] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.51 Benutzt man das Property Postfetch, so werden nur die Treffer der aktuellen Seite geladen. Es wird jedoch trotzdem die Gesamtzahl aller Treffer angezeigt. Um dies zu unterdrücken kann man dieses Property auf false setzen. Dieses Property bringt dadurch eine Verbesserung der Performance und sollte nur in Verbindung mit dem Property Postfetch benutzt werden. Zu beachten ist, dass dies nur bei dynamischen Ordnern funktioniert.
- PropertiesAsScriptParams DlcFolder DlcFile DlcRegister string Öffentlich [Scripting] Mögliche Werte: 0, 1 Standardwert: 0 Gültigkeit: ab: 4.00d HF3 Benutzerdef. Aktionen am Ordner, Mappentypen und Register: Wenn die Aktion ein PortalScript ausführt, kann über die Aktions-Eigenschaft PropertiesAsScriptParams=1 festgelegt werden, dass die Aktionseigenschaften als globale Parameter im Script zur Verfügung stehen. Dies ist dann sinnvoll, wenn ein Script bei mehrerer Aktionen verwendet werden soll.
- renderCompactListKeys DlcGlobalOptions DlcFolder string Öffentlich Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00d Zeigt beim Rendern der schmalen Ordner-/Trefferlistenansicht die Keys der Datenspalten mit an.
- runScript DlcFolder Outbar string Öffentlich [Ordner, Scripting] Mögliche Werte: <Skriptname> Standardwert: - Gültigkeit: ab: 5.00b An Ordnern und Outbars können Skripte eingebunden werden, dessen Rückgabe im Ordnerframe angezeigt werden.
(bei Client-Relevanz: Nur Client 5)
- SearchMethod DlcFolder enum Veröffentlicht [Suche] Mögliche Werte: 0 1 2 3 4 5 Gültigkeit: ab: 3.60h Mit diesen Property kann man die Suchmethode festlegen, welche auf einem dyn. Ordner verwendet werden soll. Ist diese nicht definiert, wird die Suchmethode verwendet, die bei Documents-Einstellungen definiert ist. 0 - *Begriff* => Sucht den Begriff innerhalb eines Textfeldes ab unabhängig davon, ob es ein eigenständiges Wort ist oder in einen anderen Wort enthalten ist. Dies ist recht benutzerfreundlich, kann je nach Größe der Datenbank sehr performancelastig sein. 1 - Begriff => Es wird nur nach dem Begriff gesucht, wie dieser eingegeben wurde. 2 - Begriff* => Es werden Wörter in Textfeldern gesucht, die mit dem eingegebenen Begriff anfangen. 3 - entspricht Methode 0, aber ignoriert einzelne * im eingegebenen Suchbegriff bei den volltextindizierten Dateiinhalten 4 - entspricht Methode 1, aber ignoriert einzelne * im eingegebenen Suchbegriff bei den volltextindizierten Dateiinhalten 5 - entspricht Methode 2, aber ignoriert einzelne * im eingegebenen Suchbegriff bei den volltextindizierten Dateiinhalten Der Standardwert in DOCUMENTS ist die Suchmethode 2. Man kann dieses Property auch an Verknüpfungsregistern setzen.
- setDetailsColumnsMaxWidth DlcFolder string Öffentlich [Content] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00f Rendert den Inhalt des FileDetails-Skripts mit voller Breite.
Achtung: Auf Skriptlisten muss scrollWithParent=false gesetzt werden, wenn diese nicht mitskrollen sollen.
- ShowFoldersInToolBar DlcFolder string Öffentlich [Ordner, Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00g Ermöglicht die Navigation eines Ordners zu seinen Unterordnern über eine Klappliste in der Ordnertoolbar. Die Unterornder werden durch diese Eigenschaft aus dem Outbar-Baum entfernt.
- tileDescription DlcFolder PortalScript string Öffentlich [Webclient5] Gültigkeit: ab: 5.00b Information für die Auswahl der Kachel, Anzeige als Tooltip im Auswahldialog (Mehrsprachig de:aa;en:bb;). (Optionaler Parameter)
(bei Client-Relevanz: Nur Client 5)
- tileHeadline DlcFolder PortalScript string Öffentlich [Webclient5] Gültigkeit: ab: 5.00b Eine alternative Überschrift für die Kachel anstelle des Ordernamens (Mehrsprachig de:aa;en:bb;) (optionaler Parameter)
(bei Client-Relevanz: Nur Client 5)
- tileIcon DlcFolder PortalScript string Öffentlich [Webclient5] Gültigkeit: ab: 5.00b Pfad zur Verwendung eines anderen Icons in der rechten oberen Ecke der Kachel. (optionaler Parameter)
(bei Client-Relevanz: Nur Client 5)
- tileProfiles DlcFolder PortalScript string Öffentlich [Webclient5] Gültigkeit: ab: 5.00b Eine Komma-separierte Liste (ohne Leerzeichen) mit den Profilen, die diesen Ordner als Kachel auswählen und auf dem Dashboard sehen können. (Optionaler Parameter)
(bei Client-Relevanz: Nur Client 5)
- tileRefresh DlcFolder string Öffentlich [Webclient5] Gültigkeit: ab: 5.00b Angabe in Sekunden innerhalb derer sich die Kachel aktualisiert (Achtung: Kann den Server belasten), 0 = niemals. Optionaler Parameter.
(bei Client-Relevanz: Nur Client 5)
- tileRemote DlcFolder PortalScript string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: false Gültigkeit: ab: 5.00g Über die Eigenschaft "tileRemote" kann gesteuert werden ob die Kachel im Kontext einer Multimandanten Konfiguration auch in den anderen Mandanten zur Verfügung steht. Kann nur in Kombination mit der globalen Eigenschaft "dashboardRemoteTiles" verwendet werden.
- toolBarLabelFilter DlcFolder string Öffentlich Mögliche Werte: String Gültigkeit: ab: 5.00h Wenn die Eigenschaft 'ShowFoldersInToolBar' auf 'true' gesetzt ist kann über diese Eigenschaft das Label der Klappliste definiert werden.
- treeImage DlcFolder string Veröffentlicht [Tree, Webclient] Mögliche Werte: Dateiname Standardwert: Dateiname Gültigkeit: ab: 3.51 Den Ordnern kann im Ordnerbaum ein Icon zugeordnet werden. Dazu muss eine Grafik (gif, 18x18) in dem Verzeichnis \www\images\dlc\compact\tree befinden und im entsprechenden DOCUMENTS-Ordner unter "Eigenschaften" das Property erstellt werden.
(bei Client-Relevanz: Nur Classic-Client)
- xlsxFormat DlcGlobalOptions DlcFolder string Öffentlich [Schnittstellen, Ordner, Trefferliste, Output] Mögliche Werte: JSON-String mit den Format-Optionen Gültigkeit: ab: 5.00f Wenn der xlsx-Export von Ordnern oder Trefferlisten (FolderExportSelectedAsXLSX/FolderExportAllAsXLSX) aktiviert ist, kann über die Eigenschaft das Design des Exportes beeinflußt werden.
Es können die Formate für header, body, bodyDate, bodyTimestamp definiert werden.
Details s. https://otris.software/documents/portalscript/XLSXWorksheet.html#importFromJSON
{
"formats" : [
{
"name" : "header",
"bgcolor" : colorName, // optional
"pattern" : patternName, // optional
"fontcolor" : colorName, // optional
"fontstyle" : styleName, // optional
"fontsize" : int-value, // optional
"cellborder" : int-value, // optional
"align" : alignStyle, // optional
"numformat" : "format-string" // optional
},
{
"name" : "body",
..
},
]
}
- DlcGlobalOptions
- ACLDenialPrefix DlcGlobalOptions string Öffentlich [Rechte] Standardwert: xDENYx Gültigkeit: ab: 5.00a Für alle Mappentypen mit der Eigenchaft "ACLWithDenial" bestimmt diese Eigenschaft die Zeichenfolge die Verboteinträgen in der GACL vorangestellt werden muss. Die gewählte Zeichenfolge darf in den Benutzer- und Gruppenauflistung nirgendwo vorkommen. Zudem sollte sie möglichst kurz sein und darf keine Zeichen enthalten, die als Wildcard fehlinterpretiert weden können ('*','?','_','%'). Eine Änderung dieser Zeichenfolge kann bestehende Verbotseinträge unwirksam machen. Daher wird das Setzen dieser Eigenschaft nicht empfohlen.
- actionGroups DlcFile DlcFolder DlcGlobalOptions DlcRegister text Öffentlich [Webclient5] Mögliche Werte: Ein Array von JSON-Konfigurationen. Bsp: [{ id: "gadgets", label: "de:Gadgets;en:Gadgets"}, { id: "globalActions", label: "de:Globale Aktionen;en:Global Actions", position: "end"}] Standardwert: - Gültigkeit: ab: 5.00i Konfiguration für die Anzeige einer eigenen Aktionsliste an Ordnern, Mappen und Dokumentenregister.
Aktionen müssen mit actionGroup=id die hinterlegte Liste referenzieren, um in dieser angezeigt zu werden.
Siehe auch Eigenschaft "actionGroup". JSON - Konfiguration einer Aktionsliste:
{
id: "<action-group-id>", // ID der Aktionsliste zum Referenzieren
icon: "<entypo|ionicon|mdi-icon>", // Icon das im Button der Aktionsliste angezeigt wird
label: "<action-group-label>, // Bezeichner der im Button der Aktionsliste angezeigt wird
position: "<default|right|end> // Position an der die Liste angezeigt wird.
} Aktionslisten mit gleicher ID am Register werden gegenüber am Mappentypen und global Konfigurierten Aktionslisten bevorzugt.
Für das Label kann auch die "de:...;en:..." - Notation verwendet werden.
Die Positionen sind:
default - Neben der Standard-Aktionsliste. Kann weggelassen werden.
right - Aktionsliste wird Rechtsbündig vor allen anderen Elementen angezeigt
end - Aktionsliste wird am Ende der Toolbar angezeigt
- ActiveOutbar DlcGlobalOptions Systemuser string Öffentlich [Webclient] Mögliche Werte: Name der Outbar Standardwert: Outbarname Gültigkeit: ab: 3.60d Es kann die direkt nach dem Login eines Benutzers angezeigte Outbar definiert werden. Diese Eigenschaft lässt sich ab Documents 4.0a auch am Benutzer festlegen. Ab Documents 5 kann der Spezialwert "LAST" verwendet werden. Damit wird immer die vor dem Logout vom Benutzer zuletzt gewählte Outbar angezeigt.
(bei Client-Relevanz: Classic-Client und Client 5)
- addActiveVersionButton DlcGlobalOptions string Öffentlich [EAS, Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00g Fügt bei den Mappenaktion einen Button für Archivmappen hinzu, der es ermöglicht zur aktiven zugehörigen Mappe in DOCUMENTS zu springen. Darüber hinaus wird die Versionsnummer der Archivmappe mit angezeigt
- addDoubleViewButton DlcGlobalOptions DlcFile string Öffentlich Mögliche Werte: false, 0 , true, 1 Standardwert: false Gültigkeit: ab: 5.00e Zeigt in den Mappenaktionen einen Button zur Anzeige des Dokumentennavigators neben der Mappenansicht an.
- AdditionalOutbarPlugins DlcGlobalOptions string Veröffentlicht [Webclient] Gültigkeit: ab: 3.60d bis: 3.60j In den Documents Einstellungen ist es möglich mit diesen Property eigene Outbars zu definieren. Dazu muss man folgene Properties setzen: AdditionalOutbarPlugins=Variable1,Variable2,...
Variable1_Outbar_Tree_URL= selfmade.html ( der Pfad kann relativ oder absolut sein, wird kein Pfad eingetragen so muss sich die html im .../www/jsp/ - Ordner befinden)
Variable1_Outbar_Label=Name des Outbars (muss nicht gesetzt werden, es wird dann Variable1 als Label verwendet) Beispiel:
AdditionalOutbarPlugins=P1
P1_Outbar_Tree_URL= /../test.html
P1_Outbar_Label=Test
- additionalSearchFrameHeight DlcGlobalOptions string Veröffentlicht [Suche, Webclient] Mögliche Werte: Höhe in Pixel Gültigkeit: ab: 3.60g Mit der Eigenschaft "additionalSearchFrameHeight" auf den Documents Einstellungen lässt sich der Frame mit dem Texteingabefeld für die Volltextsuche dynamisch vergrößern. Diese Feature wird i.d.R. zusammen mit der AutoComplete-Funktion für die Volltextsuche verwendet. Der Wert beschreibt die Anzahl der Pixel, um die der Frame vergrößert werden soll.
- additionalSettingsScript DlcGlobalOptions string Öffentlich [Webclient5] Gültigkeit: ab: 5.00c Über die globale Eigenschaft additionalSettingsScript kann ein Skript definiert werden mit dem zusätzliche Einträge für das Einstellungsmenü (Aufruf über das Zahnradsymbol unten rechts) erzeugt werden können. (Details im HowTo "Einstellungsmenü erweitern") Beispielskript: var entries = [
{name:"showInbox", label: "Zum Ordner Eingang", action: "showFolder:96:313427"},
{name:"showFile", label: "Zeige Mappe", action: "showFile:dopaag_fi20140000006447"},
{name:"runScript", label: "Führe Skript aus", action: "runScript:openExternalWindow"},
{name:"gadget1", label: "Gadget", action: {gadgetScript: "Gadget_InfoGadget", gadgetAction: "initGadget"}},
{name:"gadget2", label: "Gadget als Dialog", action: {gadgetDialog: true, gadgetScript: "Gadget_InfoGadget", gadgetAction: "initGadget"}}
];
return JSON.stringify(entries); (bei Client-Relevanz: Neues Verhalten in Client 5)
- addonDownloadSettings DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true Zugriffsprofil Gültigkeit: ab: 5.00g Aktiviert einen Eintrag im Benutzermenü, über den Addons für Documents heruntergeladen werden können. Wenn die Eigenschaft auf 'true' gesetzt wird ist der Dialog für alle Benutzer verfügbar. Wenn der Dialog nur für ausgewählte Benutzer verfügbar sein soll kann eine Kommagetrennte Liste von Zugriffsprofilen angegeben werden.
- addPdfButtonToNativeBrowserViewer DlcFile DlcGlobalOptions string Öffentlich Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00e HF2 Zeigt im nativen Webbrowser-Viewer (NativeBrowserViewer) einen Button zum Drucken dessen Inhalts als PDF.
- addToFavoritesButton DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00c Zeigt beim Mappentitel einen Button an, der die Mappe beim Klick zu einem Favoriten-Ordner hinzufügt.
(bei Client-Relevanz: Neues Verhalten in Client 5)
- AdHocImportViews DlcGlobalOptions enum Veröffentlicht [EEx] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 3.60h Meldet sich ein DOCUMENTS Benutzer mit einem EEx Archiv Zugang an, so importiert der Portalserver geänderte öffentliche Views automatisch in seine Datenbank. Um dies zu unterbinden und somit die Performance zu verbessern kann man dieses Property setzen.
In früheren Versionen gab es gelegentlich Probleme mit verlorenen Beziehungen zu Mappentypen, Ordnern und Registern durch das interne Umschalten auf eine neue Viewversion. Sollte so etwas erneut auftreten, kann man es notfalls hiermit unterbinden.
- AdHocWorkflowDirectForward DlcFile DlcGlobalOptions enum Öffentlich [Workflow, Webclient] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00c HF2 AdHoc-Versendung: das Documents-Einstellungen bzw. Mappentyp Property AdHocWorkflowDirectForward=1 bewirkt, dass zum Weiterleiten neben dem Eintrag in der Aktionsklappliste ein "Direkt weiterleiten" Button in der Mappe dargestellt wird, der die Mappe direkt zum nächsten Empfänger sendet.
Dies bezieht sich nur auf AdHoc-Workflows und nicht auf vordefinierte Versendeliste (->DistributionListDirectForward=1) oder vordefinierte Workflow (Visio-Workflows).
(bei Client-Relevanz: Classic-Client und Client 5)
- afterDeleteFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: lastFile, stayFile, nextFile, emptyFile Standardwert: lastFile Gültigkeit: ab: 5.00f HF2 Legt fest, was nach dem Löschen eines Vorgangs geschehen soll. lastFile - Zeigt den vorherigen Vorgang an
stayFile - Bleibt auf dem angezeigten Vorgang stehen
nextFile - Zeigt den nächsten Vorgang an
emptyFile - Zeigt eine leere Mappenansicht an
- afterOcrScript DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: ScriptName Gültigkeit: ab: 5.00f Das definierte afterOcrScript wird nach durchgeführten OCR-Job für ein Dokument durchgeführt. Details s.
https://otris.software/documents/api/portalscript/tutorial-scriptexits.html#after-ocr
- afterUploadDocumentScript DlcGlobalOptions DlcRegister DlcFile string Öffentlich [Blob, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 3.60j ab 1795, Property kann auch am Mappentypen oder Register definiert werden Dieses Script wird nach dem Upload eines Blobs ausgeführt: context.Event = afterUploadDocument, afterUploadNewDocument Lesend/Schreibend globales Object Param
----------------------------------------
param.filePath
param.fileName Document
--------
context.document
Register
--------
context.register (bei Client-Relevanz: Nein (Server Feature))
- aiAdditionalTextFormats DlcGlobalOptions string Öffentlich Gültigkeit: ab: 6.1.2 Kommaseparierte Liste von Dateiendungen, welche von dem AI Toolkit als Textformate erkannt und analysiert werden sollen.
- AllowArchiveFilesAsFavorite DlcGlobalOptions string Öffentlich [EAS, Webclient5] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00g EAS-Archivmappen als Favorit markieren: Wenn die DOCUMENTS Einstellungen Eigenschaft AllowArchiveFilesAsFavorite=1 gesetzt ist, kann können EAS-Archivmappen dem Favoritenordner hinzugefügt werden. Die Favoriteneinträge bleibt nur solange vorhanden, wie kein manuelles Löschen der temp. Archivtreffer stattfindet.
- AllowArchiveFilesAsLastUsed DlcGlobalOptions string Öffentlich [EAS, Webclient5] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00g EAS-Archivmappen im "Zuletzt benutzt" Ordner anzeigen: Wenn die DOCUMENTS-Einstellungen Eigenschaft AllowArchiveFilesAsLastUsed=1 gesetzt ist, dann werden auch EAS-Archivmappen im "Zuletzt benutzt" Ordner angezeigt, solange der temp. Suchtreffer nicht gelöscht wurde.
- allowChangeDocExtension DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60g Wird dieses Property auf false gesetzt, so kann bei der Umbenennung eines Dokuments die Dateiendung nicht mehr verändert werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- allowCloneSession DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: true Gültigkeit: ab: 5.00e HF2 Über diese Eigenschaft kann das CloneSession-Feature für den Mandanten komplett deaktiviert werden.
- AllowedActionsScriptMode DlcGlobalOptions DlcFolder DlcFile enum Öffentlich [Rechte, Scripting, Ordner] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f HF1 Das Property AllowedActionsScriptMode = 1 am Ordner, Mappentypen oder Documents-Einstellungen
bewirkt, dass im enumval des AllowedActions-Scripts neben den benutzerdef. Aktionen auch die Standardaktionen enthalten sind.
Analog zu den benutzerdef. Aktionen können die Standardaktionen ausgeblendet werden. s. auch portalscripting.chm
- allowedGlobalActionsScript DlcGlobalOptions string Öffentlich Mögliche Werte: Skriptname Gültigkeit: ab: 6.0.1 Mit der globalen Eigenschaft 'allowedGlobalActionsScript=ScriptName' kann man abhängig von Benutzern oder deren Rechten die globalen Aktionen auf Mappentypen / Registern einschränken. Das Skript wird nur dann ausgeführt, wenn für Mappe / Register globale Aktionen definiert sind. ACHTUNG: Der 'enumval' im Skript beinhaltet aber ALLE Aktionen der Mappe / Register und nicht nur die globalen Aktionen. S. auch die Eigenschaften 'GlobalFileAction' und 'GlobalRegisterAction' // Beispielcode in dem Skript:
var currUser = context.currentUser;
for (var i = 0; i < enumval.length; i++)
{
if (enumval[i] == "testAction1") // using the technical action name
{
if (currUser == "user1")
enumval[i] = "";
} // ...
}
- allowFollowUpByOtherUser DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: 0, 1 Gültigkeit: ab: 5.00g HF1 Die globale Eigenschaft 'allowFollowUpByOtherUser=1' ermöglicht es, eine Mappe auf Wiedervorlage durch einen anderen Benutzer setzen zu lassen. Es erscheint somit im Wiedervorlage - Dialog eine Klappliste der möglichen Empfänger.
Dabei werden die Leserechte (ohne (G)ACL) des empfangenden Benutzers auf die Mappe berücksichtigt. Ab Documents 5.0 g HF 3 bzw. Documents 5.0 h werden (G)ACL dabei auch geprüft.
Auf Benutzerebene kann dieser globalen Freigabe widersprochen werden. Das geschieht mit der gleichen Eigenschaft. Soll also ein Benutzer 'schreiber' nicht in der Klappliste zur Wiedervorlage erscheinen, muss für ihn am Benutzer die Eigenschaft 'allowFollowUpByOtherUser=0' gesetzt werden.
- allowMessage DlcGlobalOptions Systemuser string Öffentlich [Webclient5, Scripting] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00d Aktiviert die Nachrichten-Kommunikation zwischen den angemeldeten Benutzern.
Funktioniert nur wenn auch die Eigenschaft allowNotification auf true gesetzt wird.
- allowMessageSendAll DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00d Setzt man die Eigenschaft auf true gibt es die Möglichkeit eine Nachricht an alle angemeldeten Benutzer zu schicken (@ALL steht im Nachrichtenfeld zur Verfügung).
- allowMultipleGentableExits DlcGlobalOptions string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00g Ermöglicht es Gentables mehrere Exit-Callbacks auf ein Event mittels gentableRegistry.registerCallback zu registrieren.
Bitte beachten Sie, dass bei mehrfacher Registrierung des gleichen Callbacks, dieses auch mehrfach ausgeführt wird. Weiterhin ist es durch diese Eigenschaft nicht möglich mehrere Events auf ein Gentable-Feld zu hinterlegen.
- allowNotification DlcGlobalOptions Systemuser string Öffentlich [Webclient5, Scripting] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00d Aktiviert das Benachrichtigungssystem über Websockets.
- allowOnQV DlcGlobalOptions string Öffentlich [Quickview] Mögliche Werte: true Gültigkeit: ab: 5.00 Wird diese Eigenschaft auf true gesetzt, werden beim Quickview die Ordnerrechte nicht geprüft.
- allowResetPassword DlcGlobalOptions enum Öffentlich [Webclient5, Login/Logout/LDAP] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00e Die Eigenschaft "allowResetPassword=true" aktiviert einen Passwort vergessen - Link in der Anmeldemaske. Über den Link kann sich der Benutzer eine E-Mail mit Rücksetzungs-Link zusenden lassen. Die Funktionalität ist nur vorhanden, wenn DOCUMENTS das Kennwortmanagement durchführt (also nicht bei LDAP-Anbindung oder EASYWARE Auth.)
s. auch ResetPassordLinkLifetime
- allowScanning DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 4.00 Mit dieser Eigenschaft kann man festlegen, ob das Einscannen von Dokumenten über das Scan-Applet erlaut ist.
(bei Client-Relevanz: Nur Classic-Client)
- AllowSortTasksML DlcGlobalOptions enum Veröffentlicht [Sortierung] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60i Der Aufgabenordner kann nach der Aufgabenspalte sortiert werden. Dies führt aber bei mehrsprachigen Aufgaben u.U. zu einer fehlerhaften Sortierreihenfolge.
Mit diesem Property kann man die Sortiermöglichkeit abschalten und es erscheint die Fehlermeldung "Nach der Spalte kann nicht sortiert werden.
- alwaysShowTask DlcFile DlcGlobalOptions string Öffentlich [Webclient] Mögliche Werte: true|false|1|0 Standardwert: true Gültigkeit: ab: Mit alwaysShowTask wird auf einer Mappe die Aufgabe auch dann angezeigt, wenn ein Dokument angezeigt wird.
(bei Client-Relevanz: Nur Client 5)
- annotationbuttonPrimaryToolbar DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00c Mit der globalen Property annotationbuttonPrimaryToolbar können die Buttons zum Erzeugen von Annotationen zusätzlich in der primären Toolbar angezeigt werden.
(bei Client-Relevanz: Nur Client 5)
- ApiKeyAuthentication DlcGlobalOptions enum Öffentlich [Webclient5] Mögliche Werte: 0 1 2 3 Standardwert: 1 Gültigkeit: ab: 5.00g Mit der globalen Documents-Einstellung "ApiKeyAuthentication" kann die API-Key-Authentifizierung für einen Mandanten grundsätzlich konfiguriert werden.
Die Konfiguration erfolgt über vier unterschiedliche Stufen, dessen Wert hier angegeben werden muss.
In Stufe "1" (default) ist die API-Key Funktionalität grundsätzlich aktiviert, jedoch können die API-Keys vom Benutzer selbst nicht verwaltet (z.B. Anzeige, Löschen) werden. In Stufe "2" können API-Keys vom Benutzer immer dann verwaltet werden, falls dieser bereits gültige API-Keys besitzt. Diese könnten z.B. über eine externe Applikation für den Benutzer erzeugt worden sein. In Stufe "3" können API-Keys vom Benutzer stets verwaltet und auch neu erzeugt werden. Die Verwaltung der API-Keys finden Sie im Menü der persönlichen Einstellungen eines Benutzers.
Falls gar keine API-Key Unterstützung benötigt wird, kann die Stufe auf "0" gesetzt werden. Beachten Sie jedoch, dass externe Applikationen, wie bsp. DOCUMENTS myFavorites und DOCUMENTS Drop ggf. API-Keys benötigen.
- ApiKeyAuthenticationPasswordReset AccessProfile DlcGlobalOptions Systemuser string Öffentlich [Login/Logout/LDAP, Schnittstellen] Mögliche Werte: 0,1 Standardwert: 1 Gültigkeit: ab: 5.00g HF2 Wenn dieses Property auf 0 gesetzt wird, dann werden die API-Keys bei Änderung des Passworts nicht gelöscht.
- appGatewayEnabled DlcGlobalOptions enum Öffentlich [MobileApp] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00c HF2 Mit der globalen Eigenschaft "appGatewayEnabled=1" wird der Zugang für die mobile App (myFavorites) zum Documentsserver aktiviert.
Falls das Property auf 0 gesetzt ist kann die App keine Daten vom Server abrufen.
- appServerUrl DlcGlobalOptions string Veröffentlicht [MobileApp] Mögliche Werte: Domainname ohne Protokoll und Pfad Standardwert: URL, welche für den Aufruf des Webclients verwendet wird Gültigkeit: ab: 5.00h HF2 Die Server Url für die Mobile App. Wird im App Connect Gadget verwendet. Wenn nicht gesetzt, wird die Url vom Browser genutzt.
(bei Client-Relevanz: Nein (Server Feature))
- arcAddNote DlcGlobalOptions enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51 Mit dieser Einstellung kann man global bestimmen, ob man an einer Mappe im Archiv eine Notiz anbringen kann oder nicht.
(bei Client-Relevanz: Classic-Client und Client 5)
- arcCreateERF DlcGlobalOptions enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51 Die Aktion in der Trefferliste "ERF-Datei erstellen" zur Erstellung von EASY Reference Files kann mit dieser Eigenschaft ausgeblendet werden. Änderung ab DOCUMENTS 4.0:
Das Property arcCreateERF wirkt nur noch für EE.i. Soll für EE.x der Eintrag ausgeblendet werden, muss das neue Property arcCreateREF = 0 gesetzt werden.
- arcCreateREF DlcGlobalOptions enum Öffentlich [EEx, Rechte] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00 Die Aktion in der Trefferliste "REF-Datei erstellen" zur Erstellung von EASY Reference Files für EE.x kann mit dieser Eigenschaft ausgeblendet werden.
- arcDeleteFile DlcGlobalOptions enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51 Wird dieses Property auf 0 gesetzt, ist es nicht möglich Mappen im Archiv zu löschen.
- ArchiveConnPool DlcGlobalOptions enum Öffentlich [EAS, EBIS Store, EEx] Mögliche Werte: 0 1 false true Gültigkeit: ab: 5.00 Aktiviert einen Verbindungspool zur Kommunikation mit dem Archiv. Für EDA- und EBIS-Stores ist er standardmäßig eingeschaltet (1), für EE.i/x ausgeschaltet (0).
Nur EDA funktioniert nachweislich mit beiden Modi. Die übrigen Systeme wurden nur mit der jeweiligen Standardkonfiguration getestet. Die entsprechende Eigenschaft beim Archivserver heißt "ConnectionPool".
- ArchiveDebug DlcGlobalOptions string Öffentlich [EAS, EEi, EEx, Debug, EBIS Store] Mögliche Werte: Pfad auf ein beschreibbares portalserverseitiges Dateiverzeichnis Gültigkeit: ab: 4.00 Diese Eigenschaft ist ausschließlich zur Fehleranalyse vorgesehen. Missbrauch kann u.U. die Sicherheit von Archivpasswörtern gefährden. In dem angegebenen Verzeichnis protokolliert der Portalserver die Kommunikation mit den angeschlossenen
Archivsystemen. Pro Archivrequest wird eine Sende- und eine Empfangsdatei geschrieben.
Binärdatenblöcke werden dabei üblicherweise durch Platzhalter ersetzt.
Die Dateien werden vom Portalserver nicht wieder gelöscht, jedoch nach einem Neustart nach und nach überschrieben. (bei Client-Relevanz: Nein (Server Feature))
- ArchiveDigestAuthOnly DlcGlobalOptions DlcArchiveServer string Öffentlich [EAS] Mögliche Werte: 0, 1 Standardwert: 0 Gültigkeit: ab: 5.00e HF2 Dieses Property sollte gesetzt werden, wenn ein EAS Archiv mit Digest Access Authentication Unterstützung unter Ubuntu verwendet wird und keine Verbindung mit dem Archiv-Server hergestellt werden kann. Hinweis: Eine globale Änderung unter "Documents / Einstellungen" erfordert einen Serverneustart.
- ArchiveFullMonitor DlcGlobalOptions DlcFile enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60g Bei der Archivierung des Monitors werden ab ELC 3.60g nur noch die Einträge archiviert, die auch im Web angezeigt werden (also unter Berücksichtigung der Einstellungen am Mappentypen wie "Entscheidungen anzeigen" etc.. Mit der Mappentyp-Eigenschaft bzw. Documents-Einstellungen Eigenschaft ArchiveFullMonitor=1 kann das alte Verhalten wieder erzwungen werden (es werde alle Einträge archiviert). Gibt es an DlcGlobalOptions und DlcFile 0 : nur im Monitor-Frame angezeigte Werte werden mit archiviert
1 : alle Einträge des Mappenmonitors werden archiviert (Defaultverhalten bis ELC 3.60f)
- ArchiveHasMultiLangLabel DlcGlobalOptions DlcFile enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60g + Kann sowohl in den Documents-Einstellungen als auch am einzelnen Archivmappentypen bzw. Schema hinterlegt werden
+ dient dazu, mehrsprachige Autotitel auch in Archivmappen sauber darstellen zu können.
+ Die allgemeine Documents-Einstellung wirkt sich ab DOCUMENTS 4.0e auch in der Trefferlistenansicht aus.
- ArchiveHitBrowsing DlcGlobalOptions enum Veröffentlicht [EEi, EEx] Mögliche Werte: true false Standardwert: false (EE.i); true (EDA, EE.x) Gültigkeit: ab: 3.60c Die Eigenschaft bestimmt, ob in einer reinen Archivtrefferliste (nur 1 Server) die Trefferdaten seitenweise
abgerufen werden. In gemischten Trefferlisten kann aus technischen Gründen nie archivseitig "geblättert"
werden.
Wird diese Eigenschaft auf false gesetzt, werden alle Treffer aus dem Archiv sofort gelesen. D.h. es werden die Daten nicht seitenweise aus dem Archiv angefordert. Durch diese Einstellung kann die Trefferanzahl nach der Suche stets angezeigt werden. Das "Weitersuchen im Hintergrund" von EE.x wird z.B. übergangen.
Wenn die Anzahl der Treffer hoch ist, hat diese Einstellung jedoch eine starke Verschlechterung der Performance zur Folge.
- ArchiveMassSelection DlcGlobalOptions enum Öffentlich [EEi, Suche] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 4.00b In der erweiterten Suchmaske die Massenauswahl von Archiven anhand einer Checkbox beim Lagerort erlauben.
(verfügbar ab Version 4.0b HF2). ähnliche Eigenschaften: FiletypeMassSelection, ViewMassSelection
- ArchiveMonitorAsPdfUseFop DlcGlobalOptions DlcFile string Öffentlich [Blob, EAS, EBIS Store, EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00e Wenn ArchiveMonitorAsPdf=1 gesetzt wurde, um bei der Archivierung den Monitor als pdf zu erzeugen, wird ab DOCUMENTS 5.0e ein neuer pdf-Generator verwendet. Dadurch sehen die pdfs etwas anders aus.
Wenn die bisherige Generierung weiter verwendet werden soll. kann die mit der Eigenschaft ArchiveMonitorAsPdfUseFop=1 erzwungen werden.
- ArchiveMonitorOnlyWithContent DlcGlobalOptions enum Öffentlich [EAS, EBIS Store, EEi, EEx, Workflow] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00e Archivierung mit Monitor: Wenn am Mappentypen definiert ist, dass der Monitor archiviert werden soll, und die Mappe gar nicht im Workflow war, wurde bisher eine "leere" Datei Monitor.html/pdf erzeugt (das Dokument beinhaltete nur die Spaltenüberschriften). Nun wird bei Mappen ohne Workflow kein Monitor-Dokument mehr erstellt.
Möchte man das bisherige Verhalten weiterhin verwenden, kann dies über Documents-Einstellungen Eigenschaft ArchiveMonitorOnlyWithContent=0 erfolgen.
- ArchiveSelectedAttachment DlcRegister DlcGlobalOptions DlcFile enum Öffentlich [Webclient, EEi, EEx, EAS] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00c Mit ArchiveSelectedAttachment=0 kann man die Registeraktion "Archivierung der selektierten Anhänge" ausschalten. (bei Client-Relevanz: Classic-Client und Client 5)
- ArchiveStatusAsPdfUseFop DlcGlobalOptions DlcFile string Öffentlich [Blob, EAS, EBIS Store, EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00e Wenn ArchiveStatusAsPdf=1 gesetzt wurde, um bei der Archivierung den Status als pdf zu erzeugen, wird ab DOCUMENTS 5.0e ein neuer pdf-Generator verwendet. Dadurch sehen die pdfs etwas anders aus.
Wenn die bisherige Generierung weiter verwendet werden soll. kann die mit der Eigenschaft ArchiveStatusAsPdfUseFop=1 erzwungen werden.
- arcPrintPdf DlcGlobalOptions enum Veröffentlicht [EEi, EEx, Blob] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60 Die Option "PDF-Druck" in der Aktionen Klappliste kann mit diesen Property global für alle Archivtypen ausgeschaltet werden.
- arcSendMail DlcGlobalOptions enum Veröffentlicht [EEi, EEx, Email] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60 Die Option "E-Mail senden" in der Aktionen Klappliste kann mit diesen Property global für alle Archivtypen ausgeschaltet werden.
- areaDropZoneFileSelection DlcGlobalOptions string Öffentlich [Blob, Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00f HF2 Blendet den Button zum Aufrufen des Datei-Auswahldialogs ein/aus, wenn das Feature AreaDropZone eingeschaltet ist.
- AutoEEXSortColumns DlcGlobalOptions enum Veröffentlicht [EEx, Suche] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51 Mit diesem Property gibt man an, ob bei Verwendung von EEx implzit nach den ersten 4 Trefferspalten sortiert werden soll (1=eingeschaltet). Die Einstellung beeinflusst den Import von Viewtrefferlisten, nicht etwa die Recherchefunktion selbst..
- autoLogout DlcGlobalOptions enum Veröffentlicht [Login/Logout/LDAP] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.60f Möchte man dass Benutzer, die in DOCUMENTS arbeiten, beim Schliessen des Browserfensters (Klick auf "X") aus DOCUMENTS ausgeloggt werden, so kann man dieses Property auf true setzen.
(bei Client-Relevanz: Classic-Client und Client 5)
- autoOpenDocMode DlcGlobalOptions DlcFile DlcRegister Systemuser enum Veröffentlicht [Blob] Mögliche Werte: internal external download Standardwert: internal Gültigkeit: ab: 3.60b Es lässt sich durch dieses Property bestimmen, wie man ein Dokument aufrufen möchte. Verhalten im Classic Client: Es kann zwischen internal (im Browser) external (externer Viewer) und download gewählen werden. Die Eigenschaft wird auf dem Register, der Mappe und global unterstützt. Verhalten im Client 5: Der Wert "external" wird ab der Version 5.0e HF1 unterstützt. Die Eigenschaft kann auf einem Register, Mappentyp und global gesetzt werden und bewirkt das beim Anzeigen einer Mappe dieses Typs ein Popup mit dem ersten Dokument automatisch geöffnet wird.
Ab Version 5.0e HF2 wird die Eigenschaft zusätzlich auf dem Benutzer und mit dem Wert "internal" unterstützt. Des weiteren greift die Eigenschaft nicht mehr, wenn auf dem Mappentyp die Option "Erstes Dokument sofort öffnen" deaktiviert ist. Der Wert "download" wird weiterhin nicht unterstützt.
- autoOpenDoubleView DlcFile DlcGlobalOptions Systemuser string Öffentlich Mögliche Werte: 0, false , 1, true Standardwert: false Gültigkeit: ab: 5.00e Öffnet neben der Mappeansicht einen Dokumentennavigator mit allen Dokumenten der Mappe.
- AutoStartScript DlcGlobalOptions string Öffentlich [Scripting] Mögliche Werte: Skriptname Kommaseparierte Liste von Skriptnamen (ab 5.0i HF1) Gültigkeit: ab: 5.00c Mit der Documents-Einstellungen Eigenschaft AutoStartScript=Scriptname kann ein Portalscript definiert werden,
welches bei Serverstart für den zugehörigen Mandanten ausgeführt werden soll.
Ab 5.0i HF1 ist es möglich, mehrere Skripte in einer kommaseparierten Liste anzugeben.
(bei Client-Relevanz: Nein (Server Feature))
- barcodeCharsetCode128 DlcFile DlcGlobalOptions enum Veröffentlicht [Webclient, Webclient5] Mögliche Werte: A B C Standardwert: B Gültigkeit: ab: 3.51 Der ASCII-Barcode-Typ CODE128 unterstützt drei verschiedene Zeichensätze. Variante A stellt Zeichen "0-9", "A-Z" und Sonderzeichen dar,
Variante B gestattet darüber hinaus die Zeichen "0-9", "A-Z", "a-z" und Sonderzeichen,
Variante C stellt lediglich Ziffern, jedoch mit doppelter Informationsdichte dar.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeCheckChar DlcFile DlcGlobalOptions enum Veröffentlicht [Webclient, Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.51 Es ist optional möglich, bei den Barcode-Typen BAR39, BAR39EXT, CODE11, CODE93, CODE128, CODABAR, INTERLEAVED25 und MSI ein spezielles Prüfzeichen zu generieren. Manche Systeme können nur mit Barcodes umgehen, die ein solches Prüfzeichen beinhalten, daher empfiehlt es sich stets, diese Einstellungen auszuprobieren. Dies bezieht sich auf den Leitbeleg.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeFileField DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: <techn. Bezeichner Mappenfeld>, "fileId", "shortFileId" oder "shortFileId2" Gültigkeit: ab: 3.51 Es wird festgelegt, welche Information der Mappe als Barcode ausgegeben werden soll. Der Barcode wird auf dem Leitbeleg nur dann ausgegeben, wenn diese Eigenschaft am Mappentypen gesetzt ist und einen gültigen Wert enthält. Anderenfalls verhält sich der Leitbelegdruck standardmäßig, d.h. ohne Barcodeausgabe. Als Wert ist der technische Name des Mappenfelds anzugeben, dessen Inhalt als Barcode ausgegeben werden soll. Zusätzlich stehen drei spzielle Bezeichner zur Verfügung, um die aktuelle Mappen-ID anzuzeigen. - fileId
Mappen-ID inkl. Mandantennamen, z.B.:
peachit_fi20070000003791 - shortFileId
Mappen-ID ohne Mandantennamen, z.B.:
fi20070000003791 - shortFileId2
Mappen-ID ohne vorangestelltes "fi", z.B.:
20070000003791
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeHeightCm DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: cm Standardwert: 2 Gültigkeit: ab: 3.51 Die Balkenhöhe der erzeugten Barcode-Grafik in cm. Einige Barcodes geben zusätzlich die in der Grafik enthaltene Information im Klartext unter den Balken aus. Durch Manipulation dieses Parameters kann man also die Barcodehöhe und damit auch den für den Klartext verfügbaren Platz im Bild beeinflussen.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeImageHeight DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: Pixel Standardwert: 150 Gültigkeit: ab: 3.51 Die Höhe der gesamten Barcode-Grafik (inkl. Klartext) in Pixeln.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeImageWidth DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: Pixel Standardwert: 500 Gültigkeit: ab: 3.51 Die Breite der gesamten Barcode-Grafik (inkl. Klartext) in Pixeln.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeResolution DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: DPI Standardwert: 60 Gültigkeit: ab: 3.51 Die intern verwendete Auflösung der Barcode-Grafik in DPI. Höhere Werte vergrößern den erzeugten Barcode, kleinere Werte verkleinern ihn.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeTestMode DlcFile DlcGlobalOptions enum Veröffentlicht [Webclient, Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.51 Setzt man dieses Property auf true, erscheint beim Aufruf des Leitbelegfunktion aus der Aktionen-Klappliste nicht mehr der ansonsten automatisch aufgerufene Druckdialog, was das Testen der Barcode-Einstellungen komfortabler macht.
(bei Client-Relevanz: Classic-Client und Client 5)
- barcodeType DlcFile DlcGlobalOptions enum Veröffentlicht [Webclient, Webclient5] Mögliche Werte: BAR39EXT BAR39 CODE11 CODE93 CODE128 CODABAR INTERLEAVED25 IND25 EAN8 EAN13 EAN128 MSI Standardwert: BAR39EXT Gültigkeit: ab: 3.51 Der zu verwendende Barcode-Standard. Zu beachten ist, dass nicht jeder Barcode-Standard mit Buchstaben und Sonderzeichen umgehen kann.
(bei Client-Relevanz: Classic-Client und Client 5)
- baseFeatureConfigs DlcGlobalOptions string Öffentlich [Webclient5] Standardwert: design20 ab documentsOS Gültigkeit: ab: 5.00f Mit der globalen Eigenschaft "baseFeatureConfigs" werden für einen konkreten Mandanten diejenigen <FeatureConfig>-Elemente aus der mandantenübergreifenden FeatureManager-Konfiguration "feature-config-base.xml" hinterlegt, die tatsächlich aktiviert werden sollen. Diese gelten immer zusätzlich zu ihrer eigenen mandantenspezifischen Konfiguration "feature-config-<principal>.xml". Der Wert dieser Eigenschaft muss als eine kommaseparierte Auflistung von <FeatureConfig>-Namen (Attribut "name") hinterlegt werden. Falls einmal ein Feature in mehr als einer dieser FeatureConfigs gleichzeitig vorkommt, so ist immer die jeweils zuletzt aufgelistete Konfiguration gültig.
Hinweis: Eine mandantenübergreifende Konfiguration ist insbesondere auch dann möglich, falls aktuell (noch) gar keine mandantenabhängige Konfiguration hinterlegt ist.
Standardmäßig stehen jedem Mandanten in "feature-config-base.xml" folgende Konfigurationen zur Verfügung: "design20"
Ab documentsOS 6.0 ist "design20" automatisch Standard, falls die Eigenschaft "baseFeatureConfigs" gar nicht hinterlegt ist!
- beforeEditScriptAtScratchCopy DlcGlobalOptions enum Öffentlich [Rechte, Scripting] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00i HF9 Wenn bei Anmeldung im Web noch eine Arbeitskopie aus einer letzten Sitzung für den Benutzer existiert und damit die Mappe automatisch im Bearbeitungsmodus angezeigt wird, wurde bisher (wenn definiert) das beforeEditScript ausgeführt. Das wird nun nicht mehr gemacht. Über die globale Eigenschaft beforeEditScriptAtScratchCopy=1 kann das alte Verhalten wieder eingeschaltet werden.
- beforeWorkAssignScript DlcGlobalOptions DlcFile string Öffentlich [Workflow, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00f HF1 Neuer Script-Exit am Mappentyp: beforeWorkAssignScript=Scriptname wird bei jedem Workflowübergang in der Scripting-Engine ausgeführt. s. auch portalscripting.chm
- BlobEncryption DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.51 bis: 3.60j Die Dokumente können auf der Festplatte im Documents-Repository(\documents) verschlüsselt abgelegt werden. Dazu muss in den Documents-Einstellungen folgende Eigenschaft gesetzt werden: BlobEncryption = 1
BlobEncryptionHasPrincipalkey = 1 (mandantenabhängiger Schlüssel)
BlobEncryptionCustomKey = "Geheim123" (eigener Schlüssel) Man kann BlobEncription nach belieben ein- und ausschalten, man darf dies jedoch nicht bei den anderen beiden Properties machen, da es dazu kommen kann, dass verschlüsselte Dokumente nicht mehr entschüsselt werden können. Ab ELC 4.0 ist es eine Option auf dem Reiter Documents (Basis) bei Documents-Einstellungen
- BlobEncryptionCustomKey DlcGlobalOptions text Veröffentlicht [Blob] Mögliche Werte: Zeichenkette Beispiel: BlobEncryptionCustomKey = "Geheim123" Gültigkeit: ab: 3.51 Das Property setzt den eigenen Schlüssel, der bei Verschlüsselungen von Anhängen auf der Festplatte benötigt wird. Die Verschlüsselung selbst muss jedoch mit einen weiteren Property aktiviert werden (s.a. BlobEncryption und BlobEncryptionHasPrincipalKey). Es muss darauf geachtet werden, dass dieses Property nicht mehr ausgeschaltet wird, da ansonsten es nicht mehr möglich ist verschlüsselte Anhänge wieder zu entschlüsseln.
- BlobEncryptionHasPrincipalKey DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.51 Voraussetzung für diese Property ist, dass die Verschlüsselung BlobEncryption=1 gesetzt ist.
Wenn das Property BlobEncryptionHasPrincipalKey auf 1 gesetzt ist, dann wird der Name (Kürzel) des Mandanten in den Schlüssel zum Verschlüsseln der Anhänge (Blobs) mit verwendet. D.h. wenn die Blobs kopiert werden würden, könnten diese nur vom gleichen Mandanten entschlüsselt werden.
Wenn dieses Property einmal gesetzt wird, so darf man dieses nicht mehr ausschalten, da man ansonsten verschlüsselte Dokumente nicht mehr einsehen kann.
s. auch BlobEncryption und BlobEncryptionCustomKey
- buttonColorMode DlcGlobalOptions FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00a Mit der Eigenschaft "buttonColorMode" können der Bearbeiten-Knopf in Signalfarbe und die Speichern/Abbrechen-Knöpfe in Rot/Grün angezeigt werden
(bei Client-Relevanz: Nur Client 5)
- calendar DlcGlobalOptions enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: false Gültigkeit: ab: 3.51 Zeigt den Kalender in DOCUMENTS an.
(bei Client-Relevanz: Nur Classic-Client)
- CancelNewFileToPool DlcGlobalOptions string Öffentlich [Performance] Mögliche Werte: 1 Gültigkeit: ab: 4.00d Bei der Neuanlage einer Mappe und Abbrechen der Erstellung wird die Mappe in den Pool gelegt und nicht auf Datenbankebene gelöscht -> Performance-Gewinn
(bei Client-Relevanz: Nein (Server Feature))
- CancelWorkflowAccess DlcGlobalOptions DlcFile string Öffentlich [Workflow] Mögliche Werte: 0 Gültigkeit: ab: 4.00e Die Klapplistenaktion "Versendung abbrechen" im Web-Client kann über die diese Eigenschaft ausgeblendet werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- catchUpScriptJob DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60b Nach Serverstart kann verhindert werden, dass PortalScript-Jobs, die während der down-Zeit des Servers nicht ausgeführt wurden, nach Serverneustart nachgeholt werden.
- changeFileTypeDisplayWarning DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 1 0 Standardwert: 1 Gültigkeit: ab: 3.51 Der Wechsel des Mappentypen eines Vorgangs kann zu Informationsverlust führen, wenn der ursprüngliche Mappentyp der Mappe Felder enthält, die im Ziel-Mappentypen nicht vorhanden sind (dazu reicht es schon aus, dass die Felder unterschiedliche technische Namen haben). Über diese Property kann ein automatischer Warnhinweis in der Weboberfläche erzwungen werden, wenn der Anwender den Mappentypenwechsel manuell über die Aktionenklappliste aufruft.
(bei Client-Relevanz: Classic-Client und Client 5)
- CheckAccessRightForAgent DlcGlobalOptions string Öffentlich [Rechte, Workflow] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00g Wenn ein Benutzer im Workflow abwesend ist und einen Vertreter definiert hat, wird seit Version 5.0g überprüft, ob der Vertreter ein Leserecht auf die Mappe hat. Wenn diese nicht vorhanden ist, dann wird er nicht mehr als Vertreter verwendet. Mit der Eigenschaft CheckAccessRightForAgent=0 kann diese Berechtigungsprüfung wieder abgeschaltet werden.
- CheckArchiveFolderOverflow DlcGlobalOptions enum Öffentlich [EAS] Mögliche Werte: 0 1 true false Standardwert: true nur wenn EAS beteiligt Gültigkeit: ab: 4.00 Diese Eigenschaft steuert, ob in dynamischen Ordnern oder Verknüpfungsregistern mit EAS-Archivzugriff Warnmeldungen angezeigt werden, wenn die Obergrenze für Archivtreffer überschritten wurde.
Die Warnungen werden zurzeit nur für EAS erzeugt. Eine späterere Erweiterung ist denkbar. Hintergrund:
In einem dynamichen Ordner erwartet man generell alle dem Filterkriterium entsprechenden Mappen zu finden. Für Archivordner ist dies aus Speicherplatz- und Geschwindigkeitsgründen jedoch etwas problematisch.
Klassischerweise kann eine Höchstzahl mit der Eigenschaft "MaxArchiveHitsFolder" festgelegt werden. Ansonsten macht Documents dem Archiv keine Vorgaben zur Trefferzahl und zeigt einfach so viel an, wie das Archiv standardmäßig liefert.
Beim EAS wird etwas anders verfahren. Ohne "MaxArchiveHitsFolder" wird auf die Einstellung für allgemeine Archivrecherchen zurückgegriffen, weil das Archiv bei fehlender Vorgabe nur 10 Treffer liefert. Die Ausgabe langer Trefferlisten (tausende Treffer) ist bei diesem System erfahrungsgemäß noch zu langsam. Daher wird meistens mit einer kleineren Einstellung für die Trefferzahl gearbeitet. Die Benutzer sollen dabei jedoch wenigstens informiert werden, dass nicht alles angezeigt werden kann.
- checkboxColumnWidth DlcGlobalOptions string Öffentlich [Trefferliste, Webclient5] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00g Legt die Breite der Checkboxspalte in Ordnern und Trefferlisten fest.
- checkinRenderLocalEditIcon DlcGlobalOptions string Öffentlich Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Wenn die Eigenschaft aktiviert ist wird bei ausgecheckten Dokumenten in der Dokumentenliste des Dokumentenregisters zusätzlich ein Icon angezeigt, über den das Dokument direkt zum lokalen Bearbeiten auf dem Rechner geöffnet werden kann.
- checkinSaveAndRelease DlcGlobalOptions string Öffentlich [Webclient5, Checkin/Checkout] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Wenn die Property aktiviert ist findet beim Freigeben einer Datei über die ActiveX oder die Lokale Komponente zusätzlich ein Upload statt.
- CheckMandatoryOnSave DlcFile DlcGlobalOptions enum Öffentlich [Rechte, Webclient] Mögliche Werte: n Standardwert: 0 Gültigkeit: ab: 5.00 HF1 Mappentyp-Eigenschaft CheckMandatoryOnSave=n:
Über CheckMandatoryOnSave kann gesteuert werden, wie sich der Web-Client verhalten soll, wenn Mussfelder nicht ausgefüllt wurden. Wenn CheckMandatoryOnSave nicht gesetzt ist (Standard) oder den Wert 0 hat, dann wird beim Registerwechsel im Web-Client eine Fehlermeldung ausgegeben, dass ein Mussfeld nicht ausgefüllt ist und der Registerwechsel wird nicht durchgeführt. Ab 5.0g:
Darüber hinaus kann für CheckMandatoryOnSave die folgende numerische Bitmaske als Wert gesetzt werden:
2^2 (=4): Es kann bei leeren Mussfeldern ohne Fehlermeldung zwischen den Registern gewechselt werden (ab 5.0g)
2^1 (=2): Beim Speichern der Mappe werden alle Mussfelder geprüft und ggfs eine Fehlermeldung zurück gegeben. (Ein definiertes decreaseFieldRightOnFileViewScript oder hideRegisterOnFileViewScript wird dabei NICHT berücksichtigt.)
2^0 (=1): Beim Speichern der Mappe werden alle Mussfelder geprüft und ggfs eine Fehlermeldung zurück gegeben. Restriktionen aus einem definierten decreaseFieldRightOnFileViewScript oder hideRegisterOnFileViewScript werden berücksichtigt. Bsp. Keine Fehlermeldung bei Registerwechsel, Überprüfung beim Speichern mit decreaseFieldRightOnFileViewScript, hideRegisterOnFileViewScript:
2^2 + 2^1 => CheckMandatoryOnSave=5 Hinweis:
Im decreaseFieldRightOnFileViewScript können Felder, die als Mussfelder definiert sind, auch ausblendet oder readonly werden -w, -rw, -gw.
Falls nun ein Feld ein Mussfeld ist und der Benutzer es z.B. nicht sehen kann, wegen -rw, würde bei dem Wert 2^1 (=1) dann eine Fehlermeldung kommen, dass ein Feld nicht gefüllt ist.
- checkOutCancel DlcGlobalOptions enum Veröffentlicht Mögliche Werte: false true all Standardwert: false Gültigkeit: ab: 3.60g Mit der globalen Eigenschaft "checkOutCancel=true" kann die Möglichkeit des Abbrechens ausgewählter ausgecheckter Dokumente in der CheckOut-Übersicht eingeschaltet werden. Mit "checkOutCancel=all" wird das Checkout aller Dokumente auf Knopfdruck abgebrochen.
- checkOutLocalEdit DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60g Es wird mit diesen Property ermöglicht die direkte Bearbeitung von ausgecheckten Dokumenten in der Check-Out Übersicht zu unterbinden.
- checkQVScratchCopies DlcGlobalOptions string Öffentlich [Webclient] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 3.60 Schaltet beim QuickView die Prüfung auf Arbeitskopien ab wenn der Wert false ist. (bei Client-Relevanz: Nein (Server Feature))
- CheckRightInGetCopy DlcGlobalOptions string Öffentlich [Scripting, Rechte, Server] Mögliche Werte: 0, 1 Standardwert: 1 Gültigkeit: ab: 5.00e HF1 Ab DOCUMENTS 5.0e HF1 gibt es im getCopy() im PortalScripting eine Rechteprüfung (Lesen, Erstellen, Schreiben). Diese kann mit CheckRightInGetCopy deaktiviert werden. Defaultmäßig ist sie aktiviert.
- CheckRightInGetReferenceFile DlcGlobalOptions enum Öffentlich [Scripting, Rechte] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00e HF2 PortalScripting: DocFile.getReferenceFile() prüft nun die Zugriffsrechte. Falls der Benutzer kein Zugriffsrecht auf die referenzierte Mappe hat, wird 'null' zurückgegeben. Die Fehlermeldung kann man wie üblich mittels DocFile.getLastError() abfragen. Die Prüfung kann wenn nötig mit der Documents Einstellungen Eigenschaft CheckRightInGetReferenceFile=0 abgeschaltet werden.
- CheckWriteRightInSync DlcGlobalOptions string Öffentlich [Server, Rechte] Mögliche Werte: 0,1 Standardwert: 1 Gültigkeit: ab: 4.00e HF2 Prüfen auf Schreibrechte beim Ausführen von sync() im Scripting kann deaktiviert werden.
Standardmäßig ist es aktiviert.
- ClearTrashFolder DlcGlobalOptions string Öffentlich [Ordner] Mögliche Werte: n >= 1 (Tage) Gültigkeit: ab: 5.00h HF1 Die globale Eigenschaft 'ClearTrashFolder=n' (n >= 1) ermöglicht es, Mappen im Papierkorb, die länger als n-Tage nicht geändert worden sind, zu löschen, falls die Job Engine gestartet ist. Der Job 'ClearTrashFolder' wird täglich durchgeführt. Die Stundenzahl [0; 23] dazu kann man über den Ini-Parameter '$ClearTrashFolderAt' einstellen.
- clientExecutableCheck DlcGlobalOptions string Öffentlich [Scripting, Webclient5] Standardwert: true Gültigkeit: ab: 5.00i HF3 Schaltet den Mechanismus zur Absicherung der clientseitigen Skriptausführung an bzw. aus. In DOCUMENTS 5 ist der Standardwert: false
- clientHeaderCode DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: Name eines Portalskriptes Gültigkeit: ab: 5.00e Die von dem angegebenen Skript zurückgegebene Zeichenkette wird im Headerbereich (<head></head>) des Webclients eingefügt. Zur Erstellung der Zeichenkette MUSS die Klasse otris.tools.ClientHeaderCode verwendet werden. Informationen zur Verwendung der Klasse finden sich in der Script Extensions API. https://otris.software/documents/api/scriptextensions/otris.tools.ClientHeaderCode.html
- clientLibConfiguration DlcGlobalOptions text Öffentlich [Webclient5] Mögliche Werte: Beispiel: {"fullcalendar": "3.10.x", "chartjs": "2.9.x", "ckeditor": "4.17.x"} Gültigkeit: ab: 5.00e Mit dieser Konfiguration in JSON-Notation können für verschiedene clientseitige Bibliotheken die Versionen festgelegt werden. Im Moment werden die folgenden Bibliotheken unterstützt: * chartjs (2.0.x, 2.1.x, 2.4.x, 2.7.x, 2.9.x)
* fullcalendar (3.4.x, 3.10.x)
* ckeditor (4.3.x, 4.14.x, 4.17.x)
* pdfjs (siehe PDF.js Dokumentation) Die älteren Versionen werden in zukünftigen DOCUMENTS Versionen nach und nach entfernt.
Eine Migration auf die aktuellen Bibliotheksversionen wird aus diesem Grund empfohlen.
- ClosedRangeSearch DlcGlobalOptions enum Veröffentlicht [EEi, EEx, Suche] Mögliche Werte: 0 1 false true Standardwert: Hängt vom Archiv ab Gültigkeit: ab: 3.60c Mit diesem Property kann man zentral die geschlossenen Bereichssuche in DOCUMENTS, ENTERPRISE.i und ENTERPRISE.x ein- bzw. auszuschalten (s.a. DocsClosedRangeSearch, EEIClosedRangeSearch und EEXClosedRangeSearch).
- cmCardCodeEditor DlcGlobalOptions enum Öffentlich [DOCUMENTS Manager] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Steuert ob dir Code Editor Karte im Manager angezeigt wird
- cmCardDependencyUml DlcGlobalOptions enum Öffentlich [DOCUMENTS Manager] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Steuert ob das Skript-Abhängigkeits-Diagramm im Manager angezeigt wird
- cmCardDetails DlcGlobalOptions enum Öffentlich [DOCUMENTS Manager] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Steuert ob dir Detail-Karte im Manager angezeigt wird
- cmCardEASManager DlcGlobalOptions enum Öffentlich [DOCUMENTS Manager] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Steuert ob das die EAS-Manager-Karte im Manager angezeigt wird
- cmCardFileTypeUml DlcGlobalOptions enum Öffentlich [DOCUMENTS Manager] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Steuert ob das Mappentyp-Beziehungs-Diagramm im Manager angezeigt wird
- cmCardFileUml DlcGlobalOptions enum Öffentlich [DOCUMENTS Manager] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Steuert ob das Vorgangs-Diagramm im Manager angezeigt wird
- cmCardPropertyEditor DlcGlobalOptions enum Öffentlich [DOCUMENTS Manager] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Steuert ob dir Property Editor Karte im Manager angezeigt wird
- collapseEmptyLabelRows DlcFile DlcGlobalOptions string Öffentlich Mögliche Werte: false, true, 0, 1 Standardwert: true (ab 6.2.0), davor false Gültigkeit: ab: 5.00f HF1 Wenn die Bezeichner aller Felder in einer Zeile nicht angezeigt werden, wird der Platzhalter für diese entfernt. Ab 6.2.0 ist dieses Verhalten im Standard aktiviert.
- commentPosition DlcGlobalOptions DlcFile string Öffentlich [Webclient5, Webclient] Mögliche Werte: default, bottom, top Gültigkeit: ab: 5.00h Positioniert den Mappenkommentar im Register. default: Standardposition (Selbes Verhalten wie bei ungesetzter Eigenschaft)
top: Als erstes nach den Register-Reitern.
bottom: Als letztes nach allen anderen Elementen.
- commentPositionBottom DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00e HF2 Zeigt die Mappenkommentar die mit commentField=Feld eingeschaltet wurden, an letzter Stelle in der Marginalspalte an. Ab der Version 5.0h sollte hierfür die Eigenschaft commentPosition verwendet werden, da diese flexibler ist.
- compactViewWidth DlcFolder DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00f Legt die Breite fest, ab der die Ordner- und Trefferlistenansicht in den Kompaktmodus wechselt.
Für Trefferlisten kann mit "hitlistCompactViewWidth" eine eigene Breite festgelegt werden.
Für Verknüpfungsregister und Mappenlink-Register kann mit "linkRegisterCompactViewWidth" eine eigene Breite festgelegt werden.
- confirmSaveDocuments DlcGlobalOptions enum Öffentlich [Webclient, Blob] Mögliche Werte: true false Gültigkeit: ab: 4.00a bis: 4.00e HF2 Mit der globalen Eigenschaft confirmSaveDocuments=true wird beim Speichern einer Mappe gefragt, falls zuvor Dokumente lokal bearbeitet wurden, ob diese gespeichert wurden. Man kann den Speichervorgang dann abbrechen.
(bei Client-Relevanz: Nur Classic-Client)
- controlSheetFileCoverFields DlcFile DlcGlobalOptions string Veröffentlicht [Webclient, Webclient5] Mögliche Werte: kommaseparierte Liste technischer Feldnamen Gültigkeit: ab: 3.60 Da ein Leitbeleg u.U. nicht sehr aussagekräftig ist, kann man mit diesem Property beliebige weitere Felder im Leitbeleg hinzufügen. Es besteht die Möglichkeit, das Property sowohl am Mappentypen als auch global zu setzen.
- copySystemUserProperties DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60b Wird dieses Property auf 0 gesetzt, so wird beim Erstellen eines neuen Benutzers der Standard-Benutzer, den man unter Documents - Einstellungen => Documents (Basis) => Documents Einstellungen / Standard-Benutzer setzen kann, nicht mehr komplett als Template verwendet. Es werden nur noch die Einstellungen übergeben, jedoch nicht die Eigenschaften des Standard-Benutzers.
- corporateColor DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: + alle css-Formatangaben: Hexadezimalcodierung + Farbnamen Gültigkeit: ab: 5.00a legt Hintergrundfarbe für Module fest.
gleiche Eigenschaft wie skinSignalColor, aber ohne Verweis auf die .less - Dateien.
(bei Client-Relevanz: Nur Client 5)
- corporateHeaderHTML DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: HTML Standardwert: - Gültigkeit: ab: Ersetzt den Standard Corporate Header links oben mit eigenem HTML. Funktioniert nur mit eingeschalteter Toolbar-Leiste.
- countFilesInInbox DlcGlobalOptions enum Veröffentlicht [Inbox] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51 Die Anzeige der Mappenanzahl im Eingangsordner des Benutzers kann hiermit in der Übersicht ausgeblendet werden. Dies steigert die Performance insbesondere bei Verwendung von Oracle.
Funktioniert nur im Classic Client bzw. in Documents 4.
(bei Client-Relevanz: Nur Classic-Client)
- countTasks DlcGlobalOptions enum Veröffentlicht [Webclient] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60c Die Anzahl der Aufgaben wird im Namen des Aufgabenordners angezeigt . Je nach System kann die Anzeige die Antwortzeit der Anwendung verlängern.
(bei Client-Relevanz: Nur Classic-Client)
- CoverXMLIgnoreFieldRights DlcGlobalOptions enum Veröffentlicht [Blob, Rechte] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60c Mit diesen Property läßt sich das alte Verhalten beim PDF-Druck einstellen. Im Mappendeckel werden alle Feldnamen angezeigt. Feldwerte bei Felder, bei denen keine Leserechte aus der Verrechtung im Mappentypen bestand, waren leer. Im Workflow spezifizierte Leserechte wurden ignoriert.
- createFileLabel DlcGlobalOptions string Öffentlich Mögliche Werte: Text, de:...,en:.., pf:msg-key Gültigkeit: ab: 5.00h Ändert im Design 2.0 den Bezeichner für den Neue Mappe-Button.
Mit de:...;en:... Kann ein internationalisierter Bezeichner verwendet werden.
Mit pf:msg-key kann eine Übersetzung aus den .properties-Datein unter server\locale verwendet werden.
- createFileTooltip DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: Text, de:...,en:.., pf:msg-key Gültigkeit: ab: 5.00h Ändert im Design 2.0 den Tooltip für den "Neue Mappe"-Button.
Mit de:...;en:... Kann ein internationalisierter Bezeichner verwendet werden.
Mit pf:msg-key kann eine Übersetzung aus den .properties-Datein unter server\locale verwendet werden.
- CSVEncoding DlcGlobalOptions Systemuser enum Öffentlich [Webclient] Mögliche Werte: UTF-8 ISO-8859-1 ISO-8859-15 Windows-1252 Windows-1250 Gültigkeit: ab: 4.00b Beim csv-Export aus Listen im Web-Client werden die csv-Dateien im lokalen Encoding des DocumentServer geschrieben (z.B. unter Windows Win-1252).
Ein abweichendes Encoding kann über die Eigenschaft "CSVEncoding" am Benutzer bzw. global bei DOCUMENTS Einstellungen gesetzt werden.
- CSVExportUTF8WithoutBOM DlcGlobalOptions enum Öffentlich [Trefferliste, Encoding] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 6.1.0 CSV-Export von Trefferlisten und Ordnern: Wenn als CSV-Encoding UFT-8 verwendet wird, dann wird in die csv-Datei nun eine BOM (Byte order mark) geschrieben, damit die csv-Datei in MS Excel direkt im korrekten Encoding UTF-8 geöffnet wird. Das bisherige Verhalten kann man mit der Documents-Einstellungen Eigenschaft CSVExportUTF8WithoutBOM=1 wieder erzwingen.
- CustomJSContextFilter DlcGlobalOptions string Öffentlich [otrLogger] Mögliche Werte: Regulärer Ausdruck zum Filtern des Logging-Kontexts Gültigkeit: ab: 5.00c Filtert Log-Meldungen des otrLoggers nach dessen Kontext. Siehe auch die otrLogger-Dokumentation. Beispiel:
$CustomJSContextFilter=^Function1 Es werden nur Log-Meldungen ausgeben (unabhängig vom Log-Level), dessen Kontext mit "Function1" anfängt: otrLogger.logInfo("Function1", "Error"); // wird ausgegeben
otrLogger.logError("Function1", "Error"); // wird ausgegeben
otrLogger.logInfo("Function2", "Error"); // wird nicht ausgeben
otrLogger.logError("Function2", "Error"); // wird nicht ausgeben
- CustomJSLogFormat DlcGlobalOptions string Öffentlich [otrLogger] Mögliche Werte: text, json Standardwert: text Gültigkeit: ab: 5.00f HF1 Gibt das Ausgabeformat des otrLoggers an. Unterstützt werden "text" (bisheriges Format) und "json". Im JSON-Format wird die Log-Meldung als JSON-String ausgegeben: ```
{
level: "INFO",
context: "context",
transactionNo: "123",
message: "message",
fileId: "fileId"
}
```
- CustomJSLogLevel DlcGlobalOptions string Öffentlich [otrLogger] Mögliche Werte: NONE, FATAL, ERROR, WARN, INFO, DEBUG Standardwert: NONE Gültigkeit: ab: 5.00 Aktiviert das Logging durch den otrLogger. Der otrLogger ist eine Logging-Klasse, die innerhalb von PortalScripten verwendet werden kann, um Log-Meldungen in der Server-Log zu schreiben. Mit Hilfe dieses Properties lässt sich steuern, welche Log-Ausgaben im laufendem Betrieb erzeugt werden sollen. Die Log-Level, die in diesem Property angegeben werden können, haben die folgende Bedeutung: * DEBUG: Alle Meldungen werden ausgegeben
* INFO: Alle ausser DEBUG
* WARN: Alle Warnungen und Fehler-Text
* ERROR: Fehler und fatale Fehler
* FATAL: Nur der FATAL-Level
* NONE: Es werden keine Meldung ins Server-Log geschrieben
- dashboardAddCountToFolderLabel DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: true Gültigkeit: ab: 5.00g Über die Eigenschaft dashboardAddCountToFolderLabel kann die Anzeige der Gesamtanzahl der enthaltenen Mappen in einem Ordner auf dem Dashboard deaktiviert werden.
- dashboardBackgroundImage DlcGlobalOptions FeatureManager string Öffentlich [Webclient5] Mögliche Werte: login, backgroundImage_custom.png Die Bilddateien sollen im \tomcat8\webapps\documents\img\documents\skin\base\shared\login liegen oder über den externen Context nach /img/documents/skin/base/shared/login eingebunden werden. Standardwert: none Gültigkeit: ab: 5.00f Stellt den Hintergrund für Dashboards bereit. Achtung im Falle einer Einrichtung als Feature wird die Eigenschaft groß geschrieben:
<Feature name="DashboardBackgroundImage" value="silver_wall.jpg" /> Wird der Wert "login" verwendet, wird das Hintergrundbild der Login-Maske verwendet.
- dashboardRemoteTiles DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 oder ein bzw. beide Schlüsselwörter: marked, privatefolder Standardwert: true Gültigkeit: ab: 5.00g Über die Eigenschaft kann im Kontext einer Multimandanten Konfiguration (siehe Eigenschaft: trustedSwitchPrincipals) gesteuert werden ob und welche Dashboard-Kacheln auch in den jeweiligen anderen Mandanten zur Verfügung stehen sollen.
Standardmäßig werden alle Kacheln der anderen Mandanten zur Verfügung gestellt. Um die Auswahl der Kacheln aus anderen Mandanten komplett zu deaktivieren muss die Eigenschaft mit dem Wert "false" belegt werden.
Über das Schlüsselwort "marked" kann die Anzeige pro Kacheldefinition gesteuert werden. Hierzu dient die Eigenschaft "tileRemote" am Skript bzw. am Ordner. Das Schlüsselwort "privatefolder" steuert die Anzeige der privaten Ordner (Eingang, Favoriten, ...).
Bei der Verwendung beider Schlüsselwörter müssen diese durch ein Komma getrennt werden.
- dashboardReportMode DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Gültigkeit: ab: 5.00b Dieser Schalter ermöglicht die Verwendung von benutzerdefinierten Kacheln als auch von erweiterten Systemkacheln.
- dashboardTransparentTitle DlcGlobalOptions FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true,false Standardwert: false Gültigkeit: ab: 5.00f Titel von Dashboard-Kacheln bekommen einen transparenten Hintergrund und einen Farbigen unteren Rand Achtung im Falle einer Einrichtung als Feature wird die Eigenschaft groß geschrieben:
<Feature name="DashboardTransparentTitle" active="true" />
- DateFieldMaxValue DlcGlobalOptions string Öffentlich Mögliche Werte: Datumswert Gültigkeit: ab: 6.2.0 Mit der globalen Eigenschaft 'DateFieldMinValue' und 'DateFieldMaxValue' kann man für die Felder der Datentypen 'Datum' und 'Zeitstempel' einen Wertebereich angeben, in dem die eingegebenen Werte liegen müssen. Der angebene Wert muss dem Format aus Documents-Einstellungen->Loale/Format->Format-Einstellungen entsprechen, z.B. DateFieldMinValue=01.01.1980.
Die Einstellungen der Eigenschaft 'MinValue' und 'MaxValue' am Mappentypfeldern hat höhere Priorität.
Mit 'MinValue=0' bzw. 'MaxValue=0' am Mappentypfeldern kann man die globalen Einstellungen für das Feld abschalten.
- DateFieldMinValue DlcGlobalOptions string Öffentlich Mögliche Werte: Datumswert Gültigkeit: ab: 6.2.0 Mit der globalen Eigenschaft 'DateFieldMinValue' und 'DateFieldMaxValue' kann man für die Felder der Datentypen 'Datum' und 'Zeitstempel' einen Wertebereich angeben, in dem die eingegebenen Werte liegen müssen. Der angebene Wert muss dem Format aus Documents-Einstellungen->Loale/Format->Format-Einstellungen entsprechen, z.B. DateFieldMinValue=01.01.1980.
Die Einstellungen der Eigenschaft 'MinValue' und 'MaxValue' am Mappentypfeldern hat höhere Priorität.
Mit 'MinValue=0' bzw. 'MaxValue=0' am Mappentypfeldern kann man die globalen Einstellungen für das Feld abschalten.
- datepickerPopupMode DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: focus, button Standardwert: focus Gültigkeit: ab: 5.00b Bei Mappenfeldern vom Typ Datum und Zeitstempel wird im Web-Client immer automatisch das Popup bzw. der DatePicker geöffnet, falls der Fokus (z.B. über Tabulator oder Mouseklick) in das Eingabefeld gesetzt wird oder automatisch, falls dieses Feld zusätzlich das erste Feld in einem beliebigen Feldregister ist. - Dieses Verhalten kann mit der Eigenschaft "datepickerPopupMode" in den Documents-Einstellungen abgeschaltet werden. Als Werte sind hier "focus" (default) und "button" konfigurierbar. Bei "button" wird das Popup nur noch über den Button geöffnet.
(bei Client-Relevanz: Nur Client 5)
- DebugHttpLibrary DlcGlobalOptions enum Öffentlich [Debug, EAS, EBIS Store, EEx, EEi] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00d Dies ist eine Erweiterung der "ArchiveDebug" Protokollfunktion. Wenn aktiviert, wird pro Archivzugriff zusätzlich eine Datei "<nnn>_L.log" angelegt (mit "<nnn>" = fortlaufende Nummer). Dort protokolliert die von DOCUMENTS eingesetze HTTP-Bibliothek dann ihre Arbeitsschritte.
Gelegentlich ist dies hilfreich, z.B. um Zertifikatsfehler bei SSL/TLS-Verbindungen aufzuspüren. (bei Client-Relevanz: Nein (Server Feature))
- decoupleFileView DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: [true, false] Standardwert: true Gültigkeit: ab: 5.00a Erlaubt das entkoppeln von Mappen. (bei Client-Relevanz: Nur Client 5)
- decoupleFolderView DlcGlobalOptions string Öffentlich Mögliche Werte: [true, false] Standardwert: true Gültigkeit: ab: 5.00a Erlaubt das entkoppeln von Ordnern. (bei Client-Relevanz: Nur Client 5)
- decreaseCreationFileTypesScript DlcGlobalOptions string Öffentlich [Webclient5, Rechte] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00f HF1 Mit dem angegebenen PortalScript kann man die zur Verfügung stehenden Mappentypen für den Neuanlage-Dialog im WebClient einschränken. s.a. portalscripting.chm
- decreaseDirectSearchArchivesScript DlcGlobalOptions string Öffentlich [Suche, EEx, EEi, Rechte] Gültigkeit: ab: 5.00d HF2 Diese Eigenschaft kann analog zu "decreaseSearchArchivesScript" auf ein Skript verweisen, welches EE.x-Views und/oder EE.i-Archive aus der Auswahlliste für die Direktsuche (ohne Suchmaske) individuell ausblendet, indem es unerwünschte Bezeichner in dem übergebenen enumval-Array mit einem Leerstring überschreibt.
- decreaseDirectSearchFileTypesScript DlcGlobalOptions string Öffentlich [Suche, Rechte] Gültigkeit: ab: 5.00d HF2 Diese Eigenschaft kann analog zu "decreaseSearchFileTypesScript" auf ein Skript verweisen, welches Mappentypen aus der Auswahlliste für die Direktsuche (ohne Suchmaske) individuell ausblendet, indem es unerwünschte Bezeichner in dem übergebenen enumval-Array mit einem Leerstring überschreibt.
- decreaseSearchArchivesScript DlcGlobalOptions string Veröffentlicht [EEi, EEx] Mögliche Werte: PortalScriptName - das auszuführende Portalscript Gültigkeit: ab: 3.60g Mit dieser Einstellungen wird ein PortalScript aufgerufen, in welchem man über den enumval die anzuzeigenden Views/Archive in der erweiterten Suche benutzerspezifisch einschränken kann. Das Script muss also den klassischen Aufbau wie ein AllowedAction-Script haben, unerwünschte Archive bzw. Views werden dann durch Zuweisung eines Leerstrings an den jeweiligen enumval-Index rausgeworfen. Im Falle einer EE.x-Anbindung stehen in enumval nicht die kurzen technischen Namen, sondern deren "Adressen", z.B. "Unit=Default/Instance=Default/View=Scanners"
- decreaseSearchFileTypesScript DlcGlobalOptions string Öffentlich [Suche] Mögliche Werte: ScriptName Gültigkeit: ab: 5.00c Definiert ein PortalScript, welches in der erweiterten Suche Mappentypen ausblenden kann. Details sind in der portalscripting.chm beschrieben.
- decreaseSearchStoresScript DlcGlobalOptions string Öffentlich [EAS, EBIS Store] Mögliche Werte: ScriptName Gültigkeit: ab: 5.00c Definiert ein PortalScript, welches in der erweiterten Suche EDA- und EBIS Stores ausblenden kann. Details sind in der portalscripting.chm beschrieben.
- defaultEExInstance DlcGlobalOptions Systemuser string Öffentlich [EEx] Mögliche Werte: Instanzname Gültigkeit: ab: 3.60c Wird bei der Anmeldung die Unit und Instanz nicht angegeben (z.B. bei SSO) sollte dieses Property zusammen mit defaultEExUnit gesetzt werden.
- defaultEExUnit DlcGlobalOptions Systemuser string Öffentlich [EEx] Mögliche Werte: Unit Gültigkeit: ab: 3.60c Wird bei der Anmeldung die Unit und Instanz nicht angegeben (z.B. bei SSO) sollte dieses Property zusammen mit defaultEExInstance gesetzt werden.
- defaultLocale DlcGlobalOptions string Öffentlich [Webclient] Mögliche Werte: en|de|... Gültigkeit: ab: 5.00h Die globale Eigenschaft defaultLocale=en|de|.. steuert bei Erstaufruf oder Systemfilter-Aufruf die Standard-Sprache, falls nicht, wie bisher die erste Sprache genommen werden soll. Die zuletzt verwendete Sprache hat weiterhin Vorrang.
- defaultTreeFrameHeight DlcGlobalOptions string Veröffentlicht [Tree] Mögliche Werte: Höhe in Pixel Standardwert: * Gültigkeit: ab: 3.51 Mit dieser Einstellung lässt sich die Höhe des Trefferbaumfensters / Ordnerbaum festlegen.
(bei Client-Relevanz: Nur Classic-Client)
- defaultTreeFrameWidth DlcGlobalOptions string Veröffentlicht [Tree] Mögliche Werte: Breite in Pixel Standardwert: 208 - 288 Gültigkeit: ab: 3.51 Mit dieser Einstellung lässt sich die Breite des Trefferbaumfensters festlegen. Die Breite des Fensters wird jedoch für jeden Benutzer im Property dlcMainFrameDefaultPosition abgespeichert. Dadurch wird dieses Property nur benutzt, wenn das Property dlcMainFrameDefaultPosition beim Benutzer nicht vorhanden ist. Der Standardwert 208 - 288 hängt davon ab, welche Module aktiv sind (Kalender etc)
(bei Client-Relevanz: Nur Classic-Client)
- DelegateFollowUpToAgent DlcGlobalOptions string Öffentlich [DOCUMENTS Manager] Mögliche Werte: 0,1 Standardwert: 0 Gültigkeit: ab: 5.00f Diese globale Eigenschaft "DelegateFollowUpToAgent=1" ermöglicht es, Wiedervorlagen im Abwesenheitsfall eines Benutzers an Vertreter weiterzuleiten.
- DeleteActionIfFileSealed DlcGlobalOptions enum Veröffentlicht [Workflow] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60b Mit diesen Property kann man durch eine durch den Workflow versiegelte Mappe nicht mehr löschen.
- denyArchivingIfDocumentLocked DlcFile DlcGlobalOptions enum Öffentlich [Schnittstellen, Checkin/Checkout, EBIS Store, EEx, EEi, EAS] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f HF1 Wenn die Eigenschaft denyArchivingfDocumentLocked=1 gesetzt ist, kann eine Mappe nicht archiviert werden, solange ein Dokument der Mappe ausgechecked ist.
- denyDeletionIfDocumentLocked DlcFile DlcGlobalOptions enum Öffentlich [Schnittstellen, Checkin/Checkout] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f HF1 Wenn die Eigenschaft denyDeletionIfDocumentLocked=1 gesetzt ist, kann eine Mappe nicht gelöscht werden, solange ein Dokument der Mappe ausgechecked ist.
- destroyDynamicTrees DlcGlobalOptions enum Öffentlich [Scripting, Tree] Mögliche Werte: true false Gültigkeit: ab: 4.00a Beim Scripting kann über den Context-returnType=destroyDynamicTrees dynamische Bäume (TrefferBaum und ScriptBaum) gelöscht werden. Gleiches gilt für die globale Eigenschaft destroyDynamicTrees=true. Die Bäume werden dann beim Klick auf einen Ordner oder die Übersicht zerstört.
- detailCellPadding DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: true Gültigkeit: ab: 5.00f Setzt man die Eigenschaft detailCellPadding auf false bzw. auf 0, werden die standardmäßigen Abstände in der Detailzeile (ausklappbare Mappendetails) entfernt.
- disableDisplayRegisterShortcut DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00c Deaktiviert die Shortkey-Auswahl von Registern. Dies ist nötig wenn man das Eingeben von Sonderzeichen per ALT + Tastenkombination ermöglichen möchte.
- disableFileUploadWithoutDocumentRegister DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: Deaktiviert die Area Dropzone und den Upload Button in der Menubar, wenn die aktuelle Mappe kein Dokumentenregister hat.
- DisableGetFieldsCacheMode DlcGlobalOptions string Veröffentlicht [DB, Performance] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00i HF5 Performance-Optimierung bei der Anzeige von Mappen mit vielen Feldern und Registern: Das Laden aus der Datenbank wurde optimiert. Insbesondere bei entfernten DBs oder höhere Latenz wirkt sich deutlich aus. Mit der Documents-Einstellungen Eigenschaft DisableGetFieldsCacheMode=1 kann das geänderte Ladeverhalten deaktiviert werden.
- disableShortcuts DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00b Alle Shortcuts können über die globale Property "disableShortcuts" ausgeschaltet werden.
(bei Client-Relevanz: Nur Client 5)
- DistributionListDirectForward DlcFile DlcGlobalOptions enum Öffentlich [Workflow, Webclient] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 4.00c Versendelisten / AdHoc-Versendung: das Documents-Einstellungen bzw. Mappentyp Property DistributionListDirectForward=1 bewirkt, dass zum Weiterleiten neben dem Eintrag in der Aktionsklappliste ein "Direkt weiterleiten" Button in der Mappe dargestellt wird, der die Mappe direkt zum nächsten Empfänger sendet. Dies bezieht sich nur auf Versendelisten (s. auch AdHocWorkflowDirectForward=1) nicht aber auf vordefinierte Workflows (Visio-Workflows)
(bei Client-Relevanz: Classic-Client und Client 5)
- dlcMarginWidth DlcGlobalOptions DlcFile string Öffentlich Gültigkeit: ab: 4.00 Gibt an (in Pixeln) wie breit die rechte Seite ist. Dieses Property kann auch auf Mappentypen oder Registern gesetzt werden
In Documents4 ist dies ausserdem einstellbar unter »Documents/Einstellungen/Globale Einstellungen«. Es muss erst durch die Eigenschaft useMarginWidth eingeschaltet werden. (bei Client-Relevanz: Neues Verhalten in Client 5)
- docCompareWindow DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Öffentlich [Webclient] Mögliche Werte: false true Standardwert: false Gültigkeit: ab: 3.60g Es können mehrere Dateien extern nebeneinander zum Vergleich geöffnet werden. Zurzeit werden nur die browserinternen Viewer genutzt.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocCompareWindow". (bei Client-Relevanz: Classic-Client und Client 5)
- docFieldsCompareWindow DlcGlobalOptions enum Öffentlich [Blob] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 4.00 Es können mehrere Dateien extern nebeneinander zum Vergleich geöffnet werden. Zurzeit werden nur die browserinternen Viewer genutzt. Position des Button über den Feldern neben dem Dokument.
(bei Client-Relevanz: Classic-Client und Client 5)
- docFieldsEditDocument DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Webclient, Webclient5] Mögliche Werte: false, true Standardwert: true (D5), false (D4) Gültigkeit: ab: 4.00a Bei der Dokumentendetailansicht mit nebenstehenden Mappenfeldern, kann mit dieser Eigenschaft der Funktionsknopf "Dokument bearbeiten", mit dem das aktuell angezeigte Dokument direkt in den lokalen Bearbeitungsmodus versetzt werden kann, optional ausblendet werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- docRegisterGridType DlcRegister DlcFile DlcGlobalOptions string Veröffentlicht [Webclient5, Blob] Mögliche Werte: list, gallery Standardwert: list Gültigkeit: ab: 5.00d Mit der Eigenschaft docRegisterGridType kann man die Standardansicht für Dokumentenregister einstellen.
- DocsClosedRangeSearch DlcGlobalOptions enum Veröffentlicht [Suche] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 3.60c Wird in der Suchmaske von den zwei Eingabefeldern für ein numerisches Feld oder ein Datumsfeld nur das Linke ausgefüllt, wird in DOCUMENTS standardmäßig eine Bereichssuche mit offenem Ende ausgeführt. Dieses Verhalten lässt sich mit diesen Property ändern, so dass nur nach dem eingetragenem Wert gesucht wird. Wenn diese Eigenschaft undefiniert ist, wird stattdessen die allgemeine Eigenschaft "ClosedRangeSearch" geprüft, die sich auch auf Archivrecherchen auswirkt.
- DocSortByName DlcGlobalOptions enum Veröffentlicht [Blob, Sortierung] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60b bis: 3.60j Dokumente werden alphanumerisch in allen Register angezeigt sortiert. Standardmäßig werden sie chronologisch entsprechend dem Zeitpunktes des Hinzufügens zur Mappe aufgelistet. Die Eigenschaft wurde DOCUMENTS 4 durch eine Auswahlliste "Reihenfolge der Anhänge" abgelöst.
- docToolBarButtonDownload DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den "Download" Knopf ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonDownload".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonEdit DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den "Bearbeiten" Knopf ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonEdit".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonExternal DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den Knopf "Extern anzeigen" ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonExternal".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonInternal DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den Knopf "Intern anzeigen" ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonInternal".
(bei Client-Relevanz: Classic-Client und Client 5)
- DocumentListWithComment DlcFile DlcGlobalOptions enum Öffentlich [Webclient5, Blob] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00b Am Mappentypen bzw Documents-Einstellungen kann mit der Eigenschaft DocumentListWithComment=1 die Darstellung des Dokumentenkommentars in der Dokumentenliste aktiviert werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- documentsLoginHeader DlcGlobalOptions string Veröffentlicht [Webclient, Login/Logout/LDAP] Mögliche Werte: Überschrift Anmeldemaske Gültigkeit: ab: 3.51 Man kann für die Anmeldemaske eine beliebige Überschrift wählen.
(bei Client-Relevanz: Classic-Client und Client 5)
- doublelistToolbar DlcGlobalOptions DlcField string Öffentlich [Webclient5] Mögliche Werte: false, true Standardwert: true Gültigkeit: ab: 5.00c HF1 Deaktiviert global bzw auf Feld den AutoComplete und Sortierknopf des Doppelauswahlliste, wenn es auf false gesetzt ist.
(bei Client-Relevanz: Neues Verhalten in Client 5)
- doubleViewBesidesHeader DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00e Erlaubt das Rendern des DoubleView neben den Registern, bei ausschalten der Property.
- doubleViewConfig DlcGlobalOptions text Öffentlich Mögliche Werte: - Standardwert: { saveState: "fileType" } Gültigkeit: ab: Konfiguriert den Zustand des Workspaces bei Anzeige der Doppelansicht und ob der Doppelansicht-geöffnet Zustand pro Mappentyp oder global gespeichert wird. Es werden nur die definierten Zustände angewendet und ansonsten die Standardeinstellungen verwendet. JSON-Definition: {
saveState : "global|fileType",
"workspaceStates" : {
"sidebar" : {
"size" : Number (Pixel) | "min"
},
"folder" : {
"size" : Number (Pixel) | "min"
},
"file": {
"size" : Number (Pixel),
"registerbar" : {
"size" : "min"
}
}
}
}
- downloadBlobAsPdf DlcGlobalOptions DlcFile string Öffentlich [Blob, pdf-Druck] Mögliche Werte: 0 : Originalformat zurückgeben 1 : pdf zurückgeben, falls konfiguriert Gültigkeit: ab: 4.00d Mit der Eigenschaft showBlobAsPdf kann definiert werden, dass nach pdf konvertiert werden sollen. Möchte man beim Download der Anhänge aber das Originalformat haben, kann dies über die Eigenschaft "downloadBlobAsPdf=0" erzwungen werden.
s. auch showBlobAsPdf, sendBlobAsPdf, showBlobAsPdfInDocEditMode, showBlobAsPdfInViewMode
(bei Client-Relevanz: Classic-Client und Client 5)
- DownloadFileEncoding DlcGlobalOptions string Öffentlich [Encoding, Webclient] Mögliche Werte: UTF-8, ISO-8859-15 etc. und NONE Standardwert: UTF-8 Gültigkeit: ab: 4.00b HF2 Mit der globalen Eigenschaft DownloadFileEncoding = <Encoding> kann das Encoding der im Browser direkt angezeigten textbasierten Dateien festgelegt werden.
So kann z.B. in der UTF-8 Version ein Encoding "ISO-8859-15" eingestellt werden, damit so codierte Texte mit Sonderzeichen korrekt dargestellt werden. Seit documentsOS 6.2.0 ist der Standardwert: UTF-8 Die Eigenschaft kann bei Bedarf auf den Wert "NONE" gesetzt werden um das vorherige Verhalten wieder herzustellen. In diesem Fall entscheidet der Browser welches Encoding zur Darstellung verwendet wird. (bei Client-Relevanz: Classic-Client und Client 5)
- DropConnector DlcGlobalOptions text Öffentlich [Webclient5] Mögliche Werte: true, false, [Gadget-Konfiguration] Gültigkeit: ab: 5.00f Über die Eigenschaft DropConnector wird die Verwendung von DOCUMENTS Drop aktiviert.
Detailierte Informationen finden Sie in der Gadget API.
- dropZoneCheckMandatoryFields DlcFile FeatureManager DlcGlobalOptions string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i Prüft ob alle Pflichtfelder ausgefüllt sind, wenn ein Benutzer versucht eine Datei an einer Mappe hochzuladen. Sind nicht alle Pflichtfelder gefüllt wird der Hochladevorgang abgebrochen.
- DropZoneOpenDocumentAfterDrop DlcGlobalOptions DlcFile string Öffentlich [Blob, Webclient5] Mögliche Werte: true, 1, false, 0 Standardwert: true Gültigkeit: ab: 5.00c Beim Hochladen von Dokumenten per DropZone kann hiermit das automatische Öffnen von Dokumenten ausgestellt werden.
(bei Client-Relevanz: Neues Verhalten in Client 5)
- dropzoneTypeIE DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: activex, html5 Standardwert: activex Gültigkeit: ab: 5.00a Die beiden DropZones (Quick und Register) zum Upload von Dokumenten werden im Internet Explorer standardmäßig über ein ActiveX-Plugin gesteuert. Durch das Setzen der globalen Eigenschaft "dropzoneTypeIE" auf den Wert "html5" wird stattdessen eine HTML5-Komponente zum Upload von Dokumenten verwendet. Die beiden bisherigen Eigenschaften "DropZone_HTML5" und "QuickDropZone_HTML5" haben für den D5 Client keine Gültigkeit mehr.
Siehe dazu auch Eigenschaft "localEditTypeIE".
(bei Client-Relevanz: Nur Client 5)
- DropZone_HTML5 DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 4.00c Ermöglicht im Classic-Client die Aktivierung der HTML5 DropZone für sämtliche Browser mit Ausnahme von IE. Für Client 5 siehe Property "dropzoneTypeIE" (mit abweichender Bedeutung bzgl. IE!).
(bei Client-Relevanz: Nur Classic-Client)
- DynamicFolderPostfetch DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60 Dies bewirkt eine deutliche Performance-Steigerung bei der Anzeige der ersten Trefferseiten. Nachteil ist, dass das Laden der hinteren Treffer langsamer wird. 0 = ausgeschaltet
1 = eingeschaltet Achtung! Wirkt sich auch auf den Zugriff auf context.folderFiles in benutzerdefinierten Ordneraktionen aus! Resultat dann: obwohl z.B. 1000 Mappen im Ordner liegen, werden nur die Treffer der ersten Seite (wie es im Web aussehen würde) ins FileResultset gegeben!
- DynamicFolderWithBlobInfo DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60b Dokumente können bereits in Trefferlisten von dynamischen Ordnern angezeigt werden.
Funktioniert ab ELC 3.60g #1768 auch mit EE.x-Views, die an einen dyn. Ordner gebunden worden sind.
Siehe auch: HitlistWithBlobInfo, StaticFolderWithBlobInfo, LinkRegisterWithBlobInfo
- EASAllowReactivate DlcArchiveServer DlcGlobalOptions DlcFile enum Öffentlich [EAS] Mögliche Werte: 0 1 false true Standardwert: true Gültigkeit: ab: 4.00 Die Eigenschaft EASAllowReactivate kann abseits der Mappentypeinstellung benutzt werden, um das Reaktivieren für bestimmte EAS-Server im Web zu unterbinden. Die Voreinstellung ist "true" (reaktivieren erlaubt).
Für Scripting/SOAP bleibt dieses Verbot ggf. unwirksam.
In den DOCUMENTS-Einstellungen gilt die Eigenschaft als Voreinstellung für alle EAS-Server ohne eigene Angabe.
- EASAttachmentRefs DlcGlobalOptions enum Öffentlich [EAS] Mögliche Werte: 0 1 false true Standardwert: true Gültigkeit: ab: 4.00b Vorgabe, ob Mappenänderungen in EDA ohne wiederholten Upload unveränderter Dateianhänge durchgeführt werden können. Diese Verbesserung ist nur für jene EDA-Versionen geeignet, die das neue XML-Element "attachmentReference" unterstützen. Hinweis: die Werkseinstellung wurde in DOCUMENTS 5 build #2008 von false auf true geändert.
- EASBlobStamp DlcGlobalOptions enum Öffentlich [EAS, Blob] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00c Wenn die Eigenschaft auf 1 gesetzt wird, überträgt DOCUMENTS beim Archivieren von Anlagen auch den jeweiligen Änderungszeitstempel und zeigt ihn später innerhalb der Archivmappe an. Diese Angabe bezieht sich auf den Uploadzeitpunkt in DOCUMENTS, nicht auf Dateisystemangaben. Diese Funktion unterliegt folgenden Einschränkungen:
- nur für EAS/EDA verfügbar
- Bei Reaktivierung von Mappen können sich die Zeitstempel ungewollt ändern.
- Module, die direkt mit dem Archiv kommunizieren und Portalscripte, die ein ArchiveConnection-Objekt benutzen, können mit dieser Erweiterung inkompatibel sein, da DOCUMENTS die Zeitstempel in einem Datenbereich ablegt, der normalerweise für grafische Annotationen reserviert ist. (bei Client-Relevanz: Nein (Server Feature))
- EASDelAll DlcArchiveServer DlcGlobalOptions enum Öffentlich [EAS] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00d Die Eigenschaft aktiviert im Web eine Aktion zum Löschen aller Versionen einer Archivmappe auf einmal, sofern der Benutzer das Recht zum Löschen der dargestellten Mappe hat..
Dies wird zurzeit nur von EDA unterstützt.
Die Eigenschaft kann auch in den Documents-Einstellungen verwendet werden. Sie gilt dann für alle Stores und auch für dynamische Archivordner. Diese Variante sollte nur in Kombination mit "LatestVersionOnly=true" benutzt werden, um redundante Löschaufträge ans Archiv, welche zu Abbrüchen mit Fehlermeldung führen können, auszuschließen. Alternativ kann die Eigenschaft "EASDelAllFV" benutzt werden. Administratoren und Skriptentwickler müssen beachten, dass ein onDelete-Exit bei dieser Aktion nur für die Archivmappe aufgerufen wird, von der die Aktion ausgeht, und nicht für jede einzelne Version. Der Ereignisstring für das Skript lautet in diesem Fall "onDeleteAll".
- EASDeleteMode DlcArchiveServer DlcGlobalOptions enum Öffentlich [EAS] Mögliche Werte: mark full Standardwert: mark Gültigkeit: ab: 5.00e Löschmodus für EAS-Archivmappen Modus "mark": Die Löschoperation entfernt Archivmappen aus allen Indizes und sie sind nicht mehr in DOCUMENTS erreichbar. Sie können mit Archiv-Administrationswerkzeugen entweder wieder hergestellt oder endgültig gelöscht werden. Modus "full": Die Löschoperation entfernt Archivmappen sofort aus sämlichen Archivdatenspeichern.
Dazu muss in den Archivservereinstellungen das Wartungs-Benutzerkonto "eas_keeper" hinterlegt sein. Hinweis: Beim Löschen mit PortalScripting kann der Löschmodus für jeden einzelnen Vorgang unterschiedlich festgelegt werden.
- EASFulltextMethod DlcGlobalOptions enum Öffentlich [EAS, Suche] Mögliche Werte: 0 1 2 Gültigkeit: ab: 5.00f HF2 Diese Eigenschaft ermöglicht ein unabhängiges Überschreiben von "FulltextMethod" für EAS/EDA. Hintergrund:
Die Volltextmethode 0 ist für aktive Mappen unerträglich langsam, seitens EDA jedoch manchmal noch akzeptabel.
In Situationen, wo Documents mit Suchmethode 0 im Primärindex (oder hybrid) sucht, während EDA im Volltextindex sucht, passen die Ergebnisse mit einer asymmetrischen Konfiguration u.U. besser zusammen als bei einheitlicher Einstellung.
- EASMergeFields DlcFile DlcGlobalOptions string Öffentlich [EAS, Performance] Gültigkeit: ab: 4.00d HF3 Bei der Migration von EE.i-Archiven nach EDA besteht das Problem, dass EE.i mehrere Felder mit gleichem Namen innerhalb eine Mappe zulässt. Bei DOCUMENTS -Mappentypen, welche unmittelbar die Mappenstruktur für EDA festlegen ist das jedoch nicht erlaubt. Damit DOCUMENTS solche Felder zu einem großen Feld zusammenfasst und korrekt damit arbeiten kann, wurde jetzt beim Mappentyp sowie in der Documents-Einstellungen die neue Eigenschaft "EASMergeFields" eingeführt. Als Wert kann eine kommaseparierte Liste von Feldnamen oder "*" für "alle Felder" angegeben werden.
Ein leerer Wert ist auch erlaubt, um anzuzeigen, dass die migrierten Archive eines bestimmten Mappentyps keine mehrfachen Felder enthalten. Wenn die Gesamtzahl von Feldern in einer Mappe groß ist (z.B. 100) und in Scripten viel mit ArchiveFileResultsets gearbeitet wird, kann die Überprüfung nach mehrfachen Feldern Zeit kosten.
Deshalb ist es sinnvoll dies nur nach Notwendigkeit einzuschalten.
- EASNoteWithDate DlcGlobalOptions DlcArchiveServer enum Öffentlich [EAS] Mögliche Werte: 0 1 2 Standardwert: 0 Gültigkeit: ab: 4.00b Den Mappennotizen in EDA wird aus Symmetriegründen zu EE.i bzw. EE.x
automatisch der Benutzername vorangestellt. Wahlweise
kann mit dieser neuen Eigenschaft zusätzlich ein Datum vorangestellt werden.
Dessen Ausgabe erfolgt entweder immer im Feldwertformat (Wert "1") oder in der
Sprache des Benutzers, der die Notiz erzeugt (Wert "2").
Das Datum wird direkt in den Notiztext eingefügt. Eine
sprachabhängige Anzeige ist deshalb nicht möglich. Die Eigenschaft kann auch serverübergreifend in den Documents-Einstellungen angegeben werden. (bei Client-Relevanz: Nein (Server Feature))
- EASRetentionInfo DlcGlobalOptions DlcArchiveServer enum Öffentlich [EAS] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00i Festlegung, ob Documents vom EAS-Archiv auch LifeCycle-Daten
zur aktuellen Mappe abfragen soll.
- EASRetentionPolicy DlcFile DlcGlobalOptions string Öffentlich [EAS] Gültigkeit: ab: 5.00f Beim Archivieren in EAS/EDA kann mit dieser Eigenschaft eine Ablaufrichtlinie (minimale/maximale Aufbewahrungszeit) festgelegt werden. Als Wert wird eine GUID erwartet, die man zuvor aus dem EAS-Manager ermitteln muss. Bei ungültiger Id schlagen alle Archivierungsversuche fehl.
- EASSearchClustered DlcGlobalOptions enum Öffentlich [EAS] Mögliche Werte: 0 1 2 Standardwert: 0 Gültigkeit: ab: 4.00 Legt fest, ob EAS-Archivserver bei freien Recherchen (allgemeine Volltextsuche und erweiterte Suche)
einzeln auswählbar sind oder nur als Gruppe, bzw. ob sie bei Mappentyprecherchen sogar
automatisch einbezogen werden. Wert 0: In der erweiterten Suche sind die Server einzeln auswählbar. Für die Volltextsuche
werden (abhängig von weiteren Einstellungen und Berechtigungen) folgende Suchquellen zur
Auswahl angeboten: DOCUMENTS, EAS sowie DOCUMENTS + EAS.
Die ergonomischen Namen dieser Quellen hängen neben der Spracheinstellung auch davon ab,
ob noch andere Archivsysteme verfügbar sind. Wert 1: In der erweiterten Suche können die EAS-Archivserver neben den Mappentypen nur noch
gemeinsam als Quelle ausgewählt werden. Jede Archivsuche geht abgesehen von Zugriffsbeschränkungen
an alle Server. Bei der Volltextsuche ändert sich nichts gegenüber der Standardeinstellung. Wert 2: Bei der erweiterten Suche wird jede Mappentyprecherche automatisch auf alle EAS-Server ausgedehnt. Die Suchoptionen für aktive Mappen und EAS verschwinden. Bei der Volltextsuche wird
je nach Benutzerberechtigung nur noch einer der drei Standardeinträge angezeigt. (bei Client-Relevanz: Classic-Client und Client 5)
- EASShowVersionColumn DlcGlobalOptions enum Öffentlich [Suche, EAS] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00d Diese Eigenschaft hat den Zweck eine Zusatzspallte "Version" in alle anonymen Trefferlisten nach einer EDA-Recherche einzufügen. Die Werte "1" und" true" aktivieren die Spalte.
Bei benannten Trefferlisten ist die Eigenschaft wirkungslos. Dort kann die Spalte stattdessen mit dem reservierten technischen Namen "DlcFile_Version" definiert werden. Immer wenn nur in aktiven Mappen gesucht wird, lässt DOCUMENTS die Spalte automatisch weg. (bei Client-Relevanz: Classic-Client und Client 5)
- EBISArchivingConfig DlcFile DlcGlobalOptions text Öffentlich [EBIS Store] Gültigkeit: ab: 5.00g Der in diesem Property eingetragene String wird beim Archivieren las "archiving_config" an EBIS übergeben. Enthaltene Autotexte werden vorher ersetzt. Dies wurde von Easy für bestimmte Projektlösungen angefordert und erfordert eine neue, noch unbekannte EE.x- bzw. EBIS-Version. Ältere Versionen produzieren einen "Fehler 400", wenn diese Eigenschaft benutzt wird und der String nicht leer ist.
- EBISFT_UseContains DlcGlobalOptions enum Öffentlich [EBIS Store] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00 Intern: Mappentypfiler bei EBIS-Suche mit "contains" anstatt "compare" generieren?
- EBISPreferProcessModDate DlcFile DlcGlobalOptions enum Öffentlich [EBIS Store, Blob] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00e HF2 Wenn Documents eine Mappe samt "Metadaten der Dokumente" in einen EBIS-Store archiviert, fügt es (seit Version 5.0e HF2) zu der Metainformation jedes Anhangs zwei verschiedene Zeitstempel hinzu.
Beim späteren Wiedereinlesen steuert diese Eigenschaft, welcher Zeitstempel als Änderungsdatum des Anhangs gelten soll. 0/false: Der Zeitpunkt der Archivierung
1/true: Der Zeitpunkt der letzten bekannten Änderung innerhalb von Documents Nach dem Ändern dieser Eigenschaft sollten die temporären Archivmappen gelöscht werden. sonst bleibt die Änderung teilweise wirkungslos.
- editModeLogout DlcGlobalOptions enum Veröffentlicht [Login/Logout/LDAP] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60g Ist der Wert auf false gesetzt, ist ein Ausloggen über den »grünen« Button (Exit-Button) nur möglich, wenn man keine Mappe im Bearbeiten-Modus geöffnet hat.
(bei Client-Relevanz: Classic-Client und Client 5)
- editorConfig DlcGlobalOptions DlcField text Öffentlich [Webclient5] Mögliche Werte: editorConfig = {quill: { sampleKey: "sampleValue"}} Gültigkeit: ab: 5.00d Über die Eigenschaft editorConfig kann man dem WYSIWYG-Editor für HTML-Felder eine eigene Konfiguration übergeben. Der WYSIWYG-Editor wird für HTML-Felder im Bearbeitungsmodus verwendet. Die Eigenschaft kann dabei global oder am Mappenfeld definiert werden.
- edrawDisableAutoMacros DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: true false Gültigkeit: ab: 4.00b Im Zuge der neuen EDraw-Komponente wurde die globale Eigenschaft
"edrawDisableAutoMacros" implementiert, mit der man durch Setzen des Werts
"true" die automatische Ausführung von Macros im EDraw-Viewer unterbindet, falls
im Word Dokument vorhanden.
(bei Client-Relevanz: Nur Classic-Client)
- EEIClosedRangeSearch DlcGlobalOptions enum Veröffentlicht [EEi, Suche] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 3.51 Wird in der Suchmaske von den zwei Eingabefeldern für ein numerisches Feld oder ein Datumsfeld nur das Linke ausgefüllt, kann DOCUMENTS in ENTERPRISE.i entwederr eine Bereichsssuche mit offenem Ende oder
eine direkte Suche nach dem engetragenen Wert starten. 0 = offene Bereichssuche
1 = einfache Feldwertsuche. Es ist zu beachten, dass ENTERPRISE.i bei der Suche gar keine offenen Datumsbereiche unterstützt. Aktuelle EE:i-Versionen produzieren bei offenem Ende einen Fehler. Deshalb wurde bereits in ELC 3.60i die Voreinstellung auf 1 geändert.
- EEICopyTextNotes DlcGlobalOptions enum Veröffentlicht [EEi] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60 Die Textnotizen bei der EE:i sind nicht revisionssicher. D.h. nach Bearbeiten und Speichern eines Archivtreffers sind die Textnotizen dann auf dem "neuen" Archivtreffer nicht mehr vorhanden (diese sind nur auf der alten Version).. Mit dieser Eigenschaft kann erzwungen werden, dass die Textnotizen auf die neue Version kopiert werden.
- EEIFCPConflictHandling DlcGlobalOptions enum Öffentlich [EEi, Suche, Rechte] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00a Bei einer erweiterten Recherche in mehreren identisch strukturierten ENTERPRISE.i-Archiven
(z.B. Jahresarchiven) mit einem DOCUMENTS seitig eingerichteten Mappenklassenschutz
(einschließlich ACL-Varianten) prüfte der DocumentsServer vor Version 4.0a nicht, ob die
individuellen Berechtigungsfilter in allen Archiven übereinstimmten.
Stattdessen wurden die Berechtigungen für das vom Benutzer ausgewählte Hauptarchiv
einfach auf alle Archive angewendet.
Neuere Versionen brechen die Recherche im Fall eines Berechtigungskonflikts mit einer
Fehlermeldung ab. Administratoren können auf Wunsch das alte, weniger sichere Verhalten
durch Setzen dieser Eigenschaft "EEIFCPConflictHandling" in den Documens-Einstellungen oder
beim Archivserver auf den Wert 0 wieder einstellen.
- EEIHitlistDateFormat DlcGlobalOptions string Veröffentlicht [EEi] Mögliche Werte: Format Gültigkeit: ab: 3.60f Wenn ENTERPRISE.i in Trefferlisten ein anderes Datumsformat verwendet als "deutsch", "englisch" oder "international", dann konnte die portalseitige Sortierfunktion es bisher nicht auswerten. Zur Abhilfe kann man jetzt in den DOCUMENTS-Einstellungen eine kleine Formatschablone als Eigenschaft "EEIHitlistDateFormat" angeben. Die Schablone besteht aus 4 Zeichen. Sie beginnt mit dem benutzten Trennzeichen zwischen den Datumskomponenten. Darauf folgen die drei Kleinbuchstaben 'd' für Tag, 'm' für Monat und 'y' für Jahr in der Reihenfolge, wie sie vom Archiv ausgegeben wird.
- EEIHLImportFlags DlcGlobalOptions enum Öffentlich [EEi] Mögliche Werte: 1 2 9 10 Standardwert: 1 Gültigkeit: ab: 4.00c HF2 Diese Eigenschaft steuert, wie der Import der EE.i-Archivstruktur Trefferspalten beschriftet. 1 = Der Feldbezeichner für die Mappenansicht hat Vorrang.
2 = Der archivseitige Name der Trefferspalte hat Vorrang. Wird zu einem dieser Werte eine 8 addiert, wirkt das als Schreibschutz auf bereits vorhandene Spaltenbezeichnungen. Der Schutz gilt nur für die Beschriftung, nicht für die ganze Trefferspalte.
Die interne Voreinstellung der Eigenschaft ist 1.
- EEIImplicitEnumPhrase DlcGlobalOptions enum Veröffentlicht [EEi] Mögliche Werte: false true Gültigkeit: ab: 3.60h Bei Aufzählungsfeldern in ENTERPRISE.i führt das Recherchesystem standardmäßig eine Phrasensuche durch, um dasselbe Verhalten wie in DOCUMENTS zu erreichen. Ansonsten interpretiert ENTERPRISE.i ein Leerzeichen in einem Suchbegriff als logisches Oder. Listen, in denen dasselbe Wort in verschieden Zeilen auftaucht, wären im Web folglich nicht mehr nach jeder Zeile einzeln durchsuchbar. Der Mappenmanager verhält sich indes nicht immer so. In der EE.i-Konfiguration der Aufzählungsliste kann man einstellen, ob eine Phrasensuche durchgeführt werden soll oder nicht. Wenn sich das Portalsystem ebenfalls daran halten soll, muss man auf dem Archivtyp oder in den Documents-Einstellungen die Eigenschaft EEIImplicitEnumPhrase auf false setzen. Zudem müssen die betroffenen Archivfelder mindestens mit Portalversion 6.0b importiert worden sein. Ansonsten wird die EE.i Konfiguration ignoriert und immer wie in einem Stringfeld gesucht.
- EEIMultiServerLocations DlcGlobalOptions enum Veröffentlicht [EEi] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00 Schalter für serverübergreifende Lagerorte.
Die Eigenschaft bestimmt, ob gleichnamige Lagerorte von mehreren ENTERPRISE.i-Servern
bei der erweiterten Suchquellenauswahl zu einem einzigen Lagerort zusammengefasst werden.
- EEXClosedRangeSearch DlcGlobalOptions enum Veröffentlicht [EEx, Suche] Mögliche Werte: 0 1 false true Standardwert: true Gültigkeit: ab: 3.60a Wird in der Suchmaske von den zwei Eingabefeldern für ein numerisches Feld oder ein Datumsfeld nur das Linke ausgefüllt, wird in ENTERPRISE.x standardmäßig nur nach diesem Wert gesucht. Möchte man nun nicht nur nach einen Wert suchen, sondern nach einen Bereich so kann man mit dieser Eigenschaft dieses Verhalten ausschalten. Bei fehlender Angabe wird auch die Eigenschaft "ClosedRangeSearch" ausgewertet.
Fehlt auch die, wird "true" angenommen, DOCUMENTS 5: Diese Eigenschaft wirkt auch bei EBIS-Anfragen
- EEXPreferDLCFormatting DlcGlobalOptions enum Öffentlich Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00e Legt fest, ob Zahlen und Datumsangaben nur noch im DOCUMENTS-eigenen Format dargestellt werden sollen.
EE,x-Formate (z.B. dreibuchstabige Monatskürzel nach Anmeldung in englischer Sprache) werden hiermit unterdrückt.
- EEXQueryInResult DlcGlobalOptions enum Öffentlich [EEx, Suche] Mögliche Werte: 0 1 2 false true auto Standardwert: 1 Gültigkeit: ab: 4.00a Diese Eigenschaft wird nur bei einer erweiterten Suche in EE.x über die XML-Server-Schnittstelle wirksam, und auch nur wenn keine sonstigen Quellen (Documents oder andere Archivsysteme) gleichzeitig durchsucht werden. Sie steuert in diesem Fall, ob ein Weitersuchen im Suchergebnis möglich sein soll. Wenn nicht, wird die entsprechende Suchoption bzw. das separate Suchfeld im Classic-Client ausgeblendet.
Mit dem Wert "2" oder"auto" kann festgelegt werden, dass die Einstellung sich nach der Documents-Suchoption "Suchfeld für allgemeine Trefferlisten" richten soll, welche bei Mehrsystem-Suchanfragen ohnehin vorrangig ausgewertet wird.
- EEXStdCustomFieldName DlcGlobalOptions string Öffentlich [EEx] Standardwert: nameless Gültigkeit: ab: 5.00g Standardname für benutzerdef. Felder in einem freien EE.x-Schema Wenn ein EE.x-Schema das Anfügen von Feldern mit beliebigem Namen gestattet, aber der Benutzer und der Benutzer ein Feld ohne jegliche Namensangabe hinzufügt und der Webclient bzw. App dies nicht prüfen, dann setzt Documents beim Speichern der Mappe den Wert der Eigenschaft als technischen Feldnamen ein.
Namenlose Felder sind in Documents nicht erlaubt.
- emailViewerHTMLTextSwitch DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 6.00 Aktiviert einen Button, mit dem im Email-Viewer zwischen HTML- und Textansicht gewechselt werden kann.
- embeddedMode DlcGlobalOptions enum Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Steuert ob der DOCUMENTS Webclient mit Hilfe eines Frames in andere Webanwendung eingebunden werden kann. Aufgrund von Browser-Restriktionen kann die Einbettung nur aktiviert werden, wenn die Webanwendung über HTTPS verwendet wird. true = Einbettung möglich
false = Einbettung nicht möglich
- emptyFileOnNoNextFile DlcGlobalOptions string Öffentlich [Workflow] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00e HF2 Zeigt wenn auf der gerade angeklickten Workflowaktion "nächste Mappe" eingestellt ist und es aber keine nächste Mappe gibt, die Ansicht "Keine Mappe zur Anzeige verfügbar" an.
- enableClientHeaderCodeProperties DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00f Mit der Eigenschaft kann die Funktionalität HTML-Code im Header (<head>...</head>) über Globale Eigenschaften hinzuzufügen aktiviert werden.
- enableDefaultTreeIcon DlcGlobalOptions string Öffentlich Mögliche Werte: [true|false] Standardwert: false Gültigkeit: ab: 5.00a Aktivierung Standard Icon für Einträge im Baum (true / false) (Ordner-Icon) (bei Client-Relevanz: Nur Client 5)
- enableEditModeWarning DlcGlobalOptions string Öffentlich Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 6.0.1 Aktiviert eine Browserwarnung, wenn durch ein verlassen der Seite ein möglicher Datenverlust auftreten könnte. Wenn die Eigenschaft "autoLogout" aktiviert ist ist die Funktionalität begrenzt.
- enableFileNavigation DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00d Zeigt die Vorgangsnavigation rechts oben an.
- EQLStyleForLIKE DlcGlobalOptions enum Veröffentlicht [EEx, Suche] Mögliche Werte: GenericSQL T-SQL Backslashed Standardwert: Backslashed (ab EE.x Build 2908evo16), davor T-SQL Gültigkeit: ab: 3.60f Eine Suche in EE.x nach Ausdrücken mit Unterstrichen lieferte oft nur im Zusammenspiel mit SQLServer Treffer. Mit einer EE.x-Oracle-Installation z.B. gab es keine Treffer, weil ELC die Sonderzeichen "%", "_", "'", und "[" in LIKE-Ausdrücken stets mit eckigen Klammern maskiert hat und EE.x-seitig diese Ausdrücke anscheinend nicht passend zur jeweiligen Datenbank konvertiert werden. Damit bei den anderen Datenbanken überhaupt Treffer erscheinen, kann man jetzt die Documents-Eigenschaft "EQLStyleForLIKE" auf "GenericSQL" setzen. Die genannten Zeichen sowie der Backslash werden dann wie "?" behandelt. Dies war eine Zwischenlösung. Neuere EE.x-Versionen schreiben für Sonderzeichen in LIKE-Ausdrücken eine einheitliche Maskierung mit Backslashes vor.
- expandedFirstFolder DlcGlobalOptions string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00f HF1 Stellt den ersten Ordner einer Outbar geöffnet dar, sofern kein anderer Ordner zur Zeit geöffnet ist. Die Eigenschaft wird nur die Sidebar verwendet. Wird die Outbar als Baum dargestellt, wird diese Eigenschaft ignoriert..
- extendedLanguageSupport DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00b Deaktiviert die erweiterte Sprachwechsel-Unterstützung [Zuletzt benutzte Sprache als Cookie, Benutzer kann eine Standardsprache festlegen die bei SSO und QuickView-Links ohne Sprachparameter verwendet wird].
- extendedSearchFieldColumns DlcGlobalOptions Systemuser string Öffentlich [Suche] Mögliche Werte: 1, 2 Standardwert: 1 Gültigkeit: ab: 5.00f Im Dialog für die Erweiterte Suche können mit der Globalen oder Benutzer-Eigenschaft "extendedSearchFieldColumns" = "2" als alternative Darstellung die rechten Suchfelder optional in einem Zwei-Spalten-Layout (statt einer Spalte) dargestellt werden. Damit wird für die Suchfelder nur etwa die Hälfte des sonst üblichen Raumes benötigt, was bei einer großen Anzahl von Feldern zu deutlich mehr Übersicht und weniger Auf-/Ab-Scrolling führt.
- extendedSearchTreeHorizontal DlcGlobalOptions Systemuser FeatureManager string Öffentlich [Suche] Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00f Im Dialog für die Erweiterten Suche können mit der Globalen oder Benutzer-Eigenschaft "extendedSearchTreeHorizontal" = "true" als alternative Darstellung des linken Baumes die beiden Hauptknoten "Suchquellen" und "Mappentypen" optional nebeneinander (statt untereinander) dargestellt werden.
- ExternalCommandTranscoding DlcGlobalOptions string Öffentlich [Encoding, Scripting] Mögliche Werte: 0 Encoding (UTF-8, Windows-1252,..) Gültigkeit: ab: 4.00c Die Kommandozeilenaufrufe werden nun standardmäßig ins Betriebssystem-Encoding transcodiert. Mit dem Documents-Einstellungen Property ExternalCommandTranscoding=0 kann man dieses Transcoding abschalten. Mit ExternalCommandTranscoding=Encoding kann ein anderes als das Betriebssystem Encoding erzwungen werden.
- extJsLibMode DlcGlobalOptions string Öffentlich Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00 Das Property "extJsLibMode" wird benötigt, falls Erweiterungen von Documents (z.B. Gadgets) die ExtJS-Bibliothek verwenden. Ab Version 5.00 ist diese nämlich nicht mehr standardmäßig aktiviert. Wenn "extJsLibMode" auf den Documents-Einstellungen auf "true" gesetzt wird, so wird ExtJS für diesen Mandanten, wie schon in Version 4.00, automatisch aktiviert. ACHTUNG: In Documents 6 wurde die Bibliothek nun komplett entfernt.
- ExtSearchShowDuplicates DlcGlobalOptions enum Öffentlich [Debug, Suche] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00d Redundante Anzeige von Quellen bei der erweiterten Suche zulassen (nicht empfohlen). Wenn (mindestens) zwei Mappentypordner oder Viewordner auf dieselbe Quelle verweisen, und eine Benutzergruppe auf beide Ordner Leserecht hat, verursacht die doppelte Ausgabe derselben Quelle im Webclient technische Probleme. (Statt Mehrfachanzeige springen Quellen beim Aufklappen eines Ordners optisch hin und her.) Ab Version 5.0d filtert DOCUMENTS solche Duplikate aus dem Quellenbaum heraus.
Das Setzen dieser Eigenschaft auf 1 oder true deaktiviert die Filterfunktion für Testzwecke.
- extViewerWinDimension DlcGlobalOptions text Veröffentlicht [Blob, Webclient] Mögliche Werte: folgene Variablen sind erlaubt: - width - height - top - left Beispiel: extViewerWinDimension = width=800,height=480,top=10,left=10 Gültigkeit: ab: 3.60e Die Größe bzw. Postion eines sich öffnendes Fenster (s.a. thumbnailOpenDocMode) kann über diese Eigenschaft eingestellt werden. Die Eigenschaften des Fenster lassen sich mit
extViewerWinProperties festlegen.
- extViewerWinProperties DlcGlobalOptions text Veröffentlicht [Blob, Webclient] Mögliche Werte: folgene Variablen stehen zur Verfügung: - scrollbars - resizable - menubar - location - toolbar - status Beispiel: extViewerWinProperties = scrollbars=no,resizable=yes,menubar=yes,location=no,toolbar=no,status=yes Gültigkeit: ab: 3.60f Eigenschaften eines sich öffnenden Fensters (s.a. thumbnailOpenDocMode) können durch dieses Property aktiviert bzw. deaktivert werden. Mit extViewerWinDimension lassen sich Größe und Position des Fensters beinflussen.
(bei Client-Relevanz: Nur Classic-Client)
- EzAmericanDateSearch DlcGlobalOptions enum Veröffentlicht [EEi] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.51 Wenn ein angeschlossenes ENTERPRISE.i-System so konfiguriert wurde,
dass bei der Datumssuche das amerikanische Format anstelle des deutschen benutzt werden muss,
ist diese Eigenschaft zu setzen, damit das Portal die Suchanfragen entsprechend anpasst.
Anderenfalls würde das Archivsystem den Monat als Tag interpretieren und umgekehrt.
- EzYearYYSearch DlcGlobalOptions enum Veröffentlicht [EEi] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.51 An das Archiv EE.i werden zweistellig eingegebene Jahreszahlen bei der Suche auch zweistellig durchgereicht. Das Archivsystem erweitert zweistellige Eingaben unter Umständen. anders auf 19XX bzw. 20XX als ELC. Mit diesem Schalter kann man EE:i-treues Verhalten dafür erzwingen. Die Option ist nur für reine EE.i-Installationen ohne DOCUMENTS sinnvoll, weil sonst externe und interne Suche die Eingabe verschieden interpretieren können.
- FCPExclusionBracket DlcArchiveServer DlcGlobalOptions enum Öffentlich [EBIS Store, EEx, Performance] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00i HF1 Möglichkeit zur Restrukturierung von Negativlisten in Mappenklassenschutzfiltern bei EE.x oder EBIS-Archivanfragen.. Die ältere Abfragestruktur (für den Wert 0 oder false) lautet:
(not Bedingung1 [ and not Bedingung2 ...])
Die geänderte Abfragestruktur (für den Wert 1 oder true) lautet:
not (Bedingung1 [ or Bedingung2 ...]) Formal liefern beide Varianten dasselbe Ergebnis. Allerdings besteht die Vermutung, dass die neue Variante kürzere Abfragezeiten bietet. Bei positiven Rückmeldungen wird sie in einer späteren Version Standard werden.
- featureConfigName DlcGlobalOptions string Öffentlich [Webclient5] Gültigkeit: ab: 5.00f Über die Eigenschaft featureConfigName kann der Name für die Feature Config XML-Datei angepasst werden.
Dateiname: feature-config-[featureConfigName].xml
- fileColorMode DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: [true, false] Standardwert: true Gültigkeit: ab: 5.00a Färbt den Mappenaußenbereich, (fileView-Header und –Register Hintergründe einfärben)
(bei Client-Relevanz: Nur Client 5)
- fileEditCommitOnEnter DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00c Mappe speichern beim Drücken von Enter-Taste auf Feldern (Textareas ausgenommen).
(bei Client-Relevanz: Nur Client 5)
- fileEditStartOnDoubleClick DlcGlobalOptions Systemuser string Öffentlich Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00c Wechsel in den Bearbeitungsmodus beim Doppelklick auf der Mappenansicht und Gentable.
(bei Client-Relevanz: Nur Client 5)
- fileEmailAutoCompleteConfig DlcFile DlcGlobalOptions text Öffentlich [Email] Mögliche Werte: Beispiel AutoComplete Konfiguration JSON-Format: { scriptName : "MyAutoCompleteScript", minQueryChars : 2, queryDelay : 0.5, maxResults : 25, autoFocusResult : false } Standardwert: JSON Format Gültigkeit: ab: 5.00c Mit dieser Eigenschaft kann die Autocomplete Funktion für die E-Mail Felder wie To: und CC: konfiguriert werden.
- fileInfoBackgroundColor DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: CSS-Farbe/Alle möglichen Werte für die CSS-Property "background-color" Standardwert: - Gültigkeit: ab: Ändert die Hintergrundfarbe des Fileinfo-Headers oben auf der Mappe. Hier kann jeder gültige Wert für die CSS-Eigenschaft "background-color" verwendet werden.
- fileInfoIconBackgroundColor DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: CSS-Farbe/Alle möglichen Werte für die CSS-Property "background-color" Standardwert: - Gültigkeit: ab: Ändert die Hintergrundfarbe des Fileinfo-Icons links oben im auf der Mappe. Hier kann jeder gültige Wert für die CSS-Eigenschaft "background-color" verwendet werden.
- fileInfoIconColor DlcFile DlcGlobalOptions string Öffentlich Mögliche Werte: CSS-Farbe/Alle möglichen Werte für die CSS-Property "color" Standardwert: - Gültigkeit: ab: 6.2.0 Ändert die Farbe des Fileinfo-Icons links oben im auf der Mappe. Hier kann jeder gültige Wert für die CSS-Eigenschaft "color" verwendet werden.
- fileLinkClassicClient DlcGlobalOptions Systemuser string Öffentlich [Webclient, Email, Webclient5] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00 Die URL der Mappen-Quickview Links, welche in Mails verwendet werden (neue Mappe im Eingangskorb etc) unterscheiden sich zwischen dem Webclient 5 und dem Webclient 4 (Classic-Client).
Es kann global bei Documents-Einstellungen definiert werden, ob die URLs für den Webclient4 (fileLinkClassicClient=1) erzeugt werden sollen. Am Benutzer selber kann diese globale Einstellung überschrieben werden (fileLinkClassicClient=0/1).
(bei Client-Relevanz: Nein (Server Feature))
- fileMessageAutoSubscribe Systemuser DlcGlobalOptions string Öffentlich Mögliche Werte: true, false, 0, 1 Standardwert: true Gültigkeit: ab: 5.00d HF2 Mit der Eigenschaft kann man steuern, ob das Schreiben eines Kommentar zu einer Mappe automatisch dazu führt dass man die Kommentare abonniert. Die Eigenschaft kann Global oder am Benutzer gesetzt werden.
- fileMessageOpenByDefault DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: false Gültigkeit: ab: 5.00f Mit der Eigenschaft kann festgelegt werden ob die Mappenkommentare standardmäßig geöffnet sind.
- fileNavigationPosition DlcGlobalOptions enum Veröffentlicht [Webclient] Mögliche Werte: 1 0 Standardwert: 1 Gültigkeit: ab: 3.60d Beim Blättern durch Listen kann man die Position innerhalb der Liste anzeigen. Zwischen den "vor" und "zurück" Knöpfen der Blätterfunktion erscheint dann die aktuelle Seite/Seitenanzahl insgesamt. (bei Client-Relevanz: Nur Classic-Client)
- fileReferenceClearButton DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00c Aktiviert den "Eintrag löschen" Button neben Referenzfeldern.
(bei Client-Relevanz: Nur Client 5)
- fileRegisterbarBackgroundColor DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: CSS-Farbe/Alle möglichen Werte für die CSS-Property "background-color" Standardwert: - Gültigkeit: ab: Ändert die Hintergrundfarbe der Registeranzeige. Hier kann jeder gültige Wert für die CSS-Eigenschaft "background-color" verwendet werden.
- fileRegisterDisableToggle DlcFile DlcGlobalOptions string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: Entfernt die Möglichkeit die Registerbar ein oder auszuklappen.
- fileSendConfiguration DlcGlobalOptions string Öffentlich [Workflow, Webclient5] Mögliche Werte: default, responsive Standardwert: default Gültigkeit: ab: 5.00f Wechselt bei "responsive" den "Versenden"-Dialog in das übersichtlichere Responsive-Design.
- fileSignalColor DlcGlobalOptions DlcFile string Öffentlich [Webclient5] Mögliche Werte: CSS-kompatible Farbe als Hexadezimalcode oder Farbname Gültigkeit: ab: 5.00a Anzeigefarbe der Mappe
Hinweis: ignoriert den Parameter fileColorMode, falls es auf false steht
(bei Client-Relevanz: Nur Client 5)
- fileStackNavigation DlcGlobalOptions enum Veröffentlicht [Webclient] Mögliche Werte: true false 1 0 Standardwert: 1 Gültigkeit: ab: 3.51 Bei der sogenannten Breadcrumb-Navigation in der Navigationsleiste von DOCUMENTS werden normalerweise keine Referenzen aufgelöst. Das bedeutet, dass ein Benutzer, der in einer Mappe auf ein Referenzfeld geklickt hat und damit auf die referenzierte Mappe gesprungen ist, nur über das kleine Icon ("zur letzten Mappe") in der Navibar auf die vorherige Mappe zurückspringen kann. (bei Client-Relevanz: Nur Classic-Client)
- fileStackNavigationCreateNewFile DlcGlobalOptions enum Veröffentlicht Mögliche Werte: true false Gültigkeit: ab: 3.60b Auf Mappentypen können benutzerdefinierte Aktionen vom Typ "Neue Mappe" mit der FileStackNavigation genutzt werden. Nach der Neuanlage einer Mappe über einen Aktionsknopf wird die obere Navigationsleiste dann wie bei verknüpften Mappen (bei aktivierter FileStackNavigation) nach folgendem Schema dargestellt: "Übersicht > [Ordner] > [Mappe A] > [neue Mappe B]". Das war bisher nicht der Fall. Dieses neue Feature kann über eine Eigenschaft in den Documents-Einstellungen aktiviert werden: Erzeugen Sie einen neuen Eintrag "fileStackNavigationCreateNewFile" mit dem Wert "true".
(bei Client-Relevanz: Nur Classic-Client)
- FileTypeCategories DlcGlobalOptions string Öffentlich [DOCUMENTS Manager] Mögliche Werte: 0 Standardwert: 1 Gültigkeit: ab: 5.00 Blendet die Möglichkeit der Gruppierung von Mappentypen im DOCUMENTS Manager aus.
(bei Client-Relevanz: Nein (Server Feature))
- FiletypeMassSelection DlcGlobalOptions enum Öffentlich [Suche] Mögliche Werte: 0 1 false true Standardwert: 1 (D5), 0 (D4) Gültigkeit: ab: 4.00b In der erweiterten Suchmaske die Massenauswahl von Mappentypen anhand einer übergeordneten Checkbox erlauben. ähnliche Eigenschaften: ViewMassSelection, ArchiveMassSelection
- FileXMLExportMode DlcGlobalOptions string Öffentlich [Workflow, Server] Mögliche Werte: 4 Gültigkeit: ab: 5.00a Mit Build 2014 wurde der XML-Export von Mappen derart geändert, dass sprachneutrale Formate (Numerisch, Datum, Zeitstempel, Aktenplan) verwendet werden. Aus Abwärtskompatibilitätsgründen kann dieses geänderte Verhalten mit der Documents-Einstellungen Eigenschaft FileXMLExportMode=4 wieder abgeschaltet werden.
- FilingPlanClearDefaultValuesOnDeselect DlcField DlcFile DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 4.00c Eigenschaft bewirkt, dass wenn beim Auswahldialog für den Aktenplan "Eintrag löschen" ausgewählt wird, vorher gesetzte Defaultwerte auch geleert werden (bei Client-Relevanz: Classic-Client und Client 5)
- FilingPlanFieldVisible DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: true false Gültigkeit: ab: 4.00a Mit der globalen Eigenschaft "FilingPlanFieldVisible=false" werden die alle Aktenplanfelder unsichtbar dargestellt. Lediglich der Auswahlbutton bleibt bestehen. Es sollten bei Verwendung dieses Features durch Setzen des Aktenplans weitere Felder gesetzt werden.
(bei Client-Relevanz: Nur Classic-Client)
- FilingPlanManualIndex DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 1 0 Gültigkeit: ab: 3.60c Aktenplan mit manueller Indizes können nach Setzen des Documents-Einstellungen Property FilingPlanManualIndex=1 im Feld benutzerdef. 3 eingtragen werden Erweiterung: FilingPlanNoDBConversion=1 für Suche bestehender Aktenpläne im Archiv (Konvertierung von 1.4.2 nach 001004002 findet nicht statt)
- FilingPlanMaxLabelLength DlcGlobalOptions string Öffentlich [Webclient] Mögliche Werte: Zeichenlänge Gültigkeit: ab: 4.00a Beim Aktenplan wird ab Documents 4.0a in der NaviBar und als Listenüberschrift der Name des ausgewählten Eintrags angezeigt. Die Maxilmallänge der Anzeige ist auf 50 Zeichen begrenzt, kann aber mit der globalen Eigenschaft "FilingPlanMaxLabelLength" justiert werden.
- FilingPlanNoDBConversion DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 1 0 Gültigkeit: ab: 3.60c Aktenplan mit manuellen Indizes können nach Setzen des Documents-Einstellungen Property FilingPlanManualIndex=1 im Feld benutzerdef. 3 eingtragen werden Erweiterung: FilingPlanNoDBConversion=1 für Suche in bestehender Aktenpläne im Archiv (Konvertierung von 1.4.2 nach 001004002 findet nicht statt) sondern es wird nach der Zeichenkette 1.4.2 gesucht.
- FilingPlanOpenFolderLevel DlcGlobalOptions string Öffentlich [Tree, Webclient] Mögliche Werte: Ebene Gültigkeit: ab: 4.00a Mit dieser Eigenschaft lässt sich die Ausklapptiefe des Aktenplanbaumes festlegen. Diese Eigenschaft überschreibt dabei die Baumtiefe, die man im Documents Manager unter Documents > Einstellungen festlegen kann. (bei Client-Relevanz: Nur Classic-Client)
- FillSearchMaskScript DlcGlobalOptions string Öffentlich [Suche] Mögliche Werte: Skriptname Gültigkeit: ab: 4.00d Diese Eigenschaft aktiviert einen Scripting-Exit für den Suchmaskenaufbau. Das Skript erhält die Möglichkeit, Suchfelder mit Werten vorzubelegen. (bei Client-Relevanz: Classic-Client und Client 5)
- FilteredFolderExport DlcGlobalOptions DlcFolder enum Öffentlich [Ordner, Suche] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 5.00e Nach einer Volltextsuche innerhalb eines Ordners legt diese Eigenschaft das Verhalten der Funktionen "XML Export (alle)" und "CSV Export (alle)" fest. Wert 0/false: Der gesamte Ordnerinhalt wird exportiert.
Wert 1/true: Nur die gefilterte Liste wird exportiert.
- FolderAutoSetFirstHitlist DlcGlobalOptions enum Veröffentlicht [Ordner] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60 Die automatische Selektierung der ersten Trefferliste kann hiermit abgeschaltet werden. Es werden stattdessen die Felder angezeigt, bei denen die Checkbox "in der Trefferliste anzeigen" aktviert sind.
- FolderExportAllAsXLSX DlcGlobalOptions DlcFolder enum Öffentlich [Schnittstellen, Ordner, Output, Trefferliste] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00e XLSX-Export von Ordnern und Suchergebnissen: Mit der Documents-Einstellungen
bzw. Ordner-Eigenschaft FolderExportAllAsXLSX=1 kann ein Menüeintrag in der Ordneraktionsliste
aktiviert werden, mit dessen es möglich ist die Trefferliste bzw. das Suchergebnis
als XLSX-Datei zu exportieren. s. auch FolderExportSelectedAsXLSX Bemerkung: ab Version 6.0 wird die globale Eigenschaft durch die globale Option 'Aktiv für alle Datensätze'
unter Documents-Einstellungen > Listen-Export > XLSX-Export ersetzt.
- FolderExportSelectedAsXLSX DlcGlobalOptions DlcFolder enum Öffentlich [Schnittstellen, Ordner, Output, Trefferliste] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00e XLSX-Export von Ordnern und Suchergebnissen: Mit der Documents-Einstellungen
bzw. Ordner-Eigenschaft FolderExportSelectedAsXLSX=1 kann ein Menüeintrag in der Ordneraktionsliste
aktiviert werden, mit dessen es möglich ist die selektierten Trefferlisten bzw. Suchergebnissen
als XLSX-Datei zu exportieren. s. auch FolderExportAllAsXLSX Bemerkung: ab Version 6.0 wird die globale Eigenschaft durch die globale Option 'Aktiv für selektierte Datensätze'
unter Documents-Einstellungen > Listen-Export > XLSX-Export ersetzt.
- folderIconHeritage DlcGlobalOptions Öffentlich Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00c Schalter für die Vererbungen der Farbdefinition der Icons im Baum.
- folderTreeOverviewIcon DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: entypo: rocket; color: pink; Gültigkeit: ab: 5.00e HF2 Ermöglicht es ein Icon an das "Übersicht"-Element des Outbar-Baumes zu setzen.
- folderTreeVisualizationType Outbar DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: tree, sidebar Gültigkeit: ab: 5.00f Mit der Eigenschaft folderTreeVisualizationType kann die Darstellung eines Ordnerbaum an einer Outbar eingestellt werden.
Die Eigenschaft kann auch global gesetzt werden und gilt dann für alle Outbars die diese Eigenschaft nicht gesetzt haben.
- ForceDisconnectInboxOnForward DlcGlobalOptions enum Öffentlich [Workflow] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00h Workflow: Wenn ein Benutzer im Workflow zwei mal Verantwortlicher für eine Aktion ist (z.B. bei "Bearbeitung durch alle Gruppenmitglieder und ein Gruppenmitglied hat den Benutzer als Vertreter eingetragen), dann muss der Benutzer zwei mal die Mappe weiterleiten. Bisher wurde beim ersten weiterleiten die Mappe schon aus dem Eingangsordner des Benutzers entfernt. Dies findet nun erst statt, wenn der Benutzer keine aktive Workflow-Aktion hat. Über die Documents-Einstellungen Eigenschaft ForceDisconnectInboxOnForward=1 kann das bisherige Verhalten wieder eingestellt werden.
- fromFiletypeChangedScript DlcGlobalOptions DlcFile string Öffentlich [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00f HF1 Neuer Script-Exit am Mappentyp: fromFiletypeChangedScript=Scriptname. Nach dem Mappentypwechsel wird das angebene Script ausgeführt. Die Eigenschaft fromFiletypeChangedScript muss am Ausgangsmappentypen gesetzt werden.
- FullSearchWithOwner DlcGlobalOptions enum Öffentlich [Suche] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00d Legt fest, ob bei der allgemeinen Suche (Suchfeld "Vollltext") das Mappenattribut "Eigentümer/Ersteller" für aktive Vorgänge einbezogen wird. Seit Version 5.0d ist das nicht mehr automatisch der Fall.
Die Einstellung hat keine Auswirkung auf Archivrecherhen.
- FulltextMethod DlcGlobalOptions enum Öffentlich [Suche, EAS, EEi, EEx] Mögliche Werte: 0 (ab #2034) 1 2 Gültigkeit: ab: 5.00 Während die normalen Suchmethodeneinstellungen vor allem für Primärindexfelder gedacht sind, kann man mit dieser Eigenschaft eine Suchmethode für volltextindizierte Felder angeben. 0 = Wildcard-Suche *Wort* (ab #2034: Achtung sehr Performance-Lastig, möglichst vermeiden)
1 = exakte Suche
2 = Wortanfang (automatisches Anhängen eines '*' am Ende) Ohne Angabe dieser Eigenschaft hängt das Standardverhalten von der Archivkonfiguration ab.
Wenn eine EE.i oder EE.x installiert ist, ist die Voreinstellung 1, anderenfalls wird die
herkömmliche Suchmethodeneinstellung (0..2) übernommen, wobei 0 zu 2 umgewandelt wird.
- fulltextSearchAutoComplete DlcGlobalOptions string Veröffentlicht [Suche] Mögliche Werte: AutoComplete Funktion Gültigkeit: ab: 3.60g Das Texteingabefeld für die Volltextsuche kann optional um eine AutoComplete-Funktion erweitert werden. Dazu fügt man in den Documents-Einstellungen eine Eigenschaft "fulltextSearchAutoComplete" hinzu. Die Syntax ist analog zu der Syntax in den Mappenfeldern: <Skriptname>[:[Param01]][:[Param02]][:[Param03]]
z.B. "CategoryLookupScript:3:0.2" Die zu übergebenen Parameter werden für die folgenden Funktionen benötigt:
Param01: Hier wird festgelegt nach wieviel eingegebenen Zeichen die AutoComplete Funktion aktiviert wird.
Param02: Hierbei handelt es sich um die zeitliche Verzögerung in Millisekunden nach der die AutoComplete Box sich öffnet.
Param03: Es lässt sich mit diesen Parameter festlegen, wieviele Vorschläge in der AutoComplete Box angezeigt werden sollen. Die Werte Param1-3 sind optionale Werte, werden diese Werte nicht gesetzt so gelten folgende Standardwerte für die einzelnen Parameter: Param01 = 2
Param02 = 0.5
Param03 = 50 Es ist außerdem zu beachten, dass die Reihenfolge der Paramater eingehalten wird. Möchte man z.B. nur Param03 ändern so müssen Param01 und Param02 ebenfalls mit angegeben werden. Bsp:
"CategoryLookupScript:3:0.2:10" Möchte man nur Param01 ändern so kann man Param02 und Param03 weglassen. (s.a. additionalSearchFrameHeight) Das Property funktioniert nur für das Volltextsuchfeld im Classic Client. (bei Client-Relevanz: Nur Classic-Client)
- fulltextSearchDefault DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: filetype:<MAPPENTYP_NAME> Gültigkeit: ab: 5.00e Mit der Eigenschaft fulltextSearchDefault kann der Standardwert für die Volltextsuche festgelegt werden. Ab 5.0i HF1 kann die Eigenschaft auch am Benutzer gesetzt werden. Beipspiel: fulltextSearchDefault = filetype:crmContact
Der Mappentyp crmContaxt wird durch den Wert "filetype:crmContact" als Standard fesgelegt. Die Eigenschaft FulltextSearch muss auf dem Mappentyp gesetzt sein.
- gadgetExtLibrary DlcGlobalOptions string Öffentlich [Scripting] Mögliche Werte: Mögliche Werte ist ein Ordnername des Ext-Frameworks der unter "www/js/lib/ext" zu finden ist. Standardwert: ext-4.0.7 Gültigkeit: ab: 4.00 Die Property soll es ermöglichen bei Fehlern und inkompatibilitäten im Ext Framework dieses möglichst einfach austauschen zu können. Die property bezieht sich nur auf die Verwendung mit Gadgets.
- gentableAutoSaveMode DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 3.60j Bei gentable 2 es gibt keinen extra Speichern Button im gentable.
Mit diesem Property kann man es wieder einschalten (Verhalten wie in gentable 1).
- GlobalControlFlowGuard DlcGlobalOptions string Veröffentlicht [Scripting, Workflow] Mögliche Werte: Ausdruck bzw.runscript:Name des Scripts Gültigkeit: ab: 3.60b An Kontrollpunkten im Workflow ist es möglich Bedingungen oder auch Portalskripte einzubinden. Dieses Property ermöglicht es Bedingungen oder ein Skript für jeden Kontrollpunkt des Workflow zu setzen.
- GlobalControlFlowGuardErrorMessage DlcGlobalOptions string Veröffentlicht [Workflow] Mögliche Werte: Message Gültigkeit: ab: 3.51 Ist ein globaler Guard (GlobalControlFlowGuard) für alle Kontrollflüsse aller Workflows definiert und diese gesetzte Bedingung nicht erfüllt, so wird die Fehlermeldung ausgegeben, die durch dieses Property definiert ist. s.a. GlobalControlFlowGuard
- globalGadgetConfig DlcGlobalOptions text Öffentlich [Webclient5] Mögliche Werte: { gadgetScript: <Skript>, gadgetAction: <Action>, tooltip: "de:...", gadgetIcon: "entypo:bell;left: 1px;", gadgetDialog: true } Standardwert: - Gültigkeit: ab: 5.00a HF2 Links oben im Hauptmenu kann ein Gadget Button eingeblendet werden. Hier kann man für den Button ein entypo Icon hinterlegen, dessen Position nachträglich mit css angepasst werden kann. Wenn gadgetDialog=true gesetzt ist, wird das Gadget im Dialog angezeigt und ansonten im Ordner Frame. Ein Tooltip kann auch eingestellt werden.
(bei Client-Relevanz: Nur Client 5)
- globalScan DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: true false Gültigkeit: ab: 4.00 Die neue Eigenschaft "globalScan" auf den Documents-Einstellungen bietet die Funktionalität, beliebige Dokumente über einen TWAIN-kompatiblen Scanner einzulesen und diese automatisch in eine dafür neu erzeugte Mappe abzulegen. Der relevante Mappentyp hierfür kann in den Documents-Einstellungen unter dem QuickDropZone-Mappentyp (Register "Documents / Anzeige") konfiguriert werden. Dieser Mappentyp muss mindestens ein Dokumentenregister besitzen. Sobald für die Eigenschaft "globalScan" der Wert "true" angegeben wird, erscheint nach der Anmeldung eines Benutzers mit Berechtigung zum Scannen im Web-Client in der oberen linken Navigationsleiste ein neues Symbol "Dokument einscannen". Wird das Icon ausgewählt, so startet der Scanvorgang und das neue Dokument wird unter Berücksichtigung des dafür hinterlegten Mappentyps einer neu erzeugten Mappe hinzugefügt. Abschließend befindet sich diese Mappe im Bearbeitungsmodus. Befindet sich bei dieser Aktion hingegen bereits eine Mappe aktiv in Bearbeitung, so wird das neu eingescannte Dokument dieser Mappe hinzugefügt. Dabei ist es egal, von welchem Typ die Mappe ist, solange dieser wenigstens ein gültiges Dokumentenregister besitzt. Das Verhalten ist dann analog zur Aktion "Dokument einscannen" auf dem Dokumentenregister (s.a. globalScanFolder). Die korresponierende Eigenschaft für den FeatureManager lautet "GlobalScan". Mit dieser kann das gesamte Feature für beliebige Konfigurationen explizit abgeschaltet werden.
- globalScanFolder DlcGlobalOptions text Öffentlich [Webclient] Mögliche Werte: Dateipfad Autotext lässt sich auch kombinieren z.B. C:\tmp\\%login% Gültigkeit: ab: 4.00 Die neue Eigenschaft "globalScanFolder" auf den Documents-Einstellungen bietet eine weitere Funktionalität, beliebige Dokumente über einen TWAIN-kompatiblen Scanner einzulesen und diese automatisch in ein eigens dafür eingerichtetes Verzeichnis auf dem zugrundeliegenden Betriebssystem des Portal-Servers abzulegen. Von dort aus können z.B. externe Anwendungen oder Jobs auf die abgelegten Dokumente zugreifen und eine weitere Verarbeitung durchführen. Eine Mappe ist in diesem Fall grundsätzlich nicht beteiligt, es wird je Scan nur eine TIFF-Datei in das Verzeichnis geschrieben. Dabei dient der Wert der Eigenschaft "globalScanFolder" als Pfadangabe zum gewünschten Verzeichnis. Es ist außerdem möglich, die Pfadangabe dynamisch mit einem AutoText zu versehen. Beachten Sie dabei stets die betriebssystem-abhängigen Schreib- und Leserechte auf dem (oder ggf. den) Zielverzeichnis (-sen). Sobald für die Eigenschaft "globalScanFolder" ein gültiger Wert angegeben wird, erscheint nach der Anmeldung eines Benutzers mit Berechtigung zum Scannen im Web-Client in der oberen linken Navigationsleiste ein neues Symbol "Dokument einscannen". Wird das Icon ausgewählt, so startet der Scanvorgang und das neue Dokument wird als TIFF-Datei in das spezifizierte Verzeichnis gelegt. Dabei vergibt der Portal-Server einen eindeutigen Dateinamen, damit keine Dateien versehentlich überschrieben werden. Damit diese Eigenschaft funktioniert muss ebenfalls die Eigenschaft "allowScanning" aktiviert sein.
- globalScript DlcGlobalOptions string Veröffentlicht [Scripting] Mögliche Werte: Scriptname?param1=val1&param2=val2 Gültigkeit: ab: 3.60g Mit der globalen Eigenschaft "globalScript=Scriptname" kann ein globales Script definiert werden, das über einen Button in der linken Hauptnavigation angesprochen werden kann. context.returnType und context.errorMessage werden dabei allerdings bis dato (Stand #1776) noch nicht unterstützt/ausgewertet, der per return-Anweisung zurückgelieferte Wert wird automatisch als alert() im Browser des Benutzers angezeigt.
- globalScriptIcon DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: {icon: 'entypo:<iconname>[;color:turquoise;]', tooltip: '<tooltip>'} Standardwert: - Gültigkeit: ab: 5.00b Ein JSON-Objekt mit den Eigenschaften icon und tooltip. Mit dieser Konfiguration ist es möglich, das globalScript-Icon und den zugehörigen Tooltip zu ändern. Beispiel: {icon: 'entypo:help;color:red;', tooltip: 'Hilfe anzeigen!'} (bei Client-Relevanz: Neues Verhalten in Client 5)
- groupingNumeric DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60b Alle numerischen Felder werden mit Tausendertrennzeichen dargestellt.
- groupingNumeric_LOCALE DlcGlobalOptions string Veröffentlicht Mögliche Werte: Character oder 0 Gültigkeit: ab: 3.60b Numerische Felder können mit Tausendertrennzeichen dargestellt werden. Dabei können lokale abhängige Trennzeichen wie folgt deklariert werden: groupingNumeric_locale=x Am Beispiel der Schweiz (ch) würde dies dann so aussehen: groupingNumeric_ch= ' Dabei ist zu beachten, dass man "ch" bei den Mandanten - Einstellungen unter Portal-Sprache(n) als Locale einfügt.
- gRPCTesseractCaCert DlcGlobalOptions string Öffentlich [OCR, gRPC] Mögliche Werte: Dateipfad Gültigkeit: ab: 5.00h HF3 Mit der Eigenschaft kann man den Pfad des CA-Zertifikates zur TLS-Verschlüsselung des gRPC-Tesseract Clients angeben.
Siehe auch gRPCTesseractTLS, gRPCTesseractClientCert und gRPCTesseractClientKey.
- gRPCTesseractClientCert DlcGlobalOptions string Öffentlich [OCR, gRPC] Mögliche Werte: Dateipfad Gültigkeit: ab: 5.00h HF3 Mit der Eigenschaft kann man den Pfad des Cleint-Zertifikates zur TLS-Verschlüsselung des gRPC-Tesseract Clients angeben.
Siehe auch gRPCTesseractTLS, gRPCTesseractCaCert und gRPCTesseractClientKey.
- gRPCTesseractClientKey DlcGlobalOptions string Öffentlich [OCR, gRPC] Mögliche Werte: Dateipfad Gültigkeit: ab: 5.00h HF3 Mit der Eigenschaft kann man den Pfad des privaten Schlüssels des Cleint-Zertifikates zur TLS-Verschlüsselung des gRPC-Tesseract Clients angeben.
Siehe auch gRPCTesseractTLS, gRPCTesseractCaCert und gRPCTesseractClientCert.
- gRPCTesseractTLS DlcGlobalOptions string Öffentlich [OCR, gRPC] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00h HF3 Mit der Eigenschaft 'gRPCTesseractTLS=1' kann man die TLS-Verschlüsselung für den gRPC-Tesseract Client aktivieren.
Siehe auch gRPCTesseractCaCert, gRPCTesseractClientCert und gRPCTesseractClientKey.
- HandleBlobWithAlreadyUsedNameAsNew DlcRegister DlcFile DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00c HF1 Wird ein Dokument auf ein Register hochgeladen, welches schon ein Dokument mit dem gleichen Namen enthält, dann wird das neue Dokument automatisch umbenannt (ein Zahl wird angehängt 0,1,2..).
Ist HandleBlobWithAlreadyUsedNameAsNew=0 gesetzt, dann wird das neue Dokument mit dem gleichen Namen als neue Version des bestehenden Dokumentes angesehen und ist das die neue aktuelle Version.
- HandleLockedUserAsAbsent Systemuser DlcGlobalOptions enum Öffentlich [Workflow, Server] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00g Gesperrte und entfernbare Benutzer werden im Kontext des Workflows wie abwesende Benutzer behandelt und die Vertreterregelungen werden angewendet. Mit der Benutzer- bzw. Documents Einstellungen Eigenschaft HandleLockedUserAsAbsent=0 kann diese geänderte Standardverhalten wieder zurück gesetzt werden
- hasAutologinLink DlcGlobalOptions string Öffentlich [Login/Logout/LDAP] Mögliche Werte: true, false, 1, 0, "de:Mein Link;en:My link" Standardwert: - Gültigkeit: ab: 5.00e HF2 Zeigt einen Link für die automatische SSO-Anmeldung auf der Loginseite an. Für ein eigenes Label kann die Standardnotation "de:Mein Link;en:My link" verwendet werden. Wenn man ein eigenes Label definiert, wird implizit "hasAutologinLink = true" angenommen.
- hasCheckInCheckOut Systemuser DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60 Möglichkeit des Ein- und Auschecken für den Benutzer werden deaktiviert. Dieses Property lässt sich auch in den Documents - Einstellungen setzen, jedoch überschreibt die Einstellung am Benutzer die globale Einstellung. Im Documents5-Client werden sowohl im Bearbeiten-Modus als auch im Ansichts-Modus zwei weitere Funktionen in der Aktionenklappliste der Dokumente angezeigt: »Checkout« und »Checkout & Download«
(bei Client-Relevanz: Classic-Client und Client 5)
- hasDefaultDashboard DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00a deaktiviert das Default Dashboard, ermöglicht overview und home dahsboard (bei Client-Relevanz: Nur Client 5)
- HasSupportForm DlcGlobalOptions enum Öffentlich [Webclient5] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00d HF1 Web-Client V mit erweiterten Systeminfos und Supportformular: Wenn die Documents-Einstellungen Eigenschaft HasSupportForm=1 gesetzt ist, wird im Web-Client V im Info-Menü die Möglichkeit der Erfassung eines Supporttickets ermöglicht. Mit der Documents-Einstellungen Eigenschaft SupportFormMailTo kann die E-Mail des Support Empfängers definiert werden. Die zu versendenden Infos und Defaultwerte für das Formular können per Scripting definiert werden (s. Scripting-Doku: InfoDialogAddition*)
- helpFile DlcGlobalOptions string Öffentlich [Webclient, Webclient5] Mögliche Werte: WEB-Client.pdf,WEB-Client.txt,URL Standardwert: - Gültigkeit: ab: Hier kann der Navigation ein Hilfebutton hinzugefügt werden, der beim Click ein Dokument öffnet. Das Verhalten ist hier im Classic-Client anders als im Client5: Classic-Client: Hier muss der Dateiname ohne Endung angegeben werden und es sind nur pdfs erlaubt.
Client5: Die Dokumente müssen je Sprache in Unterordner kopiert werden Bsp: de/WEB-Client.pdf und in der Property der Dateiname samt Endung (ohne Sprachkürzel!) angegeben werden. Hier sind alle Dateiendungen erlaubt. Des Weiteren ist es möglich eine URL anzugeben. Dies muss mit http:// oder https:// beginnen und wird nach Betätigung des Buttons aufgerufen.
Bsp.: x:\..\Documents5\tomcat8\webapps\documents\ext\help\de
Linux: /usr/share/documents5/current/ext Seit der Version 5.0g HF2 wird auch der "runScript-Syntax" unterstützt: runScript:[SCRIPTNAME]?param1=value1&param2=value2
Beim Klick auf den Hilfebutton wird dann das hinterlegte Skript ausgeführt und die Rückgabe im Client verarbeitet. (bei Client-Relevanz: Classic-Client und Client 5)
- hiddenFiletypesForTrash DlcGlobalOptions DlcFolder string Öffentlich [Ordner] Mögliche Werte: Kommaseparierte Liste technischer Mappentypnamen Gültigkeit: ab: 5.00e Mit der Eigenschaft können gelöschte Mappen von den ausgewählten Mappentypen im Gelöscht-Ordner für den Webclient ausgeblendet werden. Diese Eigenschaft steht für die globale Einstellung und den Gelöscht-Ordner zur Verfügung. (bei Client-Relevanz: Nein (Server Feature))
- HiddenHitlistPrefix DlcGlobalOptions string Öffentlich [Suche, Sortierung] Standardwert: #hide# Gültigkeit: ab: 4.00c Benannte Trefferlisten von Mappentypen können mit einem bestimmten
Namenspräfix versteckt werden, so dass Benutzer sie bei der
erweiterten Suche nicht mehr zur Auswahl angeboten bekommen.
Der Standardpräfix lautet "#hide#". Er kann als Eigenschaft
"HiddenHitlistPrefix" in den Documents-Einstellungen geändert
werden. Ein Leerstring als Wert deaktiviert diese Erweiterung.
Mit EE.i/x kann die Erweiterung nur genutzt werden, wenn den
Trefferlisten vor dem Strukturimport bereits archivseitiv
entsprechende Namen zugewiesen worden sind.
- hiddenRootNodes DlcGlobalOptions string Öffentlich [Tree] Mögliche Werte: public private combined Gültigkeit: ab: 5.00d HF2 Versteckt den Wurzelknoten in Ordnerbäumen.
"private" versteckt den Wurzelknoten unter der Outbar "Persönliche Ordner"
"public" versteckt den Wurzelknoten unter der Outbar "Öffentliche Ordner"
"combined" versteckt den Wurzelknoten unter der Outbar "Ordner"
Die Werte können beliebig als kommaseparierte Liste kombiniert werden, "private,public" versteckt z.B. die Wurzelknoten unter den Outbars "Persönliche Ordner" und "Öffentliche Ordner".
- hideFileEditButton DlcGlobalOptions DlcFile string Öffentlich [Webclient5] Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00d Mit der globalen oder Mappentyp-Eigenschaft "hideFileEditButton" = "true" kann der "Bearbeiten"-Button auf einer Mappe optional komplett ausgeblendet werden, falls der aktuelle Benutzer kein Schreibrecht auf dieser Mappe besitzt. Im Standardfall ("false") wird der "Bearbeiten"-Button weiterhin im Readonly-Style dargestellt und ist nicht anklickbar.
- hideLoginCompanyImage DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00h HF1 Entfernt das Firmen-Bild in der Loginseite.
- HighlightFieldExpr DlcGlobalOptions enum Veröffentlicht [Suche, Webclient] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60h Die Standard-Highlighting Funktion wirkt nur bei der Suche im Volltext-Feld. Wird die erweiterte Suche verwendet und der Suchausdruck in ein "normales Feld" eingegeben findet kein Highlighting statt. Mit diesem Property kann dies für das normale Feld auch aktiviert werden. Dies ist insbesondere sinnvoll wenn Textfelder mt großem Inhalt angezeigt werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- highlightFocusField DlcGlobalOptions string Öffentlich Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 6.0.1 Fokussierte Felder werden hervorgehoben
- HighlightHitwords DlcGlobalOptions enum Veröffentlicht [Suche] Mögliche Werte: false true Standardwert: false Gültigkeit: ab: 3.60 bis: 3.60j Sucht man über Volltextsuchfelder werden die Treffer in der Detailansicht farblich hervorgehoben.
Dies ist zugleich der Hauptschalter für alle Arten von Treffermarkierungen nach einer Suche.
Wenn diese Option ausgeschaltet ist, arbeiten sonstige "Highlight-"-optionen ebenfalls nicht. Die Webserveranwendung registriert eine Änderung des Werts zurzeit erst nach einer Neuinitialisierung (pEvent=init oder Neustart). Hinweis Änderung ab 4.0:
Ab Version 4.0 wurde dieses Property durch den Documents-Einstellungen Schalter "Treffer-Highlighting" abgelöst
- HighlightHitwordsTextScrollbars DlcGlobalOptions enum Veröffentlicht [Webclient] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.60b Befindet man sich im Highlight Hitwords Modus, werden Textfelder ohne Scrollbars in der Größe des Inhalts angezeigt.
- HighlightTechHits DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60e Verbesserte Volltexttreffermarkierung in Mappenfeldern (nur DOCUMENTS): Feldwerte werden komplett markiert, wenn es sich um einen technischen Treffer handelt, bei dem der Feldwert sich vom Anzeigewert unterscheidet. Abschaltbar per Property HighlightTechHits=0.
- HightlightVisCheck DlcGlobalOptions enum Öffentlich [Performance, Scripting] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00c HF2 Ab Version 4.0c #1852 prüft der DocumentsServer zunächst die Sichtbarkeit der einzelnen Felder in einer Mappenansicht, bevor er Textstellen von Suchtreffern markiert. Auf diese Weise werden einige unnötige Aufrufe von Aufzählungsskripten vermieden.
Die Sichtbarkeitsprüfung kann in manchen Projekten infolge komplexer Berechtigungsregeln mehr Zeit kosten als die Aufzählungsskripte. Sie kann deshalb mit dieser Eigenschaft wieder ausgeschaltet werden. Eine anderer Weg Aufrufe von Aufzählungsskripten während der Treffermarkierung in Version 1852 zu unterdrücken ist das Setzen der Eigenschaft "HighlightTechHits" auf 0. Diese betrifft jedoch auch sichtbare Felder.
- HitlistAllTypes DlcGlobalOptions string Öffentlich [Suche] Mögliche Werte: siehe Beschreibung Standardwert: - Gültigkeit: ab: 4.00c Diese Eigenschaft steuert die automatische Trefferlistenauswahl bei der direkten Volltextsuche in allen Mappentypen. Als Wert wird eine kommaseparierte Liste von Trefferlistenbezeichnern in der Schreibweise "Mappentypname.Trefferlistenname" erwartet. Die erste angegebene Trefferliste, auf deren Mappentyp der jeweilige Benutzer ein Leserecht hat, wird verwendet. Wenn keine der Angaben zu den Berechtigungen passt, wird standardmäßig die anonyme (Checkboxen-gesteuerte) Trefferliste angezeigt. DOCUMENTS kann optional vorher noch nach einer beliebigen benannten Trefferliste suchen. Dies erreicht man durch Anfügen des reservierten Namens "any" an die Trefferlistenaufzählung. Zu beachten: Wenn die Eigenschaft "FolderAutoSetFirstHitlist" auf 0
gesetzt wurde, dann bleibt "HitlistAllTypes" wirkungslos.
- hitListBlobThumbnails DlcGlobalOptions string Öffentlich Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00e Wenn StaticFolderWithBlobInfo, DynamicFolderWithBlobInfo und/oder HitListWithBlobInfo eingeschaltet sind, dann werden die Dokument in der List als Vorschauthumbnails dargestellt.
- hitListBlobThumbnailsMaxHeight DlcGlobalOptions string Öffentlich Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00e Legt die Maximalhöhe der Popupvorschau fest, für "hitListBlobThumbnails".
Die Maximalhöhe kann nicht größer werden, als die in der documents.ini definierte Größe für Thumbnails.
- hitListBlobThumbnailsMaxWidth DlcGlobalOptions string Öffentlich Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00e Legt die Maximalbreite der Popupvorschau fest, für "hitListBlobThumbnails".
Die Maximalbreite kann nicht größer werden, als die in der documents.ini definierte Größe für Thumbnails.
- hitlistCompactViewWidth DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00f Legt die Breite fest, ab der die Trefferlistenansicht in den Kompaktmodus wechselt.
- hitlistReactivatedState DlcGlobalOptions enum Veröffentlicht [EEi, EEx] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60g Mit dem Documents-Einstellungen-Property: hitlistReactivationState = 1 kann für Archivtrefferlisten festgelegt werden, dass für Archivmappen, die bereits in Bearbeitung sind (z.B. durch einen anderen Benutzer) oder bereits reaktiviert sind, ein anderes Icon anzeiget wird. Diese Einstellung hat negative Auswirkungen auf die Performance beim Anzeigen der Trefferliste. (s.a. SingleEditMode)
- HitlistWithBlobInfo DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60b Dokumente können bereits in Trefferlisten (von Ordnern oder Verknüpfungsregistern) angezeigt werden.
Siehe auch: StaticFolderWithBlobInfo, DynamicFolderWithBlobInfo, LinkRegisterWithBlobInfo
- HLSortByLabel DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60h Trefferlisten die sich in einer Klappliste befinden, z.B. bei der erweiterten Suche, werden im Regelfall nicht sortiert bzw. nach ihren technischen Bezeichner sortiert. Wird dieses Property gesetzt, so werden die Trefferlisten in der Klappliste nach dem Bezeichner in der entsprechende Sprache sortiert.
- homeDashboardGadgetConfig DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: [{GadgetConfig}] Gültigkeit: ab: 5.00a ruft ein Gadget auf, wenn man auf Home klickt. Hinterlegen eines abweichenden Dashboards auf der Home Schaltfläche [{GadgetConfig}] (bei Client-Relevanz: Nur Client 5)
- html5ImageViewerConfig DlcGlobalOptions text Öffentlich [Webclient5, Blob] Mögliche Werte: JSON Standardwert: - Gültigkeit: ab: 5.00i Legt die Anzeigekonfiguration des Html5ImageViewers fest.
{
showMenu: undefined|true|false oder {
annotation: undefined|true|false, // Annotationen anbringen
fit: undefined|true|false, // Bild einpassen
flip: undefined|true|false, // Bild spiegeln
rotate: undefined|true|false, // Bild rotieren
zoom: undefined|true|false, // Zoomknöpfe anezigen
}
} Beispiele: Menüleiste ausblenden:
{
showMenu: false
} Einzelne Einträge Anzeigen/Ausblenden:
{
showMenu: {
annotation: false,
fit: false
}
}
- htmlFieldAsHtml DlcField DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i Stellt das HTML-Feld im Lesemodus oder als schreibgeschützes Feld ohne Rahmen dar.
- htmlSanitizeDisabled DlcField DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i HF7 Eigenschaft für Felder vom Typ HTML Wenn diese Eigenschaft an einem Feld auf true gesetzt wird,
wird der Wert des HTML-Feldes vor der Anzeige nicht bereinigt.
D.h. es besteht die Gefahr das schädlicher HTML-Code in die Webapplikation gelangt.
Felder mit dieser Eigenschaft sollten deshalb grundsätzlich schreibgeschützt sein und
die Sicherheit des Inhaltes muss über andere Mechanismen gewährleistet werden. Das Setzen der Eigenschaft am Mappentyp führt dazu das der gesetzte Wert als Standard für alle
HTML-Felder der Mappe verwendet wird.
Die Eigenschaft kann auch global gesetzt werden und wirkt sich dann auf alle HTML-Felder aus (nicht empfohlen). Hinweis: Aufgrund der Art und Weise wie der Inhalt von HTML Feldern in die Applikation eingebunden
wird ist es auch mit dem Setzen dieser Eigenschaft NICHT möglich script-Tags über
HTML-Felder in den Webclient einzubinden. Stattdessen sollte der ClientHeaderCode-Mechanismus
verwendet werden.
- htmlSanitizeSettings DlcGlobalOptions string Veröffentlicht [Webclient] Mögliche Werte: true, false, JSON-Config Standardwert: true Gültigkeit: ab: 6.2.0 Ändert das Verhalten der HTML-Bereinigung in Documents für a-Tags (z.B. bei HTML-Feldern).
Bei JSON-Konfiguration:
{anchorNewTab: true} -> erlaubt das setzen von target="_blank" auf Anker-Elementen. Hierdurch wird der Link im neuen Tab geöffnet. (Standard: true)
{anchorNoopener: true} -> Setzt immer noopener auf Anker-Elementen (Standard: true)
{anchorNoreferrer: true} -> Setzt immer noreferrer auf Anker-Elementen (Standard: true)
- htmlViewerBlockServerRequests DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00g Wenn die Eigenschaft aktiviert ist werden Anfragen an den Documents Server, welche von im HTML Viewer angezeigten Dateien ausgelöst werden, geblockt.
- ignoreEmptyMonitor DlcGlobalOptions DlcFile string Öffentlich [Workflow] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00e HF1 Zeigt den Monitor nur an, wenn Einträge vorhanden sind.
- ignoreGentableDefError DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: true false Gültigkeit: ab: 4.00a Mit der globalen Eigenschaft "ignoreGentableDefError=true", werden Fehler bei der Konfiguration nicht angezeigt. Dadurch wird z.B. bei fehlender Def-Datei ein leerer Frame ohne ständige Fehlermeldung angezeigt (z.B. kein/falscher Eintrag im gentableDefField)
(bei Client-Relevanz: Classic-Client und Client 5)
- IgnoreReadRightCheckOnAccessScript DlcFile DlcGlobalOptions enum Öffentlich [Rechte, Scripting] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00h PortalScripting: AccessScript in Verbindung mit (G)ACLs: Wenn ein AccessScript am Mappentypen definiert ist wurden die Leserechte auf die Mappe z.B. durch Mappenklassenschutz ignoriert. Nun werden immer erst die Leserechte geprüft. Wenn kein Leserecht auf die Mappe besteht, dann wird das AccessScript nicht mehr ausgeführt und der Benutzer hat keine Rechte für die Mappe. Als Fallback kann man über die Mappentyp bzw. Documents Einstellungen Eigenschaft: IgnoreReadRightCheckOnAccessScript = 1 das bisherige Verhalten wieder einschalten.
- impliedTreeSearch DlcGlobalOptions enum Veröffentlicht [Tree] Mögliche Werte: false true Standardwert: false Gültigkeit: ab: 3.51 Die Trefferliste wird nach der Suche sofort im Trefferbaum dargestellt.
(bei Client-Relevanz: Classic-Client und Client 5)
- importFileInOwnerInbox DlcGlobalOptions enum Veröffentlicht [Inbox] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60b In den Documents - Einstellungen lässt sich hiermit verhindern, dass der Eingangskorb des importierenden Benutzers mit den neuen Mappen gefüllt wird. Dies gilt ebenso für Mappenimporte via SOAP und XMLRPC.
- importScriptOnce DlcGlobalOptions enum Öffentlich [Scripting] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 4.00 Durch die Eigenschaft importScriptOnce=1 wird erzwungen, dass die #import Direktive bei PortalScripten nur einmal pro Script durchgeführt wird, auch wenn es durch Rekursion mehrfach referenziert wird
- inboxShowNewFileCount DlcGlobalOptions string Öffentlich Mögliche Werte: true, false, 0, 1 Standardwert: false Gültigkeit: ab: 5.00e Wenn aktiviert, wird im Ordnerbaum beim Eingangsordner die Anzahl der neuen Mappen angezeigt.
- inheritHitlistFromParentFolder DlcGlobalOptions string Öffentlich [Ordner] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00e HF2 Diese Eigenschaft ermöglicht es, neue erstellte persönliche Ordner die Eigenschaft 'hitlist' des Oberordners zu erben.
- jobUserEExInstance DlcGlobalOptions string Veröffentlicht [EEx] Mögliche Werte: Instanzname Gültigkeit: ab: 3.60 Mit diesen und dem Property jobUserEExUnit kann die EE.x Instanz bzw Unit spezifiziert werden, die der Job-User in den Jobs (Delay, Wiedervorlage, Signaleingänge, Job-Scripte etc) verwenden soll um auf eine EE.x zuzugreifen.
- jobUserEExUnit DlcGlobalOptions string Veröffentlicht [EEx] Mögliche Werte: unit-Name Gültigkeit: ab: 3.60 Mit diesen und dem Property jobUserEExINstance kann die EE.x Instanz bzw Unit spezifiziert werden, die der Job-User in den Jobs (Delay, Wiedervorlage, Signaleingänge, Job-Scripte etc) verwenden soll um auf eine EE.x zuzugreifen.
- JsPdfCoverTemplate DlcGlobalOptions string Öffentlich [pdf-Druck] Mögliche Werte: 0, 1 Standardwert: 0 Gültigkeit: ab: 4.00c HF1 Mit der Eigenschaft JsPdfCoverTemplate=1 wird bei der Aktion 'PDF-Druck' eine PDF-Mappendeckelvorlage in JavaScript statt in XML generiert und verwendet.
(bei Client-Relevanz: Nein (Server Feature))
- keepDefaultSendListAlwaysAvailable DlcGlobalOptions enum Öffentlich [Webclient, Workflow] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00g Die globale Eigenschaft "keepDefaultSendListAlwaysAvailable = 1" ermöglicht es, obwohl ein Benutzer kein Anlagerecht auf eine Verteilerliste hat, diese bei der Mappenanlage als Standardverteiler auszuwählen.
- keepDocRegisterSorting DlcGlobalOptions DlcFile enum Öffentlich [Webclient, Sortierung] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 4.00b HF2 Die Eigenschaft "keepDocRegisterSorting" schaltet bei Bedarf die sessionweite, nicht-persistente(!) Speicherung der Sortierung der Dokumentenlisten auf Registern ein oder aus. Die Sortierung wird je Mappentyp (nicht Vorgang!) und Register für die Dauer einer Sitzung beibehalten.
Diese Eigenschaft ist sowohl bei DOCUMENTS EInstellungen als auch auf einem Mappentyp verfügbar,
wobei der Mappentyp im konkurrierenden Fall die höhere Priorität hat. (bei Client-Relevanz: Nein (Server Feature))
- kioskViewMode DlcGlobalOptions enum Veröffentlicht [Webclient] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.51 Der Kiosk Mode kann hiermit aktiviert werden, sollte jedoch nur bei webbasierten Anwendungen wie dem Archiv benutzt werden.
- LargeDoubleLists DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 false true Standardwert: false Gültigkeit: ab: 3.60e Bei der internen Suche in einem Doppelauswahllistenfeld werden standardmäßig nur die ersten 255 Zeichen des Feldwerts beachtet. Wird diese Eigenschaft auf true gesetzt, können darüber hinaus Feldwerte bis zu 64000 Zeichen durchsucht werden.
Es verlangsamt allerdings die Suche beträchtlich und wird in der Oracle-Version nicht unterstützt, weil die Datenbank dabei nicht mitspielt.
=> Für Berechtigungslisten besser den GACL Cache verwenden
- LatestVersionOnly DlcGlobalOptions enum Veröffentlicht [EEx, EAS] Mögliche Werte: 0 1 Gültigkeit: ab: 3.60 Bei der Recheche in der EE.x wird nur die letzte Version einer Mappe angezeigt. Wird diese Property mit dem Wert 0 gesetzt werden auch die vorherigen Versionen angezeigt. Die Eigenschaft wirkt auch bei der Suche in EDA oder EBIS stores, doch die Werkseinstellung ist in diesem Fall "0".
- LatestVersionUserOpt DlcGlobalOptions enum Öffentlich [EEx, EAS, Suche] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00a Mit der Eigenschaft kann in der erweiterten Suchmaske eine Option "alle Versionen einbeziehen" hinzugefügt werden. Die Option bezieht sich nur auf EE.x, EDA und EBIS. Der Benutzer kann in diesem Fall selbst bestimmen,
ob er alle Versionen einer Mappe/eines Dokuments recherchieren will oder nur die Aktuellen. siehe auch: LatestVersionOnly (bei Client-Relevanz: Classic-Client und Client 5)
- linkRegisterCompactView DlcGlobalOptions DlcFile DlcRegister string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00h HF1 Schaltet die Kompaktansicht für Verknüpfungsregister und Mappen-Link-Register ein/aus.
- linkRegisterCompactViewWidth DlcGlobalOptions DlcRegister DlcFile string Öffentlich [Webclient5] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00h HF1 Legt die Breite fest, ab der die Verknüpfungsregister- und Mappenlinkregisteransicht in den Kompaktmodus wechselt.
- LinkRegisterSearch DlcGlobalOptions enum Öffentlich [Suche] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00a aktiviert ein Volltextsuchfeld in Verknüpfungsregistern. Einschränkung in DOCUMENTS 5: Bei Verwendung des neuen "OR"-operators in einem erweiterten Filterausdruck (API-Syntax) ist das Suchfeld aus technischen Gründen nicht verfügbar. (bei Client-Relevanz: Classic-Client und Client 5)
- LinkRegisterWithBlobInfo DlcGlobalOptions enum Öffentlich [Blob] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00b Dokumente können bereits in Trefferlisten von Verknüpfungsregistern angezeigt werden.
Siehe auch: HitlistWithBlobInfo, StaticFolderWithBlobInfo, DynamicFolderWithBlobInfo
(bei Client-Relevanz: Classic-Client und Client 5)
- ListNumUnitInVal DlcGlobalOptions enum Öffentlich [Ordner, Suche] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 4.00e In Listenasichten werden Einheitenangaben bei numerischen Feldern standardmäßig hinter den Wert geschrieben.
Wird dies ausgeschaltet, schreibt DOCUMENTS sie stattdessen in den Spaltenkopf.
- localEditTypeIE DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: activex, java, none Standardwert: activex Gültigkeit: ab: 5.00a Die lokale Bearbeitung von Dokumenten wird im Internet Explorer standardmäßig über ein ActiveX-Plugin gesteuert. Durch das Setzen der globalen Eigenschaft "localEditTypeIE" auf den Wert "java" wird stattdessen ein Java-Applet für die lokale Bearbeitung verwendet.
Siehe dazu auch Eigenschaft "dropzoneTypeIE".
- LogBookArchiveDeleteFile DlcGlobalOptions enum Öffentlich [Server, EAS, EBIS Store, EEi, EEx] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00d Diese Eigenschaft aktiviert das Loggen der Löschaktion von Archivmappen im Log-Book
- LogBookRecovery DlcGlobalOptions string Öffentlich [DOCUMENTS Manager] Mögliche Werte: 1 Gültigkeit: ab: 5.00d Mit dieser Eigenschaft kann man festlegen, ob Wiederherstellung einer Mappe aus dem Ordner „Deleted“ im Log-Buch protokolliert werden soll.
(bei Client-Relevanz: Nein (Server Feature))
- loginBackgroundImage DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: backgroundImage_custom.png Die FavIcons solle im \tomcat8\webapps\documents\img\documents\skin\base\shared\login liegen. Standardwert: backgroundImage_documents.png Gültigkeit: ab: 5.00a Stellt Hintergrund für Loginseite bereit, den Hintergrund der Anmeldemaske (bei Client-Relevanz: Nur Client 5)
- loginCompanyImage DlcGlobalOptions string Öffentlich Mögliche Werte: companyImage_custom.png Die Login Bilder sollen im \tomcat8\webapps\documents\img\documents\skin\base\shared\Login Linux: /usr/share/documents5/current/img/documents/skin/base/shared/login Standardwert: companyImage_documents.png Gültigkeit: ab: 5.00a stellt ein Profilbild für die Loginseite bereit, meint das Foto rechts neben der Anmeldemaske
(bei Client-Relevanz: Nur Client 5)
- loginHeaderImage DlcGlobalOptions string Öffentlich Mögliche Werte: headerImage_custom.png Die Login Bilder sollen im \tomcat8\webapps\documents\img\documents\skin\base\shared\login liegen. Gültigkeit: ab: 5.00a stellt ein Banner für die Loginseite bereit bereit, meint das Symbol links neben dem documents - Schriftzug
(bei Client-Relevanz: Nur Client 5)
- loginInfoImage DlcGlobalOptions string Veröffentlicht [Webclient, Login/Logout/LDAP] Mögliche Werte: Bildname.Endung Gültigkeit: ab: 3.60 Die Hintergrundgrafik der Loginmaske kann dadurch verändert werden. Die Grafik muss im Verzeichnis \www\images\alternative liegen. die Grafik sollte dabei maximal 606 x 340 sein. Wird diese Größe überschritten, wird die Grafik nur teilweise bzw. gar nicht dargestellt.
- loginNotification DlcGlobalOptions string Öffentlich Gültigkeit: ab: 5.00g Mit der Documents-Eigenschaft "loginNotification" können Benachrichtigungen bereits auf der Login-Seite angezeigt werden, z.B. für Wartungsmeldungen o.ä. Es werden Lokalisierungen im bekannten Format unterstützt. Achtung: Die Nachrichten sind immer sofort sichtbar, d.h. kein Tomcat Neustart, "&cacheEvent=clearAll"-URL o.ä. ist notwendig! Lokalisierte Werte können z.B. wie folgt angegeben werden:
de:Meine Nachricht;en:my notification
- LogRights DlcGlobalOptions enum Veröffentlicht [Debug, Rechte] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60h Mit diesen Property werden im Serverfenster die Rechte von Benutzern angezeigt, z.B. Rechte auf Mappen. Es wird jedoch empfohlen die Wartungsoperation "testAccess" im PortalClient zu benutzen. Diese Operation hat gegenüber dem Property den Vorteil, dass die Darstellung der Rechte besser ist. Um die Wartungsoperation zu nutzen, öffnen Sie das Wartungsfenster im DocumentsManagerunter :
Administration => Wartungsoperation durchführen...
und geben anschließend den Befehl ein:
testAccess Mappe/Mappen-ID Benutzer
z.B. testAccess ftWebContent schreiber
- LogSearchesTo DlcGlobalOptions string Veröffentlicht [Debug] Mögliche Werte: Dateipfad + Dateinamenpräfix Gültigkeit: ab: 3.60 Wenn dieses Property aktiviert ist, werden Suchanfragen von Documents an die Datenbank protokolliert.
Dabei werden die Query Anweisung, query time und resultset time protokolliert. Für dieses Property muss man den Dateipfad und Dateiname angeben, anschließend wird automatisch "_[Name des Benutzers].log" angehängt.
- mailAvailableBlobsScript DlcGlobalOptions DlcFile string Öffentlich [Email, Blob] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00e Neuer Script-Exit am Mappentyp: mailAvailableBlobsScript=Scriptname ermöglicht die im Web-Client zur Mail-Versendung zur Verfügung stehenden Anlagen einzuschränken oder zu ergänzen. s. auch portalscripting.chm
- MaxArchiveHitsFolder DlcGlobalOptions string Veröffentlicht [EEi, EEx] Mögliche Werte: Anzahl Gültigkeit: ab: 3.60h Mit diesen Property kann man die maximale Anzahl an Treffern in dynamischen Ordnern des Archives festlegen. Dies trägt zur Verbesserung der Performance bei.
- MaxHitfieldLength DlcGlobalOptions string Veröffentlicht [Suche] Mögliche Werte: Länge Standardwert: 50 Gültigkeit: ab: 3.60 Definiert die Anzahl der angezeigten Zeichen einer Spalte bei einer Trefferliste.
(bei Client-Relevanz: Classic-Client und Client 5)
- MaxLastUsedFiles DlcGlobalOptions string Veröffentlicht [Webclient] Mögliche Werte: Anzahl bis max. 99 Standardwert: 10 Gültigkeit: ab: 3.60b Die max. Anzahl der in "Zuletzt benutzt" angezeigten Mappen ist auf eine Anzahl von 10 beschränkt. Mit diesem Property kann diese Obergrenze bis auf den Wert von 100 erhöht werden. (bei Client-Relevanz: Classic-Client und Client 5)
- maxOutbarSize DlcGlobalOptions string Öffentlich [DOCUMENTS Manager, Webclient5] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: Setzt die maximale Anzahl an angezeigten Outbars. Die restlichen Outbars werden in einem Popup-Menü dargestellt.
Diese Eigenschaft funktioniert nur korreckt, wenn die globale Eigenschaft "SubOutbars" ausgeschaltet ist.
- maxSizeDocToParse DlcGlobalOptions string Veröffentlicht [Blob, Scripting] Mögliche Werte: Anzahl Bytes Standardwert: 524288 Gültigkeit: ab: 3.51 Bei der PortalScripting Methode addDocumentFromFileSystem ist die Größe der hochzuladenen Datei beschränkt, wenn diese nach AutoTexten geparsed werden soll. Diese Größe kann mit dem Property definiert werden.
- menubarGadgetConfigs DlcGlobalOptions text Öffentlich [Webclient5] Mögliche Werte: [{ gadgetScript: <Skript>, gadgetAction: <Action>, tooltip: "de:...", gadgetIcon: "entypo:bell;left: 1px;", gadgetDialog: true }, { gadgetSkript...}] Standardwert: - Gültigkeit: ab: 5.00a HF2 Links oben im Hauptmenu kann eine weitere Zeile mit Gadget Buttons eingeblendet werden. Hier kann man für den Button ein entypo Icon hinterlegen dessen Position nachträglich mit css angepasst werden kann. Wenn gadgetDialog=true gesetzt ist, wird das Gadget im Dialog angezeigt und ansonten in der Ordner Ansicht. Ein Tooltip kann auch eingestellt werden.
(bei Client-Relevanz: Nur Client 5)
- menuPreferencesHiddenItems DlcGlobalOptions text Veröffentlicht [Webclient] Mögliche Werte: UserSettingsChangePassword = Kennwort ändern UserSettingsPrivateFolders = Persönliche Ordner UserSettingsEMail = EMail-Optionen UserSettingsAbsence = Abwesenheit UserSettingsLists = Listen / Sonstige UserSettingsAdmin = Benutzerverwaltung UserSettingsVersion = Version Gültigkeit: ab: 3.60 Die Optionen unter dem Outbar Einstellungen können mit diesen Property ausgeblendet werden. Beispiel:
menuPreferencesHiddenItems = UserSettingsChangePassword,UserSettingsEMail,UserSettingsLists
- MobileHL DlcGlobalOptions string Veröffentlicht Mögliche Werte: Mappentyp.Trefferliste Gültigkeit: ab: 3.60d bis: 3.60j Die Trefferliste wird vom MobileClient berücksichtigt. Zu beachten ist, dass die Trefferliste Titel, Task, Besitzer und Erstelldatum enthalten sollte, da ansonsten die ersten vier Werte stattdessen benutzt werden.
- monoView DlcGlobalOptions Systemuser FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00c Die Eigenschaft "monoView" (Global oder Benutzer) aktiviert für den Client V ein Layout, welches dem des Classic-Client entspricht. Es wird dann entweder die Ordner- oder Mappenansicht statt beide Ansichten nebeneinander dargestellt.
(bei Client-Relevanz: Nur Client 5)
- nativePdfViewerUrlParameter DlcGlobalOptions DlcFile DlcRegister Systemuser string Öffentlich [Webclient5] Standardwert: view=fitV Gültigkeit: ab: 5.00e HF2 Über die Property können Parameter an die URL des Nativen PDF Viewers angehängt werden, mit denen der Viewer geöffnet werden soll. Beispiele hierfür sind 'view=FitV', 'view=FitH' und 'zoom=100'. Die Eigenschaft ist erst ab 6.1.0 am Benutzer verfügbar.
- naviBarGadgetConfig DlcGlobalOptions text Öffentlich [Webclient5] Mögliche Werte: GadgetConfig (Beispiel: {gadgetScript: 'Gadget_MyNavibarGadget', gadgetAction: 'initGadget'}) Gültigkeit: ab: 5.00a Mit dieser Eigenschaft ist es möglich ein Gadget oben links unter der Iconleiste einzubinden.
Im neuen Design wird das Gadget in der Toolbar oben rechts angezeigt.
- NaviBarHideVersion DlcGlobalOptions enum Öffentlich [EEx, Webclient] Mögliche Werte: true false Gültigkeit: ab: 4.00 Hiermit lassen sich die Versionsnummer von archivierten EEx Dokumenten in der NaviBar ausblenden. (bei Client-Relevanz: Classic-Client und Client 5)
- navibarInfoImage DlcGlobalOptions string Veröffentlicht [Webclient] Mögliche Werte: Bildname.Endung Gültigkeit: ab: 3.60 Es wird ein zusätzliches Logo in die Navigationszeile eingefügt. Die Grafik muss im Verzeichnis \www\images\alternative liegen. Die Grafik sollte dabei maximal 61 x 22 sein, wenn diese Größe überschritten wird kann es dazu kommen, dass die Navigation, Bedienelemente und Register nicht mehr angezeigt werden.
- newFileGadgetConfig DlcGlobalOptions string Öffentlich [Webclient5, Webclient] Mögliche Werte: dropDefault, Gadget-Config Gültigkeit: ab: 5.00h Beim Klick auf den neue Mappe erstellen Button, wird das hinterlegte Gadget ausgeführt.
Anstatt einer Gadget-Konfiguration kann auch die Zeichenkette "dropDefault" gesetzt werden. In diesem Fall wird das Standard-Drop-Upload Gadget verwendet.
- NewRegisterFieldRights DlcGlobalOptions DlcFile DlcRegister string Öffentlich [Rechte, Webclient] Mögliche Werte: 0 Gültigkeit: ab: 4.00d Verrechtung am Dokumentenregister: Wenn auf dem Dokumentenregister
Mappenfelder angezeigt wurden, und das Dokumentenregister verrechtet war
haben fehlende Schreibrechte auf dem Dokumentenregister dazu geführt,
dass auch die Mappenfelder auf dem Register "readonly" waren.
Dieses wurde dahingehend korrigiert, dass Rechte auf Dokumentenregister
keinen Einfluß mehr auf die angezeigten Felder auf diesem Register haben.
Das alte Verhalten kann man über die Documents-Einstellungen Eigenschaft
NewRegisterFieldRights=0 erreichen.
Beim Starten des DOCUMENTSServers nach dem Patch auf die 4.0d wird ein-
malig eine Wartungsoperation ausgeführt, die nach der Verwendung von
Registerrechten sucht und automatisch dann die Eigenschaft
NewRegisterFieldRights=0 setzt
- newsNaviParams DlcGlobalOptions string Veröffentlicht [Content] Mögliche Werte: "<categoryId>-<contentId>" Gültigkeit: ab: 3.60c Bei framebasierten Portalen kann bei der erstmaligen Anzeige der Startseite ein spezielles News-Window angezeigt werden. - Das Feature wird mit zwei Eigenschaften auf der Portal-Administration aktiviert: "useNewsWindow" = "true" schaltet das Feature generell ein "newsNaviParams" = "<categoryId>-<contentId>" gibt die beiden Parameter für den anzuzeigenden Inhalt der News-Seite an. - Tipp: Die Ids sind über den Portal-Client einfach identifizierbar! Dieses Feature hatte einen Bug, der in DOCUMENTS 6i behoben wurde.
- nextFileAfterRead DlcGlobalOptions string Öffentlich [Workflow, Webclient5] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00f HF1 Öffnet nach dem Klick auf den 'Gelesen'-Knopf die nächste Mappe im Workflow.
- NoMailForLockedUser DlcGlobalOptions Systemuser enum Öffentlich [Email] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00i Benutzer, die im Status "gesperrt" sind, erhalten von DOCUMENTS keine Mails zugesendet (z.B. im Rahmen des Workflows).
Wenn dies doch geschehen soll, dann kann dies über die Eigenschaft NoMailForLockedUser=0 aktiviert werden.
- NoRightSurrogate DlcGlobalOptions string Öffentlich [Rechte, Ordner] Standardwert: *** Gültigkeit: ab: 4.00d Die Eigenschaft bestimmt einen Ersatztext für Feldwerte, bei denen kein Leserecht besteht. Er kann in der üblichen Syntax (de: ...; en:) mehrsprachig angegeben werden.
Zurzeit betrifft diese Eigenschaft nur statische Ordner mit angepasster Trefferliste.
- NoStatusEntry DlcGlobalOptions DlcFile string Öffentlich [DOCUMENTS Manager] Mögliche Werte: FileTypeChanged, EditFile (ab 5.0h) Gültigkeit: ab: 5.00e HF2 Über die Eigenschaft NoStatusEntry=FileTypeChanged am Mappentypen (Zielmappentyp) oder Documents- Einstellungen kann erreicht werden, dass bei Mappen ändern / Mappentypwechsel kein Eintrag in das Status-Journal (Mappen-Status) geschrieben wird.
- OCR DlcGlobalOptions DlcFile DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: pdf, jpg, png,... (abhängig von dem verwendeten OCR-Tool Gültigkeit: ab: 5.00e Komma-separierte Liste von Extensions für die OCR durchgeführt werden soll.
Wenn ein Dokument hochgeladen wird, dessen Extension in der Liste konfiguriert ist, wird beim Hochladen der Datei OCR durchgeführt, wenn das Dokument noch keine Worte enthält. Details sind der Dokumentation auf https://otris.software zu entnehmen
- ocrClientConfig DlcFile DlcGlobalOptions text Öffentlich [Webclient5] Mögliche Werte: JSON Objekt true Gültigkeit: ab: 5.00g Über die Eigenschaft kann ein Modus aktiviert werden, in dem Ausschnitte aus einem PDF ausgelesen und in Mappenfelder eingefügt werden können. Genauere Infos siehe HowTo.
Zum Benutzen der Funktionalität wird eine OCR Lizenz benötigt.
- OCRDpi DlcGlobalOptions string Öffentlich [Blob, OCR] Mögliche Werte: 100-1000 Standardwert: 300 Gültigkeit: ab: 5.00f Mit diesem Property wird die Auflösung der JPEGs in den für das OCR umgewandelten PDFs festgelegt
- OCREngine DlcGlobalOptions string Öffentlich [Blob, OCR] Mögliche Werte: Tesseract, Abbyy, IRIS Standardwert: Tesseract Gültigkeit: ab: 5.00f Mit diesem Property kann eine beliebiges Tool für die Texterkennung verwendet werden. Es muss dann ein entsprechendes Script mit dem Namen `otr<ToolName>` vorhanden sein. In diesem Script kann das Tool über die PortalScripting Funktion context.extProcess aufgerufen werden.
- OCRForce DlcGlobalOptions string Öffentlich [Blob, OCR] Mögliche Werte: 0, 1 Standardwert: 0 Gültigkeit: ab: 5.00h HF2 Falls OCR auf einem PDF durchgeführt werden soll, wird normalerweise zunächst geprüft, ob das Dokument bereits Text enthält (siehe Propery OCRMinWordCount). Diese Prüfung entfällt, wenn dieses Property auf 1 gesetzt ist. Die Texterkennung wird dann in jedem Fall durchgeführt.
- OCRJpegQuality DlcGlobalOptions string Öffentlich [Blob, OCR] Mögliche Werte: 1-100 Standardwert: 75 Gültigkeit: ab: 5.00f Mit diesem Property wird die Qualität der JPEGs in den für das OCR umgewandelten PDFs festgelegt
- OCRLanguages DlcGlobalOptions string Öffentlich [Blob, OCR] Mögliche Werte: Sprache (Beispiel Tesseract: deu+eng+nld+fra, Beispiel Abbyy: German English Dutch French) Gültigkeit: ab: 5.00e Mit diesem Property kann die Sprache für die Texterkennung gesetzt werden. In deutschen Dokumenten werden zum Beispiel Umlaute nur dann erkannt, wenn auch die deutsche Sprache angegeben ist.
- OCRMinWordCount DlcGlobalOptions string Öffentlich [Blob, OCR] Mögliche Werte: Mindestanzahl Wörter Standardwert: 5 Gültigkeit: ab: 5.00f Falls OCR auf einem PDF durchgeführt werden soll ,wird zunächst geprüft, ob das Dokument bereits Text enthält. Dazu wird der Text aus dem Dokument extrahiert und es werden die Wörter gezählt. Wenn das Dokument mindestens fünf Wörter enthält, wird keine Texterkennung durchgeführt. Die Anzahl der Wörter, die bestimmt, dass das Dokument schon ein Textdokument ist, kann mit diesem Property verändert werden.
- OCROutputFormat DlcGlobalOptions DlcRegister DlcFile string Öffentlich [Blob, OCR] Mögliche Werte: pdf, docx Standardwert: pdf Gültigkeit: ab: 5.00f Defaultmäßig ist die Ausgabe ein durchsuchbares PDF Dokument. Optional kann auch ein Word Dokument erstellt werden (nicht mit Tesseract möglich).
- OCRTextFormat DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: txt, alto Gültigkeit: ab: 5.00f Der durch die OCR erkannte Text wird extrahiert und im Script afterOcrScript als Parameter ocrText zur Verfügung gestellt.
Für den Wert "txt" im einfachen Textformat. Für den Wert "alto" im im ALTO XML Format.
- OCRTextTarget DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: Registername Gültigkeit: ab: 5.00f Nur im Zusammenhang mit dem Property OCRTextFormat.
Falls OCRTextTarget einen gültigen Registernamen enthält, wird der mit OCR erkannte Text als zusätzliche Datei in das entsprechende Register hochgeladen. Falls OCRTextTarget ein gültiger Feldname ist, dann wird der erkannte Text in das Feld geschreiben (ab 5.0f HF1). Falls OCRTextTarget keinen gültigen Registernamen und keinen gültigen Feldnamen enthält aber einen Wert ungleich dem Leerstring enthält, wird der Text im Register des aktuellen Dokuments als Datei hochgeladen.
- OldCategoryStyle DlcGlobalOptions enum Öffentlich [DOCUMENTS Manager] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00c In Version 5.0c des DOCUMENTS Managers wurden die Baumknoten "Alle Scripte" und "Scripte" zusammengefasst. Dasselbe gilt für "Alle Mappentypen" und "Mappentypen". Bei Selektion des Knotens werden alle Elemente rechts in der Liste dargestellt. Bei Erweiterung des Knotens werden (sofern benutzt) zuerst die Kategorien und erst darunter die jeweiligen Elemente als Baumknoten dargestellt.
Durch das Setzen dieser Eigenschaft auf "1" kann die alte Darstellung wieder aktiviert werden. Dazu ist ein Neustart des Managers erforderlich. (bei Client-Relevanz: Nein (Server Feature))
- onConnectInboxScript DlcFile Systemuser DlcGlobalOptions string Öffentlich [Scripting] Mögliche Werte: Scriptname Standardwert: -- Gültigkeit: ab: 5.00d Wenn eine Mappe in den Eingangsordner des Benutzers mittels Versendeliste oder Workflow gelangt, wird das hier hinterlegte Skript aufgerufen.
Nähere Beschreibung der verfügbaren Properties auf Skriptebene siehe portalscripting.chm (list of available script-exits).
- onEditScriptAtScratchCopy DlcGlobalOptions enum Öffentlich [Rechte, Scripting] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00i HF9 Wenn bei Anmeldung im Web noch eine Arbeitskopie aus einer letzten Sitzung für den Benutzer existiert und damit die Mappe automatisch im Bearbeitungsmodus angezeigt wird, wurde bisher (wenn definiert) das onEditScript ausgeführt. Das wird nun nicht mehr gemacht. Über die globale Eigenschaft onEditScriptAtScratchCopy=1 kann das alte Verhalten wieder eingeschaltet werden.
- OnSearchScript DlcGlobalOptions string Öffentlich [Suche, Scripting] Mögliche Werte: <Skriptname> Gültigkeit: ab: 4.00c Aktiviert einen Exit, der aufgerufen wird, wenn Documents mit der Verarbeitung einer Suchanfrage beginnt.
Das Skript kann die Suchparameter untersuchen (Quellen, Suchfelder mit den eingetragenen Werten) und folgende Aktionen auslösen. - Die Suche kann mit einer individuellen Fehlermeldung abgebrochen werden. Sofern die jeweilige Rechercheart es unterstützt kann auch eine Warnmeldung ohne Abbruch der Suche generiert werden. Letztlich entscheidet die Rechercheart bzw der aufrufende Code, ob und wie diese Meldungen angezeigt werden. - Zu Optimierungszwecken kann das Script in einigen Fällen Suchquellen aus der Anfrage entfernen. Wenn beispielsweise in einer Gruppe von Jahresarchiven nach Mappen mit einer bestimmten Jahreszahl gesucht wird, kann das Skript vorab die Archive entfernen, die projektbedingt garantiert keine Mappen mit dieser Jahreszahl enthalten.
Hierbei besteht allerdings die Einschränkung, dass die erste Suchquelle nicht entfernt werden kann, weil das meistens die Hauptquelle mit der gewählten Trefferliste ist. Ein Entfernen von Suchquellen mit dem Ziel einen versteckten Berechtigungsfilter zu scripten funktioniert also nicht. (bei Client-Relevanz: Nein (Server Feature))
- onUploadDocumentScript DlcGlobalOptions string Öffentlich [Blob, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 3.60j ab 1795, Property kann auch am Mappentypen oder Register definiert werden Dieses Script wird beim Upload eines Blobs ausgeführt: Damit kann der Name des Blobs geändert, geprüft usw. werden. Ein negativem Rückgabewert wird als Fehler interpretiert. context.Event = onUploadDocument, onUploadNewDocument Lesend/Schreibend globales Object Param
----------------------------------------
param.filePath
param.fileName Document
--------
context.document (== NULL bei onUploadNewDocument bei neuem Dokument) Register
--------
context.register (bei Client-Relevanz: Nein (Server Feature))
- onWorkflowAgentScript DlcFile DlcGlobalOptions string Öffentlich [Workflow] Standardwert: ScriptName Gültigkeit: ab: 5.00g Script-Exit am Mappentypen oder Documents-Einstellungen: onWorkflowAgentScript=Scriptname
Wenn ein Benutzer abwesend ist und im Workflow durch seinen Vertreter vertreten wird, dann wird dieser Script-Exit nach der Zustellung des Workflow-Schrittes in den Eingangskorb des Vertreters ausgeführt.
- openDocMode DlcGlobalOptions DlcFile DlcRegister enum Veröffentlicht [Blob, Webclient] Mögliche Werte: internal external download Standardwert: internal Gültigkeit: ab: 3.60b Bestimmt das Standardverhalten der Anzeige beim Öffnen eines Dokuments.
- openSingleHitResult DlcGlobalOptions enum Öffentlich [Suche, Webclient] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 4.00d Mit der globalen Eigenschaft "openSingleHitResult" = true wird festgelegt, dass sich nach einem Suchergebnis mit genau einem Treffer dieser sofort geöffnet wird. Dies gilt sowohl für die Volltextsuche, die erweiterte Suche als auch für die Suche auf Ordnern.
(bei Client-Relevanz: Classic-Client und Client 5)
- otrAIImpl DlcGlobalOptions enum Öffentlich Mögliche Werte: openAI anthropic mistral gemini vertexAI Standardwert: openAI Gültigkeit: ab: 6.00 Definiert den standardmäßig verwendeten KI-Dienst, falls keiner bei den Einstellungen des Copiloten/AI Toolkit spezifiziert wird.
- otrAIVectorImpl DlcGlobalOptions string Öffentlich Mögliche Werte: qdrant Standardwert: qdrant Gültigkeit: ab: 6.1.0 Definiert den Standard Dienst, welche für Vektordatenbanken/Wissenssammlungen genutzt wird, falls kein Dienst am Copilot/AIToolkit spezifiziert wird
- Outbar DlcGlobalOptions string Veröffentlicht [Workflow] Mögliche Werte: kommaseparierte Outbarliste Standardwert: kommaseparierte Outbarliste Gültigkeit: ab: 3.51 Man kann öffentliche Ordner auf eigenem Outbar-Register darstellen. Dazu muss man folgendes tun: 1. Schritt:
Spezifikation der zusätzlichen Outbar-Register
Standard-Outbar-Register: Ordner, Einstellungen
Eigenschaft in Documents-Einstellungen: Outbar=Name1,Name2,Name3 2. Schritt:
Outbar-Icons hinterlegen
Zielverzeichnis: \www\images\dlc\compact\outbar
Nicht aktives Icon: Name1.gif
Aktives Icon: Name1_a.gif
Zu beachten ist, dass der Name des Outbars und der des dazugehörigen Icons übereinstimmen. 3. Schritt:
Zuordnung der öffentlichen Ordner zu einem oder mehreren Outbar-Register
Eigenschaft im Ordner: Outbar=Name1,Name3 Der Ordner wird nur noch in dem spezifizierten Outbar-Register dargestellt - nicht mehr im Outbar-Register "Ordner".
(bei Client-Relevanz: Nur Classic-Client)
- outbarIconMapping DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00h Ersetzt die bisherigen PNG Standard Icons in den Outbars durch Material Design Icons.
- outbarlessViewMode DlcGlobalOptions Systemuser string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00h Entfernt die Outbarsicht aus Documents. Ist diese Eigenschaft aktiv, wird nur noch die Ordner- und Mappensicht angezeigt.
- outbarMinimizedEntries DlcGlobalOptions string Öffentlich [Outbar, Webclient5] Mögliche Werte: 0, 1, true, false Standardwert: false Gültigkeit: ab: 5.00f Minimiert die Outbar-Einträge einer ausgeklappten Outbar. Es wird nur noch das Icon der Einträge angezeigt und die Einträge werden horzizontal am Ende der Outbar dargestellt.
- OutbarWithFilingPlanIndex DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51 Möchte man Im Aktenplan die Aktenindizes ausblenden so setzt man dieses Property auf 0. Die Bezeichnungen die bei den Indizes stehen bleiben dabei erhalten.
(bei Client-Relevanz: Nur Classic-Client)
- overview DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00f Schalter für die Übersicht (Startseite, NaviBar, Weiterleitung in Workflows, Wurzel in Ordnerbäumen)
- overviewAction DlcGlobalOptions string Veröffentlicht [Webclient] Mögliche Werte: script:Skriptname url:Webadresse Gültigkeit: ab: 3.60f Mit diesen Property kann man die Übersichtsseite am Anfang verändern. Im Gegensatz zu overviewPage kann man hier jedoch ein Skript bzw. eine URL angeben. Beispiel für Werteingabe:
url:www.heise.de
(bei Client-Relevanz: Nur Classic-Client)
- overviewAlternateTarget DlcGlobalOptions enum Veröffentlicht [Suche, Inbox] Mögliche Werte: ExtendedSearch Inbox Gültigkeit: ab: 3.60h Über dieses Property kann man eine andere Startseite in DOCUMENTS einstellen. Dabei wird die vorhandene Übersichtsseite nicht mehr angezeigt und je nach eingegebenen Wert durch die Erweiterte Suche bzw. Eingang ersetzt.
(bei Client-Relevanz: Nur Classic-Client)
- overviewAlternateTargetURL DlcGlobalOptions string Veröffentlicht [Webclient] Mögliche Werte: Dateiname Gültigkeit: ab: 3.60h Die Übersichtsseite am Anfang kann mit diesen Property selbst verändert werden. Dafür kann man z.B. eine HTML Datei verwenden, jedoch sollte diese sich im Ordner \www\jsp befinden alternativ kann man auch den kompletten Dateipfad angeben. Es besteht zu dem Property overviewPage, das so ähnlich arbeitet, der Unterschied wann diese Properties bezogen werden. Werden beide Properties genutzt, so wird nur overviewAlternateTargetURL ausgeführt. Um fremde Seiten oder auch Scripte in der Übersicht zu starten kann man auch das Property overviewAction benutzen. (bei Client-Relevanz: Nur Classic-Client)
- overviewDashboard.dashboardHeight DlcGlobalOptions string Öffentlich [Webclient5] Standardwert: 2160 Gültigkeit: ab: 5.00b Maximale Höhe des Arbeitsbereichs in Pixeln
- overviewDashboard.dashboardMode DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: extended, multi Gültigkeit: ab: 5.00b Modus, in welchem das Dashboard betrieben wird Im Standardfall kann der Benutzer das Dashboard nicht ändern nur der
Dashboard-Admin (siehe overviewDashboard.dashboardAdmin) kann die
Standardvorlage bearbeiten. extended: Die Standardseite kann jeder Benutzer für sich selbst anpassen
multi: Jeder Benutzer kann für sich weitere Dashboard-Seiten hinzufügen und konfigurieren.
- overviewDashboard.dashboardWidth DlcGlobalOptions string Öffentlich [Webclient5] Standardwert: 3840 Gültigkeit: ab: 5.00b Maximale Breite des Arbeitsbereichs in Pixeln
- overViewDashboardGadgetConfig DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: [{GadgetConfig}]. Gültigkeit: ab: 5.00a ruft ein Gadget auf, wenn man auf Übersicht klickt. Angabe eines abweichenden Dashboards für den Link „Übersicht“ in Documents5 [{GadgetConfig}]. (bei Client-Relevanz: Nur Client 5)
- overviewPage DlcGlobalOptions Systemuser string Öffentlich [Webclient] Mögliche Werte: Datei Gültigkeit: ab: 3.60 Die Übersichtsseite am Anfang kann mit diesen Property selbst verändert werden. Dafür kann man z.B. eine HTML Datei verwenden, jedoch sollte diese sich im Ordner \www\jsp befindet alternativ kann man auch den Dateipfad angeben.
(bei Client-Relevanz: Nur Classic-Client)
- pdfButtonNativeBrowserViewerOpenDocument DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00e HF2 Läd das PDF-Dokument runter, anstatt es anzuzeigen.
- pdfjsAllowAutoSearch DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Schaltet die automatische Suche von Feldwerten im Pdfjs Viewer global an. Dies kann durch einen Button im Pdfjs Viewer vom Benutzer aktiviert/deaktiviert werden. Das Feature muss für jedes Feld über die Property 'pdfjsAutoSearch' oder für alle Felder über die Property 'pdfjsAutoSearchAllFields' zusätzlich aktiviert werden.
Die automatische Suche kann nur im DoubleView verwendet werden.
- pdfjsAutoSearchAllFields DlcGlobalOptions DlcFile string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00f Aktiviert die automatische Suche von Feldwerten im Pdfjs für alle Felder. Es muss zusätzlich die globale Property pdfjsAllowAutoSearch aktiviert sein.
Bei einem Klick auf dem Feld wird der aktuelle Feldwert als Suche an den PDF.js übergeben und sofern das PDF durchsuchbar ist markiert. Über die Feldproperty 'pdfjsAutoSearch' können einzelne Felder wieder deaktiviert werden.
- pdfjsInstantAutoSearch DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Aktiviert die direkte automatische Suche von Feldwerten im Pdfjs. Wenn das Feature aktiviert ist ('pdfjsAllowAutoSearch und entweder 'pdfjsAutoSearchAllFields' oder 'pdfjsAutoSearch') wird die Suche direkt bei der Eingabe in das Feld durchgeführt. Die Suche wird dabei erst ab dem dritten Zeichen gestartet.
- pdfjsPrintAnnotations DlcGlobalOptions Systemuser enum Öffentlich [pdf-Druck] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00g Aktiviert einen Schalter im PDFjs Viewer, über den das Drucken von Annotationen für den jeweiligen Nutzer aktiviert werden kann.
- pdfjsViewerButtonDownload DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00d Über das Property kann der Download-Button im PDF.js Viewer deaktiviert werden.
- pdfjsViewerButtonPrint DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00d Über das Property kann der Drucken-Button im PDF.js Viewer deaktiviert werden.
- pdfjsViewerConfig DlcFile DlcGlobalOptions text Öffentlich [Webclient5] Gültigkeit: ab: 5.00g Über die Eigenschaft kann ein JSON Objekt zur Konfiguration des PDFjs Viewers angegeben werden. Für den genauen Aufbau des Objekts siehe PDFjs HowTo.
- pdfjsViewerHideToolbar DlcGlobalOptions FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Ermöglicht es die Toolbar im PDF.js Viewer auszublenden, sodass diese nur angezeigt wird, wenn sich der Mauszeiger am oberen Rand des PDFs befindet. Als Feature: <Feature name="PdfjsViewerHideToolbar" active="true"/>
- pdfjsViewerSkin DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: lightgray Gültigkeit: ab: 5.00f Ändert den Skin des PDF.js Viewers.
- PhraseWildcardMode DlcGlobalOptions enum Öffentlich [Suche] Mögliche Werte: 0 1 2 3 Standardwert: 2 Gültigkeit: ab: 4.00e Diese Eigenschaft steuert die Interpretation von Sternchen als Wilcards, wenn sie in einem Suchfeld unmittelbar vor oder hinter einer Phrase (Wörter zwischen "" oder '') eingegeben wurden.
Die Eigenschaft hat keinen Effekt bei Sternchen innerhalb einer Phrase. Wert 0: Wildcards neben Phrasen werden nicht explizit unterstützt. Das Verhalten bleibt wie in DOCUMENTS 4.0d. Belspielweise wird die Eingabe [*"ABC DEF"] mit Suchmethode 2 folgendermaßen verarbeitet: das Feld enthält irgendwo die Zeichenfolge ["ABC] und es beginnt mit der Zeichenfolge [DEF"] Die eckigen Klammern in diesem Beispiel markieren die Termgrenzen und sind nicht Teil der Eingabe. Wert 1: Wildcards neben einer Phrase werden schlicht ignoriert. Wert 2: Wildcards neben einer Phrase werden beim Primärindex ausgewertet, aber beim Volltextindex ignoriert. Wert 3: Wildcards neben einer Phrase werden generell augewertet. Bei aktiven Vorgängen wird allerdings noch die Suchmethodenerweiterung (3 bis 5) berücksichtigt.
- plantUMLServer DlcGlobalOptions string Öffentlich [DOCUMENTS Manager] Mögliche Werte: https://uml.otris.de/plantuml Gültigkeit: ab: 5.00f Um die UML-Kacheln nutzen zu können ist ein PlantUML-Server erforderlich. Dieser kann entweder OnPremise installiert werden oder es kann der von der otris software AG öffentlich zu Verfügung gestellte Server unter https://uml.otris.de/plantuml genutzt werden. Um den Server im Documents Manager zu nutzen muss in den Documents-Einstellungen das Property plantUMLServer auf die URL zu dem jeweiligen Server gesetzt werden.
- positionAnnotationOnClick DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00c Die Position von Notizen, Markierungen und Stempeln im PDF-Viewer kann über ein Klick auf das PDF bestimmt werden.
(bei Client-Relevanz: Nur Client 5)
- PostfetchShowCount DlcGlobalOptions enum Veröffentlicht [Suche] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60 Benutzt man das Property Postfetch, so werden nur die Treffer der aktuellen Seite geladen. Es wird jedoch trotzdem die Gesamtzahl aller Treffer angezeigt. Um dies zu unterdrücken kann man dieses Property auf false setzen. Dieses Property bringt dadurch eine Verbesserung der Performance und sollte nur in Verbindung mit dem Property Postfetch benutzt werden. Zu beachten ist, dass dies nur bei dynamischen Ordnern funktioniert.
- precisionNumeric DlcGlobalOptions string Öffentlich Mögliche Werte: Ganzzahl Standardwert: -1 Gültigkeit: ab: Legt fest mit wieviel Nachkommastellen Zahlen in Mappen- oder Gentablefeldern gespeichert werden. Mit -1 wird festgelegt, das alle Zahlen so gespeichert werden wie sie angezeigt werden.
- PreviewCompleteDocumentList DlcGlobalOptions DlcFile enum Öffentlich [Webclient, Blob] Mögliche Werte: 0 1 Gültigkeit: ab: 4.00c HF1 Wurde am Mappentypen definiert, dass eine Vorschau (Thumbnail) der Anlagen einer Mappe auf dem Mappendeckel angezeigt werden sollen, wurden bisher nur die Anlagen des ersten nicht leeren Dokumentenregisters berücksichtigt. Ab 4.0c HF1 werden nun alle Anlagen berücksichtigt. Mit der Eigenschaft PreviewCompleteDocumentList=0 kann auf das alte Verhalten zurück geschaltet werden.
(bei Client-Relevanz: Nein (Server Feature))
- principalSwitchIcon DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: Entypo,Ionicon oder Material Design Icon Standardwert: - Gültigkeit: ab: 5.00f Mulitmandanten-Switch: App-Icon dass angezeigt wird, wenn am Mandanten die Eigenschaft trustedSwitchPrincipals definiert ist.
- principalSwitchName DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: String Standardwert: Wert der Eigenschaft documentsLoginHeader oder Mandantenname Gültigkeit: ab: 5.00f Mulitmandanten-Switch: Name der in der Liste der Apps angezeigt wird wenn allowedSwitchPrincipals als Eigenschaft am Mandanten definiert ist.
- PrintPdfOnlyAttachments DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: 1 0 Gültigkeit: ab: 4.00 Die Mappen Aktion pdf-Druck (nur Anlagen) wurde standardmäßig entfernt. Mit dem Property kann diese wieder aktiviert werden
(bei Client-Relevanz: Classic-Client und Client 5)
- privateFolderTreeIcons DlcGlobalOptions string Öffentlich [Webclient5, Ordner] Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00f Über die Eigenschaft können Standardicons für den Ordnerbaum aktiviert werden.
Die Icons können über das Feature PrivateFolderTreeIcons angepasst werden.
https://otris.software/documents/manuals/books/feature-manager/feature-list.html#details-zum-feature-privatefoldertreeicons
- privateSearchesTree DlcGlobalOptions string Öffentlich [Webclient5, Suche] Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00e Mit der globalen Eigenschaft "privateSearchesTree" werden sämtliche im Dialog der Erweiterten Suche gespeicherten Suchen als eigener Eintrag im privaten Ordnerbaum hinterlegt ("Gespeicherte Suchen") und können von dort aus direkt (ohne Zwischenschritt mit Dialog) ausgeführt werden.
- QDZAutoCreateRegister DlcFile DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00c Quickdrop-Zone: Wenn eine Mappe kein Dokumentenregister hat, konnte über die QDZ der Mappe im Bearbeitungsmodus eine Anlage hinzugefügt werden. Dabei wurde automatisch ein Standard-Dokumentenregister erzeugt. Mit der Eigenschaft am Mappentypen oder Documents-Einstellungen QDZAutoCreateRegister=0 kann dies nun unterbunden werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- quickDropZoneFileTypeScript DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: Skriptname Gültigkeit: ab: 5.00f Das angegebene Skript wird aufgerufen, wenn eine Mappe mit Hilfe der QuickDropZone erzeugt wird. Rückgabewert des Skriptes ist ein String, welcher dem Namen des anzulegenden Mappentypen entsprechen muss. Dieses Property steuert auch bei einem Schnellupload aus der App den Mappentypen.
- quickDropZoneGadgetConfig DlcGlobalOptions text Öffentlich Mögliche Werte: dropDefault, Gadget-Config Gültigkeit: ab: 5.00f HF1 Führt nach dem Hochladen von Dokumenten über die QuickDropzone das konfigurierte Gadget aus.
Anstatt einer Gadget-Konfiguration kann auch die Zeichenkette "dropDefault" gesetzt werden. In diesem Fall wird das Standard-Drop-Upload Gadget verwendet.
- quickDropZoneInEditMode DlcGlobalOptions string Öffentlich [Blob, Webclient5] Mögliche Werte: 1, 0 Standardwert: 1 Gültigkeit: ab: 5.00c HF1 Beim Drag & Drop eines Dokumentes in der QuickDropZone wird einer geöffneten Mappe im Bearbeitungsmodus das Dokument hinzugefügt. Mit dieser Eigenschaft wird der Benutzer aufgefordert die Mappe zu speichern oder die Bearbeitung abzubrechen.
Dies dient dazu die QuickDropZone nur noch zum Anlegen von Mappen mit diesem Dokument zu verwenden.
(bei Client-Relevanz: Nur Client 5)
- QuickDropZone_HTML5 DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: true false Standardwert: 4.0a HF2 : false später: true Gültigkeit: ab: 4.00b Ermöglicht im Classic-Client die Aktivierung der HTML5 QuickDropZone für sämtliche Browser mit Ausnahme von IE. Für Client 5 siehe Property "dropzoneTypeIE" (mit abweichender Bedeutung bzgl. IE!).
(bei Client-Relevanz: Nur Classic-Client)
- qvGadgetAutoLogout DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, 1 , false, 0 Standardwert: false Gültigkeit: ab: 5.00e Bewirkt dass man ausgeloggt wird, wenn man ein QuickViewGadget-Fenster schließt.
- qvKioskViewMode DlcGlobalOptions enum Veröffentlicht [Webclient] Mögliche Werte: true false Gültigkeit: ab: 3.51 Quick Views werden im Kiosk Mode dargestellt. Damit ist gemeint, dass der linke Framebereich (Ordnerbaum, Suchleiste etc) ausgeblendet ist und ausschließlich die Mappe angezeigt wird.
- ReadButtonNavigation Systemuser DlcGlobalOptions string Öffentlich [Workflow, Webclient] Mögliche Werte: StayFile, Overview, NextFile Standardwert: StayFile Gültigkeit: ab: 4.00c HF2 Standardmäßig bleibt der WebClient auf der Mappe stehen, wenn der "Gelesen" Knopf gedrückt worden ist. Über die Eigenschaft ReadButtonNavigation kann man dieses Verhalten global oder benutzerspezifisch anpassen.
Der Wert "Overview" läßt den WebClient in die Übesicht navigieren. Der Wert "NextFile" navigiert zur nächsten Mappe in dem aktuellen Ordner.
(bei Client-Relevanz: Classic-Client und Client 5)
- ReceiveFieldsB64 DlcArchiveServer DlcGlobalOptions string Öffentlich [EEx, EEi] Mögliche Werte: 0, 1, false, true Standardwert: keiner, siehe Beschreibung Gültigkeit: ab: 4.00c Wenn diese Eigenschaft auf 1 oder true gesetzt ist, fordert Documents den XML-Server dazu auf, Feldinhalte vorzugsweise in Base64-Codierung zu senden. Der Zweck besteht darin, das Problem zu umgehen, dass jeder XML-Parser Zeilenumbrüche stets in den Unix-Stil (LF) umwandelt. Wenn die Eigenschaft gar nicht oder auf einen ungültigen Wert gesetzt ist, aktiviert DOCUMENTS sie ausschließlich für die Volltexttreffermarkierung in EE.x von selbst. Die Umwandlung der Zeilenumbrüche ist in folgenden Fällen ein Problem.
1. Die Markierfunktion für Volltexttreffer in EE.x ist eingeschaltet. Hierbei können die Markierungen durch das Enfternen der Wagenrücklaufzeichen (CR) verrutschen. DOCUMENTS versucht dann eine Korrektur, doch das ist nicht in allen Anwendungsfällen möglich.
2. Eine andere Archivanwendung funktioniert nicht richtig, wenn die CR-Zeichen infolge einer Archivmappenbearbeitung in DOCUMENTS entfernt werden. Hierbei ist auch die Eigenschaft "SendFieldsB64" zu beachten.
3. (TODO: austesten) In EE.x wurden von einer anderen Archivanwendung kurze, mehrzeilige Texte mit Windows-Zeilenumbruch in einem Primärindexfeld abgelegt. Ein dynamischer Ordner oder ein Script in DOCUMENTS filtert explizit auf CR/LF Zeichenfolgen in diesem Feld. Die Filter funktionieren dann möglicherweise nach einer Archivmappenbearbeitung nicht mehr.
- ReferenceFileClearDefaultValuesOnDeselect DlcField DlcFile DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: 1 0 Gültigkeit: ab: 4.00a Eigenschaft bewirkt, dass wenn beim Auswahldialog für Referenzen "Eintrag löschen" ausgewählt wird, vorher gesetzte Defaultwerte der Referenz auch geleert werden. Beispiel:
In einem Referenzfeld wird eingetragen, dass Felder der referenzierenden Mappe (hier: car_id) mit Feldwerten aus der referenzierten Mappe (hier: file_id) gefüllt werden. Das Property sorgt dafür, dass der Eintrag in "car_id" gelöscht wird. Referenzfeld "car" im Mappentyp "Driver".
Aufzählungswerte:
car.file_id
%title%
car_id=%file_id%
- refreshInvoiceFrame DlcGlobalOptions enum Veröffentlicht Mögliche Werte: false true Gültigkeit: ab: 3.51 Wird ein Register, bei dem das Invoice Plugin aktiviert ist, neugeladen so wird im im Regelfall auch das Invoice Fenster neu geladen. Damit dies jedoch nicht geschieht setzt man dieses Property auf false. Dies trägt zur Verbesserung der Performance bei.
- refreshMonitorFrame DlcGlobalOptions enum Veröffentlicht Mögliche Werte: true false Gültigkeit: ab: 3.60c Verknüpfungsregister im Monitorframe werden beim Registerwechsel aus Performance-Gründen nicht mehr neu geladen. Dieses Verhalten kann mit der Documents Eigenschaft "refreshMonitorFrame=true" wieder hergestellt werden.
- registerBarDropzoneTop DlcFile DlcGlobalOptions string Öffentlich [Webclient5, Blob] Mögliche Werte: false, 0, true, 1 Standardwert: false Gültigkeit: ab: 5.00e Render die dropZone in der FileRegisterbar oberhalb der Margingadgets.
- ReleaseVersionCheckIn DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 1 0 Gültigkeit: ab: 3.60f Mit diesen Property lässt sich das Standardverhalten der Checkbox "Version freigeben" im Check-In Dialog festlegen. Standardmäßig ist die Checkbox nicht selektiert
- renderCompactListKeys DlcGlobalOptions DlcFolder string Öffentlich Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00d Zeigt beim Rendern der schmalen Ordner-/Trefferlistenansicht die Keys der Datenspalten mit an.
- renderIconColumn DlcGlobalOptions string Öffentlich [Blob, Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00c Schalter für das Aktivieren der Icons in der Ordner-, Treffer- und Dokumentenliste. Bei Dokumentenliste werden Piktogramme entsprechend der Dateiendung dargestellt.
(bei Client-Relevanz: Nur Client 5)
- renderIconColumnArchive DlcGlobalOptions string Öffentlich [EBIS Store, EEi, EAS, EEx, Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00c Schalter für das Anzeigen der Archiv-Icons auf der Ordner- und Trefferliste wenn die jeweilige Zeile vom Archiv kommen.
(bei Client-Relevanz: Nur Client 5)
- RescanArchiveHitsOnExport DlcGlobalOptions enum Öffentlich [EEx, Suche] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00a Wenn DOCUMENTS in einer EE.x-Trefferliste Feldwerte wegen Überlänge
gekürzt hat und anschließend ein XML-oder CSV-Export der Liste gestartet
wird, liest es die Archivtreffer seit Version 4.0a erneut ein, um alle Werte in voller
Länge zu erhalten. Wenn noch weitere Archivserver beteiligt sind,
wird hierbei allerdings die ganze Suche wiederholt. Dies kann zu kleineren Abweichungen
der exportierten Trefferliste von der vorigen Anzeige führen.
Es werden keine Treffer neu geladen, wenn die Feldwerte schon archivseitig
gekürzt worden sind. Sollte diese Erweiterung einmal Probleme verursachen, lässt sie sich durch das Setzen
dieser Eigenschaft auf 0 abschalten.
- ResetPasswordLinkLifetime DlcGlobalOptions string Öffentlich [Webclient5, Login/Logout/LDAP] Standardwert: 24 Gültigkeit: ab: 5.00e Die Eigenschaft "allowResetPassword=true" aktiviert einen Passwort vergessen - Link in der Anmeldemaske. Über den Link kann sich der Benutzer eine E-Mail mit Rücksetzungs-URL zusenden lassen. Die Funktionalität ist nur vorhanden, wenn DOCUMENTS das Kennwortmanagement durchführt (also nicht bei LDAP-Anbindung oder EASYWARE Auth.)
Mit der Documents-Einstellungen Eigenschaft ResetPasswordLinkLifetime=n (n in Stunden) kann die Gültigkeitsdauer der Rücksetzungs-URL definiert werden (Default: 24h)
- RetestFilterAfterEdit DlcGlobalOptions enum Öffentlich [Ordner, Suche] Mögliche Werte: 0 1 false true Standardwert: 0 (nun 1 seit DOCUMENTS 5.0c HF1) Gültigkeit: ab: 5.00a Ermöglicht das unmittelbare Entfernen von geänderten Mappen aus dem letzten Suchergebnis des Webclients, wenn sie aufgrund der Änderung dem Filterausdruck nicht mehr entsprechen. Das gilt auch für dynamische Ordner.
Mappenänderungen von anderen Benutzern bleiben hierbei unberücksichtigt. nur der Inhalt nach eigener Bearbeitung zählt.
Das direkte Entfernen funktioniert nicht bei Archivmappen. Der Classic Client unterstützt es gar nicht. *verfügbar ab Build #2022
(bei Client-Relevanz: Nur Client 5)
- scanDocumentName DlcGlobalOptions string Veröffentlicht [Blob] Mögliche Werte: Name des gescannten Dokuments Gültigkeit: ab: 3.51 Das eingescannte Dokument wird automatisch unter dem, als Wert angegebenen Namen gespeichert. Man kann es auch nur für bestimmte Mappentypen setzen.
- scanDocumentRenaming DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: false true Gültigkeit: ab: 3.51 Ein Fenster zur Eingabe des Namens für das eingescannte Dokument wird geöffnet. Bei der Aktivierung des Property scanDocumentName wird der vordefinierte Name in der Eingabezeile angezeigt.
- ScriptCategories PartnerNet DlcGlobalOptions enum Öffentlich [Ordner, Sortierung] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 4.00 Mit dieser Eigenschaft werden im Documents Manager die Scripting Kategorien eingeschaltet. Dies ermöglicht es Kategorien zu erstellen, in denen man bereits erstellte Scripte einsortieren kann.
(bei Client-Relevanz: Nein (Server Feature))
- ScriptExtensionsCallbackScripts DlcGlobalOptions text Öffentlich [Scripting, Webclient5] Mögliche Werte: Kommaseparierte Liste von Skriptnamen Gültigkeit: ab: 5.00e HF2 Die angegebenen Skripte können "Callback-Implementierungen" der ScriptExtensions enthalten.
Eine detailierte Beschreibung befindet sich in der ScriptExtensions API https://otris.software/documents/api/scriptextensions/tutorial-ScriptExtensionsCallbacks.html
- scrollToLastPosition DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 4.00b Es kann jetzt bei vielen Aktionen auf einenm Feldregister zurück an die
Scrollposition gesprungen werden. Dabei wird allerdings nicht mehr der Focus
ins erste Element gesetzt. Gleiches gilt für Speichern und Abbrechen. Dazu
muss die globale Eigenschaft "scrollToLastPosition" auf "true" gesetzt werden
(bei Client-Relevanz: Nur Classic-Client)
- searchableReferenceFields DlcGlobalOptions string Veröffentlicht [Suche, Sortierung] Standardwert: 1 Gültigkeit: ab: 3.51 Die Referenzfelder in Documents besitzen einen Key und einen Anzeigewert. Beide Werte werden gemeinsam in einem Datenbankfeld gespeichert. Daher wird bei datenbankseitiger Sortierung nach dem Key sortiert. Da dies in einigen Fällen nicht erwünscht bzw. nicht zweckdienlich ist, erlaubt dieses Property, dass zuerst der Anzeigewert eingetragen wird und somit danach sortiert werden kann. Mit der Wartungsoperation "makeReferenceFieldsSearchable" können bestehende Mappen konvertiert werden.
- SearchIndexSelectMode DlcGlobalOptions enum Veröffentlicht [EEi, EEx, Suche] Mögliche Werte: 0 1 2 Gültigkeit: ab: 3.60h Für Felder, die auf zweierlei Weise indiziert sind, kann global der bevorzugte Index konfiguriert werden per Documents-Eigenschaft "SearchIndexSelectMode". Mögliche Werte: 0 = Volltext bevorzugen (wie 3.60d und älter)
1 = Primärindex bei eher numerischen Typen bevorzugen, sonst den Volltextindex (neuer Standardwert)
2 = Primärindex bevorzugen Das gewünschte Steuerzeichen, um in Textsuchfeldern auf den jeweils anderen Index umzuschalten, kann man unmittelbar hinter die Zahl schreiben. Das Standardzeichen ist '='. Das gewählte Zeichen wird als erstes Zeichen in einem Suchwertausdruck herausgefiltert, egal ob die Recherche in Documents, EE.x oder EE.i stattfindet.
- SearchScriptMultiEnumVal DlcGlobalOptions enum Öffentlich [Suche] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00d Einstellung 0::
Wenn von der Weboberfläche ausgehend nach einem Aufzählungsfeld gefiltert wird, wird der Standardsuchoperator '~' intern wie '=' behandelt, damit potenzielle Operatorzeichen im technischen Aufzählungswert keine Probleme bereiten können.
Das hat zur Konseqenz, dass auch ein OnSearchScript in diesem Kontext keine Oder-Verknüpfung von mehreren Werten ausführen kann. Einstellung 1:
Wenn ein OnSearchScript den Suchbegriff in einem Aufzählungsfeld überschreibt, sind Oder-Verknüpfungen mit '|' immer möglich. Falls in technischen Aufzählungswerten kritische Zeichen (Leerzeichen, '&','|','!'") benutzt wurden, kann diese Einstellung zu unerwartetem Verhalten bei Webrecherchen führen.
- sendBlobAsPdf DlcGlobalOptions DlcFile string Öffentlich [Blob, Email, pdf-Druck] Mögliche Werte: 0 : Originalformat versenden 1 : pdf versenden, falls konfiguriert Gültigkeit: ab: 4.00d Mit der Eigenschaft sendBlobAsPdf=0 kann man verhindern, dass die Anhänge einer als Email gesendeten Mappe nach PDF konvertiert werden, falls die Eigenschaft showBlobAsPdf eingeschaltet ist.
(bei Client-Relevanz: Classic-Client und Client 5)
- sendEmailAsHTML DlcFile DlcGlobalOptions string Öffentlich Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00e Blendet ein Html-Feld zum Bearbeiten des Email Inhalts im "Mappe als E-Mail versenden"-Dialog ein.
- SendFieldsB64 DlcArchiveServer DlcGlobalOptions string Öffentlich [EEi, EEx] Mögliche Werte: 0, 1, 2 bzw "false", "true", "ifCRFound" Standardwert: 0 Gültigkeit: ab: Für die Archivierung in EE.i und EE.x kann DOCUMENTS mit dieser Eigenschaft angewiesen werden, manche oder sogar alle Feldinhalte mit einer Base64-Codierung zu übertragen.
Das ist minimal langsamer. Es erschwert zudem im Falle einer Problemanalyse die Auswertung von Anfrageprotokollen des XML-Servers. Es verhindert allerdings, dass Wagenrücklaufzeichen im XML-Server vom Parser herausgefiltert werden. Mit dem Wert 0 oder "false" werden nur die Feldwerte umcodiert, wo es technisch notwendig ist.
Mit dem Wert 1 oder "true" werden alle Feldwerte umcodiert.
Mit dem Wert 2 (alias "ifCRfound") verhält es sich wie bei "0", jedoch werden zusätzlich alle Feldwerte mit einem Wagenrücklaufzeichen (CR) umcodiert. siehe auch: Eigenschaft "ReceiveFieldsB64"
- sendFileAsEMailExit DlcGlobalOptions string Veröffentlicht [Email] Mögliche Werte: Javascript Funktion Gültigkeit: ab: 3.60f Mit der Eigenschaft "sendFileAsEMailExit" kann eine Javascript-Funktion (ohne "()") angegeben werden, die mit einem Button hinter dem Empfänger-Feld beim "Mappe als EMail versenden"- Dialog aufgerufen wird. So können zuvor definierte Exits dort aufgerufen werden, um einen Empfänger auswählen zu können.
(bei Client-Relevanz: Nur Classic-Client)
- separatorDesign DlcGlobalOptions FeatureManager DlcField string Öffentlich Mögliche Werte: default, lean, small, headline Standardwert: default, bei Einstellung des Design20: lean Gültigkeit: ab: 5.00f HF1 Steuert das Design der horizontalen Trenner. Die Einstellung "default" entspricht dem normalen Design. Die Einstellung "lean" dem Design20. "small" ist eine kleinere Version des "lean"-Design. Neu ab 6.2 ist "headline", eine größere Version des Sepatators. Einstellung als Feature:
<Feature name="SeparatorDesign" value="lean" /> Die Unterstützung am Feld wurde in der Documents-Version 5.0i hinzugefügt.
- shareFileButton DlcGlobalOptions FeatureManager DlcFile string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00h Fügt einen Teilen-Button dem Mappentitel hinzu. Wird auf diesem geklickt wird ein Quickviewlink zur aktuellen Mappe erstellt und in den Zwischenspeicher geschrieben. Der Link beinhaltet außerdem das aktuelle Register und, sofern eines ausgewählt ist, das aktuell angezeigte Dokument.
- shortcutMapNumpadToDigitnumbers DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i HF3 Durch Aktivschaltung verhalten sich die Numpad-Ziffer bei aktiver Numlock-Taste gleich den Ziffer-Tasten im Kontext von Tastaturkürzeln. Dadurch lässt sich zum Beispiel der Registerwechsel per Index über das ALT + Numpad-Ziffer durchführen.
Achtung bei Aktivschaltung kann es zu Problemen bei der Eingabe mittels ALT + ACII-Codes kommen (z.B. ALT + NUM3 für ♥)
- showBlobAsPdf DlcGlobalOptions DlcFile string Veröffentlicht [Blob] Mögliche Werte: 0 : keine Konvertierung 1 : Konvertierung aller Blobs Angabe einzelner Extensionen : Konvertierung der Blobs mit den angegebenen Extensionen, z.B. tif,doc,xls Gültigkeit: ab: 3.60b Anhänge, die nach pdf konvertiert werden können (partnernet.ini pdf-Druck Konverter), werden mit diesen Property im Web als Pdf angezeigt unabhängig vom tatsächlichen Dateityp.
(bei Client-Relevanz: Classic-Client und Client 5)
- showBlobAsPdfInDocEditMode DlcFile DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60i Voraussetzung:
Das Property showBlobAsPdfInDocEditMode ist nur einsetzbar, wenn auch das Property showBlobAsPdf=1 gesetzt ist. Wenn showBlobAsPdf=1 gesetzt ist, werden die Anlagen an einer Mappe als pdf-Dokument dargestellt, soweit in der partnernet.ini / documents.ini Konverter für die pdf-Konvertierung definiert sind. Die Anlagen werden auch als pdf-Datei dargestellt, wenn sich die Mappe im Bearbeitungsmodus befindet und ein Dokument bearbeitet wird.
Wenn das Property showBlobAsPdfInDocEditMode=0 definiert ist, werden im Bearbeitungsmodus die Anlagen immer noch als pdf dargestellt, wenn aber eine Anlage beabeitet wird, wird diese in ihrem eigentlich Dateiformat dargestellt. Das Property kann auch global bei Documents-Einstellungen definiert werden
(bei Client-Relevanz: Classic-Client und Client 5)
- showDetailsExclusive DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00d Wenn "fileDetailsShowColumn" eingeschaltet ist, wird immer höchsten eine Detailzeile aufgeklappt. Schon geöffnet Detailzeilen werden wieder geschlossen.
- showEmptyMandatoryOption DlcGlobalOptions enum Öffentlich [Webclient, Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 4.00 Mit der globalen Eigenschaft "showEmptyMandatoryOption" mit Wert "true" kann im Edit-Mode bei Muss-Aufzählungsfeldern, sofern kein (Default-) Wert angegeben ist, ein zusätzlicher leerer Eintrag angezeigt und ausgewählt werden. Sobald ein Nicht-Leereintrag gespeichert wurde, wird der Leereintrag aus der Klappliste nicht mehr angezeigt.
(bei Client-Relevanz: Classic-Client und Client 5)
- showErrorsAtFields DlcGlobalOptions enum Öffentlich Mögliche Werte: false true Standardwert: false Gültigkeit: ab: 4.00c Es können Standard-Fehlermeldungen am Feld sichtbar gemacht werden. Dazu muss die globale Eigenschaft "showErrorsAtFields" auf den Wert "true" gesetzt werden. Textbasierte Felder und Selectmenus bekommen dann eine rote Hintergrundfarbe und erhalten die Fehlermeldung aus der Benachrichtigung als Tooltip. Ist die globale Eigenschaft "showErrorsAtFields" gesetzt, so kann man im "Beim Speichern"-Skript vorangestellt an die Fehlermeldung eine JSON-Struktur zurückgeben, mit der man individuelle Fehlertexte an Felder heften kann. Diese Felder werden in diesem Fall automatisch rot markiert. Der Fehlertext muss dabei die folgende Form annehmen: context.errorMessage = "error : { <FeldId 01> : <FehlerText 01>, <FeldId 02>: <FehlerText 02>, ... } < allgemeiner FehlerText>"; Dabei wird der <allgemeine FehlerText> als Benachrichtigung in einem Popup angezeigt.
Den Wert einer <FeldId> ermittelt man dabei mit: var f = context.file;
var myId = f.getFieldAttribute("Feld1","id");
(bei Client-Relevanz: Classic-Client und Client 5)
- showFileImage DlcFile DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00f Erlaubt das Ausblenden des Mappen-Icons links oben in der Mappenansicht.
- ShowHitTemplate DlcGlobalOptions enum Veröffentlicht [EEi, EEx, Suche, Webclient] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60 Nach einer archivübergreifenden Suche ist es üblicherweise nicht ersichtlich, welcher Treffer aus welchem Archiv stammt. Durch Einrichtung der folgenden neuen Eigenschaft kann eine zusätzliche Tabellenspalte in die Trefferliste eingeblendet werden, die die Herkunft der jeweiligen Treffer in vollständiger XMLServer-Schreibweise (also inkl. Lagerort!) darstellt. Das Ganze funktioniert auch mit Mappentypen, in diesem Fall wird am Treffer dann der jeweils zugrundeliegende Mappentyp ausgewiesen.
- showMonitorStrict DlcGlobalOptions DlcFile DlcRegister string Öffentlich Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00d HF2 Mit dieser Property wird der Monitor nur auf Registern angezeigt, bei denen "Monitor anzeigen" angehakt ist.
Diese Property funktioniert nur, wenn unter Monitor "Auf Register darstellen" nicht gesetzt ist.
(bei Client-Relevanz: Nein (Server Feature))
- showScriptsInMonitor DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60b Definiert, dass die Script-Aktionen nicht im Monitor der Mappenansicht dargestellt werden. Dies kann hier global für alle Mappentypen eingestellt werden. Darüber hinaus kann es am Mappentypen ebenfalls definiert werden.
- showStateIcon DlcGlobalOptions enum Veröffentlicht [Webclient] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.60f Die Anzeige der Status-Icons kann mit dieser Eigenschaft deaktiviert werden. Das Status-Icon ist das Icon in den Listenansichten (Ordner/Suche) vor jeder Mappe.
- showUploadProgress DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: [true, false] Standardwert: true Gültigkeit: ab: 5.00a Zeigt einen Ladebalken beim Hochladen von Dokumenten per Applet. (bei Client-Relevanz: Nur Client 5)
- sidebarFixed DlcGlobalOptions string Öffentlich Mögliche Werte: true, false, Ganzzahl Standardwert: false Gültigkeit: ab: 5.00f Fixiert den linken Menubar-Bereich. Wenn ein ganzzahliger Wert gesetzt wird, wird dieser als feste Breite übernommen.
- SignalJobForLockedFiles DlcGlobalOptions enum Öffentlich [Workflow] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00d Mittels der Eigenschaft SignalJobForLockedFiles=1 kann der Signaljob auch Mappen weiterleiten, die in Bearbeitung sind (d.h. eine Arbeitskopie existiert) .
- singleCreateFileDialog DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00f Zeigt den Mappe erstellen Dialog auch dann an, wenn nur ein Mappentyp vorhanden ist.
- SingleEditMode DlcGlobalOptions enum Veröffentlicht [EEi, EEx] Mögliche Werte: 1 2 3 4 Gültigkeit: ab: 3.60g Optionen zum Bearbeiten und Reaktivieren von Archivmappen. Momentan kann jeder berechtigte Benutzer eine Archivmappe in Bearbeitung setzen bzw reaktivieren. Ist es aber gewünscht, dass zu einem Zeitpunkt nur eine Person die Mappe bearbeiten kann bzw. reaktivieren kann, kann dies über das folgende Property gesetzt werden: Documents-Einstellungen oder Schema: SingleEditMode = 1-4
1: nur durch eine Person zu einem Zeitpunkt bearbeitbar
2: nur durch eine Person zu einem Zeitpunkt reaktivierbar
3: nur durch eine Person zu einem Zeitpunkt bearbeitbar und durch eine Person reaktivierbar
4: nur durch eine Person zu einem Zeitpunkt bearbeitbar bzw. reaktivierbar
- skin DlcGlobalOptions string Öffentlich [Webclient] Mögliche Werte: blue Standardwert: default Gültigkeit: ab: 4.00 Ab DOCUMENTS 4 gibt es die Möglichkeit eigene Skins für den Webclient zu erstellen. Damit diese jedoch auch verwendet werden muss in den globalen Einstellungen das Property gesetzt werden. Als Wert wird dann der gewählte Name genommen. Standardmäßig wird der blaue Skin aus ELC 3.60 mitgeliefert.
(bei Client-Relevanz: Nur Classic-Client)
- skinBase DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: Angabe einer Stylesheet - Datei (Endung .less) Mögliche Werte sind: base, easy, lightgray Standardwert: base Gültigkeit: ab: 5.00a legt das Aussehen des Webclients fest (schaltet beispielsweise den easy – skin ein)
(bei Client-Relevanz: Nur Client 5)
- skinSignalColor DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: documents, contract, compliance, corporate, privacy, easy, + alle css-Formatangaben: Hexadezimalcodierung + Farbnamen Standardwert: documents Gültigkeit: ab: 5.00a stellt eine Highlight Farbe in Documents bereit, mit der der jeweils aktive Bereich im Webclient hervorgehoben wird, beeinflusst durch das Firmendesign auch alle anderen Bereiche. (bei Client-Relevanz: Nur Client 5)
- SMSortByLabel DlcGlobalOptions enum Veröffentlicht [Suche] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60h Die Klappliste mit den gespeicherten Suchmasken in der erweiterten Suche können mit dieser Eigenschaft nach der Bezeichnung sortiert werden (s.a. HLSortByLabel). Standardmäßig wird nach dem techn Namen sortiert.
- SoapFileWithDummyFields DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 Gültigkeit: ab: 3.60h Möchte man über einen SOAP Client auf eine Mappe zugreifen, auf dem der Nutzer nur beschränkten Leserechte hat, z.B. darf er bestimmte Felder nicht sehen, so wird das Feld gar nicht dargestellt. Nutzt man das Property, so wird stattdessen ein Feld mit dem Namen und dem Inhalt "n/a" angezeigt. Dies kann nützlich sein, wenn man nicht alle Rechte der Benutzer genau kennt.
- SoapRepColBhv DlcGlobalOptions enum Öffentlich [SOAP] Mögliche Werte: 1 2 3 Standardwert: 2 Gültigkeit: ab: 4.00b Ändert Verhalten der Spaltenausgabe bei den Suchfunktionen für SOAP (report2/3), wenn eine gewünschte Trefferspalte nicht verfügbar ist.
1 = Die Spalte wird als Dummy-Spalte mit leeren Werten ausgegeben.
2 = Die Spalte fehlt in der Ausgabe (historisches Standardverhalten, jedoch ungünstig für den Client, da er nicht klar identifizieren kann welche Spalten weggelassen wurden)
3 = Die ganze Suche wird mit einem Fehler abgebrochen.
- SoapReportAllowOmitColumns DlcGlobalOptions enum Veröffentlicht [SOAP, Suche] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00i HF1 Das Property bewirkt, dass bei Verwendung der SOAP-Report Methoden kein Fehler erzeugt wird, wenn der Parameter "columns" nicht angegeben wird.
- SoapReportFullColumnLength DlcGlobalOptions enum Veröffentlicht [SOAP, Suche] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60h Das Property bewirkt, dass bei Verwendung der SOAP-Report Methoden lange Werte nicht nach 50 Zeichen (Docum...) abgeschnitten werden, sondern der komplette Wert kommt.
- SoapStartWorkflowAlways DlcGlobalOptions enum Öffentlich [Workflow, SOAP] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00b Mit der globalen Eigenschaft "SoapStartWorkflowAlways=1" wird bei der Erzeugung einer neuen aktiven Mappe über SOAP der assoziierte Workflow immer direkt gestartet.
- SortWithOuterJoin DlcGlobalOptions enum Öffentlich [Sortierung] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 5.00 DOCUMENTS 5 implementiert datenbankgestütztes Sortieren bei der Mappenrecherche anders als ältere Versionen. Das neue Verfahren verwendet SQL "outer joins". Nur für den Fall, dass die neue Implementierung irgend welche technischen Probleme verursacht, lässt sie sich mit dieser Eigenschaft abschalten.
- specialImagePath DlcGlobalOptions string Öffentlich [Webclient] Mögliche Werte: Pfad Gültigkeit: ab: 4.00a Der Pfad auf Bilder in benutzerdefinierten Feldern mit dem Eintrag _image=bild.* kann man als globale Eigenschaft an den Documents-Einstellungen angegeben werden. z.B. "specialImagePath=myProject/images/file/".
Es wird dann ab dem www-Verzeichnis gesucht.
(bei Client-Relevanz: Nur Classic-Client)
- SRSortByLabel DlcGlobalOptions enum Öffentlich [Sortierung, Suche] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 4.00 bis: 4.10 Standardmäßig werden Archive im Quellenbaum der erweiterten Suche nach den Anzeigenamen sortiert.
Anhand der Eigenschaft kann die Sortierung abgeschaltet bzw. auf den technischen Namen zurückgeschaltet werden (versionsabhängiges Verhalten). Die Eigenschaft wirkt sich auch auf Mappentypen in der erweiterten Suche aus. Hier ist die Vorainstellung jedoch "0" (Sortierung nach technischem Namen).
- ssoLoginMethod DlcGlobalOptions string Öffentlich [Login/Logout/LDAP] Mögliche Werte: Azure OpenID Gültigkeit: ab: 6.00 Über die Eigenschaft können die Azure/OpenID Filter aktiviert werden, sodass keine Anpassung mehr an der web.xml notwendig ist um den Azure/OpenID Login zu nutzen.
- startEditWithBeforeEditScript DlcGlobalOptions enum Öffentlich [Rechte, Scripting] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00e HF1 Seit Version 5.0e HF1 wird im PortalScripting bei der Methode DocFile.startEdit() implizit ein ggfs definiertes beforeEditScript aufgerufen. Wenn das alte Verhalten ohne Ausführung des beforeEditScriptes gewünscht ist, kann dies über die DOCUMENTS Einstellungen Eigenschaft startEditWithBeforeEditScript=0 erfolgen.
- StaticFolderCheckFieldRights DlcGlobalOptions enum Öffentlich [Ordner, Rechte] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 4.00d Die Eigenschaft steuert die Feldrechteprüfung für statische Ordner, deren Darstellung mit einer der Eigenschaften "hitlist" oder "inboxHitlist" angepasst wurde.
Die Prüfung ist im Normalfall aktiv. Der Inhalt von Felder ohne Leserecht wird gegen drei Sternchen oder gegen den Text aus der Eigenschaft "NoRightSurrogate" ersetzt, sofern angegeben.
- StaticFolderWithBlobInfo DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60b Dokumente können bereits in Trefferlisten von statischen Ordnern angezeigt werden.
Siehe auch: HitlistWithBlobInfo, DynamicFolderWithBlobInfo, LinkRegisterWithBlobInfo
- StatusIgnoredColumns DlcFile DlcGlobalOptions string Öffentlich [Webclient] Mögliche Werte: Col1,Col2,... Colx = Action,Comment,Timestamp,User Gültigkeit: ab: 4.00c Über die Mappentyp/Documents Einstellungen Eigenschaft StatusIgnoredColumns=Col1,Col2,... mit Colx = Action,Comment,Timestamp,User können einzelne Spalten im Status-Register ausgeblendet werden.
Diese Einschränkung gilt nur für die Web-Ansicht und nicht für andere Funktionen z.B. Archivieren mit Status.
(bei Client-Relevanz: Classic-Client und Client 5)
- StatusUseTimestampOrder DlcGlobalOptions enum Öffentlich [CONTRACT, Sortierung, Webclient5] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00g Der Mappenstatus wird nun standardmäßig nach dem Aktions-Zeitpunkt sortiert. Bisher wurde nach einer Positions-Spalte sortiert. Das bisherige Verhalten kann mit der Documents-Einstellungen Eigenschaft: StatusUseTimestampOrder=0 wieder hergestellt werden.
Hintergrund: durch einen Fehler im jex-Import konnte die Positions-Spalte eine falschen Wert haben und die Status-Einträge nicht korrekt sortiert dargestellt werden.
- stayFileOnNoNextFile DlcGlobalOptions string Öffentlich [Workflow, Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: false Gültigkeit: ab: Wenn im Workflow bei einer Aktion Navigation="nächste Mappe" konfiguriert ist und es aber keine nächste Mappe gibt, dann bleibt die Ansicht auf dieser Mappe stehen, insofern sie noch exisitert.
- stickyPersonalFolder Outbar DlcGlobalOptions string Öffentlich [Webclient5, Outbar, Ordner] Mögliche Werte: true, false, 0, 1 Standardwert: false Gültigkeit: ab: 5.00f Über die Eigenschaft kann gesteuert werden ob die privaten Ordner auch auf anderen Outbars angezeigt werden.
Die Eigenschaft kann entweder global oder auf einer spezifischen Outbar gesetzt werden.
Outbaransichten, die über ein Skript erzeugt werden, werden von der Eigenschaft nicht berührt.
- StoresSortOrder DlcGlobalOptions enum Öffentlich [Sortierung, EAS, EBIS Store, Suche] Mögliche Werte: Inherited UserDefined ByName ByUILabel Standardwert: Inherited Gültigkeit: ab: 5.00a Festlegung der Sortierreihenfolge der Suchquellenliste für EDA und EBIS. Wert / Bedeutung:
UserDefined = keine Sortierung; Reihenfolge folgt i.d.R. der Neuanlage der Archivserversatensätze.
ByName = Sortierung nach technischem Namen
ByUILabel = Sortierung nach Anzeigenamen
Inherited = Übernahme der allgemeinen Einstellung "Sortierung von Ordnerstrukturen"
- strictCheckWriteField DlcGlobalOptions enum Veröffentlicht [Rechte] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60h Setzt man dieses Property auf 0, so wird die Schreibrechtprüfung ausgeschaltet. Es wird davon abgeraten dieses Property zu nutzen, da man somit eine Sicherheitslücke öffnet.
- SubOutbars DlcGlobalOptions string Öffentlich [Outbar] Mögliche Werte: 1 Standardwert: 0 Gültigkeit: ab: 5.00 Im DOCUMENTS-Manager kann man Unter-Outbar Einträge anlegen
- SuggAreaMask DlcGlobalOptions string Öffentlich [Suche] Mögliche Werte: Eine ganze Zahl von 0 bis 63 Standardwert: 7 Gültigkeit: ab: 5.00 Die Eigenschaft steuert, welche Speicherbereiche Documents zum Ermitteln von Suchwörtern für die Vorschlagsliste verwendet. Der Wert ist eine Summe (Bitmaske) aus folgenden Kennzahlen. 1 = Volltextindex für Dateianhänge
2 = Volltextindex für Felder
4 = Primärer Feldwertindex Darüber hinaus steuert die Eigenschaft, in welchem dieser Datenbereiche die Anwendung einige Suchvorschläge mit zwei Wörtern ermittelt. Dazu muss zu der erwähnten Summe noch daa Achtfache der jeweiligen Kennzahl addiert werden. In diesem Zusammenhang ist auch noch die Eigenschaft "SuggMinExpand".wichtig Beispiel: eine Zweiwortsuche im Felder-Volltextindex und eine Einwortsuche in den anderen Bereichen
spezifiziert man mit dem Wert 1 + (1+8)*2 + 4 = 23.
- SuggDebug DlcGlobalOptions enum Öffentlich [Debug, Suche] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00 Wenn die Eigenschaft auf 1 oder true gesetzt wird, schreibt die Serveroperation, die zur automatischen Vervollständigung von Suchbegriffen aufgerufen wird, Detailmeldungen ins Server-Log
(bei Client-Relevanz: Nein (Server Feature))
- SuggMinExpand DlcGlobalOptions string Öffentlich [Suche] Mögliche Werte: Eine positive Ganzzahl Standardwert: 1000 Gültigkeit: ab: 5.00 Im Rahmen der automatischen Vervollständigung von eingegebenen Suchausdrücken bestimmt der Wert dieser Eigenschaft, bei welcher Mindesttrefferzahl für ein ein vorgeschlagenes Wort Documents nach Folgewörtern sucht, um auch einige Zweiwortbegriffe vorzuschlagen. Der Wert sollte zwischen den Werten der anderen Eigenschaften SuggMinHits und SuggMinIgnore liegen.
Das Ermitteln von Folgewörtern ist relativ zeitaufwändig und daher in der Voreinstellung ausgeschaltet. Um es zu aktivieren, muss die Eigenschaft SuggAreaMask angepasst werden.
- SuggMinHits DlcGlobalOptions string Öffentlich [Suche] Mögliche Werte: Eine ganze Zahl größer oder gleich 1 Standardwert: 1 Gültigkeit: ab: 5.00 Zur automatischen Vervollständigung eines Suchbegriffs bietet Documents nur jene Wörter an, die mindestens in der hier angegebenen Häufigkeit in der Datenbank enthalten sind.
Der Sinn dieser Begrenzung ist, die Anzahl der vorgeschlagenen Begriffe überschaubar zu halten.
- SuggMinIgnore DlcGlobalOptions string Öffentlich [Suche] Mögliche Werte: Eine positive Ganzzahl Standardwert: 20000 Gültigkeit: ab: 5.00 Ein Wort, das in Documents-Mappen allzu häufig vorkommt, wird als Option zu automatischen Vervoolständigung von Suchbegriffen ausgeschlossen. Die Eigenschaft legt diese Grenze fest.
(bei Client-Relevanz: Nur Client 5)
- SuggMinLen DlcGlobalOptions string Öffentlich [Suche] Mögliche Werte: Eine ganze Zahl größer oder gleich 0 Standardwert: 1 Gültigkeit: ab: 5.00 Der Parameter gibt die minimale Zeichenzahl an, die ein Benutzer in dem allgemeinen Volltextsuchfeld eingeben muss, bevor der DocumentServer eine Suche nach Vorschlägen zur automatische Vervollständigung zulässt.
Der Wert 0 deaktiviert diese Funktion komplett. Clientanwendungen (einschließlich der Documents Weboberfläche) schränken den Aufruf der Vorschlagsfunktion üblicherweise selbst ein. Deshalb wurde die großzügige Voeinstellung 1 gewählt. Bitte beachten Sie, dass Documents bei der automatischen Vervollständigung ohne Rücksicht auf Zugriffsrechte nach vorhandenen Wörtern in seiner Datenbank sucht. (bei Client-Relevanz: Nur Client 5)
- SupportFormAccessProfiles DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: kommaseparierte Liste technischer Zugriffsprofilnamen Gültigkeit: ab: 5.00i Diese globale Eigenschaft wirkt sich auf das Zugriffsrecht der Benutzer auf das Support-Formular wie folgt aus, falls die globale Eigenschaft 'HasSupportForm = 1' gesetzt ist:
- Falls diese Eigenschaft gesetzt ist und mindestens ein angegebenes Zugriffsprofil existiert, bekommen nur die Benutzer aus den angegebenen Zugriffsprofilen Zugriffsrechte auf das Support-Formular;
- Falls diese Eigenschaft nicht gesetzt ist oder alle angegebene Zugriffsprofile nicht existieren, haben alle Benutzer Zugriffsrechte auf das Support-Formular. Falls die globale Eigenschaft 'HasSupportForm = 0' gesetzt ist, ist diese Eigenschaft wirkungslos.
- SupportFormMailTo DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: E-Mail Adresse Gültigkeit: ab: 5.00d HF1 Web-Client V mit erweiterten Systeminfos und Supportformular: Wenn die Documents-Einstellungen Eigenschaft HasSupportFrom=1 gesetzt ist, wird im Web-Client V im Info-Menü die Möglichkeit der Erfassung eines Supporttickets ermöglicht. Mit der Documents-Einstellungen Eigenschaft SupportFormMailTo kann die E-Mail des Support Empfängers definiert werden. Die zu versendenden Infos und Defaultwerte für das Formular können per Scripting definiert werden (s. Scripting-Doku: InfoDialogAddition*)
- supportFormShowSystemInformation DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 6.00 Legt fest, ob unter dem Supportformular zusätzlich die Systeminformationen angezeigt werden sollen.
- SuppressUndeclaredFields DlcGlobalOptions enum Veröffentlicht [EAS, EEi, EEx] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 4.00 Nichtdeklarierte Archivmappenfelder ausblenden und ignorieren. Setzt man die Eigenschaft auf 1 bzw. true, dann werden Archivmappenfelder, die nicht in der
Archivstruktur deklariert sind, ignoriert (z.B. manche COLD-Felder). Die Felder werden weder angezeigt noch beim Versionieren von Archivmappen berücksichtigt.
Die Eigenschaft kann in den Documents-Einstellungen, für einen Archivserver oder direkt
für das einzelne Archiv bzw. Schema gesetzt werden (für die EAS-Schnittstelle direkt am Mappentyp).
Eine Änderung wirkt sich erst durch Löschen der temporären Archivmappen vollständig aus.
- thumbnailOpenDocMode DlcGlobalOptions DlcFile string Öffentlich [Blob] Mögliche Werte: external Gültigkeit: ab: 3.60 Dokumente einer Mappe können in einem externen Fenster geöffnet werden. Dabei wird der in DOCUMENTS eingestellte Viewer angezeigt. Bei mehreren Dokumenten besteht die Möglichkeit über eine Navigationszeile durch diese zu blättern. Dabei sollten folgene Properties in den Documents - Einstellungen gesetzt sein: useThumbnailInFileView = true
thumbnailOpenDocMode = external (auch am Mappentyp möglich) Das externe Fenster lässt sich durch folgene Properties konfigurieren extViewerWinDimension und
extViewerWinProperties Voraussetzung:
Auf dem Bestriebssystem des Servers muss grundsätzlich ImageMagick installiert werden. (bei Client-Relevanz: Classic-Client und Client 5)
- TitleSortLocalized DlcGlobalOptions enum Öffentlich [Sortierung] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00e Der Wert "1" bewirkt, dass DOCUMENTS Mappentitel in Trefferlisten nach dem angezeigten Wert sortiert und nicht mehr nach dem technischen, u.U. mehrsprachigen Wert. Bei vielen Treffern dauert das Sortieren mit dieser Einstellung länger als sonst.
- toFiletypeChangedScript DlcGlobalOptions DlcFile string Öffentlich [Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00f HF1 Neuer Script-Exit am Mappentyp: toFiletypeChangedScript=Scriptname. Nach dem Mappentypwechsel wird das angebene Script ausgeführt. Die Eigenschaft toFiletypeChangedScript muss am Zielmappentyp gesetzt werden.
- toggleFullscreenButton DlcGlobalOptions FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00f Fügt der Menubar einen Knopf zum Wechsel in den Vollbildmodus hinzu. FeatureConfig:
<Feature name="ToggleFullscreenButton" active="true" />
- toggleSeparator DlcGlobalOptions enum Öffentlich [Webclient] Mögliche Werte: true false Gültigkeit: ab: 4.00 Horizontale Trenner auf Feldregistern können ab Documents 4.0 auf- und zugeklappt werden. Der Zustand wird pro Mappentyp beim Benutzer gespeichert. Man kann dieses Verhalten wieder unterbinden, indem man den Wert auf false setzt.
(bei Client-Relevanz: Classic-Client und Client 5)
- tooltipSettings DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: JSON Konfiguration Gültigkeit: ab: 5.00h Ermöglicht die Konfiguration der Mappen-Tooltips, wie das Anzeigen eines Tooltip-Icons, das Verhalten beim Hovern oder Klicken auf das Label oder Tooltip-Icon. Für die genaue Konfiguration gibt es ein HowTo im Dokumentationsportal.
https://otris.software/documents/howto/files/tooltip.html
- translationFieldSettings DlcGlobalOptions DlcFile string Öffentlich Mögliche Werte: JSON-Konfiguration Gültigkeit: ab: 5.00g Setzt die Standard-Konfiguration für Translation-Felder. Für Informationen über die möglichen Einstellung steht auf dem Dokuportal ein HowTo bereit.
- trashBinConfirmDeletion DlcGlobalOptions FeatureManager string Öffentlich Mögliche Werte: 0, false, 1, true Standardwert: false Gültigkeit: ab: Aktiviert einen Löschen-Bestätigungs-Dialog, wenn Mappen aus dem "Gelöscht"-Ordner entfernt werden sollen.
- treeSort DlcFile DlcGlobalOptions string Öffentlich [Tree] Mögliche Werte: Beispiel: treeSort = Feld1-, Feld2+,... oder treeSort_Trefferliste = Feld1-,Feld2+,... Standardwert: Feld1, Feld2 Gültigkeit: ab: 3.51f Der Trefferbaum wird nach den Feldern gruppiert und durch + / - dementsprechend sortiert. Man kann dies auch auf eine Trefferliste einschränken, indem man treeSort_Trefferliste = Feld1-, Feld2+,.... benutzt.
(bei Client-Relevanz: Classic-Client und Client 5)
- TwoFactorAuthentication DlcGlobalOptions enum Öffentlich [Webclient5] Mögliche Werte: false true totp email Standardwert: false Gültigkeit: ab: 5.00g Mit der globalen Documents-Einstellung "TwoFactorAuthentication" kann die Zwei-Faktor-Authentifizierung (2FA) für einen Mandanten grundsätzlich aktiviert werden. Es ist dann ein entsprechender Eintrag im Menü der persönlichen Einstellungen aller Benutzer aufgeführt. Mit den Werten "true" oder "false" (default) wird die Zwei-Faktor-Authentifizierung grundsätzlich komplett ein- oder ausgeschaltet. Dies umfasst stets sämtliche zur Verfügung stehenden 2FA-Typen, wie TOTP, Email etc. Soll den Benutzern hingegen lediglich eine begrenzte Auswahl der zur Verfügung stehenden 2FA-Typen angeboten werden, so können einzelne 2FA-Typen-Bezeichner alternativ auch kommasepariert aufgeführt werden, z.B. "totp" oder "email,totp". Derzeit stehen die Varianten "totp" und "email" zur Verfügung. Hinweis: Die Eigenschaft "TwoFactorAuthentication" auf Benutzerprofilen wird aus­schließ­lich intern verwaltet und darf keinesfalls manuell umkonfiguriert werden!
- TwoFactorAuthenticationEnforce AccessProfile DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: suggest, logout Gültigkeit: ab: 5.00g Mit der Eigenschaft "TwoFactorAuthenticationEnforce" kann gesteuert werden, wie alle Benutzer oder Gruppen von Benutzern geführt werden sollen, welche die Zwei-Faktor-Authentifizierung (2FA) aktuell noch nicht eingeschaltet haben. So kann auf Wunsch sichergestellt werden, dass niemand versehentlich vergisst, diese zu aktivieren.
Mit dem Wert "suggest" (verfügbar ab 5.0g) kann den Benutzern nach jeder Anmeldung vorgeschlagen werden, die Zwei-Faktor-Authentifizierung zu aktivieren. Dies kann ein Benutzer jedoch bei jedem Mal erneut ablehnen und wie gewohnt ohne Einschränkungen fortfahren.
Mit dem Wert "logout" (verfügbar ab 5.0i) können die Benutzern nach der Anmeldung dazu aufgefordert werden, die Zwei-Faktor-Authentifizierung zu aktivieren. Lehnt der Benutzer die Aktivierung ab, bleibt ihm anschließend nur noch die Möglichkeit, sich wieder abzumelden.
In allen Fällen muss die Zwei-Faktor-Authentifizierung (2FA) grundsätzlich aktiviert sein (siehe Eigenschaft "TwoFactorAuthentication").
Diese Eigenschaft kann sowohl global auf den Documents-Einstellungen, auf einem Zugriffsprofil oder auf einzelnen Benutzern hinterlegt werden.
- TwoFactorAuthenticationGracePeriod DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: 0-n (Anzahl der Tage) Standardwert: 0 Gültigkeit: ab: 5.00h Mit der globalen Eigenschaft "TwoFactorAuthenticationGracePeriod" kann, sofern die Zwei-Faktor-Authentifizierung aktiv ist, die Abfrage des zweiten Faktors während der Anmeldung für eine bestimmte Anzahl von Tagen ausgesetzt werden. In diesem Fall sind für eine Weile lediglich Benutzername und Kennwort erforderlich.
So kann beispielsweise mit "TwoFactorAuthenticationGracePeriod" = "7" die Abfrage des Sichereitscodes für max. eine Woche ausgesetzt werden. - Während des Anmeldevorgangs kann der Benutzer dieser Möglichkeit individuell zustimmen oder sie ablehnen. Achtung: Da diese Funktion u.a. auf Cookies basiert, ist diese immer nur für das aktuelle Endgerät des Benutzers (bzw. dessen Browser) gültig!
Beachten Sie hierbei grundsätzlich, dass die Sicherheit der mit der Zwei-Faktor-Authentifizierung gesicherten Benutzerkonten möglicherweise herabgesetzt wird! - Dies gilt insbesondere, falls mehrere Benutzer sich eine gemeinsame Arbeitsstation bzw. einen gemeinsamen Browser teilen! Weitergehende Konfigurationsmöglichkeiten, insbesondere mit der globalen Eigenschaft "TwoFactorAuthenticationGracePeriodConfig", entnehmen sie bitte der Dokumentation.
- TwoFactorAuthenticationGracePeriodConfig DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: { "agreement" : true * / false, "agreementDefault" : true / false * } * = default Gültigkeit: ab: 5.00h Erweiterte JSON-Konfiguration für die Eigenschaft "TwoFactorAuthenticationGracePeriod".
Die Eigenschaft und sämtliche Parameter sind optional. Parameter:
"agreement": Checkbox für Zustimmung soll bei Login angezeigt werden (true *) oder nicht (false).
"agreementDefault": Checkbox für Zustimmung soll bei Login initial selektiert sein (true) oder nicht (false *). * = default
- unitInfo DlcGlobalOptions enum Veröffentlicht [EEx] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.60b Wird bei der Anmeldung im Web Client und Anbindung an die EE.x eine andere Instanz / Unit als die Standardwerte ausgewählt, kann mit dieser Eigenschaft eingestellt werden, dass der Benutzer im Browsertitel den Unit / Instanzname während der Sitzung angezeigt bekommt.
- UploadDocumentAllowed DlcGlobalOptions string Öffentlich [Blob] Mögliche Werte: Kommaseparierte Liste der Dateiformate (z.B.: pdf,docx,txt ) Gültigkeit: ab: 5.00g Die globale Eigenschaft 'UploadDocumentAllowed' ermöglicht es, erlaubte Dateiformate für Upload festzulegen. Falls erlaubte und verbotene Dateiformate zugleich definiert sind, wird die Eigenschaft 'UploadDocumentForbidden' ignoriert.
- UploadDocumentForbidden DlcGlobalOptions string Öffentlich [Blob] Mögliche Werte: Kommaseparierte Liste der Dateiformate (z.B.: exe, bat, cmd, msi ) Gültigkeit: ab: 5.00g Die globale Eigenschaft 'UploadDocumentForbidden' ermöglicht es, verbotene Dateiformate für Upload festzulegen. Falls erlaubte (s. 'UploadDocumentAllowed') und verbotene Dateiformate zugleich definiert sind, wird diese Eigenschaft ignoriert.
- UseAutoOpenFirstDocumentFromFile DlcFile DlcGlobalOptions enum Öffentlich [Blob, Webclient5] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00c HF3 Erstes Dokument sofort anzeigen: Seit DOCUMENTS 5 wird diese Eigenschaft immer vom Mappentypen ausgewertet. Soll dies unterschiedlich für Mappen eines Mappentypen sein, kann mit der Mappentyp-Eigenschaft und Documents-Einstellungen Eigenschaft UseAutoOpenFirstDocumentFromFile=1 das Verhalten so geändert werden, dass dies von der einzelnen Mappe ausgewertet wird.
- useListSortInTreeSort DlcGlobalOptions enum Veröffentlicht [Tree] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.60e Wird für den Trefferbaum keine Definition bezüglich Spalten und Sortierung (s.a. treeSort) getroffen, so werden die ersten 4 Spalten als Sortierkriterium verwendet. Benutzt man jedoch das Property "useListSortInTreeSort=true" so wird statt dessen die aktuelle Sortierung des Web-Clients übernommen.
- useLocalEditPathFromManager DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Wenn die Property gesetzt ist wird der im Manager angegebene Pfad auf dem Clientrechner für die Lokale Komponente und die ActiveX Erweiterung (Benutzer --> Documents/Archiv Einstellungen 1 --> Lokaler Checkout-Path) genutzt.
- useMarginWidth DlcGlobalOptions string Öffentlich Mögliche Werte: false, 0, true, 1 Standardwert: false Gültigkeit: ab: Schaltet das Feld "Marginalspaltenbreite" in den Documents Einstellungen für Documents für Documents 5 scharf und erlaubt das Verwenden der Property "dlcMarginWidth" am Mappentypen.
(bei Client-Relevanz: Nur Client 5)
- UseOldDocxAutoTextParser DlcGlobalOptions string Öffentlich Mögliche Werte: 1 Standardwert: 0 Gültigkeit: ab: 5.00e HF1 Dokumentenvorlagen und DocFile.addDocumentFromFileSystem() für docx-Dateien:
Das Ersetzen der AutoTexte wird durch einen spezfischeren Parser nun durchgeführt. Wenn es zu Problemen damit kommt, kann auf den alten Parser durch die Documents-Einstellungen Eigenschaft UseOldDocxAutoTextParser=1 zurückgeschaltet werden.
- useSubselectMenu DlcGlobalOptions string Öffentlich Mögliche Werte: true, 1, false, 0, benutzerdefinierter Wert Standardwert: false Gültigkeit: ab: 5.00e Ermöglicht die Verwendung von mehrstufigen Auswahllisten in den Aktions-Klapplisten der Mappen und Ordner.
Die Label der Einträge werden anhand eines Trennsymboles geteilt. Labels, die bis zum Trennsymbol gleich beginnen und aufeinander folgen werden in einem Eintrag zusammengefasst. Wird über den zusammenfassenden Eintrag gehovert, werden die zusammengefassten Einträge in einer zweiten Ebene angezeigt. Als Trennsymbol wird "|" (true oder 1) oder ein benutzerdefinierter Wert verwendet. Es wird immer nur beim Ersten Auftreten des Trennsymboles getrennt.
- useThumbnailInDocumentView DlcGlobalOptions enum Veröffentlicht [Blob, Webclient] Mögliche Werte: 0 1 Gültigkeit: ab: 3.51 Alle Dokumente des aktuellen Registers werden als Thumbnails auf dem Dokumentenregister dargestellt. Dies geschieht in der Spalte unterhalb der Dokumentenfelder. D.h. man muss ich in der Dokumentenansicht befinden und nicht in der Listendarstellung der Dokumente.
Damit die Darstellung erfolgt müssen mindestens 2 Dokumente vorhanden sein, ImageMagick installiert und in der partnernet.ini registriert sein.
(bei Client-Relevanz: Nur Classic-Client)
- useThumbnailInFileView DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60 bis: 3.60j Achtung: Diese Eigenschaft wurde im Mappentyp durch die Einstellung "Erweiterte Einstellungen" / "Mappendeckelrand" / "Vorschau" ersetzt! Alle Dokumente sämtlicher Dokumentenregister werden als Thumbnails auf dem Mappendeckel dargestellt. Voraussetzung: GraphicsMagick muss installiert und in der documents.ini registriert sein!
- useTreeSearch DlcGlobalOptions string Öffentlich [Tree, Webclient5, Webclient] Mögliche Werte: false, true Standardwert: true Gültigkeit: ab: 5.00a HF2 Mit der globalen Eigenschaft useTreeSearch=true wird ein Suchfeld über allen Bäumen (Privat,Öffentlich,Skriptbaum) über der Outbar angezeigt, mit dem der Baum clientseitig durchsucht werden kann.
(bei Client-Relevanz: Nur Client 5)
- verifyExtendedSearchNotBlank DlcGlobalOptions enum Öffentlich [Suche, Webclient] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 4.00 Mit dieser Eigenschaft kann man die Suche mit einen Leer-String in der erweiterten Suche unterbinden, es erscheint dann beim Versuch eine Meldung die darauf hinweist. Dies macht bei Documents Installationen Sinn die besonders viele Mappen haben (s.a. verifyFulltextSearchNotBlank).
Im D5 WebClient ist dieses Feature ab Version 5.0d verfügbar.
(bei Client-Relevanz: Classic-Client und Client 5)
- verifyExtendedSearchRegEx DlcGlobalOptions text Öffentlich [Suche, Rechte] Mögliche Werte: regulärer Ausdruck s.a. http://de.selfhtml.org/perl/sprache/regexpr.htm Gültigkeit: ab: 4.00 Begriffe, die in der Erweiterten Suche eingegeben werden können mit Hilfe dieses Properties mit regulären Ausdrücken geprüft werden. Sollte der Begriff nicht zu dem regulären Ausdruck passen, wird eine Fehlermeldung ausgegeben (s.a. verifyFulltextSearchRegEx).
Es ist zwingend Erforderlich, dass am Anfang und am Ende des reguläre Ausdrucks der Delimiter / steht. Ein / innerhalb des regulären Ausdrucks muss escaped werden, eine Überprüfung, ob der Ausdruck valide ist kann z.B. auf https://regex101.com/ erfolgen.
Im D5 WebClient ist dieses Feature ab Version 5.0d verfügbar.
- verifyFulltextSearchNotBlank DlcGlobalOptions enum Öffentlich [Suche, Webclient] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 4.00 Mit dieser Eigenschaft kann man die Suche mit einen Leer-String in der Volltextsuche unterbinden, es erscheint dann beim Versuch eine Meldung die darauf hinweist. Dies macht bei Documents Installationen Sinn die besonders viele Mappen haben (s.a. verifyExtendedSearchNotBlank).
Im D5 WebClient ist dieses Feature ab Version 5.0d verfügbar.
(bei Client-Relevanz: Classic-Client und Client 5)
- verifyFulltextSearchRegEx DlcGlobalOptions text Öffentlich [Suche, Rechte] Mögliche Werte: regulärer Ausdruck s.a. http://de.selfhtml.org/perl/sprache/regexpr.htm Gültigkeit: ab: 4.00 Begriffe, die in der Volltextsuche eingegeben werden können mit Hilfe dieses Properties mit regulären Ausdrücken geprüft werden. Sollte der Begriff nicht zu dem regulären Ausdruck passen, wird eine Fehlermeldung ausgegeben (s.a. verifyExtendedSearchRegEx).
Es ist zwingend Erforderlich, dass am Anfang und am Ende des reguläre Ausdrucks der Delimiter / steht. Ein / innerhalb des regulären Ausdrucks muss escaped werden, eine Überprüfung, ob der Ausdruck valide ist kann z.B. auf https://regex101.com/ erfolgen.
Im D5 WebClient ist dieses Feature ab Version 5.0d verfügbar.
- viewerAnnotationConfig DlcGlobalOptions string Öffentlich Mögliche Werte: [true|false], jeder andere Wert wird als ‚true‘ interpretiert Standardwert: true Gültigkeit: ab: 5.00a wenn ViewerAnnoationConfig aktiviert ist, ermöglicht dies ein Konfigurationsmenü, in welchem die Elemente aus ViewerAnntationMode konfiguriert werden können. (bei Client-Relevanz: Nur Client 5)
- viewerAnnotationMode DlcGlobalOptions string Öffentlich Mögliche Werte: [rw|r|off], jeder andere Wert wird als ‚off‘ interpretiert Standardwert: rw Gültigkeit: ab: 5.00a Anmerkungen in pdf hinzufügen und oder lesen einschalten. (bei Client-Relevanz: Nur Client 5)
- ViewerAnnoTrans DlcGlobalOptions string Veröffentlicht [Blob, Webclient] Mögliche Werte: 0 - 100 Standardwert: 0 Gültigkeit: ab: 3.60f Die "gelben Zettel" können mit diesen Property mit einer Transparenz versehen werden. Die Werte können zwischen 0 und 100 (Prozent) liegen.
(bei Client-Relevanz: Nur Classic-Client)
- ViewerDefaultEncodingAnnotations DlcGlobalOptions string Veröffentlicht Mögliche Werte: UTF-8 oder andere Encodings Gültigkeit: ab: 3.60d Standardmäßig wird als Default-Encoding für neue graph. Annotationen das Systemencoding des PortalServer-Rechner verwendet. Wenn dort z.B. ISO-8859-1 eingestellt ist, welches kein €-Zeichen enthält, kann mit dieser Eigenschaft ein anderes Encoding z.b. ISO-8859-15 oder UTF-8 definiert werden.
- viewerExtensions DlcGlobalOptions string Veröffentlicht [Blob] Mögliche Werte: Dateityp z.B. tif, gif, ... Gültigkeit: ab: 3.60b Es können Dateitypen registriert werden, für die es einen internen Viewer gibt. Für alle anderen Dateien wird eine Download-Seite angezeigt. Kommaseparierte Liste von Dateiendungen, die im Browser (Viewer oder Plugin) angezeigt werden können. Ist eine Endung nicht vorhanden, wird beim Öffnen dieser Datei eine spezielle Downloadseite
angezeigt. Gilt auch für die Option "erstes Dokument sofort öffnen".
(bei Client-Relevanz: Nur Classic-Client)
- ViewMassSelection DlcGlobalOptions enum Öffentlich [EEx, Suche] Mögliche Werte: 0 1 false true Standardwert: 1 Gültigkeit: ab: 4.00b In der erweiterten Suchmaske die Massenauswahl von Views anhand einer Checkbox beim Viewordner erlauben.
Diese Eigenschaft wird erst ab 4.0b HF 2 unterstützt. ähnliche Eigenschaften: FiletypeMassSelection, ArchiveMassSelection
- ViewServerDebug DlcGlobalOptions string Öffentlich [Debug, pdf-Druck] Gültigkeit: ab: 4.00d HF2 Mit dieser Eigenschaft kann ein Ausgabeverzeichnist angegeben werden, um die HTTP-Kommunkitaion mit einem Easy View Server zu protokollieren. Für jede Anfrage wird in das Verzeichnis eine Anfragedatei (#######_Q_VSR.log) und eine Antwortdatei (#######_A_VSR.log) geschrieben. Blöcke von Binärdaten werden in dem Log durch Platzhalter ersetzt.
Diese Dateien löscht Documents nie automatisch. Nur nach Neustart des DocumentsServers werden bestehende Dateien nach und nach überschrieben, da die Zählung wieder bei 0 beginnt. (bei Client-Relevanz: Nein (Server Feature))
- waitPanelTimer DlcGlobalOptions string Öffentlich [Webclient] Mögliche Werte: -1 >= 0 Zeit in ms Standardwert: 250 Gültigkeit: ab: 4.00 Wird in Documents 4 eine länger dauernde Aktion gestartet, so wird in dem Zeitraum das wait panel angezeigt. Mit diesen Property kann man einstellen, ob man mit -1 das panel ausblendet oder mit einen Wert >= 0 erst später gestartet werden soll. Der angegebene Wert befindet sich dabei im Millisekunden Bereich.
(bei Client-Relevanz: Nur Classic-Client)
- windowTitle DlcGlobalOptions string Öffentlich [Webclient5] Gültigkeit: ab: 5.00f Über die Eigenschaft windowTitle kann der Titel des Browsertabs festgelegt werden.
- WorkflowStepGetBackFromAgent DlcGlobalOptions enum Öffentlich [Webclient, Workflow] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00b Wenn ein Benutzer eine Mappe im Rahmen des Workflows in Vertretung erhalten hat, dann kann der Vertretene nach seiner Rückkehr die Mappe mit dem Button "Vertretung zurückholen" zurückholen. Die Eigenschaft WorkflowStepGetBackFromAgent=0 blendet diese Möglichkeit aus. Die Eigenschaft kann auch am Benutzer gesetzt werden.
- WorkflowStepSendBackToOriginalUser DlcGlobalOptions enum Öffentlich [Webclient, Workflow] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00b HF1 Wenn ein Benutzer eine Mappe im Rahmen des Workflows in Vertretung erhalten hat, dann kann er nach Rückkehr des Vertretenen mit dem Button "Vertretung zurückgeben" die Mappe zurücksenden. Mit der Eigenschaft WorkflowStepSendBackToOriginalUser=0 kann diese Aktion ausgeblendet werden. Die Eigenschaft kann auch am Benutzer gesetzt werden.
(bei Client-Relevanz: Nein (Server Feature))
- xlsxFormat DlcGlobalOptions DlcFolder string Öffentlich [Schnittstellen, Ordner, Trefferliste, Output] Mögliche Werte: JSON-String mit den Format-Optionen Gültigkeit: ab: 5.00f Wenn der xlsx-Export von Ordnern oder Trefferlisten (FolderExportSelectedAsXLSX/FolderExportAllAsXLSX) aktiviert ist, kann über die Eigenschaft das Design des Exportes beeinflußt werden.
Es können die Formate für header, body, bodyDate, bodyTimestamp definiert werden.
Details s. https://otris.software/documents/portalscript/XLSXWorksheet.html#importFromJSON
{
"formats" : [
{
"name" : "header",
"bgcolor" : colorName, // optional
"pattern" : patternName, // optional
"fontcolor" : colorName, // optional
"fontstyle" : styleName, // optional
"fontsize" : int-value, // optional
"cellborder" : int-value, // optional
"align" : alignStyle, // optional
"numformat" : "format-string" // optional
},
{
"name" : "body",
..
},
]
}
- XMLExportBlobnameEncoding DlcGlobalOptions string Öffentlich [Encoding] Mögliche Werte: C, local, windows-1252, etc Gültigkeit: ab: 4.00b XML-Export von Mappen: bei der x64-Version wurden die Dateinamen der Anlagen immer in ein "Sonderzeichen"-freies Format konvertiert. Nun kann man über die Documents-Einstellungen Eigenschaft XMLExportBlobnameEncoding=encoding das Encoding des Dateinamens festlegen. Für XMLExportBlobnameEncoding=local wird in das lokale Encoding transcodiert.
- XMLExportFellowPrivateFolders DlcGlobalOptions string Öffentlich [Schnittstellen] Mögliche Werte: 0 Standardwert: 1 Gültigkeit: ab: 4.00c HF2 XML-Export von Redakteuren: Standardmäßig werden nun auch die privaten Ordner der Redakteure mit exportiert.
Mit der Eigenschaft auf 0 kann dieses Verhalten wieder abgeschaltet werden.
- XMLRPCOrderedValues DlcGlobalOptions enum Öffentlich Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 4.00c Hinweis: die XMLRPC-Schnittstelle wird nicht weiterentwickelt. Anwendungen sollten beser SOAP verwenden. Standardmäßig ist die Reihenfolge des Setzens von Feldwerten nicht deterministisch. Wenn diese Property gesetzt ist, werden die Felder an der Mappe entsprechend der Reihenfolge innerhalb des Mappentyps gesetzt. Dies kann wichtig sein, wenn beim Setzen des Referenzfeldes andere Felder mit Defaultwerten belegt werden.
- DlcRegister
- actionGroups DlcFile DlcFolder DlcGlobalOptions DlcRegister text Öffentlich [Webclient5] Mögliche Werte: Ein Array von JSON-Konfigurationen. Bsp: [{ id: "gadgets", label: "de:Gadgets;en:Gadgets"}, { id: "globalActions", label: "de:Globale Aktionen;en:Global Actions", position: "end"}] Standardwert: - Gültigkeit: ab: 5.00i Konfiguration für die Anzeige einer eigenen Aktionsliste an Ordnern, Mappen und Dokumentenregister.
Aktionen müssen mit actionGroup=id die hinterlegte Liste referenzieren, um in dieser angezeigt zu werden.
Siehe auch Eigenschaft "actionGroup". JSON - Konfiguration einer Aktionsliste:
{
id: "<action-group-id>", // ID der Aktionsliste zum Referenzieren
icon: "<entypo|ionicon|mdi-icon>", // Icon das im Button der Aktionsliste angezeigt wird
label: "<action-group-label>, // Bezeichner der im Button der Aktionsliste angezeigt wird
position: "<default|right|end> // Position an der die Liste angezeigt wird.
} Aktionslisten mit gleicher ID am Register werden gegenüber am Mappentypen und global Konfigurierten Aktionslisten bevorzugt.
Für das Label kann auch die "de:...;en:..." - Notation verwendet werden.
Die Positionen sind:
default - Neben der Standard-Aktionsliste. Kann weggelassen werden.
right - Aktionsliste wird Rechtsbündig vor allen anderen Elementen angezeigt
end - Aktionsliste wird am Ende der Toolbar angezeigt
- afterOcrScript DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: ScriptName Gültigkeit: ab: 5.00f Das definierte afterOcrScript wird nach durchgeführten OCR-Job für ein Dokument durchgeführt. Details s.
https://otris.software/documents/api/portalscript/tutorial-scriptexits.html#after-ocr
- afterUploadDocumentScript DlcGlobalOptions DlcRegister DlcFile string Öffentlich [Blob, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 3.60j ab 1795, Property kann auch am Mappentypen oder Register definiert werden Dieses Script wird nach dem Upload eines Blobs ausgeführt: context.Event = afterUploadDocument, afterUploadNewDocument Lesend/Schreibend globales Object Param
----------------------------------------
param.filePath
param.fileName Document
--------
context.document
Register
--------
context.register (bei Client-Relevanz: Nein (Server Feature))
- allowedDocumentTemplatesScript DlcFile DlcRegister string Öffentlich [Rechte, Webclient, Webclient5, pdf-Druck] Mögliche Werte: Scriptname Gültigkeit: ab: 5.00a Mit dieser Eigenschaft kann ein Script definiert werden, welches Dokument Vorlagen in der Aktionsklappliste des Registers im Bearbeitungsmodus der Mappe ausblendet. Details sind in der portalscript.chm zu entnehmen
(bei Client-Relevanz: Nein (Server Feature))
- ArchiveSelectedAttachment DlcRegister DlcGlobalOptions DlcFile enum Öffentlich [Webclient, EEi, EEx, EAS] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00c Mit ArchiveSelectedAttachment=0 kann man die Registeraktion "Archivierung der selektierten Anhänge" ausschalten. (bei Client-Relevanz: Classic-Client und Client 5)
- autoOpenDocMode DlcGlobalOptions DlcFile DlcRegister Systemuser enum Veröffentlicht [Blob] Mögliche Werte: internal external download Standardwert: internal Gültigkeit: ab: 3.60b Es lässt sich durch dieses Property bestimmen, wie man ein Dokument aufrufen möchte. Verhalten im Classic Client: Es kann zwischen internal (im Browser) external (externer Viewer) und download gewählen werden. Die Eigenschaft wird auf dem Register, der Mappe und global unterstützt. Verhalten im Client 5: Der Wert "external" wird ab der Version 5.0e HF1 unterstützt. Die Eigenschaft kann auf einem Register, Mappentyp und global gesetzt werden und bewirkt das beim Anzeigen einer Mappe dieses Typs ein Popup mit dem ersten Dokument automatisch geöffnet wird.
Ab Version 5.0e HF2 wird die Eigenschaft zusätzlich auf dem Benutzer und mit dem Wert "internal" unterstützt. Des weiteren greift die Eigenschaft nicht mehr, wenn auf dem Mappentyp die Option "Erstes Dokument sofort öffnen" deaktiviert ist. Der Wert "download" wird weiterhin nicht unterstützt.
- countLinkFiles DlcRegister enum Öffentlich [Webclient, Suche] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 4.00a Am Register kann mit der Eigenschaft countLinkFiles=1 die Anzahl der in einem Verknüpfungsregister enthaltenen Mappen im Register-Label dargestellt werden.
Achtung: Diese Einstellung ist sehr performance-lastig.
s. auch CountLinkFilesRefreshInterval
(bei Client-Relevanz: Classic-Client und Client 5)
- countScript DlcRegister string Öffentlich [Scripting] Mögliche Werte: <Skriptname> Standardwert: - Gültigkeit: ab: 6.0.1 Bestimmt ein Skript zum Berechnen der angezeigten Anzahl von Einträgen neben dem Registernamen.
- docCompareWindow DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Öffentlich [Webclient] Mögliche Werte: false true Standardwert: false Gültigkeit: ab: 3.60g Es können mehrere Dateien extern nebeneinander zum Vergleich geöffnet werden. Zurzeit werden nur die browserinternen Viewer genutzt.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocCompareWindow". (bei Client-Relevanz: Classic-Client und Client 5)
- docFieldsEditDocument DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Webclient, Webclient5] Mögliche Werte: false, true Standardwert: true (D5), false (D4) Gültigkeit: ab: 4.00a Bei der Dokumentendetailansicht mit nebenstehenden Mappenfeldern, kann mit dieser Eigenschaft der Funktionsknopf "Dokument bearbeiten", mit dem das aktuell angezeigte Dokument direkt in den lokalen Bearbeitungsmodus versetzt werden kann, optional ausblendet werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- docRegisterGridType DlcRegister DlcFile DlcGlobalOptions string Veröffentlicht [Webclient5, Blob] Mögliche Werte: list, gallery Standardwert: list Gültigkeit: ab: 5.00d Mit der Eigenschaft docRegisterGridType kann man die Standardansicht für Dokumentenregister einstellen.
- docToolBarButtonDownload DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den "Download" Knopf ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonDownload".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonEdit DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den "Bearbeiten" Knopf ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonEdit".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonExternal DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den Knopf "Extern anzeigen" ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonExternal".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonInternal DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den Knopf "Intern anzeigen" ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonInternal".
(bei Client-Relevanz: Classic-Client und Client 5)
- DocumentAttributes DlcRegister DlcFile FeatureManager string Öffentlich [Blob, Webclient, Webclient5, Rechte] Mögliche Werte: Kommaseparierte Liste: author,lastModified,version,comment Gültigkeit: ab: 5.00d HF1 Über die Registereinstellung "Dokumentenfelder anzeigen" kann man alle Dokumenenattribute Author, geändert am, Version und Kommentar gemeinsam ein- oder ausblenden. Möchte man nur einzelne Attribute darstellen kann dies über eine Positivliste gemacht werden. Dafür wird am Register die Option "Dokumentenfelder anzeigen" gesetzt und die Eigenschaft DocumentAttributes=Attr1, Attr2,...Attrn ergänzt, wobei es die folgenden Attribute gibt:
* author
* lastModified
* version
* comment
- editRegisterName DlcRegister string Öffentlich [Webclient5] Mögliche Werte: tech. Name vom Register Gültigkeit: ab: 5.00a Mit der Eigenschaft "editRegisterName" am Register kann ein Register angegeben werden, welches beim Editieren der Mappe direkt angezeigt wird, wenn man auf einem bestimmten Register steht. Für den Mappendeckel kann "FileCover" verwendet werden.
Die Eigenschaft "startRegisterName" wird überstimmt
Allerdings wird "erstes Dokument öffnen" vorrangig behandelt
(bei Client-Relevanz: Neues Verhalten in Client 5)
- fileDetailsShowColumn DlcFolder DlcRegister string Öffentlich Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00a Mappendetails ausklappbar. (bei Client-Relevanz: Neues Verhalten in Client 5)
- fileLinkDefaultActions DlcRegister string Öffentlich [Webclient] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 6.2.0 Deaktiviert die Standardbuttons auf einem Mappenlinkregister.
- filter DlcRegister string Veröffentlicht Mögliche Werte: Filterausdruck Gültigkeit: ab: 3.60h bis: 4.00 Erstellt man in DOCUMENTS einen dynamischen Ordner, so kann man für diesen Ordner bis zu 3 Filter setzen. Mit diesen Property ist es möglich einen Filterausdruck anzugeben, der mehr als nur 3 Bedingungen enthält. Die Syntax des Filterausdrucks orientiert sich dabei an die vom PortalScripting. Dieses Property lässt sich auch in den Eigenschaften von dynamischen Ordnern setzen. Ab Documents 4 findet man dies unter dem Reiter Filter(erweitert).
- gadgetConfig DlcField DlcRegister DlcFolder DlcAction text Öffentlich Gültigkeit: ab: 5.00 JSON-Konfiguration zum Einbinden eines Gadgets an der konfigurierten Stelle. Näheres hierzu steht in der Gadget Dokumentation.
- HandleBlobWithAlreadyUsedNameAsNew DlcRegister DlcFile DlcGlobalOptions enum Veröffentlicht [Blob] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00c HF1 Wird ein Dokument auf ein Register hochgeladen, welches schon ein Dokument mit dem gleichen Namen enthält, dann wird das neue Dokument automatisch umbenannt (ein Zahl wird angehängt 0,1,2..).
Ist HandleBlobWithAlreadyUsedNameAsNew=0 gesetzt, dann wird das neue Dokument mit dem gleichen Namen als neue Version des bestehenden Dokumentes angesehen und ist das die neue aktuelle Version.
- hitlist DlcRegister string Veröffentlicht Mögliche Werte: Trefferlistenname im Format: Trefferlistenname bzw. Mappentyp.Trefferlistenname bei Verknüpfung meherer Mappentypen Gültigkeit: ab: 3.60 Bei der Verwendung eines Verknüpfungsregisters, kann hier die Trefferlistendefinition angegeben werden. Anmerkung:
Bei der Referenzierung über Mappentyp.Trefferliste wird die Sortierreihenfolge vom Mappentyp nicht übernommen. Der Grund ist, dass die Standardsortierung am Verknüpfungsregister vorrangig ausgeführt wird. Damit die Sortierung vom Mappentyp übernommen wird, muss die Registersortierung somit explizit ausgeschaltet werden.
Das Abschalten der Sortierung am Verknüpfungsregister funktioniert wie folgt:
Register: Filter (Feldwerte), Sortierung: Standard- Feld: definiertes Mappenfeld, Mappen-Feld leer lassen:
Nach dieser Einstellung wird jetzt die Sortierung der Trefferliste des referenzierten Mappentyps übernommen.
(bei Client-Relevanz: Classic-Client und Client 5)
- hitlistForSelection DlcRegister string Öffentlich [Webclient5] Gültigkeit: ab: 5.00e HF1 Bei Mappen-Linkregistern (n zu m Verknüpfungen) kann hiermit eine
Trefferliste für den Selektionsdialog festgelegt werden.
Wenn das Register nur einen Mappentyp verknüpft, genügt der technische Name
der Trefferliste als Wert. Ansonsten ist die Schreibweise
"Mappentyp.Trefferliste" erforderlich. Ohne Angabe bevorzugt die Anwendung die erste Trefferliste des ersten
vernküpften Mappentyps.
Mit einem Stern "*" als Wert kann auf den Wert der Eigenschaft "hitlist"
desselben Registers verwiesen werden.
- linkRegisterCompactView DlcGlobalOptions DlcFile DlcRegister string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00h HF1 Schaltet die Kompaktansicht für Verknüpfungsregister und Mappen-Link-Register ein/aus.
- linkRegisterCompactViewWidth DlcGlobalOptions DlcRegister DlcFile string Öffentlich [Webclient5] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00h HF1 Legt die Breite fest, ab der die Verknüpfungsregister- und Mappenlinkregisteransicht in den Kompaktmodus wechselt.
- nativePdfViewerUrlParameter DlcGlobalOptions DlcFile DlcRegister Systemuser string Öffentlich [Webclient5] Standardwert: view=fitV Gültigkeit: ab: 5.00e HF2 Über die Property können Parameter an die URL des Nativen PDF Viewers angehängt werden, mit denen der Viewer geöffnet werden soll. Beispiele hierfür sind 'view=FitV', 'view=FitH' und 'zoom=100'. Die Eigenschaft ist erst ab 6.1.0 am Benutzer verfügbar.
- NewRegisterFieldRights DlcGlobalOptions DlcFile DlcRegister string Öffentlich [Rechte, Webclient] Mögliche Werte: 0 Gültigkeit: ab: 4.00d Verrechtung am Dokumentenregister: Wenn auf dem Dokumentenregister
Mappenfelder angezeigt wurden, und das Dokumentenregister verrechtet war
haben fehlende Schreibrechte auf dem Dokumentenregister dazu geführt,
dass auch die Mappenfelder auf dem Register "readonly" waren.
Dieses wurde dahingehend korrigiert, dass Rechte auf Dokumentenregister
keinen Einfluß mehr auf die angezeigten Felder auf diesem Register haben.
Das alte Verhalten kann man über die Documents-Einstellungen Eigenschaft
NewRegisterFieldRights=0 erreichen.
Beim Starten des DOCUMENTSServers nach dem Patch auf die 4.0d wird ein-
malig eine Wartungsoperation ausgeführt, die nach der Verwendung von
Registerrechten sucht und automatisch dann die Eigenschaft
NewRegisterFieldRights=0 setzt
- NoEmptyFilterValue DlcRegister enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Gültigkeit: ab: 3.60h Wird bei einem Verknüpfungsregister im Filter kein Wert angegeben, so werden alle Mappen angezeigt. Mit diesen Property kann man dieses Verhalten unterdrücken, so dass das Register leer bleibt falls beim Filter kein Vergleichsausdruck angegeben wurde. Es wird dann gar nicht weiter recherchiert.
(s.a. QuoteEmptyFilterValue)
- OCR DlcGlobalOptions DlcFile DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: pdf, jpg, png,... (abhängig von dem verwendeten OCR-Tool Gültigkeit: ab: 5.00e Komma-separierte Liste von Extensions für die OCR durchgeführt werden soll.
Wenn ein Dokument hochgeladen wird, dessen Extension in der Liste konfiguriert ist, wird beim Hochladen der Datei OCR durchgeführt, wenn das Dokument noch keine Worte enthält. Details sind der Dokumentation auf https://otris.software zu entnehmen
- OCROutputFormat DlcGlobalOptions DlcRegister DlcFile string Öffentlich [Blob, OCR] Mögliche Werte: pdf, docx Standardwert: pdf Gültigkeit: ab: 5.00f Defaultmäßig ist die Ausgabe ein durchsuchbares PDF Dokument. Optional kann auch ein Word Dokument erstellt werden (nicht mit Tesseract möglich).
- OCRTextFormat DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: txt, alto Gültigkeit: ab: 5.00f Der durch die OCR erkannte Text wird extrahiert und im Script afterOcrScript als Parameter ocrText zur Verfügung gestellt.
Für den Wert "txt" im einfachen Textformat. Für den Wert "alto" im im ALTO XML Format.
- OCRTextTarget DlcFile DlcGlobalOptions DlcRegister string Öffentlich [Blob, OCR] Mögliche Werte: Registername Gültigkeit: ab: 5.00f Nur im Zusammenhang mit dem Property OCRTextFormat.
Falls OCRTextTarget einen gültigen Registernamen enthält, wird der mit OCR erkannte Text als zusätzliche Datei in das entsprechende Register hochgeladen. Falls OCRTextTarget ein gültiger Feldname ist, dann wird der erkannte Text in das Feld geschreiben (ab 5.0f HF1). Falls OCRTextTarget keinen gültigen Registernamen und keinen gültigen Feldnamen enthält aber einen Wert ungleich dem Leerstring enthält, wird der Text im Register des aktuellen Dokuments als Datei hochgeladen.
- openDocMode DlcGlobalOptions DlcFile DlcRegister enum Veröffentlicht [Blob, Webclient] Mögliche Werte: internal external download Standardwert: internal Gültigkeit: ab: 3.60b Bestimmt das Standardverhalten der Anzeige beim Öffnen eines Dokuments.
- PropertiesAsScriptParams DlcFolder DlcFile DlcRegister string Öffentlich [Scripting] Mögliche Werte: 0, 1 Standardwert: 0 Gültigkeit: ab: 4.00d HF3 Benutzerdef. Aktionen am Ordner, Mappentypen und Register: Wenn die Aktion ein PortalScript ausführt, kann über die Aktions-Eigenschaft PropertiesAsScriptParams=1 festgelegt werden, dass die Aktionseigenschaften als globale Parameter im Script zur Verfügung stehen. Dies ist dann sinnvoll, wenn ein Script bei mehrerer Aktionen verwendet werden soll.
- QuoteEmptyFilterValue DlcRegister enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60h Wird bei einem Verknüpfungsregister im Filter kein Wert angegeben, so werden alle Mappen angezeigt. Wird diese Eigenschaft gesetzt so werden leere Vergleichsausdrücke gegen zwei Anführungszeichen ersetzt, um nach einem leeren Feldwert zu suchen. (s.a. NoEmptyFilterValue)
- SearchMethod DlcRegister enum Veröffentlicht [Suche] Mögliche Werte: 0 1 2 3 4 5 Gültigkeit: ab: 3.60h Mit diesen Property kann man die Suchmethode festlegen, welche auf einem Verknüpfungsregister verwendet werden soll. Ist diese nicht definiert, wird die Suchmethode verwendet, die bei Documents-Einstellungen definiert ist. 0 - *Begriff* => Sucht den Begriff innerhalb eines Textfeldes ab unabhängig davon, ob es ein eigentändiges Wort ist oder in einen anderen Wort enthalten ist. Dies ist recht benutzerfreundlich, kann je nach Größe der Datenbank sehr performancelastig sein. 1 - Begriff => Es wird nur nach dem Begriff gesucht, wie dieser eingegeben wurde. 2 - Begriff* => Es werden Wörter in Textfeldern gesucht, die mit dem eingegebenen Begriff anfangen. 3 - entspricht Methode 0, aber ignoriert einzelne * im eingegebenen Suchbegriff bei den volltextindizierten Dateiinhalten 4 - entspricht Methode 1, aber ignoriert einzelne * im eingegebenen Suchbegriff bei den volltextindizierten Dateiinhalten 5 - entspricht Methode 2, aber ignoriert einzelne * im eingegebenen Suchbegriff bei den volltextindizierten Dateiinhalten Der Standardwert in DOCUMENTS ist die Suchmethode 2. Man kann dieses Property auch in Ordnern setzen.
- showMonitorStrict DlcGlobalOptions DlcFile DlcRegister string Öffentlich Mögliche Werte: false, true, 0, 1 Standardwert: false Gültigkeit: ab: 5.00d HF2 Mit dieser Property wird der Monitor nur auf Registern angezeigt, bei denen "Monitor anzeigen" angehakt ist.
Diese Property funktioniert nur, wenn unter Monitor "Auf Register darstellen" nicht gesetzt ist.
(bei Client-Relevanz: Nein (Server Feature))
- SkipActiveIfArchived DlcRegister enum Öffentlich [EAS, EBIS Store] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 6.1.2 Wenn diese Eigenschaft in einem Verknüpfungsregister aktiv ist und eine Archivmappe angezeigt wird, dann ermittelt dieses Register keine aktiven Mappen mehr. Nur bei schemaloser Archivierung unterstützt.
- SkipArchivedIfActive DlcRegister enum Öffentlich [EAS, EBIS Store] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 6.1.2 Wenn diese Eigenschaft in einem Verknüpfungsregister aktiv ist und eine aktive Mappe angezeigt wird, dann ermittelt dieses Register keine archivierten Mappen mehr. Nur bei schemaloser Archivierung unterstützt.
- treeScript DlcRegister string Öffentlich Mögliche Werte: Skript Gültigkeit: ab: 5.00a erzeugt Treechart auf einem Register, indem es ein Skript referenziert
(bei Client-Relevanz: Classic-Client und Client 5)
- Visible DlcRegister enum Öffentlich [Rechte, Webclient, Webclient5] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00e HF1 Über die Eigenschaft Visible=0 am Mappentyp-Register kann ein Register im Web-Client ausgeblendet werden. Diese Eigenschaft gilt immer für alle Mappen eines Mappentypen.
- documents.ini
- $AdditionalPropertiesFiles documents.ini enum Öffentlich Mögliche Werte: FileA FileB Gültigkeit: ab: 4.00b bis: 5.00d documents.ini: $AdditionalPropertiesFiles FileA,FileB lädt beim Starten des Servers die Properties-Dateien FileA_de.properties, FileB_de.properties aus dem /locale-Verzeichnis
- $AllowUpdateWorkflow documents.ini enum Veröffentlicht [Workflow] Mögliche Werte: 0 1 Gültigkeit: ab: 3.60c Mit der Eigenschaft $AllowUpdateWorkflow 1 kann für den Nicht-Live! Betrieb erzwungen werden, dass der Workflow von Visio auch bei angemeldeten Web-Benutzers übertragen wird. Mit Setzen der Eigenschaft $AllowUpdateWorkflow 0 ist es überhaupt nicht mehr möglich, einen bestehenden Workflow von Visio aus zu aktualisieren. Dann können nur noch neue Versionen eines Workflows hochgeladen werden. Standardmäßig ist eine Aktualisierung des Workflows bei angemeldeten Benutzern nicht erlaubt, da es dann durch Nebenläufigkeitsproblemen zu einem Serverabsturz kommen kann.
- $ArchiveClientMaxHTTPGetLength documents.ini string Öffentlich [EAS, EBIS Store, EEx] Mögliche Werte: 256 .. 16000 Standardwert: 16000 Gültigkeit: ab: 5.00i HF8 Der Archivclient von DOCUMENTS wandelt HTTP-GET-Anfragen ab einer bestimmten Länge der URL automatisch in POST-Anfragen um. Die Länge kann mit diesem Parameter vorgegeben werden. Immer wenn bei einer Archivanfrage ein "HTTP 414"-Fehler auftritt, korrigiert DOCUMENTS den Wert weiter nach unten. Die Einstellung ist deshalb nur notwendig, wenn bei langen URLs ein technisches Problem in den verwendeten Programmbibliotheken (libcurl, OpenSSL) auftritt.
- $ArchiveSemaLogWaitstates documents.ini enum Öffentlich [Debug] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00e HF1 Legt fest, ob Wartezeiten vor einem Archivzugriff im Server-Log protokolliert werden.
Diese Wartezeiten entstehen, wenn die eingestellte Höchstzahl gleichzeitiger Zugriffe für einen Archivserver überschritten wird.
- $AutoStartScript documents.ini string Öffentlich [Server, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 4.00e In der documents.ini kann mit
$AutoStartScript scriptname
ein Script definiert werden, welches pro Mandant beim Serverstart ausgeführt wird.
Das Script muss mit return 0; beendet werden.
Kein oder ein abweichender Wert führt zum Beenden des Servers.
(bei Client-Relevanz: Nein (Server Feature))
- $backupPackerCMD documents.ini string Veröffentlicht Mögliche Werte: Programmpfad Gültigkeit: ab: 3.60d Mit diesen Eintrag in die partnernet.ini kann man festlegen, welchen Packer man für das Backup benutzen möchte. Zudem werden Zielarchiv und die zu packenden Daten festgelegt (s.a $backupPackerType und $backupUnpackerCMD) Beispiel:
$backupPackerCMD "[INSTALLDIR]\7za.exe" a -r "%targetarchive" %whattozip
- $backupPackerType documents.ini string Veröffentlicht Mögliche Werte: Formattyp Standardwert: Formattyp Gültigkeit: ab: 3.60d Der bei der Portaldatensicherung verwendete Packer (zip/unzip) hat eine Begrenzung auf 2GB große zip-Dateien und ca. 65000 Dateien. Mit diesen und 2 weiteren Einträgen ($backupPackerCMD und $backupUnpackerCMD) kann man für die Sicherung einen anderen Packer verwenden. Beispiel:
$backupPackerType 7z
- $backupUnpackerCMD documents.ini string Veröffentlicht Mögliche Werte: Programmpfad Gültigkeit: ab: 3.60c In Verbindung mit dem Einträgen $backupPackerType und $backupPackerCMD dient dieser Eintrag in die partnernet.ini dazu den Pfad des zu entpackenden Programmes und das Archiv bekannt zu machen. Beispiel:
$backupUnpackerCMD "[INSTALLDIR]\7za.exe" x -y "%archive"
- $CAInfoFile documents.ini string Öffentlich [EAS, Email] Gültigkeit: ab: 4.00d Pfad auf eine Datei im PEM-Format mit einer Liste vertrauenswürdiger CA-Stammzertifikate.
Wenn Mailserver oder Archivserver mit SSL bzw. TLS-Verschlüsselung angesteuert werden sollen, wird diese Datei zur Authentizitätsprüfung der Server benötigt. Sollte eins dieser Stammzertifikate einmal zurückgezogen werden (insbesondere nach einem Einbruch in Server einer CA-Authority), muss die Datei aktualisiert und der DocumentsServer einmal neu gestartet werden.
DOCUMENTS liefert keine solche Datei mit. Es kann sie auch nicht automatisch aktuell halten. Administratoren müssen sich selbst darum kümmern.
- $ClearFilePoolAt documents.ini string Öffentlich Mögliche Werte: 0-23 Standardwert: 2 Gültigkeit: ab: 5.00a HF2 Einmal täglich wird der Job zum Löschen von nicht mehr genutzten Pool-Mappen ausgeführt. Dieser Job findet standardmäßig um 02:00 Uhr statt. Über die Eigenschaft kann eine andere Stunde am Tag angegeben werden.
(bei Client-Relevanz: Nein (Server Feature))
- $ClearFilePoolAtExport documents.ini enum Öffentlich [Server] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00c Datensicherung / jex-Export: Über die documents.ini Eigenschaft $ClearFilePoolAtExport 0 kann das Löschen des Mappen-Pools im Kontext der Datensicherung / jex-Export abgeschaltet werden
- $ClearTrashFolderAt documents.ini string Öffentlich [Ordner] Mögliche Werte: 0-23 Standardwert: 2 Gültigkeit: ab: 5.00h HF1 Einmal täglich wird der Job zum Löschen von Mappen im Papierkorb, die länger als n-Tage nicht geändert worden sind, ausgeführt, wobei n über die globable Eigenschaft 'ClearTrashFolder' eingestellt werden kann. Dieser Job findet standardmäßig um 02:00 Uhr statt. Über diese Eigenschaft kann eine andere Stunde am Tag angegeben werden.
- $concatpdf documents.ini string Öffentlich [Blob, pdf-Druck] Mögliche Werte: [Programmpfad] %input output %output dont_ask Standardwert: [Programmpfad] %input output %output dont_ask Gültigkeit: ab: 3.60j Hiermit kann ein Programm festgelegt werden, dass einzelne PDFs zusammenfügen kann. Werden ältere PDFs verwendet, so wird diese Einstellung ebenfalls benötigt.
(bei Client-Relevanz: Nein (Server Feature))
- $convert documents.ini text Öffentlich [Blob, pdf-Druck] Mögliche Werte: .[Dateityp] [Pfad des Programms] %input %output Beispiel: $convert.png "C:\Programme\ImageMagick-6.2.9-Q8\convert.exe" %input %output weitere Beispiele finden sich in der partnernet.ini Gültigkeit: ab: 3.60j Hiermit lassen sich Programme registrieren, die Blobs in pdf umwandeln können. Diese werden dann für den pdf Druck verwendet.
(bei Client-Relevanz: Nein (Server Feature))
- $CountLinkFilesRefreshInterval documents.ini enum Öffentlich Mögliche Werte: 1 Standardwert: 10 Gültigkeit: ab: 4.00a Am Register kann mit der Eigenschaft countLinkFiles=1 die Anzahl der in einem Verknüpfungsregister enthaltenen Mappen im Register-Label dargestellt werden. Achtung: Diese Einstellung ist sehr performance- lastig.
In der documents.ini kann mit Parameter $CountLinkFilesRefreshInterval=n (n in Sekunden) ein Interval angegeben werden, in dem die Anzahl der Mappen beim Refresh nicht neu ermittelt, sondern aus dem Cache genommen wird
(bei Client-Relevanz: Nein (Server Feature))
- $coverFontFamily documents.ini string Öffentlich [Blob, pdf-Druck] Mögliche Werte: ArialUni Standardwert: ArialUni Gültigkeit: ab: 4.00 Mit diesen Property lässt sich die Schriftart für den Mappendeckel (pdf-Druck) bestimmen. Eine Definition ist dann immer notwendig, wenn Zeichen verwendet werden, die nicht zu den eingebetteten pdf-Standardschriftarten gehören.
- $DailyBackupWithHistory documents.ini enum Öffentlich [Performance] Mögliche Werte: 0 Gültigkeit: ab: 4.00c Daily Backup: Beim daily backup werden die Backup zip-Dateien immer um das aktuelle Respository ergänzt. D.h, dass im daily backup auch noch Blobs enhalten sind, welche aktuell gar nicht mehr im Repository sind.
Soll nur das aktuelle Repository immer im daily backup sein, kann dies über die documents.ini Einstellung: $DailyBackupWithHistory 0 gesteuert werden.
- $DebugLocalesOnCall documents.ini enum Öffentlich [Debug, Login/Logout/LDAP] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00d HF2 Die Eigenschaft wird nur von Debugservern unterstützt. Wenn eingeschaltet, werden bei jedem Aufruf einer netzwerkfähigen DocumentsServer-Klassenoperation die anfänglichen Spracheinstellungen (von Clientinfo und ggf. von der aktuellen EE.x-Session des Benutzers) ins Serverlog geschrieben.
- $DelayedDeletionJobMaxDuration documents.ini string Öffentlich [Performance] Standardwert: 60 Gültigkeit: ab: 4.00d HF3 Laufzeitbegrenzung für den Job, der nicht mehr verwendbare temporäre Archivmappen verzögert löscht (nach Löschen der Archivmappe oder nach einer Reaktiierung). Der Wert ist eine Sekundenangabe. Für "unendlich" kann -1 angegeben werden. Siehe auch $TempFileDeletionJobMaxDuration
- $DeleteTempArchiveFiles documents.ini enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 Standardwert: 1 Gültigkeit: ab: 3.60f Verhindert, dass beim Serverstart die temp. Suchtreffer von EE.i bzw. EE.x gelöscht werden. Dies ist manchmal sinnvoll, da bei großer Anzahl der temp. Suchtreffer das Löschen länger dauern kann.
s. auch $DeleteTempArchiveFilesAt
- $DeleteTempArchiveFilesAt documents.ini string Veröffentlicht [EEi, EEx] Mögliche Werte: n = 0-23 Standardwert: n Gültigkeit: ab: 3.60d Es kann eine Stunde (0-23) definiert werden zur der ein Job die temp. Suchtreffer löscht. s. auch $DeleteTempArchiveFiles.
- $DisableFilingPlanCache documents.ini enum Öffentlich [Aktenplan] Mögliche Werte: 1 Gültigkeit: ab: 4.00c Mit diesen Property kann man das cachen des Aktenplan unterbinden. Dies ist besonders sinnvoll, wenn man keine Cookies verwendet, da auch alte Session IDs gecacht werden.
- $DisablePortalScriptCache documents.ini enum Öffentlich [Scripting] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00 Standardmäßig wird der Quellcode von PortalScripten bei der ersten Ausführung gecacht und wiederverwendet. Wenn nun Scripte aus dem scriptlibs Verzeichnis verwendet werden, erkennt der DocumentsServer nicht, wenn diese geändert wurden und der ScriptCache muss explizit geleert werden. Bei der Entwicklung neuer Scripte ist es komfortabler den Script in der documents.ini mit $DisablePortalScriptCache false abzuschalten.
- $DlcDoNotDeleteDocuments documents.ini enum Öffentlich [Blob, Debug] Mögliche Werte: 1 Standardwert: 1 Gültigkeit: ab: 3.60j Dieses Property wird unter dem Punkt "Misc Settings" gesetzt. Es wird hiermit verhindert das Documents Dokumente löscht. Es wird im Repository ein Ordner trash angelegt in dem dann alle aus dem WebClient gelöschte Dokumente hineinkopiert werden.
- $DMSkin documents.ini enum Öffentlich [DOCUMENTS Manager] Mögliche Werte: 0 2 3 Standardwert: 3 Gültigkeit: ab: 5.00e Beschreibt die Grundlayout und Grundfarbe des Documents Managers:
0: Classic Design: Listenansicht ist oberhalb des HTML Previews
2: Modern Design A: lightgrey, dark Infobar, Listenansicht neben HTML Preview
3: Modern Design B: lightgrey, Highlight Infobar, Listenansicht neben HTML Preview
- $DMSkinColor1 documents.ini string Öffentlich [DOCUMENTS Manager] Mögliche Werte: r,g,b wobei {0,255} Standardwert: 76,130,184 Gültigkeit: ab: 5.00e Beschreibt die Icon-Highlightfarbe der Icons im Documents Manager
- $DMSkinColor2 documents.ini string Öffentlich [DOCUMENTS Manager] Mögliche Werte: r,g,b wobei {0,255} Standardwert: 102,102,102 Gültigkeit: ab: 5.00e Beschreibt die Icon-Grundfarbe der Icons im Documents Manager
- $DocSearchBindParams documents.ini enum Öffentlich [DB] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00e Documents-Suche: optional SQL mit mehr gebundenen Parametern generieren, um den Ausführungsplan-Cache der Datenbank zu entlasten. Momentan wird dies für MS-SQLServer und Oracle DB unterstützt. Ab DOCUMENTS 5.0 HF2 wurde die Werkseinstellung auf 1 geändert.
- $DocSearchCheckLIKEBinding documents.ini enum Öffentlich [Performance] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00e In Kombination mit "$DocSearchBindParams 1" steuert dieser Parameter, ob die DOCUMENTS-Suchfunktion für die Mustersuche mit einem "*" in den ersten 3 Zeichen auf ungebundene Parameter zurückschaltet. Hintergrund: Die Abfrageoptimierer relationaler Datenbanken rechnen bei "LIKE"-Ausdrücken mit gebundenem Parameter eher mit einer selektiven Bedingung. Wenn schon in den ersten Zeichen eine Wildcard in der gesuchten Konstante steht, wird solch eine ohnehin zeitaufwändige Abfrage mit gebundenem Parameter u.U. noch langsamer.
- $DocSearchIdLoadGrouping documents.ini string Öffentlich [Suche, Performance] Standardwert: 400 Gültigkeit: ab: 5.00f Wenn bei der internen Documents-Suche die Mappen-Ids der Treffer frühzeitig (d.h. schon vor dem Durchblättern der Trefferliste) ermittelt werden sollen, aber die Komplexität der Suchanfrage ein direktes Mitlesen dieser Ids ausschließt, werden si nachträglich anhand der gefundenen Oids mit separaten SQL-Abfragen ermittelt.
Für diesen speziellen Vorgang bestimmt der Parameter die Gruppengröße, d.h. die maximale Anzahl von übersetzten Ids innerhalb einer einzelnen SQL-Abfrage.
Sowohl zu kleine Werte als auch zu große Werte können den Vorgang verlagsamen. Zudem gibt es datenbankabhängig eine technische Obergrenze (Maximalzahl an gebundenen Parametern). Wenn die Eigenschaft "LoadFileIdsDuringSearch" auf "2" bzw "async" eingestellt ist, gilt diese Gruppengröße zugleich als Untergrenze für den asynchronen Modus. Erst wenn mehr Treffer vorhanden sind als hier angegeben, wird ein asynchrones Nachladen der Ids in Erwägung gezogen.
- $EMailAttachmentMaxSize documents.ini text Veröffentlicht [Blob, Email] Mögliche Werte: Größe in MB z.B.: $EMailAttachmentMaxSize 20 Standardwert: 10 Gültigkeit: ab: 3.60 Max. Größe der Attachments einer EMail aus dem Portal in MB. Standardmäßig ist der Wert 10MB
- $ExtendedSecurityChecks documents.ini enum Öffentlich Mögliche Werte: 0 Standardwert: 1 Gültigkeit: ab: 4.00e HF2 Die Rechteprüfung wurde in der Version 4e HF2 überarbeitet und prüft nun die Aktionen genauer. Mit diesen Schalter kann man jedoch dieses Verhalten ausschalten. (s.a. $FileRightCacheLifetime).
- $ExternalLogExtensions documents.ini string Öffentlich [DOCUMENTS Manager, Server] Gültigkeit: ab: 6.1.1 Wenn $ExternalLogPath angegeben ist, kann hiermit festgelegt werden,
dass aus den Zusatzverzeichnissen nur Dateien mit bestimmten
Namenserweiterungen aufgelistet werden.
Die Erweiterungen sind ohne vorangestellten Punkt kommasepariert anzugeben.
Ein Minuszeichen in der Liste repräsentiert hierbei Dateien ohne Namenserweiterung.
- $FCPFilterNoCase documents.ini enum Öffentlich [Suche, Rechte] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00b Die Eigenschaft existiert nur in der Oracle-Version
Sie legt fest, ob Mappenklassenschutzfilter bei der internen Recherche explizit case-insensitiv, d.h. ohne Beachtung der Großschreibung ausgestaltet werden. Dies hat Einfluss auf die Suchperformance.
Für Mappentypen, die die ACL-Cachetabelle verwenden, ist diese Einstellung wirkungslos. Rein fachlich mag für den Mappenklassenschutz ein case-sensitiver Vergleich sinnvoller erscheinen.
Der Datenbankindex für die schnelle Feldwertsuche (FSRCHSV) ist seit 4.0b jedoch auf case-insensitive Vergleiche optimiert, da diese in DOCUMENTS meistens verwendet werden. Entsprechend ist die
Option "1" die schnellere Einstellung.
Ein zusätzlicher manuell angelegter (case-sensitiver) Index in der Feldtabelle ist eine denkbare Alternative. Er wäre allerdings ausgesprochen speicherhungrig und könnte Schreibzugriffe auf Felder spürbar verlangsamen.
- $FilePoolMaxAge documents.ini string Öffentlich Mögliche Werte: 1-n Standardwert: 7 Gültigkeit: ab: 5.00a HF2 Der Job zum Löschen von Pool-Mappen, löscht Pool-Mappe die eine definierte Anzahl von Tagen nicht mehr verwendet worden sind. Über diese Eigenschaft kann diese Anzahl in Tagen angegeben werden.
s. auch $ClearFilePoolAt
- $FileRightCacheLifetime documents.ini enum Öffentlich Mögliche Werte: 0 Standardwert: 1 Gültigkeit: ab: 4.00e HF2 Ab Documents 4e HF2 gibt es eine verschärfte Rechteprüfung. Da diese recht performance lastig ist wurde ein Rechte Cache für Benutzer hinzugefügt. Diesen kann man jedoch mit dieser Eigenschaft ausschalten. (s.a. $ExtendedSecurityChecks).
- $FollowUpOldImpl documents.ini string Öffentlich [DB] Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00i In Documents 5.0i wurde der Wiedervorlagenjob überarbeitet.
Beim SQLServer und bei Oracle DB wird nun anstelle des
herkömmlichen Iterators eine Sonderimplementierung mit
gebundenen Parametern benutzt, um den Ausführungsplancache
der Datenbank zu entlasten. Sollte es mit der Neuimplementierung mal ein unerwartetes Problem
geben, kann durch das Setzen dieser Eigenschaft + Neustart
der alte Code reaktiviert werden.
- $FrequentHitlistChecks documents.ini enum Öffentlich [Debug] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00 Option, welche den Wartungsjob zur automatischen Speicherfreigabe von Suchergebnissen, auf die lange nicht mehr zugegriffen wurde, minütlich ausführen lässt.
Änderungen der Eigenschaft werden nach Neustart wirksam oder wenn alle Jobs mit den Wartungskommandos "jobs off" + "jobs on" neu initialisiert werden. Dies dient nur der berschleunigten Fehlersuche, falls dieser Job etwas Unvorhergesehenes tut.
Anmerkung: Derselbe Job löscht auch persistente temporäre Archivmappen, die noch gültig sind aber lange nicht mehr abgefragt wurden.
- $GRPCEnabled documents.ini string Veröffentlicht Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00h Um gPRC-Service zu aktivieren, ist die Option $GRPCEnabled in der Datei documents.ini auf true zu setzen.
- $gRPCTesseractCaCert documents.ini string Öffentlich [OCR, gRPC] Mögliche Werte: Dateipfad Gültigkeit: ab: 5.00h HF3 Mit der Option in documents.ini kann man den Pfad des CA-Zertifikates zur TLS-Verschlüsselung des gRPC-Tesseract Clients angeben.
Siehe auch $gRPCTesseractTLS, $gRPCTesseractClientCert und $gRPCTesseractClientKey.
- $gRPCTesseractClientCert documents.ini string Öffentlich [OCR, gRPC] Mögliche Werte: Dateipfad Gültigkeit: ab: 5.00h HF3 Mit der Option in documents.ini kann man den Pfad des Cleint-Zertifikates zur TLS-Verschlüsselung des gRPC-Tesseract Clients angeben.
Siehe auch $gRPCTesseractTLS, $gRPCTesseractCaCert und $gRPCTesseractClientKey.
- $gRPCTesseractClientKey documents.ini string Öffentlich [OCR, gRPC] Mögliche Werte: Dateipfad Gültigkeit: ab: 5.00h HF3 Mit der Option in documents.ini kann man den Pfad des privaten Schlüssels des Cleint-Zertifikates zur TLS-Verschlüsselung des gRPC-Tesseract Clients angeben.
Siehe auch $gRPCTesseractTLS, $gRPCTesseractCaCert und $gRPCTesseractClientCert.
- $gRPCTesseractTLS documents.ini string Öffentlich [OCR, gRPC] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00h HF3 Mit der Optoin '$gRPCTesseractTLS' in documents.ini kann man die TLS-Verschlüsselung für den gRPC-Tesseract Client aktivieren.
Siehe auch $gRPCTesseractCaCert, $gRPCTesseractClientCert und $gRPCTesseractClientKey.
- $GRPC_ARG_HTTP2_MIN_RECV_PING_INTERVAL_WITHOUT_DATA_MS documents.ini string Öffentlich [gRPC] Standardwert: 300000 Gültigkeit: ab: 6.2.0 Mit der Option "$GRPC_ARG_HTTP2_MIN_RECV_PING_INTERVAL_WITHOUT_DATA_MS=n in ms" in der documents.ini kann man den minimalen Abstand zwischen zwei Keepalive-Pings während einer Call-Ausführung konfigurieren. Der Standardwert ist 300.000 = 5 Minuten. Wenn zu viele Keepalive-Pings kommen, dann wird der Fehler "too many pings" geworfen.
- $GRPC_CACert documents.ini string Veröffentlicht Mögliche Werte: Dateipfad Gültigkeit: ab: 5.00h Mit dieser Einstellung kann man den Pfad von Root-CA für gRPC-Service in der Datei documents.ini angeben, z.B. unter Windows
$GRPC_CACert [INSTALLDIR]\certs\grpc\ca_cert.pem. Im Anschluss muss der Server neu gestartet werden. Siehe auch $GRPC_ServerKey und $GRPC_ServerCert
- $GRPC_MAX_RECEIVE_MESSAGE_LENGTH documents.ini string Öffentlich [gRPC] Mögliche Werte: n (MB) Gültigkeit: ab: 6.2.0 Mit der Option '$GRPC_MAX_RECEIVE_MESSAGE_LENGTH=n' in der documents.ini kann man die maximale Nachrichtenlänge, die der Kanal empfangen kann, festlegen.
-1 bedeutet unbegrenzt.
Ohne Konfiguration ist das auf 4 MB beschränkt.
- $GRPC_MAX_SEND_MESSAGE_LENGTH documents.ini string Öffentlich [gRPC] Mögliche Werte: n (MB) Gültigkeit: ab: 6.2.0 Mit der Option '$GRPC_MAX_SEND_MESSAGE_LENGTH=n' in der documents.ini kann man die maximale Nachrichtenlänge, die der Kanal senden kann, festlegen.
-1 bedeutet (Defaultwert) unbegrenzt.
- $GRPC_ServerCert documents.ini string Veröffentlicht Mögliche Werte: Dateipfad Gültigkeit: ab: 5.00h Mit dieser Einstellung kann man den Pfad des Serverzertifiktes für gRPC-Service in der Datei documents.ini angeben, z.B. unter Windows
$GRPC_ServerCert [INSTALLDIR]\certs\grpc\server_cert.pem. Im Anschluss muss der Server neu gestartet werden. Siehe auch $GRPC_CACert und $GRPC_ServerKey
- $GRPC_ServerKey documents.ini string Veröffentlicht Mögliche Werte: Dateipfad Gültigkeit: ab: 5.00h Mit dieser Einstellung kann man den Pfad des privaten Schlüssels des Serverzertifiktes für gRPC-Service in der Datei documents.ini angeben, z.B. unter Windows $GRPC_ServerKey [INSTALLDIR]\certs\grpc\server_key.pem. Im Anschluss muss der Server neu gestartet werden. Siehe auch $GRPC_CACert und $GRPC_ServerCert
- $GRPC_ServerPort documents.ini string Öffentlich [gRPC] Mögliche Werte: Portnummer Gültigkeit: ab: 5.00i gRPC-Port des Documents-Server ist konfigurierbar mit dem documents.ini Eintrag:
$GRPC_ServerPort <port> Wenn der Eintrag fehlt, wird der Port 50050 verwendet.
- $LC_COLLATE documents.ini text Veröffentlicht Mögliche Werte: "" "german", "french", "greek" u.s.w. Gültigkeit: ab: 4.00 Der Parameter bezeichnet eine Sprache, nach deren Regeln der DocumentsServer sortieren soll.
Diese Einstellung wirkt sich aus, sobald der DocumentsServer eine Datenliste sortieren muss und diese Aufgabe nicht vollständig dem Datenbankserver oder einem Archivserver zuweisen kann. Gibt man hier lediglich zwei Anführungszeichen ohne Zwischenraum an, dann wird die im Betriebsystem eingestellte Sprache benutzt
Wird der Parameter überhaupt nicht angegeben, dann sortiert der Server wie in älteren Versionen auf der Basis von Computerzeichencodes.
Eine für jede Portalsprache individuell angepasste Sortierung ist aus technischen Gründen weiterhin unmöglich.
- $LogArchiveRequestDelays documents.ini enum Öffentlich [Debug] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00e Diese Eigenschaft steuert, ob der DocumentsServer Wartezeiten protokolliert, welche beim Archivzugriff durch Überschreitung der für den Archivserver vorgegebene Höchstzahl gleichzeitiger Zugriffe auftreten können. Die Einstellung kann auch ohne Serverneustart mit der Wartungsoperation "LogArchiveRequestDelays" geändert werden.
- $LogicalAndBetweenSeachPhrases documents.ini text Öffentlich [Suche] Mögliche Werte: 0 = ODER Verbindung 1 = UND Verbindung Standardwert: UND Verbindung Gültigkeit: ab: 3.60j Mit dieser Einstellungn in der partnernet.ini lässt sich das Verhalten der Suche in DOCUMENTS und RETRIEVAL verändern. Je nach gesetztem Wert kann man die Verbindung von 2 Wörtern festlegen.
- $MailService documents.ini string Öffentlich [Email] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00f Ist die Serveroption '$MailService' in documents.ini auf 0 gesetzt, wird jeglicher Mailversand ausgeschaltet.
- $MaxEnumLength documents.ini string Veröffentlicht Mögliche Werte: n Standardwert: 2000 Gültigkeit: ab: 3.60 Die Anzahl der Aufzählungswerte eines Feldes vom Typ »Aufzählung« ist auf standardmäßig auf 2000 Einträge beschränkt. Eine Begrenzung ist notwendig, da man durch rekursive AutoTexte eine Endlosschleife produzieren könnte. Auch aus Performancegründen ist eine Begrenzung sinnvoll. Man kann aber über einen Eintrag »$MaxEnumLength n« in der documents.ini die Anzahl auf n Einträge festsetzen.
Dies gilt für die »Klappliste« und die »Doppelauswahlliste«.
- $MM_LogMemory documents.ini string Öffentlich [Debug] Mögliche Werte: 1 Gültigkeit: ab: 4.00 Wird diese Eigenschaft gesetzt, werden alle 10 Sekunden Informationen zum Speicherverbrauch in die Logs geschrieben
(bei Client-Relevanz: Nein (Server Feature))
- $MM_MaxPrivateBytes documents.ini string Öffentlich [Server] Mögliche Werte: Anzahl der Megabytes die der Server maximal verwenden soll/darf. Standard-Wert ist 4000 und bedeutet 4GB Standardwert: 4000 Gültigkeit: ab: 4.00 Speicher, den der Portal-Server maximal verwenden darf/soll.
- $NoJobs documents.ini enum Veröffentlicht Mögliche Werte: 1 Standardwert: 1 Gültigkeit: ab: 3.60c Diese Eigenschaft schaltet alle Portal-Jobs ab (d.h. Script-Jobs, Eskalationen, Mail-Job, Wiedervorlage-Job etc). Optional kann man die Jobs auch per Wartungsoperation abschalten (jobs on / jobs off).
Die Eigenschaft hat gegenüber der Wartungsoperation den Vorteil, dass auch keine Jobs direkt nach Serverstart ausgeführt werden.
Das Abschalten der Jobs ist nur für den Testbetrieb und zur Fehlersuche zulässig!
- $NumberEscalationJobsPerHour documents.ini text Öffentlich [Workflow] Mögliche Werte: Anzahl der Jobs pro Stunde Max. 20 Standardwert: 12 Gültigkeit: ab: 3.60j Die Intervalle der Workflow Eskalation Kontrolle lässt sich hiermit einstellen.
- $NumberFollowUpJobsPerHour documents.ini text Öffentlich Mögliche Werte: Häufigkeit pro Stunde Max. 20 Standardwert: 4 Gültigkeit: ab: 3.60j Mit der Eigenschaft $NumberFollowUpJobsPerHour lässt sich festlegen wie oft in der Stunde die Wiedervorlage von Mappen überprüft werden soll.
- $NumberScriptJobsPerHour documents.ini text Öffentlich [Scripting] Mögliche Werte: Anzahl der jobs pro Stunde Max. 20 Standardwert: 12 Gültigkeit: ab: 3.60j Mit dieser Eigenschaft in der partnernet.ini lässt sich die Häufigkeit der Scriptjobs pro Stunde festlegen.
- $NumberSignalJobsPerHour documents.ini string Öffentlich [Workflow] Mögliche Werte: Häufigkeit pro Stunde Standardwert: 12 Gültigkeit: ab: 3.60j Hierbei handelt es sich um die Kontrolle von Signaleingängen, die im Workflow verwendet werden können.
- $NumberWorkflowStepReponseDateJobHour documents.ini text Öffentlich [Workflow] Mögliche Werte: Häufigkeit pro Stunde Max. 20 Standardwert: 12 Gültigkeit: ab: 3.60j Mit diesen Property wird der Intervall für die Kontrolle der Reaktionszeit von Versendelisten festgelegt.
- $PortalScriptMaxImportDepth documents.ini string Veröffentlicht [Scripting] Mögliche Werte: n ganzzahlig Standardwert: 50 Gültigkeit: ab: 5.00c Als Rekursionschutz für #import Anweisungen im PortalScripting ist eine maximale Rekursionstiefe von 50 definiert. Diese kann die Eigenschaft in der documents.ini
- $PreferExternalSort documents.ini string Veröffentlicht Mögliche Werte: $PreferExternalSort 0 Gültigkeit: ab: 3.60c Standardmäßig wird bei Suchanfragen die Sortierfunktionalität der Datenbank verwendet (funktioniert nur für Mappentypen). Mit dieser Eigenschaft kann dieses Verhalten abgeschaltet werden und es wird im PortalServer die Sortierung durchgeführt.
- $PreferSubqueryForFieldFilters documents.ini enum Öffentlich [Suche, Performance] Mögliche Werte: 0 1 false true Standardwert: 0 Gültigkeit: ab: 5.00a Diese Einstellung beeinflusst die von DOCUMENTS bei der Suche nach aktiven Mappen erzeugten SQL-Abfragen.
Wenn die Eigenschaft auf 1 oder true gesetzt wird, benutzt DOCUMENTS für Feldwertfilter vorzugsweise Subqueries anstatt klassischer Joins. Ansonsten ist es eher umgekehrt.
Manche Datenbanken können die Abfrage mit Subqueries besser optimieren und antworten dann schneller. Es gibt jedoch auch den umgekehrten Fall. In begründeten Fällen ignoriert DOCUMENTS diese Einstellung Beispielsweise wird keine Suqquery generiert, wenn ein Feld gleichzeitig im Filterausdruck vorkommt und eine Sortierspalte ist.
- $PreloadFilingPlanCache documents.ini string Öffentlich [Aktenplan] Mögliche Werte: 1 Standardwert: 0 Gültigkeit: ab: 4.00c Wird diese Eigenschaft gesetzt, so werden alle Aktenpläne beim Serverstart in den Cache geladen. Dadurch wird es möglich die Aktenpläne schneller zu laden.
- $PrincipalSafeSuggestions documents.ini enum Öffentlich [Suche] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00 HF1 Mandantensichere Generierung von Suchvorschlagen aktivieren (Standard). Wenn ausgechaltet (=0), fließen Feldwerte sämtlicher Mandanten in die Vorschläge ein (nur Primärindex, kein Volltext). Das ist datenbankseitig etwas schneller, jedoch nicht im Sinne des Datenschutzes.
- $ReindexFieldsAfterJexImport documents.ini enum Öffentlich [Server] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00b HF2 Seit Version 5.0b HF2 wird nach dem Import einer Datensicherung / jex-Import automatisch der Volltextindex für Volltext-indexierte Felder neu aufgebaut (analog der Wartungsoperation "reindex fields"). Mit der Eigenschaft $ReindexFieldsAfterJexImport = 0 kann dieses Verhalten wieder abgeschaltet werden.
- $ScriptLog documents.ini enum Veröffentlicht [Debug, Scripting] Mögliche Werte: 1 Pfad auf csv-Datei Gültigkeit: ab: 3.60d Wird diese Option in der documents.ini gesetzt, werden der Startzeitpunkt, der Endzeitpunkt sowie die Laufzeit eines PortalScriptes protokolliert.
Für den Wert $ScriptLog 1 werden diese Informationen in die DocumentsServer__.log geschrieben.
- $SearchSQLStyles documents.ini string Öffentlich [DB, Suche] Standardwert: In DOCUMENTS 5: 0x29 bzw. 41; allgemein versions- und datenbankabhängig Gültigkeit: ab: 4.00 Dieser Parameter steuert verschiedene Aspekte der Generierung von Datenbankabfragen für die interne Suche nach Mappen. Es handelt sich hierbei um ein Bitfeld, dessen Wert entweder hexadezimal mit "0x" oder als Dezimalzahl anzugeben ist.
Während einige verfügbare Optionen sich nur auf die Abfragegeschwindigkeit in Spezialfällen auswirken, deaktivieren andere Optionen ganze Teile der Suchfunktion. Wenige Kombinationen können datenbankspezifisch sogar SQL-Fehler auslösen, welche die Suche komplett unbrauchbar machen.
Die Einstellung gilt für alle Suchanfragen gleichermaßen, z.B. auch für dynamische Ordner, Verknüpfungsregister oder FileResultsets. __Liste der unterstützten Optionen__
(Bitnummer / Zweierpotenz Dez./Hex. / Bedeutung)
#0 / 1 / 0x1 / Subquery-Syntax für ACL-Prüfungen per Cachetabelle benutzen (Standard)
#2 / 4 / 0x4 / OPTION (HASH_JOIN) für Abfragen mit mindestens 3 Elementen in der FROM-Liste benutzen (nur SQLServer)
#3 / 8 / 0x8 / Subqueries für Volltextfilter sind erlaubt (Standard)
#4 / 16 / 0x10 / Subqueries für Volltextfilter gegenüber Einzelabfragen bevorzugen
#5 / 32 / 0x20 / Bei einer Kaskadensuche mit mehreren Instanzen des "Volltext"-Suchfelds separate Abfragen verwenden statt einer komplexeren (Standard) #12 / 4096 / 0x1000 / Abschalten der Suche in Mappenattributen (Titel, Eigentümer).
#13 / 8192 / 0x2000 / Abschalten der Suche in der Feldtabelle und in der Feld-Volltexttabelle.
#14 / 16384 / 0x4000 / Abschalten der Suche in der Anlagentabelle (Dateiname, Kommentar)
#15 / 32768 / 0x8000 / Abschalten die Suche in der Volltexttabelle für Anlagen.
#16 / 65536 / 0x10000 / Abschalten der Suche in der Volltexttabelle für Anlagen nur wenn in einem Ordner gesucht wird.
- $SharedUserMaxSameLogins documents.ini string Veröffentlicht [Login/Logout/LDAP] Mögliche Werte: Anzahl Standardwert: 1000 Gültigkeit: ab: 3.60c Mit dieser Eigenschaft kann die max. Anzahl gleichnamige Login bei Shared Usern festgelegt werden.
- $SortOrderOfEmptyDatesAndNumbers documents.ini enum Öffentlich [Sortierung] Mögliche Werte: 1 -1 Standardwert: -1 Gültigkeit: ab: 4.00d Vor Version 4.0d wurden numerische Felder und Datumsfelder ohne Inhalt von Documents in Trefferlisten bei interner Sortierung wie "+unendlich" gewertet.
Dies widerspricht jedoch dem üblichen Verhalten bei datenbankseitiger Sortierung ("-unendlich"). Die interne Sortierung wurde in 4.0d entsprechend angepasst.
Das alte, asymmetische Verhalten kann mit dem Parameter "$SortOrderOfEmptyDatesAndNumbers 1" eingestellt werden. Das neue Verhalten entspricht der Voreinstellung "-1".
- $SortPropertyLists documents.ini string Öffentlich Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00 Eigenschaftenseiten im DocumentsManager listen die Eigenschaften traditionell in derselben Reihenfolge auf, wie sie hinfugefügt wurden. Dies entspricht der Parametereinstellung 0.
Documents 5 kann die Eigenschaften nach Namen sortieren, sobald eine Änderung der Liste mit "Ok" oder "Übernehmen" gespeichert wird. Dazu muss der Parameter auf "1" gesetzt werden.
(bei Client-Relevanz: Nein (Server Feature))
- $TempFileDeletionJobMaxDuration documents.ini string Öffentlich [Performance] Standardwert: 90 Gültigkeit: ab: 4.00e Laufzeitbegrenzung für den Löschjob für lange nicht mehr benutzte temporäre Archivmappen. Der Wert ist eine Sekundenangabe. Für "unendlich" kann -1 angegeben werden. Vor 4.0d #1877 gab es hierfür keine Beschränkung.
Siehe auch $DelayedDeletionJobMaxDuration
- $thumbnailsAllowedExt documents.ini string Öffentlich [Blob] Mögliche Werte: kommaseparierte Liste von Dateitypen Gültigkeit: ab: 3.60j Wird für die Thumbnails $thumbnailsCMD in der partnernet.ini gesetzt, so kann man mit dieser Eigenschaft festlegen welche Dateitypen umgewandelt werden dürfen.
(bei Client-Relevanz: Nein (Server Feature))
- $thumbnailsCMD documents.ini string Öffentlich [Blob, Webclient] Mögliche Werte: ImageMagick Pfad Gültigkeit: ab: 3.60j Documents verfügt über die Option Grafiken als Thumbnails anzuzeigen z.B. Gallerieansicht. Damit diese Funktion genutzt werden kann muss ImageMagick installiert sein und der Pfad bei dieser Einstellung gesetzt sein. Bei der verwendeten ImageMagick Version sollte darauf geachtet werden, dass die 8bit/pixel (-Q8) Version verwendet wird da diese bessere Ergebnisse beim Umwandeln erzielt.
(bei Client-Relevanz: Nein (Server Feature))
- $ViewServerTimeout documents.ini string Öffentlich [pdf-Druck, Blob] Standardwert: 30 Gültigkeit: ab: 4.00d HF2 Dieser Parameter legt fest, wie lange Documents maximal auf eine Antwort von einem angeschlossenen Easy View Server wartet, bevor es die Verbindung abbricht. Die Angabe erfolgt in Sekunden.
- $virusscanCMD documents.ini string Öffentlich [Blob] Mögliche Werte: $virusscanCMD virusscanner %input Gültigkeit: ab: 5.00g Ermöglicht eine Überprüfung auf Viren beim Upload von Dokumenten in das Repository: In der documents.ini kann mit der Direktive $virusscanCMD virusscanner "%input" ein externer Virusscanner definiert werden, der vor dem Upload eines Dokuments in das Repository aufgerufen wird. Wenn der Exitcode des Virusscanner ungleich 0 ist, dann wird dies als Fehler gewertet und der Upload verweigert. Beispiel mit ClamAV als Virenscanner: Windows:
$virusscanCMD "c:\tools\clamav_win32\clamdscan.exe" "%i" Linux:
$virusscanCMD clamdscan --stdout --no-summary --fdpass "%input" Ggf. die Anleitung des Virusscanners prüfen, wie der Aufruf erfolgen muss. In Verbindung mit Umgebungsvariablen kann speziell unter Linux die Virusscanner auch wie folgt definiert werden: In /etc/systemd/system/documents5.service.d/override.conf ```
[Service]
Environment="DOCUMENTSENV_virusscanCMD=clamdscan --stdout --no-summary --fdpass \"%%input\""
``` Testdateien können hier bezogen werden: https://www.eicar.org/?page_id=3950
- $WFMaxStep documents.ini string Öffentlich [Workflow] Mögliche Werte: n Standardwert: 100 Gültigkeit: ab: 4.00 Die Anzahl der nacheinander automatisch ausgeführten Workflowschritte ist auf 100 begrenzt um vor möglichen Endlosschleifen im Workflow zu schützen. Mit dieser Eigenschaft kann die Obergrenze konfiguriert werden.
- $XMLRPCEncoding documents.ini enum Öffentlich [Schnittstellen] Mögliche Werte: 0 Gültigkeit: ab: 3.60j Wird diese Einstellung mit dem Wert 0 verwendet, so kann man in den XML aus der XMLRPC das Encoding ausschalten. Dadurch werden alle danach enstandenen XML UTF-8 kodiert.
- AsyncOpTPSize documents.ini string Öffentlich Mögliche Werte: 0..97 Standardwert: 32 Gültigkeit: ab: 4.00 Die Eigenschaft bezeichnet die Größe des Threadpools für parallelisierbare Operationen im DOCUMENTSServer.
Jeder Thread unterhält potenziell eine eigene Datenbankverbindung und belegt unter Win32 mindestens 768kB virtuellen Arbeitsspeicher für den Stack. Zu große Werte können entsprechende Probleme bereiten. Der Pool kann statisch oder dynamisch ausgelegt sein. Siehe weitere AsyncOp-Einstellungen.
- CAPath documents.ini string Öffentlich Mögliche Werte: Pfad zu einem Ordner mit CA-Zertifkaten oder "wincertstore" Gültigkeit: ab: 5.00h Globale Einstellung für den Pfad zu einem Verzeichnis mit CA-Zertifikaten. Falls eine Komponente eine separate Einstellung für CA-Zertifikaten benötigt, dann kann durch diese komponenten-spezifische Einstellungen diese globale Einstellung überschrieben werden. Wird unter Windows als Pfad "wincertstore" angegeben, dann werden die benötigten CA-Zertifkate aus dem Windows CA Store geladen.
- CSVExportPreventInjection documents.ini enum Öffentlich [Export, Server] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00i HF5 Security-Fix: Beim Export von Trefferlisten / Ordnern im csv-Format entspricht das Format nun den Regeln nach https://owasp.org/www-community/attacks/CSV_Injection zur Verhinderung von CSV-Injection. Aus Gründen der Abwärtskompatibilität kann das bisherige Exportformat über die Documents-Einstellungen Eigenschaft CSVExportPreventInjection=0 wieder aktiviert werden).
- DbFatalErrorAllowRestartList documents.ini string Öffentlich [DB] Mögliche Werte: Kommaseparierte Liste von Errorcodes Gültigkeit: ab: 5.00h HF2 Bei fatalen Datenbank-Fehlern beendet sich der DocumentsServer, um Datenverlust zu vermeiden.
Dabei wird eine Sperrdatei serverlocked.txt geschrieben, die den Neustart verhindert.
Die Liste der als fatal angesehenen Fehlercodes ist vordefiniert und kann
über die documents.ini Eigenschaft DbFatalErrorExtraList ergänzt und eingeschränkt
werden.
Typische Fehlercodes wären z.B. 9002 (Das Transaktionsprotokoll für die
'documents5'-Datenbank ist aufgrund von 'LOG_BACKUP' voll)
Dann muss ein Admin zuerst eingreifen bevor ein Serverneustart sinnvoll ist. Es gibt aber auch Fehler, die ein Beendigung des DocumentsServer benötigen,
aber keine Sperre gegen den Neustart. z.B. 6005 - Shutdown is in progress
Der SQL Server wird gerade heruntergefahren, um z.B. ein Update
durchzuführen. Über die neue documents.ini Eigenschaft DbFatalErrorAllowRestartList kann
man nun eine kommaseparierte Liste von fatalen Fehlercodes definieren, für die
bei Auftreten des Fehlers das Schreiben der Sperrdatei nicht erfolgt.
- DbFatalErrorExtraList documents.ini string Öffentlich [DB] Mögliche Werte: kommaseparierte Liste von Fehlercodes Gültigkeit: ab: 5.00g Wenn der Documents-Server fatale Fehlermeldungen vom Datenbank-Server zurück bekommt, die ein weiteres Arbeiten ohne Datenverlust nicht möglich macht, dann beendet sich der Documents-Server mit einem provozierten Absturz und schreibt die Datei serverlocked.txt.
Die folgenden fatalen Fehler-Codes sind vordefiniert: für SQL-Server: 566, 802, 808, 829, 945, 1101, 1105, 1478, 1814, 3257, 3906, 3958, 3967, 5128, 6005, 7151, 7622, 9002, 9901, 9902, 17258 für ORACLE: 1000, 1536, 1647, 1650, 1651, 1652, 1653, 1654, 1655, 1658, 1659, 1680, 1683, 1688, 1691, 1692 Mit der Eigenschaft DbFatalErrorExtraList kann man diese Liste erweitern bzw. Fehlercodes entfernen: z.B. DbFatalErrorExtraList 9999, -566
* fügt den Fehlercode 9999 als fatalen Fehler hinzu
* entfernt 566 als fatalen Fehler
- DBPassword documents.ini string Öffentlich Mögliche Werte: Datenbank Passwort Gültigkeit: ab: 3.60j Mit dieser Eigenschaft kann man den zu verwendenen Datenbankbenutzer angeben. s.a. DBServer und DBUser (bei Client-Relevanz: Nein (Server Feature))
- DBServer documents.ini text Öffentlich Mögliche Werte: Datenbank@Computername[\Instanz][,Port] Datenbank@IP[\Instanz][,Port] Beispiel: DBServer partnernet@192.168.0.1 oder partnernet@192.168.0.1\sqlexpress Gültigkeit: ab: 3.60j Diese Eigenschaft wird gesetzt, wenn die Datenbank nicht mit den Standardeinstellung erreicht bzw. gefunden werden kann. Dies ist z.B. der Fall wenn der PortalServer und die vorgesehende Datenbank sich nicht auf dem selben Rechner befinden. s.a. DBUser und DBPassword
(bei Client-Relevanz: Nein (Server Feature))
- DBUser documents.ini string Öffentlich Mögliche Werte: Benutzername Gültigkeit: ab: 3.60j Mit dieser Eigenschaft kann man den zu verwendenen Datenbankbenutzer angeben. s.a. DBServer und DBPassword (bei Client-Relevanz: Nein (Server Feature))
- HTTPProxy documents.ini string Öffentlich [Schnittstellen] Mögliche Werte: Adresse des Proxy-Servers Gültigkeit: ab: URL des für HTTP-Zugriffe zu verwendenden Proxy-Servers (ohne Port-Angabe). Unter Windows wird standardmäßig die Proxy-Einstellung des Users verwendet, unter der der Dienst läuft.
- HTTPProxyIgnoreWindowsConfig documents.ini string Öffentlich [Schnittstellen] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: Falls unter Windows eine Proxy-Einstellung für den User gemacht wurde unter der der Dienst läuft, kann über diese Option erzwungen werden, dass die Proxy-Einstellungen ignoriert werden.
- HTTPProxyPassword documents.ini string Öffentlich [Schnittstellen] Mögliche Werte: Passwort Gültigkeit: ab: Passwort des für HTTP-Zugriffe zu verwendenen Proxy-Servers. Unter Windows wird standardmäßig die Proxy-Einstellung des Users verwendet, unter der der Dienst läuft. Diese Einstellung wird ignoriert, wenn nicht auch HTTPProxy und HTTPProxyUser gesetzt sind.
- HTTPProxyPort documents.ini string Öffentlich [Schnittstellen] Mögliche Werte: Portnummer Standardwert: 3128 Gültigkeit: ab: Port des für HTTP-Zugriffe zu verwendenden Proxy-Servers. Unter Windows wird standardmäßig die Proxy-Einstellung des Users verwendet, unter der der Dienst läuft. Diese Einstellung wird ignoriert, wenn nicht auch HTTPProxy gesetzt ist.
- HTTPProxyUser documents.ini string Öffentlich [Schnittstellen] Mögliche Werte: Login-Name Gültigkeit: ab: Nutzername des für HTTP-Zugriffe zu verwendenden Proxy-Servers. Unter Windows wird standardmäßig die Proxy-Einstellung des Users verwendet, unter der der Dienst läuft. Diese Einstellung wird ignoriert, wenn nicht auch HTTPProxy gesetzt ist.
- JSDebugger documents.ini string Öffentlich [Debug, Scripting] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 6.00 Aktiviert den Debugger des Servers. Ohne die Aktivierung, können Scripte nicht debuggt werden.
- JSDebuggerAddress documents.ini string Öffentlich [Debug, Scripting] Mögliche Werte: IP-Adresse oder DNS-Name Standardwert: 127.0.0.1 Gültigkeit: ab: 6.00 Die IP-Adresse oder der DNS-Name auf dem der Debugger hören soll. Standardmäßig hört der Debugger nur auf "127.0.0.1", was der Loopback für lokale Anfragen ist. Anfragen von außerhalb der Maschine werden von dem Debugger nicht angenommen. Um von außen auf den Debugger zugreifen zu können, ist dieses Property auf den DNS-Namen oder die IP-Adresse zu setzen, unter der die Maschine von außen erreichbar ist. Um auf allen Schnittstellen eingehende Daten zu empfangen, ist JSDebuggerAddress auf "0.0.0.0" zu setzen. Falls auf JSRemoteAddress auf eine bestimmte Adresse gesetzt werden soll, ist folgendes zu beachten: Unter virtuellen Umgebungen wie Openstack oder Docker ist das die IP-Adresse, die dem Netzwerk-Interface zugeordnet ist, mit dem die Maschine nach draußen geht. Wenn zum Beispiel eine Maschine von außen auf der Adresse 192.168.1.1 erreichbar ist, aber das Netzwerk-Interface die Adresse 10.132.23.156 zugewiesen bekommen hat, dann ist hier 10.132.23.156 einzutragen. Von außen muss dann aber 192.168.1.1 verwendet werden, um auf den Debugger zuzugreifen.
- JSDebuggerPort documents.ini string Öffentlich [Debug, Scripting] Mögliche Werte: number Standardwert: 9229 Gültigkeit: ab: 6.00 Port, auf dem der Debugger erreichbar ist.
- JSMaxBranch documents.ini string Öffentlich [Scripting, Debug] Mögliche Werte: Max. Anzahl der Schleifen bevor abgebrochen wird 0 für unendlich Standardwert: 1000000 Gültigkeit: ab: 3.60j bis: 5.00j Wird in einem PortalScript eine Endlosschleife eingebaut, so wird durch den Server das Script abgebrochen. Mit dieser Einstellung kann man die Anzahl der Durchgänge definieren bevor dies eintritt. Unter documentOS erzeugt der Eintrag zwar keinen Fehler beim Einlesen der documents.ini, ist aber wirkungslos. Einen vergleichbaren Mechanismus zur Erkennung von Endlosschleifen wie SpiderMonkey hat die V8 nicht.
- JSMaxImportLevel documents.ini string Öffentlich [Scripting] Standardwert: 10 Gültigkeit: ab: 6.00 Maximale Anzahl von ECMA-Script Modulen die mithilfe von `import` (nested modules) in einer Kette importiert werden können. Beispiel: Modul 1 importiert Modul 2, das wiederum Modul 3 importiert usw. Diese Einstellung legt fest, wie viele Module zulässig sind.
- JSMaxMemory documents.ini string Öffentlich [Scripting] Mögliche Werte: Wert in kb Standardwert: 1024 Gültigkeit: ab: 3.60j Hiermit wird die max. Speichernutzung der PortalScripting Engine in kb pro thread angegeben.
- JSStrict documents.ini enum Veröffentlicht [Scripting] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 4.00 Mit dem Eintrag JSStrict true in der partnernet.ini wird eine stärkere Überprüfung der Datentypen aktiviert. Dies betrifft z.B. die Parameter der Scripting Methoden.
- LogAppend documents.ini enum Veröffentlicht [Debug] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60i Mit dieser Eigenschaft wird die Log-Datei (PortalServer_debug_xxx.log) wird bei Serverstart nicht überschrieben, sondern es wird angehangen. Siehe auch MaxLogFile , NumLogFiles
- LogPath documents.ini string Öffentlich [Debug] Mögliche Werte: DateiPfad Standardwert: [INSTALLDIR]\..\logs\PortalServer_debug_[TIMESTAMP].log Gültigkeit: ab: 4.00 Mit dieser Einstellung kann man den Pfad angeben, wo die Servernachrichten gespeichert werden sollen.
(bei Client-Relevanz: Nein (Server Feature))
- maxDebugFile documents.ini string Öffentlich [Debug] Mögliche Werte: n > 1 , n gibt die Dateigröße in Byte an Standardwert: 1 Gültigkeit: ab: 3.60f Beim Debugserver besteht die Möglichkeit den Debug Output in bestimmte Logs (app.log) auszugeben. Um die Größe der Logs zu begrenzen kann man diese Eigenschaft setzen. Wird die app.log größer als der gesetzte Wert so wird diese in die app-1.log umbenannt und es wird in einer neuen app.log weitergeschrieben. Es entstehen jedoch immer nur diese 2 Dateien und man findet diese im server Verzeichnis der Documents Installation.
(bei Client-Relevanz: Nein (Server Feature))
- MaxLogFile documents.ini string Veröffentlicht [Debug] Mögliche Werte: n in bytes Gültigkeit: ab: 3.60i Es kann eine Obergröße des LogFiles (PortalServer_debug_xxx.log) angeben werden. Wenn die Größe erreicht ist, wird eine neue log-Datei geschrieben. Die alten log-Datei wird dann umbenannt in: PortalServer_debug_xxx-1.log
PortalServer_debug_xxx-2.log
...
PortalServer_debug_xxx-n.log n wird über das Property NumLogFile festgelegt.
s. auch NumLogFile, LogAppend
- NumLogFile documents.ini string Veröffentlicht [Debug] Mögliche Werte: Anzahl n Standardwert: 1 Gültigkeit: ab: 3.60j Wenn mit MaxLogFile eine Obergröße für LogFiles (PortalServer_debug_xxx.log) angeben wurde, dann wird hiermit die Anzahl der alten Log-Dateien bestimmt: PortalServer_debug_xxx-1.log
PortalServer_debug_xxx-2.log
...
PortalServer_debug_xxx-n.log Ist die angegebene Anzahl erreicht, dann wird die älteste Log-Datei gelöscht und die anderen Log-Dateien in der Nummerierung umbenannt. Siehe auch MaxLogFile , LogAppend
- FeatureManager
- buttonColorMode DlcGlobalOptions FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00a Mit der Eigenschaft "buttonColorMode" können der Bearbeiten-Knopf in Signalfarbe und die Speichern/Abbrechen-Knöpfe in Rot/Grün angezeigt werden
(bei Client-Relevanz: Nur Client 5)
- dashboardBackgroundImage DlcGlobalOptions FeatureManager string Öffentlich [Webclient5] Mögliche Werte: login, backgroundImage_custom.png Die Bilddateien sollen im \tomcat8\webapps\documents\img\documents\skin\base\shared\login liegen oder über den externen Context nach /img/documents/skin/base/shared/login eingebunden werden. Standardwert: none Gültigkeit: ab: 5.00f Stellt den Hintergrund für Dashboards bereit. Achtung im Falle einer Einrichtung als Feature wird die Eigenschaft groß geschrieben:
<Feature name="DashboardBackgroundImage" value="silver_wall.jpg" /> Wird der Wert "login" verwendet, wird das Hintergrundbild der Login-Maske verwendet.
- dashboardTransparentTitle DlcGlobalOptions FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true,false Standardwert: false Gültigkeit: ab: 5.00f Titel von Dashboard-Kacheln bekommen einen transparenten Hintergrund und einen Farbigen unteren Rand Achtung im Falle einer Einrichtung als Feature wird die Eigenschaft groß geschrieben:
<Feature name="DashboardTransparentTitle" active="true" />
- docCompareWindow DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Öffentlich [Webclient] Mögliche Werte: false true Standardwert: false Gültigkeit: ab: 3.60g Es können mehrere Dateien extern nebeneinander zum Vergleich geöffnet werden. Zurzeit werden nur die browserinternen Viewer genutzt.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocCompareWindow". (bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonDownload DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den "Download" Knopf ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonDownload".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonEdit DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den "Bearbeiten" Knopf ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonEdit".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonExternal DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den Knopf "Extern anzeigen" ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonExternal".
(bei Client-Relevanz: Classic-Client und Client 5)
- docToolBarButtonInternal DlcGlobalOptions DlcFile DlcRegister FeatureManager enum Veröffentlicht [Webclient] Mögliche Werte: false true Standardwert: true Gültigkeit: ab: 3.60b In der Dokumenten Toolbar kann man den Knopf "Intern anzeigen" ein bzw. ausblenden. Dieses Property kann man auch im Mappentyp oder im Register setzen.
Im Feature-Manager lautet die Bezeichnung dieses Schalters "DocToolBarButtonInternal".
(bei Client-Relevanz: Classic-Client und Client 5)
- DocumentAttributes DlcRegister DlcFile FeatureManager string Öffentlich [Blob, Webclient, Webclient5, Rechte] Mögliche Werte: Kommaseparierte Liste: author,lastModified,version,comment Gültigkeit: ab: 5.00d HF1 Über die Registereinstellung "Dokumentenfelder anzeigen" kann man alle Dokumenenattribute Author, geändert am, Version und Kommentar gemeinsam ein- oder ausblenden. Möchte man nur einzelne Attribute darstellen kann dies über eine Positivliste gemacht werden. Dafür wird am Register die Option "Dokumentenfelder anzeigen" gesetzt und die Eigenschaft DocumentAttributes=Attr1, Attr2,...Attrn ergänzt, wobei es die folgenden Attribute gibt:
* author
* lastModified
* version
* comment
- dropZoneCheckMandatoryFields DlcFile FeatureManager DlcGlobalOptions string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00i Prüft ob alle Pflichtfelder ausgefüllt sind, wenn ein Benutzer versucht eine Datei an einer Mappe hochzuladen. Sind nicht alle Pflichtfelder gefüllt wird der Hochladevorgang abgebrochen.
- extendedSearchTreeHorizontal DlcGlobalOptions Systemuser FeatureManager string Öffentlich [Suche] Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00f Im Dialog für die Erweiterten Suche können mit der Globalen oder Benutzer-Eigenschaft "extendedSearchTreeHorizontal" = "true" als alternative Darstellung des linken Baumes die beiden Hauptknoten "Suchquellen" und "Mappentypen" optional nebeneinander (statt untereinander) dargestellt werden.
- monoView DlcGlobalOptions Systemuser FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00c Die Eigenschaft "monoView" (Global oder Benutzer) aktiviert für den Client V ein Layout, welches dem des Classic-Client entspricht. Es wird dann entweder die Ordner- oder Mappenansicht statt beide Ansichten nebeneinander dargestellt.
(bei Client-Relevanz: Nur Client 5)
- pdfjsViewerHideToolbar DlcGlobalOptions FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Ermöglicht es die Toolbar im PDF.js Viewer auszublenden, sodass diese nur angezeigt wird, wenn sich der Mauszeiger am oberen Rand des PDFs befindet. Als Feature: <Feature name="PdfjsViewerHideToolbar" active="true"/>
- separatorDesign DlcGlobalOptions FeatureManager DlcField string Öffentlich Mögliche Werte: default, lean, small, headline Standardwert: default, bei Einstellung des Design20: lean Gültigkeit: ab: 5.00f HF1 Steuert das Design der horizontalen Trenner. Die Einstellung "default" entspricht dem normalen Design. Die Einstellung "lean" dem Design20. "small" ist eine kleinere Version des "lean"-Design. Neu ab 6.2 ist "headline", eine größere Version des Sepatators. Einstellung als Feature:
<Feature name="SeparatorDesign" value="lean" /> Die Unterstützung am Feld wurde in der Documents-Version 5.0i hinzugefügt.
- shareFileButton DlcGlobalOptions FeatureManager DlcFile string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00h Fügt einen Teilen-Button dem Mappentitel hinzu. Wird auf diesem geklickt wird ein Quickviewlink zur aktuellen Mappe erstellt und in den Zwischenspeicher geschrieben. Der Link beinhaltet außerdem das aktuelle Register und, sofern eines ausgewählt ist, das aktuell angezeigte Dokument.
- toggleFullscreenButton DlcGlobalOptions FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00f Fügt der Menubar einen Knopf zum Wechsel in den Vollbildmodus hinzu. FeatureConfig:
<Feature name="ToggleFullscreenButton" active="true" />
- trashBinConfirmDeletion DlcGlobalOptions FeatureManager string Öffentlich Mögliche Werte: 0, false, 1, true Standardwert: false Gültigkeit: ab: Aktiviert einen Löschen-Bestätigungs-Dialog, wenn Mappen aus dem "Gelöscht"-Ordner entfernt werden sollen.
- Outbar
- defaultScriptTree Outbar string Öffentlich [Tree, Outbar, Webclient5] Gültigkeit: ab: 5.00c Mit dieser Eigenschaft kann ein Skript angegeben werden dass einen Skriptbaum zurückliefert, wenn noch kein Skriptbaum für die Outbar definiert/generiert worden ist.
- FilingPlanSearchMethod Outbar enum Öffentlich [Tree, Sortierung, Webclient] Mögliche Werte: 0 1 2 Gültigkeit: ab: 4.00c Suchmethode, die verwendet werden soll für den Aktenplan in der Outbar. Die angegebene Suchmethode bezieht sich hierbei nur auf das Aktenplanfeld.
- folderTreeVisualizationType Outbar DlcGlobalOptions string Öffentlich [Webclient5] Mögliche Werte: tree, sidebar Gültigkeit: ab: 5.00f Mit der Eigenschaft folderTreeVisualizationType kann die Darstellung eines Ordnerbaum an einer Outbar eingestellt werden.
Die Eigenschaft kann auch global gesetzt werden und gilt dann für alle Outbars die diese Eigenschaft nicht gesetzt haben.
- noCache Outbar string Öffentlich [Webclient5] Mögliche Werte: [true, false] Standardwert: false Gültigkeit: ab: 5.00a Cache für Outbar aktivieren/deaktivieren
- onlySubOutbars Outbar string Öffentlich [Outbar, Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: Wenn die globale Eigenschaft SubOutbars=1 gesetzt ist, dann kann mit dieser Eigenschaft an einer Outbar bewirkt werden, dass beim Klick auf diese, direkt die Unter-Outbars angezeigt werden.
- renderRootNode Outbar string Öffentlich [Tree, Webclient5] Mögliche Werte: true, false, 1, 0 Standardwert: true Gültigkeit: ab: 5.00b HF2 Rendert den Ordnerbaum bei false erst nach dem Wurzelknoten.
- runScript DlcFolder Outbar string Öffentlich [Ordner, Scripting] Mögliche Werte: <Skriptname> Standardwert: - Gültigkeit: ab: 5.00b An Ordnern und Outbars können Skripte eingebunden werden, dessen Rückgabe im Ordnerframe angezeigt werden.
(bei Client-Relevanz: Nur Client 5)
- scriptName Outbar string Öffentlich [Webclient5] Mögliche Werte: Portalskript Gültigkeit: ab: 5.00a Skript zur Generierung des Outbarbaums (bei Client-Relevanz: Nur Client 5)
- sortOrder Outbar string Öffentlich [Ordner, Sortierung, Aktenplan] Mögliche Werte: kommaseparierte Liste von Feldnamen, jeweils mit Richtungszeichen +/- entweder davor oder dahinter; Kann auch leer sein. Gültigkeit: ab: 4.00b Aktenplanordner in der Outbar werden automatisch nach dem Aktenplanfeld sowie dem Erstelldatum sortiert. Hierdurch wird das Sortierkriterium einer der Outbar zugewiesenen Trefferliste allerdings überschrieben.
Wenn eine andere Sortierung gewünscht ist, kann man sie anhand dieser Eigenschaft angeben.
Wenn der Wert komplett leer ist, entfernt das die Standardsortierung der Aktenplanordner und ermöglicht die Wiederverwendung des Sortierkriteriums aus einer Trefferliste. (bei Client-Relevanz: Classic-Client und Client 5)
- stickyPersonalFolder Outbar DlcGlobalOptions string Öffentlich [Webclient5, Outbar, Ordner] Mögliche Werte: true, false, 0, 1 Standardwert: false Gültigkeit: ab: 5.00f Über die Eigenschaft kann gesteuert werden ob die privaten Ordner auch auf anderen Outbars angezeigt werden.
Die Eigenschaft kann entweder global oder auf einer spezifischen Outbar gesetzt werden.
Outbaransichten, die über ein Skript erzeugt werden, werden von der Eigenschaft nicht berührt.
- tooltip Outbar string Öffentlich Mögliche Werte: de:Tooltip-Text-Deutsch;en:Tooltip-Text-Englisch,pf:Message-Key Standardwert: - Gültigkeit: ab: 5.00i HF5 Tooltip der beim drüberfahren mit Mauszeiger angezeigt wird.
- PartnerNet
- AbsenceMailWithDocs PartnerNet enum Veröffentlicht [Email] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.51 Der abwesende Benutzer erhält eine Benachrichtigungs-Mail mit Dokumenten über die vertretene Mappe. Damit kann der Benutzer sich auch über Mappen informieren, die vor seiner Rückkehr aus dem Urlaub bereits archiviert und gelöscht wurden.
- AddMailSignatureAlways PartnerNet enum Öffentlich [Email] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00a HF1 Wenn am Mandanten eine Mail-Sigantur hinterlegt ist:
Ab 5.0a HF2 wird der Body einer zur versendenden Mail nach einer vorhandenen Signatur untersucht ("-- ").
Wenn diese vorhanden ist, dann wird die Firmen-Signatur der Mail nicht mehr angehängt. Mit der Eigenschaft AddMailSignatureAlways=1 wird das bisherige Verhalten erzwungen und immer die Firmen-Signatur angehängt.
- AdHocSendingCheckUserRights PartnerNet enum Veröffentlicht [Rechte] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.51 Prüft die Benutzerberechtigung bei dem Ad-Hoc Versendungsdialog. Property nicht gesetzt (Standard-Verhalten von DOCUMENTS):
Leserechte des Empfängers werden bei der AdHoc-Versendung, bei Rückfrage etc. nicht berücksichtigt
=> Empfänger bekommt die Mappe in den Eingangkorb, sieht sie aber nicht wegen fehlender Berechtigung Property gesetzt:
Einschränkung der möglichen Empfänger auf die leseberechtigten Benutzer. Gruppen und Aliase stehen nicht mehr zur Verfügung
- afterAutoLoginScript PartnerNet string Veröffentlicht [Login/Logout/LDAP, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 3.60h Dieses Property verhält sich wie das Property afterLoginScript mit dem Unterschied, dass dieses für Single Sign On gedacht ist. Die folgenden globalen Variablen stehen in dem Script zur Verfügung:
* login
* source
* instance
* unit
* context.currentUser
- afterCreateSystemUserScript PartnerNet string Öffentlich [Scripting] Mögliche Werte: ScriptName1,ScriptName2 Gültigkeit: ab: 5.00h HF1 Script-Exit nach dem Erstellen von Benutzern über die Mandanten-Eigenschaft afterCreateSystemUserScript=Scriptname1,Scriptname2
- afterLoginScript PartnerNet string Veröffentlicht [Scripting, Login/Logout/LDAP] Mögliche Werte: Scriptname Gültigkeit: ab: 3.51 Das gesetzte Script wird nach erfolgreichen Login ausgeführt und kann dabei zusätzliche Validierungen ausführen (z.B. Anzahl aller erfolgreichen Logins protokollieren). Die folgenden globalen Werte stehen zur Verfügung
* login
* asUser
* source
* instance
* unit
* context.currentUser
- AgentMandatory PartnerNet enum Öffentlich [Webclient] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00c Mit der Eigenschaft AgentMandatory=1 wird erzwungen, dass der Webclient seine eigene Abwesenheit nur dann erfolgreich aktivieren kann, wenn er zeitgleich auch mindestens einen passenden Vertreter ausgewählt hat.
(bei Client-Relevanz: Classic-Client und Client 5)
- autoLogin PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.51 Dient dazu, dem Mandanten bekannt zu machen, ob in der web.xml ein SSO per JCIFS konfiguriert worden ist.
ACHTUNG: kollidiert mit der offiziellen Checkbox AutoLogin in Documents/Einstellungen, da dort nur der Trick mit dem permanenten Cookie konfiguriert wird !! Darf also nicht gleichzeitig mit jenem Feature genutzt werden! 0 = aus
1 = an Wird ein SSO-Dienst zur Anmeldung verwendet, so muss für die LDAP-Kopplung der Wert "1" gesetzt werden.
(bei Client-Relevanz: Classic-Client und Client 5)
- autoLoginScript PartnerNet string Veröffentlicht [Login/Logout/LDAP, Scripting] Mögliche Werte: Ldap.LdapLogon Standardwert: Skriptname Gültigkeit: ab: 3.51 Wenn das Login über Single-Sign-On erfolgt, wird dies hier definierte Script beim Anmeldevorgang aufgerufen. Es stehen die folgenden globalen Werte im Script zur Verfügung: login, source, instance, unit Das Kennwort steht nicht zur Verfügung. Wird LDAP mit Single Sign-On verwendet, kann ab Documents 5.0f auch "Ldap.LdapLogon" als Wert verwendet werden, um das Skript aus dem scriptlibs Verzeichnis zu laden.
(bei Client-Relevanz: Nein (Server Feature))
- CAInfoFile PartnerNet string Öffentlich [EAS, Email] Mögliche Werte: Pfad auf eine Datei im PEM-Format mit einer Liste vertrauenswürdiger CA-Stammzertifikate Gültigkeit: ab: 4.00d Pfad auf eine Datei im PEM-Format mit einer Liste vertrauenswürdiger CA-Stammzertifikate.
Wenn Mailserver oder Archivserver mit SSL bzw. TLS-Verschlüsselung angesteuert werden sollen, wird diese Datei zur Authentizitätsprüfung der Server benötigt. Sollte eins dieser Stammzertifikate einmal zurückgezogen werden (insbesondere nach einem Einbruch in Server einer CA-Authority), muss die Datei aktualisiert und der DocumentsServer einmal neu gestartet werden.
DOCUMENTS liefert keine solche Datei mit. Es kann sie auch nicht automatisch aktuell halten. Administratoren müssen sich selbst darum kümmern.
- CatSearch PartnerNet enum Veröffentlicht [Content, Suche] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.51 Bei einer Volltextsuche des Contents wird eine Kategorieeinschränkung ausgeführt. Unter der Volltextsuche der Weboberfläche erscheint eine Checkbox mit der die Kategorieeinschränkung bei der Suche aktiviert bzw. deaktiviert werden kann.
- DeleteSentMails PartnerNet enum Veröffentlicht [Email] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51 Mails werden im Regelfall aus dem Ordner PortalClient: Adminstration->versendete eMails gelöscht, wenn diese erfolgreich an den SMTP-Server übergeben wurden. Mit dieser Einstellung kann man dies jedoch unterbinden, indem man die Einstellung = 0 setzt.
- docimportWarnings PartnerNet enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.51 Dieses Property erlaubt es die Warnhinweise bei Import/Update von Mappen per docimport zu unterdrücken.
- EMailAsync PartnerNet enum Veröffentlicht [Email] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.51 E-Mails werden asynchron versendet, wodurch der Benutzer im WebClient flüssiger arbeiten kann.
- EMailBCC PartnerNet string Veröffentlicht [Email] Mögliche Werte: kommaseparierte E-Mail Liste der Empfänger Gültigkeit: ab: 3.60b Es wird mandantenweit ein Empfänger gesetzt, der eine Blindkopie von jeder EMail bekommt, die verschickt wird.
- ExtVersionPreview PartnerNet enum Veröffentlicht [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 3.60f Im Regelfall werden bei der Versionauflistung im Archiv die Version, Eigentümer und das Datum angezeigt. Wenn man dieses Property auf 0 setzt, werden nur noch die Versionen aufgelistet. Dadurch erhält man einen deutlichen Performancegewinn, da nun nicht mehr auf jede einzelne Version der archivierten Mappe geladen werden muss.
- favoritesFldHitlist PartnerNet string Öffentlich [Ordner] Gültigkeit: ab: 5.00g Kommaseparierte Definition einer abweichenden Standardtrefferliste
für Favoritenordner und Ordner des Typs "Individuell" Gültige Spaltennamen sind dieselben wie bei "inboxHitlist":
- Title
- FileType
- Owner
- LastEditor
- CreatedAt
- ModifiedAt
- Task
- %AutoText% - performance-lastig!
- Mappentyp.Feldname
- FindDynamic PartnerNet enum Veröffentlicht [Suche] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.51 Existiert ein dynamischer Ordner mit einem Mappentyp, können alle Mappen dieses Typs gefunden werden. Dieses Property kann man auch im Mappentypen setzen, dabei "überschreibt" es die globale Einstellung für diesen Mappentypen.
- formSecurityCheck PartnerNet string Veröffentlicht [Content] Mögliche Werte: all - alle Formulare kommaseparierte Liste der technischen Namen der Formulare Gültigkeit: ab: 3.60g die angegebenen Formulare haben dann ein sogenanntes Captcha, eine grafische Benutzeridentifizierung
- IgnoreEmptyCollectingMails PartnerNet enum Öffentlich [Email] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00g HF2 Sammel-E-Mail Benachrichtigungen für neue Mappe im Eingangskorb: Bisher wurden die Sammel-E-Mail auch verschickt, wenn zum Versendezeitpunkt keine Mappe mehr im Eingangskorb war, die in der Mail referenziert war. Man erhielt eine Mail mit einem Hinweis "Bei Verwendung der Funktionalität Sammel-E-Mail kann diese Liste leer sein, wenn sich die Mappen mittlerweile nicht mehr in ihrem Eingangskorb befinden." In diesem Fall wird diese Mail nun nicht mehr gesendet. Das bisherige Verhalten kann über die Mandanten Eigenschaft IgnoreEmptyCollectingMails=1 wieder reaktiviert werden.
- inboxHitlist PartnerNet string Veröffentlicht [Inbox] Mögliche Werte: Definition Gültigkeit: ab: 3.51 Trefferliste für den Eingangskorb des Benutzers kann definiert werden. Die Definition ist eine komma-separierte Liste der möglichen folgenden Werte:
- Title
- FileType
- Owner
- LastEditor
- CreatedAt
- ModifiedAt
- Task
- %AutoText% - performance-lastig!
- Mappentyp.Feldname (bei Client-Relevanz: Classic-Client und Client 5)
- inTroubleFldHitlist PartnerNet string Öffentlich [Ordner] Gültigkeit: ab: 5.00g Kommaseparierte Definition einer abweichenden Standardtrefferliste
für Ordner des Typs "InTrouble" Gültige Spaltennamen sind dieselben wie bei "inboxHitlist":
- Title
- FileType
- Owner
- LastEditor
- CreatedAt
- ModifiedAt
- Task
- %AutoText% - performance-lastig!
- Mappentyp.Feldname
- inWorkFldHitlist PartnerNet string Öffentlich [Ordner] Gültigkeit: ab: 5.00g Kommaseparierte Definition einer abweichenden Standardtrefferliste
für "In Arbeit"-Ordner. Gültige Spaltennamen sind dieselben wie bei "inboxHitlist":
- Title
- FileType
- Owner
- LastEditor
- CreatedAt
- ModifiedAt
- Task
- %AutoText% - performance-lastig!
- Mappentyp.Feldname
- lastUsedFldHitlist PartnerNet string Öffentlich [Ordner] Gültigkeit: ab: 5.00g Kommaseparierte Definition einer abweichenden Standardtrefferliste
für "Zuletzt benutzt"-Ordner Gültige Spaltennamen sind dieselben wie bei "inboxHitlist":
- Title
- FileType
- Owner
- LastEditor
- CreatedAt
- ModifiedAt
- Task
- %AutoText% - performance-lastig!
- Mappentyp.Feldname
- LdapActive PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: false true Gültigkeit: ab: 5.00f Wenn "true" ist es DOCUMENTS-Usern möglich sich beim LDAP-Server anzumelden. Der Wert sollte auf "false" gesetzt werden, wenn die Properties für das LDAP noch nicht vollständig erfasst wurden oder wenn ungewiss ist, ob die eingegebenen Daten korrekt sind.
Das Property sollte nur über den LDAP-Wizard oder über die Mappenkonfiguration gesetzt werden.
- LdapAddConfigNameAsUserProperty PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: false true Standardwert: false Gültigkeit: ab: 5.00f Ist der Wert "true", so wird bei jedem Benutzer, der importiert wird, eine Eigenschaft "Configuration" erstellt, in der festgehalten wird aus welcher LdapParamdomain er importiert wurde. Dafür wird der "name" der Konfiguration aus der LdapDomainInclude verwendet. Die Anmeldung des Benutzers erfolgt nur an dem LDAP-Server aus dem der Benutzer ursprünglich importiert wurde. Die anderen Konfigurationen werden übersprungen.
- LdapArchiveForAll PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: false true Gültigkeit: ab: 5.00f Ist der Wert "true", so wird jedem Benutzer, der importiert wird, auch automatisch der Archivzugang gewährt.
- LdapArchiveGroupDN PartnerNet string Öffentlich [Login/Logout/LDAP] Gültigkeit: ab: 5.00f Geben Sie hier den DN der Gruppe an, deren Mitglieder Archiv-Zugang erhalten sollen. Soll dies für alle importierten Benutzer gelten, kann hier die gleiche Gruppe verwendet werden wie bei Gruppe für Benutzerimport.
- LdapBaseDN PartnerNet string Öffentlich [Login/Logout/LDAP] Gültigkeit: ab: 5.00f Die BaseDN definiert, wo im LDAP-Verzeichnisbaum abwärts die Suche nach bestimmten Objekten gestartet werden soll. Z.B. DC=peachit,DC=local
- LdapCaCertFile PartnerNet string Öffentlich [Login/Logout/LDAP] Gültigkeit: ab: 5.00f Pfad zur Zertifikatsdatei des LDAP Server Root Zertifikat im PEM Format (BASE64 x.509). s. auch Dokumentation zu DOCUMENTS LDAPS-Kopplung.
s. auch LdapEnableSSL und LdapPort
- LdapChaseReferrals PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: true false Standardwert: true Gültigkeit: ab: 5.00h HF1 Wenn der LDSP-Server eine Suche/Query mit einem Referral auf einen anderen LDAP-Server beantwortet, so wird der *Documents*-Server das Query an diesen weiterleiten. Sofern diese Verhalten unerwünscht ist, ist der Wert auf false zu setzen. Ab Version 2.2.5 und Server 5.0h HF1
- LdapDocumentsForAll PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: false true Gültigkeit: ab: 5.00f Ist der Wert "true", so wird jedem Benutzer, der importiert wird, auch automatisch der DOCUMENTS- Zugang gewährt.
- LdapDocumentsGroupDN PartnerNet string Öffentlich [Login/Logout/LDAP] Gültigkeit: ab: 5.00f Geben Sie hier den DN der LDAP-Gruppe an, deren Mitglieder DOCUMENTS-Zugang erhalten sollen. Sollen alle importierten Benutzer DOCUMENTS-Zugang erhalten, kann hier die gleiche Gruppe verwendet werden wie bei Gruppe für Benutzerimport.
- LdapEnableSSL PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Konfiguriert den DOCUMENTS-Server, dass er sich verschlüsselt per LDAPS-Protokoll (TLS/SSL) am LDAP-Server anmeldet. s. auch LdapPort und LdapCaCertFile
- LdapGroupDN PartnerNet string Öffentlich [Login/Logout/LDAP] Gültigkeit: ab: 5.00f Wenn der Import der Benutzer auf eine OU eingeschränkt werden soll, können Sie hier den DN einer OU angeben, der alle zu importierende Benutzer enthält. Die zu importierenden Benutzer müssen direkt an der OU hängen, dürfen also nicht in einer Gruppe liegen, die sich in der OU befindet.
- LdapGroupFilterGroupDN PartnerNet string Öffentlich [Login/Logout/LDAP] Gültigkeit: ab: 5.00f Tragen Sie hier den DN einer Gruppe ein, in der alle Gruppen Mitglied sind, die als Zugriffsprofile übernommen werden sollen.
- LdapHostname PartnerNet string Öffentlich [Login/Logout/LDAP] Gültigkeit: ab: 5.00f Hier ist der vollständige Name (FQDN) des LDAP-Domänenserver anzugeben. Z.B.w2k8peachit.peachit.local
- LdapIgnoreCertError PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Ignoriert von der OPENSSL-Schnittstelle gemeldete Fehler beim Verbindungsaufbau zum LDAP-Server.
Änderungen im Wert des Properties machen in der Regel einen Serverneustart notwendig.
- LdapIgnoreLoginCase PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: false true Gültigkeit: ab: 5.00f Ist der Wert "true", so wird der Username und damit auch das DOCUMENTS-Login, so wie er im LDAP ausgelesen wird, übernommen. Im anderen Falle wird der Name in Kleinbuchstaben umgewandelt und verwendet.
- LdapLicenseType PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: concurrent_open concurrent_standard named shared Standardwert: concurrent_open Gültigkeit: ab: 5.00f Hier kann festgelegt werden welche Lizenzart neu anhzulegenden Benutzern standardmäßig zugewiesen wird.
- LdapLoginDN PartnerNet string Öffentlich [Login/Logout/LDAP] Gültigkeit: ab: 5.00f Für den Zugriff auf das LDAP-System wird die DN eines LDAP-Benutzers benötigt, der Lesezugriff auf die gesamte LDAP-Struktur hat. Von diesem LDAP-Nutzer ist das Attribut distinguishedName (z.B. CN=LDAP-SyncKonto,CN=Users,DC=peachit,DC=local) als DN zu verwenden.
- LdapLoglevel PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: 0 1 2 3 4 5 Standardwert: 2 Gültigkeit: ab: 5.00f Hier kann das LogLevel (0 -5) festgelegt werden, mit dem gesteuert wird, welche und wie viele Meldungen bei der Durchführung des Imports in die Logdatei des Servers herausgeschrieben werden. LogLevel 0 (Default) schreibt generelle Meldungen (Start, Stopp, Fehler bei Neuanlage von Benutzern...) in die Logdatei. LogLevel 1 schreibt zusätzlich jede auftretende Exception. LogLevel 2 schreibt darüber hinaus Fehler bei LDAP-Objekten und Lizenzproblemen. LogLevel 3 wird in den Usercallbacks verwendet. LogLevel 4 sollte als Debuglevel nur verwendet werden, wenn eine Analyse des Importes notwendig ist, da die Menge der Logmeldungen sehr umfangreich werden kann. Logausgaben für den verwendeten Caching-Mechanismus werden bei LogLevel 5 geschrieben.
- LdapPassword PartnerNet string Öffentlich [Login/Logout/LDAP] Gültigkeit: ab: 5.00f Tragen Sie hier das Passwort des LDAP-Users (siehe LdapLoginDN) ein, über den sich die Anwendung beim LDAP-Server anmeldet. Die Angabe muss zur Zeit noch im Klartext erfolgen.
- LdapPort PartnerNet string Öffentlich [Login/Logout/LDAP] Mögliche Werte: 389 636 Standardwert: 389 Gültigkeit: ab: 5.00f Mit dieser Eigenschaft kann der Port des LDAP-Servers spezifiziert werden gegen den sich der DOCUMENTS Server anmelden kann. Bei LDAP (unverschlüsselt) ist dies 389 und bei LDAPS (LDAP over TLS/SSL) ist dies der Port 636.
s. auch LdapEnableSSL und LdapCaCertFile
- LdapProfileSearchScope PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f HF2 Wert 0: Untergruppen für Zugriffsprofile liegen alle unmittelbar in der LdapGroupFilterGroupDN.
Wert 1: Suche in allen Untergruppen rekursive und akzeptiere die dabei gefundenen Untergruppen ebenfalls als Zugriffsprofile. LdapRecursiveAccessProfiles muss 'true' sein.
- LdapRecursiveAccessProfiles PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: false true Gültigkeit: ab: 5.00f Ist der Wert "true", so wird den Benutzern der Documents- oder Archivzugang gewährt, sofern sie zu einer Untergruppe der Documents/Archivgruppe gehören und aus diesen importiert wurden. Damit sich die Option auswirkt muss auch die Option Benutzer aus Untergruppen importieren aktiviert werden.
Weiter werden den Benutzern auch dann importierte Zugriffsprofile zugewiesen, wenn sie nicht direkt darin Mitglied sind sondern nur in einer im LDAP untergeordneten Gruppe. Die Zuweisung der Zugriffsprofile erfolgt rekursiv. Documents/Archiv-Zugang auch für Untergruppen. Untergruppen als Zugriffsprofile zuweisen
- LdapRecursiveUserSearch PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: false true Gültigkeit: ab: 5.00f Ist der Wert "true", so werden Benutzer (rekursiv) auch aus Untergruppen importiert, die in der Gruppe für den Benutzerimport Mitglied sind.
- LdapSwitchingGroupDN PartnerNet string Öffentlich [Login/Logout/LDAP] Gültigkeit: ab: 5.00f Hier ist eine DN (z.B. CN=GruppeA,OU=Gruppen,OU=Dortmund,DC=peachit,DC=local) zu hinterlegen. Alle LDAP-User, die Mitglied in dieser Gruppe sind werden importiert.
- loginScript PartnerNet string Veröffentlicht [Login/Logout/LDAP, Scripting] Mögliche Werte: Skriptname Ldap.LdapLogon Gültigkeit: ab: 3.51 Dieses Property wird vor dem Login eines Benutzers ausgeführt. Dabei stehen folgende Umgebungsvariablen zur Verfügung:
- login -> Benutzerlogin
- password -> vom Benutzer eingegebenes Passwort im Klartext
- source -> z.B. SOAPAPI
- instance bei EE.x
- unit bei EE.x
- asUser -> bei trusted login Zu beachten ist, dass der Rückgabewert des PortalScriptes=0 sein muss, da sonst die Anmeldung abgebrochen wird. Mit context.errorMessage kann eine Fehlermeldung zurückgegeben werden. LDAP: Wird LDAP verwendet muss das Skript LdapLogon angegeben werden bzw. Ldap.LdapLogon ab Documents 5.0f um es aus dem scriptlibs Verzeichnis zu laden.
- loginWithAlias PartnerNet enum Öffentlich Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00d Mit dieser Eigenschaft schaltet man den Login mit einem Alias ein. Der Alias wird mit der Eigenschaft loginAlias am Benutzer gesetzt.
(bei Client-Relevanz: Classic-Client und Client 5)
- logoutScript PartnerNet string Öffentlich [Login/Logout/LDAP, Scripting] Mögliche Werte: Scriptname Gültigkeit: ab: 4.00a Mit diesen Property wird beim Logout das ausgewählte Script ausgeführt.
(bei Client-Relevanz: Classic-Client und Client 5)
- MailMaxSubjectLength PartnerNet string Öffentlich [Email] Mögliche Werte: 10-998 Standardwert: 255 Gültigkeit: ab: 4.00c HF2 Die Länge des Betreffs einer Mail ist auf 998 Zeichen beschränkt (RFC 2822).
Mit der Eigenschaft MailMaxSubjectLength kann man die Länge der E-Mails, die DOCUMENTS sendet, weiter einschränken. Der Defaultwert ist 255 Zeichen und entsprechen dem Limit von Exchange/Outlook.
Längere Betreffzeilen werden nach der Zeichenanzahl abgeschnitten.
- MaxAllowedAPISessions PartnerNet enum Öffentlich [SOAP] Mögliche Werte: 0 1 2 3 Standardwert: 3 Gültigkeit: ab: 4.00b Über die SOAP-Schnittstelle kann sich ein Benuter max. 3 mal parallel anmelden. Mit dieser Eigenschaft kann dieser Wert verringert werden.
- MaxFailedLogins PartnerNet string Veröffentlicht [Login/Logout/LDAP] Mögliche Werte: Anzahl Gültigkeit: ab: 3.51 Die maximale Anzahl von fehlgeschlagenen Logins, bis das Benutzerkonto gesperrt wird, kann definiert werden. Danach muss das Benutzerkonto im PortalClient wieder freigegeben. s auch loginScript
- NewEASYUserWithDLC PartnerNet enum Öffentlich [EEi, EEx] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 4.00d Mit der Eigenschaft NewEASYUserWithDLC=1 wird bei der ersten erfolgreichen EASYWare Authentifizierung eines neuen Benutzers ein Benutzerkonto mit Documents-Zugang angelegt. Ansonsten erlaubt das neue Konto zunächst nur Archivzugriff.
- onDeleteUserScript PartnerNet string Öffentlich [Scripting] Mögliche Werte: ScriptName1,ScriptName2 Gültigkeit: ab: 5.00g Script-Exit beim Löschen von Benutzern über die Mandanten-Eigenschaft onDeleteUserScript=Scriptname1,Scriptname2
- Outbar PartnerNet string Veröffentlicht [Webclient] Mögliche Werte: kommaseparierte Liste von Outbar Folder Gültigkeit: ab: 3.51 bis: 3.60j Man kann öffentliche Ordner auf eigenem Outbar-Register darstellen. Dazu muss man folgendes tun: 1. Schritt:
Spezifikation der zusätzlichen Outbar-Register
Standard-Outbar-Register: Ordner, Einstellungen
Eigenschaft in Mandanten-Einstellungen: Outbar=Name1,Name2,Name3 2. Schritt:
Outbar-Icons hinterlegen
Zielverzeichnis: \www\images\dlc\compact\outbar
Nicht aktives Icon: Name1.gif
Aktives Icon: Name1_a.gif
Zu beachten ist, dass der Name des Outbars und der des dazugehörigen Icons übereinstimmen. 3. Schritt:
Zuordnung der öffentlichen Ordner zu einem oder mehreren Outbar-Register
Eigenschaft im Ordner: Outbar=Name1,Name3 Der Ordner wird nur noch in dem spezifizierten Outbar-Register dargestellt - nicht mehr im Outbar-Register "Ordner".
(bei Client-Relevanz: Nur Classic-Client)
- overViewTreeChartScript PartnerNet Systemuser string Öffentlich [Webclient, Webclient5] Mögliche Werte: Portalskript Standardwert: - Gültigkeit: ab: 5.00c Legt das auszuführende Script fest zum erstellen des Organigrammbaums (Beispiel ims).
(bei Client-Relevanz: Classic-Client und Client 5)
- PasswordComplexityRule PartnerNet string Öffentlich [Server] Mögliche Werte: JSON-String Gültigkeit: ab: 5.00i HF2 Neues Verhalten beim Ändern von Kennwörtern: Nur noch starke Kennwörter
werden akzeptiert:
Für Abwärtskompatibilität: Mit der Mandanteneigenschaft StrongPasswords=0
kann das neue Verhalten abgeschaltet werden.
Wenn die Autorisierung gegen DOCUMENTS durchgeführt wird (Kennwörter werden
von DOCMENTS verwaltet), dann wird beim Ändern des Kennwortes durch den
Benutzer im Web-Client nun ein "starkes" Passwort verlangt.
Die Mindestanforderung an ein starkes Kennwort ist:
Mindestlänge 8 Zeichen, ein Großbuchstabe, ein Kleinbuchstabe, eine Ziffer
und ein Sonderzeichen Es können auch eigene Mindestanforderungen Über die Mandanteneigenschaft
PasswordComplexityRule = {"len":8,"lower":1,"upper":1,"number":1,"special":1}
definiert werden. Alternativ kann eine eigene Komplexitätsprüfung über den Script-Exit
realisiert werden:
Mandanten-Eigenschaft: isStrongPasswordScript=ScriptName
Als Vorlage kann die Standard-Implementierung aus
/scriptlibs/util/isStrongPasswords.js verwendet werden.
- privateFldHitlist PartnerNet string Öffentlich [Ordner] Gültigkeit: ab: 5.00g Kommaseparierte Definition einer abweichenden Standardtrefferliste
für private statische Ordner Gültige Spaltennamen sind dieselben wie bei "inboxHitlist":
- Title
- FileType
- Owner
- LastEditor
- CreatedAt
- ModifiedAt
- Task
- %AutoText% - performance-lastig!
- Mappentyp.Feldname Hinweis: Neben einer Trefferlistendefinition am Ordner selbst können auch
Properties für einzelne Ordnertypen diese Einstellung überschreiben.
Die Spezialordner "Aufgaben" und "Wiedervorlage" werden nicht angepasst.
- publicFldHitlist PartnerNet string Öffentlich [Ordner] Gültigkeit: ab: 5.00g Kommaseparierte Definition einer abweichenden Standardtrefferliste
für öffentliche statische Ordner. Gültige Spaltennamen sind dieselben wie bei "inboxHitlist":
- Title
- FileType
- Owner
- LastEditor
- CreatedAt
- ModifiedAt
- Task
- %AutoText% - performance-lastig!
- Mappentyp.Feldname
- ReplyToForMailDefaultSender PartnerNet string Öffentlich [Schnittstellen] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00i HF3 Mail-Versand: Wenn SMTPUseDefaultSender gesetzt ist, wird als Absender der Standard-Absender verwendet. Wenn zusätzlich ReplyToForMailDefaultSender gesetzt ist, wird die E-Mail-Adresse des Benutzers als ReplyTo Adresse verwendet.
- ScriptCategories PartnerNet DlcGlobalOptions enum Öffentlich [Ordner, Sortierung] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 4.00 Mit dieser Eigenschaft werden im Documents Manager die Scripting Kategorien eingeschaltet. Dies ermöglicht es Kategorien zu erstellen, in denen man bereits erstellte Scripte einsortieren kann.
(bei Client-Relevanz: Nein (Server Feature))
- scriptEditor PartnerNet text Veröffentlicht [Scripting] Mögliche Werte: Programmpfad Beispiel: C:\Programme\Notepad++\notepad++.exe Gültigkeit: ab: 3.51 Für das PortalScripting kann ein externer Editor eingebunden werden (z.B. Notepad++). Dann wird beim Drücken des Bearbeiten Buttons nicht mehr notepad gestartet, sondern der konfigurierte Editor. Ab 4.0b HF3 können auch Umgebungsvariablen im Programmpfad angewendet werden (z.B. %NotepadDir%\notepad++.exe durch verwendung der Umgebungsvariablen: NotepadDir=c:\tools\notepad++). Alternative zu Property scriptEditor
Client-Umgebungsvariable: SCRIPTEDITOR=C:\Notepad++\notepad++.exe -multiInst
- secureNewsletter PartnerNet enum Veröffentlicht [Content] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60a Der automatisch erzeugte Newsletter lässt sich mit dem Property "secureNewsletter=1" auch mit https-Links generieren.
- sentFldHitlist PartnerNet string Öffentlich [Ordner] Gültigkeit: ab: 5.00g Kommaseparierte Definition einer abweichenden Standardtrefferliste
für Ordner der Typen "Gesendet" und "Versendung beendet". Gültige Spaltennamen sind dieselben wie bei "inboxHitlist":
- Title
- FileType
- Owner
- LastEditor
- CreatedAt
- ModifiedAt
- Task
- %AutoText% - performance-lastig!
- Mappentyp.Feldname
- setPasswordScript PartnerNet string Veröffentlicht [Scripting, Login/Logout/LDAP] Mögliche Werte: Scriptname Gültigkeit: ab: 3.51 Dieses Property wird vor Passwortänderungen ausgeführt. Dabei werden die globalen Konstanten login, oldpassword und newpassword im Script zur Verfügung gestellt. Hier können z.B. Sicherheitsoptionen beim Festlegen eines Passworts bestimmt werden. Zu beachten ist, dass der Rückgabewert des Scripts = 0 sein muss, da ansonsten die Passwortänderung abgebrochen wird. Mit context.errorMessage kann eine Fehlermeldung zurückgegeben werden.
(bei Client-Relevanz: Nein (Server Feature))
- singleSignon PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: false true Gültigkeit: ab: 5.00f Wird ein Single-Sign-On (SSO) Dienst zur Anmeldung verwendet, so muss der Wert "true" gesetzt werden.
- SMTPAuthMethod PartnerNet enum Öffentlich [Email] Mögliche Werte: plain login cram-md5 ntlm Standardwert: plain Gültigkeit: ab: 4.00b HF2 Wenn am Mandanten die SMTP Authentifizierung aktiviert ist, wird sich immer mit der Methode PLAIN authentifiziert. Über die Eigenschaft können nun auch die abweichenden Methoden login, cram-md5, ntlm verwendet werden.
- SMTPTLS PartnerNet string Öffentlich [Schnittstellen] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f Mail-Versand: SMTP Server mit TLS ohne STARTTLS: Wenn STARTTLS in der SMTP Server Konfiguration am Mandanten abgestellt ist, und die Eigenschaft TLS=1 am Mandanten gesetzt wird, verbindet sich der Server direkt per TLS mit dem SMTP Server.
Deprecated: s: SMTPTLS
- SMTPUseDefaultSender PartnerNet string Öffentlich [Schnittstellen] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f Mail-Versand: Als Absender der Mail wird nicht der Benutzer verwendet, der im Web-Client die Mail abgesendet hat, sondern der Standard-Absender aus den eMail-Service Einstellungen im Mandanten.
- StrongPasswords PartnerNet enum Öffentlich [Server] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00i HF2 Neues Verhalten beim Ändern von Kennwörtern: Nur noch starke Kennwörter
werden akzeptiert:
Für Abwärtskompatibilität: Mit der Mandanteneigenschaft StrongPasswords=0
kann das neue Verhalten abgeschaltet werden.
Wenn die Autorisierung gegen DOCUMENTS durchgeführt wird (Kennwörter werden
von DOCMENTS verwaltet), dann wird beim Ändern des Kennwortes durch den
Benutzer im Web-Client nun ein "starkes" Passwort verlangt.
Die Mindestanforderung an ein starkes Kennwort ist:
Mindestlänge 8 Zeichen, ein Großbuchstabe, ein Kleinbuchstabe, eine Ziffer
und ein Sonderzeichen Es können auch eigene Mindestanforderungen Über die Mandanteneigenschaft
PasswordComplexityRule = {"len":8,"lower":1,"upper":1,"number":1,"special":1}
definiert werden. Alternativ kann eine eigene Komplexitätsprüfung über den Script-Exit
realisiert werden:
Mandanten-Eigenschaft: isStrongPasswordScript=ScriptName
Als Vorlage kann die Standard-Implementierung aus
/scriptlibs/util/isStrongPasswords.js verwendet werden.
- syncProfiles PartnerNet enum Öffentlich [Login/Logout/LDAP] Mögliche Werte: false true Gültigkeit: ab: 5.00f Ist der Wert "true", dann werden die Zugriffsprofile aus den festgelegten Gruppen importiert und dem Benutzer zugewiesen.
- TLS PartnerNet string Öffentlich [Schnittstellen] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00e bis: 5.00e HF2 Mail-Versand: SMTP Server mit TLS ohne STARTTLS: Wenn STARTTLS in der SMTP
Server Konfiguration am Mandanten abgestellt ist, und die Eigenschaft TLS=1
am Mandanten gesetzt wird, verbindet sich der Server direkt per TLS mit dem
SMTP Server.
Deprecated: s: SMTPTLS
- trustedSwitchPrincipals PartnerNet string Öffentlich [Webclient5] Mögliche Werte: mandant1, mandant2, mandant3 Gültigkeit: ab: 5.00f Multimandanten-Funktionalität. Im Web-Client können Benutzer mit gleichem Kennwort in den einzelnen Mandanten ohne Neuanmeldung über eine Mandantenwechsel-Funktion direkt in einen anderen Mandaten wechseln. Im Start- und Zielmandanten muss jeweils der andere Mandant als trustedSwitchPrincipals aufgeführt sein.
Außerdem muss "automatisches Login" aktiviert sein. Dieses Feature ist nur für Benutzer der Lizenzart "Named" User verfügbar.
- UniqueDocNameSeparator PartnerNet string Veröffentlicht [Blob] Mögliche Werte: Zeichen Gültigkeit: ab: 3.51 Lädt man auf einem Dokumentenregister ein Dokument hoch, dessen Dateiname auf demselben Register bereits existiert, so wird die Eindeutigkeit durch Anhängen einer Nummer wieder hergestellt. Mit diesem Property am Mandanten kann ein für alle Mappen gleiches eindeutiges Trennzeichen zwischen Dokumentenname und Nummer definiert werden. Beispiel der Funktionsweise: Defaultverhalten
doc.txt
doc0.txt
doc1.txt Bei UniqueDocNameSeperator=_
doc.txt
doc_0.txt
doc_1.txt
- UseDefaultMailSender PartnerNet enum Öffentlich [Email] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00f Mit dieser Eigenschaft "UseDefaultMailSender=1" am Mandanten wird beim Senden einer Email unabhängig vom Benutzer stets der Standard-Absender aus der Email-Einstellung verwendet.
- wasteFldHitlist PartnerNet string Öffentlich [Ordner] Gültigkeit: ab: 5.00g Kommaseparierte Definition einer abweichenden Standardtrefferliste
für Papierkorb-Ordner ("Gelöscht") Gültige Spaltennamen sind dieselben wie bei "inboxHitlist":
- Title
- FileType
- Owner
- LastEditor
- CreatedAt
- ModifiedAt
- Task
- %AutoText% - performance-lastig!
- Mappentyp.Feldname
- PortalScript
- aiRelevant PortalScript enum Öffentlich Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 6.1.0 Definiert, ob das Skript vom Copiloten aufgerufen werden darf
- clientExecutable PortalScript string Öffentlich [Scripting] Mögliche Werte: true, false, 1, 0 Standardwert: false Gültigkeit: ab: 5.00i HF3 Gibt das jeweilige Skript zur clientseitigen Ausführung frei.
- customTileScript PortalScript string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Gültigkeit: ab: 5.00b Notwendiger Schalter für die Aktivierung des Skriptes als Dashboard Kachel-Skript.
Ermöglicht die Auswahl als Kachel.
- dialogHeight PortalScript string Öffentlich [Scripting] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00e Legt für den Skriptparameterdialog fest, mit welcher Höhe er angezeigt werden soll.
- dialogWidth PortalScript string Öffentlich [Scripting] Mögliche Werte: Ganzzahl Standardwert: - Gültigkeit: ab: 5.00e Legt für den Skriptparameterdialog fest, mit welcher Breite er angezeigt werden soll.
- frequency PortalScript string Öffentlich [Server, Scripting, Performance] Mögliche Werte: n = zeitlicher Abstand der Intervalle in Minuten Standardwert: n Gültigkeit: ab: 5.00b Über die PortalScript-Eigenschaft frequency=n kann eine Anzahl in Minuten angegeben werden, in dessen Intervall das PortalScript ausgeführt werden soll. Dies ermöglicht alternative Intervalle zu viertelstündlich, etc. (s.a. thread)
- LifeCycleEnabled PortalScript string Öffentlich [Webclient5, Scripting] Mögliche Werte: 0, 1, false, true, Kommaseparierte Liste von Mappentypen Standardwert: false Gültigkeit: ab: 5.00i Skripte mit der Eigenschaft LifeCycleEnabled=1 bzw. true können bei benutzerdefinierten Lebenszyklusaktionen ausgewählt werden.
Wenn der technische Name eines Mappentypen gesetzt wird, ist dieses Skript nur für diesen Mappentypen verfügbar. (seit 6.0.1) Beispiel einzelner Mappentyp:
crmAccount Beispiel mehrere Mappentypen:
crmAccount,crmContact
- ProgressBar PortalScript enum Öffentlich [Scripting] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00d Aktiviert die ProgressBar im Documents Manager bei Ausführung des Scriptes
- ScriptExtensionsCallbackScript PortalScript text Öffentlich [Scripting, Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00e HF2 Das Skript kann "Callback-Implementierungen" der ScriptExtensions enthalten.
Eine detailierte Beschreibung befindet sich in der ScriptExtensions API https://otris.software/documents/api/scriptextensions/tutorial-ScriptExtensionsCallbacks.html
- thread PortalScript enum Öffentlich [Server, Scripting, Performance] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00b Job-Scripte mit der Eigenschaft "thread=1" werden durch einen zweiten PortalScript-Job auf dem zweiten JobThread (threadId=1) abgearbeitet und laufen damit unabhängig von dem anderen JobThread. (s.a. frequency)
- tileDescription DlcFolder PortalScript string Öffentlich [Webclient5] Gültigkeit: ab: 5.00b Information für die Auswahl der Kachel, Anzeige als Tooltip im Auswahldialog (Mehrsprachig de:aa;en:bb;). (Optionaler Parameter)
(bei Client-Relevanz: Nur Client 5)
- tileEditable PortalScript string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Gültigkeit: ab: 5.00b Steuert die Kachel hinsichtlich des Konfigurationsdialogs.
Bei Aktivierung ist der Dialog aktiviert.
- tileHeadline DlcFolder PortalScript string Öffentlich [Webclient5] Gültigkeit: ab: 5.00b Eine alternative Überschrift für die Kachel anstelle des Ordernamens (Mehrsprachig de:aa;en:bb;) (optionaler Parameter)
(bei Client-Relevanz: Nur Client 5)
- tileIcon DlcFolder PortalScript string Öffentlich [Webclient5] Gültigkeit: ab: 5.00b Pfad zur Verwendung eines anderen Icons in der rechten oberen Ecke der Kachel. (optionaler Parameter)
(bei Client-Relevanz: Nur Client 5)
- tileProfiles DlcFolder PortalScript string Öffentlich [Webclient5] Gültigkeit: ab: 5.00b Eine Komma-separierte Liste (ohne Leerzeichen) mit den Profilen, die diesen Ordner als Kachel auswählen und auf dem Dashboard sehen können. (Optionaler Parameter)
(bei Client-Relevanz: Nur Client 5)
- tileRemote DlcFolder PortalScript string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: false Gültigkeit: ab: 5.00g Über die Eigenschaft "tileRemote" kann gesteuert werden ob die Kachel im Kontext einer Multimandanten Konfiguration auch in den anderen Mandanten zur Verfügung steht. Kann nur in Kombination mit der globalen Eigenschaft "dashboardRemoteTiles" verwendet werden.
- webServicesEnabled PortalScript string Öffentlich Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 6.0.1 Skripte mit der Eigenschaft webServicesEnabled=true können Webhook- und Skript-API-Anfragen verarbeiten.
- PortalScriptParameter
- autoCompleteConfig DlcField PortalScriptParameter text Öffentlich [Webclient5] Mögliche Werte: Portalskript, JSON-Konfiguration Gültigkeit: ab: 5.00a Autocomplete bei Mappenfeld (man gibt Portalskript an) {
scriptName: <Skriptname>[,
minQueryChars: <mindestens einzugebenden Zeichen>,
queryDelay: <Verzögerung bis zum Aufruf>,
maxResults: <maximale Anzahl der Auswahloptionen>,
autoFocusResult: <erste Option sofort auswählen>,
template: <Handlebars-Template zur Generierung von eigenem HTML>]
}
(bei Client-Relevanz: Nur Client 5)
- dropzoneConfig PortalScriptParameter text Öffentlich [Scripting] Standardwert: {} Gültigkeit: ab: 5.00d Ab der Documents-Version 5.0d ist es möglich Skriptdialoge mit einem Dateiupload (Dropzone) zu versehen. Im Manager muss dazu ein Skript-Parameter vom Typ String mit einer Eigenschaft dropzoneConfig angelegt werden. Die Dropzone-Konfiguration dropzoneConfig muss als JSON-String angegeben werden Beispiel: dropzoneConfig = {
// Deaktiviert die Möglichkeit mehrere Dateien hochzuladen
"multiple": false,
// Legt die Höhe der Dropzone in Pixeln fest
"height": 120,
// Icon für die Dropzone
"icon": "ionicons:ion-md-cloud-upload;font-size:64px;",
// Label für die Dropzone
"label": "UploadArea",
// Upload auf bestimmte Erweiterungen einschränken
"extensions": ["jpg", "jpeg", "png", "gif"],
// Maximale Dateigröße in bytes festlegen
"maxSize": 2000000 ,
// Position der Liste, der hochgeladenen Dateien "top" (Standard) oder "bottom" (seit DOCUMENTS 5.0i)
"listPosition": "bottom"
};
- noEmptyValue PortalScriptParameter string Öffentlich [Webclient5] Mögliche Werte: true, false Gültigkeit: ab: 5.00h Entfernt den leeren Eintrag bei Aufzählungsfeldern im Skriptparameterdialog.
- Readonly PortalScriptParameter string Öffentlich [Scripting] Mögliche Werte: 0 1 Gültigkeit: ab: 6.1.0 Wenn die Eigenschaft 'Readonly=1' an einem Skriptparameter gesetzt ist, ist der Skriptparameter im Web schreibgeschützt.
- sortedEnum PortalScriptParameter string Öffentlich [Scripting, Sortierung] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00a HF2 Mit der Eigenschaft "sortedEnum=1" kann definiert werden, dass Portalscript-Parameter vom Datentypen Aufzählung und Doppelauswahlliste alphanumerisch bzgl. der angemeldeten Locale sortiert werden.
- store.ini / [archive]
- defaultTimezone store.ini / [archive] string Öffentlich [EAS] Mögliche Werte: Zeitzonenname der IANA-Zeitzonendatenbank Standardwert: Europe/Berlin Gültigkeit: ab: 5.00 Ab Documents 5 wird bei Zeitstempeln im Archiv der UTC-Offset mit abgelegt. Dadurch sind die Zeitangaben unabhängig von der Zeitzone. Für die alten Einträge ohne UTC-Offset lässt sich die Zeitzone in der Ini-Datei definieren, welche für diese Zeitangaben gelten soll. Als Name ist Name der IANA-Zeitzonendatenbank anzugeben. Siehe http://www.iana.org/time-zones.
- personalAnnotations store.ini / [archive] string Öffentlich [EAS] Mögliche Werte: yes, no Standardwert: yes Gültigkeit: ab: 4.00 Legt fest, ob Annotierungen immer nur für den Nutzer sichtbar und bearbeitbar sind, der sie angelegt hat, oder für alle. Vorlegungswert ist nur für den jeweiligen Nutzer sicht- und bearbeitbar.
- plannedRecordCapacity store.ini / [archive] string Öffentlich [EAS] Mögliche Werte: Nummer Standardwert: 0 Gültigkeit: ab: 5.00 Legt fest, wie viele Mappen zur Archivierung in einem Store vorgesehen sind. Der Vorbelegungswert ist 0 (unbegrenzt). Dieser Wert begrenzt nicht die maximale Mappenanzahl und ist für Auswertungszwecke gedacht. Im EAS-Manager wird daraus die Auslastung abgeleitet.
- policyPath store.ini / [archive] string Öffentlich [EAS] Mögliche Werte: gültiger Pfad zu einem Verzeichnis Gültigkeit: ab: 4.00 Pfad zu einem Verzeichnis, wo Zugriffs- und Aufbewahrungsrichtlinien des Archivs aufbewahrt werden. Da sich diese Richtlinien ändern können, werden sie standardmäßig im Verwaltungsdatenbereich des Archivs abgelegt.
- storageDepth store.ini / [archive] string Öffentlich [EAS] Mögliche Werte: numerischer Wert Standardwert: 2 Gültigkeit: ab: 4.00 Tiefe der Ordnerstruktur, wenn die Ablagestrategie `hasbased` verwendet wird.
- storageMode store.ini / [archive] string Öffentlich [EAS] Mögliche Werte: archiveDateTime, fieldBased, ­hashBased Standardwert: archiveDateTime Gültigkeit: ab: 4.00 Legt die Ordnerstruktur (Ablagestrategie) im Repository fest. Folgende Modi sind einstellebar: * archiveDateTime: Mappen werden chronologisch anhand des Archivierungsdatums in Verzeichnissen abgelegt. Bspw. wir eine Mappe, die um 10.20 Uhr am 20. Februar 2010 archiviert wurde, im Unterverzeichnis 2010/02/20/10/<mappenid> abgelegt
* fieldBased: Das Ablageverzeichnis wird aus Indexfeldern der Mappe dynamisch bestimmt. Die Konfiguration erfolgt über den Schalter "storagePattern".
* ­hashBased: Die Speicherung der Dateien erfolgt über die Ordner gleichverteilt, in dem die Ordnernamen aus Hash-Werten ermittelt werden. Konfigurieren lässt sich dies über die Schalter "storageDepth" und "storageNameLength" Beispiele 1:
```
storageMode=fieldBased
storagePattern=%a_type%/%aField1%
``` Beispiele 2:
```
storageMode=hashBased
storageDepth=2
storageNameLength=2
```
- storageNameLength store.ini / [archive] string Öffentlich [EAS] Mögliche Werte: numerischer Wert Standardwert: 2 Gültigkeit: ab: 4.00 Länge der Verzeichnisnamens bei der Ablage-Modus "hashbased".
- storagePattern store.ini / [archive] string Öffentlich [EAS] Mögliche Werte: Muster für das Ordnerstruktur im Repository Gültigkeit: ab: 4.00 Muster für das Ordnerstruktur bei Ablage-Modus "fieldbased". Der Wert ist ein Ausdruck, in dem mit Verweisen auf Mappenfelder definiert werden kann, wie die Ordner gebildet werden, in dem sich die Mappen archiviert werden. Verzeichnisebenen werden dabei mit Schrägstrich getrennt: ```
[archive]
storagePattern=Feld1/Feld2
``` Folgende internen Felder können verwendet werden:
* _id: Mappen-Versions-Id
* _masterId: Id der Mappe über die vollständige Historie
* _type: Mappentyp
* _creator: Name des Erzeugers der Mappe vor Archivierung
* _creatorLogin: Login des Erzeugers der Mappe vor Archivierung
* lastModifier: Name des letzten Bearbeiters vor der Archivierung
* lastModifierLogin: Login des letzten Bearbeiters vor der Archivierung
* _archiver: Name des Archivierers
* _archiverLogin: Login des Archivierers
* _version: Mappenversion
* _createdDateTime: Zeitstempel der Erzeugung der Mappe vor der Archivierung
* _lastModifiedDateTime: Zeitstempel der letzten Bearbeitung vor der Archivierung
* _archiveDateTime: Zeitstempel der Archivierung
* _title: Titel der Mappe Zeitstempelwerte können mit folgenden Funktionen kombiniert werden ```
$year(), $month(), $day(), $hour(), $minute() und $second()
``` Die Funktionen geben den entsprechenden Bestanteil des Zeitstempels zurück. Beispiel:
```
; Ergibt die Ordnerstruktur: <Jahr>/<Mappen-Id>:
storagePattern=$year(%a_archiveDateTime%)/%a_id%
```
- store.ini / [auditTrail]
- host store.ini / [auditTrail] string Öffentlich [EAS] Mögliche Werte: Hostname oder IP-Adresse Standardwert: <leer> Gültigkeit: ab: 4.00 Hostname des Logging-Servers. ```
host=localhost
```
- store.ini / [index]
- attachmentsCrossIndexing store.ini / [index] string Öffentlich [EAS] Mögliche Werte: yes, no Standardwert: yes Gültigkeit: ab: 4.00 Schalter, ob beim Indizieren die Terme einer Anlage auch bei den Anlagen derselben Mappe gespeichert werden sollen (yes) oder nicht (no).
- dateTimeAnalyzer store.ini / [index] string Öffentlich [EAS] Mögliche Werte: Komma-separierte Liste von Feldnamen Standardwert: Leere Liste Gültigkeit: ab: 5.00c Mappenfelder, auf die der DateTime-Analyzer angewendet werden soll. ```
[index]
dateTimeAnalyzer=Field1,Field2
```
- dateTimeSievingAnalyzer store.ini / [index] string Öffentlich [EAS] Mögliche Werte: Komma-separierte Liste von Feldnamen Standardwert: Leere Liste Gültigkeit: ab: 5.00e Mappenfelder, auf die der Linebreak-Analyzer angewendet werden soll. ```
[index]
dateTimeSievingAnalyzer=Field1,Field2
```
- delayedAttachmentIndexing store.ini / [index] string Öffentlich [EAS] Mögliche Werte: yes, no Standardwert: no Gültigkeit: ab: 4.00 Schalter für nachgelagerte Indizierung von Anlagen. Ist dies aktiv (`yes`), werden Mappen bei der Archivierung nicht indiziert. Die Indizierung erfolgt dann aber bei einem `--update-index` oder `--rebuild-index`.
- delayedRecordIndexing store.ini / [index] string Öffentlich [EAS] Mögliche Werte: yes, no Standardwert: no Gültigkeit: ab: 4.00 Schalter für nachgelagerte Indizierung von Mappen. Ist dies aktiv (`yes`), werden Mappen bei der Archivierung nicht indiziert. Die Indizierung erfolgt dann aber bei einem `--update-index` oder `--rebuild-index`.
- indexAttachment store.ini / [index] string Öffentlich [EAS] Mögliche Werte: yes, no Standardwert: yes Gültigkeit: ab: 4.00 Schalter, ob Anlagen generell indiziert werden sollen.
- indexRecord store.ini / [index] string Öffentlich [EAS] Mögliche Werte: yes, no Standardwert: yes Gültigkeit: ab: 4.00 Schalter, ob Mappen generell indiziert werden sollen
- keywordAnalyer store.ini / [index] string Öffentlich [EAS] Mögliche Werte: Komma-separierte Liste von Feldnamen Standardwert: Leere Liste Gültigkeit: ab: 5.00c Mappenfelder, auf die der Keyword-Analyzer angewendet werden soll. ```
[index]
keywordAnalyzer=Field1,Field2
```
- linebreakAnalyzer store.ini / [index] string Öffentlich [EAS] Mögliche Werte: Komma-separierte Liste von Feldnamen Standardwert: Leere Liste Gültigkeit: ab: bis: 5.00c HF1 Mappenfelder, auf die der Linebreak-Analyzer angewendet werden soll. ```
[index]
linebreakAnalyzer=Field1,Field2
```
- lowerCaseKeywordAnalyzer store.ini / [index] string Öffentlich [EAS] Mögliche Werte: Komma-separierte Liste von Feldnamen Standardwert: Leere Liste Gültigkeit: ab: 5.00c HF2 Mappenfelder, auf die der LowerCaseKeyword-Analyzer angewendet werden soll. ```
[index]
lowerCaseKeywordAnalyzer=Field1,Field2
```
- mixedAnalyzerFields store.ini / [index] string Öffentlich [EAS] Mögliche Werte: Komma-separierte Liste von Feldern Gültigkeit: ab: 4.00d HF3 Komma-separierte Liste von Feldern, bei denen bei einigen Mappen der Standard-Analyzer und bei anderen Mappen der Keyword-Analyzer verwendet wurde. Dadurch werden bei der Suche beide Analyzer berücksichtigt. ```
[index]
mixedAnalyzerFields=field1,field2
```
- mixedKeywordAnalyzerFields store.ini / [index] string Öffentlich [EAS] Mögliche Werte: Komma-separierte Liste von Feldern Gültigkeit: ab: 5.00c HF1 Komma-separierte Liste von Feldern, bei denen bei einigen Mappen der Text-Analyzer und bei anderen Mappen der Keyword-Analyzer verwendet wurde. Dadurch werden bei der Suche beide Analyzer berücksichtigt. ```
[index]
mixedKeywordAnalyzerFields=field1,field2
```
- numberSievingAnalyzer store.ini / [index] string Öffentlich [EAS] Mögliche Werte: Komma-separierte Liste von Feldnamen Standardwert: Leere Liste Gültigkeit: ab: 4.00e Mappenfelder, auf die der NumberSieve-Analyzer angewendet werden soll. ```
[index]
numberSievingAnalyzer=Field1,Field2
```
- overwriteAnalyzer store.ini / [index] string Öffentlich [EAS] Mögliche Werte: yes, no Standardwert: no Gültigkeit: ab: 5.00c HF1 Wenn auf `yes` gestellt, werden für alle Felder, für die in der Store-Konfiguration angegeben Felder die jeweiligen Analyzer verwendet. Anaylzer-Angaben an den Mappenfeldern und in Suchanfragen werden für diese Felder ignoriert.
- sortableNumberPrecision store.ini / [index] string Öffentlich Mögliche Werte: Zahl Standardwert: 9 Gültigkeit: ab: 4.00 Anzahl der Zeichen, die bei der sortierbaren Zahlendarstellung im Index für Nachkommastellen verwendet werden sollen.
- sortableNumberWidth store.ini / [index] string Öffentlich Mögliche Werte: Zahl Standardwert: 30 Gültigkeit: ab: 4.00 Anzahl der Zeichen für die sortierbare Darstellung von Zahlen im Index. Zahlen werden im Index so dargestellt, dass die numerische Reihenfolge mit der lexikographischen Reihenfolge übereinstimmt
- stopwordlistfields store.ini / [index] string Öffentlich [EAS] Mögliche Werte: Kommaseparierte Liste von Feldnamen Gültigkeit: ab: Kommaseparierte Liste der Mappenfelder, auf die die Stopwort-Liste angewendet wird. Eine leere Liste Liste bedeutet, dass die Stopwort-Liste auf alle Mappenfelder angewendet wird.
- textAnalyzer store.ini / [index] string Öffentlich [EAS] Mögliche Werte: Komma-separierte Liste von Feldnamen Standardwert: Leere Liste Gültigkeit: ab: 5.00c Mappenfelder, auf die der Text-Analyzer angewendet werden soll. ```
[index]
textAnalyzer=Field1,Field2
```
- usestopwordlistonlyforattachment store.ini / [index] string Öffentlich [EAS] Mögliche Werte: yes, no Standardwert: no Gültigkeit: ab: Legt fest, ob die Stopwort-Liste nur auf Anlagen angewendet werden soll.
- store.ini / [registry]
- sqlserver_connectionstring store.ini / [registry] string Öffentlich [EAS] Mögliche Werte: ODBC-Connection-String Standardwert: Leerer String Gültigkeit: ab: Setzt die Zeichenkette, um sich mit dem SQL-Server zu verbinden. Voraussetzung ist dass Verbindungstype wie folgt gesetzt sein muss: ```
sqlserver_connectionType=string
``` Beispiel: ```
sqlserver_connectionstring=DRIVER=SQL Server Native Client 10.0;SERVER=(local);trusted_connection=yes;
```
- sqlserver_connectiontype store.ini / [registry] string Öffentlich [EAS] Mögliche Werte: authentification, string Standardwert: authentification Gültigkeit: ab: Legt fest wie zum SQL-Server verbunden wird.
- sqlserver_name store.ini / [registry] string Öffentlich [EAS] Mögliche Werte: Name einer ODBC-Verbindung Standardwert: Leerer String Gültigkeit: ab: Setzt den Namen für die ODBC-Verbindung zum SQL-Server. Voraussetzung ist dass Verbindungstype wie folgt gesetzt sein muss: ```
sqlserver_connectionType=authentification
```
- sqlserver_password store.ini / [registry] string Öffentlich [EAS] Mögliche Werte: Passwort des Nutzers Standardwert: Leerer String Gültigkeit: ab: Setzt das Passwort für die ODBC-Verbindung. Voraussetzung ist dass Verbindungstyp wie folgt gesetzt sein muss: ```
sqlserver_connectionType=authentification
```
- sqlserver_user store.ini / [registry] string Öffentlich [EAS] Mögliche Werte: Login eines Nutzers Standardwert: leerer String Gültigkeit: ab: Setzt den Nutzernamen für die ODBC-Verbindung. Voraussetzung ist dass Verbindungstype wie folgt gesetzt sein muss: ```
sqlserver_connectionType=authentification
```
- timeout store.ini / [registry] string Veröffentlicht [EAS] Mögliche Werte: Timeout in Sekunden Standardwert: 60 Gültigkeit: ab: 4.00 Timeout in Sekunden, um Schreibzugriff auf die Registry zu bekommen
- type store.ini / [registry] string Öffentlich [EAS] Mögliche Werte: sqlite3, sqlserver, mariadb Standardwert: sqlite3 Gültigkeit: ab: 4.00b Typ der Registry. Erlaubte Werte sind * sqlite3: Es wird eine sqlite3-Datenbank zur Speicherung der Registry verwendet.
* sqlserver: Es wird eine sqlserver-Datenbank zur Speicherung der Registry verwendet.
* mariadb: Es wird eine MariaDB-Datenbank zur Speicherung der Registry verwendet. Beispiel: ```
[registry]
type=sqlite3
```
- store.ini / [storageSystem]
- s3AccessKeyId store.ini / [storageSystem] string Öffentlich [EAS] Mögliche Werte: Zugriffs-Id as String Standardwert: <leer> Gültigkeit: ab: 5.00h HF2 Zugriffs-Id für den verwendeten S3-Dienst.
- s3BucketName store.ini / [storageSystem] string Öffentlich [EAS] Mögliche Werte: Name eines S3-Buckets Standardwert: <leer> Gültigkeit: ab: 5.00h HF2 Name des Buckets im S3-Dienst, wo das WORM des Stores abgelegt wird.
- s3Host store.ini / [storageSystem] string Öffentlich [EAS] Mögliche Werte: DNS-Name oder IP-Adresse mit Port Standardwert: <leer> Gültigkeit: ab: 5.00h HF1 Hostname oder IP-Adresse mit Port, unter dem der S3-Dienst verfügbar ist.
- s3SecretAccessKey store.ini / [storageSystem] string Öffentlich [EAS] Mögliche Werte: Zeichenfolge eines Schlüssels Standardwert: <leer> Gültigkeit: ab: 5.00h HF2 Geheimer Schlüssel (vergleichbar mit einem Passwort) für den Zugriff auf den verwendeten S3-Dienst, der zu der angegeben Schlüssel-Id (`s3AccessKeyId`) gehört.
- s3UriStyle store.ini / [storageSystem] string Öffentlich [EAS] Mögliche Werte: path, virtualhost Standardwert: path Gültigkeit: ab: 5.00h HF2 URI-Stil des genutzten S3-Dienstes.
- type store.ini / [storageSystem] enum Öffentlich [EAS] Mögliche Werte: Filesystem LtaCubeRWRO NAS S3 Standardwert: Filesystem Gültigkeit: ab: 4.00d HF3 Gibt den Typ des Speichersystems an, in dem das WORM liegt. Folgende Werte sind möglich: - `Filesystem`: reguläre Dateisystem
- `LtaCubeRWRO`: Fast LTA Cube im Mous RWRO; erlaubt, die zusätzlichen Sicherheitsfunktionen des Cubes zu verwenden
- `NAS`: Netzlaufwerk; Erreichbarkeit wird automatisch geprüft
- `S3`: S3-Storage (ab 5.0h HF 2)
- Systemuser
- AccessProfileLogbook Systemuser enum Öffentlich [Debug] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00a Wird das erweiterte Logging für Zugrifsprofile in der documents.ini aktiviert, so werden alle Veränderungen der definierten Attributen an allen Zugriffsprofilen im Log Buch festgehalten. Möchte man jedoch einzelne Zugriffsprofile vom Logging ausschließen so kann diese Eigenschaft am Mappentyp gesetzt werden. (s.a. Dokumentation: Erweitertes Logging)
- ActiveOutbar DlcGlobalOptions Systemuser string Öffentlich [Webclient] Mögliche Werte: Name der Outbar Standardwert: Outbarname Gültigkeit: ab: 3.60d Es kann die direkt nach dem Login eines Benutzers angezeigte Outbar definiert werden. Diese Eigenschaft lässt sich ab Documents 4.0a auch am Benutzer festlegen. Ab Documents 5 kann der Spezialwert "LAST" verwendet werden. Damit wird immer die vor dem Logout vom Benutzer zuletzt gewählte Outbar angezeigt.
(bei Client-Relevanz: Classic-Client und Client 5)
- allowFollowUpByOtherUser DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: 0, 1 Gültigkeit: ab: 5.00g HF1 Die globale Eigenschaft 'allowFollowUpByOtherUser=1' ermöglicht es, eine Mappe auf Wiedervorlage durch einen anderen Benutzer setzen zu lassen. Es erscheint somit im Wiedervorlage - Dialog eine Klappliste der möglichen Empfänger.
Dabei werden die Leserechte (ohne (G)ACL) des empfangenden Benutzers auf die Mappe berücksichtigt. Ab Documents 5.0 g HF 3 bzw. Documents 5.0 h werden (G)ACL dabei auch geprüft.
Auf Benutzerebene kann dieser globalen Freigabe widersprochen werden. Das geschieht mit der gleichen Eigenschaft. Soll also ein Benutzer 'schreiber' nicht in der Klappliste zur Wiedervorlage erscheinen, muss für ihn am Benutzer die Eigenschaft 'allowFollowUpByOtherUser=0' gesetzt werden.
- allowMessage DlcGlobalOptions Systemuser string Öffentlich [Webclient5, Scripting] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00d Aktiviert die Nachrichten-Kommunikation zwischen den angemeldeten Benutzern.
Funktioniert nur wenn auch die Eigenschaft allowNotification auf true gesetzt wird.
- allowMessageSendAll DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00d Setzt man die Eigenschaft auf true gibt es die Möglichkeit eine Nachricht an alle angemeldeten Benutzer zu schicken (@ALL steht im Nachrichtenfeld zur Verfügung).
- allowNotification DlcGlobalOptions Systemuser string Öffentlich [Webclient5, Scripting] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00d Aktiviert das Benachrichtigungssystem über Websockets.
- ApiKeyAuthenticationPasswordReset AccessProfile DlcGlobalOptions Systemuser string Öffentlich [Login/Logout/LDAP, Schnittstellen] Mögliche Werte: 0,1 Standardwert: 1 Gültigkeit: ab: 5.00g HF2 Wenn dieses Property auf 0 gesetzt wird, dann werden die API-Keys bei Änderung des Passworts nicht gelöscht.
- autoOpenDocMode DlcGlobalOptions DlcFile DlcRegister Systemuser enum Veröffentlicht [Blob] Mögliche Werte: internal external download Standardwert: internal Gültigkeit: ab: 3.60b Es lässt sich durch dieses Property bestimmen, wie man ein Dokument aufrufen möchte. Verhalten im Classic Client: Es kann zwischen internal (im Browser) external (externer Viewer) und download gewählen werden. Die Eigenschaft wird auf dem Register, der Mappe und global unterstützt. Verhalten im Client 5: Der Wert "external" wird ab der Version 5.0e HF1 unterstützt. Die Eigenschaft kann auf einem Register, Mappentyp und global gesetzt werden und bewirkt das beim Anzeigen einer Mappe dieses Typs ein Popup mit dem ersten Dokument automatisch geöffnet wird.
Ab Version 5.0e HF2 wird die Eigenschaft zusätzlich auf dem Benutzer und mit dem Wert "internal" unterstützt. Des weiteren greift die Eigenschaft nicht mehr, wenn auf dem Mappentyp die Option "Erstes Dokument sofort öffnen" deaktiviert ist. Der Wert "download" wird weiterhin nicht unterstützt.
- autoOpenDoubleView DlcFile DlcGlobalOptions Systemuser string Öffentlich Mögliche Werte: 0, false , 1, true Standardwert: false Gültigkeit: ab: 5.00e Öffnet neben der Mappeansicht einen Dokumentennavigator mit allen Dokumenten der Mappe.
- corporateColor DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: + alle css-Formatangaben: Hexadezimalcodierung + Farbnamen Gültigkeit: ab: 5.00a legt Hintergrundfarbe für Module fest.
gleiche Eigenschaft wie skinSignalColor, aber ohne Verweis auf die .less - Dateien.
(bei Client-Relevanz: Nur Client 5)
- CSVCellMasking Systemuser string Öffentlich [Webclient] Mögliche Werte: Zeichen wie z.B. " Gültigkeit: ab: 4.00e Mit dieser Eigenschaft kann man ein Zeichen für die Zellen-Maskierung beim CSV-Export angeben, welches die globale Einstellung überschreibt.
- CSVColumnSeparator Systemuser string Öffentlich [Webclient] Mögliche Werte: Trennzeichen wie z.B. ; oder , Gültigkeit: ab: 4.00e Mit dieser Eigenschaft kann man ein Spalten-Trennzeichen für den CSV-Export angeben, welches die globale Einstellung überschreibt.
(bei Client-Relevanz: Nein (Server Feature))
- CSVEncoding DlcGlobalOptions Systemuser enum Öffentlich [Webclient] Mögliche Werte: UTF-8 ISO-8859-1 ISO-8859-15 Windows-1252 Windows-1250 Gültigkeit: ab: 4.00b Beim csv-Export aus Listen im Web-Client werden die csv-Dateien im lokalen Encoding des DocumentServer geschrieben (z.B. unter Windows Win-1252).
Ein abweichendes Encoding kann über die Eigenschaft "CSVEncoding" am Benutzer bzw. global bei DOCUMENTS Einstellungen gesetzt werden.
- defaultEExInstance DlcGlobalOptions Systemuser string Öffentlich [EEx] Mögliche Werte: Instanzname Gültigkeit: ab: 3.60c Wird bei der Anmeldung die Unit und Instanz nicht angegeben (z.B. bei SSO) sollte dieses Property zusammen mit defaultEExUnit gesetzt werden.
- defaultEExUnit DlcGlobalOptions Systemuser string Öffentlich [EEx] Mögliche Werte: Unit Gültigkeit: ab: 3.60c Wird bei der Anmeldung die Unit und Instanz nicht angegeben (z.B. bei SSO) sollte dieses Property zusammen mit defaultEExInstance gesetzt werden.
- defaultFeatureConfig Systemuser AccessProfile string Öffentlich [Webclient5] Mögliche Werte: String, Name der Konfiguration Gültigkeit: ab: 5.00 Zur individuellen Konfiguration des FeatureManagers kann am Benutzer oder an Zugriffsprofilen diese Eigenschaft gesetzt werden. Der Wert der Eigenschaft ist der Name der Konfiguration.
- defaultQuickViewFeatureConfig Systemuser string Öffentlich [Webclient5] Gültigkeit: ab: 5.00
- DisableWorkflowMails Systemuser enum Öffentlich [Workflow] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00g Mit der Eigenschaft DisableWorkflowMails=1 am Benutzer kann erzwungen werden, dass dieser Benutzer keine E-Mails im Kontext von Workflows erhält, wie z.B. bei neuer Mappe im Eingangskorb, Eskalationen, Signalausgängen etc.
- emailLang Systemuser string Öffentlich [Email] Mögliche Werte: de, en, fr, nl, ... Standardwert: erste Portalsprache Gültigkeit: ab: 4.00b Sprache von E-Mails: mit der am Benutzerkonto /Redakteur zu definierenden Eigenschaft emailLang =locale (locale = de, en, fr, nl....) kann festgelegt werden, in welcher Sprache ein Benutzer die Standard-Mails (Neue Mappe im Eingangskorb, Mappe zurück aus Versendung, ...) bekommen soll.
(bei Client-Relevanz: Classic-Client und Client 5)
- extendedSearchFieldColumns DlcGlobalOptions Systemuser string Öffentlich [Suche] Mögliche Werte: 1, 2 Standardwert: 1 Gültigkeit: ab: 5.00f Im Dialog für die Erweiterte Suche können mit der Globalen oder Benutzer-Eigenschaft "extendedSearchFieldColumns" = "2" als alternative Darstellung die rechten Suchfelder optional in einem Zwei-Spalten-Layout (statt einer Spalte) dargestellt werden. Damit wird für die Suchfelder nur etwa die Hälfte des sonst üblichen Raumes benötigt, was bei einer großen Anzahl von Feldern zu deutlich mehr Übersicht und weniger Auf-/Ab-Scrolling führt.
- extendedSearchTreeHorizontal DlcGlobalOptions Systemuser FeatureManager string Öffentlich [Suche] Mögliche Werte: false, true Standardwert: false Gültigkeit: ab: 5.00f Im Dialog für die Erweiterten Suche können mit der Globalen oder Benutzer-Eigenschaft "extendedSearchTreeHorizontal" = "true" als alternative Darstellung des linken Baumes die beiden Hauptknoten "Suchquellen" und "Mappentypen" optional nebeneinander (statt untereinander) dargestellt werden.
- fileEditCommitOnEnter DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00c Mappe speichern beim Drücken von Enter-Taste auf Feldern (Textareas ausgenommen).
(bei Client-Relevanz: Nur Client 5)
- fileEditStartOnDoubleClick DlcGlobalOptions Systemuser string Öffentlich Mögliche Werte: true, false Standardwert: true Gültigkeit: ab: 5.00c Wechsel in den Bearbeitungsmodus beim Doppelklick auf der Mappenansicht und Gentable.
(bei Client-Relevanz: Nur Client 5)
- fileLinkClassicClient DlcGlobalOptions Systemuser string Öffentlich [Webclient, Email, Webclient5] Mögliche Werte: 0 1 Gültigkeit: ab: 5.00 Die URL der Mappen-Quickview Links, welche in Mails verwendet werden (neue Mappe im Eingangskorb etc) unterscheiden sich zwischen dem Webclient 5 und dem Webclient 4 (Classic-Client).
Es kann global bei Documents-Einstellungen definiert werden, ob die URLs für den Webclient4 (fileLinkClassicClient=1) erzeugt werden sollen. Am Benutzer selber kann diese globale Einstellung überschrieben werden (fileLinkClassicClient=0/1).
(bei Client-Relevanz: Nein (Server Feature))
- fileMessageAutoSubscribe Systemuser DlcGlobalOptions string Öffentlich Mögliche Werte: true, false, 0, 1 Standardwert: true Gültigkeit: ab: 5.00d HF2 Mit der Eigenschaft kann man steuern, ob das Schreiben eines Kommentar zu einer Mappe automatisch dazu führt dass man die Kommentare abonniert. Die Eigenschaft kann Global oder am Benutzer gesetzt werden.
- fileMessageOpenByDefault DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: true, false, 0, 1 Standardwert: false Gültigkeit: ab: 5.00f Mit der Eigenschaft kann festgelegt werden ob die Mappenkommentare standardmäßig geöffnet sind.
- fulltextSearchDefault DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: filetype:<MAPPENTYP_NAME> Gültigkeit: ab: 5.00e Mit der Eigenschaft fulltextSearchDefault kann der Standardwert für die Volltextsuche festgelegt werden. Ab 5.0i HF1 kann die Eigenschaft auch am Benutzer gesetzt werden. Beipspiel: fulltextSearchDefault = filetype:crmContact
Der Mappentyp crmContaxt wird durch den Wert "filetype:crmContact" als Standard fesgelegt. Die Eigenschaft FulltextSearch muss auf dem Mappentyp gesetzt sein.
- HandleLockedUserAsAbsent Systemuser DlcGlobalOptions enum Öffentlich [Workflow, Server] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00g Gesperrte und entfernbare Benutzer werden im Kontext des Workflows wie abwesende Benutzer behandelt und die Vertreterregelungen werden angewendet. Mit der Benutzer- bzw. Documents Einstellungen Eigenschaft HandleLockedUserAsAbsent=0 kann diese geänderte Standardverhalten wieder zurück gesetzt werden
- hasCheckInCheckOut Systemuser DlcGlobalOptions enum Veröffentlicht Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 3.60 Möglichkeit des Ein- und Auschecken für den Benutzer werden deaktiviert. Dieses Property lässt sich auch in den Documents - Einstellungen setzen, jedoch überschreibt die Einstellung am Benutzer die globale Einstellung. Im Documents5-Client werden sowohl im Bearbeiten-Modus als auch im Ansichts-Modus zwei weitere Funktionen in der Aktionenklappliste der Dokumente angezeigt: »Checkout« und »Checkout & Download«
(bei Client-Relevanz: Classic-Client und Client 5)
- loginAlias Systemuser string Öffentlich Mögliche Werte: Alias des Login Ab Documents 5.0f (#2205) wird auch eine kommaseparierte Liste unterstützt Gültigkeit: ab: 4.00d Wird die Eigenschaft loginWithAlias (am Mandanten) gesetzt kann man mit dieser Eigenschaft den Alias für den Login setzen. Der Benutzer muss sich anschließend mit dem verwendeten Alias statt dem Login anmelden.
(bei Client-Relevanz: Classic-Client und Client 5)
- monoView DlcGlobalOptions Systemuser FeatureManager string Öffentlich [Webclient5] Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00c Die Eigenschaft "monoView" (Global oder Benutzer) aktiviert für den Client V ein Layout, welches dem des Classic-Client entspricht. Es wird dann entweder die Ordner- oder Mappenansicht statt beide Ansichten nebeneinander dargestellt.
(bei Client-Relevanz: Nur Client 5)
- nativePdfViewerUrlParameter DlcGlobalOptions DlcFile DlcRegister Systemuser string Öffentlich [Webclient5] Standardwert: view=fitV Gültigkeit: ab: 5.00e HF2 Über die Property können Parameter an die URL des Nativen PDF Viewers angehängt werden, mit denen der Viewer geöffnet werden soll. Beispiele hierfür sind 'view=FitV', 'view=FitH' und 'zoom=100'. Die Eigenschaft ist erst ab 6.1.0 am Benutzer verfügbar.
- noLdapCheck Systemuser AccessProfile enum Veröffentlicht [Login/Logout/LDAP] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 3.51e Gelegentlich müssen auch in Documentsinstallationen, die generell mit einem ActiveDirectory oder anderen LDAP-Verzeichnisdienst gekoppelt worden sind, einzelne Benutzer/Redakteure/Zugriffsprofile von der LDAP-Kopplung ausgenommen werden, z.B. Redakteure für Docimport/Factory-Zwecke, da deren Accounts nicht im AD angelegt werden (können).
Dies bewerkstelligt bei eingerichteter und aktiver Ldap-Kopplung das hier vorgestellte Property namens noLdapCheck. true: der Benutzer/Zugriffsprofil wird bei konfigurierter Ldap-Bibliothek NICHT gegen LDAP geprüft
false: der Benutzer muss sich korrekt im LDAP authentifizieren. Das Zugriffsprofil wird gegen das LDAP aktualisiert.
(bei Client-Relevanz: Classic-Client und Client 5)
- NoMailForLockedUser DlcGlobalOptions Systemuser enum Öffentlich [Email] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 5.00i Benutzer, die im Status "gesperrt" sind, erhalten von DOCUMENTS keine Mails zugesendet (z.B. im Rahmen des Workflows).
Wenn dies doch geschehen soll, dann kann dies über die Eigenschaft NoMailForLockedUser=0 aktiviert werden.
- onConnectInboxScript DlcFile Systemuser DlcGlobalOptions string Öffentlich [Scripting] Mögliche Werte: Scriptname Standardwert: -- Gültigkeit: ab: 5.00d Wenn eine Mappe in den Eingangsordner des Benutzers mittels Versendeliste oder Workflow gelangt, wird das hier hinterlegte Skript aufgerufen.
Nähere Beschreibung der verfügbaren Properties auf Skriptebene siehe portalscripting.chm (list of available script-exits).
- outbarlessViewMode DlcGlobalOptions Systemuser string Öffentlich Mögliche Werte: true, false Standardwert: false Gültigkeit: ab: 5.00h Entfernt die Outbarsicht aus Documents. Ist diese Eigenschaft aktiv, wird nur noch die Ordner- und Mappensicht angezeigt.
- overviewDashboard.dashboardAdmin Systemuser string Öffentlich [Webclient5] Mögliche Werte: true, false, 1, 0 Gültigkeit: ab: 5.00b Der Benutzer kann eine Standardvorlage erstellen, welche bei allen anderen Benutzern angezeigt wird
Eigens erstellte Dashboards (overviewDashboard.dashboardMode = extended|multi) werden vom Admin nicht beeinflusst.
- overviewPage DlcGlobalOptions Systemuser string Öffentlich [Webclient] Mögliche Werte: Datei Gültigkeit: ab: 3.60 Die Übersichtsseite am Anfang kann mit diesen Property selbst verändert werden. Dafür kann man z.B. eine HTML Datei verwenden, jedoch sollte diese sich im Ordner \www\jsp befindet alternativ kann man auch den Dateipfad angeben.
(bei Client-Relevanz: Nur Classic-Client)
- overViewTreeChartScript PartnerNet Systemuser string Öffentlich [Webclient, Webclient5] Mögliche Werte: Portalskript Standardwert: - Gültigkeit: ab: 5.00c Legt das auszuführende Script fest zum erstellen des Organigrammbaums (Beispiel ims).
(bei Client-Relevanz: Classic-Client und Client 5)
- pdfjsInstantAutoSearch DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Aktiviert die direkte automatische Suche von Feldwerten im Pdfjs. Wenn das Feature aktiviert ist ('pdfjsAllowAutoSearch und entweder 'pdfjsAutoSearchAllFields' oder 'pdfjsAutoSearch') wird die Suche direkt bei der Eingabe in das Feld durchgeführt. Die Suche wird dabei erst ab dem dritten Zeichen gestartet.
- pdfjsPrintAnnotations DlcGlobalOptions Systemuser enum Öffentlich [pdf-Druck] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00g Aktiviert einen Schalter im PDFjs Viewer, über den das Drucken von Annotationen für den jeweiligen Nutzer aktiviert werden kann.
- ReadButtonNavigation Systemuser DlcGlobalOptions string Öffentlich [Workflow, Webclient] Mögliche Werte: StayFile, Overview, NextFile Standardwert: StayFile Gültigkeit: ab: 4.00c HF2 Standardmäßig bleibt der WebClient auf der Mappe stehen, wenn der "Gelesen" Knopf gedrückt worden ist. Über die Eigenschaft ReadButtonNavigation kann man dieses Verhalten global oder benutzerspezifisch anpassen.
Der Wert "Overview" läßt den WebClient in die Übesicht navigieren. Der Wert "NextFile" navigiert zur nächsten Mappe in dem aktuellen Ordner.
(bei Client-Relevanz: Classic-Client und Client 5)
- shortcutProfiles Systemuser string Öffentlich [Webclient5] Mögliche Werte: mit Komma separierte Tastaturkürzel-Konfigurationen (shortcutConfig) Gültigkeit: ab: 5.00f Legt fest, welche Tastaturkürzel-Konfigurationen (shortcutConfig) für einen Benutzer verwendet werden sollen. In jedem Fall, selbst, wenn andere angegeben sind, wird die shortcutConfig DefaultShortcutDefinition verwendet, sofern diese am Mandanten konfiguriert ist.
- skinBase DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: Angabe einer Stylesheet - Datei (Endung .less) Mögliche Werte sind: base, easy, lightgray Standardwert: base Gültigkeit: ab: 5.00a legt das Aussehen des Webclients fest (schaltet beispielsweise den easy – skin ein)
(bei Client-Relevanz: Nur Client 5)
- skinSignalColor DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: documents, contract, compliance, corporate, privacy, easy, + alle css-Formatangaben: Hexadezimalcodierung + Farbnamen Standardwert: documents Gültigkeit: ab: 5.00a stellt eine Highlight Farbe in Documents bereit, mit der der jeweils aktive Bereich im Webclient hervorgehoben wird, beeinflusst durch das Firmendesign auch alle anderen Bereiche. (bei Client-Relevanz: Nur Client 5)
- SystemuserLogbook Systemuser enum Öffentlich [Debug] Mögliche Werte: 0 1 Standardwert: 1 Gültigkeit: ab: 4.00a Wird das erweiterte Logging für Benutzer und Redakteure in der documents.ini aktiviert, so werden alle Veränderungen der definierten Attributen an allen Benutzer und Redakteure im Log Buch festgehalten. Möchte man jedoch einzelne Benutzer und/ oder Redakteure vom Logging ausschließen so kann diese Eigenschaft bei den jeweiligen User gesetzt werden. (s.a. Dokumentation: Erweitertes Logging)
- trustedLoginAccount Systemuser enum Veröffentlicht [Login/Logout/LDAP] Mögliche Werte: 1 0 Standardwert: 0 Gültigkeit: ab: 3.60 Wenn über die SOAP-Schnittstelle (Methode: Documents.trustedLogin) ein trustedLogin durchgeführt werden soll, muß für den trustedUser dieses Property gesetzt sein.
- TwoFactorAuthenticationEnforce AccessProfile DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: suggest, logout Gültigkeit: ab: 5.00g Mit der Eigenschaft "TwoFactorAuthenticationEnforce" kann gesteuert werden, wie alle Benutzer oder Gruppen von Benutzern geführt werden sollen, welche die Zwei-Faktor-Authentifizierung (2FA) aktuell noch nicht eingeschaltet haben. So kann auf Wunsch sichergestellt werden, dass niemand versehentlich vergisst, diese zu aktivieren.
Mit dem Wert "suggest" (verfügbar ab 5.0g) kann den Benutzern nach jeder Anmeldung vorgeschlagen werden, die Zwei-Faktor-Authentifizierung zu aktivieren. Dies kann ein Benutzer jedoch bei jedem Mal erneut ablehnen und wie gewohnt ohne Einschränkungen fortfahren.
Mit dem Wert "logout" (verfügbar ab 5.0i) können die Benutzern nach der Anmeldung dazu aufgefordert werden, die Zwei-Faktor-Authentifizierung zu aktivieren. Lehnt der Benutzer die Aktivierung ab, bleibt ihm anschließend nur noch die Möglichkeit, sich wieder abzumelden.
In allen Fällen muss die Zwei-Faktor-Authentifizierung (2FA) grundsätzlich aktiviert sein (siehe Eigenschaft "TwoFactorAuthentication").
Diese Eigenschaft kann sowohl global auf den Documents-Einstellungen, auf einem Zugriffsprofil oder auf einzelnen Benutzern hinterlegt werden.
- useLocalEditPathFromManager DlcGlobalOptions Systemuser string Öffentlich [Webclient5] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Wenn die Property gesetzt ist wird der im Manager angegebene Pfad auf dem Clientrechner für die Lokale Komponente und die ActiveX Erweiterung (Benutzer --> Documents/Archiv Einstellungen 1 --> Lokaler Checkout-Path) genutzt.
- Workflow-Knoten
- CheckAbsence Workflow-Knoten enum Öffentlich [Workflow] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00g Im Rahmen von Signalausgang-E-Mails und Eskalations-E-Mails wird überprüft, ob der Empfänger der E-Mail nicht als Abwesend im System konfiguriert ist.
Bei Abwesenheit erhält der konfigurierte Vertreter die E-Mail. Wenn diese Abwesenheitsprüfung nicht erwünscht ist, dann kann dies mit der Eigenschaft CheckAbsence=0 an der Workflow Aktion im Visio abgeschaltet werden.
- HideInMonitor Workflow-Knoten enum Öffentlich Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00a Im Workflow-AddIn kann man mit der Eigenschaft HideInMonitor an Knoten / Aktionen definiert werden, dass die Aktion im Workflowmonitor nicht dargestellt wird
- IgnoreErrors Workflow-Knoten enum Öffentlich [Workflow] Mögliche Werte: 0 1 Standardwert: 0 Gültigkeit: ab: 5.00g Wenn im Workflow ein Signalausgang vom Typ E-Mail definiert ist und kein gültiger Empfänger gefunden werden kann, unterbricht der Workflow an dieser Stelle mit einem Fehler. Über die Eigenschaft IgnoreErrors=1 am E-Mail Signalausgang kann vorgegeben werden, dass im Fehlerfall der Workflow-Schritt als übersprungen gelten soll.
- IgnoreStep Workflow-Knoten string Öffentlich [Workflow] Mögliche Werte: %AutoText% Standardwert: 0 Gültigkeit: ab: 6.2.0 Über die Eigenschaft IgnoreStep=%AutoText% kann man am E-Mail Signalausgang festlegen, dass der Workflow-Schritt als übersprungen gilt. Dies tritt ein, falls der AutoText den Wert 1 zurückgibt.
- tooltip DlcAction Workflow-Knoten string Öffentlich [Webclient, Workflow] Mögliche Werte: Text Gültigkeit: ab: 4.00a Diese Eigenschaft wird am Kontrollfluß gesetzt und bewirkt das bei dem Funktionsknopf der eingestellte Text als Tooltip eingeblendet wird (s.a. imageFile). Diese Eigenschaft kann auch an einer benutzerdefinierten Aktion im Documents Manager gesetzt werden.
Der Wert ist jeweils der anzuzeigende tooltip - Text.
(bei Client-Relevanz: Classic-Client und Client 5)
- Workflow-Kontrollfluss
- alwaysShowLabel DlcAction Workflow-Kontrollfluss string Öffentlich [Webclient5, Workflow] Mögliche Werte: true false Standardwert: false Gültigkeit: ab: 5.00f Wenn auf einer Benutzerdefinierten Aktion oder einem Workflow das Property 'imageFile' gesetzt ist kann mit dieser Property zusätzlich das Label angezeigt werden.
- backgroundColor Workflow-Kontrollfluss string Öffentlich [Webclient5, Workflow] Mögliche Werte: alle css-Formatangaben: Hexadezimalcodierung + Farbnamen Gültigkeit: ab: 5.00e Die Eigenschaft "backgroundColor" kann auf dem Kontrollfluss im Workflow gesetzt werden.
Sie akzeptiert als Werte Css- Farbnamen (Bsp.: "Yellow") und Hexadezimalcodes (Bsp.: "#008000" für "grün")
Die Schaltfläche, die den entsprechenden Kontrollfluss im Workflow repräsentiert, wird dann in der jeweiligen Farbe
eingefärbt.