# otris-docs-mcp

MCP Server for [otris DOCUMENTS](https://otris.software) offline documentation. Crawls the complete otris documentation portal and makes it available to Claude Code as a searchable knowledge base.

Ask Claude natural-language questions about otris DOCUMENTS — classes, methods, HowTos, properties, manuals — and get answers backed by the full documentation.

## What it does

- **Crawls** the otris.software documentation (Scripting APIs, HowTos, Properties, Manuals)
- **Stores** everything locally as Markdown (~1000 pages)
- **Serves** it as an MCP Server with 4 tools that Claude Code can use automatically

## Requirements

- Node.js >= 20
- [Playwright](https://playwright.dev/) (only for crawling, not for the MCP server)
- An otris.software account with documentation access

## Installation

```bash
npm install -g otris-docs-mcp
```

## Setup

### 1. Login & Crawl

First time: open a browser to log into otris.software:

```bash
otris-docs-mcp crawl --login
```

This opens Chromium. Log in with your otris account, then **close the browser window**. Your session is saved locally.

Then crawl the documentation:

```bash
otris-docs-mcp crawl
```

This downloads ~1000 pages + PDFs. Takes about 5-10 minutes.

To update later, just run `otris-docs-mcp crawl` again. If your session expired, re-run with `--login`.

You can also crawl a single section:

```bash
otris-docs-mcp crawl --section portalscript-api
otris-docs-mcp crawl --section howtos
otris-docs-mcp crawl --section manuals
```

### 2. Add to Claude Code

Add the MCP server to your Claude Code settings:

**Mac/Linux:** `~/.claude/settings.json`
**Windows:** `%APPDATA%\Claude\settings.json`

```json
{
  "mcpServers": {
    "otris-docs": {
      "command": "otris-docs-mcp"
    }
  }
}
```

Restart Claude Code. Done.

### 3. Ask questions

Just ask Claude anything about otris DOCUMENTS:

- "Kann man Mappen per Script erstellen?"
- "Wie funktioniert setAttribute bei DocFile?"
- "Gibt es eine API fuer Email-Versand?"
- "Was sind Guards bei Workflows?"
- "Welche Properties gibt es fuer AccessProfile?"

Claude uses the MCP tools automatically to find answers in the documentation.

## MCP Tools

The server exposes 4 tools:

| Tool | Description |
|------|-------------|
| `otris_overview` | Compact overview of all sections + page counts. With section parameter: detailed listing. |
| `otris_search` | Full-text search across all documentation. Supports section filter. |
| `otris_read` | Read a specific documentation page by path. |
| `otris_list` | List all pages in a section or subfolder. |

## Documentation Sections

| Section | Content | Pages |
|---------|---------|-------|
| `portalscript-api` | Server-side scripting classes (DocFile, Context, SystemUser, ...) | ~110 |
| `scriptextensions-api` | Script extension modules (ScriptList, Notifications, ...) | ~34 |
| `gadget-api` | Gadget framework (Form, Chart, Timeline, ...) | ~39 |
| `client-sdk` | Frontend SDK (FileFormModel, GadgetContext, ...) | ~40 |
| `drop-sdk` | Documents Drop SDK | ~26 |
| `record-library` | Record data library | ~10 |
| `otr-tools` | otrAssert, otrLogger, otrPackage, otrUpgrade, otrTest | ~32 |
| `howtos` | Task-focused guides (Workflows, ScriptList, Gadgets, ...) | ~91 |
| `properties` | Configuration properties reference | ~1 |
| `manuals` | Online manuals + PDF downloads | ~650 |

## Configuration

| Env Variable | Default | Description |
|-------------|---------|-------------|
| `OTRIS_DOCS_PATH` | `~/.otris-docs` | Where documentation is stored |

Custom path example:

```json
{
  "mcpServers": {
    "otris-docs": {
      "command": "otris-docs-mcp",
      "env": { "OTRIS_DOCS_PATH": "/path/to/docs" }
    }
  }
}
```

## Uninstall

Run the uninstall script:

```bash
npx otris-docs-mcp-uninstall
```

Or manually:

```bash
# 1. Remove NPM package
npm uninstall -g otris-docs-mcp

# 2. Remove downloaded documentation
rm -rf ~/.otris-docs          # Mac/Linux
rmdir /s /q %USERPROFILE%\.otris-docs  # Windows

# 3. Remove MCP config from Claude Code settings
# Edit ~/.claude/settings.json and remove the "otris-docs" entry
```

Or use the interactive uninstall script:

```bash
node uninstall.mjs
```

This asks for each step: NPM package, documentation vault, Claude Code config.

## For Developers

```bash
git clone https://github.com/manolklussdev/otris-docs-mcp.git
cd otris-docs-mcp
npm install
npm test        # 48 tests
npm link        # Install locally for testing
```

## How it works

1. **Crawler** uses Playwright to authenticate and navigate otris.software
2. Content is extracted from different page types (TypeDoc, JSDoc, otris-book)
3. HTML is converted to clean Markdown with proper formatting
4. Internal links are converted to relative vault paths
5. **MCP Server** serves the Markdown files via stdio to Claude Code
6. Claude uses the tools to find relevant documentation and answer questions

## License

Private — for use by Intex Informationssysteme GmbH developers.
