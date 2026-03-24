# otris-docs-mcp

MCP-Client fuer die [otris DOCUMENTS](https://otris.software) Dokumentation. Verbindet sich mit einem otris-docs-web Server und stellt die komplette Dokumentation als MCP-Tools bereit.

Frag deinen Coding-Agent Fragen zur otris DOCUMENTS API -- Klassen, Methoden, HowTos, Properties -- und bekomme Antworten direkt aus der Dokumentation.

## Voraussetzungen

- Node.js >= 20
- Zugriff auf einen laufenden otris-docs-web Server (frag deinen Admin nach der URL)

## Installation

```bash
npm install -g otris-docs-mcp
```

## Einrichtung

### Claude Code

In `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "otris-docs": {
      "command": "otris-docs-mcp",
      "env": {
        "OTRIS_DOCS_URL": "http://SERVER-IP:3000"
      }
    }
  }
}
```

### Codex CLI

In `~/.codex/config.json`:

```json
{
  "mcpServers": {
    "otris-docs": {
      "command": "otris-docs-mcp",
      "env": {
        "OTRIS_DOCS_URL": "http://SERVER-IP:3000"
      }
    }
  }
}
```

Ersetze `SERVER-IP:3000` mit der URL deines otris-docs-web Servers.

Coding-Agent neustarten. Fertig.

## Nutzung

Frag deinen Agent einfach auf Deutsch oder Englisch:

- "Wie erstelle ich eine Mappe per Script?"
- "Welche Methoden hat DocFile?"
- "Was sind Guards bei Workflows?"
- "Zeig mir die Properties von AccessProfile"

Der Agent nutzt die MCP-Tools automatisch um Antworten in der Dokumentation zu finden.

## MCP-Tools

| Tool | Beschreibung |
|------|-------------|
| `otris_overview` | Uebersicht aller Sektionen mit Seitenzahlen. Mit Section-Parameter: detaillierte Auflistung. |
| `otris_search` | Volltextsuche ueber die gesamte Dokumentation. |
| `otris_read` | Eine bestimmte Dokumentationsseite lesen. |
| `otris_list` | Alle Seiten einer Sektion auflisten. |
| `otris_status` | Zeigt wie aktuell die Dokumentation ist. |

## Konfiguration

| Variable | Pflicht | Beschreibung |
|----------|---------|-------------|
| `OTRIS_DOCS_URL` | Ja | URL des otris-docs-web Servers |

## Wie es funktioniert

Dieses Package ist ein duenner MCP-Client. Es enthaelt **keine** Dokumentationsdaten. Alle Anfragen werden per HTTP an den otris-docs-web Server weitergeleitet, der den Dokumentations-Vault hostet.

```
Coding-Agent (Claude Code, Codex, ...)
    |
    +-- otris-docs-mcp (MCP Server, lokal installiert)
            |
            +-- HTTP --> otris-docs-web Server (hat den Vault)
```

## License

Private -- for use by Intex Informationssysteme GmbH developers.
