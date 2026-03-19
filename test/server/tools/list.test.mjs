import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { handleList } from '../../../src/server/tools/list.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VAULT = join(__dirname, '../../fixtures/sample-vault');

describe('handleList', () => {
  it('lists all files in a section', () => {
    const files = handleList(VAULT, { section: 'portalscript-api' });
    assert.ok(files.length >= 3);
    assert.ok(files.some(f => f.name === 'DocFile'));
    assert.ok(files.some(f => f.name === 'AccessProfile'));
    assert.ok(files.some(f => f.name === 'Context'));
  });

  it('lists files in a subfolder', () => {
    const files = handleList(VAULT, { section: 'portalscript-api', subfolder: 'classes' });
    assert.equal(files.length, 2);
    assert.ok(files.some(f => f.name === 'DocFile'));
    assert.ok(files.some(f => f.name === 'AccessProfile'));
  });

  it('returns paths relative to vault root', () => {
    const files = handleList(VAULT, { section: 'portalscript-api', subfolder: 'classes' });
    const docFile = files.find(f => f.name === 'DocFile');
    assert.equal(docFile.path, 'portalscript-api/classes/DocFile');
  });

  it('returns empty array for nonexistent section', () => {
    const files = handleList(VAULT, { section: 'nonexistent' });
    assert.deepEqual(files, []);
  });

  it('returns empty array for nonexistent subfolder', () => {
    const files = handleList(VAULT, { section: 'portalscript-api', subfolder: 'nonexistent' });
    assert.deepEqual(files, []);
  });
});
