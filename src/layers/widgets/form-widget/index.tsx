"use client";
import { Card } from "~/layers/shared/components/ui/card";
import { LoginFormHeader } from "~/layers/features/login-form-header/facade";
import { useGetJsonSchemaQuery } from "~/layers/shared/hooks/use-get-json-schema/facade";
import { RHFJsonComponent } from "~/layers/shared/components/json-schema-form/facade";
import { LoginFormSubmitElement } from "~/layers/features/login-form-submit/facade";

export const LoginForm: React.FC = () => {
  const { data: schema } = useGetJsonSchemaQuery();
  const { fields } = schema;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute opacity-10"></div>
      <Card className="w-[400px] bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-2xl px-6 pb-2">
        <RHFJsonComponent
          fields={fields}
          schema={schema}
          headerElement={
            <LoginFormHeader text={"React Hook Form - JSON Schema"} />
          }
          submitElement={<LoginFormSubmitElement text={"Submit"} />}
        />
      </Card>
    </div>
  );
};
