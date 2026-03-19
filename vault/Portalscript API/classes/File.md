---
title: "File | Portalscript API"
source: "https://otris.software/documents/api/portalscript/classes/File.html"
---

# Class File

The File class allows full access to files stored on the Portal Server's filesystem.


## Index


### Methods

- close
- eof
- error
- ok
- read
- readBuffer
- readLine
- write
- writeBuffer


### Constructors

- constructor


## Methods


### close

`close(): boolean`

Close the file handle.

Note: Since file handles are so-called expensive ressources it is strongly recommanded to close each file handle you prior created in your scripts as soon as possible.

**Returns:** boolean

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** File.constructor


### eof

`eof(): boolean`

Report whether the file pointer points to EOF (end of file).

**Returns:** boolean

**Since:** ELC 3.50 / otrisPORTAL 5.0


### error

`error(): string`

Retrieve the error message of the last file access error as String.

The error message (as long there is one) and its language depend on the operating system used on the Portal Server's machine. If there is no error, the method returns null.

**Returns:** string

**Since:** ELC 3.50 / otrisPORTAL 5.0


### ok

`ok(): boolean`

Report whether an error occurred while accessing the file handle.

**Returns:** boolean

**Since:** ELC 3.50 / otrisPORTAL 5.0


### read

`read(charsNo?: number): string`

Retrieve a block of data from the file, containing a maximum of charsNo byte.

After the method has been performed, the data pointer of the file handle is moved right after the block which has been read. This might as well trigger the EOF flag, if the end of file has been reached.

**Parameters:**

- `charsNo`: `number` — integer value indicating how many characters (resp. byte in binary mode) should be read

**Returns:** string

**Since:** ELC 3.50 / otrisPORTAL 5.0


### readBuffer

`readBuffer( buffer: | ArrayBuffer | Int8Array<ArrayBuffer> | Uint8Array<ArrayBuffer> | Uint8ClampedArray<ArrayBuffer> | Int16Array<ArrayBuffer> | Uint16Array<ArrayBuffer> | Int32Array<ArrayBuffer> | Uint32Array<ArrayBuffer> | Float32Array<ArrayBuffer> | Float64Array<ArrayBuffer> | number[], charsNo?: number, ): number`

Retrieve a block of data from the file, containing a maximum of charsNo bytes. Store it in a given buffer.

**Parameters:**

- `buffer`: `ArrayBuffer` — A buffer where the read data is stored.
- `charsNo`: `number` — Numbers of characters/bytes to be read. If no value is provided, the whole file will be read, resp. the given buffer is filled.

**Returns:** number

**Since:** DOCUMENTS 6.2.0

**See:** File.writeBuffer


```ts
// Reading into a number array
var f = new File("c:\\tmp\\test.bin", "w+b");
const testData = [1, 2, 3, 4, 5];
const ret = f.writeBuffer(testData);
f.close();
if (ret)
{
  f = new File("c:\\tmp\\test.bin", "r+b");
  const readBuffer = new Array(testData.length);
  const bytes = f.readBuffer(readBuffer);
  util.out("Number of bytes read into the buffer: " + bytes); // 40
  f.close();
}
```


### readLine

`readLine(): string`

Retrieve one line of data from the file.

This method requires to have the file opened in text mode to work flawlessly, because the end of line is recognized by the linefeed character. After the readLine() method has been performed, the data pointer of the file handle is moved to the beginning of the next line of data.

**Returns:** string

**Since:** ELC 3.50 / otrisPORTAL 5.0


### write

`write(byteArray: number[]): boolean`

Write binary data to the file.

This requires to have the file handle opened with write access (meaning modes r+, w/w+, a/a+) and binary mode b.

**Parameters:**

- `byteArray`: `number` — Array of integers containing any data you want to write to the file

**Returns:** boolean

**Since:** DOCUMENTS 4.0

**See:** File.close

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
// Binary-Sample with Byte-Array
var fso = new File("c:\\tmp\\test.txt", "w+b");
if (!fso.ok())
   throw fso.error();
