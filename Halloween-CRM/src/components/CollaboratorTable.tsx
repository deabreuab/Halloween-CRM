import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export interface Collaborator {
  name: string;
  email: string;
  phone: string;
  company: string;
}

export interface CollaboratorsTableProps {
  collaborators: Collaborator[];
}

export const mockData: Collaborator[] = [
  {
    name: "Jon Snow",
    email: "jon.snow@winterfell.com",
    phone: "123-456-7890",
    company: "Night's Watch",
  },
  {
    name: "Cersei Lannister",
    email: "cersei@lannister.com",
    phone: "098-765-4321",
    company: "Lannister Inc.",
  },
  {
    name: "Jaime Lannister",
    email: "jaime@lannister.com",
    phone: "234-567-8901",
    company: "Lannister Inc.",
  },
  {
    name: "Arya Stark",
    email: "arya@stark.com",
    phone: "345-678-9012",
    company: "Stark Enterprises",
  },
  {
    name: "Daenerys Targaryen",
    email: "daenerys@targaryen.com",
    phone: "456-789-0123",
    company: "Targaryen LLC",
  },
];
const CollaboratorsTable: React.FC<CollaboratorsTableProps> = () => {
  const [collaborators, setCollaborators] = useState<Collaborator[]>(mockData); // Usando datos simulados
  const [loading, setLoading] = useState<boolean>(false); // Cambia a true si necesitas simular la carga
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchCollaborators = async () => {
      setLoading(true);
      try {
        // Simulando un retraso en la carga
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCollaborators(mockData);
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
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Correo Electronico</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>Empresa</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {collaborators.map((collaborator, index) => (
            <TableRow key={index}>
              <TableCell>{collaborator.name}</TableCell>
              <TableCell>{collaborator.email}</TableCell>
              <TableCell>{collaborator.phone}</TableCell>
              <TableCell>{collaborator.company}</TableCell>
              <TableCell>
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollaboratorsTable;
