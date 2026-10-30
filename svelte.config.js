import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

function imageDimensions(path) {
	const buffer = readFileSync(path);
	if (buffer.subarray(1, 4).toString() === 'PNG') {
		return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
	}
	if (buffer.subarray(0, 4).toString() === 'RIFF' && buffer.subarray(8, 12).toString() === 'WEBP') {
		const chunk = buffer.subarray(12, 16).toString();
		if (chunk === 'VP8X') return { width: 1 + buffer.readUIntLE(24, 3), height: 1 + buffer.readUIntLE(27, 3) };
		if (chunk === 'VP8 ') return { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff };
		if (chunk === 'VP8L') {
			return {
				width: 1 + buffer[21] + ((buffer[22] & 0x3f) << 8),
				height: 1 + (buffer[22] >> 6) + (buffer[23] << 2) + ((buffer[24] & 0x0f) << 10)
			};
		}
	}
	if (path.endsWith('.svg')) {
		const svg = buffer.toString('utf8').match(/<svg\b([^>]*)>/)?.[1] || '';
		const width = Number.parseFloat(svg.match(/\bwidth=["']([\d.]+)/)?.[1]);
		const height = Number.parseFloat(svg.match(/\bheight=["']([\d.]+)/)?.[1]);
		if (width && height) return { width, height };
		const viewBox = svg.match(/\bviewBox=["']([^"']+)["']/)?.[1]?.trim().split(/\s+/).map(Number);
		if (viewBox?.length === 4) return { width: viewBox[2], height: viewBox[3] };
	}
	return null;
}

function rehypeImageAttributes() {
	return (tree) => {
		let seen = 0;
		function visit(node) {
			if (node.type === 'element' && node.tagName === 'img' && typeof node.properties?.src === 'string') {
				// The first content image is usually near the top of an article, so
				// load it eagerly; lazy-load everything after it.
				if (seen === 0) {
					node.properties.loading = 'eager';
					node.properties.fetchpriority = 'high';
				} else {
					node.properties.loading = 'lazy';
				}
				node.properties.decoding = 'async';
				seen++;
				if (node.properties.src.startsWith('/')) {
					const path = resolve('static', node.properties.src.slice(1));
					if (existsSync(path)) Object.assign(node.properties, imageDimensions(path));
				}
			}
			for (const child of node.children || []) visit(child);
		}
		visit(tree);
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			rehypePlugins: [
				rehypeImageAttributes,
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: 'wrap' }]
			]
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		// Inline all CSS into the prerendered HTML. The stylesheet is ~54 KB
		// (about 9 KB gzipped) and shared by every page; inlining removes the
		// render-blocking stylesheet request, and repeat visits revalidate with
		// a 304 instead of re-transferring it. Raise this if the CSS grows.
		inlineStyleThreshold: 100000,
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
