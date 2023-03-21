import { RecordSchema } from "cirql";
import { z } from "zod";
import { AccountSchema } from "./account";

export type Transaction = z.infer<typeof TransactionSchema>;
export const TransactionSchema = RecordSchema.extend({
    id: z.string().max(255).min(1).optional(),
    description: z.string().max(255).optional(),
    createdAt: z.coerce.date(),
    amount: z.number(),
    accountID: z.string().max(255).min(1),
});