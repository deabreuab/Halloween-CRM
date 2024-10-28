import { Route, Routes } from "react-router-dom";
import CollaboratorsPage from "./pages/CollaboratorsPage";
import ParticipantsPage from "./pages/ParticipantsPage";
import OpportunityPage from "./pages/OpportunityPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/colaboradores" element={<CollaboratorsPage />} />
        <Route path="/participantes" element={<ParticipantsPage />} />
        <Route path="/oportunidades" element={<OpportunityPage />} />
      </Routes>
    </>
  );
}

export default App;
