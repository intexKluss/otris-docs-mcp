---
title: "XLSXWriter | Portalscript API"
source: "https://otris.software/documents/api/portalscript/classes/XLSXWriter.html"
---

# Class XLSXWriter

The XLSXWriter class allows creating files in the Excel 2007+ XLSX file format by use of the library Libxlsxwriter.

An XLSXWriter object represents an entire Excel document. It can be used to write text, numbers, formulas and hyperlinks to multiple worksheets.
It supports features such as:

- 100% compatible Excel XLSX files
- Excel formatting
- Merged cells
- Autofilters
- Charts
- Worksheet PNG/JPEG images

**Note:** However, the XLSXWriter can only create new files. It **CANNOT READ OR MODIFY** existing files.


## Index


### Properties

- version


### Methods

- activateChartsheet
- activateWorksheet
- addChart
- addChartsheet
- addFormat
- addWorksheet
- getChartsheetByName
- getFilePath
- getLastError
- getWorksheetByName
- hideChartsheet
- hideWorksheet
- save
- selectChartsheet
- selectWorksheet
- setProperties


### Background Patterns

These constants build an enumeration of the available fill patterns for the background of a cell.
**Since** DOCUMENTS 5.0e
**See**[[Portalscript API/interfaces/XLSXFormat#setbackgroundpattern|XLSXFormat.setBackgroundPattern(pattern)]]

- PATTERN_DARK_DOWN
- PATTERN_DARK_GRAY
- PATTERN_DARK_GRID
- PATTERN_DARK_HORIZONTAL
- PATTERN_DARK_TRELLIS
- PATTERN_DARK_UP
- PATTERN_DARK_VERTICAL
- PATTERN_GRAY_0625
- PATTERN_GRAY_125
- PATTERN_LIGHT_DOWN
- PATTERN_LIGHT_GRAY
- PATTERN_LIGHT_GRID
- PATTERN_LIGHT_HORIZONTAL
- PATTERN_LIGHT_TRELLIS
- PATTERN_LIGHT_UP
- PATTERN_LIGHT_VERTICAL
- PATTERN_MEDIUM_GRAY
- PATTERN_NONE
- PATTERN_SOLID


### Cell border styles

The constants build an enumeration of the available values for cell border styles.
**Since** DOCUMENTS 5.0e
**See**[[Portalscript API/interfaces/XLSXFormat#setborderstyle|XLSXFormat.setBorderStyle(border, style)]]

- BORDER_DASH_DOT
- BORDER_DASH_DOT_DOT
- BORDER_DASHED
- BORDER_DOTTED
- BORDER_DOUBLE
- BORDER_HAIR
- BORDER_MEDIUM
- BORDER_MEDIUM_DASH_DOT
- BORDER_MEDIUM_DASH_DOT_DOT
- BORDER_MEDIUM_DASHED
- BORDER_NONE
- BORDER_SLANT_DASH_DOT
- BORDER_THICK
- BORDER_THIN


### Chart types

These constants build an enumeration of the available chart types.
**Since** DOCUMENTS 5.0e
**See**XLSXWriter.addChart(type)

- CHART_AREA
- CHART_AREA_STACKED
- CHART_AREA_STACKED_PERCENT
- CHART_BAR
- CHART_BAR_STACKED
- CHART_BAR_STACKED_PERCENT
- CHART_COLUMN
- CHART_COLUMN_STACKED
- CHART_COLUMN_STACKED_PERCENT
- CHART_DOUGHNUT
- CHART_LINE
- CHART_PIE
- CHART_RADAR
- CHART_RADAR_FILLED
- CHART_RADAR_WITH_MARKERS
- CHART_SCATTER
- CHART_SCATTER_SMOOTH
- CHART_SCATTER_SMOOTH_WITH_MARKERS
- CHART_SCATTER_STRAIGHT
- CHART_SCATTER_STRAIGHT_WITH_MARKERS


### Constructors

- constructor


### Predefined values for common colors

The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.

**Note:** Black in HTML is actually `0x000000` but XLSXWriter.COLOR_BLACK is defined as `0x1000000`
to avoid confusion with an undefined or Zero color value. It is converted to the correct HTML code internally.

**Since** DOCUMENTS 5.0e

**See**[[Portalscript API/interfaces/XLSXWorksheet#settabcolor|XLSXWorksheet.setTabColor(color)]][[Portalscript API/interfaces/XLSXChartsheet#settabcolor|XLSXChartsheet.setTabColor(color)]][[Portalscript API/interfaces/XLSXFormat#setfontcolor|XLSXFormat.setFontColor(color)]][[Portalscript API/interfaces/XLSXFormat#setbordercolor|XLSXFormat.setBorderColor(border, color)]][[Portalscript API/interfaces/XLSXFormat#setforegroundcolor|XLSXFormat.setForegroundColor(color)]][[Portalscript API/interfaces/XLSXFormat#setbackgroundcolor|XLSXFormat.setBackgroundColor(color)]]

- COLOR_BLACK
- COLOR_BLUE
- COLOR_BROWN
- COLOR_CYAN
- COLOR_GRAY
- COLOR_GREEN
- COLOR_LIME
- COLOR_MAGENTA
- COLOR_NAVY
- COLOR_ORANGE
- COLOR_PINK
- COLOR_PURPLE
- COLOR_RED
- COLOR_SILVER
- COLOR_WHITE
- COLOR_YELLOW


### Text alignments

These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
**Since** DOCUMENTS 5.0e
**See**[[Portalscript API/interfaces/XLSXFormat#setalign|XLSXFormat.setAlign(alignment)]]

- ALIGN_CENTER
- ALIGN_CENTER_ACROSS
- ALIGN_DISTRIBUTED
- ALIGN_FILL
- ALIGN_JUSTIFY
- ALIGN_LEFT
- ALIGN_NONE
- ALIGN_RIGHT
- ALIGN_VERTICAL_BOTTOM
- ALIGN_VERTICAL_CENTER
- ALIGN_VERTICAL_DISTRIBUTED
- ALIGN_VERTICAL_JUSTIFY
- ALIGN_VERTICAL_TOP


## Properties


### version

`version: string`

String value containing the version number of the used library Libxlsxwriter.

**Since:** DOCUMENTS 5.0e


## Methods


### activateChartsheet

`activateChartsheet(chartsheet: any): boolean`

Make a chartsheet the active, i.e., visible chartsheet.

This function is used to specify which chartsheet is initially visible in a multi-sheet Excel document.

Note: More than one chartsheet can be selected via the XLSXWriter.selectChartsheet(chartsheet) function, however only one chartsheet can be active.

**Parameters:**

- `chartsheet`: `any` — The chartsheet to be updated can be specified as follows:

String containing the chartsheet name.
XLSXChartsheet object representing the chartsheet.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXWriter.activateWorksheet


```ts
writer.activateChartsheet(chartsheet2);
```


### activateWorksheet

`activateWorksheet(worksheet: any): boolean`

Make a worksheet the active, i.e., visible worksheet.

This function is used to specify which worksheet is initially visible in a multi-sheet Excel document.

Note: More than one worksheet can be selected via the XLSXWriter.selectWorksheet(worksheet) function, however only one worksheet can be active. The default active worksheet is the first worksheet.

**Parameters:**

- `worksheet`: `any` — The worksheet to be updated can be specified as follows:

String containing the worksheet name.
XLSXWorksheet object representing the worksheet.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXWriter.activateChartsheet


```ts
writer.activateWorksheet(worksheet2);
```


### addChart

`addChart(type: number): XLSXChart`

Create a new chart to be added to a worksheet/chartsheet.

**Parameters:**

- `type`: `number` — The type (from constant group Chart types) of chart to be created.

**Returns:** XLSXChart

**Since:** DOCUMENTS 5.0e


```ts
// Create a chart object.
var chart = writer.addChart(writer.CHART_COLUMN);
// Add data series to the chart.
chart.addSeries(NULL, "Worksheet2!$A$1:$A$5");
chart.addSeries(NULL, "Worksheet2!$B$1:$B$5");
chart.addSeries(NULL, "Worksheet2!$C$1:$C$5");
// Insert the chart into the worksheet
worksheet2.insertChart(6, 1, chart);
```


### addChartsheet

`addChartsheet(name?: string): XLSXChartsheet`

Add a new chartsheet to the current Excel document.

Note: At least one worksheet should be added to a new Excel file when creating a chartsheet in order to provide data for the chart.

**Parameters:**

- `name`: `string` — Optional chartsheet name. If it is empty the default Excel convention will be followed, i.e. Chart1, Chart2, etc. The chartsheet name must be a valid Excel chartsheet name, i.e. it must be less than 32 character and it cannot contain any of the characters: / \ [ ] : * ? In addition, you cannot use the same, case insensitive, sheetname for more than one worksheet, or chartsheet.

**Returns:** XLSXChartsheet

**Since:** DOCUMENTS 5.0e


```ts
var worksheet1 = writer.addWorksheet("Worksheet1");
var chartsheet1 = writer.addChartsheet("Chartsheet1");
```


### addFormat

`addFormat(name: string): XLSXWorksheet`

Create a new format object to format cells in worksheets.

**Parameters:**

- `name`: `string` — Unique format name.

**Returns:** XLSXWorksheet

**Since:** DOCUMENTS 5.0e


```ts
// Create the Format.
var format1 = writer.addFormat("format1");
// Set some of the format properties.
format1.setFontStyle("bold");
format1.setFontColor(writer.COLOR_RED); // see Predefined values for common colors
// Use the format to change the text format in a cell.
worksheet1.writeCell("string", 0, 0, "Hello", format1);
```


### addWorksheet

`addWorksheet(name?: string): XLSXWorksheet`

Add a new worksheet to the current Excel document.

Note: At least one worksheet should be added to a new Excel file.

**Parameters:**

- `name`: `string` — Optional worksheet name. If it is empty the default Excel convention will be followed, i.e. Sheet1, Sheet2, etc. The worksheet name must be a valid Excel worksheet name, i.e. it must be less than 32 character and it cannot contain any of the characters: / \ [ ] : * ? In addition, you cannot use the same, case insensitive, sheetname for more than one worksheet, or chartsheet.

**Returns:** XLSXWorksheet

**Since:** DOCUMENTS 5.0e


```ts
var worksheet1 = writer.addWorksheet("Worksheet1");
```


### getChartsheetByName

`getChartsheetByName(name: string): XLSXChartsheet`

Get a chartsheet object from its name.

**Parameters:**

- `name`: `string` — Chartsheet name.

**Returns:** XLSXChartsheet

**Since:** DOCUMENTS 5.0e


```ts
var chartsheet1 = writer.getChartsheetByName("Chartsheet1");
```


### getFilePath

`getFilePath(): string`

Get the file path of the created Excel file.

**Returns:** string

**Since:** DOCUMENTS 5.0e


```ts
util.out(writer.getFilePath());
```


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** DOCUMENTS 5.0e


### getWorksheetByName

`getWorksheetByName(name: string): XLSXWorksheet`

Get a worksheet object from its name.

**Parameters:**

- `name`: `string` — Worksheet name.

**Returns:** XLSXWorksheet

**Since:** DOCUMENTS 5.0e


```ts
var worksheet1 = writer.getWorksheetByName("Worksheet1");
```


### hideChartsheet

`hideChartsheet(chartsheet: any): boolean`

Hide the given chartsheet.

Note: A hidden chartsheet can not be activated or selected so this function is mutually exclusive with the XLSXWriter.activateChartsheet(chartsheet) and XLSXWriter.selectChartsheet(chartsheet) functions.

**Parameters:**

- `chartsheet`: `any` — The chartsheet to be updated can be specified as follows:

String containing the chartsheet name.
XLSXChartsheet object representing the chartsheet.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXWriter.hideWorksheet


```ts
writer.activateChartsheet(chartsheet2);
writer.hideChartsheet(chartsheet1);
```


### hideWorksheet

`hideWorksheet(worksheet: any): boolean`

Hide the given worksheet.

Note: A hidden worksheet can not be activated or selected so this function is mutually exclusive with the XLSXWriter.activateWorksheet(worksheet) and XLSXWriter.selectWorksheet(worksheet) functions. In addition, since the first worksheet will default to being the active worksheet, you cannot hide the first worksheet without activating another sheet.

**Parameters:**

- `worksheet`: `any` — The worksheet to be updated can be specified as follows:

String containing the worksheet name.
XLSXWorksheet object representing the worksheet.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXWriter.hideChartsheet


```ts
writer.hideWorksheet(worksheet2);
```


### save

`save(): boolean`

Write the Excel file to disk and free any memory allocated internally to the Excel file.

Note: After calling this function only both functions XLSXWriter.getFilePath() and XLSXWriter.getLastError() are available for the XLSXWriter object.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
if (!writer.save())
  util.out(writer.getLastError());
```


### selectChartsheet

`selectChartsheet(chartsheet: any): boolean`

Set a chartsheet tab as selected.

This function is used to indicate that a chartsheet is selected in a multi-sheet Excel document.

Note: A selected chartsheet has its tab highlighted. Selecting chartsheets is a way of grouping them together so that, for example, several chartsheets could be printed in one go. A chartsheet that has been activated via the XLSXWriter.activateChartsheet(chartsheet) function will also appear as selected.

**Parameters:**

- `chartsheet`: `any` — The chartsheet to be updated can be specified as follows:

String containing the chartsheet name.
XLSXChartsheet object representing the chartsheet.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXWriter.selectWorksheet


```ts
writer.selectChartsheet("Chartsheet2");
```


### selectWorksheet

`selectWorksheet(worksheet: any): boolean`

Set a worksheet tab as selected.

This function is used to indicate that a worksheet is selected in a multi-sheet Excel document.

Note: A selected worksheet has its tab highlighted. Selecting worksheets is a way of grouping them together so that, for example, several worksheets could be printed in one go. A worksheet that has been activated via the XLSXWriter.activateWorksheet(worksheet) function will also appear as selected.

**Parameters:**

- `worksheet`: `any` — The worksheet to be updated can be specified as follows:

String containing the worksheet name.
XLSXWorksheet object representing the worksheet.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e

**See:** XLSXWriter.selectChartsheet


```ts
writer.selectWorksheet(worksheet2);
```


### setProperties

`setProperties( title: string, subject: string, author: string, manager: string, company: string, category: string, keywords: string, comments: string, status: string, hyperlinkBase: string, ): boolean`

Set the document properties.

This function can be used to set the document properties of the current Excel document. These properties are visible in Excel (e.g. under File -> Information -> Properties in Excel 2013) and are also available to external applications that read or index windows files.

**Parameters:**

- `title`: `string` — Title of the Excel document.
- `subject`: `string` — Optional subject of the Excel document.
- `author`: `string` — Optional author of the Excel document.
- `manager`: `string` — Optional manager field of the Excel document.
- `company`: `string` — Optional company field of the Excel document.
- `category`: `string` — Optional category of the Excel document.
- `keywords`: `string` — Optional keywords of the Excel document.
- `comments`: `string` — Optional comment of the Excel document.
- `status`: `string` — Optional status of the Excel document.
- `hyperlinkBase`: `string` — Optional hyperlink base url of the Excel document.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e


```ts
writer.setProperties("This is an example spreadsheet");
```


## Background Patterns


### PATTERN_DARK_DOWN

`PATTERN_DARK_DOWN: number`

Dark diagonal stripe pattern


### PATTERN_DARK_GRAY

`PATTERN_DARK_GRAY: number`

Dark gray pattern


### PATTERN_DARK_GRID

`PATTERN_DARK_GRID: number`

Dark grid pattern


### PATTERN_DARK_HORIZONTAL

`PATTERN_DARK_HORIZONTAL: number`

Dark horizontal line pattern


### PATTERN_DARK_TRELLIS

`PATTERN_DARK_TRELLIS: number`

Dark trellis pattern


### PATTERN_DARK_UP

`PATTERN_DARK_UP: number`

Reverse dark diagonal stripe pattern


### PATTERN_DARK_VERTICAL

`PATTERN_DARK_VERTICAL: number`

Dark vertical line pattern


### PATTERN_GRAY_0625

`PATTERN_GRAY_0625: number`

6.25% gray pattern


### PATTERN_GRAY_125

`PATTERN_GRAY_125: number`

12.5% gray pattern


### PATTERN_LIGHT_DOWN

`PATTERN_LIGHT_DOWN: number`

Light diagonal stripe pattern


### PATTERN_LIGHT_GRAY

`PATTERN_LIGHT_GRAY: number`

Light gray pattern


### PATTERN_LIGHT_GRID

`PATTERN_LIGHT_GRID: number`

Light grid pattern


### PATTERN_LIGHT_HORIZONTAL

`PATTERN_LIGHT_HORIZONTAL: number`

Light horizontal Line pattern


### PATTERN_LIGHT_TRELLIS

`PATTERN_LIGHT_TRELLIS: number`

Light trellis pattern


### PATTERN_LIGHT_UP

`PATTERN_LIGHT_UP: number`

Reverse light diagonal stripe pattern


### PATTERN_LIGHT_VERTICAL

`PATTERN_LIGHT_VERTICAL: number`

Light vertical line pattern


### PATTERN_MEDIUM_GRAY

`PATTERN_MEDIUM_GRAY: number`

Medium gray pattern


### PATTERN_NONE

`PATTERN_NONE: number`

Empty pattern


### PATTERN_SOLID

`PATTERN_SOLID: number`

Solid pattern


## Cell border styles


### BORDER_DASH_DOT

`BORDER_DASH_DOT: number`

Dash-dot border style


### BORDER_DASH_DOT_DOT

`BORDER_DASH_DOT_DOT: number`

Dash-dot-dot border style


### BORDER_DASHED

`BORDER_DASHED: number`

Dashed border style


### BORDER_DOTTED

`BORDER_DOTTED: number`

Dotted border style


### BORDER_DOUBLE

`BORDER_DOUBLE: number`

Double border style


### BORDER_HAIR

`BORDER_HAIR: number`

Hair border style


### BORDER_MEDIUM

`BORDER_MEDIUM: number`

Medium border style


### BORDER_MEDIUM_DASH_DOT

`BORDER_MEDIUM_DASH_DOT: number`

Medium dash-dot border style


### BORDER_MEDIUM_DASH_DOT_DOT

`BORDER_MEDIUM_DASH_DOT_DOT: number`

Medium dash-dot-dot border style


### BORDER_MEDIUM_DASHED

`BORDER_MEDIUM_DASHED: number`

Medium dashed border style


### BORDER_NONE

`BORDER_NONE: number`

No border


### BORDER_SLANT_DASH_DOT

`BORDER_SLANT_DASH_DOT: number`

Slant dash-dot border style


### BORDER_THICK

`BORDER_THICK: number`

hick border style


### BORDER_THIN

`BORDER_THIN: number`

Thin border style


## Chart types


### CHART_AREA

`CHART_AREA: number`

Area chart


### CHART_AREA_STACKED

`CHART_AREA_STACKED: number`

Area chart - stacked


### CHART_AREA_STACKED_PERCENT

`CHART_AREA_STACKED_PERCENT: number`

Area chart - percentage stacked


### CHART_BAR

`CHART_BAR: number`

Bar chart


### CHART_BAR_STACKED

`CHART_BAR_STACKED: number`

Bar chart - stacked


### CHART_BAR_STACKED_PERCENT

`CHART_BAR_STACKED_PERCENT: number`

Bar chart - percentage stacked


### CHART_COLUMN

`CHART_COLUMN: number`

Column chart


### CHART_COLUMN_STACKED

`CHART_COLUMN_STACKED: number`

Column chart - stacked


### CHART_COLUMN_STACKED_PERCENT

`CHART_COLUMN_STACKED_PERCENT: number`

Column chart - percentage stacked


### CHART_DOUGHNUT

`CHART_DOUGHNUT: number`

Doughnut chart


### CHART_LINE

`CHART_LINE: number`

Line chart


### CHART_PIE

`CHART_PIE: number`

Pie chart


### CHART_RADAR

`CHART_RADAR: number`

Radar chart


### CHART_RADAR_FILLED

`CHART_RADAR_FILLED: number`

Radar chart - filled


### CHART_RADAR_WITH_MARKERS

`CHART_RADAR_WITH_MARKERS: number`

Radar chart - with markers


### CHART_SCATTER

`CHART_SCATTER: number`

Scatter chart


### CHART_SCATTER_SMOOTH

`CHART_SCATTER_SMOOTH: number`

Scatter chart - smooth


### CHART_SCATTER_SMOOTH_WITH_MARKERS

`CHART_SCATTER_SMOOTH_WITH_MARKERS: number`

Scatter chart - smooth with markers


### CHART_SCATTER_STRAIGHT

`CHART_SCATTER_STRAIGHT: number`

Scatter chart - straight


### CHART_SCATTER_STRAIGHT_WITH_MARKERS

`CHART_SCATTER_STRAIGHT_WITH_MARKERS: number`

Scatter chart - straight with markers


## Constructors


### constructor

`new XLSXWriter(filename: string): XLSXWriter`

Create a new XLSXWriter object with a given filename.

Note: When specifying a filename it is recommended that you use an .xlsx extension or Excel will generate a warning when opening the file.

Since: DOCUMENTS 5.0e

**Parameters:**

- `filename`: `string` — The name of the new Excel file to create.

**Returns:** XLSXWriter

**Since:** DOCUMENTS 5.0e


```ts
var writer = new XLSXWriter("c:\\tmp\\writer.xlsx");
// Add a worksheet with a user defined sheet name.
var worksheet1 = writer.addWorksheet("Worksheet1");
// Add a cell format.
var format1 = writer.addFormat("format1");
// Set the bold property for the format.
format1.setFontStyle("bold");
// Set the alignment for the format
format1.setAlign(writer.ALIGN_CENTER);
// Write formatted data.
worksheet1.writeCell("string", 0, 0, "Hello Excel", format1);
// Change the row height
worksheet1.setRow(0, 20);
// Change the column width
worksheet1.setColumn(0, 0, 15);
// Add an other worksheet with a user defined sheet name.
var worksheet2 = writer.addWorksheet("Worksheet2");
// Write some data to the worksheet.
writeWorksheetData(worksheet2);
// Create a chart object.
var chart = writer.addChart(writer.CHART_COLUMN);
// Configure the chart. In simplest case we just add some value data
// series. The empty categories will default to 1 to 5 like in Excel.
var series1 = chart.addSeries("", "=Worksheet2!$A$1:$A$5");
var series2 = chart.addSeries("", "=Worksheet2!$B$1:$B$5");
var series3 = chart.addSeries("", "=Worksheet2!$C$1:$C$5");
// Insert the chart into the worksheet
worksheet2.insertChart(6, 1, chart);
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


## Predefined values for common colors


### COLOR_BLACK

`COLOR_BLACK: number`

Black defined as 0x1000000


### COLOR_BLUE

`COLOR_BLUE: number`

Blue defined as 0x0000FF


### COLOR_BROWN

`COLOR_BROWN: number`

Brown defined as 0x800000


### COLOR_CYAN

`COLOR_CYAN: number`

Cyan defined as 0x00FFFF


### COLOR_GRAY

`COLOR_GRAY: number`

Gray defined as 0x808080


### COLOR_GREEN

`COLOR_GREEN: number`

Green defined as 0x008000


### COLOR_LIME

`COLOR_LIME: number`

Lime defined as 0x00FF00


### COLOR_MAGENTA

`COLOR_MAGENTA: number`

Magenta defined as 0xFF00FF


### COLOR_NAVY

`COLOR_NAVY: number`

Navy defined as 0x000080


### COLOR_ORANGE

`COLOR_ORANGE: number`

Orange defined as 0xFF6600


### COLOR_PINK

`COLOR_PINK: number`

Pink defined as 0xFF00FF


### COLOR_PURPLE

`COLOR_PURPLE: number`

Purple defined as 0x800080


### COLOR_RED

`COLOR_RED: number`

Red defined as 0xFF0000


### COLOR_SILVER

`COLOR_SILVER: number`

Silver defined as 0xC0C0C0


### COLOR_WHITE

`COLOR_WHITE: number`

White defined as 0xFFFFFF


### COLOR_YELLOW

`COLOR_YELLOW: number`

Yellow defined as 0xFFFF00


## Text alignments


### ALIGN_CENTER

`ALIGN_CENTER: number`

Center horizontal alignment


### ALIGN_CENTER_ACROSS

`ALIGN_CENTER_ACROSS: number`

Center Across horizontal alignment


### ALIGN_DISTRIBUTED

`ALIGN_DISTRIBUTED: number`

Distributed horizontal alignment


### ALIGN_FILL

`ALIGN_FILL: number`

Cell fill horizontal alignment


### ALIGN_JUSTIFY

`ALIGN_JUSTIFY: number`

Justify horizontal alignment


### ALIGN_LEFT

`ALIGN_LEFT: number`

Left horizontal alignment


### ALIGN_NONE

`ALIGN_NONE: number`

No alignment. Cell will use Excel's default for the data type


### ALIGN_RIGHT

`ALIGN_RIGHT: number`

Right horizontal alignment


### ALIGN_VERTICAL_BOTTOM

`ALIGN_VERTICAL_BOTTOM: number`

Bottom vertical alignment


### ALIGN_VERTICAL_CENTER

`ALIGN_VERTICAL_CENTER: number`

Center vertical alignment


### ALIGN_VERTICAL_DISTRIBUTED

`ALIGN_VERTICAL_DISTRIBUTED: number`

Distributed vertical alignment


### ALIGN_VERTICAL_JUSTIFY

`ALIGN_VERTICAL_JUSTIFY: number`

Justify vertical alignment


### ALIGN_VERTICAL_TOP

`ALIGN_VERTICAL_TOP: number`

Top vertical alignment