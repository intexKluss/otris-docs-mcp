---
title: "TypeScript"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/common/typescript.html"
---

# TypeScript

The extension transpiles regular TypeScript files (`.ts`) automatically before the upload. This requires that the project is configured properly for TypeScript transpilation (i.e., a `tsconfig.json` and the TypeScript compiler are available in the project).

**Note**
If you have several tsconfig files, you can use the `tsconfigPath` setting to specify which one should be used.

Usually, the transpiled files will be uploaded immediately and no additional output files stored in the project. But for debugging in VS Code, these files are required. To ensure that these files are also available, add a script task `compile` or `transpile` to the project's `package.json`. This script task is invoked automatically by the extension to create missing output files. Afterwards, these output files are updated by the extension itself.

If two script tasks `compile` and `transpile` are available in the `package.json`, `compile` is invoked.

**Important**
TypeScript files with the extension `.dos.ts` will be *not transpiled*. These files will be uploaded directly with the script mode set to `TypeScript`. These scripts will be transpiled by the documentsOS's own TypeScript transpiler.