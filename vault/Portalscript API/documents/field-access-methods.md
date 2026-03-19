---
title: "Field Access Methods | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/field-access-methods.html"
---

# Field Access Methods

The [[Portalscript API/interfaces/DocFile]] class offers the following ways to access the field values:

- DocFile.fieldName Each field of a DocFile is mapped to an according property. You can access the field value with the technical name.
- DocFile.getFieldValue(fieldName)
DocFile.setFieldValue(fieldName, value)
- DocFile.getAutoText(autoText)
whereby the autoText represents the desired field name. The output is performed in the locale of the current user.
- DocFile.getFieldAttribute(fieldName, attrName)
DocFile.setFieldAttribute(fieldName, attrName, value)
These methods are not recommended because of missing validations.

It is worth to mention that [[Portalscript API/interfaces/DocFile#fieldname|DocFile.fieldName]] and
[[Portalscript API/interfaces/DocFile#setfieldvalue|DocFile.setFieldValue(fieldName, value)]] for an active file need
[[Portalscript API/interfaces/DocFile#sync|DocFile.sync(checkHistoryFields)]] to synchronize the changes of the [[Portalscript API/interfaces/DocFile]] object back to the real file.
For an archive file you must call DocFile.startEdit() before setting the field values and afterwards use DocFile.commit() to commit the changes.

The table below gives an overview about data types of the return values and shows how to set field values by means of examples,
whereby the following settings are assumed:

- The locale of the current user: 'en'
- Technical date format: DD.MM.YYYY
- Date format for locale 'en': MM/DD/YYYY
- Technical decimal point: ,
- Decimal point for locale 'en': .
- Format for filing plan: {%R%}.{%D2%}
- Example enumeration values for enumeration field and double select list field:
No2; de:Zwei; en:Two
No3; de:Drei; en:Three
- Example enumeration value for reference field:
ftEmployee: Login
%LastName%, %FirstName%


| Field type | Access methods | JavaScript type of return value / input parameter for field value | Example of return value | Example of setting field value |
| --- | --- | --- | --- | --- |
| String, E-Mail, Text Fixed Font, Text, URL, HTML | DocFile.fieldName | String | "Hello" | file.stringField = "Hello"; file.sync(); |
|  | DocFile.getFieldValue() DocFile.setFieldValue() | String | "Hello" | file.setFieldValue("stringField", "Hello"); file.sync(); |
|  | DocFile.getAutoText() | String | "Hello" |  |
|  | DocFile.getFieldAttribute() DocFile.setFieldAttribute() | String | "Hello" | file.setFieldAttribute("stringField", "Value", "Hello"); |
| Checkbox, Bool | DocFile.fieldName | Boolean | true / false | file.boolField = false; file.sync(); |
|  | DocFile.getFieldValue() DocFile.setFieldValue() | Boolean | true / false | file.setFieldValue("boolField", false); file.sync(); |
|  | DocFile.getAutoText() | String | "1" / "0" |  |
|  | DocFile.getFieldAttribute() DocFile.setFieldAttribute() | String | "1" / "0" | file.setFieldAttribute("boolField", "Value", "0"); |
| Date | DocFile.fieldName | Date | a Date object / null if empty | file.dateField = new Date(2013, 6, 22); file.sync(); |
|  | DocFile.getFieldValue() DocFile.setFieldValue() | Date | a Date object / null if empty | file.setFieldValue("dateField", new Date(2013, 6, 22)); file.sync(); |
|  | DocFile.getAutoText() | String | "07/22/2013" |  |
|  | DocFile.getFieldAttribute() DocFile.setFieldAttribute() | String | "22.07.2013" | file.setFieldAttribute("dateField", "Value", "22.07.2013"); |
| Timestamp | DocFile.fieldName | Date | a Date object / null if empty | file.tsField = new Date(2013, 6, 22, 13, 30); file.sync() |
|  | DocFile.getFieldValue() DocFile.setFieldValue() | Date | a Date object / null if empty | file.setFieldValue("tsField", new Date(2013, 6, 22, 13, 30)); file.sync(); |
|  | DocFile.getAutoText() | String | "07/22/2013 13:30" |  |
|  | DocFile.getFieldAttribute() DocFile.setFieldAttribute() | String | "22.07.2013 13:30" | file.setFieldAttribute("tsField", "Value", "22.07.2013 13:30"); |
| Enumeration | DocFile.fieldName | String | "No3" (from the enumeration value: No3; de:Drei; en:Three) | file.enumField = "No3"; file.sync(); |
|  | DocFile.getFieldValue() DocFile.setFieldValue() | String | "No3" | file.setFieldValue("enumField", "No3"); file.sync(); |
|  | DocFile.getAutoText() | String | "Three" |  |
|  | DocFile.getFieldAttribute() DocFile.setFieldAttribute() | String | "No3" | file.setFieldAttribute("enumField", "Value", "No3"); |
| Numeric | DocFile.fieldName | Number | 22.33 | file.numField = 22.33; file.sync(); |
|  | DocFile.getFieldValue() DocFile.setFieldValue() | Number | 22.33 | file.setFieldValue("numField", 22.33); file.sync(); |
|  | DocFile.getAutoText() | String | "22.33" |  |
|  | DocFile.getFieldAttribute() DocFile.setFieldAttribute() | String | "22,33" | file.setFieldAttribute("numField", "Value", "22,33"); |
| Reference | DocFile.fieldName | String | "schreiber\nSchreiber, Willi" (see 'Example enumeration value for reference field' above) | file.refField = "schreiber\nSchreiber, Willi"; file.sync(); |
|  | DocFile.getFieldValue() DocFile.setFieldValue() | String | "schreiber\nSchreiber, Willi" | file.setFieldValue("refField", "schreiber\nSchreiber, Willi"); file.sync(); |
|  | DocFile.getAutoText() | String | "Schreiber, Willi" |  |
|  | DocFile.getFieldAttribute() DocFile.setFieldAttribute() | String | "schreiber\nSchreiber, Willi" | file.setFieldAttribute("refField", "Value", "schreiber\nSchreiber, Willi"); |
| History | DocFile.fieldName | String | "23.07.2013 13:03 schreiber: Received" | file.historyField = "Received"; file.sync(true); |
|  | DocFile.getFieldValue() DocFile.setFieldValue() | String | "23.07.2013 13:03 schreiber: Received" | file.setFieldValue("historyField", "Received"); file.sync(true); |
|  | DocFile.getAutoText() | String | "23.07.2013 13:03 schreiber: Received" |  |
|  | DocFile.getFieldAttribute() DocFile.setFieldAttribute() | String | "23.07.2013 13:03 schreiber: Received" | file.setFieldAttribute("historyField", "Value", "Received"); |
| Double select list | DocFile.fieldName | String | "No2\r\nNo3" (from the enumeration values: No2; de:Zwei; en:Two No3; de:Drei; en:Three) | file.dsListField = "No2\r\nNo3"; file.sync(); |
|  | DocFile.getFieldValue() DocFile.setFieldValue() | String | "No2\r\nNo3" // or (Array as returnType) ["No2", "No3"] | file.setFieldValue("dsListField", "No2\r\nNo3"); // or (value passed as an Array) file.setFieldValue("dsListField", ["No2", "No3"]); file.sync(); |
|  | DocFile.getAutoText() | String | "Two\r\nThree" |  |
|  | DocFile.getFieldAttribute() DocFile.setFieldAttribute() | String | "No2\r\nNo3" | file.setFieldAttribute("dsListField", "Value", "No2\r\nNo3"); |
| Filing plan | DocFile.fieldName | String | "II.01" | file.fpField = "II.01"; file.sync(); |
|  | DocFile.getFieldValue() DocFile.setFieldValue() | String | "II.01" | file.setFieldValue("fpField", "II.01"); file.sync(); |
|  | DocFile.getAutoText() | String | "II.01" |  |
|  | DocFile.getFieldAttribute() DocFile.setFieldAttribute() | String | "002001" | file.setFieldAttribute("fpField", "Value", "002001"); |