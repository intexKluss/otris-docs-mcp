---
title: "Changelog API | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/changelog-api.html"
---

# Changelog API


## DOCUMENTS 6.3.0

- Context.filterFiletypeByFields


## DOCUMENTS 6.2.2

- Context.resetScriptUser


## DOCUMENTS 6.2.0

- Document.getActiveVersion
- Document.setActiveVersion
- Document.getVersions
- Document.deleteVersion
- Document.getDocumentContent
- Document.setDocumentContent
- Document.getAsImages
- File.readBuffer
- Util.generateRandomString
- Util.byteLength
- Util.getAsImages
- Util.zipFolder
- XMLHTTPRequest.setAcceptEncoding
- XMLHTTPRequest.setClientCertificate


## DOCUMENTS 6.1.3

- ScriptCall.getReturnType
- Util.htmlToText
- Util.setLinksPath


## DOCUMENTS 6.1.1

- ScriptCall.setEnumval


## DOCUMENTS 6.1.0

- CustomProperty.setFile
- DocFile.deleteWorkflowSteps
- DocFile.getCustomProperties
- DocFile.addCustomProperty
- DocFile.setOrAddCustomProperty
- DocHit.reload
- Util.getServerConfig
- Util.getServerConfig
- XMLHTTPRequest.connectTimeout
- XMLHTTPRequest.timeout


## DOCUMENTS 6.0.2

- Context.createGlobalEnumeration
- Context.deleteGlobalEnumeration
- Context.getGlobalEnumerations
- DocumentsRemoteJSON.GetFileTypes
- DocumentsRemoteJSON.GetUserInfo
- GlobalEnumeration
- GlobalEnumeration.name
- GlobalEnumeration.description
- GlobalEnumeration.createGlobalEnumerationItem
- GlobalEnumeration.deleteGlobalEnumerationItem
- GlobalEnumeration.getGlobalEnumerationItems
- GlobalEnumeration.getLastError
- GlobalEnumerationItem
- GlobalEnumerationItem.name
- GlobalEnumerationItem.active
- GlobalEnumerationItem.lang0
- GlobalEnumerationItem.lang1
- GlobalEnumerationItem.lang2
- GlobalEnumerationItem.lang3
- GlobalEnumerationItem.lang4
- GlobalEnumerationItem.lang5
- GlobalEnumerationItem.systemvalue
- GlobalEnumerationItemIterator
- GlobalEnumerationItemIterator.first
- GlobalEnumerationItemIterator.next
- GlobalEnumerationItemIterator.size
- GlobalEnumerationIterator
- GlobalEnumerationIterator.first
- GlobalEnumerationIterator.next
- GlobalEnumerationIterator.size
- Util.readBinaryFileAsBase64
- Util.writeBase64ToBinaryFile


## DOCUMENTS 6.0.1

- Context.getEnumLocaleValues
- DocumentsRemoteJSON.TestSession
- DocumentsRemoteJSON.ArchiveFiles
- DocumentsRemoteJSON.GetAutoText
- DocumentsRemoteJSON.FollowUp
- Util.verify
- XMLHTTPRequest.addEventListener
- XMLHTTPRequest.removeEventListener
- XMLHTTPRequest.yield
- XMLHTTPRequest.EventTypes
- XMLHTTPRequest.Event
- XMLHTTPRequest.ReceiveEvent
- XMLHTTPRequest.ReceiveEventHandler
- XMLHTTPRequest.EventHandlerMap


## DOCUMENTS 6.0

- Context.getAllLockedDocumentsInfo
- Context.getAllWorkflows
- Context.getWorkflowByName
- Document.moveToDocFile
- DocumentsRemoteJSON.getLastError
- DocumentsRemoteJSON.getLastErrorCode
- HitResultset.reintegrate
- HitResultset.putAside
- Register.moveDocument
- SystemUser.delegateFilesToUser
- Workflow
- Workflow.name
- Workflow.version
- Workflow.getAllActiveFiles
- Workflow.getAttribute
- WorkflowIterator
- WorkflowIterator.first
- WorkflowIterator.next
- WorkflowIterator.size
- XMLExport.addEnumeration


## DOCUMENTS 5.0i HF7

- Alias.label
- Alias.setLabel
- AliasIterator
- AliasIterator.first
- AliasIterator.next
- AliasIterator.size
- Context.getAliasByName
- Context.getAllAliases


## DOCUMENTS 5.0i HF6

- Alias
- Alias.name
- Alias.systemUser
- Alias.setName
- Alias.setSystemUser
- Alias.getLastError
- Context.createAlias


## DOCUMENTS 5.0i HF5

- Context.findSystemUserByLoginAlias
- Context.exportList
- Context.getScriptOrigin
- Context.getFilesWithScratchCopy
- CustomProperty.uploadBlob
- CustomProperty.downloadBlob
- DocFile.getLockedBy
- DocFile.deleteScratchCopy


## DOCUMENTS 5.0i HF3

- Context.getTimestampsDiff
- DocumentsRemoteJSON.DeleteFiles
- Folder.getAccessProfiles
- ScriptCall.addParameterWithType
- Util.doOCR


