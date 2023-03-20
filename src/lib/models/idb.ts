import type { DBSchema } from "idb";
import type { Account } from "./account";

export interface IDB extends DBSchema {
    accounts: {
        key: string,
        value: Account,
    },
}