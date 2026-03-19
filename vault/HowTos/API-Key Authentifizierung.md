---
title: "API Keys"
source: "https://otris.software/documents/howto/authentication/api-key-authentication.html"
---

# API Keys

Dieses Feature ist verfügbar ab DOCUMENTS `5.0g`.

API Keys in DOCUMENTS bieten eine alternative Authentifizierungsmethode für externe Applikationen. Anstelle von Benutzernamen und Kennwort erfolgt die Authentifizierung eines Anwenders über einen Schlüssel, den sog. API Key. Dieser besteht, ähnlich wie ein sicheres Passwort, aus einer zufälligen Zeichen- und Ziffernfolge (dem Token) und muss sicher verwahrt werden. Dabei kann sich jede externe Applikation je Benutzer und Endgerät ihre eigenen API Keys erzeugen. Die Erzeugung und sichere Aufbewahrung der Schlüssel erfolgt in der Regel direkt in den Apps. -
API Keys sind auch im Zusammenhang mit der Zwei-Faktor-Authentifizierung anwendbar.
Ebenso wird die Multi-Mandantenfähigkeit unterstützt.


## Allgemeine Konfiguration

Mit der mandantenweiten Eigenschaft [ApiKeyAuthentication](../../api/properties/#apikeyauthentication_dlcglobaloptions) auf den Documents-Einstellungen kann die API Key Unterstützung für einen Mandanten grundsätzlich festgelegt werden. Die Konfiguration erfolgt über vier unterschiedliche Stufen, dessen Wert hier angegeben werden muss. Bei einer Änderung der Einstellung ist ein Neustart des Tomcat-Servers (oder Bereinigen des Caches) erforderlich.

In der Stufe `1`, welche **standardmäßig** gilt, ist die API Key Funktionalität grundsätzlich aktiviert. Die Schlüssel können z.B. über eine externe Applikation für den Benutzer erzeugt und von diesen ohne Einschränkung verwendet werden. Allerdings können die API Keys vom Anwender selbst in keiner Form (Anzeige, Löschen, Erzeugen) verwaltet werden.
Ab der Stufe `2` können eigene API Keys vom Benutzer eingeschränkt verwaltet werden (Anzeige, Löschen). Die Verwaltung der API Keys befindet sich im Menü der persönlichen Einstellungen eines Benutzers.
Das gilt jedoch nur dann, falls dieser bereits mindestens einen gültigen API Keys besitzt! Ansonsten ist der Menüeintrag in den persönlichen Einstellungen nicht sichtbar!
Ab der Stufe `3` können eigene API Keys vom Anwender stets verwaltet und zudem auch neu erzeugt werden (Anzeige, Löschen, Erzeugen).
Falls gar keine API Key Unterstützung benötigt wird, kann die Stufe einfach auf `0` gesetzt werden. Zur Erinnerung: Diese Stufe gilt *nicht* standardmäßig.
Beachten Sie aber, dass externe Applikationen, wie bsp. DOCUMENTS myFavorites und DOCUMENTS Drop ggf. API Keys benötigen! In der folgenden Tabelle sind sämtliche Einstellungen und ihre Auswirkungen noch einmal übersichtlich zusammengefasst:

| Stufe | Grundfunktionalität | Verwaltung (Anzeige, Löschen) | Verwaltung (Erzeugen) |
| --- | --- | --- | --- |
| 0 |  |  |  |
| 1 |  |  |  |
| 2 |  | * |  |
| 3 |  |  |  |


## Verwaltung

Um die API Key Verwaltung zu öffnen, muss der Benutzer in seinen persönlichen Einstellungen den Eintrag *Apps und Dienste* auswählen.

**Hinweis:** Unter Documents 5 entfällt der Zwischenschritt über *Apps und Dienste*. Die Verwaltung lässt sich direkt über den Menüpunkt *API Keys* öffnen.


Abb. 1 - Persönliche Einstellungen - Apps und Dienste

Falls die Konfiguration der Eigenschaft [ApiKeyAuthentication](../../api/properties/#apikeyauthentication_dlcglobaloptions) entsprechend gesetzt ist (Stufe `2` oder `3`), ist in dem *Apps und Dienste* Dialog die Kachel *API-Schlüssel* zu sehen.


Abb. 2 - Apps und Dienste - API-Schlüssel

Durch einen Klick auf diese Kachel, öffnet sich der Dialog zur Verwaltung der API Keys.

Im Dialog sind sämtliche für den Benutzer aktuell gültigen API Keys tabellarisch aufgelistet.
Für jeden Eintrag sind neben dem Namen (ggf. der externen Applikation) und ggf. einer Information über das verwendete Endgerät auch das Erstellungsdatum und der Zeitstempel des letzten Logins aufgeführt.
Mit letzterem lässt sich sehr einfach nachvollziehen, ob ein erstellter API Key überhaupt noch verwendet wird oder bereits veraltet ist.


Abb. 3 - Verwaltung der API Keys

Beachten Sie, dass der API Key selbst (das Token), welcher für den Anwender verschlüsselt hinterlegt wurde, grundsätzlich **nicht** dargestellt werden kann!
Bei externen Applikationen ist der API Key normalerweise verschlüsselt auf dem Endgerät abgelegt.
Falls Sie den API Key selbst (das Token) im Klartext benötigen sollten und diesen verloren haben, so kann dieser nur noch gelöscht und dann neu erzeugt werden.


### Löschen von API Keys

Das Löschen eines API Keys kann im Dialog durch die Auswahl der zu löschenden Einträge und anschließendem Betätigen der Schaltfläche (Papierkorb) erreicht werden. Beachten Sie dabei, dass wenn ein API Key für z.B. eine externe Anwendung entfernt wurde, diese zunächst nicht mehr in der Lage ist, sich automatisch gegen DOCUMENTS zu authentisieren. In diesem Fall muss die App erst einen neuen API Key für sich anfordern. Bei einigen Apps geschieht dies automatisch im Hintergrund. Bei anderen Apps wiederum müssen API Keys ggf. explizit angefordert werden. Unter Umständen müssen Sie sich vorübergehend wieder mit Benutzername und Kennwort authentisieren, solange bis ein neuer API Key erstellt wurde.

**Achtung: Um die Sicherheit des Benutzerkontos zu erhöhen, sollten nicht mehr verwendete API Keys immer gelöscht werden!**


### Erzeugen von API Keys

Falls die Konfiguration der Eigenschaft `ApiKeyAuthentication` entsprechend gesetzt ist (Stufe `3`), sind auch die Anwender in der Lage, sich ihre eigenen API Keys zu generieren. Dies kann im Dialog durch Betätigen der Schaltfläche (Schlüssel) erreicht werden. Falls die Schaltfläche nicht sichtbar ist, so ist die Stufe noch nicht korrekt eingestellt!


Abb. 4 - API Keys - API Key erstellen

Für einen neu zu erstellenden API Key muss zunächst ein (möglichst eindeutiger) Name vergeben werden. Danach kann der neue Schlüssel durch Betätigen der entsprechenden Schaltfläche erzeugt werden.
Dieser ist nun **einmalig** im Klartext sichtbar und muss jetzt vom Anwender gesichert und sicher aufbewahrt werden.
Der API Key kann über die Schaltflächen unten bequem als Datei heruntergeladen oder in die lokale Zwischenablage kopiert werden.


Abb. 5 - API Keys - API Key erstellen


## Kennwortwechsel

Falls ein Anwender einmal sein Kennwort wechselt oder zurücksetzt (z.B. bei aktivierter mandantenweiter Eigenschaft [allowResetPassword](../../api/properties/#allowresetpassword_dlcglobaloptions)), so werden standardmäßig automatisch **sämtliche API Keys gelöscht**!


Abb. 6 - Persönliche Einstellungen - Kennwort ändern

Gleiches gilt für die Kennwortänderung von Benutzern im DOCUMENTS Manager durch DOCUMENTS-Administratoren.
Diese Funktion dient der allgemeinen Sicherheit der Konten!


Abb. 7 - DOCUMENTS Manager - Kennwort ändern

Falls die automatische Löschung der API Keys in bestimmten Szenarien ausnahmsweise nicht gewünscht ist, so kann diese mit Hilfe der Eigenschaft [ApiKeyAuthenticationPasswordReset](../../api/properties/#apikeyauthenticationpasswordreset_dlcglobaloptions) und dem Wert `0` wieder gezielt deaktiviert werden.
Die Eigenschaft kann sowohl mandantenweit bei den Documents-Einstellungen, auf einem Zugriffsprofil oder auf einzelnen Benutzern hinterlegt werden.


## Konfiguration im Feature Manager

Mit dem Feature `UserSettings` kann entweder im Whitelist- (Property `VisibleMenuItems`) oder im Blacklist-Mode (Property `HiddenMenuItems`) der Value `UserSettingsApiKeys` eingesetzt werden, um den Menüeintrag in den persönlichen Einstellungen des Benutzers anzuzeigen oder auszublenden. - Siehe dazu auch Details zum Feature [UserSettings](../../manuals/books/feature-manager/feature-list.html#details-zum-feature-usersettings) in der Dokumentation zum Feature Manager.