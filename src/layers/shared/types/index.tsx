import { z } from "zod";

export interface JSONSchema {
  fields: Field[];
}

const ValidationSchema = z.object({
  maxLength: z.number().optional(),
  minLength: z.number().optional(),
  pattern: z.string().optional(),
});

const FieldSchema = z.object({
  key: z.string(),
  type: z.enum(["string", "number", "boolean"]), // we can extend this to include more types
  title: z.string(),
  required: z.boolean(),
  widget: z.string(),
  default: z.union([z.string(), z.number(), z.boolean(), z.null()]).optional(),
  validation: ValidationSchema.optional(),
  hidden: z.boolean(),
  options: z.record(z.any()).optional(),
  prefix: z.union([z.array(z.any()), z.null()]).optional(),
  choices: z.union([z.array(z.any()), z.null()]).optional(),
});

const PageSchema = z.object({
  page: z.string(),
  fields: z.array(z.string()),
});

const ActionSchema = z.object({
  name: z.string(),
  method: z.enum(["post", "get", "put", "delete"]),
  url: z.string(),
});

export const ResponseSchema = z.object({
  fields: z.array(FieldSchema),
  pages: z.array(PageSchema),
  actions: z.array(ActionSchema),
});

export type Field = z.infer<typeof FieldSchema>;
export type JsonSchema = z.infer<typeof ResponseSchema>;

export enum FieldType {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
}
