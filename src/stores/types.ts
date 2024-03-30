import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";

export type ButtonFormElementProperties = {
  text?: string;
};

export type InputFormElementProperties = {
  placeholder?: string;
};

type RadioValue = {
  id: string;
  value: string;
};

export type RadioFormElementProperties = {
  title: string;
  values: RadioValue[];
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
