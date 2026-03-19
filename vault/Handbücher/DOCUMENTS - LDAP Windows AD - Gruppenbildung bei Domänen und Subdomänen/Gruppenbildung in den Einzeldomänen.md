---
title: "LDAP Windows AD - Gruppenbildung bei Domänen und Subdomänen"
source: "https://otris.software/documents/manuals/books/ldap-domain-doc/wizdocdomain/Domain-Subdomain.html#gruppenbildung-in-den-einzeldomaenen-"
---

# LDAP Windows AD - Gruppenbildung bei Domänen und Subdomänen


## Vorbemerkung

Für die '''Documents-LDAP-Kopplung''' müssen eine Reihe von Active-Directoy-Gruppen angelegt werden, aus deren Gruppenmitgliedern im Rahmen des Ldapimports dann  Documentsuser, Archivuser und Zugriffsprofile erzeugt werden.


## Vertrauensstellungen

Folgende Vertrauensstellungen müssen zwischen der übergordneten und untergeordneten Domäne eingerichtet sein, damit auf die Domänenobjekte für die Gruppenbildung und bei einem Login auf des Ldapobjekt es anzumeldenden Benutzers zugegriffen werden kann.


![](../wizdocdomainpics/vertrauen_1.png)

Abb. 1 - Vertrauensstellung übergeordnete Domäne


![](../wizdocdomainpics/vertrauen_2.png)

Abb. 2 - Vertrauensstellung untergeordnete Domäne


## Active-Directory- Gruppen


### Gruppenbildung in den Einzeldomänen

