import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import GroupIcon from "@mui/icons-material/Group";
 
export const Resume = () => {
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
            <h2 style={{ color: "white", fontFamily: "Roboto, sans-serif" , fontSize: "1.2rem"}}>
              Total Participantes
            </h2>
            <h3 style={{ color: "white", fontFamily: "Roboto, sans-serif" }}>
              25
            </h3>
          </Box>
          <Box sx={{ width: 125 }}>
            <GroupIcon sx={{ fontSize: 50 }}/>
          </Box>
        </Box>
 
        <Box
          sx={{
            width: 250,
            height: 150,
            borderRadius: 1,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        ></Box>
        <Box
          sx={{
            width: 250,
            height: 150,
            borderRadius: 1,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        ></Box>
        <Box
          sx={{
            width: 250,
            height: 150,
            borderRadius: 1,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        ></Box>
      </Box>
    </ThemeProvider>
  );
};
