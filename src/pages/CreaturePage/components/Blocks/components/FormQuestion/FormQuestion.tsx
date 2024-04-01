import { Label } from "@/components/ui/label";
import {
  QuestionFormElementProperties,
  QuestionFormTypes,
} from "@/stores/types.ts";
import { RadioItems } from "@/pages/CreaturePage/components/Blocks/components/FormQuestion/components/RadioItems.tsx";
import { SelectItems } from "@/pages/CreaturePage/components/Blocks/components/FormQuestion/components/SelectItems.tsx";
import { CheckboxItems } from "@/pages/CreaturePage/components/Blocks/components/FormQuestion/components/CheckboxItems.tsx";

interface FormElementWithValue extends QuestionFormElementProperties {
  userAnswer: string;
}

interface Props {
  properties: QuestionFormElementProperties;
  handleChangePreviewForm: (response: FormElementWithValue) => void;
}

const getQuestionType = (
  type: QuestionFormTypes,
  values: QuestionFormElementProperties["values"],
  handleInputChange: (value: string) => void,
) => {
  switch (type) {
    case QuestionFormTypes.Radio:
      return (
        <RadioItems values={values} handleInputChange={handleInputChange} />
      );
    case QuestionFormTypes.Checkbox:
      return (
        <CheckboxItems values={values} handleInputChange={handleInputChange} />
      );
    case QuestionFormTypes.Select:
      return (
        <SelectItems values={values} handleInputChange={handleInputChange} />
      );
    default:
      return null;
  }
};

export const FormQuestion = ({
  properties,
  handleChangePreviewForm,
}: Props) => {
  const { title, type, values, required } = properties;

  const handleInputChange = (value: string) => {
    const response = {
      ...properties,
      userAnswer: value,
    };
    handleChangePreviewForm(response);
  };

  return (
    <>
      <Label>
        {title} {required && <span style={{ color: "red" }}>*</span>}
      </Label>

      {getQuestionType(type, values, handleInputChange)}
    </>
  );
};
