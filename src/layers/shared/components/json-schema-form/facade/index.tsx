"use client";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/layers/shared/components/ui/form";
import { Input } from "~/layers/shared/components/ui/input";
import { useZodSchema } from "~/layers/shared/hooks/use-get-validation";
import { Field, JsonSchema } from "~/app/api/get-schema/get-json-schema";

interface RHFJsonComponentProps {
  headerElement: React.ReactNode;
  fields: Field[];
  schema: JsonSchema;
}

export const RHFJsonComponent: React.FC<RHFJsonComponentProps> = ({
  headerElement,
  fields,
  schema,
}) => {
  const { schema: zodValidation } = useZodSchema(schema);
  const formMethods = useForm({
    resolver: zodResolver(zodValidation),
  });

  const { register, setValue } = formMethods;

  useEffect(() => {
    if (fields) {
      fields.forEach((field: Field) => {
        if (field.hidden) {
          register(field.key);
          setValue(field.key, field.default ?? "");
        }
      });
    }
  }, [fields, register, setValue]);

  return (
    <Form {...formMethods}>
      {headerElement}
      <form
        onSubmit={formMethods.handleSubmit((data) => console.log(data))}
        className="space-y-4"
      >
        <div className="grid w-full items-center gap-4">
          {fields.map((fieldValue: Field) => {
            if (fieldValue.hidden) return null;
            return (
              <FormField
                name={fieldValue.key}
                key={fieldValue.key}
                control={formMethods.control}
                defaultValue={fieldValue.default || ""}
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col space-y-1.5 w-full">
                      <FormLabel className="text-gray-300">
                        {fieldValue.title}
                      </FormLabel>
                      <Input
                        className="bg-gray-500 text-white px-2 py-1 rounded-md"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            );
          })}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </Form>
  );
};
