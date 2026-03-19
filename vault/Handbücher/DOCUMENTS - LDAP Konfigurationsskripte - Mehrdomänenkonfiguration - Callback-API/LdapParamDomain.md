---
title: "LdapParamDomain"
source: "https://otris.software/documents/manuals/books/ldap-callbacks-doc/wizdoccallbacks/Konfiguration-LdapParamDomain.html#ldapparamdomain"
---

# LdapParamDomain


## Vorbemerkung

Bei bestimmten Konfigurationen der LDAP-Struktur ist eine Einrichtung der Anbindung über die oben beschriebene Mappen- oder die Wizardkonfiguration nicht möglich. Dies ist z.B. dann der Fall, wenn die Benutzer über mehrere Domänen verteilt sind und die Benutzer nicht in eine Gruppe zusammengeführt werden können. In solchen Fällen einer erweiterten Konfiguration muss diese zwingend auf der Ebene von Skripten realisiert werden.

Die Konfiguration über Skripte bietet im Vergleich zur Einrichtung über die Mappe oder den Wizard verschiedene Erweiterungsmöglichkeiten. Die Hauptkonfiguration findet dabei im Skript `LdapParamDomain` statt. Es können auch mehrere `LdapParamDomain`-Skripte zum Einsatz kommen, um beispielsweise mehrere Domänen anzusprechen. Dazu werden diese dann im Skript `LdapDomainInclude` registriert. Über das Skript `LdapCallbackFunctions` als Programmierschnittstelle kann dann weiter Einfluß darauf genommen werden, wie im Import oder bei dem Login eines Users auf bestimmte Ereignisse reagiert werden soll.

Alle Skripte befinden sich als Templates im Server-Verzeichnis der Auslieferung:

C:\Program Files\Documents5\server\scriptlibs\Ldap

Über die `Hauptmenüzeile -> Servereinstellungen -> XML-Import -> LdapUserScripts.xml` können all die Skripte in den Client importiert werden, in denen Anpassungen vorgenommen werden können.


![](../wizdoccallbackspics/importScriptLibs.png)

Abb. 1 - Import Ldap-Skripte

Das Skript `LdapParamDomain_Versionsnummer` enthält bereits die wichtigsten Konfigurationsparameter mit auskommentierten Beispielwerten. Um eine Option zu aktivieren müssen die „//“-Zeichen am Anfang der Zeile entfernt und der gewünschte Wert eingetragen werden.

Nach der Bearbeitung ist die angehängte Versionsnummer z.B. _2.3.12 zu entfernen und das Skript zu speichern. Gleiches gilt für die Skripte `LdapDomainInclude` und `LdapCallbackFunctions`.


```javascript
//
// ldapConfig.ParamName = ParamValue;
//
//ldapConfig.LdapHostname = new Array(); // Hostname of the Domain Controller
//ldapConfig.LdapHostname.push("w2k8peachit");
//ldapConfig.LdapLogin = "CN=LDAP-Sync-Konto,CN=Users,DC=peachit,DC=local";
```

//
// ldapConfig.ParamName = ParamValue;
//
//ldapConfig.LdapHostname = new Array(); // Hostname of the Domain Controller
//ldapConfig.LdapHostname.push("w2k8peachit");
//ldapConfig.LdapLogin = "CN=LDAP-Sync-Konto,CN=Users,DC=peachit,DC=local";In den folgenden Tabellen werden die Paramter aufgeführt, denen in der `LdapParamDomain` ein Wert zugewiesen werden kann.

**Wichtiger Hinweis:**

Wurde über den Wizard oder die Mappenkonfiguration eine Ldapkonfiguration für einen Mandanten angelegt und sollen in der `LdapParamDomain` nur einzelne Anpassungen für diese Konfiguration vorgenommen werden, dann werden die mit einem führendem Dollarzeichen beginnenden Defaultwerte (z.B. `$LdapLoginDN` oder `$LdapPort`) aus dem Mandanten gezogen und müssen in dem Skript nicht gesetzt oder weiter angepasst werden.

 Dies gilt **nicht** bei Verwendung einer `LdapParamDomain` in einer Mehrdomänenkonfiguration (s.u.)!

