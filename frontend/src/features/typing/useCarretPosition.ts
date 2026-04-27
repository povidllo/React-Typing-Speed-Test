import { useScreenResize } from "@/shared";
import { useEffect, useState } from "react";

interface CarretСoordinatesType {
  x: number;
  y: number;
}

interface UseCaretPositionProps {
  index: number;
  charRefs: React.RefObject<(HTMLSpanElement | null)[]>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const useCarretPosition = ({
  charRefs,
  index,
  containerRef,
}: UseCaretPositionProps) => {
  const [carretСoordinates, setCarretСoordinates] =
    useState<CarretСoordinatesType | null>(null);
  const [carretSize, setCarretSize] = useState<number>(24);

  const { windowSize } = useScreenResize();

  useEffect(() => {
    setCarretСoordinates((_prev) => {
      const charRef = charRefs.current[index];
      const charRect = charRef?.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();
      const x = (charRect?.left ?? 0) - (containerRect?.left ?? 0);
      const y = (charRect?.top ?? 0) - (containerRect?.top ?? 0);
      return { x: x, y: y };
    });
  }, [index, windowSize]);

  useEffect(() => {
    const charSize = charRefs.current[0]?.getBoundingClientRect().height;
    setCarretSize((prev) => (charSize ? charSize : prev));
  }, []);

  return { carretСoordinates, carretSize };
};
