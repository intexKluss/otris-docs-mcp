---
title: "Class: I18nContext"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.I18nContext.html"
---

### Constructors


****
- Since:
5.0b HF2


### Methods


**getMessages(propertiesFile){documents.sdk.I18nContextMessages}**
Returns a `Messages` object providing methods to work with values from a common key/value paired messages/properties file.

Currently this methods supports the property files stored in the werbserver (Tomcat) context.

This method tries to find a messages file with the locale currently selected by the logged in user at first. If no such file was found, a file without any specified locale is searched for.

| Name | Type | Description |
| --- | --- | --- |
| propertiesFile | string | the name of the messages file, leaving out the _<lang> postfix |

- See:
documents.sdk.I18nContextMessages


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.I18nContextMessages | the Messages object holding all the messages |


##### Example


```
var i18nContext = documentsContext.getI18nContext();
var customMessages = i18nContext.getMessages("customMessages");
```


**getServerMessages(){documents.sdk.I18nContextMessages}**
Returns a `Messages` object providing the server messages.

Provides the same functionality on the client side as the `context.getFromSystemTable()` method in the portal scripting.

- Since:
5.0g
- See:
documents.sdk.I18nContextMessages


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.I18nContextMessages | the Messages object holding all the messages |


##### Example


```
var i18nContext = documentsContext.getI18nContext();
var serverMessages = i18nContext.getServerMessages();
serverMessages.get("Archive_No_Server") // --> The Archive Server is not available.
```