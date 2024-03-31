import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { formElementsStore } from "@/stores/formElementsStore.ts";

interface Props {
  title: React.ReactElement;
  children: React.ReactElement;
  id: string;
}

export const CardWrapper = ({ children, title, id }: Props) => {
  const removeFormElement = formElementsStore(
    (state) => state.removeFormElement,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {children}
      <div className="p-[10px] border-t border-gray-400 text-right">
        <Button variant="destructive" onClick={() => removeFormElement(id)}>
          Remove form
        </Button>
      </div>
    </Card>
  );
};
