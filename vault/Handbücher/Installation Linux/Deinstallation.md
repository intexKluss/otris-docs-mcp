---
title: "Deinstallation"
source: "https://otris.software/documents/manuals/books/installation-linux/deinstallation.html"
---

# Deinstallation

Die Deinstallation am besten in der Root-Shell (`sudo -i`) durchführen und diese auch am Ende wieder verlassen (`exit`).


## Konfigurationsdateien erhalten


```bash
apt remove $(dpkg -l | awk '/documents5/ {print $2}')
apt autoremove
```

apt remove $(dpkg -l | awk '/documents5/ {print $2}')
apt autoremove
## Konfigurationsdateien auch löschen (Ausnahmen siehe Hinweise)

**Wichtig! Bei Verwendung von nginx** müssen zuerst die Änderungen der nginx-Konfiguration rückgängig gemacht werden:


```bash
rm /etc/nginx/sites-enabled/documents5
# falls nginx default site wieder hergestellt werden soll:
ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
```

rm /etc/nginx/sites-enabled/documents5
# falls nginx default site wieder hergestellt werden soll:
ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/defaultDOCUMENTS Deinstallation:


```bash
apt purge $(dpkg -l | awk '/documents5/ {print $2}')
# empfohlen, aber Hinweis beachten:
apt autoremove
```

apt purge $(dpkg -l | awk '/documents5/ {print $2}')
# empfohlen, aber Hinweis beachten:
apt autoremove
## Hinweise zur Deinstallation

Der Befehlt `apt autoremove` deinstalliert potentiell auch Pakete, die nicht durch Documents installiert wurden ([man apt](http://manpages.ubuntu.com/manpages/bionic/man8/apt.8.html)).

Die Datenbank `documents5`, das Documents Repository und die Konfigurationsdatei `documents.ini` werden niemals durch den Paketmanager `apt` gelöscht (auch nicht bei Verwendung von `autoremove` oder `purge`!).

- Wenn die Datenbank tatsächlich nicht mehr benötigt wird, kann sie vor der Documents Deinstallation mit drop database gelöscht werden. Nach der Documents installation besteht noch die Möglichkeit MariaDB mit purge zu löschen. Dabei gibt es dann die Möglichkeit auch alle Datenbanken mit zu löschen (apt purge $(dpkg -l | awk '/mariadb-server/ {print $2}')).
- Wenn das Repository und die documents.ini nicht mehr benötigt werden können auch die Ordner /etc/documents5 und /var/lib/documents5 gelöscht werden.