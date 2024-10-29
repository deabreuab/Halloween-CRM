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

import { useEffect, useState } from "react";

interface Participant {
  name: string;
  email: string;
  tickets: number;
}

const ParticipantTable: React.FC = () => {
  const [data, setData] = useState<Participant[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchParticipants = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token"); // Si necesitas autenticación
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
        setData(data.participants || []); // Asegúrate de ajustar esto según la estructura de tu respuesta
      } catch (error: any) {
        setError("Error al cargar los participantes");
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
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
            <TableCell>Tickets</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((participant, index) => (
            <TableRow key={index}>
              <TableCell>{participant.name}</TableCell>
              <TableCell>{participant.email}</TableCell>
              <TableCell>{participant.tickets}</TableCell>
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

export default ParticipantTable;
