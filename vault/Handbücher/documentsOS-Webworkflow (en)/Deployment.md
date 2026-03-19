---
title: "Deployment"
source: "https://otris.software/documents/manuals/books/workflow-tool-en/install.html"
---

# Deployment

Editors with the **Documents Administrator** function have access to the **AdminCenter** by default after logging in to the web client and can activate the **Workflow administration** extension. If the extension has been activated, access profiles and/or users can be specified via the role administration, which **optionally** should also have access to the workflow administration.


## Activation/deactivation

Activation is carried out in the AdminCenter via the *Extensions* folder. The **Activate** action must be carried out on the extension.


![admincenter-1](assets/admincenter-1.png)

Fig. 1 - Inactive extension

If the extension has been activated, it is displayed in the AdminCenter under *activated extensions*. A **Workflow** configuration folder is also activated in the AdminCenter.


![admincenter-2](assets/admincenter-2.png)

Fig. 2 - Active extension


![admincenter-3](assets/admincenter-3.png)

Fig. 3 - Configuration folder in the AdminCenter

After deactivation, the configuration folder in the AdminCenter is removed and no more settings can be made.


![admincenter-5](assets/admincenter-5.png)

Fig. 4 - Deactivation dialog


## Permissions

The configuration folder and the associated settings are also visible to users who have been specified as *optional* for this extension via role management in the AdminCenter.


![admincenter-4](assets/admincenter-4.png)

Fig. 5 - Role management with optional additional access settings

By clicking on the corresponding role, you can optionally specify existing access profiles and/or users who are to receive configuration authorizations in the corresponding form.

- Add: Click in the corresponding field and select from the AutoComplete list
- Remove: Click on the corresponding symbol in the respective line

By default, a **admin** role is available as *Workflow Administrator* with full access to the workflow administration.