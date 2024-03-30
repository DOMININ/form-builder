import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";
import { v4 as uuid } from "uuid";

export const getPropertiesByFormType = (type: ElementsName) => {
  switch (type) {
    case ElementsName.Radio:
      return {
        title: "Question",
        values: [{ id: uuid(), value: "Option 1" }],
      };
  }

  return {};
};
