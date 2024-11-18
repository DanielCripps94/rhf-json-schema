"use client";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "~/layers/shared/components/ui/form";
import { useZodSchema } from "~/layers/shared/hooks/use-get-validation";
import { Field, JsonSchema } from "~/layers/shared/types";
import { RJSFFormContent } from "../ui/form-content";

interface RHFJsonComponentProps {
  headerElement: React.ReactNode;
  fields: Field[];
  schema: JsonSchema;
  submitElement?: React.ReactNode;
}

export const RHFJsonComponent: React.FC<RHFJsonComponentProps> = ({
  fields = [],
  headerElement,
  schema,
  submitElement,
}) => {
  const { schema: zodValidation } = useZodSchema(schema);

  const formMethods = useForm({
    resolver: zodResolver(zodValidation),
  });

  const { register, setValue, handleSubmit, watch } = formMethods;
  console.log(watch(), "formValues");

  useEffect(() => {
    fields.forEach((field: Field) => {
      const { hidden, key, default: defaultValue } = field;
      if (hidden) {
        register(key);
        setValue(key, defaultValue ?? "");
      }
    });
  }, [fields, register, setValue]);

  return (
    <Form {...formMethods}>
      {headerElement}
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="space-y-4"
      >
        <div className="grid w-full items-center gap-4">
          <RJSFFormContent fields={fields} />
          {submitElement}
        </div>
      </form>
    </Form>
  );
};
