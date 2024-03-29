import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";

export type ButtonFormElementProperties = {
  text?: string;
};

export type InputFormElementProperties = {
  placeholder?: string;
};

export type FormElementProperties =
  | ButtonFormElementProperties
  | InputFormElementProperties
  | object;

export interface FormElement {
  id: string;
  type: ElementsName;
  properties: FormElementProperties;
}
