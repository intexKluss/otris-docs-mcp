import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { convertLinks, buildFileIndex } from '../../src/crawler/link-converter.mjs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VAULT = join(__dirname, '../fixtures/sample-vault');

describe('link-converter', () => {
  it('builds file index from vault', () => {
    const index = buildFileIndex(VAULT);
    assert.ok(index.size > 0);
  });

  it('converts relative html link to vault path', () => {
    const index = buildFileIndex(VAULT);
    const content = 'See [Context](../interfaces/Context.html) for details.';
    const result = convertLinks(content, 'portalscript-api/classes/DocFile', index);
    assert.ok(result.includes('[Context](portalscript-api/interfaces/Context)'));
  });

  it('preserves anchors in converted links', () => {
    const index = buildFileIndex(VAULT);
    const content = '[method](../interfaces/Context.html#findaccessprofile)';
    const result = convertLinks(content, 'portalscript-api/classes/DocFile', index);
    assert.ok(result.includes('portalscript-api/interfaces/Context#findaccessprofile'));
  });

  it('leaves external links unchanged', () => {
    const index = buildFileIndex(VAULT);
    const content = 'See [Backbone](http://backbonejs.org/) for details.';
    const result = convertLinks(content, 'some/file', index);
    assert.ok(result.includes('http://backbonejs.org/'));
  });

  it('leaves image links unchanged', () => {
    const index = buildFileIndex(VAULT);
    const content = '![img](./img/screenshot.png)';
    const result = convertLinks(content, 'some/file', index);
    assert.equal(result, '![img](./img/screenshot.png)');
  });

  it('leaves anchor-only links unchanged', () => {
    const index = buildFileIndex(VAULT);
    const content = '[top](#top)';
    const result = convertLinks(content, 'some/file', index);
    assert.equal(result, '[top](#top)');
  });
});
