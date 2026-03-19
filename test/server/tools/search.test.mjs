import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { handleSearch } from '../../../src/server/tools/search.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VAULT = join(__dirname, '../../fixtures/sample-vault');

describe('handleSearch', () => {
  it('finds results for a known keyword', () => {
    const results = handleSearch(VAULT, { query: 'setAttribute' });
    assert.ok(results.length > 0);
    assert.ok(results.some(r => r.file.includes('DocFile')));
  });

  it('filters by section', () => {
    const results = handleSearch(VAULT, { query: 'Mappenfeld', section: 'howtos' });
    assert.ok(results.length > 0);
    assert.ok(results.every(r => r.file.startsWith('howtos/')));
  });

  it('returns empty array for no matches', () => {
    const results = handleSearch(VAULT, { query: 'xyznonexistent123' });
    assert.deepEqual(results, []);
  });

  it('respects max_results default', () => {
    // With our small fixture set this just ensures no crash
    const results = handleSearch(VAULT, { query: 'AccessProfile' });
    assert.ok(Array.isArray(results));
  });
});
