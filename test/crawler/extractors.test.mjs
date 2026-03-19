import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { getContentSelector, cleanMarkdown } from '../../src/crawler/extractors.mjs';

describe('extractors', () => {
  it('returns correct selector for typedoc', () => {
    assert.equal(getContentSelector('typedoc'), '.col-content');
  });
  it('returns correct selector for jsdoc', () => {
    assert.equal(getContentSelector('jsdoc'), 'article');
  });
  it('returns correct selector for otris-book', () => {
    assert.equal(getContentSelector('otris-book'), '.otris-book-content');
  });
  it('returns correct selector for properties', () => {
    assert.equal(getContentSelector('properties'), 'article');
  });
  it('returns correct selector for manuals', () => {
    assert.equal(getContentSelector('manuals'), '.otris-book-content');
  });
  it('falls back to article for unknown type', () => {
    assert.equal(getContentSelector('unknown'), 'article');
  });
  it('cleans markdown whitespace', () => {
    const input = 'foo\n\n\n\n\nbar  \nbaz';
    const result = cleanMarkdown(input);
    assert.ok(!result.includes('\n\n\n\n'));
    assert.ok(!result.includes('  \n'));
  });
});
