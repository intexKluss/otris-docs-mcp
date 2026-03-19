---
title: "Debugging"
source: "https://otris.software/documents/api/documents-native/tutorial-Debugging.html"
---

# Debugging

The method of getting to the dev tools which allow you to inspect and debug your Gadget depends on your [[Documents Drop SDK/tutorial-Host%20applications|Host applications]]


## Desktop office add-ins / Desktop client

Gadgets running in the desktop applications can be debugged by using the embedded dev tools. These are disabled by default and can be enabled using the two simple steps below

1. Create a new empty file named EnableDevMode.prop in the installation directory (next to the executable)
2. Focus the application and press F12


## Web office add-ins

Web add-ins can be debugged by using the integrated debugger of your webbrowser, which can most of the time be started by pressing **F12**. Then you need to find the iframe in which your gadget is running! In most browsers you can also retarget the dev tools to only handle your iframe, so you do not get distracted by other code that is running on the same page.


## Mobile App

Add-ins for the mobile app can currently not be debugged.