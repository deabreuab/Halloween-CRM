import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Box } from "@mui/material";
import { Resume } from "../components/Resume";
import { Calendar } from "../components/Calendar";
import { TaskStatusPie } from "../components/TaskStatusPie";
import { OpportunityChart } from "../components/OpportunityChart";
import { Collaborator } from "../components/CollaboratorTable";

const PanelPage: React.FC = () => {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollaborators = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:8000/home/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Error al obtener los colaboradores");
        }

        const data = await response.json();
        setCollaborators(data.findUser);
      } catch (error: any) {
        setError("Error al cargar los colaboradores");
      } finally {
        setLoading(false);
      }
    };

    fetchCollaborators();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
      <Resume totalCollaborators={collaborators.length} />
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Calendar />
        <TaskStatusPie />
        <OpportunityChart />
      </Box>
    </Layout>
  );
};

export default PanelPage;
