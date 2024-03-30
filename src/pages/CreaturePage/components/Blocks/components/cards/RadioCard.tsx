import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { RadioFormElementProperties } from "@/stores/types.ts";
import { ChangeEvent } from "react";
import { formElementsStore } from "@/stores/formElementsStore.ts";
import { v4 as uuid } from "uuid";

interface Props {
  id: string;
}

export const RadioCard = ({ id }: Props) => {
  const formElementById = formElementsStore(
    (state) => state.getFormElementById,
  );
  const formElementProperties = formElementById(id)
    ?.properties as RadioFormElementProperties;
  const changeFormElementSetting = formElementsStore(
    (state) => state.changeFormElementSetting,
  );

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    changeFormElementSetting(id, "title", e.target.value);
  };

  const handleChangeItemValue = (e: ChangeEvent<HTMLInputElement>) => {
    const itemId = e.target.id;
    const itemValue = e.target.value;

    const newValues = formElementProperties?.values.map((value) => {
      if (value.id === itemId) {
        return {
          id: value.id,
          value: itemValue,
        };
      }

      return value;
    });

    changeFormElementSetting(id, "values", newValues);
  };

  const addNewItem = () => {
    changeFormElementSetting(id, "values", [
      ...(formElementProperties?.values ?? []),
      {
        id: uuid(),
        value: `Option ${formElementProperties?.values.length + 1}`,
      },
    ]);
  };

  const deleteItem = (itemId: string) => {
    const filteredItems = formElementProperties?.values.filter(
      (value) => value.id !== itemId,
    );
    changeFormElementSetting(id, "values", filteredItems);
  };

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Question settings</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-[25px]">
        <div>
          <Label htmlFor="btnText">Question</Label>
          <Input
            id="radioTitle"
            onChange={handleChangeTitle}
            value={formElementProperties?.title}
            className="w-[70%]"
          />
        </div>

        <div>
          <ul className="flex flex-col gap-[10px]">
            {formElementProperties?.values.map((value) => (
              <li key={value.id} className="flex gap-[5px]">
                <Input
                  id={value.id}
                  value={value.value}
                  onChange={handleChangeItemValue}
                  autoFocus
                  className="w-[90%]"
                />
                {formElementProperties?.values.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteItem(value.id)}
                  >
                    X
                  </Button>
                )}
              </li>
            ))}

            <Input
              placeholder="new answer"
              onClick={addNewItem}
              className="w-[90%]"
            />
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
