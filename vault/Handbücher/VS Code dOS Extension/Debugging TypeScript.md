---
title: "VS Code dOS Extension"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/debugging/typescript.html"
---

### Debugging TypeScript

*Note:* Debugging TypeScript is generally possible, but it does not always work reliably. There are still some improvements for the extension on the todo list.

To debug `.ts` files in VS Code, you also need to generate source maps during compilation. To do this, enable source map generation in your `tsconfig.json`:


```js
{
  // ...
  "sourceMap": true,
  // ...
}
```

{
  // ...
  "sourceMap": true,
  // ...
}This will also generate `.js.map` files.

Additionally, you need to set the `remoteRoot`, `localRoot`, and `sourceMaps` options in `launch.json`:


```json
{
    "request": "attach",
    "type": "node",
    "name": "documentsOS attach script",
    "address": "localhost",
    "port": 9229,
    "remoteRoot": "/relations/db", // replace 'relations' with your own tenant name
    "localRoot": "${workspaceFolder}/src/jscript/", // location of the generated .js files
    "sourceMaps": true
}
```

{
    "request": "attach",
    "type": "node",
    "name": "documentsOS attach script",
    "address": "localhost",
    "port": 9229,
    "remoteRoot": "/relations/db", // replace 'relations' with your own tenant name
    "localRoot": "${workspaceFolder}/src/jscript/", // location of the generated .js files
    "sourceMaps": true
}If you now run "Upload + Debug" on a `.ts` file in VS Code, you can debug directly in the `.ts` file.


![Debug TS-Script](../assets/scripting/vscode-debug-ts-file.png)

Abb. 8 - Debug TypeScript