import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ROUTES from "./routes/index.jsx";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      /> */}
    </Routes>
  );
}
