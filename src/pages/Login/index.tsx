import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { AxiosInstance } from "@/configs/axiosConfig";
import React from "react";
import { LoginContainer } from "./style";
import { useForm } from "react-hook-form";
import { GlassButton } from "@/components/GlassButton";

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

    //AxiosInstance.post("/Auth/Login", {});
  });

  return (
    <LoginContainer>
      <img src={LeadSoftLogo} alt="Logotipo LeadSoft" />
      <p>Sistema de gerência de pessoas</p>
      <form action="login" onSubmit={submitHandler}>
        <div className="input">
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Usuário"
          />
          {errors.username && <span>Campo obrigatório</span>}
        </div>
        <div className="input">
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Senha"
          />
          {errors.password && <span>Campo obrigatório</span>}
        </div>
        <GlassButton className="submit" type="submit" label="login" />
      </form>
    </LoginContainer>
  );
};
