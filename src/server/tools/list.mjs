import { listFiles } from '../../shared/vault.mjs';

export function handleList(vaultPath, params) {
  const { section, subfolder } = params;
  return listFiles(vaultPath, section, subfolder);
}
