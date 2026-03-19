---
title: "@types/otr-package"
source: "https://otris.software/documents/api/otrpackage/api/index.html"
---

# @types/otr-package


# otr-package

Library for delivering documentsOS solutions and packages. For examples,
tutorials and features, see also

- Getting Started: Guide for getting started with otr-package.
- Feature Walkthrough: List of features with examples.


## Example


```ts
// #crypt

/**
 * Paket-Spezifikation für my-project
 */

const { declarePackage } = require("otr-package");

module.exports = declarePackage({
    version: "@versionNumber@",
    name: "my-project",
    description: "",
    dependencies: [],
    updateScripts: {
        "@versionNumber@": [
            "my-project.xml",
            "issue_1"
        ]
    }
});
```