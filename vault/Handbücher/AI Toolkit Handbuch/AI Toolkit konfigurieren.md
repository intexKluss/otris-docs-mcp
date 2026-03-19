---
title: "AI Toolkit konfigurieren"
source: "https://otris.software/documents/manuals/books/otr-ai/admincenter.html"
---

# AI Toolkit konfigurieren

Nach der Aktivierung der Erweiterung des *AI Toolkits* und der Beachtung der Voraussetzungen (siehe [Voraussetzungen und Aktivierung](requirements.html)) können im Admin Center unter dem Ordner des AI Toolkits weitere Einstellungen vorgenommen und Scouts, Copiloten, Prompts, Wissen, AI-Konfigurationen sowie Wissenssammlungen hinzugefügt werden.


![aitoolkit](./assets/aitoolkit.png?class=small)

Abb. 51 - AI Toolkit Konfigurationsordner

Bei Aufruf des jeweiligen Konfigurationsordners wird eine Liste mit vorhandenen Einstellungen dargestellt, in jeder Liste können per Aktion neue Konfigurationen vorgenommen oder vorher markierte Einstellungen gelöscht werden (Aktionsklappliste).


## AI-Konfiguration


### AI-Konfigurationen

Eine AI-Konfiguration speichert alle Einstellungen zum genutzten KI-Anbieter und den verwendeten Chatmodellen. Sie kann beliebig vielen Copiloten oder Scouts zugeordnet werden.

Als Minimaleinstellung muss hier ein KI-Service ausgewählt werden. Werden keine weiteren Einstellungen vorgenommen, werden die Standardwerte verwendet die beim Service hinterlegt wurden.


![getting-started-copilot-8](./assets/getting-started-copilot-8.png?class=large)

Abb. 52 - AI-Konfiguration bearbeiten


#### Einstellungsmöglichkeiten

- Chatmodell: Das gewünschte Sprachmodell, mit dem der Service arbeitet; die Auswahlliste zeigt alle vom gewählten Anbieter unterstützten Modelle.
- Transkribierungsmodell: Das Modell, das für Transkriptionen verwendet wird.
- Embeddingmodell: Das Modell zur Erstellung von Embeddings (siehe Kapitel Embeddings).
- Temperaturparameter: Ein Parameter mit gültigen Werten zwischen 0.0 bis 1.0, der angibt wie kreativ/zufällig die Antworten sein sollen. Diese Option kann deaktiviert werden, da einige Modelle (z. B. openAI o1 und o3) keine Temperatur unterstützen.
- Kontextgröße: Maximale Textgröße in KB, die das Modell gleichzeitig berücksichtigen kann. Größere Werte erlauben längere Eingaben, erhöhen aber den Tokenverbrauch.
- Vektordatenbank: Der Datenbankdienst zur Speicherung der Vektordaten, z. B. Qdrant.

**Hinweis zur Temperatur:** Temperaturangaben bestimmen in der Regel die Gewichtung von Kreativität in den Antworten der KI. Genauere Angaben sind beim jeweiligen KI-Anbieter nachzulesen. Meist stehen drei Temperatur-Levels zur Verfügung:

- Niedrige Temperatur (z.B. bei ChatGPT 0.1 - 0.4): Es werden präzise, neutrale Aussagen erzeugt
- Mittlere Temperatur (z.B. bei ChatGPT 0.5 - 0.7): Diese Einstellung hält die Balance zwischen Kreativität und Konsistenz
- Hohe Temperatur (z.B. bei ChatGPT 0.8 - 1.0): Mit dieser Temperatur generiert die KI kreative Antworten


### Nutzungshinweise

Nutzungshinweise informieren den Nutzer über Regeln, Datenschutz und Verantwortlichkeiten beim Einsatz des AI-Copiloten. Sie werden innerhalb der Anwendung vor der ersten Nutzung oder bei jedem Start des Copiloten angezeigt, je nach konfigurierter Anzeigemodus-Einstellung.


#### Anzeigemodus

Der Anzeigemodus legt fest, wie und wann die Nutzungshinweise für einen Copiloten angezeigt werden. Es stehen vier Optionen zur Verfügung:

