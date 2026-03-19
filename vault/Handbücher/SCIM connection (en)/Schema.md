---
title: "Schema"
source: "https://otris.software/documents/manuals/books/otrscim-doc-en/schema.html"
---

# Schema

Documents uses three schemas for SCIM implementation, two of which are based on the standard schemas
`urn:ietf:params:scim:schemas:core:2.0:User` and `urn:ietf:params:scim:schemas:core:2.0:Group`, and one
is an extension of the user schema for access rights. The schema definitions can be retrieved via the
schema endpoint. In addition, this documentation explains the mapping to the various Documents attributes.


## User import


```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:otris:2.0:User",
    "urn:ietf:params:scim:schemas:extension:otris:access:2.0:User"
  ],
  "meta": {
    "resourceType": "User"
  },
  "externalId": "b.allen",
  "userName": "b.allen@starlabs.com",
  "active": true,
  "emails": [
    {
      "type": "work",
      "value": "b.allen@starlabs.com"
    }
  ],
  "name": {
    "familyName": "Allen",
    "givenName": "Bartholomew Henry",
    "honorificPrefix": "Mr."
  },
  "phoneNumbers": [
    {
      "type": "work",
      "value": "740 592-3325"
    }
  ],
  "addresses": [
    {
      "streetAddress": "701 E State St.",
      "locality": "Athens, OH",
      "postalCode": "45701",
      "type": "other"
    }
  ],
  "groups": [
    {
      "value": "DOPaK-2023"
    }
  ],
  "title": "Forensic scientist",
  "password": "initialPassword",
  "urn:ietf:params:scim:schemas:extension:otris:access:2.0:User": {
    "documentsAccess": true,
    "archiveAccess": true,
    "licence": "shared",
    "status": "released"
  }
}
```

{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:otris:2.0:User",
    "urn:ietf:params:scim:schemas:extension:otris:access:2.0:User"
  ],
  "meta": {
    "resourceType": "User"
  },
  "externalId": "b.allen",
  "userName": "b.allen@starlabs.com",
  "active": true,
  "emails": [
    {
      "type": "work",
      "value": "b.allen@starlabs.com"
    }
  ],
  "name": {
    "familyName": "Allen",
    "givenName": "Bartholomew Henry",
    "honorificPrefix": "Mr."
  },
  "phoneNumbers": [
    {
      "type": "work",
      "value": "740 592-3325"
    }
  ],
  "addresses": [
    {
      "streetAddress": "701 E State St.",
      "locality": "Athens, OH",
      "postalCode": "45701",
      "type": "other"
    }
  ],
  "groups": [
    {
      "value": "DOPaK-2023"
    }
  ],
  "title": "Forensic scientist",
  "password": "initialPassword",
  "urn:ietf:params:scim:schemas:extension:otris:access:2.0:User": {
    "documentsAccess": true,
    "archiveAccess": true,
    "licence": "shared",
    "status": "released"
  }
}
### Documents User

The Documents User Schema is based on the standard user schema from RFC 7643. It only contains entries that are also used in the
standard schema, but does not fully support it.

| SCIM Key | Type (for complex attributes) | Type | Documents Attribute | Comment |
| --- | --- | --- | --- | --- |
| userName |  | String | Login |  |
| active |  | boolean | Status | If true is set as status released, if false is set as status blocked. For further options, see Documents User Access Extension. |
| name.givenName |  | String | First name |  |
| name.familyName |  | String | Last name |  |
| name.honorificPrefix |  | String | Salutation | Only the options that are already available in the manager are available. |
| emails.value | work | String | eMail (General) |  |
| emails.value | home | String | eMail (Private information) |  |
| emails.value | other | String | eMail (Additional address) |  |
| phoneNumbers.value | work | String | Telephone (General) |  |
| phoneNumbers.value | home | String | Telephone (Private information) |  |
| phoneNumbers.value | other | String | Telephone (Additional address) |  |
| addresses.streetAddress | home | String | Street (Private information) |  |
| addresses.locality | home | String | City (Private information) |  |
| addresses.postalCode | home | String | Postal code (Private information) |  |
| addresses.streetAddress | other | String | Street (Additional address) |  |
| addresses.locality | other | String | City (Additions address) |  |
| addresses.postalCode | other | String | Postal code (Additional address) |  |
| groups.value |  | String | Access profile | The profile name is required to assign the access profile. |
| title |  | String | Position |  |
| password |  | String | Password | An initial password is recommended, as this is transmitted in plain text and should be changed immediately. |


### Documents User Access Extension

The schema is an extension of the user schema and therefore cannot be used on its own.

| SCIM Key | Type | Documents Attribute | Comment |
| --- | --- | --- | --- |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User.documentsAccess | boolean | Documents access |  |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User.archiveAccess | boolean | Archive access |  |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User.licence | String | License type | Possible values: named, shared, concurrent_standard, concurrent_open |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User.status | String | Status | Possible values: inherited, released, registered, blocked, removable. If the active attribute is set to true, only inherited, released, and registered are accepted; if the active attribute is set to false, only blocked and removable are accepted. |


## Access profile import


```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:otris:2.0:Group"
  ],
  "displayName": "Azure User Import",
  "members": [
    {
      "value": "e796c56a0d637c686c85b15f41b307b74231a2aa"
    },
  ],
  "meta": {
    "resourceType": "Group"
  }
}
```

{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:otris:2.0:Group"
  ],
  "displayName": "Azure User Import",
  "members": [
    {
      "value": "e796c56a0d637c686c85b15f41b307b74231a2aa"
    },
  ],
  "meta": {
    "resourceType": "Group"
  }
}
### Documents Access Profile

The Documents Access Profile schema is based on the standard group schema from RFC 7643. It only contains entries
that are also used in the standard schema, but does not fully support it.

| SCIM Key | Type | Documents Attribute | Comment |
| --- | --- | --- | --- |
| displayName | String | Profile name |  |
| members.value | String | User accounts | The SCIM_ID is required. This is created when the user is created and transmitted to the external identity provider. |

[PDF Version](schema.pdf?b=2026-02-10)