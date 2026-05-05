import { useLogin } from "@/features/auth";
import { Button } from "@/shared/ui";
import { Loader, LogIn } from "lucide-react";
import { useForm } from "react-hook-form";

interface FormType {
  login: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<FormType>();

  const {
    mutate: loginUser,
    isError,
    error: mutationError,
    isPending,
  } = useLogin();

  const onSubmit = (data: FormType) => {
    const login = data.login;
    const password = data.password;
    console.log("логинюсь");
    console.log(login);
    console.log(password);
    loginUser({ login: login, password: password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex w-full justify-start gap-2 mb-2">
        <LogIn /> <div>login</div>
      </div>
      <div className="mx-1 flex flex-col gap-2 w-full">
        <div>
          <input
            placeholder="login"
            className="bg-(--color-sub-alt) px-3 py-2 rounded-lg w-full"
            {...register("login", {
              required: "Login is required",
              minLength: {
                value: 3,
                message: "Min length is 3",
              },
              maxLength: {
                value: 100,
                message: "Max length is 100",
              },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: "Only letters, numbers and underscore",
              },
            })}
          />
          <p className="text-(--error-color)">
            {formErrors.login && formErrors.login.message}
          </p>
        </div>

        <div>
          <input
            placeholder="password"
            className="bg-(--color-sub-alt) px-3 py-2 rounded-lg w-full"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Min length is 6",
              },
              maxLength: {
                value: 100,
                message: "Max length is 100",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: "Numbers and letters must be used",
              },
            })}
          />
          <p className="text-(--error-color)">
            {formErrors.password && formErrors.password.message}
          </p>
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="border rounded-lg py-1 flex w-full justify-center gap-2 "
        >
          {isPending ? (
            <Loader className="animate-spin" />
          ) : (
            <>
              <LogIn /> <div>sign in</div>
            </>
          )}
        </Button>
      </div>
      {isError && (
        <p className="text-(--error-color)">
          {mutationError.response?.data.error ?? mutationError.message}
        </p>
      )}
    </form>
  );
};
