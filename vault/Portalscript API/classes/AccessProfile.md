---
title: "AccessProfile | Portalscript API"
source: "https://otris.software/documents/api/portalscript/classes/AccessProfile.html"
---

# Class AccessProfile

The AccessProfile class has been added to the DOCUMENTS PortalScripting
API to gain full access to the DOCUMENTS access profiles by scripting means.

A [[Portalscript API/interfaces/SystemUser]] can be assigned to an AccessProfile. At the filetype it is
possible to define several rights depending on the AccessProfile. You can
get an AccessProfile object by different methods like
[[Portalscript API/interfaces/Context#findaccessprofile|Context.findAccessProfile]] or from the [[Portalscript API/interfaces/AccessProfileIterator]].


## Index


### Properties

- name
- propCache


### Methods

- addCustomProperty
- getAttribute
- getCustomProperties
- getLastError
- getOID
- getParentProfile
- getSubProfiles
- getSystemUsers
- setAttribute
- setOrAddCustomProperty
- setParentProfile


### Constructors

- constructor


## Properties


### name

`name: string`

The technical name of the AccessProfile.

**Since:** ELC 3.50b / otrisPORTAL 5.0b


```ts
var su = context.getSystemUser(); // current user
if (su)
{
   var apIter = su.getAccessProfiles();
   for (var ap = apIter.first(); ap; ap = apIter.next())
   {
      util.out(ap.name);
   }
}
```


### propCache

`propCache: PropertyCache`

Access to the property cache of the AccessProfile.

**Since:** DOCUMENTS 5.0

**See:** PropertyCache SystemUser.propCache


```ts
var ap = context.findAccessProfile("Everybody");
if (!ap.propCache.hasProperty("Contacts"))
{
   util.out("Creating cache");
   ap.propCache.Contacts = ["Peter", "Paul", "Marry"];
}
```


## Methods


### addCustomProperty

`addCustomProperty(name: string, type: string, value: string): CustomProperty`

Creates a new CustomProperty for the AccessProfile.

**Parameters:**

- `name`: `string` — String value defining the name
- `type`: `string` — String value defining the type
- `value`: `string` — String value defining the value

**Returns:** CustomProperty

**Since:** DOCUMENTS 5.0

**See:** AccessProfile.setOrAddCustomProperty AccessProfile.getCustomProperties


```ts
var office = context.findAccessProfile("office");
if (!office) throw "office is null";
var custProp = office.addCustomProperty("favorites", "string", "peachit");
if (!custProp)
  util.out(office.getLastError());
```


### getAttribute

`getAttribute(attribute: string): string`

Get the String value of an attribute of the AccessProfile.

Note: This function is only for experts. Knowledge about the ELC-database schema is necessary!

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute

**Returns:** string

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### getCustomProperties

`getCustomProperties( nameFilter?: string, typeFilter?: string, ): CustomPropertyIterator`

Get a CustomPropertyIterator with custom properties of the current AccessProfile.

**Parameters:**

- `nameFilter`: `string` — String value defining an optional filter depending on the name
- `typeFilter`: `string` — String value defining an optional filter depending on the type

**Returns:** CustomPropertyIterator

**Since:** DOCUMENTS 5.0

**See:** context.findCustomProperties AccessProfile.setOrAddCustomProperty AccessProfile.addCustomProperty


```ts
var office = context.findAccessProfile("office");
if (!office) throw "office is null";
var itProp = office.getCustomProperties();
for (var prop = itProp.first(); prop; prop = itProp.next())
{
   util.out(prop.name + ": " + prop.value);
}
```


### getLastError

`getLastError(shortMessage?: boolean): string`

If you call a method at an AccessProfile object and an error occurred, you can get the error description with this function.

Since: DOCUMENTS 5.0g (new parameter shortMessage)

**Parameters:**

- `shortMessage`: `boolean` — optional, removes "Error in function: class.method(): " from the message. Default: false

**Returns:** string

**Since:** ELC 3.50b / otrisPORTAL 5.0b

**See:** DocFile.getLastError


### getOID

`getOID(oidLow?: boolean): string`

Returns the object-id.

Since: DOCUMENTS 5.0 (new parameter oidLow)

**Parameters:**

- `oidLow`: `boolean` — Optional flag: If true only the id of the AccessProfile object (m_oid) will be returned. If false the id of the AccessProfile object will be returned together with the id of the corresponding class in the form class-id:m_oid. Default: false

**Returns:** string

**Since:** ELC 3.60c / otrisPORTAL 6.0c


### getParentProfile

`getParentProfile(): AccessProfile`

Get the parent profile of the current profile.

**Returns:** AccessProfile

**Since:** DOCUMENTS 5.0g


```ts
var parentProfile = context.createAccessProfile("parentProfile");
if (parentProfile)
{
  var subProfile = context.createAccessProfile("subProfile");
  if (subProfile)
  {
      var success = subProfile.setParentProfile(parentProfile);
      if (!success)
          util.out(subProfile.getLastError());
      var parentAP = subProfile.getParentProfile();
      if (!parentAP)
          throw "The method getParentProfile() does not work.";
  }
}
```


### getSubProfiles

`getSubProfiles(): AccessProfileIterator`

Get an iterator with all sub-profiles of the current profile.

**Returns:** AccessProfileIterator

**Since:** DOCUMENTS 5.0g


```ts
var parentProfile = context.createAccessProfile("parentProfile");
if (parentProfile)
{
  var subProfile = context.createAccessProfile("subProfile");
  if (subProfile)
  {
      var success = subProfile.setParentProfile(parentProfile);
      if (!success)
          util.out(subProfile.getLastError());
      var apIt = parentProfile.getSubProfiles();
      for (var ap = apIt.first(); ap; ap = apIt.next())
      {
          util.out(ap.name);
      }
  }
}
```


### getSystemUsers

`getSystemUsers( includeLockedUsers?: boolean, includeInvisibleUsers?: boolean, includeSubProfiles?: boolean, ): SystemUserIterator`

Retrieve a list of desired SystemUser which are assigned to the current AccessProfile.

Since: DOCUMENTS 5.0c HF2 (new parameters includeLockedUsers and includeInvisibleUsers) Since: DOCUMENTS 5.0g (new parameters includeSubProfiles)

**Parameters:**

- `includeLockedUsers`: `boolean` — Optional flag indicating whether locked users also should be returned. Default: true
- `includeInvisibleUsers`: `boolean` — Optional flag indicating whether the method also should return users for which the option "Display user in DOCUMENTS lists" in the Documents Manager is not checkmarked. Default: true
- `includeSubProfiles`: `boolean` — Optional flag indicating whether the method also should return users which are assigned to the sub-profiles. Default: false

**Returns:** SystemUserIterator

**Since:** ELC 3.51e / otrisPORTAL 5.1e


```ts
var ap = context.findAccessProfile("supportteam");
if (ap)
{
   var itSU = ap.getSystemUsers();
   for (var su = itSU.first(); su; su = itSU.next())
      util.out(su.login);
}
else
   util.out("AccessProfile does not exist.");
```


### setAttribute

`setAttribute(attribute: string, value: string): boolean`

Set the String value of an attribute of the AccessProfile to the desired value.

Note: This function is only for experts. Knowledge about the ELC-database schema is necessary!

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute
- `value`: `string` — String containing the desired value of the attribute

**Returns:** boolean

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### setOrAddCustomProperty

`setOrAddCustomProperty( name: string, type: string, value: string, ): CustomProperty`

Creates a new CustomProperty or modifies a CustomProperty according the name and type for the AccessProfile.

This method creates or modifies a unique CustomProperty for the AccessProfile. The combination of the name and the type make the CustomProperty unique for the AccessProfile.

**Parameters:**

- `name`: `string` — String value defining the name
- `type`: `string` — String value defining the type
- `value`: `string` — String value defining the value

**Returns:** CustomProperty

**Since:** DOCUMENTS 5.0

**See:** AccessProfile.getCustomProperties AccessProfile.addCustomProperty


```ts
var office = context.findAccessProfile("office");
if (!office) throw "office is null";
var custProp = office.setOrAddCustomProperty("favorites", "string", "peachit");
if (!custProp)
  util.out(office.getLastError());
```


### setParentProfile

`setParentProfile(parentProfile: AccessProfile): boolean`

Set the parent profile of the current profile.

**Parameters:**

- `parentProfile`: `AccessProfile` — optional AccessProfile object being the parent profile of the current profile. If no parent profile is defined, the current profile will be moved to the top level.

**Returns:** boolean

**Since:** DOCUMENTS 5.0d


```ts
var parentProfile = context.createAccessProfile("parentProfile");
if (parentProfile)
{
  var subProfile = context.createAccessProfile("subProfile");
  if (subProfile)
  {
      var success = subProfile.setParentProfile(parentProfile);
      if (!success)
          util.out(subProfile.getLastError());
      // We can move subProfile to the top level as follows:
      success = subProfile.setParentProfile();
  }
}
```


## Constructors


### constructor

`new AccessProfile(nameAccessProfile: string): AccessProfile`

With the new method is it possible to create a new AccessProfile.

If an access profile with the profile name already exist, the method return the existing access profile.

**Parameters:**

- `nameAccessProfile`: `string`

**Returns:** AccessProfile

**Since:** ELC 3.50b / otrisPORTAL 5.0b

**Deprecated:** since ELC 3.60i / otrisPORTAL 6.0i use context.createAccessProfile instead


```ts
var newAP = new AccessProfile("supportteam");
if (!newAP)
   util.out("Creation of AccessProfile failed.");
```