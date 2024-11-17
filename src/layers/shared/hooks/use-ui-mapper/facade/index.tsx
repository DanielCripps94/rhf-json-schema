import { ControllerRenderProps, FieldValues } from "react-hook-form";
import PhoneWidget from "../widget-elements/phone-input";
import { Field } from "~/app/api/get-schema/get-json-schema";
import { PrimitiveInput } from "../widget-elements/primitive-input";

export enum WidgetType {
  PHONE = "phone",
  TEXT = "text",
  PASSWORD = "password",
  C_PASSWORD = "confirm_password",
}

interface FieldProps {
  field: ControllerRenderProps<FieldValues, string>;
  fieldValue: Field;
}

export const useUIMapper = ({ field, fieldValue }: FieldProps) => {
  const uiWidgetMapper: Record<WidgetType, React.ReactNode> = {
    [WidgetType.PHONE]: <PhoneWidget {...field} />,
    [WidgetType.TEXT]: <PrimitiveInput field={field} type="text" />,
    [WidgetType.PASSWORD]: <PrimitiveInput field={field} type="password" />,
    [WidgetType.C_PASSWORD]: <PrimitiveInput field={field} type="password" />,
  }; // extend as much as we want.

  const uiElement = uiWidgetMapper[fieldValue.widget as WidgetType];

  return { uiElement };
};