## DOCUMENTS 5.0i HF11

- Util.initializeAdminPassword


## DOCUMENTS 5.0i HF10, DOCUMENTS 6.1.2

- Util.removeCtrlCharacters


## DOCUMENTS 5.0i HF1

- Util.getBaseURL


## DOCUMENTS 5.0i

- ArchiveServer.getRetentionPolicies
- Context.getActionByName
- Context.getMails
- Context.getWorkflowsFromFileType
- DocFile.checkLifeCycleScript
- DocFile.isSealed
- DocFile.restore
- DocFile.seal
- DocumentsRemoteJSON.constructor
- DocumentsRemoteJSON.locale
- DocumentsRemoteJSON.CancelWorkflow
- DocumentsRemoteJSON.CloseSession
- DocumentsRemoteJSON.CreateFile
- DocumentsRemoteJSON.DownloadDocument
- DocumentsRemoteJSON.ForwardFile
- DocumentsRemoteJSON.GetFileInfo
- DocumentsRemoteJSON.GetFiles
- DocumentsRemoteJSON.GetPossibleActions
- DocumentsRemoteJSON.GetPrivateFolder
- DocumentsRemoteJSON.GetPublicFolders
- DocumentsRemoteJSON.GetWorkflowPattern
- DocumentsRemoteJSON.Query
- DocumentsRemoteJSON.RunScript
- DocumentsRemoteJSON.SpoolDocument
- DocumentsRemoteJSON.StartWorkflow
- DocumentsRemoteJSON.UpdateFile
- Email.getAttribute
- Email.remove
- Email.setAttribute
- EmailIterator
- EmailIterator.first
- EmailIterator.next
- EmailIterator.size
- Util.getIniValue


## DOCUMENTS 5.0h HF1

- Context.repositoryCount
- Context.repositoryPath
- Context.repositorySize
- Context.returnValue
- Context.findLogBookEntries
- Context.getLicenseInfo
- DocFile.getStatusAsJSON
- Util.runPDFTool


## DOCUMENTS 5.0h

- DocFile.checkRule
- DocFile.getRuleValue
- DocFile.getUserRead
- DocFile.readEASLifeCycle
- DocFile.readEASRecordAnnotations
- DocFile.writeEASLifeCycle
- DocFile.writeEASRecordAnnotations
- Util.decodeURIComponent
- Util.deleteDirectory
- XMLExport.addFileLinkTemplate


## DOCUMENTS 5.0g HF2

- Context.submitFileChanges
- Context.updateSearchFieldCache
- DocFileDataField.writeAccessGui


## DOCUMENTS 5.0g (HF2)

- SystemUser.invalidateFolderCache


## DOCUMENTS 5.0g

- AccessProfile.getParentProfile
- AccessProfile.getSubProfiles
- Context.getGlobalAttribute
- Context.getPrincipalStatus
- Context.setGlobalAttribute
- Context.setPrincipalStatus
- CustomProperty.setParentProperty
- SystemUser.getAbsentFrom
- SystemUser.getAbsentMessage
- SystemUser.getAbsentUntil
- SystemUser.getSendAbsenceMail
- SystemUser.getStatus
- SystemUser.isAbsent
- SystemUser.setStatus
- Util.encodeURIComponent
- XMLHTTPRequest.setRedirect


## DOCUMENTS 5.0f HF2

- Util.extractText


## DOCUMENTS 5.0f HF1

- WorkflowStep.getAutoText


## DOCUMENTS 5.0f

- Context.actionName
- Context.copyFileType
- Context.getDocumentTemplateFromFileType
- DOMAttr.ownerElement
- DOMDocument.doctype
- DOMDocument.createAttributeNS
- DOMDocument.createDocumentFragment
- DOMDocument.createElementNS
- DOMDocument.createEntityReference
- DOMDocument.createProcessingInstruction
- DOMDocument.getElementById
- DOMDocument.getElementsByTagNameNS
- DOMDocument.importNode
- DOMDocumentType.constructor
- DOMElement.getAttributeNodeNS
- DOMElement.getAttributeNS
- DOMElement.getElementsByTagNameNS
- DOMElement.hasAttribute
- DOMElement.hasAttributeNS
- DOMElement.removeAttributeNS
- DOMElement.setAttributeNodeNS
- DOMElement.setAttributeNS
- DOMEntity
- DOMNamedNodeMap.getNamedItemNS
- DOMNamedNodeMap.removeNamedItemNS
- DOMNamedNodeMap.setNamedItemNS
- DOMNode.localName
- DOMNode.namespaceURI
- DOMNode.prefix
- DOMParser.loadExternalDTD
- DocFile.createDocumentFromTemplate
- DocFile.getWebKey
- DocHit.getWebKey
- Document.doOCR
- Document.extractText
- Document.hasOcrFlag
- Document.readAsString
- FileResultset.fromIds
- FileResultset.fromIdsJSON
- FileResultset.getIdsJSON
- Folder.getParentFolder
- HitResultset.searchability
- Register.getDocumentByName
- Register.getFieldName
- Register.getHitResultset
- Util.getServerPath
- Util.isWindowsOS
- Util.readTextFileAsString
- Util.writeStringToTextFile


