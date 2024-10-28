import Layout from "../components/Layout";

import { Box } from "@mui/material";

const PanelPage: React.FC = () => {
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
          Panel
        </h1>
      </Box>
    </Layout>
  );
};

export default PanelPage;
