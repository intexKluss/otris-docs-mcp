import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

export async function startServer(baseUrl) {
  if (!baseUrl) {
    console.error('OTRIS_DOCS_URL is required. Set it to the otris-docs-web server URL (e.g. http://10.0.0.5:3000)');
    process.exit(1);
  }

  const server = new McpServer({
    name: 'otris-docs-mcp',
    version: '1.0.0',
  });

  server.tool(
    'otris_overview',
    'Get an overview of the otris DOCUMENTS documentation vault. Without parameters, returns a compact summary of all sections with page counts. With a section parameter, returns a detailed listing of all pages grouped by subfolder.',
    {
      section: z.string().optional().describe('Section name to get detailed listing for (e.g. "portalscript-api", "howtos")'),
    },
    async (params) => {
      const qs = new URLSearchParams();
      if (params.section) qs.set('section', params.section);
      const query = qs.toString();
      const data = await apiFetch(`${baseUrl}/api/overview${query ? `?${query}` : ''}`);
      return { content: [{ type: 'text', text: data.text }] };
    }
  );

  server.tool(
    'otris_search',
    'Full-text search across the otris DOCUMENTS documentation. Returns matching files with context lines around each match. Use this to find specific API methods, classes, properties, or howto content.',
    {
      query: z.string().describe('Search query (case-insensitive text search)'),
      section: z.string().optional().describe('Limit search to a specific section (e.g. "portalscript-api")'),
      max_results: z.number().int().min(1).max(100).optional().describe('Maximum number of results (default: 10)'),
      context_lines: z.number().int().min(0).max(20).optional().describe('Number of context lines around each match (default: 3)'),
    },
    async (params) => {
      const qs = new URLSearchParams({ query: params.query });
      if (params.section) qs.set('section', params.section);
      if (params.max_results) qs.set('max_results', String(params.max_results));
      if (params.context_lines) qs.set('context_lines', String(params.context_lines));
      const data = await apiFetch(`${baseUrl}/api/search?${qs}`);
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
    }
  );

  server.tool(
    'otris_read',
    'Read the full content of a specific documentation page. Use the path from otris_overview or otris_search results. Returns title, source URL, and markdown content.',
    {
      path: z.string().describe('Document path relative to vault root, without .md extension (e.g. "portalscript-api/classes/DocFile")'),
      max_length: z.number().int().min(1).max(200000).optional().describe('Maximum content length in characters (default: 50000). Content beyond this is truncated.'),
    },
    async (params) => {
      const qs = new URLSearchParams({ path: params.path });
      if (params.max_length) qs.set('max_length', String(params.max_length));
      const data = await apiFetch(`${baseUrl}/api/read?${qs}`);
      if (data.error) {
        return { content: [{ type: 'text', text: data.error }], isError: true };
      }
      let text = '';
      if (data.title) text += `# ${data.title}\n\n`;
      if (data.source) text += `Source: ${data.source}\n\n`;
      text += data.content;
      if (data.truncated) text += '\n\n⚠️ Content was truncated.';
      return { content: [{ type: 'text', text }] };
    }
  );

  server.tool(
    'otris_list',
    'List all documentation pages in a section or subfolder. Returns an array of {name, path} objects. Use this to enumerate available pages before reading them.',
    {
      section: z.string().describe('Section name (e.g. "portalscript-api", "howtos", "properties")'),
      subfolder: z.string().optional().describe('Subfolder within the section (e.g. "classes", "interfaces")'),
    },
    async (params) => {
      const qs = new URLSearchParams({ section: params.section });
      if (params.subfolder) qs.set('subfolder', params.subfolder);
      const data = await apiFetch(`${baseUrl}/api/list?${qs}`);
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
    }
  );

  server.tool(
    'otris_status',
    'Check the status of the otris DOCUMENTS documentation vault on the server. Returns freshness, page count, and whether an update is recommended.',
    {},
    async () => {
      const data = await apiFetch(`${baseUrl}/api/status`);
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

async function apiFetch(url) {
  let res;
  try {
    res = await fetch(url, { signal: AbortSignal.timeout(30000) });
  } catch (err) {
    if (err.name === 'TimeoutError') {
      throw new Error(`Server not responding (timeout after 30s). Is otris-docs-web running at ${new URL(url).origin}?`);
    }
    throw new Error(`Cannot reach server at ${new URL(url).origin} — ${err.message}`);
  }
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`API error ${res.status}: ${body}`);
  }
  return res.json();
}
