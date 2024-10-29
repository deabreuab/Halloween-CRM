import Layout from "../components/Layout";
import { Box } from "@mui/material";
import { Resume } from "../components/Resume";
import { Calendar } from "../components/Calendar";
import { TaskStatusPie } from "../components/TaskStatusPie"
 import { OpportunityChart } from "../components/OpportunityChart"

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
      <Box>
        <Resume />
        <Calendar/>
        <TaskStatusPie/>
    <OpportunityChart/>
      </Box>
    </Layout>
  );
};

export default PanelPage;
