---
title: "Aufrufen des Documents-gRPC-Service via PortalScripting"
source: "https://otris.software/documents/manuals/books/grpc/invoking-via-portalscripting.html"
---

# Aufrufen des Documents-gRPC-Service via PortalScripting

Ab DOCUMENTS 5.0i stellt die Scripting-Engine die Klasse `DocumentsRemoteJSON` zum Aufruf eines Documents-gRPC-Service zur Verfügung. Dies ermöglicht den Aufruf von Documents-gRPC-Methoden aus dem PortalScripting heraus. Damit kann auf den Documents-gRPC-Service eines zweiten Documents-Server zugegriffen werden, wie auch bspw. auf den eigenen oder anderen Mandanten des eigenen Documents-Servers.

**Abgrenzung:**

Mit dieser Schnittstelle ist ausschließlich der Zugriff auf den Documents-gRPC Service möglich, aber nicht auf gRPC-Schnittstellen dritter Produkte.

Ein `DocumentsRemoteJSON` Objekt verfügt über eine Instanz des im Documents-Server integrierten gRPC-Clients, welches den gRPC-Service des eigenen bzw. eines anderen Documents-Servers aufrufen kann. Die Ein- und Ausgabeparameter der Methoden der `DocumentsRemoteJSON` Klasse sind JSON-Strings. Die Struktur des JSON-String entspricht der Struktur der Anfrage (`Request`) bzw. Rückgabe (`Response`) der jeweiligen aufgerufenen gRPC-Operation, die durch die .proto-Dateien in `server\grpc\protos` definiert sind.

Die nachfolgende Abbildung veranschaulicht den Ablauf des Aufrufs:

![gRPC_inv_ps](img/invoking-via-ps.png)


---

Einführend zeigen wir im fogenden ein kleines Beispiel die konkreten Schritte des Aufrufs.


```javascript
// Setting the options host, principal, user, locale, tls, caCert,
// clientCert, clientKey and timeout for a DocumentsRemoteJSON object
const certPath = "c:\\mycerts\\";
var json = {
              host : "localhost:50050",
              principal : "relations",
              user : "schreiber",
              locale : "de",
              tls : true,
              caCert: certPath + "ca_cert.pem",
              clientCert : certPath + "client_cert.pem",
              clientKey: certPath + "client_key.pem",
              timeout: 30000
            };

var dr = null;
try
{
    // An instance of the gRPC client built into the Documents Server
    // is available for a DocumentsRemoteJSON object.
    // Invoked gRPC operation: Session.CreateSession
    dr = new DocumentsRemoteJSON(JSON.stringify(json));

    // Invoked gRPC operation: DocumentSpooler.Spool
    var inJson = {
        file_path : "c:\\tmp\\otris.pdf",
        file_ext : "pdf"
    };
    var res = dr.SpoolDocument(JSON.stringify(inJson));
    var spoolId = JSON.parse(res).spool_id;

    // Invoked gRPC operation: DocFile.CreateFile
    inJson = {};
    inJson.file = {};
    inJson.file.type = "crmNote";
    inJson.file.field_updates = [];
    inJson.file.document_updates = [];

    var field1 = {};
    field1.name = "crmSubject";
    field1.str = "Test CreateFile";
    inJson.file.field_updates.push(field1);

    var doc1 = {};
    doc1.spool_id = spoolId;
    doc1.name = "easy.pdf";
    doc1.register_name = "crmAttachments";
    inJson.file.document_updates.push(doc1);

    res = dr.CreateFile(JSON.stringify(inJson));
    util.out("Response: " + res);
}
catch (err)
{
   util.out(err);
}
finally
{
  // Invoked gRPC operation: Session.CloseSession
  if (dr)
      dr.CloseSession();
}
```

// Setting the options host, principal, user, locale, tls, caCert,
// clientCert, clientKey and timeout for a DocumentsRemoteJSON object
const certPath = "c:\\mycerts\\";
var json = {
              host : "localhost:50050",
              principal : "relations",
              user : "schreiber",
              locale : "de",
              tls : true,
              caCert: certPath + "ca_cert.pem",
              clientCert : certPath + "client_cert.pem",
              clientKey: certPath + "client_key.pem",
              timeout: 30000
            };

