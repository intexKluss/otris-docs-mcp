---
title: "XLSXChartAxis | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/XLSXChartAxis.html"
---

# Interface XLSXChartAxis

**The XLSXChartAxis class represents the Excel chart axis.**

An XLSXChartAxis object isn't created directly. You can get it using the [[Portalscript API/interfaces/XLSXChart#getaxis|XLSXChart.getAxis(String axisType)]] function.
It provides functions for configuring a chart axis.


#### Since

DOCUMENTS 5.0e


#### Example


```ts
var writer = new XLSXWriter("c:\\tmp\\chartAxis.xlsx");
var worksheet1 = writer.addWorksheet("Worksheet1");
// Write some data to the worksheet.
writeWorksheetData(worksheet1);
// Create a chart object.
var chart = writer.addChart(writer.CHART_COLUMN);
// Configure the chart. In simplest case we just add some value data series.
// The empty categories will default to 1 to 6 like in Excel.
var series1 = chart.addSeries("", "=Worksheet1!$A$2:$A$7");
var series2 = chart.addSeries("", "=Worksheet1!$B$2:$B$7");
var series3 = chart.addSeries("", "=Worksheet1!$C$2:$C$7");
// Get the X axis
var xAxis = chart.getAxis("x");
xAxis.setName("Months");
xAxis.setLabelPosition("high");
xAxis.setLabelAlign("right");
// Get the Y axis
var yAxis = chart.getAxis("y");
yAxis.setName("Earnings (Millions)");
yAxis.setNumberFormat("$#,##0.00");
chart.setTitle("A sample chart");
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
    for (row = 1; row < 7; row++)
        for (col = 0; col < 3; col++)
            worksheet.writeCell("number", row, col, data[row-1][col]);
}
```


`interface XLSXChartAxis { getLastError(): string; setLabelAlign(align: string): boolean; setLabelPosition(position: string): boolean; setName(name: string): boolean; setNameRange(sheetname: string, row: number, col: number): boolean; setNumberFormat(numFormat: string): boolean; setReverse(): boolean; }`


## Index


### Methods

- getLastError
- setLabelAlign
- setLabelPosition
- setName
- setNameRange
- setNumberFormat
- setReverse


## Methods


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** DOCUMENTS 5.0e


### setLabelAlign

`setLabelAlign(align: string): boolean`

Set the alignment of the axis labels.

Position the category axis labels for the chart. The labels are the numbers, or strings or dates, on the axis that indicate the categories of the axis.

Note: This function is applicable to ** category axes ** only.

**Parameters:**

- `align`: `string` — The axis label alignment with the following available values:

center
left
right

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
xAxis.setLabelAlign("right");
```


### setLabelPosition

`setLabelPosition(position: string): boolean`

Position the axis labels.

Position the axis labels for the chart. The labels are the numbers, or strings or dates, on the axis that indicate the categories or values of the axis.

**Parameters:**

- `position`: `string` — Option to position the axis labels. The following values are available:

nextTo: Position the axis labels next to the axis. The default.
high: Position the axis labels at the top of the chart, for horizontal axes, or to the right for vertical axes.
low: Position the axis labels at the bottom of the chart, for horizontal axes, or to the left for vertical axes.
none: Turn off the the axis labels.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
yAxis.setLabelPosition("high");
```


### setName

`setName(name: string): boolean`

Set the name caption of the chart axis.

**Parameters:**

- `name`: `string` — String containing the name caption of the axis or a formula such as "=Worksheet1!$A$1" to point to a cell in the Excel file that contains the name.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXChartAxis.setNameRange


```ts
xAxis.setName("Months");
yAxis.setName("=Worksheet1!$A$1");
```


### setNameRange

`setNameRange(sheetname: string, row: number, col: number): boolean`

Set a chart axis name formula using row and column values.

This function can be used to set an axis name range and is an alternative to using XLSXChartAxis.setName(String name) and a string formula.

**Parameters:**

- `sheetname`: `string` — The name of the worksheet that contains the cell range.
- `row`: `number` — The zero indexed row number of the range.
- `col`: `number` — The zero indexed column number of the range.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
// Set the name formula programmatically
  yAxis.setNameRange("Worksheet1", 0, 0);
```


### setNumberFormat

`setNumberFormat(numFormat: string): boolean`

Set the format of the numbers on the axis.

**Parameters:**

- `numFormat`: `string` — The number format string being similar to the parameter numFormat of the function XLSXFormat.setNumberFormat(String numFormat).

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
yAxis.setNumberFormat("$#,##0.00");
```


### setReverse

`setReverse(): boolean`

Reverse the order of the axis categories or values.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e