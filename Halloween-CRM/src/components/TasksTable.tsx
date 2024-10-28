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
  name: string;
  description: string;
  type: string;
  status: string;
  start_date: string;
  end_date: string;
  createBy: string;
  assign: string;
}
const mockTasks: Tasks[] = [
  {
    name: "Desarrollo de Interfaz",
    description: "Crear la interfaz de usuario para el proyecto Alpha.",
    type: "Desarrollo",
    status: "En Progreso",
    start_date: "2024-01-10",
    end_date: "2024-02-20",
    createBy: "Carlos Mendoza",
    assign: "Lucía Fernández",
  },
  {
    name: "Revisión de Código",
    description: "Revisar el código del módulo de autenticación.",
    type: "Revisión",
    status: "Pendiente",
    start_date: "2024-01-15",
    end_date: "2024-01-30",
    createBy: "Sofía Ruiz",
    assign: "Miguel Hernández",
  },
  {
    name: "Documentación del Proyecto",
    description: "Elaborar la documentación técnica del proyecto Beta.",
    type: "Documentación",
    status: "Completada",
    start_date: "2023-12-01",
    end_date: "2023-12-15",
    createBy: "José Gómez",
    assign: "Carlos Mendoza",
  },
  {
    name: "Implementación de API",
    description: "Implementar la API REST para la gestión de usuarios.",
    type: "Desarrollo",
    status: "En Progreso",
    start_date: "2024-02-01",
    end_date: "2024-03-15",
    createBy: "Lucía Fernández",
    assign: "Sofía Ruiz",
  },
  {
    name: "Pruebas de Usuario",
    description: "Realizar pruebas de usuario en la aplicación.",
    type: "Pruebas",
    status: "Pendiente",
    start_date: "2024-03-10",
    end_date: "2024-03-20",
    createBy: "Miguel Hernández",
    assign: "José Gómez",
  },
];

const TasksTable: React.FC = () => {
  const [data, setData] = useState<Tasks[]>(mockTasks);
  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(mockTasks);
      } catch (error: any) {
        console.error("Error al cargar los colaboradores");
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
            <TableCell>Tipo</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Fecha Inicio</TableCell>
            <TableCell>Fecha Cierre</TableCell>
            <TableCell>Responsable</TableCell>
            <TableCell>Asignado a:</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((tasks, index) => (
            <TableRow key={index}>
              <TableCell>{tasks.name}</TableCell>
              <TableCell>{tasks.description}</TableCell>
              <TableCell>{tasks.type}</TableCell>
              <TableCell>{tasks.status}</TableCell>
              <TableCell>{tasks.start_date}</TableCell>
              <TableCell>{tasks.end_date}</TableCell>
              <TableCell>{tasks.createBy}</TableCell>
              <TableCell>{tasks.assign}</TableCell>
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
