import { z } from "zod";
import { applySharedSchema } from "../shared-schema-types";
import { Field } from "~/layers/shared/types";

export const booleanSchema = (field: Field) => {
  const schema = z.boolean();
  // extend as we want
  return applySharedSchema(schema, field);
};
