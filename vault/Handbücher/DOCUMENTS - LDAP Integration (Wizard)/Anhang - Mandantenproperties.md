---
title: "Anhang - Mandantenproperties"
source: "https://otris.software/documents/manuals/books/ldap-wizard-doc/wizdoc/Konfiguration-Principalproperties.html#anhang-mandantenproperties"
---

# Anhang - Mandantenproperties

Durch den Wizard werden eine Reihe von Mandantenproperties geschrieben, die dann vom LDAP-Anschluss ausgelesen und an den Server weitergereicht werden.


![](../wizdocpics/mandantenproperties.png)

Abb. 26 - Mandantenproperties

| Mandantenproperty | DE Ldap Zugangsdaten | EN Ldap login data |
| --- | --- | --- |
| LdapActive | LDAP aktiv | LDAP enabled |
| LdapLicenseType concurrent_open concurrent_standard named shared | Standard Lizenzart Concurrent (open) Concurrent (standard) Named Shared | Licence Type Concurrent (open) Concurrent (standard) Named Shared |
| LdapHostname | Hostname des LDAP-Domänenservers | Hostname of LDAP domain controller |
| LdapPort | Port | Port |
| LdapLoginDN | DN eines LDAP-Users mit vollem Lesezugriff | DN of an LDAP user with full read rights |
| LdapPassword | Password des LDAP-Users | Password of LDAP user |
| LdapBaseDN | Wurzelstruktur des LDAP | LDAP Root Directory |
| LdapEnableSSL true false | SSL | SSL |
| LdapCaCertFile | SSL-Zertifikat | SSL-Certificate |
| LdapChaseReferals true false ab buildNo >= 2311 bzw. 5.0h HF1 LDAP 2.2.5 | LDAP Verweise folgen | Chase referrals |
| loginScript Ldap.LdapLogon |  |  |
| singleSignon true false | Single -Sign-On ist aktiv | Single Sign-On enabled |
| autologin 1 wenn singleSignon true |  |  |
| autoLoginScript Ldap.LdapLogon wenn singleSignOn true |  |  |
|  | Konfiguration des Benutzerimports | User import configuration |
| LdapSwitchingGroupDN | Gruppe für Benutzerimport | Group for user import |
| LdapDocumentsForAll | Importierten Benutzern automatisch Documents-Zugang gewähren | Grant all imported users documents access |
| LdapArchiveForAll | Importierten Benutzern automatisch Archiv-Zugang gewähren | Grant all imported users archive access |
| LdapDocumentsGroupDN | Gruppe für Documentszugang | Group for Documents access |
| LdapArchiveGroupDN | Gruppe für Archivzugang | Group for Archive access |
| LdapRecursiveUserSearch | Benutzer aus Untergruppen importieren | Import users from subgroups |
| LdapRecursiveAccessProfiles | Documents/Archiv-Zugang auch für Untergruppen Untergruppen als Zugriffsprofile zuweisen | Documents/Archiv-access for subgroups Assign subgroups as access profiles |
| LdapIgnoreLoginCase | Groß- Kleinschreibung von Benutzernamen ignorieren | Make usernames case insensitive |
|  | Konfiguration des Gruppenimports (Zugriffsprofile) | Group import configuration (accessprofiles) |
| syncProfiles true false | Gruppenimport | Group import |
| LdapGroupFilterGroupDN | Gruppe für Gruppenimport | Group for group import |
| LdapGroupDN | Organisationseinheit (OU) für Gruppe (wenn benötigt) | Organizational unit (OU) containing groups (only if needed) |
| LdapProfileSearchScope 0/1 ab LDAP 2.3.15 | Wert 0: Untergruppen für Zugriffsprofile liegen alle unmittelbar in der LdapGroupFilterGroupDN. Wert 1: Suche in allen Untergruppen rekursive und akzeptiere die dabei gefundenen Untergruppen ebenfalls als Zugriffsprofile. LdapRecursiveAccessProfiles muss true sein. | Value 0: Subgroups for accessprofiles are direct members of the LdapGroupFilterGroupDN. Value 1: traverse all members in LdapGroupFilterGroupDN recursively and accept all found subgroups as accessprofiles as well. LdapRecursiveAccessProfiles has to be true |
|  | LDAP Job | LDAP Job |
| LdapLoglevel 0/1/2/3/4/5 | Loglevel | Loglevel |