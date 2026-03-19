---
title: "Callback-Dokumentation"
source: "https://otris.software/documents/manuals/books/otr-user-management/callbacks.html"
---

# Callback-Dokumentation


In order to provide callbacks, a callback script must be created that conforms to the following naming convention: `<name>_Callback_<name>`, e.g.: otrUserManagement_Callback_relations. The required callback functions are then provided in the script.
Please note that for changed callbacks the script cache must be cleared and for new callbacks all caches must be cleared.

**Example**


```js
// The correct callback version must be used
module.exports.version = 2;
// Define a module name
module.exports.moduleName = "relations";
// Provide the callbacks for otrUserManagement
module.exports.otrUserManagement = {
   // Define the callbacks, e.g.:
   beforeAddUserListActions: function(options) {
      util.out("Options for beforeAddUserListActions: " + JSON.stringify(options));
      // your own code for this callback
      // ...
   },
   beforeAddProfileListActions: function (options) {
      util.out("Options for beforeAddProfileListActions: " + JSON.stringify(options));
      // your own code for this callback
      // ...
   },
   // other callback
   // ...
};
```

// The correct callback version must be used
module.exports.version = 2;
// Define a module name
module.exports.moduleName = "relations";
// Provide the callbacks for otrUserManagement
module.exports.otrUserManagement = {
   // Define the callbacks, e.g.:
   beforeAddUserListActions: function(options) {
      util.out("Options for beforeAddUserListActions: " + JSON.stringify(options));
      // your own code for this callback
      // ...
   },
   beforeAddProfileListActions: function (options) {
      util.out("Options for beforeAddProfileListActions: " + JSON.stringify(options));
      // your own code for this callback
      // ...
   },
   // other callback
   // ...
};- otrUserManagement
~beforeAddUserListActions(options)
~beforeAddUserListColumns(options)
~beforeAddUserListEntry(options)
~beforeCreateUser(options)
~beforeActivateUser(options)
~afterActivateUser(options)
~beforeDeactivateUser(options)
~afterDeactivateUser(options)
~beforeDeleteUser(options)
~afterDeleteUser(options)
~editLicenseTypes(options)
~beforeUserGadgetTransfer(options)
~afterGetUserSchema(options)
~afterGetUserData(options)
~beforeSaveUser(options)
~afterSaveUser(options)
~filterUserProperties(options)
~beforeAddProfileListActions(options)
~beforeAddProfileListColumns(options)
~beforeAddProfileListEntry(options)
~beforeCreateAccessProfile(options)
~beforeDeleteAccessProfile(options)
~afterDeleteAccessProfile(options)
~beforeProfileGadgetTransfer(options)
~afterGetProfileSchema(options)
~afterGetProfileData(options)
~beforeSaveAccessProfile(options)
~afterSaveAccessProfile(options)


### otrUserManagement~beforeAddUserListActions(options)

This is called before an action is added to the user list and should be used to allow or reject actions to be shown.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.listActions | object | Action (id) to be shown. |
| options.listActionsByName | object | Action (name) to be shown. |
| options.list | object | ScriptList where the users will be shown. |
| options.listParams | object | ScriptList parameters. |

**Example**


```js
// For example do not allow actions from blacklist
const blackList = ["delete", "activate", "deactivate"];
options.listActions.forEach(action => {
   if (blackList.indexOf(action.name) !== -1) {
      action.enabled = false;
   }
});
// For example add a new action
function myFunc() {
   console.log("myFunc executed!");
}
const newAction = {
   name: 'myAction',
   label: 'My new action',
   imageFile: 'mdi:mdi-information',
   alwaysShowLabel: true,
   type: 'button',
   clientScript: myFunc.toString()
};
options.listActions.push(newAction);
```

// For example do not allow actions from blacklist
const blackList = ["delete", "activate", "deactivate"];
options.listActions.forEach(action => {
   if (blackList.indexOf(action.name) !== -1) {
      action.enabled = false;
   }
});
// For example add a new action
function myFunc() {
   console.log("myFunc executed!");
}
const newAction = {
   name: 'myAction',
   label: 'My new action',
   imageFile: 'mdi:mdi-information',
   alwaysShowLabel: true,
   type: 'button',
   clientScript: myFunc.toString()
};
options.listActions.push(newAction);


### otrUserManagement~beforeAddUserListColumns(options)

This is called before adding columns and should be used to manipulate the user list.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.columns | object | The current columns (id). |
| options.columnsByKey | object | The current columns (name). |
| options.list | object | ScriptList where the users will be shown. |
| options.listParams | object | ScriptList parameters. |
| options.icons | object | The icons for users and editors in the list. |
| options.iterator | object | Filter and sorting options for the list. |

**Example**


