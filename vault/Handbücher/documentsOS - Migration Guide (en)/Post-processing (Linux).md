---
title: "Post-processing"
source: "https://otris.software/documents/manuals/books/migration-doc6-en/post-processing-linux.html#change-of-the-signature-interface"
---

# Post-processing

The post-processing of the *documentsOS installation* presented below contains an overview of at least adjustments to be checked (frequently occurring) of the previously used *Documents 5 installation*. If further adaptations have been carried out project-specifically, these are to be checked independently on the basis of installation documentation and implemented if necessary.


## Adjustments in configuration files

The following configuration data must at least be checked for any adjustments that have been made:


### Frequently used customizations for Documents server

| File | Directory |
| --- | --- |
| documents.ini | /etc/documents6/ |
| ArchiveXML.ini | /etc/documents6/ |
| wpl.ini | /etc/documents6/ |
| docsoapproxy.ini | /etc/documents6/ |

In addition, project-specific adjustments in `/var/lib/documents6/server/locale` (translation files) and `/var/lib/documents6/server/certs` (certificates for gRPC interface) as well as additionally provided certificates (e.g. archive servers or LDAPs) should be checked.
If project-specific conversion tools for documents have been registered in the `documents.ini` file, these must be checked and, if necessary, adapted or made available in the new directory structure.
If own, project-specific scripts were created in the scriptlibs directory, these must also be provided from the previous installation in the new directory structure.


### Frequently used customizations for Documents-Tomcat

| File | Directory | Remark |
| --- | --- | --- |
| server.xml | /etc/tomcat9/ |  |
| web.xml | /etc/documents6/ |  |
| documents-tomcat.xml | /etc/documents6/ | Context configuration file |
| viewer-config.xml | /etc/documents6/ |  |

The path specifications in the context configuration file should be checked and adjusted.


### Web-Server (NGINX/Apache)

The configuration of the web server should be revised. The adjustments described in the Linux installation should also be observed.


### Frequently used customizations for Documents archives

The following overview represents the most important configuration directories of EAS.

| Directory / File | Content |
| --- | --- |
| /etc/eas/*.ini | All store configurations |
| /etc/eas/EAS_AUTH.htdigest | Users and passwords |

If necessary, the Apache TLS configuration should be revised.


## Adjustments in the Documents Manager

The Manager Loader or the Documents Manager from documentsOS-Toolbox must be used for this customization.

The following paths should be checked under Server settings → System parameters. In most cases, "documents5" must be replaced by "socuments6".

- Server settings/server directory for public contents
- Server settings/server directory for protected contents
- Server settings/server directory for DOCUMENTS repository
- Server settings/server directory for DOCUMENTS full text filter


## Re-indexing documents

Re-indexing of documents is only necessary if variant 2 (conversion using a current Documents data backup) was selected during the conversion. In this case, after checking any necessary adjustments to the configuration files in the *docfilter* directory, all documents must be reindexed for each principal:

- Start Documents Manager (Manager-Loader or Documents-Manager from documentsOS-Toolbox) and log on to the respective principal
- Execution of the maintenance operation reindex blobs
- Repeat the action for each principal to be used, if necessary


## Web services and redirect URIs

If there is a Linux installation and web services with redirect URIs were used (e.g. Azure AD, signature interface, etc.), the redirect URIs in the external applications must be checked and adjusted if necessary, because under *documentsOS* the context path for Windows *and* Linux is now uniformly **documents**, e.g.:

- Linux / Azure AD connection (old): https://<HOST>/documents5/srv/GenericRedirectReceiver
- Linux / Azure AD connection (new): https://<HOST>/documents/srv/GenericRedirectReceiver


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

Fig. 19 - Maintenance script for signature interface change

If the **return value SUCCESS** is output after the script has been executed, the changes have been made successfully. All other return values indicate errors that need to be checked.


### Check mobile app

If the installation of *documentsOS* was successful on a **new machine**, new registrations for the server URL must be set on all devices when using the mobile app.


### Check external applications

If the installation of *documentsOS* was successful on a **new machine**, the corresponding access information must be adjusted when using external applications that access Documents via corresponding interfaces (e.g. via SOAP, gRPC, docimport, Factory, etc.).