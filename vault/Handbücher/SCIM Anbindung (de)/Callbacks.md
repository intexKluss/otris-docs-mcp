---
title: "Callback-Dokumentation"
source: "https://otris.software/documents/manuals/books/otrscim-doc-de/callbacks.html"
---

# Callback-Dokumentation


In order to provide callbacks, a callback script must be created that conforms to the following naming convention: `<name>_Callback_<name>`, e.g.: otrSCIM_Callback_relations. The required callback functions are then provided in the script.
Please note that for changed callbacks the script cache must be cleared and for new callbacks all caches must be cleared.

**Example**


```js
// The correct callback version must be used
module.exports.version = 2;
// Define a module name
module.exports.moduleName = "relations";
// Provide the callbacks for otrSCIM
module.exports.otrSCIM = {
   // Define the callbacks, e.g.:
   afterHandlePostUsersRequest: function(options) {
      util.out("Options for afterHandlePostUsersRequest: " + JSON.stringify(options));
      // your own code for this callback
      // ...
   },
   afterHandlePostGroupsRequest: function (options) {
      util.out("Options for afterHandlePostGroupsRequest: " + JSON.stringify(options));
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
// Provide the callbacks for otrSCIM
module.exports.otrSCIM = {
   // Define the callbacks, e.g.:
   afterHandlePostUsersRequest: function(options) {
      util.out("Options for afterHandlePostUsersRequest: " + JSON.stringify(options));
      // your own code for this callback
      // ...
   },
   afterHandlePostGroupsRequest: function (options) {
      util.out("Options for afterHandlePostGroupsRequest: " + JSON.stringify(options));
      // your own code for this callback
      // ...
   },
   // other callback
   // ...
};- otrSCIM
~afterHandlePostUsersRequest(options)
~afterHandlePatchUsersRequest(options)
~afterHandleDeleteUsersRequest(options)
~afterHandlePostGroupsRequest(options)
~afterHandlePatchGroupsRequest(options)
~afterHandleDeleteGroupsRequest(options)


### otrSCIM~afterHandlePostUsersRequest(options)

This is called after a new user is created by the IDP and should be used to manipulate the user

**Kind**: inner method of otrSCIM

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.requestObject | object | The requested object from IDP. |
| options.returnObject | object | The returned object from Documents. |
| options.systemUser | object | The Documents system user object. |

**Example**


```js
// For example set a system user property for creation date
const su = options.systemUser;
su.setAttribute("$SCIM_createDate", context.getAutoText("currentTimestamp"));
// For example add the new user to a default access profile
const ap = context.findAccessProfile("alldocumentsusers");
su.addToAccessProfile(ap);
```

// For example set a system user property for creation date
const su = options.systemUser;
su.setAttribute("$SCIM_createDate", context.getAutoText("currentTimestamp"));
// For example add the new user to a default access profile
const ap = context.findAccessProfile("alldocumentsusers");
su.addToAccessProfile(ap);


### otrSCIM~afterHandlePatchUsersRequest(options)

This is called after an existing user is updated by the IDP and should be used to manipulate the user

**Kind**: inner method of otrSCIM

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.requestObject | object | The requested object from IDP. |
| options.returnObject | object | The returned object from Documents. |
| options.systemUser | object | The Documents system user object. |

**Example**


```js
// For example set a system user property for update date
const su = options.systemUser;
su.setAttribute("$SCIM_lastUpdateDate", context.getAutoText("currentTimestamp"));
```

// For example set a system user property for update date
const su = options.systemUser;
su.setAttribute("$SCIM_lastUpdateDate", context.getAutoText("currentTimestamp"));


### otrSCIM~afterHandleDeleteUsersRequest(options)

This is called after an user is deleted by the IDP and should be used for further actions

**Kind**: inner method of otrSCIM

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.requestObject | object | The requested object from IDP. |
| options.returnObject | object | The returned object from Documents. |
| options.systemUser | object | The Documents system user object. |

**Example**


```js
// For example log the deletion of an user
util.out("The user " + options.systemUser.login + " was deleted by the IDP via SCIM at " + context.getAutoText("currentTimestamp"));
```

// For example log the deletion of an user
util.out("The user " + options.systemUser.login + " was deleted by the IDP via SCIM at " + context.getAutoText("currentTimestamp"));


### otrSCIM~afterHandlePostGroupsRequest(options)

This is called after a new access profie is created by the IDP and should be used to manipulate the profile

**Kind**: inner method of otrSCIM

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.requestObject | object | The requested object from IDP. |
| options.returnObject | object | The returned object from Documents. |
| options.accessProfile | object | The Documents access profile object. |

**Example**


```js
// For example set a access profile property for creation date
const ap = options.accessProfile;
ap.setAttribute("$SCIM_createDate", context.getAutoText("currentTimestamp"));
// For example add the crmadmin-user to the access profile when IDP-group is the admin group
if (options.accessProfile.name == "adminGroup") {
   const crmadmin = context.findSystemUser("crmadmin");
   crmadmin.addToAccessProfile(ap)
}
```

// For example set a access profile property for creation date
const ap = options.accessProfile;
ap.setAttribute("$SCIM_createDate", context.getAutoText("currentTimestamp"));
// For example add the crmadmin-user to the access profile when IDP-group is the admin group
if (options.accessProfile.name == "adminGroup") {
   const crmadmin = context.findSystemUser("crmadmin");
   crmadmin.addToAccessProfile(ap)
}


### otrSCIM~afterHandlePatchGroupsRequest(options)

This is called after an existing access prile is updated by the IDP and should be used to manipulate the profile

**Kind**: inner method of otrSCIM

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.requestObject | object | The requested object from IDP. |
| options.returnObject | object | The returned object from Documents. |
| options.accessProfile | object | The Documents access profile object. |

**Example**


```js
// For example set a access profile property for update date
const ap = options.accessProfile;
ap.setAttribute("$SCIM_lastUpdateDate", context.getAutoText("currentTimestamp"));
```

// For example set a access profile property for update date
const ap = options.accessProfile;
ap.setAttribute("$SCIM_lastUpdateDate", context.getAutoText("currentTimestamp"));


### otrSCIM~afterHandleDeleteGroupsRequest(options)

This is called after an access profile is deleted by the IDP and should be used for further actions

**Kind**: inner method of otrSCIM

| Param | Type | Description |
| --- | --- | --- |
| options | object | The options. |
| options.requestObject | object | The requested object from IDP. |
| options.returnObject | object | The returned object from Documents. |
| options.accessProfile | object | The Documents access profile object. |

**Example**


```js
// For example log the deletion of an access profile
util.out("The access profile " + options.accessProfile.name + " was deleted by the IDP via SCIM at " + context.getAutoText("currentTimestamp"));
```

// For example log the deletion of an access profile
util.out("The access profile " + options.accessProfile.name + " was deleted by the IDP via SCIM at " + context.getAutoText("currentTimestamp"));[PDF Version](callbacks.pdf?b=2026-02-10)