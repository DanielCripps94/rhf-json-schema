import { z } from "zod";
import { Field } from "../../types";
import { applySharedSchema } from "../shared-schema-types";

export const booleanSchema = (field: Field) => {
  const schema = z.boolean();
  // extend as we want
  return applySharedSchema(schema, field);
};
