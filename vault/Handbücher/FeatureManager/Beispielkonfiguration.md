---
title: "Beispielkonfiguration"
source: "https://otris.software/documents/manuals/books/feature-manager/example.html"
---

# Beispielkonfiguration


```xml
<?xml version="1.0" encoding="UTF-8"?>
<FeatureConfigs principal="dopaag">
    <FeatureConfig name="default">
        <!-- Schalter für die Volltextsuche -->
        <Feature name="FulltextSearch" active="true" />
        <!-- Schalter für die erweiterte Suche -->
        <Feature name="ExtendedSearch" active="true" />
        <!-- Schalter für die normale Mappenanlage -->
        <Feature name="DefaultFileCreation" active="true" />
        <!-- Schalter für den Eingangskorb -->
        <Feature name="Inbox" active="true" />
        <!-- Schalter für den Mappen-Status -->
        <Feature name="Status" active="true" />
        <!-- Schalter für den Mappen-Monitor -->
        <Feature name="Monitor" active="true" />
        <!-- Schalter für den Mappen-Bearbeitungsmodus -->
        <Feature name="EditMode" active="true" />
        <!-- Schalter für die "Sidebar"-Ansicht des Ordnerbaums -->
        <Feature name="FolderTreeVisualizationType" value="sidebar" />
    </FeatureConfig>
    <FeatureConfig name="restricted" isWebAccessible="true">
        <!-- Schalter für die Volltextsuche -->
        <Feature name="FulltextSearch" active="false" />
        <!-- Schalter für die erweiterte Suche -->
        <Feature name="ExtendedSearch" active="false" />
        <!-- Schalter für die normale Mappenanlage -->
        <Feature name="DefaultFileCreation" active="false" />
        <!-- Schalter für den Eingangskorb -->
        <Feature name="Inbox" active="true" />
        <!-- Schalter für den Mappen-Status -->
        <Feature name="Status" active="false" />
        <!-- Schalter für den Mappen-Monitor -->
        <Feature name="Monitor" active="false" />
        <!-- Schalter für den Mappen-Bearbeitungsmodus -->
        <Feature name="EditMode" active="false" />
    </FeatureConfig>
</FeatureConfigs>
```

<?xml version="1.0" encoding="UTF-8"?>
<FeatureConfigs principal="dopaag">
    <FeatureConfig name="default">
        <!-- Schalter für die Volltextsuche -->
        <Feature name="FulltextSearch" active="true" />
        <!-- Schalter für die erweiterte Suche -->
        <Feature name="ExtendedSearch" active="true" />
        <!-- Schalter für die normale Mappenanlage -->
        <Feature name="DefaultFileCreation" active="true" />
        <!-- Schalter für den Eingangskorb -->
        <Feature name="Inbox" active="true" />
        <!-- Schalter für den Mappen-Status -->
        <Feature name="Status" active="true" />
        <!-- Schalter für den Mappen-Monitor -->
        <Feature name="Monitor" active="true" />
        <!-- Schalter für den Mappen-Bearbeitungsmodus -->
        <Feature name="EditMode" active="true" />
        <!-- Schalter für die "Sidebar"-Ansicht des Ordnerbaums -->
        <Feature name="FolderTreeVisualizationType" value="sidebar" />
    </FeatureConfig>
    <FeatureConfig name="restricted" isWebAccessible="true">
        <!-- Schalter für die Volltextsuche -->
        <Feature name="FulltextSearch" active="false" />
        <!-- Schalter für die erweiterte Suche -->
        <Feature name="ExtendedSearch" active="false" />
        <!-- Schalter für die normale Mappenanlage -->
        <Feature name="DefaultFileCreation" active="false" />
        <!-- Schalter für den Eingangskorb -->
        <Feature name="Inbox" active="true" />
        <!-- Schalter für den Mappen-Status -->
        <Feature name="Status" active="false" />
        <!-- Schalter für den Mappen-Monitor -->
        <Feature name="Monitor" active="false" />
        <!-- Schalter für den Mappen-Bearbeitungsmodus -->
        <Feature name="EditMode" active="false" />
    </FeatureConfig>
</FeatureConfigs>