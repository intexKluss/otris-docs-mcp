---
title: "Performance-Einstellungen für MariaDB/MySQL"
source: "https://otris.software/documents/manuals/books/installation-linux/mariadb.html"
---

# Performance-Einstellungen für MariaDB/MySQL


## Datenbank Konfiguration

Ab DOCUMENTS 5.0h gibt es das Paket `documents5-mysqldb-tuning`, welches die folgende Datei enthält.


```bash
/etc/mysql/mariadb.conf.d/55-server-documents5.cnf
```

/etc/mysql/mariadb.conf.d/55-server-documents5.cnfDiese Datei enthält die folgenden Defaultwerte und ist als Konfigurationsdatei markiert.


```ini
[mysqld]
innodb_buffer_pool_size = 2G
innodb_log_file_size = 512M
innodb_flush_log_at_trx_commit = 2
net_read_timeout = 3600
net_write_timeout = 3600
```

[mysqld]
innodb_buffer_pool_size = 2G
innodb_log_file_size = 512M
innodb_flush_log_at_trx_commit = 2
net_read_timeout = 3600
net_write_timeout = 3600Kurze Erläuterung der Werte (weitere Informationen in der [MySQL Documentation](https://dev.mysql.com/doc/))

- innodb_buffer_pool_size: InnoDB führt die meisten Operationen im Speicher aus (InnoDB Buffer Pool). Dieser muss abhängig von der Größe der Datenbank entsprechend groß gewählt werden. Die oben angegebenen 2 GB können unter Umständen schon zu klein sein.
- innodb_log_file_size: Das Schreiben von Transaktionen geschieht in das Transaktions-Log (InnoDB Log file). Die Größe dieser Datei sollte 25% der innodb_buffer_pool_size sein. * innodb_flush_log_at_trx_commit Das Schreiben des Transaktion-Logs auf die Festplatte kann über den Parameter innodb_flush_log_at_trx_commit = 2 drastisch beschleunigt werden, da im Modus 2 Transaktionen sekündlich in einem Block geschrieben werden, anstatt einzeln.
- net_read_timeout/net_write_timeout: Beim jex-Export werden, insbesondere bei großen Tabellen wie DlcField, Resultsets lange offen gehalten. Bei der Standardeinstellung (60 Sekunden) für net_read_timeout und net_write_timeout kann es dann vorkommen, dass der Datenbank-Server in einen Timeout läuft und der jex-Export mit einer Fehlermeldung abbricht wie: "Fatal error during jex export: Database contains ..... where exported. This can happen when the database connection is lost temporarily during the export. Please try again"


Die eingetragenen Werte sind nur Startwerte. Später können mit dem Script **mysqltuner** die für das aktuelle System passenden Variablen und Werte ermittelt werden.


## mysqltuner

mysltuner ist ein Script, welches die Konfiguration der Datenbank analysiert und Vorschläge zur Verbesserung der Performance ausgibt.

[https://github.com/major/MySQLTuner-perl](https://github.com/major/MySQLTuner-perl)

Am besten installiert man das Package über apt:


```sh
apt install mysqltuner
```

apt install mysqltunerDann muss zunächst die Datenbank sinnvoll bezüglich der Größe befüllt und eine weile laufen gelassen werden bevor dann mysqltuner ausgeführt wird:


```sh
mysqltuner
```

mysqltunerIn der Ausgabe des Aufrufs findet man unter anderem einen Abschnitt `Variables to adjust`. Die hier aufgelisteten Variablen müssen in die Konfiguration aufgenommen werden.


```sh
Variables to adjust:
innodb_buffer_pool_size (>= 2G) if possible.
```

Variables to adjust:
innodb_buffer_pool_size (>= 2G) if possible.