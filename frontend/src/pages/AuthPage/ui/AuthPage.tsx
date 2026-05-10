import { RegistrationForm } from "./RegistrationForm";
import { LoginForm } from "./LoginForm";

export const AuthPage = () => {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="flex sm:flex-row flex-col max-w-2xl w-full justify-center sm:justify-between gap-4 px-5">
        <RegistrationForm />

        <LoginForm />
      </div>
    </main>
  );
};
