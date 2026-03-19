---
title: "Settings"
source: "https://otris.software/documents/manuals/books/vscode-janus-debug/Common/Settings.html"
---

# Settings

The following features can be influenced by settings (in `settings.json`)


## Encryption

- The setting vscode-janus-debug.encryptionOnUpload can be used to control encryption. There are three values.
default: a script is encrypted on upload, if the corresponding script on server is encrypted or the script source code contains // #crypt
always: scripts are always encrypted on upload.
never: scripts are never encrypted on upload.


## Script Parameters as JSON

- Parameters are uploaded and downloaded in a JSON file together with every script, if vscode-janus-debug.scriptParameters = true


## Conflict Mode

- A warning with option to cancel is shown on upload, if
The source code of the corresponding script has been changed on server
The script is encrypted on server and no decryption permission is available
- The warning can be avoided, if
vscode-janus-debug.forceUpload = true


## View Documentation in Browser

- This command will jump directly to a function or member, if
In vscode-janus-debug.browser a browser is selected.


## Server Console

- Will be connected and disconnected automatically, if setting autoConnect in vscode-janus-debug.serverConsole is to true.


## Script Console

- By default the Script Console will open, when running a script. To prevent this, you change the setting openScriptConsoleOnRunScript to false.


## Auto-upload script on save

- Scripts can be automatically uploaded every time you save the file. The default behavior is, that you will be asked at every time you press Ctrl + S, if the script should be uploaded. You can specify scripts that should always or never be uploaded without asking. Or you can switch this feature off by answering Never upload scripts automatically. If you want to turn the feature on again later, you only have to set vscode-janus-debug.uploadOnSaveGlobal to true in your user settings.