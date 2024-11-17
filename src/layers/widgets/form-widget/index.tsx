"use client";
import { Card } from "~/components/ui/card";
import { LoginFormHeader } from "~/layers/features/login-form-header/facade";
import { useGetJsonSchemaQuery } from "~/layers/hooks/use-get-json-schema/facade";
import { RHFJsonComponent } from "~/layers/shared/components/json-schema-form/facade";

export const LoginForm: React.FC = () => {
  const { data } = useGetJsonSchemaQuery();
  const { fields } = data;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute opacity-10"></div>
      <Card className="w-[400px] bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-2xl px-6 pb-2">
        <RHFJsonComponent
          fields={fields}
          schema={data}
          headerElement={
            <LoginFormHeader text={"React Hook Form - JSON Schema"} />
          }
        />
      </Card>
    </div>
  );
};
