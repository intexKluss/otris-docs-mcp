---
title: "Filter Examples | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/filter-examples.html"
---

# Filter Expression Examples


## Example 1: Searching an invoice by its number

This is a complete script.
**Notice for beginners:** The example constantly uses double quotation marks
around JavaScript String literals. To include the double quotation mark itself
in such a string, a backslash needs to be put in front. At run time the
backslash will not be a character in the string. To insert one,
two backslashes would be necessary.


```javascript
function getInvoiceByNumber(invNumber)
{
 if(invNumber.indexOf("\"") >= 0)
  return null; // make the function safe against filter injection attempts

 var filter = "invoiceNo=\"" + invNumber + "\"";
 // alternative:
 // var filter = "invoiceNo=" + util.getQuoted(invNumber);

 var myFRS = new FileResultset("ftInvoice", filter, "");
 var theFile = myFRS.first();
 if(theFile != null)
 {
  if(myFRS.next())
  {
   // invNumber is ambiguous; do not return the docFile
   return null;
  }
  else
   return theFile;
 }

 return null; // invNumber not found
}

var invoiceNum = "064821";
var theInvoice = getInvoiceByNumber(invoiceNum);
if(theInvoice != null)
 util.out("Company:" + theInvoice.company);
else
 util.out("Invoice number " + invoiceNum + " does not uniquely exist.");
```


## Example 2: A few hard-codes filters using the operator "begins with"


```javascript
var filter1 = "company|~peach";
// In filter1 no quotation marks around "peach" are required.

var filter2 = "company|~\"peach it\"";
// In filter 2 the quotation marks inside the string literal are necessary.
// Otherwise DOCUMENTS would interpret the space character as the end of the condition.
// Subsequently it would expect nothing but an "AND" in the position of the "it".

var filter2b = "company|~'peach it'";
// Equivalent to filter2 with single quotation marks.
// Notice: Mixtures of single and double quotation marks in the script code are often difficult
// to read within the DocumentsManager, which always uses a proportional font.

var filter2c = "company|~" + util.getQuoted("peach it");
// Yet another style to create filter 2.
```


## Example 3: Testing a field for multiple search terms


```javascript
function createFindOneFilter(fieldname, values)
{
 // The function creates a filter, which tests if the field value is exacly one of the values passed as an array.
 // (This applies to a primary index. With a fulltext index the result would be a "contains any of" operation.)

 if(typeof(fieldname) != "string") throw "Invalid call of createFindOneFilter(): the parameter \"fieldname\" must be a string";
 if(typeof(values) != "object") throw "Invalid call of createFindOneFilter(): the parameter \"values\" must be an array of strings";

 //
 // First we create a value expression, which links all possible values
 // with the "|"-Operator (logical OR). Each value may be a phrase (multiple words
 // separated by space characters). So we need to put quotation marks around.
 var valueExpr = util.getQuoted(values[0]);
 var counter;
 for(counter = 1; counter < values.length; ++counter)
 {
  valueExpr = valueExpr + "|" + util.getQuoted(values[counter]);
 }

 // Now create the filter with the web retrieval operator "~".
 // For an exact search under all configurations, we prepend "SETMETHOD(1)" to the filter expression.
 // Since the value expression is not trivial, we need to put quotation marks around it again.
 // The previous calls of getQuoted() created double quotation marks. The next one
 // will automatically use single quotation marks. So DOCUMENTS can clearly distinguish the end of the
 // value expression from the beginning or the end of an embedded phrase.
 return "SETMETHOD(1)" + fieldname + "~" + util.getQuoted(valueExpr);
}

// Example call
var colourfulCustomers = new Array("yellowfish", "greenhorse", "black frog", "blue panther");
var filterExpr = createFindOneFilter("company", colourfulCustomers);
var fileRS = new FileResultset("ftOrder", filterExpr, "orderDate+");

// Omitted:  loop through and process the docFiles ...
```


## Example 4: A numeric range filter


```javascript
var minVal =  context.convertNumericToString(3.1415,  context.getClientLang(), 4);
util.out(minVal);
var maxVal = context.convertNumericToString(10,  context.getClientLang());
util.out(maxVal);
var numRangeFilter = "total>=" +minVal + " AND total<=" + maxVal;
```


## Example 5: A date range filter


```javascript
function getDaysInMonth(month, year)
{
 if(month < 0 || month > 11)
  throw "Month is out of bounds (0..11)";

 switch(month) {
   case 1: // special case February
  if(year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0))
   return 29; // leap year
  else
   return 28;

   case 3:
   case 5:
   case 8:
   case 10:
  return 30; // any other short month

   default:
  return 31; // long month
 }
}

var minVal = new Date(); // get the actual date
minVal.setHours(0); // drop the time components
minVal.setMinutes(0);
minVal.setSeconds(0);
minVal.setMilliseconds(0);
var maxVal = new Date(minVal.getTime()); // copy the date object, not just the reference!

// move minVal to the first day and maxVal to the last day of the month
minVal.setDate(1);
maxVal.setDate(getDaysInMonth(maxVal.getMonth(), maxVal.getFullYear()));

// The DOCUMENTS search operations for scripting and SOAP usually expect date constants
// in the current user's locale format. Starting with Version 4.0d also a fixed format
// is allowed. The indicator of this format is a prepended "@".
var fmtPattern = "@yyyymmdd";
var dateRangeFilter = "orderDate>=" + util.convertDateToString(minVal, fmtPattern)
 + " AND orderDate<=" + util.convertDateToString(maxVal, fmtPattern);
```