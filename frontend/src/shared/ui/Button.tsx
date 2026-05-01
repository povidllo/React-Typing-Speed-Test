import clsx from "clsx";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {}
export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        `cursor-pointer transition-all rounded`,
        `hover:bg-(--button-hover-bg-color)`,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
