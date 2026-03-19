---
title: "Der Wizard zum Erstellen der Zertifikate"
source: "https://otris.software/documents/manuals/books/grpc/wizard.html"
---

# Der Wizard zum Erstellen der Zertifikate

Zum Erstellen der Server-/Client-Zertifikate stellt der DOCUMENTS-Manager den Wizard `gRPC Zertifikate erstellen` unter dem Menü `Anwendung`/`Administration` für Redakteure bzw. `admin` zur Verfügung, dabei werden `openssl.exe` und `openssl.cnf` aus `[INSTALLDIR]\..\addons\ssltools` und die Konfigurationsdatei `openssl_grpc.cnf` aus `[INSTALLDIR]\certs\grpc` verwendet.


## Erstellen der Server-Zertifikate

Zum Erstellen der Server-Zertifikate muss man als `admin` angemeldet sein. Auf dem Dialog (s.u.) müssen der Common Name (CN) für ein Single-Domain-Zertifikat oder Subject Alternative Name (SAN) für ein Multi-Domain-Zertifikat, und Dauer der Gülgigkeit (Anzahl der Tage) des Zertifikats angegeben werden. Der Common Name (CN) des Zertifikats entspricht dem FQDN-Name bzw. dem Wins-Name des Servers. Für das SAN-Feld ist ein JSON-String wie folgt erwartet:


```json
{
    "DNS": [
        "www.example.com",
        "localhost"
    ],
    "IP": [
        "192.168.0.105",
        "127.0.0.1"
    ]
}
```

{
    "DNS": [
        "www.example.com",
        "localhost"
    ],
    "IP": [
        "192.168.0.105",
        "127.0.0.1"
    ]
}![genServerCert](img/genServerCert_CN.png)


![genServerCert](img/genServerCert_SAN.png)


Nach der erfolgreichen Erstellung stehen die folgenden .pem-Dateien im Verzeichnis `[INSTALLDIR]\certs\grpc` zur Verfügung:

- ca_key.pem
- ca_cert.pem
- server_key.pem
- server_cert.pem

Die Befehle, die der Wizard nacheinander durchführt, sehen wie folgt aus, wobei `-config <Pfad-auf-openssl.cnf>` nur unter Windows erforderlich ist.


```bash
#
# CA
#

# CA-Key
openssl ecparam -name prime256v1 -out ca_key.pem -genkey

# CA-Cert
openssl req -new -x509 -days 365 -key ca_key.pem -out ca_cert.pem -config <Pfad-auf-openssl_grpc.cnf> -extensions documents_v3_ca -subj "/CN=Documents gRPC CA"

#
# Server
#

# Server-Key + CSR
openssl req -new -newkey rsa:3072 -nodes -out server.csr -keyout server_key.pem -subj "/CN=localhost" -config <Pfad-auf-openssl.cnf>

# Sign Server-Cert using CA
openssl x509 -req -days 365 -in server.csr -CA ca_cert.pem -CAkey ca_key.pem -set_serial 01 -out server_cert.pem -extensions documents_server -extfile <Pfad-auf-openssl_grpc.cnf>
```

#
# CA
#

# CA-Key
openssl ecparam -name prime256v1 -out ca_key.pem -genkey

# CA-Cert
openssl req -new -x509 -days 365 -key ca_key.pem -out ca_cert.pem -config <Pfad-auf-openssl_grpc.cnf> -extensions documents_v3_ca -subj "/CN=Documents gRPC CA"

#
# Server
#

# Server-Key + CSR
openssl req -new -newkey rsa:3072 -nodes -out server.csr -keyout server_key.pem -subj "/CN=localhost" -config <Pfad-auf-openssl.cnf>

# Sign Server-Cert using CA
openssl x509 -req -days 365 -in server.csr -CA ca_cert.pem -CAkey ca_key.pem -set_serial 01 -out server_cert.pem -extensions documents_server -extfile <Pfad-auf-openssl_grpc.cnf>
## Erstellen der Client-Zertifikate

Auf dem Dialog (s.u.) zur Erstellung der Client-Zertifikate gibt es folgende Angaben zu füllen:

- Zertifikat für Mandant: Name des Mandanten, auf den das Client-Zertifikat beschränkt sein soll. Falls der admin angemeldet ist und das Feld leer lässt, wird ein serverweites Zertifikat erstellt. Für einen normalen Redakteur ist das Feld mit dem bei der Anmeldung angegebenen Mandanten vorbelegt und nicht änderbar. Um ein mandantenweites Client-Zertifikat zu erstellen, muss ein Mandant angegeben werden. Alle serverweite Client-Zertifikate werden direkt in das (ggfs. neu angelegte) Verzeichnis [INSTALLDIR]\certs\grpc\client gespeichert. Für die mandantenweiten Zertifikate wird jeweils ggfs. ein Unterverzeichnis mit dem Mandantennamen angelegt.
- Name des Client-Zertifikats: Serverweit eindeutiger Name des zu erstellenden Client-Zertifikats, z.B. myClient. Das erstellte Client-Key und Client-Zertifikat werden dann in der Datei myClient_key.pem bzw. myClient_cert.pem gespeichert.
- Dauer der Gültigkeit (Anzahl der Tage): Legt fest, wie lange das Zertifikat gültig sein soll.

![genClientCert](img/genClientCert.png)


Nach der erfolgreichen Erstellung stehen die folgenden .pem-Dateien im Verzeichnis `[INSTALLDIR]\certs\grpc\client` für serverweite bzw. im `[INSTALLDIR]\certs\grpc\client\principal_name` für mandantenweite Zertifikate zur Verfügung:

- myClient_key.pem
- myClient_cert.pem

Die Befehle, die der Wizard nacheinander durchführt, sehen wie folgt aus, wobei `-config <Pfad-auf-openssl.cnf>` nur unter Windows erforderlich ist.


```bash
# Client-Key + CSR CN=clientCertName[principal]
openssl req -new -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -out myClient.csr -nodes -keyout myClient_key.pem -subj "/CN=myClient[dopaag]" -config <Pfad-auf-openssl.cnf>

# Sign Client-Cert using CA
openssl x509 -req -days 365 -in myClient.csr -CA ca_cert.pem -CAkey ca_key.pem -set_serial 01 -out myClient_cert.pem -extensions documents_client -extfile <Pfad-auf-openssl_grpc.cnf>
```

# Client-Key + CSR CN=clientCertName[principal]
openssl req -new -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -out myClient.csr -nodes -keyout myClient_key.pem -subj "/CN=myClient[dopaag]" -config <Pfad-auf-openssl.cnf>

# Sign Client-Cert using CA
openssl x509 -req -days 365 -in myClient.csr -CA ca_cert.pem -CAkey ca_key.pem -set_serial 01 -out myClient_cert.pem -extensions documents_client -extfile <Pfad-auf-openssl_grpc.cnf>

## Herunterladen der Zertifikate

Mit dem Wizard kann man auch die Root-CA und die erstellten Client-Zertifikate auf die lokalen Rechnern herunterladen.

![downloadCert](img/downloadCert.png)