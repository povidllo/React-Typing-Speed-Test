import { TextPanel, useGetTexts } from "@/entity/Text";
import { RotateCw } from "lucide-react";
import { Button } from "@/shared/ui";
import {
  TextLanguageSettingsDialog,
  TextLengthTypeSettingsDialog,
  useTextSettings,
} from "@/features/textSettings";

export const SpeedTestPage = () => {
  const { textLanguage, setTextLanguage, textLengthType, setTextLengthType } =
    useTextSettings();
  const {
    data: currentText,
    isLoading: isLoadingText,
    isError: isErrorText,
    refetch: fetchNewText,
    isFetching: fetchingNewText,
  } = useGetTexts(textLanguage, textLengthType);

  if (isLoadingText) {
    return <div>loading...</div>;
  }
  if (isErrorText) {
    return <div>ERROR</div>;
  }

  return (
    <main className="w-full h-screen">
      <div className="h-full w-full flex gap-2 flex-col justify-center items-center ">
        <div className="flex gap-2">
          <TextLanguageSettingsDialog
            textLanguage={textLanguage}
            setTextLanguage={setTextLanguage}
          />
          <TextLengthTypeSettingsDialog
            setTextLengthType={setTextLengthType}
            textLengthType={textLengthType}
          />
        </div>
        {currentText && (
          <TextPanel
            content={currentText.content ?? ""}
            className="max-w-3xl text-3xl"
          />
        )}
        <Button
          className="p-2 rounded"
          onClick={() => fetchNewText()}
          disabled={fetchingNewText}
        >
          <RotateCw />
        </Button>
      </div>
    </main>
  );
};
