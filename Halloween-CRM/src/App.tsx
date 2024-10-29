import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import CollaboratorsPage from "./pages/CollaboratorsPage";
import { Register } from "./components/Register";
import ParticipantsPage from "./pages/ParticipantsPage";
import OpportunityPage from "./pages/OpportunityPage";
import TasksPage from "./pages/TasksPage";
import PanelPage from "./pages/PanelPage";
import { UserView } from "./pages/UserView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userview" element={<UserView/>}/>
        <Route path="/panel" element={<PanelPage />} />
        <Route path="/colaboradores" element={<CollaboratorsPage />} />
        <Route path="/participantes" element={<ParticipantsPage />} />
        <Route path="/oportunidades" element={<OpportunityPage />} />
        <Route path="/tareas" element={<TasksPage />} />
      </Routes>
    </>
  );
}

export default App;
