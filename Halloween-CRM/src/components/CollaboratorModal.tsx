import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Swal from "sweetalert2";
import { Collaborator } from "./CollaboratorTable";
import { useState, useEffect } from "react";

interface CollaboratorModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (collaborator: Collaborator) => void;
  collaborator?: Collaborator | null;
}

const CollaboratorModal: React.FC<CollaboratorModalProps> = ({
  open,
  onClose,
  onSubmit,
  collaborator,
}) => {
  const [formState, setFormState] = useState<Omit<Collaborator, "_id">>({
    name:"",
    email: "",
    phone: "",
    company: "",
    password: "",
  });

  useEffect(() => {
    if (collaborator) {
      setFormState({
        name: collaborator.name,
        email: collaborator.email,
        phone: collaborator.phone,
        company: collaborator.company,
        password: "", 
      });
    } else {
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        password: "",
      });
    }
  }, [collaborator,open]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const collaboratorData = collaborator && collaborator._id
    ? { _id: collaborator._id, ...formState }  // Si existe, incluir el `_id`.
    : { ...formState } as Collaborator; 

    onSubmit(collaboratorData);
    // Muestra un mensaje de éxito con SweetAlert2
    Swal.fire({
      icon: "success",
      title: "¡Guardado exitosamente!",
      showConfirmButton: false,
      timer: 1500, // El mensaje se cierra automáticamente después de 1.5 segundos
    });

    onClose(); // Cierra el modal
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit, // Cambia la lógica de envío aquí
      }}
    >
      <DialogTitle>
        {collaborator ? "Editar Colaborador" : "Agregar un Nuevo Colaborador"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Completa todos los campos con los datos del colaborador
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          label="Nombre"
          name="name"
          type="text"
          fullWidth
          variant="outlined"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
        <TextField
          required
          margin="dense"
          name="email"
          label="Correo Electrónico"
          type="email"
          fullWidth
          variant="outlined"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        />
        <TextField
          required
          margin="dense"
          label="Teléfono"
          name="phone"
          type="tel"
          fullWidth
          variant="outlined"
          value={formState.phone}
          onChange={(e) =>
            setFormState({ ...formState, phone: e.target.value })
          }
        />
        <TextField
          required
          margin="dense"
          label="Empresa"
          name="company"
          type="text"
          fullWidth
          variant="outlined"
          value={formState.company}
          onChange={(e) =>
            setFormState({ ...formState, company: e.target.value })
          }
        />
        <TextField
          required
          margin="dense"
          label="Contraseña"
          name="password"
          type="password"
          fullWidth
          variant="outlined"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button type="submit">Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CollaboratorModal;
