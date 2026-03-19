---
title: "SOAP"
source: "https://otris.software/documents/manuals/books/reference-fields/apis/int-soap.html"
---

# SOAP

Eine weitere Schnittstelle, über die Mappen bearbeitet werden können, ist die SOAP-Schnittstelle. Auch über diese Schnittstelle können Referenzfelder gesetzt werden.


## Referenzfeld setzen

Es gibt hier aber einen Unterschied zum PortalScripting. Und zwar darf beim Setzen eines Referenzfeldes über SOAP der Anzeigename *nicht* angegeben werden. Für ein Referenzfeld darf als Wert ausschließlich der Schlüsselwert angegeben werden. Wenn der Anzeigename mit angegeben wird, ist die Referenz fehlerhaft.

Als Beispiel wird hier ein SOAP Client für DOCUMENTS verwendet, der in VB.NET geschrieben ist. Beim Setzen des Feldes `Kreditor` wird nur der Schlüsselwert `1234` angegeben.


```vbnet
Dim felderFirma As New List(Of FieldData)
felderFirma.Add(New FieldData With {.name = "Name", .value = "otris"})
felderFirma.Add(New FieldData With {.name = "FirmenID", .value = "1234"})

Dim felderRechnung As New List(Of FieldData)
felderRechnung.Add(New FieldData With {.name = "Kreditor", .value = "1234"})

doc.createFile("Firma", felderFirma.ToArray, Nothing)
doc.createFile("Rechnung", felderRechnung.ToArray, Nothing)
```

Dim felderFirma As New List(Of FieldData)
felderFirma.Add(New FieldData With {.name = "Name", .value = "otris"})
felderFirma.Add(New FieldData With {.name = "FirmenID", .value = "1234"})

Dim felderRechnung As New List(Of FieldData)
felderRechnung.Add(New FieldData With {.name = "Kreditor", .value = "1234"})

doc.createFile("Firma", felderFirma.ToArray, Nothing)
doc.createFile("Rechnung", felderRechnung.ToArray, Nothing)
## Referenzfeld lesen

Mit der Funktion `getFileInfo()` können Feldwerte gelesen werden. Normalerweise wird hier nur der Anzeigewert zurückgegeben. Um den Schlüsselwert zu lesen, muss der Feldname zusammen mit `.key` angegeben werden.


```vbnet
Dim fileInfoParam As getFileInfo = New getFileInfo()
Dim wishedFieldNames As New List(Of String)

' get the display value of the Kreditor field
wishedFieldNames.Add("Kreditor")

' get the key of the Kreditor field
wishedFieldNames.Add("Kreditor.key")

fileInfoParam.wishedFieldNames = wishedFieldNames.ToArray()
Dim fileInfo = doc.getFileInfo(fileInfoParam)

' read fileInfo.fieldvalues ...
```

Dim fileInfoParam As getFileInfo = New getFileInfo()
Dim wishedFieldNames As New List(Of String)

' get the display value of the Kreditor field
wishedFieldNames.Add("Kreditor")

' get the key of the Kreditor field
wishedFieldNames.Add("Kreditor.key")

fileInfoParam.wishedFieldNames = wishedFieldNames.ToArray()
Dim fileInfo = doc.getFileInfo(fileInfoParam)

' read fileInfo.fieldvalues ...