import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";
import { FormInput } from "@/pages/CreaturePage/components/Blocks/components/FormInput";
import {
  FormElementProperties,
  InputFormElementProperties,
  QuestionFormElementProperties,
} from "@/stores/types.ts";
import { FormQuestion } from "@/pages/CreaturePage/components/Blocks/components/FormQuestion";

export const getComponentByType = (
  type: ElementsName,
  properties: FormElementProperties,
) => {
  switch (type) {
    case ElementsName.Input:
      return (
        <FormInput properties={properties as InputFormElementProperties} />
      );
    case ElementsName.Question:
      return (
        <FormQuestion
          properties={properties as QuestionFormElementProperties}
        />
      );
    default:
      return null;
  }
};
