---
title: "Zwei-Faktor-Authentifizierung"
source: "https://otris.software/documents/howto/authentication/two-factor-authentication.html"
---

# Zwei-Faktor-Authentifizierung

Die Zwei-Faktor-Authentifizierung (2FA) ist verfügbar ab DOCUMENTS `5.0g`.

Die Anmeldung der Benutzer in DOCUMENTS erfolgt für gewöhnlich über die bekannte Anmeldemaske unter Verwendung von Benutzername und Kennwort.


Abb. 1 - Login-Screen - Benutzername/Passwort

Um die Sicherheit der Benutzerkonten in DOCUMENTS zu erhöhen, kann zusätzlich die sog. Zwei-Faktor-Authentifizierung, häufig auch kurz als "2FA" bezeichnet, eingeschaltet werden.


Abb. 2 - Login-Screen - Zwei-Faktor-Sicherheits-Code

Ist diese einmal aktiviert, so wird der Benutzer bei seiner Anmeldung dazu aufgefordert, zusätzlich zum Benutzernamen und Kennwort einen gültigen Sicherheitscode (den zweiten Faktor) einzugeben.


Abb. 3 - Authentifizierungs-App - Generierter Code für Anmeldung

Der Sicherheitscode wird z.B. von einem mobilen Endgerät erzeugt, welches sich im Besitz des Benutzers befindet. Erst wenn der richtige Code eingegeben wurde, kann die Anmeldung erfolgreich durchgeführt werden.


## Allgemeine Konfiguration

