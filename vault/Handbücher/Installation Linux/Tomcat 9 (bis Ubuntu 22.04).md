---
title: "Konfiguration Apache Tomcat 9 Server"
source: "https://otris.software/documents/manuals/books/installation-linux/webconfig/tomcat9.html"
---

# Konfiguration Apache Tomcat 9 Server

Als allgemeine Dokumentation zur Konfiguration Ihres Tomcat Servers beachten Sie bitte stets die offizielle [Apache Tomcat 9 Server Configuration Reference](https://tomcat.apache.org/tomcat-9.0-doc/config/)!


## Anpassungen der web.xml Konfigurationsdatei

In der Konfigurationsdatei `/etc/documents5/web.xml` bzw. `/etc/documents6/web.xml`, welche ebenfalls standardmäßig installiert wurde, sollte im Context-Parameter `DefaultPrincipal` der gewünschte Standard-Mandant (im Beispiel `otris` anstelle von `relations`) hinterlegt werden.


```xml
...
    <context-param>
        <param-name>DefaultPrincipal</param-name>
        <param-value>otris</param-value>
    </context-param>
...
```

...
    <context-param>
        <param-name>DefaultPrincipal</param-name>
        <param-value>otris</param-value>
    </context-param>
...
## Anpassungen der server.xml Konfigurationsdatei

In der Konfigurationsdatei `/etc/tomcat9/server.xml`, welche standardmäßig installiert wurde, müssen ein paar kleinere Änderungen vorgenommen werden.

Im `<Connector port="8080" ...>`-Element müssen verschiedene Attribute angepasst oder eingefügt werden.


```xml
...
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="180000"
               redirectPort="8443"
               maxParameterCount="1000"
               maxHttpHeaderSize="32768"
               maxPostSize="8388608"
    />
...
```

...
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="180000"
               redirectPort="8443"
               maxParameterCount="1000"
               maxHttpHeaderSize="32768"
               maxPostSize="8388608"
    />
...Innerhalb des `<Host name="localhost" ...>`-Elements muss ein neues `<Valve ...>`-Element eingefügt werden.


```xml
...
        <Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">
...
            <Valve className="org.apache.catalina.valves.ErrorReportValve"
                   showReport="false" showServerInfo="false" />
...
        </Host>
...
```

...
        <Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">
...
            <Valve className="org.apache.catalina.valves.ErrorReportValve"
                   showReport="false" showServerInfo="false" />
...
        </Host>
...
### Variante 1: Tomcat mit NGINX

Innerhalb des `<Host name="localhost" ...>`-Elements muss ein neues `<Valve ...>`-Element eingefügt werden.


```xml
...
        <Host name="localhost"  appBase="webapps"
              unpackWARs="true" autoDeploy="true">
...
            <Valve className="org.apache.catalina.valves.RemoteIpValve"
                   protocolHeader="x-forwarded-proto" />
...
        </Host>
...
```

...
        <Host name="localhost"  appBase="webapps"
              unpackWARs="true" autoDeploy="true">
...
            <Valve className="org.apache.catalina.valves.RemoteIpValve"
                   protocolHeader="x-forwarded-proto" />
...
        </Host>
...
### Variante 2: Tomcat mit Apache

Das standardmäßig hinterlegte `<Connector protocol="AJP/1.3 ...>`-Element


```xml
...
    <!--
    <Connector protocol="AJP/1.3"
               address="::1"
               port="8009"
               redirectPort="8443" />
    -->
...
```

...
    <!--
    <Connector protocol="AJP/1.3"
               address="::1"
               port="8009"
               redirectPort="8443" />
    -->
...muss durch Entfernung der Auskommentierung aktiviert und wie folgt ergänzt werden.


```xml
...
    <Connector protocol="AJP/1.3"
               address="::1"
               port="8009"
               redirectPort="8443"
               connectionTimeout="180000"
               secretRequired="false" />
...
```

...
    <Connector protocol="AJP/1.3"
               address="::1"
               port="8009"
               redirectPort="8443"
               connectionTimeout="180000"
               secretRequired="false" />
...Weitere Informationen zum Eintrag `secretRequired="false"` gibt es in der [Apache Tomcat 9 Configuration Reference](https://tomcat.apache.org/tomcat-9.0-doc/config/ajp.html).


## Neustart Tomcat

Nach Anpassung der `server.xml` muss der Tomcat Server einmalig neu gestartet werden.


```bash
systemctl restart tomcat9
```

systemctl restart tomcat9Falls der Start/Restart des Tomcat sehr lange dauert (Entropie Problem), kann es hilfreich sein, `haveged` zu installieren.


```bash
apt install haveged
```

apt install haveged