import { type TextLengthType } from "@/entity/Text";
import { Button, ModalWindow, ModalWindowContent } from "@/shared/ui";
import { useState } from "react";

interface TextLengthSettingsDialogProps {
  setTextLengthType: React.Dispatch<React.SetStateAction<TextLengthType>>;
  textLengthType: TextLengthType;
}

export const TextLengthTypeSettingsDialog = ({
  setTextLengthType,
  textLengthType,
}: TextLengthSettingsDialogProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="flex gap-2 rounded px-2 py-1 text-sm"
      >
        Text size
      </Button>
      <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalWindowContent className="flex flex-col p-4 w-full max-w-100">
          <Button
            className="w-full text-left px-2 py-1"
            onClick={() => {
              setTextLengthType("short");
              setIsOpen(false);
            }}
          >
            Short
          </Button>
          <Button
            className="w-full text-left px-2 py-1"
            onClick={() => {
              setTextLengthType("medium");
              setIsOpen(false);
            }}
          >
            Medium
          </Button>
          <Button
            className="w-full text-left px-2 py-1"
            onClick={() => {
              setTextLengthType("long");
              setIsOpen(false);
            }}
          >
            Long
          </Button>
        </ModalWindowContent>
      </ModalWindow>
    </>
  );
};
