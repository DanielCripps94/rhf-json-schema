import { RHFInput } from "~/layers/entities/rhf-input-wrapper";
import { Field } from "~/layers/shared/types";

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
