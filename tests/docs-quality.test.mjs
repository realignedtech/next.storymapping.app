import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { docsEditionLinks } from '../src/lib/docs/edition-links.js';

function walk(directory) {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = join(directory, entry.name);
		return entry.isDirectory() ? walk(path) : [path];
	});
}

const docs = walk('src/routes/docs').filter((path) => path.endsWith('+page.md'));

test('customer copy does not position either app as free', () => {
	const pricingLanguage = /\b(?:try free|completely free|free (?:app|edition|version|user story|story mapping|for up to))\b/i;
	const copyFiles = [
		...walk('src').filter((path) => /\.(?:svelte|md|js)$/.test(path)),
		'static/whatsnew.json'
	];
	for (const path of copyFiles) {
		assert.doesNotMatch(readFileSync(path, 'utf8'), pricingLanguage, path);
	}
});

test('customer copy does not use pre-release positioning', () => {
	const preReleaseLanguage = /\b(?:coming soon|nearing public release|final validation in progress)\b/i;
	for (const path of walk('src').filter((path) => /\.(?:svelte|md|js)$/.test(path))) {
		assert.doesNotMatch(readFileSync(path, 'utf8'), preReleaseLanguage, path);
	}
});

test('homepage presents the adoption milestone as social proof', () => {
	assert.match(readFileSync('src/routes/+page.svelte', 'utf8'), /Trusted by .*3,000\+ Jira teams/);
});

test('Story Maps documentation includes multiple maps per project', () => {
	assert.match(readFileSync('src/routes/docs/+page.md', 'utf8'), /provides multiple maps in each Jira Software project/);
	assert.match(readFileSync('src/routes/docs/getting-started/+page.md', 'utf8'), /provides multiple story maps in each project/);
});

test('documentation edition links preserve equivalent pages with explicit routes', () => {
	assert.deepEqual(docsEditionLinks('/docs/getting-started'), {
		core: '/docs/getting-started',
		pro: '/docs/pro-app/pro-setup'
	});
	assert.deepEqual(docsEditionLinks('/docs/pro-app/pro-setup'), {
		core: '/docs/getting-started',
		pro: '/docs/pro-app/pro-setup'
	});
	assert.deepEqual(docsEditionLinks('/docs/pro/tutorials'), {
		core: '/docs/tutorials',
		pro: '/docs/pro/tutorials'
	});
	assert.deepEqual(docsEditionLinks('/docs/support/troubleshooting'), {
		core: '/docs/support/troubleshooting',
		pro: '/docs/pro/support/troubleshooting'
	});
	assert.deepEqual(docsEditionLinks('/docs/pro/support/privacy'), {
		core: '/docs/support/privacy',
		pro: '/docs/pro/support/privacy'
	});
	assert.deepEqual(docsEditionLinks('/docs/pro/whatsnew'), {
		core: '/docs/whatsnew',
		pro: '/docs/pro/whatsnew'
	});
	assert.deepEqual(docsEditionLinks('/docs/pro/migration'), {
		core: '/docs',
		pro: '/docs/pro/migration'
	});
});

test('Advanced documentation links use explicit Advanced routes', () => {
	for (const path of walk('src/routes/docs/pro').filter((path) => path.endsWith('+page.md'))) {
		for (const match of body(path).matchAll(/\[[^\]]*\]\((\/docs\/pro\/support[^)]*)\)/g)) {
			assert.ok(existsSync(`src/routes${match[1]}/+page.md`), `${path} links to missing ${match[1]}`);
		}
	}

	for (const path of walk('src').filter((path) => /\.(svelte|md|js)$/.test(path))) {
		assert.doesNotMatch(readFileSync(path, 'utf8'), /[?&]edition=pro(?:&|$)/, path);
	}
});

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
		'src/routes/docs/pro/features/using-the-app/+page.md',
		'src/routes/docs/pro/features/hierarchy/+page.md',
		'src/routes/docs/pro/migration/+page.md',
		'src/routes/docs/pro/cloud-migration/+page.md'
	]) assert.ok(words(path) >= 120, `${path} has only ${words(path)} words`);
});

test('Cloud migration guide covers the user workflow', () => {
	const guide = body('src/routes/docs/pro/cloud-migration/+page.md');
	for (const phrase of [
		'Move the Jira projects and issues first',
		'Jira administrator on both sites',
		'Matching project keys',
		'global issue types',
		'Map unmatched names manually',
		'Choose **Skip** only',
		'same issue keys',
		'reselect the correct Cloud board and filter',
		'**App** and **Privacy** settings'
	]) assert.ok(guide.includes(phrase), `Cloud migration guide is missing: ${phrase}`);
});

test('Data Center migration guide covers the user workflow', () => {
	const guide = body('src/routes/docs/pro/migration/+page.md');
	for (const phrase of [
		'does not migrate Jira data',
		'Jira administrator on both sites',
		'Migrate the Jira projects and issues first',
		'same project keys',
		'backbone issue keys',
		'global issue types',
		'same names',
		'Fix any warnings',
		'correct Cloud agile board and filter',
		'**App** and **Privacy** settings'
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
		'unlimited story maps',
		'user activity tracking',
		'health monitoring',
		'performance degradation warnings',
		'proactive maintenance recommendations'
	]) assert.ok(!all.toLowerCase().includes(phrase), phrase);
});

test('internal documentation links resolve to source routes', () => {
	for (const path of docs) {
		for (const match of body(path).matchAll(/(?<!!)\[[^\]]*\]\((\/docs[^)#?]*)/g)) {
			const route = match[1].replace(/\/$/, '');
			const base = route === '/docs' ? 'src/routes/docs/+page' : `src/routes${route}/+page`;
			assert.ok(existsSync(`${base}.md`) || existsSync(`${base}.svelte`), `${path} links to missing ${route}`);
		}
	}
});

test('source navigation uses canonical no-trailing-slash paths', () => {
	for (const path of walk('src').filter((path) => /\.(svelte|md)$/.test(path))) {
		const source = readFileSync(path, 'utf8');
		assert.doesNotMatch(source, /href="\/[^"]+\/"|\]\(\/[^)#?]+\/\)/, path);
	}
});
