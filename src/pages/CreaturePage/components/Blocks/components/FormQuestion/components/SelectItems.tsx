import { QuestionFormElementProperties } from "@/stores/types.ts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";

interface Props {
  values: QuestionFormElementProperties["values"];
  handleInputChange: (value: string) => void;
}

export const SelectItems = ({ values, handleInputChange }: Props) => {
  return (
    <Select onValueChange={handleInputChange}>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Select answer" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {values.map((item) => (
            <SelectItem key={item.id} value={item.value}>
              {item.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
