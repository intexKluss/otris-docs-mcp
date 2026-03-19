---
title: "Adobe Sign Anbindung"
source: "https://otris.software/documents/manuals/books/otrsign/adobesign.html"
---

# Adobe Sign Anbindung


## Konfiguration einer Applikation

Die Integration von Adobe Sign in Documents wird per Acrobat Sign REST-API mit OAuth Konfiguration bereitgestellt. Um die REST-API verwenden zu können, müssen Acrobat Sign Solutions für Teams zur Verfügung stehen, weitere Informationen können hier entnommen werden: [AdobePricing](https://www.adobe.com/de/sign/pricing/plans.html).

**Hinweis:** Die Funktionalität kann per Adobe Developer-Account getestet werden, dazu kann auf [AdobeDeveloperAccount](https://www.adobe.com/de/sign/developer-form.html) eine Registrierung vorgenommen werden. Wurde die Registrierung abgeschlossen, können die nachfolgend dargestellten Einstellungen im Developer-Account ebenfalls eingerichtet werden. Bei mit einem Developer-Account vorgenommenen Signaturen werden von Adobe auf den Unterschriftsdokumenten automatisch Wasserzeichen aufgebracht "[DEMO USE ONLY]".

Melden Sie sich mit dem Adobe-Konto an, das für die Konfiguration vorgesehen ist.

Um herauszufinden, in welcher Umgebung sich Ihr Konto befindet, überprüfen Sie die URL. Der Umgebungsbezeichner (Shard) befindet sich in der URL-Adresse, direkt vor dem Teil adobesign.com (oder echosign.com). Diese Umgebungsinformation wird später benötigt.


![AdobeSign-Shard](images/adobesign-shard.png)

Abb. 1 - Umgebungsbezeichner für Konto

Im Menü **Konto** muss auf API-Anwendungen gewechselt werden, um eine neue API-Anwendung zu erstellen (+ Symbol).


![AdobeSign-API-Add](images/adobesign-api-add.png)

Abb. 2 - Menü API-Anwendungen

Für die Anwendung ist ein Name und ein Anzeigename anzugeben, diese Angaben sind frei wählbar. Als Domäne muss die Einstellung **KUNDE** gewählt werden.


![AdobeSign-API-Create](images/adobesign-api-create.png)

Abb. 3 - API-Anwendung erstellen

Die neue Anwendung wird in der Liste angezeigt. Per Markierung der Anwendung werden die Menüs zur Anzeige/Bearbeitung, Aktivierung/Deaktivierung und OAuth-Konfiguration eingeblendet.


![AdobeSign-API-New](images/adobesign-api-new.png)

Abb. 4 - Liste API-Anwendung

Die Anwendung ist über **Anzeigen/Bearbeiten** zu öffnen, um die Anwendungs-ID und Client Secrets anzeigen zu lassen. Diese Informationen werden später benötigt.


![AdobeSign-API-Information](images/adobesign-api-information.png)

Abb. 5 - Anzeige Anwendungs-ID und Client Secret

Danach sind über das Menü **OAuth-Konfiguration für die Anwendung** weitere Einstellungen vorzunehmen.


![AdobeSign-API-OAuth](images/adobesign-api-oauth.png)

Abb. 6 - OAuth-Konfiguration für die Anwendung

In dem Textfeld **URI umlenken** muss eine URL eingetragen werden, welche dem folgenden Aufbau folgt:

- URI: https://<HOST>:<PORT>/documents<5>/srv/GenericRedirectReceiver/service/AdobeSign

**Hinweis:**  Für die Platzhalter `<HOST>` und `<PORT>` müssen Werte eingetragen werden, welche zu der Documents-Installation (Tomcat), ggf. auch mit einem vom Standard abweichenden SSL-Port, passen. Bei Linux-Installationen für Version Documents 5 muss im Pfad "documents5" angegeben werden, bei Windows-Installationen (Documents 5) und Installationen mit Version documentsOS (Windows und Linux) muss im Pfad "documents" angegeben werden. Die restlichen Angaben sind fix.

Ausschließlich die im vorherigen Screenshot dargestellten Bereiche (scopes) müssen jeweils mit dem Modifikator **account** aktiviert werden, dies betrifft:

- user_read
- user_login
- agreement_read
- agreement_write
- agreement_send
- widget_read
- library_read


## Verknüpfen einer Adobe Sign Applikation mit Documents

Zuerst muss über den Menüpunkt "Apps und Dienste" (vormals "Externe Anbieter") eine neue Applikation angelegt werden (siehe [Registrieren von Applikationen](install-configure-d6.html#externe-anbieter)). Dabei sind mehrere Optionen zu konfigurieren. Teilweise müssen die aus dem vorherigen Schritt (Konfiguration einer Applikation) notierten Informationen verwendet werden.

- Client ID: Entspricht der notierten "Anwendungs-ID".
- Client Secret: Entspricht dem notierten "Client Secret".
- Shard: Entspricht der notierten "Umgebungsinformation".
- Technical User: Der Loginname des Documents-Benutzers, welcher später mit dem technischen Benutzer auf Seiten von Adobe Sign verbunden wird. Dies sollte in Documents am Besten auch ein technischer Benutzer sein (z.B. der Redakteur, mit welchem die Applikation gerade angelegt wird).


## Verknüpfen von Adobe Sign Benutzern mit Documents

Alle Benutzer, welche aus Documents heraus Signaturanforderungen über Adobe Sign verschicken möchten, müssen über den Menüpunkt "Apps und Dienste" (vormals "Externe Anbieter") ihr Adobe Sign-Konto verbinden (siehe [Verbinden von Benutzerkonten](install-configure-d6.html#verbinden-von-benutzerkonten)).

Neben den normalen Benutzern muss auch ein technisches Benutzerkonto verbunden werden. Da über dieses Konto alle Statusänderungen abgefragt und das final signierte Dokument heruntergeladen wird, muss das Konto bei AdobeSign administrative Berechtigungen besitzen (Es werden Scopes mit dem Bereichsmodifikator ":account" angefragt. Dies ist nur einem Kontoadministratoren möglich.). Anschließend ist dieses Konto mit dem Documents-Benutzer zu verbinden, welcher in den Applikations-Einstellungen als "Technical User" eingetragen wurde.