import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';

function walk(directory) {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = join(directory, entry.name);
		return entry.isDirectory() ? walk(path) : [path];
	});
}

const docs = walk('src/routes/docs').filter((path) => path.endsWith('+page.md'));

function body(path) {
	return readFileSync(path, 'utf8').replace(/^---[\s\S]*?---\s*/, '');
}

function words(path) {
	return body(path).replace(/<[^>]+>|[#*_[\]()`|>-]/g, ' ').trim().split(/\s+/).filter(Boolean).length;
}

test('task-oriented docs pages contain substantive guidance', () => {
	for (const path of [
		'src/routes/docs/+page.md',
		'src/routes/docs/getting-started/+page.md',
		'src/routes/docs/tutorials/working-with-the-map/+page.md',
		'src/routes/docs/tutorials/planning-sprints-and-releases/+page.md',
		'src/routes/docs/pro/+page.md',
		'src/routes/docs/pro/features/+page.md',
		'src/routes/docs/pro/migration/+page.md',
		'src/routes/docs/pro/cloud-migration/+page.md'
	]) assert.ok(words(path) >= 120, `${path} has only ${words(path)} words`);
});

test('Cloud migration guide states the implemented assistant constraints', () => {
	const guide = body('src/routes/docs/pro/cloud-migration/+page.md');
	for (const phrase of [
		'does not migrate Jira projects',
		'Matching project keys',
		'global issue types',
		'the same names',
		'the same issue keys',
		'does not translate board or filter IDs',
		'partial failures are not rolled back',
		'merges the existing map list'
	]) assert.ok(guide.includes(phrase), `Cloud migration guide is missing: ${phrase}`);
});

test('Data Center migration guide states the assistant constraints', () => {
	const guide = body('src/routes/docs/pro/migration/+page.md');
	for (const phrase of [
		'does not move Jira projects',
		'same project keys',
		'same issue keys',
		'global issue types',
		'same names',
		'can replace properties',
		'Cloud Migration'
	]) assert.ok(guide.includes(phrase), `migration guide is missing: ${phrase}`);
});

test('docs content does not duplicate the layout h1', () => {
	for (const path of docs) assert.doesNotMatch(body(path), /^#\s+/m, path);
});

test('unsupported Advanced claims stay out of the docs', () => {
	const all = docs.map((path) => readFileSync(path, 'utf8')).join('\n');
	for (const phrase of [
		'scheduled exports',
		'automated reporting',
		'pdf export options',
		'csv export options',
		'smtp configuration',
		'soc 2 type ii',
		'hipaa compliance',
		'unlimited story maps'
	]) assert.ok(!all.toLowerCase().includes(phrase), phrase);
});

test('internal documentation links resolve to source routes', () => {
	for (const path of docs) {
		for (const match of body(path).matchAll(/(?<!!)\[[^\]]*\]\((\/docs[^)#?]*)/g)) {
			const route = match[1].replace(/\/$/, '');
			const target = route === '/docs' ? 'src/routes/docs/+page.md' : `src/routes${route}/+page.md`;
			assert.ok(existsSync(target), `${path} links to missing ${route}`);
		}
	}
});

test('source navigation uses canonical no-trailing-slash paths', () => {
	for (const path of walk('src').filter((path) => /\.(svelte|md)$/.test(path))) {
		const source = readFileSync(path, 'utf8');
		assert.doesNotMatch(source, /href="\/[^"]+\/"|\]\(\/[^)#?]+\/\)/, path);
	}
});
