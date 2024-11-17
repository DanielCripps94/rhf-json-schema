import { z } from "zod";
import { useMemo } from "react";
import {
  stringSchema,
  numberSchema,
  booleanSchema,
} from "../type-schemas/primitive-shcema-types";
import { Field, FieldType } from "../types";
import { JsonSchema } from "~/app/api/get-schema/get-json-schema";

const createZodSchemaFromJSON = (jsonSchema: JsonSchema) => {
  const fieldSchemas: Record<string, z.ZodTypeAny> = {};

  const validationMapping: Record<string, (field: Field) => z.ZodTypeAny> = {
    [FieldType.STRING]: stringSchema,
    [FieldType.NUMBER]: numberSchema,
    [FieldType.BOOLEAN]: booleanSchema,
  }; // extend as much as we want

  jsonSchema.fields.forEach((field) => {
    const schemaBuilder = validationMapping[field.type];

    if (!schemaBuilder) {
      throw new Error(`Unsupported field type: ${field.type}`);
    }

    fieldSchemas[field.key] = schemaBuilder(field);
  });

  return z.object(fieldSchemas);
};

export const useZodSchema = (jsonSchema: JsonSchema) => {
  const schema = useMemo(
    () => createZodSchemaFromJSON(jsonSchema),
    [jsonSchema]
  );

  return { schema };
};
