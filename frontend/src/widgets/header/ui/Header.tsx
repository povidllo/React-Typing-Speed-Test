import { ThemeToggle } from "@/features/theme";
import { KeyboardSVG } from "@/shared/ui";

export const Header = () => {
  return (
    <header className="fixed w-full h-20 bg-background/95 backdrop-blur py-4 px-10 flex justify-between">
      <KeyboardSVG className="h-full text-primary" />
      <ThemeToggle />
    </header>
  );
};
