// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ROUTES from "./routes";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./routes/ProtectedRoute";

// export default function App() {
//   return (
//     <Routes>
//       <Route path={ROUTES.LOGIN} element={<Login />} />
//       {/* <Route path="/register" element={<Register />} /> */}
//       {/* <Route path="/dashboard" element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         } 
//       /> */}
//     </Routes>
//   );
// }
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <h1 className="text-red-600 text-2xl font-bold rounded-lg bg-red p-6 shadow">
        Tailwind is working 🎉
      </h1>
    </div>
  );
}