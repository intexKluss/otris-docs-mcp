---
title: "Kontrollierte Upgrades"
source: "https://otris.software/documents/manuals/books/installation-linux/controlled-upgrades.html"
---

# Kontrollierte Upgrades

Oft ist es gewünscht, neue Documents-Versionen unabhängig von den häufiger durchgeführten Ubuntu-Upgrades durchzuführen. Eine Möglichkeit, dies zu tun, ist das ["Apt-Pinning"](https://wiki.ubuntuusers.de/Apt-Pinning/).


## Apt-Pinning

Mit Apt-Pinning kann an einem Paket in einer bestimmten Version festhalten und somit verhindern, dass es aktualisiert oder deinstalliert wird.

Für das Pinning sollte in den Ordner `/etc/apt/preferences.d/` eine neue Datei mit einem beliebigen (idealerweise zum Paket passenden) Namen gelegt werden. Die Datei darf entweder die Dateiendung `.pref` oder aber keine Endung besitzen.

Um die Documents-Pakete auf die Version 5.0h HF2 zu pinnen, kann zum Beispiel die Datei `/etc/apt/preferences.d/documents.pref` mit folgendem Inhalt angelegt werden.


```javascript
Package: documents5-*
Pin: version 1:5.0h-2314-728*
Pin-Priority: 1001
```

Package: documents5-*
Pin: version 1:5.0h-2314-728*
Pin-Priority: 1001Falls diese Datei existiert und die Documents-Pakete in dieser Version installiert sind, dann werden die Documents-Pakete beim nächsten Ubuntu-Upgrade (`apt full-upgrade`) nicht aktualisiert.


## Gepinnte Documents Pakete upgraden

Wenn die Dokuments-Pakete dann aktualisiert werden sollen, muss zunächst die Version in der Datei `/etc/apt/preferences.d/documents.pref` angepasst werden. In dem folgenden Beispiel wird die Version auf 5.0i gesetzt.


```javascript
Package: documents5-*
Pin: version 1:5.0i-2321-352*
Pin-Priority: 1001
```

Package: documents5-*
Pin: version 1:5.0i-2321-352*
Pin-Priority: 1001Danach kann die Version mit dem folgenden Befehl installiert werden.


```javascript
apt install `dpkg -l | awk '/documents5/ {print $2}'`
```

apt install `dpkg -l | awk '/documents5/ {print $2}'`