import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Swal from "sweetalert2";
import { Collaborator } from './CollaboratorTable';


interface CollaboratorModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (collaborator: Omit<Collaborator, "_id">) => void;
}

const CollaboratorModal: React.FC<CollaboratorModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries()) as Omit<Collaborator, "_id">;
    console.log(formJson);
    onSubmit(formJson);

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
      <DialogTitle>Agregar un Nuevo Colaborador</DialogTitle>
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
        />
        <TextField
          required
          margin="dense"
          name="email"
          label="Correo Electrónico"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          label="Teléfono"
          name="phone"
          type="tel"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          label="Empresa"
          name="company"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          label="Contraseña"
          name="password"
          type="password"
          fullWidth
          variant="outlined"
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
