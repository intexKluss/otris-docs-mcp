---
title: "XML-DOM Example | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/xml-dom-example.html"
---

# XML-DOM Example

The following code shows in a short example how to create and parse a XML using the DOM classes.
Sample-XML


```xml
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<catalog>
 <book id="bk101">
  <author>Gambardella, Matthew</author>
  <title>XML Developer's Guide</title>
  <price>44.95</price>
 </book>
 <book id="bk102">
  <author>Ralls, Kim</author>
  <title>Midnight Rain</title>
  <price>5.95</price>
 </book>
</catalog>
```

Creating the sample XML and parsing of it


```javascript
var xml = createXML();
parseXML(xml);


function createXML()
{
 var xml = "";
 try
 {
  var domDoc = new DOMDocument("catalog");
  var rootElem = domDoc.firstChild;

  // Book 1
  var book = domDoc.createElement("book");
  rootElem.appendChild(book);
  book.setAttribute("id", "bk101");

  var author = domDoc.createElement("author");
  book.appendChild(author);
  author.appendChild(domDoc.createTextNode("Gambardella, Matthew"));

  var title = domDoc.createElement("title");
  book.appendChild(title);
  title.appendChild(domDoc.createTextNode("XML Developer's Guide"));

  var price = domDoc.createElement("price");
  book.appendChild(price);
  price.appendChild(domDoc.createTextNode("44.95"));

  // Book 2
  book = domDoc.createElement("book");
  rootElem.appendChild(book);
  book.setAttribute("id", "bk102");

  author = domDoc.createElement("author");
  book.appendChild(author);
  author.appendChild(domDoc.createTextNode("Ralls, Kim"));

  title = domDoc.createElement("title");
  book.appendChild(title);
  title.appendChild(domDoc.createTextNode("Midnight Rain"));

  price = domDoc.createElement("price");
  book.appendChild(price);
  price.appendChild(domDoc.createTextNode("5.95"));

  // create xml
  var parser = new DOMParser();
  xml = parser.write(domDoc, "", "UTF-8")
 }
 catch (exp)
 {
  throw exp.message;
 }
 return xml;
}


function parseXML(xml)
{
 try
 {
  var domParser = new DOMParser();
  domParser.parse(xml, false);

  var root = domParser.getDocument();

  var catalog = root.documentElement;
  util.out(catalog.tagName);  // -> "catalog"

  var catChildCount = catalog.childNodes.length;  // -> 2 up to 5
  for (var i = 0; i < catChildCount; i++)
  {
   var book = catalog.childNodes[i];
   // Examine only DOMElements on this level! Text nodes with whitespaces and
            // comment nodes may occur before, between and after the book nodes.
   if (book.nodeType == DOMNode.ELEMENT_NODE)
   {
   util.out(book.getAttribute("id"));   // -> "bk101" / "bk102"

   var childs = book.childNodes;
   for (var j = 0; j < childs.length; j++)
   {
     // Again: skip whitespaces etc.
     if(childs[j].nodeType == DOMNode.ELEMENT_NODE)
     {
    util.out(childs[j].tagName);          // -> "author" / "title" ....
    util.out(childs[j].firstChild.data);  // -> "Gambardella, Matthew" / "XML Developer's Guide" ....
   }
  }
 }
  }
 }
 catch (exp)
 {
  throw exp.message;
 }
}
```