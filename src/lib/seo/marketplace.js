// Atlassian Marketplace listings for the two editions, keyed by listing id.
// Used to keep links and Umami labels edition-aware instead of hard-coded.
export const MARKETPLACE_LISTINGS = {
	1224357: { product: 'story_maps', name: 'Story Maps for Jira' },
	1224417: { product: 'advanced_story_maps', name: 'Advanced Story Maps for Jira' }
};

export function marketplaceListingId(url = '') {
	return url.match(/marketplace\.atlassian\.com\/(?:apps\/)?(\d+)/)?.[1] || '';
}

export function marketplaceProduct(url = '') {
	return MARKETPLACE_LISTINGS[marketplaceListingId(url)]?.product || 'story_maps';
}
