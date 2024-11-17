import { z } from "zod";
import { Field } from '../../types';

export const applySharedSchema = (baseSchema: z.ZodTypeAny, field: Field) => {
  let schema = baseSchema;

  if (!field.required) {
    schema = schema.optional();
  }

  if (field.default !== null && field.default !== undefined) {
    schema = schema.default(field.default);
  }

  return schema;
};
