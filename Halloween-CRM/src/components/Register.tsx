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
import { useState,ChangeEvent, FormEvent} from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://halloween-crm-qjpe.vercel.app/home/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuario registrado con éxito");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          role: "",
          password: "",
        });

        navigate("/login");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error registrando el usuario:", error);
    }
  };
  return (
    <Box
      component="main"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#49545D",
        clipPath: "polygon(8% 5%, 100% 0%, 74% 100%, 14% 88%)",
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
        onSubmit={handleSubmit}
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
          value={formData.name}
          name="name"
          onChange={handleChange}
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
          value={formData.phone}
          name="phone"
          onChange={handleChange}
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
          label="Correo Electrónico"
          variant="filled"
          fullWidth
          value={formData.email}
          name="email"
          onChange={handleChange}
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
            value={formData.company}
            name="company"
            onChange={handleChange}
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
            value={formData.role}
            name="role"
            onChange={handleChange}
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
            <MenuItem value="admin">Administrador</MenuItem>
            <MenuItem value="collaborator">Colaborador</MenuItem>
          </TextField>
        </Box>

        <TextField
          label="Contraseña"
          variant="filled"
          type="password"
          name="password"
          fullWidth
          value={formData.password}
          onChange={handleChange}
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
          type="submit"
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
