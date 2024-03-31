import { Input } from "@/components/ui/input";
import { InputFormElementProperties } from "@/stores/types.ts";

interface Props {
  properties: InputFormElementProperties;
}

export const FormInput = ({ properties }: Props) => {
  return <Input placeholder={properties.placeholder} />;
};
