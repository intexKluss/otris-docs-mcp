---
title: "Changelog | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/changelog.html"
---

# Changelog

**Changes in version DOCUMENTS 6.3.0:**

- New method Context.filterFiletypeByFields(fieldNames)()

**Changes in version DOCUMENTS 6.2.2:**- New method Context.resetScriptUser()

**Changes in version DOCUMENTS 6.2.0:**- New method Util.getAsImages()
- New method Document.getAsImages()
- New method Document.getDocumentContent()
- New method Document.setDocumentContent(docContent)
- New method Document.getActiveVersion()
- New method Document.setActiveVersion(version)
- New method Document.getVersions()
- New method Document.deleteVersion(version)
- New method File.readBuffer(buffer, charsNo)
- More types for the parameter `data` of the method File.writeBuffer(data, charsNo)
- New method Util.byteLength(input, encoding)
- New method Util.generateRandomString(length, encoding)
- New method Util.zipFolder(path)
- New method Util.unzipFile(path)

**Changes in version DOCUMENTS 6.1.3:**- New method ScriptCall.getReturnType()

**Changes in version DOCUMENTS 6.1.1:**- New method ScriptCall.setEnumval(enumValues)

**Changes in version DOCUMENTS 6.1.0:**- New properties XMLHTTPRequest.connectTimeout and XMLHTTPRequest.timeout
- New method CustomProperty.setFile()
- New method DocFile.addCustomProperty()
- New method DocFile.setOrAddCustomProperty()
- New method DocFile.getCustomProperties()
- New method DocFile.delelteWorkflowSteps()
- New parameter `deleteSteps` for method DocFile.cancelWorkflow()
- New parameter `enumSource` for method Context.getEnumLocaleValues()
- New method DocHit.reload()

**Changes in version DOCUMENTS 6.0.2:**- New method Util.readBinaryFileAsBase64(string path)
- New method Util.writeBase64ToBinaryFile(string path, string base64String)
- New method DocumentsRemoteJSON.GetUserInfo(string json)
- New method DocumentsRemoteJSON.GetFileTypes(string json)
- New method Context.getGlobalEnumerations()
- New method Context.createGlobalEnumeration(string name)
- New method Context.deleteGlobalEnumeration(string name)
- New Class GlobalEnumeration
- New Class GlobalEnumerationItem
- New Class GlobalEnumerationIterator
- New Class GlobalEnumerationItemIterator


**Changes in version DOCUMENTS 6.0.1:**- New method XMLHTTPRequest.addEventListener(type, handler)
- New method XMLHTTPRequest.removeEventListener(event, handler)
- New method XMLHTTPRequest.yield()
- New method Context.getEnumLocaleValues(string fileType, string fieldName, Array enumKeys, Array enumLocales, string locale)
- New method DocumentsRemoteJSON.TestSession(string json)
- New method DocumentsRemoteJSON.GetAutoText(string json)
- New method DocumentsRemoteJSON.FollowUp(string json)
- New method DocumentsRemoteJSON.ArchiveFiles(string json)
- New method Util.verify(string algorithm, string publicKey, var payload, string signature, boolean urlStyle)


**Changes in version DOCUMENTS 6.0:**- New method SystemUser.generateAPIKey(label, deviceInfo)
- Chrome V8 is now the embedded Scripting-Engine. For breaking changes s. https://otris.software
- New method XMLExport.addEnumeration(String name)
- New method SystemUser.delegateFilesToUser(String login)
- New method Register.moveDocument(Document doc, int position)
- New method Context.getAllLockedDocumentsInfo()
- New methods HitResultset.putAside(number lifetime, String id) and HitResultset.reintegrate(String id)
- New classes Workflow and WorkflowIterator
- New method Context.getAllWorkflows(number typeFlags)
- New method Context.getWorkflowByName(string name)
- New method Document.moveToDocFile(DocFile targetFile, Register targetRegister)
- New parameter format for the following methods:
XMLExport.addFileType(String fileTypeName, String format)
XMLExport.addFileTypesFromCategory(String categoryName, String format)
XMLExport.addFileTypesFromFolder(String folderName, String format)


