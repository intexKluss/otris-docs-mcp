---
title: "SMTP mit OAuth2"
source: "https://otris.software/documents/manuals/books/ews/smtp-oauth2.html"
---

# SMTP mit OAuth2

Ab Version 5.0i HF7 unterstützt Documents beim Senden von E-Mails über SMTP auch die Authentifizierung über einen OAuth-Server. Die Einrichtung wird im Folgenden am Beispiel des OAuth-Servers von Microsoft beschrieben. Um diesen verwenden zu können, muss Documents als Anwendung bei Microsoft Entra registriert werden. Dieser Anwendung können die benötigten Berechtigungen erteilt werden und Documents kann dann über die entsprechende Anwendungs-ID auf der [Mircosoft Identity Platform](https://learn.microsoft.com/de-de/entra/identity-platform/v2-overview) alles ausführen, wozu die Anwendung berechtigt wurde. Z.B. E-Mails für bestimmte Benutzer versenden.


## Grant Type

OAuth2 definiert verschiedene Grant Types für verschiedene Anwendungsfälle. Von Documents wird ausschließlich der **Client Credentials** ([en](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow),[de](https://learn.microsoft.com/de-de/entra/identity-platform/v2-oauth2-client-creds-grant-flow)) Grant Type unterstützt.


## Hinweis zu TLS unter Windows

Der Documents Server kommuniziert mit dem Exchange Server über TLS. Damit unter Windows die dafür benötigten CA-Zertifikate aus dem Windows CA store geladen werden können, muss in der `documents.ini` des Documents Servers der folgende Eintrag ergänzt werden.


```language-.ini
CAPath WinCertStore
```


## Anwendung einrichten


### Anwendung registrieren

Führen Sie die Anweisungen aus beiden folgenden Kapitel aus der Microsoft Dokumentation aus, um eine Anwendung zu erstellen und ein **Client Secret** hinzuzufügen. Bei der Registrierung wählen Sie in Punkt 5. "Nur Konten in diesem Organisationsverzeichnis" aus. Eine Umleitungs-URI muss nicht hinzugefügt werden.

- Registrieren einer Anwendung: en, de.
- Hinzufügen von Anmeldeinformationen (Client Secret): en


### Berechtigungen festlegen

Der registrierte Anwendung müssen jetzt die SMTP Berechtigungen erteilt werden. Führen Sie dazu die Schritte aus der folgenden Microsoft Dokumentation aus und beachten Sie in Schritt 5., dass nur die Berechtigung für den SMTP-Zugriff ausgewählt werden muss.

- Hinzufügen der POP-, IMAP- oder SMTP-Berechtigungen zu Ihrer Entra AD-Anwendung: en, de.

Das Recht "user.read" aus der Kategorie "Graph" mit der Beschreibung "Anmelden und Benutzerprofil lesen" sollte bereits vorhanden sein und muss nicht manuell angelegt werden.

Nun sollte auch die SMTP-Anwendungsberechtigung in der Liste der Berechtigungen sichtbar sein. Für diese muss noch die Administratorzustimmung erteilt werden:

- In Navigationsleiste unter "Verwalten" auf "API Berechtigungen" klicken.
- Dort klicken "Administratorzustimmung für <Mandantenname> erteilen".


### Anwendungszugriff definieren

Über das Cmdlet `New-ServicePrincipal` ([en](https://learn.microsoft.com/en-gb/powershell/module/exchange/new-serviceprincipal?view=exchange-ps), [de](https://learn.microsoft.com/de-de/powershell/module/exchange/new-serviceprincipal?view=exchange-ps)) muss jetzt ein Service Principal registriert werden, welches definiert, was die Anwendung tun darf. In diesem Fall soll sie vollen Zugriff auf Postfächer bekommen um E-Mails zu versenden.
Dazu muss zunächst die registrierte Anwendung in Microsoft Entra über den im Folgendenden beschriebenen Weg (nicht anders!) geöffnet werden und dabei müssen drei IDs kopiert werden.

1. portal.azure.com
2. Unter "Microsoft Entra ID verwalten" auf "Sicht" klicken.
3. Mandanten-ID kopieren.
4. Links in der Leiste "Unternehmensanwendungen" auswählen (auf keinen Fall "App Registrierungen"!).
5. In der angezeigten Liste dann die Anwendung auswählen.
6. Anwendungs-ID und Object-ID kopieren.

Dann müssen die folgenden Befehle in einer Administrator PowerShell ausgeführt werden. Diese Befehle wurden der Dokumentation **Dienstprinzipale in Exchange registrieren** ([en](https://learn.microsoft.com/en-gb/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth#register-service-principals-in-exchange), [de](https://learn.microsoft.com/de-de/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth#register-service-principals-in-exchange)) entnommen. Der letzte Befehl erteilt die Erlaubnis auf die Mailbox des Benutzers "[john.smith@contoso.com](mailto:john.smith@contoso.com)" zuzugreifen. Dieser Befehl muss für alle gewünschten Benutzer durchgeführt werden.


```ps
Install-Module -Name ExchangeOnlineManagement
Import-module ExchangeOnlineManagement
Connect-ExchangeOnline -Organization <Mandanten-ID>
New-ServicePrincipal -AppId <Anwendungs-ID> -ObjectId <Object-ID>
Add-MailboxPermission -Identity "john.smith@contoso.com" -User <Anwendungs-ID> -AccessRights FullAccess
```

**Hinweis**:  Falls der Befehl `New-ServicePrincipal` fehlschlägt, wurde wahrscheinlich oben in der Beschreibung die Anwendung über den falschen Weg geöffnet. Die Object-ID ist in den beiden Ansichten unterschiedlich!


### Test

Mit den folgenden Befehlen kann getestet werden, ob die Anwendung korrekt eingerichtet wurde. "[user@test.de](mailto:user@test.de)" muss durch die entsprechende E-Mail-Adresse ersetzt werden.


```ps
Install-Module -Name SmtpClientDiag -MinimumVersion 1.4.0.4 -Scope CurrentUser
$SecureClientSecret = ConvertTo-SecureString "<Client-Secret>" -AsPlainText -Force
Test-SmtpClientSubmission -From user@test.de -To user@test.de -UseSsl -SmtpServer smtp.office365.com -Port 587 -UserName user@test.de -ClientId "<Anwendungs-ID>" -TenantId "<Mandanten-ID>" -ClientSecret $SecureClientSecret
```


## Konfiguration im Documents Manager

In den Einstellungen am Mandanten gibt es den Reiter **eMail-Service**. Darin befindet sich eine Checkbox **EMail-Service aktiv**. Diese Checkbox muss weiterhin gesetzt sein. Außerdem muss unter **Server** der SMTP Server eingetragen werden. Die Felder Standard-Absender und Signatur können optional verwendet werden. Zusätzlich müssen einige Properties im Reiter **Eigenschaften** gesetzt werden.

Alle Properties, die im Manager eingetragen werden müssen, finden sich in der registrierten Anwendung unter **Zusammenfassung**.


![app-overview](img/app-overview.png)


Diese müssen im Manager in den folgenden Properties angegeben werden.

- OAuthServer: URL des OAuth Servers (z.B. https://login.microsoftonline.com)
- OAuthTenant: Verzeichnis-ID (Mandant)
- OAuthClientId: Anwendungs-ID (Client)
- OAuthClientSecret: Das oben erstellte Client Secret.
- OAuthUser: Standard-Absender

**DocumentsOS**: Diese Werte werden im Reiter **eMail-Service** im Bereich "EWS /OAuth2" eingetragen. **Hinweis**: Im Feld Benutzer muss bis zur Version 6.1.2 der Standard-Absender eingetragen werden. Ab Version 6.1.3 kann das Feld leer bleiben, da der Wert dann aus dem Feld Standard-Absender übernommen wird.