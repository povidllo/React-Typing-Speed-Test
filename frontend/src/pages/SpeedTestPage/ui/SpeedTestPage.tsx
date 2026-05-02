import { TextPanel, useGetTexts } from "@/entity/Text";
import { RotateCw } from "lucide-react";
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
} from "@/features/typing";
import { useEffect, useMemo } from "react";

export const SpeedTestPage = () => {
  const { time, isRunning, tick } = useTypingTimer();

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

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

  if (isLoadingText) {
    return <div>loading...</div>;
  }
  if (isErrorText) {
    return <div>ERROR</div>;
  }

  return (
    <main className="w-full h-screen">
      <div className="h-full w-full flex gap-2 flex-col justify-center items-center ">
        {isFinished ? (
          <TypingResults
            timeSpent={timeSpent ?? 0}
            textLength={currentText?.content?.length ?? 0}
            generalTyposCount={generalTyposCount}
          />
        ) : (
          // <div> f</div>
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
              <TextPanel
                content={currentText.content ?? ""}
                className="max-w-3xl text-3xl"
                enteredText={enteredText}
                typeInputFunc={typeInputFunc}
                enteredTextIndex={enteredTextIndex}
                charState={charState}
              />
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
    </main>
  );
};
