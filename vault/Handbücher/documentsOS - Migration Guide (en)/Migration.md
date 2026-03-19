---
title: "Changeover when using Linux"
source: "https://otris.software/documents/manuals/books/migration-doc6-en/migration-linux.html"
---

# Changeover when using Linux


## Preliminary notes

The system will be unavailable during the changeover.

**Note:** During the changeover, ensure that other systems do not access the Documents installation. The corresponding interfaces, e.g. via SOAP, gRPC, docimport, Factory etc. must not be used (even if they are temporarily available).

The technical name of **documentsOS** on Linux is `documents6`. This applies e.g. to the packages and some folders and files. For the migration, all required `documents6` packages must be installed.

**Note:** It is not sufficient for the migration to install only the `documents6-mysql` package (as for a new installation). The command from the Conversion section must be used.

Make sure that the necessary requirements are met, see [Requirements](requirements-linux.html):

- Complete data backup is available (if this is not to be created automatically with variant 1).
- New license file is available


## Conversion


### Variant 1 Conversion using a database schema migration


#### Automatic changes through the migration

- The existing documents5 packages are automatically displaced when the documents6 packages are installed.
- The /var/lib/documents5/documents directory (repositories) is automatically moved to /var/lib/documents6.
- An existing documents.ini in /etc/documents5 is copied to /etc/documents6 and adjusted. Apart from that, /etc/documents6 contains exactly the same files after migration as after a new installation.
- The files in /etc/documents5 remain unchanged.
- The database is migrated automatically during the installation.
- The database is not renamed and continues to be called documents5.
- If there is no database dump named dbdump_documents5.sql.zstd under /var/lib/documents5/, it will be created automatically during the installation (please read the next section).


#### Creation of the database dump

Since the creation of a database dump can take some time, it is also possible to create it beforehand in another way (e.g. manually or by an automatic nightly backup). In this case, the creation can be suppressed during the installation. To do this, the environment variable `DOCUMENTS6_SUPPRESS_DOCUMENTS5_DBDUMP` must be set in the same shell before the migration command, e.g. with `export DOCUMENTS6_SUPPRESS_DOCUMENTS5_DBDUMP=1`. This variable must not be set if the database dump has not been created.


#### Implementation of the migration


```javascript
apt install $(dpkg -l|awk '/documents5/{print $2}'|sed s/s5/s6/)
```

apt install $(dpkg -l|awk '/documents5/{print $2}'|sed s/s5/s6/)After that, two packages should be uninstalled.


```javascript
apt purge libjsrdbg0 libmozjs-24-0v5
```

apt purge libjsrdbg0 libmozjs-24-0v5
### Variant 2 Conversion using a current Documents data backup

With this type of conversion, a new installation is made and then the existing Documents data backup is restored as a backup. For the new installation the points which are indicated in the documentation for the installation under Linux are to be considered:
[Installation Linux](../installation-linux/ubuntu2204-d6.html)

**Note:** Depending on the available data volume, this type of conversion takes considerably more time than the previously presented variant 1. In addition, a re-indexing of documents is necessary after the conversion.

This variant also distinguishes whether **only one principal** or **several principals** are operated within the installation.


#### Conversion using a current Documents data backup (one principal)

After the new installation, the previously created backup must be imported, the following tools can be used for this purpose:

- Manager-Loader or
- Documents-Manager from documentsOS-Toolbox

Start the corresponding tool and log in **principal-less** (i.e. without specifying a principal):


![windows-install-7](./assets/windows-install-7.png)

Fig. 15 - Logon to Documents-Manager without principal

- Start the import of the data backup under Administration / Recovery data backup....
- Specify or select the appropriate directories
Normal contents: the zip file of the backup with the metadata
Documents: the zip file of the backup with the document data (repository)
Licence file: The new license file valid for documentsOS


![windows-install-8](./assets/windows-install-8.png)

Fig. 16 - Recover data backup

- Select Next, confirm the principal name and finish importing the backup with Complete.

**Note:** Depending on the available data volume, importing a data backup can take a long time (e.g. several hours or days) and must not be interrupted.

**Important note:** Afterwards, observe the notes on post-processing the installation: [Post processing](post-processing-linux.html) and in particular the point re-indexing documents.


#### Conversion using a current Documents data backup (several principals)

**Note:** If several principals are operated in one installation, it is recommended to use a so-called *system data backup (jex export)* as export/import, since an import can then be performed faster (optimized). This type of backup also does not contain a repository, the connection to the repository must be checked or set after the import is complete.


##### Creation of the system data backup (jex export)

A system backup of the existing installation (Documents 5) can be created by:

- Manager-Loader or
- Documents-Manager from documentsOS-Toolbox

Start the corresponding tool and log in **principal-less** (i.e. without specifying a principal). Execute the menu action *Server settings / server-side data export (jex)* with specification of the export directory and export file:


![windows-install-10](./assets/windows-install-10.png)

Fig. 17 - System backup as jex file (Export / Documents-Manager)


##### Importing the system backup

After successful installation, start the *Manager Loader* or the *Documents Manager from the documentsOS Toolbox*, log in **principal-less** (i.e. without specifying a principal) and perform the import of the system backup under *Server Settings / server-side data import (jex)* specifying the path to the previously created system backup:


![windows-install-12](./assets/windows-install-12.png)

Fig. 18 - System backup as jex file (Import / Documents-Manager)

**Note:** Depending on the available data volume, importing a data backup can take a long time (e.g. several hours or days) and must not be interrupted.

After completing the import, make sure that the path to the repository is correct and adjust it if necessary under *Server settings / System parameters / Server directory for Documents repository*.

**Important note:** Afterwards, observe the notes on post-processing the installation: [Post processing](post-processing-linux.html) and in particular the point re-indexing documents.