```js
// For example hide column loggedIn
options.columns.forEach(column => {
   if (column.key == "loggedIn") {
      column.visible = false;
   }
});
// For example change the default sorting of the list
options.iterator.sorting = "particulars.lastName+, particulars.firstName+";
// For example add a new column for mobile phone (to fill data additionally use callback beforeAddUserListEntry)
const newColumn = {
   key: 'mobilephone',
   label: context.getLocaleValue('de:Mobiltelefon;en:Mobile Phone'),
   type: 'STRING'
};
options.columns.push(newColumn);
```

// For example hide column loggedIn
options.columns.forEach(column => {
   if (column.key == "loggedIn") {
      column.visible = false;
   }
});
// For example change the default sorting of the list
options.iterator.sorting = "particulars.lastName+, particulars.firstName+";
// For example add a new column for mobile phone (to fill data additionally use callback beforeAddUserListEntry)
const newColumn = {
   key: 'mobilephone',
   label: context.getLocaleValue('de:Mobiltelefon;en:Mobile Phone'),
   type: 'STRING'
};
options.columns.push(newColumn);


### otrUserManagement~beforeAddUserListEntry(options)

This is called before adding rows and should be used to manipulate the user list.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.addEntry | boolean | true/false |
| options.rowData | object | The current columns for the row. |
| options.pdo | object | The user attributes. |

**Example**


```js
// For example hide the user "crmadmin"
if (options.rowData.login == "crmadmin") {
   options.addEntry = false;
}
// For example fill the column mobilephone (see callback example beforeAddUserListColumns) with the data
const su = context.findSystemUser(options.rowData.login);
const mobilephone = su.getAttribute("particulars.mobile");
options.rowData.mobilephone = mobilephone;
```

// For example hide the user "crmadmin"
if (options.rowData.login == "crmadmin") {
   options.addEntry = false;
}
// For example fill the column mobilephone (see callback example beforeAddUserListColumns) with the data
const su = context.findSystemUser(options.rowData.login);
const mobilephone = su.getAttribute("particulars.mobile");
options.rowData.mobilephone = mobilephone;


### otrUserManagement~beforeCreateUser(options)

This is called before a new user is created via the "Save" action and should be used to allow or reject.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.doCreate | boolean | true/false |
| options.login | string | The login of the user. |
| options.config | object | The current schema form configuration. |
| options.userData | object | The current data in the form. |
| options.gadgetParams | object | The current gadget params. |
| options.message | object | A message for display. |

**Example**


```js
// For example display a message if no E-mail is set for the user
if (!options.hasOwnProperty("userData.particulars.eMail")) {
   options.doCreate = false;
   options.message.title = context.getLocaleValue("de:Hinweise;en:Note");
   options.message.message = context.getLocaleValue("de:Für den Benutzer ist keine E-Mail Adresse angegeben.;en:No e-mail address is specified for the user.");
}
```

// For example display a message if no E-mail is set for the user
if (!options.hasOwnProperty("userData.particulars.eMail")) {
   options.doCreate = false;
   options.message.title = context.getLocaleValue("de:Hinweise;en:Note");
   options.message.message = context.getLocaleValue("de:Für den Benutzer ist keine E-Mail Adresse angegeben.;en:No e-mail address is specified for the user.");
}


### otrUserManagement~beforeActivateUser(options)

This is called before a user is to be activated via the "Activate" action and should be used to allow or reject.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.doActivate | boolean | true/false |
| options.systemUser | object | The system user object. |

**Example**


```js
// For example never activate the user "testuser", trigger a notification
if (options.systemUser.login == "testuser") {
   options.doActivate = false;
   util.out("The user testuser must not be activated!");
   const otrisNotifications = require("otris.notifications");
   const currentUser = context.currentUser;
   let notification = new otrisNotifications.Notification("The user " + options.systemUser.login + " must not be activated!", "Warning");
   notification.setStyle({
      icon: "mdi:mdi-alert-outline;color:white",
      iconBackground: "orange",
      background: "ea6a21",
      color: "white",
      lightness: .5
   });
   notification.setDeleteOnload(true);
   notification.publish(currentUser);
}
```

// For example never activate the user "testuser", trigger a notification
if (options.systemUser.login == "testuser") {
   options.doActivate = false;
   util.out("The user testuser must not be activated!");
   const otrisNotifications = require("otris.notifications");
   const currentUser = context.currentUser;
   let notification = new otrisNotifications.Notification("The user " + options.systemUser.login + " must not be activated!", "Warning");
   notification.setStyle({
      icon: "mdi:mdi-alert-outline;color:white",
      iconBackground: "orange",
      background: "ea6a21",
      color: "white",
      lightness: .5
   });
   notification.setDeleteOnload(true);
   notification.publish(currentUser);
}


### otrUserManagement~afterActivateUser(options)

This is called after a user is activated via the "Activate" action and should be used for further processing.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.systemUser | object | The system user object. |

**Example**


```js
// For example log the activation of an user
const currentUser = context.currentUser;
const activatedUser = options.systemUser.login;
util.out("The user " + currentUser + " has activated the user " + activatedUser);
```

// For example log the activation of an user
const currentUser = context.currentUser;
const activatedUser = options.systemUser.login;
util.out("The user " + currentUser + " has activated the user " + activatedUser);


