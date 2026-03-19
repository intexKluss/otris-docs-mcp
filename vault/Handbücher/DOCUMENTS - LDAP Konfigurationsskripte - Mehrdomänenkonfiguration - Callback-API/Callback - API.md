---
title: "Callback-API"
source: "https://otris.software/documents/manuals/books/ldap-callbacks-doc/wizdoccallbacks/Konfiguration-CallbackAPI.html#callback-api"
---

# Callback-API


## API Vorbemerkung

Die *Callback-API* stellt einige Umgebungsvariablen und Methoden bereit, mit deren Hilfe die Funktionalität der LDAP-Kopplung an vielen Stellen erweitert werden kann.

Das Auslieferungspaket enthält das Skript `LdapCallbackFunctions`, welches bereits alle hier aufgeführten Methoden enthält. Einige enthalten bereits sinnvollen Beispielcode, der als Referenz verwendet werden kann. Der *Callback* muss entsprechend einkommentiert werden, damit er ausgeführt wird.

Bei einer Mehrdomänenkonfiguration wird keine eigenes `LdapCallbackFunctions`-Skript pro Domäne verwendet. Dieses gilt also global, d.h domänenübergreifend. Um in den einzelnen *Callbacks* unterscheiden zu können, aus welcher Konfiguration der *Callback* aufgerufen wird, kann die Eigenschaft `ldapConfig.name` verwendet werden.

In jedem *Callback* zur Verfügung stehenden Objekte:

- ldapConfig (Object):
Globales Objekt, welches die Konfiguration der LDAP-Kopplung enthält. Wird das LdapParamDomain-Skript zur Konfiguration verwendet, so können dort auch zusätzliche Objekte, Properties und Funktionen definiert werden, auf die dann in allen Callbacks zugegriffen werden kann. ldapConfig.userProperty = "User Property"; ldapConfig.doThis = function(inParam){ return "inParam: " + inParam; };
- otr.ldap.lang (Integer):
Die Nummer der aktuell vom Benutzer gewählten Portalsprache (0-5).


## Callbacks


### callbackHostMapping(String dn)

Wenn sich eine zentrale Domäne über mehrere Hosts und andere Domänen in Vertrauensstellungen erstreckt, kann hier ein Mapping von DNs auf die verschiedenen Hosts und Domänen vorgenommen werden. Die LdapConnection wird dann zu den jeweiligen Rechnern aufgebaut. Für den Aufbau der Verbindung kann dann ein `key` zur Identifizierung der Verbindung, der `hostName` (FQDN), die loginDN `username` und das `password` festgelegt werden.
Dieser *Callback* sollte nur im Rahmen eine Projektunterstützung verwendet werden. In der Regel kann die gleiche Funktionalität durch eine *Mehrdomänen-Konfiguration* abgedeckt werden.


### callbackIgnoreGroupDNs(String groupDN)

In diesem Callback kann ein Array mit DNs von Gruppen zurückgegeben werden, nach denen nicht gesucht werden soll. Die Elemente werden dann dem Cache für "nicht durchzuführenden Suchabfragen" von Gruppen hinzugefügt. Nach DNs in diesem Gruppencache wird dann auch im weitern Verlauf nicht mehr gesucht. Der *Callback* wird nicht ausgeführt, wenn in der `LdapParamDomain` der *IgnoreGroupCache* ausgeschaltet wurde. Logausgaben für den Caching-Mechanismus werden bei `LogLevel 5` geschrieben.


```javascript
// disables IgnorGroupCache and Callback
 ldapConfig.disableIgnoreGroupCache = true;
 // or if 'caching' is disabled altogether the IgnoreGroupCache will be diabled as well
 ldapConfig.disableGroupCache = true;
```

 // disables IgnorGroupCache and Callback
 ldapConfig.disableIgnoreGroupCache = true;
 // or if 'caching' is disabled altogether the IgnoreGroupCache will be diabled as well
 ldapConfig.disableGroupCache = true;
### callbackUserGrantAccess(String login, String password)

In diesem Callback kann einem User, der sich den Prüfungen nach eigentlich anmelden dürfte, die Anmeldung schlussendlich verweigert.
Ein Rückgabewert `!= 0` wird als Anmeldesperre gewertet. Über `context.errorMessage = "Anmeldung verweigert";` lässt sich eine entsprechende Fehlermeldung setzen, die dann auch z.B. bei einer Webanmeldung angezeigt wird. Der *Callback* wird nur im Logon-Skript aufgerufen.


### callbackConnectionError(String dcErrorMessage)

Wird aufgerufen, wenn keine Verbindung zum LDAP Server aufgebaut werden kann. *dcErrorMessage* enthält die Fehlermeldung, die vom Server zurückgegeben wurde. Ein Rückgabewert findet keine weitere Verwendung.
Wennn es zur einem Verbindungsfehler kommt und somit nicht verifiziert werden kann, ob die *Documentsbenutzer* die entsprechenden Rechte zur *Archiv*- und *Documentsnutzung* besitzen, dann werden die Benutzer gesperrt und ihnen die Rechte entzogen.

