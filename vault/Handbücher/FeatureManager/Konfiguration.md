---
title: "Konfiguration"
source: "https://otris.software/documents/manuals/books/feature-manager/configuration.html"
---

# Konfiguration


## Konfiguration mit XML-Datei

Der FeatureManager wird mit Hilfe einer XML-Datei (`feature-config-<principal>.xml`) konfiguriert, wobei `<principal>` durch das Kürzel des DOCUMENTS-Mandanten zu ersetzen ist. Die XML-Datei muss im Verzeichnis `/web/WEB-INF/classes` Ihrer Portal-Installation abgelegt werden. Hierzu kann auch der [externe Kontext des Tomcats](../../../howto/exit/externalResources.html) verwendet werden.
Um eine neue Konfiguration zu erstellen, ist es am einfachsten, das Beispiel zu kopieren und nach Bedarf anzupassen.
Die Konfiguration beginnt am Dateianfang mit dem Eintrag `<FeatureConfigs principal="">`. Tragen Sie hier zunächst das Kürzel des Mandanten ein.
Im weiteren Verlauf der Konfigurationsdatei folgen eine Reihe von Einträgen des Schemas `<FeatureConfig name="...">`. Diese repräsentieren jeweils eine spezielle Konfiguration der Web-Oberfläche. Die Konfigurationen werden immer über ihren Namen (`name="..."`) angesprochen (beispielsweise in einer *QuickView*-URL).

Mit Hilfe der globalen Eigenschaft `featureConfigName` kann der Name der XML-Datei, abweichend zum Standard `feature-config-<principal>.xml`, beliebig festgelegt werden. So lassen sich beispielsweise einheitliche Konfigurationen, welche für mehrere unterschiedliche Mandanten verwendet werden sollen, einfach erstellen. Der Dateiname folgt dabei folgendem Muster: `feature-config-<featureConfigName>.xml`


## Konfiguration mit globaler Eigenschaft

Mit Hilfe der globalen Eigenschaft `featureConfig` kann (ab Version 5.0f) alternativ zur o.a. Konfiguration über eine XML-Datei eine Feature-Konfiguration im DOCUMENTS-Manager hinterlegt werden. Der Typ der globalen Eigenschaft muss hier nicht ausgefüllt werden. Dabei wird der gleiche Inhalt und das selbe Format wie in der `feature-config-<principal>.xml` Konfigurationsdatei akzeptiert. Falls für einen Mandanten (ggf. versehentlich) eine XML-Datei und eine globale Eigenschaft gleichzeitig hinterlegt wurden, so wird lediglich die Konfiguration aus der globalen Eigenschaft verwendet.

![Globale Eigenschaft featureConfig](assets/feature-config-property.png)


## Mandantenübergreifende Konfiguration

Es ist ebenfalls möglich (ab Version 5.0f), eine globale, mandantenübergreifende FeatureManager-Konfiguration zu hinterlegen, auf die *sämtliche* Mandanten einen Zugriff haben. Diese gilt *zusätzlich* zu ihrer eigenen mandantenspezifischen Konfiguration. Dabei wird grundsätzlich der gleiche Inhalt und das selbe Format wie in der o.a. `feature-config-<principal>.xml` Konfigurationsdatei akzeptiert. Eine Ausnahme ist hier das Attribut `principal` auf `<FeatureConfigs>`, welches einfach entfällt. Der Dateiname dieser Konfiguration lautet, abweichend zur mandantenspezifischen Konfiguration, stets `feature-config-base.xml`.

Sämtliche `<FeatureConfig>`-Elemente aus einer mandantenübergreifenden Konfiguration werden automatisch jeder mandantenabhängigen Konfiguration zur Verfügung gestellt. Diese Elemente müssen jedoch stets gesondert über die globale Eigenschaft `baseFeatureConfigs` (s.u.) aktiviert werden.
Falls einmal ein `<FeatureConfig>`-Element mit gleichem Namen (Attribut `name`) in der mandantenübergreifenden und mandantenabhängigen Konfiguration gleichzeitig hinterlegt ist, so wird immer nur das komplette mandantenabhängige Element berücksichtigt.

Mit der globalen Eigenschaft `baseFeatureConfigs` werden für einen konkreten Mandanten diejenigen `<FeatureConfig>`-Elemente aus der mandantenübergreifenden FeatureManager-Konfiguration definiert, welche automatisch aktiviert werden sollen. Der Wert dieser Eigenschaft muss als eine kommaseparierte Auflistung von `<FeatureConfig>`-Namen (Attribut `name`) hinterlegt werden. Umgekehrt formuliert bedeutet das: Falls eine in der `feature-config-base.xml` definierte `<FeatureConfig>` in den Werten von `baseFeatureConfigs` nicht aufgeführt ist, so wird sie für den betreffenden Mandanten auch nicht angewendet.