Mit der Eigenschaft [TwoFactorAuthentication](../../api/properties/#twofactorauthentication_dlcglobaloptions) = `true` in den Documents-Einstellungen kann die Zwei-Faktor-Authentifizierung für einen Mandanten grundsätzlich aktiviert werden. In diesem Fall werden dem Anwender automatisch **alle** von DOCUMENTS unterstützten 2FA-Authentifizierungsmethoden angeboten.
Aktuell werden die beiden Verfahren TOTP (`totp`) und Email (`email`) unterstützt.
Alternativ dazu können beliebige unterstützte 2FA-Authentifizierungsmethoden auch **individuell** aktiviert werden. Der Wert der Eigenschaft [TwoFactorAuthentication](../../api/properties/#twofactorauthentication_dlcglobaloptions) ist dann (anstelle von `true`) einfach eine kommaseparierte Auflistung der gewünschten Verfahren, beispielsweise `totp, email` für erlaubte Authentifizierungen per TOTP und Email.
**Achtung:** Bei einer Änderung dieser Einstellung ist ein Neustart des Tomcat-Servers (oder Bereinigen des Caches) erforderlich!


Abb. 4 - Persönliche Einstellungen - Zwei-Faktor-Authentifizierung

Sobald mit der Einstellung `TwoFactorAuthentication` mindestens ein unterstütztes Authentifizierungsverfahren eingeschaltet ist, wird in den persönlichen Einstellungen der Benutzer ein neuer Eintrag aufgeführt. Über diesen sind die Anwender in der Lage, die Zwei-Faktor-Authentifizierung für sich zu aktivieren.


## 2FA-Apps mit Unterstützung für TOTP

Das TOTP-Verfahren (Time-based One-Time Password) ist ein weit verbreiteter Standard für einen Algorithmus, welcher zeitlich limitierte Einmalkennwörter erzeugt. Dieses Verfahren wird u.a. in DOCUMENTS für die Zwei-Faktor-Authentifizierung eingesetzt. Die generierten Einmalkennwörter (TOTP-Codes) werden bei der Anmeldung eines Benutzers als Sicherheitscode eingegeben.


Abb. 5 - Zwei-Faktor-Authentifizierung - Status: Deaktiviert

TOTP-Code-Generatoren werden von einer Vielzahl in App-Stores oder im Internet frei erhältlicher und auf mobilen Endgeräten oder Computern installierbarer Authentifizierungs-Apps, Passwort-Manager etc. unterstützt. -
Falls also noch nicht bereits vorhanden, installieren Sie sich auf Ihrem bevorzugten Endgerät zunächst eine beliebige App, welche in der Lage ist, TOTP-Einmalkennwörter für eine Zwei-Faktor-Authentifizierung zu erzeugen. Hilfreich sind zudem Apps, bei denen der Import der Benutzerkonten über QR-Codes unterstützt wird!


## Registrierung mit TOTP

Damit DOCUMENTS mit der Authentifizierungs-App korrekt zusammenarbeitet, muss es zunächst einmalig registriert werden. Die Registrierung erfolgt am einfachsten über den angezeigten QR-Code, welchen die meisten guten Authentifizierungs-Apps standardmäßig unterstützen. Der QR-Code wird einfach über die Kamera des eingesetzten Endgeräts eingelesen. Wenn die Registrierung erfolgreich war, dann ist in der App das Konto (Account) des DOCUMENTS-Benutzers in aller Regel mit einem eigenen Eintrag aufgeführt.


Abb. 6 - Zwei-Faktor-Authentifizierung - Registrierung (TOTP)

Falls QR-Codes in der Authentifizierungs-App nicht unterstützt oder erkannt werden, können die im Registrierungs-Dialog unten aufgeführten Informationen dazu verwendet werden, den Eintrag in der App auf einem Gerät manuell zu registrieren. Diese Informationen bestehen lediglich aus einem Bezeichner (Account) und einem privaten Schlüssel (Key), den die App für die Erzeugung der TOTP-Codes benötigt.


Abb. 7 - Authentifizierungs-App - Code für Registrierung

Nachdem der QR-Code eingelesen oder die Informationen manuell eingegeben wurden, sollte die Authentifizierungs-App sofort in der Lage sein, aktuelle TOTP-Codes für den Benutzer zu erzeugen. Diese bestehen immer aus genau sechs Ziffern. **Beachten Sie hier, dass die TOTP-Codes stets zeitbasiert sind und in der Regel schon nach ca. 30 Sekunden ihre Gültigkeit verlieren!** Viele Apps zeigen daher standardmäßig an, wie lange der aktuell generierte TOTP-Code noch gültig ist. -
Die Registrierung ist erfolgreich beendet, sobald ein gültiger Code eingegeben und mit der Schaltfläche unten bestätigt wurde. -
Falls ein falscher oder veralteter Code (ggf. zu spät) eingegeben wurde, wird das Eingabefeld rot markiert.

**Falls es dauerhaft nicht gelingen sollte, einen gültigen Code einzugeben, prüfen Sie zunächst, ob das aktuelle Datum und die Uhrzeit auf Ihrem Endgerät (und ggf. Server) korrekt synchronisiert sind!**


## Wiederherstellungscodes

Sobald die Authentifizierungs-App erfolgreich registriert wurde, ist die Zwei-Faktor-Authentifizierung für den Benutzer erfolgreich aktiviert.
Für den Fall, dass einmal das Endgerät mit der App verloren geht, können jetzt noch die Wiederherstellungscodes gesichert werden. Diese können, **anstelle der generierten TOTP-Codes aus der App**, dazu verwendet werden, wieder den Zugriff auf das Benutzerkonto zu erlangen.


Abb. 8 - Zwei-Faktor-Authentifizierung - Wiederherstellungscodes

Die Codes können über die Schaltflächen unten bequem als Datei heruntergeladen oder in die lokale Zwischenablage kopiert werden. Es werden standardmäßig fünf Wiederherstellungscodes erzeugt und jeder Code kann **nur ein einziges Mal** verwendet werden!


## Abschluss der Registrierung

Für eine Anmeldung an DOCUMENTS ist nun, neben Benutzername und Kennwort, immer ein gültiger Zwei-Faktor-Sicherheitscode aus der Authentifizierungs-App erforderlich.
Alternativ können im Notfall auch die Wiederherstellungscodes verwendet werden.
Falls Sie die Wiederherstellungscodes verloren oder durch Verwendung entwertet haben sollten, können Sie über die Konfiguration der Zwei-Faktor-Authentifizierung in den persönlichen Einstellungen jederzeit neue erzeugen. Beachten Sie jedoch, dass dabei sämtliche bisherigen Codes aus Sicherheitsgründen sofort ungültig werden!


Abb. 9 - Zwei-Faktor-Authentifizierung - Status: Aktiviert


## Registrierung mit EMail

Als weitere Alternative steht Ihnen die Zwei-Faktor-Authentifizierung mit Email zur Verfügung. Analog zur Authentifizierung per TOTP-Verfahren benötigt der Benutzer sowohl für die zu Beginn erforderliche Registrierung als auch für jede einzelne Anmeldung in DOCUMENTS einen gültigen Sicherheitscode. Anstelle von einer TOTP-App auf einem Endgerät wird dieser Code von DOCUMENTS erzeugt und jedes Mal per Email an den Benutzer versendet.


Abb. 10 - Zwei-Faktor-Authentifizierung - Registrierung (Email)

Dafür wird die im Benutzerkonto (Generelles / Personalien) in DOCUMENTS hinterlegte Email-Adresse verwendet. Die Einstellungen der einzelnen Benutzerkonten befinden sich im DOCUMENTS-Manager unterhalb des Benutzermanagements.


Abb. 11 - Benutzerkonto - Personalien - Email

Darüber hinaus stehen bei der Zwei-Faktor-Authentifizierung mit Email generell keine Wiederherstellungscodes zur Verfügung.


Abb. 12 - Zwei-Faktor-Authentifizierung - Email mit Code


### Email Vorlage

Um Betreff und Inhalt der Email für die Codes individuell anzupassen, können in der Datei `./server/locale/documentsstrings_<locale>.properties` die mehrsprachig konfigurierbaren Texte mit den Schlüsseln `email_2facode_subject` und `email_2facode_body` verwendet werden.
Die Einbettung der variablen Informationen (z.B der Codes) erfolgt hier jeweils anhand nummerierter Textmarken.


```javascript
...
email_2facode_subject                  = Verifizierungscode für %1
email_2facode_body                     = Ihr Verifizierungscode für %1 lautet: %2
...
```

...
email_2facode_subject                  = Verifizierungscode für %1
email_2facode_body                     = Ihr Verifizierungscode für %1 lautet: %2
...
## Deaktivierung

Falls die Zwei-Faktor-Authentifizierung wieder deaktiviert werden soll, kann dies im 2FA-Dialog durch Betätigung der entsprechenden Schaltfläche und Bestätigung einer Sicherheitsabfrage erreicht werden. Eine Registrierung in einer Authentifizierungs-App (TOTP) verliert damit unwiderruflich ihre Gültigkeit und sollte ebenfalls entfernt werden! Danach wird bei der Anmeldung eines Benutzers wieder nur der Benutzername und das Kennwort verlangt.


Abb. 13 - Zwei-Faktor-Authentifizierung - Deaktivierung


## Deaktivierung durch Administratoren

Falls ein Anwender keinen Zugriff mehr auf sein Konto hat, z.B. weil dieser die Authentifizierungs-App (TOTP) oder das Endgerät und zudem die Wiederherstellungscodes verloren hat, so kann ein DOCUMENTS-Administrator im Notfall über den DOCUMENTS-Manager die Zwei-Faktor-Authentifizierung manuell zurücksetzen.


Abb. 14 - DOCUMENTS-Manager - Zwei-Faktor-Authentifizierung manuell zurücksetzen

Dazu muss auf dem Benutzerkonto des Anwenders die (nur intern verwendete) Eigenschaft `TwoFactorAuthentication` gefunden und gelöscht werden.
Danach kann sich dieser wieder nur mit seinem Benutzernamen und Kennwort anmelden. Die Zwei-Faktor-Authentifizierung muss anschließend neu registriert werden.


## Zwei-Faktor-Authentifizierung sicherstellen

Mit der Eigenschaft [TwoFactorAuthenticationEnforce](../../api/properties/#twofactorauthenticationenforce_dlcglobaloptions) kann gesteuert werden, wie alle Benutzer oder Gruppen von Benutzern geführt werden sollen, welche die Zwei-Faktor-Authentifizierung aktuell noch nicht eingeschaltet haben. So kann auf Wunsch sichergestellt werden, dass niemand versehentlich vergisst, diese zu aktivieren.

Mit dem Wert `suggest` (verfügbar ab `5.0g`) kann den Benutzern nach jeder Anmeldung vorgeschlagen werden, die Zwei-Faktor-Authentifizierung zu aktivieren. Dies kann ein Benutzer jedoch bei jedem Mal erneut ablehnen und wie gewohnt ohne Einschränkungen fortfahren.

Mit dem Wert `logout` (verfügbar ab `5.0i`) können die Benutzern nach der Anmeldung dazu aufgefordert werden, die Zwei-Faktor-Authentifizierung zu aktivieren. Lehnt der Benutzer die Aktivierung ab, bleibt ihm anschließend nur noch die Möglichkeit, sich wieder abzumelden.


Abb. 15 - Zwei-Faktor-Authentifizierung sicherstellen

In allen Fällen muss die Zwei-Faktor-Authentifizierung (2FA) grundsätzlich aktiviert sein (siehe Eigenschaft `TwoFactorAuthentication`).
Diese Eigenschaft kann sowohl global auf den Documents-Einstellungen, auf einem Zugriffsprofil oder auf einzelnen Benutzern hinterlegt werden.


## Zwei-Faktor-Authentifizierung befristet aussetzen

Dieses Feature ist verfügbar ab DOCUMENTS `5.0h`.

Mit Hilfe der mandantenweiten Eigenschaft [TwoFactorAuthenticationGracePeriod](../../api/properties/#twofactorauthenticationgraceperiod_dlcglobaloptions) bei den Documents-Einstellungen kann die Abfrage des zweiten Faktors für eine bestimmte Anzahl von Tagen ausgesetzt werden.
Dieser Möglichkeit müssen die Benutzer jeweils individuell zustimmen (oder nicht).
Ab diesem Zeitpunkt sind dann ggf. für eine Weile lediglich der Benutzername und das Kennwort für eine erfolgreiche Anmeldung erforderlich. -
Nach Ablauf der konfigurierbaren Frist muss sich der Benutzer erneut mit dem zusätzlichen zweiten Faktor authentifizieren lassen.

So kann beispielsweise mit der Konfiguration `TwoFactorAuthenticationGracePeriod = 7` die Abfrage des Sicherheitscodes für maximal eine Woche (7 Tage) ausgesetzt werden.

Da diese Funktionalität u.a. auf Cookies basiert, ist die Einstellung immer nur für das aktuelle *Endgerät* des Benutzers (bzw. dessen Browser) gültig.
Dies bedeutet, dass die zeitlich limitierte Aussetzung der Abfrage des zweiten Faktors auf jedem Endgerät individuell entschieden werden kann!


Abb. 16 - Login-Screen - Zwei-Faktor-Sicherheits-Code mit Möglichkeit zur zeitlich limitierten Aussetzung

**Achtung:** Beachten Sie grundsätzlich, dass die Sicherheit der mit der Zwei-Faktor-Authentifizierung gesicherten Benutzerkonten möglicherweise herabgesetzt wird. Dies gilt insbesondere, falls mehrere Benutzer sich eine gemeinsame Arbeitsstation bzw. einen gemeinsamen Browser teilen!

Darüber hinaus sollte der Wert für den Ablauf der Frist (Anzahl Tage) nicht zu hoch angesetzt werden. Andernfalls könnte der Sicherheitsgewinn der Zwei-Faktor-Authentifizierung wieder zunichtegemacht werden!


### Erweiterte Konfiguration

Mit der mandantenweiten Eigenschaft [TwoFactorAuthenticationGracePeriodConfig](../../api/properties/##twofactorauthenticationgraceperiodconfig_dlcglobaloptions) lässt sich bei Bedarf eine etwas detailiertere Konfiguration in JSON für das Feature `TwoFactorAuthenticationGracePeriod` festlegen. Sämtliche Parameter sind dabei optional.

| Parameter | Gültige Werte | Standard | Beschreibung |
| --- | --- | --- | --- |
| agreement | false, true | true | Checkbox für Zustimmung wird bei Login angezeigt (oder nicht) |
| agreementDefault | false, true | false | Checkbox für Zustimmung wird bei Login initial selektiert (oder nicht) |


#### Beispiele

Mit der ersten beispielhaften Konfiguration wird die Option für die vorübergehende Aussetzung der Sicherheitscode-Prüfung (*"Ich möchte auf diesem Gerät für eine Weile nicht erneut geprüft werden"*) wie gewohnt angezeigt. Abweichend zum Standard wird hierbei das untere Kästchen automatisch vorselektiert.


```javascript
{ "agreementDefault" : true }
```

{ "agreementDefault" : true }Dagegen ist die Option mit der zweiten Konfiguration komplett verborgen. - Allerdings wird in diesem Fall zusätzlich der Aussetzung der Sicherheitscode-Prüfung automatisch zugestimmt! - Beachten Sie, dass der Benutzer in diesem Beispiel keinerlei Möglichkeit mehr besitzt, sich gegen diese Zustimmung zu entscheiden!


```javascript
{ "agreement" : false, "agreementDefault" : true }
```

{ "agreement" : false, "agreementDefault" : true }
## Konfiguration im Feature Manager

Mit dem Feature `UserSettings` kann entweder im Whitelist- (Property `VisibleMenuItems`) oder im Blacklist-Mode (Property `HiddenMenuItems`) der Value `UserSettingsTwoFactorAuthentication` eingesetzt werden, um den Menüeintrag in den persönlichen Einstellungen des Benutzers anzuzeigen oder auszublenden. - Siehe dazu auch Details zum Feature [UserSettings](../../manuals/books/feature-manager/feature-list.html#details-zum-feature-usersettings) in der Dokumentation zum Feature Manager.