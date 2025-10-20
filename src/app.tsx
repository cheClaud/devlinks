import { Route, Routes } from "react-router";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashBoardPage from "./pages/dashboard";
import ProfilePage from "./pages/profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoardPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
