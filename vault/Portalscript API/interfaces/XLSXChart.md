---
title: "XLSXChart | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/XLSXChart.html"
---

# Interface XLSXChart

**The XLSXChart class allows creating an Excel chart.**

An XLSXChart object represents an Excel chart. It provides functions for adding data series to the chart and for configuring the chart.
An XLSXChart object isn't created directly. Instead it is created by calling the [[Portalscript API/classes/XLSXWriter#addchart|XLSXWriter.addChart(number type)]]
function from an [[Portalscript API/classes/XLSXWriter]] object.

The basic procedure for adding a chart to a worksheet is:

- Create the chart with XLSXWriter.addChart().
- Add one or more data series to the chart which refers to data in the Excel file using XLSXChart.addSeries().
- Configure the chart with the other available functions shown below.
- Insert the chart into a worksheet using XLSXWorksheet.insertChart().


#### Since

DOCUMENTS 5.0e


#### See

[[Portalscript API/classes/XLSXWriter#addchart|XLSXWriter.addChart]]XLSXChart.addSeries[[Portalscript API/interfaces/XLSXWorksheet#insertchart|XLSXWorksheet.insertChart]][[Portalscript API/interfaces/XLSXChartsheet#insertchart|XLSXChartsheet.insertChart]]


#### Example


```ts
var writer = new XLSXWriter("c:\\tmp\\chart.xlsx");
var worksheet1 = writer.addWorksheet("Worksheet1");
// Write some data to the worksheet.
writeWorksheetData(worksheet1);
// Create a chart object.
var chart = writer.addChart(writer.CHART_COLUMN);
// Configure the chart. In simplest case we just add some value data series.
// The empty categories will default to 1 to 6 like in Excel.
var series1 = chart.addSeries("", "=Worksheet1!$A$1:$A$6");
var series2 = chart.addSeries("", "=Worksheet1!$B$1:$B$6");
var series3 = chart.addSeries("", "=Worksheet1!$C$1:$C$6");
chart.setTable(); // Turn on the data table
chart.setStyle(37);
chart.setTitle("Chart with Data Table");
// Insert the chart into the worksheet
worksheet1.insertChart(8, 1, chart);
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
        [5,  10,  15],
        [6,  12,  18]
    ];
    var row, col;
    for (row = 0; row < 6; row++)
        for (col = 0; col < 3; col++)
            worksheet.writeCell("number", row, col, data[row][col]);
}
```


`interface XLSXChart { addSeries(categories?: string, values?: string): XLSXChartSeries; getAxis(axisType: string): XLSXChartAxis; getLastError(): string; setStyle(styleId?: number): boolean; setTable(): boolean; setTitle(title: string): boolean; setTitleRange(sheetname: string, row: number, col: number): boolean; }`


## Index


### Methods

- addSeries
- getAxis
- getLastError
- setStyle
- setTable
- setTitle
- setTitleRange


## Methods


### addSeries

`addSeries(categories?: string, values?: string): XLSXChartSeries`

Add a data series to the current chart.

The series numbering and order in the Excel chart will be the same as the order in which they are added with this function.

**Parameters:**

- `categories`: `string` — Optional range of categories in the data series being a string formula like "=Worksheet1!$A$1:$A$6". The category is more or less the same as the X axis. In most Excel chart types the categories property is optional and the chart will just assume a sequential series from 1..n.
- `values`: `string` — Optional range of values in the data series being a string formula like "=Worksheet1!$A$1:$A$6". This parameter links the chart with the worksheet data that it displays.

**Returns:** XLSXChartSeries

**Since:** DOCUMENTS 5.0e

**See:** XLSXChartSeries.setCategories XLSXChartSeries.setValues


```ts
// The empty categories will default to 1 to 6 like in Excel.
var series1 = chart1.addSeries("", "=Worksheet1!$A$1:$A$6");
var series2 = chart1.addSeries("", "=Worksheet1!$B$1:$B$6");
// It is also possible to specify non-contiguous ranges:
chart2.addSeries("=(Sheet1!$A$1:$A$9,Sheet1!$A$14:$A$25)", "=(Sheet1!$B$1:$B$9,Sheet1!$B$14:$B$25)");
```


### getAxis

`getAxis(axisType: string): XLSXChartAxis`

Get an axis from the chart.

**Parameters:**

- `axisType`: `string` — The axis type: x or y.

**Returns:** XLSXChartAxis

**Since:** DOCUMENTS 5.0e


```ts
var xAxis = chart.getAxis("x");
```


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** DOCUMENTS 5.0e


### setStyle

`setStyle(styleId?: number): boolean`

Set the chart style type.

This function is used to set the style of the chart to one of the 48 built-in styles available on the "Design" tab in Excel 2007.

Note: In Excel 2013 the Styles section of the "Design" tab in Excel shows what were referred to as "Layouts" in previous versions of Excel. These layouts are not defined in the file format. They are a collection of modifications to the base chart type. They can not be defined by this function.

**Parameters:**

- `styleId`: `number` — Optional index representing the chart style, 1 - 48. The style index number is counted from 1 on the top left in the Excel dialog. The default style is 2.

Default: 2

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
chart.setStyle(37);
```


### setTable

`setTable(): boolean`

Add a data table below the horizontal axis with the data used to plot the chart.

Note: The data table can only be shown with Bar, Column, Line and Area charts.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


### setTitle

`setTitle(title: string): boolean`

Set the title of the chart.

**Parameters:**

- `title`: `string` — The chart title displayed above the chart. This parameter can also be a formula such as "=Worksheet1!$A$1" to point to a cell in the Excel file that contains the title. The Excel default is to have no chart title.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXChart.setTitleRange


```ts
chart1.setTitle("Test Results");
chart2.setTitle("=Worksheet1!$B$1");
```


### setTitleRange

`setTitleRange(sheetname: string, row: number, col: number): boolean`

Set a chart title formula using row and column values.

This function can be used to set a chart title range and is an alternative to using XLSXChart.setTitle(String title) and a string formula.

**Parameters:**

- `sheetname`: `string` — The name of the worksheet that contains the cell range.
- `row`: `number` — The zero indexed row number of the range.
- `col`: `number` — The zero indexed column number of the range.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
chart2.setTitleRange("Worksheet1", 0, 1);
```