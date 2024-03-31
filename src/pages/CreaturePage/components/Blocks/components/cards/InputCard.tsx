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
  const changeFormElementSetting = formElementsStore(
    (state) => state.changeFormElementSetting,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeFormElementSetting(id, "placeholder", e.target.value);
  };

  return (
    <CardWrapper id={id} title="Input settings">
      <CardContent>
        <Label htmlFor="btnText">Placeholder text</Label>
        <Input
          id="btnText"
          onChange={handleChange}
          value={
            (formElementById(id)?.properties as InputFormElementProperties)
              ?.placeholder
          }
        />
      </CardContent>
    </CardWrapper>
  );
};
