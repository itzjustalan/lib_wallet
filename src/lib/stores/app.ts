import type { Account } from '$lib/models/account';
import { writable } from 'svelte/store';

export interface App {
    account?: Account;
}

function createStore() {
  const { subscribe, set, update } = writable<App>({});

  return {
    subscribe,
    setAccount: (account: Account) => update(v => {
        v.account = account;
        return v;
    }),
    // set: (theme: Theme) => {
    //   updateDocumentTheme(theme);
    //   set(theme);
    // },
    // toggle: () =>
    //   update((v) =>
    //     updateDocumentTheme(v === Theme.Dark ? Theme.Light : Theme.Dark)
    //   ),
  };
}

export const app = createStore();