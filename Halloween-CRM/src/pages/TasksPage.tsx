import AddButton from "../components/AddButton";
import Layout from "../components/Layout";
import { Box, Pagination } from "@mui/material";
import TasksTable from "../components/TasksTable";

const TasksPage: React.FC = () => {
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
          Tareas
        </h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",

            marginBottom: 2,
          }}
        >
          <AddButton label="Agregar Tarea" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-end",
          }}
        >
          <TasksTable />
          <Pagination />
        </Box>
      </Box>
    </Layout>
  );
};

export default TasksPage;
