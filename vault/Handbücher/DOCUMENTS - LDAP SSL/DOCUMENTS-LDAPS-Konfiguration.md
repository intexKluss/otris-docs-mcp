---
title: "LDAPS-Kopplung (LDAP over TLS)"
source: "https://otris.software/documents/manuals/books/ldap-ssl-doc/wizdocssl/Konfiguration-SSL.html#documents-ldaps-konfiguration-"
---

# LDAPS-Kopplung (LDAP over TLS)


## Voraussetzungen

*Documents* unterstützt ab der Version 5.0d HF1 (#2065) LDAP OVER SSL.

Vorausgesetzt wird zunächst, dass auf dem AD LDS Server LDAP OVER SSL aktiviert wurde und dass eine LDAP-Connection über TLS/SSL hergestellt werden kann. Dies kann auf dem AD über die Kommandozeile mit dem Programm „ldp" überprüft werden:


![](../wizdocsslpics/ldp.png)

 Verbinden -> SSL"" title="Über ldp -> Verbinden -> SSL">
	Abb. 1 - Über ldp -> Verbinden -> SSL

Ein erfolgreicher SSL-Verbindungsaufbau wird entsprechend protokolliert.

Im Weiteren wird vorausgesetzt, dass man mit dem Einrichten und Konfigurieren des LDAP-Jobs auf dem Standardport 389 (unverschlüsselt) vertraut ist (z.B. über den LDAP Konfigurations-Wizard im *Documents*-Manager oder über die Konfigurationsmappe).

Im Folgenden werden nur die Punkte aufgeführt bei denen es zu Abweichungen zur LDAP-Standardkonfiguration kommt:

- Exportieren der notwendigen Base64-Zertifikatsdatei für die TLS/SSL Verbindung zwischen dem Documents-Server und dem AD LDS.
- Prüfen der Zertifikate mit OpenSSL vom Hostrechner des Documents-Server aus
- Testen der Verbindungsparameter und Konfiguration des Documents-Server zur Verwendung von TLS/SSL.


## Zertifikatskette des AD LDS

Im Folgenden wird ausgehend vom SSL-Zertifikat des AD LDS Servers eine „Zertifikats"-Datei im Base64-Format für den *Documents*-Server erzeugt.


![](../wizdocsslpics/cert1.png)

Abb. 2 - SSL - Zertifikat des LDAP-Servers

In der Abbildung oben wird das SSL-Zertifikat des AD-Rechners mit dem Namen „3-AD-Server" gezeigt. Ausgestellt wurde das Zertifikat von der CA „2-Zwischen-CA", die ihrerseits durch „1-Root-CA" zertifiziert wurde. Der *Documents*-Server benötigt zur Verifikation der Verbindung nur das Root-CA, welches im Folgenden exportiert wird:

**Wichtiger Hinweis:**

Es muss ausschließlich das oberste Zertifikat (1-Root-CA) exportiert werden.

Ein korrekt konfigurierter LDAPS-Server liefert mögliche Zwischenzertifikate beim TLS/SSL-Handshake implizit aus. Falls durch fehlerhafte Konfiguration dies nicht erfolgt, können in der Base64-Zertifikatsdatei des Root-Zertifikats weitere Zwischenzertifikate miteingefügt werden.

Anhand des Zertifikates wird in wenigen Schritten eine „Base64-Zertifikats"-Datei erstellt, die dann auf dem *Documents*-Server hinterlegt werden muss.

1. Das Zertifikat „3-AD-Server" am Ende der Zertifikatskette und mögliche Zwischenzertifikate (hier „2-Zwischen-CA") müssen nicht weiter beachtet werden. Abb. 3 - Das Root-Zertifikat auswählen und anzeigen
2. Auf dem Detaildialog für das Zertifikat „1-Root-CA" kann nun über den Button „In Datei kopieren" ein Zertifikatsexport angestoßen werden. Abb. 4 - Auf dem geöffneten Root-Zertifikat einen Zertifikatsexport starten
3. Das Zertifikat „Base 64 codiert X.509 (.CER)" z.B. in die Datei „adroot.cer" exportieren. Abb. 5 - Zertifikatsexport Base-64-codiert veranlassen
4. (optional) Die Datei adroot.cer kann in adroot.pem umbenannt werden (das Base-64-codiert X.509 (.CER) Format entspricht dem PEM-Format).

