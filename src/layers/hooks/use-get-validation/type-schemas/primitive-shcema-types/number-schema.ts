import { z } from "zod";
import { Field } from "../../types";
import { applySharedSchema } from "../shared-schema-types";

export const numberSchema = (field: Field) => {
  let schema = z.number();

  return applySharedSchema(schema, field);
};