### otrUserManagement~beforeDeactivateUser(options)

This is called before a user is to be deactivated via the "Deactivate" action and should be used to allow or reject.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.doDeactivate | boolean | true/false |
| options.checkAgent | boolean | true/false |
| options.systemUser | object | The system user object. |
| options.systemUser.propCache | object | The propCache of the user. |

**Example**


```js
// For example cancel deactivation if no agent is specified for the user
const su = options.systemUser;
if (su.getAgents().size() == 0) {
   options.doDeactivate = false;
   options.message.title = context.getLocaleValue("de:Hinweis;en:Note");
   options.message.message = context.getLocaleValue("de:Der Benutzer kann erst deaktiviert werden, wenn ein Vertreter angegeben wurde.;en:The user cannot be deactivated until a representative is specified.");
}
```

// For example cancel deactivation if no agent is specified for the user
const su = options.systemUser;
if (su.getAgents().size() == 0) {
   options.doDeactivate = false;
   options.message.title = context.getLocaleValue("de:Hinweis;en:Note");
   options.message.message = context.getLocaleValue("de:Der Benutzer kann erst deaktiviert werden, wenn ein Vertreter angegeben wurde.;en:The user cannot be deactivated until a representative is specified.");
}


### otrUserManagement~afterDeactivateUser(options)

This is called after a user is deactivated via the "Deactivate" action and should be used for further processing.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.doDeactivate | boolean | true/false |
| options.checkAgent | boolean | true/false |
| options.systemUser | object | The system user object. |

**Example**


```js
// For example add deactivation info properties to the user
const currentUser = context.currentUser;
const currentTimestamp = context.getAutoText("currentTimestamp");
const deactivatedUser = context.findSystemUser(options.systemUser.login);
deactivatedUser.setAttribute("$deactivatedFrom", currentUser);
deactivatedUser.setAttribute("$deactivatedAt", currentTimestamp);
```

// For example add deactivation info properties to the user
const currentUser = context.currentUser;
const currentTimestamp = context.getAutoText("currentTimestamp");
const deactivatedUser = context.findSystemUser(options.systemUser.login);
deactivatedUser.setAttribute("$deactivatedFrom", currentUser);
deactivatedUser.setAttribute("$deactivatedAt", currentTimestamp);


### otrUserManagement~beforeDeleteUser(options)

This is called before a user is deleted via the "Delete" action and should be used to allow or reject.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.doDelete | boolean | true/false |
| options.login | string | The user name for deletion. |
| options.systemUser | object | The system user object. |
| options.errorMessage | string | A message for display. |

**Example**


```js
// For example return a message if an user is activated and cancel deletion
const su = options.systemUser;
if (su.getStatus() == "released") {
   options.doDelete = false;
   options.errorMessage = context.getLocaleValue("de:Der Benutzer muss zuerst deaktiviert werden.;en:The user must be disabled first.");
}
```

// For example return a message if an user is activated and cancel deletion
const su = options.systemUser;
if (su.getStatus() == "released") {
   options.doDelete = false;
   options.errorMessage = context.getLocaleValue("de:Der Benutzer muss zuerst deaktiviert werden.;en:The user must be disabled first.");
}


### otrUserManagement~afterDeleteUser(options)

This is called after a user is deleted via the "Delete" action and should be used for further processing.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.login | string | The login of the deleted user. |

**Example**


```js
// For example add delete info to the logfile
const currentUser = context.currentUser;
const currentTimestamp = context.getAutoText("currentTimestamp");
util.out("The user " + options.login + " was deleted on " + currentTimestamp + " by " + currentUser);
```

// For example add delete info to the logfile
const currentUser = context.currentUser;
const currentTimestamp = context.getAutoText("currentTimestamp");
util.out("The user " + options.login + " was deleted on " + currentTimestamp + " by " + currentUser);


### otrUserManagement~editLicenseTypes(options)

This is called when the user form is displayed and should be used for manipulate the available license types.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.licenceTypes | array | The license types. |

**Example**


```js
// For example remove the license types "Shared" and "Concurrent (standard)" from the list because these may not be used
options.licenceTypes = options.licenceTypes.filter(e => e !== 'Shared' && e !== 'Concurrent (standard)');
```

// For example remove the license types "Shared" and "Concurrent (standard)" from the list because these may not be used
options.licenceTypes = options.licenceTypes.filter(e => e !== 'Shared' && e !== 'Concurrent (standard)');


### otrUserManagement~beforeUserGadgetTransfer(options)

This is called before the user gadget form is displayed and should be used for manipulate the form and the actions.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.mode | string | The gadget mode (eg. edit). |
| options.login | string | The login of the current user. |
| options.title | string | The title for the gadget form. |
| options.id | string | The id of the gadget form. |
| options.gadgetAction | string | The gadget action (eg. show). |
| options.config | object | The current schema form configuration. |
| options.gadget | object | The current gadget. |
| options.gadgetContext | object | The current gadget context. |
| options.gadgetParams | object | The current gadget params. |
| options.data | object | The current form data. |

