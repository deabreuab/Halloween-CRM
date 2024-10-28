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
interface ParticipantTableProps {
  participants: Participant[];
}

const mockData: Participant[] = [
  { name: "Jon Snow", email: "jon.snow@winterfell.com", tickets: 5 },
  { name: "Cersei Lannister", email: "cersei@lannister.com", tickets: 2 },
  { name: "Jaime Lannister", email: "jaime@lannister.com", tickets: 3 },
];
const ParticipantTable: React.FC<ParticipantTableProps> = ({
  participants = mockData,
}) => {
  const [data, setData] = useState<Participant[]>(participants);
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(mockData);
      } catch (error: any) {
        console.error("Error al cargar los colaboradores");
      }
    };

    fetchParticipants();
  }, [participants]);
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
