---
title: "Datenstruktur des Mappentyps für die KI beeinflussen"
source: "https://otris.software/documents/manuals/books/otr-ai/ai-relevant.html"
---

# Datenstruktur des Mappentyps für die KI beeinflussen

Für die Verarbeitung durch die KI wird eine Mappe in ein JSON-Format umgewandelt, das alle relevanten Feldwerte enthält.
Dieses JSON basiert auf einem JSON-Schema, das aus dem jeweiligen Mappentyp generiert wird.

Im Kapitel [Objekt- und Schemaerzeugung](schema-methods.html) wird gezeigt,
wie per **Skripting** anhand eines Mappentyps das dazugehörige JSON-Schema erzeugt werden kann
und wie andersherum aus einem z.B. KI-generierten JSON-Objekt ein Mappenobjekt instanziiert werden kann.

Im Folgenden werden zuerst die Konfigurationsmöglichkeiten erläutert
und anschließend der Aufbau des [JSON-Schemas](ai-relevant.html#json-schema).


# Konfiguration des JSON-Schemas einer Mappe

Es gibt aktuell drei Properties, mit denen man die Datenstruktur des Mappentyps für die KI beeinflussen kann.
Hierbei wird das Konzept der sogenannten KI-Relevanz verwendet. D. h. man kann pro Mappentyp, pro Feld oder pro Verknüpfungsregister einstellen, wie relevant dieses für die KI ist. Diese Konfiguration hat Einfluss auf das oben beschriebene JSON-Schema, welches für den Mappentyp generiert wird.

Bei einfachen Mappentypen wird hier das Standardverhalten von documentsOS ausreichend sein. Bei komplexeren Mappentypen führt die Verwendung der Properties jedoch zu deutlich besseren Ergebnissen. Zusätzlich ermöglicht die Konfiguration, für die KI nicht relevante Feldinhalte vorab zu filtern und so den Anfragekontext zu minimieren.


## Mappentyp

Am Mappentyp können Standardwerte definiert werden, die festlegen, wie Felder und Register gegenüber der KI behandelt werden. Diese Vorgaben werden nur angewendet, wenn an den einzelnen Elementen (Feld / Register) kein eigener Wert gesetzt ist.


### Standardverhalten für Felder

Am Mappentyp kann das Property `fieldAIRelevantDefaultMode` gesetzt werden. Dieses steuert für den gesamten Mappentyp, wie sich die Felder verhalten sollen und gibt somit den Standardwert für das u.g. `aiRelevant` Property vor. Folgende Werte sind möglich:

- auto (Standardwert, wenn das Property nicht definiert ist)
- true
- false
- readonly
- optional
- required


### Standardverhalten für Register

Das Property `linkRegisterAIRelevantDefaultMode` legt das Standardverhalten für alle Register des Mappentyps fest. Der definierte Wert wird nur dann verwendet, wenn das jeweilige Register selbst keinen eigenen Wert für `ai_Relevant` besitzt. Mögliche Werte sind:

- auto (Standardwert, wenn das Property nicht gesetzt ist)
- true
- false

Dieses Property wird im Admin Center konfiguriert:


![](./assets/ai-relevant-03.png?class=medium)

Abb. 84 - Standardwert für KI-Relevant bei Registern


## Feld

Am Feld kann spezifisch gesteuert werden, in welchen Situationen dieses Feld relevant für die KI ist. Dabei sind die nachfolgend beschriebenen Werte möglich.


![register-ai-relevant-field-settings](./assets/ai-relevant-settings.png?class=small)

Abb. 85 - KI-Relevanz von Feldern

| Wert von $aiRelevant am Feld | Lesbar für AI | Schreibbar für AI | Als Pflichtfeld markiert |
| --- | --- | --- | --- |
| default/nicht definiert | Wert wird von $fieldAIRelevantDefaultMode am Mappentypen bestimmt, falls nicht definiert, siehe 'auto' |
| auto | documentsOS entscheidet zwischen "true", "false" und "readonly" anhand der Feldattribute am Mappentypen |
| true | JA | JA | Wenn Pflichtfeld |
| false | NEIN | NEIN | NEIN |
| readonly | JA | NEIN | NEIN |
| optional | JA | JA | NEIN |
| required | JA | JA | JA |


## Verknüpfungsregister

Verknüpfungsregister können ebenfalls als `aiRelevant` markiert und mit den Eigenschaften `aiHitList` sowie `aiLimit` konfiguriert werden.


### aiRelevant

Am Register kann festgelegt werden, ob dieses Register für die KI relevant sein soll. Die möglichen Werte und deren Verhalten sind:

| Wert von $aiRelevant am Feld | AI-Zugriff auf das Register |
| --- | --- |
| default/nicht definiert | Wert wird von $linkRegisterAIRelevantDefaultMode am Mappentyp übernommen, falls nicht definiert, siehe 'auto' |
| auto | documentsOS entscheidet anhand der Registerattribute, ob das Register für die KI lesbar ist ("true") oder nicht ("false") |
| true | JA |
| false | NEIN |

Diese Eigenschaft lässt sich im Admin Center konfigurieren:


![](./assets/ai-relevant-04.png?class=medium)

Abb. 86 - KI-Relevant für Register


### aiHitList

Mit der Eigenschaft `aiHitList` wird festgelegt, welche Spalten des Verknüpfungsregisters der KI bereitgestellt werden.
Wird diese Eigenschaft nicht definiert, erhält die KI standardmäßig Zugriff auf alle Feldwerte, die im Webclient aufgeführt werden. Dies entspricht der Standard Trefferliste (HitResultset).


### aiLimit

Mit der Eigenschaft `aiLimit` wird die maximale Anzahl der Mappen begrenzt, die der KI zur Verfügung stehen.
Der Standardwert beträgt **20**.


#### Beispiel

Im folgenden Beispiel wird sowohl die Anzahl der übergebenen Mappen als auch die Menge der bereitgestellten Spalten eingeschränkt.
Die Abbildung zeigt, welche Informationen der Copilot erhält. Das Ergebnis im Chat spiegelt diese Konfiguration wider.

- aiLimit = 2
- aiHitList = ["DlcFile_Title", "crmCompany", "crmJobtitle", "crmPhone"]


![register-ai-relevant](./assets/ai-relevant-02.png?class=large)

Abb. 87 - Für die KI "sichtbare" Einträge des Verknüpfungsregisters


![register-ai-relevant-result](./assets/ai-relevant-01.png?class=medium)

Abb. 88 - Ergebnis der KI-Suche im Verknüpfungsregister


# JSON-Schema

Das folgende Minimalbeispiel zeigt das generierte JSON eines Belegs des Mappentyps "aiReceipt",
wie es die KI erhalten würde:


```json
{
	"$schema": "http://json-schema.org/draft-07/schema",
	"$id": "de.otris.documents.json.schema.filetype.aiReceipt",
	"title": "aiReceipt",
	"description": "Filetype defining schema",
	"type": "object",
	"additionalProperties": false,
	"properties": {
		"Subject": {
			"title": "Betreff",
			"type": "string",
			"description": "Dies ist ein Tooltip für den Betreff."
		},
		"DocumentDate": {
			"title": "Datum des Dokumentes",
			"type": "string",
			"format": "date",
			"description": " (in ISO 8601, single value only)",
			"examples": [
				"2001-01-07",
				"1995-12-31"
			]
		},
		"Type": {
			"title": "Belegart",
			"type": "string",
			"enum": [
				"",
				"Eingangsrechnung",
				"Ausgangsrechnung",
				"Quittung",
				"Bestellung",
				"Kontoauszug",
				"Steuerbescheinigung"
			]
		}
	}
}
```

{
	"$schema": "http://json-schema.org/draft-07/schema",
	"$id": "de.otris.documents.json.schema.filetype.aiReceipt",
	"title": "aiReceipt",
	"description": "Filetype defining schema",
	"type": "object",
	"additionalProperties": false,
	"properties": {
		"Subject": {
			"title": "Betreff",
			"type": "string",
			"description": "Dies ist ein Tooltip für den Betreff."
		},
		"DocumentDate": {
			"title": "Datum des Dokumentes",
			"type": "string",
			"format": "date",
			"description": " (in ISO 8601, single value only)",
			"examples": [
				"2001-01-07",
				"1995-12-31"
			]
		},
		"Type": {
			"title": "Belegart",
			"type": "string",
			"enum": [
				"",
				"Eingangsrechnung",
				"Ausgangsrechnung",
				"Quittung",
				"Bestellung",
				"Kontoauszug",
				"Steuerbescheinigung"
			]
		}
	}
}
### Feldwerte


### title-Parameter

Als *title* wird das Label des Feldwerts genutzt. Mehrsprachige Labels werden lokalisiert (hier: de:Beleg;en:Receipt).


#### type- und format-Parameter

Die Parameter *type* und *format* werden automatisch anhand des Feldtyps gewählt (z.B. bei einem Feld vom Typ "Datum": "type": "string", "format": "date").


#### description-Parameter

Der Parameter *description* enthält die Beschreibung des jeweiligen Feldes.
Zunächst wird der vorhandene Tooltip des Feldes an die KI übergeben, wie beim Feld "Betreff".
Für bestimmte Feldtypen existieren ergänzende vordefinierte Hinweise wie "(in ISO 8601, single value only)".
Diese sorgen für klare Vorgaben zum erwarteten Format.
Wenn ein Tooltip vorhanden ist, wird der vordefinierte Hinweis am Ende angefügt.


![register-ai-relevant-tooltip](./assets/ai-relevant-tooltip.png?class=medium)

Abb. 89 - Feldwert-Tooltip hinterlegen


#### Aufzählungswerte: enum-Parameter

Im Fall eines Enum-Feldtyps werden die zur Verfügung stehenden Enumwerte übermittelt.

**Hinweis:** Bei Enum-Feldern mit vielen Optionen kann es zu Kontextproblemen kommen, wenn zu viele Enum-Werte an die KI gesand werden. In diesem Fall ist es besser, diese per `aiFieldSchema`-Property einzuschränken.


## Nutzung von Templates: aiFieldSchema

Soll ein Feld nach einem festen Muster ausgefüllt werden, kann dafür ein Template verwendet werden.
Ein mögliches Anwendungsszenario sind Adressfelder, die immer im gleichen Format ausgegeben werden sollen.


![register-ai-relevant-address](./assets/ai-relevant-address.png?class=medium)

Abb. 90 - Von der KI ausgefülltes Adressfeld

Dazu wird an dem Feld die Eigenschaft `jsonSchema` hinterlegt. Das Schema kann direkt definiert werden,
oder es wird eine benutzerdefinierte Eigenschaft vom Typ `aiFieldSchema` nach dem folgenden Muster referenziert: `%$CP.[Name der Eigenschaft]%`.
Über diesen Mechanismus wird ein konsistentes Ausfüllen eines Feldes durch die KI sichergestellt.


### Beispiel

Die folgenden Abbildungen zeigen, wie am Adressfeld über die Feldeigenschaft ein *address*-Template referenziert wird:


![register-ai-relevant-jsonSchema](./assets/ai-relevant-jsonSchema.png?class=medium)

Abb. 91 - Feldeigenschaft: Verweis auf ein aiFieldSchema


#### address-Template

Als benutzerdefinierte Eigenschaft wird ein Template vom Typ `aiFieldSchema` angelegt.


![register-ai-relevant-template](./assets/ai-relevant-template.png?class=medium)

Abb. 92 - Benutzerdefinierte Eigenschaft: Definition eines aiFieldSchemas


##### Reihenfolge definieren: $template-Parameter

Über den Parameter `$template` können einzelne `properties` eingebunden und in eine feste Reihenfolge überführt werden
(hier: `"{{streetAddress}}\r\n{{postalCode}} {{city}}"`).


##### Beispielwerte: examples-Parameter

Beim Erstellen eines Templates ist es ebenso möglich, der KI Beispielwerte als Referenz zur Verfügung zu stellen.


```json
{
	"title": "Firmenanschrift",
	"description": "Schema für eine Firmenanschrifte mit optionalem Ansprechpartner",
	"$template": "{{streetAddress}}\r\n{{postalCode}} {{city}}",
	"type": "object",
	"properties": {
		"companyName": {
			"type": "string",
			"title": "Firmenname",
			"description": "Der offizielle Name der Firma",
			"examples": [
				"Tech Solutions GmbH",
				"Green Energy AG",
				"Creative Minds KG"
			]
		},
		"streetAddress": {
			"type": "string",
			"title": "Straßenadresse",
			"description": "Die Straße und Hausnummer der Firma",
			"examples": [
				"Technologiepark 20",
				"Energieweg 5",
				"Kreativstraße 8"
			]
		},
		"postalCode": {
			"type": "string",
			"title": "Postleitzahl",
			"description": "Die Postleitzahl des Standorts der Firma",
			"examples": [
				"80331",
				"10115",
				"70173"
			]
		},
		"city": {
			"type": "string",
			"title": "Stadt",
			"description": "Die Stadt, in der sich die Firma befindet",
			"examples": [
				"München",
				"Berlin",
				"Stuttgart"
			]
		}
	}
}
```

{
	"title": "Firmenanschrift",
	"description": "Schema für eine Firmenanschrifte mit optionalem Ansprechpartner",
	"$template": "{{streetAddress}}\r\n{{postalCode}} {{city}}",
	"type": "object",
	"properties": {
		"companyName": {
			"type": "string",
			"title": "Firmenname",
			"description": "Der offizielle Name der Firma",
			"examples": [
				"Tech Solutions GmbH",
				"Green Energy AG",
				"Creative Minds KG"
			]
		},
		"streetAddress": {
			"type": "string",
			"title": "Straßenadresse",
			"description": "Die Straße und Hausnummer der Firma",
			"examples": [
				"Technologiepark 20",
				"Energieweg 5",
				"Kreativstraße 8"
			]
		},
		"postalCode": {
			"type": "string",
			"title": "Postleitzahl",
			"description": "Die Postleitzahl des Standorts der Firma",
			"examples": [
				"80331",
				"10115",
				"70173"
			]
		},
		"city": {
			"type": "string",
			"title": "Stadt",
			"description": "Die Stadt, in der sich die Firma befindet",
			"examples": [
				"München",
				"Berlin",
				"Stuttgart"
			]
		}
	}
}
#### Ausschnitt des vollständigen Mappenschemas mit eingefügtem address-Template

Der folgende Ausschnitt zeigt das vollständige Mappenschema des zuvor gezeigten Minimalbeispiels inkl. *address*-Template.
Für das Feld `AddressReceiver` wird das *address*-Template direkt in das Mappenschema eingefügt.


```json
{
	"$schema": "http://json-schema.org/draft-07/schema",
	"$id": "de.otris.documents.json.schema.filetype.aiReceipt",
	"title": "aiReceipt",
	"description": "Filetype defining schema",
	"type": "object",
	"additionalProperties": false,
	"properties": {
		"Subject": {
			// [...]
		},
		"DocumentDate": {
			// [...]
		},
		"Type": {
			// [...]
		},
		"AddressReceiver": {
			"title": "Firmenanschrift",
			"description": "Schema für eine Firmenanschrifte mit optionalem Ansprechpartner",
			"$template": "{{streetAddress}}\r\n{{postalCode}} {{city}}",
			"type": "object",
			"properties": {
				"companyName": {
					"type": "string",
					"title": "Firmenname",
					"description": "Der offizielle Name der Firma",
					"examples": [
						"Tech Solutions GmbH",
						"Green Energy AG",
						"Creative Minds KG"
					]
				},
				"streetAddress": {
					"type": "string",
					"title": "Straßenadresse",
					"description": "Die Straße und Hausnummer der Firma",
					"examples": [
						"Technologiepark 20",
						"Energieweg 5",
						"Kreativstraße 8"
					]
				},
				"postalCode": {
					"type": "string",
					"title": "Postleitzahl",
					"description": "Die Postleitzahl des Standorts der Firma",
					"examples": [
						"80331",
						"10115",
						"70173"
					]
				},
				"city": {
					"type": "string",
					"title": "Stadt",
					"description": "Die Stadt, in der sich die Firma befindet",
					"examples": [
						"München",
						"Berlin",
						"Stuttgart"
					]
				}
			}
		}
	}
}
```

{
	"$schema": "http://json-schema.org/draft-07/schema",
	"$id": "de.otris.documents.json.schema.filetype.aiReceipt",
	"title": "aiReceipt",
	"description": "Filetype defining schema",
	"type": "object",
	"additionalProperties": false,
	"properties": {
		"Subject": {
			// [...]
		},
		"DocumentDate": {
			// [...]
		},
		"Type": {
			// [...]
		},
		"AddressReceiver": {
			"title": "Firmenanschrift",
			"description": "Schema für eine Firmenanschrifte mit optionalem Ansprechpartner",
			"$template": "{{streetAddress}}\r\n{{postalCode}} {{city}}",
			"type": "object",
			"properties": {
				"companyName": {
					"type": "string",
					"title": "Firmenname",
					"description": "Der offizielle Name der Firma",
					"examples": [
						"Tech Solutions GmbH",
						"Green Energy AG",
						"Creative Minds KG"
					]
				},
				"streetAddress": {
					"type": "string",
					"title": "Straßenadresse",
					"description": "Die Straße und Hausnummer der Firma",
					"examples": [
						"Technologiepark 20",
						"Energieweg 5",
						"Kreativstraße 8"
					]
				},
				"postalCode": {
					"type": "string",
					"title": "Postleitzahl",
					"description": "Die Postleitzahl des Standorts der Firma",
					"examples": [
						"80331",
						"10115",
						"70173"
					]
				},
				"city": {
					"type": "string",
					"title": "Stadt",
					"description": "Die Stadt, in der sich die Firma befindet",
					"examples": [
						"München",
						"Berlin",
						"Stuttgart"
					]
				}
			}
		}
	}
}