| Mandantenproperty | Required | Properties, die beim Mandanten und nicht in der LdapParamDomain gesetzt werden |
| --- | --- | --- |
| LdapActive |  | true false Bei der Konfiguration über den Wizard oder den Mappentypen wird das Property automatisch gesetzt. Das Logonscript und ein LdapJob werden ab der Version 2.3.14 nur ausgeführt, wenn das Property den Wert true besitzt oder nicht vorhanden ist (Abwärtskompatibilität). |
| loginScript | x | Ldap.LdapLogon verwendet das LdapLogon-Skript aus dem scriptlibs\Ldap-Verzeichnis. LdapLogon verwendet das Skript LdapLogon aus dem Menüordner Documents->Scripte. Das Property wird im Wizard und beim Mappentypen entfernt, wenn LDAP-Active den Wert false besitzt. Auch wenn das loginScript-Property vorhanden sein sollte, wird ab der Version 2.3.14 seine Ausführung und auch die Ausführung eines definierter LdapJobs abgebrochen. User mit dem Property noLdapCheck und dem Wert true können sich aber auch in diesem Fall weiter anmelden. |
| singleSignon | x | true false |
| autoLogin | x | 1, wenn singleSignon true. Das Property wird im Wizard und der Mappenkonfiguration automtisch angepasst. Besitzt singleSignon false wird der Wert auf 0 gesetzt bzw. entfernt, wenn keine anderen autoLoginScripte vorhanden sind. |
| autoLoginScript | x | Ldap.LdapLogon, wenn singleSignOn true. Das Property wird im Wizard und bei der Mappenkonfiguration automatisch angepasst. Werden ab der Version 2.3.14 neben dem Ldap.LdapLogon noch andere autoLoginScripte verwendet so wird der Eintrag Ldap.LdapLoginjediglich entfernt. Das autoLogin Property kann in diesem Fall auch nicht auf den Wert 0 gesetzt werden, da nicht beurteilt werden kann, ob es für die anderen autoLoginScripte den Wert 1 besitzten muss, damit diese weiter ausgeführt werden. |


## LDAP-Verbindung

