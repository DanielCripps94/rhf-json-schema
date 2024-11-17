import { useFormContext } from "react-hook-form";
import { FormField } from "~/layers/shared/components/ui/form";
import { uiMapper } from "~/layers/shared/hooks/use-ui-mapper/facade";
import ReactHookFormInputElement from "../rhf-input-element/facade";
import { Field } from "~/layers/shared/types";

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
        const { uiElement } = uiMapper({ field, fieldValue });
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
