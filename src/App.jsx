import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import ROUTES from "@/routes/index.jsx";
import Cover from "@/pages/Cover.jsx";
import ChatBot from "@/pages/ChatBot";
import Survey from "@/pages/Survey.jsx";
import TestPage from "@/pages/TestPage.jsx";

// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  if(loading){
    return <Cover />;
  }
  return (
    <div className="font-display">
      <Routes>
      <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/tes" element={<TestPage />} />
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      /> */}
    </Routes>
    </div>
    
  );
}
