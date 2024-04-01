import { Input } from "@/components/ui/input";
import { InputFormElementProperties } from "@/stores/types.ts";
import { Label } from "@/components/ui/label.tsx";
import { ChangeEvent } from "react";

interface FormElementWithValue extends InputFormElementProperties {
  userAnswer: string;
}

interface Props {
  properties: InputFormElementProperties;
  handleChangePreviewForm: (response: FormElementWithValue) => void;
}

export const FormInput = ({ properties, handleChangePreviewForm }: Props) => {
  const { title, placeholder, required } = properties;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const response = {
      ...properties,
      userAnswer: e.target.value,
    };
    handleChangePreviewForm(response);
  };

  return (
    <>
      <Label>
        {title} {required && <span style={{ color: "red" }}>*</span>}
      </Label>

      <Input placeholder={placeholder} onChange={handleInputChange} />
    </>
  );
};