**Example**


```js
// For example change the title of the form
const data = options.data;
const newTitle = data["particulars.salutation"] + " " + data["particulars.firstName"] + " " + data["particulars.lastName"] + " (" + data["particulars.eMail"] + ")";
options.gadget.containerButtonConfiguration.topStyleType.title = newTitle;
// For example delete the action button "Delegate Files"
options.gadget.containerButtons = options.gadget.containerButtons.filter(function(btn) {
   return btn.id !== "delegateFiles";
});
// For example create a new action button
const gadget = options.gadget;
const buttons = gadget.containerButtons;
const myButton = {
   id: "myButton1",
   label: "my new button",
   clickFunction: "myFunc",
   position: "top"
};
buttons.push(myButton)
function myFunc(){
   alert("my function executed.");
}
gadget.addClientFunction(myFunc);
```

// For example change the title of the form
const data = options.data;
const newTitle = data["particulars.salutation"] + " " + data["particulars.firstName"] + " " + data["particulars.lastName"] + " (" + data["particulars.eMail"] + ")";
options.gadget.containerButtonConfiguration.topStyleType.title = newTitle;
// For example delete the action button "Delegate Files"
options.gadget.containerButtons = options.gadget.containerButtons.filter(function(btn) {
   return btn.id !== "delegateFiles";
});
// For example create a new action button
const gadget = options.gadget;
const buttons = gadget.containerButtons;
const myButton = {
   id: "myButton1",
   label: "my new button",
   clickFunction: "myFunc",
   position: "top"
};
buttons.push(myButton)
function myFunc(){
   alert("my function executed.");
}
gadget.addClientFunction(myFunc);


### otrUserManagement~afterGetUserSchema(options)

This is called after getting the user schema form and should be used for manipulate the form.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.gadgetParams | object | The gadget params for the form. |
| options.config | object | The current schema form configuration. |

**Example**


```js
// For example remove the tab expert settings
options.config.getUiSchema().items.splice(2,1);
// For example create a new field "remarks" at tab "general", group "personal data"
// To store the data in the new field use callback afterSaveUser
const uiSchema = options.config.getUiSchema();
const group = uiSchema.items[0].items[1];
if(group && group.items){
   group.items.push({
      type: "element",
      title: "Remarks",
      description: "Here you can enter remarks about the user",
      widget: "textarea",
      pointer: "/remarks",
      showLabel: true,
      width: 12,
      required: true
   });
}
// For example add a new tab with 2 groups and fields for each group
// To store the data in the new field use callback afterSaveUser
const myTab = {
   title: "My tab",
   items: [{
      title: "My group1",
      showDescription: true,
      descriptionAsMarkdown: true,
      description: "This is the description for the new tabgroup **My group1**",
      items: [{
         type: "element",
         title: "My field 1",
         description: "Description for my field 1",
         widget: "input",
         pointer: "/myfield1",
         width: 6,
         showLabel: true,
      }, {
         type: "element",
         title: "My field 2",
         description: "Description for my field 2",
         widget: "input",
         pointer: "/myfield2",
         width: 6,
         showLabel: true,
      }]
   }, {
      title: "My group 2",
      showDescription: true,
      descriptionAsMarkdown: true,
      description: "This is the description for the new tabgroup **My group2**",
      items: [{
         type: "element",
         title: "My field 3",
         description: "Description for my field 3",
         widget: "checkbox",
         pointer: "/myfield3",
      }]
   }]
};
options.config.getUiSchema().items.push(myTab);
```

// For example remove the tab expert settings
options.config.getUiSchema().items.splice(2,1);
// For example create a new field "remarks" at tab "general", group "personal data"
// To store the data in the new field use callback afterSaveUser
const uiSchema = options.config.getUiSchema();
const group = uiSchema.items[0].items[1];
if(group && group.items){
   group.items.push({
      type: "element",
      title: "Remarks",
      description: "Here you can enter remarks about the user",
      widget: "textarea",
      pointer: "/remarks",
      showLabel: true,
      width: 12,
      required: true
   });
}
// For example add a new tab with 2 groups and fields for each group
// To store the data in the new field use callback afterSaveUser
const myTab = {
   title: "My tab",
   items: [{
      title: "My group1",
      showDescription: true,
      descriptionAsMarkdown: true,
      description: "This is the description for the new tabgroup **My group1**",
      items: [{
         type: "element",
         title: "My field 1",
         description: "Description for my field 1",
         widget: "input",
         pointer: "/myfield1",
         width: 6,
         showLabel: true,
      }, {
         type: "element",
         title: "My field 2",
         description: "Description for my field 2",
         widget: "input",
         pointer: "/myfield2",
         width: 6,
         showLabel: true,
      }]
   }, {
      title: "My group 2",
      showDescription: true,
      descriptionAsMarkdown: true,
      description: "This is the description for the new tabgroup **My group2**",
      items: [{
         type: "element",
         title: "My field 3",
         description: "Description for my field 3",
         widget: "checkbox",
         pointer: "/myfield3",
      }]
   }]
};
options.config.getUiSchema().items.push(myTab);


