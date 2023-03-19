const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.747480e4.js",
  a + "/_app/immutable/chunks/0.34be0ae1.js",
  a + "/_app/immutable/chunks/1.b0c711c2.js",
  a + "/_app/immutable/chunks/2.690079a6.js",
  a + "/_app/immutable/chunks/3.426e164b.js",
  a + "/_app/immutable/chunks/_layout.da46b06b.js",
  a + "/_app/immutable/chunks/index.2d225a5a.js",
  a + "/_app/immutable/chunks/index.48466a63.js",
  a + "/_app/immutable/chunks/paths.91fdf31f.js",
  a + "/_app/immutable/chunks/singletons.c058017f.js",
  a + "/_app/immutable/entry/start.c2de5155.js",
  a + "/_app/immutable/entry/error.svelte.c4d60af9.js",
  a + "/_app/immutable/assets/_layout.a2081535.css",
  a + "/_app/immutable/entry/_layout.svelte.90c08921.js",
  a + "/_app/immutable/entry/_layout.ts.984db11e.js",
  a + "/_app/immutable/entry/_page.svelte.ed9016d7.js",
  a + "/_app/immutable/entry/test-page.svelte.00aabc8d.js"
], o = [
  a + "/favicon.png",
  a + "/manifest.json",
  a + "/maskable_icon.png",
  a + "/maskable_icon_x128.png",
  a + "/maskable_icon_x170.png",
  a + "/maskable_icon_x48.png",
  a + "/maskable_icon_x72.png",
  a + "/maskable_icon_x96.png"
], r = "1679214731375", c = self, i = `cache-${r}`, u = [
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
