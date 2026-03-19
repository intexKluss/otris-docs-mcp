---
title: "FileSendConfiguration"
source: "https://otris.software/documents/manuals/books/feature-manager/fileSendConfiguration.html"
---

# FileSendConfiguration

Mit dem FileSendConfiguration-Feature kann der Responsive-Modus für den Versenden-Dialog eingeschaltet werden.
Hier wirken sich Änderungen am Worflow direkt aus, ohne das diese explizit bestätigt werden müssen.

![Reponsive Versenden-Dialog](assets/fileSendConfigurationDialog.png)


## Einschalten des Responsive-Modus


```xml
<Feature name="FileSendConfiguration" active="true" />
```

<Feature name="FileSendConfiguration" active="true" />
## Expertenmodus

Im Standardfall ist im Responsive Versenden-Dialog der Expertenmodus eingeschaltet. Das heißt, dass man mehrere Versendschritte konfigurieren kann.
Ist der Expertenmodus ausgeschaltet, kann nur ein Versendschritt konfiguriert werden und die Liste der Workflowschritte wird dann ausgeblendet.


```xml
<Feature name="FileSendConfiguration" active="true">
    <Property name="ExpertMode">
        <Value>false</Value>
    </Property>
</Feature>
```

<Feature name="FileSendConfiguration" active="true">
    <Property name="ExpertMode">
        <Value>false</Value>
    </Property>
</Feature>
## Festlegen der Erlaubten Schritttypen

Im neuen Versenden-Dialog können die erlaubten Schritttypen festgelegt werden.
Mögliche Werte sind: Sequential, ParallelFirst, ParallelAll, ParallelInfo, Mail, Folder, Archive, Templates


```xml
<Feature name="FileSendConfiguration" active="true">
    <Property name="EnabledStepTypes">
        <Value>Sequential</Value>
        <Value>ParallelFirst</Value>
        <Value>Templates</Value>
    </Property>
</Feature>
```

<Feature name="FileSendConfiguration" active="true">
    <Property name="EnabledStepTypes">
        <Value>Sequential</Value>
        <Value>ParallelFirst</Value>
        <Value>Templates</Value>
    </Property>
</Feature>
## Vorlage speichern

Das Speichern von Versendevorlagen kann auch ausgeschaltet werden.


```xml
<Feature name="FileSendConfiguration" active="true">
    <Property name="SaveTemplates">
        <Value>true</Value>
    </Property>
</Feature>
```

<Feature name="FileSendConfiguration" active="true">
    <Property name="SaveTemplates">
        <Value>true</Value>
    </Property>
</Feature>
## Mappe zurück an initiator speichern

Der Haken "Nach der Versendung zurück an Initiator" kann ausgeblendet werden.


```xml
<Feature name="FileSendConfiguration" active="true">
    <Property name="ShowReturnToInitiator">
        <Value>true</Value>
    </Property>
</Feature>
```

<Feature name="FileSendConfiguration" active="true">
    <Property name="ShowReturnToInitiator">
        <Value>true</Value>
    </Property>
</Feature>
## Beispielkonfiguration für FileSendConfiguration


```xml
<?xml version="1.0" encoding="UTF-8"?>

<FeatureConfigs principal="relations">

    <FeatureConfig name="default">

        <Feature name="FileSendConfiguration" active="true">
            <Property name="ExpertMode">
                <Value>true</Value>
            </Property>
            <Property name="EnabledStepTypes">
                <Value>Sequential</Value>
                <Value>ParallelFirst</Value>
                <Value>Templates</Value>
            </Property>
            <Property name="SaveTemplates">
                <Value>true</Value>
            </Property>
            <Property name="ShowReturnToInitiator">
                <Value>true</Value>
            </Property>
        </Feature>

    </FeatureConfig>

</FeatureConfigs>
```

<?xml version="1.0" encoding="UTF-8"?>

<FeatureConfigs principal="relations">

    <FeatureConfig name="default">

        <Feature name="FileSendConfiguration" active="true">
            <Property name="ExpertMode">
                <Value>true</Value>
            </Property>
            <Property name="EnabledStepTypes">
                <Value>Sequential</Value>
                <Value>ParallelFirst</Value>
                <Value>Templates</Value>
            </Property>
            <Property name="SaveTemplates">
                <Value>true</Value>
            </Property>
            <Property name="ShowReturnToInitiator">
                <Value>true</Value>
            </Property>
        </Feature>

    </FeatureConfig>

</FeatureConfigs>