### otrUserManagement~afterGetUserData(options)

This is called when the user form is displayed and should be used for further processing.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.login | string | The login name of the user. |
| options.config | object | The current schema form configuration. |
| options.user | object | The system user object. |
| options.userData | object | The user attributes used in the form. |

**Example**


```js
// For example trigger a notification if the E-Mail address is not set for an existing user
if (options.userData.login != "") {
   if (options.user.email == "") {
      const otrisNotifications = require("otris.notifications");
      const currentUser = context.currentUser;
      let notification = new otrisNotifications.Notification("The user " + options.systemUser.login + " has no E-Mail address!", "Warning");
      notification.setStyle({
         icon: "mdi:mdi-alert-outline;color:white",
         iconBackground: "orange",
         background: "ea6a21",
         color: "white",
         lightness: .5
      });
      notification.setDeleteOnload(true);
      notification.publish(currentUser);
   }
}
// For example show the values of the new fields (see callbacks afterGetUserSchema and afterSaveUser)
const user = options.user;
options.userData.remarks = user.getAttribute("remarks");
options.userData.myfield1 = user.getAttribute("particulars.fax");
options.userData.myfield2 = user.getAttribute("$myUserProperty1");
options.userData.myfield3 = user.getAttribute("$myUserProperty2");
```

// For example trigger a notification if the E-Mail address is not set for an existing user
if (options.userData.login != "") {
   if (options.user.email == "") {
      const otrisNotifications = require("otris.notifications");
      const currentUser = context.currentUser;
      let notification = new otrisNotifications.Notification("The user " + options.systemUser.login + " has no E-Mail address!", "Warning");
      notification.setStyle({
         icon: "mdi:mdi-alert-outline;color:white",
         iconBackground: "orange",
         background: "ea6a21",
         color: "white",
         lightness: .5
      });
      notification.setDeleteOnload(true);
      notification.publish(currentUser);
   }
}
// For example show the values of the new fields (see callbacks afterGetUserSchema and afterSaveUser)
const user = options.user;
options.userData.remarks = user.getAttribute("remarks");
options.userData.myfield1 = user.getAttribute("particulars.fax");
options.userData.myfield2 = user.getAttribute("$myUserProperty1");
options.userData.myfield3 = user.getAttribute("$myUserProperty2");


### otrUserManagement~beforeSaveUser(options)

This is called before the user is saved via the "Save" action and should be used for further processing.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.doSave | boolean | true/false |
| options.login | string | The login of the user. |
| options.userData | object | The current data to be stored. |
| options.systemUser | object | The system user object. |
| options.gadgetParams | object | The gadget params for the form. |
| options.message | object | A message for display. |

**Example**


```js
// For example display a message if no E-mail is set for the user
if (options.userData["particulars.eMail"] == "") {
   options.doSave = false;
   options.message.title = context.getLocaleValue("de:Hinweise;en:Note");
   options.message.message = context.getLocaleValue("de:Für den Benutzer ist keine E-Mail Adresse angegeben.;en:No e-mail address is specified for the user.");
}
```

// For example display a message if no E-mail is set for the user
if (options.userData["particulars.eMail"] == "") {
   options.doSave = false;
   options.message.title = context.getLocaleValue("de:Hinweise;en:Note");
   options.message.message = context.getLocaleValue("de:Für den Benutzer ist keine E-Mail Adresse angegeben.;en:No e-mail address is specified for the user.");
}


### otrUserManagement~afterSaveUser(options)

This is called when the user is saved via the "Save" action and should be used for further processing.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.created | boolean | true/false. |
| options.login | string | The login of the user. |
| options.config | object | The current schema form configuration. |
| options.userData | object | The current data to be stored. |
| options.systemUser | object | The system user object. |
| options.gadgetParams | object | The gadget params for the form. |

**Example**


```js
// For example save the new fields (see callback example afterGetUserSchema and afterGetUserData)
const user = options.systemUser;
const data = options.userData;
user.setAttribute("remarks", data.remarks);
user.setAttribute("particulars.fax", data.myfield1);
user.setAttribute("$myUserProperty1", data.myfield2);
user.setAttribute("$myUserProperty2", data.myfield3);
```

// For example save the new fields (see callback example afterGetUserSchema and afterGetUserData)
const user = options.systemUser;
const data = options.userData;
user.setAttribute("remarks", data.remarks);
user.setAttribute("particulars.fax", data.myfield1);
user.setAttribute("$myUserProperty1", data.myfield2);
user.setAttribute("$myUserProperty2", data.myfield3);


### otrUserManagement~filterUserProperties(options)

This is called when a user form is opened and should be used to manipulate the available properties

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.whitelist | object | The properties that can be selected. |
| options.blacklist | object | The properties that can not be selected. |

**Example**


