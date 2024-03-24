import { getComponentByType } from "@/pages/PreviewPage/utils/getComponentByType.tsx";
import { formElementsStore } from "@/stores/formElementsStore.ts";

export const PreviewPage = () => {
  const selectedFormElements = formElementsStore(
    (state) => state.selectedFormElements,
  );

  return (
    <ul>
      {selectedFormElements.map((item) => (
        <li key={item.id}>{getComponentByType(item.type, item.properties)}</li>
      ))}
    </ul>
  );
};
