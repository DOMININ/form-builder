import { ChangeEvent } from "react";

export const importJson = (
  e: ChangeEvent<HTMLInputElement>,
  onSave: (parsedJson: []) => void,
) => {
  const file = e.target.files?.[0]; // Проверка наличия файла
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const json = event.target?.result as string;
      if (json) {
        const parsedJson = JSON.parse(json);
        onSave(parsedJson);
      }
    };
    reader.readAsText(file);
  }
};