| Parameter | Default alternativer Defaultwert | Required | Kommentar |
| --- | --- | --- | --- |
| LdapLogin | $LdapLoginDN | x | DN eines LDAP Users mit vollem Leserecht. CN=LDAP-Sync-Konto,CN=Users,DC=peachit,DC=local |
| LdapPassword | $LdapPassword | x | Passwort des Users für die Anmeldung am LDAP Server. Ab der Ldapversion 2.3 wird das Password encrypted. Damit ein verschlüsseltes Passwort in der LdapParamDomaineingetragen werden kann wurde unter server\scriptlibs\Ldap\tools eine XML-Datei LdapEncryptPassword.xml abgelegt mit der nach einem XML-Import ein Skript zur Generierung des Passwortes ausgeführt werden. LdapParamDomains mit einem Passwort in Klartext behalten ihre Gültigkeit und müssen nicht geändert werden. |
| LdapHostname | $LdapHostname | x | Fully Qualified Domain Name www.example.com Array Mehrere Hostnames werden nur der LDAPPro-Lizenz unterstützt. |
| LdapBaseDN | $LdapBaseDN | x | Basis des LDAP Servers von der ausgehend Suchabfragen vorgenommen werden. DC=peachit,DC=local |
| tcpPort | $LdapPort 389 | x | Ldapserver-Port über den eine Verbindung aufgebaut wird. Standard 389 636 (SSL) Numerisch Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert 389 verwendet. |
| protocolVersion | 3 | - | Zu verwendende LDAP Protocol Version, die der Client dem Server bei Verbindungsaufbau mitteilt. Numerisch |
| searchScope | 2 | - | Suchtiefe bei Anfragen. 0 Suche nur im Basisknoten. 1 Suche in und direkt unterhalb der Suchbasis 2 Suche absteigend rekursiv in und unterhalb der Suchbasis, , sowie Domänen in Vertrauensstellung und der Domänengesamtstruktur (Referrals). Numerisch |
| enableSSL | $LdapEnableSSL false | - | Der Verbindungsaufbau zum LDAP-Server wird über OpenSSL vorgenommen. Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert false verwendet. Boolescher Wert |
| caCertFile | $LdapCaCertFile | - | Dateipfad auf dem Server zur Zertifikatsdatei. Erforderlich wenn enableSSL den Wert true besitzt. Ab Serverversion 5.0h HF2 kann die Angabe unterbleiben, wenn in der documents.ini im Serververzeichnis der Eintrag CAPath WinCertStore zur Verwendung des Windowszertiftikatsspeichers gesetzt ist. Wird der Parameter in einem Skript gesetzt, dann muss \ als \\ maskiert werden. Änderungen erfordern Serverneustart. |
| ignoreCertError | $LdapIgnoreCertError false | - | Ignoriere von OpenSSL gemeldete Fehler beim Verbindungsaufbau zum Server. Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert false verwendet. Änderungen erfordern Serverneustart Boolescher Wert |
| singleSignon | $singleSignon false | - | Wenn true, dann wird die Passwortprüfung von einem installierten SSO-Dienst vorgenommen . Siehe auch loginOnlyWithSSO Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert false verwendet. Boolescher Wert |
| loginOnlyWithSSO | $loginOnlyWithSSO false | - | Wenn eine Anmeldung ausschließlich über den SSO-Dienst erfolgen soll/darf, muss der Parameter auf den Wert true gesetzt werden. Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert false verwendet. Boolescher Wert |
| chaseReferrals | $LdapChaseReferrals true | - | Wenn der LDSP-Server eine Suche/Query mit einem Referral auf einen anderen LDAP-Server beantwortet, so wird der Documents-Server das Query an diesen weiterleiten. Dabei muss sichergestellt sein, dass die Netwerkadresse aufgelöst und eine LDAP-Anmeldung auf den verwiesenen Server erfolgen kann. Sofern diese Verhalten unerwünscht ist, ist der Wert auf false zu setzen. Ab Version 2.2.5 und Server 5.0h HF1. S.a. searchscope Boolescher Wert |
| useLdapBaseDN | false | - | Erlaubt die Verwendung einer BaseDN, die an allen verwendeten DNs angehängt wird. Boolescher Wert |
| MaxAttrSize | 0 | - | Windows Server 2008 R2 liefert bei Suchanfragen die Daten von maximal 5000 Gruppenmitglieder aus. Bei größeren Gruppen kann der Wert z.B. auf 10000 gesetzt werden. Numerisch |


## Benutzer

