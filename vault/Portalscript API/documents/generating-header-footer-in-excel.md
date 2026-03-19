---
title: "Generating header/footer in Excel | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/generating-header-footer-in-excel.html"
---

# Generating header/footer in Excel

Page headers/footers in Excel are generated using a string which is a
combination of plain text and control characters.

The available control characters are:

| Control | Category | Description |
| --- | --- | --- |
| &L | Justification | Left |
| &C |  | Center |
| &R |  | Right |
| &P | Information | Page number |
| &N |  | Total number of pages |
| &D |  | Date |
| &T |  | Time |
| &F |  | %File name |
| &A |  | Worksheet name |
| &Z |  | Workbook path |
| &fontsize | Font | Font size |
| &"font,style" |  | Font name and style |
| &U |  | Single underline |
| &E |  | Double underline |
| &S |  | Strikethrough |
| &X |  | Superscript |
| &Y |  | Subscript |

Text in headers and footers can be justified (aligned) to the left, center
and right by prefixing the text with the control characters `&L`, `&C` and
`&R`.

For example (with ASCII art representation of the results):


```javascript
worksheet1.setHeader("&LHello");

    //     ---------------------------------------------------------------
    //    |                                                               |
    //    | Hello                                                         |
    //    |                                                               |
```

For simple text, if you do not specify any justification the text will be
centered. However, you must prefix the text with `&C` if you specify a font
name or any other formatting:

You can have text in each of the justification regions:


```javascript
worksheet1.setHeader("&LCiao&CBello&RCielo");

    //     ---------------------------------------------------------------
    //    |                                                               |
    //    | Ciao                     Bello                          Cielo |
    //    |                                                               |
```

The information control characters act as variables that Excel will update
as the Excel file or worksheet changes. Times and dates are in the users
default format:


```javascript
worksheet1.setHeader("&CPage &P of &N");

    //     ---------------------------------------------------------------
    //    |                                                               |
    //    |                        Page 1 of 6                            |
    //    |                                                               |

    worksheet1.setHeader("&CUpdated at &T");

    //     ---------------------------------------------------------------
    //    |                                                               |
    //    |                    Updated at 12:30 PM                        |
    //    |                                                               |
```

You can specify the font size of a section of the text by prefixing it with
the control character `&n` where `n` is the font size:


```javascript
worksheet1.setHeader("&C&30Hello Big");
    worksheet2.setHeader("&C&10Hello Small");
```

You can specify the font of a section of the text by prefixing it with the
control sequence `&"font,style"` where `font` is a font name such
as "Courier New" or "Times New Roman" and `style` is one of the standard
Windows font styles: "Regular", "Italic", "Bold" or "Bold Italic".


```javascript
worksheet1.setHeader("&C&\"Courier New,Italic\"Hello");
    worksheet2.setHeader("&C&\"Courier New,Bold Italic\"Hello");
    worksheet3.setHeader("&C&\"Times New Roman,Regular\"Hello");
```

To include a single literal ampersand `&` in a header or footer you should
use a double ampersand `&&`:


```javascript
worksheet1.setHeader("&CCuriouser && Curiouser - Attorneys at Law");
```

**Note:**

The header or footer string must be less than 255 characters.
Strings longer than this will not be written.