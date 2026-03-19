---
title: "Einstellung im Tomcat"
source: "https://otris.software/documents/manuals/books/otropenid-doc-de/openid/config-tomcat.html"
---

# Einstellung im Tomcat


## Allgemein

Je nach Anbieter muss SSL aktiv sein, da ansonsten die Kommunikation ablehnt werden könnte.


## web.xml

Die folgenden Bereiche in der web.xml (Windows: Installationsverzeichnis\tomcat8\webapps\documents\WEB-INF, Linux:
/etc/documents5/web.xml) müssen aktiviert werden:


```xml
<!-- Use this block for  OpenID-Connect -->
<filter>
    <filter-name>OpenIdLoginFilter</filter-name>
    <filter-class>de.otris.documents.oauth.OpenIdLoginFilter</filter-class>
</filter>

<filter-mapping>
    <filter-name>OpenIdLoginFilter</filter-name>
    <url-pattern>/autologin/login</url-pattern>
    <url-pattern>/jsp/qv</url-pattern>
</filter-mapping>
```

<!-- Use this block for  OpenID-Connect -->
<filter>
    <filter-name>OpenIdLoginFilter</filter-name>
    <filter-class>de.otris.documents.oauth.OpenIdLoginFilter</filter-class>
</filter>

<filter-mapping>
    <filter-name>OpenIdLoginFilter</filter-name>
    <url-pattern>/autologin/login</url-pattern>
    <url-pattern>/jsp/qv</url-pattern>
</filter-mapping>
```xml
<!-- Use this block for OpenID-Connect or Azure AD -->
<filter>
  <filter-name>SSOFilter</filter-name>
  <filter-class>de.otris.documents.web.filter.SSOFilter</filter-class>
  <init-param>
      <param-name>UserNameMode</param-name>
      <param-value>0</param-value>
  </init-param>
</filter>

<filter-mapping>
  <filter-name>SSOFilter</filter-name>
  <url-pattern>/autologin/login</url-pattern>
  <url-pattern>/jsp/qv</url-pattern>
</filter-mapping>
```

<!-- Use this block for OpenID-Connect or Azure AD -->
<filter>
  <filter-name>SSOFilter</filter-name>
  <filter-class>de.otris.documents.web.filter.SSOFilter</filter-class>
  <init-param>
      <param-name>UserNameMode</param-name>
      <param-value>0</param-value>
  </init-param>
</filter>

<filter-mapping>
  <filter-name>SSOFilter</filter-name>
  <url-pattern>/autologin/login</url-pattern>
  <url-pattern>/jsp/qv</url-pattern>
</filter-mapping>Achtung: Es gibt zwei auskommentierte SSOFilter in der web.xml, es ist wichtig, dass der Filter mit dem init-param
`UserNameMode` genutzt wird.

[PDF Version](../openid/config-tomcat.pdf?b=2026-02-12)