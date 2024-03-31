import { CardContent } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { QuestionFormElementProperties } from "@/stores/types.ts";
import { ChangeEvent } from "react";
import { formElementsStore } from "@/stores/formElementsStore.ts";
import { v4 as uuid } from "uuid";
import { CardWrapper } from "@/pages/CreaturePage/components/Blocks/components/cards/CardWrapper.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  id: string;
}

export const QuestionCard = ({ id }: Props) => {
  const formElementById = formElementsStore(
    (state) => state.getFormElementById,
  );
  const formElementProperties = formElementById(id)
    ?.properties as QuestionFormElementProperties;
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

  const changeTypeOfTheQuestion = (type: string) => {
    changeFormElementSetting(id, "type", type);
  };

  const SelectVariant = () => (
    <Select
      defaultValue={formElementProperties.type}
      onValueChange={changeTypeOfTheQuestion}
    >
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select the type of question" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="radio">One from the list</SelectItem>
          <SelectItem value="checkbox">Multi select</SelectItem>
          <SelectItem value="select">Drop down list</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );

  return (
    <CardWrapper
      id={id}
      title={
        <p className="flex items-center justify-between">
          Question settings <SelectVariant />
        </p>
      }
    >
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
              placeholder="New answer"
              onClick={addNewItem}
              className="w-[90%]"
            />
          </ul>
        </div>
      </CardContent>
    </CardWrapper>
  );
};
