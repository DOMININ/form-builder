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
import { ButtonFormElementProperties } from "@/stores/types.ts";

interface ButtonCardProps {
  id: string;
}

export const ButtonCard = ({ id }: ButtonCardProps) => {
  const formElementById = formElementsStore(
    (state) => state.getFormElementById,
  );
  const changeFormElementSetting = formElementsStore(
    (state) => state.changeFormElementSetting,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeFormElementSetting(id, "text", e.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Button settings</CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="btnText">Button text</Label>
        <Input
          id="btnText"
          onChange={handleChange}
          value={
            (formElementById(id)?.properties as ButtonFormElementProperties)
              ?.text
          }
        />
      </CardContent>
    </Card>
  );
};
