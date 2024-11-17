import { useFormContext } from "react-hook-form";
import { Field } from "~/app/api/get-schema/get-json-schema";
import { FormField } from "~/layers/shared/components/ui/form";
import { useUIMapper } from "~/layers/shared/hooks/use-ui-mapper/facade";
import ReactHookFormInputElement from "../rhf-input-element/facade";

interface RHFInputProps {
  fieldValue: Field;
}

export const RHFInput: React.FC<RHFInputProps> = ({ fieldValue }) => {
  const { control } = useFormContext();
  const { key, default: defaultValue } = fieldValue;
  return (
    <FormField
      name={key}
      key={key}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field }) => {
        const { uiElement } = useUIMapper({ field, fieldValue });
        return (
          <ReactHookFormInputElement
            fieldValue={fieldValue}
            inputElement={uiElement}
          />
        );
      }}
    />
  );
};
