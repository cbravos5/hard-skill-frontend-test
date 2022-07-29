import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import GlobalCSS from "./global.css";
import { defaultTheme } from "./theme";
import { ToastContainer } from "react-toastify";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

interface ProtectedProps {
  isAuthenticated: boolean;
}

const ProtectedRoute = ({ isAuthenticated }: ProtectedProps) =>
  isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={<ProtectedRoute isAuthenticated={false} />}
        >
          <Route path="/home" element={<h1>HOME</h1>} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} style={{ borderRadius: "10px" }} />
    </ThemeProvider>
  );
}

export default App;
