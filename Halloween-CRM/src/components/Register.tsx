import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  Divider,
  MenuItem,
} from "@mui/material";
import { Google, Facebook } from "@mui/icons-material";
export const Register = () => {
  return (
    <Box
      component="main"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#49545D",
        clipPath: "polygon(8% 12%, 100% 0%, 74% 100%, 14% 88%)",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: 2, color: "#9AA7B6" }}
      >
        Regístrate
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2, color: "white" }}>
        ¿Ya tienes una cuenta?{" "}
        <a href="#" style={{ color: "white", textDecoration: "underline" }}>
          Iniciar Sesión
        </a>
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: "400px",
          padding: 3,
          "& .MuiTextField-root": {
            backgroundColor: "rgba(90, 146, 165, 0.27)",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Nombre"
          variant="filled"
          fullWidth
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },
            "& .Mui-focused": {
              color: "white",
              "& .MuiInputLabel-root": { color: "white" },
            },
          }}
        />

        <TextField
          label="Celular"
          variant="filled"
          fullWidth
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },
            "& .Mui-focused": {
              color: "white",
              "& .MuiInputLabel-root": { color: "white" },
            },
          }}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Compañia"
            variant="filled"
            fullWidth
            sx={{
              flex: 1,
              input: { color: "white" },
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiFilledInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .Mui-focused": {
                color: "white",
                "& .MuiInputLabel-root": { color: "white" },
              },
            }}
          />
          <TextField
            label="Rol"
            variant="filled"
            fullWidth
            select
            defaultValue=""
            sx={{
              flex: 1,
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiFilledInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiSelect-select": { color: "white" },
              "& .Mui-focused": {
                color: "white",
                "& .MuiInputLabel-root": { color: "white" },
              },
            }}
          >
            <MenuItem value="Administrador">Administrador</MenuItem>
            <MenuItem value="Colaborador">Colaborador</MenuItem>
          </TextField>
        </Box>

        <TextField
          label="Contraseña"
          variant="filled"
          type="password"
          fullWidth
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },
            "& .Mui-focused": {
              color: "white",
              "& .MuiInputLabel-root": { color: "white" },
            },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#9AA7B6",
            color: "white",
            "&:hover": { backgroundColor: "#7B8E99" },
          }}
        >
          Registrarse
        </Button>

        <Divider sx={{ my: 2, color: "white", borderColor: "white" }}>
          con
        </Divider>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton>
            <Google sx={{ color: "#9AA7B6", fontSize: 40 }} />
          </IconButton>
          <IconButton>
            <Facebook sx={{ color: "#9AA7B6", fontSize: 40 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
