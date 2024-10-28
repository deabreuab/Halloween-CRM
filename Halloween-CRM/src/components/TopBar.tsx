import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const TopBar: React.FC = () => {
  const drawerWidth = 240;
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
        <Avatar />
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
