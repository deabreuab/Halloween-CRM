import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useState, FormEvent } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/home/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log("data", data);
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);

        if (data.user.role === "admin" || data.user.role === "collaborator") {
          window.location.href = "/panel";
        }
      } else {
        setError(data.message || "Error al iniciar sesión.");
      }
    } catch (error) {
      setError("Error de conexión.");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to the registration page
  };

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
        Iniciar Sesión
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: 2, color: "white" }}
      >
        ¿No tienes una cuenta?
        <Typography
          component="span"
          sx={{
            marginLeft:0.5,
            textDecoration: "underline",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleRegisterClick}
        >
          Registrate
        </Typography>
      </Typography>
      <Box
        component="form"
        onSubmit={handleLogin}
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
          id="email"
          label="Correo Electrónico"
          variant="filled"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": { color: "#9AA7B6" },
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
          id="password"
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": { color: "#9AA7B6" },
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                  sx={{ color: "white" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#9AA7B6",
            "&:hover": { backgroundColor: "#7B8E99" },
          }}
        >
          Iniciar Sesión
        </Button>
      </Box>
    </Box>
  );
};
