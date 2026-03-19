---
title: "Multi-Solution Features"
source: "https://otris.software/documents/howto/multi-solution/multi-solution.html"
---

# Multi-Solution Features

Mit dem Multi-Solution Feature können ab Version **Documents 5.0g** verschiedene
Mandanten (Lösungen) **einer Documents-Installation** miteinander verbunden
werden, folgende Features werden bei entsprechender Konfiguration unterstützt:

- schneller Wechsel von einer zur anderen Lösung im Webclient
- Darstellung und Verknüpfung von Inhalten aus anderen Lösungen im Webclient
- Synchronisation von Benutzern

**Hinweis:** Soll eine Verbindung von Mandanten (Lösungen)
**unterschiedlicher Documents-Installationen** stattfinden, kann dieses
Feature nicht benutzt werden, in diesem Fall wird die Verwendung von
**DocumentsRemoteJSON** empfohlen, siehe dazu die entsprechende Dokumentation
in der [Portalscript API](https://otris.software/documents/api/portalscript/DocumentsRemoteJSON.html).

Nachfolgend dargestellte Beispiele beziehen sich auf die
Demomandanten **relations** und **dopaag**.


## Multi-Solution Einrichtung


### Voraussetzungen

Damit ein Benutzer im Webclient zwischen verschiedenen Mandanten wechseln kann,
sind folgende Voraussetzungen für den Benutzer in allen Lösungen notwendig:

- Verwendung des gleichen Passworts in allen Mandanten, in die der Benutzer wechseln darf
- Zuweisung einer named-Lizenz in allen Mandanten, in die der Benutzer wechseln darf

**Hinweis:** In allen Mandanten, in die Benutzer wechseln können, sollte
dasselbe Layout (z.B. `baseFeatureConfigs=design20`) aber ggf.
unterschiedliche Farbeinstellungen (z.B. `skinBase` bzw. `skinSignalColor`)
verwendet werden, Beispiel:

| Mandant | Globale Eigenschaft | Bemerkung |
| --- | --- | --- |
| relations, dopaag | baseFeatureConfigs=design20 | Verwendung in beiden Mandanten, um Benutzern gleiche Navigationen zu ermöglichen |
| dopaag | skinBase=lightgray | geänderte Einstellung für diesen Mandanten zur besseren Unterscheidbarkeit |
| dopaag | skinSignalColor=#0aa1e2 | geänderte Einstellung für diesen Mandanten zur besseren Unterscheidbarkeit |


### Konfigurationen


#### Eigenschaften am Mandanten


##### Eigenschaften für den Wechsel zwischen Mandanten

An allen Mandanten, die für das Multi-Solution Feature verwendet werden sollen,
ist die Eigenschaft **principalSwitchKey** mit demselben Wert zu setzen, z.B. `principalSwitchKey=demo`.
Für den Fall, dass mehr als 2 Mandanten vorliegen und aus einem bestimmten
Mandanten nur in genau einen anderen Mandanten gewechselt werden soll, kann die
Eigenschaft **trustedSwitchPrincipals** als kommaseparierte Liste von
*Mandantennamen* verwendet werden, z.B.:

| Mandant | Mandanteneigenschaft | Wechsel |
| --- | --- | --- |
| M1 | principalSwitchKey=demo | Wechsel in alle Mandanten mit derselben Eigenschaft erlaubt |
| M2 | principalSwitchKey=demo | Wechsel in alle Mandanten mit derselben Eigenschaft erlaubt |
| M3 | trustedSwitchPrincipals=M2 | Wechsel nur in M2 erlaubt |
| M4 | trustedSwitchPrincipals=M2,M3 | Wechsel nur in M2 und M3 erlaubt |

Wenn der Wechsel der Mandanten nur für Benutzer bestimmter Zugriffsprofile
ermöglicht werden soll, kann die Eigenschaft **principalSwitchAccessProfile**
verwendet werden. Wird die Eigenschaft verwendet, sind die o.a.
Eigenschaften *principalSwitchKey* bzw. *trustedSwitchPrincipals* nicht
notwendig. Der Wert der Eigenschaft hat dann jeweils folgenden Aufbau:
*Mandantenname:Profilname*. Die nachfolgende Tabelle stellt verschiedene
Konfigurationsvarianten dar.

| Mandant | Zugriffsprofile | Eigenschaft |
| --- | --- | --- |
| M1 | AP_A1, AP_A2 | principalSwitchAccesProfile=L2:AP_B, L3:AP_C |
| M2 | AP_B | principalSwitchAccesProfile=L1:AP_A1 |
| M3 | AP_C | principalSwitchAccesProfile=L1:AP_A2 |

- alle Benutzer im Zugriffsprofils AP_A1 können in Mandant M2 wechseln und zurück
- alle Benutzer im Zugriffsprofils AP_A2 können in Mandant M3 wechseln und zurück
- alle Benutzer im Zugriffsprofils AP_A1 dürfen NICHT in Mandant M3 wechseln
- alle Benutzer im Zugriffsprofils AP_A2 dürfen NICHT in Mandant M2 wechseln

Sind die Voraussetzungen erfüllt und die o.a. Einstellungen nach Bedarf
getroffen, können Benutzer im Webclient über einen neuen Schalter direkt
in einen anderen Mandanten wechseln:


Abb. 1 - Wechsel aus Mandant dopaag nach relations


Abb. 2 - Wechsel aus Mandant relations nach dopaag


##### Einstellungen für die Synchronisation von Benutzern

Wenn optional außerdem eine Synchronisation von Benutzern zwischen den
verschiedenen Mandanten möglich sein soll, kann zusätzlich die
Eigenschaft `principalSwitchAllowSyncUser=1` gesetzt werden. In diesem Fall
werden Änderungen an Benutzern in andere Mandanten der Gruppe *(principalSwitchKey)*,
des einzelnen Mandanten *(trustedSwitchPrincipals)* oder der
Profilkonfiguration *(principalSwitchAccesProfile)* übertragen.

Eine optional am *Benutzer* gesetzte Eigenschaft **principalSwitchAllowSyncUser=0**
überschreibt für diesen Benutzer die gleichnamige *Mandanteneigenschaft* und
nimmt diesen Benutzer dann von der Synchronisation aus.

**Hinweis:** Die Eigenschaft muss an allen Mandanten gesetzt werden,
bei denen die Synchronisation durchgeführt werden soll.

Standardmäßig werden alle Benutzer-Attribute außer den Benutzereigenschaften in
den jeweils anderen Mandanten übertragen.
Darüber hinaus wird standardmäßig synchronisiert:

- das Passwort von Benutzern
- die Eigenschaft $TwoFactorAuthentication
- die erweiterten Eigenschaften (CustomProperty)
CustomProperty.APIKeys,
CustomProperty.TOTPKey
und CustomProperty.2FARecoveryCodes

Mit der documents.ini Direktive `$principalSwitchSyncUserAttributes` kann eine
kommaseparierte Liste von Benutzerattributen oder Benutzereigenschaften
angegeben werden, für die eine oder keine (anzugeben mit einem führenden `-`)
Synchronisation erfolgen soll, z.B.:

`$principalSwitchSyncUserAttributes $noLdapCheck, CustomProperty.defaultExtendedSearchQuery,-particulars.eMail`

- Benutzerattribut E-Mail Adresse wird nicht synchronisiert (-particulars.eMail)
- Benutzereigenschaft noLdapCheck wird synchronisiert
- Erweiterte Benutzereigenschaft / CustomProperty defaultExtendedSearchQuery wird synchronisiert

**Hinweis:** Die o.a. Synchronisation bezieht sich nur die Neuanlage bzw.
Änderungen an Benutzern. Sollen bestehende Benutzer aus einem Mandanten in
einen anderen Mandanten initial synchronisiert werden, kann die
*Wartungsoperation***principalSwitchSyncUser** benutzt werden.

Wird ein **Verzeichnisdienst** zur Anlage von Benutzern verwendet
(z.B. Microsoft Active Directory oder Microsoft Azure AD), wird dringend
empfohlen, diesen Verzeichnisdienst nur in einem Mandanten zu konfigurieren
um Benutzer zu importieren und in dieser Lösung und den anderen Lösungen
jeweils bei Bedarf die Eigenschaft *principalSwitchAllowSyncUser=1* zu setzen.
Zusätzlich sind die Einstellungen für den automatischen Login bzw.
SingleSignOn (SSO) zu beachten.


#### Optionale Eigenschaften

Optional können folgende zusätzlichen **Globalen Eigenschaften***(Documents Einstellungen / Eigenschaften)* im jeweiligen Mandanten gesetzt
werden:

| Name der Eigenschaft | Standardwert | Beschreibung |
| --- | --- | --- |
| principalSwitchName | Mandantenname bzw. documentsLoginHeader | Name der in der Liste der Apps angezeigt wird |
| principalSwitchIcon |  | App-Icon, optional mit Farbe, z.B.: mdi:mdi-bank;color:#0aa1e2; |


## Multi-Solution Datendarstellung

Nachfolgend werden Beispiele dargestellt, wie auf Daten von verschiedenen
Mandanten (Lösungen) innerhalb einer Documents-Installation zugegriffen
werden kann. Eine Integration ist möglich:

- in Dashboards
- bei Gadgets
- als File-Presenter


### Multi-Solution Dashboard


#### Konfiguration der Kachelauswahl

Die Konfiguration der Kachelauswahl für den jeweils anderen Mandanten wird
über die globale Eigenschaft **dashboardRemoteTiles** vorgenommen,
folgende Einstellungen sind möglich:

- true/1: Alle Kacheln stehen zur Auswahl (Standardeinstellung)
- false/0: Die Kacheln des Mandanten stehen nicht zur Auswahl
- marked: Nur markierte Kacheln stehen zur Auswahl
- privatefolder: Die privaten Ordner stehen zur Auswahl

Eine Kombination von `marked` und `privatefolder` ist möglich, beide
Schlüsselwörter müssen dann kommasepariert angegeben werden.
Wird das Schlüsselwort `marked` verwendet, kann am jeweiligen Script bzw.
am Ordner die Eigenschaft `tileRemote=1` die Anzeige aktiviert werden.

Um z.B. die privaten Ordner und die Grafik *Sales Pipeline* aus dem
Mandanten *relations* im Dashboard des Mandanten *dopaag* anzubieten,
ist wie folgt vorzugehen:

- im Mandanten relations die globale Eigenschaft dashboardRemoteTiles=marked,privatefolder setzen
- im Mandanten relations am Script Gadget_opportunityStatsHTML die Eigenschaft tileRemote=1 setzen

Im Mandanten **dopaag** stehen danach die *privaten Ordner* und das
*Sales Pipeline HTML-Gadget* aus dem Mandanten **relations** im Dashboard
zur Verfügung:


Abb. 3 - Dashboardkonfiguration


Abb. 4 - Dashboard mit Kacheln aus anderem Mandanten

In den Listenansichten des Quellmandanten (dopaag) kann per Klick auf einen
Eintrag (hier *Eingangskorb* bzw. *Zuletzt benutzt*) die jeweilige Mappe direkt
im Zielmandanten (relations) geöffnet werden.


### Multi-Solution Gadgets (Remote Gadgets)

Sogenannte *Remote Gadgets* ermöglichen die Anzeige von Gadgets aus anderen
Mandanten. Diese Gadgets können an allen Stellen eingebunden werden,
die Gadgets per Eigenschaft *gadgetConfig* ermöglichen,
die Ausführung des Gadgets-Skriptes erfolgt im Remote-Mandanten
(in diesem Mandanten muss das Script vorliegen), die Anzeige des Gadgtes
erfolgt im Ursprungsmandanten.

Die Eigenschaft gadgetConfig muss außer `gadgetScript` und `gadgetAction`
mindestens auch die Angabe für `gadgetRemotePrincipal` enthalten.
Im nachfolgenden Beispiel soll im Mandanten *relations* an einem Ordner eine
Liste mit Rechnungen aus dem Mandanten *dopaag* angezeigt werden,
es ist wie folgt vorzugehen:

- Script im Mandanten dopaag anlegen

Download: [Gadget_dopaag_showInvoices.js](Gadget_dopaag_showInvoices.js)

- neuen Ordner im Mandanten relations anlegen (Name und Bezeichnung frei wählbar, Typ: Öffentlich)
- Eigenschaft gadgetConfig mit folgendem Wert am Ordner hinterlegen:


```js
{
   gadgetScript: 'Gadget_dopaag_showInvoices',
   gadgetAction: 'showList',
   gadgetRemotePrincipal: 'dopaag'
}
```

{
   gadgetScript: 'Gadget_dopaag_showInvoices',
   gadgetAction: 'showList',
   gadgetRemotePrincipal: 'dopaag'
}Der Ordner sollte dann mit folgendem Inhalt dargestellt werden:


Abb. 5 - Remote Gadget in relations

Weitere Beispiele für die Verwendung von Remote Gadgets im Portalscripting
und im Webclient finden sich in der [Gadget API](https://otris.software/documents/api/gadgets/tutorial-remote-gadgets.html).


### Multi-Solution File-Presenter

Mit dem **FilePresenter-Gadget** ist es möglich, Mappen aus verschiedenen
Mandanten miteinander zu verknüpfen und Mappeninformationen anzuzeigen.
Im Beispiel sollen *Bestellungen (erpOrder)* aus dem Mandanten **dopaag**
mit *Angeboten (crmQuote)* aus dem Mandanten **relations** verknüpft werden.


#### Konfiguration

Im **relations-Mandanten** sind folgenden Anpassungen durchzuführen:

- Um die Referenz zum einer Bestellung zu speichern muss am Mappentyp crmQuote ein neues Feld orderId (Typ: String) angelegt werden. Die Option "in der Mappenansicht darstellen" sollte für das Feld deaktiviert werden.
- Danach legt man ein neues Register crmOrder (Bezeichner: Bestellung, Registertyp: Externer Aufruf) am Mappentyp an. Die folgenden Gadget-Konfiguration muss an diesem Register als Eigenschaft gadgetConfig hinterlegt werden:


```js
{
   // Dieses Script ist standardmäßig in der Installation enthalten
   gadgetScript: 'Gadget_FilePresenter',
   gadgetAction: 'show',
   // Feldname in dem der Referenzwert im "Source"-Mandanten gespeichert wird
   fieldName: 'orderId',
   // Name des "Remote"-Mandanten
   gadgetRemotePrincipal: 'dopaag',
   // "Remote"-Mappentyp
   fileType: 'erpOrder',
   // Feldname des Feldes das den Referenzwert im "Remote"-Mappentyp enthält
   refFieldName: 'erpId'
}
```

{
   // Dieses Script ist standardmäßig in der Installation enthalten
   gadgetScript: 'Gadget_FilePresenter',
   gadgetAction: 'show',
   // Feldname in dem der Referenzwert im "Source"-Mandanten gespeichert wird
   fieldName: 'orderId',
   // Name des "Remote"-Mandanten
   gadgetRemotePrincipal: 'dopaag',
   // "Remote"-Mappentyp
   fileType: 'erpOrder',
   // Feldname des Feldes das den Referenzwert im "Remote"-Mappentyp enthält
   refFieldName: 'erpId'
}Im **dopaag-Mandanten** sind folgende Anpassungen durchzuführen:

- Am Mappentyp erpOrder legt man ein Register crmQuote (Bezeichner: Angebote, Registertyp: Externer Aufruf) an. Die folgenden Gadget-Konfiguration muss an diesem Register als Eigenschaft gadgetConfig hinterlegt werden:


```js
{
   // Dieses Script ist standardmäßig in der Installation enthalten
   gadgetScript: 'Gadget_FilePresenter',
   gadgetAction: 'showList',
   // Name des "Source"-Mandanten
   gadgetRemotePrincipal: 'relations',
   // Name des Mappentyps im "Source"-Mandanten
   fileType: 'crmQuote',
   // Feldname in dem der Referenzwert gespeichert wird
   fieldName: 'orderId',
   // Feldname des Feldes das den Referenzwert enthält
   refFieldName: 'erpId'
}
```

{
   // Dieses Script ist standardmäßig in der Installation enthalten
   gadgetScript: 'Gadget_FilePresenter',
   gadgetAction: 'showList',
   // Name des "Source"-Mandanten
   gadgetRemotePrincipal: 'relations',
   // Name des Mappentyps im "Source"-Mandanten
   fileType: 'crmQuote',
   // Feldname in dem der Referenzwert gespeichert wird
   fieldName: 'orderId',
   // Feldname des Feldes das den Referenzwert enthält
   refFieldName: 'erpId'
}Im **relations-Mandanten** kann nun im Webclient zu einem Angebot eine
Bestellung aus dem **dopaag-Mandanten** zugeordnet werden:


Abb. 6 - Angebot (relations) im Lesemodus


Abb. 7 - Angebot (relations) im Bearbeitungsmodus mit Suchauswahl


Abb. 8 - Angebot (relations) mit zugeordneter Bestellung (dopaag)

Da zu diesem Zeitpunkt noch keine speziellen Templates konfiguriert sind,
wird eine Hinweismeldung anzeigt. Über den Referenz-Schalter kann direkt die
Bestellung im anderen Mandanten aufgerufen werden:


Abb. 9 - Bestellung (dopaag)) mit zugeordnetem Angebot (relations)


#### Anpassung der Darstellung für Mappeninformationen

Die Darstellung der Mappeninformationen erfolgt über am jeweiligen Mappentypen
definierte Dokumentenvorlagen. Die folgenden Vorlagennamen werden in der
angegebenen Reihenfolge automatisch verwendet, wenn diese am
Mappentypen existieren. Es besteht außerdem die Möglichkeit ein Gadget für
die Darstellung in der Referenzansicht zu verwenden.


##### Anpassung der Referenzansicht

Die Referenzansicht wird im *relations-Mandanten* für die Darstellung der
referenzierten Bestellungen aus dem *dopaag-Mandanten* verwendet.
Folgende Reihenfolge von möglichen Konfigurationen wird für
Referenzansichten geprüft:

- Eigenschaft filePresenterGadgetConfig am Mappentyp vorhanden (Darstellungsalternative über ein eigenes Gadget) oder
- Dokumentenvorlage mit dem Namen MAPPENTYPNAMEPresenter (z.B. erpOrderPresenter) am Mappentypen vorhanden oder
- Dokumentenvorlage mit dem Namen MAPPENTYPNAMECover (z.B. erpOrderCover) am Mappentypen vorhanden

Soll eine Darstellungsalternative als *filePresenterGadgetConfig*
verwendet werden, ist wie folgt vorzugehen:

- Eigenschaft filePresenterGadgetConfig mit folgendem Wert am Mappentypen erpOrder (dopaag) anlegen:


```js
{
   gadgetScript: 'Gadget_dopaag_filePresenter',
   gadgetAction: 'show'
}
```

{
   gadgetScript: 'Gadget_dopaag_filePresenter',
   gadgetAction: 'show'
}- Script Gadget_dopaag_filePresenter im Mandanten dopaag anlegen

Download: [Gadget_dopaag_filePresenter.js](Gadget_dopaag_filePresenter.js)

Wird im Mandanten *relations* das Angebot mit der zugeordneten Bestellung
aktualisiert, sollte folgende Darstellung vorliegen:


Abb. 10 - Referenzansicht mit Mappendaten als Gadget

Soll eine Dokumentenvorlage (`MAPPENTYPNAMEPresenter`) statt eines
Gadgets verwendet werden, ist wie folgt vorzugehen:

- Löschung einer ggf. vorhandenen filePresenterGadgetConfig am Mappentypen erpOrder (dopaag)
- Anlage einer Dokumentenvorlage mit dem Namen erpOrderPresenter am MappentypenerpOrder (dopaag), siehe Bild
- Als Datei kann das u.a. Beispiel erpOrder-Presenter.html verwendet werden


Abb. 11 - Dokumentenvorlage erpOrderPresenter

Download: [erpOrder-Presenter.html](erpOrder-Presenter.html)

Wird im Mandanten *relations* das Angebot mit der zugeordneten Bestellung
aktualisiert, sollte folgende Darstellung vorliegen:


Abb. 12 - Referenzansicht mit Mappendaten Template erpOrderPresenter

Soll eine Dokumentenvorlage (`MAPPENTYPNAMECover`) verwendet werden,
ist ähnlich vorzugehen:

- Löschung einer ggf. vorhandenen filePresenterGadgetConfig am MappentypenerpOrder (dopaag)
- Löschung einer ggf. vorhandenen Dokumentenvorlage erpOrderPresenter
- Erstellung einer neuen Dokumentenvorlage erpOrderCover, als Beispiel kann folgende Datei verwendet werden (mit diesem Template werden lediglich mehr Informationen dargestellt):

Download: [erpOrder-Cover.html](erpOrder-Cover.html)


##### Anpassung der Listenansicht

Die Listenansicht wird im *dopaag-Mandanten* für die Darstellung der
zugeordneten Angebote aus dem *relations-Mandanten* verwendet.
Folgende Reihenfolge von möglichen Konfigurationen wird für
Referenzansichten geprüft:

- Dokumentenvorlage mit dem Namen MAPPENTYPNAMEPresenterList (z.B. crmQuotePresenterList) am Mappentypen vorhanden oder
- Dokumentenvorlage mit dem Namen MAPPENTYPNAMEPresenter (z.B. crmQuotePresenter) am Mappentypen vorhanden oder
- Dokumentenvorlage mit dem Namen MAPPENTYPNAMECover (z.B. crmQuoteCover) am Mappentypen vorhanden

Soll eine Dokumentenvorlage (`MAPPENTYPNAMEPresenterList`) verwendet werden,
ist wie folgt vorzugehen:

- Anlage einer Dokumentenvorlage mit dem Namen crmQuotePresenterList am Mappentypen crmQuote (relations), siehe Bild
- Als Datei kann das u.a. Beispiel crmQuote-PresenterList.html verwendet werden


Abb. 13 - Dokumentenvorlage crmQuotePresenterList

Download: [crmQuote-PresenterList.html](crmQuote-PresenterList.html)

Wird im Mandanten *dopaag* die Bestellung mit dem referenzierten Angebot
aktualisiert, sollte folgende Darstellung vorliegen:


Abb. 14 - Listenansicht mit Mappendaten Template crmQuotePresenterList

**Hinweis:** Da im Beispiel einer Bestellung mehrere Angebote zugeordnet
werden können, werden über das Template nur wenige Daten dargestellt,
um die Übersichten kompakt bereitzustellen.

Analog zu diesem Beispiel kann den anderen Vorlagen
(`MAPPENTYPNAMEPresenter` bzw. `MAPPENTYPNAMECover`) vorgegangen werden.
Beispiele finden sich hier (mit diesen Templates werden lediglich mehr
Informationen dargestellt):

Download: [crmQuote-Presenter.html](crmQuote-Presenter.html)

Download: [crmQuote-Cover.html](crmQuote-Cover.html)


## Multi-Solution im Drop

Das Multi-Solution Feature kann auch in Documents Drop zum einfachen
Mandantenwechsel verwendet werden, dabei werden die beiden
Anmeldemethoden *Automatisch* und *Benutzername & Passwort* unterstützt.
Im Falle der *Automatischen Anmeldung* wird einmalig die Anmeldemaske
des Webclients aufgerufen, nach der Anmeldung automatisch wird ein
API-Key erzeugt, der bei zukünftigen Anmeldungen verwendet wird.
Im Falle von *Benutzername & Passwort* werden diese Informationen nicht
lokal gespeichert. Nach der Anmeldung erfolgt der Mandantenwechsel
ähnlich wie im Webclient:


Abb. 15 - Mandantenwechsel in Documents Drop

Bei Bedarf kann der Mandantenwechsel in Documents Drop mit der
*globalen Eigenschaft (Documents Einstellungen / Eigenschaften)*`DropShowPrincipalSwitch=false` für alle Benutzer deaktiviert werden.