import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useEffect,useState } from "react";
// import { deepOrange, deepPurple } from "@mui/material/colors";

const TopBar: React.FC = () => {
  const drawerWidth = 240;
  const [userName, setUserName] = useState<string | null>(
    localStorage.getItem("userName")
  );

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
  const initials = getInitials(userName);
  const avatarColor = generateRandomColor();

  return (
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
        <Avatar sx={{ bgcolor: avatarColor }}>{initials}</Avatar>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
