import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import CollaboratorsPage from "./pages/CollaboratorsPage";
import { Register } from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collaborators" element={<CollaboratorsPage />} />
      </Routes>
    </>
  );
}

export default App;