Dies kann unterbunden werden, indem man am Mandanten das Property `LdapDisableUsersOnConnectionError` mit dem Wert `false` hinterlegt oder in der `LdapParamDomain` den Eintrag `ldapConfig.disableUsersOnConnectionError = false;` hinzufügt.


### callbackProfileSyncPre(String profileName) - callbackProfileSyncPre(String profileName, String groupDN) 2.2.4

Die Funktion erlaubt es, den Profilnamen vor der Synchronisierung eines Zugriffsprofils zu manipulieren. Dies ist sinnvoll, wenn im LDAP bspw. ein Präfix für Gruppennamen verwendet wird, das in den Zugriffsprofilen entfernt und nicht im Profilnamen verwendet werden soll.
Mit dem ggfs. veränderten Profilnamen wird dann im weiteren Verlauf nach existierenden Accessprofiles mit gleichem Profilnamen gesucht. Der Profilname ist auf 255 Zeichen beschränkt und darf als *technischer Bezeicher* keine Umlaute enthalten. Werden die Konfigurationsparameter *cutPrefix u. groupPrefix* verwendet, so wird als *profileName* der um das Prefix ggfs. bereinigte Profilname übergeben. Wird der Konfigurationsparameter *forcePrefix* nicht auf *false* gesetzt, so wird der Callback nicht aufgerufen, wenn ein *groupPrefix* vergeben wurde.
Ab der Version `2.2.4` wird dem Callback auch die `groupDN` übergeben. Wird der Wert `ldapConfig.ignoreProfile` zurückgegeben, so wird das Profil im weiteren Verlauf ignoriert. Es wird nicht angelegt und der User wird mit diesem auch nicht verbunden.
Der Callback wird nicht aufgerufen wenn der Import emuliert wird.


```javascript
// Ändert den technischen Bezeichner für das Profil (max Stringlength = 255) nach dem im Documents gesucht
// werden soll.
function callbackProfileSyncPre(profileName, groupDN)
  {
    if(profileName == "NestedGroupA"){
      return "Gruppe A";
    }
};
```

// Ändert den technischen Bezeichner für das Profil (max Stringlength = 255) nach dem im Documents gesucht
// werden soll.
function callbackProfileSyncPre(profileName, groupDN)
  {
    if(profileName == "NestedGroupA"){
      return "Gruppe A";
    }
}; Wird im Verlauf des Importes ein Zugriffsprofil neu angelegt, so wird der geänderte Profilname als der neue Zugriffsprofil-Profilname gesetzt.
 Wird ein Leerstring oder `null` zurückgegeben, so wird der `profilName`, so wie er an die Funktion übergeben wurde, unverändert verwendet.
 Der Callback wird nicht aufgerufen wenn der Import emuliert wird.


### callbackProfileCreatedPost(AccessProfile apObj, LDAPGroup ldapGroupObj)

Wird ausgeführt, nachdem ein Zugriffsprofil synchronisiert wurde. Mit dieser Funktion können bspw. nachträglich noch zusätzliche Eigenschaften am Zugriffsprofil gesetzt werden. Wurde ein *groupPrefix* als Konfigurationsparameter vergeben, so wird der Callback nur aufgerufen, wenn der Konfigurationsparameter *forcePrefix* den Wert *false* besitzt.
Ein Rückgabewert wird nicht weiter verwendet. Der Callback wird nicht aufgerufen wenn der Import emuliert wird.


```javascript
// Ändert das Label der ersten Portalsprache auf den Wert des Attributes 'displayName'
// im LdapObjekt - Das Label ist auf 45 Zeichen zu beschränken
function callbackProfileFoundPost(apObj, ldapGroupObj)
{
  apObj.setAttribute("name", ldapGroupObj.getAttributeValue("displayName"));
  var DN = ldapGroupObj.DN;
  // Zweite Portalsprache name_2
};
```

// Ändert das Label der ersten Portalsprache auf den Wert des Attributes 'displayName'
// im LdapObjekt - Das Label ist auf 45 Zeichen zu beschränken
function callbackProfileFoundPost(apObj, ldapGroupObj)
{
  apObj.setAttribute("name", ldapGroupObj.getAttributeValue("displayName"));
  var DN = ldapGroupObj.DN;
  // Zweite Portalsprache name_2
};
### callbackProfileFoundPost(AccessProfile apObj, LDAPGroup ldapGroupObj)

Diese Funktion wird ausgeführt, nachdem ein Zugriffsprofil anhand einer LDAP Gruppe im *Documents* gefunden wurde. Auch dieser *Callback* kann verwendet werden, um die Labels des Accessprofiles (max 45 Zeichen) für verschiedene Portalsprachen anzupassen, es wird aber vorausgesetzt, dass das Zugriffsprofil bereits im *Documents* existiert. Wurde ein *groupPrefix* als Konfigurationsparameter vergeben, so wird der Callback nur aufgerufen, wenn der Konfigurationsparameter *forcePrefix* den Wert *false* besitzt. Die DN lässt sich über `ldapGroupObj.DN` auslesen.
Ein Rückgabewert wird nicht weiter verwendet. Der Callback wird nicht aufgerufen wenn der Import emuliert wird.


