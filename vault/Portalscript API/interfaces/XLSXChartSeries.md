---
title: "XLSXChartSeries | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/XLSXChartSeries.html"
---

# Interface XLSXChartSeries

**The XLSXChartSeries class represents the Excel chart data series.**

An XLSXChartSeries object is created using the [[Portalscript API/interfaces/XLSXChart#addseries|XLSXChart.addSeries()]] function. It provides functions for configuring the chart series.


#### Since

DOCUMENTS 5.0e


#### See

[[Portalscript API/interfaces/XLSXChart#addseries|XLSXChart.addSeries]]


#### Example


```ts
var writer = new XLSXWriter("c:\\tmp\\chartseries.xlsx");
var worksheet1 = writer.addWorksheet("Worksheet1");
worksheet1.writeCell("string", 0, 0, "Series I");
worksheet1.writeCell("string", 0, 1, "Series II");
worksheet1.writeCell("string", 0, 2, "Series III");
// Write some data to the worksheet.
writeWorksheetData(worksheet1);
// Create a chart object.
var chart = writer.addChart(writer.CHART_COLUMN);
// Configure the chart. In simplest case we just add some value data series.
// The empty categories will default to 1 to 6 like in Excel.
var series1 = chart.addSeries("", "=Worksheet1!$A$2:$A$7");
var series2 = chart.addSeries("", "=Worksheet1!$B$2:$B$7");
var series3 = chart.addSeries();
// Configure the series using a syntax that is easier to define programmatically.
series3.setCategories("Worksheet1", 1, 0, 6, 0); // "=Worksheet1!$A$2:$A$7"
series3.setValues("Worksheet1", 1, 2, 6, 2); // "=Worksheet1!$C$2:$C$7"
series1.setName("Series I");
series2.setName("=Worksheet1!$B$1");
series3.setNameRange("Worksheet1", 0, 2);
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


`interface XLSXChartSeries { getLastError(): string; setCategories( sheetname: string, firstRow: number, firstCol: number, lastRow: number, lastCol: number, ): boolean; setName(name: string): boolean; setNameRange(sheetname: string, row: number, col: number): boolean; setValues( sheetname: string, firstRow: number, firstCol: number, lastRow: number, lastCol: number, ): boolean; }`


## Index


### Methods

- getLastError
- setCategories
- setName
- setNameRange
- setValues


## Methods


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** DOCUMENTS 5.0e


### setCategories

`setCategories( sheetname: string, firstRow: number, firstCol: number, lastRow: number, lastCol: number, ): boolean`

Set a series "categories" range using row and column values.

The categories and values of a chart data series are generally set using the XLSXChart.addSeries(String categories, String values) function and Excel range formulas like "=Worksheet1!$A$2:$A$7". This function is an alternative method that is easier to generate programmatically. It requires that you do not set the optional parameters (categories and values) in XLSXChart.addSeries() and then set them using row and column values in this function and XLSXChartSeries.setValues().

**Parameters:**

- `sheetname`: `string` — The name of the worksheet that contains the data range.
- `firstRow`: `number` — The first row of the range. (All zero indexed.)
- `firstCol`: `number` — The first column of the range.
- `lastRow`: `number` — The last row of the range.
- `lastCol`: `number` — The last col of the range.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXChartSeries.setValues


```ts
var series3 = chart.addSeries();
// Configure the series using a syntax that is easier to define programmatically.
  series3.setCategories("Worksheet1", 0, 0, 5, 0); // "=Worksheet1!$A$1:$A$6"
  series3.setValues("Worksheet1", 0, 2, 5, 2); // "=Worksheet1!$C$1:$C$6"
```


### setName

`setName(name: string): boolean`

Set the name of a chart series range.

The series name in Excel is displayed in the chart legend and in the formula bar. The name property is optional and if it isn't supplied it will default to Series 1..n.

**Parameters:**

- `name`: `string` — String containing the series name or a formula such as "=Worksheet1!$A$1" to point to a cell in the Excel file that contains the name.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXChartSeries.setNameRange


```ts
series1.setName("Quarterly budget data");
series2.setName("=Worksheet1!$A$1");
```


### setNameRange

`setNameRange(sheetname: string, row: number, col: number): boolean`

Set a series name formula using row and column values.

This function can be used to set a series name range and is an alternative to using XLSXChartSeries.setName(String name) and a string formula.

**Parameters:**

- `sheetname`: `string` — The name of the worksheet that contains the cell range.
- `row`: `number` — The zero indexed row number of the range.
- `col`: `number` — The zero indexed column number of the range.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
// Set the name formula programmatically
  series2.setNameRange("Worksheet1", 0, 0);
```


### setValues

`setValues( sheetname: string, firstRow: number, firstCol: number, lastRow: number, lastCol: number, ): boolean`

Set a series "values" range using row and column values.

This function is an alternative method to configure the series using a syntax that is easier to define programmatically. See the documentation for XLSXChartSeries.setCategories().

**Parameters:**

- `sheetname`: `string` — The name of the worksheet that contains the data range.
- `firstRow`: `number` — The first row of the range. (All zero indexed.)
- `firstCol`: `number` — The first column of the range.
- `lastRow`: `number` — The last row of the range.
- `lastCol`: `number` — The last col of the range.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXChartSeries.setCategories