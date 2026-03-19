import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Set vault path to fixtures BEFORE importing modules that use it
process.env.OTRIS_DOCS_PATH = join(__dirname, 'fixtures/sample-vault');

const { handleOverview } = await import('../src/server/tools/overview.mjs');
const { handleSearch } = await import('../src/server/tools/search.mjs');
const { handleRead } = await import('../src/server/tools/read.mjs');
const { handleList } = await import('../src/server/tools/list.mjs');
const { getDocsPath } = await import('../src/shared/config.mjs');

describe('MCP integration', () => {
  const vault = getDocsPath();

  it('overview → list → read flow works', () => {
    const overview = handleOverview(vault, {});
    assert.ok(overview.includes('portalscript-api'));

    const classes = handleList(vault, { section: 'portalscript-api', subfolder: 'classes' });
    assert.ok(classes.some(f => f.name === 'DocFile'));

    const doc = handleRead(vault, { path: classes.find(f => f.name === 'DocFile').path });
    assert.ok(doc.content.includes('setAttribute'));
  });

  it('overview with section drills down', () => {
    const detail = handleOverview(vault, { section: 'portalscript-api' });
    assert.ok(detail.includes('DocFile'));
    assert.ok(detail.includes('Context'));
    assert.ok(detail.includes('classes'));
    assert.ok(detail.includes('interfaces'));
  });

  it('search finds cross-section results', () => {
    const results = handleSearch(vault, { query: 'AccessProfile' });
    assert.ok(results.length >= 2); // classes AND properties
  });

  it('read handles missing doc gracefully', () => {
    const result = handleRead(vault, { path: 'nonexistent/thing' });
    assert.ok(result.error);
  });
});