### callbackUserHandleLogin(String login, String ldapUserDN, LDAPUser ldapUser)

Wird immer dann aufgerufen, wenn der Name eines LDAP-Benutzers aus dem LDAP gelesen wurde und mit diesem *login* dann im Folgenden nach einem *Documents*-User gesucht wird. Wird der Benutzer nicht gefunden und soll eine Neuanlage erfolgen, so wird der zurückgegebene Wert als *login* verwendet.
Ab der Ldapversion `2.3` wird auch der `distinguishedName` und das ldapUser-Objekt übergeben. Mit `ldapUser.getAttribute(attrName)` kann der Wert eines Ldapattributes ausgelesen werden.
Liefert das LDAP z.B. die E-Mail Adresse als eindeutige Identifizierung (login) zurück, so kann dieser Callback dazu verwendet werden, den Benutzernamen (vor dem @) aus der Adresse zu  herauszuschneiden und das Ergebnis dann als *login* zu verwenden.
Wird der Callback verwendet, so sollte auch ein Wert (`login`) zurückgegeben werden. Ein Leerstring oder `null` als Rückgabewert wird ignoriert.

**Wichtiger Hinweis:**

 Wenn diese Funktion verwendet wird, ist die automatische Erstellung von Benutzern beim Login (Neuanlage bei Erstanmeldung) nicht mehr möglich, da vom *login* des Documentsbenutzers nicht auf das *login* des *Ldap-Users* geschlossen werden kann. Es muss also immer zuerst der LDAP-Job gelaufen sein.


### callbackUserSetUserAttributes(String login, SystemUser user, LdapUser LdapUser)

Überschreibt komplett das Standardverhalten zur Synchronisation der Attribute des Benutzers zwischen LDAP und *Documents*.
Wird dieser Callback verwendet, so werden durch den Import keine Attribute (z.B. Vorname, Nachname, Anrede usw.) aus dem LDAP im Benutzer gesetzt. Dies muss dann komplett im Callback erfolgen. Das Skript **LdapUserAttributes**, das eigentlich diese Aufgabe übernimmt, wird nicht ausgeführt.
Ein Rückgabewert wird nicht weiter verwendet. Der Callback wird nur aufgerufen, wenn der Import nicht emuliert wird.


### callbackUserProfileSyncPre(String login, SystemUser user, LDAPUser ldapUser)

Wird ausgeführt, bevor geprüft wird, ob die Profile eines Benutzers mit dem LDAP synchronisiert werden sollen.
Ein Rückgabewert findet keine weitere Verwendung.


### callbackUserProfileSyncPost(String login, SystemUser user, LDAPUser ldapUser)

Wird ausgeführt, nachdem die Profile eines Benutzers mit dem LDAP synchronisiert wurden. Dies kann bspw. verwendet werden, um dem  Benutzer ein festes, LDAP unabhängiges, Zugriffsprofil zuzuweisen. Der *Callback* wird auch ausgeführt, wenn `syncProfiles` ausgeschaltet ist.
Ein Rückgabewert findet keine weitere Verwendung.


### callbackUserDisablePre(String login)

Wird ausgeführt, wenn ein Benutzer bei der Synchronisation gesperrt werden soll.
Gibt der Callback den Wert `false` zurück, so wird der User nicht disabled.


### callbackUserDisablePost(String login)

Wird ausgeführt, wenn ein Benutzer bei der Synchronisation gesperrt wurde.
Ein Rückgabewert findet keine weitere Verwendung.


### callbackAfterJobSync()

Wird nach erfolgreicher Synchronisation aufgerufen. Der LdapJob wird unmittelbar darauf beendet.
Ein Rückgabewert findet keine weitere Verwendung.


### callbackNoLdapAuthRequired(String login)

Wird aufgerufen, wenn sich ein Benutzer anmeldet, der nicht mit dem
LDAP synchronisiert werden muss.

Benutzereigenschaft `noLdapCheck true`

  Ein Rückgabewert findet keine weitere Verwendung.


### callbackSetSuperiorPost(SystemUser suObj, String supLogin)

Wird ausgeführt, wenn ein Benutzer (supLogin) als Superior eines anderen Benutzers (suObj) eingetragen wurde.
Der Callback wird auch aufgerufen, wenn der Vorgesetzte nicht gefunden wurde. Ein Rückgabewert findet keine weitere Verwendung.


### callbackUserLoginPost(String login)

Wird aufgerufen, nachdem ein Benutzer erfolgreich gegen das LDAP authentifiziert und seine Eigenschaften synchronisiert wurden. Ein Rückgabewert wird nicht weiter verwendet.
Der Callback wird nur im Logon-Skript aufgerufen, sofern das Logon nicht emuliert wird.


### callbackDisableLdapConfig(File currentFile)

Wird aufgerufen, wenn die LDAP Verbindung deaktiviert wurde (sofern diese mithilfe des Mappentypen konfiguriert wurde). Ein Rückgabewert wird nicht weiter verwendet.