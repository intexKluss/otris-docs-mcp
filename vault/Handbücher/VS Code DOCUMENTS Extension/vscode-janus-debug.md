---
title: "vscode janus debug"
source: "https://otris.software/documents/manuals/books/vscode-janus-debug/Common/vscode-janus-debug.html"
---

# vscode janus debug

This file is used by the extension to provide two features.

- When this file is found in project root, the extension will be activated on start. First of all, this is useful when the feature to Upload Script on Save is used.
- Additional some internal information to the Conflict Mode are stored in this file.

**Note:** It's not a big problem if you delete ths file, read here what will happen in this case.


## Upload Script on Save

This feature is turned on as default but can be turned of by the setting `vscode-janus-debug.uploadOnSaveGlobal` to `false` in `settings.json`. If the feature is turned on, you will be asked to upload the script automatically when the script is saved. You can say `always` or `never` for every single script, and the information will be saved in `settings.json`, so you will not be asked again for these scripts. The feature is only available when the extension is active. If the file `.vscode-janus-debug` is found in project root, the extension activates automatically. Additional the extension can be activated by using any command that is provided by the extension.


## Conflict Mode

The conflict mode is turned on as default and can be turned of by setting `vscode-janus-debug.forceUpload` to `true` in `settings.json`. If the feature is turned on, the extension will check the script on server on every upload. If the source code on server has been changed since the last up- or download, you will be asked if you really want to upload the script and you can cancel the command. To remember the source code for the check, the extension will store the hash value of the source code in `.vscode-janus-debug`. If you try to upload a script and the extension cannot find the hash value for this script in `.vscode-janus-debug`, it will ask you anyway if the script should be uploaded and tell you that the script on server **might** have been changed.

**Note:** Unfortunately, for encrypted scripts, the feature does not work properly. You will be warned any time you try to upload a script, that is encrypted on server.


## What if the file is deleted?

If you delete this file

- you will not be able to use the Upload on Save feature after starting the extension until you execute any extension command.
- and if you are using the Conflict Mode feature, you will be annoyed by beeing asked for every script again, even if the script has not been changed on server.

If the file is not found in your root when the extension is activated, the file will be created on activation of the extension.