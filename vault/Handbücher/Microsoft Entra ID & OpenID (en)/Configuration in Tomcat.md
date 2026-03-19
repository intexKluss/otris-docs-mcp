---
title: "Settings in Tomcat"
source: "https://otris.software/documents/manuals/books/otropenid-doc-en/openid/config-tomcat.html"
---

# Settings in Tomcat


## General

Depending on the provider, SSL must be active, otherwise the communication could be rejected.


## web.xml

The following areas in the web.xml (Windows: installation directory\tomcat8\webapps\documents\WEB-INF, Linux:
/etc/documents5/web.xml) must be activated:


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
</filter-mapping>Caution: There are two commented out SSOFilters in the web.xml, it is important that the filter with the init-param
`UserNameMode` is used.

[PDF Version](../openid/config-tomcat.pdf?b=2026-02-12)