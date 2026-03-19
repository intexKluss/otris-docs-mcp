---
title: "Regel- und Vorlagenverwaltung"
source: "https://otris.software/documents/manuals/books/otrlifecycle/main-list.html"
---

# Regel- und Vorlagenverwaltung

Nach der Bereitstellung kann per Klick auf den Konfigurationsordner die Regel- und Vorlagenverwaltung geöffnet werden. In der Liste stehen verschiedenen Aktionen bereit, die nachfolgend beschrieben werden.


## Vorgangsart konfigurieren

Um Regeln und Vorlagen mit Bezug zur Vorgangsart (Mappentyp) erstellen zu können, müssen zunächst per Aktion **Vorgangsart konfigurieren** die Vorgangsarten eingestellt werden, für die *otrLifeCycle* aktiviert werden sollen. Im nachfolgenden Dialog kann gewählt werden, ob die Einstellungen festgelegt oder entfernt werden sollen.

- Ist Einstellungen festlegen angegeben, werden in der zusätzlichen Auswahlliste alle Vorgangsarten dargestellt, für die noch keine Konfiguration vorgenommen wurde, bei OK werden die Einstellungen für die Vorgangsart angewendet.
- Ist Einstellungen entfernen angegeben, werden in der zusätzlichen Auswahlliste alle Vorgangsarten dargestellt, für die bereits eine Konfiguration vorgenommen wurde, diese Einstellungen werden bei OK entfernt.

**Wichtiger Hinweis:** Bei **Einstellung festlegen** werden für die gewählte Vorgangsart (Mappentyp) neue Felder und Eigenschaften angelegt. In Abhängigkeit von der Anzahl bereits existierender Vorgänge kann die Durchführung der Aktion einige Zeit in Anspruch nehmen. Den neuen Felder **otrLifeCycleAction** und **otrLifeCycleTimestamp** werden in der Folge durch die Regeln automatisch Werte zugewiesen, die durch den Documents-Server verarbeitet werden. Beide Felder dürfen nicht durch andere Aktionen (z.B. eigenes Scripting) bearbeitet bzw. beschrieben werden. Die Felder sind nicht für die Mappenansicht vorgesehen, generell sind manuelle Änderungen an den Feldern nicht zulässig. Die neuen Eigenschaften **LifeCycleEnabled**, **LifeCycleActionField** und **LifeCycleTimestampField** werden ebenfalls vom Documents-Server verarbeitet, auch diese Eigenschaften dürfen nicht manuell geändert werden.


## Regeln erstellen und bearbeiten

Eine neue Regel wird über die Aktion **+ Neue Regel** erstellt.
Eine bereits vorhandene Regel kann per Klick auf die Regel in der Liste zur Bearbeitung geöffnet werden.
Wird eine neue Regel erstellt, müssen im entsprechenden Dialog zunächst folgende Angaben gemacht werden:

- Vorgangsart: Die entsprechende Vorgangsart ist aus der Liste auszuwählen. Ist die Liste leer, wurden noch keine Vorgangsarten konfiguriert.
- Name: Es ist ein Regelname anzugeben. Da der Regelname an verschiedenen Stellen angezeigt wird, sollten sprechende Angaben verwendet werden. Der Regelname kann auch lokalisiert mit entsprechender Notation angegeben werden, z.B.: de:Ausgelaufene Verträge archivieren;en:Archive expired contracts oder pf:Property-File-Key.

Optional kann eine Beschreibung für die Regel angegeben werden. Da die Beschreibung an verschiedenen Stellen angezeigt wird, sollten *sprechende* Angaben verwendet werden. Die Beschreibung kann auch lokalisiert mit entsprechender Notation angegeben werden, z.B.: **de:Ausgelaufene Verträge 1 Jahr nach Ablauf archivieren;en:Archive expired contracts 1 year after expiration** oder **pf:Property-File-Key**.

Existieren Vorlagen, kann eine Regel auch aus einer Vorlage erstellt werden. Per Klick in das Feld **Vorlage anwenden** wird eine Liste bestehender Vorlagen zur Auswahl angeboten.


![new-rule-1](assets/new-rule-1.png)