Falls einmal ein bestimmtes `<Feature>`-Element in mehr als einer dieser `<FeatureConfig>`s gleichzeitig vorkommt, so ist immer die in `baseFeatureConfigs`**zuletzt** aufgelistete Konfiguration gültig.

Hinweis: Eine mandantenübergreifende Konfiguration ist insbesondere auch dann möglich, falls aktuell (noch) *gar keine* mandantenabhängige Konfiguration hinterlegt ist.


### Beispiel FeatureConfig "design20"

Die `FeatureConfig` "design20" aus der mandantenübergreifenden Konfigurationsdatei `feature-config-base.xml` ist in jeder DOCUMENTS Installation (ab Version 5.0f) bereits vorinstalliert.
Weitere mandantenunabhängige `FeatureConfig`s können hier beliebig hinzugefügt werden.


```xml
<?xml version="1.0" encoding="UTF-8"?>

<FeatureConfigs>

	<FeatureConfig name="design20">

		<Feature name="SingleOutbar" active="false" />
		<Feature name="CreateFileZone" active="true" />
		<Feature name="FolderTreeVisualizationType" value="sidebar" />

        ...

	</FeatureConfig>

	<FeatureConfig name="custom1">

       ...

	</FeatureConfig>

</FeatureConfigs>
```

<?xml version="1.0" encoding="UTF-8"?>

<FeatureConfigs>

	<FeatureConfig name="design20">

		<Feature name="SingleOutbar" active="false" />
		<Feature name="CreateFileZone" active="true" />
		<Feature name="FolderTreeVisualizationType" value="sidebar" />

        ...

	</FeatureConfig>

	<FeatureConfig name="custom1">

       ...

	</FeatureConfig>

</FeatureConfigs>Mit der globalen Eigenschaft `baseFeatureConfigs` kann nun die mandantenübergreifende `FeatureConfig``design20` für einen konkreten Mandanten aktiviert werden. Weitere Werte lassen sich nach Belieben kommasepariert auflisten.

![Globale Eigenschaft baseFeatureConfig](assets/base-feature-config-property.png)


## Features aktivieren und deaktivieren

Innerhalb jeder `<FeatureConfig>` gibt es eine Reihe von `<Feature name="..." active="..." />` Elementen.
Jedes dieser Elemente repräsentiert einen Schalter, mit dem ein bestimmtes Feature der Web-Oberfläche an- oder abgeschaltet werden kann. In der Regel sollen bestimmte Features (wie Monitor, Eingang, Status, Volltextsuche, etc.) abgeschaltet werden.
Die Namen der Feature-Schalter sind fest vorgegeben (daher das Beispiel) und jeder gehört zu einer bestimmten Feature-Konfiguration (s.o.). Einen Überblick über alle Features erhalten Sie am Ende der Dokumentation.
Ob ein Feature aktiviert oder deaktiviert werden soll, wird durch das Attribut `active` konfiguriert. Standardmäßig ist ein Feature immer eingeschaltet, insbesondere auch dann, wenn es gar nicht in der Konfiguration vorkommt!
In der Beispieldatei gibt es bisher zwei Konfigurationen, `default` und `minimal`. Diese sind zwei Extrembeispiele. In `default` sind alle Features ein- und in `minimal` sind sämtliche (bis zum jetzigen Zeitpunkt konfigurierbare Features) ausgeschaltet. Über jedem Feature-Schalter ist in der Beispielkonfiguration kurz dokumentiert, welchem Zweck das Feature dient. Die Einstellungen der *Default*-Konfiguration wirken sich sofort auf alle am Mandanten arbeitenden Benutzer aus.


## Konfiguration für Benutzer

Zur individuellen Konfiguration eines bestimmten Benutzers muss am Benutzer im **DOCUMENTS**-Manager die Eigenschaft  `defaultFeatureConfig` angelegt werden. Der Wert der Eigenschaft ist der Name der Konfiguration in der XML-Datei.


![Konfiguration für Benutzer](assets/defaultFeatureConfig01.png)

Abb. 1 - Konfiguration für Benutzer


## Konfiguration für Zugriffsprofile

Analog zu Konfiguration für Benutzer ist es möglich, die Eigenschaft `defaultFeatureConfig` ebenfalls für die  Zugriffsprofile anzulegen.


![Konfiguration für Zugriffsprofile](assets/defaultFeatureConfig02.png)

Abb. 2 - Konfiguration für Zugriffsprofile