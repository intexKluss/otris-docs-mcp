---
title: "Script-Exits | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/script-exits.html"
---

# Script Exits


## Overview

**Creating, Editing, Deleting Files**

- on creating a file
- before editing a file
- on editing a file
- after setting reference field
- on saving a file
- after saving a file
- after cancelling editing
- on uploading document
- after uploading document
- on deleting a file
- on undeleting a file
- after docimport
- after OCR
- to filetype changed
- from filetype changed
- after life cycle action
- on add file-link
- on remove file-link

**Workflow**

- on forwarding a file
- after forwarding a file
- on workflow action
- before workflow assign
- on connecting file to inbox
- hide receivers for indirect forwarding
- hide options for indirect forwarding
- on workflow agent

**E-Mail**

- after sending email
- available blobs in email

**Check-In / Check-Out**

- after check-in of a document
- after canceling check-out

**Archive**

- on archiving a file
- after archiving a file
- after reactivating a file
- on loading an archived file
- archive destination selection by script

**User**

- on login
- after login
- on login with single sign on
- after login with single sign on
- set password
- on logout
- on EASY authentication
- on delete user
- after creating user

**Access Rights**

- allowed actions
- decrease field right in file view
- hide register in file view
- decrease search archives
- decrease search stores
- decrease search file types
- decrease creation file types
- access script
- hide mail template in file view
- hide print template in file view
- hide document template in edit mode

**Document Retrieval**

- on search request
- on preparation of a search formular

**Global Scripts**

- modify support form


# Creation, Editing, Deletion of a File


## on creating a file

| Where to define | On register Scripting at filetype: On creating new files |
| --- | --- |
|  | Property at filetype: onCreationScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | newFile |
| return value | no |
| Available properties | Context.currentUser, Context.file |
| This script exit will be called after creation of a new file with the default values and before the file is sent into the workflow (if a workflow is defined at the filetype). The exit will also be called on direct creation of a DOCUMENTS (EAS) archive file. |


## before editing a file

| Where to define | Property at filetype: beforeEditScript=ScriptName |
| --- | --- |
|  | Property at filetype: beforeEditScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | beforeEdit |
| return value | return value != 0 will be evaluated as error and the EDIT-action will be canceled. |
| Available properties | Context.currentUser, Context.file, Context.workflowActionId, Context.workflowActionName |
| This script will be called if a user presses the EDIT button on a file. At start time of the script execution, the file is in its original state. A scratch copy does not yet exist. If the script returns a value != 0, the EDIT action will be cancelled. The value of Context.errorMessage will then be displayed in an alert window. You can use this exit e.g. to deny the edit-access in dependency of the logged in user. In connection with EAS/EDA, the exit will also be called for an EDIT action on an archived file, but not for a REACTIVATE action. |


## on editing a file

| Where to define | On register Scripting at filetype: On editing |
| --- | --- |
|  | Property at filetype: onEditScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | onEdit |
| return value | no |
| Available properties | Context.currentUser, Context.file, Context.workflowActionId, Context.workflowActionName |
| This script exit will be called if a user press the EDIT button at a file. At starting time of the script's execution, the file is in edit mode. The script works with a scratch copy. In connection with EAS/EDA, the exit will also be called for an EDIT or a REACTIVATE action on an archived file. |


## after setting reference field

| Where to define | Property at filetype field of data type reference or filetype: afterSetReferenceFieldScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | afterReferenceFieldSelect / afterReferenceFieldDeselect |
| return value | No |
| Available properties | Context.currentUser, Context.file, referenceFieldName |
| This script exit allows a PortalScript to be run after a field of the "Reference" data type has been set or unset. The property can be defined at the filetype field or global at the filetype. A global definition at the file type will be used for all reference fields of this file type. util.out("context.event:" + context.event); util.out("referencefieldName: " + referenceFieldName); var docFile = context.file; util.out(docFile.getAutoText("id")); if (docFile.getScratchCopy()) { util.out("context.file is an original"); } else if (docFile.getOriginal()) { util.out("context.file is a scratch copy"); } if (context.event == "afterReferenceFieldSelect") { var refFile = docFile.getReferenceFile(referenceFieldName); util.out("Reference-file: " + refFile.getAutoText("title")); } else if (context.event == "afterReferenceFieldDeselect") { var refFile = docFile.getReferenceFile(referenceFieldName); if (refFile != null) { util.out("Error! RefFile must be null!"); } } Copy |


## on saving a file

| Where to define | On register Scripting at filetype: On saving |
| --- | --- |
|  | Property at filetype: onSaveScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | onSave |
| return value | return value != 0 will be evaluated as error and the SAVE-action will be canceled. |
| Available properties | Context.currentUser, Context.file, Context.workflowActionId, Context.workflowActionName |
| This script exit will be called if a user presses the SAVE button on a file. At starting time of the script's execution, the file is still a scratch copy. If you return a value != 0 the value of Context.errorMessage will be displayed in an alert window. The file will still be in edit mode. You can use this exit e.g. to validate the input, that the user has entered for the fields. This exit is not available for archived files. |


## after saving a file

| Where to define | On register Scripting at filetype: After saving |
| --- | --- |
|  | Property at filetype: afterSaveScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | afterSave |
| Available Context.returnType | showFile |
| return value | 0 or returnType |
| Available properties | Context.currentUser, Context.file, Context.workflowActionId, Context.workflowActionName |
| This script exit will be called after a user press the SAVE button at a file. At starting time of the script's execution, the file is an active file, not a scratch copy. This exit is not available for archived files. |


