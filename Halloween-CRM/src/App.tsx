import { Route, Routes } from "react-router-dom";
import CollaboratorsPage from "./pages/CollaboratorsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/collaborators" element={<CollaboratorsPage />} />
      </Routes>
    </>
  );
}

export default App;