Abb. 6 - Neue Regel erstellen

Mit **Weiter** müssen im nächsten Schritt die durchzuführende Aktion, der Zeitpunkt und optional zusätzliche Bedingungen für die Regel angegeben werden:

**Hinweis:** Während bei Verwendung von **Documents 5** die weitere Bearbeitung der Regel in einem Dialog erfolgt, wird bei Verwendung von **documentsOS** ein Formular geöffnet. Die Einstellungen zur Regel sind aber in derselben Art und Weise vorzunehmen.


![new-rule-2](assets/new-rule-2.png)

Abb. 7 - Neue Regel einstellen


### Aktionseinstellungen

**Wichtiger Hinweis:** Für alle nachfolgend dargestellten Aktionen gilt, dass sie zum eingestellten Zeitpunkt unter Berücksichtigung der optional angegebenen Bedingungen vom Documents-Server im Kontext des **Job-Benutzers** (Documents-Einstellungen) ausgeführt werden. Dieser dort angegebene Benutzer muss Berechtigungen zum Ausführen der Aktionen für die entsprechenden Vorgänge haben. Dies betrifft insbesondere Mappenrechte an den Vorgangsarten (Mappentypen) und ggf. konfigurierte ACL/GACL Einstellungen.

Bei folgenden Events wird für konfigurierte Vorgangsarten zusätzlich automatisch geprüft, ob zukünftige Regeln angewendet werden müssen:

- nach dem Archivieren eines Vorgangs (afterArchive)
- nach dem Speichern eines Vorgangs (afterSave)
- nach der Änderung von Referenzfeldern eines Vorgangs (afterAutoUpdateByRefFields)
- nach der Durchführung einer Aktion (afterLifeCycleAction)

**Hinweis:** Werden Vorgänge per Scripting geändert, führen die Methoden *DocFile.startEdit()* mit anschließendem *DocFile.commit()* automatisch eine Regelprüfung durch. Wird stattdessen die Methode *DocFile.sync()* verwendet, muss der optionale Parameter *checkLifeCyleScript* mit *true* angegeben sein, damit eine Regelprüfung automatisch durchgeführt wird.

Folgende Aktionen und Zusatzeinstellungen können gewählt werden:

| Aktion | Zusatzeinstellung | Bemerkung |
| --- | --- | --- |
| Archivieren | Vorgang archivieren und beibehalten Vorgang archivieren und löschen | Der Vorgang wird archiviert und je nach Zusatzeinstellung beibehalten oder gelöscht. Der an der Vorgangsart eingestellte Archivserver wird zur Information dargestellt. |
| Löschen | Standard Wiederherstellbar Rückstandslos | Standard: löscht den Vorgang, Wiederherstellbar: Verschiebt den Vorgang in den Gelöscht-Ordner des Job-Benutzers, Rückstandslos: löscht den Vorgang und alle archivierten Versionen |
| Benutzerdefiniert | Workflow starten Script starten | Der zu startende Workflow bzw. das auszuführende Script sind auszuwählen. |

**Hinweis:** Die Aktion *Benutzerdefiniert / Workflow starten* steht nur zur Verfügung, wenn an der entsprechenden Vorgangsart mindestens ein Workflow als *Zulässiger Workflow* angegeben ist. Die Aktion *Benutzerdefiniert / Script starten* steht nur zur Verfügung, wenn Scripte mit der Eigenschaft *LifeCycleEnabled=1* vorhanden sind. Sind keine Workflows und Scripte konfiguriert, ist keine benutzerdefinierte Aktionseinstellung möglich.

**Hinweis:** Wenn die Aktion *Löschen / Rückstandslos* zur Löschung von Vorgängen und aller damit verbundenen archivierten Versionen verwendet werden soll, müssen mindestens für den *Job-Benutzers* Mappenrechte zum Löschen an der Vorgangsart konfiguriert sein, da das Löschen von archivierten Vorgängen besonderen Restriktionen unterliegt.

