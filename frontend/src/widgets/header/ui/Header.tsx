import { ThemeToggle } from "@/features/theme";
import { Button, KeyboardSVG } from "@/shared/ui";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed w-full h-20 bg-background/95 backdrop-blur py-4 px-10 flex justify-between">
      <Button className="hover:bg-transparent" onClick={() => navigate("/")}>
        <KeyboardSVG className="h-full text-primary" />
      </Button>
      <div className="flex gap-2">
        <Button className="p-2" onClick={() => navigate("/auth")}>
          <UserRound />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
};
