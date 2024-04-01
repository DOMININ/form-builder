import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";
import { FormInput } from "@/pages/CreaturePage/components/Blocks/components/FormInput";
import {
  FormElementProperties,
  InputFormElementProperties,
  QuestionFormElementProperties,
  UserAnswers,
} from "@/stores/types.ts";
import { FormQuestion } from "@/pages/CreaturePage/components/Blocks/components/FormQuestion";

export const getComponentByType = (
  type: ElementsName,
  properties: FormElementProperties,
  handleChangePreviewForm: (response: UserAnswers["response"]) => void,
) => {
  switch (type) {
    case ElementsName.Input:
      return (
        <FormInput
          properties={properties as InputFormElementProperties}
          handleChangePreviewForm={handleChangePreviewForm}
        />
      );
    case ElementsName.Question:
      return (
        <FormQuestion
          properties={properties as QuestionFormElementProperties}
          handleChangePreviewForm={handleChangePreviewForm}
        />
      );
    default:
      return null;
  }
};
