---
title: "Einleitung"
source: "https://otris.software/documents/manuals/books/otrsign/index.html"
---

# Einleitung

Für die Verwendung des Moduls SIGN ist eine entsprechende Lizenzerweiterung erforderlich.

Über die Schnittstelle lassen sich Dokumente direkt aus Documents heraus an einen externen Signatur Anbieter verschicken. Derzeit werden die folgenden Anbieter unterstützt:

- DocuSign
- FP Sign
- Adobe Sign
- MOXIS

Das Anfordern einer elektronischen Unterschrift erfolgt durch den Benutzer über einen Wizard. In dem Wizard werden alle benötigten Parameter definiert (z.B. Empfänger und Position von Unterschriftfeldern auf dem Dokument) und an den Anbieter geschickt. Für jeden Signaturvorgang wird in Documents ein Vorgang vom Mappentyp "otrSignDocument" angelegt. In diesem können alle Statusveränderungen (z.B. Empfänger hat Dokument unterschrieben) überwacht werden. Haben alle Empfänger das Dokument elektronisch unterzeichnet, wird das fertig unterschriebene Dokument an dem Vorgang hochgeladen. Der Status wird alle 15 Minuten über Polling aktualisiert.