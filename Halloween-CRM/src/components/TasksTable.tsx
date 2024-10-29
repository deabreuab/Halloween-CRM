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
interface Tasks {
  user_id: string;
  opportunity_id: string;
  id: string;
  title: string;
  description: string;
  status: "pending" | "in_progress" | "completed";
  assigned_to: string[];
  due_date: string;
  assigned_date: string;
  createdBy?: string;
  modifiedAt?: string;
  modifiedBy?: string;
}
const formatDate = (assigned_date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(assigned_date).toLocaleDateString(undefined, options);
};
const TasksTable: React.FC = () => {
  const [data, setData] = useState<Tasks[]>([]);
  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await fetch("http://localhost:8000/home/tasks"); // URL de tu backend
        if (!response.ok) {
          throw new Error("Error en la red");
        }
        const tasks: Tasks[] = await response.json(); // Convertir la respuesta a JSON
        setData(tasks); // Actualizar el estado con los datos
        console.log(tasks);
      } catch (error) {
        console.error("Error al cargar las tareas", error);
      }
    };

    fetchOpportunities();
  }, []);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Fecha Inicio</TableCell>
            <TableCell>Fecha Cierre</TableCell>
            <TableCell>Responsable</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((tasks, index) => (
            <TableRow key={index}>
              <TableCell>{tasks.title}</TableCell>
              <TableCell>{tasks.description}</TableCell>
              <TableCell>{tasks.status}</TableCell>
              <TableCell>{formatDate(tasks.assigned_date)}</TableCell>
              <TableCell>{formatDate(tasks.due_date)}</TableCell>
              <TableCell>{tasks.createdBy}</TableCell>
              <TableCell id="acciones">
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

export default TasksTable;
