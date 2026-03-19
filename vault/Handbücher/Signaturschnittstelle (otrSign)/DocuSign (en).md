---
title: "DocuSign Integration"
source: "https://otris.software/documents/manuals/books/otrsign/docusign-en.html"
---

# DocuSign Integration


## Configuring an application

You can register and set up a DocuSign application by yourself from the DocuSign website. DocuSign distinguishes between a test and a live environment. These can be identified by the corresponding URL:

- Test environment: appdemo.docusign.com
- Live environment: app.docusign.com

Before any application can go live, it must be set up on the testing environment first. You can set up the testing environment by yourself. Only the live environment must be provided by DocuSign. In the following chapter we will describe how to create and set up the test environment.


### Creation of a DocuSign test environment (Sandbox)

**Notice:** With a sandbox created by default, no signature certificates can be used (advanced signature, qualified signature). If this should be necessary in the test environment, DocuSign must be contacted.

A developer account must be created from  [go.docusign.com/sandbox/productshot](https://go.docusign.com/sandbox/productshot/).

Registering as a developer creates a new tenant by default. One user can be in multiple tenants and switch between them. If additional users want to work in the same tenant, it is not necessary to create a new developer account. Instead, additional users can be added to the tenant through the administration.

After registration, the tenant can be managed and administrated. To do so, log in through [appdemo.docusign.com](https://account-d.docusign.com/) and select the "Settings" menu item.


![DocuSign eSignature Settings](images/docusign-goto-settings-en.png)

Abb. 11 - DocuSign eSignature menu item Settings

The administration will open. Make sure that the correct tenant is selected. The currently selected tenant is shown at the upper left of the screen.


![DocuSign Tenant View](images/docusign-tentant-view-en.png)

Abb. 12 - DocuSign Tenant View

By clicking the "Switch to" button you can switch to another tenant.

DocuSign makes use of the standard procedure [OAuth2](https://oauth.net/2/) to authorize external applications. In order to allow Documents to use the DocuSign API, it must be made known to DocuSign. This requires some configurations - both in DocuSign and in Documents. These will be explained in the following steps.

1. From the DocuSign Administration, under the category "Integrations", select the menu item "Apps and Keys".
2. Under the heading "My Account Information" you will see a value for "API Account ID". Please note down this value, as it is required for the configuration in Documents.
Abb. 13 - API Account ID
3. Create a new application using the "Add app and integration key" button. You will have to define a name for the application. It is recommended to select the name of the principal used in Documents. Applications will be available across tenants as well. A unique name helps to identify the application later on. [❶]
4. Note down the "Integration Key". It will be needed later on. [❷]
5. "User Application" (within "Authentication" section) must be set to "Authorization Code Grant" (default setting). [❸]
6. Use the "Add Secret Key" button to create a new "Secret Key" and make a note of it. The Secret Key will obfuscated after saving. [❹]
7. In the section "Additional settings", use the button "Add URI" to add a new redirection URI. The URI must be in the following format:
https://<server-address>/documents/srv/GenericRedirectReceiver/service/DocuSign-DEV
It is important to ensure that the server address is the same as the address used by the clients to reach the server (e.g. the address "localhost" may work for the server, but not for the clients). For Linux installations with version Documents 5, "documents5" must be specified in the path, for Windows installations (Documents 5) and installations with version documentsOS (Windows and Linux), "documents" must be specified in the path. [❺]
8. Click the "Save" button to create the application. [❻]

**Notice:** Changes made on the settings page (such as Redirection URI or Secret Key) may take a moment (about 2 minutes) to be applied and can be used in the Documents integration.


![Create an application](images/docusign-app-create-en.png)

Abb. 14 - Create a DocuSign Application (some information have been removed for simplicity)


### Connecting a DocuSign application with Documents

First you need to create a new application via the "External providers" menu item (see [Registering an application](install-configure-d6.html#externe-anbieter)). There are several options to configure. Some of them require the settings made in the previous steps (Creation of a DocuSign test environment). You should have noted down these settings.

- Client ID: Corresponds to the "Integration Key".
- Client Secret: Corresponds to the "Secret Key".
- Application ID: Corresponds to the "API Account ID".
- Technical User: The login name of the Documents user, which will later be connected to the technical user of DocuSign. In Documents, this should also be a technical user (e.g. the editor the application is currently being created with).
- Verification method: This setting becomes relevant as soon as the signature type "Advanced" is used. Here you can configure which secondary factor a signer must use. You can choose between three options:
none: Only if no advanced signature is used.
one-time password: Documents generates a one-time password when a document is sent to DocuSign. The signer must enter this password before signing. This requires the signature requester to forward the password to the signer via a secure channel.
SMS: When the signers are defined, an additional phone number must be specified. If the signer wants to sign the document with DocuSign, an SMS Tan will be sent to this phone number.
- Font: The font used to fill fields (e.g. place or date) in DocuSign.
- Font Size: The font size used to fill fields (e.g. place or date) in DocuSign.
- Electronic signatures: DocuSign offers several certificates that can be used for the simple signature. In the live environment, this can be coordinated with DocuSign itself. By default, no certificates are activated in the test environment. In this case, the entry "none" should be selected.
- AES digital signatures: Certificates for the signature type "Advanced". In the test environment, the advanced signature is not activated, therefore select "deactivate".
- QES digital signatures: Certificates for the signature type "Qualified". In the test environment, the qualified signature is not activated, therefore select "deactivate".


### Connecting DocuSign users with Documents

All users who want to send signature requests from Documents via DocuSign have to connect their DocuSign account via the menu item "External providers" (see [Verbinden von Benutzerkonten](install-configure-d6.html#verbinden-von-benutzerkonten)).

In addition to the normal users, also a technical user account must be connected. As this account is used to query all status changes and download the final signed document, the account must be given access to all groups at DocuSign (i.e. have access to all signature requests/envelopes). Afterwards, this account has to be connected to the Documents user, which has been entered as the "Technical User" in the application settings.


### Go live with a DocuSign application

In order to launch a DocuSign test application in a live environment, the DocuSign user account must be stored as administrator on both the test environment and the live environment. Once this is done, the application can be launched from the test environment to the live environment by this user. Since the settings are similar to the creation of a test environment (sandbox), they are described briefly below:

1. Log in to the DocuSign test environment (appdemo.docusign.com).
2. Switch to the administration area via the "Settings" menu item.
3. Make sure the correct tenant is selected.
4. Under the category "Integrations", select the menu item "Apps and Keys".
5. For the corresponding application, select "Start Go-Live Review" from the "Actions" drop-down menu.
6. You must select to which new live tenant the application should be assigned. An automated review of the most recent API requests will then be started. After a few minutes, the check should be completed and the application will be in the status "Live".
7. Log in to the DocuSign live environment (app.docusign.com).
8. In the administration, navigate to the application (equivalent to the test environment). Again, make sure the user is in the correct tenant.
9. Write down the "API Account ID" ( it will be needed as Application ID later on).
10. Edit the application.
11. Add and write down a new Secret Key (needed as Client Secret later on).
12. Add another redirection URI, it must be in the following format:
https://<server-address>/documents/srv/GenericRedirectReceiver/service/DocuSign
Notice: Unlike the test environment, the path ends with "DocuSign" and not "DocuSign-DEV".
13. Save.
14. Switch to the Documents web client and log in as an editor.
15. Proceed similarly to connecting a DocuSign test environment, i.e.:
Create a new application, select the provider "DocuSign" in the service selection.
All new parameters must be entered similarly to the test environment.