import { getComponentByType } from "@/pages/PreviewPage/utils/getComponentByType.tsx";
import { formElementsStore } from "@/stores/formElementsStore.ts";

export const PreviewPage = () => {
  const selectedFormElements = formElementsStore(
    (state) => state.selectedFormElements,
  );

  return (
    <ul className="flex flex-col gap-[20px] p-5">
      {selectedFormElements.map((item) => (
        <li key={item.id} className="border-2 border-indigo-500 rounded p-5">
          {getComponentByType(item.type, item.properties)}
        </li>
      ))}
    </ul>
  );
};
