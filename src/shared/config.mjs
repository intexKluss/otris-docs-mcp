import { homedir } from 'os';
import { join, resolve } from 'path';

export function getDocsPath() {
  const envPath = process.env.OTRIS_DOCS_PATH;
  if (envPath) return resolve(envPath.replace(/^~/, homedir()));
  return join(homedir(), '.otris-docs');
}

export function getAuthPath() {
  return join(getDocsPath(), '.auth.json');
}

export function getManifestPath() {
  return join(getDocsPath(), '_manifest.json');
}
