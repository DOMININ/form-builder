import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button.tsx";

interface Props {
  userAnswer: { question: string; answer: string }[];
  isOpen: boolean;
  closePopup: () => void;
}

export const ResultPopup = ({ userAnswer, isOpen, closePopup }: Props) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Results</DialogTitle>
          <DialogDescription>
            <ul>
              {userAnswer.map((item) => (
                <li>
                  {item.question}: {item.answer}
                </li>
              ))}
            </ul>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="button" variant="secondary" onClick={closePopup}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
