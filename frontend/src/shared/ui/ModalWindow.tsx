import clsx from "clsx";
import {
  useEffect,
  useState,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import { createPortal } from "react-dom";

interface ModalWindowProps extends PropsWithChildren {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export const ModalWindow = ({
  isOpen,
  setIsOpen,
  children,
  className,
}: ModalWindowProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      setTimeout(() => setShouldRender(false), 200);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return createPortal(
    <div
      className={clsx(
        className,
        `fixed inset-0 w-full h-screen top-0 left-0 flex items-center justify-center`,
        `bg-(--modal-background-color)`,
        isOpen ? "opacity-100" : "opacity-0",
        `transition-opacity duration-200`,
      )}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div
        className={clsx(
          "transition-transform duration-200",
          `w-full h-full flex items-center justify-center`,
          isOpen ? "scale-100" : "scale-95",
        )}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};
