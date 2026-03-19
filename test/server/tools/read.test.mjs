import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { handleRead } from '../../../src/server/tools/read.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VAULT = join(__dirname, '../../fixtures/sample-vault');

describe('handleRead', () => {
  it('reads a document successfully', () => {
    const doc = handleRead(VAULT, { path: 'portalscript-api/classes/DocFile' });
    assert.equal(doc.title, 'DocFile | Portalscript API');
    assert.ok(doc.content.includes('# Class DocFile'));
    assert.equal(doc.truncated, false);
  });

  it('returns source URL', () => {
    const doc = handleRead(VAULT, { path: 'portalscript-api/classes/DocFile' });
    assert.ok(doc.source.includes('DocFile.html'));
  });

  it('truncates long content with max_length', () => {
    const doc = handleRead(VAULT, { path: 'portalscript-api/classes/DocFile', max_length: 50 });
    assert.equal(doc.truncated, true);
    assert.ok(doc.content.includes('[truncated]'));
  });

  it('uses default max_length of 50000', () => {
    const doc = handleRead(VAULT, { path: 'portalscript-api/classes/DocFile' });
    assert.equal(doc.truncated, false);
  });

  it('returns error object for missing document', () => {
    const result = handleRead(VAULT, { path: 'nonexistent/file' });
    assert.ok(result.error);
    assert.ok(result.error.includes('not found'));
  });
});
