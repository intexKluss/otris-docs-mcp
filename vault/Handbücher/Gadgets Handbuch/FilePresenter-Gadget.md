---
title: "FilePresenter-Gadget"
source: "https://otris.software/documents/manuals/books/gadget/additional-examples/file-presenter-gadget.html"
---

# FilePresenter-Gadget

Seit DOCUMENTS `5.0g` ist es mit dem **FilePresenter-Gadget** möglich, Informationen einer Mappe aus einem anderen Mandanten anzuzeigen. Die Funktionalität wird in diesem Beispiel anhand der beiden Mandanten `relations` und `contract4` erläutert.


![Verkaufsprojekt mit dem Register Vertrag](../assets/img/additional-examples/file-presenter-preview.png?class=medium,inline)

Abb. 128 - Verkaufsprojekt mit dem Register Vertrag![Verkaufsprojekt mit dem Register Vertrag](../assets/img/additional-examples/file-presenter-list-preview.png?class=medium,inline)

Abb. 129 - Liste der Verkaufsprojekte am Vertrag

**Verkaufsprojekte** (`crmOpportunity`) im `relations` Demo-Mandanten bekommen ein neues Register **Vertrag**. An diesem Register ist es möglich, einen Vertrag (`lcmContract`) aus dem Mandanten `contract4` zu referenzieren.
Im Register wird dann eine Informationsübersicht (*Mappendeckel*) des referenzierten Vertrages angezeigt.
Am Vertrag zeigt das Register **Verkaufsprojekte** eine Liste der verknüpften Mappen an.


---


## Multimandanten-Funktionalität konfigurieren

