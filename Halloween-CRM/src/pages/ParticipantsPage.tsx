import AddButton from "../components/AddButton";
import Layout from "../components/Layout";
import ParticipantTable from "../components/ParticipantTable";
import SearchBar from "../components/SearchBar";
import { Box, Pagination } from "@mui/material";

const ParticipantsPage: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ padding: 3 }}>
        <h1
          style={{
            fontSize: "2rem",
            color: "#467E91",
            fontWeight: "bold",
            marginBottom: "1rem",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Participantes
        </h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <SearchBar />
          <AddButton label="Añadir Participante" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-end",
          }}
        >
          <ParticipantTable participants={[]} />
          <Pagination />
        </Box>
      </Box>
    </Layout>
  );
};

export default ParticipantsPage;
