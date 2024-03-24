import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";

export type ButtonFormElementProperties = {
  text?: string;
};

export type FormElementProperties = ButtonFormElementProperties | object;

export interface FormElement {
  id: string;
  type: ElementsName;
  properties: FormElementProperties;
}
