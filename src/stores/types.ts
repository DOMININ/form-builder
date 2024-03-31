import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";

export type InputFormElementProperties = {
  placeholder: string;
  required: boolean;
};

type RadioValue = {
  id: string;
  value: string;
};

export enum QuestionFormTypes {
  Radio = "radio",
  Checkbox = "checkbox",
  Select = "select",
}

export type QuestionFormElementProperties = {
  title: string;
  values: RadioValue[];
  type: QuestionFormTypes;
  required: boolean;
};

export type FormElementProperties =
  | InputFormElementProperties
  | QuestionFormElementProperties;

export interface FormElement {
  id: string;
  type: ElementsName;
  properties: FormElementProperties;
}
