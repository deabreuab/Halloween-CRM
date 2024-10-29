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
  const [participants, setParticipants] = useState<any[]>([]);
  const [opportunities, setOpportunities] = useState<any[]>([]);

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

  useEffect(() => {
    const fetchParticipants = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const token = localStorage.getItem("token"); // If authentication is needed
        const response = await fetch(
          "http://localhost:8000/home/participant/",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener los participantes");
        }

        const data = await response.json();
        setParticipants(data.participants || []); // Adjust this according to your response structure
      } catch (error: any) {
        setError("Error al cargar los participantes");
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  useEffect(() => {
    const fetchOpportunities = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8000/home/opportunities/",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Error al obtener las oportunidades");
        }
        const data = await response.json();
        setOpportunities(data.opportunities || []); // Adjust according to your response structure
      } catch (error: any) {
        setError("Error al cargar las oportunidades");
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  const totalTickets = participants.reduce((acc, participant) => {
    return acc + (participant.tickets?.length || 0); // Safely access tickets
  }, 0);
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
      <Resume
        totalCollaborators={collaborators.length}
        totalParticipants={participants.length}
        tickets={totalTickets}
        opportunity={
          opportunities.filter((o) => o.status === "Nuevo Tipo").length
        }
      />
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
