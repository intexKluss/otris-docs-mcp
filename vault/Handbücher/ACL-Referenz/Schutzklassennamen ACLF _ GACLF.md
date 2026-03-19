---
title: "Die Schutzklassennamen ACLF und GACLF"
source: "https://otris.software/documents/manuals/books/acl-reference/aclfgaclf.html"
---

# Die Schutzklassennamen ACLF und GACLF

Für die Datenbanksysteme **MS SQL-Server** und **MySQL** existiert ab **Portalversion 6.0b** eine Variante für (G)ACLs, die schneller ausgeführt werden kann, aber in den **DOCUMENTS** Mappen nur noch die ersten 255 Zeichen des Schutzfelds nach dem Benutzernamen bzw. seinen Zugriffsprofilen durchsucht. Bei normalen ACLs sind bis zu 4000 Zeichen möglich.

Sofern die Einschränkung auf 255 Zeichen für Sie kein Problem ist, etwa weil den Mappen bei Ihrer Installation stets nur ein bis zwei berechtigte Benutzerprofile zugewiesen werden, dann können Sie an den reservierten Schutzklassennamen ein F anhängen, um die Verarbeitung innerhalb der Datenbank zu beschleunigen.

Sie können zwischen ACL und ACLF beziehungsweise GACL und GACLF hin- und herschalten, ohne an den übrigen Einstellungen etwas zu ändern. Das ist vor allem dann von Vorteil, wenn sich später herausstellen sollte, dass die 255 Zeichen doch nicht mehr ausreichen.

Eine Überschreitung der Länge äußert sich stets so, dass berechtigte Benutzer einige Mappen nicht mehr finden. Es ist ausgeschlossen, dass unberechtigte Benutzer hierdurch Zugriff erhalten.

Mit **Oracle** können aus technischen Gründen ohnehin nur 255 Zeichen berücksichtigt werden. Daher bringen ACLF und GACLF dort keine Verbesserung. Bei Archiven gibt es ebenfalls keinen Unterschied.