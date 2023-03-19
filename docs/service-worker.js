const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.a1303f8c.js",
  a + "/_app/immutable/chunks/0.34be0ae1.js",
  a + "/_app/immutable/chunks/1.b536b567.js",
  a + "/_app/immutable/chunks/2.23cb67a6.js",
  a + "/_app/immutable/chunks/3.989f932d.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/index.2d225a5a.js",
  a + "/_app/immutable/chunks/index.48466a63.js",
  a + "/_app/immutable/chunks/paths.c11ea3fc.js",
  a + "/_app/immutable/chunks/singletons.04ebeb53.js",
  a + "/_app/immutable/entry/start.26f89197.js",
  a + "/_app/immutable/entry/error.svelte.aabe3095.js",
  a + "/_app/immutable/assets/_layout.a2081535.css",
  a + "/_app/immutable/entry/_layout.svelte.90c08921.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/entry/_page.svelte.69080d39.js",
  a + "/_app/immutable/entry/test-page.svelte.8919e45a.js"
], o = [
  a + "/favicon.png",
  a + "/manifest.json",
  a + "/maskable_icon.png",
  a + "/maskable_icon_x128.png",
  a + "/maskable_icon_x170.png",
  a + "/maskable_icon_x48.png",
  a + "/maskable_icon_x72.png",
  a + "/maskable_icon_x96.png"
], r = "1679213180430", c = self, i = `cache-${r}`, u = [
  ...m,
  // the app itself
  ...o
  // everything in `static`
];
c.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(i)).addAll(u);
  }
  e.waitUntil(t());
});
c.addEventListener("activate", (e) => {
  async function t() {
    for (const n of await caches.keys())
      n !== i && await caches.delete(n);
  }
  e.waitUntil(t());
});
c.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const n = new URL(e.request.url), p = await caches.open(i);
    var l = p.match(e.request).then((s) => s === void 0 ? new Response() : s);
    if (u.includes(n.pathname))
      return l;
    try {
      const s = await fetch(e.request);
      return s.status === 200 && p.put(e.request, s.clone()), s;
    } catch {
      return l;
    }
  }
  e.respondWith(t());
});
