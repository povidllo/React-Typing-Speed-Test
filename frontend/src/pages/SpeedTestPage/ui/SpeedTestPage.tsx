import { TextPanel, useGetTexts } from "@/entity/Text";
import { Loader, RotateCw } from "lucide-react";
import { Button } from "@/shared/ui";
import {
  TextLanguageSettingsDialog,
  TextLengthTypeSettingsDialog,
  useTextSettings,
} from "@/features/textSettings";
import {
  TypingResults,
  useTypingEngine,
  useTypingTimer,
  useUserResults,
} from "@/features/typing";
import { useMemo } from "react";
import { useAuthMe } from "@/entity/User";

export const SpeedTestPage = () => {
  const { time, isRunning } = useTypingTimer();
  const { data: user } = useAuthMe();

  const { textLanguage, setTextLanguage, textLengthType, setTextLengthType } =
    useTextSettings();

  const {
    data: currentText,
    isLoading: isLoadingText,
    isError: isErrorText,
    refetch: fetchNewText,
    isFetching: fetchingNewText,
  } = useGetTexts(textLanguage, textLengthType);

  const chars = useMemo(
    () => Array.from(currentText?.content ?? ""),
    [currentText],
  );
  const {
    enteredText,
    typeInputFunc,
    enteredTextLength,
    enteredTextIndex,
    charState,
    isFinished,
    generalTyposCount,
    resetTyping,
    timeSpent,
  } = useTypingEngine({
    chars,
    content: currentText?.content ?? "",
  });
  const { accuracy, cpm, wpm } = useUserResults({
    enteredTextLength: enteredTextLength ?? 0,
    generalTyposCount: generalTyposCount,
    timeSpent: timeSpent ?? 0,
    isFinished: isFinished,
    textId: currentText?.textId,
    isAuthorized: !!user,
  });

  if (isLoadingText) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader className="animate-spin" size={"50px"} />
      </div>
    );
  }
  if (isErrorText) {
    return (
      <div className="w-full h-full text-7xl flex items-center justify-center">
        Error
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="h-full w-full flex gap-2 flex-col justify-center items-center ">
        {isFinished ? (
          <TypingResults
            timeSpent={timeSpent ?? 0}
            generalTyposCount={generalTyposCount}
            accuracy={accuracy}
            cpm={cpm}
            wpm={wpm}
          />
        ) : (
          <>
            {isRunning ? (
              time
            ) : (
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
            )}
            {currentText && (
              <div className="p-3 max-w-3xl">
                <TextPanel
                  content={currentText.content ?? ""}
                  className="text-3xl"
                  enteredText={enteredText}
                  typeInputFunc={typeInputFunc}
                  enteredTextIndex={enteredTextIndex}
                  charState={charState}
                />
              </div>
            )}
          </>
        )}
        <Button
          className="p-2 rounded"
          onClick={() => {
            resetTyping();
            fetchNewText();
          }}
          disabled={fetchingNewText}
        >
          <RotateCw />
        </Button>
      </div>
    </div>
  );
};
