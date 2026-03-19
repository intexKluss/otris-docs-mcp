---
title: "Enum Cache | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/enum-cache.html"
---

# The Property Cache and enumval

**Since:** DOCUMENTS 5.0 HF1 (Caching at the FIELD)

At fields of the datatype enumeration, it is possible to define the enum values
by execution of an enumeration script (`runscript:scriptName`).

This enumeration script has to be executed every time if the field is displayed.
You can decrease the amount of executions by using a caching mechanism at the field.
You can define the property `ScriptEnumCache={Principal|SystemUser}[.propname]`
at an enumeration field to activate the cache.

**Example:**


```
Filetype-Name: Order
Field-Name: Country
Type: Enumeration
Enumeration values: runscript:getcountries
Property: ScriptEnumCache=Principal

getcountries:
enumval.push("de; de:Deutschland; en:Germany");
enumval.push("de; de:Frankreich; en:France");
enumval.push("us; USA");
return;
```

At the first access on the field `Country` the DocumentsServer checks if at `propCache` the
property `enumcache.Order.Country` is defined. If not, then the Script `getcountries` will be
executed and the enumval will automatically be stored in `propCache`. At the next access on a
field `Country` the enumval will be taken from the cache instead of executing the script. To
invalidate the cache you have to remove the property `enumcache.Order.Country` from `propCache`.

- ScriptEnumCache=Principal: Usage of propCache for a principal-wide cache (for all users)
- ScriptEnumCache=SystemUser: Usage of SystemUser.propCache for a user specific cache
- ScriptEnumCache=Principal.myPropName: Usage of propCache.myPropName instead of propCache.enumcache.FileType.Field as property name

**Since:** DOCUMENTS 5.0c HF2 (Caching at the PORTALSCRIPT itself)

Until DOCUMENTS 5.0c HF2 it was only possible to cache the enum values at the single field.
If you use the same enumeration script at several fields, the enum values will
be cached multiple times.
Now it is also possible to cache the enum values at the PortalScript itself.
You have to define one of the following properties at the PortalScript to activate the cache:

1. ScriptEnumCache=PortalScript: Enum values will be directly stored at the script. You can clear the cache with context.clearEnumvalCache(String scriptName)
2. ScriptEnumCache=Principal: Enum values will be stored in global propCache object as property enumcache.{scriptName}
3. ScriptEnumCache=SystemUser: Enum values will be stored in SystemUser.propCache object as property enumcache.{scriptName}
4. ScriptEnumCache=Principal.fieldName: Enum values will be stored in global propCache object as property enumcache.{scriptName}.{fieldName} with the fieldName = context.fieldName
5. ScriptEnumCache=SystemUser.fieldName: Enum values will be stored in SystemUser.propCache object as property enumcache.{scriptName}.{fieldName} with the fieldName = context.fieldName

- 2.-4.: To invalidate the cache you have to remove the property PropertyCache.removeProperty(String name) from the global propCache or SystemUser.propCache