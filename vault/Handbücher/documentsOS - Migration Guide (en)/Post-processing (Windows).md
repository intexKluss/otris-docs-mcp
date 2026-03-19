---
title: "Post-processing"
source: "https://otris.software/documents/manuals/books/migration-doc6-en/post-processing-windows.html#change-of-the-signature-interface"
---

# Post-processing

The post-processing of the *documentsOS installation* presented below contains an overview of at least adjustments to be checked (frequently occurring) of the previously used *Documents 5 installation*. If further adaptations have been carried out project-specifically, these are to be checked independently on the basis of installation documentation and implemented if necessary.


## Adjustments in configuration files

The following configuration data must at least be checked for any adjustments that have been made:


### Frequently used customizations for Documents server

| File | Default directory |
| --- | --- |
| documents.ini | Installation directory\server |
| ArchiveXML.ini | Installation directory\server |
| wpl.ini | Installation directory\docfilter |
| docsoapproxy.ini | Installation directory\soapproxy |

In addition, project-specific adjustments in the installation directory\server\locale (translation files) and installation directory\server\certs (certificates for gRPC interface) as well as additionally provided certificates (e.g. archive servers or LDAPs) should be checked.
If project-specific conversion tools for documents have been registered in the documents.ini file, these must be checked and, if necessary, adapted or made available in the new directory structure.
If you have created your own project-specific scripts in the scriptlibs directory, you must also make them available in the new directory structure from the previous installation.


### Frequently used customizations for Documents-Tomcat

| File | Default directory |
| --- | --- |
| server.xml | Installation directory\tomcat9\conf |
| web.xml | Installation directory\tomcat9\webapps\documents\WEB-INF |
| viewer-config.xml | Installation directory\tomcat9\webapps\documents\WEB-INF\classes |

In addition, project-specific adjustments for SSL/TLS certificates specified in the server.xml file should be checked.
If external resources (documents-ext) were used, these must also be made available again. Note that the context configuration file (documents.xml) in documentsOS must be provided in the installation directory under \tomcat9\conf\Catalina\localhost (previously \tomcat8\conf\Documents\localhost), and the path specifications in the context configuration file (documents.xml) must also be checked and adjusted.


### Frequently used customizations for Documents archives

If *Documents-Archive (EAS)* is used, the customized configuration data from the *Documents 5 installation* must be redeployed for the *documentsOS installation*. The following overview represents the most important configuration directories of EAS.

| Directory / file | Content |
| --- | --- |
| eas\config\molds | Templates for store creation via wizard |
| eas\config\templates | Store configuration templates |
| eas\config\stores | All store configurations |
| eas\config\users.txt | Users and passwords |
| eas\http\conf\httpd.conf | Configuration data for Apache HTTP server |
| eas\http\conf\extra\httpd-ssl.conf | SSL/TLS configurations |

In addition, project-specific adjustments for SSL/TLS certificates specified in the httpd-ssl.conf file should be checked.


## Adjustments in the Documents Manager

The following paths should be checked under Server settings → System parameters.

- Server settings/server directory for public contents
- Server settings/server directory for protected contents
- Server settings/server directory for DOCUMENTS repository
- Server settings/server directory for DOCUMENTS full text filter


## Re-indexing documents

Re-indexing of documents is only necessary if variant 2 (conversion using a current Documents data backup) was selected during the conversion. In this case, after checking any necessary adjustments to the configuration files in the *docfilter* directory, all documents must be reindexed for each principal:

- Start Documents Manager and log on to the respective principal
- Execution of the maintenance operation reindex blobs
- Repeat the action for each principal to be used, if necessary


## Other adjustments


### Change of the signature interface

As of **documentsOS Build 2504**, the signature interface is provided centrally via script libraries (*scriptlibs*); previously, installation and updating was necessary in the principal. In addition, the signature interface can now be set and configured as an extension in the **documentsOS AdminCenter**, see the corresponding documentation.

If the signature interface was used in a Documents 5 installation, various script libraries previously installed in the principal must be removed. A maintenance script is provided for this purpose, which must be executed as follows:

- Start Documents Manager and log on to the respective principal
- Creation of a portal script and execution of this script (see screenshots below)
Name of the script: can be freely selected, e.g: otrSign_doUpdate
source code from server/scriptlibs: it must be specified otrSign_UpdateToDocumentsOS
- Repeat the action for each principal to be used, if necessary


![otrsign-update-1](./assets/otrsign-update-1.png)

Fig. 14 - Maintenance script for signature interface change

If the **return value SUCCESS** is output after the script has been executed, the changes have been made successfully. All other return values indicate errors that need to be checked.


### Check mobile app

If the installation of *documentsOS* was successful on a **new machine**, new registrations for the server URL must be set on all devices when using the mobile app.


### Check external applications

If the installation of *documentsOS* was successful on a **new machine**, the corresponding access information must be adjusted when using external applications that access Documents via corresponding interfaces (e.g. via SOAP, gRPC, docimport, Factory, etc.).