**Changes in version DOCUMENTS 5.0i HF10:**- New parameter sortOrder for the method Context.findLogBookEntries(filter, sortOrder)
- New method Util.removeCtrlCharacters(input)


**Changes in version DOCUMENTS 5.0i HF7:**- New method Context.getAllAliases()
- New method Context.getAliasByName(string name)
- New method Alias.setLabel(string label)
- New Class AliasIterator


**Changes in version DOCUMENTS 5.0i HF6:**- New method Context.createAlias(string name, string userLogin)
- New Class Alias


**Changes in version DOCUMENTS 5.0i HF5:**- New method DocFile.getLockedBy()
- New method DocFile.deleteScratchCopy()
- New method Context.getFilesWithScratchCopy()
- New method Context.findSystemUserByLoginAlias(string loginAlias)
- New method Context.getScriptOrigin(string scriptName)
- New method Context.exportList(string inJSON)
- New method CustomProperty.uploadBlob(string filePath)
- New method CustomProperty.downloadBlob(string filePath)
- New parameter locale in context.getFromSystemTable


**Changes in version DOCUMENTS 5.0i HF3:**- New method ScriptCall.addParameterWithType(string name, var value, string datatype)
- New method DocumentsRemoteJSON.DeleteFiles(string json)


**Changes in version DOCUMENTS 5.0i HF1:**- New method Util.getBaseURL()


**Changes in version DOCUMENTS 5.0i:**- New parameters startTag and endTag for the following methods:
Context.getAutoText(String autoText, String startTag, String endTag)
DocFile.getAutoText(String autoText, String startTag, String endTag)
WorkflowStep.getAutoText(String autoText, String startTag, String endTag)
- New method Context.getWorkflowsFromFileType(String fileTypeName, boolean onlyReleased)
- New method Util.getIniValue(String name)
- Context.enableModules(Object root, number flags) can define a main module
- New property module.filename (applies to modules loaded by require() and to the main module)
- Context.getActionByName(String name) returns global user defined action
- DocFile.checkLifeCycleScript(String event)
- New parameter checkLifeCycleScript in DocFile.sync()
- New method DocFile.seal(boolean value) and DocFile.isSealed()
- New method ArchiveServer.getRetentionPolicies()
- New class EmailIterator
- New method Email.getAttribute(String attribute)
- New method Email.setAttribute(String attribute, String value)
- New method Email.remove()
- New method Context.getMails()
- New class DocumentsRemoteJSON


**Changes in version DOCUMENTS 5.0h HF1:**- Important! New property Context.returnValue - the return Statement is deprecated!
- New property Context.repositoryPath
- New property Context.repositorySize
- New property Context.repositoryCount
- New script-exit after creating user
- New method Context.findLogBookEntries(String filter)
- New method DocFile.getStatusAsJSON(String locale)
- New method Util.runPDFTool(String command, String inPdf, String outPdf, String jsonData, String addParam1, String addParamN)


**Changes in version DOCUMENTS 5.0h:**- New method DocFile.getUserRead(String login)
- New parameter checkAccessRight in Folder.getSubFolders(boolean checkAccessRight)
- New parameter checkAccessRight in Context.getFoldersByName(String folderPattern, String type, boolean checkAccessRight)
- The parameter nameCategory in XMLExport.addPortalScriptsFromCategory(String nameCategory, String format) is now optional
- The parameter categoryName in XMLExport.addFileTypesFromCategory(String categoryName) is now optional
- New method DocFile.getRuleValue(String value, String type)
- New method DocFile.checkRule(String jsonRule)
- New method Util.deleteDirectory(String dirPath)
- New method XMLExport.addFileLinkTemplate(String templateName)
- New method DocFile.readEASRecordAnnotations(String typeName)
- New method DocFile.writeEASRecordAnnotations(String annoJSON, String annoType, boolean mergeForeignTypes)
- New method DocFile.readEASLifeCycle()
- New method DocFile.writeEASLifeCycle(String jsonString)
- New script-exit on add file-link
- New script-exit on remove file-link
- New method Util.decodeURIComponent(String uriComponent)