```js
// For example the user property skinSignalColor can not be selected
const skinSignalColor = options.whitelist.$skinSignalColor;
delete options.whitelist.$skinSignalColor;
options.blacklist.push(skinSignalColor);
```

// For example the user property skinSignalColor can not be selected
const skinSignalColor = options.whitelist.$skinSignalColor;
delete options.whitelist.$skinSignalColor;
options.blacklist.push(skinSignalColor);


### otrUserManagement~beforeAddProfileListActions(options)

This is called before an action is added to the profile list and should be used to allow or reject actions to be shown.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.listActions | object | Action (id) to be shown. |
| options.listActionsByName | object | Action (name) to be shown. |
| options.list | object | ScriptList where the profiles will be shown. |
| options.listParams | object | ScriptList parameters. |

**Example**


```js
// For example do not allow actions for user "testuser"
if (currentUser == "testuser") {
   options.listActions.forEach(action => {
      action.enabled = false;
   });
}
// For example add a new action
function myFunc() {
   console.log("myFunc executed!");
}
const newAction = {
   name: 'myAction',
   label: 'My new action',
   imageFile: 'mdi:mdi-information',
   alwaysShowLabel: true,
   type: 'button',
   clientScript: myFunc.toString()
};
options.listActions.push(newAction);
```

// For example do not allow actions for user "testuser"
if (currentUser == "testuser") {
   options.listActions.forEach(action => {
      action.enabled = false;
   });
}
// For example add a new action
function myFunc() {
   console.log("myFunc executed!");
}
const newAction = {
   name: 'myAction',
   label: 'My new action',
   imageFile: 'mdi:mdi-information',
   alwaysShowLabel: true,
   type: 'button',
   clientScript: myFunc.toString()
};
options.listActions.push(newAction);


### otrUserManagement~beforeAddProfileListColumns(options)

This is called before adding columns and should be used to manipulate the profile list.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.columns | object | The current columns (id). |
| options.columnsByKey | object | The current columns (name). |
| options.list | object | ScriptList where the profiles will be shown. |
| options.listParams | object | ScriptList parameters. |
| options.icons | object | The icons for profiles (different icons for showInList true/false). |
| options.iterator | object | Filter and sorting options for the list. |

**Example**


```js
// For example hide the column for parentProfile
options.columns.forEach(column => {
   if (column.key == "parentProfile") {
      column.visible = false;
   }
});
// For example add a new column for profile name in language 1 (to fill data additionally use callback beforeAddProfileListEntry)
const newColumn = {
   key: 'name_1',
   label: context.getLocaleValue('de:Name in Sprache 1;en:Name in language 1'),
   type: 'STRING'
};
options.columns.push(newColumn);
```

// For example hide the column for parentProfile
options.columns.forEach(column => {
   if (column.key == "parentProfile") {
      column.visible = false;
   }
});
// For example add a new column for profile name in language 1 (to fill data additionally use callback beforeAddProfileListEntry)
const newColumn = {
   key: 'name_1',
   label: context.getLocaleValue('de:Name in Sprache 1;en:Name in language 1'),
   type: 'STRING'
};
options.columns.push(newColumn);


### otrUserManagement~beforeAddProfileListEntry(options)

This is called before adding rows and should be used to manipulate the profile list.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.addEntry | boolean | true/false |
| options.rowData | object | The current columns for the row. |
| options.pdo | object | The profile attributes. |

**Example**


```js
// For example hide the profile "CRMAdmin"
if (options.rowData.profileName == "CRMAdmin") {
   options.addEntry = false;
}
// For example fill the column name in language 1 (see callback example beforeAddProfileListColumns) with the data
const ap = context.findAccessProfile(options.rowData.profileName);;
const name_1 = ap.getAttribute("name");
options.rowData.name_1 = name_1;
```

// For example hide the profile "CRMAdmin"
if (options.rowData.profileName == "CRMAdmin") {
   options.addEntry = false;
}
// For example fill the column name in language 1 (see callback example beforeAddProfileListColumns) with the data
const ap = context.findAccessProfile(options.rowData.profileName);;
const name_1 = ap.getAttribute("name");
options.rowData.name_1 = name_1;


### otrUserManagement~beforeCreateAccessProfile(options)

This is called before a new access profile is created via the "Save" action and should be used to allow or reject.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.doCreate | boolean | true/false |
| options.profileName | string | The technical name of the access profile. |
| options.config | object | The current schema form configuration. |
| options.accessProfileData | object | The current data in the form. |
| options.gadgetParams | object | The current gadget params. |
| options.message | object | A message for display. |

**Example**


```js
// For example display a message if no nome for language 2 is set for the access profile
if (!options.accessProfileData.hasOwnProperty('name_2')) {
   options.doCreate = false;
   options.message.title = context.getLocaleValue("de:Hinweis;en:Note");
   options.message.message = context.getLocaleValue("de:Für das Zugriffsprofil muss ein Name in Sprache 2 angegeben werden;en:A name in language 2 must be specified for the access profile");
}
```

