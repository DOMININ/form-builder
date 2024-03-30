import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RadioFormElementProperties } from "@/stores/types.ts";

interface Props {
  properties: RadioFormElementProperties;
}

export const FormRadio = ({ properties }: Props) => {
  return (
    <>
      <Label>{properties.title}</Label>

      <RadioGroup defaultValue="comfortable">
        {properties.values.map((value) => (
          <div className="flex items-center space-x-2">
            <RadioGroupItem id={value.id} value={value.value} />
            <Label htmlFor={value.id}>{value.value}</Label>
          </div>
        ))}
      </RadioGroup>
    </>
  );
};
