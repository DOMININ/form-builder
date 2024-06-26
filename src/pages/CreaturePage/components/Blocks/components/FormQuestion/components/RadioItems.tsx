import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { Label } from "@/components/ui/label.tsx";
import { QuestionFormElementProperties } from "@/stores/types.ts";

interface Props {
  values: QuestionFormElementProperties["values"];
  handleInputChange: (value: string) => void;
}

export const RadioItems = ({ values, handleInputChange }: Props) => {
  return (
    <RadioGroup onValueChange={handleInputChange}>
      {values.map((value) => (
        <div key={value.id} className="flex items-center space-x-2">
          <RadioGroupItem id={value.id} value={value.value} />
          <Label htmlFor={value.id}>{value.value}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};