## DOCUMENTS 5.0e HF2

- Context.getSuperMode
- Context.setSuperMode
- DocFile.getDoubleSelectListValues
- Document.reindexBlob
- Document.setDocumentName
- ScriptCall.isFinished
- Util.prepareJSON


## DOCUMENTS 5.0e

- Context.getDocumentById
- Context.reloadCurrentPrincipal
- Context.reloadPrincipal
- Context.writeLogBook
- DocFile.setReferenceFile
- Document.id
- Document.hash
- Util.convertDateToExcelDate
- Util.getDirSep
- Util.getServerOS
- Util.hash
- XLSXChart
- XLSXChart.addSeries
- XLSXChart.getAxis
- XLSXChart.getLastError
- XLSXChart.setStyle
- XLSXChart.setTable
- XLSXChart.setTitle
- XLSXChart.setTitleRange
- XLSXChartAxis
- XLSXChartAxis.getLastError
- XLSXChartAxis.setLabelAlign
- XLSXChartAxis.setLabelPosition
- XLSXChartAxis.setName
- XLSXChartAxis.setNameRange
- XLSXChartAxis.setNumberFormat
- XLSXChartAxis.setReverse
- XLSXChartSeries
- XLSXChartSeries.getLastError
- XLSXChartSeries.setCategories
- XLSXChartSeries.setName
- XLSXChartSeries.setNameRange
- XLSXChartSeries.setValues
- XLSXChartsheet
- XLSXChartsheet.getLastError
- XLSXChartsheet.insertChart
- XLSXChartsheet.setFirstSheet
- XLSXChartsheet.setFooter
- XLSXChartsheet.setHeader
- XLSXChartsheet.setLandscape
- XLSXChartsheet.setMargins
- XLSXChartsheet.setPaperType
- XLSXChartsheet.setPortrait
- XLSXChartsheet.setTabColor
- XLSXChartsheet.setZoom
- XLSXFormat
- XLSXFormat.getLastError
- XLSXFormat.setAlign
- XLSXFormat.setBackgroundColor
- XLSXFormat.setBackgroundPattern
- XLSXFormat.setBorderColor
- XLSXFormat.setBorderStyle
- XLSXFormat.setFontColor
- XLSXFormat.setFontName
- XLSXFormat.setFontScript
- XLSXFormat.setFontSize
- XLSXFormat.setFontStyle
- XLSXFormat.setForegroundColor
- XLSXFormat.setIndent
- XLSXFormat.setNumberFormat
- XLSXFormat.setShrink
- XLSXFormat.setTextWrap
- XLSXWorksheet
- XLSXWorksheet.addAutofilter
- XLSXWorksheet.freezePanes
- XLSXWorksheet.getLastError
- XLSXWorksheet.importFromJSON
- XLSXWorksheet.importFromJSONFile
- XLSXWorksheet.insertChart
- XLSXWorksheet.insertImage
- XLSXWorksheet.mergeRange
- XLSXWorksheet.setColumn
- XLSXWorksheet.setFirstSheet
- XLSXWorksheet.setFooter
- XLSXWorksheet.setGridlines
- XLSXWorksheet.setHeader
- XLSXWorksheet.setHorizontalPagebreaks
- XLSXWorksheet.setLandscape
- XLSXWorksheet.setMargins
- XLSXWorksheet.setPageView
- XLSXWorksheet.setPaperType
- XLSXWorksheet.setPortrait
- XLSXWorksheet.setRow
- XLSXWorksheet.setTabColor
- XLSXWorksheet.setVerticalPagebreaks
- XLSXWorksheet.setZoom
- XLSXWorksheet.splitPanes
- XLSXWorksheet.writeBlank
- XLSXWorksheet.writeBoolean
- XLSXWorksheet.writeCell
- XLSXWorksheet.writeDatetime
- XLSXWorksheet.writeFormula
- XLSXWorksheet.writeLink
- XLSXWorksheet.writeNumber
- XLSXWorksheet.writeRichString
- XLSXWorksheet.writeString
- XLSXWriter.constructor
- XLSXWriter.version
- XLSXWriter.activateChartsheet
- XLSXWriter.activateWorksheet
- XLSXWriter.addChart
- XLSXWriter.addChartsheet
- XLSXWriter.addFormat
- XLSXWriter.addWorksheet
- XLSXWriter.getChartsheetByName
- XLSXWriter.getFilePath
- XLSXWriter.getLastError
- XLSXWriter.getWorksheetByName
- XLSXWriter.hideChartsheet
- XLSXWriter.hideWorksheet
- XLSXWriter.save
- XLSXWriter.selectChartsheet
- XLSXWriter.selectWorksheet
- XLSXWriter.setProperties
- XMLExport.addFileTypesFromCategory
- XMLExport.addFileTypesFromFolder


## DOCUMENTS 5.0d HF2

- Util.sign


## DOCUMENTS 5.0d HF1

- Context.qsession
- Document.comment


## DOCUMENTS 5.0d

