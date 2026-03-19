---
title: "Mandanten Eigenschaften"
source: "https://otris.software/documents/manuals/books/autotexte/PrincipalAttributes.html"
---

# Mandanten Eigenschaften

Mit den folgenden Autotexten können diverse Eigenschaften des Mandanten abgefragt werden:

| Autotext | Beschreibung |
| --- | --- |
| %mailsignature% | Unternehmens Mail-Signatur (vom Mandanten, Register eMail-Service) |
| %hostname% | Hostname (Register Administration, Abschnitt Hosting) |
| %secureHostname% | Secure Hostname (Register Administration, Abschnitt Hosting) |

Diese Liste stellt nur einen Ausschnitt dar und ist nicht vollständig. Alle weiteren Eigenschaften des Mandanten, die nicht in der Tabelle gelistet sind, können über die folgende Notation abgefragt werden:

`%principal.<Name der Eigenschaft>%`

Wobei `<Name der Eigenschaft>` für ein beliebige Eigenschaft des Mandanten steht, bspw. `mneminic, carrier, eMailActive, ...`. Die technischen Namen der Eigenschaften können bspw. mit dem DOCUMENTS-Manager per `Rechtsklick -> Bezeichner ändern` abgefragt werden.

Der Zugriff auf die Properties ("dollar-Eigenschaften", Register Eigenschaften) erfolgt mit derselben Notation. Bsp: `%principal.$UseDefaultMailSender` oder `%principal.$myCustomAttribute`.


## Property Cache

Werte aus dem [Property-Cache](https://doku.otris.de/api/portalscript/PropertyCache.html) können mit dem folgenden Autotext abgefragt werden:

`%principal.propCache.<element>%`

Dieser Autotext gibt den Wert des Elements im Property Cache zurück, sofern das Element existiert. Existiert es nicht, wird stattdessen ein leerer String zurückgegeben.
Beispiel:


```js
propCache.myCustomProperty = "test123";
util.out(context.getAutoText("%principal.propCache.myCustomProperty%")); // test123
```

propCache.myCustomProperty = "test123";
util.out(context.getAutoText("%principal.propCache.myCustomProperty%")); // test123