## after cancelling editing

| Where to define | Property at filetype: afterCancelEditScript=ScriptName |
| --- | --- |
|  | Property at filetype: afterCancelEditScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | afterCancelEdit |
| return value | value != 0 for an alert window |
| Available properties | Context.currentUser, Context.file, Context.workflowActionId, Context.workflowActionName |
| This script exit will be called if a user presses the CANCEL button in the edit mode of a file. At starting time of the script's execution, the file is no longer edit mode. If the script returns a value != 0, the value of Context.errorMessage will be displayed in an alert window. |


## on uploading document

| Where to define | Property at filetype, register, documents-settings: onUploadDocumentScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | onUploadDocument / onUploadNewDocument |
| return value | return value != 0 will abort the upload |
| Available properties | Context.currentUser, Context.file, Context.register, param.fileName, param.filePath |
| This script exit will be called when a user uploads a new document or overwrites an existing one. At starting time of the script's execution, the document is uploaded to the server, but is not yet in the document-repository. Therefore you can cancel the upload with this exit. The parameters param.filePath and param.fileName contain the path to the temporary directory on the server, where the uploaded document is located. The param.fileName parameter contains the name including of extension, of the0 document. You have read/write access to both of these parameters. Therefore, you can e.g. modify the document name or check the size if you want to implement a size limit. // Sample: size limit for new documents of 1MB if (context.event == "onUploadNewDocument") { if (util.fileSize(param.filePath) > 1024*1024) { util.out("Size limit exceeded for document: " + param.fileName); return -1; } } Copy |


## after uploading document

| Where to define | Property at filetype, register, documents-dettings: afterUploadDocumentScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | afterUploadNewDocument / afterUploadDocument |
| return value | No |
| Available properties | Context.currentUser, Context.file, Context.register, param.fileName, param.filePath |
| This script exit will be called after a user has uploaded a document. |


## on deleting a file

| Where to define | On register Scripting at filetype: On deleting |
| --- | --- |
|  | Property at filetype: onDeleteScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | onDelete / moveTrash / onDeleteAll |
| return value | return value != 0 will abort the delete action |
| Available properties | Context.currentUser, Context.file |
| This script exit will be called if a user deletes a file. At starting time of the script's execution, the file still exists. If the script returns a value != 0, the delete action will be cancelled and the value of Context.errorMessage will be displayed in an alert window. It is also possible to use this exit with a DOCUMENTS (EAS) store, but it is not straightforward. In such an environment, please pay attention to the following technical notes. Prior to DOCUMENTS 4.0c, the exit was not called for archived files, when a user triggered a delete action in a list view. Since DOCUMENTS 4.0c, the exit is also called by default for archived files in a list-oriented delete operation. The additional calls of the exit can be deactivated again by setting the EASTriggerOnDeleteFromList property to 0 or false. Single delete operations (from a file view) and active files are not affected. This property can be applied to a single EAS store. Using the DOCUMENTS/Settings window, it can be applied all stores that do not have an individual setting. Before calling the exit for an archived file, DOCUMENTS must have created a corresponding temporary file in its database. Otherwise, it only requires the external ID, which is already known. Therefore, the onDelete exit can significantly slow down the process of deleting multiple archive files at once. Since DOCUMENTS 4.0d, users have the option to delete all archived versions of a file at once. In this use case, the exit is called for each selected file, but not for each version of each selected file. Context.event indicates this case with the value 'onDeleteAll'. |


## on undeleting a file

| Where to define | Property at Filetype: onUndeleteScript=ScriptName |
| --- | --- |
| Since | 5.0 |
| Context.event | onUndelete |
| return value | return value != 0 will abort the undelete action |
| Available properties | Context.currentUser, Context.file |
| This script exit will be called when a user moves a file from the trash folder to the in-work folder. At starting time of the script's execution, the file is still in the trash folder. If the script returns a value != 0, the undelete action will be cancelled and the value of Context.errorMessage will be displayed in an alert window. |


## after docimport

| Where to define | Property at filetype: afterDocimportScript=ScriptName |
| --- | --- |
| Since | 5.0 |
| Context.event | afterDocimport |
| return value | no |
| Available properties | Context.currentUser, Context.file, Context.workflowActionId, Context.workflowActionName |
| This script exit will be called after importing a file by use of docimport. |


## after OCR

| Where to define | Property global, at filetype or at register: afterOcrScript=ScriptName |
| --- | --- |
| Since | 5.0f |
| Context.event | afterOcr |
| return value | no |
| Available properties | Context.file, Context.register, Context.document, ocrText, ocrDone |
| This script exit is called after the OCR job has been executed for a document. It will also be called, if the OCR job checked the uploaded document and did not execute OCR because the document already contains text (ocrDone = true/false). If the OCRTextFormat property has been set, the corresponding text will be available via `ocrText`. |


## to filetype changed

| Where to define | Property at filetype: toFiletypeChangedScript=ScriptName |
| --- | --- |
| Since | 5.0f HF1 |
| Context.event | toFiletypeChanged |
| return value | no |
| Available properties | Context.file, lastFiletype |
| This script exit will be called after the filetype of a file has been changed from filetype A to filetype B. The exit must be defined globally or at the target filetype (filetype B). |


