---
title: "Tour - Manual"
source: "https://otris.software/documents/api/scriptextensions/ScriptTourManual.html"
---

# Tour - Manual


## Introduction

The ScriptTour (or short Tour) is a ScriptExtension which allows the creation of guided tours in DOCUMENTS. A Tour consists of two parts:

1. A PortalScript which creates the tour
2. A tour configuration which is executed in the browser


## Getting started

You need to do 3 things to get your first tour up and running

1. Create a PortalScript like the one below on the server and give it any name you like: // Import the tour class
// #import [ScriptTour] //Create a new tour instance
var tour = new otris.tour.Tour(); //Create the tour configuration
var tourconfig = { steps: [{ title: "Hello World", text: "Welcome to your first tour!" }]
}; //Apply the tour configuration
tour.setTourConfiguration(tourconfig); //Transfer the tour to the client
return tour.transfer();
2. Create any user defined action, which executes the script you just created (A button on a folder/file, a gadget, etc.)
3. Log into the web client and execute the action you just created


## Configuring the Tour

A tour configuration is a javascript object with two properties:

1. steps: An array of steps, which represent the steps a user sees when he uses the tour. Each step has multiple configuration options, which control the text, buttons, positioning, etc.
2. defaults: An object with default options which get applied to every step and can be overwritten by the options in each step. (Example: You want each step to have the title "my tour", so you set the property title on the defaults object to "my tour")

The resulting structure looks like this:


```
var myTour = {
    defaults: { ... },
    steps: [
        { ... },
        { ... },
        { ... }
    ]
}
```


## Step types

There are currently two types of steps:

1. Message step (short: msg): this type of step shows the user a message, which can be attached to an element on the window. This is the most common step and enabled by default.
2. Prepare step (short: prep): this type of step prepares the underlying web application. It can not be attached to an element and has no buttons. The tour will be advanced automatically, once the preparations are done. This can for example open a folder or show the dashboard. This step type has to be manually specified by setting the type property.


## Step options


### autoguideText [msg]

Configures the text to show for autoguide steps. The autoguide is a system which automatically inserts steps to guide the user on how to open submenus, if the target element is hidden inside one. (Example: The tour shows the user an action button, but the window is too small, so the action button which would normally be visible is now hidden in a drop down menu. The tour automatically detects this situation and inserts an autoguide step showing the user how to open the menu.)

(`string`, optional, default: value of `text`)


### backdrop [msg, prep]

Configures if this step has a darkened backdrop.

(`boolean`, optional, default: `true`)


### cancelable [msg, prep]

Configures if the tour is getting canceled if the user clicks on the backdrop (the darkend area) of this step.

(`boolean`, optional, default: `true`)


### cancelButton [msg, prep]

Configures if the step has a cancel button which cancels the tour. This also creates an **X** in the upper left corner of the step, if it has a `title`.

(`boolean`, optional, default: `false`)


### clickToAdvance [msg]

If set to true, the tour is advanced, if the user clicks the highlighted region. This also simulates a click on the element, if `disableInteraction` is not set to true.

(`boolean`, optional, default: `false`)


### disableInteraction [msg]

If set to true this disables the interaction with the highlighted element

(`boolean`, optional, default: `false`)


### nextButton [msg]

Configures if the step has a next button which advances to the next step

(`boolean`, optional, default: `true`)


### openFile [prep]

Opens a DocFile in the web client. The value has to be an object with the following keys:

- fileId: (string, mandatory) technical id of the file which sould be opened
- registerId: (string, optional) technical id of the register which should be opened
- documentId: (string, optional) technical id of the document which should be opened
- options: (object, optional) more options

For more information also see the Client SDK function `DocumentsContext.openFileView`

Example: `openFile: { fileId: "dopaag_fi20180000016709" }`

(`object`, optional, default: `null`)


### openFolder [prep]

Opens a Folder in the web client. The value has to be an object with the following keys:

- folderId: (string, mandatory) technical id of the folder which sould be opened

For more information also see the Client SDK function `DocumentsContext.openFolderView`

