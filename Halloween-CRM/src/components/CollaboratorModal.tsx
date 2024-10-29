import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Swal from "sweetalert2";

interface CollaboratorModalProps {
  open: boolean;
  onClose: () => void;
}

const CollaboratorModal: React.FC<CollaboratorModalProps> = ({
  open,
  onClose,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button type="submit">Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CollaboratorModal;
