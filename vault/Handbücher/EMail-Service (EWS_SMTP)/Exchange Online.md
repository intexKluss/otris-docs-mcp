---
title: "EWS Online in DOCUMENTS konfigurieren"
source: "https://otris.software/documents/manuals/books/ews/ews-online.html"
---

# EWS Online in DOCUMENTS konfigurieren

Um Outlook Office 365 mit DOCUMENTS zu verwenden, sind einige Konfigurationen und Entscheidungen notwendig.


## Grant Type

Als erstes muss der gewünschte Grant Type festgelegt werden. DOCUMENTS meldet sich an Outlook Office 365 über OAuth2 an. Für diese Anmeldung werden zwei Grant Types unterstützt.

- Resource Owner Password Credentials
Geeignet für Client-Apps, die einen angemeldeten Benutzer verwenden. Die App hat dann die Rechte, die dieser Benutzer hat.
- Client Credentials
Geeignet für Services, die ohne einen angemeldeten Benutzer auf die Web-API zugreifen müssen. Die App hat hier Zugriff auf alle Konten und Postfächer.

Der Client Credentials Grant wird eher für Interaktionen zwischen Servern verwendet, die im Hintergrund ausgeführt werden und keine Benutzeranmeldung ermöglichen. Daher wird man sich in der Regel für den Resource Owner Password Credentials Grant entscheiden.

Wenn der Grant Type feststeht, kann DOCUMENTS als Applikation in Microsoft Azure Active Directory registriert werden. Darüber können dann die Berechtigungen verwaltet werden.


## Hinweis zu TLS unter Windows

Der DOCUMENTS Server kommuniziert mit dem Exchange Server über TLS. Damit unter Windows die dafür benötigten CA-Zertifikate aus dem Windows CA store geladen werden können, muss in der `documents.ini` des DOCUMENTS Servers der folgende Eintrag ergänzt werden.


```language-.ini
CAPath WinCertStore
```


## Anwendung registrieren und Berechtigungen festlegen

Führen Sie aus der Microsoft Dokumentation die folgenden Punkte aus

- Registrieren einer Anwendung en, de
- Hinzufügen eines geheimen Clientschlüssels de, en


### Berechtigungen festlegen

1. Die gerade registrierte Anwendung in Azure AD öffnen.
2. Dann API-Berechtigungen > Berechtigung hinzufügen > Von meiner Organisation verwendete APIs auswählen.
3. Hier muss die Web-API Office 365 Exchange Online ausgewählt und abhängig vom gewünschten Grant Type eine der folgenden Berechtigungen ausgewählt werden.
Resource Owner Password Credentials: Delegierte Berechtigungen > EWS.AccessAsUser.All
Client Credentials: Anwendungsberechtigungen > full_access_as_app
4. Um den Vorgang abzuschließen, muss der Button Berechtigung hinzufügen ausgewählt werden.
5. In der folgenden Microsoft Dokumentation ist beschrieben, wie allgemein Berechtigungen für Web-APIs konfiguriert werden: en, de


## Konfiguration im DOCUMENTS Manager

In den Einstellungen am Mandanten gibt es den Reiter **eMail-Service**. Darin befindet sich eine Checkbox **EMail-Service aktiv**. Diese Checkbox muss weiterhin gesetzt sein. Außerdem können die Felder Standard-Absender und Signatur optional verwendet werden. Alle anderen Einstellungen in diesem Reiter dürfen in DOCUMENTS 5 für EWS nicht gesetzt werden. Stattdessen müssen einige Properties im Reiter **Eigenschaften** gesetzt werden.

Für die Anmeldung an Outlook Office 365 über OAuth2 werden einige Informationen aus der Registrierten Applikation benötigt. Dazu sollte die registrierte Applikation in Azure AD geöffnet werden. Hier finden sich alle benötigten Informationen unter **Zusammenfassung**.


![app-overview](img/app-overview.png)


Diese müssen im Manager am Mandanten als Properties angegeben werden.

- ExchangeOnlineTenant: Verzeichnis-ID (Mandant)
- ExchangeOnlineClientId: Anwendungs-ID (Client)
- ExchangeOnlineClientSecret: Der unter Clientanmeldeinformationen erstellte und gut aufbewahrte Wert.

Falls der Resource Owner Password Credentials Grant gewählt wurde, muss noch der Benutzer angegeben werden, der als Stellvertreter E-Mails für alle anderen Benutzer versenden soll.

- ExchangeOnlineUser: Mail-Adresse des Stellvertreters
- ExchangeOnlinePasswordPlain: Passwort des Stellvertreters. (Der Eintrag wird beim Versenden der ersten Mail gelöscht und stattdessen verschlüsselt in ExchangeOnPremisePassword abgelegt).

**Ab DOCUMENTS 6** werden diese Werte auch im Reiter **eMail-Service** in die neuen Felder für EWS Online eingetragen.


## Resource Owner Password Credentials: Stellvertreter-Berechtigungen

Bei Verwendung des Resource Owner Password Credentials Grant wurde ein Stellvertreter konfiguriert. Dieser muss das Senden der E-Mails für alle anderen Benutzer übernehmen. Dazu benötigt er die folgende Berechtigung.

- Read and manage: Diese Berechtigung erlaubt, E-Mails in den Ordnern Entwürfe und Gesendete Elemente anderer Benutzer zu speichern.

Außerdem benötigt er noch eine der beiden folgenden Berechtigungen.

- Send as: Dieses Recht erlaubt, eine Mail als jemand anderes zu senden. In der Mail ist dann nicht zu erkennen, dass sie intern von einem Stellvertreter gesendet wurde.
- Send on behalf: Auch mit diesem Recht können E-Mails andere Benutzer versendet werden. In diesem Fall ist im Absender der E-Mail aber zu erkennen, dass diese im Auftrag eines Stellvertreters gesendet wurde.

In der folgenden Dokumentation ist beschrieben, wie einem Stellvertreter diese Berechtigungen erteilt werden: [en](https://docs.microsoft.com/en-us/microsoft-365/admin/add-users/give-mailbox-permissions-to-another-user), [de](https://docs.microsoft.com/de-de/microsoft-365/admin/add-users/give-mailbox-permissions-to-another-user)