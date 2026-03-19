---
title: "Einleitung"
source: "https://otris.software/documents/manuals/books/grpc/index.html"
---

# Einleitung

Diese gRPC-Schnittstelle fungiert ab DOCUMENTS 5.0h als Alternative bzw. Ersatz der SOAP-Schnittstelle und ist vollständig im DOCUMENTS-Server integriert.


## Getting started

Eine Schnellanleitung zum Einstieg in gRPC mit DOCUMENTS ist unter [[otrTest/getting-started|Getting Started]] zu finden.


## Was ist gRPC?

gRPC ist ein modernes, leistungsstarkes Open Source RPC-Framework und unterstützt die meisten gängigen Programmiersprachen wie C/C++, Java, C#, Dart, Go, Node.js, Objective-C, PHP, Python und Ruby. Zur Serialisierung strukturierter Daten sind die von Google entwickelten `Protocol Buffers` im Einsatz, welche viel kleiner und schneller im Vergleich zu XML und JSON sind. Die `Protocol Buffers` werden in einer .proto-Datei gespeichert und für den Transport im Binärformat codiert. Den Transport der Binärdaten zwischen entfernten Computern wickelt gRPC mit HTTP/2 besonders effizient ab. gRPC verfügt über eine Authentifizierungs-API, mit der alle erforderlichen Authentifizierungsinformationen als Anmeldeinformationen angegeben werden können, wenn ein Kanal erstellt oder ein Aufruf durchgeführt wird.

![gRPC_csm](img/clientServerModel.png)


## Funktionsumfang der DOCUMENTS gRPC Schnittstelle

Zurzeit stellt die gRPC-Schnittstelle die folgenden Operationen aus dem jeweiligen Service zur Verfügung. Nebenbei sind die äquivalenten Soap-Operationen zum Nachschlag aufgelistet.

| gRPC-Operation | Soap-Operation |
| --- | --- |
| Session.CreateSession | Documents.login |
| Session.CloseSession | Documents.logout |
| Session.TestSession (ab 6.0.1) | Documents.testSession |
| User.CheckPassword | Documents.login |
| User.GetUserInfo (ab 6.0.2) | Documents.userInfo |
| LogFile.ListLogs | - |
| LogFile.DownloadLog | - |
| DocumentSpooler.Spool | - |
| DocumentSpooler.Download | - |
| DocumentSpooler.Delete | - |
| DocFile.GetFileInfo | Documents.getFileInfo Documents.getMonitor (ab 6.0.1) |
| DocFile.CreateFile | Documents.createFile Documents.createFile2 Documents.createFile3 |
| DocFile.UpdateFile | Documents.editFile Documents.editFile2 Documents.editFile3 |
| DocFile.DeleteFiles (ab 5.0i HF3) | Documents.deleteFiles Documents.deleteFiles2 |
| DocFile.DownloadDocument | Documents.getDocument |
| DocFile.ArchiveFiles (ab 6.0.1) | Documents.archiveFiles |
| DocFile.FollowUp (ab 6.0.1) | Documents.followUp |
| DocFile.GetAutoText (ab 6.0.1) | Documents.getAutoText |
| DocFile.GetFileTypes (ab 6.0.2) | Documents.getFileTypes Documents.describeFileType Documents.describeFileType2 |
| Workflow.GetWorkflowPattern | Documents.getWorkflowPattern |
| Workflow.StartWorkflow | Documents.startWorkflow |
| Workflow.GetPossibleActions | Documents.listPossibleActions |
| Workflow.ForwardFile | Documents.triggerAction |
| Workflow.CancelWorkflow | Documents.cancelWorkflow |
| Folder.GetPublicFolders | Documents.listPublicFolders |
| Folder.GetPrivateFolder | Documents.getInbox Documents.getSentFolder |
| Folder.GetFiles | Documents.browseFolder |
| Scripting.RunScript | Documents.runScript |
| Search.Query | Documents.report Documents.report2 Documents.report3 Documents.report4 |