import AddBotton from "../components/AddBotton";
import CollaboratorsTable from "../components/CollaboratorTable";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import { Box, Pagination } from "@mui/material";

const CollaboratorsPage: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <SearchBar />
          <AddBotton />
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
