import { useState, useEffect } from "react";
import AddButton from "../components/AddButton";
import CollaboratorsTable, {
  Collaborator,
} from "../components/CollaboratorTable";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import { Box, Pagination } from "@mui/material";
import CollaboratorModal from "../components/CollaboratorModal";
// import CollaboratorModalEdit from "../components/CollaboratorModalEdit";

const CollaboratorsPage: React.FC = () => {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);
  const [openModal, setOpenModal] = useState(false); // Estado para controlar la apertura del modal

  const fetchCollaborators = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://halloween-crm-qjpe.vercel.app/home/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Error al obtener los colaboradores");
      const data = await response.json();
      setCollaborators(data.findUser);
    } catch (error) {
      console.error(error);
    }
  };

  const createCollaborator = async (
    newCollaborator: Omit<Collaborator, "_id">
  ) => {
    const token = localStorage.getItem("token");
    const response = await fetch("https://halloween-crm-qjpe.vercel.app/home/user/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCollaborator),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al crear el colaborador");
    }
    await fetchCollaborators();
    handleCloseModal();
  };

  const editCollaborator = async (updatedCollaborator: Collaborator) => {
    const { _id, ...rest } = updatedCollaborator;
    const token = localStorage.getItem("token");
    const response = await fetch(`https://halloween-crm-qjpe.vercel.app/home/user/${_id}`, {
      method: "PUT", 
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rest),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al actualizar el colaborador");
    }
    await fetchCollaborators();
    handleCloseModal();
  };

  const deleteCollaborator = async (id: string) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`https://halloween-crm-qjpe.vercel.app/home/user/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await fetchCollaborators();
    }
  };

  useEffect(() => {
    fetchCollaborators();
  }, []);

  const handleOpenModal = (collaborator: Collaborator | null = null) => {
    setSelectedCollaborator(collaborator);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCollaborator(null);
  };

  
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
          <AddButton label="Nuevo colaborador" onClick={() => handleOpenModal()} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-end",
          }}
        >
          <CollaboratorsTable
            collaborators={collaborators}
            onDelete={deleteCollaborator}
            onEdit={handleOpenModal}
          />
          <Pagination />
        </Box>
      </Box>
      <CollaboratorModal
        open={openModal}
        onClose={handleCloseModal}
        collaborator={selectedCollaborator}
        onSubmit={selectedCollaborator ? editCollaborator : createCollaborator}
      />
    </Layout>
  );
};

export default CollaboratorsPage;
