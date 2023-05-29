"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useCallback, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsTwitter } from "react-icons/bs";

type Variant = "SignIn" | "SignUp";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("SignIn");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleVariant = useCallback(() => {
    if (variant === "SignIn") {
      setVariant("SignUp");
    } else {
      setVariant("SignIn");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "SignUp") {
      //TODO SignUp
    }

    if (variant === "SignIn") {
      //TODO SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // TODO Social Auth
  };

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
    >
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "SignUp" && (
            <Input
              id="username"
              label="Username"
              register={register}
              errors={errors}
              type="text"
            />
          )}
          <Input
            id="email"
            label="Email"
            register={register}
            errors={errors}
            type="email"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button fullWidth disabled={isLoading} type="submit">
              {variant === "SignIn" ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Atau lanjut menggunakan
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsTwitter}
              onClick={() => socialAction("twitter")}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "SignIn" ? "Belum punya akun?" : "Sudah punya akun?"}
          </div>
          <div className="underline cursor-pointer" onClick={toggleVariant}>
            {variant === "SignIn" ? "Buat akun baru" : "Masuk dengan akun lama"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
