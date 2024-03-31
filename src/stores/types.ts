import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";

export type InputFormElementProperties = {
  placeholder: string;
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
};

export type FormElementProperties = InputFormElementProperties | object;

export interface FormElement {
  id: string;
  type: ElementsName;
  properties: FormElementProperties;
}
