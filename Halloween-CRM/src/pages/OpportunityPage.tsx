import AddButton from "../components/AddButton";
import Layout from "../components/Layout";
import OpportunityTable from "../components/OpportunityTable";

import SearchBar from "../components/SearchBar";
import { Box, Pagination } from "@mui/material";

const OpportunityPage: React.FC = () => {
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
          Oportunidades
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
          <AddButton label="Nueva Oportunidad" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-end",
          }}
        >
          <OpportunityTable />
          <Pagination />
        </Box>
      </Box>
    </Layout>
  );
};

export default OpportunityPage;