**Changes in version DOCUMENTS 5.0g HF2:**- New method Context.updateSearchFieldCache(String fileTypeName)
- New method Context.submitFileChanges(String fileTypeName, boolean withStatusEntry)
- New method SystemUser.invalidateFolderCache()


**Changes in version DOCUMENTS 5.0g:**- New parameter includeSubProfiles in AccessProfile.getSystemUsers(boolean includeLockedUsers, boolean includeInvisibleUsers, boolean includeSubProfiles);
- New method AccessProfile.getSubProfiles()
- New method AccessProfile.getParentProfile()
- New method Context.setPrincipalStatus(String status)
- New method Context.getPrincipalStatus()
- New method SystemUser.setStatus(String status)
- New method SystemUser.getStatus()
- New method Context.setGlobalAttribute(String attributeName, String value)
- New method Context.getGlobalAttribute(String attributeName)
- New parameter shortMessage for the following methods:
DocFile.getLastError(boolean shortMessage)
Context.getLastError(boolean shortMessage)
WorkflowStep.getLastError(boolean shortMessage)
SystemUser.getLastError(boolean shortMessage)
AccessProfile.getLastError(boolean shortMessage)
Folder.getLastError(boolean shortMessage)
Register.getLastError(boolean shortMessage)
Document.getLastError(boolean shortMessage)
ScriptCall.getLastError(boolean shortMessage)
Email.getLastError(boolean shortMessage)
ArchiveServer.getLastError(boolean shortMessage)
- New method SystemUser.isAbsent()
- New method SystemUser.getAbsentFrom()
- New method SystemUser.getAbsentUntil()
- New method SystemUser.getSendAbsenceMail()
- New method SystemUser.getAbsentMessage()
- New method XMLHTTPRequest.setRedirect(int count)
- New script-exit after life cycle action
- New method CustomProperty.setParentProperty(CustomProperty parentProperty)
- New method Util.encodeURIComponent(String uriComponent)


**Changes in version DOCUMENTS 5.0f HF2:**- New parameter includeInvisibleUsers in Context.getSystemUsers(boolean includeLockedUsers, boolean includeInvisibleUsers)


**Changes in version DOCUMENTS 5.0f HF1:**- The script-exits loginScript, afterLoginScript, autoLoginScript, afterAutoLoginScript, logoutScript now support multiple scripts
- DocFile.archiveAndDelete() deletes the file now into the file pool
- DocFile.sendFileAdHoc(Array receivers, String sendMode, String task, boolean backWhenFinished) supports now multiple users for sequentiell sending
- New script-exit before workflow assign
- New method WorkflowStep.getAutoText(String autoText)
- New script-exit to filetype changed
- New script-exit from filetype changed


**Changes in version DOCUMENTS 5.0f:**- New option for referenceFile parameter of the method DocFile.setReferenceFile(String fieldName, DocFile referenceFile):
referenceFile = null for deselecting the referred file.
- New Context property Context.actionName for the user defined action the current script is executed for.
- New parameter includeSubProperties in CustomProperty.deleteCustomProperty(boolean includeSubProperties)
- New method Context.copyFileType(String sourceFileTypeName, String targetFileTypeName, boolean released)
- New parameter logObject in Context.writeLogBook(int actionCode, String detail1, String detail2, String detail3, var logObject)
- The class DOMNode and all its subclasses have been upgraded to DOM Level 2
- New classes DOMDocumentType, DOMEntity, DOMProcessingInstruction
- New property DOMParser.loadExternalDTD
- New method FileResultset.getIdsJSON()
- New static functions FileResultset.fromIds(string[] idList), FileResultset.fromIdsJSON(string idList)
- New parameter flags in Context.enableModules(Object root, number flags)
- New parameters in Folder.getHitResultset(var hitlist, String sortOrder, String fulltextFilter, number pageSize)
- New method Register.getHitResultset(var hitlist, String sortOrder, String fulltextFilter, number pageSize)
- New property HitResultset.searchability
- New method Context.getDocumentTemplateFromFileType(String fileTypeName, String templateName, boolean content)
- New method Register.getDocumentByName(String nameWithExt)
- New method Document.readAsString(String version)
- New method Document.doOCR(boolean background, String ocrTextFormat, String ocrTextTarget)
- New script-exit after OCR
- New method Document.extractText(String options)


