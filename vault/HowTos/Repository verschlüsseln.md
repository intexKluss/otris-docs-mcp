---
title: "Repository verschlüsseln"
source: "https://otris.software/documents/howto/files/encryptRepo.html"
---

# Repository verschlüsseln

Es gibt in DOCUMENTS die Möglichkeit das Dokumenten-Repository zu verschlüsseln. Wenn die Verschlüsselung aktiv ist, wird jedes Dokument beim Hochladen verschlüsselt und beim Herunterladen (z.B. zur Ansicht im Web-Client oder im Scripting) wieder entschlüsselt. Die Dokumente liegen also verschlüsselt im Repository (Dateisystem), können aber weiterhin mit DOCUMENTS ohne Einschränkung verwendet werden. Es wird das symmetrische Verschlüsselungsverfahren AES-256-CBC verwendet.

Wenn ein verschlüsseltes Dokument aus dem DOCUMENTS Repository mit einem Editor geöffnet wird, sieht man in der ersten Zeile den Eintrag


```ini
--- JANUS Encrypted Document ---
```

--- JANUS Encrypted Document ---der Rest des Dokuments ist verschlüsselt.


## Repository Verschlüsselung einschalten (mandantenabhängig)

Voraussetzung für die Verwendung der Verschlüsselung ist eine Lizenz-Datei (.pem) mit der Option "Blob Encryption". Wenn eine entsprechende Lizenz vorhanden ist, kann die Verschlüsselung im DOCUMENTS-Manager unter den Documents-Einstellungen für den Mandanten eingeschaltet werden. Dazu muss im Register Documents (Basis) die Checkbox "Repository verschlüsseln" gesetzt werden.


Abb. 1 - Repository Verschlüsselung einschalten

Wird diese Checkbox gesetzt, ändert sich im Repository zunächst nichts. Die bereits bestehenden Dateien bleiben unverschlüsselt. Nur neu hochgeladene Dokumente werden ab diesem Zeitpunkt verschlüsselt. Analoges gilt, wenn die Verschlüsselung wieder abgeschaltet wird. Beim Download von Dateien aus dem Repository, erkennt der Server aufgrund der Startsequenz im Dateiinhalt, ob eine Datei verschlüsselt ist oder nicht und entschlüsselt sie falls notwendig.


## Optionale Properties in Documents-Einstellungen (mandantenabhängig)

Es gibt zwei Properties, mit denen die Sicherheit des Schlüssels noch etwas verbessert werden kann. Die Properties sind optional, dürfen aber, wenn sie einmal eingeschaltet wurden, niemals wieder zurückgesetzt oder geändert werden, da sonst bereits verschlüsselte Dateien nicht mehr entschlüsselt werden können.


### BlobEncryptionHasPrincipalKey=1

Defaultmäßig werden Dokumente aller Mandanten mit dem gleichen Schlüssel verschlüsselt. Mit diesem Property kann der Mandantenname in den Schlüssel mit aufgenommen werden. Dann unterscheidet sich der Schlüssel dieses Mandanten von den Schlüsseln der anderen Mandanten.

WICHTIG: Wenn das Property `BlobEncryptionHasPrincipalKey=1` einmal genutzt wurde, darf es nicht wieder abgeschaltet werden - auch dann nicht, wenn die Verschlüsselung abgeschaltet wurde. Verschlüsselte Dateien aus dem Repository können sonst nicht mehr entschlüsselt werden!


### BlobEncryptionCustomKey=Zeichenkette

Mit diesem Property kann eine zusätzliche Zeichenkette angegeben werden, die auch dem Schlüssel zugefügt wird. Man darf diesen Teil des Schlüssels nicht verlieren, da ohne ihn Dokumente nicht entschlüsselt werden können. Das Property ist zwar in der Datenbank gespeichert, man sollte aber bedenken, dass es Fälle gibt, in denen man keinen Zugriff auf die Datenbank hat.

WICHTIG: Wenn das Property `BlobEncryptionCustomKey=Zeichenkette` einmal genutzt wurde, darf es nicht geändert werden - auch dann nicht, wenn die Verschlüsselung abgeschaltet wurde. Verschlüsselte Dateien aus dem Repository können sonst nicht mehr entschlüsselt werden!


## Einträge in der documents.ini (mandantenübergreifend)

Ab DOCUMENTS 5.0f HF2 kann die Verschlüsselung auch global für alle Mandanten eingeschaltet werden. Dazu muss in der `documents.ini` der folgende Eintrag eingefügt werden.


```ini
$BlobEncryption 1
```

$BlobEncryption 1Analog kann man auch die Properties `BlobEncryptionHasPrincipalKey` und / oder `BlobEncryptionCustomKey` global für alle Mandanten setzen:


```ini
$BlobEncryptionHasPrincipalKey 1
$BlobEncryptionCustomKey Zeichenkette
```

$BlobEncryptionHasPrincipalKey 1
$BlobEncryptionCustomKey ZeichenketteWICHTIG: Wenn die Eigenschaften `$BlobEncryptionHasPrincipalKey` oder `$BlobEncryptionCustomKey` einmal genutzt wurden, dürfen diese nicht mehr geändert werden - auch dann nicht, wenn die Verschlüsselung abgeschaltet wurde. Verschlüsselte Dateien aus dem Repository können sonst nicht mehr entschlüsselt werden!

Die Eigenschaften in der `documents.ini` haben eine höhere Priorität als die analogen Properties bei Documents Einstellungen.