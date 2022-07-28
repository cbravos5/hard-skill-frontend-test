import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";
import { LoginContainer } from "./style";

export const Login: React.FC = () => {
  return (
    <LoginContainer>
      <img src={LeadSoftLogo} alt="Logotipo LeadSoft" />
      <p>Sistema de gerência de pessoas</p>
      <form action="login">
        <input type="text" placeholder="Usuário" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Login</button>
      </form>
    </LoginContainer>
  );
};
