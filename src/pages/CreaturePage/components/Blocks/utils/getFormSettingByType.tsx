import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";
import { ButtonCard } from "@/pages/CreaturePage/components/Blocks/components/cards/ButtonCard.tsx";
import { InputCard } from "@/pages/CreaturePage/components/Blocks/components/cards/InputCard.tsx";
import { RadioCard } from "@/pages/CreaturePage/components/Blocks/components/cards/RadioCard.tsx";

export const getFormSettingByType = (type: ElementsName, id: string) => {
  switch (type) {
    case ElementsName.Button:
      return <ButtonCard id={id} />;
    case ElementsName.Input:
      return <InputCard id={id} />;
    case ElementsName.Radio:
      return <RadioCard id={id} />;
    default:
      return null;
  }
};