Die adroot.pem muss dann dem *Documents*-Server so zur Verfügung gestellt werden, dass dieser darauf zugreifen kann, indem man sie beispielsweise im Serververzeichnis ablegt.


## Prüfen der Zertifikate

DOCUMENTS verwendet die OpenLDAP-Library für dem Zugriff auf den LDAP-Server. Die OpenLDAP-Library verwendet intern OpenSSL, um eine TLS/SSL verschlüsselte Verbindung aufzunehmen. Bevor der DOCUMENTS-Server für LDAPS konfiguriert wird, sollte deshalb mit OpenSSL geprüft werden, ob ein erfolgreicher Verbindungsaufbau zum LDAPS Server mit dem oben erzeugten Zertifikat möglich ist. Dafür liegt im Verzeichnis `documents5\addons\ssltools` die Datei  `openssl.exe`  mit dem Aufruf-Wrapper `openssl_wrapper`.bat. Anbei wird die Prüfung des Zertifikates am Beispiel des LDAP-Servers w12dopaag.dopaag.local dargestellt:


![](../wizdocsslpics/cert11.png)

Abb. 6 - Beispielzertifikat w12dopaag.dopaag.local

Das Root-Zertifikat  `dopaag-W12DOPAAG-CA-1` wurde als Base-64-codierter X.509 Export erstellt (`dopaag-w12dopaag-ca1.cer`) und auf den DOCUMENTS Server Host kopiert (`c:\Program Files\Documents5\server\dopaag-w12dopaag-ca1.cer`).

Auf dem DOCUMENTS Server Host wird eine Eingabeaufforderung (`cmd`) gestartet und in das Verzeichnis  `c:\Program Files\documents5\addons\ssltools` gewechselt. Mit dem folgenden Befehl verbindet man sich mit dem LDAPS Server und kann man sich die Zertifikatskette anzeigen lassen.


### Zertifikatskette

`openssl_wrapper.bat s_client -showcerts -connect {host:port}`


![](../wizdocsslpics/certchain_dopaag.png)

Abb. 7 - Zertifikatskette w12dopaag.dopaag.local

In der Certificate chain sieht man, dass das Zertifikat für den Host `w12dopaag.dopaag.local` ausgestellt wurde und dass es von `dopaag-W12DOPAAG-CA-1` ausgestellt worden ist. Es kommen noch verify Fehler, da wir dem OpenSSL das Root-Zertifikat noch nicht übergeben haben und OpenSSL das Zertifikat für `w12dopaag.dopaag.local` nicht überprüfen kann.

Typische Fehler, die hier auftreten können:

- 34359836736:error:02002074:system library:connect:Connection timed out:crypto/bio/b_sock2.c:110: Connection timed out: falscher Port wurde angegeben oder eine Firewall-Regel fehlt

Im nächsten Schritt wird nun überprüft, ob das vom LDAPS Server zurück gegebene Zertifikat mit dem Root-Zertifikat verifiziert werden kann.


### LDAPS Zertifikat verifizieren

`openssl_wrapper.bat s_client -showcerts -CAfile {root_cert_dateiname} -connect {host:port} `


![](../wizdocsslpics/cert_verify_dopaag.png)

Abb. 8 - Zertifikat verifizieren w12dopaag.dopaag.local

Hier sind keine Verifizierungs-Fehler (verify error) mehr vorhanden. OpenSSL konnte mit dem übergebenen Root-Zertifikat das zurückgegebene Zertifikat des LDAPS Servers überprüfen.

Typische Fehler, die hier auftreten können:

- der Hostname muss dem CN entsprechen, sonst Abb. 9 - Zertifikat Error Hostname
- es wird ein falsches Zertifikat zurückgegeben Das kann z.B. auftreten, wenn vor dem/den LDAPS Servern ein Load-Balancer installiert ist und man sich gegen den Load-Balancer verbindet. Dann muss der Load-Balancer sein eigenes Zertifikat zurückgeben und nicht das Zertifikat des verbundenen LDAPS Servers. Dies tritt bei einfachen Load-Balancern auf, die nur ein Port-Forwarding machen.
- das Zertifikat des LDAPS Servers hatte eine Zertifikatskette mit Zwischenzertifikaten (intermediate certificate) Ein korrekt konfigurierter LDAPS Server liefert auch alle Zwischenzertifikate der Zertifikatskette aus. Wenn dies nicht gemacht wird, besteht nur der Workaround die Zwischenzertifikate analog dem Root-Zertifikat zu exportieren und alle Zertifikate in eine gemeinsame Datei .cer zu kopieren.