## from filetype changed

| Where to define | Property at filetype: fromFiletypeChangedScript=ScriptName |
| --- | --- |
| Since | 5.0f HF1 |
| Context.event | fromFiletypeChanged |
| return value | no |
| Available properties | Context.file, lastFiletype |
| This script exit will be called after the filetype of a file has been changed from filetype A to filetype B. The exit must be defined globally or at the source filetype (filetype A). |


## after life cycle action

| Where to define | Property at filetype or documents settings: afterLifeCycleActionScript=ScriptName |
| --- | --- |
| Since | 5.0g |
| Context.event | afterLifeCycleAction |
| return value | no |
| Available properties | Context.file, id, key, action, actiontimestamp, success |
| This script exit is called after a life cycle action for the file. The Context.file variable may be NULL if the file is deleted by the life cycle action. Context.id contains the file ID and Context.action the type of action performed (archive, archiveAndDelete, moveTrash, delete). Context.success has the value '1' if the life cycle action was successful. |


## on add file-link

| Where to define | Property at register or filetype: onAddFileLinkScript=ScriptName |
| --- | --- |
| Since | 5.0h |
| Context.event | onAddFileLink |
| return value | no |
| Available properties | Context.file, Context.register, FileLinkId, LinkId, LinkName |
| This script exit will be called after adding a file to a file-link register. FileLinkId contains the file ID of the added file. LinkId and LinkName contain the ID and name of the file-link definition. var file = context.file; var linkFile = context.getFileById(FileLinkId); util.out("Created link from " + file.getTitle() + " to " + linkFile.getTitle()); Copy |


## on remove file-link

| Where to define | Property at register or filetype: onRemoveFileLinkScript=ScriptName |
| --- | --- |
| Since | 5.0h |
| Context.event | onRemoveFileLink |
| return value | no |
| Available properties | Context.file, Context.register, FileLinkId, LinkId, LinkName |
| This script exit is called a file is removed from a file-link register. FileLinkId contains the file-ID of the removed file. LinkId and LinkName contain the ID and name of the file-link definition. var file = context.file; var linkFile = context.getFileById(FileLinkId); util.out("Removed link from " + file.getTitle() + " to " + linkFile.getTitle()); Copy |


# Workflow


## on forwarding a file

| Where to define | Property at Filetype: onForwardFileScript=Scriptname |
| --- | --- |
|  | Property at filetype: onForwardFileScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | workflow |
| return value | return value != 0 will abort the action |
| Available properties | Context.currentUser, Context.file, Context.workflowActionId, Context.workflowActionName, Context.workflowControlFlowId, Context.workflowControlFlowName |
| This script exit will be called if a user performs a forward action in a workflow (only workflow engine, not distribution lists). At starting time of the script's execution, the file has not yet been forwarded. If the script returns a value != 0, the workflow action will be cancelled and the value of Context.errorMessage will be displayed in an alert window. |


## on connecting file to inbox

| Where to define | Property at Filetype, SystemUser or Documents-Settings: onConnectInboxScript=Scriptname |
| --- | --- |
| Since | 5.0d |
| Context.event | onConnectInbox |
| return value | No |
| Available properties | Context.currentUser, Context.file, Context.folder, Context.workflowStep |
| This script exit will be called if a file is connected to a user's inbox (e.g. workflow, follow-up etc). Context.folder is a reference to the inbox folder. Context.currentUser refers to the user who is executing the script, not the owner of the folder (see Folder.systemUser). |


## after forwarding a file

| Where to define | Property at Filetype: afterForwardFileScript=Scriptname |
| --- | --- |
|  | Property at filetype: afterForwardFileScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | workflow |
| return value | No |
| Available properties | Context.currentUser, Context.file, Context.workflowActionId, Context.workflowActionName, workflowErrorCode, workflowErrorMessage |
| This script exit will be called after a user has performed a forward action in a workflow (only workflow engine, not distribution lists) and the action is completed. |


## on workflow action

| Where to define | Property at Filetype: onReceiveWorkflowActionScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | workflow |
| return value | return value != 0 will abort the action |
| Available properties | Context.currentUser, Context.file, Context.workflowActionId, Context.workflowActionName |
| This script exit will be called if a user performs an action in a workflow (only workflow engine, not distribution lists). |


## before workflow assign

| Where to define | Property at Filetype or global: beforeWorkAssignScript=Scriptname |
| --- | --- |
| Since | 5.0f HF1 |
| Context.event | beforeWorkflowAssign |
| return value | return value < 0 will abort the action |
| Available properties | Context.currentUser, Context.file, Context.workflowStep, Context.workflowActionId, Context.workflowActionName, Context.workflowControlFlowId, Context.workflowControlFlowName |
| This script exit will be called if a controlflow is processed and the next workflow action is prepared (only workflow engine, not distribution lists). |


## hide options for indirect forwarding

