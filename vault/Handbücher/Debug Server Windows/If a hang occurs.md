---
title: "If a hang occurs"
source: "https://otris.software/documents/manuals/books/debugserver_installation/HangOccurs.html"
---

# If a hang occurs

In case of a hang occurring (this means: the debug server is running, but will
not responding anymore e.g. a log in is not possible), perform the steps
described as follows:

1. Start the debug_mode_hang.bat. The debugging tools for windows program starts and writes a memory dump into the configured log-directory.
2. After the dumps are written, finish the DOCUMENTSServer_debug.exe with the Exit-Button (if possible) or kill the process in the task manager and restart the Tomcat and DOCUMENTSServer_debug.exe.
3. Open a Windows Explorer.
4. Switch to the /tmp directory which you configured to collect the debug data.
5. The directory should now contain a new subfolder matching the pattern

`yyyymmdd_HHMMSS_Hang_Mode`

Date and Time are the hang timestamp of the debug server.
Create a zip file including the complete contents of that newly created
subfolder. Make sure to zip the correct folder structure!

1. Please write a short note which DOCUMENTSServer_debug.exe build (e.g. 2040) and database (e.g. MS SQL Server / MySQL) you have used.
2. Create a zip file for the matching app.log and the DOCUMENTS-Server_debug_DATE_TIME.log as well.
3. Contact otris Support to receive credentials for an FTP account where to upload the files.