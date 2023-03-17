import { log } from "./lib/logger";
// import { conectDB } from "$lib/server/db";
import type { Handle } from "@sveltejs/kit";

// conectDB();

export const handle: Handle = async ({ event, resolve }) => {
  const start = performance.now();
  const theme = event.cookies.get("app-theme") ?? "light";
  const response: Response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('%app.theme%', theme),
  });
  const end = performance.now();
  log.endpoint(response.status, event.request.method, event.url.pathname, end - start);
  return response;
};
