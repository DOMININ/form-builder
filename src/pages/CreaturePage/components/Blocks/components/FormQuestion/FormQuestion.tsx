import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import {
  QuestionFormElementProperties,
  QuestionFormTypes,
} from "@/stores/types.ts";
import { RadioItems } from "@/pages/CreaturePage/components/Blocks/components/FormQuestion/components/RadioItems.tsx";
import { SelectItems } from "@/pages/CreaturePage/components/Blocks/components/FormQuestion/components/SelectItems.tsx";
import { CheckboxItems } from "@/pages/CreaturePage/components/Blocks/components/FormQuestion/components/CheckboxItems.tsx";

interface Props {
  properties: QuestionFormElementProperties;
}

const getQuestionType = (
  type: QuestionFormTypes,
  values: QuestionFormElementProperties["values"],
) => {
  switch (type) {
    case QuestionFormTypes.Radio:
      return <RadioItems values={values} />;
    case QuestionFormTypes.Checkbox:
      return <CheckboxItems values={values} />;
    case QuestionFormTypes.Select:
      return <SelectItems values={values} />;
    default:
      return null;
  }
};

export const FormQuestion = ({ properties }: Props) => {
  const { title, type, values } = properties;

  return (
    <>
      <Label>{title}</Label>

      <RadioGroup>{getQuestionType(type, values)}</RadioGroup>
    </>
  );
};
