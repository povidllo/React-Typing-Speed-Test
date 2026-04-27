import {
  defaultGetTextsQueryParams,
  TextPanel,
  type Text,
} from "@/entity/Text";
import { textsApi } from "@/shared/api";
import { useEffect, useState } from "react";

export const SpeedTestPage = () => {
  const [currentText, setCurrentText] = useState<Text | null>(null);
  const [isLoadingText, setIsLoadingText] = useState<boolean>(true);
  const [isErrorText, setIsErrorText] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const { language, lengthType } = defaultGetTextsQueryParams;
        const response = await textsApi.textsGet(language, lengthType);
        if (response.status !== 200) {
          setIsErrorText(true);
          return;
        } else {
          setCurrentText(response.data);
        }
      } catch (error) {
        setIsErrorText(true);
      } finally {
        setIsLoadingText(false);
      }
    })();
  }, []);

  if (isLoadingText) {
    return <div>loading...</div>;
  }
  if (isErrorText) {
    return <div>ERROR</div>;
  }
  return (
    <main className="w-full h-screen">
      <div className="h-full w-full flex justify-center items-center ">
        {currentText && <TextPanel content={currentText.content ?? ""} className="max-w-3xl text-3xl"/>}
        {/* {currentText && <TextPanel content={"dsa"} className="max-w-3xl text-3xl"/>} */}
      </div>
    </main>
  );
};
