---
title: "Schema"
source: "https://otris.software/documents/manuals/books/otrscim-doc-de/schema.html"
---

# Schema

Documents nutzt für die SCIM Implementierung drei Schemata, wobei zwei an die Standardschemata
`urn:ietf:params:scim:schemas:core:2.0:User` und `urn:ietf:params:scim:schemas:core:2.0:Group` angelehnt sind und eines
eine Erweiterung des User-Schemas für Zugriffsrechte darstellt. Die Schema-Definitionen lassen sich über den
Schema-Endpunkt abrufen, zusätzlich wird in dieser Dokumentation das Mapping auf die verschiedenen Documents Attribute
erläutert.


## Benutzerimport


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

Das Documents User Schema ist angelehnt an das Standarduser Schema aus RFC 7643. Es beinhaltet nur Einträge, welche im
Standardschema ebenfalls verwendet werden, unterstützt dieses aber nicht vollständig.

| SCIM Key | Type (bei komplexen Attributen) | Typ | Documents Attribut | Kommentar |
| --- | --- | --- | --- | --- |
| userName |  | String | Login |  |
| active |  | boolean | Status | Wenn true wird als Status released gesetzt, wenn false wird als Status blocked gesetzt. Für weitere Möglichkeiten siehe Documents User Access Extension |
| name.givenName |  | String | Vorname |  |
| name.familyName |  | String | Nachname |  |
| name.honorificPrefix |  | String | Anrede | Es stehen nur die Auswahlmöglichkeiten, welche bereits im Manager vorhanden sind, zur Verfügung |
| emails.value | work | String | eMail (Generelles) |  |
| emails.value | home | String | eMail (private Angaben) |  |
| emails.value | other | String | eMail (weitere Adresse) |  |
| phoneNumbers.value | work | String | Telefon (Generelles) |  |
| phoneNumbers.value | home | String | Telefon (private Angaben) |  |
| phoneNumbers.value | other | String | Telefon (weitere Adresse) |  |
| addresses.streetAddress | home | String | Straße (private Angaben) |  |
| addresses.locality | home | String | Ort (private Angaben) |  |
| addresses.postalCode | home | String | PLZ (private Angaben) |  |
| addresses.streetAddress | other | String | Straße (weitere Angaben) |  |
| addresses.locality | other | String | Ort (weitere Angaben) |  |
| addresses.postalCode | other | String | PLZ (weitere Angaben) |  |
| groups.value |  | String | Zugriffsprofil | Es wird der Profilname benötigt, um das Zugriffsprofil zuzuordnen. |
| title |  | String | Position |  |
| password |  | String | Passwort | Ein initiales Passwort, da dieses im Klartext übertragen wird wird empfohlen dieses sofort zu ändern. |


### Documents User Access Extension

Das Schema stellt eine Erweiterung zum User Schema dar und kann daher nicht alleine verwendet werden.

| SCIM Key | Typ | Documents Attribut | Kommentar |
| --- | --- | --- | --- |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User.documentsAccess | boolean | Documents Zugang |  |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User.archiveAccess | boolean | Archiv Zugang |  |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User.licence | String | Lizenzart | Mögliche Werte: named, shared, concurrent_standard, concurrent_open |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User.status | String | Status | Mögliche Werte: inherited, released, registered, blocked, removable. Wenn das active Attribut auf true gesetzt ist werden nur inherited, released und registered akzeptiert, wenn das active Attribut auf false gesetzt ist werden nur blocked und removable akzeptiert. |


## Zugriffsprofilimport


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

Das Documents Access Profile Schema ist angelehnt an das Standard Group Schema aus RFC 7643. Es beinhaltet nur Einträge,
welche im Standardschema ebenfalls verwendet werden, unterstützt dieses aber nicht vollständig.

| SCIM Key | Typ | Documents Attribut | Kommentar |
| --- | --- | --- | --- |
| displayName | String | Profilname |  |
| members.value | String | Benutzerkonten | Es wird die SCIM_ID benötigt. Diese wird beim anlegen der Benutzer erstellt und an den externen Identity Provider übermittelt. |

[PDF Version](schema.pdf?b=2026-02-10)