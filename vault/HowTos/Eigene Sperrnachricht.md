---
title: "Eigene Sperrnachricht"
source: "https://otris.software/documents/howto/common/documentsLockedMessage.html"
---

# Eigene Sperrnachricht

Wenn an einem DOCUMENTS-Mandanten über den Manager der Freigabestatus *gesperrt* gesetzt wurde, wird beim Besuchen der Loginseite eine Standard-Sperrnachricht angezeigt.

Diese Sperrnachricht kann angepasst werden, in dem im Manager unter **Monitoring/Globale Eigenschaften** eine Eigenschaft mit Namen **documentsLockedMessage** und Typ **CustomMessage** angelegt wird.

Für den angezeigten Wert der Sperrnachricht können internationalisierte Texte und HTML-Inhalte angezeigt werden.


## Standardtext anstatt Loginfelder

Mit dieser Eigenschaft ersetzt die Standard-Sperrnachricht die Loginfelder


```javascript
Name: documentsLockedMessage
Typ:  CustomMessage
Wert: defaultMessage
```

Name: documentsLockedMessage
Typ:  CustomMessage
Wert: defaultMessage
## Einfacher Text

Als Wert für die Nachricht kann ein einfacher Text verwendet werden:


```javascript
Name: documentsLockedMessage
Typ:  CustomMessage
Wert: Der Zugang zu diesem Mandanten ist gesperrt.
```

Name: documentsLockedMessage
Typ:  CustomMessage
Wert: Der Zugang zu diesem Mandanten ist gesperrt.
## Internationalisierter Text

Der Text der Sperrnachricht kann auch für die verfügbaren Sprachen gesetzt werden:


```javascript
Name: documentsLockedMessage
Typ:  CustomMessage
Wert: de:Der Zugang zu diesem Mandanten ist gesperrt.;en:Access to this principal is blocked.
```

Name: documentsLockedMessage
Typ:  CustomMessage
Wert: de:Der Zugang zu diesem Mandanten ist gesperrt.;en:Access to this principal is blocked.
## Einfache Html Meldung

Für die Sperrnachricht können auch HTML-Inhalte verwendet werden:


```javascript
Name: documentsLockedMessage
Typ:  CustomMessage
Wert:

<div style="height:170px;display:flex;flex-direction:column;justify-content:center;padding:0px 27px;color:#a4a3a5;">
	<strong>Der Zugang zu diesem Mandanten wurde gespert.</strong>
	<div style="margin-top:5px;">Bitte wenden sie sich bei Fragen an ihren Administrator.</div>
</div>
```

Name: documentsLockedMessage
Typ:  CustomMessage
Wert:

<div style="height:170px;display:flex;flex-direction:column;justify-content:center;padding:0px 27px;color:#a4a3a5;">
	<strong>Der Zugang zu diesem Mandanten wurde gespert.</strong>
	<div style="margin-top:5px;">Bitte wenden sie sich bei Fragen an ihren Administrator.</div>
</div>
## Internationalisierte HTML-Inhalte

Wenn abhängig von der Sprache, unterschiedliche HTML-Inhalte angezeigt werden sollen, müssen je Sprache Eigenschaften der Form `documentsLockedMessage_<Sprachkürzel>` angelegt werden.

Deutsche Meldung mit HTML:


```javascript
Name: documentsLockedMessage_de
Typ:  CustomMessage
Wert:

<div style="height:170px;display:flex;padding:0px 27px;text-align:left;">
    <div style="display:flex;flex-direction:column;justify-content:center;color:#a4a3a5;">
		<strong>Der Zugang zu diesem Mandanten wurde gesperrt.</strong>
		<div style="margin-top:5px;">Bitte wenden sie sich bei Fragen an ihren Administrator.</div>
		<div style="margin-top:15px;font-weight:bold">Jürgen van der Vaals</div>
		<div style="margin-top:5px;">+49 439 96606950</div>
		<div style="margin-top:5px;font-weight:bold;">support@peachit.de</div>
    </div>
</div>
```

Name: documentsLockedMessage_de
Typ:  CustomMessage
Wert:

<div style="height:170px;display:flex;padding:0px 27px;text-align:left;">
    <div style="display:flex;flex-direction:column;justify-content:center;color:#a4a3a5;">
		<strong>Der Zugang zu diesem Mandanten wurde gesperrt.</strong>
		<div style="margin-top:5px;">Bitte wenden sie sich bei Fragen an ihren Administrator.</div>
		<div style="margin-top:15px;font-weight:bold">Jürgen van der Vaals</div>
		<div style="margin-top:5px;">+49 439 96606950</div>
		<div style="margin-top:5px;font-weight:bold;">support@peachit.de</div>
    </div>
</div>Englische Meldung mit HTML:


```javascript
Name: documentsLockedMessage_en
Typ:  CustomMessage
Wert:

<div style="height:170px;display:flex;padding:0px 27px;text-align:left;">
	<div style="display:flex;flex-direction:column;justify-content:center;color:#a4a3a5;">
		<strong>Accees to this principal is blocked.</strong>
		<div style="margin-top:5px;">Please contact your administrator if you have any questions.</div>
		<div style="margin-top:15px;font-weight:bold">Jürgen van der Vaals</div>
		<div style="margin-top:5px;">+49 439 96606950</div>
		<div style="margin-top:5px;font-weight:bold;">contract@peachit.de</div>
	</div>
</div>
```

Name: documentsLockedMessage_en
Typ:  CustomMessage
Wert:

<div style="height:170px;display:flex;padding:0px 27px;text-align:left;">
	<div style="display:flex;flex-direction:column;justify-content:center;color:#a4a3a5;">
		<strong>Accees to this principal is blocked.</strong>
		<div style="margin-top:5px;">Please contact your administrator if you have any questions.</div>
		<div style="margin-top:15px;font-weight:bold">Jürgen van der Vaals</div>
		<div style="margin-top:5px;">+49 439 96606950</div>
		<div style="margin-top:5px;font-weight:bold;">contract@peachit.de</div>
	</div>
</div>