- Nutzungshinweise nie anzeigen: Die Nutzungshinweise werden vor der Nutzung des Copiloten nicht angezeigt.
- Nutzungshinweise beim ersten Start anzeigen: Die Nutzungshinweise werden einmalig vor der ersten Nutzung des Copiloten angezeigt. Sobald sie akzeptiert werden, erscheinen sie nicht erneut.
- Nutzungshinweise jedes Mal zeigen (deaktivierbar durch Nutzer): Die Nutzungshinweise werden vor jeder Nutzung des Copiloten angezeigt. Der Nutzer kann jedoch die Option Nicht mehr anzeigen aktivieren und muss sie nur einmal akzeptieren.
- Nutzungshinweise jedes Mal anzeigen (nicht deaktivierbar): Die Nutzungshinweise werden vor jeder Nutzung des Copiloten angezeigt und können nicht ausgeblendet werden.


#### Nutzungshinweise

Hier können die Texte der Nutzungshinweise hinterlegt werden, die für den jeweiligen Copiloten gelten.
Die Nutzungshinweise lassen sich in Markdown formatieren.


![aiconfig-1](./assets/aiconfig-1.png?class=large)

Abb. 53 - Nutzungshinweise bearbeiten


##### Darstellung von Nutzungshinweisen im Copiloten


![aiconfig-2](./assets/aiconfig-2.png?class=large)

Abb. 54 - Ansicht der Nutzungshinweise im Copiloten


### Kontextgröße

Mithilfe der Kontextgröße kann limitiert werden, wie viel Text das Modell maximal gleichzeitig berücksichtigen kann. Größere Werte erlauben längere Eingaben. Die Kontextgröße wird in Kilobyte angegeben. Der Standard Wert von 0 steht für keine künstliche Limitierung, sodass im Standardfall die Limitierung von jeweiligen KI Modell abhängig ist.


![aiconfig-contextsize](./assets/aiconfig-contextsize.png?class=large)

Abb. 55 - AI-Konfiguration, Kontextgröße

Unabhängig davon, ob es durch das künstlich gesetzte Limit oder das natürliche Limit des jeweiligen KI Modells zur Überschreitung des Kontexts kam, wird eine `ContextLengthExceeded` Fehler ausgegeben.


![copilot-contextsize-exceeded](./assets/copilot-contextsize-exceeded.png?class=large)

Abb. 56 - Fehler, der die Überschreitung der Kontextgröße anzeigt

Sofern kein [Kontext-Verwalter](contextManager.html) konfiguriert ist, wird dieser Fehler garantiert sichtbar und "blockiert" die Chat Interaktion.

Es kann jedoch ein [Kontext-Verwalter](contextManager.html) eingerichtet werden, um bei Überschreitungen der Kontextgröße im Chat den Kontext der KI intelligent zu verwalten, sodass Dokumente nur auf die relevanten Informationen reduziert werden und Irrelevantes ausgeblendet wird.


## Copiloten

Ein *Copilot* ist ein KI-gestützter Chat (vergleichbar mit ChatGPT), der an beliebig viele Mappentypen geknüpft werden kann und direkt von einer entsprechenden Mappe geöffnet werden kann. Für Copiloten können *allgemeine* und *zusätzliche* Einstellungen vorgenommen werden.


### Allgemeine Einstellungen

- Name: Pflichtfeld, Angabe eines technischen Bezeichners ohne Sonderzeichen und Leerzeichen
- Bezeichner: Anzeigename der Schaltfläche an der Mappe um den Copiloten zu öffnen
- Label immer anzeigen: Zusätzlich zum Icon wird der Anzeigename auf dem Aktionsschalter immer dargestellt
- Icon: Das Icon für den Copiloten, Auswahl per Autovervollständigung möglich
- Copilot im Bearbeitungsmodus zeigen: Zeigt den Button zum Öffnen des Copiloten auch im Bearbeitungsmodus an
- Titel: Titel der im Copilot Chat angezeigt wird
- Willkommenstext: Willkommenstext der die erste Nachricht im Copiloten bildet
- AI-Konfiguration: AI-Konfiguration, die für diesen Copiloten benutzt wird (Siehe Unterkapitel "AI-Konfigurationen")
- Mappentypen: Es können Mappentypen ausgewählt werden, für die der Copilot verwendet werden soll


![copilot-general](./assets/copilot-general.png?class=large)

Abb. 57 - Copilot, allgemeine Einstellungen


### Zusätzliche Einstellungen

Auf dem Register *Einstellungen* können zusätzliche Einstellungen für den Copiloten vorgenommen werden. Dies betrifft insbesondere das anzuwendende **Systemwissen**, den **Speichermodus** und **Funktionen**, die im Copiloten zur Verfügung stehen.


