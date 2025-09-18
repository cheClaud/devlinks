import { Route, Routes } from "react-router";
import LoginPage from "./pages/login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<LoginPage />} />
    </Routes>
  );
}
