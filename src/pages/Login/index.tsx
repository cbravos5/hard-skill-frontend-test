import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { AxiosInstance } from "@/configs/axiosConfig";
import React, { useState } from "react";
import { LoginContainer } from "./style";
import { useForm } from "react-hook-form";
import { GlassButton } from "@/components/GlassButton";
import { Input } from "@/components/Input";
import { toast } from "react-toastify";
import { useAuthContext } from "@/contexts/Auth";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@/components/Spinner";

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

  const { setAuth } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = handleSubmit(async ({ username, password }) => {
    setLoading(true);

    try {
      const response = await AxiosInstance.post("/Auth/Login", {
        username,
        password,
      });

      if (response.status === 200) {
        sessionStorage.setItem("Authorization", response.data.Authorization);
        setAuth(true);
        navigate("/home");
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error.response);
      if (error.response.data) toast.error("Usuário e/ou senha inválidos");
    }
  });

  const handleUserValidation = (username: string) =>
    isValidEmail(username) || "Usuário deve ser um email válido";

  return (
    <LoginContainer>
      <Spinner loading={loading} color="dark" />
      <img src={LeadSoftLogo} alt="Logotipo LeadSoft" />
      <p>Sistema de gerência de pessoas</p>
      <form action="login" onSubmit={submitHandler}>
        <Input
          label="Usuário"
          className="input"
          type="text"
          {...register("username", {
            required: "Campo obrigatório",
            validate: handleUserValidation,
          })}
          error={errors.username?.message}
        />
        <Input
          label="Senha"
          className="input"
          type="password"
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
