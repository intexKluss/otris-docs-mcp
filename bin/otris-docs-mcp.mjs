#!/usr/bin/env node
import { startServer } from '../src/server/index.mjs';

const baseUrl = process.env.OTRIS_DOCS_URL;
await startServer(baseUrl);
