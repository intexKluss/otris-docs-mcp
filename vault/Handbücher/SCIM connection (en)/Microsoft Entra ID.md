---
title: "Example for Microsoft Entra ID"
source: "https://otris.software/documents/manuals/books/otrscim-doc-en/example-azure.html"
---

# Example for Microsoft Entra ID

The following section describes the steps required in **Microsoft Entra ID** to synchronize users and groups to *documentsOS*. It is assumed that the settings for **documentsOS** have already been correctly configured in the *AdminCenter*; see also [Configurations for documentsOS](documents-settings.html).

**Importand note:** Implementing SCIM integration requires knowledge of Microsoft Entra ID. For more information on SCIM configuration with Microsoft Entra ID, see the [Microsoft documentation](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/users-groups/scim/aad).


## Navigate to Microsoft Entra ID

[https://portal.azure.com/#home](https://portal.azure.com/#home)


![azure-1](assets/azure-1.png)

Fig. 6 - Navigate Microsoft Entra ID


## Create new application

Microsoft Entra ID → Enterprise applications → All applications → New application


![azure-2](assets/azure-2.png)

Fig. 7 - New application (1)

**Create your own application**:


![azure-3](assets/azure-3.png)

Fig. 8 - New application (2)

Collect application information:

- Name freely selectable
- Type: Integrate any other application you don't find in the gallery (Non-gallery)


![azure-4](assets/azure-4.png)

Fig. 9 - New application (3)


## Configure and manage provisioning

Microsoft Entra ID → Enterprise applications → All applications → Application → Provisioning


![azure-5](assets/azure-5.png)

Fig. 10 - Configure provisioning

Microsoft Entra ID → Enterprise applications → All applications → Application → Provisioning → Provisioning


![azure-6](assets/azure-6.png)

Fig. 11 - Manage provisioning (1)


### Enter provisioning information

- Specify Provisioning Mode: Automatisch
- Admin Credentioals
Enter Tenant URL: The SCIM endpoint URL from documentsOS must be specified, see also Configurations for documentsOS
Secret Token: The API key created in documentsOS for the user to be used must be specified, see also Configurations for documentsOS


![azure-7](assets/azure-7.png)

Fig. 12 - Manage provisioning (2)

The *Test Connection* action can be used to check whether a connection to **documentsOS** can be established. If the test is successful, a corresponding message is displayed.


![azure-8](assets/azure-8.png)

Fig. 13 - Successful connection test


### Enter mappings

Mappings can be used to customize the settings for synchronizing users and groups.


![azure-9](assets/azure-9.png)

Fig. 14 - Enter mappings

Clicking on an entry (*Provision Azure Active Directory Users* or *Provision Azure Active Directory Groups*) performs the respective assignment. In the general attribute settings, you can specify whether this should be done at all (*Enabled Yes/No*) and for which actions (*Create*, *Update*, *Delete*).


![azure-10](assets/azure-10.png)

Fig. 15 - General attribute settings

**Note:** If users previously created in documentsOS are deleted in Microsoft Entra ID, the users will not be deleted in documentsOS during the next transfer, but their status will be changed to locked or removable.

The further attribute assignments specify which attributes are to be synchronized.


#### Mappings for users

The default assignments for documentsOS users are described in the schema: [Schema](schema.html#documents-user). Only attributes that are supported should be used; unsupported attributes should be deleted.

An example of how user attributes could be assigned might look like this:


![azure-11](assets/azure-11.png)

Fig. 16 - User attributes

To define special attributes (in this case for *Licenses*, *Status*, *Documents Access*, and *Archive Access*) yourself, proceed as follows:

- Show advanced options
- Edir attribute list for customappsso

**Note:** Starting with documentsOS 6.2.0, these configurations are no longer necessary, as they can be specified directly in the extension settings. See also [Default values for user creation](documents-settings.html#Default-values-for-user-creation).


![azure-12](assets/azure-12.png)

Fig. 17 - Additional attributes (1)

Add the new attributes to the bottom of the list:


![azure-13](assets/azure-13.png)

Fig. 18 - Additional attributes (2)

| Name | Type | Comment |
| --- | --- | --- |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User:licence | String | license attribute |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User:status | String | Status attribute |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User:documentsAccess | Boolean | Attribute for Documents access |
| urn:ietf:params:scim:schemas:extension:otris:access:2.0:User:archiveAccess | Boolean | Attribute for Archive access |

Once the additional attributes have been created, the attributes can be edited using the *Add new mapping* action (example for license type):


![azure-14](assets/azure-14.png)

Fig. 19 - Additional attributes (3)

The following mappings must then be specified for the above-mentioned additional attributes:

- Mapping type: Constant
- Constant value:
named or shared or concurrent_standard or concurrent_open for License attribute, depending on the intended default license type when creating users
inherited or released or registered or blocked or removable for status attribute, depending on the default status specified when creating users
true or false for attribute for Document access, depending on the intended setting when creating users
true or false for attribute for Archive access, depending on the intended setting when creating users
- Target attribute: Select the respective value from the list (see name in the table above).


#### Mappings für groups

The default assignments for documentsOS user profiles are described in the schema: [Schema](schema.html#documents-access-profile). Only attributes that are supported should be used; unsupported attributes must be deleted.

An example of how group attributes could be assigned might look like this:


![azure-15](assets/azure-15.png)

Fig. 20 - Group attributes

**Note:** No changes need to be made to group assignments by default.


## Test provisioning

After the configuration for the provisioning has been completed, a test should always be performed.
First, you must specify which users and groups should be synchronized *on a trial basis*. For the test, only individual users and/or groups should be specified initially. Under *Manage*, select *Users and Groups* and make the appropriate selection:


![azure-16](assets/azure-16.png)

Fig. 21 - User and group selection

Afterwards, the previously selected users or groups can be selected via the menu item *Provision on demand*. The *Provision* action must be executed:


![azure-17](assets/azure-17.png)

Fig. 22 - Provision on demand

A log with details is output for the test. A successful provisioning would be displayed as follows, for example:


![azure-18](assets/azure-18.png)

Fig. 23 - Successful provisioning

In addition, the users and/or access profiles created in documentsOS should also be checked.


## Start provisioning

If the checks were successful, provisioning can be enabled for additional users and/or groups. To do this, these users and/or groups must also be added via *Manage / Users and Groups*:


![azure-16](assets/azure-16.png)

Fig. 21 - User and group selection

After that, provisioning can begin:


![azure-19](assets/azure-19.png)

Fig. 24 - Start provisioning

Microsoft Entra ID now regularly synchronizes new or changed users/groups to documentsOS. This synchronization is usually performed every 40 minutes, and executions are recorded in *Provisioning logs* or *Audit logs* by default.

[PDF Version](example-azure.pdf?b=2026-02-10)