**Changes in version DOCUMENTS 5.0e HF2:**- New parameter updateXML in XMLExport.addFolder(Folder folder, boolean exportStructure, var exportCondition, boolean updateXML)
- New method Document.reindexBlob()
- New method Document.setDocumentName(String nameWithExt)
- New parameter updateXML in XMLExport.addFolder(Folder folder, boolean exportStructure, var exportCondition, boolean updateXML)
- New script-exit hide receivers for indirect forwarding
- New script-exit hide options for indirect forwarding
- New parameter returnType in DocFile.getFieldValue(String fieldName, String returnType)
- New method DocFile.getDoubleSelectListValues(String fieldName, boolean resolved)
- For a double select list field the parameter value in DocFile.setFieldValue(String fieldName, var value) may be passed as an Array of strings
- Script-Exit after login has new property Context.currentUser
- Script-Exit after login with single sign on has new property Context.currentUser
- ScriptCall.setRunAsEnumScript(boolean runAsEnumScript)
- ScriptCall.isFinished()


**Changes in version DOCUMENTS 5.0e:**- New method XMLExport.addFileTypesFromCategory(String categoryName)
- New method XMLExport.addFileTypesFromFolder(String folderName)
- New method Util.hash(String filePath, String hashfunction)
- New method Document.hash(String hashfunction, String version)
- New classes for creating Excel files:
XLSXWriter
XLSXWorksheet
XLSXChartsheet
XLSXFormat
XLSXChart
XLSXChartSeries
XLSXChartAxis
- New method Context.reloadPrincipal(String principalName, boolean pemReload)
- New method Context.reloadCurrentPrincipal(boolean pemReload)
- New method Context.getDocumentById(String idFile, String idDocument)
- XMLHTTPRequest supports PATCH request.
- New method DocFile.setReferenceFile(String fieldName, DocFile referenceFile)
- New method Context.writeLogBook(int actionCode, String detail1, String detail2, String detail3)
- New search operator ">~" (has line) in FileResultset filter expressions.
- New method Util.convertDateToExcelDate(Date timeStamp)
- New parameter easDeleteMode in DocFile.deleteFile(boolean moveTrash, boolean movePool, boolean allVersions, integer easDeleteMode)
- New script-exit available blobs in email
- New property Document.id


**Changes in version DOCUMENTS 5.0d:**- New method Register.removeFileLink(DocFile file)
- New method Register.addFileLink(DocFile file)
- New method XMLExport.addCustomProperty(String propName)
- New method AccessProfile.setParentProfile(AccessProfile parentProfile)
- New method HitResultset.getHitIds(boolean withServer)
- New method Context.enableModules(Object root)
- New script-exit on connecting file to inbox
- New directive \#import cached - experimental
- New directive require()- experimental
- New property Context.folder
- New property Folder.systemUser
- New method ScriptCall.setFolder(Folder folder)
- FileResultset is now a iterable object and supports for..of loops
- ArchiveFileResultset is now a iterable object and supports for..of loops
- HitResultset is now a iterable object and supports for..of loops


**Changes in version DOCUMENTS 5.0c HF2:**- New parameters includeLockedUsers and includeInvisibleUsers for the method AccessProfile.getSystemUsers(boolean includeLockedUsers, boolean includeInvisibleUsers)
- New method Util.makeGACLValue(var val1, var val2, ...)
- New method SystemUser.setAccessProfiles(var apNames1, var apNames2, ...)
- New method Context.hasPEMModule(Integer moduleConst)
- New method DocFile.asJSON(string[] fieldList) and DocFile.fromJSON(String jsonstring)


