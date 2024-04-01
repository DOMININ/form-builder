import { ChangeEvent } from "react";
import { formElementsStore } from "@/stores/formElementsStore.ts";
import { CardContent } from "@/components/ui/card.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { InputFormElementProperties } from "@/stores/types.ts";
import { CardWrapper } from "@/pages/CreaturePage/components/Blocks/components/cards/CardWrapper.tsx";

interface InputCardProps {
  id: string;
}

export const InputCard = ({ id }: InputCardProps) => {
  const formElementById = formElementsStore(
    (state) => state.getFormElementById,
  );
  const formElementProperties = formElementById(id)
    ?.properties as InputFormElementProperties;
  const changeFormElementSetting = formElementsStore(
    (state) => state.changeFormElementSetting,
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    propertyName: string,
  ) => {
    changeFormElementSetting(id, propertyName, e.target.value);
  };

  return (
    <CardWrapper id={id} title="Input settings">
      <CardContent className="flex flex-col gap-[25px]">
        <div>
          <Label htmlFor="btnText">Question</Label>
          <Input
            id="radioTitle"
            onChange={(e) => handleChange(e, "title")}
            value={formElementProperties.title}
            className="w-[70%]"
          />
        </div>

        <div>
          <Label htmlFor="btnText">Placeholder text</Label>
          <Input
            id="btnText"
            onChange={(e) => handleChange(e, "placeholder")}
            value={formElementProperties.placeholder}
          />
        </div>
      </CardContent>
    </CardWrapper>
  );
};
