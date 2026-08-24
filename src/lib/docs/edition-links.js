const coreToPro = new Map([
  ["/docs", "/docs/pro"],
  ["/docs/getting-started", "/docs/pro/setup"],
  ["/docs/tutorials", "/docs/pro/tutorials"],
]);

const proToCore = new Map(
  [...coreToPro].map(([core, pro]) => [pro, core])
);

function isSharedPage(pathname) {
  return pathname === "/docs/support" || pathname.startsWith("/docs/support/");
}

export function docsEditionLinks(pathname) {
  if (isSharedPage(pathname)) {
    return {
      core: pathname,
      pro: `${pathname}?edition=pro`,
    };
  }

  const core = proToCore.get(pathname)
    || (pathname.startsWith("/docs/pro") || pathname === "/docs/whatsnew" ? "/docs" : pathname);
  const pro = coreToPro.get(pathname)
    || (pathname.startsWith("/docs/pro") || pathname === "/docs/whatsnew" ? pathname : "/docs/pro");

  return { core, pro };
}
