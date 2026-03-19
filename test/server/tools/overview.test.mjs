import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { handleOverview } from '../../../src/server/tools/overview.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VAULT = join(__dirname, '../../fixtures/sample-vault');

describe('handleOverview', () => {
  it('returns compact overview without section param', () => {
    const result = handleOverview(VAULT, {});
    assert.ok(result.includes('otris DOCUMENTS Documentation'));
    assert.ok(result.includes('portalscript-api'));
    assert.ok(result.includes('howtos'));
    assert.ok(result.includes('properties'));
    assert.ok(result.includes('2026-03-19'), 'should contain crawl date');
  });

  it('shows page counts in compact overview', () => {
    const result = handleOverview(VAULT, {});
    // portalscript-api has 3 pages
    assert.ok(result.includes('3 pages'));
    // howtos has 1 page
    assert.ok(result.includes('1 pages'));
  });

  it('shows subfolder names in compact overview', () => {
    const result = handleOverview(VAULT, {});
    // portalscript-api has classes and interfaces subfolders
    assert.ok(result.includes('classes'));
    assert.ok(result.includes('interfaces'));
  });

  it('returns detailed listing for a specific section', () => {
    const result = handleOverview(VAULT, { section: 'portalscript-api' });
    assert.ok(result.includes('portalscript-api'));
    assert.ok(result.includes('DocFile'));
    assert.ok(result.includes('AccessProfile'));
    assert.ok(result.includes('Context'));
    assert.ok(result.includes('3 pages'));
  });

  it('groups by subfolder in detailed listing', () => {
    const result = handleOverview(VAULT, { section: 'portalscript-api' });
    assert.ok(result.includes('### classes'));
    assert.ok(result.includes('### interfaces'));
  });

  it('returns message for nonexistent section', () => {
    const result = handleOverview(VAULT, { section: 'nonexistent' });
    assert.ok(result.includes('not found or empty'));
  });
});