- AccessProfile.setParentProfile
- Context.folder
- Context.enableModules
- Context.getTempPathByToken
- DocFile.getDocFileComment
- DocFileDataField
- DocFileDataField.fieldName
- DocFileDataField.hash
- DocFileDataField.readAccess
- DocFileDataField.writeAccess
- DocFileDataField.getLastError
- DocFileDataField.getValue
- DocFileDataField.setValue
- Folder.systemUser
- HitResultset.getHitIds
- Register.addFileLink
- Register.removeFileLink
- ScriptCall.setFolder
- XMLExport.addCustomProperty


## DOCUMENTS 5.0c HF2

- Context.fieldName
- Context.hasPEMModule
- SystemUser.setAccessProfiles
- SystemUser.setEasywareAuthentication
- Util.makeGACLValue


## DOCUMENTS 5.0c HF1

- Context.clearEnumvalCache
- Context.doMaintenance
- Context.getLocaleValue
- Document.getRegister
- Register.getFile
- Register.getLocaleLabel
- XMLExport.addPortalScriptCall


## DOCUMENTS 5.0c

- ArchiveServer.submitChanges
- Context.getProgressBar
- Context.setProgressBar
- Context.setProgressBarText
- DocFile.getCreationDate
- DocFile.getCreator
- DocFile.getFieldAutoText
- DocFile.getid
- DocFile.getLastModificationDate
- DocFile.getLastModifier
- DocFile.getTitle
- DocHit.getBlobInfo
- FileResultset.getIds
- Folder.getHitResultset
- PropertyCache.listProperties
- SystemUser.getAllFolders
- XMLHTTPRequest.FileSizeHint
- XMLHTTPRequest.responseFile
- XMLHTTPRequest.responseType
- XMLHTTPRequest.VERIFYHOST
- XMLHTTPRequest.VERIFYPEER
- XMLHTTPRequest.setCAInfo


## DOCUMENTS 5.0b HF2

- SystemUser.isSuperUser


## DOCUMENTS 5.0b

- DocFile.getAllWorkflowSteps
- Util.decryptString
- Util.encryptString
- Util.getUsedPrivateBytes


## DOCUMENTS 5.0a HF2

- Context.convertStringToDate
- Folder.getFilterFileTypes
- SystemUser.getAccess
- Util.hmac
- Util.sha256


## DOCUMENTS 5.0a

- ArchiveConnection.sendEbisRequest
- ArchiveServer
- ArchiveServer.name
- ArchiveServer.getArchiveConnection
- ArchiveServer.getAttribute
- ArchiveServer.getLastError
- ArchiveServer.getOID
- ArchiveServer.setAttribute
- ArchiveServerIterator
- ArchiveServerIterator.first
- ArchiveServerIterator.getLastError
- ArchiveServerIterator.next
- ArchiveServerIterator.size
- Context.createArchiveServer
- Context.getArchiveConnection
- Context.getArchiveServer
- Context.getArchiveServers
- Context.getFolderPosition
- Context.setFolderPosition
- SystemUser.email
- SystemUser.addFileTypeAgent
- SystemUser.addFileTypeAgentScript
- SystemUser.listAgentFileTypes
- SystemUser.listFileTypeAgents
- SystemUser.notifyFileReturnedFromSending
- SystemUser.notifyNewFileInInbox
- SystemUser.removeFileTypeAgent
- Util.decodeUrlCompatible
- Util.encodeUrlCompatible
- Util.getSourceLineInfo
- Util.sleep


## DOCUMENTS 5.0HF2

- DocHit.columnName


## DOCUMENTS 5.0 HF2

- ScriptCall.getEnumval
- ScriptCall.setRunAsEnumScript
- XMLExport.addPartnerAccount
- XMLExport.addSystemUser


## DOCUMENTS 5.0 HF1

- DocFile.asJSON
- DocFile.fromJSON


## DOCUMENTS 5.0

- AccessProfile.propCache
- AccessProfile.addCustomProperty
- AccessProfile.getCustomProperties
- AccessProfile.setOrAddCustomProperty
- Context.workflowStep
- Context.addCustomProperty
- Context.findCustomProperties
- Context.getClientType
- Context.getCustomProperties
- Context.getFileTypeOID
- Context.setOrAddCustomProperty
- CustomProperty.addSubProperty
- CustomProperty.getSubProperties
- CustomProperty.setAccessProfile
- CustomProperty.setFiletype
- CustomProperty.setOrAddSubProperty
- CustomProperty.setSystemUser
- DBResultSet.getColName
- DBResultSet.getNumCols
- DocFile.sendFileAdHoc
- ScriptCall.addParameter
- ScriptCall.getLastError
- ScriptCall.getReturnValue
- SystemUser.propCache


## DOCUMENTS 4.0e

- DocFile.changeFiletype
- DocQueryParams.searchMaskName
- Document.bytes
- XMLExport.addDocumentsSettings


## DOCUMENTS 4.0d HF3

- Document.encrypted
- Util.convertBlobToPDF
- Util.isEncryptedBlob


## DOCUMENTS 4.0d HF2

- Folder.addToOutbar
- Folder.removeFromOutbar


## DOCUMENTS 4.0d HF1

- Context.getRegisterErgName
- XMLExport.addNumberRange
- XMLExport.addPortalScriptsFromCategory


