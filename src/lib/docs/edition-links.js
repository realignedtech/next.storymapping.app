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
  const core = proToCore.get(pathname)
    || (pathname.startsWith("/docs/pro") ? "/docs" : pathname);
  const pro = coreToPro.get(pathname)
    || (pathname.startsWith("/docs/pro") ? pathname : "/docs/pro");

  return { core, pro };
}
