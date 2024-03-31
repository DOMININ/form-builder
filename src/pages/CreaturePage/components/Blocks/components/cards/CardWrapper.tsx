import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button.tsx";
import { formElementsStore } from "@/stores/formElementsStore.ts";

interface Props {
  title: React.ReactElement;
  children: React.ReactElement;
  id: string;
}

export const CardWrapper = ({ children, title, id }: Props) => {
  const formElementById = formElementsStore(
    (state) => state.getFormElementById,
  );
  const formElementProperties = formElementById(id)?.properties;
  const removeFormElement = formElementsStore(
    (state) => state.removeFormElement,
  );
  const changeFormElementSetting = formElementsStore(
    (state) => state.changeFormElementSetting,
  );

  const changeRequiredStatusField = (status: boolean) => {
    changeFormElementSetting(id, "required", status);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {children}
      <div className="flex items-center justify-between p-[10px] border-t border-gray-400 text-right">
        <Toggle
          pressed={formElementProperties?.required}
          onPressedChange={changeRequiredStatusField}
        >
          Required field
        </Toggle>
        <Button variant="destructive" onClick={() => removeFormElement(id)}>
          Remove form
        </Button>
      </div>
    </Card>
  );
};
