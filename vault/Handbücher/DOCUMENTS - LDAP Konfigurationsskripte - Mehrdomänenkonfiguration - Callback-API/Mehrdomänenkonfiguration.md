---
title: "Mehrdomänenkonfiguration"
source: "https://otris.software/documents/manuals/books/ldap-callbacks-doc/wizdoccallbacks/Konfiguration-MultiDomain.html#mehrdomaenenkonfiguration"
---

# Mehrdomänenkonfiguration

Wenn Benutzer aus mehreren verschiedenen Domänen importiert werden sollen, so ist dies nicht über die Konfigurationsmappe oder den LDAP-Wizard möglich. Diese schreiben die LDAP relevanten Einstellungen nur für eine Domäne in das Mandantenobjekt.

Erfolgt ein LDAP-Anschluss für mehrere Domänen, so muss für jede Domäne ein eigenes Skript angelegt werden, das die entsprechenden Konfigurationsproperties enthält. Hierzu kann  der Inhalt des Skriptes `LdapParamDomain` als Vorlage verwendet werden (s.o). Beachten Sie dabei, dass es dabei zu Abweichungen beim Namen der Eigenschaft im Skript und beim Namen der Mandanteneigenschaft kommen kann.

**Wichtiger Hinweis:**

Werden mehrere `LdapParamDomain`-Skripte erwendet, was bei einer Mehrdomänenkonfiguration der Fall ist, so können Properties, die beim Mandanten hinterlegt sind, nicht ausgelesen werden. Defaultwerte, die sich sonst aus dem Mandanten ergeben  (z.B. `$LdapLoginDN` oder `$LdapPort`), müssen explizit im Skript mit einem Wert belegt werden, sofern kein alternativer Defaultwert vorhanden ist.

Wurde für jede Domäne ein Konfigurationsskript (z.B. LdapParamDomain_Server_1) angelegt, so müssen diese Skripte nun im Skript `LdapDomainInclude` eingetragen und somit registriert werden. Der Inhalt von `LdapDomainInclude` ist standardmäßig wie folgt:


```javascript
var ldapConfigContainer = new Array();

ldapConfigContainer[0] = new otr.ldap.LdapConfiguration({
   name: "Domain",
   loadDefaults: true,
   loadConfiguration: function(ldapConfig){
       #import "LdapParamDomain"
   }
});
```

var ldapConfigContainer = new Array();

ldapConfigContainer[0] = new otr.ldap.LdapConfiguration({
   name: "Domain",
   loadDefaults: true,
   loadConfiguration: function(ldapConfig){
       #import "LdapParamDomain"
   }
});Das Registrieren der zusätzlichen Konfiguration geschieht dadurch, dass diese als weiteres Element in den Konfigurationscontainer eingefügt wird.


```javascript
ldapConfigContainer[1] = new otr.ldap.LdapConfiguration({
   name: "Ldap II",
   loadDefaults: true,
   loadConfiguration: function(ldapConfig){
       #import "LdapParamDomain_Server_1"
   }
});
```

ldapConfigContainer[1] = new otr.ldap.LdapConfiguration({
   name: "Ldap II",
   loadDefaults: true,
   loadConfiguration: function(ldapConfig){
       #import "LdapParamDomain_Server_1"
   }
});Der Wert für `name` legt einen Namen für die eingefügte Konfiguration fest und wird auch in der Logdatei mit angezeigt. Hinter der `#import` Anweisung muss der Skriptname des jeweiligen Konfigurationsskripts analog zur `LdapParamDomain` angegeben werden.

**Wichtiger Hinweis:**

Es muss unbedingt sichergestellt werden, dass die Benutzernamen der importierten Benutzer **über alle Domänen hinweg eindeutig** sind. Das heißt, ein Benutzer „schmidt“ darf nur in einer einzigen Domäne vorkommen. Kommt ein Benutzername mehrmals vor, kann dies zu schwerwiegenden Fehlern im Login-Prozess dieser Benutzer führen.

Bei Einrichtung einer Mehrdomänenkonfiguration sollten alle LDAP-Properties bis auf das Property `$loginScript` am Mandanten entfernt werden. Dazu kann auch das Skript `\server\scriptlibs\Ldap\tools\clearProperties` verwendet werden.

  Weiter kann als Ausnahme beim Mandanten auch das Property `LdapAddConfigNameAsUserProperty` mit dem Wert `true` angelegt werden. Dieses Property sorgt dafür, dass bei einem importierten User oder Accessprofile ein Property mit angelegt wird, dass anzeigt aus welcher Domänenkonfiguration der User/Accessprofile importiert wurde. Beim Login eines Users werden dann andere Domänenkonfigurationen übersprungen und der Anmeldevorgang nur bei der "richtigen" Konfiguration durchgeführt, was den Anmeldeprozess beschleunigt.

  Das *LogLevel* kann im Skript `LdapLogging`  festgelegt werden.

**Empfohlene Vorgehensweise:**

1. Erstellen Sie mit dem Wizard eine entsprechende Konfiguration für die 1. Domäne und überprüfen Sie mit einem Import, ob die User aus dieser Domäne auch importiert werden.
2. Über die Checkbox Wizard-Seite mit Zusatzfunktionen einblenden können Sie auf der letzten Seite über den Button Mandantenproperties als LdapParamDomain speichern ein LdapParamDomain-Skript z.B. LdapParamDomain_relations-2023-03-22 erzeugen. Dazu muss der Wizard einmal fertiggestellt oder ein Import wie in 1. durchgeführt worden sein, damit die aktuellen Einstellungen in den Mandantenproperties gespeichert wurden.
3. Kopieren Sie aus den Eigenschaften des Mandanten das LdapPassword und fügen Sie dieses in der erzeugten LdapParamDomain ein. Das verschlüsseltes Passwort kann auch mit dem XML-Import des Skriptes LdapEncryptPassword.xml aus dem Verzeichnis server\scriptlibs\Ldap\tools gebildet werden. Ein Skript zur Entschlüsselung LdapDecryptPassword.xml findet sich in demselben Verzeichnis.
4. Wiederholen Sie die Schritte 1-3 für jede anzuschließende Domäne.
5. Erzeugen Sie ein neues Skript mit dem Namen prxClearLdapProperties. Im Feld Quellcode aus server/scriplibs tragen Sie den Wert Ldap/tools/clearLdapProperties ein. Speichern Sie das Skript mit Übernehmen und führen Sie es anschließend aus (Skript ausführen...).
6. Fügen Sie nun in dem LdapDomainInclude-Skript (s.o.) nach und nach die einzelnen LdapParamDomain_-Skripte hinzu und überprüfen Sie jeweils den Import des LdapJobs. Vergeben Sie dabei für jeden Eintrag einen entsprechenden identifizierenden Namen.
7. Erstellen Sie ggfs. bei den Eigenschaften des Mandanten das Property LdapAddConfigNameAsUserProperty mit dem Wert true und führen Sie einen Gesamtimport aus.