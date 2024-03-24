import { Button } from "@/components/ui/button";
import { ButtonFormElementProperties } from "@/stores/types.ts";

interface Props {
  properties: ButtonFormElementProperties;
}

export const FormButton = ({ properties }: Props) => {
  return <Button>{properties?.text}</Button>;
};
