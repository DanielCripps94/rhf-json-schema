import { z } from "zod";
import { Field } from "../../types";
import { applySharedSchema } from "../shared-schema-types";

export const stringSchema = (field: Field) => {
  let schema = z.string();

  if (field.required) {
    schema = schema.min(1, `${field.title} is required`);
  }
  if (field.validation?.maxLength) {
    schema = schema.max(
      field.validation.maxLength,
      `${field.title} must be at most ${field.validation.maxLength} characters`
    );
  }
  if (field.validation?.minLength) {
    schema = schema.min(
      field.validation.minLength,
      `${field.title} must be at least ${field.validation.minLength} characters`
    );
  }
  if (field.validation?.pattern) {
    schema = schema.regex(
      new RegExp(field.validation.pattern),
      `${field.title} does not match the required format`
    );
  }

  return applySharedSchema(schema, field);
};
