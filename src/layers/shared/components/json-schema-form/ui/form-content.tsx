import { Field } from "~/app/api/get-schema/get-json-schema";
import { RHFInput } from "~/layers/entities/rhf-input-wrapper";

interface RJSFFormContentProps {
  fields: Field[];
}

export const RJSFFormContent: React.FC<RJSFFormContentProps> = ({
  fields,
}: RJSFFormContentProps) => {
  return (
    <>
      {fields.map((fieldValue: Field) => {
        if (fieldValue.hidden) return null;
        return <RHFInput key={fieldValue.key} fieldValue={fieldValue} />;
      })}
    </>
  );
};
