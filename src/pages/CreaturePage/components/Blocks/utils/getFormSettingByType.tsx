import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";
import { InputCard } from "@/pages/CreaturePage/components/Blocks/components/cards/InputCard.tsx";
import { QuestionCard } from "@/pages/CreaturePage/components/Blocks/components/cards/QuestionCard.tsx";

export const getFormSettingByType = (type: ElementsName, id: string) => {
  switch (type) {
    case ElementsName.Input:
      return <InputCard id={id} />;
    case ElementsName.Question:
      return <QuestionCard id={id} />;
    default:
      return null;
  }
};
