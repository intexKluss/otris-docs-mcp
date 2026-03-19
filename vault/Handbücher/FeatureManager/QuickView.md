---
title: "Verwendung des FeatureManagers in QuickView"
source: "https://otris.software/documents/manuals/books/feature-manager/quickview.html"
---

# Verwendung des FeatureManagers in QuickView

Damit nun eine bestimmte Konfiguration für einen bestimmten Benutzer verwendet wird, muss eine *QuickView*-URL erzeugt werden, an die ein Parameter `fc` (für den Namen der FeatureConfig) angehängt wird. Deutlich wird dies im folgenden Beispiel. Der Mandant ist `dopaag`, die verwendete Konfiguration ist `minimal`.

`http://rechnername:8080/jsp/qv?pri=dopaag&ft=Anfragen&q_Status=Offen&lg=schmidt&pw=miriam&fc=minimal`

Beachten Sie hierbei bitte, dass die von Ihnen in der URL bezeichnete FeatureConfig in der Konfigurationsdatei zwingend als webaccessible gekennzeichnet sein muss. Dies geschieht über die Angabe eines zusätzlichen Attributs:


```xml
<FeatureConfig name="xyz" isWebAccessible="true">
```

<FeatureConfig name="xyz" isWebAccessible="true">Neben dem Direktaufruf einer spezifischen FeatureManager-Konfiguration im *QuickView* können Sie außerdem über eine Eigenschaft bestimmen, dass ein einzelner Benutzer eine bestimmte Konfiguration verwenden soll.
Legen Sie hierzu am betroffenen Benutzer über den **DOCUMENTS**-Manager eine neue Eigenschaft namens `defaultQuickViewFeatureConfig` an, der Sie als Wert den Namen einer FeatureConfig Ihrer XML-Konfigurationsdatei zuweisen, die für diesen Benutzer verwendet werden soll.
Sofern Sie die Verwendung einer spezifischen FeatureConfig weder direkt über die *QuickView*-URL noch über Benutzereigenschaften konfigurieren möchten, können Sie als dritten Ansatz die Definition einer FeatureConfig mit einem speziellen Namen wählen. Indem Sie eine Ihrer Konfigurationen mit dem Namen `defaultQuickView` versehen, wird diese automatisch bei Aufruf von **DOCUMENTS** über eine *QuickView*-URL gezogen.