![copilot-settings-1](./assets/copilot-settings-1.png?class=large)

Abb. 58 - Copilot, zusätzliche Einstellungen

**Hinweis:** Bei der Erstellung eines neuen Copiloten werden für Systemwissen und Funktionen sinnvolle Voreinstellungen gewählt. Anpassung sind möglich, sollten aber jeweils sorgfältig geprüft werden.


#### Speichermodus

Über die Einstellung des Speichermodus, kann gesteuert werden, ob und wie Chats gespeichert werden.


![copilot-settings-1](./assets/copilot-settings-5.png?class=medium)

Abb. 59 - Copilot, Speichermodus wählen


#### Wissen

*Wissen* kann aktiviert/deaktiviert werden, außerdem ist über das Stift-Symbol eine Bearbeitung möglich.


![copilot-settings-2](./assets/copilot-settings-2.png?class=large)

Abb. 60 - Copilot, Wissen bearbeiten


![copilot-settings-2](./assets/copilot-settings-4.png?class=small)

Abb. 61 - Copilot, Wissenstyp wählen


#### Funktionen

Bei *Funktionen* kann eingestellt werden, ob diese durch den Benutzer und/oder den Copiloten ausführbar sind. Es wird außerdem zwischen zwischen **Funktionen für Mappe** und **Globalen Funktionen** unterschieden.


![copilot-settings-3](./assets/copilot-settings-3.png?class=large)

Abb. 62 - Copilot, Funktionen hinzufügen


### Wissenssammlungen

Über den letzten Reiter **"Wissenssammlungen"** können dem Copiloten Wissenssammlungen zugeordnet werden.


![copilot-general](./assets/index-docs-02.png?class=large)

Abb. 63 - Copilot, Wissenssammlungen


#### Konfigurationsmöglichkeiten

- Anzahl Ergebnisse pro Recherche: Die Anzahl der Ergebnisse, die pro Recherchevorgang zurückgegeben werden
- Relevanzschwelle: Der minimale Score, den ein Ergebnis erreichen muss, um berücksichtigt zu werden (Wert von 0.0 = keine Anforderungen bis 1.0 = maximale Anforderungen, Treffer wird nur bei höchster Relevanz gewertet)
- Vorherige Zusatzchunks: Legt fest, wie viele vorherige Chunks ergänzt werden, falls ein Treffer über mehrere Chunks hinweg verteilt ist und daher für den vollständigen Kontext zusätzliche Abschnitte benötigt
- Nachfolgende Zusatzchunks: Legt fest, wie viele nachfolgende Chunks ergänzt werden, siehe vorherige Zusatzchunks


## Scouts

Der [Scout](scout-user.html) ist ein KI-Tool zur **Dokumenten- und Datenanalyse**. Er durchsucht Dokumentenbestände (mehrere Mappen/Ordner) nach relevanten Inhalten und extrahiert daraus **strukturierte Informationen**. Damit kann der Scout zur Suche oder als Auswertungstool genutzt werden.

Über die Einstellungen im **Admincenter** lassen sich mehrere Scouts anlegen:


![scout-list](./assets/scout-admin-list.png)

Abb. 64 - Liste mit Scouts im AdminCenter


### Folgende Einstellungen können getroffen werden

- Name: Eindeutige (technische) Kennung des Scouts. Der Name kann nach der ersten Anlage nicht mehr verändert werden.
- Bezeichner: Der Bezeichner des Scouts, so wie er unter anderem als Aktion am Ordner angezeigt wird.
- Icon: Das Icon des Scouts, so wie es unter anderem an der Aktion am Ordner angezeigt wird.
- AI-Konfiguration: AI-Konfiguration, die für diesen Scout benutzt wird (Siehe Unterkapitel "AI-Konfigurationen")
- Ordner: Hier können Ordner ausgewählt werden, an denen der Scout als Aktion verfügbar sein soll.


![scout-config](./assets/scout-admin-config.png)

Abb. 65 - Scout Einstellungen


## Prompts und Wissen

Der Copilot und das AI Toolkit bieten die Möglichkeit sich vorgefertigte Prompts und Unternehmenswissen abzuspeichern, um dieses Im Rahmen von Chats und Skripten einzusetzen. Hierbei ist zwischen "Wissen" und "Prompts" zu unterscheiden, sowie zwischen der Nutzung im Copilot und im Skript. Allgemeine Hinweise zu Prompts und Wissen können hier nachgelesen werden [Copilot personalisieren: Prompts, Wissen und Wissensammlungen](prompts-knowledge) bzw. [Prompting best practices](prompting-best-practices.html).


