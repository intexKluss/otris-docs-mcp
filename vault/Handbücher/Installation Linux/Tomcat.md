---
title: "Anpassung des Speichers für Apache Tomcat"
source: "https://otris.software/documents/manuals/books/installation-linux/tomcat.html"
---

# Anpassung des Speichers für Apache Tomcat

Je nach Größe des Systems und Anzahl der Benutzer, die gleichzeitig mit dem System arbeiten ist es ggf. erforderlich, die Konfiguration des Apache Tomcat bezüglich der Java Memory Heap Size anzupassen. Die Einstellung "Xms" legt den Speicher in MB fest, die von der Java VM beim Start der Anwendung allokiert werden. Die Einstellung "Xmx" ist der Speicher in MB, den Apache Tomcat maximal belegen darf.
Wir empfehlen die folgenden Einstellungen für kleine bis mittelgroße Systeme:

- Xms: 512M - 1024M
- Xmx: 1024M - 2048M

Die Anpassungen müssen in der Datei `/etc/default/tomcat9` (`/etc/default/tomcat8` bei Ubuntu 18.04 und ab 24.04 `/etc/default/tomcat10`) vorgenommen werden, indem die folgende Zeile (unter einer evtl. vorhandenen `JAVA_OPTS` Zeile) eingefügt wird.


```sh
JAVA_OPTS="${JAVA_OPTS} -Xms1024m -Xmx1024m"
```

JAVA_OPTS="${JAVA_OPTS} -Xms1024m -Xmx1024m"