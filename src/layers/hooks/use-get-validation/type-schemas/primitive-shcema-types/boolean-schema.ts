import { z } from "zod";
import { Field } from "../../types";
import { applySharedSchema } from "../shared-schema-types";

export const booleanSchema = (field: Field) => {
  let schema = z.boolean();

  return applySharedSchema(schema, field);
};
