import { Route, Routes } from "react-router";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashoardPage from "./pages/dashboard";
import ProfilePage from "./pages/profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashoardPage />} />
      <Route path="/dashboard" element={<DashoardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