## DOCUMENTS 4.0d

- DOMDocument.documentElement
- DocFile.disconnectArchivedFile
- DocFile.hasField
- DocQueryParams
- Document.uploadDocument
- Email.constructor
- Email.addAttachment
- Email.getLastError
- Email.send
- Email.setBCC
- Email.setBody
- Email.setCC
- Email.setDeleteAfterSending
- Email.setFrom
- Email.setSendingTime
- Email.setSubject
- Email.setTo
- Folder.getActionByName
- RetrievalField.defaultValue
- RetrievalField.defValWriteProt
- RetrievalField.setDefault
- ScriptCall.constructor
- ScriptCall.isRunning
- ScriptCall.launch
- ScriptCall.setDocFile
- ScriptCall.setDocument
- ScriptCall.setEvent
- ScriptCall.setRegister
- ScriptCall.waitForFinish
- SystemUser.getBackDelegatedFiles
- SystemUser.getIndividualFolders
- SystemUser.getUserdefinedInboxFolders
- UserAction.constructor
- UserAction.label
- UserAction.name
- UserAction.scope
- UserAction.type
- UserAction.widget
- UserAction.addToFolder
- UserAction.getAttribute
- UserAction.getLastError
- UserAction.getOID
- UserAction.getPosition
- UserAction.remove
- UserAction.setAttribute
- UserAction.setContext
- UserAction.setCreateDefaultWorkflow
- UserAction.setFileTypeForNewFile
- UserAction.setPortalScript
- UserAction.setPosition
- XMLExport.addOutbar


## DOCUMENTS 4.0c undefined

- DocQueryParams.sourceCount


## DOCUMENTS 4.0c HF2

- DocFile.countFields
- RetrievalField
- RetrievalField.compOp
- RetrievalField.label
- RetrievalField.name
- RetrievalField.type
- RetrievalField.valueExpr
- RetrievalSource


## DOCUMENTS 4.0c HF1

- Context.convertDateToString
- DocFile.getUserStatus
- Util.base64Decode
- Util.base64Encode


## DOCUMENTS 4.0c (DOM level 1)

- DOMAttr
- DOMNamedNodeMap
- DOMNode


## DOCUMENTS 4.0c

- Context.createFolder
- Context.getQueryParams
- Context.setClientLang
- DOMAttr.name
- DOMAttr.specified
- DOMAttr.value
- DOMCharacterData
- DOMCharacterData.data
- DOMCharacterData.length
- DOMCharacterData.appendData
- DOMCharacterData.deleteData
- DOMCharacterData.insertData
- DOMCharacterData.replaceData
- DOMCharacterData.splitText
- DOMCharacterData.substringData
- DOMDocument.constructor
- DOMDocument.createAttribute
- DOMDocument.createCDATASection
- DOMDocument.createComment
- DOMDocument.createElement
- DOMDocument.createTextNode
- DOMDocument.getElementsByTagName
- DOMElement
- DOMElement.tagName
- DOMElement.getAttribute
- DOMElement.getElementsByTagName
- DOMElement.removeAttribute
- DOMElement.removeAttributeNode
- DOMElement.setAttribute
- DOMElement.setAttributeNode
- DOMException
- DOMException.code
- DOMException.message
- DOMNamedNodeMap.length
- DOMNamedNodeMap.getNamedItem
- DOMNamedNodeMap.item
- DOMNamedNodeMap.removeNamedItem
- DOMNamedNodeMap.setNamedItem
- DOMNode.appendChild
- DOMNode.cloneNode
- DOMNode.hasAttributes
- DOMNode.hasChildNodes
- DOMNode.insertBefore
- DOMNode.normalize
- DOMNode.removeChild
- DOMNode.replaceChild
- DOMNodeList
- DOMNodeList.length
- DOMNodeList.item
- DOMParser
- DOMParser.constructor
- DOMParser.parse
- DOMParser.write
- DocFile.getFieldValue
- DocFile.setFieldValue
- DocQueryParams.filledSearchFieldCount
- DocQueryParams.requestType
- DocQueryParams.searchFieldCount
- DocQueryParams.getLastError
- DocQueryParams.getSearchField
- DocQueryParams.getSource
- DocQueryParams.removeSource
- Document.getAsPDF
- Document.moveToRegister
- Folder.allowArchive
- Folder.allowCopyTo
- Folder.allowCreatePDF
- Folder.allowDelete
- Folder.allowExport
- Folder.allowForward
- Folder.allowMoveTo
- Folder.filterExpression
- Folder.filterStyle
- Folder.icon
- Folder.invisible
- Folder.released
- Folder.sortColumn
- Folder.sortDescending
- Folder.sortFieldName
- Folder.addAccessProfile
- Folder.addFilterEDAServer
- Folder.addFilterEEiArchive
- Folder.addFilterEExView
- Folder.addFilterFileType
- Folder.addSystemUser
- Folder.createSubFolder
- Folder.deleteFolder
- Folder.getPosition
- Folder.removeAccessProfile
- Folder.removeFilterEDAServer
- Folder.removeFilterEEiArchive
- Folder.removeFilterEExView
- Folder.removeFilterFileType
- Folder.removeSystemUser
- Folder.setAllowedActionScript
- Folder.setParentFolder
- Folder.setPosition
- RetrievalSource.resId
- RetrievalSource.server
- RetrievalSource.type
- Util.concatPDF
- Util.generateChecksum
- Util.getFileContentAsString
- WorkflowStep.executiveGroup
- WorkflowStep.setNewExecutiveGroup
- XMLExport.addAccessProfile
- XMLExport.addAlias
- XMLExport.addDistributionList
- XMLExport.addFellow
- XMLExport.addFileType
- XMLExport.addFilingPlan
- XMLExport.addFolder
- XMLExport.addPortalScript
- XMLExport.addWorkflow
- XMLExportDescription.constructor
- XMLExportDescription.exportCreatedAt
- XMLExportDescription.exportFileId
- XMLExportDescription.exportLastModifiedAt
- XMLExportDescription.exportLastModifiedBy
- XMLExportDescription.exportOwner


