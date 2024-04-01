import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";

export type InputFormElementProperties = {
  title: string;
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

export type UserAnswers = {
  id: string;
  response: {
    title: string;
    required: boolean;
    userAnswer: string;
  };
};
