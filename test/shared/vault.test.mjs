import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { listFiles, readDoc, searchDocs, getManifest, getSections } from '../../src/shared/vault.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VAULT = join(__dirname, '../fixtures/sample-vault');

describe('vault', () => {
  describe('getSections', () => {
    it('returns all section directories', () => {
      const sections = getSections(VAULT);
      assert.ok(sections.includes('portalscript-api'));
      assert.ok(sections.includes('howtos'));
      assert.ok(sections.includes('properties'));
    });
  });

  describe('listFiles', () => {
    it('lists all md files in a section', () => {
      const files = listFiles(VAULT, 'portalscript-api');
      assert.ok(files.length >= 3);
      assert.ok(files.some(f => f.name === 'DocFile'));
    });

    it('lists files in a subfolder', () => {
      const files = listFiles(VAULT, 'portalscript-api', 'classes');
      assert.equal(files.length, 2);
      assert.ok(files.some(f => f.name === 'DocFile'));
      assert.ok(files.some(f => f.name === 'AccessProfile'));
    });

    it('returns empty array for nonexistent section', () => {
      const files = listFiles(VAULT, 'nonexistent');
      assert.deepEqual(files, []);
    });
  });

  describe('readDoc', () => {
    it('reads a doc with frontmatter parsed', () => {
      const doc = readDoc(VAULT, 'portalscript-api/classes/DocFile');
      assert.equal(doc.title, 'DocFile | Portalscript API');
      assert.ok(doc.source.includes('DocFile.html'));
      assert.ok(doc.content.includes('# Class DocFile'));
      assert.equal(doc.truncated, false);
    });

    it('truncates content at max_length', () => {
      const doc = readDoc(VAULT, 'portalscript-api/classes/DocFile', 100);
      assert.equal(doc.truncated, true);
      assert.ok(doc.content.length <= 120); // 100 + truncation message
    });

    it('returns null for nonexistent path', () => {
      const doc = readDoc(VAULT, 'nonexistent/file');
      assert.equal(doc, null);
    });
  });

  describe('searchDocs', () => {
    it('finds matches by keyword', () => {
      const results = searchDocs(VAULT, 'setAttribute');
      assert.ok(results.length > 0);
      assert.ok(results[0].file.includes('DocFile'));
    });

    it('filters by section', () => {
      const results = searchDocs(VAULT, 'Mappenfeld', { section: 'howtos' });
      assert.ok(results.length > 0);
      assert.ok(results.every(r => r.file.startsWith('howtos/')));
    });

    it('returns empty for no matches', () => {
      const results = searchDocs(VAULT, 'xyznonexistent123');
      assert.deepEqual(results, []);
    });
  });

  describe('getManifest', () => {
    it('reads manifest', () => {
      const manifest = getManifest(VAULT);
      assert.equal(manifest.pageCount, 5);
      assert.ok(manifest.crawledAt);
    });
  });
});
