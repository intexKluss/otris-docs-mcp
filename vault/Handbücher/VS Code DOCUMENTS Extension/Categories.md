---
title: "Categories"
source: "https://otris.software/documents/manuals/books/vscode-janus-debug/Documents/Categories.html"
---

# Categories

With Extension version 0.0.32 and DOCUMENTS version #8041, it is possible to associate script categories on DOCUMENTS server to subfolders in the project. To use this feature, `vscode-janus-debug.categories` must be set to `true` in `settings.json`.

The feature will be described depending on commands. But first consider the Notes:


## Notes

- If vscode-janus-debug.categories is true, all folders that ends with .cat will be treated in a special way. (Described in the Commands sections.)
- The extension will never delete scrips in your project! (Described in last Command section Keep in Mind for All Commands)


## Commands


### Download All Scripts

- If the target download folder is a usual folder, the extension will create a subfolder for every category. Every created folder will get the name of the category and additional the postfix .cat. If a script is assigned to a category on server, the script will be downloaded to the corresponding folder.
- If the target download folder is a folder with postfix .cat, e.g. myCategory.cat, only the scripts from category myCategory will be downloaded.


### Download Script

- If this command is executed on a script in the project, the folder structure won't be changed.
- If this command is executed on a folder, the behaviour will be exactly the same as on Download All Scripts command.


### Reload Scripts

- Folder structure won't be be changed. The extension just downloads all scripts again, that are found inside the folder and all subfolders.


### Upload Script / Upload Scripts from Folder

- If the uploaded script is inside a usual folder, the script will be uploaded on server and will not be assigned to a category. If it was assigned to a category before, the category will be removed.
- If the uploaded script is inside a folder that ends with .cat, the corresponding category will be assigned to the script. E.g. if the folder name is myCategory.cat the script will be assigned to the category myCategory. If the category does not exist, it will be created.


### Keep in Mind for All Commands

The extension will never delete scripts in your project. That means, if a script is downloaded to a folder named `myCategory1.cat` and after that, the script is assigned to category `myCategory2` on server. If you then download the script again, it will be downloaded to `myCategory2.cat` but it will not be deleted from `myCategory1.cat`.