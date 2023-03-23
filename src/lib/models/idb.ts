import type { DBSchema } from "idb";
import type { Account } from "./account";
import type { Transaction } from "./transaction";

export interface IDB extends DBSchema {
    accounts: {
        key: string,
        value: Account,
    },
    transactions: {
        key: string,
        value: Transaction,
    },
    categories: {
        key: string,
        value: Transaction,
    },
}