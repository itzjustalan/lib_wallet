import { RecordSchema } from "cirql";
import { z } from "zod";

export enum Cashflow {
    income = "income",
    expense = "expense",
}
export type Category = z.infer<typeof categorySchema>;
export const categorySchema = RecordSchema.extend({
    id: z.string().max(255).min(1).optional(),
    cashflow: z.nativeEnum(Cashflow),
    createdAt: z.coerce.date(),
});
