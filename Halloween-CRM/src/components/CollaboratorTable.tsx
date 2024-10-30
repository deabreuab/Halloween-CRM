// import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export interface Collaborator {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  password?:string;
}

export interface CollaboratorsTableProps {
  collaborators: Collaborator[];
  onDelete: (id: string) => void;
  onEdit: (collaborator: Collaborator) => void; 
}

const CollaboratorsTable: React.FC<CollaboratorsTableProps> = ({collaborators,
  onDelete,onEdit}) => {
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
          {collaborators.map((collaborator) => (
            <TableRow key={collaborator._id}>
              <TableCell>{collaborator.name}</TableCell>
              <TableCell>{collaborator.email}</TableCell>
              <TableCell>{collaborator.phone}</TableCell>
              <TableCell>{collaborator.company}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(collaborator)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(collaborator._id)}>
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
