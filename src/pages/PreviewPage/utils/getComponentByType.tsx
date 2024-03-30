import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";
import { FormButton } from "@/pages/CreaturePage/components/Blocks/components/FormButton";
import { FormInput } from "@/pages/CreaturePage/components/Blocks/components/FormInput";
import {
  FormElementProperties,
  ButtonFormElementProperties,
  InputFormElementProperties,
  RadioFormElementProperties,
} from "@/stores/types.ts";
import { FormRadio } from "@/pages/CreaturePage/components/Blocks/components/FormRadio";

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
    case ElementsName.Radio:
      return (
        <FormRadio properties={properties as RadioFormElementProperties} />
      );
    default:
      return null;
  }
};