// For example display a message if no nome for language 2 is set for the access profile
if (!options.accessProfileData.hasOwnProperty('name_2')) {
   options.doCreate = false;
   options.message.title = context.getLocaleValue("de:Hinweis;en:Note");
   options.message.message = context.getLocaleValue("de:Für das Zugriffsprofil muss ein Name in Sprache 2 angegeben werden;en:A name in language 2 must be specified for the access profile");
}


### otrUserManagement~beforeDeleteAccessProfile(options)

This is called before a profile is deleted via the "Delete" action and should be used to allow or reject.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.doDelete | boolean | true/false |
| options.accessProfile | object | The access profile object. |
| options.errorMessage | object | A message for display. |

**Example**


```js
// For example check if profile has members and cancel deletion
const ap = options.accessProfile;
if (ap.getSystemUsers().size() > 0) {
   options.doDelete = false;
   options.errorMessage = context.getLocaleValue("de:Das Profil kann nicht gelöscht werden, weil noch Benutzer zugeordnet sind.;en:The profile cannot be deleted because users are still assigned.");
}
```

// For example check if profile has members and cancel deletion
const ap = options.accessProfile;
if (ap.getSystemUsers().size() > 0) {
   options.doDelete = false;
   options.errorMessage = context.getLocaleValue("de:Das Profil kann nicht gelöscht werden, weil noch Benutzer zugeordnet sind.;en:The profile cannot be deleted because users are still assigned.");
}


### otrUserManagement~afterDeleteAccessProfile(options)

This is called after a profile is deleted via the "Delete" action and should be used for further processing.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.profileName | string | The technical name of the deleted access profile. |

**Example**


```js
// For example add delete info to the logfile
const currentUser = context.currentUser;
const currentTimestamp = context.getAutoText("currentTimestamp");
util.out("The profile " + options.profileName + " was deleted on " + currentTimestamp + " by " + currentUser);
```

// For example add delete info to the logfile
const currentUser = context.currentUser;
const currentTimestamp = context.getAutoText("currentTimestamp");
util.out("The profile " + options.profileName + " was deleted on " + currentTimestamp + " by " + currentUser);


### otrUserManagement~beforeProfileGadgetTransfer(options)

This is called before the profile gadget form is displayed and should be used for manipulate the form and the actions.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.mode | string | The gadget mode (eg. edit). |
| options.title | string | The title for the gadget form. |
| options.id | string | The id of the gadget form. |
| options.gadgetAction | string | The gadget action (eg. show). |
| options.config | object | The current schema form configuration. |
| options.gadget | object | The current gadget. |
| options.gadgetContext | object | The current gadget context. |
| options.gadgetParams | object | The current gadget params. |
| options.data | object | The current form data. |

**Example**


```js
// For example change the title icon of the form
options.gadget.containerButtonConfiguration.topStyleType.icon = "mdi:mdi-account-group";
```

// For example change the title icon of the form
options.gadget.containerButtonConfiguration.topStyleType.icon = "mdi:mdi-account-group";


### otrUserManagement~afterGetProfileSchema(options)

This is called after getting the profile schema form and should be used for manipulate the form.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.uiSchema | object | The current schema form configuration |
| options.schema | object | The possible enum values |
| options.gadgetParams | object | The gadget params for the form. |

**Example**


```js
// For example remove the tab expert settings
options.uiSchema.items.splice(2,1);
// For example add a new tab with 2 groups and fields for each group
// To store the data in the new field use callback afterSaveAccessProfile
const myTab = {
  title: "My tab",
  items: [{
     title: "My group1",
     showDescription: true,
     descriptionAsMarkdown: true,
     description: "This is the description for the new tabgroup **My group1**",
     items: [{
        type: "element",
        title: "My field 1",
        description: "Description for my field 1",
        widget: "input",
        pointer: "/myfield1",
        width: 12,
        showLabel: true
     }]
  }, {
     title: "My group 2",
     showDescription: true,
     descriptionAsMarkdown: true,
     description: "This is the description for the new tabgroup **My group2**",
     items: [{
        type: "element",
        title: "My field 2",
        description: "Description for my field 2",
        widget: "input",
        pointer: "/myfield2",
        width: 12,
        showLabel: true
     }]
  }]
};
options.uiSchema.items.push(myTab);
```

// For example remove the tab expert settings
options.uiSchema.items.splice(2,1);
// For example add a new tab with 2 groups and fields for each group
// To store the data in the new field use callback afterSaveAccessProfile
const myTab = {
  title: "My tab",
  items: [{
     title: "My group1",
     showDescription: true,
     descriptionAsMarkdown: true,
     description: "This is the description for the new tabgroup **My group1**",
     items: [{
        type: "element",
        title: "My field 1",
        description: "Description for my field 1",
        widget: "input",
        pointer: "/myfield1",
        width: 12,
        showLabel: true
     }]
  }, {
     title: "My group 2",
     showDescription: true,
     descriptionAsMarkdown: true,
     description: "This is the description for the new tabgroup **My group2**",
     items: [{
        type: "element",
        title: "My field 2",
        description: "Description for my field 2",
        widget: "input",
        pointer: "/myfield2",
        width: 12,
        showLabel: true
     }]
  }]
};
options.uiSchema.items.push(myTab);