**Changes in version DOCUMENTS 5.0c HF1:**- Context.createFile() now supports direct creation of a file for EDA/EAS and EBIS stores
- DBResultSet.getString() now supports SQL_GUID data type
- New method Context.doMaintenance(String operationName)
- New method Register.getLocaleLabel(String locale)
- New method Context.getLocaleValue(String value, String locale)
- New method Document.getRegister()
- New method Register.getFile()


**Changes in version DOCUMENTS 5.0c:**- XMLHTTPRequest extension for binary content and file transfers
- XMLHTTPRequest supports system proxy configuration on windows
- XMLHTTPRequest supports additional to Basic now Digest & NTLM authentification
- New method SystemUser.getAllFolders()
- New method DocFile.getTitle(String locale)
- New method DocFile.getid()
- New method DocFile.getCreator(bool asObject)
- New method DocFile.getLastModifier()
- New method DocFile.getCreationDate()
- New method DocFile.getLastModificationDate()
- New Script-Exit on DOCUMENTS settings decrease search stores
- New parameter withBlobInfo for the method HitResultset.HitResultset(Var searchResources, String filter, String sortOrder, Var hitlist, Integer pageSize, Boolean unlimitedHits, Boolean withBlobInfo)
- New method DocHit.getBlobInfo()
- New method FileResultset.getIds()
- New parameter checkAccessRight for the method DocFile.getRegisters(String type, boolean checkAccessRight)
- New parameter checkAccessRight for the method DocFile.getRegisterByName(String registerName, boolean checkAccessRight)
- New method DocFile.getFieldAutoText(String fieldName, String autoText)
- New Script-Exit on DOCUMENTS settings decrease search file types


**Changes in version DOCUMENTS 5.0b:**- New method Folder.getFilterFileTypes()
- New method Util.hmac(String hashfunction, String key, String message, Boolean rawOutput)
- New method Util.sha256(String message)
- New method SystemUser.getAccess(DocFile docFile)
- New parameter updateModifiedDate for the method DocFile.sync(Boolean checkHistoryFields, bool notifyHitlistChange, bool updateRefFields, bool updateModifiedDate)
- New method Util.encryptString(String input)
- New method Util.decryptString(String input)
- New method DocFile.getAllWorkflowSteps()


**Changes in version DOCUMENTS 5.0a:**

- New method SystemUser.addFileTypeAgent(var fileTypes, Array loginNames)
- New method SystemUser.addFileTypeAgentScript(var fileTypes, String scriptName)
- New method SystemUser.removeFileTypeAgent(var fileTypes)
- New method SystemUser.listFileTypeAgents(String fileType)
- New method SystemUser.listAgentFileTypes()
- New parameters (from and until) for the method SystemUser.setAbsent(Boolean absent, Boolean filesDueAbsenceToInfo, Array agents, Boolean removeFromAgentInbox, Date from, Date until)
- New method SystemUser.notifyNewFileInInbox(Boolean notifying)
- New method SystemUser.notifyFileReturnedFromSending(Boolean notifying)
- New Script-Exit allowedMailTemplatesScript on filetype
- New Script-Exit allowedPrintTemplatesScript on filetype
- New Script-Exit allowedDocumentTemplatesScript on register and filetype
- New property SystemUser.email
- New formats for Util.convertDateToString(Date dateOrTimeStamp, String format)
- New formats for Util.convertStringToDate(String dateOrTimeStamp, String format)
- New parameter (updateRefFields) for the method DocFile.sync(Boolean checkHistoryFields, bool notifyHitlistChange, bool updateRefFields)
- New method Util.sleep(Integer duration)
- New method Util.encodeUrlCompatible(String param)
- New method Util.decodeUrlCompatible(String encodedParam)
- Class XMLServer was renamed to ArchiveConnection, because the class provides also access to EAS and EBIS archive interface
- New method ArchiveConnection.sendEbisRequest(String resourceIdentifier, String postData, Array() extraHeaders)
- Class XMLServerBlob was renamed to ArchiveConnectionBlob
- Class XMLServerBlobIterator was renamed to ArchiveConnectionBlobIterator
- Method Context.getXMLServer(String archiveServerName) declared as deprecated
- New method Context.getArchiveConnection(String archiveServerName)
- New Method Context.getArchiveServer(String name)
- New Method Context.getArchiveServers()
- New class ArchiveServer
- New method ArchiveServer.getArchiveConnection()
- New Method Context.getFolderPosition(Folder folder)
- New Method Context.setFolderPosition(Folder folder, int position)


