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

## Deployment

Deploys run from CI. **Push to `main`** and
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds a
`linux/arm64` image, pushes it to GHCR, then runs one forced-command SSH key on
the host to pull that exact commit's tag and restart the service. Pushes to
other branches and pull requests do **not** deploy; use the workflow's manual
`workflow_dispatch` trigger to run it by hand.

**Time to live: ~45s after the push** (build ~37s + deploy ~7s). The
`Verify live` job runs after that and does not affect liveness — it re-runs
`scripts/verify-production.mjs` against https://storymapping.app.

- Site key `storymapping` · service `storymapping-next.service` · image
  `ghcr.io/realignedtech/storymapping`
- Host: `core@windshift.sh` (arm64). The CI key is a forced command: it may only
  run `realigned-deploy`, which accepts `<site> <tag>` and nothing else — no
  shell, no port forwarding.
- Rollback: `ssh core@windshift.sh 'realigned-deploy storymapping rollback-<timestamp>'`.
  Every deploy logs the rollback tag it created.
- Host-side setup (forced-command script + keys) lives in the infra repo:
  `hetzner/scripts/website-ci-deploy-setup.sh`, idempotent.

The manual path still works and builds on the host instead of GHCR:

```bash
npm run deploy
```

The command builds the static site, rebuilds and restarts
`storymapping-next.service`, then verifies `https://storymapping.app`.
It does not modify Traefik configuration. Override `SSH_TARGET` or `SSH_KEY`
when deploying to another host or with another key.
