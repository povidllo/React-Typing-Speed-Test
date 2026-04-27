import clsx from "clsx";
import React from "react";

export const Char = React.memo(
  React.forwardRef<HTMLSpanElement, { char: string; state: string }>(
    ({ char, state }, ref) => {
      return (
        <span
          ref={ref}
          className={clsx(
            "character inline-block",
            char === " " ? "w-2" : "",
            state,
          )}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    },
  ),
);
