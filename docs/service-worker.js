const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  e + "/_app/immutable/entry/app.9db5dc66.js",
  e + "/_app/immutable/chunks/0.34be0ae1.js",
  e + "/_app/immutable/chunks/1.b17779d6.js",
  e + "/_app/immutable/chunks/2.450edc31.js",
  e + "/_app/immutable/chunks/3.28b44c45.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/index.2d225a5a.js",
  e + "/_app/immutable/chunks/index.48466a63.js",
  e + "/_app/immutable/chunks/paths.5575cdad.js",
  e + "/_app/immutable/chunks/singletons.e32c2c51.js",
  e + "/_app/immutable/entry/start.ed278e79.js",
  e + "/_app/immutable/entry/error.svelte.c60ceb6d.js",
  e + "/_app/immutable/assets/_layout.a2081535.css",
  e + "/_app/immutable/entry/_layout.svelte.90c08921.js",
  e + "/_app/immutable/entry/_layout.ts.984db11e.js",
  e + "/_app/immutable/entry/_page.svelte.1d670030.js",
  e + "/_app/immutable/entry/test-page.svelte.d96b2ac5.js"
], o = [
  e + "/favicon.png",
  e + "/manifest.json",
  e + "/maskable_icon.png",
  e + "/maskable_icon_x128.png",
  e + "/maskable_icon_x170.png",
  e + "/maskable_icon_x48.png",
  e + "/maskable_icon_x72.png",
  e + "/maskable_icon_x96.png"
], r = "1679230263573", c = self, i = `cache-${r}`, u = [
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
