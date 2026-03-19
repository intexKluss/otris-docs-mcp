---
title: "Integration von Gadgets"
source: "https://otris.software/documents/manuals/books/gadget/integration/integration-overview.html"
---

# Integration von Gadgets

Gadgets lassen sich an verschiedenen Stellen im System einbinden.
Die verschiedenen **Möglichkeiten der Integration** werden in diesem Kapitel aufgezeigt.


## Einsatzbereiche von Gadgets

Integrationsmöglichkeiten von Gadgets im Dashboard und als Ordner

- An öffentlichen Ordnern (Eintrag im linken Menü-Baum)
- Als Kachel in einem Dashboard


![relations_dashboard_rd.png](../assets/img/integration/relations_dashboard_rd.png)

Abb. 7 - die Startseite des relations Demo-Mandanten

Integrationsmöglichkeiten von Gadgets an Mappen und Ordner

- In der Seiteleiste
- Als Mappendeckel
- Im Monitor
- Als Register einer Mappe
- Als benutzerdefinierte Aktion einer Mappe
- Als benutzerdefinierte Aktion an Ordnern
- Als Mappen-Feld (Typ: Gadget)
- Als User-Exit an einem Mappen-Feld


![relations_mappe_rd.png](../assets/img/integration/relations_mappe_rd.png)

Abb. 8 - Ansicht mit ausgewählter Mappe

- Als E-Mail-User-Exit an einem Mappentyp


![relations_e_mail_rd.png](../assets/img/integration/relations_e_mail_rd.png)

Abb. 9 - Ansicht Mappe als E-Mail verschicken


## Technische Schritte zur Gadget-Integration

Die Integration von Gadget-Konfigurationen ist in verschiedenen Kontexten möglich und kann über den **DOCUMENTS-Manager** oder ab documentsOS auch über das **AdminCenter** mit der aktivierten Erweiterung **Admin-Tools** erfolgen. Die Gadget-Konfiguration wird als eine spezifische Eigenschaft wie `gadgetConfig`, `marginGadgetConfigs`, `emailGadgetConfig`, etc. hinterlegt.
Als Wert wird ein Objekt mit mindestens 2 Attributen `gadgetScript` und `gadgetAction` verwendet.
{**gadgetScript**: `Gadget_Scriptname`, **gadgetAction**: `action`}

- gadgetScript: Gadget_Scriptname
der Scriptname von Gadgets beginnt immer mit Gadget
- gadgetAction: action
bestimmt die zuerst aufzurufende registrierte Funktion aus dem gadgetScript


### "gadgetConfig" - ein einzelnes Gadget einbinden

In den meisten Kontexten steht die Eigenschaft `gadgetConfig` zur Verfügung.

Einrichtung über die **Anwendung** Documents-Manager:

- Eigenschaften:
Auswahl: neue Eigenschaft hinzufügen
Name = gadgetConfig
Wert = { gadgetScript: Gadget_Scriptname , gadgetAction: funktionsName }**


![dOS_manager_gadgetConfig.png](../assets/img/integration/dOS_manager_gadgetConfig.png)

Abb. 10 - documentsOS Manager - gadgetConfig an einem Gadget-Feld

Einrichtung über die **Erweiterung Admin Tools** des administrativen Bereichs **AdminCenter** im Webclient:

- Eigenschaften:
Feld: Eigenschaften
Auswahl: gadgetConfig
Wert = { gadgetScript: Gadget_Scriptname , gadgetAction: funktionsName }**


![dOS_admincenter_gadgetConfig.png](../assets/img/integration/dOS_admincenter_gadgetConfig.png)

Abb. 11 - documentsOS Admin Tools - gadgetConfig an einem Gadget-Feld


### "marginGadgetConfigs" - mehrere Gadgets einbinden

