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
  type: string;
  status: string;
  fechaInicio: string;
  fechaCierre: string;
  responsable: string;
}

const mockOpportunities: Opportunity[] = [
  {
    name: "Proyecto Alpha",
    type: "Nuevo Cliente",
    status: "En Progreso",
    fechaInicio: "2024-01-15",
    fechaCierre: "2024-03-20",
    responsable: "Carlos Mendoza",
  },
  {
    name: "Expansión Beta",
    type: "Expansión de Cuenta",
    status: "Completada",
    fechaInicio: "2023-10-05",
    fechaCierre: "2024-01-10",
    responsable: "Lucía Fernández",
  },
  {
    name: "Renovación Gamma",
    type: "Renovación",
    status: "Pendiente",
    fechaInicio: "2024-02-01",
    fechaCierre: "2024-06-30",
    responsable: "Miguel Hernández",
  },
  {
    name: "Desarrollo Delta",
    type: "Nuevo Proyecto",
    status: "En Progreso",
    fechaInicio: "2024-03-01",
    fechaCierre: "2024-05-30",
    responsable: "Sofía Ruiz",
  },
  {
    name: "Proyecto Épsilon",
    type: "Cliente Recurrente",
    status: "Cancelada",
    fechaInicio: "2024-01-20",
    fechaCierre: "2024-02-15",
    responsable: "José Gómez",
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
            <TableCell>name</TableCell>
            <TableCell>type</TableCell>
            <TableCell>status</TableCell>
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
              <TableCell>{opportunity.type}</TableCell>
              <TableCell>{opportunity.status}</TableCell>
              <TableCell>{opportunity.fechaInicio}</TableCell>
              <TableCell>{opportunity.fechaCierre}</TableCell>
              <TableCell>{opportunity.responsable}</TableCell>
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