Wurde eine Archivaktion erstellt, kann über die zusätzliche Auswahlliste **Zu verwendende Archiv Aufbewahrungsfrist** eine sogenannte *Archive-RetentionPolicy* angegeben werden. Diese Archive-RetentionPolicy ermöglicht das automatische Löschen archivierter Vorgänge zu bestimmten Zeitpunkten. Archive-RetentionPolicies werden direkt im Archiv konfiguriert, standardmäßig sind bei jeder EAS-Archivinstallation einige Policies bereits vorhanden, diese können über Archivfunktionalitäten oder per Documents-Manager geändert oder erweitert werden.


![new-rule-archive-policy](assets/new-rule-archive-policy.png)

Abb. 8 - Archivregel mit Archiv Aufbewahrungsfrist


### Einstellungen zum Zeitpunkt

Für jede Regel muss ein Zeitpunkt angegeben werden, zu dem die Aktion ausgeführt wird.

- Im Feld Referenzzeitpunkt werden per Autocomplete alle Felder vom Typ Datum bzw. Zeitstempel der Vorgangsart angeboten. Zusätzlich stehen immer die Einträge Angelegt am und Geändert am zur Auswahl bereit.
- Im Feld Verzögerung ist ein ganzzahliger numerischer Wert anzugeben.
- Im Feld Einheit ist auszuwählen, nach welcher Zeitspanne die Aktion durchgeführt werden soll.

Wurde eine Löschaktion erstellt, kann über die zusätzliche Checkbox **Wirksam nach Ende Kalenderjahr** festgelegt werden, dass die Aktion immer erst nach Ablauf des über die sonstigen Zeitpunkteinstellungen festgelegten Kalenderjahres ausgeführt wird, wenn Vorschriften oder gesetzlichen Regelungen dies vorschreiben.


![new-rule-delete-time](assets/new-rule-delete-time.png)

Abb. 9 - Löschregel mit Wirksamkeit Ende Kalenderjahr


### Optionale Einstellungen für Bedingungen

Die Einstellung für Bedingungen für Regeln ist optional.


![rule-condition-1](assets/rule-condition-1.png)

Abb. 10 - Keine Bedingung angegeben

Bedingungen können komplex aufgebaut sein:

- fügt eine einzelne Bedingung hinzu
- fügt eine Gruppe von Bedingungen hinzu

Wird mehr als eine Bedingung angegeben (*+*), kann gewählt werden, ob diese mit **Und** bzw. **Oder** verbunden werden soll:


![rule-condition-2](assets/rule-condition-2.png)

Abb. 11 - Mehrere Bedingungen

Per Klick in das erste Konfigurationsfeld werden die relevanten Felder der Vorgangsart gruppiert nach Typ zur Auswahl angeboten:


![rule-condition-autocomplete](assets/rule-condition-autocomplete.png)

Abb. 12 - Autocomplete für Bedingungen

Im zweiten Feld wird ein passender Operator aus der Auswahlliste ausgewählt. Die möglichen Auswahllisteneinträge sind abhängig vom jeweiligen Feldtyp. Im dritten Feld muss dann ein entsprechender Wert angegeben werden.

Beispiel für eine komplexe Bedingung:


![rule-condition-3](assets/rule-condition-3.png)

Abb. 13 - Beispielbedingung

Erläuterung: Die Bedingung trifft zu, wenn das Feld **crmStatus** dem Wert **'Closed'** entspricht **UND** das Feld **crmAccount** entweder den Wert **'Printseller'** oder den Wert **'Meier'** oder den Wert **'Oasis'** enthält (**ODER** Verknüpfung). Die Werte sind in diesem Fall mit einfachen Hochkommas anzugeben.

Bei der Konfiguration von Bedingungen sind Feldtypen insbesondere für numerische und datumsbezogene Angaben zu beachten:

