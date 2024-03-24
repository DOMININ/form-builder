import { AsideMenu } from "@/pages/CreaturePage/components/AsideMenu";
import { Blocks } from "@/pages/CreaturePage/components/Blocks";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { formElementsStore } from "@/stores/formElementsStore.ts";
import { v4 as uuid } from "uuid";
import { ElementsName } from "@/pages/CreaturePage/components/AsideMenu/types.ts";

export const CreaturePage = () => {
  const selectedFormElements = formElementsStore(
    (state) => state.selectedFormElements,
  );
  const addFormElement = formElementsStore((state) => state.addFormElement);
  const setFormElements = formElementsStore((state) => state.setFormElements);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const newFormElements = [...selectedFormElements];
    const newElement = {
      id: uuid(),
      type: result.draggableId as ElementsName,
      properties: {},
    };

    if (!selectedFormElements.length) {
      return addFormElement(newElement);
    }

    if (source.droppableId === "items") {
      newFormElements.splice(destination.index, 0, newElement);

      setFormElements(newFormElements);
    }

    if (source.droppableId === "formElements") {
      const [removedItem] = newFormElements.splice(source.index, 1);
      newFormElements.splice(destination.index, 0, removedItem);
      setFormElements(newFormElements);
    }
  };

  return (
    <div className="grid grid-cols-[200px_auto] h-full">
      <DragDropContext onDragEnd={handleDragEnd}>
        <AsideMenu />
        <Blocks />
      </DragDropContext>
    </div>
  );
};