Example: `openFolder: { folderId: "96:14038" }`

(`object`, optional, default: `null`)


### openHomeView [prep]

If set to true opens the dashboard/homeview

(`boolean`, optional, default: `false`)


### openOutbar [prep]

Opens an Outbar in the web client tree. The value has to be an object with the following keys:

- name: (string, mandatory) technical name of the outbar which sould be opened

The following special technical names exist:

- OutbarPublicFolder
- OutbarPrivateFolder
- OutbarCombinedFolder
- OutbarHitTree

Example: `openOutbar: { name: "OutbarCombinedFolder" }`

(`object`, optional, default: `null`)


### prevButton [msg]

Configures if the step has a previous button which returns to the last step

(`boolean`, optional, default: `false`)


### runFunction [prep]

Runs the given function and waits for the callback function to be executed

Required function signature: `function(step, callback) {}`

Example (Waits one second):


```
runFunction: function (step, cb) {
    setTimeout(cb, 1000);
}
```

(`function`, optional, default: `null`)


### selector [msg]

Configures the target to which the step gets attached. See the chapter Selector format for more information.

(`string`, mandatory)


### setMonitorState [prep]

Sets the monitor state to one of the two possible states

(`"open"|"closed"`, optional, default: `null`)


### setRegisterbarState [prep]

Sets the registerbar state to one of the two possible states

(`"open"|"min"`, optional, default: `null`)


### text [msg, prep]

Configures the text of a tour step. This can contain html.

(`string`, mandatory for msg/optional for prep, default for prep: Localized version of `"Please wait..."`)


### title [msg, prep]

Configures the title of a tour step, this is especially useful for the first and last steps of the tour. This can contain html.

(`string`, optional, default: `""`)


### type [msg, prep]

Configures the type of the step. (See Step types)

(`"msg"|"prep"`, optional, default: `"msg"`)


### beforeShowPromise [msg]

**Since**: `5.0f`

Configures a function returning a `Promise`. The function will be executed and the Tour waits for the promise to be resolved before proceeding to the next step.

(`function`, optional, default: `null`)


### waitForFileLoad [msg]

**Since**: `5.0f`

Waits for a file to be opened before proceeding to the next step. Should only be used when a step opens a new file.

(`boolean`, optional, default: `null`)


## Selector format

A selector is specified as a string with the following format

1. Category prefix (Example: global.menu)
2. Arguments,each one starts with a : (Example: global.menu:exit)
3. Side on which to attach the dialog box seperated from the rest of the string by a space. Possible values are: bottom, top, left, right, center (Example: global.menu:exit bottom)

For a list of all possible selectors have a look at the "Selector overview" tutorial.


## Examples


### Change DOCUMENTS password (with autoguide feature)

This example relies on the autoguide feature to automatically create a step for opening the settings menu.


```
// #import [ScriptTour]
var tour = new otris.tour.Tour();
tour.setTourConfiguration({
    defaults: {
        cancelable: false
    },
    steps: [{
        title: "Welcome",
        text: "Do you want to change your password?",
        cancelButton: true
    }, {
        text: "Click on \"Change password\",<br>to change your password",
        autoguideText: "Click on your name<br>to open the settings menu",
        selector: "global.settings:password left",
        nextButton: false,
        clickToAdvance: true
    }]
});
return tour.transfer();
```


### Small dashboard tour (with welcome screen & prepare step)


```
// #import [ScriptTour]
var tour = new otris.tour.Tour();
tour.setTourConfiguration({
    defaults: {
        disableInteraction: true
    },
    steps: [{
        title: "Welcome",
        text: "Do you want a small tour of the DOCUMENTS dashboard?",
        cancelButton: true
    }, {
        type: "prep",
        text: "Preparing your tour...",
        openDashboard: true
    }, {
        text: "Personal dashboard as an overview",
        selector: "dashboard.element:container center"
    }, {
        text: "Inbox tile",
        selector: "dashboard.element:tile_inbox right"
    }]
});
return tour.transfer();
```