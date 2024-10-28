import {
  List,
  ListItemText,
  Drawer,
  Toolbar,
  ListItemButton,
} from "@mui/material";

const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Toolbar />
      <List sx={{ width: 240 }}>
        {[
          "Panel",
          "Colaboradores",
          "Participantes",
          "Oportunidades",
          "Tareas",
        ].map((text) => (
          <ListItemButton key={text}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
