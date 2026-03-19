---
title: "Introduction"
source: "https://otris.software/documents/manuals/books/otrscim-doc-en/"
---

# Introduction

**SCIM** (System for Cross-domain Identity Management) is an open standard for the automated provisioning of
user accounts. SCIM mediates user identity data between identity providers (IDP), e.g. Microsoft Entra ID,
and service providers (SP), in this case **documentsOS**. With the appropriate settings, changes such as the creation,
updating, and deleting user accounts at the IDP are automatically synchronized with documentsOS.
User account administration can thus be carried out at the IDP without documentsOS having access to this system.
documentsOS provides an SCIM endpoint for communication through the IDP, and authentication of the IDP
is performed using an API key provided in documentsOS for a designated administrative account.

Starting with documentsOS Build 2503, users and access profiles can be synchronized using SCIM.

[PDF Version](index.pdf?b=2026-02-10)