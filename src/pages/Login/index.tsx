import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { AxiosInstance } from "@/configs/axiosConfig";
import React from "react";
import { LoginContainer } from "./style";
import { useForm } from "react-hook-form";
import { GlassButton } from "@/components/GlassButton";
import { Input } from "@/components/Input";
import { toast } from "react-toastify";

interface FormData {
  username: string;
  password: string;
}

const isValidEmail = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler = handleSubmit(async ({ username, password }) => {
    try {
      const response = await AxiosInstance.post("/Auth/Login", {
        username,
        password,
      });

      if (response.status === 200) console.log("LOGADO");
    } catch (error: any) {
      console.log(error.response);
      if (error.response.data) toast.error("Usuário e/ou senha inválidos");
    }
  });

  const handleUserValidation = (username: string) =>
    isValidEmail(username) || "Usuário deve ser um email válido";

  return (
    <LoginContainer>
      <img src={LeadSoftLogo} alt="Logotipo LeadSoft" />
      <p>Sistema de gerência de pessoas</p>
      <form action="login" onSubmit={submitHandler}>
        <Input
          className="input"
          type="text"
          placeholder="Usuário"
          {...register("username", {
            required: "Campo obrigatório",
            validate: handleUserValidation,
          })}
          error={errors.username?.message}
        />
        <Input
          className="input"
          type="password"
          placeholder="Senha"
          {...register("password", {
            required: { value: true, message: "Campo obrigatório" },
          })}
          error={errors.password?.message}
        />
        <GlassButton className="submit" type="submit" label="login" />
      </form>
    </LoginContainer>
  );
};
