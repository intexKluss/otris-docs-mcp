---
title: "Example for Okta"
source: "https://otris.software/documents/manuals/books/otrscim-doc-en/example-okta.html"
---

# Example for Okta

The following section describes the steps required in **Okta** to synchronize users and groups to *documentsOS*. It is assumed that the settings for **documentsOS** have already been correctly configured in the *AdminCenter*; see also [Configurations for documentsOS](documents-settings.html).

**Important note:** Implementing SCIM integration requires knowledge of Okta. For more information on SCIM configuration with Okta, see the [Okta documentation](https://developer.okta.com/docs/concepts/scim/).


## Create app integration

- Sign in to Okta as an administrator and navigate to the Admin Console.
- Switch to Applications → Applicationsw


![okta-1](assets/okta-1.png)

Fig. 25 - Okta Navigation Applications

Select the **Create App Integration** action:


![okta-2](assets/okta-2.png)

Fig. 26 - Okta App Integration (1)

Under *Sign-in method*, select **SWA - Secure Web Authentication** and click *Next*.:


![okta-3](assets/okta-3.png)

Fig. 27 - Okta App Integration (2)

In the next steps, enter or select the necessary information for the app, e.g.:


![okta-4](assets/okta-4.png)

Fig. 28 - Okta App Integration (3)


![okta-5](assets/okta-5.png)

Fig. 29 - Okta App Integration (4)

Complete the creation with *Finish*.

In the new application, select **SCIM** under *General / Provisioning* and save:


![okta-6](assets/okta-6.png)

Fig. 30 - Okta App Integration (5)


## Set up provisioning

In the new application under *Provisioning / Integration*, the connection data and the desired actions must be entered and saved.


![okta-7](assets/okta-7.png)

Fig. 31 - Okta App Integration Connection

- SCIM connector base URL: The SCIM endpoint URL from documentsOS must be specified, see also Configurations for documentsOS
- Unique identifier field for users: A valid value for Okta must be specified, e.g. userName
- Supported provisioning actions: Specify the desired actions for synchronization with documentsOS, e.g., Push new Users, Push Profile Updates, Push Groups
- Authentication Mode: Select the HTTP Header mode
- Authorization: The API key created in documentsOS for the user to be used must be specified, see also Configurations for documentsOS


## Set up assignments

Users and groups that are to be included in synchronization can either be assigned directly (via *Directory People / Groups*) to an application or within the application itself. The assignment within the application is shown below.

**Note:** In any case, tests for the various scenarios (creating new users and groups, changing users and groups) should be carried out with individual users and groups before going live.

In the application under *Assignments / People*, select the users for whom synchronization is to take place:


![okta-8](assets/okta-8.png)

Fig. 32 - Assign users

...
In the application under *Provisioning / To App*, activate the actions that are to be performed:


![okta-9](assets/okta-9.png)

Fig. 33 - Actions for synchronization

Once these settings have been saved, synchronization for the selected users will start immediately and can then be checked in the documentsOS user management.

To synchronize groups, search for and assign the groups in the application under *Push Groups*. Once correctly assigned, the groups are automatically synchronized and assigned to users in documentsOS, provided that the Okta users have been previously assigned to the corresponding groups.


![okta-10](assets/okta-10.png)

Fig. 34 - Add groups for synchronization

If user attributes need to be customized for synchronization, this can be set up via **Attribute Mappings** under *Provisioning / To App*. The default mappings for documentsOS users are described in the schema: [Schema](schema.html#documents-user). Only attributes that are supported should be used; unsupported attributes must be deleted.

[PDF Version](example-okta.pdf?b=2026-02-10)