## DOCUMENTS 4.0b HF2

- Folder.getLocaleLabel


## DOCUMENTS 4.0b HF1

- Context.selectedDocuments


## DOCUMENTS 4.0b

- DocFile.getAsPDF
- DocHit
- DocHit.getArchiveFile
- DocHit.getArchiveKey
- DocHit.getFile
- DocHit.getFileId
- DocHit.getLastError
- DocHit.getLocalValue
- DocHit.getLocalValueByName
- DocHit.getSchema
- DocHit.getTechValue
- DocHit.getTechValueByName
- DocHit.isArchiveHit
- HitResultset.constructor
- HitResultset.dispose
- HitResultset.fetchedSize
- HitResultset.fetchNextPage
- HitResultset.first
- HitResultset.getAt
- HitResultset.getColumnCount
- HitResultset.getColumnIndex
- HitResultset.getColumnNames
- HitResultset.getLastError
- HitResultset.getLastErrorCode
- HitResultset.next
- HitResultset.size
- Register.getFiles
- Util.getQuoted


## DOCUMENTS 4.0a HF2

- DocFile.createMonitorFile
- DocFile.createStatusFile
- SystemUser.setSuperUser


## DOCUMENTS 4.0a HF1

- Util.length_u
- Util.substr_u


## DOCUMENTS 4.0a

- CustomProperty
- CustomProperty.deleteCustomProperty
- CustomProperty.getAttribute
- CustomProperty.getLastError
- CustomProperty.setAttribute
- CustomPropertyIterator
- CustomPropertyIterator.first
- CustomPropertyIterator.next
- CustomPropertyIterator.size
- DocFile.checkWorkflowReceiveSignal
- SystemUser.addCustomProperty
- SystemUser.getCustomProperties
- SystemUser.setOrAddCustomProperty
- WorkflowStep.getWorkflowProperty


## DOCUMENTS 4.0 (HF1)

- SystemUser.invalidateAccessProfileCache


## DOCUMENTS 4.0 (EAS)

- DocFile.getOriginal


## DOCUMENTS 4.0

- DBConnection.constructor
- DBConnection.executeQueryUC
- DBConnection.executeStatementUC
- DBResultSet.getUCString
- File.write
- PropertyCache.hasProperty
- PropertyCache.removeProperty
- Util.DB
- Util.memoryModel
- XMLHTTPRequest.constructor
- XMLHTTPRequest.constructor
- XMLHTTPRequest.canAsync
- XMLHTTPRequest.canProxy
- XMLHTTPRequest.COMPLETED
- XMLHTTPRequest.INTERACTIVE
- XMLHTTPRequest.NOTSENT
- XMLHTTPRequest.readyState
- XMLHTTPRequest.response
- XMLHTTPRequest.SENT
- XMLHTTPRequest.status
- XMLHTTPRequest.statusText
- XMLHTTPRequest.UNINITIALIZED
- XMLHTTPRequest.abort
- XMLHTTPRequest.addRequestHeader
- XMLHTTPRequest.getAllResponseHeaders
- XMLHTTPRequest.getResponseHeader
- XMLHTTPRequest.open
- XMLHTTPRequest.send


## ELC 4.0 / otrisPORTAL 7.0 (EE.i, EE.x, EAS)

- ArchivingDescription.archiveServer


## ELC 3.60j / otrisPORTAL 6.0j

- ArchiveFileResultset.last
- Context.selectedArchiveFiles
- Context.selectedArchiveKeys
- FileResultset.last


## ELC 3.60i / otrisPORTAL 6.0i available for archive files

- ArchiveConnectionBlob
- DocFile.isArchiveFile
- DocFile.reactivate
- Document.fullname


## ELC 3.60i / otrisPORTAL 6.0i

- ArchiveFileResultset.constructor
- ArchiveFileResultset.first
- ArchiveFileResultset.getLastError
- ArchiveFileResultset.next
- ArchiveFileResultset.size
- Context.createAccessProfile


## ELC 3.60h / otrisPORTAL 6.0h

