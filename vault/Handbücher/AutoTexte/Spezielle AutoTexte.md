---
title: "Spezielle AutoTexte"
source: "https://otris.software/documents/manuals/books/autotexte/Special.html"
---

# Spezielle AutoTexte

Neben denen in Kapitel 1 angeführten AutoTexten existiert noch eine
Reihe von speziellen AutoTexten, deren Syntax bisweilen von der
üblichen Notation mit umschließenden Prozentzeichen abweicht.


## Wiedervorlage setzen und löschen

Im Rahmen der Feldbelegung im Workflow oder bei Versendelisten besteht
neben dem Belegen von Mappenfeldern (Indexfeldern) auch die Möglichkeit,
das Wiedervorlagedatum der Mappe für einen definierten Benutzer zu
setzen. Im Unterschied zu den üblichen AutoTexten wird hier nicht
nur eine Information ausgelesen, sondern zudem auch ein Wert gesetzt. Um
dies zu erreichen, wird neben dem *Feldwert* auch der *Feldname* für den
AutoText genutzt.

Der Benutzer wird als Feldname über die folgende Syntax definiert:

`resubmission.%userLogin%` oder `resubmission.%Feldname%`

**Beispiel**

`resubmission.%lastEditor.userLogin%`

Der Feldwert (das Wiedervorlagedatum) kann ein AutoText oder ein fester Wert sein:

**Beispiel**

`%currentDate+14%` oder `31.12.2015`

Die folgende Abbildung zeigt dieses Vorgehen am Beispiel einer
Versendeliste:


![Wiedervorlage](assets/followup.jpg)

Abb. 2 - Wiedervorlagebeispiel

Wird der Feldwert leer gelassen, wird eine evtl. bestehende Wiedervorlage der Mappe für den Benutzer gelöscht.


## AutoTexte im Aktenplan

Die folgenden AutoTexte können nur im Rahmen der Definition der
Defaultwerte für ein Feld vom Typ *Aktenplan* verwendet werden. Details
sind dem **DOCUMENTS**-Manager Handbuch zu entnehmen.

| Name | Information |
| --- | --- |
| %fp.Index% | Index des Aktenplans unter Berücksichtigung der Formatdefinition z.B. II.a |
| %fp.Index.numeric% | Index des Aktenplans in numerischer Schreibform unabhängig von der Formatdefinition z.B. 2.1 |
| %fp.Index.key% | Index des Aktenplans im Datenbank-Format z.B. 002001 |
| %fp.Label% | Bezeichner des Aktenplan-Eintrags z.B. Unterkapitel a |
| %fp.Custom1% | Inhalt des benutzerdefinierten Feldes 1 |
| %fp.Custom2% | Inhalt des benutzerdefinierten Feldes 2 |
| %fp.Custom3% | Inhalt des benutzerdefinierten Feldes 3 |
| %fp.Path% | „Brotkrumenpfad“ der Label des Aktenplanindex z.B. Kapitel 2 > Unterkapitel a |

Die folgenden AutoTexte können global verwendet werden

| Name | Information |
| --- | --- |
| %FeldName.key% | Index des Aktenplans im Datenbank-Format z.B. 002001 |
| %FeldName% | Index des Aktenplans unter Berücksichtigung der Formatdefinition z.B. II.a oder 2.1 falls kein Format definiert ist |
| %lastfp.AutoText% | Aktenplan-AutoText (s.o. Index, Index.numeric etc), der sich auf den zuletzt vom Benutzer ausgewählten Aktenplaneintrag bezieht. Damit kann bspw. ein neue Aktenplanauswahl mit der letzten Auswahl vorbelegt werden |


## AutoTexte für Dokumentvorlagen

| Name | Information |
| --- | --- |
| %toDOCX.AutoText% | Konvertiert \n, \r\n nach <w:br/> und \t nach <w:tab/>. Normalerweise ist dieser AutoText in Dokumentenvorlagen nicht notwendig, da die Konvertierung implizit erfolgt |
| %toRTF.AutoText% | Konvertiert \r\n nach \par. Normalerweise ist dieser AutoText in Dokumentenvorlagen nicht notwendig, da die Konvertierung implizit erfolgt. |
| %toFOP.AutoText% | Konvertiert \n und \r\n nach <br></br>. Normalerweise ist dieser AutoText in Dokumentenvorlagen nicht notwendig, da die Konvertierung implizit erfolgt. |
| %toFOPImg.Dateipfad% | Datei wird als <img="...." ><img> eingebunden |
| %createBarcode->barcode128,png->AutoText% | Gibt den Wert von AutoText Barcode in Form von png zurück. Es wird durch die Beispiel-Bat barcode128.bat im Verzeichnis createimg/barcode erzeugt. |
| %raw.AutoText% | Unterdrückt die implizite Konvertierung bei Verwendung in Dokumentenvorlagen für docx, rtf, fop, falls der AutoText z.B. schon openxml-Format zurück gibt |


## AutoText runscript

Mit dem AutoText `%runscript:ScriptName%` kann der Rückgabewert eines Skriptes ausgewertet werden.
Dieser AutoText kann optional auch einen String-Parameter übergeben: `%runscript:ScriptName(paramValue)%`. Der paramValue steht als globale Konstante mit dem Namen `param` im Skript zur Verfügung.
Beispiel-Skript 1:


```js
util.out(context.getAutoText("runscript:myScriptAutoText(A)")); // Hello world
```

util.out(context.getAutoText("runscript:myScriptAutoText(A)")); // Hello worldBeispiel-Skript2 (myScriptAutoText):


```js
if (param == "A") {
    return "Hello world";
}
else {
    return "Hello universe";
}
```

if (param == "A") {
    return "Hello world";
}
else {
    return "Hello universe";
}