import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label.tsx";
import { QuestionFormElementProperties } from "@/stores/types.ts";

interface Props {
  values: QuestionFormElementProperties["values"];
}

export const CheckboxItems = ({ values }: Props) => {
  return (
    <>
      {values.map((value) => (
        <div key={value.id} className="flex items-center space-x-2">
          <Checkbox id={value.id} value={value.value} />
          <Label htmlFor={value.id}>{value.value}</Label>
        </div>
      ))}
    </>
  );
};
