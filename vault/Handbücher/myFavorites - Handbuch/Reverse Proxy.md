---
title: "Reverse Proxy für die myFavorites-App"
source: "https://otris.software/documents/manuals/books/app-doc/reverse_proxy.html"
---

# Reverse Proxy für die myFavorites-App

Falls nur die myFavorites App extern erreichbar sein soll und der DOCUMENTS Webclient nur intern erreichbar sein soll, so kann ein Reverse Proxy installiert werden.


## Funktionsweise

Hierzu wird ein Apache Webserver in der DMZ installiert. Dieser Apache muss sich mit dem internen Documents Server verbinden können und selbst extern erreichbar sein.


![Funktionsweise Revese Proxy](./media/reverse_proxy.png)

Abb. 11 - Funktionsweise Revese Proxy


## Konfiguration

Der Apache Reverse Proxy wird wie folgt konfiguriert. Darüber hinaus empfiehlt es sich das „appServerUrl“ Property in den Documents Einstellungen auf den Hostnamen des Reverse Proxy zu setzen. Also im Beispiel auf: proxy.customer.de. Es sollten weitergehend ein Hardening und ein Audit der Konfiguration durch die IT des Kunden geschehen. Die untenstehende Konfiguration ist weder vollständig, noch ausreichend. Sie soll lediglich als Beispiel dienen. Es werden Kenntnisse über die Konfiguration eines Apache Web Servers vorausgesetzt.


```javascript
<VirtualHost *:443>
        ServerName proxy.customer.de
        SSLEngine on
        SSLProxyEngine on
        SSLCertificateFile      /etc/ssl/certs/certificate.crt
        SSLCertificateKeyFile   /etc/ssl/private/certificate.key
        SSLCertificateChainFile /etc/ssl/certs/certificate_intermediates.pem
        <Proxy *>
                Order deny,allow
                Allow from all
        </Proxy>
        ProxyPreserveHost On
        ProxyRequests Off
        ProxyPassMatch /documents/srv/download/mobileDoc(.*) https://firewall.customer.de/documents/srv/download/mobileDoc
        ProxyPassReverse /documents/srv/download/mobileDoc https://firewall.customer.de/documents/srv/download/mobileDoc
        ProxyPassMatch /documents/srv/uploadDrop(.*) https://firewall.customer.de/documents/srv/uploadDrop
        ProxyPassReverse /documents/srv/uploadDrop https://firewall.customer.de/documents/srv/uploadDrop
        ProxyPassMatch /documents/srv/system(.*) https://firewall.customer.de/documents/srv/system
        ProxyPassReverse /documents/srv/system https://firewall.customer.de/documents/srv/system
        TransferLog /var/log/apache2/proxy_access_log
        ErrorLog    /var/log/apache2/proxy_error_log
        <Location />
                Allow from all
        </Location>
</VirtualHost>
```

<VirtualHost *:443>
        ServerName proxy.customer.de
        SSLEngine on
        SSLProxyEngine on
        SSLCertificateFile      /etc/ssl/certs/certificate.crt
        SSLCertificateKeyFile   /etc/ssl/private/certificate.key
        SSLCertificateChainFile /etc/ssl/certs/certificate_intermediates.pem
        <Proxy *>
                Order deny,allow
                Allow from all
        </Proxy>
        ProxyPreserveHost On
        ProxyRequests Off
        ProxyPassMatch /documents/srv/download/mobileDoc(.*) https://firewall.customer.de/documents/srv/download/mobileDoc
        ProxyPassReverse /documents/srv/download/mobileDoc https://firewall.customer.de/documents/srv/download/mobileDoc
        ProxyPassMatch /documents/srv/uploadDrop(.*) https://firewall.customer.de/documents/srv/uploadDrop
        ProxyPassReverse /documents/srv/uploadDrop https://firewall.customer.de/documents/srv/uploadDrop
        ProxyPassMatch /documents/srv/system(.*) https://firewall.customer.de/documents/srv/system
        ProxyPassReverse /documents/srv/system https://firewall.customer.de/documents/srv/system
        TransferLog /var/log/apache2/proxy_access_log
        ErrorLog    /var/log/apache2/proxy_error_log
        <Location />
                Allow from all
        </Location>
</VirtualHost>
## Einschränkungen

Mit diesem Verfahren funktionieren so gut wie alle Funktionen der App. Lediglich die Verwendung von Gadgets in der Mobile App ist hierdurch nicht mehr möglich, da diese auf den Technologien des Web Clients basieren und somit Zugang zum Web Client benötigen, welcher von extern ja nicht möglich sein soll.

Dies betrifft folgende Features:

- DOCUMENTS Drop in der Mobile App
- QuickView Gadgets