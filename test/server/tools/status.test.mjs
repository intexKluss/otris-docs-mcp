import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { handleStatus } from '../../../src/server/tools/status.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VAULT = join(__dirname, '../../fixtures/sample-vault');

describe('otris_status', () => {
  it('returns status for existing vault', () => {
    const result = handleStatus(VAULT);
    assert.ok(result.status);
    assert.ok(result.pages > 0);
    assert.ok(result.crawledAt);
  });

  it('returns not_installed for missing vault', () => {
    const result = handleStatus('/nonexistent/path');
    assert.equal(result.status, 'not_installed');
  });
});
