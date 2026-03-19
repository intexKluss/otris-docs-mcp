---
title: "EWS On Premise in DOCUMENTS konfigurieren"
source: "https://otris.software/documents/manuals/books/ews/ews-on-premise.html"
---

# EWS On Premise in DOCUMENTS konfigurieren

Für die generelle Anbindung von DOCUMENTS an einen selbst gehosteten Exchange Server, müssen einige Informationen zum Exchange-Server in DOCUMENTS über Properties angegeben werden. Weiterhin muss ein Konto zur Authentifizierung angegeben werden. Dieses Konto muss sich am Exchange-Server anmelden können um dann E-Mails für alle anderen Benutzer zu versenden. Dieses Konto kann dann als **Stellvertreter** (delegate) E-Mails im Auftrag der anderen Benutzer versenden. Es ist aber auch möglich mit diesem Konto einen **Identitätswechsel** (impersonation) durchzuführen, um eine E-Mail als ein anderer Benutzer zu versenden. Diesem Authentifizierungs-Kontos müssen dann jeweils die entsprechenden Rechte zugewiesen werden. Diese Rechte können global über das Exchange Admin Center (EAC) gesetzt werden. Rechte für einen Stellvertreter können auch von jedem Benutzer lokal in Outlook verwaltet werden.


## Hinweis zu TLS unter Windows

Der DOCUMENTS Server kommuniziert mit dem Exchange Server über TLS. Damit unter Windows die dafür benötigten CA-Zertifikate aus dem Windows CA store geladen werden können, muss in der `documents.ini` des DOCUMENTS Servers der folgende Eintrag ergänzt werden.


```language-.ini
CAPath WinCertStore
```


## Properties im DOCUMENTS Manager setzten

In den Einstellungen am Mandanten gibt es den Reiter **eMail-Service**. Darin befindet sich eine Checkbox **EMail-Service aktiv**. Diese Checkbox muss weiterhin gesetzt sein. Außerdem können die Felder Standard-Absender und Signatur optional verwendet werden. Alle anderen Einstellungen in diesem Reiter werden in DOCUMENTS 5 für EWS nicht berücksichtigt. Stattdessen müssen die folgenden Properties im Reiter **Eigenschaften** gesetzt werden.


### Exchange Server

- ExchangeOnPremiseServer: Die EWS-URL für den lokalen Exchange-Server. Beispiel: https://computer.domain.company.com/EWS/Exchange.asmx.


### Authentifizierungs-Konto

- ExchangeOnPremiseUser: Benutzername des Kontos.
- ExchangeOnPremisePasswordPlain: Passwort des Kontos. (Der Eintrag wird beim Versenden der ersten Mail gelöscht und stattdessen verschlüsselt in ExchangeOnPremisePassword abgelegt).
- ExchangeOnPremiseDomain: Domain des Kontos.

**Ab DOCUMENTS 6** werden diese Werte auch im Reiter **eMail-Service** in die neuen Felder für EWS On Premise eingetragen.


## Rechte für einen Stellvertreter vergeben

Der Stellvertreter muss jetzt die Erlaubnis erhalten, für jeden Benutzer E-Mails zu versenden und diese auch in den entsprechenden Ordnern zu speichern.

**Wichtig!** Der Stellvertreter muss das Recht haben, die E-Mail sowohl im Ordner **Gesendete Elemente** als auch im Ordner **Entwürfe** zu speichern.


### Rechte über das Exchange Admin Center verwalten

In der folgenden Microsoft Dokumentation ist beschrieben, wie die Rechte über das Exchange Admin Center (EAC) Rechte verwaltet werden können.

- Berechtigungen über das Exchange Admin Center verwalten


### Rechte in Outlook verwalten

Die Rechte, die dem Stellvertreter zugewiesen werden müssen, können auch in Outlook gesetzt werden, allerdings müssen sie dann von jedem Benutzer durchgeführt werden. In der folgenden Dokumentation ist beschrieben, wie eine Stellvertretung gesetzt wird, wie dieser Stellvertretung Rechte zugewiesen werden und wie die Zugriffsrechte für private Ordner verwaltet werden.

- Berechtigungen über Outlook verwalten


## Konfigurieren eines Identitätswechsels

In der folgenden Dokumentation von Microsoft wird beschrieben wie ein Identitätswechsel konfiguriert wird.

- Konfigurieren eines Identitätswechsels