---
title: "XLSXChartsheet | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/XLSXChartsheet.html"
---

# Interface XLSXChartsheet

**The XLSXChartsheet class represents the Excel chartsheet.**

An Excel chartsheet is a type of worksheet that only contains a chart. An XLSXChartsheet object isn't created directly.
Instead it is created by calling the [[Portalscript API/classes/XLSXWriter#addchartsheet|XLSXWriter.addChartsheet(String name)]] function from an [[Portalscript API/classes/XLSXWriter]] object.
A chartsheet functions as a worksheet and not as a chart. In order to have it display data a chart must be created and added to the chartsheet.
The data for the chartsheet chart must be contained on a separate worksheet. That is why it is always created in conjunction with at least one data worksheet.


#### Since

DOCUMENTS 5.0e


#### Example


```ts
var writer = new XLSXWriter("c:\\tmp\\chartsheet.xlsx");
// Add an worksheet with a user defined sheet name.
var worksheet1 = writer.addWorksheet("Worksheet1");
// Write some data to the worksheet.
writeWorksheetData(worksheet1);
// Create a chart object.
var chart = writer.addChart(writer.CHART_COLUMN);
// Configure the chart. In simplest case we just add some value data
// series. The `null` categories will default to 1 to 5 like in Excel.
var series1 = chart.addSeries("", "=Worksheet1!$A$1:$A$5");
var series2 = chart.addSeries("", "=Worksheet1!$B$1:$B$5");
var series3 = chart.addSeries("", "=Worksheet1!$C$1:$C$5");
// Add a chartsheet with a user defined name
var chartsheet1 = writer.addChartsheet("Chartsheet1");
// Insert the chart into the chartsheet
chartsheet1.insertChart(chart);
// Save the file.
if (!writer.save())
    throw writer.getLastError();

function writeWorksheetData(worksheet)
{
    var data = [
        // Three columns of data.
        [1,   2,   3],
        [2,   4,   6],
        [3,   6,   9],
        [4,   8,  12],
        [5,  10,  15]
    ];
    var row, col;
    for (row = 0; row < 5; row++)
        for (col = 0; col < 3; col++)
            worksheet.writeCell("number", row, col, data[row][col]);
}
```


`interface XLSXChartsheet { getLastError(): string; insertChart(chart: XLSXChart): boolean; setFirstSheet(): boolean; setFooter(footer: string, margin?: number): boolean; setHeader(header: string, margin?: number): boolean; setLandscape(): boolean; setMargins( left?: number, right?: number, top?: number, bottom?: number, ): boolean; setPaperType(type?: number): boolean; setPortrait(): boolean; setTabColor(color: number): boolean; setZoom(scale?: number): boolean; }`


## Index


### Methods

- getLastError
- insertChart
- setFirstSheet
- setFooter
- setHeader
- setLandscape
- setMargins
- setPaperType
- setPortrait
- setTabColor
- setZoom


## Methods


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** DOCUMENTS 5.0e


### insertChart

`insertChart(chart: XLSXChart): boolean`

Insert a chart into the current chartsheet.

This function can be used to insert an XLSXChart object into the chartsheet. The XLSXChart object must be created first using the XLSXWriter.addChart(type) function and configured using the functions from the class XLSXChart.

Note: A chart may only be inserted into a chartsheet or a worksheet once. If several similar charts are required then each one must be created separately with XLSXWriter.addChart(type).

**Parameters:**

- `chart`: `XLSXChart` — An XLSXChart object created via XLSXWriter.addChart(type).

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXWorksheet.insertChart


```ts
// Create a chart object.
var chart = writer.addChart(writer.CHART_COLUMN);
// Add some data series to the chart.
var series1 = chart.addSeries("", "Worksheet1!$A$1:$A$5");
var series2 = chart.addSeries("", "Worksheet1!$B$1:$B$5");
var series3 = chart.addSeries("", "Worksheet1!$C$1:$C$5");
// Insert the chart into the chartsheet.
if (!chartsheet1.insertChart(chart))
  throw chartsheet1.getLastError();
```


### setFirstSheet

`setFirstSheet(): boolean`

Set current chartsheet as the first visible sheet tab.

The XLSXWriter.activateChartsheet(chartsheet) function determines which chartsheet is initially selected. However, if there are a large number of chartsheets the selected chartsheet may not appear on the screen. To avoid this you can select the leftmost visible chartsheet tab using this function. The default value is the first chartsheet.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
chartsheet19.setFirstSheet(); // chartsheet19: First visible chartsheet tab.
writer.activateChartsheet(Chartsheet20); // chartsheet20: First visible chartsheet.
```


### setFooter

`setFooter(footer: string, margin?: number): boolean`

Set the printed page footer caption.

Footers are generated using a string which is a combination of plain text and control characters (see Generating header/footer for more details).

**Parameters:**

- `footer`: `string` — The footer string.
- `margin`: `number` — Optional footer margin in inches. Excel default is 0.3.

Default: 0.3

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
if (!chartsheet1.setFooter("some text", 0.2))
  throw chartsheet1.getLastError();
```


### setHeader

`setHeader(header: string, margin?: number): boolean`

Set the printed page header caption.

Headers are generated using a string which is a combination of plain text and control characters (see Generating header/footer for more details).

**Parameters:**

- `header`: `string` — The header string.
- `margin`: `number` — Optional header margin in inches. Excel default is 0.3.

Default: 0.3

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
if (!chartsheet1.setHeader("some text", 0.2))
  throw chartsheet1.getLastError();
```


### setLandscape

`setLandscape(): boolean`

Set the page orientation as landscape.

This function is used to set the orientation of the chartsheet's printed page to landscape.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


### setMargins

`setMargins( left?: number, right?: number, top?: number, bottom?: number, ): boolean`

Set the worksheet margins for the printed page.

This function is used to set the margins of the chartsheet when it is printed. The units are in inches. Specifying -1 for any parameter will give the default Excel value as shown below.

**Parameters:**

- `left`: `number` — Optional left margin in inches. Excel default is 0.7. Default: -1
- `right`: `number` — Optional right margin in inches. Excel default is 0.7.

Default: -1
- `top`: `number` — Optional top margin in inches. Excel default is 0.75.

Default: -1
- `bottom`: `number` — Optional bottom margin in inches. Excel default is 0.75.

Default: -1

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
chartsheet1.setMargins(1.3, 1.2, -1, -1);
```


### setPaperType

`setPaperType(type?: number): boolean`

Set the paper format for the printed output of the current chartsheet.

**Parameters:**

- `type`: `number` — Optional integer paper format type. If you do not specify a paper type the chartsheet will print using the printer's default paper style. See XLSXWorksheet.setPaperType(type) for a full list of available paper sizes.

Default: 0

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
chartsheet1.setPaperType(1);  // US Letter
chartsheet2.setPaperType(9);  // A4
```


### setPortrait

`setPortrait(): boolean`

Set the page orientation as portrait.

This function is used to set the orientation of the chartsheet's printed page to portrait. The default chartsheet orientation is portrait, so this function isn't generally required.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


### setTabColor

`setTabColor(color: number): boolean`

Set the color of the current chartsheet tab.

**Parameters:**

- `color`: `number` — The desired tab color specified using a HTML style RGB integer value.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
chartsheet1.setTabColor(0xFF9900); // Orange
chartsheet1.setTabColor(writer.COLOR_RED); // from Predefined values for common colors
```


### setZoom

`setZoom(scale?: number): boolean`

Set the chartsheet zoom factor.

The default zoom factor is 100.

Note: This function does not affect the scale of the printed page.

**Parameters:**

- `scale`: `number` — Optional integer chartsheet zoom factor in the range 10 <= zoom <= 400.

Default: 100

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
chartsheet1.setZoom(50);
```