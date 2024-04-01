import { getComponentByType } from "@/pages/PreviewPage/utils/getComponentByType.tsx";
import { formElementsStore } from "@/stores/formElementsStore.ts";
import { Button } from "@/components/ui/button.tsx";
import React from "react";
import { ResultPopup } from "@/pages/PreviewPage/popups/ResultPopup.tsx";
import { useToast } from "@/components/ui/use-toast.ts";
import { UserAnswers } from "@/stores/types.ts";

export const PreviewPage = () => {
  const [userAnswers, setUserAnswers] = React.useState<UserAnswers[]>([]);
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const selectedFormElements = formElementsStore(
    (state) => state.selectedFormElements,
  );
  const { toast } = useToast();

  const handleChangePreviewElement = (
    id: string,
    response: UserAnswers["response"],
  ) => {
    const existingIndex = userAnswers.findIndex((answer) => answer?.id === id);

    if (existingIndex === -1) {
      setUserAnswers([...userAnswers, { id, response }]);
    } else {
      setUserAnswers([
        ...userAnswers.slice(0, existingIndex),
        { id, response },
        ...userAnswers.slice(existingIndex + 1),
      ]);
    }
  };

  const submitForm = () => {
    const emptyRequiredFields: string[] = [];
    const requiredFields = selectedFormElements.filter(
      (item) => item.properties.required,
    );
    const requiredIds = requiredFields.map((item) => item.id);

    requiredIds.forEach((requiredId) => {
      const requiredAnswer = userAnswers.find(
        (answer) => answer?.id === requiredId,
      );

      if (requiredAnswer) {
        requiredAnswer?.response?.userAnswer.length ||
          emptyRequiredFields.push(requiredId);
      } else {
        emptyRequiredFields.push(requiredId);
      }
    });

    if (!emptyRequiredFields.length) {
      setIsOpenPopup(true);
    } else {
      toast({
        variant: "destructive",
        description: "Not all required fields are filled in!",
      });
    }
  };

  return (
    <>
      <ul className="flex flex-col gap-[20px] p-5">
        {selectedFormElements.map((item) => (
          <li key={item.id} className="border-2 border-indigo-500 rounded p-5">
            {getComponentByType(
              item.type,
              item.properties,
              (response: UserAnswers["response"]) =>
                handleChangePreviewElement(item.id, response),
            )}
          </li>
        ))}
      </ul>

      <Button onClick={submitForm} disabled={!userAnswers.length}>
        Submit
      </Button>

      <ResultPopup
        isOpen={isOpenPopup}
        closePopup={() => setIsOpenPopup(false)}
        userAnswer={userAnswers.map((answer) => ({
          question: answer.response.title,
          answer: answer.response.userAnswer,
        }))}
      />
    </>
  );
};
