---
title: "Konfiguration Apache Tomcat 10.1 Server"
source: "https://otris.software/documents/manuals/books/installation-linux/webconfig/tomcat10.html"
---

# Konfiguration Apache Tomcat 10.1 Server

Als allgemeine Dokumentation zur Konfiguration Ihres Tomcat Servers beachten Sie bitte stets die offizielle [Apache Tomcat 10.1 Server Configuration Reference](https://tomcat.apache.org/tomcat-10.1-doc/config/)!


## Anpassungen der web.xml Konfigurationsdatei

In der Konfigurationsdatei `/etc/documents6/web.xml`, welche ebenfalls standardmäßig installiert wurde, sollte im Context-Parameter `DefaultPrincipal` der gewünschte Standard-Mandant (im Beispiel `otris` anstelle von `relations`) hinterlegt werden.


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

In der Konfigurationsdatei `/etc/tomcat10/server.xml`, welche standardmäßig installiert wurde, müssen ein paar kleinere Änderungen vorgenommen werden.

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
...Innerhalb des `<Host name="localhost" ...>`-Elements müssen zwei neue `<Valve ...>`-Elemente eingefügt werden.


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
## Neustart Tomcat

Nach Anpassung der `server.xml` muss der Tomcat Server einmalig neu gestartet werden.


```bash
systemctl restart tomcat10
```

systemctl restart tomcat10Falls der Start/Restart des Tomcat sehr lange dauert (Entropie Problem), kann es hilfreich sein, `haveged` zu installieren.


```bash
apt install haveged
```

apt install haveged