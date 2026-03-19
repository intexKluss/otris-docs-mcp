---
title: "Virenscanner"
source: "https://otris.software/documents/manuals/books/installation-linux/virusscanner.html"
---

# Virenscanner

In der `documents.ini` kann ein Befehl für einen Virenscanner eingetragen werden. Dieser Befehl wird beim Hochladen aller Dokumente ausgeführt. Als Beispiel ist ein Befehl für den Virenscanner ClamAV noch auskommentiert eingetragen.


```javascript
# ===============================================================
# external virus scanner, that will be called on upload of documents
# A exitcode != 0 will be evaluated as a virus / an error and the upload
# to the repository will be denied
# ===============================================================
#$virusscanCMD clamdscan --stdout --no-summary - < "%input"
```

# ===============================================================
# external virus scanner, that will be called on upload of documents
# A exitcode != 0 will be evaluated as a virus / an error and the upload
# to the repository will be denied
# ===============================================================
#$virusscanCMD clamdscan --stdout --no-summary - < "%input"Um ClamAV zu verwenden, muss dieser installiert und sinnvoll konfiguriert werden. Dies liegt im Verantwortungsbereich der Anwenderin. ClamAV kann hier nicht dokumentiert werden und otris kann auch keine Unterstützung bei der Verwendung des Virenscanners leisten. Wir werden hier nur einige Hinweise geben.

Es sollten zwei Pakete installiert werden


```javascript
apt install clamdscan clamav-daemon
```

apt install clamdscan clamav-daemonDanach gibt es den Service `clamav-daemon` zum Scannen der Dateien und den Service `clamav-freshclam`, der sich um den Download der Virusdefinitionen kümmert. `clamav-daemon` kann erst dann gestartet werden, wenn `clamav-freshclam` die ersten Virusdefinitionen geladen hat. Die Information, ob dies bereits geschehen ist, erhält man aus dem Journal des Service. Nachdem der Service `clamav-daemon` gestartet wurde, sollte der Befehl aus der `documents.ini` mit einer Testdatei geprüft werden:


```javascript
clamdscan --stdout --no-summary - < mytestfile
```

clamdscan --stdout --no-summary - < mytestfileFür den Test kann die folgende Datei verwendet werden.

- https://www.eicar.org/download-anti-malware-testfile/