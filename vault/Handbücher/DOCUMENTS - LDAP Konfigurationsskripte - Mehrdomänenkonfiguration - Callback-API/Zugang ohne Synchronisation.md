---
title: "Zugang ohne Synchronisation"
source: "https://otris.software/documents/manuals/books/ldap-callbacks-doc/wizdoccallbacks/Konfiguration-NoSynchronisation.html#zugang-ohne-synchronisation"
---

# Zugang ohne Synchronisation

Im Standardverhalten wird die Verwaltung von Benutzern und Gruppen nach der Einrichtung der Konfiguration vollständig an die LDAP-Struktur übertragen. Bei der Synchronisation erfolgt daher nicht nur ein Import, sondern auch ein Abgleich der gefundenen Objekte. Werden in diesem Zusammenhang in *Documents*-Objekte
gefunden, zu denen es keinen passenden Eintrag in der LDAP-Struktur gibt, verhält das System sich folgendemaßen:

- Wird in DOCUMENTS ein Zugriffsprofil gefunden, welches sich in der LDAP-Struktur nicht widerspiegelt, so wird dieses bei der Synchronisation entfernt.
- Wird ein Benutzer oder Redakteur in Documents ohne passenden Eintrag im LDAP gefunden, so wird dieser gesperrt.

In bestimmten Fällen kann es durchaus sinnvoll oder erforderlich sein, dass ein solches Element ausschließlich in *Docuemnts* existiert. Die Synchronisation kann daher für diese Ausnahmen ausgeschaltet werden. Legen Sie dann für das Zugriffsprofil, den Redakteur oder Benutzer mit folgender Eigenschaft und Wert an:

noLdapCheck true