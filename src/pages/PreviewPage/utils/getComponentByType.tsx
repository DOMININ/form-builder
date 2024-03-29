import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";
import { FormButton } from "@/pages/CreaturePage/components/Blocks/components/FormButton";
import { FormInput } from "@/pages/CreaturePage/components/Blocks/components/FormInput";
import {
  FormElementProperties,
  ButtonFormElementProperties,
  InputFormElementProperties,
} from "@/stores/types.ts";

export const getComponentByType = (
  type: ElementsName,
  properties: FormElementProperties,
) => {
  switch (type) {
    case ElementsName.Button:
      return (
        <FormButton properties={properties as ButtonFormElementProperties} />
      );
    case ElementsName.Input:
      return (
        <FormInput properties={properties as InputFormElementProperties} />
      );
    default:
      return null;
  }
};
