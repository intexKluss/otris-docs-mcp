---
title: "Changelog"
source: "https://otris.software/documents/api/gadgets/changelog.html"
---

# Changelog


## Documents 6.3.0

- otris.gadget.gui.Chart.getChartConfiguration(){object}
- otris.gadget.gui.Chart.setChartConfiguration(chartConfiguration)


## Documents 6.2.0

- staticmodule:gadgetAPI.module:gadgetAPI.getWizardContext(){otris.gadget.WizardContext}
- staticotris.gadget.WizardContext.otris.gadget.WizardContext.addStep(newStep, index)
- staticotris.gadget.WizardContext.otris.gadget.WizardContext.getSteps(){Array.<otris.gadget.gui.WizardStep>}
- staticotris.gadget.WizardContext.otris.gadget.WizardContext.removeStep(stepId, removeData)
- staticotris.gadget.WizardContext.otris.gadget.WizardContext.updateSteps(updateSteps, removeData)
- otris.gadget.gui.Form.getFormFieldNames(){Array.<string>}
- otris.gadget.gui.Form.getFormFields(){Array.<otris.gadget.gui.Element>}
- otris.gadget.gui.Transferable.getGadgetType(){string|undefined}
- otris.gadget.gui.Transferable.setRoute(routeId)
- otris.gadget.gui.WizardStep.getId(){string}


## Documents 6.0.2

- otris.gadget.gui.Gentable.setDefinition(definition){otris.gadget.gui.Gentable}


## Documents 6.0.1

- staticmodule:gadgetAPI.module:gadgetAPI.isGadgetCall(){boolean}
- otris.gadget.gui.Transferable.addFullscreenButton(value)


## Documents 6.0.0

- otris.gadget.gui.Transferable.getClientLibConfiguration()


## Documents 5.0i HF6

- otris.gadget.gui.SelectableElement.getSelectableValues()
- otris.gadget.gui.SelectableElement.getSelectedValues()


## Documents 5.0i HF3

- otris.gadget.gui.Message.getMessage(){string}
- otris.gadget.gui.Message.getMessageType(){string}
- otris.gadget.gui.Message.setMessage(message){this}
- otris.gadget.gui.Message.setMessageType(messageType){this}


## Documents 5.0i

- staticotris.gadget.WizardContext.otris.gadget.WizardContext.addStepButton(containerButtonConfig)
- staticotris.gadget.WizardData.otris.gadget.WizardData.addStepButton(containerButtonConfig)
- otris.gadget.gui.HTML.prependHtml(newHtml)
- new otris.gadget.gui.Layout(viewId)
- otris.gadget.gui.Transferable.getContainerButton(buttonId){object|undefined}
- otris.gadget.gui.Transferable.getContainerButtons(){Array.<object>}
- otris.gadget.gui.Transferable.getContextData(){object}


## Documents 5.0h HF2

- otris.gadget.gui.Transferable.addGadgetStyles(lessCode)
- otris.gadget.gui.Transferable.addOnGadgetLoad(onLoadHandlerFunction)
- otris.gadget.gui.Transferable.setGadgetStyles(lessCode)


## Documents 5.0h

- otris.gadget.gui.Chart.getChartOnClickHandler(){function}
- otris.gadget.gui.Chart.getData(){object}
- otris.gadget.gui.Chart.getOptions(){object}
- otris.gadget.gui.Chart.getType(){string}
- otris.gadget.gui.Element.moveAfter(name){otris.gadget.gui.Element}
- otris.gadget.gui.Element.moveBefore(name){otris.gadget.gui.Element}
- otris.gadget.gui.Element.remove(){otris.gadget.gui.Element}
- otris.gadget.gui.Form.getElement(name){otris.gadget.gui.Element}
- otris.gadget.gui.Transferable.setResizeObserver(resizeObserver)
- otris.gadget.gui.WizardStep.setShowBusyPanel(showBusyPanelFlag)


## Documents 5.0g HF2

- otris.gadget.gui.TableData.setBeforeExecuteQuery(beforeExecuteQueryFunction)


## Documents 5.0g

-
- otris.gadget.gui.Form.addHtml(htmlCode, options){otris.gadget.gui.Element}
- otris.gadget.gui.Form.addPlainText(text, options){otris.gadget.gui.Element}


## Documents 5.0f

- new otris.gadget.gui.DropForm(dropConfiguration, viewId)
- otris.gadget.gui.Element.endHorizontalRuler(endBefore){otris.gadget.gui.Element}
- otris.gadget.gui.Element.setReloadOnChange(options){otris.gadget.gui.Element}
- otris.gadget.gui.Form.addHorizontalRuler(name, label, value, options){otris.gadget.gui.Element}
- otris.gadget.gui.Form.getChangedField(){string|undefined}
- otris.gadget.gui.Form.setFocusField(type, fieldName)
- otris.gadget.gui.Form.setFormStyle(name, value)
- otris.gadget.gui.HTML.activateDHTProcessing()
- otris.gadget.gui.HTML.appendHtml(newHtml)
- otris.gadget.gui.Transferable.getApplicationInfo()
- otris.gadget.gui.Wizard.getWizardData()


## Documents 5.0e

- otris.gadget.gui.Transferable.addContainerButton(buttonConfig){object}
- otris.gadget.gui.Transferable.setContainerButtons(containerButtonConfigs, options)
- otris.gadget.gui.Transferable.setNavibarEntry(gadgetConfig, label)
- new otris.gadget.gui.TreeChart(treeChart, viewId)


## Documents 5.0d HF2

- new otris.gadget.gui.Gentable(viewId)


## Documents 5.0d

- otris.gadget.gui.Form.addDropzone(name, label, dropzoneValues, dropzoneConfig){otris.gadget.gui.Element}
- new otris.gadget.gui.PropertyGrid(viewId)
- otris.gadget.gui.Transferable.addPdfButton(config)


## Documents 5.0c

- otris.gadget.gui.FullCalendar.setSearchContext(label, filterFunction)
- otris.gadget.gui.Transferable.setContextData(contextData)


## Documents 5.0b

- new otris.gadget.gui.Chart(type, data, options, viewId)
- new otris.gadget.gui.FullCalendar(title, viewId)
- new otris.gadget.gui.TableData(title, viewId)


## Documents 5.0a

- new otris.gadget.gui.OptionGroup()
- otris.gadget.gui.SelectableElement.addGroup(name, selectableValues){otris.gadget.gui.OptionGroup}
- new otris.gadget.gui.Settings()
- otris.gadget.gui.Transferable.addSettings(option)