| Parameter | Default alternativer Defaultwert | Required | Kommentar |
| --- | --- | --- | --- |
| emulateImport | false | - | Emuliere den Import oder das Logon. Es wird kein Import oder Änderungen an Usern oder Zugriffsprofilen vorgenommen. Boolescher Wert |
| syncUsers | true | - | Synchronisiere die User . Prüft, ob die Benutzer Mitglied der switching group sind. Importiert die Benutzer und weist ihnen ihre Zugriffsprofile zu (wenn syncProfiles den Wert true besitzt). Wird nur im LdapJob verwendet. Boolescher Wert |
| licenseType | $LdapLicenseType concurrent | x | Lizenz, die bei der Benutzerneuanlage verwendet wird. named concurrent_standard concurrent_open shared concurrent |
| LdapSwitchingGroupDN | $LdapSwitchingGroupDN | x | DN der LDAP-Gruppe, die die zu importierenden Benutzer enthält. CN=Users,OU=Gruppen,DC=peachit,DC=local |
| LdapDocumentsGroupDN | $LdapDocumentsGroupDN | x | DN der LDAP-Gruppe, die die zu importierenden Benutzer mit Documents-Zugang enthält. CN=DocUsers,OU=Gruppen,DC=peachit,DC=local |
| LdapArchiveGroupDN | $LdapArchiveGroupDN | x | DN der LDAP-Gruppe, die die zu importierenden Benutzer mit Archiv-Zugang enthält. CN=ArchiveUsers,OU=Gruppen,DC=peachit,DC=local |
| LdapUserDN | $LdapUserDN | x | DN einer Organizational unit (OU), die unmittelbar die zu importierenden Benutzer enthält (nur wenn für Abwärtskompatibilität benötigt). Array OU=org3,OU=org2a,OU=org1,DC=peachit,DC=local |
| documentsForAll | $LdapDocumentsForAll false | - | Gewährt allen zu importierenden Benutzers automatisch das Recht auf einen Documents-Zugang. Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert false verwendet. Boolescher Wert |
| archiveForAll | $LdapArchiveForAll false | - | Gewährt allen zu importierenden Benutzers automatisch das Recht auf einen Archiv-Zugang. Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert false verwendet. Boolescher Wert |
| withSuperior | $withSuperior true | - | Setze die Vorgesetzten-Beziehung am Systemuser wenn das 'manager' DN-Attribute nicht leer ist und der dort genannte Systemuser bereits im Documents existiert. Sollte der Systemuser nicht gefunden werden, dann wird eine eventuell bereits eingetragene Vorgesetzten-Beziehung nicht geändert. Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert true verwendet. Boolescher Wert |
| disableUserSyncOnLogin | false | - | Führe keine Benutzersynchronisierung bei der Anmeldung eines Benutzers durch. Die Synchronisierung muss durch einen eingerichteten LDAP-Job erfolgen und gewährleistet werden. Wird nur im LdapLogon-Skript verwendet. Boolescher Wert |
| checkMembershipOnLogin | false | - | Prüft, ob der sich anmeldende und freigegebene Benutzer Mitglied der switichung group ist. Wenn disableUserSyncOnLogin den Wert true besitzt oder der Benutzer geperrt ist, wird die Gruppenmitgliedschaft ebenfalls nicht geprüft. Die Prüfung muss durch einen eingerichteten LDAP-Job erfolgen und gewährleistet werden. Wird nur im LdapLogon-Skript verwendet. Boolescher Wert |
| fullDocuments | $fullDocuments true | - | Bei Vorlage einer reinen EasyWeb retrieval-Lizenz muss der Wert auf false gesetzt werden. Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert true verwendet. Boolescher Wert |
| noPasswdChange | true | - | Wenn true, dann kann der Benutzer sein Passwort nicht im Documents ändern. Boolescher Wert |
| ignoreLoginCase | $LdapIgnoreLoginCase false | - | Verwende Kleinbuchstaben für den Anmeldenamen (login). Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert false verwendet. Boolescher Wert |
| easywareAuth | false | - | Wenn true, dann wird bei einem Systemuser das Attribut AutoCreation auf true gesetzt. Boolescher Wert |
| createFellows | false | - | Wenn true dann werden Fellows statt Partneraccounts bei der Neuanlage eines Users erzeugt. Boolescher Wert |
| stopOnUserCreationError | true | - | Wenn es bei der Neuanlage eines Benutzers zu Fehlern kommt, so wird der LdapJob beendet, da wahrscheinlich ein Lizenzfehler vorliegt. Die Neuerzeugung von Benutzern erfolgt kurz vor Beendigung des Jobs. Die Synchronsierung bereits existierender Benutzer ist zu diesem Zeitpunkt bereits erfolgt. Boolescher Wert |
| parseDescriptionProperties | false | - | Wenn true, dann wird das Ldap-Attribut description wie folgt geparst. Enthält das Attribut ein PropertyValue in Form von License=Named, dann wird bei dem Systemuser die Lizenz entsprechend gesetzt. Enthält das Atttribut ein PropertyValue der Form Propertyname=Propertyvalue, dann wird am Systemuser eine Eigenschaft mit dem entsprechenden Namen und Wert erzeugt. Boolescher Wert |
| groupInGroup.recursiveUserSearch | $LdapRecursiveUserSearch false | - | Importiere auch User, die sich in Untergruppen befinden. Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert false verwendet. Boolescher Wert |


