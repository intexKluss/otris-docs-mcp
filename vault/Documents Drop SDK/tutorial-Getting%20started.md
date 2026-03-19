---
title: "Getting started"
source: "https://otris.software/documents/api/documents-native/tutorial-Getting%20started.html"
---

# Getting started

The best applications to get started are the outlook add-in or the desktop client. Before you get started it is recommended to open the dev tools (see [[Documents Drop SDK/tutorial-Debugging|Debugging]] tutorial). These can also be used to try out your first examples using the gadget which is included with your DOCUMENTS installation.


## The documentsNativeConnector object

When a gadget is running inside a native application there is an additional object available on the [[Documents Drop SDK/global|window]]. It is named [[Documents Drop SDK/global#documentsNativeConnector|documentsNativeConnector]] and provides interaction between the host application and the gadget running inside a web frame. Due to some implementations of host applications this object is not always ready, when the page is loaded. It can take a few milliesconds for the native API to initialize. There exists a global function [[Documents Drop SDK/global#whenReady|whenReady]], which can be used to get notified, as soon as the [[Documents Drop SDK/global#documentsNativeConnector|documentsNativeConnector]] is ready. Use the following code to get started:


```
whenReady("documentsNativeConnector").then(function () {
  //This console.log statement logs to the dev tools and not to the server console
  console.log(documentsNativeConnector.applicationInfo);
});
```


## Reading the selection and uploading files

The current selection is available in the [[Documents Drop SDK/DocumentsNativeConnector#currentSelection|documentsNativeConnector.currentSelection]] object. You can also register a selection change event callback function using [[Documents Drop SDK/DocumentsNativeConnector#onSelectionChanged|documentsNativeConnector.onSelectionChanged]].

The selection always consists of two layers:

The first layer is the so called [[Documents Drop SDK/FileGroup]], which groups multiple [[Documents Drop SDK/FileData]] objects that belong to the same group in the host application (e.g. a mail with multiple attachments). A file group contains meta data about the selection in the host application (e.g. [[Documents Drop SDK/FileGroup#name|name]], [[Documents Drop SDK/Mail#senderMail|senderMail]], [[Documents Drop SDK/Mail#senderName|senderName]], [[Documents Drop SDK/Mail#recipients|recipients]], ...) and the [[Documents Drop SDK/FileGroup#files|files]] array, which contains the [[Documents Drop SDK/FileData]] objects. Each [[Documents Drop SDK/FileGroup]] also has a unique [[Documents Drop SDK/FileGroup#id|id]].

The [[Documents Drop SDK/FileData]] objects represent the second layer: actual files and their meta data (e.g. [[Documents Drop SDK/FileData#lastWrite|lastWrite]], [[Documents Drop SDK/FileData#name|name]], [[Documents Drop SDK/FileData#size|size]]). Each [[Documents Drop SDK/FileData]] object also has an [[Documents Drop SDK/FileData#id|id]], **which is only unique in its FileGroup and is not globally unique**

The file upload is performed by the host application and not by your gadget. To upload files from the host application to the documents server you have to generate their ids. The id of a file is always a combination of the [[Documents Drop SDK/FileGroup#id|fileGroup.id]] and the [[Documents Drop SDK/FileData#id|fileData.id]], which have to be joined using a dot (`"."`). To upload the files you call [[Documents Drop SDK/DocumentsNativeConnector#upload|documentsNativeConnector.upload(files)]] using an array of file ids as the `files` parameter. This function returns a promise which is resolved, when the upload is completed. The responses of the upload can be accessed using [[Documents Drop SDK/DocumentsNativeConnector#uploadResponses|documentsNativeConnector.uploadResponses]] These responses contain an [[Documents Drop SDK/UploadResponse#accessToken|accessToken]], which can be used to access the files on the server using `context.getTempPathByToken(accessToken)`.

Use the following code to get started:


```
var filesToUpload = [];

var fileGroupArray = documentsNativeConnector.currentSelection;
for(var groupI = 0; groupI < fileGroupArray.length; groupI++) {
  var fileGroup = fileGroupArray[groupI];
  var fileDataArray = fileGroup.files;
  for(var dataI = 0; dataI < fileDataArray.length; dataI++) {
    var fileData = fileDataArray[dataI];
    filesToUpload.push(fileGroup.id + "." + fileData.id);
  }
}

documentsNativeConnector.upload(filesToUpload).then(function() {
  //Log the upload responses.
  //The accessTokens can now be used on the server to get the files.
  console.log(documentsNativeConnector.uploadResponses);
});
```


## Controlling the host application

You can also control some aspects of the host application. For example you can insert text into a word document. To send commands to a host application you have to use the instance of the current host application class. For Microsoft Word this instance can be retrived from [[Documents Drop SDK/DocumentsNativeConnector#mswordDocument|documentsNativeConnector.mswordDocument]]. Please have a look at the class documentation and the [[Documents Drop SDK/tutorial-Host%20applications|Host applications]] tutorial for more information about which hosts can be controlled and what methods are available to you.