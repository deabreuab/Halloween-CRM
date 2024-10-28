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
interface Opportunity {
  name: string;
  description: string;
  type: string;
  status: string;
  start_date: string;
  end_date: string;
  createBy: string;
}

const mockOpportunities: Opportunity[] = [
  {
    name: "Proyecto Alpha",
    description: "Prospecto con potencial de nuevo cliente.",
    type: "Nuevo Cliente",
    status: "En Progreso",
    start_date: "2024-01-15",
    end_date: "2024-03-20",
    createBy: "Carlos Mendoza",
  },
  {
    name: "Expansión Beta",
    description: "Expansión de servicios para cuenta actual.",
    type: "Expansión de Cuenta",
    status: "Completada",
    start_date: "2023-10-05",
    end_date: "2024-01-10",
    createBy: "Lucía Fernández",
  },
  {
    name: "Renovación Gamma",
    description: "Renovación anual del contrato.",
    type: "Renovación",
    status: "Pendiente",
    start_date: "2024-02-01",
    end_date: "2024-06-30",
    createBy: "Miguel Hernández",
  },
  {
    name: "Desarrollo Delta",
    description: "Desarrollo de nueva herramienta personalizada.",
    type: "Nuevo Proyecto",
    status: "En Progreso",
    start_date: "2024-03-01",
    end_date: "2024-05-30",
    createBy: "Sofía Ruiz",
  },
  {
    name: "Proyecto Épsilon",
    description: "Recuperación de cliente recurrente.",
    type: "Cliente Recurrente",
    status: "Cancelada",
    start_date: "2024-01-20",
    end_date: "2024-02-15",
    createBy: "José Gómez",
  },
];

const OpportunityTable: React.FC = () => {
  const [data, setData] = useState<Opportunity[]>(mockOpportunities);
  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(mockOpportunities);
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
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((opportunity, index) => (
            <TableRow key={index}>
              <TableCell>{opportunity.name}</TableCell>
              <TableCell>{opportunity.description}</TableCell>
              <TableCell>{opportunity.type}</TableCell>
              <TableCell>{opportunity.status}</TableCell>
              <TableCell>{opportunity.start_date}</TableCell>
              <TableCell>{opportunity.end_date}</TableCell>
              <TableCell>{opportunity.createBy}</TableCell>
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

export default OpportunityTable;
