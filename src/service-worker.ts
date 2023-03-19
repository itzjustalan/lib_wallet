/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
import { build, files, version } from "$service-worker";

const sw = self as unknown as ServiceWorkerGlobalScope;
const CACHE = `cache-${version}`;
const ASSETS = [
    ...build, // the app itself
    ...files, // everything in `static`
];

sw.addEventListener("install", (event) => {
    // Create a new cache and add all files to it
    async function addFilesToCache() {
        const cache = await caches.open(CACHE);
        await cache.addAll(ASSETS);
        // ASSETS.forEach((file) =>
        //     cache.add(file).catch((_) =>
        //         console.error(`can't load ${file} to cache`))
        // );
    }

    event.waitUntil(addFilesToCache());
});

sw.addEventListener("activate", (event) => {
    // Remove previous cached data from disk
    async function deleteOldCaches() {
        for (const key of await caches.keys()) {
            if (key !== CACHE) await caches.delete(key);
        }
    }

    event.waitUntil(deleteOldCaches());
});

sw.addEventListener("fetch", (event) => {
    // ignore POST requests etc
    if (event.request.method !== "GET") return;

    async function responder(): Promise<Response> {
        const url = new URL(event.request.url);
        const cache = await caches.open(CACHE);
        var res = cache.match(event.request)
            .then((v) => v === undefined ? new Response() : v);

        // `build`/`files` can always be served from the cache
        if (ASSETS.includes(url.pathname)) return res;

        // for everything else, try the network first, but
        // fall back to the cache if we're offline
        try {
            const response = await fetch(event.request);
            if (response.status === 200) {
                cache.put(event.request, response.clone());
            }
            return response;
        } catch {
            return res;
        }
    }

    event.respondWith(responder());
});
