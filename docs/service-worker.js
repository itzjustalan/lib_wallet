const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/_app/immutable/entry/app.88977b53.js",
  e + "/_app/immutable/chunks/0.43c97697.js",
  e + "/_app/immutable/chunks/1.b2e2facd.js",
  e + "/_app/immutable/chunks/2.5d44c2e6.js",
  e + "/_app/immutable/chunks/3.9f3f8523.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/index.2d225a5a.js",
  e + "/_app/immutable/chunks/index.48466a63.js",
  e + "/_app/immutable/chunks/paths.f35a532c.js",
  e + "/_app/immutable/chunks/singletons.4653e273.js",
  e + "/_app/immutable/chunks/utils.535257d2.js",
  e + "/_app/immutable/entry/start.9d78e28d.js",
  e + "/_app/immutable/entry/error.svelte.47954c8b.js",
  e + "/_app/immutable/assets/_layout.a2081535.css",
  e + "/_app/immutable/entry/_layout.svelte.cbeb1c46.js",
  e + "/_app/immutable/entry/_layout.ts.984db11e.js",
  e + "/_app/immutable/entry/_page.svelte.53601cae.js",
  e + "/_app/immutable/entry/test-page.svelte.e93c7c5e.js"
], o = [
  e + "/favicon.png",
  e + "/manifest.json",
  e + "/maskable_icon.png",
  e + "/maskable_icon_x128.png",
  e + "/maskable_icon_x170.png",
  e + "/maskable_icon_x48.png",
  e + "/maskable_icon_x72.png",
  e + "/maskable_icon_x96.png"
], r = "1679216036184", c = self, i = `cache-${r}`, u = [
  ...m,
  // the app itself
  ...o
  // everything in `static`
];
c.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(i)).addAll(u);
  }
  a.waitUntil(t());
});
c.addEventListener("activate", (a) => {
  async function t() {
    for (const n of await caches.keys())
      n !== i && await caches.delete(n);
  }
  a.waitUntil(t());
});
c.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const n = new URL(a.request.url), p = await caches.open(i);
    var l = p.match(a.request).then((s) => s === void 0 ? new Response() : s);
    if (u.includes(n.pathname))
      return l;
    try {
      const s = await fetch(a.request);
      return s.status === 200 && p.put(a.request, s.clone()), s;
    } catch {
      return l;
    }
  }
  a.respondWith(t());
});
