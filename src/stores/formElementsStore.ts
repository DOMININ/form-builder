import { create } from "zustand";
import { FormElement } from "@/stores/types.ts";
import { exportJson } from "@/utils/exportJson.ts";

interface ElementsState {
  selectedFormElements: FormElement[];

  addFormElement: (newElement: FormElement) => void;
  setFormElements: (formElements: FormElement[]) => void;
  getFormElementById: (id: string) => FormElement | undefined;
  changeFormElementSetting: (
    id: string,
    propertyName: string,
    propertyValue: string,
  ) => void;
  exportFormElements: () => void;
}

export const formElementsStore = create<ElementsState>()((set, getState) => ({
  selectedFormElements: [],

  addFormElement: (newElement) =>
    set((state) => ({
      selectedFormElements: [...state.selectedFormElements, newElement],
    })),

  setFormElements: (formElements) =>
    set({ selectedFormElements: [...formElements] }),

  getFormElementById: (id: string) => {
    return getState().selectedFormElements.find((item) => item.id === id);
  },

  changeFormElementSetting: (id, propertyName, propertyValue) =>
    set((state) => {
      const updatedElements = state.selectedFormElements.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            properties: {
              ...element.properties,
              [propertyName]: propertyValue,
            },
          };
        }
        return element;
      });

      return {
        selectedFormElements: updatedElements,
      };
    }),

  exportFormElements: () => {
    exportJson(getState().selectedFormElements);
  },
}));
