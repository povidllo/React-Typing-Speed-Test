import clsx from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";

interface ModalWindowContentProps
  extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

export const ModalWindowContent = ({
  children,
  className,
}: ModalWindowContentProps) => {
  return (
    <div
      className={clsx(className, "bg-(--modal-foreground-color) rounded")}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};
