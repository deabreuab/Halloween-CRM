import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
interface AddButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}
const AddButton: React.FC<AddButtonProps> = ({
  label,
  icon = <AddIcon />,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={icon}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
export default AddButton;