**Changes in version DOCUMENTS 5.0 HF2:**

- New method XMLExport.addSystemUser(var systemUser, bool includePrivateFolders)
- New method XMLExport.addPartnerAccount(var userAccount, bool includePrivateFolders)
- Fields in a DocHit are now accessible as \link DocHit.columnName properties\endlink, just like in \link DocFile DocFiles\endlink.


**Changes in version DOCUMENTS 5.0 HF1:**

- Changed method XMLExport.addPortalScript(String scriptName, String format) for format 4.0 / 5.0
- Changed method XMLExport.addPortalScriptsFromCategory(String nameCategory, String format) for format 4.0 / 5.0


**Changes in version DOCUMENTS 5.0:**

- E4X was removed
- New property SystemUser.propCache
- New property AccessProfile.propCache
- New method Context.findCustomProperties(String filter)
- New method Context.getCustomProperties(String nameFilter, String typeFilter)
- New method Context.setOrAddCustomProperty(String name, String type, String value)
- New method Context.addCustomProperty(String name, String type, String value)
- New method AccessProfile.getCustomProperties(String nameFilter, String typeFilter)
- New method AccessProfile.setOrAddCustomProperty(String name, String type, String value)
- New method AccessProfile.addCustomProperty(String name, String type, String value)
- New method CustomProperty.getSubProperties(String nameFilter, String typeFilter)
- New method CustomProperty.setOrAddSubProperty(String name, String type, String value)
- New method CustomProperty.addSubProperty(String name, String type, String value)
- New method CustomProperty.setFiletype(String nameFiletype)
- New method CustomProperty.setSystemUser(String login)
- New method CustomProperty.setAccessProfile(String nameAccessProfile)
- New method DocFile.sendFileAdHoc(Array receivers, String sendMode, String task, Boolean backWhenFinished)
- New method ScriptCall.addParameter(String name, String value)
- New method ScriptCall.getReturnValue()
- New method Context.getFileTypeOID(String nameFiletype, Boolean oidLow)
- New method Context.getClientType()
- New method DBResultSet.getNumCols()
- New method DBResultSet.getColName(int colNo)
- New method DocFile.changeFiletype(String nameFiletype)
- New method XMLExport.addDocumentsSettings()
- Script-Exit decreaseFieldRightOnFileViewScript: New property Context.register
- New method XMLExport.addSystemUser(var systemUser, bool includePrivateFolders)
- New method XMLExport.addPartnerAccount(var userAccount, bool includePrivateFolders)

**Changes in version DOCUMENTS 4.0d (HF1):**

- New option for hitlist parameter of the method HitResultset.HitResultset(Var searchResources, String filter, String sortOrder, Var hitlist, Integer pageSize, Boolean unlimitedHits):
An array of field names instead of a hitlist name to specify the available columns in the resultset
- New method ScriptCall.addParameter(String name, String value)
- New method ScriptCall.getReturnValue()
- New method Context.getFileTypeOID(String nameFiletype, Boolean oidLow)
- New method Context.getCustomProperties(String nameFilter, String typeFilter)
- New method Context.findCustomProperties(String filter)
- New method Context.setOrAddCustomProperty(String name, String type, String value)
- New method Context.addCustomProperty(String name, String type, String value)
- New method AccessProfile.getCustomProperties(String nameFilter, String typeFilter)
- New method AccessProfile.setOrAddCustomProperty(String name, String type, String value)
- New method AccessProfile.addCustomProperty(String name, String type, String value)
- New method CustomProperty.getSubProperties(String nameFilter, String typeFilter)
- New method CustomProperty.setOrAddSubProperty(String name, String type, String value)
- New method CustomProperty.addSubProperty(String name, String type, String value)
- New method CustomProperty.setSystemUser(String login)
- New method CustomProperty.setAccessProfile(String nameAccessProfile)
- New method CustomProperty.setFiletype(String nameFiletype)
- New method DocFile.sendFileAdHoc(Array receivers, String sendMode, String task, Boolean backWhenFinished)
- New property SystemUser.propCache and AccessProfile.propCache for user dependent or access profile dependent property caches
- New parameter oidLow for the method SystemUser.getOID(Boolean oidLow)
- New parameter oidLow for the method AccessProfile.getOID(Boolean oidLow)
- New parameter oidLow for the method DocFile.getOID(Boolean oidLow)
- New parameter oidLow for the method Register.getOID(Boolean oidLow)
- New parameter oidLow for the method Document.getOID(Boolean oidLow)
- New parameter oidLow for the method WorkflowStep.getOID(Boolean oidLow)
- New parameter oidLow for the method Folder.getOID(Boolean oidLow)
- New parameter oidLow for the method UserAction.getOID(Boolean oidLow)