## Zugriffsprofile

| Parameter | Default alternativer Defaultwert | Required | Kommentar |
| --- | --- | --- | --- |
| syncProfiles | $syncProfiles false | - | Importiert die Zugriffsprofile und weist diese den Benutzern zu (wenn syncUsers den Wert true besitzt). Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert false verwendet. Boolescher Wert |
| LdapGroupDN | $LdapGroupDN | - | DN einer Organizational unit (OU), die die Zugriffsprofile enthält (nur wenn für Abwärtskompatibilität benötigt) OU=org3,OU=org2a,OU=org1,DC=peachit,DC=local Array |
| LdapGroupFilterGroupDN | $LdapGroupFilterGroupDN | - | DN der Gruppe, die die Zugriffsprofile enthält. CN=AP,OU=Gruppen,DC=peachit,DC=local String |
| groupInGroup.recursiveAccessProfiles | $LdapRecursiveAccessProfiles false | - | Verwende Untergruppen als Zugriffsprofile. Gewähre den Untergruppen ebenfalls Documents-/Archiv-Zugang. Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert false verwendet. Boolescher Wert |
| groupInGroup.recursiveGroupSearch | false | - | Suche auch in organizational Units rekursiv nach Untergruppen. Boolescher Wert |
| groupInGroup.profileSearchScope | $LdapProfileSearchScope 0 | - | Wert 0 oder wenn nicht vorhanden: Untergruppen für Zugriffsprofile liegen alle unmittelbar in der LdapGroupFilterGroupDN. Wert 1: Suche in allen Untergruppen rekursive und akzeptiere die dabei gefundenen Untergruppen ebenfalls als Zugriffsprofile. groupInGroup.recursiveAccessProfiles muss true sein. Ab Version 2.3.15. |
| withSupervisor | $supervisor true | - | Erzeugt am Zugriffsprofil die Eigenschaft $supervisor. Der Wert der Eigenschaft ergibt sich aus dem Login des Systemusers, der im managedby DN-Attribut der Ldap-Gruppe genannt ist. Der Systemuser muss bereits im System existieren, damit die Eigenschaft gesetzt wird. Wird der supervisor nicht gefunden, so wird eine ggfs. vorhandene $supervisor-Eigenschaft entfernt. Wenn die Mandanteneigenschaft nicht vorhanden ist, wird der Wert true verwendet. Boolescher Wert |
| cutPrefix | false | - | Entferne das führende cutPrefix aus dem Profilnamen des Zugriffsprofils Boolean |
| forcePrefix | true | - | Wenn false, dann muss ein Zugriffsprofil nicht notwendig das führende groupPrefix besitzen, damit es importiert wird. Boolescher Wert |
| groupPrefix |  | - | Nur Zugriffsprofile mit dem führenden groupPrefix werden importiert. Siehe auch forcePrefix String |


## Caching

Ab der Version 2.2.3 gibt es für das Debugging des Cachingmechanismus ein eigenens `Loglevel` mit dem Wert `5`. Das *LogLevel* kann im Skript `LdapLogging` festgelegt werden.

| Parameter | Default | Required | Kommentar |
| --- | --- | --- | --- |
| disableGroupCache | false | - | Deaktiviere das Caching von Gruppen Wenn true, so wird auch der IgnorGroupCache deaktiviert. Boolescher Wert |
| disableIgnoreGroupCache | false | - | Deaktiviere das Caching von Ldap-Gruppen, nach denen nicht gesucht werden soll. Boolescher Wert |


## Encoding

