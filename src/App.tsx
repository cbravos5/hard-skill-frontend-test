import { Login } from "./pages/Login";
import { ThemeProvider } from "styled-components";
import GlobalCSS from "./global.css";
import { defaultTheme } from "./theme";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <Login />
      <ToastContainer autoClose={2500} style={{ borderRadius: "10px" }} />
    </ThemeProvider>
  );
}

export default App;
