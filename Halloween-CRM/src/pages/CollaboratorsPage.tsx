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
  // const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);
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

  // const editCollaborator = async (updatedCollaborator: Omit<Collaborator, "_id"> & { _id: string }) => {
  //   const token = localStorage.getItem("token");
  //   const response = await fetch(`http://localhost:8000/home/user/${updatedCollaborator._id}`, {
  //     method: "PUT", // Usa PUT para actualizar
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedCollaborator),
  //   });

  //   if (!response.ok) {
  //     const errorData = await response.json();
  //     throw new Error(errorData.message || "Error al actualizar el colaborador");
  //   }
  //   await fetchCollaborators();
  //   handleCloseEditModal();
  // };

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

  const handleOpenModal = () => {
    // setSelectedCollaborator(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
          <AddButton label="Nuevo colaborador" onClick={handleOpenModal} />
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
          />
          <Pagination />
        </Box>
      </Box>
      <CollaboratorModal
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={createCollaborator}
      />
    </Layout>
  );
};

export default CollaboratorsPage;