### Prompts

Für *Prompts* können folgende Einstellungen angegeben werden.

- Bezeichner: Pflichtfeld, ein Bezeichner für den Prompt, dieser Bezeichner wird im Copiloten angezeigt
- Kategorie: Frei definierbare Kategorie zum Sortieren aller Prompts in der Übersichtsleiste.
- Schlüssel: Optional: Wird ausschließlich für die Verwendung im Skripting benötigt und dient zur eindeutigen Identifizierung des Prompts. Dieser Schlüssel kann per API verwendet werden. Siehe API getPromptByKey(key)
- Copiloten: Es können ein oder mehrere Copiloten aus der Liste ausgewählt werden, bei denen dieser Prompt verwendet werden kann. Für eine Verwendung ausschließlich aus Skripten heraus kann dieses Attribut auch leer gelassen werden. Für eine Verwendung im Copiloten ist es zwingend notwendig.
- Bezeichner im Chatverlauf: Label, das im Chatverlauf statt des Prompts angezeigt wird
- Label zeigen: Aktivierungseinstellung, ob definierter Bezeichner im Chat angezeigt werden soll
- Nachricht als Autotext auswerten: In der Nachricht können alle documentsOS-Autotexte mit der bekannten Syntax angegeben werden, z.B. %currentDate%, ist dies der Fall, muss dies hier aktiviert werden
- Nach Benutzung ausblenden: Falls aktiv wird der Prompt im Copiloten nach einer Benutzung automatisch ausgeblendet und kann nicht erneut ausgewählt werden
- Bearbeiten vor dem Senden: Falls aktiv hat der Nutzer die Möglichkeit den Prompt vor dem Absenden noch zu bearbeiten. AutoTexte werden hierbei zuvor ausgewertet. Der Nutzer kann keine AutoTexte hinzufügen.
- Nachricht: Der Prompt als Text, ggf. in Verbindung mit Autotexten


![prompt-1](./assets/prompt-1.png?class=large)

Abb. 66 - Prompt, Einstellungen

Beispiel: Darstellung eines Prompts im Copiloten:


![prompt-2](./assets/prompt-2.png?class=medium)

Abb. 67 - Prompt im Copiloten


### Wissen

Für *Wissen* können nachfolgende Einstellungen angegeben werden.

- Bezeichner: Pflichtfeld, ein Bezeichner für das Wissen, dieser Bezeichner wird im Copiloten angezeigt
- Kategorie: Frei definierbare Kategorie zum Sortieren des Wissens in der Übersichtsleiste.
- Schlüssel: Optional, wird ausschließlich für die Verwendung aus dem Skripting benötigt und dient zur eindeutigen Identifizierung des Wissens, dieser Schlüssel kann per API verwendet werden, siehe API getKnowledgeByKey(key)
- Typ: Steuert ob es sich bei dem Wissen um "Systemwissen" oder "Im Chat aktivierbares Wissen" handelt. Ersteres wird immer automatisch mitgeschickt, während letzteres nur nach Aktivierung an den KI-Dienst übermittelt wird.
- Copiloten: Es können ein oder mehrere Copiloten aus der Liste ausgewählt werden, bei denen dieses Wissen verwendet werden kann. Für eine Verwendung ausschließlich aus Skripten heraus kann dieses Attribut auch leer gelassen werden. Für eine Verwendung im Copiloten ist es zwingend notwendig.
- Bezeichner im Chatverlauf: Label, das im Chatverlauf statt des Prompts angezeigt wird
- Label zeigen: Aktivierungseinstellung, ob definierter Bezeichner im Chat angezeigt werden soll
- Nachricht als Autotext auswerten: In der Nachricht können alle documentsOS-Autotexte mit der bekannten Syntax angegeben werden, z.B. %currentDate%, ist dies der Fall, muss dies hier aktiviert werden
- Nachricht: Das Wissen als Text, ggf. in Verbindung mit Autotexten


![knowledge-1](./assets/copilot-settings-2.png?class=large)

Abb. 60 - Copilot, Wissen bearbeiten

Beispiel: Darstellung von Wissen im Copiloten:


![knowledge-2](./assets/knowledge-2.png?class=medium)

Abb. 68 - Wissen im Copiloten