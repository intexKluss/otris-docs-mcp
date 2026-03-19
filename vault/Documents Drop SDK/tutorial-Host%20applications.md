---
title: "Host applications"
source: "https://otris.software/documents/api/documents-native/tutorial-Host%20applications.html"
---

# Host applications

Multiple host applications exist. You can get more information about the host application by examining the [[Documents Drop SDK/DocumentsNativeConnector#applicationInfo|documentsNativeConnector.applicationInfo]] object. It contains information about the application types and versions and also the background color of the host application, which can be used to better integrate your gadget in the application. The [[Documents Drop SDK/ApplicationInfo#hostName|hostName]] and [[Documents Drop SDK/ApplicationInfo#nativeType|nativeType]] attributes give you information about the context in which the [[Documents Drop SDK/global#documentsNativeConnector|documentsNativeConnector]] is running. The applicationInfo can change while the gadget is active. To respond to such a change you can register an event handler using [[Documents Drop SDK/DocumentsNativeConnector#onApplicationInfoChanged|documentsNativeConnector.onApplicationInfoChanged()]].

The following [[Documents Drop SDK/ApplicationInfo#hostName|hostName]] and [[Documents Drop SDK/ApplicationInfo#nativeType|nativeType]] combinations exist:

| Application | hostName | nativeType |
| --- | --- | --- |
| Outlook Desktop-Add-In | msoutlook | addin |
| Word Desktop-Add-In | msword | addin |
| Excel Desktop-Add-In | msexcel | addin |
| Desktop Client | desktop | desktop |
| myFavorites App | appfavorites | app |
| myCompliance App | appcompliance | app |
| myCorporate App | appcorporate | app |
| myContract App | appcontract | app |
| Outlook Web-Add-In | msoutlook | webaddin:[web-addin-host] |
| Word Web-Add-In | msword | webaddin:[web-addin-host] |


## Web addin host

For office web addins there are multiple host applications in which the add in can run. They support different apis and can be detected by inspecting the [[Documents Drop SDK/ApplicationInfo#nativeType|nativeType]]. The following web add in hosts exist:

| Application host | [web-addin-host] value |
| --- | --- |
| Office Online / Outlook Web App / Office 365 | officeonline |
| Office for Windows | pc |
| Office for Mac | mac |
| Office for Android | android |
| Office for iOS | ios |
| Windows RT / Windows Store | universal |


## Host controller instances

Some host applications can be controlled. The control is done using an instance of a class. The available controllers can be checked by examining the [[Documents Drop SDK/ApplicationInfo#availableHostControllers|applicationInfo.availableHostControllers]] attribute. The following instances exist in the different hosts.

| Name | Application | Instance |
| --- | --- | --- |
| msoutlookEditor | Outlook (Desktop and Web; only in edit mode) | documentsNativeConnector.msoutlookEditor |
| msexcelWorkbook | Excel (Desktop) | documentsNativeConnector.msoutlookEditor |
| msoutlookMail | Outlook (Desktop only) | documentsNativeConnector.msoutlookMail |
| mswordDocument | Word (Desktop and Web) | documentsNativeConnector.mswordDocument |
| appController | Mobile App (all variants) | documentsNativeConnector.appController |
| clipboardController | All desktop clients (Office Add-In & Desktop) | documentsNativeConnector.clipboardController |
| configController | All desktop clients (Office Add-In & Desktop) | documentsNativeConnector.configController |
| connectionManager | All desktop clients (Office Add-In & Desktop) | documentsNativeConnector.connectionManager |


## Customizing the host application

Some host applications can be persistently customized. Icon, Name and more can be configured through the [[Documents Drop SDK/DocumentsNativeConnector#configController|documentsNativeConnector.configController]]. Some applications require a restart for some customizations to become active.