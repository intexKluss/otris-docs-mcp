---
title: "Unterstützte Funktionen und Vergleich zur gRPC / SOAP"
source: "https://otris.software/documents/manuals/books/otrwebservices/documents-api-functions.html"
---

# Unterstützte Funktionen und Vergleich zur gRPC / SOAP

Nachfolgend sind alle aktuell verfügbaren Funktionen der Documents-API aufgeführt. Zur Information werden außerdem alle hierzu äquivalenten Operationen der gRPC-Schnittstelle, sowie der SOAP-Schnittstelle aufgeführt.

| REST | gRPC | SOAP |
| --- | --- | --- |
| POST /spooler | DocumentSpooler.Spool | - |
| GET /spooler/{spoolId} | DocumentSpooler.Download | - |
| DELETE /spooler/{spoolId} | DocumentSpooler.Delete | - |
| GET /files/{fileId} | DocFile.GetFileInfo | Documents.getFileInfo |
| POST /files | DocFile.CreateFile | Documents.createFile Documents.createFile2 Documents.createFile3 |
| PATCH /files/{fileId} | DocFile.UpdateFile | Documents.editFile Documents.editFile2 Documents.editFile3 |
| DELETE /files/{fileId} | DocFile.DeleteFiles | Documents.deleteFiles Documents.deleteFiles2 |
| POST /files/{fileId}/archive | DocFile.ArchiveFiles | Documents.archiveFiles |
| POST /files/{fileId}/autoText | DocFile.GetAutoText | Documents.getAutoText |
| GET /files/{fileId}/docs/{docId} | DocFile.DownloadDocument | Documents.getDocument |
| GET /workflows | Workflow.GetWorkflowPattern | Documents.getWorkflowPattern |
| POST /files/{fileId}/workflow/start | Workflow.StartWorkflow | Documents.startWorkflow |
| GET /files/{fileId}/workflow/actions | Workflow.GetPossibleActions | Documents.listPossibleActions |
| POST /files/{fileId}/workflow/forward | Workflow.ForwardFile | Documents.triggerAction |
| POST /files/{fileId}/workflow/cancel | Workflow.CancelWorkflow | Documents.cancelWorkflow |
| POST /files/{fileId}/workflow/followUp | DocFile.FollowUp | Documents.followUp |
| GET /folders/public | Folder.GetPublicFolders | Documents.listPublicFolders |
| GET /folders/by-type/{type}/status | Folder.GetPrivateFolder | Documents.getInbox Documents.getSentFolder |
| GET /folders/by-id/{id}/files | Folder.GetFiles | Documents.browseFolder |
| GET /folders/by-type/{type}/files | Folder.GetFiles | Documents.browseFolder |
| GET /folders/by-name/{name}/files | Folder.GetFiles | Documents.browseFolder |
| POST /scripts/{scriptName}/run | Scripting.RunScript | Documents.runScript |
| POST /files/query | Search.Query | Documents.report Documents.report2 Documents.report3 Documents.report4 |
| GET /filetypes | DocFile.GetFileTypes | Documents.describeFileType Documents.describeFileType2 |
| GET /users/me | User.GetUserInfo | Documents.userInfo |
| GET /users/by-login/{login} | User.GetUserInfo | - |