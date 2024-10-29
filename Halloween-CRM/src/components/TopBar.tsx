import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useEffect, useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

const TopBar: React.FC = () => {
  const drawerWidth = 240;
  const [userName, setUserName] = useState<string | null>(
    localStorage.getItem("userName")
  );
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    setUserName(storedUserName);
  }, []);

  const getInitials = (name: string | null) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase();
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUserName(null);
    handleClose();
    navigate("/login"); 
  };

  const initials = getInitials(userName);
  const avatarColor = generateRandomColor();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#467E91",
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
        >
          <IconButton color="inherit">
            <NotificationsNoneIcon />
          </IconButton>
          <Avatar sx={{ bgcolor: avatarColor }} onClick={handleClickOpen}>
            {initials}
          </Avatar>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cerrar Sesión</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas cerrar sesión?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleLogout} color="secondary" autoFocus>
            <ExitToAppIcon sx={{ marginRight: 1 }} /> Cerrar Sesión
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default TopBar;
