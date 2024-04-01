import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label.tsx";
import { QuestionFormElementProperties } from "@/stores/types.ts";

interface Props {
  values: QuestionFormElementProperties["values"];
  handleInputChange: (value: string) => void;
}

type Result = {
  id: string;
  value: string;
};

export const CheckboxItems = ({ values, handleInputChange }: Props) => {
  const [results, setResults] = React.useState<Result[]>([]);

  const handleCheckedChange = (
    state: string | boolean,
    id: string,
    value: string,
  ) => {
    let currentResults: Result[];
    if (state) {
      currentResults = [...results, { id, value }];
    } else {
      currentResults = results.filter((item) => item.id !== id);
    }

    setResults([...currentResults]);
    handleInputChange(currentResults.map((item) => item.value).join(", "));
  };

  return (
    <>
      {values.map((value) => (
        <div key={value.id} className="flex items-center space-x-2">
          <Checkbox
            id={value.id}
            value={value.value}
            onCheckedChange={(state) =>
              handleCheckedChange(state, value.id, value.value)
            }
          />
          <Label htmlFor={value.id}>{value.value}</Label>
        </div>
      ))}
    </>
  );
};
