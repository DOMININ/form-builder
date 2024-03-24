import { Draggable, Droppable } from "react-beautiful-dnd";
import { asideElements } from "@/pages/CreaturePage/components/AsideMenu/constants.ts";
import "./style.scss";

export const AsideMenu = () => {
  return (
    <div className="border-r-2 border-r-indigo-500 p-5">
      <Droppable droppableId="items" isDropDisabled>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {asideElements.map((element, index) => (
              <Draggable
                key={element.id}
                draggableId={element.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <>
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {element.displayName}
                    </div>
                    {snapshot.isDragging ? (
                      <div className="dnd-copy">{element.displayName}</div>
                    ) : null}
                  </>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
