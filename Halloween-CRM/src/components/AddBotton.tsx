import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddBotton: React.FC = () => {
  return (
    <Button variant="contained" color="primary" startIcon={<AddIcon />}>
      Nuevo Colaborador
    </Button>
  );
};
export default AddBotton;