**Changes in version DOCUMENTS 4.0d:**

- New method SystemUser.getUserdefinedInboxFolders()
- New method SystemUser.getIndividualFolders()
- New method DocFile.disconnectArchivedFile()
- New parameter bcc for the method DocFile.sendMail(String from, String templateName, String to, String cc, Boolean addDocs, String bcc)
- New method DocFile.hasField(String fieldName)
- New method Folder.getActionByName(String actionName)
- New class UserAction
- New parameter version for the method Document.downloadDocument(String filePath, String version)
- New method Document.uploadDocument(String sourceFilePath, Boolean versioning)
- New method XMLExport.addOutbar(String outbarName)
- New class Email
- New method SystemUser.getBackDelegatedFiles(Boolean removeFromAgentInbox)
- New class ScriptCall
- New variant of the Script-Exit "onDelete" for archived files ("onDeleteAll").
- Added fixed formats for dates and numbers in filter expressions
- New property DOMDocument.documentElement
- New script exits "OnSearch" and "FillSearchMask"
- New script exits "OnSearch" and "FillSearchMask"
- New classes DocQueryParams, RetrievalSource and RetrievalField
- New Script-Exit "afterSetReferenceFieldScript" for reference fields.


**Changes in version DOCUMENTS 4.0c (HF2):**- New documentation for the class XMLHTTPRequest
- Changed method DocFile.setFieldValue(String fieldName, var value) for multi-instance fields of an EE.i/EE.x archive file
- Changed method DocFile.getFieldValue(String fieldName) for multi-instance fields of an EE.i/EE.x archive file
- New method DocFile.countFields(String fieldName)
- New parameter in XMLExport.addFellow(var editor, bool includePrivateFolders)


**Changes in version DOCUMENTS 4.0c (HF1):**- New method DocFile.getUserStatus(String login)
- New method Context.convertDateToString(Date dateOrTimeStamp, String locale)
- New method Util.base64Decode(String value, bool returnArray)
- New method Util.base64Encode(var value, bool returnArray)


**Changes in version DOCUMENTS 4.0c:**- New XML-parser DOMParser @see \ref SimpleDOMSample
- XML-parser E4X is now deprecated and will be removed in future versions!
- New example SOAP Client using DOM
- New script-exit hide register in file view
- New method Util.getFileContentAsString(String filePath)
- New method Util.concatPDF(Array pdfFilePaths, Boolean deleteSinglePdfs)
- New method Util.generateChecksum(String input)
- New method WorkflowStep.setNewExecutiveGroup(String accessProfileName)
- New property WorkflowStep.executiveGroup
- New method Document.getAsPDF()
- New method Document.moveToRegister(Register regObj)
- Overview about \ref FieldAccessMethods
- New method DocFile.getFieldValue(String fieldName)
- New method DocFile.setFieldValue(String fieldName, var value)
- Extensions to XMLExport
- Extensions to Folder


**Changes in version DOCUMENTS 4.0b (HF2):**

- New method Folder.getLocaleLabel(String locale)
- New example SOAP Client with E4X (removed since 5.0)