Wenn es aus technischen Gründen nicht möglich ist, den LDAPS Server korrekt zu konfigurieren, dann hat man die Möglichkeit die Zertifikatsprüfung in DOCUMENTS für LDAPS abzuschalten. Dies geschieht über die Mandanten-Eigenschaft: `LdapIgnoreCertError=true`
Dann ist die Kommunikation immer noch verschlüsselt, aber ein Man-In-The-Middle Angriff wäre nun möglich.

Die Abschaltung der Zertifikatsprüfung sollte immer nur das letzte Mittel sein und auch ausschließlich im IntraNet anzuwenden.


## DOCUMENTS-LDAPS-Konfiguration

Zur Prüfung muss zunächst das Testskript „otrTestLdapConnection.xml" importiert (`Hauptmenüzeile -> Servereinstellungen -> XML-Import`) werden. Die Datei wird mit ausgeliefert und befindet sich im Verzeichnis `\server\scriptlibs\Ldap\`.


![](../wizdocsslpics/cert7.png)

Abb. 10 - XML-Import der otrTestLdapConnection.xml

Anschließend müssen die Verbindungsdaten als Script-Parameter konfiguriert und das Skript ausgeführt werden. (Bitte keine Änderungen am Skript-Quelltext durchführen, da es signiert ist und damit auch ohne Scripting-Lizenz ausführbar ist.)


![](../wizdocsslpics/cert8.png)

Abb. 11 - Verbindungsdaten für den SSL-Zugriff

Wenn die Verbindung geöffnet werden konnte, so wird im Serverfenster und auf dem Client die folgende Meldung ausgegeben:

Verbindung hergestellt mit [Domain-Name]

Kann die Verbindung nicht hergestellt werden, so wird die Fehlermeldung angezeigt, die aus der *OpenLDAP/OpenSSL*-Schnittstelle an den Server weitergereicht wurde.

**Wichtiger Hinweis**

Wenn Änderungen am caCertFile oder anderen LDAPS-Parametern vorgenommen wurden, ist es notwendig den *Documents*-Server neu zu starten, da die *OpenLDAP/OpenSSL*-Schnittstelle die Zertifikate und Einstellungen cached!

Wenn der Verbindungstest erfolgreich war, so müssen für den LDAP-Job und das LDAP-Logon im Weiteren die SSL-spezifischen Parameter als Eigenschaften am Mandanten hinterlegt werden, sofern eine LDAP-Version < 2.2.2 zum Einsatz kommt. Ab der LDAP Version 2.2.2 werden diese Parameter bei der Konfiguration durch den Wizard oder bei der mappenbasierten Konfiguration automatisch angelegt.


![](../wizdocsslpics/cert9.png)

Abb. 12 - LDAP-SSL Eigenschaften am Mandanten

Optional kann die Konfiguration im Script `\server\scriptlibs\Ldap\LdapParamDomain.js` vorgenommen werden (z.B. wenn mehrere LDAPS-Server angesprochen werden müssen).


![](../wizdocsslpics/cert10.png)

Abb. 13 - Skript "LdapParamDomain" mit den SSL-Parametern „enableSSL, tcpPort, caCertFile

oder falls die LDAP-Scripte in den *Documents*-Manager importiert wurden (XML-Import: LDAP_Import.xml), dann muss die Konfiguration im *Documents*-Manager im PortalScript „LdapParamDomain" erfolgen.

Ab der Serverversion *5.0h HF2* kann auch der Windows-Zertifkatsspeicher direkt verwendet werden.

**Hinweis ab Serverversion 5.0h HF2:**

Wenn in der `documents.ini` im Serververzeichnis der folgende Eintrag gesetzt ist, so kann die Angabe einer Zertifikatsdatei unterbleiben:
`CAPath WinCertStore`
Bei Serverstart werden die CA-Zertifikate aus dem Windows-Zert-Store in das Verzeichnis `/server/certs` exportiert und stehen damit für *OpenSSL* zur Verfügung. Das benötigte Zertfikat muss sich natürlich bereits im Zertifikatsspeicher befunden haben, damit eine SSL-Verbindung hergestellt werden kann.

Wird eine Zertifikatsdatei im Wizard oder der Konfigurationsmappe eingetragen, so wird diese auch verwendet. Der Eintrag in der Ini-Datei wird dann nicht weiter beachtet.