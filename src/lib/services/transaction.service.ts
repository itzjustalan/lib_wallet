import { log } from "$lib/logger";
import type { Transaction } from "$lib/models/transaction";
import { indexedDB, IndexedDBService } from "./idb.service";

class TransactionService extends IndexedDBService {
    createNew = async (data: Transaction): Promise<Error | string> =>
        super._createNew("transactions", data);
    findOne = async (id: string): Promise<Error | Transaction> => super._findOne('transactions', id);
    updateOne = async (id: string, data: Transaction): Promise<Error | string> => super._updateOne('transactions', id, data);
    deleteOne = async (id: string): Promise<Error | void> => super._deleteOne('transactions', id);
    findAll = async (): Promise<Error | Transaction[]> =>
        super._findAll("transactions");

    // createNew = async (
    //     amount: number,
    //     description: string,
    //     accountID: string,
    //     categoryID?: string,
    // ): Promise<string | Error> => {
    //     try {
    //         return await (await indexedDB)?.add("transactions", {
    //             amount,
    //             description,
    //             accountID,
    //             categoryID,
    //             createdAt: new Date(),
    //         }) ?? this.nodb;
    //     } catch (e) {
    //         log.error(e);
    //         return new Error("could not create new transaction");
    //     }
    // };
}

export const transactionService = new TransactionService();
