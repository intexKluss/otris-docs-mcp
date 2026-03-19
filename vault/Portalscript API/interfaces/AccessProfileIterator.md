---
title: "AccessProfileIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/AccessProfileIterator.html"
---

# Interface AccessProfileIterator

**This class gives access to the DOCUMENTS access profiles**

The objects of this class represent lists of [[Portalscript API/classes/AccessProfile]] objects and allow to loop through such a list of profiles. The following methods return an AccessProfileIterator:

- Context.getAccessProfiles
- SystemUser.getAccessProfiles


#### Since

ELC 3.50b / otrisPORTAL 5.0b


#### Example


```ts
// take a certain Systemuser object (stored in user) and assign all availabe
// accessprofiles to this user
var itRoles = context.getAccessProfiles();
if (itRoles && itRoles.size() > 0)
{
   for (var ap = itRoles.first(); ap; ap = itRoles.next())
   {
      user.addToAccessProfile(ap); // add user to profile
   }
}
```


`interface AccessProfileIterator { "[iterator]"(): IterableIterator<AccessProfile>; first(): AccessProfile; getLastError(): string; next(): AccessProfile; size(): number; }`


## Index


### Methods

- [iterator]
- first
- getLastError
- next
- size


## Methods


### [iterator]

`"[iterator]"(): IterableIterator<AccessProfile>`

**Returns:** IterableIterator<AccessProfile>


### first

`first(): AccessProfile`

Retrieve the first AccessProfile object in the AccessProfileIterator.

**Returns:** AccessProfile

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** ELC 3.50b / otrisPORTAL 5.0b

**See:** DocFile.getLastError


### next

`next(): AccessProfile`

Retrieve the next AccessProfile object in the AccessProfileIterator.

**Returns:** AccessProfile

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### size

`size(): number`

Get the amount of AccessProfile objects in the AccessProfileIterator.

**Returns:** number

**Since:** ELC 3.50b / otrisPORTAL 5.0b