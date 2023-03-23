import { log } from "$lib/logger";
import type { Transaction } from "$lib/models/transaction";
import { indexedDB } from "./idb.service";

class TransactionService {
    nodb = new Error("could not connect to indexed db");
    createNew = async (
        amount: number,
        description: string,
        accountID: string,
        categoryID?: string,
    ): Promise<string | Error> => {
        try {
            return await (await indexedDB)?.add("transactions", {
                amount,
                description,
                accountID,
                categoryID,
                createdAt: new Date(),
            }) ?? this.nodb;
        } catch (e) {
            log.error(e);
            return new Error("could not create new transaction");
        }
    };

    findAll = async (): Promise<Error | Transaction[]> => {
        try {
            return await (await indexedDB)?.getAll("transactions") ?? this.nodb;
        } catch (e) {
            log.error(e);
            return new Error("could not get all transaction");
        }
    };
}

export const transactionService = new TransactionService();
