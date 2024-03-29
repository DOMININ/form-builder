import { ChangeEvent } from "react";
import { formElementsStore } from "@/stores/formElementsStore.ts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { InputFormElementProperties } from "@/stores/types.ts";

interface ButtonCardProps {
  id: string;
}

export const InputCard = ({ id }: ButtonCardProps) => {
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
    <Card>
      <CardHeader>
        <CardTitle>Input settings</CardTitle>
      </CardHeader>
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
    </Card>
  );
};
