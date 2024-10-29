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
export interface Opportunity {
  name: string;
  description: string;
  type: string;
  status: string;
  start_date: string;
  end_date: string;
  createBy: string;
}
const formatDate = (start_date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(start_date).toLocaleDateString(undefined, options);
};
const OpportunityTable: React.FC = () => {
  const [data, setData] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOpportunities = async () => {
      setLoading(true);
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
        setData(data.opportunities || []);
        console.log(data);
      } catch (error: any) {
        setError("Error al cargar las oportunidades");
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
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
              <TableCell>{formatDate(opportunity.start_date)}</TableCell>
              <TableCell>{formatDate(opportunity.end_date)}</TableCell>
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
