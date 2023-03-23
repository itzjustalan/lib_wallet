import { browser } from "$app/environment";
import type { IDB } from "$lib/models/idb";
import type { IDBPDatabase } from "idb";
// import { PUBLIC_IDB_NAME, PUBLIC_IDB_VERS } from "$env/static/public";

class IndexedDB {
    async connect(): Promise<IDBPDatabase<IDB> | undefined> {
        if (!browser) return new Promise((r) => r(undefined));
        const { openDB } = await import("idb");
        // return openDB<IDB>(PUBLIC_IDB_NAME, Number(PUBLIC_IDB_VERS), {
        return openDB<IDB>('lib_wallet', Number('1'), {
            upgrade(db, oldVersion, newVersion, transaction, event) {
                db.createObjectStore("accounts", {
                    keyPath: "id",
                    autoIncrement: true,
                });
                db.createObjectStore("transactions", {
                    keyPath: "id",
                    autoIncrement: true,
                });
                db.createObjectStore("categories", {
                    keyPath: "id",
                    autoIncrement: true,
                });
            },
            blocked(currentVersion, blockedVersion, event) {
            },
            blocking(currentVersion, blockedVersion, event) {
            },
            terminated() {
            },
        });
        //     // }).then(v => this.accountDB = v);
    }
}
const db = new IndexedDB();
export const indexedDB = db.connect();
// export const indexedDB = new IndexedDB();
