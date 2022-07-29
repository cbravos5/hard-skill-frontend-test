import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { AxiosInstance } from "@/configs/axiosConfig";
import React from "react";
import { LoginContainer } from "./style";
import { useForm } from "react-hook-form";
import { GlassButton } from "@/components/GlassButton";
import { Input } from "@/components/Input";

interface FormData {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <LoginContainer>
      <img src={LeadSoftLogo} alt="Logotipo LeadSoft" />
      <p>Sistema de gerência de pessoas</p>
      <form action="login" onSubmit={submitHandler}>
        <Input
          className="input"
          type="text"
          placeholder="Usuário"
          {...register("username", { required: true })}
          error={errors.username ? true : false}
        />
        <Input
          className="input"
          type="password"
          placeholder="Senha"
          {...register("password", { required: true })}
          error={errors.password ? true : false}
        />
        <GlassButton className="submit" type="submit" label="login" />
      </form>
    </LoginContainer>
  );
};
