---
title: "Changelog"
source: "https://otris.software/documents/api/scriptextensions/changelog.html"
---

# Changelog


## DOCUMENTS 6.2.0

- otris.scriptlist.List.setRoute(routeId)


## DOCUMENTS 6.0.1

- staticotris.scriptlist.otris.scriptlist.clearCount(opts)
- staticotris.scriptlist.otris.scriptlist.getCount(opts){number}
- staticotris.scriptlist.otris.scriptlist.hasCount(opts){boolean}
- otris.scriptlist.HitresultList.setUseReintegrate(useReintegrate)
- otris.scriptlist.List.applySortOrder()
- otris.scriptlist.List.getTotalSize(){number}
- otris.scriptlist.Row.setShowCheckbox(showCheckbox)


## DOCUMENTS 6.0

- otris.scriptlist.Row.setValue(key, value)


## DOCUMENTS 5.0i HF6

- otris.scriptlist.Column.getFormattedNumber(){boolean}
- otris.scriptlist.Column.getNrDecimals(){number}
- otris.scriptlist.Column.setFormattedNumber(formattedNumber){otris.scriptlist.Column}
- otris.scriptlist.Column.setNrDecimals(nrDecimals){otris.scriptlist.Column}


## DOCUMENTS 5.0i HF5

- otris.scriptlist.Column.getExporter(){boolean|otrisListColumnExporterCB}
- otris.scriptlist.Column.setExporter(exporter){otris.scriptlist.Column}


## DOCUMENTS 5.0i HF3

- otris.scriptlist.List.isListComplete()
- otris.scriptlist.List.setRecordView(recordView)


## DOCUMENTS 5.0i

- new ActionGroup()
- otris.notifications.Notification.getStyle()
- otris.notifications.Notification.setStyle(options)
- otris.scriptlist.Column.getFormatter(){HbsTemplateString|otrListCellFormatterCB}
- otris.scriptlist.Column.getSortKey(){string}
- otris.scriptlist.Column.setFormatter(formatter){otris.scriptlist.Column}
- otris.scriptlist.Column.setSortKey(sortKey){otris.scriptlist.Column}
- otris.scriptlist.List.addContainerClass(cls)
- otris.scriptlist.List.getContextData(){object|undefined}
- otris.scriptlist.List.getGrouping()
- otris.scriptlist.List.getListId(){string|undefined}
- otris.scriptlist.List.setContextData(cData)
- otris.scriptlist.List.setListId(listId)
- otris.scriptlist.List.setRowHeight(rowHeight)
- otris.scriptlist.List.setRowStyle(rowStyle)
- otris.scriptlist.List.setUpdateHeadline(updateHeadline)
- otris.tree.TreeItem.busyPanel "Dialog" "Gadget" "MainFile" "MainFileGentable" "MainList" "MainTree" "Workspace"
- otris.tree.TreeItem.order number
- otris.tree.TreeItem.remove()


## DOCUMENTS 5.0h

- otris.notifications.Notification.transfer(){string}
- otris.scriptlist.List.setContainerClass(containerClass)
- otris.scriptlist.List.setNoDataMessage(message)


## DOCUMENTS 5.0g HF2

- otris.tree.TreeItem.expandFirstTreeItem boolean
- otris.tree.TreeItem.preventDeselectTreeItem boolean


## DOCUMENTS 5.0g

-
- new otris.scriptlist.Group(columnOrGroup)
- new otris.scriptlist.Grouping(columnOrGroup)
- new otris.scriptlist.HitresultList(config)
- otris.scriptlist.List.getColumns(){Array.<otris.scriptlist.Column>}
- otris.scriptlist.List.setOnRowClick(rowClick)
- otris.scriptlist.List.setOnRowDoubleClick(rowDoubleClick)


## DOCUMENTS 5.0f HF2

- otris.notifications.Notification.setDeleteOnload(deleteOnload)


## DOCUMENTS 5.0f

- otris.scriptlist.List.setListStyle(style){otris.scriptlist.ScriptListStyle}
- otris.scriptlist.List.setScrollWithParent(scrollWithParent)
- otris.scriptlist.List.setShowTitle(showTitle)
- new otris.scriptlist.ScriptListStyle(configuration)
- otris.tools.ClientHeaderCode.getInfo(){otris.tools.ClientInformation}
- otris.tree.TreeItem.treeVisualizationType string


## DOCUMENTS 5.0e

- otris.notifications.Notification.setProgressValue(progressValue)
- new otris.notifications.NotificationEntry()
- new otris.notifications.NotificationManager()
- otris.scriptlist.List.setEnableTextSelection(enableTextSelection)
- otris.scriptlist.List.setFitGroups(fitGroups)
- otris.scriptlist.List.setFitHeightOnGroupCollapse(fitHeightOnGroupCollapse)
- otris.scriptlist.List.setFitHeightOnGroupExpand(fitHeightOnGroupExpand)
- otris.scriptlist.List.setMoveRows(moveRows)
- otris.scriptlist.List.setNavibarEntry(options)
- otris.scriptlist.List.setShowIndexNumbers(showIndexNumbers)
- otris.scriptlist.List.setShowMoveColumn(showMoveColumn)
- otris.scriptlist.List.setShowQuickFilter(showQuickFilter)
- otris.scriptlist.List.setStickyGroupRows(stickyGroupRows)
- otris.scriptlist.List.setSublistBlobThumbnails(sublistBlobThumbnails)
- new otris.scriptlist.MoveRowResult(result)
- otris.scriptlist.Row.addSubrow(config){otris.scriptlist.Subrow}
- otris.scriptlist.Row.setEmphasized(emphasized){otris.scriptlist.Row}
- new otris.tools.ClientHeaderCode()


## DOCUMENTS 5.0d HF2

- staticotris.tree.otris.tree.getScriptTreeEvent(){ScriptTreeEvent|undefined}
- otris.notifications.Notification.setProducer(user)
- new otris.scriptlist.RowUpdate(updateData)
- otris.tree.TreeItem.hasChilds boolean
- otris.tree.TreeItem.lazyLoad boolean


## DOCUMENTS 5.0d

- new otris.notifications.Notification(message, title, type, action, sticky)
- new otris.notifications.ScriptReturn(returnType, returnValue)
- staticotris.scriptlist.otris.scriptlist.getScriptListEvent(){object|undefined}
- otris.scriptlist.List.setFitHeight(fitHeight)
- otris.scriptlist.List.setMaxHeight(maxHeight)
- otris.scriptlist.List.setMinHeight(minHeight)
- otris.scriptlist.List.setShowGroupCheckbox(showGroupCheckbox)
- new otris.tour.Tour()


## DOCUMENTS 5.0c

- otris.scriptlist.List.addListener(eventName)
- otris.tree.TreeItem.tooltip string