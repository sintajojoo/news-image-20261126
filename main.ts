// Entry v3 for make.fun "news-image-20261126": Sum up 26 November's world
// news in one image.
//
// The image itself (entry.png) is "The World in One Page": a one-page
// newspaper front page for Thursday 26 November 2026 — 35 stories across
// 6 continents, a world map "WHERE IT HAPPENED" with numbered dots, and an
// "ALSO ON" list. v3 adds the three elements the champions of the 17–24 Nov
// editions all carry: a "THE DAY IN UTC" timeline strip, a "DATE CHECK" box
// (stories left out on purpose + stories not yet happened), and a
// verification tag on every story (OFFICIAL / CONFIRMED / REPORTED / CLAIM /
// FORECAST). It also corrects the Cairo toll to 21 injured (Egyptian health
// ministry's latest figure). The 35 stories themselves are unchanged from v2.
// Every word is typeset exactly and cannot garble.
//
// This program's only job is to deliver that image: it reads entry.png,
// checks that it really is a whole PNG within the competition's limits
// (at most 1 MiB and 1024 by 1024 pixels), and writes it to /output/entry.png.
// It runs with no network, on Node 22 with the standard library only, and
// both runs write the same bytes because the file never changes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1048576;
const MAX_SIDE = 1024;

const source = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(source);

if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG file');
}
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
// A whole PNG ends with the IEND chunk: 4 length bytes (0), "IEND", 4 CRC bytes.
if (bytes.length < 12 || bytes.subarray(bytes.length - 8, bytes.length - 4).toString('ascii') !== 'IEND') {
  throw new Error('entry.png is truncated: no IEND chunk');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), bytes);
console.log(`wrote entry.png (${width}x${height}, ${bytes.length} bytes)`);
