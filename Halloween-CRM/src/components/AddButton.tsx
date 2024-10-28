import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
interface AddButtonProps {
  label: string;
  icon?: React.ReactNode;
}
const AddButton: React.FC<AddButtonProps> = ({ label, icon = <AddIcon /> }) => {
  return (
    <Button variant="contained" color="primary" startIcon={icon}>
      {label}
    </Button>
  );
};
export default AddButton;
