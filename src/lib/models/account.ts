import { RecordSchema } from "cirql";
import type { DBSchema } from "idb";
import { z } from "zod";

// export type Account = z.infer<typeof AccountSchema> & DBSchema;
export type Account = z.infer<typeof AccountSchema>;
export const AccountSchema = RecordSchema.extend({
    id: z.string().max(255).min(1).optional(),
    name: z.string().max(255).min(1),
});