Um das Gadget zu nutzen, muss zunächst die **Multimandanten-Funktionalität** für die entsprechenden Mandanten aktiviert werden. Dazu muss bei den Mandanten **automatisches Login** aktiviert sein und die Mandanteneigenschaft [trustedSwitchPrincipals](../../../../api/properties/#trustedswitchprincipals_partnernet) gesetzt werden.


![Automatisches Login am Mandanten aktivieren](../assets/img/additional-examples/automatisches-login.png)

Abb. 130 - Automatisches Login am Mandanten aktivieren

Am Mandanten **relations muss trustedSwitchPrincipals=contract4** gesetzt werden und am Mandanten **contract4 entsprechend trustedSwitchPrincipals=relations**.


![Eigenschaft trustedSwitchPrincipals setzen](../assets/img/additional-examples/eigenschaft-trustedSwitchPrincipals.png)

Abb. 131 - Eigenschaft trustedSwitchPrincipals setzen


---


## Konfiguration am Mappentyp crmOpportunity

Um die Referenz zu einem Vertrag zu speichern, muss am Mappentyp `crmOpportunity` ein neues Feld `contractId` (Typ: *String*) angelegt werden.
Die Option **"In der Mappenansicht darstellen"** sollte für das Feld deaktiviert werden.

Anschließend legt man ein neues Register `crmContract` (Bezeichner: *Vertrag*, Registertyp: *Externer Aufruf*) am Mappentyp an.
Die folgende `gadgetConfig` muss an diesem Register als Eigenschaft hinterlegt werden:


```javascript
{
      // Skript & Aktion des FilePresenter Gadgets
      gadgetScript: 'Gadget_FilePresenter',
      gadgetAction: 'show',
      // Feldname, in dem der Referenzwert im "Source"-Mandanten gespeichert wird
      fieldName: 'contractId',
      // Name des "Remote"-Mandanten
      gadgetRemotePrincipal: 'contract4',
      // "Remote"-Mappentyp
      fileType: 'lcmContract',
      // Feldname, das den Referenzwert im "Remote"-Mappentyp enthält
      refFieldName: 'lcmId'
    }
```

    {
      // Skript & Aktion des FilePresenter Gadgets
      gadgetScript: 'Gadget_FilePresenter',
      gadgetAction: 'show',
      // Feldname, in dem der Referenzwert im "Source"-Mandanten gespeichert wird
      fieldName: 'contractId',
      // Name des "Remote"-Mandanten
      gadgetRemotePrincipal: 'contract4',
      // "Remote"-Mappentyp
      fileType: 'lcmContract',
      // Feldname, das den Referenzwert im "Remote"-Mappentyp enthält
      refFieldName: 'lcmId'
    }**Hinweis:** Das Attribut `gadgetRemotePrincipal` kann auch allgemein dazu verwendet werden, ein *Gadget-Skript* im Kontext eines anderen Mandanten auszuführen.
Weitere Informationen dazu finden sich in der Dokumentation [Remote Principal Gadgets](./remote_principal_gadget.html#remote-principal-gadget)


---


## Konfiguration am Mappentyp lcmContract

Am Mappentyp `lcmContract` legt man ein Register `lcmOpportunities` (Bezeichner: *Verkaufsprojekte*, Registertyp: *Externer Aufruf*) mit der folgenden `gadgetConfig` als Eigenschaft an:


```javascript
{
      // Skript & Aktion des FilePresenter Gadgets
      gadgetScript: 'Gadget_FilePresenter',
      gadgetAction: 'showList',
      // Name des "Source"-Mandanten
      gadgetRemotePrincipal: 'relations',
      // Name des Mappentyps im "Source"-Mandanten
      fileType: 'crmOpportunity',
      // Feldname, in dem der Referenzwert gespeichert wird
      fieldName: 'contractId',
      // Feldname, das den Referenzwert enthält
      refFieldName: 'lcmId'
    }
```

    {
      // Skript & Aktion des FilePresenter Gadgets
      gadgetScript: 'Gadget_FilePresenter',
      gadgetAction: 'showList',
      // Name des "Source"-Mandanten
      gadgetRemotePrincipal: 'relations',
      // Name des Mappentyps im "Source"-Mandanten
      fileType: 'crmOpportunity',
      // Feldname, in dem der Referenzwert gespeichert wird
      fieldName: 'contractId',
      // Feldname, das den Referenzwert enthält
      refFieldName: 'lcmId'
    }
---


## Templates für die Mappeninformationen

Die Darstellung der Mappeninformationen erfolgt über am jeweiligen Mappentyp definierten Dokumentenvorlagen.
Die folgenden Vorlagennamen werden automatisch verwendet, wenn diese am Mappentyp existieren.

Es besteht außerdem die Möglichkeit, ein Gadget für die Darstellung in der Referenzansicht zu verwenden (siehe Punkt 1).


### Referenzansicht

1. Eigenschaft filePresenterGadgetConfig am Mappentyp
(Darstellungsalternative über ein eigenes Gadget)
2. MAPPENTYPNAMEPresenter (z. B. crmOpportunityPresenter)
3. MAPPENTYPNAMECover


### Listenansicht

1. MAPPENTYPNAMEPresenterList
2. MAPPENTYPNAMEPresenter
3. MAPPENTYPNAMECover

Es besteht außerdem die Möglichkeit, in den Gadget-Konfigurationen über das Attribut `refTemplateName` einen Templatenamen anzugeben.

Die Templates können genauso wie individuelle Mappendeckel erstellt werden.
Weitere Informationen dazu finden sich in der Präsentation [Output Management](../../../../manuals/#documents_dopak_2020_output_management?page=11) der DoPak 2020.


---


### Template-Beispiel crmOpportunityPresenterList

Das folgende Beispiel könnte auch für andere Mappentypen verwendet werden, da nur auf allgemein verfügbare Attribute zugegriffen wird.
Um möglichst *informative* Übersichten zu erstellen, sollten die Templates jedoch grundsätzlich spezifisch für jeden Mappentyp erstellt werden.


```html
{{otrEmbed "hb.otrPureFilecover"}}
<div class="rfc width--small width--medium width--large"> <!-- Responsive File Cover -->
  <h1>{{DlcFile_Title}}</h1>
  <div class="pure-g">
    <div class="pure-u-1  pure-u-md-1-4">
      {{>otrValueBox label=label.DlcFile_LastEditor value=DlcFile_LastEditor}}
    </div>
    <div class="pure-u-1  pure-u-md-1-4">
      {{>otrValueBox label=label.DlcFile_LastModified value=DlcFile_LastModified}}
    </div>
    <div class="pure-u-1  pure-u-md-1-4">
      {{>otrValueBox label=label.DlcFile_Owner value=DlcFile_Owner}}
    </div>
    <div class="pure-u-1  pure-u-md-1-4">
      {{>otrValueBox label=label.DlcFile_Created value=DlcFile_Created}}
    </div>
  </div>
</div>
{{otrResizeTracker "rfc" "width--small:300,width--medium:450,width--large:700"}}
```

{{otrEmbed "hb.otrPureFilecover"}}
<div class="rfc width--small width--medium width--large"> <!-- Responsive File Cover -->
  <h1>{{DlcFile_Title}}</h1>
  <div class="pure-g">
    <div class="pure-u-1  pure-u-md-1-4">
      {{>otrValueBox label=label.DlcFile_LastEditor value=DlcFile_LastEditor}}
    </div>
    <div class="pure-u-1  pure-u-md-1-4">
      {{>otrValueBox label=label.DlcFile_LastModified value=DlcFile_LastModified}}
    </div>
    <div class="pure-u-1  pure-u-md-1-4">
      {{>otrValueBox label=label.DlcFile_Owner value=DlcFile_Owner}}
    </div>
    <div class="pure-u-1  pure-u-md-1-4">
      {{>otrValueBox label=label.DlcFile_Created value=DlcFile_Created}}
    </div>
  </div>
</div>
{{otrResizeTracker "rfc" "width--small:300,width--medium:450,width--large:700"}}