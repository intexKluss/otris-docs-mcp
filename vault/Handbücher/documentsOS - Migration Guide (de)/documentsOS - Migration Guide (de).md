---
title: "documentsOS - Migration Guide"
source: "https://otris.software/documents/manuals/books/migration-doc6-de/"
---

# documentsOS - Migration Guide

Als **documentsOS** wird die neue Major-Version der otris ECM-Plattform für dokumentenbasierte Lösungen in der Cloud und On Premises bezeichnet. *documentsOS* ist die Weiterentwicklung von Documents 5 mit Neuerungen und Erweiterungen sowie Änderungen, die sich ggf. auf vorher verwendete Features auswirken (Breaking changes).

**Achtung:** Beachten Sie **vor der Umstellung einer vorhandenen Installation** neben dieser Dokumentation auf jeden Fall auch die **Übersicht zu besonders wichtigen Änderungen** siehe auch [Breaking changes](../../../howto/scripting/breaking.html) und dabei insbesondere folgende Punkte:

- Einschränkung der Skriptausführung (Sicherheitsfeature), siehe auch Einschränkung der Skriptausführung
- Wichtige Änderungen, die sich z.B. durch die Umstellung der Java-Script Engine von Mozilla SpiderMonkey auf V8 ergeben, siehe auch Scripting Breaking Changes.
- Neue Version von chart.js, siehe auch ChartJS 4
- Neue Version von fullcalendar.io, siehe auch Fullcalendar 6
- Änderung der Signaturschnittstelle otrSign, siehe auch Änderung der Signaturschnittstelle und Nachbereitungen (Windows) bzw. Nachbereitungen (Linux).

**Wichtiger Hinweis:** Insbesondere durch diese o.a. Änderungen darf bei Verwendung von speziellen Lösungen wie z.B. Vertragsmanagement, Beteiligungsmanagement, Vorgangsmanagement oder Schutzrechtmanagement aus der **otris legal suite** oder anderen Lösungen bzw. Partnerlösungen *documentsOS* nur verwendet werden, wenn diese **Lösungen dafür freigegeben sind**.

**Wichtiger Hinweis:** Mit **documentsOS** entfällt die Unterstützung von Oracle als Datenbanksystem für Documents-Daten, es werden ausschließlich nur noch Microsoft SQL Server und MariaDB in den jeweiligen Versionen unterstützt, die in den allgemeinen Systemvoraussetzungen angegeben sind. Wurde mit der vorhandenen Documents 5 Installation Oracle als Datenbanksystem verwendet, muss die Datenbank vor einer Umstellung selbständig mit geeigneten Mitteln ein auf eine unterstützte Version von Microsoft SQL Server oder MariaDB migriert werden. Für eine derartige Umstellung wird kein Support geleistet. Werden in einer Lösung externe Oracle-Datenbanken per Scripting angebunden, ist dies auch weiterhin möglich. In diesen Fällen **muss** immer eine *ODBC-Verbindung* verwendet werden, eine Verwendung von *dbType=oracle* ist **nicht mehr zulässig**, eine Umstellung von entsprechenden Scripten muss vor der Migration auf **documentsOS** erfolgen.

Nachfolgend wird beschrieben, wie eine bestehende *Documents 5 Installation* auf *documentsOS* umgestellt werden kann, dabei wird zwischen Installationen auf Microsoft Windows Systemen und Linux Systemen unterschieden.