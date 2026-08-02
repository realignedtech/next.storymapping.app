# Story Maps for Jira - SvelteKit

Modern SvelteKit version of the Story Maps for Jira website with Svelte 5.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- **Svelte 5** with modern runes syntax
- **SvelteKit** for optimal performance and SEO
- **Tailwind CSS** for styling
- **Static Site Generation** for fast loading
- **Modern component architecture**

## Project Structure

```
src/
├── lib/
│   └── components/     # Reusable Svelte components
├── routes/
│   ├── +layout.svelte  # Root layout
│   ├── +page.svelte    # Homepage
│   └── upgrade/
│       └── +page.svelte # Upgrade page
└── app.css             # Global styles

static/                 # Static assets
```

## Upgrade from Next.js

This SvelteKit version provides:
- **Better performance** with smaller bundle sizes
- **Simpler state management** with Svelte 5 runes
- **Improved developer experience** with less boilerplate
- **Native reactivity** without additional libraries