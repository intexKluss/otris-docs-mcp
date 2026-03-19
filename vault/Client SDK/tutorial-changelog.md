---
title: "Changelog"
source: "https://otris.software/documents/api/client-sdk/tutorial-changelog.html"
---

# Changelog


## 5.0h

- documents.sdk.FieldModel.isHiddenField(){boolean}
- documents.sdk.FieldModel.setHiddenField(hidden)
- documents.sdk.FileContext.createFileQuickviewLink(options){string}
- new documents.sdk.gadget.GadgetTree()
- staticdocuments.sdk.utils.documents.sdk.utils.toggleFieldTooltips(hide)


## 5.0g

- documents.sdk.FileContext.getRegisterInfo(){Object}
- documents.sdk.FileContext.getRegisterName(){string}
- documents.sdk.I18nContext.getServerMessages(){documents.sdk.I18nContextMessages}
- staticdocuments.sdk.utils.documents.sdk.utils.getLocaleValue(localizedString, lang){String}
- staticdocuments.sdk.utils.documents.sdk.utils.parseLocalizedString(localizedString){Object.<("de"|"en"|string), string>}


## 5.0f HF2

- new documents.sdk.LayoutContext()
- new documents.sdk.LocalEditContext()


## 5.0f

- documents.sdk.DocumentsContext.callGadget(gadgetConfig)
- documents.sdk.DocumentsContext.getLayoutContext(){documents.sdk.LayoutContext}
- documents.sdk.FileFieldModel.getReferenceKey(){string}
- documents.sdk.GadgetContext.disableContainerButton(buttonId, allBtns)
- documents.sdk.GadgetContext.enableContainerButton(buttonId, allBtns)
- documents.sdk.gadget.GadgetForm.closeHorizontalRuler(rulerName)
- documents.sdk.gadget.GadgetForm.openHorizontalRuler(rulerName)
- documents.sdk.gadget.GadgetForm.toggleHorizontalRuler(rulerName)


## 5.0e HF2

- documents.sdk.FieldModel.isServerReadonly(){boolean}


## 5.0e

- new documents.sdk.DefaultDialogContext()
- documents.sdk.DocumentsContext.getGadgetId(){string}
- documents.sdk.DocumentsContext.logoutUser(toLoginScreen)
- documents.sdk.ExtendedSearchContext.setSearchSourcesVisibility(ids){boolean}
- documents.sdk.FileContext.updateFile(options){Promise.<any>}
- documents.sdk.GadgetContext.getGadgetId()
- documents.sdk.GadgetContext.saveGadgetGentable(){Promise.<any>}
-
- staticdocuments.sdk.utils.documents.sdk.utils.createDocumentsContext(){documents.sdk.DocumentsContext}


## 5.0d

- documents.sdk.DocumentsContext.openHomeView()
- documents.sdk.DocumentsContext.openOutbar(options)
- documents.sdk.ExtendedSearchContext.getSearchFormModel(){documents.sdk.ExtendedSearchFormModel}
- documents.sdk.ExtendedSearchContext.getSearchSourceNames(options)
- documents.sdk.ExtendedSearchContext.getSearchSources(options)
- documents.sdk.ExtendedSearchContext.getSelectedSearchSourceNames(options)
- documents.sdk.ExtendedSearchContext.getSelectedSearchSources(options)
- new documents.sdk.ExtendedSearchFormModel()
- abstractnew documents.sdk.FieldModel()
- documents.sdk.FileContext.getFileFormModel(){documents.sdk.FileFormModel}
- documents.sdk.FileContext.toggleMonitorView(action, options)
- documents.sdk.FileContext.toggleRegisterbarView(action, options)
- new documents.sdk.FileFieldModel()
- new documents.sdk.FileFormModel()
- abstractnew documents.sdk.FormModel()
- new documents.sdk.ScriptFieldModel()
- new documents.sdk.ScriptParameterFormModel()
- new documents.sdk.SearchFieldModel()
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.getOutbarExitCallbacks(outbarName, event){Array.<function()>}
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.getScriptParameterExitCallbacks(scriptName, event){Array.<function()>}
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.getScriptParameterFieldExitCallbacks(scriptName, fieldName){Array.<function()>}
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.getSearchFieldExitCallbacks(fieldName){Array.<function()>}
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.registerOutbarExitCallback(outbarName, event, fn, options)
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.registerScriptParameterExitCallback(scriptName, event, fn, options)
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.registerScriptParameterFieldExitCallback(scriptName, fieldName, fn, options)
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.registerSearchFieldExitCallback(fieldName, fn, options)
- new documents.sdk.gadget.GadgetForm()
- documents.sdk.gentable.GentableContext.getCustomContainerCenter(){JQuery}
- documents.sdk.gentable.GentableContext.getCustomContainerNorth(){JQuery}
- documents.sdk.gentable.GentableContext.getCustomContainerSouth(){JQuery}


