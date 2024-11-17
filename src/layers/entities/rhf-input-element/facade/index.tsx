import { Field } from "~/app/api/get-schema/get-json-schema";
import {
  FormItem,
  FormLabel,
  FormMessage,
} from "~/layers/shared/components/ui/form";

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
