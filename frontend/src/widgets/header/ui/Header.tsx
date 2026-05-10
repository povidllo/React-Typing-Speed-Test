import type { User } from "@/entity/User";
import { ThemeToggle } from "@/features/theme";
import { Button, KeyboardSVG } from "@/shared/ui";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  user: User | undefined;
}

export const Header = ({ user }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="w-full h-20 bg-background/95 backdrop-blur py-4 px-10 flex justify-between">
      <Button className="hover:bg-transparent" onClick={() => navigate("/")}>
        <KeyboardSVG className="h-full text-amber-300" />
      </Button>
      <div className="flex gap-2">
        <Button
          className="p-2 flex items-center gap-2"
          onClick={() => {
            user ? navigate("/account") : navigate("/auth");
          }}
        >
          <UserRound />
          {user && <div>{user.userLogin}</div>}
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
};
