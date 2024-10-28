import AddButton from "../components/AddButton";
import CollaboratorsTable from "../components/CollaboratorTable";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import { Box, Pagination } from "@mui/material";

const CollaboratorsPage: React.FC = () => {
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
          Colaboradores
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
          <AddButton label="Nuevo colaborador" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-end",
          }}
        >
          <CollaboratorsTable collaborators={[]} />
          <Pagination />
        </Box>
      </Box>
    </Layout>
  );
};

export default CollaboratorsPage;
