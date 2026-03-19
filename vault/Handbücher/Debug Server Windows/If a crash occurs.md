---
title: "If a crash occurs"
source: "https://otris.software/documents/manuals/books/debugserver_installation/CrashOccurs.html"
---

# If a crash occurs

In case of a crash occurring (this means: the debug server console window closes
down without any interaction of an administrator hitting the *EXIT* button),
perform the steps described as follows:

1. Do not restart the debug server before performing the following steps!
2. Open a Windows Explorer.
3. Switch to the /tmp directory which you configured to collect the debug data.
4. The directory should now contain a new subfolder matching the pattern

`yyyymmdd_HHMMSS_Crash_Mode`

Date and Time are the startup timestamp of the debugserver.
Create a zip file including the complete contents of that newly created
  subfolder. Make sure to zip the correct folder structure!

1. Create a zip file for the matching app.log and the DOCUMENTSServer_debug_DATE_TIME.log as well.
2. Please write a short note which DOCUMENTSServer_debug.exe build (e.g. 2040) and the database (e.g. MS SQL Server / MySQL) you have used.
3. Contact otris Support to receive credentials for an FTP account where to upload the files.
4. Now you may restart the Tomcat and the debug mode by exactly following the instructions of the chapter “Starting the debug server”.