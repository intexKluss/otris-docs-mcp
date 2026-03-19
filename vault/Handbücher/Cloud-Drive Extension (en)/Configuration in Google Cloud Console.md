---
title: "Configuration in Google Cloud Console"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-en/config-google.html"
---

# Configuration in Google Cloud Console

The following describes which settings are required in Google Cloud Console to configure the extension for connecting to **Google Drive**. The description shows the setup with a standard Google account. The setup for a Google Workspace domain is similar, but must be carried out by the respective administrator.
The necessary settings are configured via the Google Cloud Console: [Link to Google Cloud Console](https://console.cloud.google.com)

**Important notes:**

- Users who want to share files from Documents with other people must have a Google account (usually in the Workspace domain where the project was created).
- People with whom files from Documents are shared must also have a Google account if they are to be able to edit files.
- Files can also be shared with people who do not have a Google account. In this case, however, these people cannot edit the files, but can only view them.
- In Google Workspace, the administrator can prohibit or restrict external sharing. In this case, the full functionality of the extension may not be available.


## Create project

Using the navigation menu in the Google Cloud Console [Link to Cloud Console](https://console.cloud.google.com), you must either select an existing project or create a new one. In this example, a new project is created:


![google-navigation-menu](assets/google-navigation-menu-1.png)

Fig. 11 - Google Cloud navigation menu

Select the submenu *Create a project* from the menu item *IAM & Admin*:


![google-project-new-1](assets/google-project-new-1.png)

Fig. 12 - Navigation, Create a project

A name must be specified for the project; the name can be chosen freely. A specific storage location can be selected if required:


![google-project-new-2](assets/google-project-new-2.png)

Fig. 13 - Create a project

To continue with the configuration, make sure that the appropriate project is selected in the Google Cloud Console:


![google-project-new-3](assets/google-project-new-3.png)

Fig. 14 - Select the new project


## Configure OAuth consent screen

In the project, select the *OAuth consent screen* submenu via the *APIs and services* menu item:


![google-oauth-1](assets/google-oauth-1.png)

Fig. 15 - Navigation, OAuth consent screen

To configure the application identity, perform *Get started*:


![google-oauth-2](assets/google-oauth-2.png)

Fig. 16 - OAuth consent screen, Get started

All steps must be completed in the project configuration. The following screenshots show an example configuration:


![google-oauth-3](assets/google-oauth-3.png)

Fig. 17 - Get started, App Information


![google-oauth-4](assets/google-oauth-4.png)

Fig. 18 - Get started, Audience


![google-oauth-5](assets/google-oauth-5.png)

Fig. 19 - Get started, Contact Information

The final step is to complete the project configuration for the OAuth consent screen:


![google-oauth-6](assets/google-oauth-6.png)

Fig. 20 - Get started, Finish


## Create OAuth client credentials

In the project, select the *Credentials* submenu via the *APIs & services* menu item:


![google-client-data-1](assets/google-client-data-1.png)

Fig. 21 - Navigation, Credentials

New login details can be entered via the menu item *+ Create credentials*:


![google-client-data-2](assets/google-client-data-2.png)

Fig. 22 - Create credentials

Select *OAuth client ID*:


![google-client-data-3](assets/google-client-data-3.png)

Fig. 23 - Selection OAuth client ID

Use the following settings to select the *Application type***Web application**, enter a freely selectable **name**, and enter at least one **Authorized redirect URI**:


![google-client-data-4](assets/google-client-data-4.png)

Fig. 24 - Create OAuth client ID

The URI must be specified as follows:

- URI: https://<HOST>:<PORT>/documents/srv/GenericRedirectReceiver/service/GoogleDrive

**Note:** The values for `<HOST>` and `<PORT>` must be adjusted to match the Documents installation (Tomcat), including any SSL ports that differ from the default. The remaining details are fixed:


![google-client-data-5](assets/google-client-data-5.png)

Fig. 25 - Example Redirect URI

Once the configuration has been saved, a *Client ID* and a *Client secret* will be displayed. This information should be saved in **documentsOS** for later setup. Please note the instructions on the output screen. If required, the login details can also be downloaded as JSON.


![google-client-data-6](assets/google-client-data-6.png)

Fig. 26 - OAuth client created


## Enable API

In the project, select the *Library* submenu via the *APIs & Services* menu item:


![google-api-1](assets/google-api-1.png)

Fig. 27 - Navigation, Library

In the API libraries, select *Google Drive API*:


![google-api-2](assets/google-api-2.png)

Fig. 28 - Select Google Drive API

This API must be enabled:


![google-api-3](assets/google-api-3.png)

Fig. 29 - Enable Google Drive API

After completion, the API must display the status *Enabled*:


![google-api-4](assets/google-api-4.png)

Fig. 30 - Google Drive API enabled


## Use test users (for testing purposes only)

Test users can be added to the application to check the settings. To do this, proceed as follows:

In the project, select the *Credentials* submenu via the *APIs & services* menu item:


![google-test-1](assets/google-test-1.png)

Fig. 31 - Navigation, Credentials

Select the OAuth client ID that has been created:


![google-test-2](assets/google-test-2.png)

Fig. 32 - Select OAuth client ID

Test users can be added via the *Audience* menu item:


![google-test-3](assets/google-test-3.png)

Fig. 33 - Add Test users

[PDF Version](config-google.pdf?b=2026-01-13)