**Changes in version DOCUMENTS 4.0b (HF1):**

- Changed method SystemUser.addToAccessProfile(AccessProfile ap)
- Changed method SystemUser.removeFromAccessProfile(AccessProfile ap)
- New property Context.selectedDocuments


**Changes in version DOCUMENTS 4.0b:**

- New classes HitResultset and DocHit
- New method Util.getQuoted(String input)
- New method DocFile.getAsPDF(String nameCoverTemplate, Boolean createCover, Array sourceRegisterNames)
- New method Register.getFiles()


**Changes in version DOCUMENTS 4.0a (HF2):**

- New method DocFile.createMonitorFile(Boolean asPdf, String locale)
- New method DocFile.createStatusFile(Boolean asPdf, String locale)


**Changes in version DOCUMENTS 4.0a (HF1):**

- New method Util.length_u(String value)
- New method Util.substr_u(String value, int startIndex, int length)


**Changes in version DOCUMENTS 4.0a:**

- New class CustomProperty
- New class CustomPropertyIterator
- New method SystemUser.getCustomProperties()
- New method SystemUser.setOrAddCustomProperty()
- New method SystemUser.addCustomProperty()


**Changes in version DOCUMENTS 4.0 (HF1):**

- New method SystemUser.invalidateAccessProfileCache()


**Changes in version DOCUMENTS 4.0:**

- Changed method Context.getXMLServer(String archiveServerName)
- Changed method DocFile.archive()
- Changed method DocFile.archive(String archiveKey)
- Changed method DocFile.getOriginal()
- New method DBConnection.executeQueryUC(String sqlStatement)
- New method DBResultSet.getUCString(int colNo)
- New class PropertyCache


**Changes in version 3.60j / otrisPORTAL 6.0j:**

- New property Context.selectedArchiveFiles
- New property Context.selectedArchiveKeys
- New method WorkflowStep.retry(String comment)
- New method FileResultset.last()
- New method ArchiveFileResultset.last()


**Changes in version 3.60i / otrisPORTAL 6.0i:**- New method Context.createAccessProfile(String profileName)
- Method AccessProfile.new(String profileName) is now deprecated
- New method DocFile.reactivate()
- Introduction of PortalScripting for archive files (DocFile, Register, Document)
- New class ArchiveFileResultset
- New method DocFile.isArchiveFile()
- New method Context.getXMLServer()
- New class XMLServer
- New class XMLServerBlob
- New class XMLServerBlobIterator


**Changes in version 3.60g / otrisPORTAL 6.0g:**- New method Context.extProcess(String cmd)
- New method SystemUser.setAbsent(Boolean absent, Boolean filesDueAbsenceToInfo, Array agents)
- New method SystemUser.setAbsentMail(Boolean sendMail, String message)
- New method SystemUser.delegateFilesOfAbsentUser()
- New method SystemUser.getAgents()


**Changes in version 3.60f / otrisPORTAL 6.0f:**- New method Context.createFellow(String loginName, Boolean isDlcUser, String licenseType)


**Changes in version 3.60e / otrisPORTAL 6.0e:**- New method Util.makeFullDir(String dirPath)
- New method Util.getDir(String dirname, Array files, Array subDirs)
- New method Util.fileSize(String filePath)
- New method Util.fileCopy(String sourceFilePath, String targetFilePath)
- New method Util.fileMove(String sourceFilePath, String targetFilePath)
- New method Util.deleteFile(String filePath)
- New method Util.beep(int frequency, int duration)
- New method Util.getEnvironment(String variableName)
- New method Util.makeHTML(String val, Boolean isUTF8)
- New method DocFile.isDeletedFile()
- New method DocFile.undeleteFile()


**Changes in version 3.60d / otrisPORTAL 6.0d:**- New method Util.transcode(String nameSourceEncoding, String text, String nameTargetEncoding)
- New method WorkflowStep.getWorkflowName()
- New method WorkflowStep.getWorkflowVersion()
- New method SystemUser.checkPassword(String passwd)
- New method Register.deleteDocument(Document doc)