- werden numerische Felder verwendet, muss die Angabe des Wertes in der Schreibweise n.m erfolgen, also z.B. 1000.00 (Dezimaltrennzeichen als ., ohne Tausendertrennzeichen)
- werden Datumsfelder oder Zeitstempelfelder verwendet, kann der Wert entweder ein AutoText, z.B.: currentDate-1 oder eine Konstante sein, z.B.: 2025-12-31. Erfolgt die Angabe des Wertes als Konstante, muss das Format der Schreibweise für ISO 8601 entsprechen, also z.B.: bei Datumswerten mit YYYY-MM-DD z.B.: 2025-12-31 (für den 31. Dezember 2025)
bei Zeitstempelwerten mit YYYY-MM-DDThh:mm:ss.uuuZ z.B.: 2025-12-31T12:00:00.001+00:00 (eine Millisekunde nach 12:00:00 Uhr am 31. Dezember 2025 in der Zeitzone UTC)


### Zusätzliche Einstellungen im Regeleditor

Im Regeleditor ist es zusätzlich möglich, Bezeichnungen für Regeln anzupassen, Regeln zu duplizieren, Regeln zu aktivieren/deaktivieren und Regeln zu löschen, dazu können folgende Aktionsschalter benutzt werden:


![rule-actions](assets/rule-actions.png)

Abb. 14 - Regel-Aktionsschalter

- ermöglicht die Bearbeitung von Name und Bezeichnung
- ermöglicht das Duplizieren einer Regel
- ermöglicht das Aktivieren/Deaktivieren einer Regel
- löscht eine Regel nach Rückfrage

Werden Änderungen an Regeln durchgeführt, sind diese Änderungen per **Übernehmen***(bei Verwendung von Documents 5)* bzw. per **Speichern***(bei Verwendung von documentsOS)* zu speichern.
Per Aktionsschalter **Als Vorlage speichern** können im Regeleditor auch neue Vorlagen direkt erstellt werden.


## Regeln anwenden

Werden neue Regeln erstellt oder vorhandene Regeln geändert bzw. gelöscht, ist es erforderlich, diese Änderungen auf bestehende Vorgänge zu übertragen. Dazu wird die Aktion **Regeln anwenden** verwendet. Im Dialog können ein oder mehrere Vorgangsarten gewählt werden, für die Regeln angewendet werden sollen. Per **OK** wird die Aktion ausgeführt.


![apply-rules](assets/apply-rules.png)

Abb. 15 - Regeln anwenden

**Wichtiger Hinweis:** In Abhängigkeit von der Anzahl bereits existierender Vorgänge kann die Durchführung der Aktion einige Zeit in Anspruch nehmen. Eine Hinweismeldung (Notification) informiert über den Fortschritt.


## Vorlagen erstellen und bearbeiten

Eine neue Vorlage wird über die Aktion **+ Neue Vorlage** erstellt.
Eine bereits vorhandene Vorlage kann per Klick auf die Vorlage in der Liste zur Bearbeitung geöffnet werden.
Die Erstellung und Bearbeitung von Vorlagen entspricht mit wenigen Unterschieden der Erstellung und Bearbeitung von Regeln:

- Bei der Erstellung von Vorlagen ist die Angabe einer Vorgangsart optional
- Wird keine Vorgangsart angegeben, können nur bestimmte Aktionen verwendet werden (Löschen und Benutzerdefiniert / Script starten, Script starten nur, wenn Scripte mit der entsprechenden Eigenschaft vorhanden sind)
- in den Autocomplete-Feldern bei Referenzzeitpunkt bzw. bei Bedingungen stehen in diesem Fall auch nur allgemeine Felder zur Verfügung
- Vorlagen können nicht aktiviert/deaktiviert werden

Alle weiteren Einstellungen sind identisch mit denen der Erstellung und Bearbeitung von Regeln.


## Zusätzliche Aktionen

In der Aktionsklappliste stehen zusätzliche Aktionen zur Verfügung:


![additional-actions](assets/additional-actions.png)

Abb. 16 - Zusätzliche Aktionen

- Exportieren exportiert vorher markierte Regeln und Vorlagen als Datei im JSON-Format und bietet die Datei zu Download an
- Importieren öffnet einen Importdialog zum Import von Regeln und Vorlagen, es muss eine korrekte Datei im JSON-Format bereitgestellt werden, die z.B. mit einem vorherigen Export erstellt wurde
- Beispielvorlagen importieren importiert Beispielvorlagen (globale Beispiel-Löschregeln ohne Vorgangsbezug)