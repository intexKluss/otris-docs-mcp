# otris-docs-mcp

MCP-Client fuer die [otris DOCUMENTS](https://otris.software) Dokumentation. Verbindet sich mit einem [otris-docs-web](https://github.com/intexKluss/otris-docs-web) Server und stellt die komplette Dokumentation als MCP-Tools bereit.

Frag deinen Coding-Agent Fragen zur otris DOCUMENTS API — Klassen, Methoden, HowTos, Properties — und bekomme Antworten direkt aus der Dokumentation.

## Zwei Wege zur Einrichtung

### Option A: Remote MCP (empfohlen)

Wenn dein Agent Remote-MCP unterstuetzt (Claude Code, Codex CLI), brauchst du **keine lokale Installation**. Verbinde dich direkt mit dem Server:

**Claude Code** — per CLI (empfohlen):

```bash
claude mcp add --transport sse otris-docs http://SERVER-IP:3000/sse
```

Oder manuell in `.mcp.json` oder `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "otris-docs": {
      "type": "sse",
      "url": "http://SERVER-IP:3000/sse"
    }
  }
}
```

**Codex CLI** — per CLI oder manuell:

```bash
codex mcp add otris-docs --url http://SERVER-IP:3000/mcp
```

Oder in `~/.codex/config.toml`:

```toml
[mcp_servers.otris-docs]
url = "http://SERVER-IP:3000/mcp"
```

Ersetze `SERVER-IP:3000` mit der URL deines otris-docs-web Servers. Agent neustarten. Fertig.

### Option B: Lokaler MCP-Proxy

Fuer Agents die kein Remote-MCP unterstuetzen (Gemini CLI, andere):

```bash
npm install -g git+ssh://git@github.com:leminkozey/otris-docs-mcp.git
```

Dann in der Agent-Konfiguration:

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
| `otris_overview` | Uebersicht aller Sektionen mit Seitenzahlen |
| `otris_search` | Volltextsuche ueber die gesamte Dokumentation |
| `otris_read` | Eine bestimmte Dokumentationsseite lesen |
| `otris_list` | Alle Seiten einer Sektion auflisten |
| `otris_status` | Zeigt wie aktuell die Dokumentation ist |

## Konfiguration

| Variable | Pflicht | Beschreibung |
|----------|---------|-------------|
| `OTRIS_DOCS_URL` | Ja (nur Option B) | URL des otris-docs-web Servers |

## Wie es funktioniert

```
Coding-Agent (Claude Code, Codex, Gemini, ...)
    |
    +-- Remote MCP (Option A: direkt per SSE)
    |       |
    |       +-- otris-docs-web Server (hat den Vault)
    |
    +-- otris-docs-mcp (Option B: lokaler MCP-Proxy)
            |
            +-- HTTP --> otris-docs-web Server (hat den Vault)
```

Beide Optionen liefern dieselben 5 Tools. Option A ist einfacher (kein npm install), Option B funktioniert mit jedem MCP-faehigen Agent.

## Deinstallation (nur Option B)

```bash
npx otris-docs-mcp/uninstall.mjs
```

Entfernt das globale NPM-Paket und den MCP-Eintrag aus der Agent-Konfiguration.

## Server-Setup

Den otris-docs-web Server aufsetzen: [otris-docs-web Repository](https://github.com/intexKluss/otris-docs-web)

## License

Proprietary — for use by Intex Informationssysteme GmbH developers.
