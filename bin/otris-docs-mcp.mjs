#!/usr/bin/env node
const command = process.argv[2];

if (command === 'crawl') {
  const { runCrawl } = await import('../src/crawler/index.mjs');
  const args = process.argv.slice(3);
  const login = args.includes('--login');
  const sectionArg = args.find((a, i) => args[i - 1] === '--section');
  await runCrawl({ login, section: sectionArg });
} else {
  // Default: start MCP server
  const { startServer } = await import('../src/server/index.mjs');
  await startServer();
}
