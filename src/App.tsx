import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import GlobalCSS from "./global.css";
import { defaultTheme } from "./theme";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";

interface ProtectedProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedProps) =>
  isAuthenticated ? children : <Navigate to="/login" replace />;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home">
          <ProtectedRoute isAuthenticated={true}>
            <h1>HOME</h1>
          </ProtectedRoute>
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} style={{ borderRadius: "10px" }} />
    </ThemeProvider>
  );
}

export default App;
