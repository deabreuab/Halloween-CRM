import { Route, Routes } from "react-router-dom";
import CollaboratorsPage from "./pages/CollaboratorsPage";
import ParticipantsPage from "./pages/ParticipantsPage";
import OpportunityPage from "./pages/OpportunityPage";
import TasksPage from "./pages/TasksPage";
import PanelPage from "./pages/PanelPage";

function App() {
  return (
    <>
      <Routes>
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
