import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { assessPack } from '@volter/twin-standard';
assert.ok(process.env.VOLTER_WORLD, 'assessment runs through a World');
const report = await assessPack(join(process.cwd(), 'tavily'), { browser: process.argv.includes('--browser') });
mkdirSync('assessment', { recursive: true });
writeFileSync('assessment/report.json', JSON.stringify(report, null, 2) + '\n');
assert.ok(report.ready, 'pack is changes-needed; inspect assessment/report.json');
