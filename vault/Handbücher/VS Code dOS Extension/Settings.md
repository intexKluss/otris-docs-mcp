---
title: "VS Code dOS Extension"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/common/settings.html"
---

The following features can be influenced by settings (in `settings.json`)


## Encryption

- The setting vscode-documentsos.encryptionOnUpload can be used to control encryption. There are three values.
default: a script is encrypted on upload, if the corresponding script on server is encrypted or the script source code contains // #crypt
always: scripts are always encrypted on upload.
never: scripts are never encrypted on upload.


## Script Parameters as JSON

- Parameters are uploaded and downloaded in a JSON file together with every script, if vscode-documentsos.scriptParameters = true


## Conflict Mode

- A warning with option to cancel is shown on upload, if
The source code of the corresponding script has been changed on server
The script is encrypted on server and no decryption permission is available
- The warning can be avoided, if
vscode-documentsos.forceUpload = true


## View Documentation in Browser

- This command will jump directly to a function or member, if
In vscode-documentsos.browser a browser is selected.


## Server Console

- Will be connected and disconnected automatically, if setting autoConnect in vscode-documentsos.serverConsole is to true.


## Auto-upload script on save

- Scripts can be automatically uploaded every time you save the file. The default behavior is, that you will be asked at every time you press Ctrl + S, if the script should be uploaded. You can specify scripts that should always or never be uploaded without asking. Or you can switch this feature off by answering Never upload scripts automatically. If you want to turn the feature on again later, you only have to set vscode-documentsos.uploadOnSaveGlobal to true in your user settings.