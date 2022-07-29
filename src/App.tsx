import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import GlobalCSS from "./global.css";
import { defaultTheme } from "./theme";
import { ToastContainer } from "react-toastify";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AuthContext, useAuthContext } from "./contexts/Auth";

interface ProtectedProps {
  isAuth: boolean;
}

const ProtectedRoute = ({ isAuth }: ProtectedProps) =>
  isAuth ? <Outlet /> : <Navigate to="/login" replace />;

export default function App() {
  const { isAuth } = useAuthContext();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path="/home" element={<h1>HOME</h1>} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} style={{ borderRadius: "10px" }} />
    </ThemeProvider>
  );
}
