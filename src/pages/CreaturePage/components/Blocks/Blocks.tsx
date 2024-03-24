import { Draggable, Droppable } from "react-beautiful-dnd";
import { formElementsStore } from "@/stores/formElementsStore.ts";
import { getFormSettingByType } from "@/pages/CreaturePage/components/Blocks/utils/getFormSettingByType.tsx";

export const Blocks = () => {
  const selectedFormElements = formElementsStore(
    (state) => state.selectedFormElements,
  );

  return (
    <Droppable droppableId="formElements">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="p-5 flex flex-col items-center gap-[10px]"
        >
          {selectedFormElements.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {getFormSettingByType(item.type, item.id)}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
