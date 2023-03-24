import { browser } from "$app/environment";
import { log } from "$lib/logger";
import type { IDB } from "$lib/models/idb";
import type { IDBPDatabase, StoreKey, StoreNames, StoreValue } from "idb";
// import { PUBLIC_IDB_NAME, PUBLIC_IDB_VERS } from "$env/static/public";

class IndexedDB {
    async connect(): Promise<IDBPDatabase<IDB> | undefined> {
        if (!browser) return new Promise((r) => r(undefined));
        const { openDB } = await import("idb");
        // return openDB<IDB>(PUBLIC_IDB_NAME, Number(PUBLIC_IDB_VERS), {
        return openDB<IDB>("lib_wallet", Number("1"), {
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

export class IndexedDBService {
    nodb = new Error("could not connect to indexed db");

    async _createNew<StoreName extends StoreNames<IDB>>(
        storeName: StoreName,
        data: StoreValue<IDB, StoreName>,
    ): Promise<Error | StoreKey<IDB, StoreName>> {
        try {
            return await (await indexedDB)?.add(storeName, data) ?? this.nodb;
        } catch (e) {
            log.error(e);
            return new Error("could not create " + storeName);
        }
    }
    async _findOne<StoreName extends StoreNames<IDB>>(
        storeName: StoreName,
        id: string,
    ): Promise<Error | StoreValue<IDB, StoreName>> {
        try {
            return await (await indexedDB)?.get(storeName, id) ?? this.nodb;
        } catch (e) {
            log.error(e);
            return new Error("could not find " + id);
        }
    }
    async _updateOne<StoreName extends StoreNames<IDB>>(
        storeName: StoreName,
        id: string,
        data: StoreValue<IDB, StoreName>,
    ): Promise<Error | StoreKey<IDB, StoreName>> {
        try {
            return await (await indexedDB)?.put(storeName, data, id) ?? this.nodb;
        } catch (e) {
            log.error(e);
            return new Error("could not update " + id);
        }
    }
    async _deleteOne<StoreName extends StoreNames<IDB>>(
        storeName: StoreName,
        id: string,
    ): Promise<Error | void> {
        try {
            return await (await indexedDB)?.delete(storeName, id) ?? this.nodb;
        } catch (e) {
            log.error(e);
            return new Error("could not delete " + id);
        }
    }
    async _findAll<StoreName extends StoreNames<IDB>>(
        storeName: StoreName,
    ): Promise<Error | StoreValue<IDB, StoreName>[]> {
        try {
            return await (await indexedDB)?.getAll(storeName) ?? this.nodb;
        } catch (e) {
            log.error(e);
            return new Error("could not find all " + storeName);
        }
    }
}
