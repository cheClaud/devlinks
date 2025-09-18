import { Route, Routes } from "react-router";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
