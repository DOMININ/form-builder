import { Draggable, Droppable } from "react-beautiful-dnd";
import { asideElements } from "@/pages/CreaturePage/components/AsideMenu/constants.ts";
import "./style.scss";
import { Button } from "@/components/ui/button.tsx";
import { formElementsStore } from "@/stores/formElementsStore.ts";
import { Input } from "@/components/ui/input.tsx";
import { importJson } from "@/utils/importJson.ts";
import React from "react";

export const AsideMenu = () => {
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const selectedFormElements = formElementsStore(
    (state) => state.selectedFormElements,
  );
  const exportFormElements = formElementsStore(
    (state) => state.exportFormElements,
  );
  const setFormElements = formElementsStore((state) => state.setFormElements);

  const handleChooseFileClick = () => {
    inputFileRef.current?.click();
  };

  return (
    <div className="flex flex-col justify-between border-r-2 border-r-indigo-500 p-5">
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

      <div className="flex flex-col gap-[10px]">
        <Button
          onClick={exportFormElements}
          disabled={!selectedFormElements.length}
        >
          Export forms
        </Button>
        <Button onClick={handleChooseFileClick}>Import forms</Button>
        <Input
          ref={inputFileRef}
          className="hidden"
          type="file"
          accept=".json"
          onChange={(e) => importJson(e, setFormElements)}
        />
      </div>
    </div>
  );
};