var byteArr = [];
byteArr.push(72);
byteArr.push(101);
byteArr.push(108);
byteArr.push(108);
byteArr.push(111);
byteArr.push(0);  // 0-Byte
byteArr.push(87);
byteArr.push(111);
byteArr.push(114);
byteArr.push(108);
byteArr.push(100);
fso.write(byteArr);
fso.close();
// result: test.txt: Hello{0-Byte}World
```


### writeBuffer

`writeBuffer( data: | string | ArrayBuffer | Int8Array<ArrayBuffer> | Uint8Array<ArrayBuffer> | Uint8ClampedArray<ArrayBuffer> | Int16Array<ArrayBuffer> | Uint16Array<ArrayBuffer> | Int32Array<ArrayBuffer> | Uint32Array<ArrayBuffer> | Float32Array<ArrayBuffer> | Float64Array<ArrayBuffer> | number[], charsNo?: number, ): boolean`

Writes data to the file.

**Parameters:**

- `data`: `string` — Data to be written to the file.
- `charsNo`: `number` — Number of characters or elements to be written

**Returns:** boolean

**See:** File.readBuffer

**Since:** ELC 3.50 / otrisPORTAL 5.0


```ts
var f = new File("c:\\tmp\\test.bin", "w+b");
var testData = new Int8Array([-1, -2, -3, -4, -5]);
const ret = f.writeBuffer(testData.buffer)
f.close();
if (ret)
{
  f = new File("c:\\tmp\\test.bin", "r+b");
  const buffer = new Int8Array(testData.length);
  const bytes = f.readBuffer(buffer, testData.length * testData.BYTES_PER_ELEMENT)
  util.out("Number of bytes read into the buffer: " + bytes); // 5
  f.close();
}
```


## Constructors


### constructor

`new File(pathFileName: string, mode: string, encoding?: string): File`

The constructor has the purpose to open a file handle to the desired file.

Once created, you cannot change the access mode of the file handle. If you need to change the access mode, you would have to close the file and reopen it.

Note: File handles are so-called expensive ressources, thus it is strongly recommanded to close them as soon as possible. Refer to File.close() for further information.

Since: ELC 3.50 / otrisPORTAL 5.0

**Parameters:**

- `pathFileName`: `string` — String value containing the complete path and filename of the desired file
- `mode`: `string` — String representing the access mode for the file handle. Allowed values are:

r read mode
r+ read mode plus write access; if the file does not yet exist, an error is raised
w write mode; if the file already exists, it will be completely overwritten
w+ write mode plus read access; if the file already exists, it will be completely overwritten
a write mode with append; if the file does not yet exist, it is created, otherwise the data you write to the file will be appended
a+ write mode with append plus read access; if the file does not yet exist, it is created, otherwise the data you write to the file will be appended
t open the file in text mode (ASCII 127)
b open the file in binary mode
- `encoding`: `string` — DocumentsOS: optional, should be set to "utf-8". Documents 5: not available.

Default: DocumentsOS: local encoding, Documents5: utf-8

**Returns:** File

**Since:** ELC 3.50 / otrisPORTAL 5.0

**See:** File.close


```ts
// Text-Sample
var fso = new File("c:\\tmp\\test.txt", "w+t");
if (!fso.ok())
   throw fso.error();
var int_val = 65;
fso.write("Hello world: ", int_val, "\n");
fso.close();
// result: test.txt: Hello world: 65
// Binary-Sample
var fso = new File("c:\\tmp\\test.txt", "w+b");
if (!fso.ok())
   throw fso.error();
var int_val = 65;
fso.write("Hello world: ", int_val);
fso.close();
// result: test.txt: Hello world: A
// Binary-Sample with Byte-Array
var fso = new File("c:\\tmp\\test.txt", "w+b");
if (!fso.ok())
   throw fso.error();
var byteArr = [];
byteArr.push(72);
byteArr.push(101);
byteArr.push(108);
byteArr.push(108);
byteArr.push(111);
byteArr.push(0);  // 0-Byte
byteArr.push(87);
byteArr.push(111);
byteArr.push(114);
byteArr.push(108);
byteArr.push(100);
fso.write(byteArr);
fso.close();
// result: test.txt: Hello{0-Byte}World
```


```ts
var f = new File("file.text", "w", "utf-8");
f.writeLine(String.fromCodePoint(0x1f642));
f.close();
```