- ArchiveConnection.downloadBlob
- ArchiveConnection.downloadBlobs
- ArchiveConnection.getLastError
- ArchiveConnection.putBlob
- ArchiveConnection.queryRawEEx
- ArchiveConnection.sendRequest
- ArchiveConnectionBlob.getLastError
- ArchiveConnectionBlobIterator
- ArchiveConnectionBlobIterator.first
- ArchiveConnectionBlobIterator.next
- ArchiveConnectionBlobIterator.size


## ELC 3.60g / otrisPORTAL 6.0g

- Context.extProcess
- SystemUser.delegateFilesOfAbsentUser
- SystemUser.getAgents
- SystemUser.setAbsent
- SystemUser.setAbsentMail


## ELC 3.60e / otrisPORTAL 6.0e

- Context.getArchiveFile
- Context.getEnumAutoText
- DocFile.getEnumAutoText
- DocFile.isDeletedFile
- DocFile.undeleteFile
- Util.beep
- Util.deleteFile
- Util.fileCopy
- Util.fileMove
- Util.fileSize
- Util.getDir
- Util.getEnvironment
- Util.makeFullDir
- Util.makeHTML
- Util.searchInArray


## ELC 3.60d / otrisPORTAL 6.0d

- Context.getXMLServer
- Register.deleteDocument
- SystemUser.checkPassword
- Util.transcode
- WorkflowStep.getWorkflowName
- WorkflowStep.getWorkflowVersion


## ELC 3.60c / otrisPORTAL 6.0c

- AccessProfile.getOID
- Context.convertNumericToString
- Context.convertNumericToString
- Context.convertStringToNumeric
- Context.convertStringToNumeric
- Context.getJSObject
- DocFile.getOID
- Document.getOID
- Folder.getOID
- Register.getOID
- SystemUser.getOID
- WorkflowStep.getOID


## ELC 3.60b / otrisPORTAL 6.0b

- Context.sendTCPStringRequest
- Document.deleteDocument


## ELC 3.60a / otrisPORTAL 6.0a

- ArchivingDescription.targetSchema
- ArchivingDescription.targetView
- Context.getServerInstallPath
- DocFile.getArchiveKey


## ELC 3.60 / otrisPORTAL 6.0

- Util.getUniqueId


## ELC 3.51h / otrisPORTAL 5.1h

- DocFile.connectFolder
- DocFile.disconnectFolder
- Folder.addFile
- Folder.removeFile


## ELC 3.51g / otrisPORTAL 5.1g

- Context.getAccessProfiles
- Context.getClientSystemLang
- Context.setClientSystemLang


## ELC 3.51f / otrisPORTAL 5.1f

- DocFile.addDocumentFromFileSystem


## ELC 3.51e / otrisPORTAL 5.1e

- AccessProfile.getSystemUsers
- Context.clientId
- ControlFlow
- ControlFlow.id
- ControlFlow.label
- ControlFlow.name
- ControlFlow.getAttribute
- ControlFlow.getLastError
- ControlFlow.setAttribute
- ControlFlowIterator
- ControlFlowIterator.first
- ControlFlowIterator.next
- ControlFlowIterator.size
- DocFile.cancelWorkflow
- DocFile.getAllLockingWorkflowSteps
- DocFile.getCurrentWorkflowStep
- WorkflowStep.getAttribute
- WorkflowStep.getControlFlows
- WorkflowStep.setAttribute
- WorkflowStepIterator
- WorkflowStepIterator.first
- WorkflowStepIterator.next
- WorkflowStepIterator.size


## ELC 3.51d / otrisPORTAL 5.1d

- DocFile.getFileOwner
- DocFile.setFileOwner


## ELC 3.51c / otrisPORTAL 5.1c

- ArchivingDescription.constructor
- ArchivingDescription.archiveMonitor
- ArchivingDescription.archiveStatus
- ArchivingDescription.targetArchive
- ArchivingDescription.versioning
- ArchivingDescription.addRegister
- Context.findSystemUserByAlias
- DocFile.archive
- DocFile.archive
- DocFile.getCopy
- DocFile.getReferenceFile


## ELC 3.51b / otrisPORTAL 5.1b

- Context.changeScriptUser
- Context.deleteAccessProfile
- Context.getDatesDiff
- Context.getFileById
- Context.getSystemUser
- Context.setPrincipalAttribute
- DocFile.clearFollowUpDate
- DocFile.insertStatusEntry
- DocFile.setFollowUpDate
- Folder.getAttribute
- Folder.getFiles
- Folder.setAttribute
- SystemUser.getPrivateFolder
- XMLExport.constructor
- XMLExport.addFile
- XMLExport.clearXML
- XMLExport.getLastError
- XMLExport.getXML
- XMLExport.saveXML


## ELC 3.51 / otrisPORTAL 5.1

- Context.extCall
- Context.getClientLang
- Context.getEnumErgValue
- Context.getEnumValues
- Context.getFieldErgName
- Context.getFileTypeErgName
- Util.getTmpPath
- Util.unlinkFile


## ELC 3.50o / otrisPORTAL 5.0o

- Context.getFromSystemTable
- Util.cryptPassword


## ELC 3.50n / otrisPORTAL 5.0n

