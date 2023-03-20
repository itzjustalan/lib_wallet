import type { Account } from '$lib/models/account';
import { writable } from 'svelte/store';

export type pagenames = "home" | "dash" | "test" | "debug" | "accounts" | "new-account";

export interface App {
  page: pagenames;
  account?: Account;
}

function createStore() {
  const { subscribe, set, update } = writable<App>({
    page: 'home',
  });

  return {
    subscribe,
    navto: (page: pagenames) => update(v => ({ ...v, page })),
    setAccount: (account: Account) => update(v => ({ ...v, account })),
  };
}

export const app = createStore();