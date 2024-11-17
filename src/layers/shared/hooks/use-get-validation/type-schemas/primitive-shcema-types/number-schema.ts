import { z } from "zod";
import { applySharedSchema } from "../shared-schema-types";
import { Field } from "~/layers/shared/types";

export const numberSchema = (field: Field) => {
  const schema = z.number();
  // extend as we want
  return applySharedSchema(schema, field);
};
