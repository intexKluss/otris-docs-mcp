---
title: "Rechtliche Grundlagen, Arten der elektronischen Signatur"
source: "https://otris.software/documents/manuals/books/otrsign/legal.html"
---

# Rechtliche Grundlagen, Arten der elektronischen Signatur


## eIDAS-Verordnung

eIDAS (electronic IDentification, Autentication and trust Services) bezeichnet die Verordnung (EU) Nr. 910/2014 des Europäischen Parlaments und des Rates über elektronische Identifizierung und Vertrauensdienste für elektronische Transaktionen im Binnenmarkt und zur Aufhebung der Richtlinie 1999/93/EG (siehe auch [https://en.wikipedia.org/wiki/EIDAS](https://en.wikipedia.org/wiki/EIDAS)).
Die eIDAS-Verordnung enthält verbindliche europaweit geltende Regelungen in den Bereichen „Elektronische Identifizierung“ und „Elektronische Vertrauensdienste“. Mit der Verordnung werden einheitliche Rahmenbedingungen für die grenzüberschreitende Nutzung elektronischer Identifizierungsmittel und Vertrauensdienste geschaffen. Als EU-Verordnung ist diese unmittelbar geltendes Recht in alle EU-Mitgliedsstaaten sowie im Europäischen Wirtschaftsraum.


## Arten der elektronischen Signatur

In der [Verordnung](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32014R0910#) werden mehrere Arten von Signaturen unterschieden.


### Elektronische (Einfache) Signatur

Die einfache digitale Signatur fügt elektronischen Daten andere elektronische Daten bei oder verknüpft diese logisch miteinander. Sie erfüllt keine besonderen Sicherheitsanforderungen, ihr Beweiswert ist daher gering. Vor allem kann mit dieser Form eine Signatur nicht eindeutig einer Person zugeordnet werden, daher eignet sie sich lediglich für formfreie Verträge, wesentliche Merkmale sind:

- sie erfüllt Textformerfordernis (§ 126b BGB)
- sie ist zulässig als Beweismittel im Rechtsstreit (vgl. Art. 25 Abs. 1 und ErwGr 49 eIDAS-VO)


### Fortgeschrittene Signatur

Die fortgeschrittene elektronische Signatur dagegen ist deutlich sicherer. So sind diese digitalen Signaturen ausschließlich dem Signaturschlüssel-Inhaber zugeordnet, wodurch die Authentifizierung des Zertifikatsinhabers gewährleistet ist und die Integrität der Daten überprüft, werden kann, wesentliche Merkmale sind:

- sie erfüllt Textformerfordernis (§ 126b BGB)
- Möglichkeit der Identifizierung des Unterzeichners
- Leichtere Prüfung der Gültigkeit im Falle eines Rechtsstreits
- Verbesserter Schutz gegen nachträgliche Veränderung


### Qualifizierte Signatur

Die qualifizierte elektronische Signatur verhält sich wie die fortgeschrittene, allerdings werden diese mit einer sicheren Signaturerstellungseinheit (SSEE) erzeugt (zum Beispiel mit dem Chip einer Chipkarte) und gleichzeitig wird dem Dokument zum Zeitpunkt seiner Erzeugung ein qualifiziertes Zertifikat von einem Zertifizierungsdienst Anbieter (Trust Center) ausgestellt. Mit dieser Methode wird gewährleistet, dass kein Dritter auf den persönlichen Schlüssel zugreifen kann, wesentliche Merkmale sind:

- Erfüllt gesetzl. Schriftformerfordernis (§ 126 BGB)
- Gleiche Rechtswirkung wie eine handschriftliche Unterschrift
- Gesteigerte Beweiskraft, wie Privatkunde (§ 371a Abs. 1 ZPO)


### Weitere Arten

Durch die Anbindung werden neben den drei vorgestellten Arten der elektronischen Signatur noch weitere "Arten" zur Verfügung gestellt, diese haben folgende wesentlichen Merkmale:


#### Genehmigung:

- Empfänger mit dieser Signaturart müssen das Dokument bestätigen. Es wird keine Signatur aufgebracht.


#### Kopie (CC):

- Empfänger mit dieser Signaturart erhalten das Dokument als Kopie
- Es ist keine Aktion durch den Empfänger erforderliche (wie z.B. Bestätigung)


#### Information:

- Empfänger mit dieser Signaturart erhalten eine Information über den Signaturvorgang
- Es ist keine Aktion durch den Empfänger erforderlich (wie z.B. eine Bestätigung)


### Übersicht Anbieterunterstützung der Arten elektronischer Signaturen

| Art / Anbieter | DocuSign | FP Sign | Adobe Sign | MOXIS |
| --- | --- | --- | --- | --- |
| Elektronische (Einfache) Signatur | ✓ | ✗ | ✓ | ✓ |
| Fortgeschrittene Signatur | ✓ | ✓ | ✗ | ✓ |
| Qualifizierte Signatur | ✓ | ✓ | ✗ | ✓ |
| Genehmigung | ✗ | ✗ | ✓ | ✗ |
| Kopie (CC) | ✓ | ✗ | ✓ | ✗ |
| Information | ✗ | ✓ | ✗ | ✗ |