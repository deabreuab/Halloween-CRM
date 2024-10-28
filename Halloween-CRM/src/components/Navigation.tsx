import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

import { useDemoRouter } from "@toolpad/core/internal";
import CollaboratorsPage from "../pages/CollaboratorsPage";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Panel",
  },
  {
    segment: "colaboradores",
    title: "Colaboradores",
    icon: <PeopleIcon />,
  },
  {
    segment: "participantes",
    title: "Participantes",
    icon: <AssignmentIcon />,
  },
  {
    segment: "oportunidades",
    title: "Oportunidades",
    icon: <DashboardIcon />,
  },
  {
    segment: "tareas",
    title: "Tareas",
    icon: <AssignmentIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  // Renderiza el contenido según la ruta actual
  switch (pathname) {
    case "/colaboradores":
      return <CollaboratorsPage />;
    // Agrega otros casos para las secciones adicionales
    default:
      return <Typography>Contenido para {pathname}</Typography>;
  }
}

export default function AppProviderBasic() {
  const router = useDemoRouter("/colaboradores"); // Usa el enrutador integrado

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
