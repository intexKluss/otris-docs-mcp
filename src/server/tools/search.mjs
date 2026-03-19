import { searchDocs } from '../../shared/vault.mjs';

export function handleSearch(vaultPath, params) {
  const { query, section, max_results = 10, context_lines = 3 } = params;
  return searchDocs(vaultPath, query, { section, maxResults: max_results, contextLines: context_lines });
}
