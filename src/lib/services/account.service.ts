import { log } from "$lib/logger";
import type { Account } from "$lib/models/account";
import { indexedDB, IndexedDBService } from "./idb.service";

class AccountService extends IndexedDBService {
    createNew = async (data: Account): Promise<Error | string> =>
        super._createNew("accounts", data);
    findOne = async (id: string): Promise<Error | Account> => super._findOne('accounts', id);
    updateOne = async (id: string, data: Account): Promise<Error | string> => super._updateOne('accounts', id, data);
    deleteOne = async (id: string): Promise<Error | void> => super._deleteOne('accounts', id);
    findAll = async (): Promise<Error | Account[]> => super._findAll("accounts");
}

export const accountService = new AccountService();
