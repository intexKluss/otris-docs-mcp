---
title: "Authentifizierung und Autorisierung durch mTLS"
source: "https://otris.software/documents/manuals/books/grpc/m-tls.html"
---

# Authentifizierung und Autorisierung durch mTLS

gRPC verfügt über eine SSL/TLS-Integration und bietet entsprechende Schnittstellen zur Authentifizierung und Autorisierung durch mTLS (`mutual TLS authentication`), dabei werden Server sowie Client mittels TLS-Zertifikate verifiziert. Der DOCUMENTS-Manager stellt [[Handbücher/gRPC Schnittstelle/Der Wizard zum Erstellen der Zertifikate#der-wizard-zum-erstellen-der-zertifikate|einen Wizard]] zur Erstellung der Server-/Client-Zertifikate zur Verfügung.

Diese Dokumentation setzt Kenntnisse in der Funktionsweise von SSL/TLS und der Verwendung von digitalen Zertifikaten (X.509) voraus. Dargestellt werden hier die Konfigurationen des DOCUMENTS-Servers und Codebeispiele (in C++) für die Client-Anwendungen.


## Konfigurationen im DOCUMENTS-Server

Die TLS-Einstellung im DOCUMENTS-Server erfolgt über die folgenden Parameter in der Datei documents.ini:

1. Unter Windows $GRPC_CACert [INSTALLDIR]\certs\grpc\ca_cert.pem
$GRPC_ServerKey [INSTALLDIR]\certs\grpc\server_key.pem
$GRPC_ServerCert [INSTALLDIR]\certs\grpc\server_cert.pem
2. Unter Linux $GRPC_CACert /var/lib/documents5/server/certs/grpc/ca_cert.pem
$GRPC_ServerKey /var/lib/documents5/server/certs/grpc/server_key.pem
$GRPC_ServerCert /var/lib/documents5/server/certs/grpc/server_cert.pem

Nach der Einstellung muss der Server neu gestartet werden.


## Codebeispiele zur Client-Authentifizierung

Es gibt zwei Arte von Anmeldeinformationen:

1. Kanal-Anmeldeinformationen, die an den zugrunde liegenden gRPC-Kanal angehängt sind. Die Standardform der Kanalanmeldeinformationen verwendet die Clientzertifikat-Authentifizierung. In diesem Prozess stellt der Client ein TLS-Zertifikat bereit, wenn er die Verbindung herstellt, und dann überprüft der Server dieses Zertifikat, bevor er Aufrufe zulässt. Die TLS-Anmeldeinformationen können z.B. als Parameter von SslCredentialsOptions (in C++) wie folgt gesetzt werden: grpc::SslCredentialsOptions ssl_opts;
ssl_opts.pem_root_certs = read("ca_cert.pem");
ssl_opts.pem_private_key = read("myClient_key.pem");
ssl_opts.pem_cert_chain = read("myClient_cert.pem"); Diese Anmeldeinformationen werden beim Erstellen des Kanals übergeben und verifiziert: std::shared_ptr<grpc::ChannelCredentials> sslCreds = grpc::SslCredentials(ssl_opts); // Create a new Channel with SslCredentials
channel = grpc::CreateChannel("localhost:50050", sslCreds);
2. Aufruf-Anmeldeinformationen, die an einen Aufruf (oder ClientContext in C++) angehängt sind. Dazu gehören die DOCUMENTS bezogenen Angaben über principal, username, session_id und locale. Der folgende Code zeigt, wie man diese Informationen an den ClientContext anfügt: grpc::ClientContext context;
context.AddMetadata("principal", "dopaag");
context.AddMetadata("username", "schreiber");
context.AddMetadata("locale", "de");
context.AddMetadata("session_id", session_id); Dieser context wird dann an einen Aufruf wie folgt übergeben: grpc::Status status = scriptingStub->RunScript(&context, req, &res);