import { z } from "zod";
import { Field } from "../../types";
import { applySharedSchema } from "../shared-schema-types";

export const numberSchema = (field: Field) => {
  const schema = z.number();
  // extend as we want
  return applySharedSchema(schema, field);
};
