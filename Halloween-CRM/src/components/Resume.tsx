import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import GroupIcon from "@mui/icons-material/Group";
interface PanelProps {
  totalCollaborators: number;
  totalParticipants: number;
  tickets: number;
  opportunity: number;
}
export const Resume: React.FC<PanelProps> = ({
  totalCollaborators,
  totalParticipants,
  tickets,
  opportunity,
}) => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#148386",
            dark: "#23A2A6",
          },
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <Box
          sx={{
            width: 250,
            height: 150,
            alignItems: "center",
            borderRadius: 1,
            bgcolor: "primary.main",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <Box sx={{ width: 125 }}>
            <h2
              style={{
                color: "white",
                fontFamily: "Roboto, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              Total Participantes
            </h2>
            <h3 style={{ color: "white", fontFamily: "Roboto, sans-serif" }}>
              {totalParticipants}
            </h3>
          </Box>
          <Box sx={{ width: 100, color: "white" }}>
            <GroupIcon sx={{ fontSize: 50 }} />
          </Box>
        </Box>

        <Box
          sx={{
            width: 250,
            height: 150,
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <Box sx={{ width: 125 }}>
            <h2
              style={{
                color: "white",
                fontFamily: "Roboto, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              Total de Colaboradores
            </h2>
            <h3 style={{ color: "white", fontFamily: "Roboto, sans-serif" }}>
              {totalCollaborators}
            </h3>
          </Box>
        </Box>
        <Box
          sx={{
            width: 250,
            height: 150,
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <Box sx={{ width: 125 }}>
            <h2
              style={{
                color: "white",
                fontFamily: "Roboto, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              Oportunidades en proceso
            </h2>
            <h3 style={{ color: "white", fontFamily: "Roboto, sans-serif" }}>
              {opportunity}
            </h3>
          </Box>
        </Box>
        <Box
          sx={{
            width: 250,
            height: 150,
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          {" "}
          <Box sx={{ width: 125 }}>
            <h2
              style={{
                color: "white",
                fontFamily: "Roboto, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              Entradas vendidas
            </h2>
            <h3 style={{ color: "white", fontFamily: "Roboto, sans-serif" }}>
              {tickets}
            </h3>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
