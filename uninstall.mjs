#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { homedir, platform } from 'os';
import { createInterface } from 'readline';

const home = homedir();
const isWin = platform() === 'win32';

function ask(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => {
    rl.question(question + ' (y/n) ', answer => {
      rl.close();
      resolve(answer.trim().toLowerCase() === 'y');
    });
  });
}

function log(msg) { console.log(`  ${msg}`); }

console.log('\notris-docs-mcp Uninstaller\n');

// 1. Remove NPM package
console.log('[1/2] NPM package');
try {
  execSync('npm list -g otris-docs-mcp', { stdio: 'ignore' });
  if (await ask('  Global NPM package entfernen?')) {
    execSync('npm uninstall -g otris-docs-mcp', { stdio: 'inherit' });
    log('Entfernt.');
  } else {
    log('Uebersprungen.');
  }
} catch {
  log('Nicht global installiert — uebersprungen.');
}

// 2. Remove MCP config from Claude Code / Codex settings
console.log('\n[2/2] MCP-Konfiguration');

const settingsPaths = isWin
  ? [join(home, 'AppData', 'Roaming', 'Claude', 'settings.json'), join(home, '.claude', 'settings.json')]
  : [join(home, '.claude', 'settings.json'), join(home, '.config', 'claude', 'settings.json')];

let cleaned = false;
for (const settingsPath of settingsPaths) {
  if (!existsSync(settingsPath)) continue;
  try {
    const raw = readFileSync(settingsPath, 'utf8');
    const settings = JSON.parse(raw);
    if (settings.mcpServers?.['otris-docs']) {
      if (!cleaned && await ask(`  MCP-Eintrag aus ${settingsPath} entfernen?`)) {
        delete settings.mcpServers['otris-docs'];
        if (Object.keys(settings.mcpServers).length === 0) delete settings.mcpServers;
        writeFileSync(settingsPath, JSON.stringify(settings, null, 2) + '\n');
        log('MCP-Eintrag entfernt.');
        cleaned = true;
      } else {
        log('Uebersprungen.');
      }
    }
  } catch {
    // Settings file not parseable — skip
  }
}
if (!cleaned) log('Kein MCP-Eintrag gefunden — uebersprungen.');

console.log('\nFertig.\n');
