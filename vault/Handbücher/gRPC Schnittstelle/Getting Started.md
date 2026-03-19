---
title: "Getting started"
source: "https://otris.software/documents/manuals/books/grpc/getting-started.html"
---

# Getting started

Wie bereits in der Einleitung erwähnt muss der Server zuerst in der ini aktiviert werden. Danach müssen über den Manager Zertifikate zur Authentifizierung zwischen gRPC-Client und DOCUMENTS-Server erzeugt werden. Zuletzt soll in diesem Getting Started auch noch ein HelloWorld Beispiel implementiert werden.


## gRPC-Service aktivieren

Um den gPRC-Service zu aktivieren, ist der Parameter `$GRPCEnabled` in der Datei `[INSTALLDIR]\documents.ini` auf `true` zu setzen, wobei `[INSTALLDIR]` für das Server-Verzeichnis steht. Anschließend ist der DOCUMENTS-Server neu zu starten.


```bash
$GRPCEnabled true
```

$GRPCEnabled true
## Zertifikate erzeugen

Zum Erzeugen der Zertifikate wird ein Wizard mitgeliefert. Dieser Wizard ist unter [Wizard](wizard.html) ausführlicher beschrieben. Er befindet sich im DOCUMENTS Manager unter dem Punkt `gRPC Zertifikate erstellen` im Menü `Anwendung`/`Administration` und ist für den `admin` Benutzer sichtbar. Um zu starten genügen folgende Angaben.


### Server-Zertifikat erzeugen

Zuerst muss einmalig für den Server ein Zertifikat erzeugt werden. Das hier beschriebene Beispiel ist **nur für Entwicklungssysteme mit lokalem DOCUMENTS Server** verwendbar. Falls von außen mit dem Server kommuniziert werden soll müssen die Schritte in der ausführlichen Anleitung befolgt werden und es muss ein SAN Zertifikat generiert werden.

1. Mandantenlos mit dem admin-User anmelden und den Wizard wie oben beschrieben starten.
2. Im Wizard folgende Angaben machen
3. Auf "Server-Zertifikat erstellen" klicken
4. Folgende Meldung sollte ausgegeben werden
5. Die documents.ini um die im Dialog ausgegeben Einträge ergänzen und Server neu starten


### Client-Zertifikat erzeugen

Für jeden mit dem Server zu verbindenen gRPC-Client muss ein eigenes Zertifikat erzeugt werden. Dies geschieht über den gleiche Wizard, wie die Erzeugung der Server-Zertifikate. Dieses Vorgehen erstellt ein Serverweites Zertifikat. Um ein Mandantenspezifisches Zertifikat zu erstellen bitte die ausführliche Anleitung befolgen

1. Mandantenlos mit dem admin-User anmelden und den Wizard wie oben beschrieben starten.
2. Im Wizard folgende Angaben machen
3. Auf "Client-Zertifikat erstellen" klicken
4. Folgende Meldung sollte ausgegeben werden
5. Auf der letzten Seite die Root-CA und das generierte Client-Zertifikat jeweils mit einem Klick auf "Herunterladen" herunterladen
6. Es sollten nun die folgenden Dateien im Zielordner liegen:
helloworld_cert.pem
helloworld_key.pem
ca_cert.pem


## Implementierung eines HelloWorld Clients

Es gibt mehrere fertige Beispiel-Projekte, z.B. in .NET 6 und in node.js. Hier enthalten ist u.A. auch ein HelloWorld Beispiel des Typs "DOCUMENTS Hello World". Dieses bietet den einfachsten Einstieg.

1. Das gewünschte Projekt herunterladen (.NET 6, Node.js) und die Umgebung wie in der README beschrieben einrichten und starten
2. Der Code in den jeweiligen Hello World Projekten folgt folgender Struktur
loadProtos() -> Proto-Definitionen laden (nur node.js)
loadCerts() -> Zertifikate laden
makeMetadata() -> Sog. Metadata erzeugen, welche den Kontext der Anfragen enthält (Mandant, User, Session-Id, Sprache und co.)
connect() -> gRPC Verbindung mit dem DOCUMENTS-Server herstellen
createSession() -> Session erzeugen und zu Metadata hinzufügen
showFile() -> Mappe aus dem Relations Beispiel laden und ausgeben
closeSession() -> Session schließen


## Eigene Projekte aufsetzen

In diesem Kapitel wird beschrieben, wie man selbst Projekte für verschiedene Programmierumgebungen und Sprachen aufsetzt. Darüber hinaus gibt es mehrere Beispiel-Implementierungen an denen man sich orientieren kann ([.NET 6](./grpc-dot-net-example.html), [Node.js](./grpc-node-example.html), [C++](./client-stubs-cpp.html)).


### .NET 6

1. Visual Studio 2022 und .NET 6 Workload installieren
2. In Visual Studio 2022 ein neuens .NET 6 Projekt erzeugen (z.B. Konsolenanwendung)
3. Die folgenden NuGet-Pakete installieren
Google.Protobuf
Grpc.Net.Client
Grpc.Tools
4. Die .proto-Dateien aus dem DOCUMENTS Installations Verzeichnis in das Projekt kopieren ([INSTALLDIR]/server/grpc/protos)
Im Eigenschaften-Fenster Build Action/Buildvorgang der Proto-Dateien auf Protobuf compiler stellen.
5. Die zuvor per Manager erzeugten Zertifikatsdateien und das CA-Zertifikat in ein neues certs-Verzeichnis im Projekt kopieren
Im Eigenschaften-Fenser Copy to Output Directory/Ins Ausgabeverzeichnis kopieren der .pem-Dateien auf Copy if newer/Kopieren, wenn neuer stellen
6. Nun kann mit der Implementierung gestartet werden. Hierzu können die Beispielimplementierung verwendet werden


### node.js

1. Node.js und NPM installieren
2. Mit npm init ein neues Projekt anlegen
3. Abhängigkeiten mit npm install @grpc/grpc-js @grpc/proto-loader installieren
4. Die .proto-Dateien aus dem DOCUMENTS Installations Verzeichnis in das Projekt kopieren ([INSTALLDIR]/server/grpc/protos)
5. Main-Datei (index.js) anlegen
6. Innerhalb der Main Datei die Protokolldefinitionen mit dem proto-loader laden (vgl. Beispielprojekte)
7. Nun kann mit der Implementierung gestartet werden. Hierzu können die Beispielimplementierung verwendet werden