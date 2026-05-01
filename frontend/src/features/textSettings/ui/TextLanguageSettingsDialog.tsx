import { TextLanguageMatching, type TextLanguage } from "@/entity/Text";
import { Button, ModalWindow, ModalWindowContent } from "@/shared/ui";
import { Earth } from "lucide-react";
import { useState } from "react";

interface TextLanguageSettingsDialogProps {
  setTextLanguage: React.Dispatch<React.SetStateAction<TextLanguage>>;
  textLanguage: TextLanguage;
}

export const TextLanguageSettingsDialog = ({
  setTextLanguage,
  textLanguage,
}: TextLanguageSettingsDialogProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="flex gap-2 rounded px-2 py-1 text-sm"
      >
        <Earth size={"16px"} />
        {TextLanguageMatching[textLanguage]}
      </Button>
      <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalWindowContent className="flex flex-col p-4 w-full max-w-100">
          <Button
            className="w-full text-left px-2 py-1"
            onClick={() => setTextLanguage("en")}
          >
            English
          </Button>
          <Button
            className="w-full text-left px-2 py-1"
            onClick={() => setTextLanguage("ru")}
          >
            Russian
          </Button>
        </ModalWindowContent>
      </ModalWindow>
    </>
  );
};
