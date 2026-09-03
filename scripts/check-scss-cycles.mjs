import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('src');
const scssFiles = [];

async function collectFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) await collectFiles(entryPath);
    else if (entry.name.endsWith('.scss')) scssFiles.push(entryPath);
  }
}

function resolveImport(importer, specifier) {
  const basePath = specifier.startsWith('@app/')
    ? path.join(root, 'app', specifier.slice('@app/'.length))
    : specifier.startsWith('.')
      ? path.resolve(path.dirname(importer), specifier)
      : null;

  if (!basePath) return null;

  const candidates = [
    basePath,
    `${basePath}.scss`,
    path.join(path.dirname(basePath), `_${path.basename(basePath)}.scss`),
    path.join(basePath, 'index.scss'),
  ];
  return candidates.find((candidate) => scssFiles.includes(candidate)) ?? null;
}

await collectFiles(root);

const graph = new Map();
for (const file of scssFiles) {
  const source = await readFile(file, 'utf8');
  const dependencies = [...source.matchAll(/@(use|forward)\s+['"]([^'"]+)['"]/g)]
    .map((match) => resolveImport(file, match[2]))
    .filter(Boolean);
  graph.set(file, dependencies);
}

const states = new Map();
const stack = [];
const cycles = [];

function visit(file) {
  const state = states.get(file);
  if (state === 'visiting') {
    const cycleStart = stack.indexOf(file);
    cycles.push([...stack.slice(cycleStart), file]);
    return;
  }
  if (state === 'visited') return;

  states.set(file, 'visiting');
  stack.push(file);
  for (const dependency of graph.get(file) ?? []) visit(dependency);
  stack.pop();
  states.set(file, 'visited');
}

for (const file of scssFiles) visit(file);

if (cycles.length > 0) {
  console.error('SCSS cyclic dependencies detected:');
  for (const cycle of cycles) console.error(cycle.map((file) => path.relative(process.cwd(), file)).join(' -> '));
  process.exit(1);
}

console.log(`SCSS dependency cycles: none (${scssFiles.length} files checked)`);
