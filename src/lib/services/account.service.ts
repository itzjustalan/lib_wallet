import { log } from "$lib/logger"
import type { Account } from "$lib/models/account";
import { indexedDB } from "./idb.service"

class AccountService {
    nodb = new Error('could not connect to indexed db');
    createNew = async (name: string): Promise<string | Error> => {
        try {
            return await (await indexedDB)?.add('accounts', { name }) ?? this.nodb;
        } catch (e) {
            log.error(e);
            return new Error('could not create new account');
        }
    }

    findAll = async (): Promise<Error | Account[]> => {
        try {
            return await (await indexedDB)?.getAll('accounts') ?? this.nodb;
        } catch (e) {
            log.error(e);
            return new Error('could not get all accounts');
        }
    }
}

export const accountService = new AccountService()