import { browser } from "$app/environment";
import type { Account } from "$lib/models/account";
import { writable } from "svelte/store";

export type pagenames =
  | "home"
  | "dash"
  | "test"
  | "debug"
  | "accounts"
  | "new-account"
  | "transactions"
  | "new-transaction";

export interface App {
  page: pagenames;
  account?: Account;
  history: pagenames[];
}

function createStore() {
  const stored = browser ? localStorage.getItem('app') : null;
  const { subscribe, set, update } = writable<App>(stored === null ? {
    page: "home",
    history: ["home"],
  } : JSON.parse(stored));

  return {
    subscribe,
    // navto: (page: pagenames) => update((v) => ({ ...v, page })),
    setAccount: (account: Account) => update((v) => ({ ...v, account })),
    navpop: () => update(v => ({ ...v, page: v.history.pop() ?? "home" })),
    navto: (page: pagenames) => update((v) => ({ ...v, page, history: [...v.history ?? [], page] })),
  };
}

export const app = createStore();
app.subscribe(v => browser && localStorage.setItem('app', JSON.stringify(v)));
