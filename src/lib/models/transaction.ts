import { RecordSchema } from "cirql";
import { z } from "zod";

export type Transaction = z.infer<typeof transactionSchema>;
export const transactionSchema = RecordSchema.extend({
    id: z.string().max(255).min(1).optional(),
    description: z.string().max(255).optional(),
    createdAt: z.coerce.date(),
    amount: z.number(),
    accountID: z.string().max(255).min(1),
    categoryID: z.string().max(255).min(1).optional(),
});