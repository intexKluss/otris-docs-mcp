---
title: "CustomProperty | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/CustomProperty.html"
---

# Interface CustomProperty

**The CustomProperty class provides access to the user properties.**

The class CustomProperty provides a container where used specific data can be stored. E.g it will be used to store the last search masks.
You can save project specific data using this class. The scripting classes [[Portalscript API/interfaces/SystemUser]], [[Portalscript API/classes/AccessProfile]] and [[Portalscript API/interfaces/Context]]
have the following access methods available:

- getCustomProperties()
- addCustomProperty()
- setOrAddCustomProperty()


In the DOCUMENTS-Manager you can find the CustomProperty on the relation-tab properties at the fellow and user account, access profiles and file types.
The global custom properties are listed in Documents > Global properties. A global custom property must not belong to a SystemUser, an AccessProfile,
a file type and another custom property. All custom properties are located in Documents > All properties.
**Since:** DOCUMENTS 5.0 available for AccessProfile and Context


#### Since

DOCUMENTS 4.0a


#### See

[[Portalscript API/interfaces/SystemUser#getcustomproperties|SystemUser.getCustomProperties]][[Portalscript API/interfaces/SystemUser#setoraddcustomproperty|SystemUser.setOrAddCustomProperty]][[Portalscript API/interfaces/SystemUser#addcustomproperty|SystemUser.addCustomProperty]]


#### Example


```ts
var user = context.findSystemUser("schreiber");
if (!user)
   throw "invalid user";
// Creation of an unique (name, type) CustomProperty
var custProp = user.setOrAddCustomProperty("superior", "person", "oppen");
if (!custProp)
   throw "unable to create CustomProperty " + user.getLastError();
util.out("New CustomProperty: " + custProp.name);
custProp.deleteCustomProperty();
// Creation of multiple equal (name, type) CustomProperty
for (var i=0; i<5; i++)
{
   var custProp = user.addCustomProperty("favorites", "something", "value_" + i);
}
var name = "favorites";
var type = "";
var it = user.getCustomProperties(name, type);
for (var prop = it.first(); prop; prop = it.next())
{
    if (prop.type == "something")
       prop.deleteCustomProperty();
}
```


`interface CustomProperty { addSubProperty( name: string, type: string, value: string, ): CustomProperty; deleteCustomProperty(includeSubProperties?: boolean): boolean; downloadBlob(filePath?: string): string; getAttribute(attribute: string): string; getLastError(): string; getSubProperties( nameFilter?: string, typeFilter?: string, ): CustomPropertyIterator; name: string; setAccessProfile(nameAccessProfile?: string): boolean; setAttribute(attribute: string, value: string): boolean; setFile(docFile?: DocFile): boolean; setFiletype(nameFiletype?: string): boolean; setOrAddSubProperty( name: string, type: string, value: string, ): CustomProperty; setParentProperty(parentProperty: CustomProperty): boolean; setSystemUser(login?: string): boolean; type: string; uploadBlob(filePath: string): boolean; value: string; }`


## Index


### Properties

- name
- type
- value


### Methods

- addSubProperty
- deleteCustomProperty
- downloadBlob
- getAttribute
- getLastError
- getSubProperties
- setAccessProfile
- setAttribute
- setFile
- setFiletype
- setOrAddSubProperty
- setParentProperty
- setSystemUser
- uploadBlob


## Properties


### name

`name: string`

String containing the name of the CustomProperty.


### type

`type: string`

String containing the type of the CustomProperty.


### value

`value: string`

String containing the value of the CustomProperty.


## Methods


### addSubProperty

`addSubProperty(name: string, type: string, value: string): CustomProperty`

Creates a new subproperty for the custom property.

**Parameters:**

- `name`: `string` — String value defining the name
- `type`: `string` — String value defining the type
- `value`: `string` — String value defining the value

**Returns:** CustomProperty

**Since:** DOCUMENTS 5.0

**See:** CustomProperty.setOrAddSubProperty CustomProperty.getSubProperties


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is `null`";
var custProp = currentUser.setOrAddCustomProperty("superior", "string", "oppen");
if (!custProp)
  util.out(currentUser.getLastError());
else
  custProp.addSubProperty("Address", "string", "Dortmund");
```


### deleteCustomProperty

`deleteCustomProperty(includeSubProperties?: boolean): boolean`

Delete the CustomProperty.

Note: Since DOCUMENTS 6.1.0, the parameter includeSubProperties has been removed, and this method deletes all subproperties recursively by default.

Since: DOCUMENTS 5.0f (new parameter includeSubProperties) Since: DOCUMENTS 6.1.0 (parameter includeSubProperties removed)

**Parameters:**

- `includeSubProperties`: `boolean` — Default: false. Optional boolean indicating whether all subproperties should be also deleted recursively.

**Returns:** boolean

**Since:** DOCUMENTS 4.0a


### downloadBlob

`downloadBlob(filePath?: string): string`

Download a blob from a custom property of type custompropertyblob to the server's filesystem.

Note: This function is only available for a custom property of type custompropertyblob.

**Parameters:**

- `filePath`: `string` — String specifying where the downloaded blob to be stored.

Note: Backslashes contained in the file path must be quoted with a leading backslash, since the backslash is a special char in ECMAScript!

**Returns:** string

**Since:** DOCUMENTS 5.0i HF5

**See:** CustomProperty.uploadBlob


```ts
var it = context.findCustomProperties("name='testProp'");
var custProp = it.first();
if (custProp)
{
    var filePath = custProp.downloadBlob();
    if (filePath == "")
        util.out(custProp.getLastError());
    else
        util.out(filePath);
}
```


### getAttribute

`getAttribute(attribute: string): string`

Get the String value of an attribute of the CustomProperty.

Valid attribute names are name, type and value

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute

**Returns:** string

**Since:** DOCUMENTS 4.0a


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** DOCUMENTS 4.0a


### getSubProperties

`getSubProperties( nameFilter?: string, typeFilter?: string, ): CustomPropertyIterator`

Get a CustomPropertyIterator with subproperties of the custom property.

**Parameters:**

- `nameFilter`: `string` — String value defining an optional filter depending on the name
- `typeFilter`: `string` — String value defining an optional filter depending on the type

**Returns:** CustomPropertyIterator

**Since:** DOCUMENTS 5.0

**See:** CustomProperty.setOrAddSubProperty CustomProperty.addSubProperty


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is NULL";
var itProp = currentUser.getCustomProperties();
for (var prop = itProp.first(); prop; prop = itProp.next())
{
   util.out(prop.name + ": " + prop.value);
   var itSubprop = prop.getSubProperties();
   for (var subprop = itSubprop.first(); subprop; subprop = itSubprop.next())
      {
          util.out("Subproperty name: " + subprop.name + " Value: " + subprop.value);
      }
}
```


### setAccessProfile

`setAccessProfile(nameAccessProfile?: string): boolean`

Connects a custom property to an AccessProfile.

An empty profile name disconnects the AccessProfile

**Parameters:**

- `nameAccessProfile`: `string` — Optional String value containing the name of the AccessProfile

**Returns:** boolean

**Since:** DOCUMENTS 5.0

**See:** CustomProperty.setSystemUser CustomProperty.setFile


```ts
if (!custProp.setAccessProfile("Service"))
   throw custProp.getLastError();
custProp.setAccessProfile("");  // disconnects AccessProfile
```


### setAttribute

`setAttribute(attribute: string, value: string): boolean`

Set the String value of an attribute of the CustomProperty to the desired value.

Valid attribute names are name, type and value

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute
- `value`: `string` — String containing the desired value of the attribute

**Returns:** boolean

**Since:** DOCUMENTS 4.0a


### setFile

`setFile(docFile?: DocFile): boolean`

Connects a custom property to an active DocFile.

**Parameters:**

- `docFile`: `DocFile` — An object of the DocFile class to which the custom property should be connected. If no DocFile is specified, the connection to a DocFile will be disconnected, if applicable.

**Returns:** boolean

**Since:** DOCUMENTS 6.1.0

**See:** CustomProperty.setSystemUser CustomProperty.setAccessProfile


```ts
if (!custProp.setFile(context.file))
   throw custProp.getLastError();
custProp.setFile();  // disconnects file
```


### setFiletype

`setFiletype(nameFiletype?: string): boolean`

Connects a custom property to a filetype.

An empty filetype name disconnects the filetype

**Parameters:**

- `nameFiletype`: `string` — Optional String value containing the technical name of the filetype

**Returns:** boolean

**Since:** DOCUMENTS 5.0

**See:** CustomProperty.setSystemUser CustomProperty.setAccessProfile


```ts
if (!custProp.setFiletype("ftInvoice"))
   throw custProp.getLastError();
custProp.setFiletype("");  // disconnects filetype
```


### setOrAddSubProperty

`setOrAddSubProperty(name: string, type: string, value: string): CustomProperty`

Creates a new subproperty or modifies a subproperty according the name and type for the custom property.

This method creates or modifies a unique subproperty for the custom property. The combination of the name and the type make the subproperty unique for the custom property.

**Parameters:**

- `name`: `string` — String value defining the name
- `type`: `string` — String value defining the type
- `value`: `string` — String value defining the value

**Returns:** CustomProperty

**Since:** DOCUMENTS 5.0

**See:** CustomProperty.getSubProperties CustomProperty.addSubProperty


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is `null`";
var custProp = currentUser.setOrAddCustomProperty("superior", "string", "oppen");
if (!custProp)
  util.out(currentUser.getLastError());
else
  custProp.setOrAddSubProperty("Address", "string", "Dortmund");
```


### setParentProperty

`setParentProperty(parentProperty: CustomProperty): boolean`

Connects a custom property to a parent.

**Parameters:**

- `parentProperty`: `CustomProperty` — optional CustomProperty object being the parent CustomProperty of the current CustomProperty. If no parent CustomProperty is defined, the current CustomProperty will be moved to the top level.

**Returns:** boolean

**Since:** DOCUMENTS 5.0g

**See:** CustomProperty.setOrAddSubProperty CustomProperty.getSubProperties


```ts
var currentUser = context.getSystemUser();
if (!currentUser) throw "currentUser is `null`";
var parentProp = currentUser.setOrAddCustomProperty("music", "string", "Pop");
if (!parentProp)
  throw currentUser.getLastError();
var subProp = currentUser.setOrAddCustomProperty("cd", "string", "AC/DC");
if (!subProp)
  throw currentUser.getLastError();
subProp.setParentProperty(parentProp);
```


### setSystemUser

`setSystemUser(login?: string): boolean`

Connects a custom property to a SystemUser.

An empty login disconnects the SystemUser

**Parameters:**

- `login`: `string` — Optional String value containing the login name of the SystemUser.

**Returns:** boolean

**Since:** DOCUMENTS 5.0

**See:** CustomProperty.setFile CustomProperty.setAccessProfile


```ts
if (!custProp.setSystemUser("schreiber"))
   throw custProp.getLastError();
custProp.setSystemUser("");  // disconnects SystemUser
```


### uploadBlob

`uploadBlob(filePath: string): boolean`

Upload a file stored on the server's filesystem for a custom property of type custompropertyblob.

Note: This function is only available for a custom property of type custompropertyblob. After successful upload of a new blob the old blob on the server is removed!

**Parameters:**

- `filePath`: `string` — The path of the file to be uploaded.

Note: Backslashes contained in the file path must be quoted with a leading backslash, since the backslash is a special char in ECMAScript!

**Returns:** boolean

**Since:** DOCUMENTS 5.0i HF5

**See:** CustomProperty.downloadBlob


```ts
var custProp = context.setOrAddCustomProperty("testProp", "custompropertyblob", "");
var ret = custProp.uploadBlob("c:\\tmp\\test.txt");
if (!ret)
   util.out(custProp.getLastError());
```