| Parameter | Default | Required | Kommentar |
| --- | --- | --- | --- |
| withTranscode | false (UTF8-Server) | - | Wenn true dann transkodiere Strings in das LDAP-Server-Encoding und transkodiere Strings vom LDAP-Server in das Encoding des Documents-Servers. Wenn der Documents-Server ein UTF8-Server ist, dann ist der Defaultwert false Boolescher Wert |
| LdapSourceEncoding | UTF8 | - | Ldap-Server Encoding. Mögliche Werte: UTF-8 ISO-8859-1 ISO-8859-15 Windows-1252 Windows-1250 Wird nur verwendet, wenn withTranscode den Wert true besitzt. Boolescher Wert |
| localEncoding | UTF8 (wenn UTF8-Server) ISO-8859-1 (wenn kein UTF8-Server) | - | Documents-Serverencoding Mögliche Werte: UTF-8 ISO-8859-1 ISO-8859-15 Windows-1252 Windows-1250 Wird nur verwendet, wenn withTranscode den Wert true besitzt. Boolescher Wert |
| stringOperationEncoding | ISO-8859-1 (wenn UTF8-Server) | - | Verwende das angegebene Encoding, wenn Strings in Kleinbuchstaben umgewandelt werden. Mögliche Werte: UTF-8 ISO-8859-1 ISO-8859-15 Windows-1252 Windows-1250 Der Default ist ISO-8859-1 auch für UTF8-Server. Wird kein Encoding angegeben, so wird die in Javascript verwendete Funktion toLowerCase() ausgeführt. String |


## LDAP Servertype - Objektklassen & Attribute

| Parameter | Default | Required | Kommentar |
| --- | --- | --- | --- |
| LdapOUType | organizationalUnit | - | Der Name der Ldap-Objektklasse, die für eine organizational Unit verwendet wird. |
| LdapServerType | ADS | - | Kennzeichnet den LDAP-Server, der verwendet wird. Dies ist nur eine Kurzform für eine Menge von Objektklassen-Namen and Ldap-Attributen, die verwendet werden, um Ldap-Suchabfragen zu bilden. Dies stellt keine Zusicherung oder Garantie dafür dar, dass der LDAP-Server vollständig unterstützt wird. ADS Samba Novell Domino OpenDJ 2.2.4 |
| LdapUserLoginName | sAMAccountName | - | Das Ldap-Attribut, das für die Anmeldung eines Ldap-Users verwendet wird. sAMAccountName ADS uid Samba uid Novell cn Domino cn OpenDJ 2.2.4 |
| LdapDNAttributeName | distinguishedName | - | Der Ldap-Attribut-Namen, der verwendet wird, wenn der distinguishedName eines Users oder einer organizationalUnit ausgelesen werden soll. distinguishedName ADS uid Samba Novell cn Domino entryDN OpenDJ 2.2.4 |
| LdapGroupDNAttributeName | distinguishedName | - | Der Ldap-Attribut-Namen, der verwendet wird, wenn der distinguishedName für eine Ldap-Gruppe ausgelesen werden soll. distinguishedName ADS Samba distinguishedName Novell Domino entryDN OpenDJ 2.2.4 |
| LdapGroupNameAttributeName | name | - | Der Ldap-Attribut-Namen, der verwendet werden soll, wenn der Namen einer Ldap-Gruppe ermittelt werden soll. name ADS Samba cn Novell Domino cn OpenDJ 2.2.4 |
| LdapUserType | user | - | Die Ldap-ObjektKlasse mit der nach Usern gesucht werden soll. user ADS account Samba person Novell dominoPerson Domino person OpenDJ 2.2.4 |
| LdapGroupType | group | - | Die Ldap-ObjektKlasse mit der nach Gruppen gesucht werden soll. group ADS Samba groupOfNames Novell dominoGroup Domino groupOfNames OpenDJ 2.2.4 |
| LdapUserGroupArray | memberOf | - | Der Ldap-Attribut-Namen mit dem nach den Gruppen gesucht werden soll, in den das Objekt Mitglied ist. memberOf ADS Samba groupMembership Novell dominoAccessgroups Domino isMemberOf OpenDJ 2.2.4 |
| LdapMemberAttributeName | member | - | Der Ldap-Attribut-Namen indem die Mitglieder aufgeführt ewrden, die das Ldap-Objekt besitzt. member ADS Samba uniqueMember Novell Domino member OpenDJ 2.2.4 |