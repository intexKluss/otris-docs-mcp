---
title: "Einbindung externer Ressourcen"
source: "https://otris.software/documents/howto/exit/externalResources.html"
---

# Einbindung externer Ressourcen

Mit Documents5 werden Erweiterungen wie z.B. das Gentable oder Tabledata nicht mehr über eine manuelle Anpassung der Installation, sondern über externe Ressourcen mit 'Tomcat 8 Resources' eingebunden. Diese Methode hat mehrere Vorteile gegenüber der in Documents4 verwendeten manuellen Anpassung:

- unabhängig von der Documents5 Installation
- bei einem Update bleiben die Erweiterungen erhalten und müssen nicht einzeln neu eingebunden werden.
- Erweiterungen liegen an einem zentralen Ort und nicht über diverse Verzeichnisse verteilt
- einfachere Backups


## Verzeichnisstruktur

Alle Erweiterungen sollten inerhalb einer eigenen Ordnerstruktur liegen (z.B. C:\documents-ext\ oder \home\user\documents-ext\). Um Probleme mit Leseberechtigungen und versehentliches löschen zu vermeiden wird dringend empfohlen den Ordner **nicht** im Documents5 Installationsverzeichnis oder im Programme Verzeichnis abzulegen.

Für ein System mit nur einem Mandanten wird die folgende Ordnerstruktur empfohlen:

- documents-ext
config
css
{Erweiterung A}
{Erweiterung B}
{...}
js
{Erweiterung A}
{Erweiterung B}
{...}
jsp
{Erweiterung A}
{Erweiterung B}
{...}
lib
resource

Die empfohlene Ordnerstruktur für ein System mit mehreren Mandanten sieht dabei wie folgt aus:

- documents-ext
config
css
{Mandant}
{Erweiterung A}
{Erweiterung B}
{...}
js
{Mandant}
{Erweiterung A}
{Erweiterung B}
{...}
jsp
{Mandant}
{Erweiterung A}
{Erweiterung B}
{...}
lib
resource


## documents.xml

Die documents.xml ist die Konfigurationsdatei für die externen Ressourcen in einem Tomcat 8 Context. In dieser wird angegeben, wo externe Ressourcen zu finden sind und wie diese in den Documents5 Web-Client eingebunden werden sollen.


### Speicherort

Die documents.xml muss in der Tomcat Installation hinterlegt werden. Der genaue Pfad ist dabei abhängig davon, ob der Tomcat aus der Documents5 Installation oder einer eigene Installation genutzt wird.

- Documents5 Tomcat Installation Windows
.../Documents5/tomcat8/conf/Documents/localhost/documents.xml
- Eigene Tomcat Installation Windows
.../tomcat/conf/Catalina/localhost/documents.xml
- Documents5 Installation Linux
/etc/documents5/documents-tomcat.xml


### Aufbau

Innerhalb der documents.xml wird festgelegt, wo die externen Dateien liegen und wie diese in den Documents5 Web-Client eingebunden werden sollen. Im folgenden Beispiel muss {documents-ext-path} gegen den lokalen Pfad zum documents-ext Verzeichnis ausgetauscht werden.


```xml
<?xml version="1.0" encoding="UTF-8"?>

<Context>

	<Resources>

		<PreResources base="{documents-ext-path}/css" webAppMount="/ext/css" className="org.apache.catalina.webresources.DirResourceSet" />

		<PreResources base="{documents-ext-path}/js" webAppMount="/ext/js" className="org.apache.catalina.webresources.DirResourceSet" />

		<PreResources base="{documents-ext-path}/jsp" webAppMount="/ext/jsp" className="org.apache.catalina.webresources.DirResourceSet" />

		<PreResources base="{documents-ext-path}/config" webAppMount="/WEB-INF/classes" className="org.apache.catalina.webresources.DirResourceSet" />

		<PreResources base="{documents-ext-path}/resource" webAppMount="/WEB-INF/classes" className="org.apache.catalina.webresources.DirResourceSet" />

		<PreResources base="{documents-ext-path}/lib" webAppMount="/WEB-INF/lib" className="org.apache.catalina.webresources.DirResourceSet" />

	</Resources>

</Context>
```