## 5.0c HF1

- documents.sdk.gentable.grid.GentableGridColumnModel.getButtonLabel(){string}
- documents.sdk.gentable.grid.GentableGridColumnModel.getDecimalPlaces(){number}
- documents.sdk.gentable.grid.GentableGridColumnModel.getNumberFormat(){string}
- documents.sdk.gentable.grid.GentableGridColumnModel.getTooltip(){string}
- documents.sdk.gentable.grid.GentableGridColumnModel.isFocusable(){boolean}


## 5.0c

- documents.sdk.DocumentsContext.getGadgetContext(){documents.sdk.GadgetContext}
- documents.sdk.DocumentsContext.getLocalStorage(key){documents.sdk.LocalStorage}
- documents.sdk.DocumentsContext.getSessionStorage(key){documents.sdk.SessionStorage}
- documents.sdk.DocumentsContext.getURL(type, options){boolean}
- documents.sdk.DocumentsContext.openFrameDialog(title, frameSrc, options)
- documents.sdk.DocumentsContext.openTableDataDialog(title, url, options)
- documents.sdk.FileContext.getFileFieldOptions(fieldName){Object}
- new documents.sdk.GadgetContext()
- new documents.sdk.LocalStorage()
- new documents.sdk.SessionStorage()
- abstractnew documents.sdk.Storage()
- staticdocuments.sdk.gentable.gentableRegistry.documents.sdk.gentable.gentableRegistry.registerGridColumnAggregator(tableDefName, title, columnAggregator)


## 5.0b HF2

- new documents.sdk.I18nContext()


## 5.0b

- documents.sdk.DocumentsContext.getExtendedSearchContext(){documents.sdk.ExtendedSearchContext}
- documents.sdk.DocumentsContext.getI18nContext(){documents.sdk.I18nContext}
- documents.sdk.DocumentsContext.startBusyPanel(view)
- documents.sdk.DocumentsContext.stopBusyPanel(view)
- new documents.sdk.ExtendedSearchContext()
- documents.sdk.ExtendedSearchContext.getSearchField$El(fieldName){JQuery}
- documents.sdk.ExtendedSearchContext.getSearchFieldEl(fieldName){Element}
- documents.sdk.ExtendedSearchContext.getSearchFieldLabel$El(fieldName){JQuery}
- documents.sdk.ExtendedSearchContext.getSearchFieldNumberValue(fieldName, decimalSeparator, groupingSeparator){number}
- documents.sdk.ExtendedSearchContext.getSearchFieldValue(fieldName){string}
- documents.sdk.ExtendedSearchContext.getSearchFieldValues(fieldNames){Object}
- documents.sdk.ExtendedSearchContext.getSearchFormView$El(){JQuery}
- documents.sdk.ExtendedSearchContext.getSearchFormViewEl(){Element}
- documents.sdk.ExtendedSearchContext.isSearchFieldVisible(fieldName){boolean}
- documents.sdk.ExtendedSearchContext.setSearchFieldBgColor(fieldName, color)
- documents.sdk.ExtendedSearchContext.setSearchFieldBorderColor(fieldName, color)
- documents.sdk.ExtendedSearchContext.setSearchFieldColor(fieldName, color)
- documents.sdk.ExtendedSearchContext.setSearchFieldFocus(fieldName)
- documents.sdk.ExtendedSearchContext.setSearchFieldLabelColor(fieldName, color)
- documents.sdk.ExtendedSearchContext.setSearchFieldOptions(fieldName, value, options)
- documents.sdk.ExtendedSearchContext.setSearchFieldValue(fieldName, value){string}
- documents.sdk.ExtendedSearchContext.setSearchFieldValues(fieldValues)
- documents.sdk.FileContext.getFileFieldElId(fieldName){string}
- documents.sdk.FileContext.setFileFieldReference(fieldName, referenceFileId, options)
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.getSearchExitCallbacks(event){Array.<function()>}
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.registerSearchExitCallback(event, fn, options)


## 5.0a

