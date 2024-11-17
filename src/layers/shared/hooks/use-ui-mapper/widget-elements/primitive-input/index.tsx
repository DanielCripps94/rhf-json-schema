import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Input } from "~/layers/shared/components/ui/input";

interface PrimitiveInputProps {
  field: ControllerRenderProps<FieldValues, string>;
  type: string;
}

export const PrimitiveInput = ({ field, type }: PrimitiveInputProps) => {
  return (
    <Input
      {...field}
      className="bg-gray-500 text-white px-2 py-1 rounded-md"
      type={type}
      autoComplete="new-password"
    />
  );
};