- Context.event
- Context.getTmpFilePath
- DocFile.getRegisterByName
- DocFile.getRegisters
- Document
- Document.extension
- Document.name
- Document.size
- Document.downloadDocument
- Document.getAttribute
- Document.getLastError
- Document.setAttribute
- DocumentIterator
- DocumentIterator.first
- DocumentIterator.getLastError
- DocumentIterator.next
- DocumentIterator.size
- Register
- Register.label
- Register.name
- Register.type
- Register.getAttribute
- Register.getDocuments
- Register.getLastError
- Register.setAttribute
- Register.uploadDocument
- RegisterIterator
- RegisterIterator.first
- RegisterIterator.getLastError
- RegisterIterator.next
- RegisterIterator.size


## ELC 3.50l01 / otrisPORTAL 5.0l01

- Context.deleteFolder
- Context.getFoldersByName
- DocFile.isNewFile
- Folder
- Folder.id
- Folder.label
- Folder.name
- Folder.type
- Folder.copyFolder
- Folder.getLastError
- Folder.getSubFolders
- Folder.hasFiles
- FolderIterator
- FolderIterator.first
- FolderIterator.getLastError
- FolderIterator.next
- FolderIterator.size


## ELC 3.50j / otrisPORTAL 5.0j

- Context.countPoolFiles
- Context.createPoolFile


## ELC 3.50f / otrisPORTAL 5.0f

- Context.getCurrentUserAttribute
- Context.getPrincipalAttribute


## ELC 3.50e / otrisPORTAL 5.0e

- Context.addTimeInterval
- Context.deleteSystemUser
- Context.getAutoText
- DocFile.getFieldName
- DocFile.getFirstLockingWorkflowStep
- SystemUser.hasAccessProfile
- Util.convertDateToString
- Util.convertStringToDate
- Util.log
- Util.out
- WorkflowStep.forwardFile
- WorkflowStep.setNewExecutiveUser


## ELC 3.50b / otrisPORTAL 5.0b

- AccessProfile.constructor
- AccessProfile.name
- AccessProfile.getAttribute
- AccessProfile.getLastError
- AccessProfile.setAttribute
- AccessProfileIterator
- AccessProfileIterator.first
- AccessProfileIterator.getLastError
- AccessProfileIterator.next
- AccessProfileIterator.size
- Context.sourceCode
- Context.findAccessProfile
- Context.findSystemUser
- Context.getSystemUsers
- DocFile.sendMail
- DocFile.setUserRead
- DocFile.setUserStatus
- SystemUser
- SystemUser.firstName
- SystemUser.lastName
- SystemUser.login
- SystemUser.addToAccessProfile
- SystemUser.getAccessProfiles
- SystemUser.getAttribute
- SystemUser.getLastError
- SystemUser.getSuperior
- SystemUser.removeFromAccessProfile
- SystemUser.resetSuperior
- SystemUser.setAttribute
- SystemUser.setPassword
- SystemUser.setSuperior
- SystemUserIterator
- SystemUserIterator.first
- SystemUserIterator.getLastError
- SystemUserIterator.next
- SystemUserIterator.size


## ELC 3.50a / otrisPORTAL 5.0a

- DocFile.addPDF
- DocFile.exportXML


## ELC 3.50 / otrisPORTAL 5.0

- Context.currentUser
- Context.document
- Context.errorMessage
- Context.file
- Context.fileType
- Context.folderFiles
- Context.folderName
- Context.register
- Context.returnType
- Context.scriptName
- Context.selectedFiles
- Context.workflowActionId
- Context.workflowActionName
- Context.workflowControlFlowId
- Context.workflowControlFlowName
- Context.createFile
- Context.getLastError
- DBConnection.constructor
- DBConnection.constructor
- DBConnection.constructor
- DBConnection.close
- DBConnection.executeQuery
- DBConnection.executeStatement
- DBConnection.getLastError
- DBResultSet
- DBResultSet.close
- DBResultSet.getBool
- DBResultSet.getDate
- DBResultSet.getFloat
- DBResultSet.getInt
- DBResultSet.getLastError
- DBResultSet.getString
- DBResultSet.getTimestamp
- DBResultSet.next
- DocFile.fieldName
- DocFile.abort
- DocFile.archive
- DocFile.archiveAndDelete
- DocFile.commit
- DocFile.deleteFile
- DocFile.forwardFile
- DocFile.getAttribute
- DocFile.getAutoText
- DocFile.getFieldAttribute
- DocFile.getLastError
- DocFile.setAttribute
- DocFile.setFieldAttribute
- DocFile.startEdit
- DocFile.startWorkflow
- DocFile.sync
- File.constructor
- File.close
- File.eof
- File.error
- File.ok
- File.read
- File.readLine
- File.write
- File.writeBuffer
- FileResultset.constructor
- FileResultset.first
- FileResultset.next
- FileResultset.size
- Util.buildNo
- Util.version
- WorkflowStep.executiveType
- WorkflowStep.executiveUser
- WorkflowStep.firstControlFlow
- WorkflowStep.id
- WorkflowStep.name
- WorkflowStep.status
- WorkflowStep.templateId
- WorkflowStep.getLastError