### otrUserManagement~afterGetProfileData(options)

This is called when the profile form is displayed and should be used for further processing.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.profileName | string | The technical name of the access profile. |
| options.accessProfile | object | The access profile object. |
| options.config | object | The current schema form configuration. |
| options.accessProfileData | object | The profile attributes used in the form. |

**Example**


```js
// For example trigger a notification if a value for the name in language 2 is not set for an existing profile
if (options.accessProfileData.hasOwnProperty('profileName')) {
   if (options.accessProfileData.name_2 == "") {
      const otrisNotifications = require("otris.notifications");
      const currentUser = context.currentUser;
      let notification = new otrisNotifications.Notification("The profile " + options.profileName + " has no value for name in language 2!", "Warning");
      notification.setStyle({
         icon: "mdi:mdi-alert-outline;color:white",
         iconBackground: "orange",
         background: "ea6a21",
         color: "white",
         lightness: .5
      });
      notification.setDeleteOnload(true);
      notification.publish(currentUser);
   }
}
// For example show the values of the new fields (see callbacks afterGetProfileSchema and afterSaveAccessProfile)
const ap = options.accessProfile;
options.accessProfileData.myfield1 = ap.getAttribute("$myAccessProfileProperty1");
options.accessProfileData.myfield2 = ap.getAttribute("$myAccessProfileProperty2");
```

// For example trigger a notification if a value for the name in language 2 is not set for an existing profile
if (options.accessProfileData.hasOwnProperty('profileName')) {
   if (options.accessProfileData.name_2 == "") {
      const otrisNotifications = require("otris.notifications");
      const currentUser = context.currentUser;
      let notification = new otrisNotifications.Notification("The profile " + options.profileName + " has no value for name in language 2!", "Warning");
      notification.setStyle({
         icon: "mdi:mdi-alert-outline;color:white",
         iconBackground: "orange",
         background: "ea6a21",
         color: "white",
         lightness: .5
      });
      notification.setDeleteOnload(true);
      notification.publish(currentUser);
   }
}
// For example show the values of the new fields (see callbacks afterGetProfileSchema and afterSaveAccessProfile)
const ap = options.accessProfile;
options.accessProfileData.myfield1 = ap.getAttribute("$myAccessProfileProperty1");
options.accessProfileData.myfield2 = ap.getAttribute("$myAccessProfileProperty2");


### otrUserManagement~beforeSaveAccessProfile(options)

This is called before an existing profile is saved via the "Save" action and should be used for further processing.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.doCreate | boolean | true/false |
| options.profileName | string | The technical name of the profile. |
| options.accessProfileData | object | The current data to be stored. |
| options.accessProfile | object | The access profile object. |
| options.gadgetParams | object | The gadget params for the form. |
| options.message | object | A message for display. |

**Example**


```js
// For example create a message if name1/2 is not set for an existing profile, cancel saving
if (options.accessProfileData.name_2 == "") {
   options.doSave = false;
   options.message.title = context.getLocaleValue("de:Hinweis;en:Note");
   options.message.message = context.getLocaleValue("de:Geben Sie einen Namen für Sprache 2 an.;en:Specify a name for language 2.");
}
```

// For example create a message if name1/2 is not set for an existing profile, cancel saving
if (options.accessProfileData.name_2 == "") {
   options.doSave = false;
   options.message.title = context.getLocaleValue("de:Hinweis;en:Note");
   options.message.message = context.getLocaleValue("de:Geben Sie einen Namen für Sprache 2 an.;en:Specify a name for language 2.");
}


### otrUserManagement~afterSaveAccessProfile(options)

This is called after the profile is saved via the "Save" action and should be used for further processing.

**Kind**: inner method of otrUserManagement

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.created | boolean | true/false |
| options.profileName | string | The technical name of the profile. |
| options.config | object | The current schema form configuration. |
| options.accessProfileData | object | The current data to be stored. |
| options.accessProfile | object | The access profile object. |
| options.gadgetParams | object | The gadget params for the form. |
| options.defaultAttributes | object | Defaults for the profile. |

**Example**


```js
// For example save the new fields (see callback example afterGetProfileSchema and afterGetProfileData)
const ap = options.accessProfile;
const data = options.accessProfileData;
ap.setAttribute("$myAccessProfileProperty1", data.myfield1);
ap.setAttribute("$myAccessProfileProperty2", data.myfield2);
```

// For example save the new fields (see callback example afterGetProfileSchema and afterGetProfileData)
const ap = options.accessProfile;
const data = options.accessProfileData;
ap.setAttribute("$myAccessProfileProperty1", data.myfield1);
ap.setAttribute("$myAccessProfileProperty2", data.myfield2);