import { canonicalPathFor, sourceRouteFor } from '../seo/canonical.js';

const coreToPro = new Map([
  ["/docs", "/docs/pro"],
  ["/docs/getting-started", "/docs/pro/setup"],
  ["/docs/tutorials", "/docs/pro/tutorials"],
  ["/docs/support", "/docs/pro/support"],
  ["/docs/support/troubleshooting", "/docs/pro/support/troubleshooting"],
  ["/docs/support/privacy", "/docs/pro/support/privacy"],
  ["/docs/support/eula", "/docs/pro/support/eula"],
  ["/docs/whatsnew", "/docs/pro/whatsnew"],
]);

const proToCore = new Map(
  [...coreToPro].map(([core, pro]) => [pro, core])
);

export function docsEditionLinks(pathname) {
	const sourceRoute = sourceRouteFor(pathname);
	const core = proToCore.get(sourceRoute)
		|| (sourceRoute.startsWith("/docs/pro") ? "/docs" : sourceRoute);
	const pro = coreToPro.get(sourceRoute)
		|| (sourceRoute.startsWith("/docs/pro") ? sourceRoute : "/docs/pro");

	return { core: canonicalPathFor(core), pro: canonicalPathFor(pro) };
}