| Where to define | Property at filetype: hideForwardOptionScript=Scriptname |
| --- | --- |
| Since | 5.0e HF2 |
| Context.event | hideForwardOption |
| return value | No |
| Available properties | Context.currentUser, Context.file, Context.workflowStep, Context.workflowControlFlowId, enumval |
| This script allows you to hide the 'Forward to' and 'Confer with' options in the forwarding file dialogue that is displayed after a user has performed an indirect forwarding action in a workflow (only workflow engine, not distribution lists). Indirect forwarding is obtained by deselecting the 'Forward directly' option in the 'Control flow' section of the 'Action'. The object enumval contains both the forwardTo and conferWith options. Overwrite one with an empty string to hide the option in the forwarding file dialogue. var docFile = context.file; if (!docFile) return; var currentUser = context.getSystemUser(); if (!currentUser) throw "Error: currentUser == NULL"; for (var i=0; i<enumval.length; i++) { // Both options 'Forward to' and 'Confer with' should be hidden on the dialog. if (enumval[i] == "forwardTo" || enumval[i] == "conferWith") enumval[i] = "" } Copy |


## hide receivers for indirect forwarding

| Where to define | Property at filetype: hideForwardReceiverScript=Scriptname |
| --- | --- |
| Since | 5.0e HF2 |
| Context.event | hideForwardReceiver |
| return value | No |
| Available properties | Context.currentUser, Context.file, Context.workflowStep, Context.workflowControlFlowId, enumval |
| This script exit allows you to hide the receivers on the forwarding file dialog displayed after a user has performed an indirect forwarding action in a workflow (only workflow engine, not distribution lists). Indirect forwarding is obtained by deselecting the 'Forward directly' option in the Control flow section of the 'Action'. The object enumval contains all possible user login names and alias names. Overwrite a name with an empty string to hide the user or alias in the receiver list. var docFile = context.file; if (!docFile) return; var currentUser = context.getSystemUser(); if (!currentUser) throw "Error: currentUser == NULL"; for (var i=0; i<enumval.length; i++) { // The user with login name 'user1' should be hidden in the receiver list. if (enumval[i] == "user1") enumval[i] = "" } Copy |


## on workflow agent

| Where to define | Property at Filetype or global: onWorkflowAgentScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | onWorkflowAgent |
| return value | no |
| Available properties | Context.currentUser, originUser, Context.file, Context.workflowStep, Context.workflowActionId, Context.workflowActionName |
| This script exit will be called if a file is forwarded and the new executive user is absent. Then the agent gets the file in workflow. Context.currentUser is the agent. originUser contains the login-name of the absent user |


# E-Mail


## after sending email

| Where to define | Property at Filetype: afterMailScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | afterMail |
| return value | none |
| Available properties | Context.currentUser, Context.file, mailFrom, mailTo, mailCc, mailBcc, mailSubject, mailBody, mailAttachments, mailAttachmentsJSON (since 5.0i HF1), sendErrorCode (only for synchronous email sending), sendErrorMessage (only for synchronous email sending) |
| This script exit will be called after a user sends an email via the web client. |


## available blobs in email

| Where to define | Property at Filetype: mailAvailableBlobsScript=Scriptname |
| --- | --- |
| Since | 5.0e |
| Context.event | mailAvailableBlobs |
| return value | none |
| Available properties | Context.currentUser, Context.file, enumval, mailTemplate |
| If a user wants to send a file by email using the web client, this exit will be called to modify the available attachments to send. The enumval contains the document IDs of the file's attachment. It is possible to add and remove IDs, e.g. from other files. // Sample: Remove first document and add different one if (context.event == "mailAvailableBlobs") { if (enumval.length > 0) enumval.shift(); var otherFile = context.getFileById("dopaagfi_20180000000012"); try { var doc = otherFile.getRegisters("documents").first().getDocuments().first(); enumval.push(doc.id) } catch (err) { util.out(err); } } Copy |


# Check-in / Check-out


## after check-in of a document

| Where to define | Property at Filetype: afterCheckInScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event |  |
| return value | No |
| Available properties | Context.currentUser, Context.file, documentOID, Context.workflowActionId, Context.workflowActionName |
| This script exit will be called after a user has checked in a document. |


## after canceling check-out

| Where to define | Property at Filetype: afterCancelCheckOutScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | onSave |
| return value | No |
| Available properties | Context.currentUser, Context.file, Context.workflowActionId, Context.workflowActionName, documentOID |
| This script exit will be called after a user cancels the checkout of a document. |


# Archive


## on archiving a file

| Where to define | On register Scripting at Filetype: On archiving |
| --- | --- |
|  | Property at filetype: onArchiveScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | onArchive |
| return value | No |
| Available properties | Context.currentUser, Context.file |
| This script exit will be called, when DOCUMENTS receives a request to store a file in an archive. It does not matter, if the request comes directly from the web interface, from a workflow step or from another script. The object that the exit passes to the script as Context.file, is either an active file or a modified file from the DOCUMENTS (EAS) archive. In the first case, the file is an original. In the second case it is a special type of scratch copy, because archive files are immutable for the most part. There is one special case, where this exit cannot be called: The internal SOAP-API method "createFile2" has got an option to create a file directly in EAS. This works completely without DocFiles, so the exit is bypassed. |


## after archiving a file

| Where to define | Property at Filetype: afterArchiveScript=ScriptName |
| --- | --- |
|  | Property at filetype: afterArchiveScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | afterArchive |
| return value | No |
| Available properties | Context.currentUser, Context.file, archiveErrorCode, archiveErrorMessage |
| This script exit will be called if a user has archived a file. |


## after reactivating a file

| Where to define | Property at Filetype: afterReactivateScript=ScriptName |
| --- | --- |
| Since | 5.0 |
| Context.event | afterReactivate |
| return value | No |
| Available properties | Context.currentUser, Context.file |
| This script exit will be called if a user reactivates an archived file. At starting time of the script's execution, the file is not yet in edit mode. |


## on loading an archived file

| Where to define | Property at Filetype: onLoadArchiveFileScript=ScriptName |
| --- | --- |
| Since | 5.0 |
| Context.event | onLoadArchiveFile |
| return value | No |
| Available properties | Context.currentUser, Context.file |
| This script exit will be called when an archived file is loaded. |


## archive destination selection by script

| Where to define | On register Archiving at Filetype: Script (only visible if "Destination server" equals "By script") |
| --- | --- |
| Since | 4.0 |
| Context.event | ArchiveScript or ArchiveStandardCreation or ArchiveQuickCreation |
| return value | For the ArchiveScript event the return value is a String identifier of the destination archive and destination server. For the other possible events the return value should be either zero or an empty string. |
| Available properties | Context.currentUser, Context.file(only for ArchiveScript events), enumval(only for the other events) |
| This script exit will be called before archiving a DocFile for the first time, unless an API call specifies the destination already in the parameter list. The event name for these calls is ArchiveScript. Destination identifiers can be built in the following way. For EAS or EBIS: "@" + ServerName For EE.x (native): SchemaKey + "|" + ViewKey + "@" + ServerName For EE.i: ArchiveKey + "@" + ServerName The archiveKey parameter of the DocFile.archive(String archiveKey) method uses the same notation. The script exit cannot override this parameter, but it can provide a data-dependent default value for it. An eventual onArchive exit will run after this one. If a Filetype allows the direct creation or quick creation of archive files, the same exit will also be called whenever DOCUMENTS needs to compose a list of available archive stores for such an action. An example script demonstrates the correct handling of these events. See the example page. |


# User


## on login

| Where to define | Property at Principal: loginScript=Scriptname |
| --- | --- |
|  | Property at Principal: loginScript=Scriptname1,Scriptname2,.. since 5.0f HF1 |
| Since | 5.0 |
| Context.event | onLogin |
| return value | If the return value is != 0, the login will be denied. |
| Available properties | login, asUser, source, instance, unit |
| This script exit will be called before authorisation against the system takes place. If the return value of at least one script is != 0, the login will be denied. The following script will not be executed. |


## after login

| Where to define | Property at Principal: afterLoginScript=Scriptname |
| --- | --- |
|  | Property at Principal: afterLoginScript=Scriptname1,Scriptname2,.. since 5.0f HF1 |
| Since | 5.0 |
| Context.event | onAfterLogin |
| return value | No |
| Available properties | login, asUser, source, instance, unit, Context.currentUser (since 5.0e HF2) |
| This script exit will be called after a successful login. If the return value of at least on script is != 0, the subsequent script will not be executed. |


## on login with single sign on

| Where to define | Property at Principal: autoLoginScript=Scriptname |
| --- | --- |
|  | Property at Principal: autoLoginScript=Scriptname1,Scriptname2,.. since 5.0f HF1 |
| Since | 5.0 |
| Context.event | onAutoLogin |
| return value | If the return value is != 0, the login will be denied |
| Available properties | login, source, instance, unit |
| This script exit will be called during single sign-on login. If the return value of at least one script is != 0, the login will be denied. The following script will not be executed. |


## after login with single sign on

| Where to define | Property at Principal: afterAutoLoginScript=Scriptname |
| --- | --- |
|  | Property at Principal: afterAutoLoginScript=Scriptname1,Scriptname2,.. since 5.0f HF1 |
| Since | 5.0 |
| Context.event | onAfterAutoLogin |
| return value | No |
| Available properties | login, source, instance, unit, Context.currentUser (since 5.0e HF2) |
| This script exit will be called after logging in with single sign-on. If the return value of at least one script is != 0, the subsequent script will not be executed. |


## set password

| Where to define | Property at Principal: setPasswordScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event |  |
| return value | If the return value is != 0 the password change will be canceled. |
| Available properties | login, oldpassword, newpassword |
| This script exit will be called if a user wants to change their password. Using the script, you can define your own password guidelines, for example. If the script returns a value != 0, the action will be cancelled and the value of Context.errorMessage will be displayed in an alert window. |


## on logout

| Where to define | Property at Principal: logoutScript=Scriptname |
| --- | --- |
|  | Property at Principal: logoutScript=Scriptname1,Scriptname2,.. since 5.0f HF1 |
| Since | 5.0 |
| Context.event | onLogout |
| return value | No |
| Available properties | Context.currentUser, source, timeout |
| This script exit will be called before the logging out of the system. The source parameter contains information about the cause of logout, e.g. 'web' or 'soapapi' |


## on EASY authentication

| Where to define | Property at Principal: EasyAuthScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | onEasyAuth |
| return value | No |
| Available properties | unit, instance, param.login, knownAccount, Context.currentUser (if available) |
| If the EASY Authentication feature is enabled, this script exit will be called right before DOCUMENTS forwards the login data to the archive. The script may overwrite the login name in param.login. While the XML-Server will receive the modified login, DOCUMENTS will still use the original login internally. The property knownAccount indicates, wether a Systemuser for the given login already exists. In this case, the property Context.currentUser will refer to this object. Otherwise, the value may be the job user or simply null. // Sample: append country code to login against EASYWARE param.login += "@de"; return 0; Copy |


## on delete user

| Where to define | Property at Principal: onDeleteUserScript=Scriptname1,Scriptname2,... |
| --- | --- |
| Since | 5.0 |
| Context.event | onDeleteSystemUser |
| return value | No |
| Available properties | Context.currentUser |
| This script exit will be called before the user is deleted. |


## after creating user

| Where to define | Property at Principal: afterCreateSystemUserScript=Scriptname1,Scriptname2,... |
| --- | --- |
| Since | 5.0h HF1 |
| Context.event | afterCreateSystemUser |
| return value | No |
| Available properties | Context.currentUser |
| This script exit will be called after a user has been created. |


# Access rights


## allowed actions

| Where to define | On register Scripting at filetype, register, folder Allowed actions |
| --- | --- |
| Since | 5.0 |
| Context.event | allowedActions |
| return value | No |
| Available properties | Context.currentUser, Context.file, enumval |
| If you specify user-defined actions at the filetype, register or folder you can handle the access rights to the actions for a user. The object enumval contains a list of all the actions. To withdraw a privilege, overwrite an entry with an empty string. // Sample: Withdraw user defined action "Release_Invoice" var docFile = context.file; if (!docFile) return; for (var i=0; i<enumval.length; i++) { if (enumval[i] == "Release_Invoice" && docFile.price > 10000) enumval[i] = ""; } Copy |


## decrease field right in file view

| Where to define | Property at filetype: decreaseFieldRightOnFileViewScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | decreaseFieldRights |
| return value | No |
| Available properties | Context.currentUser, Context.file, Context.register |
| This script exit allows you to withdraw read and write rights on fields in the file view / edit mode. var docFile = context.file; if (!docFile) return; var currentUser = context.getSystemUser(); if (!currentUser) throw "Error: currentUser == NULL"; // make field price: // invisible for guest // readonly for employee // default for boss // possible access options // "-w"; // withdraw write right // "-gw"; // field is readonly in the WebClient but writable per Scripting // "-rw"; // withdraw read & write right var isBoss = currentUser.hasAccessProfile("Boss"); var isEmployee = currentUser.hasAccessProfile("Employee"); var guest = !isBoss && !isEmployee; for (var i=0; i<enumval.length; i++) { if (enumval[i] == "price") { if (isBoss) { // do nothing - default right } else if (isEmployee) { enumval[i] = "-w"; // redraw write right } else { // isGuest enumval[i] = "-rw"; // redraw read & write right } } } Copy |


## hide register in file view

| Where to define | Property at filetype: hideRegisterOnFileViewScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | hideRegisters |
| return value | No |
| Available properties | Context.currentUser, Context.file |
| This script exit allows you to hide a register in the file view / edit mode. The object enumval contains a list of all register names. To hide a register in the file view, overwrite its name with an empty string. var docFile = context.file; if (!docFile) return; var currentUser = context.getSystemUser(); if (!currentUser) throw "Error: currentUser == NULL"; for (var i=0; i<enumval.length; i++) { // The registers 'reg1' und 'reg2' should be hidden in the file view. if (enumval[i] == "reg1" || enumval[i] == "reg2") enumval[i] = "" } Copy |


## decrease search archives

| Where to define | Property at Documents/Settings: decreaseSearchArchivesScript=Scriptname |
| --- | --- |
|  | Property at Documents/Settings: decreaseSearchArchivesScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0 |
| Context.event | decreaseSearchArchives |
| return value | No |
| Available properties | Context.currentUser, enumval |
| This script exit allows you to reduce the views in the extended search. var publicViews = new Array(); publicViews.push("Unit=Default/Instance=Default/View=Scanners"); publicViews.push("Unit=Default/Instance=Default/View=Invoices"); var currentUser = context.getSystemUser(); if (!currentUser) throw "Error: currentUser == NULL"; if (currentUser.hasAccessProfile("Boss")) { // Boss is authorized to see all view return 0; } // disable all view, that are not public for (var i=0; i<enumval.length; i++) { if (util.searchInArray(publicViews, enumval[i]) < 0) enumval[i] = ""; } Copy |


## decrease search stores

| Where to define | Property at Documents/Settings: decreaseSearchStoresScript=Scriptname |
| --- | --- |
|  | Property at Documents/Settings: decreaseSearchStoresScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0c |
| Context.event | decreaseSearchStores |
| return value | No |
| Available properties | Context.currentUser, enumval |
| This script exit allows you to reduce the number of EDA and EBIS stores in the extended search. The object enumval contains the names of these stores. var publicStores = new Array(); publicStores.push("Invoice2016"); publicStores.push("Invoice2017"); var currentUser = context.getSystemUser(); if (!currentUser) throw "Error: currentUser == NULL"; if (currentUser.hasAccessProfile("Boss")) { // Boss is authorized to see all stores return 0; } // remove all stores, that are not public for (var i=0; i<enumval.length; i++) { if (publicStores.indexOf(enumval[i]) < 0) enumval[i] = ""; } Copy |


## decrease search file types

| Where to define | Property at Documents/Settings: decreaseSearchFileTypesScript=Scriptname |
| --- | --- |
|  | Property at filetype: decreaseSearchFileTypesScript=ScriptName1,ScriptName2,... since 6.0 |
| Since | 5.0c |
| Context.event | decreaseSearchFileTypes |
| return value | No |
| Available properties | Context.currentUser, enumval |
| This script exit allows you to reduce the number of filetypes in the extended search. The object enumval contains the names of these filetypes. var confidentialFiletypes = new Array(); confidentialFiletypes.push("SecretLetters"); confidentialFiletypes.push("Salery"); var currentUser = context.getSystemUser(); if (!currentUser) throw "Error: currentUser == NULL"; if (currentUser.hasAccessProfile("Boss")) { // Boss is authorized to search in all filetypes return 0; } // remove all filetypes, that are confidential for (var i=0; i<enumval.length; i++) { if (confidentialFiletypes.indexOf(enumval[i]) >= 0) enumval[i] = ""; } Copy |


## decrease creation file types

| Where to define | Property at Documents/Settings: decreaseCreationFileTypesScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | decreaseCreationFileTypes |
| return value | No |
| Available properties | Context.currentUser, enumval |
| This script exit allows you to reduce the number of filetypes in the 'create new file' dialog. The object enumval contains the names of the filetypes. var technicalFiletypes = new Array(); technicalFiletypes.push("_otrUser"); technicalFiletypes.push("_otrGroup"); // remove all filetypes, that are technical for (var i=0; i<enumval.length; i++) { if (technicalFiletypes.indexOf(enumval[i]) >= 0) enumval[i] = ""; } Copy |


## access script

| Where to define | Property at filetype: AccessScript=Scriptname |
| --- | --- |
| Since | 5.0 |
| Context.event | accessScript |
| return value | No |
| Available properties | Context.currentUser, Context.file, enumval |
| This script exit is called, whenever read access to a file is requested, and it can be used to set conditions for this request. The object enumval can be used to set four different rights: DlcFile_RightRead, DlcFile_RightWrite, DlcFile_RightChangeWorkflow and DlcFile_RightReactivate. This event should be used carefully, as it is very resource-intensive. The DlcFile_RightRead determines whether a file can be opened in the web. var myFile = context.file; if(!myFile) throw "Not in a file context"; var read = "1"; var write = "0"; var changeWorkflow = "0"; var reactivate = "0"; var loginFileOwner = myFile.getAutoText("fileOwner.login"); var loginCurrentUser = context.currentUser; if (loginFileOwner == loginCurrentUser) write = "1"; for (var i = 0; i < enumval.length; i++) { switch (enumval[i]) { case "DlcFile_RightRead": enumval[i] = read; break; case "DlcFile_RightWrite": enumval[i] = write; break; case "DlcFile_RightChangeWorkflow": enumval[i] = changeWorkflow; break; case "DlcFile_RightReactivate": enumval[i] = reactivate; break; } } Copy |


## hide mail template in file view

| Where to define | Property at filetype: allowedMailTemplatesScript=Scriptname |
| --- | --- |
| Since | 5.0a |
| Context.event | allowedMailTemplates |
| return value | No |
| Available properties | Context.currentUser, Context.file, enumval |
| This script exit allows you to hide an email template in the file view. The object enumval contains a list of all email template names. To remove a template from the action list, overwrite its name with an empty string. var docFile = context.file; if (!docFile) return; var currentUser = context.getSystemUser(); if (!currentUser) throw "Error: currentUser == NULL"; for (var i=0; i<enumval.length; i++) { // The E-mail template mailComplain should be hidden in the file view. if (enumval[i] == "mailComplain") enumval[i] = "" } Copy |


## hide print template in file view

| Where to define | Property at filetype: allowedPrintTemplatesScript=Scriptname |
| --- | --- |
| Since | 5.0a |
| Context.event | allowedPrintTemplates |
| return value | No |
| Available properties | Context.currentUser, Context.file, enumval |
| This script exit allows you to hide a print template in the file view. The object enumval contains a list of all print template names. To remove a print template from the action list, overwrite its name with an empty string. var docFile = context.file; if (!docFile) return; var currentUser = context.getSystemUser(); if (!currentUser) throw "Error: currentUser == NULL"; for (var i=0; i<enumval.length; i++) { // The print template invoiceTemplate should be hidden in the file view. if (enumval[i] == "invoiceTemplate") enumval[i] = "" } Copy |


## hide document template in edit mode

| Where to define | Property at filetype, register: allowedDocumentTemplatesScript=Scriptname |
| --- | --- |
| Since | 5.0a |
| Context.event | allowedDocumentTemplates |
| return value | No |
| Available properties | Context.currentUser, Context.file, enumval, (Context.register) |
| This script exit allows you to hide a document template at the register in the file edit mode. The object enumval contains a list of all document template names. To remove the document template from the register action list, overwrite the template name with an empty string. var docFile = context.file; if (!docFile) return; var currentUser = context.getSystemUser(); if (!currentUser) throw "Error: currentUser == NULL"; for (var i=0; i<enumval.length; i++) { // The document template letterComplain should be hidden in the edit mode. if (enumval[i] == "letterComplain") enumval[i] = "" } Copy |


# Document retrieval


## on search request

| Where to define | Property at Documents/Settings: OnSearchScript=ScriptName |
| --- | --- |
| Since | 5.0 |
| Context.event | onSearch |
| return value | The return value must be an integer code, and it is usually zero. A negative value indicates an error and the search will subsequently be canceled. A few request types also allow a positive return value to indicate a warning message, which shall be displayed without cancelling the search. To avoid possible conflicts with existing codes, custom return codes should be in the range -1000 to -100 or +100 to +1000. |
| Available properties | Context.currentUser, Context.file (only for dynamic register queries), Context.folderName (only for folder queries) |
| This script exit will be called when the DocumentsServer starts processing a search request. This exit can be used to cancel requests and return a custom error. Another possible use case is optimising requests for a special project. See the DocQueryParams class for details and an example. |


## on preparation of a search formular

| Where to define | Property at Documents/Settings: FillSearchMaskScript=ScriptName |
| --- | --- |
| Since | 5.0 |
| Context.event | onFillSearchMask |
| return value | None |
| Available properties | Context.currentUser |
| This script exit will be called when DOCUMENTS is about to present a search form to the user. The attached script can examine the selected search resources and available search fields. Subsequently, it may place some default values in the search fields. It can also declare some of these values as write-protected. The script should not perform lengthy tasks, because it will be called frequently. |
| A brief example: var par = context.getQueryParams(); var cnt; for(cnt = 0; cnt < par.searchFieldCount; ++cnt) { var feld = par.getSearchField(cnt, false); if(feld.name == "hrSuperior") feld.setDefault("schmidt", true); } Copy |


## modify support form

| Where to define | Script with defined prefix in script name: ScriptName must start with InfoDialogAddition |
| --- | --- |
| Since | 5.0d HF1 |
| Context.event | supportInfo |
| return value | None |
| Available properties and parameters | Context.currentUser, param.supportInfoData |
| If the documents settings property HasSupportForm is set to 1, there is an option in Client V to show and send a support form. Before the support form is shown, the documents server searches for scripts with the prefix InfoDialogAddition in their names. These scripts can modify the form's content. This is done by modifying the parameter param.supportInfoData. This parameter contains the supportInfo as a JSON string. |
| JavaScript example // Scriptname is "InfoDialogAdditionMysolution" // Output param.supportInfoData: var data = param.supportInfoData; util.out(data); // Set param.supportInfoData: var obj = JSON.parse(data); obj.suppFormMailTo.value = "support@mysolution.com"; param.supportInfoData = JSON.stringify(obj); Copy JSON example for param.supportInfoData { "suppForm": true, "suppInfoHeader": "Systeminformationen", "suppInfo": [ { "Documents": "5.0d #2064 dbg x64 UTF-8 MS SQL Server\r\nAug 7 2018 - 2064.133939/J133931 branches/fixes/8.0d" }, { "Archive": "archiv: EAS eas-core-1.1.7-26 (develop)\r\nboost-1_59\r\nclucene-core-0.9.23\r\ncryptopp-562\r\nsqlite-3.19.2\r\nxerces-c-3.1.2\r\nOpenSSL 1.0.2k 26 Jan 2017\r\nICU-58.2\r\nmod_eas-1.1.7-26 (develop)\r\nlibapr-1.5.2\r\nlibapreq-2.8.1-dev\r\n" }, { "Host": "Doc5Dev11" }, { "OS": "Windows 7 (Service Pack 1)" }, { "CPU": "Intel(R) Xeon(R) CPU W3520 @ 2.67GHz - 4 Cores" }, { "DB": "Microsoft SQL Server 2014 - 12.0.2269.0 (X64) " }, { "Principal": "dopaag" } ], "suppFormHeader": "Support-Meldung", "suppFormMailTo": { "label": "E-Mail Support", "value": "support@otris.de", "readonly": true }, "suppFormName": { "label": "Kontakt", "value": "Schreiber, Willi", "readonly": false }, "suppFormMailFrom": { "label": "E-Mail", "value": "schreiber@dopa.ag", "readonly": false }, "suppFormPhone": { "label": "Telefonkontakt", "value": "023112345-12", "readonly": false }, "suppFormSubject": { "label": "Betreff der Anfrage", "value": "", "readonly": false }, "suppFormMessage": { "label": "Text der Anfrage", "value": "", "readonly": false } } Copy |


## modify download list

| Where to define | Script with defined prefix in script name: ScriptName must start with DownloadDialogAddition ( DownloadDialogAddtion if you're using a version prior to documents 6.1.3) |
| --- | --- |
| Since | 5.0d HF1 |
| Context.event | downloadInfo |
| return value | None |
| Available properties and parameters | Context.currentUser, param.downloadInfoData |
| This script can modify the content of the Download Dialog. This is achieved by modifying the parameter param.downloadInfoData. This Parameter contains the information about all download files as a JSON string. Note: Before Documents Version 6.1.3, the prefix for this exit was DownloadDialogAddtion. From version 6.1.3 and onward both prefixes work for backwards compatibility. |
| JavaScript example // Scriptname is "InfoDialogAdditionMysolution" // Output param.downloadInfoData: var data = param.downloadInfoData; // util.out(data); var arr1 = JSON.parse(data); // modify arr1, e.g. remove the "DOCUMENTS Drop" part var arr2 = arr1.filter(element => !element.label.startsWith("DOCUMENTS Drop")); //util.out(JSON.stringify(arr2)); param.downloadInfoData = JSON.stringify(arr2); Copy |