- new documents.sdk.DocumentsContext()
- documents.sdk.DocumentsContext.closeDialog()
- documents.sdk.DocumentsContext.encodeURL(url){string}
- documents.sdk.DocumentsContext.executeScript(scriptName, scriptParams, options){Promise.<any>|string|undefined}
- documents.sdk.DocumentsContext.getBaseParams(){Object}
- documents.sdk.DocumentsContext.getBaseParamsQueryString(){string}
- documents.sdk.DocumentsContext.getFileContext(){documents.sdk.FileContext}
- documents.sdk.DocumentsContext.getGentableContext(){documents.sdk.gentable.GentableContext}
- documents.sdk.DocumentsContext.getUserContext(){documents.sdk.UserContext}
- documents.sdk.DocumentsContext.openConfirmationDialog(title, message, onOk, onCancel, onClose)
- documents.sdk.DocumentsContext.openExtendedSearchView()
- documents.sdk.DocumentsContext.openFileView(fileId, registerId, documentId, options)
- documents.sdk.DocumentsContext.openFolderView(folderId)
- documents.sdk.DocumentsContext.openHtmlDialog(title, html, onOk, onClose)
- documents.sdk.DocumentsContext.openMessageDialog(title, message, onOk, onClose)
- new documents.sdk.FileContext()
- documents.sdk.FileContext.cancelFileEditMode(){Promise.<any>}
- documents.sdk.FileContext.commitFileEditMode(){Promise.<any>}
- documents.sdk.FileContext.executeScript(scriptName, scriptParams, options){Promise.<any>|string|undefined}
- documents.sdk.FileContext.getDocumentId(){string}
- documents.sdk.FileContext.getDocumentTitle(){string}
- documents.sdk.FileContext.getFileField$El(fieldName){JQuery}
- documents.sdk.FileContext.getFileFieldEl(fieldName){Element}
- documents.sdk.FileContext.getFileFieldId(fieldName){string}
- documents.sdk.FileContext.getFileFieldLabel$El(fieldName){JQuery}
- documents.sdk.FileContext.getFileFieldNumberValue(fieldName, decimalSeparator, groupingSeparator, options){number}
- documents.sdk.FileContext.getFileFieldValue(fieldName, options){string|Array.<string>}
- documents.sdk.FileContext.getFileFieldValues(fieldNames, options){Object}
- documents.sdk.FileContext.getFileId(){string}
- documents.sdk.FileContext.getFileProperty(key){string}
- documents.sdk.FileContext.getFileRegisterProperty(key){string}
- documents.sdk.FileContext.getFileTask(){string}
- documents.sdk.FileContext.getFileTitle(){string}
- documents.sdk.FileContext.getFileTypeName(){string}
- documents.sdk.FileContext.getRegisterId(){string}
- documents.sdk.FileContext.getRegisterTitle(){string}
- documents.sdk.FileContext.getRegisterType(){string}
- documents.sdk.FileContext.getScrollPositionLeft(){number}
- documents.sdk.FileContext.getScrollPositionTop(){number}
- documents.sdk.FileContext.isFileEditMode(){boolean}
- documents.sdk.FileContext.isFileFieldVisible(fieldName){boolean}
- documents.sdk.FileContext.setFileFieldBgColor(fieldName, color)
- documents.sdk.FileContext.setFileFieldBorderColor(fieldName, color)
- documents.sdk.FileContext.setFileFieldColor(fieldName, color)
- documents.sdk.FileContext.setFileFieldFocus(fieldName)
- documents.sdk.FileContext.setFileFieldLabelColor(fieldName, color)
- documents.sdk.FileContext.setFileFieldOptions(fieldName, values, options)
- documents.sdk.FileContext.setFileFieldValue(fieldName, value, options){string|Array.<string>}
- documents.sdk.FileContext.setFileFieldValues(fieldValues, options)
- documents.sdk.FileContext.setScrollPositionLeft(value)
- documents.sdk.FileContext.setScrollPositionTop(value)
- documents.sdk.FileContext.startFileEditMode(){Promise.<any>}
- new documents.sdk.UserContext()
- documents.sdk.UserContext.getCustomPropertyValue(name, type){string}
- documents.sdk.UserContext.getProperty(key){string}
- documents.sdk.UserContext.removeCustomProperty(name, type){string}
- documents.sdk.UserContext.setCustomPropertyValue(name, type, value, options){string}
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.getFileExitCallbacks(fileTypeName, event){Array.<function()>}
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.getFileFieldExitCallbacks(fileTypeName, fieldName){Array.<function()>}
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.registerFileExitCallback(fileTypeName, event, fn, options)
- staticdocuments.sdk.exitRegistry.documents.sdk.exitRegistry.registerFileFieldExitCallback(fileTypeName, fieldName, fn, options)
- documents.sdk.gentable.GentableContext.getGridModel(){documents.sdk.gentable.grid.GentableGridModel}
- staticdocuments.sdk.gentable.gentableRegistry.documents.sdk.gentable.gentableRegistry.getCallback(tableDefName, event){function}
- staticdocuments.sdk.gentable.gentableRegistry.documents.sdk.gentable.gentableRegistry.getCallbacks(tableDefName, event){function}
- staticdocuments.sdk.gentable.gentableRegistry.documents.sdk.gentable.gentableRegistry.getDefinition(tableDefName){string}
- staticdocuments.sdk.gentable.gentableRegistry.documents.sdk.gentable.gentableRegistry.getGridCellEditor(tableDefName, type){function}
- staticdocuments.sdk.gentable.gentableRegistry.documents.sdk.gentable.gentableRegistry.getGridCellRenderer(tableDefName, type){function}
- staticdocuments.sdk.gentable.gentableRegistry.documents.sdk.gentable.gentableRegistry.getGridColumnAggregator(tableDefName, title){function}
- staticdocuments.sdk.gentable.gentableRegistry.documents.sdk.gentable.gentableRegistry.registerCallback(tableDefName, event, fn)
- staticdocuments.sdk.gentable.gentableRegistry.documents.sdk.gentable.gentableRegistry.registerGridCellEditor(tableDefName, type, cellEditor)
- staticdocuments.sdk.gentable.gentableRegistry.documents.sdk.gentable.gentableRegistry.registerGridCellRenderer(tableDefName, type, cellRenderer)
- documents.sdk.gentable.grid.GentableGridColumnModel.getDataType(){string}
- documents.sdk.gentable.grid.GentableGridColumnModel.getLabel(){string}
- documents.sdk.gentable.grid.GentableGridColumnModel.getName(){string}
- documents.sdk.gentable.grid.GentableGridColumnModel.isEditable(){boolean}
- documents.sdk.gentable.grid.GentableGridColumnModel.isVisible(){boolean}
- documents.sdk.gentable.grid.GentableGridModel.addRow(row, options){GentableGridRowModel}
- documents.sdk.gentable.grid.GentableGridModel.columnsSize(){number}
- documents.sdk.gentable.grid.GentableGridModel.copyRow(srcIndex, dstIndex, options){GentableGridRowModel}
- documents.sdk.gentable.grid.GentableGridModel.createRowKey(){string}
- documents.sdk.gentable.grid.GentableGridModel.getActiveRow(){documents.sdk.gentable.grid.GentableGridRowModel}
- documents.sdk.gentable.grid.GentableGridModel.getColumn(name){GentableGridColumnModel}
- documents.sdk.gentable.grid.GentableGridModel.getRow(index){GentableGridRowModel}
- documents.sdk.gentable.grid.GentableGridModel.getSelectedRows(){documents.sdk.gentable.grid.GentableGridRowCollection}
- documents.sdk.gentable.grid.GentableGridModel.moveRow(srcIndex, dstIndex)
- documents.sdk.gentable.grid.GentableGridModel.removeRow(index)
- documents.sdk.gentable.grid.GentableGridModel.resetActiveRow()
- documents.sdk.gentable.grid.GentableGridModel.resetSelectedRows()
- documents.sdk.gentable.grid.GentableGridModel.rowsSize(){number}
- documents.sdk.gentable.grid.GentableGridModel.setActiveRow(index)
- documents.sdk.gentable.grid.GentableGridModel.setEditCell(options)
- documents.sdk.gentable.grid.GentableGridModel.setSelectedRows(indexes, opts)
- documents.sdk.gentable.grid.GentableGridRowModel.getNumber(columnName, decimalSeparator, groupingSeparator){number}
- documents.sdk.gentable.grid.GentableGridRowModel.isVisible(){boolean}
- documents.sdk.gentable.grid.GentableGridRowModel.reload(){Promise.<any>}
- documents.sdk.grid.GridModel.createRowKey(){string}
- documents.sdk.grid.GridModel.getColumns()
- documents.sdk.grid.GridModel.getRows()
- documents.sdk.grid.GridRowModel.index(){number}


## 5.0

- documents.sdk.DocumentsContext.cacheEventClearAll(options){Promise.<any>}


## 5.0

- documents.sdk.DocumentsContext.closeGadget()


## 4.0

- documents.sdk.DocumentsContext.updateFileView(options)