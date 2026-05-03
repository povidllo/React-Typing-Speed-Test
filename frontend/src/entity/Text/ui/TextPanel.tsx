import clsx from "clsx";
import { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import { Char } from "./Char";
import { useCarretPosition } from "@/features/typing";

interface TextPanelProps {
  content: string;
  className?: string;
  enteredText: string;
  typeInputFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enteredTextIndex: number;
  charState: (index: number) => string;
}

export const TextPanel = ({
  content,
  className,
  enteredText,
  typeInputFunc,
  enteredTextIndex,
  charState,
}: TextPanelProps) => {
  const [inputFocused, setInputFocused] = useState<boolean>(true);

  const chars = useMemo(() => Array.from(content), [content]);
  const words = useMemo(
    () => content.split(/(\s)/).map((word) => Array.from(word)),
    [content],
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refsMap = useRef<((el: HTMLSpanElement | null) => void)[]>([]);

  if (refsMap.current.length !== chars.length) {
    refsMap.current = chars.map((_, i) => (el: HTMLSpanElement | null) => {
      charRefs.current[i] = el;
    });
  }

  const { carretСoordinates, carretSize } = useCarretPosition({
    charRefs,
    containerRef,
    index: enteredTextIndex,
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setInputFocused(false);
      }
    };

    inputRef.current?.focus();

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let globalIndex = 0;

  return (
    <div
      className={clsx("relative w-full", className)}
      onClick={() => {
        setInputFocused(true);
        inputRef.current?.focus();
      }}
    >
      <div className="p-2 flex flex-wrap" ref={containerRef}>
        {words.map((word, wordIndex) => {
          return (
            <span key={wordIndex}>
              {word.map((char) => {
                const currentIdx = globalIndex++;
                return (
                  <Char
                    ref={refsMap.current[currentIdx]}
                    key={currentIdx}
                    char={char}
                    state={charState(currentIdx)}
                  />
                );
              })}
            </span>
          );
        })}
      </div>

      <input
        value={enteredText}
        onChange={typeInputFunc}
        ref={inputRef}
        className="absolute opacity-0 pointer-events-none"
      />
      <div
        className={clsx(
          `caret absolute top-0 left-0 w-px bg-(--caret-color) animate-caret`,
          inputFocused ? "visible" : "invisible",
        )}
        style={{
          transform: `translate(${carretСoordinates?.x}px, ${carretСoordinates?.y}px)`,
          height: `${carretSize}px`,
        }}
      ></div>
    </div>
  );
};
