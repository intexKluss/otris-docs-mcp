---
title: "Requirements"
source: "https://otris.software/documents/manuals/books/migration-doc6-en/requirements-linux.html"
---

# Requirements

For an installation of **documentsOS** the general system requirements for a Documents installation generally apply, see also [[Client SDK/index|System requirements]].

For upgrading an *existing Documents 5 installation* to *documentsOS*, the following additional requirements apply.

**Important note:** For a migration to **documentsOS** at least the packages in version **5.0i-2322-454** must have been installed and **once successfully** started. If older versions are to be migrated, an update to the specified version must first be performed.

**Important note:** From version #2322 Documents supports utf8mb4 in addition to the previous encoding utf8mb3 when using MariaDB or MySQL. This encoding (utf8mb4) is needed e.g. for saving emojis. If the conversion has not yet been performed, this must be ensured before the conversion using a database schema migration, see [Variant 1](migration-linux.html#variant-1-conversion-using-a-database-schema-migration), the procedure is described here: [[Client SDK/index#migration-of-a-documents-5-utf8mb3-database-to-utf8mb4|Migration of a DOCUMENTS 5 utf8mb3 database to utf8mb4]].


## Backup

Before the migration, make sure that a complete, up-to-date data backup is performed. If a simple database dump is sufficient for the Documents 5 database, this can be created automatically during the migration (this is the default).
A complete data backup always includes:

- Data:
either a complete backup of the Documents 5 database created by means of the database system used and a complete backup of the repository (e.g. created with backup system) - necessary as backup for conversion with variant 1, see Variant 1
or a backup created by Documents with Documents repository (when converting one principal within the installation) or a so-called system backup (when converting several principals within one installation) - necessary for conversion with variant 2, see Variant 2
- Installation:
Files that were additionally placed in the Documents 5 directories should be backed up (necessary for adjustments during the changeover and for post-processing)


## New license file

A new license file is required to use *documentsOS*. A license file with the **release flag 9000** must be available before installation.