var dr = null;
try
{
    // An instance of the gRPC client built into the Documents Server
    // is available for a DocumentsRemoteJSON object.
    // Invoked gRPC operation: Session.CreateSession
    dr = new DocumentsRemoteJSON(JSON.stringify(json));

    // Invoked gRPC operation: DocumentSpooler.Spool
    var inJson = {
        file_path : "c:\\tmp\\otris.pdf",
        file_ext : "pdf"
    };
    var res = dr.SpoolDocument(JSON.stringify(inJson));
    var spoolId = JSON.parse(res).spool_id;

    // Invoked gRPC operation: DocFile.CreateFile
    inJson = {};
    inJson.file = {};
    inJson.file.type = "crmNote";
    inJson.file.field_updates = [];
    inJson.file.document_updates = [];

    var field1 = {};
    field1.name = "crmSubject";
    field1.str = "Test CreateFile";
    inJson.file.field_updates.push(field1);

    var doc1 = {};
    doc1.spool_id = spoolId;
    doc1.name = "easy.pdf";
    doc1.register_name = "crmAttachments";
    inJson.file.document_updates.push(doc1);

    res = dr.CreateFile(JSON.stringify(inJson));
    util.out("Response: " + res);
}
catch (err)
{
   util.out(err);
}
finally
{
  // Invoked gRPC operation: Session.CloseSession
  if (dr)
      dr.CloseSession();
}
## Funktionsumfang

**Hinweis:**

Für die komplette Dokumention der API siehe hier [[Portalscript API/classes/DocumentsRemoteJSON|PortalScripting API]].

Zurzeit stellt die Scripting-Engine die folgenden Methoden zur Verfügung. Nebenbei sind die aufgerufenen gRPC-Operationen aufgelistet.

| Scripting-Methode | gRPC-Operation |
| --- | --- |
| DocumentsRemoteJSON.new | Session.CreateSession |
| DocumentsRemoteJSON.CloseSession | Session.CloseSession |
| DocumentsRemoteJSON.TestSession (ab 6.0.1) | Session.testSession (ab 6.0.1) |
| DocumentsRemoteJSON.GetUserInfo (ab 6.0.2) | Session.GetUserInfo (ab 6.0.2) |
| DocumentsRemoteJSON.SpoolDocument | DocumentSpooler.Spool |
| DocumentsRemoteJSON.GetFileInfo | DocFile.GetFileInfo |
| DocumentsRemoteJSON.CreateFile | DocFile.CreateFile |
| DocumentsRemoteJSON.UpdateFile | DocFile.UpdateFile |
| DocumentsRemoteJSON.DeleteFiles (ab 5.0i HF3) | DocFile.DeleteFiles (ab 5.0i HF3) |
| DocumentsRemoteJSON.DownloadDocument | DocFile.DownloadDocument |
| DocumentsRemoteJSON.ArchiveFiles (ab 6.0.1) | DocFile.ArchiveFiles (ab 6.0.1) |
| DocumentsRemoteJSON.FollowUp (ab 6.0.1) | DocFile.FollowUp (ab 6.0.1) |
| DocumentsRemoteJSON.GetAutoText (ab 6.0.1) | DocFile.GetAutoText (ab 6.0.1) |
| DocumentsRemoteJSON.GetFileTypes (ab 6.0.2) | DocFile.GetFileTypes (ab 6.0.2) |
| DocumentsRemoteJSON.GetWorkflowPattern | Workflow.GetWorkflowPattern |
| DocumentsRemoteJSON.StartWorkflow | Workflow.StartWorkflow |
| DocumentsRemoteJSON.GetPossibleActions | Workflow.GetPossibleActions |
| DocumentsRemoteJSON.ForwardFile | Workflow.ForwardFile |
| DocumentsRemoteJSON.CancelWorkflow | Workflow.CancelWorkflow |
| DocumentsRemoteJSON.GetPublicFolders | Folder.GetPublicFolders |
| DocumentsRemoteJSON.GetPrivateFolder | Folder.GetPrivateFolder |
| DocumentsRemoteJSON.GetFiles | Folder.GetFiles |
| DocumentsRemoteJSON.RunScript | Scripting.RunScript |
| DocumentsRemoteJSON.Query | Search.Query |