In bestimmten Kontexten kann es notwendig sein, mehrere Gadgets gleichzeitig in eine Konfiguration zu registrieren. Mit der Eigenschaft `marginGadgetConfigs` werden Gadget-Konfigurationen als Array von JSON-Objekten eingebunden. Zum Beispiel können so verschiedene Gadgets gleichzeitig [in der Seitenleiste von Mappen](../integration/integration-filetype.html#integration-von-gadgets-in-der-seitenleiste) dargestellt werden.
Bei dieser Eigenschaft ist, unabhängig von der Anzahl der eingebundenen Gadget-Konfigurationen, **immer ein Array** zu verwenden:

- Name = marginGadgetConfigs
- Wert = [{gadgetScript:'Gadget_1', gadgetAction:'show'},
{gadgetScript: 'Gadget_2', gadgetAction: 'show'}]

Soll an dieser Stelle nur ein einzelnes Gadget verwendet werden, so muss dies trotzdem in eckige Klammern geschrieben werden:

- Name = marginGadgetConfigs
- Wert = [{gadgetScript:'Gadget_1', gadgetAction:'show'}]


### Gadget Einbindungen

- DlcAction - benutzerdefinierte Aktion
gadgetConfig = JSON-Konfiguration zum Einbinden eines Gadgets an der konfigurierten Stelle.
- DlcField - Mappenfeld
gadgetConfig = JSON-Konfiguration zum Einbinden eines Gadgets an der konfigurierten Stelle.
- DlcFile - Mappentyp
fileCoverGadgetConfig
Mit der Eigenschaft fileCoverGadgetConfig kann ein Gadget definiert werden, das im Lesemodus statt des Standard-Mappendeckels angezeigt wird.
marginGadgetConfigs
In der Seitenleiste von Mappen können ebenfalls Gadgets verwendet werden. Dazu muss die Eigenschaft „marginGadgetConfigs“ für den jeweiligen Mappentyp festgelegt werden. In dieser Eigenschaft können mehrere Gadgets verwendet werden, die in der Seitenleiste untereinander dargestellt werden.
monitorGadgetConfig
Im Monitor kann ein Gadget zur Anzeige hinterlegt werden.
- DlcFolder - Ordner
gadgetConfig = JSON-Konfiguration zum Einbinden eines Gadgets an der konfigurierten Stelle.
- DlcGlobalOptions - Mandant
globalGadgetConfig
Links oben im Hauptmenu kann ein Gadget Button eingeblendet werden. Hier kann man für den Button ein entypo Icon hinterlegen, dessen Position nachträglich mit css angepasst werden kann. Wenn gadgetDialog=true gesetzt ist, wird das Gadget im Dialog angezeigt und ansonsten im Ordner-Frame. Ein Tooltip kann auch eingestellt werden.
homeDashboardGadgetConfig
Ruft ein Gadget auf, wenn auf 'Home' geklickt wird. Hier kann ein alternatives Dashboard für die Home-Schaltfläche hinterlegt werden [{GadgetConfig}].
menubarGadgetConfigs
Links oben im Hauptmenu kann eine weitere Zeile mit Gadget Buttons eingeblendet werden. Hier kann man für den Button ein entypo Icon hinterlegen dessen Position nachträglich mit css angepasst werden kann. Wenn gadgetDialog=true gesetzt ist, wird das Gadget im Dialog angezeigt, andernfalls in der Ordneransicht. Ein Tooltip kann auch eingestellt werden.
naviBarGadgetConfig
Mit dieser Eigenschaft ist es möglich, ein Gadget oben links unter der Iconleiste einzubinden. Im neuen Design wird das Gadget in der Toolbar oben rechts angezeigt.
newFileGadgetConfig
Beim Klick auf den Button 'Neue Mappe erstellen', wird das hinterlegte Gadget ausgeführt. Anstatt einer Gadget-Konfiguration kann auch die Zeichenkette "dropDefault" gesetzt werden. In diesem Fall wird das Standard-Drop-Upload Gadget verwendet.
overViewDashboardGadgetConfig
Ruft ein Gadget auf, wenn auf 'Übersicht' geklickt wird. Hier kann ein alternatives Dashboard für den Link 'Übersicht' in Documents5 hinterlegt werden [{GadgetConfig}].
quickDropZoneGadgetConfig
Führt nach dem Hochladen von Dokumenten über die QuickDropzone das konfigurierte Gadget aus. Alternativ kann die Zeichenkette 'dropDefault' gesetzt werden. In diesem Fall wird das Standard-Drop-Upload Gadget verwendet.
- DlcRegister - Register
gadgetConfig = JSON-Konfiguration zum Einbinden eines Gadgets an der konfigurierten Stelle.