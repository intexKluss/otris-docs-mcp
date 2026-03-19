---
title: "User DLLs | Portalscript API"
source: "https://otris.software/documents/api/portalscript/documents/user-dlls.html"
---

# User DLLs

Die Funktionalitaet von PortalScripting kann mit Hilfe von externen
DLLs (oder *shared libraries* unter Unix/Linux) erweitert werden. Die
DLLs koennen in JavaScript verwendet werden und lassen sich einem laufenden
*Server* hinzufuegen, weil sie dynamisch geladen werden. Damit die
DLL im PortalScripting verwendet werden kann, muss sie folgende
Funktionen exportieren:

- int J_Constructor(void **context)
Die Funktion dient zur Vorbereitung einer DLL-Instanz. Sie wird pro Skript, in dem die DLL verwendet wird, aufgrufen. In der Implementierung dieser Funktion muss Speicher reserviert werden, der den Kontext fuer einen DLL-Aufruf enthaelt. Zum Kontext gehoeren z.B. die gesetzten Properties. Der Zeiger auf den angeforderten Speicherbereich wird in *context gespeichert. Falls die DLL keinen Kontext benoetigt, muss hier NULL hineingeschrieben werden. Falls die Initialisierung fehlschlaegt, gibt die Funktion einen Wert ungleich 0 zurueck. Da dann kein Kontext zur Verfuegung steht, muss J_Error() mit dem Wert NULL fuer den Parameter context aufgerufen werden, um aus diesem Fehlercode eine Meldung zu ermitteln.
- const char **J_GetProperties(void *context)
Die in dieser DLL in diesem Kontext moeglichen Properties ermitteln. Pro Property muss die zurueckgegebene Liste drei Eintraege enthalten:
Name des Properties. Der Name muss ein gueltiger JavaScript-Bezeichner sein, d.h. er muss mit einem Buchstaben beginnen und darf nur Ziffern und Buchstaben enthalten. Gross- und Kleinbuchstaben werden unterschieden.
Typ des Properties. Es sind folgende Typen erlaubt:
int: Der Wert muss eine vorzeichenbehaftete 32Bit-Zahl sein. Die Konvertierung erfolgt mit strtol, d.h. Zahlen mit fuehrender 0 werden als Oktalwerte interpretiert, Zahlen mit 0x als Hexadezimalzahlen. Wird das Property veraendert, so werden immer Dezimalwerte geschrieben.
float: Fliesskommazahl doppelter Genauigkeit.
string: 0-terminierte Zeichenkette.
bool: Nur die Werte true und false sind erlaubt.
date: Datum im Format JJJJMMTT.
time: Uhrzeit im Format HHMMSS.
timestamp: Zeitstempel im Format JJJJMMTTHHMMSS.
Wird vor den Datentyp ein Minuszeichen - gesetzt, ist das Property nur zum Lesen freigegeben. Wird vor den Datentyp ein Pluszeichen + gesetzt, ist nur Schreiben erlaubt. Werden beide Zeichen oder keins angegeben, ist Lesen und Schreiben des Properties moeglich.
Default-Wert des Properties. Wenn kein Default-Wert vergeben ist, muss hier ein leerer String angegeben werden.
Am Ende der Liste ist ein NULL-Zeiger anzugeben. Wenn fuer die DLL keine Properties definiert werden, ist nur der NULL-Zeiger zurueckzugeben.
- int J_GetProperty(void *context, const char *what, char *val, int *pLen)
Diese Funktion dient zum Lesen eines Properties. Als erster Parameter ist der durch J_Constructor() bestimmte Kontext anzugeben. Zweiter Parameter ist der Name des Properties. Dritter Paramter ist ein Zeiger auf einen Speicherbereich, in den der in eine Zeichenkette konvertierte Wert geschrieben wird. Ein Zeiger auf die Laenge des Speicherbereichs wird in dem Parameter pLen uebergeben. Falls die Laenge nicht ausreicht, wird in pLen die benoetigte Laenge (inklusive 0-Bytes) geschrieben und die Funktion gibt -1 zurueck (die Funktion fordert keinen Speicher an, sondern muss dann nochmals aufgerufen werden). Der Speicher, auf den val zeigt, wird in diesem Fall nicht veraendert. Ein Rueckgabewert von 0 zeigt an, dass das Property gelesen werden konnte. Ein Rueckgabewert > 0 deutet auf einen Fehler hin, der mit J_Error() in eine Fehlermeldung gewandelt werden kann.
- int J_SetProperty(void *context, const char *what, const char *val)
Setzen eines Property fuer die DLL. Der Name der zu setzenden Eigenschaft ist als Zeichenkette nach dem Parameter context zu uebergeben. Der dritte Parameter ist der ebenfalls in eine Zeichenkette konvertierte Wert. Im Erfolgsfall muss diese Funktion 0 zurueckgeben. Ein Wert groesser 0 deutet auf einen Fehler hin. Werte kleiner als 0 duerfen nicht zurueckgegeben werden.
- int J_Run(void *context, const char *param)
Durchfuehren einer Aktion. Es muss der Kontext und ein Funktionsname/freier Parameter uebergeben werden. Im Normalfall wurde zuvor mit J_SetProperty() mindestens ein Parameter gesetzt. Die Funktion gibt 0 zurueck, wenn die Aktion erfolgreich durchgefuehrt wurde. Ein Rueckgabewert groesser 0 zeigt einen Fehler an. Durch Aufrufen von J_Error mit diesem Rueckgabewert kann ein Fehlertext ermittelt werden. Die Funktion darf keine Werte < 0 zurueckgeben.
- const char * J_Error(void *context, const int code)
Rueckgabe eines Fehlertextes zu code. Falls zu dem angegebenen Code keine Fehlermeldung existiert, gibt die Funktion NULL zurueck. Der zurueckgegebene Zeiger muss nicht freigegeben werden. Die Funktion wird unter Umstaenden mit NULL fuer context aufgerufen (z.B., wenn J_Constructor() fehlschlaegt). Diese Funktion ist optional, d.h. die Implementierung ist nicht erforderlich. Um eine Fehlerbehandlung zu ermoeglichen, sollte sie aber implementiert werden.
- int J_Destructor(void *context)
Den durch J_Constructor() erzeugten Kontext wieder freigeben. Ein Rueckgabewert groesser 0 zeigt auch hier einen Fehler an. Die Funktion wird von der JavaScript-Laufzeitumgebung (Garbage Collector) aufgerufen.

Ein Beispielprojekt (Visual Studio 2012) in C++ fuer eine solche DLL kann unter
der folgenden URL heruntergeladen werden:
[http://ftp.otris.de/doc5/js_dll_test_VS2012.zip](http://ftp.otris.de/doc5/js_dll_test_VS2012.zip)


## Verwendung der DLL in JavaScript

In einem Skript wird einfach ein Objekt der Klasse `PDExternal`
erzeugt. Auf die definierten *Properties* kann dann direkt zugegriffen
werden. Zusaetzlich steht noch die Methode `run(String param)` zur
Verfuegung.


**Beispiel fuer die Anwendung:**
```
var ext = new PDExternal("jstest"); // keine Dateiendung angeben!
ext.IntProp = 20;
ext.DateProp = new Date();

if (!ext.run("doIncrement"))
{
    // Fehlerbehandlung
}

util.out(ext.IntProp);   // 21
util.out(ext.DateProp);   // Date of tomorrow
```

Im Beispiel (jstest.dll) stellt die DLL die *Properties*`IntProp`
(ganze Zahl) und `DateProp` (Datum) zur Verfuegung. Die Methode
`doIncrement` erhoeht die beiden *Properties*, die danach
wieder ausgelesen werden.