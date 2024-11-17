import {
  FormItem,
  FormLabel,
  FormMessage,
} from "~/layers/shared/components/ui/form";
import { Field } from "~/layers/shared/types";

interface ReactHookFormInputElementProps {
  fieldValue: Field;
  inputElement: React.ReactNode;
}

export default function ReactHookFormInputElement({
  fieldValue,
  inputElement,
}: ReactHookFormInputElementProps) {
  const { title } = fieldValue;
  return (
    <FormItem className="flex flex-col space-y-1.5 w-full">
      <FormLabel className="text-gray-300">{title}</FormLabel>
      {inputElement}
      <FormMessage />
    </FormItem>
  );
}