<?xml version="1.0" encoding="UTF-8"?>

<Context>

	<Resources>

		<PreResources base="{documents-ext-path}/css" webAppMount="/ext/css" className="org.apache.catalina.webresources.DirResourceSet" />

		<PreResources base="{documents-ext-path}/js" webAppMount="/ext/js" className="org.apache.catalina.webresources.DirResourceSet" />

		<PreResources base="{documents-ext-path}/jsp" webAppMount="/ext/jsp" className="org.apache.catalina.webresources.DirResourceSet" />

		<PreResources base="{documents-ext-path}/config" webAppMount="/WEB-INF/classes" className="org.apache.catalina.webresources.DirResourceSet" />

		<PreResources base="{documents-ext-path}/resource" webAppMount="/WEB-INF/classes" className="org.apache.catalina.webresources.DirResourceSet" />

		<PreResources base="{documents-ext-path}/lib" webAppMount="/WEB-INF/lib" className="org.apache.catalina.webresources.DirResourceSet" />

	</Resources>

</Context>
#### PreResources & PostResources Tags

Es gibt die Möglichkeit Pre- oder PostResources zu benutzen. Diese haben Einfluss darauf, welche Datei im Fall von Namenskollisionen Vorrang hat.


##### PreResources

Wenn PreResources verwendet wird, dann haben externe Dateien Vorrang vor Dateien, die mit der Documents5 Installation ausgeliefert werden.


##### PostResources

Werden PostResources verwendet haben, dann haben die mit Documents5 ausgelieferten Dateien Vorrang.


##### Parameter 'base'

Im Parameter 'base' wird der Pfad im Betriebssystem zu den Ordnern angegeben, welche eingebunden werden sollen. Der angegebene Pfad sollte hierbei absolut sein und nur "/" enthalten (keine "\").


##### Parameter 'webAppMount'

Im Parameter 'webAppMount' wird der URL-Pfad angegeben, unter dem die eingebundenen Dateien im Web-Client erreichbar sein sollen. Der angegebene Pfad wird dabei an den Application Context des Tomcat angehängt. Die Ordnerstruktur des externen Verzeichnisses bleibt dabei erhalten.
Wenn das externe Verzeichnis z.B. die Struktur C:/documents-ext/jsp/dopaag/script.jsp hat, wäre die script.jsp im Documents5 unter localost:8080/documents5/ext/jsp/dopaag/script.jsp erreichbar.


### Unterstützte Dateitypen

| Dateityp | Beispiele | webAppMount |
| --- | --- | --- |
| Grafiken | inbox.png | /ext/img |
| Stylesheet | tabledata.less | /ext/css |
| JavaScript | exit.js invoice.js tabledata.js | /ext/js |
| JSP | script.jsp table.jsp detail.jsp | /ext/jsp |
| XML-Konfigurationen | feature-config-dopaag.xml viewer-config.xml ftInvoice_def.xml log4j.xml | /WEB-INF/classes |
| Properties-Dateien (z.B. Lokalisierungen) | TableData_en.properties | /WEB-INF/classes |
| Java-Bibliotheken (z.B. JDBC-Treiber) | jtds-1.3.1.jar sqljdbc42.jar | /WEB-INF/lib |


## script.jsp

Über die script.jsp werden externe Skript-Ressourcen wie z.B. die invoice.js in Documents5 eingebunden.


### Speicherort

Es gibt zwei mögliche Speicherorte:

- /ext/jsp/script.jsp
mandantenunabhängig, eingebundene Ressourcen sind für alle Mandanten verfügbar
- /ext/jsp/{principal}/script.jsp
mandantenabhängig, eingebundene Ressourcen sind nur für den in {principal} definierten Mandanten verfügbar

Es können beide Varianten parallel verwendet werden.


### Beispiel


```javascript
<script type="text/javascript" src="./ext/js/dopaag/invoice.js"></script>
<script type="text/javascript" src="./ext/js/dopaag/exit.js"></script>
```

<script type="text/javascript" src="./ext/js/dopaag/invoice.js"></script>
<script type="text/javascript" src="./ext/js/dopaag/exit.js"></script>