Die für den Import notwendigen Gruppen werden jeweils in den einzelnen Domänen erzeugt. Der LDAP-Import kann dann durch eine [Mehrdomänenkonfiguration](https://doku.otris.de/manuals/books/ldap-callbacks-doc/wizdoccallbacks/Konfiguration-Callbacks.html#mehrdomaenenkonfiguration-) erfolgen. Bei dieser Konfiguration muss für jede einzelne Domäne ein [LdapLogin und LdapPassword](https://doku.otris.de/manuals/books/ldap-callbacks-doc/wizdoccallbacks/Konfiguration-Callbacks.html#ldap-verbindung-) sowie die anderen Verbindungsdaten festgelegt werden.


### Domänenübergreifende Gruppenbildung

Die für den Import notwendigen Gruppen werden in der übergeordneten Domäne angelegt. Diesen Gruppen werden dann im AD Gruppen oder Benutzer aus den anderen Domänen als Mitglieder/Member hinzugefügt. Der *Active Directory Replikations*-Mechanismus sorgt dafür, dass die Mitgliedschaften automatisch aktualisiert werden.

Der LDAP-Import kann dann über eine [Wizard](https://doku.otris.de/manuals/books/ldap-wizard-doc/index.html), [Mappen-Konfiguration](https://doku.otris.de/manuals/books/ldap-mappe-doc/index.html) oder über ein [LDAP-Paramdomain-Skript](https://doku.otris.de/manuals/books/ldap-callbacks-doc/wizdoccallbacks/Konfiguration-Callbacks.html#ldapparamdomain) konfiguriert werden. Es wird dann beim Import nur eine (1) Ldapverbindung gegen die übergeordnete Domäne aufgebaut, wobei aber sichergestellt werden muss, dass der konfigurierte User für den LDAP-Lesezugriff sich auch in allen untergeordneten Domänen anmelden und Informationen auslesen kann.

Wenn für die Einzeldomänen ein bestimmter User für den Lesezugriff angemeldet werden muss, so kann in der Datei `LdapCallbackFunctions.js` im  *Callback*[callbackHostMapping](https://doku.otris.de/manuals/books/ldap-callbacks-doc/wizdoccallbacks/Konfiguration-Callbacks.html#callbacks) ein anderer LdapUser für den Lesezugriff auf diese Domäne festgelegt werden.


```javascript
function callbackHostMapping(dn){
	LOG.debug("Mapping callback for DN: " + dn);
	var parts = dn.match(/(.*)DC=subdomain,DC=corp,DC=ad,DC=example,DC=com$/);
	if(parts){
		var key = dn.replace(parts[1], "");
		LOG.debug("The DN: " + dn + " will be mapped to : DC=subdomain,DC=corp,DC=ad,DC=example,DC=com, Key:" + key);
		return {
			key: key,
			hostName: "subdomain.corp.ad.example.com",
			//loginDN for this "subdomain". User is able to login and read
			username: "CN=subuser2,OU=users,OU=submain,DC=subdomain,DC=corp,DC=ad,DC=example,DC=com",
			password: "********"
		}
	};
};
```

function callbackHostMapping(dn){
	LOG.debug("Mapping callback for DN: " + dn);
	var parts = dn.match(/(.*)DC=subdomain,DC=corp,DC=ad,DC=example,DC=com$/);
	if(parts){
		var key = dn.replace(parts[1], "");
		LOG.debug("The DN: " + dn + " will be mapped to : DC=subdomain,DC=corp,DC=ad,DC=example,DC=com, Key:" + key);
		return {
			key: key,
			hostName: "subdomain.corp.ad.example.com",
			//loginDN for this "subdomain". User is able to login and read
			username: "CN=subuser2,OU=users,OU=submain,DC=subdomain,DC=corp,DC=ad,DC=example,DC=com",
			password: "********"
		}
	};
};Für den LDAP-Import spielt der *Gruppenbereich/Group Scope* an sich keine Rolle. Die zu importierenden Gruppe kann also eine "lokale Domänengruppe", eine "Globale Gruppe" oder eine "Universale Gruppe" sein. Auf AD-Seite ist der *Group Scope* allerdings relevant um Gruppen oder User aus untergordneten Domänen als Mitglieder der Importgruppe hinzufügen. Dabei gelten folgende Regeln:

| Gruppenbereich | Mitglieder können sein | Kann Mitglied sein in |
| --- | --- | --- |
| Universal | "Benutzer" (Accounts) aus jeder Domäne, die in derselben Gesamtstruktur (domain forest) liegen. | In anderen universalen Gruppen, die in Domänen derselben Gesamtstruktur liegen (domain forest) |
|  | Globale Gruppen, die in derselben Gesamtstruktur (domain forest) liegen | Lokalen Domänengruppen, die in der derselben Gesamtstruktur (domain forest) liegen oder in Strukturen, für die eine Vertrauensstellung (trusting forest) existiert (*) |
|  | Andere universale Gruppen aus Domänen, die in derselben Gesamtstruktur (domain forest) liegen | Lokale Domänengruppen, die in derselben Gesamtstruktur liegen (domain forest) oder in Strukturen, für die eine Vertrauenstellung (trusting forest) existiert (*) |
| Global | "Benutzer" (accounts) aus derselben Domäne | Universale Gruppen aus Domänen derselben Gesamtstruktur (domain forest) |
|  | Andere globale Gruppen aus derselben Domäne | Andere globale Gruppen aus derselben Domäne |
|  |  | Lokale Domänen Gruppen, die in derselben derselben Gesamtstruktur (forest) liegen oder in Strukturen, für die eine Vertrauensstellung (trusted forest) existiert (*) |
| Lokal (in Domäne) | "Benutzer" (accounts) aus jeder Domäne oder aus einer Domäne in Vertrauenssstellung (trusted domain) (*) | Andere lokale Domänengruppe aus derselben Domäne |
|  | Globale Gruppen aus jeder Domäne oder Domänen in (trusted domain) Vertrauensstellung (*) |  |
|  | Universale Gruppen aus derselben Gesamtstruktur (domain forest) |  |
|  | Andere lokale Gruppen aus derselben Domäne |  |
|  | "Benutzer" (accounts), globale Gruppen und universale Gruppen aus anderen Strukturen und externer Domänen (external domains) (*) |  |

Teilweise Übers. d. Verf. des Abschnittes "Group Scope" aus der Microsoft Documentation  [Active Directory Security Groups](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/active-directory-security-groups).

Zu Gruppenbildungen, die mit **(*)** gekennzeichnet wurden s.u. ForeignSecurityPrincipal

Beim Hinzufügen von Gruppenmitgliedern aus einer Subdomäne muss der Suchpfad für die Subdomänenmitglieder eingestellt werden. Wenn der richtige Gruppenbereich bei der Hauptdomänengruppe (s.o.) gewählt wurde, wird die Subdomäne im Pfad mit angezeigt.


![](../wizdocdomainpics/subdomaingrpuser-pfad.png)

Abb. 3 - Hinzufügen von Gruppenmitgliedern aus Subdomänen

Anschließend können die konkreten Mitgliedern in der Subdomäne gesucht, ausgewählt und über den Button *OK* der Hauptdomänengruppe hinzugefügt werden.


![](../wizdocdomainpics/subdomaingrpuser-addmember-2.png)

Abb. 4 - Mitglieder aus Subdomäne suchen

Öffnet man in der Hauptdomänengruppe ein Gruppenmitglied aus der Subdomäne, so erscheint der Eigenschaftsdialog genauso, als ob man das Objekt in der Subdomäne direkt geöffnet hätte.


![](../wizdocdomainpics/subdomaingrpuser.png)

Abb. 5 - Gruppenmitglied öffnen

Nur Gruppen, die dergestalt gebildet wurden, werden bei der LDAP-Kopplung importiert.


### ForeignSecurityPrincipal

Bei Usern oder Gruppen, die aus Domänen mit Vertrauensstellung (trusted domain) gebildet wurden, ohne dass diese Domänen Teil der Gesamtstruktur (domain forest) sind, erfolgt das Hinzufügen von Mitgliedern im AD durch einen anderen Mechanismus. Statt des Objektes selbst wird dabei ein Stellvertreterobjekt erzeugt und dieses dann der Hauptdomänengruppe hinzugefügt. Diese Objekte mit der *objectClass ForeignSecurityPrincipal* können mit der LDAP-Kopplung nicht importiert werden, da die Ursprungsobjekte nicht direkt zur Verfügung stehen und ihre Eigenschaften daher nicht ausgelesen werden können.


![](../wizdocdomainpics/fsp_1.png)

Abb. 6 - ForeignSecurityPrincipal


![](../wizdocdomainpics/fsp_2.png)

Abb. 7 - objectClass - ForeignSecurityPrincipal